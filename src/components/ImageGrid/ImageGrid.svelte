<script lang="ts">
  import axios from 'axios';
  import InfiniteLoading from 'svelte-infinite-loading';
  import Modal from '../Modal/Modal.svelte';
  import { googleImageData, searchWord } from '../../store/store';
  import { get } from 'svelte/store';
  import type { IImage } from '../../interfaces/google';
  
  export let images: IImage[] = [];
  let modalOpen: boolean = false;
  let modalData: IImage = null;
  let startNumb: number = 1;
  
  let infiniteId = +new Date();
  let tmpSearchWord: string = '';

  const closeModal = () => {
    modalOpen = !modalOpen;
  };

  const clickOnImage = (image: IImage) => {
    modalData = image;
    modalOpen = true;
  };

  searchWord.subscribe(value => {
    if (value !== null && tmpSearchWord !== null) {
      if (value !== tmpSearchWord) {
        images = [];
        infiniteId += 1;
        startNumb = 1;
      }
      tmpSearchWord = value;
    }
   });

  // TODO remove duplicate pictures
  const removeDuplicates = (array: IImage[]) => {
    const filteredArr = array.reduce((acc, current) => {
      const x = acc.find(item => item.title === current.title);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return filteredArr;
  };
  
  googleImageData.subscribe(value => {
    let tmp = [];
    if (value && value.data && value.data.items) {
      images = [];
      infiniteId += 1;
      startNumb = 1;
      value.data.items.forEach((element: IImage, index: number) => {
        tmp[index] = element;
      });
      const cleanArr: IImage[] = removeDuplicates(tmp);
      images = [...cleanArr];
    }
    if (value === null) {
      images = [];
    }
   });

  const checkURL = (url: string) => {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  const customSearch = async (search: string, apiKey: string) => {
    try {
      const result = await axios({
        method: 'get',
        url: `https://content.googleapis.com/customsearch/v1?cx=001361074102112665899%3Ap7mybnrloug&q=${search}&num=10&start=${startNumb}&searchType=image&key=${apiKey}`,
      });

      return result;
    } catch (error) {
      return error;
    }
  }

  async function infiniteHandler({ detail: { loaded, complete } }) {
    let tmp: IImage[] = [];
    const searchValue = get(searchWord);
    let tmpArr = [];
    const cm = await customSearch(searchValue, process.env.SVELTE_APP_API_KEY);
    if(cm.data && cm.data.items) {
      const imgData = cm.data.items;
      imgData.forEach((element: IImage, index: number) => {
        tmpArr[index] = element;
      });
      tmp = [...images, ...tmpArr];
      const cleanArr: IImage[] = removeDuplicates(tmp);
      images = [...cleanArr];
      startNumb += 10;
      loaded();
    } else {
      complete();
    }
	}
</script>

<div class="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
  <section id="photos" class="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
    <template>
      {#each images as image}
        {#if image.link.includes('x-raw-image') === false && checkURL(image.link)}
          <img 
            class="w-full h-64 object-cover hover:opacity-75" 
            src={image.link} 
            alt={image.title} 
            on:click={() => clickOnImage(image)} 
          />
        {/if}
      {/each}
    </template>
  </section>
</div>

{#if modalOpen}
  <Modal on:closeModal={closeModal} modalData={modalData} />
{/if}

{#if images.length > 0 }
  <InfiniteLoading on:infinite={infiniteHandler} identifier={infiniteId} />
{/if}
