	
<script lang="ts">
    // import { Label } from "$lib/components/ui/label";
    import { Switch } from "$lib/components/ui/switch";
    import { Input } from '$components/ui/input';
    import { MCSelectOne } from '../lib/components/MultipleChoice/MCSelectOne';
    import { MultipleChoice } from '$components/MultipleChoice';
    const width = 1000;
    const height = 1000;
    import {data} from "$components/data"
    import { StemDisplay } from '../lib/components/StemDisplay';
    let selectedAnswer = $state("");
    let selectedSecondAnswer = $state("");
    let correctAnswer = data[0].data.alternatives.filter( (alternative) => {
      return alternative.correct;
    })[0].answer;
    let answerIsCorrect = $derived(selectedAnswer === correctAnswer);
</script>
<div style="margin: 30px 30px; width: {width}px; height: {height}px; border:solid black; ">

</div>
<div style="margin: 30px 30px; width: {width}px; height: {height}px; border:solid black; ">
<!--  <StemDisplay data={data[0]?.data?.stem} />-->
  <div class="question">
    <MultipleChoice data={data[0]} bind:selectedAnswer/>
  </div>
  <div class="question">
    <MultipleChoice data={data[1]} bind:selectedAnswer={selectedSecondAnswer}/>
  </div>
</div>
<p>Kandidaten valgte {selectedAnswer}, som er {answerIsCorrect ? "riktig" : "galt"}</p>
<p>
  Riktig svar er {correctAnswer}
</p>

<style>
  .question{
    display:inline-block;
    vertical-align: top;
  }
  .editor{
    display:inline-block;
    vertical-align: top;
  }
</style>