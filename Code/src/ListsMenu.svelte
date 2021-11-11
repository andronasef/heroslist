<script>
  import Icon from '@iconify/svelte'

  let lists = [
    ['ic:round-people-alt', ''],
    ['fa-solid:bible', ''],
    ['vs:kakaotalk', ''],
    ['mdi:bike', ''],
    ['fa-solid:home', ''],
  ]
</script>

<div class="flex justify-center items-center gap-5 font-child text-white">
  {#each lists as link}
    <div
      class=" bg-$base-color rounded-md w-11 h-11 cursor-pointer flex justify-center items-center text-w"
    >
      <span class="text-xl"> <Icon icon={link[0]} /> </span>
    </div>
  {/each}
</div>
