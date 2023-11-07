import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"} className="flex">
            <b>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-8 text-pink-300"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </b>

            <span className="text-violet-100"><b>-press Admin-Management</b></span>
        </Link>
    );
}
