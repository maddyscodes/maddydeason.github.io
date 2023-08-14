<script lang="ts">
  import { currentYear } from "$lib/plugins";
  import Socials from "./socials.svelte"
</script>

<footer class="footer">
  <p class="footer_copyright">&copy;{currentYear} Mana Sugiyoshi</p>
  <Socials />
</footer>

<style lang="scss">
.footer {
  padding: 1rem 0;

  &_copyright {
    margin: 0;
  }
}
</style>