import { API_ENDPOINT } from '$env/static/private';
import { redirect } from '@sveltejs/kit';


export const load = async (params) => {
    const id = params.params.update

    const res = await fetch(`${API_ENDPOINT}/api/user/${id}`);
    const data = await res.json();

    return {
        data: data.data,
    };
};


export const actions = {
    default: async ({ request, params }) => {
        const id = params.update

        const data = await request.formData();

        const formData = new FormData();
        formData.append('name', data.get('name'))
        formData.append('email', data.get('email'))
        formData.append('password', data.get('password'))
        formData.append('role', data.get('role'))

        const res = await fetch(`${API_ENDPOINT}/api/user/${id}`, {
            method: 'PUT',
            body: formData
        });

        throw redirect(302, '/');
    }
};