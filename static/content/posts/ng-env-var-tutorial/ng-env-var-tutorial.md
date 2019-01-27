---
slug: how-to-add-environment-variables-to-angular-app-on-run-time
title: How To Add Custom Run-time Environment Variables To An Angular App
date: 2018-01-05
author: Ahmed Mansour
keywords: Angular, Docker, Angular-cli, JavaScript, Optimizing, Runtime, build once run everywhere, Ahmed Mansour, Angular5, ng, Finland, Web Developer
description: A tutorial on how to add custom config files with environment dependent variables to an angular app built with angular-cli on run time instead of build time.
---

**A tutorial on how to add custom config files with environment dependent variables to an angular app built with angular-cli on run time instead of build time**

> Build Once, Run Everywhere – docker

It has become rather a standard nowadays to follow this principle in most software development projects, especially the ones that use tools like docker to do container development.

## Problem

You would like to have your angular app to be built only once and based on the environment it is running in, different environment variables are shipped with the code.

At the time of writing this post, angular-cli out of the box did not offer the possibility to allow environment variables to be added on build time. Therefore a custom way needs to be added.

## Solution

The solution in a nutshell

- Create a directory called config in the root of your ng app.
- The config folder will contain all the environment files in json format.
- Create a config.json file in your src directory under assets
- Create an ng service to load the config file using http module and store its content in the app’s state.
- Have a script that copies the correct config file content into the config.json file inside the dist folder where your built app lives.
- Run the script every time you would like to run your application.

When you are done your directory should have similar structure.

```plaintext
your-ng-app
└───.vscode
└───configs
│   │   config.dev.json
│   │   config.test.json
│   │   config.prod.json
└───src
│   └───app
│   │   └───core
│   │   │   └───config
│   │   │   │   └───config.service.ts
│   │   │   │   └───config.model.ts
│   │   │   │   └───config.service.spec.ts
│   │   │   │   └───config.reducer.ts
│   └───assets
│       │   config.json
│       │   ...
│   └───environments
│       │   environment.ts
│   .angular-cli.json
│   Dockerfile
│   static-server.js
│   ...
```

### Step 1:

First, let’s create the configs directory, this should be in the root of your angular app.

Inside the directory you will need to place a file per environment. In the directory tree above we have three different JSON files for dev, test & prod environments.

However, this is just an example and the number of files will vary depending on how many environments you need in your case.

An example of one of the JSON files:

```json
{
  "BaseApi": "www.example.com",
  "Client": "example",
  "ClientPass": "test"
}
```

Next we need to create another **config.json** file inside our src’s assets that will include the environment variables you need to run locally. Also it is necessary to do that so the **config.json** file will be included when you build your application.

**Make sure that all the config files have the exact same fields!**

### Step 2:

Assuming we won’t need the build-time variables anymore, let’s **remove all extra angular-cli’s environments files** and keep only **one environment** file with only one flag.

Typically these files are stored inside a folder called **environments** inside the **src** directory.

Since we will be creating only one build for all our environments we need to ensure that our build is optimized for production.

You should end up with one file named environment.ts similar to that one:

```ts
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: true
};
```

### Step 3:

Now we need to update the **.angular-cli.json** file to ensure that all different environments are using the same environment file, so make sure your environments field looks something like that…

```json
{
  "environments": {
    "dev": "environments/environment.ts",
    "prod": "environments/environment.ts"
  }
}
```

### Step 4:

Now we need to put this config.json file in action. Therefore, we need to create a simple service.

This service will have two main purposes:

- Load the config data & store it in our app’s state
- Read the current config data from our app’s state

Here is an example of how this may look like

```ts
/**
 * @desc ConfigService will be used to deal with loading and saving config files that is needed to init the app
 */

import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ConfigService {
  // data;
  private configs: any;

  constructor(private http: Http) {}

  /**
   * @desc load Fn loads the config file form the assets and save it to local storage.
   *       Important: It should return a Promise.
   */
  public load(): Promise<any> {
    this.configs = null;

    return this.http
      .get("assets/config.json")
      .map(res => res.json())
      .toPromise()
      .then(config => {
        // your configs are here in your app's state for instance in ngrx store's state.
      })
      .catch((err: any) => Promise.resolve());
  }

  get configData(): any {
    return this.configs;
  }
}
```

### Step 5:

Now the final step is to get our file to be added dynamically on run-time to the dist folder using our script before the files are being served.

For demo purposes let’s have a simple static express server that serves the static files.

```js
var express = require("express");
var path = require("path");
var fs = require("fs");

const port = 80;
const app = express();

// Defines current env, default is production.
const environment = process.env.ENV || "prod";

console.log("current env is:", environment);

let envConfigFile;

if (fs.existsSync(`./configs/config.${environment}.json`)) {
  envConfigFile = fs.readFileSync(
    `./configs/config.${environment}.json`,
    "utf8"
  );
} else {
  // No file was found for the specified env, therefore prod configs are read.
  envConfigFile = fs.readFileSync("./configs/config.prod.json", "utf8");
}

const targetPath = `./dist/assets/config.json`; // config file to be overwritten.

fs.writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    console.log(err);
  }
  console.log(`Output generated at ${targetPath}`);
});

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist")));

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, function() {
  console.log("App running on port:" + port);
});
```

And that is it, now you should be able to add environment variables on run-time.

### A couple of things worth mentioning:

This solution is **not intended** to store any environment variables that are meant to be kept a **secret** and not included in version control. This is more for the information that are public anyway but change per environment such as backend’s different endpoints that vary per environment.

There is some room for improvement of course, for instance we could have a generic template and write a script that populate the other JSON files to avoid breaking the DRY principle.

Also if you found this helpful, please spread the word and share the post!

Cheers!
