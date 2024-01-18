<script>
	import { StemDisplay } from '$components/StemDisplay';
	import { MCSelectOne } from '$components/MultipleChoice/MCSelectOne';

	let {
		data = {},
		selectedAnswer,
	} = $props();
	const stem = data.data?.stem;
</script>
<div class="wrapper">
<!--	<div style="background-color: red" class="stem"></div>-->
	<div class="stem">
		<StemDisplay data={stem} />
	</div>
	<div class="alternatives">
		<MCSelectOne question={data} bind:selectedAnswer />
	</div>
</div>

<style>
	.wrapper{
			padding: 8px;
			border: solid orange;
			width: 480px;
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