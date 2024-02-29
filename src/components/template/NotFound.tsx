'use client'
import Link from 'next/link'
import { Button } from '@/components/atom/Button'
import { useRouter } from 'next/navigation'

const NotFound = () => {
   const route = useRouter()
   return (
      <div className='absolute z-10 grid min-h-screen w-full place-content-center place-items-center justify-center gap-12'>
         <main className='h-screen flex justify-center flex-col items-center gap-12'>
            <section className='flex flex-col gap-8'>
               <header className='flex flex-col items-center'>
                  <h1 className='text-xxl3'>404</h1>
                  <h2 className='text-xxl2'>Lost in the Stars</h2>
               </header>
               <div className='flex flex-col items-center text-white-500'>
                  <p>Even in the darkest night, a single star can guide the way.</p>
                  <p>That&apos;s the power of a creative spark, illuminating paths unknown.</p>
               </div>
            </section>
            <div className='flex w-full space-x-6'>
               <Button
                  size={'lg'}
                  variant={'outline'}
                  className='w-full'
                  onClick={() => route.back()}>
                  Go Back
               </Button>
               <Button
                  size={'lg'}
                  className='w-full'
                  asChild>
                  <Link href={'/en/home'}>Fly Back to Nest</Link>
               </Button>
            </div>
         </main>
      </div>
   )
}

export default NotFound
