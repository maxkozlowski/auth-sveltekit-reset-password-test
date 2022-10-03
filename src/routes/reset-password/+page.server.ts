import { supabaseClient } from '$lib/db';
import { invalid } from '@sveltejs/kit';
import type { Actions } from '../$types';

export const actions: Actions = {
	async default({ request, url }) {
		const formData = await request.formData();
		const email = formData.get('email') as string;

		const { data, error } = await supabaseClient.auth.api.resetPasswordForEmail(
			email,
			{
				redirectTo: `${url.origin}/new-password`
			}
		)

		if (error) {
			return invalid(400, {
				error: error.message,
				values: { email }
			});
		}

		return {
			success: true,
			message: 'Please check your email for a magic link to log into the website.'
		};
	}
};