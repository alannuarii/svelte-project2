import { API_AUTH } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const formData = new FormData();
        formData.set('email', data.get('email'));
        formData.set('password', data.get('password'));

        const res = await fetch(`${API_AUTH}/api/login`, {
            method: 'POST',
            body: formData
        });

        if (!res.ok) {
            return { error: 'Login gagal. Silakan coba lagi.' };
        }

        const result = await res.json();

        if (result.access_token) {
            cookies.set('accessToken', result.access_token, {
                path: '/',
                sameSite: 'strict',
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Hanya kirimkan cookie pada koneksi HTTPS di production
                maxAge: 60 * 60 * 24 // 1 hari
            });
            throw redirect(302, '/');
        }

        return result;
    }
};
