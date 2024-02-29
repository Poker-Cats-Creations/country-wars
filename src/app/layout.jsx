import '@/styles/globals.css'
import { Providers } from '@/app/providers'
import { SideNav } from '@/components/organism/nav/SideNav'

export const metadata = {
   title: {
      default: 'Hasira - UI Designer & Frontend Freelancer',
      template: '%s | Hasira - UI Designer & Frontend Freelancer',
   },
}

export default function LocaleLayout({ children }) {
   return (
      <html suppressHydrationWarning>
         <body className={'dark bg-primary-dark text-white-50 antialiased'}>
            <Providers>
               {/* <div className='h-full relative'> */}
               <div className='w-full h-full relative pb-24 md:flex md:pb-0 xl:justify-center xl:gap-6'>
                  <SideNav />
                  <main className='flex w-full flex-col gap-4 p-4 leading-none md:max-w-xl md:gap-6 md:p-0 md:py-[2.5rem] lg:max-w-lg xl:max-w-4xl'>
                     {children}
                  </main>
               </div>
               {/* </div> */}
            </Providers>
         </body>
      </html>
   )
}
