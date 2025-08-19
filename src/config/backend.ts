// Backend Portal Configuration
// This will connect to your n8n automation workflows and CRM systems

export const BACKEND_CONFIG = {
  // n8n Webhook Endpoints
  webhooks: {
    // Main application submission webhook
    applicationSubmit: process.env.N8N_APPLICATION_WEBHOOK || 'https://your-n8n-instance.com/webhook/dd-application',
    
    // Lead capture webhook for newsletter/updates
    leadCapture: process.env.N8N_LEAD_WEBHOOK || 'https://your-n8n-instance.com/webhook/dd-lead-capture',
    
    // ROI Calculator webhook
    roiCalculation: process.env.N8N_ROI_WEBHOOK || 'https://your-n8n-instance.com/webhook/dd-roi-calc',
    
    // Contact form webhook
    contactForm: process.env.N8N_CONTACT_WEBHOOK || 'https://your-n8n-instance.com/webhook/dd-contact'
  },

  // CRM Integration Settings
  crm: {
    // These will be handled by your n8n workflows
    enabled: true,
    source: 'DD Landing Page',
    tags: ['developer-dopamine', 'ai-agents', 'construction-tech'],
    leadScore: {
      pageVisit: 10,
      useCaseView: 25,
      roiCalculator: 50,
      applicationSubmit: 100
    }
  },

  // User Portal Settings (for future when Supabase is ready)
  portal: {
    enabled: false, // Will enable when Supabase is configured
    loginRequired: false,
    dashboardUrl: '/dashboard',
    signupBonus: 'early-access-tier'
  },

  // Analytics & Tracking
  analytics: {
    trackUserJourney: true,
    sessionTracking: true,
    conversionEvents: [
      'page_view',
      'use_case_view',
      'roi_calculator_use',
      'application_submit',
      'case_study_view'
    ]
  }
}

// Helper function to construct webhook URLs with tracking data
export function buildWebhookPayload(
  formData: any, 
  source: string, 
  userJourney?: string[]
) {
  return {
    ...formData,
    metadata: {
      timestamp: new Date().toISOString(),
      source: source,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Server',
      referrer: typeof document !== 'undefined' ? document.referrer : null,
      userJourney: userJourney || [],
      leadScore: calculateLeadScore(userJourney || []),
      sessionId: generateSessionId()
    },
    tags: BACKEND_CONFIG.crm.tags
  }
}

// Calculate lead score based on user journey
function calculateLeadScore(journey: string[]): number {
  let score = 0
  journey.forEach(event => {
    score += BACKEND_CONFIG.crm.leadScore[event as keyof typeof BACKEND_CONFIG.crm.leadScore] || 0
  })
  return score
}

// Generate session ID for tracking
function generateSessionId(): string {
  return `dd_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`
}

// Backend API endpoints for different forms
export const API_ENDPOINTS = {
  application: '/api/apply',
  leadCapture: '/api/lead-capture',
  roiCalculator: '/api/roi-calculator',
  contact: '/api/contact',
  newsletter: '/api/newsletter'
}