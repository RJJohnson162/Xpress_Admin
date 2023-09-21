import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Home() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <div className="bg-gradient-to-br from-emerald-400 to-cyan-900 w-screen h-screen flex items-center">
                <div className="text-center w-full">
                    <button
                        onClick={() => signIn("google")}
                        className="bg-white p-2 rounded-lg px-8"
                    >
                        Login with Google
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-violet-900 min-h-screen flex">
            <Nav />
            <div className="bg-violet-100 text-cyan-500 mt-2 mr-2 p-4 flex-grow rounded-lg">
                Logged in {session.user.email}
            </div>
        </div>
    );
}
