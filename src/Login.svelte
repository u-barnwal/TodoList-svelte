<script>
  import Profile from "./Profile.svelte";

  import { auth, googleProvider } from "./firebase";
  import { authState } from "rxfire/auth";

  let user;

  // const unsubscribe = authState(auth).subscribe((u) => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  {#if $user}
    <Profile {...$user} />
    <button on:click={() => auth.signOut()}>Sign out</button>
    <hr />
    <!-- <Todos uid={$user.id} /> -->
  {:else}
    <button on:click={login}>Signin with Google</button>
  {/if}
</section>
