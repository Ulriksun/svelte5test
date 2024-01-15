	
<script lang="ts">
    // import { Label } from "$lib/components/ui/label";
    import { Switch } from "$lib/components/ui/switch";
    import { Input } from '$components/ui/input';
    import { MCSelectOne } from '../lib/components/MCSelectOne';

    let on = $state(false);
    //let color = $state("black");
    let lightswitch = $state(false);
    let textInput = $state("off");
    // $effect( () => {
    //   if (textInput === "on") {
    //     on = true;
    //   } else if (textInput === "off") {
    //     on = false;
    //   }
    //   // console.log(on, textInput);
    // });

    function handleChange() {
      if (this.value === "on") {
        on = true;
      } else if (this.value === "off") {
        on = false;
      }
    }
</script>
  
<!--  <div class="flex items-center space-x-2">-->
<!--    <Switch id="airplane-mode" bind:checked={on}/>-->
<!--    &lt;!&ndash; <Label for="airplane-mode">Airplane Mode</Label> &ndash;&gt;-->
<!--    <div onclick={ () => {on = !on;}} style="width:100px; height:100px; border-radius:50%; background-color:{on ? 'yellow' : 'black' }" />-->
<!--    <Input id="color" oninput={handleChange} value={on ? "on" : "off" }/>-->
<!--  </div>-->
  <div>
    <MCSelectOne />
  </div>
  
  