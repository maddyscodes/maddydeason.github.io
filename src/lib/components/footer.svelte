<script lang="ts">
  import { currentYear } from "$lib/plugins";
  import Socials from "./socials.svelte"
</script>

<footer class="footer">
  <Socials --color-background="var(--color-white)" />
  <p class="footer_copyright">&copy;{currentYear} Mana Sugiyoshi</p>
</footer>

<style lang="scss">
.footer {
  padding: 1.5rem;
  background-color: var(--color-secondary);
  color: var(--color-black);
  font: 400 1em/1 'Source Sans', sans-serif;

  @media only screen and (width >=768px) {
    padding-left: 4rem;
  }

  &_copyright {
    margin: 1.5rem 0 0;
  }
}
</style>