import type { NextPage } from "next";
import Head from "next/head";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

interface Props {
    children: React.ReactNode
}

const Layout: NextPage<Props> = (props) => {
    return (
        <div className={`px-24 w-full min-h-screen ${open_sans.className} bg-background`}>
            <Head>
                <title>Learn Serbian App - LSA</title>
            </Head>
            {props.children}
        </div>
    );
}

export default Layout;