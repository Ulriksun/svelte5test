<script>
	import { getContext } from 'svelte';
	import TextInput from '$components/Editors/MCEditor/TextInput.svelte';
	import { Textarea } from '$components/ui/textarea';
	import { Input } from '$components/ui/input';

	let {
		data,
	} = $props();
	const question = getContext('questionData'); // is an object of the class question
	let title = question.title;
	let content = question.content;
	let alternatives = question.alternatives;
	function update() {
		question.title = title;
		question.content = content;
		question.alternatives = alternatives;
	}
	function handleKeyUp(e) {
		//TODO: triggers twice for some reason

		// press enter to update
		if (e.key === "Enter") {
			update();
		}
	}
	function handleDelete(item) {
		//TODO
		console.log(item);
		console.log(title, question.title);
		// update();
	}
	function addText() {
		//TODO

		// content.push({ text: "" });
	}
	function addImage() {
		//TODO

		// content.push({ img: { url: "", caption: "" }});
	}
</script>

<div>
	<h3>
		Title:
	</h3>
	<Input placeholder="Title" bind:value={title} onkeyup={handleKeyUp}/>
	<p>
		Content:
	</p>
	{#each content as item}
		{#if item.text}
			Text:
			<Textarea bind:value={item.text} placeholder="your content here" onkeyup={handleKeyUp} />
		{:else if item.img}
			Image URL:
			<Input bind:value={item.img.url} placeholder="url" onkeyup={handleKeyUp}/>
			Image Caption:
			<Input bind:value={item.img.caption} placeholder="caption" onkeyup={handleKeyUp}/>
		{/if}
	{/each}
	<button onclick={addText}>Add text</button>
	<button onclick={addImage}>Add image</button>
	( TODO )
	<br/>


	<button onclick={ () => update}> update </button>
</div>