<script lang="ts">
  import SvelteSeo from 'svelte-seo'

  import Checklist from './components/Checklist.svelte'
  import ListsMenu from './components/ListsMenu.svelte'
  import ReloadPrompt from './components/ReloadPrompt.svelte'
  import Title from './components/Title.svelte'

  let index = 0
  function SetIndex(e) {
    index = e.detail
  }
</script>

<SvelteSeo title="HerosList" />
<div class="flex justify-center items-center flex-col space-y-5 p-5">
  <Title />
  <ListsMenu on:SetIndex={SetIndex} />
  <Checklist {index} />
  <ReloadPrompt />
</div>

<!-- <h1>{Lists.list0[0]}</h1> -->
<style>
</style>
