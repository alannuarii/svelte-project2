import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
    cookies.delete('accessToken', { path: '/' });
    throw redirect(302, '/login');
};
