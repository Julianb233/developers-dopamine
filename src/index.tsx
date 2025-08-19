import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for API endpoints
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))
app.use('/assets/*', serveStatic({ root: './public' }))
app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }))

app.use(renderer)

// Main landing page
app.get('/', (c) => {
  return c.render(
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="brand-logo-section">
              <div className="brand-icon">⚡</div>
              <div className="brand-text">
                <div className="brand-main">DEVELOPER</div>
                <div className="brand-accent">DOPAMINE</div>
              </div>
            </div>
            
            <div className="hero-badge">
              <span className="badge-text">🏆 Enterprise AI Automation</span>
            </div>
            
            <h1 className="hero-headline">
              Your <span className="highlight-gradient">AI-Powered</span> Construction Command Center
            </h1>
            
            <p className="hero-subheadline">
              Stop losing millions to project delays, budget overruns, and unreliable subcontractors. 
              Our enterprise AI agents handle everything from scheduling to procurement while you focus on what matters — building profitable projects.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">$2.5M+</div>
                <div className="stat-label">Average Annual Savings</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">30%</div>
                <div className="stat-label">Faster Project Delivery</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">AI Monitoring</div>
              </div>
            </div>
            
            <div className="hero-cta-group">
              <a href="#apply" className="cta-button primary large">
                <span className="button-icon">🚀</span>
                Schedule Your AI Consultation
              </a>
              <a href="#solution" className="cta-button secondary large">
                <span className="button-icon">📊</span>
                See How It Works
              </a>
            </div>
            
            <div className="hero-trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">🛡️</span>
                <span className="trust-text">Enterprise Security</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">📈</span>
                <span className="trust-text">ROI Guaranteed</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">⚡</span>
                <span className="trust-text">48hr Setup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="pain-section">
        <div className="container">
          <div className="pain-grid">
            <div className="pain-content">
              <h2>You already know this story:</h2>
              <ul className="pain-list">
                <li>💸 Subcontractors vanish for 2 weeks mid-project.</li>
                <li>🏗️ Budgets balloon like it's a Vegas bachelor party.</li>
                <li>⏳ You're overpaying humans to "manage" spreadsheets while deadlines slip away.</li>
                <li>📋 And let's not even talk about RFIs and change orders that take forever.</li>
              </ul>
              <p className="pain-summary">
                Real estate developers and construction managers are tired of juggling 100 balls and paying through the nose while projects stall.
              </p>
            </div>
            <div className="pain-image">
              <div className="stressed-dev-illustration">
                <span className="illustration-text">😵‍💫 You right now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <div className="solution-header">
            <h2>DD = Your AI Agent Teammate.</h2>
            <p className="solution-intro">
              Not software. Not another overpriced SaaS license.<br/>
              A literal AI teammate who:
            </p>
          </div>
          
          <div className="agents-grid">
            <div className="agent-card">
              <div className="agent-icon">📅</div>
              <h3>Scheduler Agent</h3>
              <p>Tasks & milestones automatically (and updates calendars + alerts your crews). Delay impact forecasts included.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">💰</div>
              <h3>Budget & Cost Agent</h3>
              <p>Tracks budgets in real-time with burn-rate alerts, variance warnings, and portfolio roll-ups.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">🧾</div>
              <h3>Invoice & OCR Agent</h3>
              <p>Processes invoices instantly with PDF extraction, PO/contract reconcile, accounting-ready output.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">⏱️</div>
              <h3>Time & Workforce Agent</h3>
              <p>Logs time + workforce hours with anomaly detection and job-costing linkage so you know exactly who did what.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">🔔</div>
              <h3>Comms & Reporting Agent</h3>
              <p>Sends AI-written weekly reports, risk/sentiment scans, and client digests. Smart alerts included.</p>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">📦</div>
              <h3>Procurement Agent</h3>
              <p>Manages vendors with demand forecasting, vendor scoring, and low-stock reorders. Never run out again.</p>
            </div>
          </div>
          
          <div className="solution-footer">
            <p className="best-part">
              And the best part?<br/>
              <strong>DD never sleeps, never flakes, and never invoices late.</strong>
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
              <div className="value-icon">⚡</div>
              <div className="value-metric">Project Velocity Increase</div>
              <div className="value-amount">30% Faster Delivery</div>
              <div className="value-impact">= $2.5M+ Annual Savings</div>
              <div className="value-description">Eliminate delays, optimize workflows, predict bottlenecks before they happen</div>
            </div>
            
            <div className="value-card premium">
              <div className="value-icon">💰</div>
              <div className="value-metric">Cost Reduction</div>
              <div className="value-amount">25% Budget Optimization</div>
              <div className="value-impact">= $1.8M+ Cost Savings</div>
              <div className="value-description">Real-time budget tracking, variance alerts, automated cost reconciliation</div>
            </div>
            
            <div className="value-card premium">
              <div className="value-icon">🎯</div>
              <div className="value-metric">Operational Efficiency</div>
              <div className="value-amount">40% Time Recovery</div>
              <div className="value-impact">= 2,000+ Hours Back</div>
              <div className="value-description">Automated reporting, intelligent scheduling, predictive maintenance</div>
            </div>
            
            <div className="value-card premium">
              <div className="value-icon">📊</div>
              <div className="value-metric">Risk Mitigation</div>
              <div className="value-amount">90% Issue Prevention</div>
              <div className="value-impact">= Priceless Peace of Mind</div>
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
                <span className="badge-icon">🏆</span>
                <span className="badge-text">EXCLUSIVE ACCESS</span>
              </div>
              
              <h2>Elite Partnership Program</h2>
              <h3>Limited to 10 Construction Leaders Per Quarter</h3>
            </div>
            
            <div className="scarcity-explanation">
              <div className="explanation-card">
                <div className="explanation-icon">🎯</div>
                <div className="explanation-content">
                  <h4>Why the Limitation?</h4>
                  <p>Each AI implementation requires deep integration with your existing systems, dedicated support resources, and custom configuration. Quality over quantity.</p>
                </div>
              </div>
              
              <div className="explanation-card">
                <div className="explanation-icon">⚡</div>
                <div className="explanation-content">
                  <h4>What You Get</h4>
                  <p>Direct access to our senior AI engineers, priority support, custom workflow design, and guaranteed 48-hour setup completion.</p>
                </div>
              </div>
              
              <div className="explanation-card">
                <div className="explanation-icon">🛡️</div>
                <div className="explanation-content">
                  <h4>The Commitment</h4>
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
                    <span className="card-icon">⏰</span>
                    <span className="card-title">Enrollment Closes</span>
                  </div>
                  <div className="card-content">
                    <div id="countdown-display">Loading...</div>
                  </div>
                </div>
                
                <div className="slots-card">
                  <div className="card-header">
                    <span className="card-icon">👥</span>
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
                <div className="notice-icon">🔥</div>
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
                👉 Stop juggling. Stop overpaying. Stop waiting.<br/>
                👉 Start building faster, cheaper, and with peace of mind.
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
                  🚀 Apply Now Before We're Full
                </button>
                
                <p className="form-disclaimer">
                  By applying, you agree to a quick 15-min qualification call to see if DD is right for your operation.
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