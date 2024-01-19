<script>
	import { Textarea } from '$components/ui/textarea';
	import { getContext } from 'svelte';
	let {
		value,
	} = $props();
</script>

<Textarea placeholder="your question here" bind:value/>

