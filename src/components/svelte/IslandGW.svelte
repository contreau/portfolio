<script>
  import GWcli from "./GW_CLI.svelte";
  import GWui from "./GW_UI.svelte";
  let toggleDisplays = $state(false);
</script>

<button onclick={() => (toggleDisplays = !toggleDisplays)}>Toggle Displays</button>

{#if !toggleDisplays}
  <GWui />
{:else}
  <GWcli />
{/if}
