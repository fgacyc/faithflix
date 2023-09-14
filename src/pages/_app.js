import "@/styles/globals.css";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {UserProvider} from '@auth0/nextjs-auth0/client';


export default function App({Component, pageProps}) {
    return (
        <UserProvider>
            <NextUIProvider>
                <Component {...pageProps} />
            </NextUIProvider>
        </UserProvider>
    );
}
