<script lang="ts">

	/*
	takes a json object "question" and displays the alternatives
	with radio buttons, returning the selected answer as a prop
	 */

	let {
		alternatives,
		scoring,
		questionId,
		selectedAnswer,
	} = $props();

	let answerMap = $derived(Object.fromEntries(alternatives.map(a => [a.answer, a])));
	let feedback = $derived(answerMap[selectedAnswer]?.feedback);
	const provideFeedback = scoring.provide_feedback;
	let correct = $derived(answerMap[selectedAnswer]?.correct);
	$effect( () => {

	})
</script>
<button onclick={() => console.log(alternatives)}>log alternatives</button>
<div class="alternatives">
	<fieldset>
		{#each alternatives as alternative (alternative)}
			<div>
				<label for={alternative.id}>
					<input type="radio" name={questionId} value={alternative.answer} id={alternative.id}
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
			{@html feedback}
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