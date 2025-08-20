import { Navigation } from '../../components/navigation'

export const CommunicationHubPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Communication Hub - Developer Dopamine AI Agents</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="AI that orchestrates perfect communication between crews, clients, and contractors. Never miss a critical message or let miscommunication derail your project again." />
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
                  <span className="badge-text">COMMUNICATION HUB</span>
                </div>
                <h1 className="hero-headline">Communication Hub</h1>
                <p className="hero-subheadline">
                  AI that makes sure the right people get the right information at exactly the right time—automatically, every time.
                </p>
                <div className="impact-stats">
                  <div className="stat-item">
                    <span className="stat-number">78%</span>
                    <span className="stat-label">Faster Issue Resolution</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5.4hrs</span>
                    <span className="stat-label">Daily Communication Time Saved</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">94%</span>
                    <span className="stat-label">Client Satisfaction Score</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day in the Life Section */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title">A Day in the Life with Communication Hub</h2>
            <p className="section-subtitle">Follow Project Manager Lisa as Communication Hub transforms her daily coordination challenges</p>
            
            <div className="timeline">
              {/* 6:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">6:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-brief">BRIEF</div>
                  <h3>Smart Morning Digest</h3>
                  <p>Lisa receives her AI-generated morning brief: "3 urgent items require attention: Electrical inspection moved to 10 AM (affected teams notified), concrete delivery delayed 2 hours (crews reassigned), client requested kitchen cabinet update (quotes being gathered)."</p>
                  <div className="timeline-impact">
                    <strong>Without AI:</strong> Lisa spends first 90 minutes checking 47 messages, emails, and voicemails to piece together the situation.
                  </div>
                </div>
              </div>

              {/* 7:15 AM */}
              <div className="timeline-item">
                <div className="timeline-time">7:15 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-coordinate">SYNC</div>
                  <h3>Automatic Crew Coordination</h3>
                  <p>Communication Hub detects the concrete delay and automatically notifies affected teams with specific instructions: "Framers: start interior partition walls, Electrical: begin second-floor rough-in, Plumbers: complete upstairs bathroom connections."</p>
                  <div className="timeline-metrics">
                    <span className="metric">Teams Notified: <strong>7</strong></span>
                    <span className="metric">Instructions Sent: <strong>14</strong></span>
                    <span className="metric">Response Time: <strong>3 minutes</strong></span>
                  </div>
                </div>
              </div>

              {/* 8:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">8:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-translate">TRANSLATE</div>
                  <h3>Multi-Language Crew Communication</h3>
                  <p>Foreman Carlos (Spanish) reports foundation issue. Communication Hub translates his voice message to English for Lisa, then translates her response and technical specifications back to Spanish for the concrete crew. Structural engineer receives English technical summary.</p>
                  <div className="timeline-benefit">
                    <strong>AI Advantage:</strong> Zero miscommunication across language barriers, technical accuracy maintained.
                  </div>
                </div>
              </div>

              {/* 9:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">9:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-escalate">ESCALATE</div>
                  <h3>Intelligent Issue Escalation</h3>
                  <p>Plumber discovers pipe conflict with HVAC duct. Communication Hub recognizes this as a "critical path issue" and instantly creates a group chat with plumber, HVAC contractor, and structural engineer. Shares relevant blueprint sections and suggests 3 solutions.</p>
                  <div className="timeline-urgency">
                    <strong>Priority Routing:</strong> Critical decisions reach decision-makers within 4 minutes, not 4 hours.
                  </div>
                </div>
              </div>

              {/* 10:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">10:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-update">UPDATE</div>
                  <h3>Client Communication Automation</h3>
                  <p>City inspector arrives early for electrical inspection. Communication Hub automatically generates client update: "Good news! Electrical inspection happening now, 2 hours ahead of schedule. Expect final electrical sign-off by noon. Kitchen cabinet installation can now begin tomorrow as planned."</p>
                  <div className="timeline-data">
                    <div className="data-point">Update Speed: <strong>Real-time</strong></div>
                    <div className="data-point">Client Response: <strong>Positive</strong></div>
                    <div className="data-point">Confidence Level: <strong>High</strong></div>
                  </div>
                </div>
              </div>

              {/* 12:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">12:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-resolve">RESOLVE</div>
                  <h3>Supplier Issue Resolution</h3>
                  <p>Tile supplier calls about discontinued bathroom tile. Communication Hub immediately loops in client with photos of 4 similar alternatives, gets client approval for option 2 via text, and confirms new delivery schedule with installer. Issue resolved in 23 minutes.</p>
                  <div className="timeline-efficiency">
                    <strong>Resolution Speed:</strong> 23 minutes vs. typical 2-3 day approval cycle.
                  </div>
                </div>
              </div>

              {/* 1:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">1:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-prevent">PREVENT</div>
                  <h3>Proactive Conflict Prevention</h3>
                  <p>Communication Hub analyzes tomorrow's schedule and detects potential conflict: Painters scheduled while flooring installers still working. Automatically suggests solution: "Delay paint crew start by 3 hours OR reassign to second-floor bedrooms first."</p>
                  <div className="timeline-prevention">
                    <strong>Conflict Avoidance:</strong> Schedule clash prevented 18 hours before it would have occurred.
                  </div>
                </div>
              </div>

              {/* 2:45 PM */}
              <div className="timeline-item">
                <div className="timeline-time">2:45 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-collaborate">COLLABORATE</div>
                  <h3>Emergency Response Coordination</h3>
                  <p>Water leak discovered in basement. Communication Hub instantly creates emergency response team: plumber (5 min ETA), restoration company (20 min ETA), insurance adjuster (phone), client (text with photos). Everyone gets real-time updates as situation develops.</p>
                  <div className="timeline-emergency">
                    <strong>Crisis Management:</strong> Full emergency response coordinated in under 6 minutes.
                  </div>
                </div>
              </div>

              {/* 3:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">3:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-document">DOCUMENT</div>
                  <h3>Automatic Documentation</h3>
                  <p>All communications about the water leak are automatically compiled into an incident report with timeline, photos, decisions made, and action items. Insurance company receives structured report immediately. No manual documentation needed.</p>
                  <div className="timeline-documentation">
                    <strong>Admin Relief:</strong> Complete incident documentation generated automatically.
                  </div>
                </div>
              </div>

              {/* 4:15 PM */}
              <div className="timeline-item">
                <div className="timeline-time">4:15 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-plan">PLAN</div>
                  <h3>Tomorrow's Communication Plan</h3>
                  <p>Communication Hub prepares tomorrow's schedule: "Morning standup at 7 AM (9 attendees), client walkthrough at 2 PM (send photo update at noon), final plumbing inspection at 3 PM (coordinate with city inspector and plumber)."</p>
                  <div className="timeline-preparation">
                    <strong>Proactive Planning:</strong> Tomorrow's critical communications scheduled and automated.
                  </div>
                </div>
              </div>

              {/* 5:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">5:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-summarize">SUMMARY</div>
                  <h3>Daily Communication Digest</h3>
                  <p>End-of-day summary auto-generated for all stakeholders: client gets progress update with photos, crews get tomorrow's priorities, suppliers get delivery confirmations, inspectors get appointment confirmations. 23 personalized messages sent automatically.</p>
                  <div className="timeline-completion">
                    <strong>Perfect Closure:</strong> Everyone informed, aligned, and prepared for tomorrow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="impact-section bg-light">
          <div className="container">
            <h2 className="section-title">Communication Intelligence Results</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Issue Resolution Speed</h3>
                <div className="metric-value">78% faster</div>
                <p>From problem identification to solution implementation</p>
              </div>
              <div className="metric-card">
                <h3>Communication Time Saved</h3>
                <div className="metric-value">5.4hrs/day</div>
                <p>Less time on phone calls, emails, and meetings</p>
              </div>
              <div className="metric-card">
                <h3>Client Satisfaction</h3>
                <div className="metric-value">94%</div>
                <p>Average client satisfaction with project communication</p>
              </div>
              <div className="metric-card">
                <h3>Miscommunication Incidents</h3>
                <div className="metric-value">87% reduction</div>
                <p>Fewer costly mistakes due to poor communication</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="technical-section">
          <div className="container">
            <h2 className="section-title">How Communication Hub Works</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">ROUTE</div>
                <h3>Intelligent Message Routing</h3>
                <p>AI understands message content, urgency, and context to route communications to the right people with appropriate priority levels.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">CONTEXT</div>
                <h3>Context-Aware Responses</h3>
                <p>System maintains project context across all communications, providing relevant background information and suggesting optimal responses.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">MULTI</div>
                <h3>Multi-Channel Integration</h3>
                <p>Seamlessly connects SMS, email, voice, project management tools, and mobile apps into one unified communication stream.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">LEARN</div>
                <h3>Learning Communication Patterns</h3>
                <p>Machine learning identifies communication patterns, preferences, and optimal timing for different stakeholder types and situations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Communication Features */}
        <section className="features-section bg-light">
          <div className="container">
            <h2 className="section-title">Complete Communication Management</h2>
            <div className="features-grid">
              <div className="feature-group">
                <h4>Message Intelligence</h4>
                <ul>
                  <li>Automatic message prioritization</li>
                  <li>Content analysis and routing</li>
                  <li>Sentiment detection and escalation</li>
                  <li>Language translation (12+ languages)</li>
                  <li>Voice-to-text conversion</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Stakeholder Management</h4>
                <ul>
                  <li>Client communication automation</li>
                  <li>Contractor coordination workflows</li>
                  <li>Supplier update notifications</li>
                  <li>Inspector scheduling integration</li>
                  <li>Emergency contact protocols</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Documentation & Compliance</h4>
                <ul>
                  <li>Automatic conversation logging</li>
                  <li>Decision documentation</li>
                  <li>Change order communication trails</li>
                  <li>Compliance report generation</li>
                  <li>Audit trail maintenance</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Analytics & Insights</h4>
                <ul>
                  <li>Communication efficiency metrics</li>
                  <li>Response time analysis</li>
                  <li>Issue resolution tracking</li>
                  <li>Stakeholder satisfaction scoring</li>
                  <li>Communication pattern insights</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="integration-section">
          <div className="container">
            <h2 className="section-title">Universal Communication Integration</h2>
            <div className="integration-grid">
              <div className="integration-item">
                <h4>Email & Messaging Platforms</h4>
                <p>Works with Gmail, Outlook, Slack, Microsoft Teams, and all major messaging platforms</p>
              </div>
              <div className="integration-item">
                <h4>Project Management Tools</h4>
                <p>Syncs with Procore, Buildertrend, Monday.com, and other PM platforms for unified communication</p>
              </div>
              <div className="integration-item">
                <h4>Phone & Voice Systems</h4>
                <p>Integrates with VoIP systems, mobile carriers, and voice-to-text services for complete coverage</p>
              </div>
              <div className="integration-item">
                <h4>Document & File Sharing</h4>
                <p>Connects to Google Drive, Dropbox, SharePoint for seamless document sharing in conversations</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Preview */}
        <section className="roi-preview">
          <div className="container">
            <div className="roi-card">
              <h3>Communication Hub ROI Calculator</h3>
              <p>For a construction team managing 8 active projects:</p>
              <div className="roi-breakdown">
                <div className="roi-item">
                  <span className="roi-label">Communication time savings (5.4hrs/day):</span>
                  <span className="roi-value">$140K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Faster issue resolution (78% improvement):</span>
                  <span className="roi-value">$89K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Reduced miscommunication costs:</span>
                  <span className="roi-value">$67K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Communication Hub investment:</span>
                  <span className="roi-value">$28K/year</span>
                </div>
                <div className="roi-total">
                  <span className="roi-label"><strong>Net ROI:</strong></span>
                  <span className="roi-value"><strong>$268K (957% return)</strong></span>
                </div>
              </div>
              <a href="/apply" className="btn-primary">Calculate Your ROI</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <h2>End Communication Chaos Forever</h2>
            <p className="cta-subtitle">
              Join 160+ construction companies using Communication Hub to orchestrate flawless project coordination
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large">Apply for Early Access</a>
              <a href="/case-studies" className="btn-secondary-outline">See Case Studies</a>
            </div>
            <p className="cta-note">Full team onboarding completed in 48 hours</p>
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
                  <a href="/use-cases/workforce-tracker">Workforce Tracker</a>
                  <a href="/use-cases/communication-hub">Communication Hub</a>
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