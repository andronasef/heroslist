<script>
  import Icon from '@iconify/svelte'
  import { createEventDispatcher } from 'svelte'
  import Lists from '../lists'

  const dispatch = createEventDispatcher()

  let nowIndex = 0
  function SetIndex(index) {
    nowIndex = index
    dispatch('SetIndex', index)
  }
</script>

<div class="flex justify-center items-center gap-3 font-child text-white">
  {#each Lists.icons as icon, index}
    <div
      on:click={() => SetIndex(index)}
      class=" bg-$base-color opacity-50  rounded-md w-10 h-10 cursor-pointer flex justify-center items-center text-w transition transform active:scale-75"
      class:selected={index == nowIndex}
    >
      <span class="text-xl"> <Icon {icon} /> </span>
    </div>
  {/each}
</div>

<style lang="scss">
  .selected {
    opacity: 1;
  }
</style>
