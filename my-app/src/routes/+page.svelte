<script lang="ts">
  import ProjectCard from "$lib/components/projectCard.svelte";
  import Socials from "$lib/components/socials.svelte"
  import { yearsOfExperience } from "$lib/plugins";
  import {featuredProjects} from "../lib/projectData";
</script>

<section id="intro" class="page_section">
  <img class="page_image" src="./images/logo_maddy.svg" alt="">
  <h1 class="page_heading title">maddy<span class="japanese">・杉吉真奈</span></h1>
  <h2 class="page_subheading">// bilingual UI/UX engineer at Rakuten</h2>
  <p class="page_body">I combine my creative, technical, and communication skills to build a better future for the web and the world.</p>
  <Socials />
</section>

<section id="experience" class="page_section">
  <h2 class="page_heading">Experience</h2>
  <p class="page_body">As I child, I used to build geocities fan sites for my favorite Sailor Moon characters. So, I like to say that I have over 25 years of experience on the internet.</p>
  <p class="page_body">Jokes aside, as a full-time employee, I have {yearsOfExperience}+ years of experience in frontend development, and a passion for web accessibility and high-quality UI/UX.</p>
  <a class="page_link" href="./images/resume_ManaSugiyoshi-en.pdf">Download my resume (PDF)</a>
  <a class="page_link" href="https://www.linkedin.com/in/manasugiyoshi/">Visit my Linkedin</a>
</section>

<section id="projects" class="page_section">
  <h2 class="page_heading">Featured projects</h2>
  {#each featuredProjects as project }
    <ProjectCard item={project} />
  {/each}
  <a class="page_link" href="/projects">More projects</a>
</section>

<style lang="scss">
.page {
  &_section {
    padding-bottom: 4rem;
    scroll-margin-top: 6rem;
  }

  &_heading {
    max-width: fit-content;
    margin: 0 0 1rem -1.5rem;
    padding: .2rem 1rem .3rem 1.5rem;
    background-color: var(--color-primary);
    color: var(--color-black);

    &.title {
      margin-top: -1px;
    }

    .japanese {
      font-family: "M PLUS 1p", sans-serif;
    }
  }

  &_subheading {
    margin: -.5rem 0 0;
    font-size: 1em;
    font-weight: 300;
  }

  &_image {
    display: block;
    width: 80vw;
    margin: 0 auto;
    padding-top: 3rem;
  }

  &_body {
    margin: 1.5em 0;
  }

  &_link {
    display: block;
  }
}
</style>
