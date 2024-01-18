<script>
	import TextInput from '$components/Editors/MCEditor/TextInput.svelte';
	let {
		data,
		question,
	} = $props();
	let value = $state(question);
	$effect( () => {
		question = value;
		data.data.stem.content[0] = {text: value};
	});
</script>

<TextInput bind:value />
<button onclick={ () => console.log(question, data)}> in MCEditor </button>

