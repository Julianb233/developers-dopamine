import { Navigation } from '../components/navigation'

export const PortalPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Developer Portal - Developer Dopamine</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="Access your Developer Dopamine AI agents portal and track your project intelligence." />
      </head>
      <body>
        <Navigation />

        {/* Portal Header */}
        <section className="portal-header bg-primary text-white">
          <div className="container">
            <div className="portal-hero">
              <div className="hero-badge" style={{textAlign: 'center', marginBottom: 'var(--fluid-md)'}}>
                <span className="badge-text">CLIENT DASHBOARD PREVIEW</span>
              </div>
              <h1 style={{fontSize: 'var(--fluid-text-6xl)', lineHeight: '1.1', marginBottom: 'var(--fluid-md)', textAlign: 'center'}}>Your AI Command Center</h1>
              <p style={{fontSize: 'var(--fluid-text-lg)', marginBottom: 'var(--fluid-xl)', textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--fluid-xl)'}}>See how your personalized dashboard will look when you become a DD client. Real-time project intelligence at your fingertips.</p>
              
              <div className="demo-alert" style={{background: 'var(--dd-warning)', padding: 'var(--fluid-md)', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginBottom: 'var(--fluid-xl)'}}>
                <strong>🚀 LIVE DEMO - This is what you'll get as a DD client</strong>
              </div>
              
              <div className="portal-status-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--fluid-lg)', textAlign: 'center'}}>
                <div className="status-card" style={{background: 'rgba(255,255,255,0.1)', padding: 'var(--fluid-lg)', borderRadius: 'var(--radius-lg)'}}>
                  <div style={{fontSize: 'var(--fluid-text-2xl)', marginBottom: 'var(--fluid-sm)'}}>⚡</div>
                  <div className="status-label">AI Agents:</div>
                  <div className="status-value" style={{color: 'var(--dd-success)', fontWeight: 'bold'}}>6 Active</div>
                </div>
                <div className="status-card" style={{background: 'rgba(255,255,255,0.1)', padding: 'var(--fluid-lg)', borderRadius: 'var(--radius-lg)'}}>
                  <div style={{fontSize: 'var(--fluid-text-2xl)', marginBottom: 'var(--fluid-sm)'}}>📊</div>
                  <div className="status-label">Projects Tracked:</div>
                  <div className="status-value" style={{color: 'var(--dd-success)', fontWeight: 'bold'}}>12 Active</div>
                </div>
                <div className="status-card" style={{background: 'rgba(255,255,255,0.1)', padding: 'var(--fluid-lg)', borderRadius: 'var(--radius-lg)'}}>
                  <div style={{fontSize: 'var(--fluid-text-2xl)', marginBottom: 'var(--fluid-sm)'}}>💰</div>
                  <div className="status-label">Monthly Savings:</div>
                  <div className="status-value" style={{color: 'var(--dd-success)', fontWeight: 'bold'}}>$847K</div>
                </div>
                <div className="status-card" style={{background: 'rgba(255,255,255,0.1)', padding: 'var(--fluid-lg)', borderRadius: 'var(--radius-lg)'}}>
                  <div style={{fontSize: 'var(--fluid-text-2xl)', marginBottom: 'var(--fluid-sm)'}}>📈</div>
                  <div className="status-label">ROI This Year:</div>
                  <div className="status-value" style={{color: 'var(--dd-success)', fontWeight: 'bold'}}>670%</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Status Dashboard */}
        <section className="integration-dashboard">
          <div className="container">
            <h2 style={{fontSize: 'var(--fluid-text-4xl)', textAlign: 'center', marginBottom: 'var(--fluid-2xl)'}}>Backend Integration Status</h2>
            <div className="integration-grid">
              <div className="integration-card active">
                <div className="integration-icon">📊</div>
                <h3>Application Processing</h3>
                <p>Backend workflow ready to process developer applications and route to CRM</p>
                <div className="integration-status">
                  <span className="status-badge active">Active</span>
                  <span className="endpoint">/api/apply</span>
                </div>
              </div>

              <div className="integration-card active">
                <div className="integration-icon">📈</div>
                <h3>ROI Calculator</h3>
                <p>Backend endpoint ready to capture ROI calculations and send to automation</p>
                <div className="integration-status">
                  <span className="status-badge active">Active</span>
                  <span className="endpoint">/api/roi-calculator</span>
                </div>
              </div>

              <div className="integration-card active">
                <div className="integration-icon">💬</div>
                <h3>Contact Forms</h3>
                <p>Contact and lead capture forms connected to backend automation workflows</p>
                <div className="integration-status">
                  <span className="status-badge active">Active</span>
                  <span className="endpoint">/api/contact</span>
                </div>
              </div>

              <div className="integration-card active">
                <div className="integration-icon">📊</div>
                <h3>User Journey Tracking</h3>
                <p>Analytics endpoint ready to track user behavior and conversion paths</p>
                <div className="integration-status">
                  <span className="status-badge active">Active</span>
                  <span className="endpoint">/api/track</span>
                </div>
              </div>

              <div className="integration-card pending">
                <div className="integration-icon">🔐</div>
                <h3>User Authentication</h3>
                <p>Supabase integration pending - user login system will be enabled once configured</p>
                <div className="integration-status">
                  <span className="status-badge pending">Pending Supabase</span>
                  <span className="endpoint">Not Yet Available</span>
                </div>
              </div>

              <div className="integration-card pending">
                <div className="integration-icon">📋</div>
                <h3>User Dashboard</h3>
                <p>Personal dashboard with AI agent status - available after user authentication</p>
                <div className="integration-status">
                  <span className="status-badge pending">Requires Login</span>
                  <span className="endpoint">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Backend Configuration Info */}
        <section className="backend-config bg-light">
          <div className="container">
            <h2>Backend Connection Details</h2>
            <div className="config-grid">
              <div className="config-section">
                <h3>Backend Automation Workflows</h3>
                <div className="workflow-list">
                  <div className="workflow-item">
                    <strong>Application Processing:</strong>
                    <span>Captures developer applications → CRM → Email notifications</span>
                  </div>
                  <div className="workflow-item">
                    <strong>Lead Nurturing:</strong>
                    <span>ROI calculations → Lead scoring → Follow-up sequences</span>
                  </div>
                  <div className="workflow-item">
                    <strong>Contact Management:</strong>
                    <span>Contact forms → Slack notifications → Response automation</span>
                  </div>
                  <div className="workflow-item">
                    <strong>Analytics Pipeline:</strong>
                    <span>User tracking → Data aggregation → Conversion analysis</span>
                  </div>
                </div>
              </div>

              <div className="config-section">
                <h3>CRM Integration</h3>
                <div className="crm-features">
                  <div className="feature-item">
                    <span className="feature-icon">✅</span>
                    <span>Automatic lead creation and scoring</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✅</span>
                    <span>User journey tracking and analysis</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✅</span>
                    <span>Automated follow-up sequences</span>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">✅</span>
                    <span>ROI calculation data capture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="portal-actions">
          <div className="container">
            <h2>Quick Actions</h2>
            <div className="actions-grid">
              <a href="/apply" className="action-card primary">
                <div className="action-icon">🚀</div>
                <h3>Submit Application</h3>
                <p>Apply for Developer Dopamine AI agents access</p>
              </a>

              <a href="/use-cases" className="action-card">
                <div className="action-icon">⚡</div>
                <h3>Explore Use Cases</h3>
                <p>See detailed AI agent capabilities and ROI</p>
              </a>

              <a href="/roi-calculator" className="action-card">
                <div className="action-icon">📊</div>
                <h3>Calculate ROI</h3>
                <p>Get personalized savings estimates</p>
              </a>

              <button className="action-card" onclick="testBackendConnection()">
                <div className="action-icon">🔧</div>
                <h3>Test Backend</h3>
                <p>Verify portal connection status</p>
              </button>
            </div>
          </div>
        </section>

        {/* Get Your Own Dashboard CTA */}
        <section className="dashboard-cta-section" style={{background: 'var(--gradient-primary)', color: 'white', padding: 'var(--fluid-4xl) 0'}}>
          <div className="container" style={{textAlign: 'center'}}>
            <h2 style={{fontSize: 'var(--fluid-text-5xl)', marginBottom: 'var(--fluid-lg)'}}>Want Your Own AI Dashboard?</h2>
            <p style={{fontSize: 'var(--fluid-text-xl)', marginBottom: 'var(--fluid-lg)', maxWidth: '600px', margin: '0 auto var(--fluid-lg)'}}>
              This is just a preview. DD clients get a fully personalized dashboard with real-time data from their projects.
            </p>
            
            <div className="dashboard-benefits" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--fluid-lg)', marginBottom: 'var(--fluid-2xl)', background: 'rgba(255,255,255,0.1)', padding: 'var(--fluid-xl)', borderRadius: 'var(--radius-lg)'}}>
              <div className="benefit-item">
                <div style={{fontSize: 'var(--fluid-text-3xl)', marginBottom: 'var(--fluid-sm)'}}>🎯</div>
                <h4>Real Project Data</h4>
                <p>Live metrics from your actual construction projects</p>
              </div>
              <div className="benefit-item">
                <div style={{fontSize: 'var(--fluid-text-3xl)', marginBottom: 'var(--fluid-sm)'}}>⚡</div>
                <h4>6 AI Agents Working</h4>
                <p>Schedule, budget, document, workforce, communication & supply chain automation</p>
              </div>
              <div className="benefit-item">
                <div style={{fontSize: 'var(--fluid-text-3xl)', marginBottom: 'var(--fluid-sm)'}}>📊</div>
                <h4>Custom Analytics</h4>
                <p>ROI tracking, cost analysis, and performance optimization insights</p>
              </div>
              <div className="benefit-item">
                <div style={{fontSize: 'var(--fluid-text-3xl)', marginBottom: 'var(--fluid-sm)'}}>🛡️</div>
                <h4>Enterprise Security</h4>
                <p>Bank-level encryption and complete data privacy protection</p>
              </div>
            </div>
            
            <div className="urgency-alert" style={{background: 'var(--dd-warning)', padding: 'var(--fluid-lg)', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--fluid-xl)', display: 'inline-block'}}>
              <strong>LIMITED: Only 3 New Clients This Month</strong>
            </div>
            
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large" style={{marginRight: 'var(--fluid-md)', padding: 'var(--fluid-lg) var(--fluid-2xl)', fontSize: 'var(--fluid-text-lg)', background: 'var(--dd-accent)', color: 'white', textDecoration: 'none', borderRadius: 'var(--radius-lg)', fontWeight: 'bold'}}>
                Get Your Dashboard - Apply Now
              </a>
              <a href="/case-studies" className="btn-secondary" style={{padding: 'var(--fluid-lg) var(--fluid-xl)', fontSize: 'var(--fluid-text-base)', border: '2px solid white', color: 'white', textDecoration: 'none', borderRadius: 'var(--radius-lg)'}}>
                See Client Results
              </a>
            </div>
            
            <p style={{marginTop: 'var(--fluid-lg)', fontSize: 'var(--fluid-text-base)', opacity: '0.9'}}>
              20% Savings Guaranteed • 48-Hour Setup • Personal Consultation with Julian
            </p>
          </div>
        </section>

        <footer className="footer bg-dark text-white">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <div className="brand-logo">DEVELOPER DOPAMINE</div>
                <p>AI Agents for Real Estate Development</p>
              </div>
              <div className="footer-links">
                <div className="link-group">
                  <h4>Portal</h4>
                  <a href="/portal">Backend Status</a>
                  <a href="/apply">Submit Application</a>
                  <a href="/roi-calculator">ROI Calculator</a>
                </div>
                <div className="link-group">
                  <h4>Support</h4>
                  <a href="mailto:julian@developerdopamine.com">Contact Julian</a>
                  <a href="/case-studies">Case Studies</a>
                  <a href="/how-it-works">How It Works</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Developer Dopamine. Backend portal ready for your automation workflows.</p>
            </div>
          </div>
        </footer>

        <script src="/static/app.js"></script>
        <script>{`
          // Test backend connection function
          function testBackendConnection() {
            fetch('/api/track', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                event: 'backend-test',
                timestamp: new Date().toISOString(),
                source: 'portal-page'
              })
            })
            .then(response => response.json())
            .then(data => {
              if (data.success) {
                alert('✅ Backend connection successful! Your automation workflows are ready.');
              } else {
                alert('❌ Backend connection failed. Check your webhook configuration.');
              }
            })
            .catch(error => {
              alert('❌ Connection error: ' + error.message);
            });
          }
        `}</script>
      </body>
    </html>
  )
}