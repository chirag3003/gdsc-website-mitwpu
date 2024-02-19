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
        <main className="bg-background p-8 lg:p-24 pt-32 lg:pt-32">
            {children}
        </main>
        <Toaster />
        <Footer />
        </body>
        </html>
    )
}
