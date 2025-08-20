import { Navigation } from '../components/navigation'

export const HowItWorksPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>How It Works - Developer Dopamine AI Agents</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="Learn how Developer Dopamine AI agents transform construction operations through intelligent automation, predictive analytics, and seamless integration." />
      </head>
      <body>
        <Navigation />

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background-pattern"></div>
          <div className="hero-gradient-overlay"></div>
          <div className="thunder-background">
            <div className="lightning-bolt lightning-1"></div>
            <div className="lightning-bolt lightning-2"></div>
            <div className="lightning-bolt lightning-3"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="hero-badge">
                  <span className="badge-text">HOW IT WORKS</span>
                </div>
                <h1 className="hero-headline" style={{fontSize: 'var(--fluid-text-6xl)', lineHeight: '1.1'}}>
                  AI That Actually Works for Construction
                  <span className="lightning-flash" style={{fontSize: 'var(--fluid-text-4xl)', marginLeft: 'var(--fluid-md)'}}>⚡</span>
                </h1>
                <p className="hero-subheadline" style={{fontSize: 'var(--fluid-text-lg)', lineHeight: '1.6', maxWidth: '42rem'}}>
                  No complicated setup. No months of training. Just intelligent automation that starts saving you time and money from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics Banner */}
        <section className="success-metrics-banner" style={{background: 'var(--gradient-primary)', color: 'white', padding: 'var(--fluid-xl) 0'}}>
          <div className="container">
            <h2 style={{textAlign: 'center', fontSize: 'var(--fluid-text-3xl)', marginBottom: 'var(--fluid-lg)'}}>Proven Results From Real Projects</h2>
            <div className="metrics-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--fluid-lg)', textAlign: 'center'}}>
              <div className="metric-item">
                <div style={{fontSize: 'var(--fluid-text-4xl)', fontWeight: 'bold'}}>$12M+</div>
                <div style={{fontSize: 'var(--fluid-text-base)', opacity: '0.9'}}>Total Client Savings</div>
              </div>
              <div className="metric-item">
                <div style={{fontSize: 'var(--fluid-text-4xl)', fontWeight: 'bold'}}>670%</div>
                <div style={{fontSize: 'var(--fluid-text-base)', opacity: '0.9'}}>Average ROI</div>
              </div>
              <div className="metric-item">
                <div style={{fontSize: 'var(--fluid-text-4xl)', fontWeight: 'bold'}}>48hrs</div>
                <div style={{fontSize: 'var(--fluid-text-base)', opacity: '0.9'}}>Setup Time</div>
              </div>
              <div className="metric-item">
                <div style={{fontSize: 'var(--fluid-text-4xl)', fontWeight: 'bold'}}>200+</div>
                <div style={{fontSize: 'var(--fluid-text-base)', opacity: '0.9'}}>Companies Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="process-section">
          <div className="container">
            <h2 className="section-title" style={{fontSize: 'var(--fluid-text-5xl)', textAlign: 'center', marginBottom: 'var(--fluid-2xl)'}}>Three Steps to AI-Powered Operations</h2>
            
            <div className="process-grid">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Connect Your Systems</h3>
                  <p>We integrate with your existing project management, accounting, and communication tools. No data migration needed.</p>
                  <ul className="step-features">
                    <li>✓ QuickBooks & Sage integration</li>
                    <li>✓ Procore & Buildertrend sync</li>
                    <li>✓ Email & calendar connection</li>
                  </ul>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>AI Learns Your Business</h3>
                  <p>Our agents analyze your historical data and current patterns to understand your unique operations and challenges.</p>
                  <ul className="step-features">
                    <li>✓ Historical project analysis</li>
                    <li>✓ Pattern recognition</li>
                    <li>✓ Custom workflow mapping</li>
                  </ul>
                </div>
              </div>

              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Start Saving Time & Money</h3>
                  <p>Within 48 hours, you'll receive your first AI insights and automated reports. Full benefits typically realized within 2 weeks.</p>
                  <ul className="step-features">
                    <li>✓ Automated reporting</li>
                    <li>✓ Predictive alerts</li>
                    <li>✓ Real-time insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="tech-section bg-light">
          <div className="container">
            <h2 className="section-title" style={{fontSize: 'var(--fluid-text-5xl)', textAlign: 'center', marginBottom: 'var(--fluid-2xl)'}}>Built for Construction Professionals</h2>
            <div className="tech-grid">
              <div className="tech-feature">
                <div className="tech-icon">AI</div>
                <h3>Machine Learning</h3>
                <p>Advanced algorithms trained specifically on construction data patterns and industry best practices.</p>
              </div>
              <div className="tech-feature">
                <div className="tech-icon">SEC</div>
                <h3>Enterprise Security</h3>
                <p>Bank-level encryption, SOC 2 compliance, and complete data privacy protection for your business.</p>
              </div>
              <div className="tech-feature">
                <div className="tech-icon">FAST</div>
                <h3>Real-time Processing</h3>
                <p>Instant analysis and alerts that keep you ahead of problems before they impact your projects.</p>
              </div>
              <div className="tech-feature">
                <div className="tech-icon">SYNC</div>
                <h3>Seamless Integration</h3>
                <p>Works with your existing tools without disrupting your established workflows and processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Story */}
        <section className="client-success-section" style={{background: 'var(--dd-light)', padding: 'var(--fluid-4xl) 0'}}>
          <div className="container">
            <h2 className="section-title" style={{fontSize: 'var(--fluid-text-5xl)', textAlign: 'center', marginBottom: 'var(--fluid-2xl)'}}>Real Client Success Story</h2>
            <div className="success-story-card" style={{background: 'white', padding: 'var(--fluid-2xl)', borderRadius: 'var(--radius-xl)', maxWidth: '800px', margin: '0 auto', boxShadow: 'var(--shadow-xl)'}}>
              <div className="client-info" style={{textAlign: 'center', marginBottom: 'var(--fluid-xl)'}}>
                <h3 style={{fontSize: 'var(--fluid-text-2xl)', color: 'var(--dd-primary)'}}>Metropolitan Builders</h3>
                <p style={{fontSize: 'var(--fluid-text-lg)', color: 'var(--dd-medium)'}}>Commercial Construction • $50M Annual Revenue</p>
              </div>
              <div className="challenge-solution" style={{display: 'grid', gap: 'var(--fluid-xl)', marginBottom: 'var(--fluid-xl)'}}>
                <div className="challenge">
                  <h4 style={{fontSize: 'var(--fluid-text-xl)', color: 'var(--dd-danger)', marginBottom: 'var(--fluid-md)'}}>❌ The Challenge</h4>
                  <p>Projects consistently 20-30% over budget. Manual reporting consumed 15+ hours weekly. Subcontractor delays causing $200K+ in penalties.</p>
                </div>
                <div className="solution">
                  <h4 style={{fontSize: 'var(--fluid-text-xl)', color: 'var(--dd-success)', marginBottom: 'var(--fluid-md)'}}>✅ DD Solution</h4>
                  <p>AI agents automated budget tracking, predictive scheduling, and real-time subcontractor monitoring. Full deployment in 48 hours.</p>
                </div>
              </div>
              <div className="results-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--fluid-lg)', textAlign: 'center'}}>
                <div className="result-item">
                  <div style={{fontSize: 'var(--fluid-text-3xl)', fontWeight: 'bold', color: 'var(--dd-success)'}}>$2.8M</div>
                  <div style={{fontSize: 'var(--fluid-text-sm)'}}>Annual Savings</div>
                </div>
                <div className="result-item">
                  <div style={{fontSize: 'var(--fluid-text-3xl)', fontWeight: 'bold', color: 'var(--dd-success)'}}>40%</div>
                  <div style={{fontSize: 'var(--fluid-text-sm)'}}>Faster Delivery</div>
                </div>
                <div className="result-item">
                  <div style={{fontSize: 'var(--fluid-text-3xl)', fontWeight: 'bold', color: 'var(--dd-success)'}}>95%</div>
                  <div style={{fontSize: 'var(--fluid-text-sm)'}}>On-Time Projects</div>
                </div>
                <div className="result-item">
                  <div style={{fontSize: 'var(--fluid-text-3xl)', fontWeight: 'bold', color: 'var(--dd-success)'}}>15hrs</div>
                  <div style={{fontSize: 'var(--fluid-text-sm)'}}>Weekly Time Saved</div>
                </div>
              </div>
              <div className="testimonial" style={{marginTop: 'var(--fluid-xl)', padding: 'var(--fluid-lg)', borderLeft: '4px solid var(--dd-primary)', background: 'var(--dd-light)'}}>
                <p style={{fontSize: 'var(--fluid-text-lg)', fontStyle: 'italic', marginBottom: 'var(--fluid-md)'}}>
                  "DD transformed our entire operation. We went from constant firefighting to predictable profitability. Best business investment we've ever made."
                </p>
                <strong style={{color: 'var(--dd-primary)'}}>- Mike Chen, CEO, Metropolitan Builders</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Timeline */}
        <section className="roi-timeline-section">
          <div className="container">
            <h2 className="section-title" style={{fontSize: 'var(--fluid-text-5xl)', textAlign: 'center', marginBottom: 'var(--fluid-2xl)'}}>Your ROI Timeline</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">Week 1</div>
                <div className="timeline-content">
                  <h3>Setup & Integration</h3>
                  <p>AI agents connect to your systems and begin learning your business patterns.</p>
                  <div className="timeline-impact">Setup complete in 48-72 hours</div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">Week 2-4</div>
                <div className="timeline-content">
                  <h3>First Insights & Savings</h3>
                  <p>Begin receiving automated reports and early warning alerts for budget and schedule risks.</p>
                  <div className="timeline-impact">10-15% time savings on admin tasks</div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">Month 2-3</div>
                <div className="timeline-content">
                  <h3>Full Optimization</h3>
                  <p>AI fully adapted to your workflows. Predictive analytics preventing costly overruns.</p>
                  <div className="timeline-impact">25-40% reduction in project delays</div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-marker">Month 6+</div>
                <div className="timeline-content">
                  <h3>Maximum ROI</h3>
                  <p>Complete transformation of operations. Consistent profitability improvements across all projects.</p>
                  <div className="timeline-impact">Average 400-700% ROI achieved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <div className="urgency-alert" style={{background: 'var(--dd-warning)', padding: 'var(--fluid-md)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--fluid-lg)'}}>
              <strong>⚡ LIMITED: Only 3 New Clients Accepted This Month</strong>
            </div>
            <h2 style={{fontSize: 'var(--fluid-text-4xl)', marginBottom: 'var(--fluid-md)'}}>Ready to Transform Your Construction Business?</h2>
            <p className="cta-subtitle" style={{fontSize: 'var(--fluid-text-lg)', marginBottom: 'var(--fluid-md)'}}>
              Join 200+ construction companies already using AI to increase profits and reduce stress
            </p>
            <div className="guarantee-badge" style={{background: 'var(--dd-success)', padding: 'var(--fluid-md)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--fluid-xl)', display: 'inline-block'}}>
              <strong>🛡️ 20% Savings Guaranteed or You Don't Pay</strong>
            </div>
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large" style={{marginRight: 'var(--fluid-md)'}}>Apply Now</a>
              <a href="/case-studies" className="btn-secondary-outline">See Success Stories</a>
            </div>
            <p className="cta-note" style={{marginTop: 'var(--fluid-lg)'}}>Setup typically completed within 48-72 hours • Personal consultation with Julian</p>
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