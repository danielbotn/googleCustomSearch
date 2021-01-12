<script lang="ts">
  import TailwindCSS from './style/TailwindCSS.svelte';
  import Navbar from './components/Navbar/Navbar.svelte';
  export let name: string;
</script>

<TailwindCSS />
<main>
  <Navbar />
  <h1 class="text-3xl font-bold">{name}</h1>
</main>

<style>
  main {
    @apply p-4;
  }
  h1,
  p {
    @apply text-gray-600;
  }
</style>
