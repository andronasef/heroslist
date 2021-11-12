<script>
  import SvelteSeo from 'svelte-seo'

  import Checklist from './components/Checklist.svelte'
  import ListsMenu from './components/ListsMenu.svelte'
  import ReloadPrompt from './components/ReloadPrompt.svelte'
  import Title from './components/Title.svelte'
</script>

<SvelteSeo title="HerosList" />
<div class="flex justify-center items-center flex-col h-screen space-y-5 ">
  <Title />
  <ListsMenu />
  <Checklist />
  <ReloadPrompt />
</div>

<!-- <h1>{Lists.list0[0]}</h1> -->
<style>
</style>
