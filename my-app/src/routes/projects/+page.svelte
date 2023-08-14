<script lang="ts">
  import ProjectCard from "$lib/components/projectCard.svelte";
  import { projects } from "$lib/projectData";
</script>

<h1>Projects</h1>
{#each projects as project}
  <ProjectCard item={project} />
{/each}

<a href="https://www.linkedin.com/in/manasugiyoshi/">Visit my Linkedin for more information about my work</a>
