<script>
    import ThemeSwitch from "./themeSwitch.svelte";

</script>
<header class="header">
    <a class="header_logo" href="/"><img class="header_logoImage" src="./maddy_logo.svg" alt="home"></a>
    <nav class="header_nav">
        <ul class="header_list">
            <li class="header_listItem"><a class="header_listLink" href="/#experience">experience</a></li>
            <li class="header_listItem"><a class="header_listLink" href="/projects">projects</a></li>
        </ul>
        <ThemeSwitch />
    </nav>
</header>

<style lang="scss">
    .header {
        height: 6rem;
        display: flex;
        position: fixed;
        width: 100vw;
        &_logo {
            width: 5rem;
        }
    }
</style>