import { API_ENDPOINT } from '$env/static/private';


export const load = async () => {
    const res = await fetch(`${API_ENDPOINT}/api/users`);
    const data = await res.json();

    return {
        data: data.data,
    };
};

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const id = data.get('id')

        const res = await fetch(`${API_ENDPOINT}/api/user/${id}`, {
            method: 'DELETE'
        });
        return res.json();
    }
};