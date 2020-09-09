<script>
  import { createEventDispatcher } from "svelte";

  import Checkbox from "./Checkbox.svelte";

  export let task;

  //==================================================

  const dispatch = createEventDispatcher();

  const onChange = event => {
    dispatch("change", task);
  };

  const onRemove = event => {
    dispatch("remove", task);
  };
</script>

<style type="text/scss">
  @import "../scss/theme.scss";
  $fg: $teal;
  $bg: darken($black, 4%);
  $borderColor: $black;
  span.task {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    color: $fg;
    background: $bg;
    padding: 2vmin 3vmin;
    margin: 2px 4px;
    font-size: 1.2em;
    border-radius: 3px;
    border: 2px solid $borderColor;
    transition: color 200ms, border 200ms, background 200ms;
    &.done {
      color: desaturate($fg, 40%);
      background: lighten($bg, 2%);
      border: 2px dashed $borderColor;
    }
  }

  span.task.done > span.label {
    text-decoration: line-through;
  }

  span span.label {
    font-size: 1.25em;
    margin-left: 2%;
    letter-spacing: 0.05em;
    width: 100%;
  }

  .ibtn.remove {
    color: $fg;
    border: none;
    padding: 1px;
    cursor: pointer;
    background: transparent;
    outline: none;
    width: 2.75em;
    height: 2.75em;
    & .icon {
      stroke: transparent;
    }
    &:hover .icon {
      stroke: $black;
    }
  }

  .grab {
    display: none;
  }
</style>

<span class="task" class:done={task.done}>
  <button class="ibtn grab">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
    </svg>
  </button>
  <Checkbox bind:value={task.done} on:check={onChange} />
  <span class="label"> {task.label} </span>
  <button class="ibtn remove" on:click={onRemove}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="icon">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</span>
