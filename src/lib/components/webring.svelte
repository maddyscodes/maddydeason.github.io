<nav class="webring" aria-labelledby="a11y-webring-club">
  <h2 class="webring_heading" id="a11y-webring-club">a11y-webring.club</h2>
  <p class="webring_text">This site is a member of the <a class="webring_link" rel="external" href="https://a11y-webring.club/">a11y-webring.club</a></p>
  <ul class="webring_list">
    <li class="webring_listItem"><a class="webring_link" rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/prev">Previous website</a></li>
    <li class="webring_listItem"><a  class="webring_link" rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/random">Random website</a></li>
    <li class="webring_listItem"><a  class="webring_link" rel="external" referrerpolicy="strict-origin" href="https://a11y-webring.club/next">Next website</a></li>
  </ul>
</nav>

<style lang="scss">
  .webring {
    display: inline-block;
    margin: 1.5rem 0 1rem;
    padding: 1em;
    border: 1px dashed var(--color-strongest);
    background-color: var(--color-lightest);
    color: var(--color-strongest);
    font-size: 12px;

    &_heading {
      margin: 0 0 .5em;
      font-size: 14px;
    }
    
    &_text {
      margin: 0 0 .5em;
    }

    &_list {
      display: flex;
      margin: 0;
      padding: 0;

      &Item {
        display: block;
        padding-right: 1em;

        &:last-child {
          padding: 0;
        }
      }
    }
  }
</style>