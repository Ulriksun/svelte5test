<script>
	let {
		item,
		ref = "noref", // question-text or question-img, to enable styling from parent component
	} = $props();
</script>

<div {ref}>
	{#if (item.text)}
		{@html item.text}
	{:else if (item.img)}
		<img src={item.img.url} alt={item.img.caption} />
		{item.img.caption}
	{/if}
</div>

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