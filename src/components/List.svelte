<script>
  import { createEventDispatcher } from "svelte";

  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { identity } from "svelte/internal";
  import { crossfade } from "svelte/transition";
  import Task from "./Task.svelte";

  export let todos = [];

  const dispatch = createEventDispatcher();

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 400,
        easing: quintOut,
        css: t => `
      					transform: ${transform} scale(${t});
      					opacity: ${t}
      				`
      };
    }
  });

  $: tasks = todos
    .sort((a, b) => (a.id === b.id ? 0 : a.id < b.id ? -1 : 1))
    .sort((a, b) => (a.done === b.done ? 0 : b.done ? -1 : 1));

  const remove = id => {
    todos = todos.filter(t => t.id != id);
  };
</script>

<style>
  div#list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
</style>

<div id="list">
  {#each tasks as task (task.id)}
    <div
      style="width: 100%;"
      in:receive={{ key: task.id }}
      out:send|local={{ key: task.id }}
      animate:flip={{ duration: 250 }}>
      <Task bind:task on:remove={(ev) => remove(ev.detail.id)} />
    </div>
  {/each}
</div>
