<script>
	import { StemDisplay } from '$components/StemDisplay';
	import { MCSelectOne } from '$components/MultipleChoice/MCSelectOne';
	import { getContext } from 'svelte';

	let {
		//questionData = {},
		selectedAnswer,
		isPreview = false,
	} = $props();
	const question = getContext('questionData');
</script>
<div class="wrapper">
<!--	<div style="background-color: red" class="stem"></div>-->
	<div class="stem">
		<!--{#key stem}-->
			<StemDisplay bind:stem={question.stem} />
		<!--{/key}-->
	</div>
	<div class="alternatives">
		<MCSelectOne bind:alternatives={question.alternatives} bind:selectedAnswer questionId={question.questionId} scoring={question.scoring}/>
	</div>
</div>

<style>
	.wrapper{
			padding: var(--padding-1);
			border: var(--border-2);
			width: 360px;
			height: auto;
			min-height: 480px;
	}
	.stem{
			margin: 0 0;
	}
	.alternatives{
			margin: 0 0;
	}
</style>