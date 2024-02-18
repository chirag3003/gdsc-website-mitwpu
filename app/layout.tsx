import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
    title: 'GDSC MIT WPU',
    description:
        'gdsc website created By Chirag Bhalotia',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`text-text`}>
                <main className="flex min-h-screen flex-col items-center justify-between bg-background p-24">
                    {children}
                </main>
                <Toaster />
            </body>
        </html>
    )
}
