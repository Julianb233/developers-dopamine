import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { ScheduleIntelligencePage } from './pages/use-cases/schedule-intelligence'
import { BudgetGuardianPage } from './pages/use-cases/budget-guardian'
import { DocumentProcessorPage } from './pages/use-cases/document-processor'
import { WorkforceTrackerPage } from './pages/use-cases/workforce-tracker'
import { CommunicationHubPage } from './pages/use-cases/communication-hub'
import { SupplyChainOraclePage } from './pages/use-cases/supply-chain-oracle'

const app = new Hono()

// Enable CORS for API endpoints
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/assets/*', serveStatic({ root: './public' }))
app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }))

app.use(renderer)

// Route definitions
app.get('/', (c) => {
  return c.render(<HomePage />)
})

// Use case pages
app.get('/use-cases/schedule-intelligence', (c) => {
  return c.render(<ScheduleIntelligencePage />)
})

app.get('/use-cases/budget-guardian', (c) => {
  return c.render(<BudgetGuardianPage />)
})

app.get('/use-cases/document-processor', (c) => {
  return c.render(<DocumentProcessorPage />)
})

app.get('/use-cases/workforce-tracker', (c) => {
  return c.render(<WorkforceTrackerPage />)
})

app.get('/use-cases/communication-hub', (c) => {
  return c.render(<CommunicationHubPage />)
})

app.get('/use-cases/supply-chain-oracle', (c) => {
  return c.render(<SupplyChainOraclePage />)
})

// API endpoint for form submissions (webhook proxy)
app.post('/api/apply', async (c) => {
  try {
    const formData = await c.req.json()
    
    // Add timestamp and source
    const applicationData = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'DD Landing Page',
      user_agent: c.req.header('user-agent'),
      ip: c.req.header('cf-connecting-ip') || c.req.header('x-forwarded-for')
    }
    
    // TODO: Replace with actual n8n webhook URL
    const webhookUrl = "https://your-n8n.domain/webhook/dd-apply"
    
    if (webhookUrl.includes('your-n8n.domain')) {
      // For demo purposes, just return success
      console.log('Application received:', applicationData)
      return c.json({ 
        success: true, 
        message: 'Application received! We\'ll be in touch within 24 hours.' 
      })
    }
    
    // Forward to n8n webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(applicationData)
    })
    
    if (response.ok) {
      return c.json({ 
        success: true, 
        message: 'Application submitted successfully! We\'ll be in touch within 24 hours.' 
      })
    } else {
      throw new Error('Webhook failed')
    }
  } catch (error) {
    console.error('Application submission error:', error)
    return c.json({ 
      success: false, 
      message: 'There was an error submitting your application. Please try again or contact us directly.' 
    }, 500)
  }
})

export default app