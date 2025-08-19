import { Navigation } from '../components/navigation'

export const ROICalculatorPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ROI Calculator - Developer Dopamine AI Agents</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="Calculate your potential savings with Developer Dopamine AI agents. See how much time and money our construction intelligence platform can save your business." />
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
                  <span className="badge-text">ROI CALCULATOR</span>
                </div>
                <h1 className="hero-headline">Calculate Your AI Savings</h1>
                <p className="hero-subheadline">
                  See exactly how much time and money Developer Dopamine AI agents will save your construction business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Form */}
        <section className="calculator-section">
          <div className="container">
            <div className="calculator-container">
              <div className="calculator-form">
                <h2>Your Business Details</h2>
                <form id="roi-calculator-form" data-form-type="roi-calculator">
                  
                  <div className="form-group">
                    <label for="company-name">Company Name</label>
                    <input type="text" id="company-name" name="companyName" required />
                  </div>

                  <div className="form-group">
                    <label for="annual-volume">Annual Construction Volume</label>
                    <select id="annual-volume" name="annualVolume" required>
                      <option value="">Select your annual volume</option>
                      <option value="under-1m">Under $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m-25m">$10M - $25M</option>
                      <option value="25m-50m">$25M - $50M</option>
                      <option value="over-50m">Over $50M</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="active-projects">Active Projects at Any Time</label>
                    <select id="active-projects" name="activeProjects" required>
                      <option value="">Select number of projects</option>
                      <option value="1-3">1-3 projects</option>
                      <option value="4-10">4-10 projects</option>
                      <option value="11-25">11-25 projects</option>
                      <option value="26-50">26-50 projects</option>
                      <option value="over-50">Over 50 projects</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="primary-challenge">Biggest Operational Challenge</label>
                    <select id="primary-challenge" name="primaryChallenge" required>
                      <option value="">Select your biggest challenge</option>
                      <option value="schedule-delays">Schedule delays and missed deadlines</option>
                      <option value="budget-overruns">Budget overruns and cost control</option>
                      <option value="document-management">Document management and paperwork</option>
                      <option value="workforce-productivity">Workforce productivity and scheduling</option>
                      <option value="communication-issues">Communication and coordination</option>
                      <option value="supply-chain">Supply chain and material management</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="admin-hours">Admin Hours per Week (PM + Office Staff)</label>
                    <select id="admin-hours" name="adminHours" required>
                      <option value="">Select weekly admin hours</option>
                      <option value="under-20">Under 20 hours</option>
                      <option value="20-40">20-40 hours</option>
                      <option value="40-80">40-80 hours</option>
                      <option value="80-120">80-120 hours</option>
                      <option value="over-120">Over 120 hours</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                    <small>We'll send your personalized ROI report to this email</small>
                  </div>

                  <div className="form-group">
                    <label for="phone">Phone Number (Optional)</label>
                    <input type="tel" id="phone" name="phone" />
                    <small>For follow-up questions about your calculation</small>
                  </div>

                  <button type="submit" className="btn-primary btn-large">Calculate My ROI</button>
                </form>
              </div>

              <div className="calculator-preview">
                <h3>What You'll Get</h3>
                <div className="preview-items">
                  <div className="preview-item">
                    <div className="preview-icon">DATA</div>
                    <div className="preview-content">
                      <h4>Detailed ROI Analysis</h4>
                      <p>Customized savings calculation based on your specific business size and challenges</p>
                    </div>
                  </div>
                  <div className="preview-item">
                    <div className="preview-icon">SAVE</div>
                    <div className="preview-content">
                      <h4>Cost-Benefit Breakdown</h4>
                      <p>See exactly where the savings come from: time, materials, efficiency gains</p>
                    </div>
                  </div>
                  <div className="preview-item">
                    <div className="preview-icon">ROI</div>
                    <div className="preview-content">
                      <h4>Implementation Timeline</h4>
                      <p>Month-by-month ROI progression showing when you'll see returns</p>
                    </div>
                  </div>
                  <div className="preview-item">
                    <div className="preview-icon">PLAN</div>
                    <div className="preview-content">
                      <h4>Personalized Recommendations</h4>
                      <p>Which AI agents to implement first for maximum impact on your business</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example ROI Results */}
        <section className="example-results-section bg-light">
          <div className="container">
            <h2 className="section-title">Example ROI Results</h2>
            <div className="results-grid">
              
              <div className="result-card">
                <div className="company-profile">
                  <h3>Regional Builder</h3>
                  <div className="profile-details">
                    <span>$8M Annual Volume</span>
                    <span>15 Active Projects</span>
                    <span>Challenge: Schedule Delays</span>
                  </div>
                </div>
                <div className="savings-breakdown">
                  <div className="savings-item">
                    <span className="savings-label">Time Savings (18hrs/week):</span>
                    <span className="savings-value">$47K/year</span>
                  </div>
                  <div className="savings-item">
                    <span className="savings-label">Avoided Delays:</span>
                    <span className="savings-value">$280K/year</span>
                  </div>
                  <div className="savings-item">
                    <span className="savings-label">Budget Accuracy:</span>
                    <span className="savings-value">$156K/year</span>
                  </div>
                  <div className="total-roi">
                    <span className="roi-label">Total Annual Savings:</span>
                    <span className="roi-value">$483K</span>
                    <span className="roi-percentage">542% ROI</span>
                  </div>
                </div>
              </div>

              <div className="result-card">
                <div className="company-profile">
                  <h3>Commercial Contractor</h3>
                  <div className="profile-details">
                    <span>$25M Annual Volume</span>
                    <span>35 Active Projects</span>
                    <span>Challenge: Budget Overruns</span>
                  </div>
                </div>
                <div className="savings-breakdown">
                  <div className="savings-item">
                    <span className="savings-label">Admin Efficiency:</span>
                    <span className="savings-value">$89K/year</span>
                  </div>
                  <div className="savings-item">
                    <span className="savings-label">Cost Overrun Prevention:</span>
                    <span className="savings-value">$625K/year</span>
                  </div>
                  <div className="savings-item">
                    <span className="savings-label">Material Optimization:</span>
                    <span className="savings-value">$198K/year</span>
                  </div>
                  <div className="total-roi">
                    <span className="roi-label">Total Annual Savings:</span>
                    <span className="roi-value">$912K</span>
                    <span className="roi-percentage">647% ROI</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <h2>Get Your Personalized ROI Report</h2>
            <p className="cta-subtitle">
              Join 200+ construction companies who've calculated their AI savings potential
            </p>
            <div className="cta-buttons">
              <a href="#roi-calculator-form" className="btn-accent btn-large">Calculate Your ROI</a>
              <a href="/apply" className="btn-secondary-outline">Get Started</a>
            </div>
            <p className="cta-note">ROI report delivered within 4 hours</p>
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