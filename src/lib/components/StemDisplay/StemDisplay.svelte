<script>
	import StemDisplayItem from '$components/StemDisplay/StemDisplayItem.svelte';
	import { Separator } from '$components/ui/separator';
	let {
		data = {},
	} = $props();
	let dataTypes = data.content.map( item => {
		return item.text ? "text" : item.img ? "img" : "noref";
	});
</script>

<div class="stem">
	<div class="title">
		{data.title}
	</div>
<!--	<button onclick={ () => {console.log(data)}}> console.log</button>-->
	{#each data.content as item, index}
		<StemDisplayItem item={item} ref={"question-" + dataTypes[index]}/>
<!--		Stem item such as text or image. ref in order to enable styling from parent component-->
	{/each}
</div>

<style>
	.stem{
			margin: 0 0;
	}
	.title {
			font: 1.5em system-ui;
			margin: 0 0;
	}
	:global([ref=question-text]) {
			/* for text */
      font: 1.0em system-ui;
			margin: 8px 8px;
	}
	:global([ref=question-img]) {
			/* for images and image captions */
			font: 0.8em system-ui;
			margin: 0;
	}

</style>

