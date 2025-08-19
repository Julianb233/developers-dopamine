import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Primary Meta Tags */}
        <title>Developer Dopamine | AI Agents That Ship Projects Faster & Cheaper</title>
        <meta name="title" content="Developer Dopamine | AI Agents That Ship Projects Faster & Cheaper" />
        <meta name="description" content="Stop burning cash on unreliable subcontractors. DD AI agents handle schedules, budgets, invoices, procurement & reporting while you focus on building. 20% savings guaranteed." />
        <meta name="keywords" content="construction AI, project management, real estate development, AI agents, budget management, scheduling software" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://developerdopamine.pages.dev/" />
        <meta property="og:title" content="Developer Dopamine | AI Agents That Ship Projects Faster & Cheaper" />
        <meta property="og:description" content="Stop burning cash on unreliable subcontractors. DD AI agents handle schedules, budgets, invoices, procurement & reporting while you focus on building. 20% savings guaranteed." />
        <meta property="og:image" content="https://developerdopamine.pages.dev/static/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://developerdopamine.pages.dev/" />
        <meta property="twitter:title" content="Developer Dopamine | AI Agents That Ship Projects Faster & Cheaper" />
        <meta property="twitter:description" content="Stop burning cash on unreliable subcontractors. DD AI agents handle schedules, budgets, invoices, procurement & reporting while you focus on building. 20% savings guaranteed." />
        <meta property="twitter:image" content="https://developerdopamine.pages.dev/static/og-image.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
        
        {/* Stylesheets */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Preload important resources */}
        <link rel="preload" href="/static/main.js" as="script" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Developer Dopamine",
            "description": "AI agents for construction project management, budget tracking, and workflow automation",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "20% time and cost savings guarantee"
            },
            "provider": {
              "@type": "Organization",
              "name": "AI Acrobatics",
              "url": "https://developerdopamine.pages.dev"
            }
          })
        }} />
      </head>
      <body>
        {children}
        <script src="/static/main.js"></script>
      </body>
    </html>
  )
})
