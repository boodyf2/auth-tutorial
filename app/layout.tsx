import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
    title: "Auth Tutorial",
    description: "Auth Tutorial Follow up Project",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="h-full flex flex-col justify-center items-center gap-4">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
