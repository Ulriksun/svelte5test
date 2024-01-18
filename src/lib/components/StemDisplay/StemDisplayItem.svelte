<script>
	let {
		item,
		ref = "noref",
	} = $props();
</script>

<div {ref} class="stem-display-item">
<!--	<button onclick={ () => console.log(item) }>item</button>-->
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

<!--<style>-->
<!--    .question-text {-->
<!--				font: 1.0em "Comic Sans MS", sans-serif;-->
<!--        border: 3px;-->
<!--				margin: 0 10px;-->
<!--    }-->
<!--    .question-image {-->
<!--        border: 2px;-->
<!--				border-radius: 10px;-->
<!--				margin: 30px;-->
<!--    }-->
<!--</style>-->