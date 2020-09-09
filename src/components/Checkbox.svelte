<script>
  export let value = false;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const toggle = (event) => {
    value = !value;
    dispatch("check", { target: value });
  };
</script>

<style lang="scss">
  @import "../scss/theme.scss";
  $fg: $teal;
  .Checkbox {
    color: $fg;
    border: 2px solid $fg;
    padding: 1px;
    border-radius: 3px;
    cursor: pointer;
    background: transparent;
    outline: none;
    width: 1.75em;
    height: 1.75em;
    transition: color 200ms, border 200ms;
    &.checked {
      color: desaturate($fg, 40%);
      border: 2px solid desaturate($fg, 40%);
    }
  }

  .icon {
    stroke: transparent;
    transition: stroke 200ms;
    &.checked {
      stroke: desaturate($fg, 40%);
    }
  }
</style>

<button on:click={toggle} class="Checkbox" class:checked={value}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    class="icon"
    class:checked={value}>
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="6"
      d="M5 13l4 4L19 7" />
  </svg>
</button>
