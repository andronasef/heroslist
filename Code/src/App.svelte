<script>
  import Checklist from './Checklist.svelte'
  import ListsMenu from './ListsMenu.svelte'
</script>

<div class="flex justify-center items-center flex-col h-screen space-y-5">
  <div class="title text-4xl text-$base-color uppercase">
    Hereos
    <span class="text-$second-color "> List</span>
  </div>
  <ListsMenu />
  <Checklist />
</div>

<!-- <h1>{Lists.list0[0]}</h1> -->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

  .title {
    font-family: 'Fredoka One', cursive;
  }
</style>
