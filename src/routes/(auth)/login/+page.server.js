import { API_AUTH } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import { jwtDecode } from 'jwt-decode';

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
            return {
                "message": "Login failed",
                "access_token": null,
            };
        }

        const result = await res.json();
        const accessToken = jwtDecode(result.access_token)

        if (result.access_token && accessToken.role === '99') {
            cookies.set('accessToken', result.access_token, {
                path: '/',
                sameSite: 'strict',
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Hanya kirimkan cookie pada koneksi HTTPS di production
                maxAge: 60 * 60 * 24 // 1 hari
            });
            throw redirect(302, '/');
        } else {
            return {
                "message": "Login failed",
                "access_token": null,
            };
        }
    }
};
