<script>
  import { theme } from '$lib/stores'
  import Header from "$lib/components/header.svelte";
  import { currentYear } from "$lib/plugins";
  import 'normalize.css'
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme}/>
  <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Header />

<main class="main">
  <slot></slot>
</main>

<footer class="footer">
  <p class="footer_copyright">&copy;{currentYear} Mana Sugiyoshi</p>
</footer>

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
  --color-primary: hsl(317deg 25% 75%);
  --color-secondary: hsl(38deg 74% 56%);
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

.main, .footer {
  background-color: var(--color-lightest);
  color: var(--color-strongest);
  font: 400 1.2em/1.5 'Source Sans', sans-serif;
}

.main {
  margin-top: 4rem;
}

.footer {
  padding: 1rem 0;

  &_copyright {
    margin: 0;
  }
}
</style>
