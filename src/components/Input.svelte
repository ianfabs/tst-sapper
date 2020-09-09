<script>
  import Button from "./Button.svelte";

  let task = "";
</script>

<style>
  div {
    font-family: sans-serif;
  }
</style>

<div>
  <input type="text" bind:value={task} placeholder="What do you need to do?" />
</div>
