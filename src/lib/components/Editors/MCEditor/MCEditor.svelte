<script>
	import TextInput from '$components/Editors/MCEditor/TextInput.svelte';
	import { MultipleChoice } from '$components/MultipleChoice';
	import {setContext} from 'svelte';
	import { Question } from '@/question.svelte.js';
	import { QuestionEditor } from '$components/Editors/QuestionEditor';

	let {
		data,
	} = $props();
	const question = new Question(data);
	const content = question.content;
	const alternatives = $state(question.alternatives);
	setContext('questionData', question);
	let value = $state("");
	function update() {
		console.log(value);
	}
</script>

<div class="editor">
	<QuestionEditor data/>
</div>
<div class="question preview">
	<MultipleChoice selectedAnswer="" isPreview/>
</div>
<button onclick={() => console.log(question.content, alternatives)}>log</button>

<style>
	.question{
			display: inline-block;
			vertical-align: top;
	}
	.editor{
			display: inline-block;
			vertical-align: top;
			width: 360px;
	}
</style>