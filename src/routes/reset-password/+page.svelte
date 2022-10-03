<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from "$app/forms";

	export let form: any;
	let loading = false;

	const handleSubmit: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			loading = false;
			await applyAction(result);
		};
	};
</script>

<br />
<br />
<br />
<div class="mb-[500px]">
	<form method="POST" use:enhance={handleSubmit}>
		<div class="mt-5">
			<input
				class="input input-bordered w-full max-w-xs"
				id="email"
				name="email"
				value={form?.values?.email ?? ""}
				type="email"
				placeholder="Email"
				required
			/>
		</div>
		<div class="mt-5">
			<button disabled={loading} class="btn">Reset</button>
		</div>
	</form>
</div>

{#if form?.error}
	<div class="mt-5">Error</div>
{/if}
{#if form?.message}
	<div class="mt-5">Check your email!</div>
{/if}