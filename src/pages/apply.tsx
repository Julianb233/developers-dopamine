import { Navigation } from '../components/navigation'

export const ApplyPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get Started - Developer Dopamine AI Agents</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="Get started with Developer Dopamine AI services. Transform your construction business with AI agents for schedule intelligence, budget control, and operational excellence." />
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
                  <span className="badge-text">SERVICE APPLICATION</span>
                </div>
                <h1 className="hero-headline">Transform Your Construction Business</h1>
                <p className="hero-subheadline">
                  Join the construction companies already using AI to increase profits, reduce delays, and eliminate operational stress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="application-section">
          <div className="container">
            <div className="application-container">
              
              <div className="application-intro">
                <h2>Service Application</h2>
                <p>Tell us about your business and challenges. Julian will personally review your application and respond within 24 hours with a customized AI implementation plan.</p>
                
                <div className="application-benefits">
                  <div className="benefit-item">
                    <div className="benefit-icon">✓</div>
                    <span>Personal consultation with Julian</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">✓</div>
                    <span>Custom ROI analysis for your business</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">✓</div>
                    <span>Implementation roadmap and timeline</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">✓</div>
                    <span>48-72 hour setup guarantee</span>
                  </div>
                </div>
              </div>

              <form id="service-application" data-form-type="application" className="application-form">
                
                <div className="form-section">
                  <h3>Company Information</h3>
                  
                  <div className="form-group">
                    <label for="company-name">Company Name *</label>
                    <input type="text" id="company-name" name="companyName" required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label for="first-name">First Name *</label>
                      <input type="text" id="first-name" name="firstName" required />
                    </div>
                    <div className="form-group">
                      <label for="last-name">Last Name *</label>
                      <input type="text" id="last-name" name="lastName" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="title">Your Title *</label>
                    <input type="text" id="title" name="title" placeholder="e.g., Project Manager, Owner, Operations Director" required />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label for="email">Email Address *</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label for="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="location">Business Location *</label>
                    <input type="text" id="location" name="location" placeholder="City, State" required />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Business Details</h3>
                  
                  <div className="form-group">
                    <label for="business-type">Type of Construction Business *</label>
                    <select id="business-type" name="businessType" required>
                      <option value="">Select your business type</option>
                      <option value="residential-builder">Residential Builder</option>
                      <option value="commercial-contractor">Commercial Contractor</option>
                      <option value="general-contractor">General Contractor</option>
                      <option value="specialty-contractor">Specialty Contractor</option>
                      <option value="developer">Developer</option>
                      <option value="remodeling">Remodeling & Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="annual-volume">Annual Construction Volume *</label>
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

                  <div className="form-row">
                    <div className="form-group">
                      <label for="active-projects">Typical Active Projects</label>
                      <select id="active-projects" name="activeProjects">
                        <option value="">Select range</option>
                        <option value="1-3">1-3 projects</option>
                        <option value="4-10">4-10 projects</option>
                        <option value="11-25">11-25 projects</option>
                        <option value="26-50">26-50 projects</option>
                        <option value="over-50">Over 50 projects</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="team-size">Team Size</label>
                      <select id="team-size" name="teamSize">
                        <option value="">Select team size</option>
                        <option value="under-10">Under 10 people</option>
                        <option value="10-25">10-25 people</option>
                        <option value="25-50">25-50 people</option>
                        <option value="50-100">50-100 people</option>
                        <option value="over-100">Over 100 people</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Current Challenges</h3>
                  
                  <div className="form-group">
                    <label for="primary-challenge">Biggest Operational Challenge *</label>
                    <select id="primary-challenge" name="primaryChallenge" required>
                      <option value="">Select your biggest challenge</option>
                      <option value="schedule-delays">Schedule delays and missed deadlines</option>
                      <option value="budget-overruns">Budget overruns and cost control</option>
                      <option value="document-management">Document management and paperwork</option>
                      <option value="workforce-productivity">Workforce productivity and scheduling</option>
                      <option value="communication-issues">Communication and coordination</option>
                      <option value="supply-chain">Supply chain and material management</option>
                      <option value="client-management">Client communication and satisfaction</option>
                      <option value="growth-scaling">Scaling operations and growth management</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="pain-points">Specific Pain Points</label>
                    <textarea id="pain-points" name="painPoints" rows="4" placeholder="Describe your most frustrating operational challenges and how they impact your business..."></textarea>
                  </div>

                  <div className="form-group">
                    <label for="current-tools">Current Project Management Tools</label>
                    <input type="text" id="current-tools" name="currentTools" placeholder="e.g., Procore, Buildertrend, QuickBooks, Excel" />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Goals & Timeline</h3>
                  
                  <div className="form-group">
                    <label for="primary-goal">Primary Goal for AI Implementation *</label>
                    <select id="primary-goal" name="primaryGoal" required>
                      <option value="">Select your primary goal</option>
                      <option value="increase-profits">Increase profit margins</option>
                      <option value="reduce-delays">Eliminate project delays</option>
                      <option value="save-time">Save administrative time</option>
                      <option value="improve-communication">Improve team communication</option>
                      <option value="scale-operations">Scale operations efficiently</option>
                      <option value="reduce-stress">Reduce operational stress</option>
                      <option value="competitive-advantage">Gain competitive advantage</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="implementation-timeline">Preferred Implementation Timeline</label>
                    <select id="implementation-timeline" name="implementationTimeline">
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="within-month">Within 1 month</option>
                      <option value="within-quarter">Within 3 months</option>
                      <option value="next-year">Next year</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="budget-range">Investment Budget Range</label>
                    <select id="budget-range" name="budgetRange">
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5K/month</option>
                      <option value="5k-10k">$5K - $10K/month</option>
                      <option value="10k-25k">$10K - $25K/month</option>
                      <option value="25k-50k">$25K - $50K/month</option>
                      <option value="over-50k">Over $50K/month</option>
                      <option value="roi-based">ROI-based pricing preferred</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Additional Information</h3>
                  
                  <div className="form-group">
                    <label for="additional-info">Anything else you'd like Julian to know?</label>
                    <textarea id="additional-info" name="additionalInfo" rows="4" placeholder="Special requirements, unique challenges, specific AI interests, or other relevant information..."></textarea>
                  </div>

                  <div className="form-group">
                    <label for="referral-source">How did you hear about Developer Dopamine?</label>
                    <select id="referral-source" name="referralSource">
                      <option value="">Select source</option>
                      <option value="google-search">Google search</option>
                      <option value="referral">Referral from colleague</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="industry-publication">Industry publication</option>
                      <option value="conference-event">Conference or event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary btn-large">Submit Service Application</button>
                  <p className="form-note">Julian will personally review your application and respond within 24 hours with next steps.</p>
                </div>

              </form>
              
            </div>
          </div>
        </section>

        {/* Expectations Section */}
        <section className="expectations-section bg-light">
          <div className="container">
            <h2 className="section-title">What Happens Next?</h2>
            <div className="expectations-timeline">
              <div className="expectation-step">
                <div className="step-time">Within 4 hours</div>
                <div className="step-content">
                  <h3>Application Confirmation</h3>
                  <p>You'll receive a confirmation email with your application details and Julian's direct contact information.</p>
                </div>
              </div>
              
              <div className="expectation-step">
                <div className="step-time">Within 24 hours</div>
                <div className="step-content">
                  <h3>Personal Review & Response</h3>
                  <p>Julian personally reviews your application and sends a customized response with ROI projections and implementation plan.</p>
                </div>
              </div>
              
              <div className="expectation-step">
                <div className="step-time">Within 48 hours</div>
                <div className="step-content">
                  <h3>Strategy Call</h3>
                  <p>If it's a good fit, Julian will schedule a strategy call to discuss your specific needs and customize the AI solution.</p>
                </div>
              </div>
              
              <div className="expectation-step">
                <div className="step-time">48-72 hours</div>
                <div className="step-content">
                  <h3>Implementation Begins</h3>
                  <p>Once approved, our team begins system integration and AI setup. You'll see first results within the first week.</p>
                </div>
              </div>
            </div>
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