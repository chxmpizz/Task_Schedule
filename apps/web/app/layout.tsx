import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@workspace/ui/components/theme-provider'

import '@workspace/ui/globals.css'
import { Providers } from '@/components/providers'

const fontSans = Geist({
    subsets: ['latin'],
    variable: '--font-sans',
})

const fontMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Providers>{children}</Providers>
                </ThemeProvider>
            </body>
        </html>
    )
}
