	
<script lang="ts">
    // import { Label } from "$lib/components/ui/label";
    import { Switch } from "$lib/components/ui/switch";
    import { Input } from '$components/ui/input';
    import { MCSelectOne } from '../lib/components/MCSelectOne';
    let width = 400;
    let height = 300;
    import {data} from "$components/data"
    let value = "Berlin";
</script>

<div style="width: {width}px; height: {height}px; border:solid black">
  <MCSelectOne question={data[0]} bind:value />
</div>
<p>Kandidaten valgte {value}</p>
  
  