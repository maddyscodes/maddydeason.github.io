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

<style global lang="scss">
@font-face {
  font-family: "Roboto Slab";
  src: url("/fonts/RobotoSlab-VariableFont_wght.ttf");
}

@font-face {
  font-family: "Source Sans";
  src: url("/fonts/SourceSans3-VariableFont_wght.ttf");
}

@font-face {
  font-family: icomoon;
  font-style: normal;
  font-weight: 400;
  src:  url('fonts/icomoon.eot?68kyr8');
  src:  url('fonts/icomoon.eot?68kyr8#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?68kyr8') format('truetype'),
    url('fonts/icomoon.woff?68kyr8') format('woff'),
    url('fonts/icomoon.svg?68kyr8#icomoon') format('svg');
  font-display: block;
}

:root {
  --color-purple: hsl(317deg 25% 75%);
  --color-yellow: hsl(38deg 74% 56%);
  --color-black: hsl(40deg 4% 14%);
}
  
a {
  color: var(--color-link);

  &:link {
    color: var(--color-link);
  }

  &:active, &:hover {
    text-decoration: none;
  }

  &:visited {
    color: var(--color-linkvisited);
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto Slab', serif;
  line-height: 1;
}

.main, .footer {
  background-color: var(--color-lightest);
  color: var(--color-strongest);
  font: 400 1.2em/1.5 'Source Sans', sans-serif;
}

.main {
  margin-top: 4rem;
  padding: 0 1rem;
}
</style>
