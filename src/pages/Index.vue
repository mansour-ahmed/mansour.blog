<template>
  <Layout>
    <h1 class="text-xs-center">Hello, I'm Ahmed Mansour! 👋</h1>
    <p>first paragraph about me.</p>
    <p>second paragraph about me.</p>
    <p>Would you like to hear more?
      <g-link class="nav-link" to="/about">Read my stor</g-link>
    </p>

    <h3>Hear from me</h3>

    <p>I am maintaining a weekly short
      <g-link class="nav-link" to="/newletter">newsletter</g-link>
    </p>

    <p>Paragraph about the news letter</p>
    <p>Ready to join me?
      <g-link class="nav-link" to="/newletter">Join the newsletter over here</g-link>
    </p>
  </Layout>
</template>


<script>
export default {};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
