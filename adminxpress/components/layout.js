import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";
import { Children } from "react";

//This is the UI model for the content on Xpress Admin
export default function Layout({ children }) {
    const { data: session } = useSession();
    //Only displayed when the user has no session in record ('The login page')
    if (!session) {
        return (
            <div className="bg-gradient-to-br from-emerald-400 to-cyan-900 w-screen h-screen flex items-center">
                <div className="text-center w-full">
                    <button
                        onClick={() => signIn("google")}
                        className="bg-white p-2 rounded-lg px-4"
                    >
                        <span className="flex text-cyan-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 bg-cyan-600 rounded-lg text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                                />
                            </svg>
                            Login with Google
                        </span>
                    </button>
                </div>
            </div>
        );
    }
    //Returns all the children injected into the Layout UI model Only for the relevant matching method pathname
    return (
        <div className="bg-violet-900 min-h-screen flex">
            <Nav />
            <div className="bg-violet-100 text-cyan-500 mt-2 mr-2 p-4 flex-grow rounded-lg">
                {children}
            </div>
        </div>
    );
}
