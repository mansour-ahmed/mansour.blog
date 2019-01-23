<template>
  <Layout>
    <div class="text-xs-center" v-html="$page.articles.content"></div>
    <v-list pa-2 v-for="(year, index) in  getYears(postsPerYear)" :key="index">
      <h3 class="light year">{{ year }}</h3>
      <v-layout
        py-2
        align-center
        v-for="post in postsPerYear[year]"
        :key="post.id"
        @click="onClick(post)"
      >
        <v-flex xs4 md2>
          <h4 class="semi-bold">{{ formatPostDate(post.date) }}.</h4>
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
  articles: articles(path: "/static/content/articles") {
    content
    title
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
    onClick(post) {
      this.$router.push({ path: post.node.path });
    },
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
  mounted() {
    this.postsPerYear = this.groupPostsPerYear();
  }
};
</script>

<style lang="scss">
.year {
  padding: 1.5rem 0;
}
</style>
