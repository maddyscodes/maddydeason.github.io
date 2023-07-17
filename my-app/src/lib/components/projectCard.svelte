<script lang="ts">
    export let item: any;
</script>

<h2>{item.title}</h2>
<span>{item.status}</span>
<img src={item.image} alt={item.imageAlt}>
<p>{item.description}</p>
<ul>
    {#each item.skills as skill}
        <li>{skill}</li>
    {/each}
</ul>
