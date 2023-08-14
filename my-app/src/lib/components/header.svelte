<script>
  import ThemeSwitch from "./themeSwitch.svelte";
</script>

<header class="header">
  <a class="header_logo" href="/"><img class="header_logoImage" src="./images/logo_maddy.svg" alt="home"></a>
  <nav class="header_nav">
    <ul class="header_list">
      <li class="header_listItem"><a class="header_listLink" href="/#experience">EXPERIENCE</a></li>
      <li class="header_listItem"><a class="header_listLink" href="/projects">PROJECTS</a></li>
    </ul>
  </nav>
  <div class="header_switch">
    <ThemeSwitch />
    <!-- LangSwitch coming soon-->
  </div>
</header>

<style lang="scss">
.header {
  display: flex;
  position: fixed;
  z-index: 100;
  top: 0;
  align-items: center;
  width: 100vw;
  height: 4rem;
  margin: 0 auto;
  background-color: var(--color-lightest);
  color: var(--color-strongest);
  font: 700 1em/1 'Roboto Slab', serif;

  &::after {
    content: "";
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: var(--color-primary);
  }

  &_logo {
    display: block;
    width: 3rem;
    margin: 0 1.2em 0 .5em;

    &Image {
      display: block;
    }
  }

  &_list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 1.2em;

    &Link, &Link:visited {
      color: var(--color-strongest);
      font-weight: 600;
      text-decoration: none;
    }
  }

  &_switch {
    margin-right: 1em;
    margin-left: auto;
  }
}
</style>