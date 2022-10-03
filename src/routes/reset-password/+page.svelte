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

<div>
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
		<div>
			<button disabled={loading} class="btn">Reset</button>
		</div>
	</form>
</div>

{#if form?.error}
	<div>Error</div>
{/if}
{#if form?.message}
	<div>Check your email!</div>
{/if}