import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan Swift',
  description: "Ryan Swift's personal portfolio site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={"dark:bg-slate-700"}>
      <body className={inter.className}>
        <div className={"flex justify-center text-slate-700 dark:bg-slate-700 dark:text-white"}>
          {children}
        </div>
      </body>
    </html>
  )
}
