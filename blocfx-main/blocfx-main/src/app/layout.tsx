import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './fonts.css';
import { menuConfig } from '../../config/menu'
import MainNav from './components/main-nav'
import Footer from './components/footer';
import GoToTop from './components/goToTop';
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })
const notify = () => toast('Here is your toast.');

export const metadata: Metadata = {
  title: 'BlocFx',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}  >
        <header className=" top-0 z-50 sticky  backdrop-blur-sm desktop-header-gradient-background w-full  text-white ">
          <div className="lg:px-4 xl:px-20 lg:flex h-20 items-center justify-between py-4 hidden">
            <MainNav items={menuConfig.mainNav} />
          </div>
          <div className="md:px-20 flex h-20 items-center justify-between py-4 lg:hidden mobile-header-gradient-background" >
            <MainNav items={menuConfig.mainNav} />
          </div>
        </header>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        {children}
        <footer>
          <Footer />
        </footer>
        <GoToTop />
      </body>
    </html>
  )
}
