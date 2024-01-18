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
	.title {
			margin: var(--size-4) var(--size-5);
	}
</style>

