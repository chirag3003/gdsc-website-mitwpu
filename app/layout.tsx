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
        <body className={`text-foreground bg-background dark`}>
        <Navbar />
        <main className="bg-background">
            {children}
        </main>
        <Toaster />
        <Footer />
        </body>
        </html>
    )
}
