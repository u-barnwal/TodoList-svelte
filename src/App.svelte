<script>
  import Navbar from "./Navbar.svelte";
  import Todos from "./Todos.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user = authState(auth);

  function login() {
    auth.signInWithPopup(googleProvider);
  }

  function logout() {
    auth.signOut();
  }
</script>

<svelte:head>
  <title>Todo List</title>
</svelte:head>

<main>
  <Navbar {...$user} {login} {logout} />

  {#if $user}
    <Todos {...$user} />
  {/if}
</main>

<style>
  main {
    padding: 1em;
  }
</style>
