<script>
    import {projects} from "../../lib/projectData";
</script>

<h1>Projects</h1>
{#each projects as project}
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
