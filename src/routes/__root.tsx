import { HeadContent, Scripts, createRootRouteWithContext, } from '@tanstack/react-router'
import '../styles.css'

import type { QueryClient } from '@tanstack/react-query'
import { getThemeServerFn } from '@/lib/theme'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from '@/components/ui/sonner'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { title: 'MBTI - BA Survey' },
    ],
  }),
  loader: () => getThemeServerFn(),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const theme = Route.useLoaderData();
  return (
    <html className={theme} lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        <ThemeProvider theme={theme}>
          {children}
          <Toaster/>
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  )
}
  