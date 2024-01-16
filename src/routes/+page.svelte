	
<script lang="ts">
    // import { Label } from "$lib/components/ui/label";
    import { Switch } from "$lib/components/ui/switch";
    import { Input } from '$components/ui/input';
    import { MCSelectOne } from '../lib/components/MCSelectOne';
    let width = 400;
    let height = 250;
    import {data} from "$components/data"
    let value = $state("");
    let correctAnswer = data[0].data.alternatives.filter( (i) => {
      return i.correct
    })[0].answer;
    let answerIsCorrect = $derived(value === correctAnswer);
</script>

<div style="width: {width}px; height: {height}px; border:solid black">
  <MCSelectOne question={data[0]} bind:value />
</div>
<p>Kandidaten valgte {value}, som er {answerIsCorrect ? "riktig" : "galt"}</p>
<p>
  Riktig svar er {correctAnswer}
</p>
  
  