<script>
  import { onMount } from "svelte";
  export let segment;

  onMount(() => {
    if (window) {
      console.dir(window.history.state);
    }
  });
</script>

<style lang="scss">
  @import "../scss/theme.scss";

  $fg: $teal;

  nav {
    border-bottom: 1px solid darken($fg, 20%);
    font-weight: 300;
    padding: 0 1em;
    margin-bottom: 2vmin;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    font-family: Arial, Helvetica, sans-serif;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: $fg;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    color: $fg;
  }
</style>

<nav>
  <ul>
    <li>
      <a
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">home</a>
    </li>
    <li>
      <a
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">about</a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">blog</a>
    </li>
    <li>
      <a
        aria-current={segment === 'list' ? 'list' : undefined}
        href="list">list</a>
    </li>
    <li>
      <a
        aria-current={segment === 'list/new' ? 'new list' : undefined}
        href="list/new">new list</a>
    </li>
  </ul>
</nav>
