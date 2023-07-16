<script>
    import projects from "../../lib/projectData";
</script>

<h1>Projects</h1>
{#each projects as project}
    <h2>{project.title}</h2>
    <span>{project.status}</span>
    <p>{project.description}</p>
    <ul>
        {#each project.technologies as tech}
            <li>{tech}</li>
        {/each}
    </ul>
{/each}
