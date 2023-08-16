<script lang="ts">
  import ProjectCard from "$lib/components/projectCard.svelte";
  import { projects } from "$lib/projectData";
</script>

<h1 class="page_heading">Projects</h1>

{#each projects as project}
  <ProjectCard item={project} />
{/each}

<p class="page_body">For more about my work:<a class="page_link" href="https://www.linkedin.com/in/manasugiyoshi/">Visit my Linkedin</a></p>


<style lang="scss">
.page {
  &_heading {
    margin-top: 6rem;
  }
}
</style>
