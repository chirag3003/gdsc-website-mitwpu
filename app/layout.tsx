import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata:Metadata = {
    title: 'GDSC MIT WPU',
    description:
        'gdsc website created By Chirag Bhalotia',
    icons:["/favicon.ico"],
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
