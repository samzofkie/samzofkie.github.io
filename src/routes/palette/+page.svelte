<svelte:head>
  <title>UI Palette</title>
</svelte:head>

<script>
  import '$lib/palette.css';
</script>

<style>
  div {
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

Grays
{#each [...Array(10)] as _, i}
  <div style="background-color: var(--gray-{i}); {i < 6 ? 'color: var(--gray-9)' : null}">--gray-{i}</div>
{/each}