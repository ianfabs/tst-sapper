<script lang="ts">
  import { listsStore } from "../../stores";

  listsStore;
</script>

<style lang="scss">
  @import "../../scss/theme.scss";

  main {
    font-size: 20px;
  }
</style>

<main>
  {#each listsStore as {key, list}}
    <a href={`/list/${key}`}>{key}</a>
  {/each}
</main>
