<script>
  import { newList } from "../../stores";

  let list_name = "";
</script>

<style type="text/scss">
  @import "../../scss/theme.scss";

  $fg: $teal;

  h1 {
    color: $fg;
  }

  h2 {
    color: darken($fg, 10%);
  }

  .group {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: stretch;
    height: max-content;
    width: clamp(60%, 800px, 100%);
  }
  .group > #list_name {
    padding: max(8px, 1vmin);
    border: 4px solid $fg;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    color: $fg;
    background: transparent;
    font-size: clamp(1.125em, 24px, 1.25em);
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  .group > #save {
    font-size: clamp(1.125em, 24px, 1.25em);
    font-weight: bold;
    color: $black;
    background-color: $fg;
    padding: 1vmin max(16px, 1vmax);
    border: 4px solid $fg;
    border-left: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
  }
</style>

<h1>new list</h1>

<label for="list_name">
  <h2>the name of your list:</h2>
</label>
<div class="group">
  <input type="text" bind:value={list_name} name="list_name" id="list_name" placeholder="eggs i like"/>
  <input type="button" on:click={() => {}} id="save" value="save"/>
</div>