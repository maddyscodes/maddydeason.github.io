<script lang="ts">
  import socials from "$lib/socialData";
</script>

<ul class="socials">
  {#each socials as social}
    <li class="socials_item">
      <a class={`socials_link ${social.name}`} href={social.url} aria-label={`my ${social.name}`}></a>
    </li>
  {/each}
</ul>

<style lang="scss">
.socials {
  display: flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 0;
  padding: 0;
  /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
  font-family: icomoon !important;
  list-style: none;

  &_link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.7em;
    height: 1.7em;
    transition: .5s ease;
    border-radius: 50%;
    background-color: var(--color-background);
    color: var(--color-black);
    font-size: 1.5em;
    line-height: 1;
    text-decoration: none;

    &:hover {
      transform: scale(.9,.9)
    }
  }

  .behance::before {
    content: "\eaa8";
  }

  .github::before {
    content: "\eab0";
  }

  .linkedin::before {
    content: "\eaca";
  }

  .codepen::before {
    content: "\eae8";
  }

  .twitter::before {
    content: "\ea96";
  }
}
</style>