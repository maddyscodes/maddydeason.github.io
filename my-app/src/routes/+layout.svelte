<script>
    import { theme } from '$lib/stores'
    import Header from "$lib/components/header.svelte";
    import { currentYear } from "$lib/plugins";
</script>

<svelte:head>
    <meta name="color-scheme" content={$theme === 'system' ? 'light dark' : $theme}/>
    <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Header />

<main class="main">
    <slot></slot>
</main>

<footer>
    <p>&copy;{currentYear} Mana Sugiyoshi</p>
</footer>
