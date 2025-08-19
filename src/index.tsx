import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { HowItWorksPage } from './pages/how-it-works'
import { UseCasesOverviewPage } from './pages/use-cases-overview'
import { ScheduleIntelligencePage } from './pages/use-cases/schedule-intelligence'
import { BudgetGuardianPage } from './pages/use-cases/budget-guardian'
import { DocumentProcessorPage } from './pages/use-cases/document-processor'
import { WorkforceTrackerPage } from './pages/use-cases/workforce-tracker'
import { CommunicationHubPage } from './pages/use-cases/communication-hub'
import { SupplyChainOraclePage } from './pages/use-cases/supply-chain-oracle'
import { ROICalculatorPage } from './pages/roi-calculator'
import { CaseStudiesPage } from './pages/case-studies'
import { ApplyPage } from './pages/apply'
import { PortalPage } from './pages/portal'
import { ProjectTrackerPage } from './pages/project-tracker'

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

app.get('/how-it-works', (c) => {
  return c.render(<HowItWorksPage />)
})

app.get('/use-cases', (c) => {
  return c.render(<UseCasesOverviewPage />)
})

app.get('/roi-calculator', (c) => {
  return c.render(<ROICalculatorPage />)
})

app.get('/case-studies', (c) => {
  return c.render(<CaseStudiesPage />)
})

app.get('/apply', (c) => {
  return c.render(<ApplyPage />)
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

// Portal page
app.get('/portal', (c) => {
  return c.render(<PortalPage />)
})

// Project tracker page
app.get('/project-tracker', (c) => {
  return c.render(<ProjectTrackerPage />)
})

// Backend Portal API Endpoints

// Main application submission endpoint
app.post('/api/apply', async (c) => {
  try {
    const formData = await c.req.json()
    
    // Enhanced application data with user journey tracking
    const applicationData = {
      ...formData,
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'DD Landing Page - Application Form',
        userAgent: c.req.header('user-agent'),
        ip: c.req.header('cf-connecting-ip') || c.req.header('x-forwarded-for'),
        referer: c.req.header('referer'),
        formType: 'application',
        priority: 'high'
      },
      tags: ['developer-dopamine', 'ai-agents', 'application', 'high-priority'],
      leadScore: 100,
      status: 'new-application'
    }
    
    // n8n webhook URL for applications (replace with your actual webhook)
    const webhookUrl = process.env.N8N_APPLICATION_WEBHOOK || "https://your-n8n-instance.com/webhook/dd-application"
    
    if (webhookUrl.includes('your-n8n-instance.com')) {
      // Demo mode - log the application
      console.log('Application received:', applicationData)
      return c.json({ 
        success: true, 
        message: 'Application received! Julian will review personally and get back to you within 24 hours.',
        trackingId: `DD-APP-${Date.now()}`
      })
    }
    
    // Forward to your n8n automation workflow
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Developer-Dopamine-Portal/1.0'
      },
      body: JSON.stringify(applicationData)
    })
    
    if (response.ok) {
      return c.json({ 
        success: true, 
        message: 'Application submitted successfully! Julian will review personally and get back to you within 24 hours.',
        trackingId: `DD-APP-${Date.now()}`
      })
    } else {
      throw new Error('Backend webhook failed')
    }
  } catch (error) {
    console.error('Application submission error:', error)
    return c.json({ 
      success: false, 
      message: 'There was an error submitting your application. Please email Julian directly at julian@developerdopamine.com' 
    }, 500)
  }
})

// Lead capture endpoint for newsletter and updates
app.post('/api/lead-capture', async (c) => {
  try {
    const leadData = await c.req.json()
    
    const enrichedLead = {
      ...leadData,
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'DD Landing Page - Lead Capture',
        userAgent: c.req.header('user-agent'),
        ip: c.req.header('cf-connecting-ip') || c.req.header('x-forwarded-for'),
        formType: 'lead-capture'
      },
      tags: ['developer-dopamine', 'lead', 'newsletter'],
      leadScore: 25
    }
    
    const webhookUrl = process.env.N8N_LEAD_WEBHOOK || "https://your-n8n-instance.com/webhook/dd-lead-capture"
    
    if (webhookUrl.includes('your-n8n-instance.com')) {
      console.log('Lead captured:', enrichedLead)
      return c.json({ 
        success: true, 
        message: 'Thanks for your interest! We\'ll keep you updated on our AI agents progress.' 
      })
    }
    
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enrichedLead)
    })
    
    return c.json({ 
      success: true, 
      message: 'Thanks for your interest! We\'ll keep you updated on our AI agents progress.' 
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return c.json({ success: false, message: 'Error capturing lead' }, 500)
  }
})

// ROI Calculator endpoint
app.post('/api/roi-calculator', async (c) => {
  try {
    const roiData = await c.req.json()
    
    const calculationData = {
      ...roiData,
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'DD Landing Page - ROI Calculator',
        userAgent: c.req.header('user-agent'),
        ip: c.req.header('cf-connecting-ip') || c.req.header('x-forwarded-for'),
        formType: 'roi-calculation'
      },
      tags: ['developer-dopamine', 'roi-calculator', 'qualified-lead'],
      leadScore: 75
    }
    
    const webhookUrl = process.env.N8N_ROI_WEBHOOK || "https://your-n8n-instance.com/webhook/dd-roi-calc"
    
    if (webhookUrl.includes('your-n8n-instance.com')) {
      console.log('ROI calculation:', calculationData)
      return c.json({ 
        success: true, 
        message: 'ROI calculation completed. Julian will send personalized recommendations.',
        estimatedSavings: roiData.estimatedSavings || '$0'
      })
    }
    
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calculationData)
    })
    
    return c.json({ 
      success: true, 
      message: 'ROI calculation completed. Julian will send personalized recommendations.',
      estimatedSavings: roiData.estimatedSavings || '$0'
    })
  } catch (error) {
    console.error('ROI calculation error:', error)
    return c.json({ success: false, message: 'Error processing ROI calculation' }, 500)
  }
})

// Contact form endpoint
app.post('/api/contact', async (c) => {
  try {
    const contactData = await c.req.json()
    
    const enrichedContact = {
      ...contactData,
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'DD Landing Page - Contact Form',
        userAgent: c.req.header('user-agent'),
        ip: c.req.header('cf-connecting-ip') || c.req.header('x-forwarded-for'),
        formType: 'contact'
      },
      tags: ['developer-dopamine', 'contact', 'inquiry'],
      leadScore: 50
    }
    
    const webhookUrl = process.env.N8N_CONTACT_WEBHOOK || "https://your-n8n-instance.com/webhook/dd-contact"
    
    if (webhookUrl.includes('your-n8n-instance.com')) {
      console.log('Contact form submission:', enrichedContact)
      return c.json({ 
        success: true, 
        message: 'Message received! Julian will respond personally within 4 hours.' 
      })
    }
    
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enrichedContact)
    })
    
    return c.json({ 
      success: true, 
      message: 'Message received! Julian will respond personally within 4 hours.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ success: false, message: 'Error sending message' }, 500)
  }
})

// User journey tracking endpoint
app.post('/api/track', async (c) => {
  try {
    const trackingData = await c.req.json()
    
    const eventData = {
      ...trackingData,
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'DD Landing Page - User Tracking',
        userAgent: c.req.header('user-agent'),
        ip: c.req.header('cf-connecting-ip') || c.req.header('x-forwarded-for')
      }
    }
    
    // For now, just log the tracking data
    // Later you can connect this to your analytics n8n workflow
    console.log('User tracking event:', eventData)
    
    return c.json({ success: true, tracked: true })
  } catch (error) {
    console.error('Tracking error:', error)
    return c.json({ success: false }, 500)
  }
})

export default app