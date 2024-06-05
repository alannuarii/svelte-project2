import { redirect } from '@sveltejs/kit';
import { API_AUTH } from '$env/static/private';

export async function handle({ event, resolve }) {
    const token = event.cookies.get('accessToken');

    if (event.route.id?.startsWith('/(app)')) {
        if (!token) {
            throw redirect(303, '/login');
        }

        const res = await fetch(`${API_AUTH}/api/verify-token`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!res.ok) {
            event.cookies.delete('accessToken', { path: '/' });
            throw redirect(303, '/login');
        }
    }

    const response = await resolve(event);
    return response;
}
