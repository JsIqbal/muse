import { Button } from "@/components/ui/button";

const LoginForm = ({ handleLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="bg-transparent border rounded-lg shadow-lg p-8 mx-2 my-6 flex flex-col justify-center items-center gap-10">
                <h1 className="text-3xl font-bold">Login to Admin Portal</h1>
                <form
                    onSubmit={(e) => handleLogin(e, username, password)}
                    className="flex flex-col gap-8 w-full"
                >
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border rounded p-2  w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded p-2  w-full"
                    />
                    <Button
                        type="submit"
                        className="font-semibold text-xl py-4"
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
