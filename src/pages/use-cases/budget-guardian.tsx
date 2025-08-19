import { Navigation } from '../../components/navigation'

export const BudgetGuardianPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Budget Guardian - Developer Dopamine AI Agents</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="AI-powered budget management that tracks every dollar, predicts overruns, and keeps construction projects profitable. See how Budget Guardian transforms daily financial operations." />
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
                  <span className="badge-text">COST KILLER</span>
                </div>
                <h1 className="hero-headline">Budget Guardian</h1>
                <p className="hero-subheadline">
                  AI that watches every dollar like a hawk and tells you exactly when you're about to blow your budget—before it's too late.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">23%</span>
                    <span className="stat-label">Average Cost Reduction</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">87%</span>
                    <span className="stat-label">Budget Accuracy</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">48hrs</span>
                    <span className="stat-label">Early Warning Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day in the Life Section */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title">A Day in the Life with Budget Guardian</h2>
            <p className="section-subtitle">Follow Project Manager Sarah as Budget Guardian transforms her daily budget management</p>
            
            <div className="timeline">
              {/* 6:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">6:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-alert">ALERT</div>
                  <h3>Early Warning Notification</h3>
                  <p>Sarah's phone buzzes with a Budget Guardian alert: "Material costs trending 15% over budget on Riverside Project. Action recommended by 10 AM."</p>
                  <div className="timeline-impact">
                    <strong>Without AI:</strong> Sarah discovers the overrun during Friday review, $47K already spent.
                  </div>
                </div>
              </div>

              {/* 7:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">7:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-analysis">INSIGHT</div>
                  <h3>Coffee & Context</h3>
                  <p>Over coffee, Sarah opens the Budget Guardian dashboard. AI has already analyzed 14 similar projects and predicts final overrun will be $78K if current trend continues.</p>
                  <div className="timeline-metrics">
                    <span className="metric">Risk Level: <strong>High</strong></span>
                    <span className="metric">Confidence: <strong>94%</strong></span>
                  </div>
                </div>
              </div>

              {/* 8:15 AM */}
              <div className="timeline-item">
                <div className="timeline-time">8:15 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-action">ACTION</div>
                  <h3>Supplier Negotiation Prep</h3>
                  <p>Budget Guardian provides talking points: "Concrete supplier pricing increased 18% above contract. Here are 3 alternative suppliers with better rates and delivery schedules."</p>
                  <div className="timeline-benefit">
                    <strong>AI Advantage:</strong> Pre-negotiation research completed in seconds, not hours.
                  </div>
                </div>
              </div>

              {/* 9:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">9:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-success">SUCCESS</div>
                  <h3>Site Meeting Intelligence</h3>
                  <p>During site meeting, foreman mentions concrete delays. Sarah already has alternatives queued up thanks to Budget Guardian's morning brief. Decision made in 5 minutes instead of days.</p>
                </div>
              </div>

              {/* 10:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">10:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-monitor">TRACK</div>
                  <h3>Real-time Budget Tracking</h3>
                  <p>Every invoice and time card automatically flows into Budget Guardian. Sarah watches the budget dashboard update in real-time as expenses are logged.</p>
                  <div className="timeline-data">
                    <div className="data-point">Labor: <span className="on-budget">2% under</span></div>
                    <div className="data-point">Materials: <span className="over-budget">12% over</span></div>
                    <div className="data-point">Equipment: <span className="on-budget">On track</span></div>
                  </div>
                </div>
              </div>

              {/* 12:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">12:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-predict">PREDICT</div>
                  <h3>Lunch Break Predictions</h3>
                  <p>During lunch, Sarah checks Budget Guardian's weekly forecast. AI predicts next week's electrical work will finish $12K under budget due to efficient crew performance.</p>
                  <div className="timeline-opportunity">
                    <strong>Opportunity Identified:</strong> Reallocate savings to upgrade fixtures, increasing project value.
                  </div>
                </div>
              </div>

              {/* 2:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">2:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-optimize">OPTIMIZE</div>
                  <h3>Change Order Impact Analysis</h3>
                  <p>Client requests bathroom upgrade. Budget Guardian instantly calculates: "Cost: $23K, Impact on timeline: 4 days, Effect on overall profit margin: -2.3%"</p>
                  <div className="timeline-decision">
                    <strong>Decision Support:</strong> Recommend alternative upgrade saving $8K with same aesthetic impact.
                  </div>
                </div>
              </div>

              {/* 4:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">4:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-report">REPORT</div>
                  <h3>Stakeholder Communication</h3>
                  <p>Budget Guardian auto-generates client update: "Project 87% complete, 3% under budget, 2 days ahead of schedule. Next milestone: Final inspections scheduled for Tuesday."</p>
                </div>
              </div>

              {/* 5:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">5:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-plan">PLAN</div>
                  <h3>Tomorrow's Action Items</h3>
                  <p>Before leaving, Sarah reviews Budget Guardian's recommendations for tomorrow: "Schedule final plumbing inspection, confirm flooring delivery timing, review electrical final costs."</p>
                  <div className="timeline-peace">
                    <strong>Peace of Mind:</strong> Every detail tracked, nothing falls through the cracks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="impact-section bg-light">
          <div className="container">
            <h2 className="section-title">The Bottom Line Impact</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Cost Overruns Prevented</h3>
                <div className="metric-value">$847K</div>
                <p>Average savings per project over 6 months</p>
              </div>
              <div className="metric-card">
                <h3>Budget Accuracy</h3>
                <div className="metric-value">94.7%</div>
                <p>Final costs vs. predicted costs</p>
              </div>
              <div className="metric-card">
                <h3>Early Warning Time</h3>
                <div className="metric-value">2.3 weeks</div>
                <p>Average advance notice of budget issues</p>
              </div>
              <div className="metric-card">
                <h3>Admin Time Saved</h3>
                <div className="metric-value">18 hrs/week</div>
                <p>Less time on budget tracking and reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="technical-section">
          <div className="container">
            <h2 className="section-title">How Budget Guardian Works</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">LEARN</div>
                <h3>Historical Analysis</h3>
                <p>Analyzes patterns from 500+ completed projects to identify cost risk factors and predict overruns with 94% accuracy.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">WATCH</div>
                <h3>Real-time Monitoring</h3>
                <p>Connects to accounting systems, supplier invoices, and time tracking to monitor every expense as it happens.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">ALERT</div>
                <h3>Predictive Warnings</h3>
                <p>Machine learning models identify budget drift 2-3 weeks before traditional reporting methods catch issues.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">GUIDE</div>
                <h3>Action Recommendations</h3>
                <p>Provides specific, actionable solutions with cost-benefit analysis and alternative vendor suggestions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="integration-section bg-light">
          <div className="container">
            <h2 className="section-title">Seamless Integration</h2>
            <div className="integration-grid">
              <div className="integration-item">
                <h4>QuickBooks/Sage Integration</h4>
                <p>Automatic expense categorization and budget variance reporting</p>
              </div>
              <div className="integration-item">
                <h4>Project Management Tools</h4>
                <p>Syncs with Procore, Buildertrend, and custom PM systems</p>
              </div>
              <div className="integration-item">
                <h4>Supplier Networks</h4>
                <p>Real-time pricing updates and alternative supplier recommendations</p>
              </div>
              <div className="integration-item">
                <h4>Mobile Accessibility</h4>
                <p>Full dashboard access and alerts on any device, anywhere</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Preview */}
        <section className="roi-preview">
          <div className="container">
            <div className="roi-card">
              <h3>Budget Guardian ROI Calculator</h3>
              <p>For a $2M annual construction volume:</p>
              <div className="roi-breakdown">
                <div className="roi-item">
                  <span className="roi-label">Typical cost overruns prevented:</span>
                  <span className="roi-value">$147K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Admin time savings (18hrs/week):</span>
                  <span className="roi-value">$47K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Budget Guardian investment:</span>
                  <span className="roi-value">$24K/year</span>
                </div>
                <div className="roi-total">
                  <span className="roi-label"><strong>Net ROI:</strong></span>
                  <span className="roi-value"><strong>$170K (708% return)</strong></span>
                </div>
              </div>
              <a href="/apply" className="btn-primary">Calculate Your ROI</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <h2>Stop Budget Surprises Before They Start</h2>
            <p className="cta-subtitle">
              Join 200+ construction companies using Budget Guardian to protect their profit margins
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large">Apply for Early Access</a>
              <a href="/case-studies" className="btn-secondary-outline">See Case Studies</a>
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