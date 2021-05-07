<script>
  import { fade, fly } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function remove() {
    dispatch("remove", { id });
  }

  function toggleStatus() {
    let newStatus = !complete;

    dispatch("toggle", { id, newStatus });
  }

  export let id;
  export let text;
  export let complete;
</script>

<section in:fly={{ x: 900, duration: 300 }}>
  <span class:complete>{text}</span>

  <div class="flex-1" />

  {#if !complete}
    <button on:click={toggleStatus} title="Mark as Complete">✔️</button>
  {:else}
    <button on:click={toggleStatus} title="Mark as Incomplete">❌</button>
  {/if}

  <button on:click={remove} title="Remove">🗑</button>
</section>

<style>
  section {
    background-color: white;
    padding: 1em;
    border-radius: 0.5em;
    margin-bottom: 0.5em;
    display: flex;
    align-items: center;
  }

  span {
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  button:hover {
    opacity: 0.8;
  }

  .complete {
    text-decoration: line-through;
    color: green;
  }
</style>
