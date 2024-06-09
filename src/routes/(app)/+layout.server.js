import { jwtDecode } from "jwt-decode";

export const load = async ({ cookies }) => {
    const token = jwtDecode(cookies.get("accessToken"))

    return {
        token,
    };
};