<script lang="ts">
  import { theme } from '$lib/stores'

  const toggleTheme = () => {
    const isDark = $theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches || $theme === 'dark'

    return $theme = isDark ? 'light' : 'dark'
  }
</script>

<button on:click={toggleTheme} class="themeSwitch" aria-label="switch theme; currently {$theme}"></button>

<style lang="scss">
.themeSwitch {
  width: 3em;
  padding: 2px;
  border: 1px solid var(--color-strongest);
  border-radius: 1em;
  background-color: var(--color-primary);
  color: var(--color-strongest);
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: icomoon !important;
  font-size: 1.2em;
  cursor: pointer;

  &::before {
    content: var(--icon-theme);
    display: block;
    width: 1em;
    height: 1em;
    margin-left: var(--icon-margin);
    padding: 4px;
    transition: .5s ease;
    border-radius: 50%;
    background-color: var(--color-lightest);
    line-height: 1;
  }
}
</style>