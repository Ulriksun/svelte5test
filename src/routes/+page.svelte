<script lang="ts">
	// import { Label } from "$lib/components/ui/label";
	import { Switch } from '$lib/components/ui/switch';
	import { Input } from '$components/ui/input';
	import { MCSelectOne } from '../lib/components/MultipleChoice/MCSelectOne';
	import { MultipleChoice } from '$components/MultipleChoice';
	import { MCEditor } from '$components/Editors/MCEditor';

	const width = 1200;
	const height = 1000;
	import { data } from '$components/data';
	import { StemDisplay } from '../lib/components/StemDisplay';

	let selectedAnswer = $state('');
	let selectedSecondAnswer = $state('');
	let correctAnswer = data[0].data.alternatives.filter((alternative) => {
		return alternative.correct;
	})[0].answer;
	let answerIsCorrect = $derived(selectedAnswer === correctAnswer);
	let question = $state("hello");
	let qdata = $state(data);
	let qtext = $derived(qdata[0].data.stem.content[0].text);
	$effect(() => {
		console.log("effect");
		qdata = data;
		question;
		selectedAnswer = selectedAnswer;
	});
	function handleSubmit() {
		console.log(question, data, qdata, qtext);

	}
</script>

<!-- question area -->
<div id="question-area" class="question-area"
		 style="width: {width}px; height: {height}px;">
	<div class="question">
		<MultipleChoice data={qdata[0]} bind:selectedAnswer />
	</div>
	<div class="question">
		<MultipleChoice data={data[1]} bind:selectedAnswer={selectedSecondAnswer} />
	</div>
	<div class="editor">
		<MCEditor bind:question bind:data={data[0]}/>
		<button onclick={ () => handleSubmit()}>in +page.svelte</button>
		<br/>
		This is +page.svelte, the question data says {qtext}
	</div>
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

    .question {
        display:inline-block;
        vertical-align: top;
    }

    .editor {
        display: inline-block;
        vertical-align: top;
    }

</style>