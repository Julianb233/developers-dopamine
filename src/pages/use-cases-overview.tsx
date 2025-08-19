import { Navigation } from '../components/navigation'

export const UseCasesOverviewPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI Use Cases - Developer Dopamine Construction Intelligence</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="Explore how Developer Dopamine AI agents solve real construction challenges: schedule management, budget control, document processing, and workforce optimization." />
      </head>
      <body>
        <Navigation />

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background-pattern"></div>
          <div className="hero-gradient-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="badge-text">USE CASES</span>
                </div>
                <h1 className="hero-headline">AI Solutions for Every Construction Challenge</h1>
                <p className="hero-subheadline">
                  From schedule delays to budget overruns, see how our specialized AI agents solve your biggest operational headaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="use-cases-grid-section">
          <div className="container">
            <div className="use-cases-grid">
              
              {/* Schedule Intelligence */}
              <div className="use-case-card">
                <div className="use-case-badge schedule">SCHEDULE</div>
                <h3>Schedule Intelligence</h3>
                <p>Never miss another deadline. AI predicts delays 2-3 weeks in advance and suggests recovery actions.</p>
                <div className="use-case-stats">
                  <div className="stat">
                    <span className="stat-number">73%</span>
                    <span className="stat-label">Fewer Delays</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">4.2 days</span>
                    <span className="stat-label">Average Time Saved</span>
                  </div>
                </div>
                <a href="/use-cases/schedule-intelligence" className="use-case-link">See How It Works →</a>
              </div>

              {/* Budget Guardian */}
              <div className="use-case-card">
                <div className="use-case-badge budget">BUDGET</div>
                <h3>Budget Guardian</h3>
                <p>Stop budget surprises before they start. Real-time cost tracking with predictive overrun alerts.</p>
                <div className="use-case-stats">
                  <div className="stat">
                    <span className="stat-number">23%</span>
                    <span className="stat-label">Cost Reduction</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">87%</span>
                    <span className="stat-label">Budget Accuracy</span>
                  </div>
                </div>
                <a href="/use-cases/budget-guardian" className="use-case-link">See How It Works →</a>
              </div>

              {/* Document Processor */}
              <div className="use-case-card">
                <div className="use-case-badge docs">DOCUMENTS</div>
                <h3>Document Processor</h3>
                <p>Transform paperwork chaos into organized intelligence. Auto-extract key data from contracts and reports.</p>
                <div className="use-case-stats">
                  <div className="stat">
                    <span className="stat-number">89%</span>
                    <span className="stat-label">Time Saved</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">99.4%</span>
                    <span className="stat-label">Accuracy Rate</span>
                  </div>
                </div>
                <a href="/use-cases/document-processor" className="use-case-link">See How It Works →</a>
              </div>

              {/* Workforce Tracker */}
              <div className="use-case-card">
                <div className="use-case-badge workforce">WORKFORCE</div>
                <h3>Workforce Tracker</h3>
                <p>Optimize crew deployment and productivity. Predict staffing needs and identify performance gaps.</p>
                <div className="use-case-stats">
                  <div className="stat">
                    <span className="stat-number">34%</span>
                    <span className="stat-label">Productivity Gain</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">18%</span>
                    <span className="stat-label">Reduced Turnover</span>
                  </div>
                </div>
                <a href="/use-cases/workforce-tracker" className="use-case-link">See How It Works →</a>
              </div>

              {/* Communication Hub */}
              <div className="use-case-card">
                <div className="use-case-badge communication">COMMUNICATION</div>
                <h3>Communication Hub</h3>
                <p>End information silos. AI ensures critical updates reach the right people at the right time.</p>
                <div className="use-case-stats">
                  <div className="stat">
                    <span className="stat-number">67%</span>
                    <span className="stat-label">Faster Decisions</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">45%</span>
                    <span className="stat-label">Fewer Mistakes</span>
                  </div>
                </div>
                <a href="/use-cases/communication-hub" className="use-case-link">See How It Works →</a>
              </div>

              {/* Supply Chain Oracle */}
              <div className="use-case-card">
                <div className="use-case-badge supply-chain">SUPPLY CHAIN</div>
                <h3>Supply Chain Oracle</h3>
                <p>Predict material delays and price changes. Optimize procurement and inventory management.</p>
                <div className="use-case-stats">
                  <div className="stat">
                    <span className="stat-number">41%</span>
                    <span className="stat-label">Delay Reduction</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">12%</span>
                    <span className="stat-label">Material Savings</span>
                  </div>
                </div>
                <a href="/use-cases/supply-chain-oracle" className="use-case-link">See How It Works →</a>
              </div>

            </div>
          </div>
        </section>

        {/* ROI Calculator Preview */}
        <section className="roi-preview-section bg-light">
          <div className="container">
            <div className="roi-preview-content">
              <h2>Calculate Your Potential Savings</h2>
              <p>See how much time and money Developer Dopamine AI agents could save your construction business.</p>
              <div className="roi-examples">
                <div className="roi-example">
                  <div className="company-size">Small Contractor</div>
                  <div className="annual-volume">$2M Annual Volume</div>
                  <div className="savings">$170K Annual Savings</div>
                  <div className="roi-percentage">708% ROI</div>
                </div>
                <div className="roi-example">
                  <div className="company-size">Mid-Size Builder</div>
                  <div className="annual-volume">$10M Annual Volume</div>
                  <div className="savings">$850K Annual Savings</div>
                  <div className="roi-percentage">642% ROI</div>
                </div>
                <div className="roi-example">
                  <div className="company-size">Large Enterprise</div>
                  <div className="annual-volume">$50M Annual Volume</div>
                  <div className="savings">$4.2M Annual Savings</div>
                  <div className="roi-percentage">589% ROI</div>
                </div>
              </div>
              <div className="roi-cta">
                <a href="/roi-calculator" className="btn-primary btn-large">Calculate Your ROI</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <h2>Ready to See AI in Action?</h2>
            <p className="cta-subtitle">
              Choose the use case that matters most to your business and see detailed results
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large">Get Started</a>
              <a href="/case-studies" className="btn-secondary-outline">Read Success Stories</a>
            </div>
            <p className="cta-note">Implementation typically takes 48-72 hours</p>
          </div>
        </section>

        <footer className="footer bg-dark text-white">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="brand-logo">DEVELOPER DOPAMINE</div>
                <p>AI Agents for Construction Intelligence</p>
              </div>
              <div className="footer-links">
                <div className="link-group">
                  <h4>Solutions</h4>
                  <a href="/use-cases/schedule-intelligence">Schedule Intelligence</a>
                  <a href="/use-cases/budget-guardian">Budget Guardian</a>
                  <a href="/use-cases/document-processor">Document Processor</a>
                </div>
                <div className="link-group">
                  <h4>Company</h4>
                  <a href="/case-studies">Case Studies</a>
                  <a href="/how-it-works">How It Works</a>
                  <a href="/apply">Apply Now</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Developer Dopamine. Built for construction professionals who demand results.</p>
            </div>
          </div>
        </footer>

        <script src="/static/app.js"></script>
      </body>
    </html>
  )
}