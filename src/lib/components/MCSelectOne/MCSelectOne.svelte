<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import { Label } from '$components/ui/label';
	import * as RadioGroup from '$components/ui/radio-group';

	type $$Props = HTMLInputAttributes;
	let {
		question = {
			question_id: '',  // will be exam_question_id probably
			type: '',     // the question type
			scoring: {
				client_scored: true,                // whether the client scores the question
				provide_feedback: true,             // whether the client provides feedback
			},
			data: {
				// the stem is the question that is asked. It can contain
				// multiple items.
				stem: {
					title: '',
					content: [],
				},
				alternatives: [],
			},
		},
		value,
	} = $props();
	let className: $$Props["class"] = undefined;
	export { className as class };
	let feedback = $state("");
	function handleClick() {
		console.log(question);
	}
	function handleChange() {
		console.log(this);
	}

	$effect( () => {
		feedback = question.data.alternatives.filter( (i) => i.answer === value)[0].feedback;
	});

</script>

<div>
	Question?
	<button onclick={handleClick}>test</button>
</div>
<div>
	<div class="question" id={question.question_id}>
		<div class="stem">
			<h3>
				{question.data.stem.content[0].text}
			</h3>
		</div>
		<div class="alternatives">
		<RadioGroup.Root bind:value oninput={handleChange}>
			{#each question.data.alternatives as alternative (alternative)}
				<div class="flex items-center space-x-2">
					<RadioGroup.Item value={alternative.answer} id={alternative.id} />
					<Label for={alternative.id}>{alternative.answer}</Label>
				</div>
			{/each}
			<RadioGroup.Input name="answer" />
		</RadioGroup.Root>
		</div>
		Value is {value}
	</div>

	{#if (question.scoring.provide_feedback && feedback !== undefined)}
		feedback:
		{feedback}
	{/if}
</div>
