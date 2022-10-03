import { supabaseClient } from '$lib/db';
import { invalid } from '@sveltejs/kit';
import type { Actions } from '../$types';

export const actions: Actions = {
    async default({ request }) {
        const formData = await request.formData();
        const password = formData.get('password') as string;

        const { user, error } = await supabaseClient.auth.update({
            password: password,
        })

        return {
            success: true,
        };
    }
};