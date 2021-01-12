<script lang="ts">
  import { googleImageData } from '../../store/store';
  import type { IImage } from '../../interfaces/google';
  
  export let images: IImage[] = [];
  googleImageData.subscribe(value => {
    if (value && value.data && value.data.items) {
      value.data.items.forEach((element: IImage, index: number) => {
        images[index] = element;
      });
    }
    if (value === null) {
      images = [];
    }
   });
</script>


<div class="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
  <section id="photos" class="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
    <template>
      {#each images as image}
        {#if image.link.includes('x-raw-image') === false}
          <img class="w-full h-64 object-cover hover:opacity-75" src={image.link} alt={image.title} />
        {/if}
      {/each}
    </template>
    </section>
</div>