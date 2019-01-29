<template>
  <Layout>
    <div class="text-xs-center" v-html="$page.pageData.content"></div>
    <v-list pa-2 v-for="(year, index) in  getYears(postsPerYear)" :key="index">
      <h3 class="light year">{{ year }}</h3>
      <v-layout pb-4 align-center v-for="post in postsPerYear[year]" :key="post.id">
        <v-flex xs4 md2>
          <h4 class="semi-bold h4">{{ formatPostDate(post.date) }}.</h4>
        </v-flex>
        <v-flex xs8 md10>
          <g-link class="h4 light anchor-without-border" :to="'/' + post.slug">{{ post.title }}</g-link>
        </v-flex>
      </v-layout>
    </v-list>
  </Layout>
</template>

<page-query>
query Articles {
  pageData: pages(path: "/static/content/pages/home") {
    content
    title
    description
    keywords
  }
  allPost {
    totalCount
    edges {
      node {
        id
        title
        slug
        path
        date
      }
    }
  }
}
</page-query>

<script>
import { format, getYear } from "date-fns";

export default {
  data() {
    return {
      articleYears: [],
      postsPerYear: {}
    };
  },
  computed: {
    posts() {
      return this.$page.allPost.edges;
    },
    totalCount() {
      return this.$page.allPost.totalCount;
    }
  },
  methods: {
    formatPostDate(date) {
      return format(date, "DD MMM");
    },
    groupPostsPerYear() {
      const groupedPosts = {};
      this.$page.allPost.edges.map(postNode => {
        const post = postNode.node;
        const postYear = getYear(post.date);
        if (groupedPosts[postYear]) {
          groupedPosts[postYear].push(post);
        } else {
          groupedPosts[postYear] = [post];
        }
      });

      return groupedPosts;
    },
    getYears(postsPerYear) {
      const postsYears = Object.keys(postsPerYear);
      const sortedYears = postsYears.sort((a, b) => b - a);
      return sortedYears;
    }
  },
  metaInfo() {
    return {
      title: this.$page.pageData.title,
      link: [
        {
          key: "canonical",
          rel: "canonical",
          href: process.browser ? location.href : undefined
        }
      ],
      meta: [
        {
          key: "description",
          property: "description",
          content: this.$page.pageData.description
        },
        {
          key: "keywords",
          property: "keywords",
          content: this.$page.pageData.keywords
        },
        { property: "og:title", content: this.$page.pageData.title },
        {
          key: "og:description",
          property: "og:description",
          content: this.$page.pageData.description
        },
        {
          key: "og:type",
          property: "og:type",
          content: "article"
        },
        {
          key: "og:url",
          property: "og:url",
          content: process.browser ? location.href : undefined
        },
        {
          key: "twitter:text:title",
          property: "twitter:text:title",
          content: this.$page.pageData.title
        },
        {
          key: "twitter:card",
          property: "twitter:card",
          content: "summary"
        }
      ]
    };
  },
  mounted() {
    this.postsPerYear = this.groupPostsPerYear();
  }
};
</script>

<style lang="scss">
.year {
  padding-bottom: 1rem;
}

.h4 {
  margin-bottom: 0;
}
</style>
