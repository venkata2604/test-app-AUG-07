import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import NavBar from "./NavBar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider>
                    <NavBar />
                    {children}
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
