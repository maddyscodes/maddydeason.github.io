<script lang="ts">
  import ProjectCard from "$lib/components/projectCard.svelte";
  import Socials from "$lib/components/socials.svelte"
  import { yearsOfExperience } from "$lib/plugins";
  import {featuredProjects} from "$lib/projectData";
</script>

<section id="intro" class="page_section">
  <img class="page_image" src="$lib/images/logo_maddy.svg" alt="">
  <h1 class="page_heading title">maddy<span class="japanese">・杉吉真奈</span></h1>
  <h2 class="page_subheading">bilingual UI/UX engineer at Rakuten</h2>
  <p class="page_body">I combine my creative, technical, and communication skills to build a better future for the web and the world.</p>
  <Socials />
</section>

<section id="experience" class="page_section">
  <h2 class="page_heading">Experience</h2>
  <p class="page_body">As I child, I used to build geocities fan sites for my favorite Sailor Moon characters. So, I like to say that I have over 25 years of experience on the internet.</p>
  <p class="page_body">Jokes aside, as a full-time employee, I have {yearsOfExperience}+ years of experience in frontend development, and a passion for web accessibility and high-quality UI/UX.</p>
  <a class="page_link" href="/assets/resume_ManaSugiyoshi-en.pdf">Download my resume (PDF)</a>
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
@import url("$lib/styles/page.scss");
  
.page {
  &_image {
    display: block;
    width: 350px;
    margin: 0;
    padding-top: 3rem;
  }
  
  &_heading {
    &.title {
      margin-top: -1px;
      background-color: var(--color-purple);
    }

    .japanese {
      font-family: "M PLUS 1p", sans-serif;
    }
  }
}
</style>
