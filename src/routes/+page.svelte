	
<script lang="ts">
    // import { Label } from "$lib/components/ui/label";
    import { Switch } from "$lib/components/ui/switch";
    import { Input } from '$components/ui/input';
    import { MCSelectOne } from '../lib/components/MultipleChoice/MCSelectOne';
    import { MultipleChoice } from '$components/MultipleChoice';
    const width = 400;
    const height = 700;
    import {data} from "$components/data"
    import { StemDisplay } from '../lib/components/StemDisplay';
    let selectedAnswer = $state("");
    let correctAnswer = data[0].data.alternatives.filter( (alternative) => {
      return alternative.correct;
    })[0].answer;
    let answerIsCorrect = $derived(selectedAnswer === correctAnswer);
</script>

<!-- question area -->
<div id="question-area" class="question-area" 
     style="width: {width}px; height: {height}px;">

  <!--  <StemDisplay data={data[0]?.data?.stem} />-->
  <MultipleChoice data={data[0]} bind:selectedAnswer/>

</div>

<!-- parent area -->
<div class="question-controller">
  
  <p>Kandidaten valgte {selectedAnswer}, som er {answerIsCorrect ? "riktig" : "galt"}</p>
  
  <p>
    Riktig svar er {correctAnswer}
  </p>
    
</div>


<style>

  
  .question-area {
    border: var(--border-1);
    border-radius: var(--border-radius-1);
    margin: var(--size-8);
    padding: var(--size-5);
  }

</style>