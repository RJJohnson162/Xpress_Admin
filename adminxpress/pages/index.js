import Layout from "@/components/layout";
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

                <div className="text-white flex gap-1 bg-violet-900 rounded-full pr-2">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={session?.user?.image}
                        alt=""
                    />
                    <span className="py-1 px-1">{session?.user?.name}</span>
                </div>
            </div>
        </Layout>
    );
}
