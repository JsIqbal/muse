"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import LoginForm from "./login-form";
import { useEffect } from "react";

const AdminPage = () => {
    const router = useRouter();

    function setResource(response) {
        axios.defaults.headers.common[
            "token"
        ] = `Bearer ${response.data.data.token}`;
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userType", true);
        Cookies.set("token", response.data.data.token);
    }

    async function handleLogin(e, username, password) {
        e.preventDefault();

        if (!username || !password) return;

        try {
            // Send a POST request to the login API endpoint with Axios
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/admins/login`,
                {
                    password,
                    username,
                }
            );

            // Check if the response is successful (status 200)
            if (response.status === 200) {
                // Display a success toast message
                toast.success("Successfully logged in");

                // Redirect to the admin page
                router.push("/admin");
            } else {
                // Display an error toast message if the response is not OK
                toast.error("Could not login.");
            }
        } catch (error) {
            // Log any errors that occur during the process
            toast.err;
            console.error(error);
        }
    }

    useEffect(() => {
        let token = Cookies.get("token");
        if (token) return router.push("/admin");
        setLoaded(true);
    }, []);

    return (
        // Renduring login form wiith the the state hooks use versioo
        <LoginForm handleLogin={handleLogin} />
    );
};

export default AdminPage;
