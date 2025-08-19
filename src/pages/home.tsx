import { FC } from 'hono/jsx'
import { Navigation } from '../components/navigation'

export const HomePage: FC = () => {
  return (
    <div>
      <Navigation />
      
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
              <span className="badge-text">AI Automation for Construction</span>
            </div>
            
            <h1 className="hero-headline">
              Stop Losing Money To <span className="highlight-gradient">Bad Contractors</span>
            </h1>
            
            <p className="hero-subheadline">
              Your best sub just ghosted you (again). Your budget looks like a crime scene. Your schedule is a joke.
              Here's how AI agents eliminate the chaos so you can build faster, cheaper, and stress-free.
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
              <a href="/apply" className="cta-button primary large">
                Start Your Service
              </a>
              <a href="/how-it-works" className="cta-button secondary large">
                See The System
              </a>
            </div>
            
            <div className="hero-trust-indicators">
              <div className="trust-item">
                <span className="trust-text">Enterprise Security</span>
              </div>
              <div className="trust-item">
                <span className="trust-text">ROI Guaranteed</span>
              </div>
              <div className="trust-item">
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
      <section className="solution-section" id="solution">
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
              <a href="/use-cases/schedule-intelligence" className="agent-link">See Daily Use →</a>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">COST</div>
              <h3>Budget Guardian</h3>
              <p>Real-time burn rate tracking with variance alerts that actually matter. Knows when you're about to blow through that contingency fund.</p>
              <a href="/use-cases/budget-guardian" className="agent-link">See Daily Use →</a>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">DOC</div>
              <h3>Document Processor</h3>
              <p>Reads invoices, contracts, and change orders instantly. Extracts data, flags discrepancies, and routes approvals automatically.</p>
              <a href="/use-cases/document-processor" className="agent-link">See Daily Use →</a>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">TIME</div>
              <h3>Workforce Tracker</h3>
              <p>Monitors labor hours, catches time theft, and links everything to job costing. Finally know where your money actually goes.</p>
              <a href="/use-cases/workforce-tracker" className="agent-link">See Daily Use →</a>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">COMM</div>
              <h3>Communication Hub</h3>
              <p>Generates weekly reports that clients actually read. Monitors project sentiment and flags issues before they become problems.</p>
              <a href="/use-cases/communication-hub" className="agent-link">See Daily Use →</a>
            </div>
            
            <div className="agent-card">
              <div className="agent-icon">PROC</div>
              <h3>Supply Chain Oracle</h3>
              <p>Predicts material shortages, manages vendor relationships, and automates reorders. Because running out of rebar is not an option.</p>
              <a href="/use-cases/supply-chain-oracle" className="agent-link">See Daily Use →</a>
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
            <h2>Quantified ROI That Speaks Your Language</h2>
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
              <div className="guarantee-stamp">GUARANTEE</div>
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
              
              <h2>AI Service Subscription</h2>
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
                  <h4>The Service</h4>
                  <p>We provide ongoing AI automation services, not one-time software purchases. Your operational success drives our continuous improvement.</p>
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
                  Once we reach 10 active service subscriptions, new enrollment automatically closes until Q1 2025.
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
              
              <div className="cta-buttons">
                <a href="/apply" className="cta-button primary large">
                  Subscribe to Service
                </a>
                <a href="/roi-calculator" className="cta-button secondary large">
                  Calculate Your ROI
                </a>
              </div>
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
}