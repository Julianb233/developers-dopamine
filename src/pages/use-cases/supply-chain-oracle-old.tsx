import { Navigation } from '../../components/navigation'

export const SupplyChainOraclePage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Supply Chain Oracle - Developer Dopamine AI Agents</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="AI that predicts supply chain disruptions before they happen, finds alternative suppliers instantly, and ensures materials arrive exactly when needed." />
      </head>
      <body>
        <Navigation />

        {/* Hero Section */}
        <section className="hero-section bg-primary text-white">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="badge text-accent">SUPPLY</div>
                <h1 className="hero-title">Supply Chain Oracle</h1>
                <p className="hero-subtitle">
                  AI that sees supply chain problems coming from 3 weeks away and has your backup plan ready before you even know there's a problem.
                </p>
                <div className="impact-stats">
                  <div className="stat-item">
                    <span className="stat-number">86%</span>
                    <span className="stat-label">Delay Prevention Rate</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">$127K</span>
                    <span className="stat-label">Average Annual Savings</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">2.8 weeks</span>
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
            <h2 className="section-title">A Day in the Life with Supply Chain Oracle</h2>
            <p className="section-subtitle">Follow Procurement Manager David as Supply Chain Oracle transforms his daily vendor management</p>
            
            <div className="timeline">
              {/* 6:45 AM */}
              <div className="timeline-item">
                <div className="timeline-time">6:45 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-predict">PREDICT</div>
                  <h3>Proactive Disruption Alert</h3>
                  <p>David gets his morning alert: "Steel supplier experiencing 40% production slowdown due to raw material shortage. Your March 15th delivery at risk. Alternative suppliers Johnson Steel (3 days later, +$8K) and Metro Materials (same date, +$12K) standing by for approval."</p>
                  <div className="timeline-impact">
                    <strong>Without AI:</strong> David discovers the delay on March 14th, causing 2-week project postponement.
                  </div>
                </div>
              </div>

              {/* 7:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">7:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-optimize">OPTIMIZE</div>
                  <h3>Cost-Benefit Analysis</h3>
                  <p>Supply Chain Oracle runs instant analysis: "Johnson Steel option saves $47K vs. 2-week delay costs. Quality certifications confirmed, delivery logistics optimized. Recommend immediate approval. Contract amendments ready for signature."</p>
                  <div className="timeline-metrics">
                    <span className="metric">Cost Analysis: <strong>Complete</strong></span>
                    <span className="metric">Quality Check: <strong>Verified</strong></span>
                    <span className="metric">Logistics: <strong>Optimized</strong></span>
                  </div>
                </div>
              </div>

              {/* 8:15 AM */}
              <div className="timeline-item">
                <div className="timeline-time">8:15 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-monitor">TRACK</div>
                  <h3>Real-time Supply Monitoring</h3>
                  <p>Concrete supplier reports ready for tomorrow's pour. Supply Chain Oracle cross-checks weather forecast (15% rain chance), crew schedules (all confirmed), and site readiness (foundation forms completed). Confirms optimal delivery window: 7:30 AM.</p>
                  <div className="timeline-coordination">
                    <strong>Perfect Timing:</strong> All factors aligned for smooth execution.
                  </div>
                </div>
              </div>

              {/* 9:45 AM */}
              <div className="timeline-item">
                <div className="timeline-time">9:45 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-discover">DISCOVER</div>
                  <h3>Hidden Cost Optimization</h3>
                  <p>While analyzing tile orders, Supply Chain Oracle discovers: "Current supplier charging 23% premium vs. market rate. Alternative supplier TileMax offers identical products, faster delivery, and $15K savings across all bathroom projects."</p>
                  <div className="timeline-savings">
                    <strong>Hidden Opportunity:</strong> $15K savings identified through AI market analysis.
                  </div>
                </div>
              </div>

              {/* 11:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">11:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-negotiate">NEGOTIATE</div>
                  <h3>AI-Powered Negotiation Support</h3>
                  <p>HVAC supplier calls to discuss pricing increase. Supply Chain Oracle provides David with real-time market data: "Average market increase: 8%, their request: 18%. Counter-offer suggested: 10% with volume commitment bonus. Three backup suppliers ready at 12% premium."</p>
                  <div className="timeline-leverage">
                    <strong>Negotiation Power:</strong> Real-time market intelligence and alternatives ready.
                  </div>
                </div>
              </div>

              {/* 12:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">12:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-quality">QUALITY</div>
                  <h3>Quality Assurance Automation</h3>
                  <p>Flooring samples arrive for client approval. Supply Chain Oracle automatically cross-references specifications: "Sample A matches spec 94%, Sample B at 89%, Sample C at 97% but delivery 2 weeks longer. Recommend Sample C with schedule adjustment or Sample A for timeline priority."</p>
                  <div className="timeline-analysis">
                    <strong>Smart Recommendations:</strong> Quality vs. timeline trade-offs quantified and explained.
                  </div>
                </div>
              </div>

              {/* 1:45 PM */}
              <div className="timeline-item">
                <div className="timeline-time">1:45 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-logistics">LOGISTICS</div>
                  <h3>Delivery Orchestration</h3>
                  <p>Multiple deliveries scheduled for Thursday. Supply Chain Oracle optimizes: "Lumber truck at 7 AM (crew starts framing), electrical supplies at 9:30 AM (electricians ready), drywall at 1 PM (framers finishing). Site storage capacity: 87% utilized, optimal flow maintained."</p>
                  <div className="timeline-efficiency">
                    <strong>Logistics Perfection:</strong> Zero wait time, maximum site efficiency, no storage conflicts.
                  </div>
                </div>
              </div>

              {/* 2:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">2:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-risk">RISK</div>
                  <h3>Supply Risk Assessment</h3>
                  <p>Supply Chain Oracle flags emerging risk: "Electrical supplier's key warehouse experiencing labor strike. 15% chance of affecting your orders. Backup supplier pre-qualified and prices locked for 48 hours. Recommend early ordering of critical items."</p>
                  <div className="timeline-prevention">
                    <strong>Risk Mitigation:</strong> Potential disruption identified and countered 2 weeks early.
                  </div>
                </div>
              </div>

              {/* 3:15 PM */}
              <div className="timeline-item">
                <div className="timeline-time">3:15 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-integrate">INTEGRATE</div>
                  <h3>Multi-Project Resource Sharing</h3>
                  <p>Oak Street project needs emergency concrete repair. Supply Chain Oracle identifies: "Downtown project ordered 15% excess concrete (standard buffer). Can redirect 3 yards to Oak Street, saving $890 vs. emergency order. Delivery coordination automated."</p>
                  <div className="timeline-resourcefulness">
                    <strong>Smart Resource Sharing:</strong> Internal efficiency maximized across all projects.
                  </div>
                </div>
              </div>

              {/* 4:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">4:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-forecast">FORECAST</div>
                  <h3>Future Demand Prediction</h3>
                  <p>Based on current project velocity, Supply Chain Oracle forecasts: "June will require 40% more insulation than originally planned due to faster-than-expected progress. Early order discount available: $7K savings if ordered by Friday. Purchase recommendation queued for approval."</p>
                  <div className="timeline-foresight">
                    <strong>Future Vision:</strong> Demand predicted months ahead, savings opportunities captured.
                  </div>
                </div>
              </div>

              {/* 4:45 PM */}
              <div className="timeline-item">
                <div className="timeline-time">4:45 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-report">REPORT</div>
                  <h3>Comprehensive Supply Intelligence</h3>
                  <p>Daily supply chain report auto-generated: "3 disruptions prevented, $23K in savings identified, 97% on-time delivery rate maintained, 4 quality issues caught before delivery. Tomorrow's critical deliveries: 7 scheduled, all confirmed and optimized."</p>
                  <div className="timeline-intelligence">
                    <strong>Complete Visibility:</strong> Every supply chain metric tracked and optimized.
                  </div>
                </div>
              </div>

              {/* 5:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">5:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-evolve">EVOLVE</div>
                  <h3>Supplier Performance Evolution</h3>
                  <p>Supply Chain Oracle updates supplier ratings: "Metro Lumber improved delivery consistency by 34% this quarter, upgraded to Preferred tier. Acme Electric showing quality decline (3 recent issues), downgraded to Standard tier. Updated supplier recommendations for all active projects."</p>
                  <div className="timeline-evolution">
                    <strong>Continuous Improvement:</strong> Supplier network constantly optimized based on performance data.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="impact-section bg-light">
          <div className="container">
            <h2 className="section-title">Supply Chain Intelligence Results</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Disruption Prevention Rate</h3>
                <div className="metric-value">86%</div>
                <p>Supply issues resolved before impacting projects</p>
              </div>
              <div className="metric-card">
                <h3>Annual Cost Savings</h3>
                <div className="metric-value">$127K</div>
                <p>Through optimized sourcing and risk mitigation</p>
              </div>
              <div className="metric-card">
                <h3>Delivery Accuracy</h3>
                <div className="metric-value">97%</div>
                <p>Materials arrive exactly when needed</p>
              </div>
              <div className="metric-card">
                <h3>Procurement Time Saved</h3>
                <div className="metric-value">4.3hrs/day</div>
                <p>Less time on vendor research and negotiations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="technical-section">
          <div className="container">
            <h2 className="section-title">How Supply Chain Oracle Works</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">DATA</div>
                <h3>Market Intelligence</h3>
                <p>Continuously monitors global supply markets, pricing trends, and risk factors across 10,000+ suppliers and commodity markets.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">PREDICT</div>
                <h3>Disruption Prediction</h3>
                <p>Machine learning models analyze historical patterns, supplier performance, and external factors to predict supply chain disruptions weeks ahead.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">NETWORK</div>
                <h3>Supplier Network Optimization</h3>
                <p>Maintains detailed performance profiles of all suppliers, automatically identifying best alternatives for any situation.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">AUTOMATE</div>
                <h3>Procurement Automation</h3>
                <p>Handles routine ordering, price negotiations, and logistics coordination while flagging complex decisions for human review.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain Management Features */}
        <section className="features-section bg-light">
          <div className="container">
            <h2 className="section-title">Complete Supply Chain Intelligence</h2>
            <div className="features-grid">
              <div className="feature-group">
                <h4>Predictive Analytics</h4>
                <ul>
                  <li>Demand forecasting based on project velocity</li>
                  <li>Supply disruption early warning system</li>
                  <li>Price trend prediction and optimization</li>
                  <li>Weather impact analysis and contingency</li>
                  <li>Market volatility risk assessment</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Supplier Management</h4>
                <ul>
                  <li>Real-time performance monitoring</li>
                  <li>Quality assurance automation</li>
                  <li>Delivery reliability tracking</li>
                  <li>Cost competitiveness analysis</li>
                  <li>Alternative supplier identification</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Logistics Optimization</h4>
                <ul>
                  <li>Delivery scheduling coordination</li>
                  <li>Site storage capacity management</li>
                  <li>Multi-project resource sharing</li>
                  <li>Transportation cost optimization</li>
                  <li>Inventory level optimization</li>
                </ul>
              </div>
              <div className="feature-group">
                <h4>Cost Management</h4>
                <ul>
                  <li>Real-time market price monitoring</li>
                  <li>Bulk purchasing optimization</li>
                  <li>Contract negotiation support</li>
                  <li>Waste reduction tracking</li>
                  <li>ROI analysis and reporting</li>
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
                <h4>ERP Systems</h4>
                <p>Direct integration with SAP, Oracle, QuickBooks, and other ERP platforms for unified procurement data</p>
              </div>
              <div className="integration-item">
                <h4>Supplier Networks</h4>
                <p>Connects with major supplier portals, e-procurement platforms, and construction material marketplaces</p>
              </div>
              <div className="integration-item">
                <h4>Project Management</h4>
                <p>Syncs with Procore, Buildertrend, and PM tools for demand planning based on project schedules</p>
              </div>
              <div className="integration-item">
                <h4>Financial Systems</h4>
                <p>Integrates with accounting software for purchase orders, invoicing, and budget tracking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain Metrics Dashboard Preview */}
        <section className="dashboard-preview">
          <div className="container">
            <h2 className="section-title">Real-time Supply Chain Dashboard</h2>
            <div className="dashboard-grid">
              <div className="dashboard-metric">
                <h4>Active Suppliers</h4>
                <div className="dashboard-value">247</div>
                <div className="dashboard-status green">94% performing above standard</div>
              </div>
              <div className="dashboard-metric">
                <h4>Risk Alerts</h4>
                <div className="dashboard-value">3</div>
                <div className="dashboard-status yellow">2 medium, 1 low priority</div>
              </div>
              <div className="dashboard-metric">
                <h4>Cost Savings (MTD)</h4>
                <div className="dashboard-value">$47K</div>
                <div className="dashboard-status green">18% above target</div>
              </div>
              <div className="dashboard-metric">
                <h4>Deliveries (This Week)</h4>
                <div className="dashboard-value">156</div>
                <div className="dashboard-status green">97% on-time rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Preview */}
        <section className="roi-preview">
          <div className="container">
            <div className="roi-card">
              <h3>Supply Chain Oracle ROI Calculator</h3>
              <p>For construction company with $10M annual material spend:</p>
              <div className="roi-breakdown">
                <div className="roi-item">
                  <span className="roi-label">Cost optimization savings (8.5%):</span>
                  <span className="roi-value">$850K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Disruption prevention value:</span>
                  <span className="roi-value">$340K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Procurement time savings (4.3hrs/day):</span>
                  <span className="roi-value">$112K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Supply Chain Oracle investment:</span>
                  <span className="roi-value">$84K/year</span>
                </div>
                <div className="roi-total">
                  <span className="roi-label"><strong>Net ROI:</strong></span>
                  <span className="roi-value"><strong>$1.22M (1,452% return)</strong></span>
                </div>
              </div>
              <a href="/apply" className="btn-primary">Calculate Your ROI</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <h2>Never Get Blindsided by Supply Chain Issues Again</h2>
            <p className="cta-subtitle">
              Join 220+ construction companies using Supply Chain Oracle to eliminate material delays and maximize savings
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large">Apply for Early Access</a>
              <a href="/case-studies" className="btn-secondary-outline">See Case Studies</a>
            </div>
            <p className="cta-note">Supplier network integration completed in 5-7 business days</p>
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
                  <a href="/use-cases/supply-chain-oracle">Supply Chain Oracle</a>
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