import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

//Layout UI model for the dashboard page of Xpress Admin
export default function Home() {
    const { data: session } = useSession();
    return (
        <Layout>
            <div className="text-violet-900 flex justify-between">
                <h1>
                    Hello, <b>{session?.user?.name}</b>
                </h1>

                <div className="flex bg-emerald-900 gap-1 text-white rounded-full overflow-hidden">
                    <img
                        src={session?.user?.image}
                        alt=""
                        className="w-11 h-11 rounded-full border-2 border-violet-100"
                    />
                    <span className="px-2 pt-2"><b>{session?.user?.name}</b></span>
                </div>
            </div>
        </Layout>
    );
}
