import NotFound from "/Users/ahmedmansour/Desktop/Projects/blog/ahmed-mansour-website2/node_modules/gridsome/app/pages/404.vue"

export const routes = [
  {
    name: "podcast",
    path: "/podcast",
    component: () => import(/* webpackChunkName: "component--podcast" */ "~/pages/Podcast.vue")
  },
  {
    name: "newsletter",
    path: "/newsletter",
    component: () => import(/* webpackChunkName: "component--newsletter" */ "~/pages/Newsletter.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "component--home" */ "~/pages/Index.vue")
  },
  {
    name: "courses",
    path: "/courses",
    component: () => import(/* webpackChunkName: "component--courses" */ "~/pages/Courses.vue")
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import(/* webpackChunkName: "component--contact" */ "~/pages/Contact.vue")
  },
  {
    name: "about",
    path: "/about",
    component: () => import(/* webpackChunkName: "component--about" */ "~/pages/About.vue"),
    meta: { data: true }
  },
  {
    name: "articles",
    path: "/articles",
    component: () => import(/* webpackChunkName: "component--articles" */ "~/pages/Articles.vue"),
    meta: { data: true }
  },
  {
    name: "post",
    path: "/:slug",
    component: () => import(/* webpackChunkName: "component--post" */ "~/templates/Post.vue"),
    meta: { data: true }
  }
]

export { NotFound }

