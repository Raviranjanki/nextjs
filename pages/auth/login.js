import Link from "next/link";

const login = () => {
    return (
        <>
            login page
            <Link href={"/signup"}>signup</Link>
        </>
    );
};

export default login;
