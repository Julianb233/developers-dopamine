import { Navigation } from '../../components/navigation'

export const WorkforceTrackerPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Workforce Tracker - Developer Dopamine AI Agents</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="AI-powered workforce management that optimizes crew deployment, predicts labor needs, and eliminates scheduling conflicts before they impact your projects." />
      </head>
      <body>
        <Navigation />

        {/* Hero Section */}
        <section className="hero-section bg-primary text-white">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="badge text-accent">CREW</div>
                <h1 className="hero-title">Workforce Tracker</h1>
                <p className="hero-subtitle">
                  AI that knows exactly which crew goes where, when they'll finish, and who needs backup—before your foreman even thinks to ask.
                </p>
                <div className="impact-stats">
                  <div className="stat-item">
                    <span className="stat-number">34%</span>
                    <span className="stat-label">Better Labor Efficiency</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">6.2hrs</span>
                    <span className="stat-label">Daily Admin Time Saved</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">91%</span>
                    <span className="stat-label">Schedule Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day in the Life Section */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title">A Day in the Life with Workforce Tracker</h2>
            <p className="section-subtitle">Follow Site Supervisor Carlos as Workforce Tracker transforms his daily crew management</p>
            
            <div className="timeline">
              {/* 5:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">5:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-predict">PREDICT</div>
                  <h3>Early Morning Intelligence Brief</h3>
                  <p>Carlos checks Workforce Tracker over coffee. AI predicts: "Concrete crew will finish 2.5 hours early today. Electrical team delayed until 11 AM due to permit issue. Recommend reassigning 3 framers to help prep electrical rough-in."</p>
                  <div className="timeline-impact">
                    <strong>Without AI:</strong> Carlos discovers the mismatch at 9 AM, losing 4 hours of productivity.
                  </div>
                </div>
              </div>

              {/* 6:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">6:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-optimize">OPTIMIZE</div>
                  <h3>Crew Deployment Strategy</h3>
                  <p>Based on weather forecast (20% rain chance at 2 PM), Workforce Tracker suggests: "Move exterior siding work to morning. Schedule interior electrical during afternoon window. Deploy roofing crew to second site."</p>
                  <div className="timeline-metrics">
                    <span className="metric">Weather Impact: <strong>Minimized</strong></span>
                    <span className="metric">Crew Utilization: <strong>97%</strong></span>
                  </div>
                </div>
              </div>

              {/* 7:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">7:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-track">TRACK</div>
                  <h3>Real-time Crew Check-in</h3>
                  <p>As crews arrive, Workforce Tracker automatically logs attendance via mobile app. Immediately flags: "Jimmy (electrician) called in sick. Backup electrician Tom can arrive by 8:30 AM from Riverside project."</p>
                  <div className="timeline-benefit">
                    <strong>AI Advantage:</strong> Backup resources identified and deployed within minutes, not hours.
                  </div>
                </div>
              </div>

              {/* 8:15 AM */}
              <div className="timeline-item">
                <div className="timeline-time">8:15 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-alert">ALERT</div>
                  <h3>Skill Gap Detection</h3>
                  <p>Plumber discovers unexpected tile work needed in bathroom 3. Workforce Tracker instantly identifies: "Maria (tile specialist) available from Oak Street project at 10 AM. Will extend her day by 2 hours for $340 vs. $890 emergency contractor rate."</p>
                  <div className="timeline-savings">
                    <strong>Cost Avoidance:</strong> $550 saved by optimal crew reallocation.
                  </div>
                </div>
              </div>

              {/* 10:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">10:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-monitor">MONITOR</div>
                  <h3>Productivity Pulse Check</h3>
                  <p>Workforce Tracker analyzes morning productivity: Framing crew at 112% of expected pace, concrete team at 94%. Automatically adjusts afternoon schedules and alerts that kitchen cabinets can be delivered a day early.</p>
                  <div className="timeline-data">
                    <div className="data-point">Framing: <span className="ahead-schedule">12% ahead</span></div>
                    <div className="data-point">Concrete: <span className="on-schedule">On track</span></div>
                    <div className="data-point">Electrical: <span className="behind-schedule">2hrs delayed</span></div>
                  </div>
                </div>
              </div>

              {/* 12:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">12:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-balance">BALANCE</div>
                  <h3>Lunch Break Optimization</h3>
                  <p>Instead of everyone stopping at noon, Workforce Tracker suggests staggered breaks: concrete crew lunches now (pour completed), framers at 12:30 (natural stopping point), electricians at 1:00 (caught up from delay).</p>
                  <div className="timeline-efficiency">
                    <strong>Efficiency Gain:</strong> Maintains workflow momentum, saves 45 minutes of downtime.
                  </div>
                </div>
              </div>

              {/* 2:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">2:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-adapt">ADAPT</div>
                  <h3>Weather Contingency Execution</h3>
                  <p>Light rain starts as predicted. Workforce Tracker seamlessly shifts exterior crews indoors: siding team moves to interior trim work, landscaping crew starts basement waterproofing. Zero downtime.</p>
                  <div className="timeline-adaptation">
                    <strong>Weather Response:</strong> Plan B executed automatically, productivity maintained at 89%.
                  </div>
                </div>
              </div>

              {/* 3:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">3:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-plan">PLAN</div>
                  <h3>Tomorrow's Crew Planning</h3>
                  <p>Based on today's progress, Workforce Tracker auto-generates tomorrow's crew assignments: "HVAC rough-in ready to start. Need 4 ductwork specialists. Jake and crew available from completing Pine Street job. Electrical can begin second-floor circuits."</p>
                  <div className="timeline-preparation">
                    <strong>Proactive Planning:</strong> Tomorrow's crew assignments optimized before today ends.
                  </div>
                </div>
              </div>

              {/* 4:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">4:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-report">REPORT</div>
                  <h3>End-of-Day Analytics</h3>
                  <p>Workforce Tracker generates daily report: 8.2 productive hours per worker (company average: 6.7), zero safety incidents, $2,340 saved through optimal crew deployment. Total project completion: 73.4%.</p>
                  <div className="timeline-results">
                    <strong>Daily Impact:</strong> 23% above average productivity, significant cost savings.
                  </div>
                </div>
              </div>

              {/* 5:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">5:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-learn">LEARN</div>
                  <h3>Continuous Improvement</h3>
                  <p>As crews clock out, Workforce Tracker analyzes the day's patterns to improve future predictions: "Concrete curing time 15% faster in current weather. Update scheduling algorithm. Maria's tile work 20% above estimate—flag for future kitchen projects."</p>
                  <div className="timeline-evolution">
                    <strong>AI Evolution:</strong> Every day makes the system smarter and more accurate.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="impact-section bg-light">
          <div className="container">
            <h2 className="section-title">Workforce Intelligence Results</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Labor Efficiency Increase</h3>
                <div className="metric-value">34%</div>
                <p>More productive hours per worker per day</p>
              </div>
              <div className="metric-card">
                <h3>Admin Time Reduction</h3>
                <div className="metric-value">6.2hrs/day</div>
                <p>Less time on scheduling and coordination</p>
              </div>
              <div className="metric-card">
                <h3>Schedule Accuracy</h3>
                <div className="metric-value">91%</div>
                <p>Predicted vs. actual completion times</p>
              </div>
              <div className="metric-card">
                <h3>Emergency Labor Costs</h3>
                <div className="metric-value">68% less</div>
                <p>Reduced need for expensive backup crews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="technical-section">
          <div className="container">
            <h2 className="section-title">How Workforce Tracker Works</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">SKILL</div>
                <h3>Skill Matrix Intelligence</h3>
                <p>Maintains detailed profiles of every worker's skills, certifications, productivity rates, and availability patterns for optimal matching.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">PREDICT</div>
                <h3>Predictive Scheduling</h3>
                <p>Machine learning models predict task completion times based on historical data, weather, crew composition, and project complexity.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">ADAPT</div>
                <h3>Dynamic Reallocation</h3>
                <p>Real-time optimization engine continuously adjusts crew assignments based on progress updates, delays, and changing conditions.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">MOBILE</div>
                <h3>Mobile Workforce App</h3>
                <p>Simple mobile interface for time tracking, progress updates, and instant communication between field and office.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Workforce Management Features */}
        <section className="features-section bg-light">
          <div className="container">
            <h2 className="section-title">Complete Workforce Management</h2>
            <div className="features-grid">
              <div className="feature-group">
                <h4>Scheduling & Planning</h4>
                <ul>
                  <li>Predictive crew assignments</li>
                  <li>Multi-project resource balancing</li>
                  <li>Weather-responsive scheduling</li>
                  <li>Skill-based task matching</li>
                  <li>Overtime optimization</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Real-time Tracking</h4>
                <ul>
                  <li>GPS-enabled time tracking</li>
                  <li>Progress milestone monitoring</li>
                  <li>Productivity analytics</li>
                  <li>Safety incident reporting</li>
                  <li>Quality checkpoint logging</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Performance Analytics</h4>
                <ul>
                  <li>Individual worker metrics</li>
                  <li>Crew efficiency analysis</li>
                  <li>Cost per task tracking</li>
                  <li>Training need identification</li>
                  <li>Performance trend analysis</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Integration & Communication</h4>
                <ul>
                  <li>Payroll system sync</li>
                  <li>Project management integration</li>
                  <li>Instant crew messaging</li>
                  <li>Client progress updates</li>
                  <li>Supplier coordination alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Benefits */}
        <section className="integration-section">
          <div className="container">
            <h2 className="section-title">Seamless Integration</h2>
            <div className="integration-grid">
              <div className="integration-item">
                <h4>Payroll Systems</h4>
                <p>Direct integration with ADP, QuickBooks, and major payroll providers for automatic time capture</p>
              </div>
              <div className="integration-item">
                <h4>Project Management</h4>
                <p>Syncs with Procore, Buildertrend, and scheduling tools for unified project oversight</p>
              </div>
              <div className="integration-item">
                <h4>HR Systems</h4>
                <p>Connects with HRIS for skills tracking, certification management, and performance reviews</p>
              </div>
              <div className="integration-item">
                <h4>Safety Platforms</h4>
                <p>Integrates with safety management systems for incident tracking and compliance reporting</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Preview */}
        <section className="roi-preview">
          <div className="container">
            <div className="roi-card">
              <h3>Workforce Tracker ROI Calculator</h3>
              <p>For a construction company with 25 field workers:</p>
              <div className="roi-breakdown">
                <div className="roi-item">
                  <span className="roi-label">Improved labor efficiency (34%):</span>
                  <span className="roi-value">$312K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Reduced admin overhead (6.2hrs/day):</span>
                  <span className="roi-value">$78K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Emergency labor cost reduction:</span>
                  <span className="roi-value">$45K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Workforce Tracker investment:</span>
                  <span className="roi-value">$42K/year</span>
                </div>
                <div className="roi-total">
                  <span className="roi-label"><strong>Net ROI:</strong></span>
                  <span className="roi-value"><strong>$393K (936% return)</strong></span>
                </div>
              </div>
              <a href="/apply" className="btn-primary">Calculate Your ROI</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <h2>Transform Your Workforce Into a Precision Machine</h2>
            <p className="cta-subtitle">
              Join 180+ construction companies using Workforce Tracker to optimize their human capital
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large">Apply for Early Access</a>
              <a href="/case-studies" className="btn-secondary-outline">See Case Studies</a>
            </div>
            <p className="cta-note">Mobile app training completed in 1 hour per worker</p>
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