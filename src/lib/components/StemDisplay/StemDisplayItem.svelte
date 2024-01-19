<script>
	let {
		item,
		ref = "noref", // question-text or question-img, to enable styling from parent component
	} = $props();
</script>

<div {ref} class="stem-display-item">
	<button onclick={ () => console.log(item) }>item</button>
	{#if (item.text)}
		{@html item.text}
	{:else if (item.img)}
	    <figure>
			<img src={item.img.url} alt={item.img.caption} />
			<figcaption>{item.img.caption}</figcaption>
		</figure>
	{/if}
</div>


<style>
    .stem-display-item {
		margin-block: var(--size-4);
	}
	.stem-display-item:last-child {
		font-weight: var(--font-weight-bold);
	}

	figcaption {
		font-size: var(--font-size-sm);
		font-style: italic;
	}
</style>
