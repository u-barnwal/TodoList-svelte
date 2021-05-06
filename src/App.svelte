<script>
  import Login from "./Login.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<svelte:head>
  <title>Todo List</title>
</svelte:head>

<main>
  <Navbar />
  <Login />
</main>

<style>
  main {
    padding: 1em;
  }
</style>
