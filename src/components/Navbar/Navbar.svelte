<script lang="ts">
 import Searchbar from '../Searchbar/Searchbar.svelte';
 import { googleImageData } from '../../store/store'

 const clearState = () => {
  googleImageData.set(null);
 }
</script>

<div class="relative bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1 hidden md:flex">
        <span class="sr-only">Google Api</span>
        <img
          class="h-8 w-auto sm:h-10"
          src="https://avatars0.githubusercontent.com/u/1342004?v=3&s=96"
          alt="google logo"
          on:click={clearState}
        />
        <div class="invisible md:visible">
          <h1 class="text-3xl font-bold pl-6">Myndaleit</h1>
        </div>
      </div>
      <div class="md:flex items-center justify-end md:flex-1 lg:w-0">
        <Searchbar />
      </div>
    </div>
  </div>
</div>;