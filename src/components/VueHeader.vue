<template>
  <header>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/intro">Intro</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "vue-header"
};
</script>

<style>
header ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

header ul li {
  display: inline;
}

header ul li a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  text-align: center;
  padding: 10px 20px;
}

header ul li a:hover {
  background-color: #3b7723;
}
</style>