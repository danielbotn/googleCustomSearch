<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { IImage } from '../../interfaces/google';
  const dispatch = createEventDispatcher();

  // Props
  export let modalData: IImage;

  const closeModal = () => {
    dispatch('closeModal');
  };
  
</script>

<style>
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  img {
    max-height: 380px;
  }
</style>

<div class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster" style="background: rgba(0, 0, 0, 0.7);">
  <div class="border border-teal-500 modal-container bg-white w-11/12 max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
    <div class="modal-content py-4 text-left px-6 overflow-auto max-h-screen">
      <div class="flex justify-end">
        <div class="modal-close cursor-pointer z-50" on:click={closeModal}>
          <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
      </div>
      <div class="p-5">
        <img src={modalData.link} alt={modalData.title} />
      </div>
      <h2 class="font-bold text-xl text-gray-800 tracking-normal p-5">{modalData.title}</h2>
      <div class="flex justify-end pt-2">
        <button
        type="button"
        class="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
        on:click={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
</div>






