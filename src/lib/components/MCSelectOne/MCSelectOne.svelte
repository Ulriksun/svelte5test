<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import { Label } from '$components/ui/label';
	import * as RadioGroup from '$components/ui/radio-group';

	type $$Props = HTMLInputAttributes;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };
</script>

<p>
	Question?
</p>
<RadioGroup.Root value="option-one">
<div class="flex items-center space-x-2">
	<RadioGroup.Item value="option-one" id="option-one" />
	<Label for="option-one">Option One</Label>
</div>
<div class="flex items-center space-x-2">
	<RadioGroup.Item value="option-two" id="option-two" />
	<Label for="option-two">Option Two</Label>
</div>
	<RadioGroup.Input name="capital" />
</RadioGroup.Root>