<script lang="ts">
    import { theme } from '$lib/stores'

    const toggleTheme = () => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        return $theme = $theme === 'system' && prefersDark || $theme === 'dark' ? 'light' : 'dark'
    }
</script>

<button on:click={toggleTheme}>{$theme}</button>
