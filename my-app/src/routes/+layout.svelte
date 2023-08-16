<script>
  import { theme } from '$lib/stores'
  import Header from "$lib/components/header.svelte";
  import 'normalize.css'
  import Footer from '$lib/components/footer.svelte'
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme}/>
  <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Header />

<main class="main">
  <slot></slot>
</main>

<Footer />

<style lang="scss">
@import url("$lib/styles/global.scss");

.main {
  margin-top: 4rem;
  padding: 0 1.5rem;
  font: 400 1.2em/1.5 'Source Sans', sans-serif;

  @media only screen and (width >= 768px) {
    padding: 0 4rem;
  }
}
</style>
