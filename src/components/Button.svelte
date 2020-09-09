<script>
	export let label;

	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	const click = event => {
	  dispatch("click", event);
	};
</script>

<style>
	button {
	  color: white;
	  border: none;
	  padding: 8px 12px;
	  border-radius: 2px;
	  cursor: pointer;
	  background: var(--blue);
	}
</style>

<button on:click={click}>
  {label}
</button>