import { Navigation } from '../components/navigation'

export const CaseStudiesPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Case Studies - Developer Dopamine AI Success Stories</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="Real success stories from construction companies using Developer Dopamine AI agents. See proven results, ROI metrics, and transformation journeys." />
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
                  <span className="badge-text">SUCCESS STORIES</span>
                </div>
                <h1 className="hero-headline">Real Results from Real Companies</h1>
                <p className="hero-subheadline">
                  See how construction businesses like yours transformed their operations and boosted profits with AI automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="featured-case-study">
          <div className="container">
            <div className="featured-study-content">
              <div className="study-overview">
                <div className="company-info">
                  <h2>Riverside Construction</h2>
                  <div className="company-details">
                    <span className="company-size">Mid-size Commercial Builder</span>
                    <span className="company-volume">$18M Annual Volume</span>
                    <span className="company-location">Austin, TX</span>
                  </div>
                </div>
                <div className="challenge-overview">
                  <h3>The Challenge</h3>
                  <p>Riverside was losing $200K+ annually to schedule delays and budget overruns. Project managers spent 30+ hours weekly on manual reporting, leaving little time for actual project oversight.</p>
                </div>
              </div>
              
              <div className="results-showcase">
                <h3>Results After 6 Months</h3>
                <div className="results-grid">
                  <div className="result-metric">
                    <div className="metric-value">$847K</div>
                    <div className="metric-label">Annual Savings</div>
                    <div className="metric-change">↑ 67% profit margin</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value">23 hrs</div>
                    <div className="metric-label">Weekly Time Saved</div>
                    <div className="metric-change">↓ 73% admin overhead</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value">94%</div>
                    <div className="metric-label">On-time Delivery</div>
                    <div className="metric-change">↑ From 67% baseline</div>
                  </div>
                  <div className="result-metric">
                    <div className="metric-value">612%</div>
                    <div className="metric-label">ROI Achieved</div>
                    <div className="metric-change">↑ In first year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="case-studies-grid bg-light">
          <div className="container">
            <h2 className="section-title">More Success Stories</h2>
            
            <div className="studies-grid">
              
              {/* Case Study 1 */}
              <div className="case-study-card">
                <div className="study-header">
                  <h3>Metropolitan Builders</h3>
                  <div className="study-meta">
                    <span className="volume">$45M Volume</span>
                    <span className="focus">Schedule Intelligence</span>
                  </div>
                </div>
                <div className="study-challenge">
                  <h4>Challenge</h4>
                  <p>Complex multi-phase projects consistently running 3-4 weeks behind schedule, costing $150K per delayed project.</p>
                </div>
                <div className="study-solution">
                  <h4>Solution</h4>
                  <p>Implemented Schedule Intelligence AI to predict delays and optimize resource allocation across 40+ concurrent projects.</p>
                </div>
                <div className="study-results">
                  <h4>Results</h4>
                  <div className="results-highlights">
                    <span className="highlight">81% reduction in delays</span>
                    <span className="highlight">$1.2M saved annually</span>
                    <span className="highlight">489% ROI</span>
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="case-study-card">
                <div className="study-header">
                  <h3>Pioneer Development</h3>
                  <div className="study-meta">
                    <span className="volume">$8M Volume</span>
                    <span className="focus">Budget Guardian</span>
                  </div>
                </div>
                <div className="study-challenge">
                  <h4>Challenge</h4>
                  <p>Frequent budget overruns averaging 12-15% per project, with little visibility into cost trends until month-end.</p>
                </div>
                <div className="study-solution">
                  <h4>Solution</h4>
                  <p>Deployed Budget Guardian for real-time cost tracking and predictive overrun alerts with vendor integration.</p>
                </div>
                <div className="study-results">
                  <h4>Results</h4>
                  <div className="results-highlights">
                    <span className="highlight">3% average overruns</span>
                    <span className="highlight">$320K annual savings</span>
                    <span className="highlight">678% ROI</span>
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="case-study-card">
                <div className="study-header">
                  <h3>Coastal Construction</h3>
                  <div className="study-meta">
                    <span className="volume">$12M Volume</span>
                    <span className="focus">Document Processor</span>
                  </div>
                </div>
                <div className="study-challenge">
                  <h4>Challenge</h4>
                  <p>Administrative staff spending 40+ hours weekly processing contracts, change orders, and compliance documents.</p>
                </div>
                <div className="study-solution">
                  <h4>Solution</h4>
                  <p>Implemented Document Processor AI to automate contract review, data extraction, and compliance tracking.</p>
                </div>
                <div className="study-results">
                  <h4>Results</h4>
                  <div className="results-highlights">
                    <span className="highlight">87% time reduction</span>
                    <span className="highlight">$156K annual savings</span>
                    <span className="highlight">523% ROI</span>
                  </div>
                </div>
              </div>

              {/* Case Study 4 */}
              <div className="case-study-card">
                <div className="study-header">
                  <h3>Summit Contractors</h3>
                  <div className="study-meta">
                    <span className="volume">$28M Volume</span>
                    <span className="focus">Full AI Suite</span>
                  </div>
                </div>
                <div className="study-challenge">
                  <h4>Challenge</h4>
                  <p>Rapid growth straining operations across scheduling, budgeting, and workforce management simultaneously.</p>
                </div>
                <div className="study-solution">
                  <h4>Solution</h4>
                  <p>Complete AI transformation with Schedule Intelligence, Budget Guardian, and Workforce Tracker integration.</p>
                </div>
                <div className="study-results">
                  <h4>Results</h4>
                  <div className="results-highlights">
                    <span className="highlight">40% efficiency gain</span>
                    <span className="highlight">$2.1M annual savings</span>
                    <span className="highlight">712% ROI</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">What Our Partners Say</h2>
            
            <div className="testimonials-grid">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"Developer Dopamine transformed how we manage projects. We went from constant firefighting to proactive management. The AI actually predicts problems we didn't even know were coming."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Sarah Mitchell</h4>
                    <span>Project Director, Riverside Construction</span>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"The ROI was immediate. Within 30 days, we caught two potential overruns that would have cost us $180K. The system paid for itself in the first quarter."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Mike Rodriguez</h4>
                    <span>Operations Manager, Pioneer Development</span>
                  </div>
                </div>
              </div>
              
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"Our admin team went from drowning in paperwork to focusing on strategic tasks. Document processing that took hours now takes minutes. It's like having a super-powered assistant."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Jennifer Chen</h4>
                    <span>Operations Director, Coastal Construction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="implementation-section bg-light">
          <div className="container">
            <h2 className="section-title">Your Success Journey</h2>
            <div className="implementation-timeline">
              <div className="timeline-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Assessment & Setup</h3>
                  <p>We analyze your current operations and integrate with your existing systems. No disruption to ongoing projects.</p>
                  <span className="step-duration">Week 1</span>
                </div>
              </div>
              
              <div className="timeline-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>AI Learning & Training</h3>
                  <p>Our agents learn your business patterns and begin generating insights. First automated reports delivered.</p>
                  <span className="step-duration">Week 2-3</span>
                </div>
              </div>
              
              <div className="timeline-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Full Optimization</h3>
                  <p>AI fully adapted to your workflows. Predictive alerts preventing issues before they impact projects.</p>
                  <span className="step-duration">Month 2-3</span>
                </div>
              </div>
              
              <div className="timeline-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Sustained Success</h3>
                  <p>Consistent profit improvements, streamlined operations, and competitive advantage realized.</p>
                  <span className="step-duration">Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <h2>Ready to Write Your Success Story?</h2>
            <p className="cta-subtitle">
              Join the construction companies already transforming their operations with AI
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large">Apply for Partnership</a>
              <a href="/roi-calculator" className="btn-secondary-outline">Calculate Your ROI</a>
            </div>
            <p className="cta-note">Partnership applications reviewed within 24 hours</p>
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