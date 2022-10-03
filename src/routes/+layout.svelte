<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import '$lib/db';
	import { startSupabaseSessionSync } from '@supabase/auth-helpers-sveltekit';

	const logout: SubmitFunction = () => {
		return async ({ result }) => {
			await invalidateAll();
			applyAction(result);
		};
	};

	// this sets up automatic token refreshing
	startSupabaseSessionSync({
		page,
		handleRefresh: () => invalidateAll()
	});
</script>

<svelte:head>
	<title>Email and Password Demo - Supabase Auth Helpers</title>
</svelte:head>

<main class="container is-max-desktop">
	<div class="navbar-menu my-4">
		<div class="navbar-start">
			<a class="my-2" href="/">Supabase Auth Helpers Demo</a>
		</div>
		<div class="navbar-end">
			{#if $page.data.session.user}
				<form action="/logout" method="post" use:enhance={logout}>
					<button type="submit">Sign out</button>
				</form>
			{/if}
		</div>
	</div>

	<slot />
</main>
