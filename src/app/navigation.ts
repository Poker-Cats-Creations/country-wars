import { createLocalizedPathnamesNavigation, Pathnames } from 'next-intl/navigation'

const locales = ['nl', 'de', 'en']

const pathnames = {
   '/': '/',
   '/blog': '/blog',
   '/about': {
      nl: '/over-ons',
      de: '/ueber-uns',
      en: '/about',
   },
   '/register': {
      nl: '/registreren',
      de: '/registrieren',
      en: '/register',
   },
}

const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({
   locales,
   pathnames,
})

module.exports = {
   locales,
   pathnames,
   Link,
   redirect,
   usePathname,
   useRouter,
   getPathname,
}
