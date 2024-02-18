import './globals.css'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

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
        <body className={`text-text bg-background dark`}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between bg-background p-24 pt-32">
            {children}
        </main>
        <Toaster />
        <Footer />
        </body>
        </html>
    )
}
