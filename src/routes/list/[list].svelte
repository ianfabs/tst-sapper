<script context="module">
	import { listsStore } from "../../stores";
	export async function preload(page, session) {
	  const { list } = page.params;

	  return { list: listsStore.get(list) };
	}
</script>

<script>
  import List from "../../components/List.svelte";
  import { onMount } from "svelte";
  const { log } = console;

  export let list;

  onMount(() => {
    console.log(list);
  })

  let oops = false;

  let uid = 1;

  /* let todos = [
    { id: uid++, done: false, label: "one" },
    { id: uid++, done: false, label: "two" },
    { id: uid++, done: false, label: "three" },
    { id: uid++, done: false, label: "four" },
    { id: uid++, done: false, label: "five" }
  ]; */

  let newTodoLabel = "";

  const add = event => {
    if (newTodoLabel != "") {
      const todo = {
        id: uid++,
        done: false,
        label: newTodoLabel
      };
      list.add(todo);
      newTodoLabel = "";
    } else {
      /**
       * @type {HTMLElement}
       */
      let buttonNode = event.currentTarget;
      /**
       * @type {HTMLElement}
       */
      let inputNode = buttonNode.parentElement.querySelector("input");

      oops = true;
      setTimeout(() => {
        oops = false;
      }, 2500);
    }
  };
</script>

<style lang="scss">
  @use "sass:map";
  @import "../../scss/theme.scss";

  main {
    font-size: 20px;
  }

  $dangerColor: $red;
  $trans: (
    "duration": 200ms,
    "timing": ease-in-out
  );

  div.footer {
    padding: 1vmin;
    position: fixed;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: 19fr 1fr;

    & .add-btn {
      background: $teal;
      border: 4px solid $teal;
      border-radius: 4px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      outline: none;
      cursor: pointer;
      & .icon {
        width: 3.25em;
        stroke: $black;
      }

      transition-property: background, border-color;
      transition-duration: map.get($trans, "duration");
      transition-timing-function: map.get($trans, "timing");
      &.shake {
        background: $dangerColor;
        border-color: $dangerColor;
      }
    }
    & input {
      padding: 1vmin 2vmin;
      margin: 0;
      font-size: 1.2em;
      border-radius: 4px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border: 4px solid $teal;
      color: $teal;
      background: transparent;
      &:focus {
        outline: none;
      }

      transition-property: color, border-color;
      transition-duration: map.get($trans, "duration");
      transition-timing-function: map.get($trans, "timing");
      &.shake {
        color: $dangerColor;
        border-color: $dangerColor;
      }
    }
  }

  // Error occurred transition
  .shake {
    animation: shake 800ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>

<main>
  <List bind:todos={list} />
</main>

<div class="footer">
  <input
    type="text"
    bind:value={newTodoLabel}
    placeholder="What do you need to do?"
    on:keydown={(event) => event.key === 'Enter' && add(event.target)}
    class:shake={oops} />
  <button class="add-btn" on:click={add} class:shake={oops}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="icon">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </button>
</div>
