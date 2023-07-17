<script>
    import {featuredProjects} from "../lib/projectData";
</script>

<section>
    <h1>maddy (mana sugiyoshi)</h1>
    <h2>bilingual UI/UX engineer at Rakuten</h2>
    <p>I combine my creative, technical, and communication skills to build a better future for the web and the world.</p>
</section>
<section id="experience">
    <h2>Experience</h2>
    <p>As I child, I used to build geocities fan sites for my favorite Sailor Moon charaters. So, I like to say that I have over 25 years of experience on the interet.</p>
    <p>Jokes aside, as a full-time employee, I have 8+ years of experience in frontend development and a passion for web accesibility and high-quality UI/UX.</p>
    <a href="./ManaSugiyoshi_en.pdf">Download my resume (PDF)</a>
    <a href="https://www.linkedin.com/in/manasugiyoshi/">Visit my Linkedin</a>
</section>
<section id="projects">      
    <h2>Featured projects</h2>
    {#each featuredProjects as project }
        <h2>{project.title}</h2>
        <span>{project.status}</span>
        <img src={project.image} alt={project.imageAlt}>
        <p>{project.description}</p>
        <ul>
            {#each project.skills as skill}
                <li>{skill}</li>
            {/each}
        </ul>
    {/each}
    <a href="/projects">More projects</a>
</section>
