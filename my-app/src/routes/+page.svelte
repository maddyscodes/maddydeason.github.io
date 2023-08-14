<script lang="ts">
  import ProjectCard from "$lib/components/projectCard.svelte";
  import Socials from "$lib/components/socials.svelte"
  import { yearsOfExperience } from "$lib/plugins";
  import {featuredProjects} from "../lib/projectData";
</script>

<section class="intro">
  <img class="intro_image" src="./images/logo_maddy.svg" alt="">
  <h1 class="intro_heading">maddy</h1>
  <h2 class="intro_subheading">bilingual UI/UX engineer at Rakuten</h2>
  <p class="intro_body">I combine my creative, technical, and communication skills to build a better future for the web and the world.</p>
  <Socials />
</section>

<section id="experience">
  <h2>Experience</h2>
  <p>As I child, I used to build geocities fan sites for my favorite Sailor Moon characters. So, I like to say that I have over 25 years of experience on the internet.</p>
  <p>Jokes aside, as a full-time employee, I have {yearsOfExperience}+ years of experience in frontend development and a passion for web accessibility and high-quality UI/UX.</p>
  <a href="./images/resume_ManaSugiyoshi-en.pdf">Download my resume (PDF)</a>
  <a href="https://www.linkedin.com/in/manasugiyoshi/">Visit my Linkedin</a>
</section>

<section>
  <h2>Featured projects</h2>
  {#each featuredProjects as project }
    <ProjectCard item={project} />
  {/each}
  <a href="/projects">More projects</a>
</section>

<style lang="scss">
.intro {
  padding-bottom: 2rem;

  &_image {
    display: block;
    width: 80vw;
    margin: 0 auto;
  }

  &_heading {
    margin: 0 0 0.2em;
  }

  &_subheading {
    max-width: fit-content;
    margin: 0 0 0 -1rem;
    padding: 3px 6px 4px 1rem;
    background-color: var(--color-primary);
    color: var(--color-black);
    font-size: 1em;
  }
}
</style>
