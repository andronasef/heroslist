<script>
  import SvelteSeo from 'svelte-seo'

  import Checklist from './components/Checklist.svelte'
  import ListsMenu from './components/ListsMenu.svelte'
  import Title from './components/Title.svelte'
</script>

<SvelteSeo title="HerosList" description="A short description goes here." />
<div class="flex justify-center items-center flex-col h-screen space-y-5 ">
  <Title />
  <ListsMenu />
  <Checklist />
</div>

<!-- <h1>{Lists.list0[0]}</h1> -->
<style>
</style>
