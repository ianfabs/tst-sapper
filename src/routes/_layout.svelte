<script>
  import Nav from "../components/Nav.svelte";
  import PageHeader from "../components/PageHeader.svelte";
  import { onMount } from "svelte";

  export let segment;
  let title = "";

  onMount(() => {
    title = document.head.title || "List";
  });
</script>

<style>
  main {
    padding: 1vmax 2vmax;
  }
</style>

<svelte:head>
  <style lang="scss" global>
    @import "../scss/global.scss";
  </style>
</svelte:head>
{#if segment != undefined && segment != '/list' && segment.includes('/list')}
  <PageHeader bind:title />
{:else}
  <Nav {segment} />
{/if}

<main>
  <slot />
</main>
