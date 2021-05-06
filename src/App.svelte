<script>
  import Login from "./Login.svelte";
  import Navbar from "./Navbar.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";
  import Todos from "./Todos.svelte";

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
  <Login />
</main>

<style>
  main {
    padding: 1em;
  }
</style>
