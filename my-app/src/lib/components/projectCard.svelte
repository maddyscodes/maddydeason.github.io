<script lang="ts">
    export let item: any;
</script>

<img src={item.image} alt={item.imageAlt}>
<h2>{item.title}</h2>
<span>{item.status}</span>
<p>{item.description}</p>
<ul>
    {#each item.skills as skill}
        <li>{skill}</li>
    {/each}
</ul>
