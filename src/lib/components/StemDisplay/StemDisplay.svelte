<script>
	import StemDisplayItem from '$components/StemDisplay/StemDisplayItem.svelte';
	import { Separator } from '$components/ui/separator';
	import { getContext } from 'svelte';
	let {
		stem,
	} = $props();
	let dataTypes = stem.content.map( item => {
		return item.text ? "text" : item.img ? "img" : "noref";
	});
	const questionData = getContext('questionData');

</script>

<div class="stem">
	<div class="title h3">
		{stem.title}
	</div>
	{#each stem.content as item, index}
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

