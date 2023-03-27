<script lang="ts">
  import { page } from '$app/stores';
  let query = $page.url.searchParams.get('q');

  function search() {
    // Nothing
  }
</script>

<header>
  <h1>ChatGPT search engine</h1>
</header>

<main>
  <form on:submit|preventDefault={search}>
    <input type="text" bind:value={query}>
  </form>

  <section>
    <ol>
      <li>Visit chrome://settings/searchEngines</li>
      <li>If you see "ChatGPT search engine" under "Inactive shortcuts", activate it.</li>
      <li>Then under "Site search", change the shortcut of "ChatGPT search engine" to something short, like `gpt`</li>
      <li>If not, you can also add it manually, with URL of `https://chatgpt-search-engine.vercel.app/?q=%s`</li>
      <li>Now you can use ChatGPT directly in the search bar by typing "gpt", hit Tab key, followed by your question</li>
      <li>You can also go all the way, to make it the default search engine.</li>
    </ol>
  </section>
</main>

<footer>
  <p>Developed by <a href="https://liyangguang.com" target="_blank">Yangguang Li</a>.</p>
</footer>

<style lang="scss">
main {
  padding: 2em;
}
</style>
