	
<script lang="ts">
    // import { Label } from "$lib/components/ui/label";
    import { Switch } from "$lib/components/ui/switch";
    let on = false;
</script>
  
  <div class="flex items-center space-x-2">
    <Switch id="airplane-mode" bind:checked={on}/>
    <!-- <Label for="airplane-mode">Airplane Mode</Label> -->
    {#if on}
      <p>
        ON
      </p>
    {:else}
      <p>
        OFF
      </p>
    {/if}
  </div>
  
  