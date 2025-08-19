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
              <h1>Developer Portal</h1>
              <p>Connect to your AI agents and backend automation systems</p>
              <div className="portal-status">
                <div className="status-item">
                  <span className="status-label">Backend Status:</span>
                  <span className="status-value online">Connected</span>
                </div>
                <div className="status-item">
                  <span className="status-label">Automation Workflows:</span>
                  <span className="status-value ready">Ready</span>
                </div>
                <div className="status-item">
                  <span className="status-label">User Login:</span>
                  <span className="status-value pending">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Status Dashboard */}
        <section className="integration-dashboard">
          <div className="container">
            <h2>Backend Integration Status</h2>
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

        {/* Coming Soon Features */}
        <section className="coming-soon bg-dark text-white">
          <div className="container">
            <h2>Coming Soon (After Supabase Setup)</h2>
            <div className="features-preview">
              <div className="preview-item">
                <div className="preview-icon">🔐</div>
                <h3>Secure User Login</h3>
                <p>Supabase-powered authentication with role-based access control</p>
              </div>
              <div className="preview-item">
                <div className="preview-icon">📋</div>
                <h3>Personal Dashboard</h3>
                <p>Track your AI agent performance, ROI metrics, and project status</p>
              </div>
              <div className="preview-item">
                <div className="preview-icon">⚙️</div>
                <h3>Agent Configuration</h3>
                <p>Customize your AI agents for specific project types and workflows</p>
              </div>
              <div className="preview-item">
                <div className="preview-icon">📈</div>
                <h3>Advanced Analytics</h3>
                <p>Detailed reporting on cost savings, time efficiency, and project outcomes</p>
              </div>
            </div>
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