<script lang="ts">
  import TailwindCSS from './style/TailwindCSS.svelte';
  import Navbar from './components/Navbar/Navbar.svelte';
  import ImageGrid from './components/ImageGrid/ImageGrid.svelte';
  import Footer from './components/Footer/Footer.svelte';
</script>

<TailwindCSS />
<body class="Site">
  <main class="Site-content">
    <Navbar />
    <ImageGrid />
  </main>
  <Footer />
</body>

<style>
  main {
    @apply p-4;
  }
  .Site-content {
    flex: 1;
  }
  .Site {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>
