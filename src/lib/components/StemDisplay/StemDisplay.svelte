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
	<div class="title h3">
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
	:global([ref=question-text]) {
			/* for text */
      /* font: 1.0em "Comic Sans MS", sans-serif; */
			/* margin: 5px 10px; */


	}
	:global([ref=question-img]) {
			/* for images and image captions */
			/* font: 0.7em "Arial", sans-serif;
			margin: 2px 5px 5px; */


	}
	.title {
			/* font: 1.5em "Comic Sans MS", sans-serif;
			margin: 10px 15px 15px; */

			margin: var(--size-4) var(--size-5);
	}
</style>

