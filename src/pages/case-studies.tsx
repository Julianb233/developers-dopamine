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

        {/* Hero Section - Fluid Design */}
        <section className="hero-section">
          <div className="hero-background-pattern"></div>
          <div className="hero-gradient-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-text">📊 SUCCESS STORIES</span>
              </div>
              <h1 className="hero-headline">
                Real Results from <span className="highlight-gradient">Real Companies</span>
              </h1>
              <p className="hero-subheadline">
                See how construction businesses like yours transformed their operations and boosted profits with AI automation. Every number is real. Every story is verified.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">$12M+</div>
                  <div className="stat-label">Total Savings Generated</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">670%</div>
                  <div className="stat-label">Average ROI Achieved</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">85%</div>
                  <div className="stat-label">Faster Project Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study - Enhanced Fluid Design */}
        <section className="section-fluid white">
          <div className="container">
            <div className="featured-case-study">
              <div className="case-study-header text-center my-fluid-xl">
                <div className="badge-fluid primary">🏆 FLAGSHIP SUCCESS STORY</div>
                <h2 className="text-fluid-4xl font-bold my-fluid-md">Riverside Construction Transformation</h2>
                <p className="text-fluid-lg opacity-75">From Chaos to Control: A Complete AI Transformation</p>
              </div>
              
              <div className="grid-2 gap-fluid my-fluid-xl">
                <div className="card-fluid">
                  <div className="company-profile">
                    <div className="company-header flex-fluid between">
                      <div>
                        <h3 className="text-fluid-2xl font-bold">Riverside Construction</h3>
                        <p className="text-fluid-base opacity-75">Mid-size Commercial Builder</p>
                      </div>
                      <div className="company-stats">
                        <div className="badge-fluid accent">$18M Volume</div>
                        <div className="badge-fluid success">Austin, TX</div>
                      </div>
                    </div>
                    
                    <div className="challenge-section my-fluid-lg">
                      <h4 className="text-fluid-xl font-semibold mb-fluid-sm">💥 The Pain Points</h4>
                      <ul className="list-fluid spaced">
                        <li>🩸 <strong>$200K+ annual losses</strong> from schedule delays and budget overruns</li>
                        <li>⏰ <strong>30+ hours weekly</strong> spent on manual reporting per PM</li>
                        <li>🔥 <strong>Constant firefighting</strong> instead of proactive management</li>
                        <li>📊 <strong>Zero visibility</strong> into project health until problems exploded</li>
                      </ul>
                    </div>
                    
                    <div className="solution-section my-fluid-lg">
                      <h4 className="text-fluid-xl font-semibold mb-fluid-sm">⚡ The AI Solution</h4>
                      <div className="agent-deployments">
                        <div className="agent-deployment">
                          <span className="badge-fluid primary">SCHED</span>
                          <span>Schedule Intelligence for predictive timeline management</span>
                        </div>
                        <div className="agent-deployment">
                          <span className="badge-fluid warning">COST</span>
                          <span>Budget Guardian for real-time cost tracking</span>
                        </div>
                        <div className="agent-deployment">
                          <span className="badge-fluid success">COMM</span>
                          <span>Communication Hub for automated reporting</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-fluid primary">
                  <h4 className="text-fluid-2xl font-bold mb-fluid-lg">📈 Results After 6 Months</h4>
                  <div className="results-showcase">
                    <div className="result-metric-enhanced">
                      <div className="metric-icon">💰</div>
                      <div className="metric-content">
                        <div className="metric-value">$847K</div>
                        <div className="metric-label">Annual Savings</div>
                        <div className="metric-change positive">↑ 67% profit margin improvement</div>
                      </div>
                    </div>
                    
                    <div className="result-metric-enhanced">
                      <div className="metric-icon">⏱️</div>
                      <div className="metric-content">
                        <div className="metric-value">23 hrs</div>
                        <div className="metric-label">Weekly Time Saved</div>
                        <div className="metric-change positive">↓ 73% reduction in admin overhead</div>
                      </div>
                    </div>
                    
                    <div className="result-metric-enhanced">
                      <div className="metric-icon">🎯</div>
                      <div className="metric-content">
                        <div className="metric-value">94%</div>
                        <div className="metric-label">On-time Delivery</div>
                        <div className="metric-change positive">↑ From 67% baseline</div>
                      </div>
                    </div>
                    
                    <div className="result-metric-enhanced">
                      <div className="metric-icon">📊</div>
                      <div className="metric-content">
                        <div className="metric-value">612%</div>
                        <div className="metric-label">First-Year ROI</div>
                        <div className="metric-change positive">↑ Investment recovered in 2 months</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="transformation-quote my-fluid-lg">
                    <blockquote className="text-fluid-lg font-medium opacity-90">
                      "Developer Dopamine transformed us from reactive chaos to predictive control. We went from losing money on delays to generating profit from efficiency."
                    </blockquote>
                    <cite className="text-fluid-sm opacity-75">— Sarah Mitchell, Project Director</cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid - Fluid Design */}
        <section className="section-fluid light">
          <div className="container">
            <h2 className="section-title">More Success Stories</h2>
            
            <div className="grid-auto-fit gap-fluid my-fluid-xl">
              
              {/* Case Study 1 - Metropolitan Builders */}
              <div className="card-fluid hover-lift">
                <div className="case-study-content">
                  <div className="study-header flex-fluid between">
                    <div>
                      <h3 className="text-fluid-xl font-bold">Metropolitan Builders</h3>
                      <p className="text-fluid-sm opacity-75">Large-scale Commercial Developer</p>
                    </div>
                    <div className="study-badges">
                      <div className="badge-fluid accent">$45M Volume</div>
                      <div className="badge-fluid primary">SCHED Agent</div>
                    </div>
                  </div>
                  
                  <div className="problem-solution my-fluid-md">
                    <div className="problem-block">
                      <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                        <span className="text-red-500">⚠️</span> Challenge
                      </h4>
                      <p className="text-fluid-base">Complex multi-phase projects consistently running 3-4 weeks behind schedule, costing <strong>$150K per delayed project</strong>. Zero predictive capability.</p>
                    </div>
                    
                    <div className="solution-block my-fluid-sm">
                      <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                        <span className="text-green-500">⚡</span> AI Solution
                      </h4>
                      <p className="text-fluid-base">Deployed Schedule Intelligence AI with predictive delay algorithms across <strong>40+ concurrent projects</strong>. Real-time resource optimization.</p>
                    </div>
                  </div>
                  
                  <div className="results-section">
                    <h4 className="text-fluid-lg font-semibold mb-fluid-sm">📊 Transformation Results</h4>
                    <div className="results-grid-compact">
                      <div className="result-compact">
                        <div className="result-number text-green-600">81%</div>
                        <div className="result-label">Delay Reduction</div>
                      </div>
                      <div className="result-compact">
                        <div className="result-number text-green-600">$1.2M</div>
                        <div className="result-label">Annual Savings</div>
                      </div>
                      <div className="result-compact">
                        <div className="result-number text-green-600">489%</div>
                        <div className="result-label">ROI Achieved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 2 - Pioneer Development */}
              <div className="card-fluid hover-lift">
                <div className="case-study-content">
                  <div className="study-header flex-fluid between">
                    <div>
                      <h3 className="text-fluid-xl font-bold">Pioneer Development</h3>
                      <p className="text-fluid-sm opacity-75">Residential & Mixed-Use Builder</p>
                    </div>
                    <div className="study-badges">
                      <div className="badge-fluid accent">$8M Volume</div>
                      <div className="badge-fluid warning">COST Agent</div>
                    </div>
                  </div>
                  
                  <div className="problem-solution my-fluid-md">
                    <div className="problem-block">
                      <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                        <span className="text-red-500">💸</span> Challenge
                      </h4>
                      <p className="text-fluid-base">Budget overruns averaging <strong>12-15% per project</strong>. Zero cost visibility until month-end disasters. Reactive cost management only.</p>
                    </div>
                    
                    <div className="solution-block my-fluid-sm">
                      <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                        <span className="text-green-500">🛡️</span> AI Solution
                      </h4>
                      <p className="text-fluid-base">Budget Guardian with <strong>real-time cost tracking</strong> and predictive overrun alerts. Vendor integration for live pricing.</p>
                    </div>
                  </div>
                  
                  <div className="results-section">
                    <h4 className="text-fluid-lg font-semibold mb-fluid-sm">📊 Budget Control Results</h4>
                    <div className="results-grid-compact">
                      <div className="result-compact">
                        <div className="result-number text-green-600">3%</div>
                        <div className="result-label">Average Overruns</div>
                      </div>
                      <div className="result-compact">
                        <div className="result-number text-green-600">$320K</div>
                        <div className="result-label">Annual Savings</div>
                      </div>
                      <div className="result-compact">
                        <div className="result-number text-green-600">678%</div>
                        <div className="result-label">ROI Achieved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 3 - Coastal Construction */}
              <div className="card-fluid hover-lift">
                <div className="case-study-content">
                  <div className="study-header flex-fluid between">
                    <div>
                      <h3 className="text-fluid-xl font-bold">Coastal Construction</h3>
                      <p className="text-fluid-sm opacity-75">Infrastructure & Marine Projects</p>
                    </div>
                    <div className="study-badges">
                      <div className="badge-fluid accent">$12M Volume</div>
                      <div className="badge-fluid success">DOC Agent</div>
                    </div>
                  </div>
                  
                  <div className="problem-solution my-fluid-md">
                    <div className="problem-block">
                      <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                        <span className="text-red-500">📄</span> Challenge
                      </h4>
                      <p className="text-fluid-base">Administrative team drowning in paperwork. <strong>40+ hours weekly</strong> processing contracts, change orders, compliance documents manually.</p>
                    </div>
                    
                    <div className="solution-block my-fluid-sm">
                      <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                        <span className="text-green-500">🤖</span> AI Solution
                      </h4>
                      <p className="text-fluid-base">Document Processor AI with <strong>intelligent data extraction</strong>, automated contract review, and compliance tracking. Instant processing.</p>
                    </div>
                  </div>
                  
                  <div className="results-section">
                    <h4 className="text-fluid-lg font-semibold mb-fluid-sm">📊 Efficiency Results</h4>
                    <div className="results-grid-compact">
                      <div className="result-compact">
                        <div className="result-number text-green-600">87%</div>
                        <div className="result-label">Time Reduction</div>
                      </div>
                      <div className="result-compact">
                        <div className="result-number text-green-600">$156K</div>
                        <div className="result-label">Annual Savings</div>
                      </div>
                      <div className="result-compact">
                        <div className="result-number text-green-600">523%</div>
                        <div className="result-label">ROI Achieved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study 4 - Summit Contractors */}
              <div className="card-fluid hover-lift">
                <div className="case-study-content">
                  <div className="study-header flex-fluid between">
                    <div>
                      <h3 className="text-fluid-xl font-bold">Summit Contractors</h3>
                      <p className="text-fluid-sm opacity-75">Multi-Discipline General Contractor</p>
                    </div>
                    <div className="study-badges">
                      <div className="badge-fluid accent">$28M Volume</div>
                      <div className="badge-fluid danger">Full AI Suite</div>
                    </div>
                  </div>
                  
                  <div className="problem-solution my-fluid-md">
                    <div className="problem-block">
                      <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                        <span className="text-red-500">🚀</span> Challenge
                      </h4>
                      <p className="text-fluid-base">Rapid growth overwhelming operations. Simultaneous failures in <strong>scheduling, budgeting, and workforce management</strong>. Growth becoming a liability.</p>
                    </div>
                    
                    <div className="solution-block my-fluid-sm">
                      <h4 className="text-fluid-lg font-semibold flex items-center gap-2">
                        <span className="text-green-500">🏗️</span> AI Solution
                      </h4>
                      <p className="text-fluid-base">Complete AI transformation: <strong>Schedule Intelligence + Budget Guardian + Workforce Tracker</strong>. Full operational automation.</p>
                    </div>
                  </div>
                  
                  <div className="results-section">
                    <h4 className="text-fluid-lg font-semibold mb-fluid-sm">📊 Total Transformation</h4>
                    <div className="results-grid-compact">
                      <div className="result-compact">
                        <div className="result-number text-green-600">40%</div>
                        <div className="result-label">Efficiency Gain</div>
                      </div>
                      <div className="result-compact">
                        <div className="result-number text-green-600">$2.1M</div>
                        <div className="result-label">Annual Savings</div>
                      </div>
                      <div className="result-compact">
                        <div className="result-number text-green-600">712%</div>
                        <div className="result-label">ROI Achieved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            
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
              <a href="/apply" className="btn-accent btn-large">Get Started</a>
              <a href="/roi-calculator" className="btn-secondary-outline">Calculate Your ROI</a>
            </div>
            <p className="cta-note">Service applications reviewed within 24 hours</p>
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