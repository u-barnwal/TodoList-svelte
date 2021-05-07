<script>
  import TodoItem from "./TodoItem.svelte";
  import { db } from "./firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  export let uid;

  let text = "";

  const query = db
    .collection("todos")
    .where("uid", "==", uid)
    .orderBy("created", "desc");

  const todos = collectionData(query, "id").pipe(startWith([]));

  function add() {
    if (text) {
      db.collection("todos").add({
        uid,
        text,
        complete: false,
        created: Date.now(),
      });

      text = "";
    }
  }

  function updateStatus(event) {
    const { id, newStatus } = event.detail;
    db.collection("todos").doc(id).update({ complete: newStatus });
  }

  function removeItem(event) {
    const { id } = event.detail;
    db.collection("todos").doc(id).delete();
  }
</script>

<div>
  <input bind:value={text} placeholder="Your task..." />

  <button on:click={add} title="Add Task">➕</button>
</div>

{#each $todos as todo}
  <TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
{/each}

<style>
  div {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
    border: 2px solid black;
    border-radius: 0.5em;
    padding: 1em;
  }

  input {
    flex: 1;
    border: none;
    background-color: transparent;
    outline: none;
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
</style>
