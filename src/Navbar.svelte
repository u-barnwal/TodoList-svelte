<script>
  export let user;
</script>

<nav>
  <img src="/favicon.png" alt="logo" />
  <div class="title">Todo List</div>

  <div class="flex-1" />

  <button><img src="/google.png" alt="google" /> Login</button>
</nav>

<style>
  nav {
    padding: 1em;
    background-color: white;
    margin: 0;
    margin-bottom: 1;
    border-radius: 0.5em;
    display: flex;
    align-items: center;
  }

  img {
    width: 2em;
    height: 2em;
  }

  .title {
    font-size: 1.5em;
    font-weight: bold;
    margin-left: 0.5em;
  }

  button {
    border: none;
    padding: 1em 2em;
    border-radius: 0.5em;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
    display: flex;
    align-items: center;
  }

  button img {
    width: 1em;
    height: 1em;
    margin-right: 0.8em;
  }

  button:hover {
    transform: scale(1.05);
  }
</style>
