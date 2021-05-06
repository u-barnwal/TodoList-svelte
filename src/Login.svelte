<script>
  import Profile from "./Profile.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";
  import Todos from "./Todos.svelte";

  let user = authState(auth);

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  {#if $user}
    <Profile {...$user} />
    <button on:click={() => auth.signOut()}>Sign out</button>
    <hr />
    <Todos {...$user} />
  {:else}
    <button on:click={login}>Signin with Google</button>
  {/if}
</section>

<style>
  section {
    /* background: rgb(235, 235, 235); */
    padding: 20px;
  }
</style>
