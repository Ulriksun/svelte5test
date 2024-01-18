<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '@/utils';
	import { Label } from '$components/ui/label';
	import * as RadioGroup from '$components/ui/radio-group';
	import { StemDisplay } from '$components/StemDisplay';

	type $$Props = HTMLInputAttributes;
	let {
		question = {
			question_id: '',  // will be exam_question_id probably
			type: '',     // the question type
			scoring: {
				client_scored: true,                // whether the client scores the question
				provide_feedback: true             // whether the client provides feedback
			},
			data: {
				// the stem is the question that is asked. It can contain
				// multiple items.
				stem: {
					title: '',
					content: []
				},
				alternatives: []
			}
		},
		selectedAnswer
	} = $props();
	let className: $$Props['class'] = undefined;
	export { className as class };

	function handleClick() {
		console.log(question);
	}

	const answerMap = Object.fromEntries(question.data.alternatives.map(a => [a.answer, a]));
	let feedback = $derived(answerMap[selectedAnswer]?.feedback);
	const provideFeedback = question?.scoring?.provide_feedback;
	let correct = $derived(answerMap[selectedAnswer]?.correct);

	function getFeedback() {
		// returns undefined if no feedback should be provided,
		if (!question.scoring.provide_feedback) {
			return null;
		}
		const selectedAnswer = question.data.alternatives.filter((alt) => alt.answer === selectedAnswer);

		if (selectedAnswer.length > 0) {
			if (selectedAnswer[0].feedback) {
				return selectedAnswer[0].feedback;
			}
			return 'No feedback for answer';
		}
	}

</script>
<div class="alternatives">
	<fieldset>
		{#each question.data.alternatives as alternative (alternative)}
			<div>
				<label for={alternative.id}>
					<input type="radio" name={question.question_id} value={alternative.answer} id={alternative.id}
								 bind:group={selectedAnswer} />
					{alternative.answer}
				</label>
			</div>
		{/each}
	</fieldset>
</div>
<div class={"feedback" + (correct ? " correct" : "")}>
	{#if (provideFeedback)}
		<!-- Provide feedback if available -->
		{#if (feedback)}
			{feedback}
		{:else if (!selectedAnswer)}
			No selected answer
		{:else}
			Answer is {correct ? "correct" : "wrong"}
		{/if}
	{/if}
</div>

<style>
	.alternatives {
		/* margin: 10px 30px;
		font: 1.0em "Times New Roman", sans-serif; */
		font-size: var(--font-size-base);
	}

	.alternatives > fieldset {
		margin-block: var(--size-4);
		padding-inline: var(--size-4);
	}

	.alternatives label {
		line-height: var(--line-height-loose);
	}

	.feedback {
		/* margin: 10px; */
		margin: var(--size-4);
		/* font: 0.9em "Times New Roman", sans-serif; */
		font-size: var(--font-size-sm);
	}
	
	.correct {
			font: 0.9em "Lucida Calligraphy", sans-serif;
	}
</style>
<!--
<RadioGroup.Root oninput={handleChange}>
	{#each question.data.alternatives as alternative (alternative)}
		<div class="flex items-center space-x-2">
			<RadioGroup.Item selectedAnswer={alternative.answer} id={alternative.id} />
			<Label for={alternative.id}>{alternative.answer}</Label>
		</div>
	{/each}
	<RadioGroup.Input name="answer" />
</RadioGroup.Root>
-->