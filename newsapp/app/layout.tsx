import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar'
import News from "@/components/News";




export const metadata: Metadata = {
  title: 'newsapp',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
    <News pageSize={5} />

        
       {children}</body>
    </html>
  )
}
