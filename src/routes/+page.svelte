<script lang="ts">
  import {onMount} from 'svelte';
  let query = '';

  onMount(() => {
    query = new URLSearchParams(window.location.search).get('q') || '';
  })

  function search() {
    console.log('searching', query);
    query = '';
  }
</script>

<header>
  <h1>ChatGPT search engine</h1>
</header>

<main>
  <form on:submit|preventDefault={search}>
    <input type="text" bind:value={query}>
  </form>
</main>

<footer>
  <p>Developed by <a href="https://liyangguang.com" target="_blank">Yangguang Li</a>.</p>
</footer>

<style lang="scss">
main {
  padding: 2em;
}
</style>
