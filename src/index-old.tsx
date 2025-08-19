import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { HomePage } from './pages/home'
import { HowItWorksPage } from './pages/how-it-works'
import { UseCasesPage } from './pages/use-cases'
import { ROICalculatorPage } from './pages/roi-calculator'
import { CaseStudiesPage } from './pages/case-studies'
import { ApplyPage } from './pages/apply'
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

app.get('/how-it-works', (c) => {
  return c.render(<HowItWorksPage />)
})

app.get('/use-cases', (c) => {
  return c.render(<UseCasesPage />)
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

// Use case detail pages
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
      <section className="pain-section">
        <div className="container">
          <div className="pain-grid">
            <div className="pain-content">
              <h2>We've All Been Here Before</h2>
              <ul className="pain-list">
                <li>Your best subcontractor just ghosted you. Again. Two weeks before deadline.</li>
                <li>The budget spreadsheet looks like a crime scene. Every line item is bleeding red.</li>
                <li>You're paying someone $85/hour to manually update schedules that are already outdated.</li>
                <li>RFIs sit in email hell while your project timeline becomes a cruel joke.</li>
              </ul>
              <p className="pain-summary">
                You didn't get into construction to become a full-time project babysitter. 
                But here you are, juggling chaos instead of building the next great project.
              </p>
            </div>
            <div className="pain-image">
              <div className="stressed-dev-illustration">
                <span className="illustration-text">Every PM, Ever</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <div className="solution-header">
            <h2>Six AI Agents That Actually Work</h2>
            <p className="solution-intro">
              No more software that promises everything and delivers spreadsheets.<br/>
              These agents handle the grunt work so you can focus on the build:
            </p>
          </div>
          
          <div className="agents-grid">
            <div className="agent-card">
              <div className="agent-icon">SCHED</div>
              <h3>Schedule Intelligence</h3>
              <p>Automatically sequences tasks, predicts delays before they happen, and keeps everyone on the same timeline. No more "I didn't know about that deadline."</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">COST</div>
              <h3>Budget Guardian</h3>
              <p>Real-time burn rate tracking with variance alerts that actually matter. Knows when you're about to blow through that contingency fund.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">DOC</div>
              <h3>Document Processor</h3>
              <p>Reads invoices, contracts, and change orders instantly. Extracts data, flags discrepancies, and routes approvals automatically.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">TIME</div>
              <h3>Workforce Tracker</h3>
              <p>Monitors labor hours, catches time theft, and links everything to job costing. Finally know where your money actually goes.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">COMM</div>
              <h3>Communication Hub</h3>
              <p>Generates weekly reports that clients actually read. Monitors project sentiment and flags issues before they become problems.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">PROC</div>
              <h3>Supply Chain Oracle</h3>
              <p>Predicts material shortages, manages vendor relationships, and automates reorders. Because running out of rebar is not an option.</p>
            </div>
          </div>
          
          <div className="solution-footer">
            <p className="best-part">
              The difference? These agents don't call in sick, don't need training, and never miss a deadline.<br/>
              <strong>They just work. Every time.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="value-section">
        <div className="container">
          <div className="value-header">
            <h2 className="value-headline">Quantified ROI That Speaks Your Language</h2>
            <p className="value-subtitle">Real numbers from real construction projects. No fluff, just measurable impact on your bottom line.</p>
          </div>
          
          <div className="value-stack">
            <div className="value-card premium">
              <div className="value-icon">SPEED</div>
              <div className="value-metric">Project Velocity Increase</div>
              <div className="value-amount">30% Faster Delivery</div>
              <div className="value-impact">= $2.5M+ Annual Savings</div>
              <div className="value-description">Eliminate delays, optimize workflows, predict bottlenecks before they happen</div>
            </div>
            
            <div className="value-card premium">
              <div className="value-icon">COST</div>
              <div className="value-metric">Budget Optimization</div>
              <div className="value-amount">25% Cost Reduction</div>
              <div className="value-impact">= $1.8M+ Cost Savings</div>
              <div className="value-description">Real-time budget tracking, variance alerts, automated cost reconciliation</div>
            </div>
            
            <div className="value-card premium">
              <div className="value-icon">TIME</div>
              <div className="value-metric">Administrative Recovery</div>
              <div className="value-amount">40% Time Back</div>
              <div className="value-impact">= 2,000+ Hours Annually</div>
              <div className="value-description">Automated reporting, intelligent scheduling, predictive maintenance</div>
            </div>
            
            <div className="value-card premium">
              <div className="value-icon">RISK</div>
              <div className="value-metric">Issue Prevention</div>
              <div className="value-amount">90% Problem Avoidance</div>
              <div className="value-impact">= Predictable Outcomes</div>
              <div className="value-description">Early warning systems, compliance monitoring, quality assurance automation</div>
            </div>
          </div>
          
          <div className="total-value-section">
            <div className="total-value-card">
              <div className="total-label">Conservative Annual Impact</div>
              <div className="total-amount">$4.3M+ Value Creation</div>
              <div className="total-subtitle">Investment Recovery: <span className="highlight">3-6 Months</span></div>
              <div className="roi-badge">
                <span className="roi-number">770%</span>
                <span className="roi-text">Typical ROI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <div className="guarantee-banner">
            <h2>We'll put this in black and yellow:</h2>
            <div className="guarantee-box">
              <div className="guarantee-stamp">🏆 GUARANTEE</div>
              <p className="guarantee-text">
                If DD doesn't save you at least <strong>20% in time and cost</strong> on your next project, you don't pay. Period.
              </p>
              <p className="guarantee-challenge">
                (Find a subcontractor willing to match that guarantee… we'll wait.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="scarcity-section">
        <div className="container">
          <div className="scarcity-content">
            <div className="scarcity-header">
              <div className="exclusivity-badge">
                <span className="badge-text">EXCLUSIVE ACCESS</span>
              </div>
              
              <h2>Elite Partnership Program</h2>
              <h3>Limited to 10 Construction Leaders Per Quarter</h3>
            </div>
            
            <div className="scarcity-explanation">
              <div className="explanation-card">
                <div className="explanation-badge">WHY</div>
                <div className="explanation-content">
                  <h4>Why the Limitation?</h4>
                  <p>Each AI implementation requires deep integration with your existing systems, dedicated support resources, and custom configuration. Quality over quantity.</p>
                </div>
              </div>
              
              <div className="explanation-card">
                <div className="explanation-badge">GET</div>
                <div className="explanation-content">
                  <h4>What You Get</h4>
                  <p>Direct access to our senior AI engineers, priority support, custom workflow design, and guaranteed 48-hour setup completion.</p>
                </div>
              </div>
              
              <div className="explanation-card">
                <div className="explanation-badge">COMMIT</div>
                <div className="explanation-content">
                  <h4>The Partnership</h4>
                  <p>We're building long-term partnerships, not selling software licenses. Your success becomes our success metric.</p>
                </div>
              </div>
            </div>
            
            <div className="urgency-dashboard">
              <div className="dashboard-header">
                <h4>Q4 2024 Enrollment Status</h4>
              </div>
              
              <div className="urgency-grid">
                <div className="countdown-card">
                  <div className="card-header">
                    <span className="card-title">Enrollment Closes</span>
                  </div>
                  <div className="card-content">
                    <div id="countdown-display">Loading...</div>
                  </div>
                </div>
                
                <div className="slots-card">
                  <div className="card-header">
                    <span className="card-title">Spots Remaining</span>
                  </div>
                  <div className="card-content">
                    <div id="slots-display">Loading...</div>
                    <div className="slots-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" id="progress-fill"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="urgency-notice">
                <div className="notice-text">
                  <strong>Applications are being processed in real-time.</strong> 
                  Once we reach 10 confirmed partnerships, the enrollment automatically closes until Q1 2025.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section" id="apply">
        <div className="container">
          <div className="cta-content">
            <h2>Developer Dopamine (DD) was built for people like you:</h2>
            <p className="cta-description">
              Developers and construction managers sick of delays, budget chaos, and unreliable subs.
            </p>
            
            <div className="cta-actions">
              <p className="cta-bullets">
                Stop juggling chaos. Stop overpaying for mediocrity. Stop waiting for others to fix your problems.<br/>
                Start building faster, cheaper, and with complete operational control.
              </p>
              
              <form className="apply-form" data-n8n-webhook="">
                <div className="form-grid">
                  <input type="text" name="company" placeholder="Company Name" required />
                  <input type="text" name="name" placeholder="Your Name" required />
                  <input type="email" name="email" placeholder="Email Address" required />
                  <input type="tel" name="phone" placeholder="Phone Number" required />
                  <select name="project_type" required>
                    <option value="">Project Type</option>
                    <option value="residential">Residential Development</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="mixed_use">Mixed Use</option>
                    <option value="industrial">Industrial</option>
                    <option value="other">Other</option>
                  </select>
                  <input type="text" name="project_size" placeholder="Typical Project Size ($)" />
                </div>
                <textarea name="message" placeholder="Tell us about your biggest project management pain point..." rows={3}></textarea>
                
                <button type="submit" className="cta-button primary large">
                  Apply for Partnership
                </button>
                
                <p className="form-disclaimer">
                  By applying, you agree to a 15-minute qualification call to ensure mutual fit.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <p className="footer-tagline">
              <strong>DD: The teammate who actually shows up.</strong>
            </p>
            <div className="footer-links">
              <span>© 2024 Developer Dopamine</span>
              <span>•</span>
              <a href="mailto:hello@developerdopamine.com">Contact</a>
              <span>•</span>
              <span>Built by AI Acrobatics</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Configuration Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.DD_CONFIG = {
            countdownToISO: "", // auto-set to quarter end, override if needed
            maxSlotsPerQuarter: 10
          };
        `
      }}></script>
    </div>
  )
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