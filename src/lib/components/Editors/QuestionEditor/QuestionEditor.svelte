<script>
	import { getContext } from 'svelte';
	import TextInput from '$components/Editors/MCEditor/TextInput.svelte';
	import { Textarea } from '$components/ui/textarea';
	import { Input } from '$components/ui/input';

	let {
		data,
	} = $props();
	const question = getContext('questionData'); // is an object of the class question
	const id = question.questionId;
	let correctAnswer = $state("");

	function update() {
		console.log(question.title, question.content, question.alternatives);
		console.log(correctAnswer);
	}
	function handleKeyUp(e) {
		//TODO: triggers twice for some reason

		// press enter to update
		if (e.key === "Enter") {
			update();
		}
	}
	function handleAlternativeChange() {
		question.alternatives.forEach( alt => {
			if(alt.answer === correctAnswer){
				alt.correct = true;
				alt.points = 1;
			}
			else {
				alt.correct = false;
				alt.points = 0;
			}
		});
	}
	function handleDelete(item) {
		//TODO
		console.log(item);
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
	<Input placeholder="Title" bind:value={question.title} onkeyup={handleKeyUp} />
	<p>
		Content:
	</p>
	{#each question.content as item}
		{#if "text" in item}
			Text:
			<Textarea bind:value={item.text} placeholder="Your content here" onkeyup={handleKeyUp} />
		{:else if "img" in item}
			Image URL:
			<Input bind:value={item.img.url} placeholder="URL" onkeyup={handleKeyUp}/>
			Image Caption:
			<Input bind:value={item.img.caption} placeholder="Caption" onkeyup={handleKeyUp}/>
		{:else}
			Invalid content
		{/if}
	{/each}
	<button onclick={addText}>Add text</button>
	<button onclick={addImage}>Add image</button>
	( TODO )
	<br/>
	{#each question.alternatives as alternative, index}
		<div style="display:inline-flex">
			<label for={"editor-"+alternative.id}
						 style="margin:auto">
				<input type="radio" name={"editor-"+id} bind:value={alternative.answer} id={"editor-"+alternative.id}
							 bind:group={correctAnswer} onchange={handleAlternativeChange}
							 style="size:var(--size-7)"
				/>
			</label>
			<Input bind:value={alternative.answer} placeholder={"Alternative " + (index + 1)} />

		</div>
	{/each}



	<button onclick={update}> update </button>
</div>