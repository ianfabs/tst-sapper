<script lang="ts">
  // @ts-check

  import { goto } from "@sapper/app";
  import { onMount } from "svelte";

  export let reverse: boolean = false;
  export let back: string = "Go Back";
  export let title: string = "Page Title";

  const go_back = () => window.history.back();
</script>

<style lang="scss">
  @import "../scss/theme.scss";
  $dir: row;
  nav {
    background: $black;
    display: flex;
    flex-direction: $dir;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    margin-bottom: 2vmin;
    &.reverse {
      $dir: row-reverse !global;
    }
  }

  .back {
    display: inline-flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .page-title {
    align-self: stretch;
  }

  .extras {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
</style>

<nav class:reverse>
  <div class="back">
    <button class="btn" on:click={go_back}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="ghostwhite">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    </button>
    <slot name="back">
      <h3>{back}</h3>
    </slot>
  </div>

  <div class="page-title">
    <slot name="pageTitle">
      <h1>{title}</h1>
    </slot>
  </div>

  <div class="extras">
    <slot name="extras" />
  </div>
</nav>
