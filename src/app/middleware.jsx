import createMiddleware from 'next-intl/middleware'
import { locales, pathnames } from './navigation'

export default createMiddleware({
   localePrefix: 'always',
   defaultLocale: 'en',
   domains: [
      {
         domain: 'localhost',
         // Optionally restrict the locales managed by this domain. If this
         // domain receives requests for another locale (e.g. us.example.com/fr),
         // then the middleware will redirect to a domain that supports it.
         locales: ['en', 'de', 'nl'],
      },
   ],
   locales,
   pathnames,
})

export const config = {
   // Skip all paths that should not be internationalized. This example skips
   // certain folders and all pathnames with a dot (e.g. favicon.ico)
   matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
