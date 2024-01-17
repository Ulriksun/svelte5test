<script>
	import { StemDisplay } from '$components/StemDisplay';
	import { MCSelectOne } from '$components/MultipleChoice/MCSelectOne';

	let {
		data = {},
		selectedAnswer,
	} = $props();
	const stem = data.data?.stem;
</script>
<StemDisplay data={stem} />
<MCSelectOne question={data} bind:selectedAnswer />