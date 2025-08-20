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

        {/* Hero Section - Enhanced Fluid Design */}
        <section className="hero-section">
          <div className="hero-background-pattern"></div>
          <div className="hero-gradient-overlay"></div>
          <div className="container">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="badge-text">🧮 ADVANCED ROI CALCULATOR</span>
              </div>
              <h1 className="hero-headline" style={{fontSize: 'var(--fluid-text-6xl)', lineHeight: '1.1'}}>
                Calculate Your <span className="highlight-gradient">AI Savings</span>
              </h1>
              <p className="hero-subheadline" style={{fontSize: 'var(--fluid-text-lg)', lineHeight: '1.6', maxWidth: '48rem'}}>
                Get a detailed, personalized analysis of exactly how much time and money Developer Dopamine AI agents will save your construction business. Based on real data from 200+ construction companies.
              </p>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">$4.3M</div>
                  <div className="stat-label">Average Annual Savings</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">670%</div>
                  <div className="stat-label">Typical ROI</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3-6mo</div>
                  <div className="stat-label">Payback Period</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced ROI Calculator - Interactive Fluid Design */}
        <section className="section-fluid white">
          <div className="container">
            <div className="calculator-header text-center my-fluid-xl">
              <h2 className="text-fluid-4xl font-bold mb-fluid-md">🧮 Advanced ROI Calculator</h2>
              <p className="text-fluid-lg opacity-75 max-w-2xl mx-auto">Answer a few questions to get your personalized savings analysis. Takes 3 minutes, delivers actionable insights.</p>
            </div>

            <div className="calculator-layout grid-auto-fit gap-fluid">
              
              {/* Interactive Calculator Form */}
              <div className="calculator-form-section">
                <div className="card-fluid">
                  <div className="form-header flex-fluid between">
                    <h3 className="text-fluid-2xl font-bold">📊 Your Business Profile</h3>
                    <div className="progress-indicator">
                      <span className="progress-text">Step <span id="current-step">1</span> of 7</span>
                      <div className="progress-bar">
                        <div className="progress-fill" id="progress-fill" style="width: 14%"></div>
                      </div>
                    </div>
                  </div>
                  
                  <form id="roi-calculator-form" className="form-fluid" data-form-type="roi-calculator">
                    
                    {/* Step 1: Company Info */}
                    <div className="form-step active" data-step="1">
                      <div className="step-header">
                        <h4 className="text-fluid-xl font-semibold">🏢 Company Information</h4>
                        <p className="text-fluid-base opacity-75">Basic details about your construction business</p>
                      </div>
                      
                      <div className="form-group">
                        <label className="label-fluid" for="company-name">Company Name *</label>
                        <input className="input-fluid" type="text" id="company-name" name="companyName" placeholder="Your Construction Company" required />
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="business-type">Business Type *</label>
                        <select className="input-fluid" id="business-type" name="businessType" required>
                          <option value="">Select your business type</option>
                          <option value="residential">Residential Builder</option>
                          <option value="commercial">Commercial Contractor</option>
                          <option value="infrastructure">Infrastructure & Civil</option>
                          <option value="specialty">Specialty Contractor</option>
                          <option value="general">General Contractor</option>
                          <option value="developer">Real Estate Developer</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 2: Volume & Scale */}
                    <div className="form-step" data-step="2">
                      <div className="step-header">
                        <h4 className="text-fluid-xl font-semibold">📈 Business Volume & Scale</h4>
                        <p className="text-fluid-base opacity-75">Help us understand your business size and scope</p>
                      </div>
                      
                      <div className="form-group">
                        <label className="label-fluid" for="annual-volume">Annual Construction Volume *</label>
                        <select className="input-fluid" id="annual-volume" name="annualVolume" required>
                          <option value="">Select your annual volume</option>
                          <option value="under-1m">Under $1M</option>
                          <option value="1m-3m">$1M - $3M</option>
                          <option value="3m-5m">$3M - $5M</option>
                          <option value="5m-10m">$5M - $10M</option>
                          <option value="10m-15m">$10M - $15M</option>
                          <option value="15m-25m">$15M - $25M</option>
                          <option value="25m-50m">$25M - $50M</option>
                          <option value="over-50m">Over $50M</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="active-projects">Active Projects Simultaneously *</label>
                        <select className="input-fluid" id="active-projects" name="activeProjects" required>
                          <option value="">Typical number of concurrent projects</option>
                          <option value="1-2">1-2 projects</option>
                          <option value="3-5">3-5 projects</option>
                          <option value="6-10">6-10 projects</option>
                          <option value="11-20">11-20 projects</option>
                          <option value="21-35">21-35 projects</option>
                          <option value="36-50">36-50 projects</option>
                          <option value="over-50">Over 50 projects</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="avg-project-duration">Average Project Duration *</label>
                        <select className="input-fluid" id="avg-project-duration" name="avgProjectDuration" required>
                          <option value="">Typical project length</option>
                          <option value="under-3m">Under 3 months</option>
                          <option value="3-6m">3-6 months</option>
                          <option value="6-12m">6-12 months</option>
                          <option value="12-18m">12-18 months</option>
                          <option value="18-24m">18-24 months</option>
                          <option value="over-24m">Over 24 months</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 3: Team & Resources */}
                    <div className="form-step" data-step="3">
                      <div className="step-header">
                        <h4 className="text-fluid-xl font-semibold">👥 Team & Resource Structure</h4>
                        <p className="text-fluid-base opacity-75">Understanding your team helps calculate time savings</p>
                      </div>
                      
                      <div className="form-group">
                        <label className="label-fluid" for="project-managers">Number of Project Managers *</label>
                        <select className="input-fluid" id="project-managers" name="projectManagers" required>
                          <option value="">How many PMs do you have?</option>
                          <option value="1">1 PM</option>
                          <option value="2-3">2-3 PMs</option>
                          <option value="4-6">4-6 PMs</option>
                          <option value="7-10">7-10 PMs</option>
                          <option value="over-10">Over 10 PMs</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="admin-staff">Administrative Staff Count *</label>
                        <select className="input-fluid" id="admin-staff" name="adminStaff" required>
                          <option value="">Office/admin team size</option>
                          <option value="1-2">1-2 people</option>
                          <option value="3-5">3-5 people</option>
                          <option value="6-10">6-10 people</option>
                          <option value="11-15">11-15 people</option>
                          <option value="over-15">Over 15 people</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="avg-hourly-rate">Average Hourly Rate (PM + Admin) *</label>
                        <select className="input-fluid" id="avg-hourly-rate" name="avgHourlyRate" required>
                          <option value="">Blended hourly rate for management</option>
                          <option value="35-45">$35-45/hour</option>
                          <option value="45-55">$45-55/hour</option>
                          <option value="55-70">$55-70/hour</option>
                          <option value="70-85">$70-85/hour</option>
                          <option value="85-100">$85-100/hour</option>
                          <option value="over-100">Over $100/hour</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 4: Current Pain Points */}
                    <div className="form-step" data-step="4">
                      <div className="step-header">
                        <h4 className="text-fluid-xl font-semibold">🔥 Current Pain Points & Challenges</h4>
                        <p className="text-fluid-base opacity-75">What's costing you the most time and money?</p>
                      </div>
                      
                      <div className="form-group">
                        <label className="label-fluid" for="primary-challenge">Biggest Operational Challenge *</label>
                        <select className="input-fluid" id="primary-challenge" name="primaryChallenge" required>
                          <option value="">What causes the most headaches?</option>
                          <option value="schedule-delays">Schedule delays and missed deadlines</option>
                          <option value="budget-overruns">Budget overruns and cost control</option>
                          <option value="document-management">Document management and paperwork</option>
                          <option value="workforce-productivity">Workforce productivity and time tracking</option>
                          <option value="communication-issues">Communication and coordination</option>
                          <option value="supply-chain">Supply chain and material management</option>
                          <option value="compliance-reporting">Compliance and regulatory reporting</option>
                          <option value="client-management">Client communication and satisfaction</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="delay-frequency">How Often Do Projects Experience Delays? *</label>
                        <select className="input-fluid" id="delay-frequency" name="delayFrequency" required>
                          <option value="">Honest assessment of project delays</option>
                          <option value="rarely">Rarely (Less than 10% of projects)</option>
                          <option value="sometimes">Sometimes (10-25% of projects)</option>
                          <option value="often">Often (25-50% of projects)</option>
                          <option value="frequently">Frequently (50-75% of projects)</option>
                          <option value="almost-always">Almost Always (75%+ of projects)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="budget-variance">Typical Budget Variance *</label>
                        <select className="input-fluid" id="budget-variance" name="budgetVariance" required>
                          <option value="">How much do you typically go over/under budget?</option>
                          <option value="under-2">Under budget by 2%+</option>
                          <option value="within-2">Within 2% of budget</option>
                          <option value="over-2-5">Over budget by 2-5%</option>
                          <option value="over-5-10">Over budget by 5-10%</option>
                          <option value="over-10-15">Over budget by 10-15%</option>
                          <option value="over-15">Over budget by 15%+</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 5: Time Analysis */}
                    <div className="form-step" data-step="5">
                      <div className="step-header">
                        <h4 className="text-fluid-xl font-semibold">⏰ Time & Efficiency Analysis</h4>
                        <p className="text-fluid-base opacity-75">Where does your team spend the most time?</p>
                      </div>
                      
                      <div className="form-group">
                        <label className="label-fluid" for="admin-hours">Total Admin Hours per Week (All Staff) *</label>
                        <select className="input-fluid" id="admin-hours" name="adminHours" required>
                          <option value="">Combined weekly admin hours</option>
                          <option value="under-20">Under 20 hours</option>
                          <option value="20-40">20-40 hours</option>
                          <option value="40-60">40-60 hours</option>
                          <option value="60-80">60-80 hours</option>
                          <option value="80-120">80-120 hours</option>
                          <option value="120-160">120-160 hours</option>
                          <option value="over-160">Over 160 hours</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="reporting-time">Time Spent on Reports/Documentation per Week *</label>
                        <select className="input-fluid" id="reporting-time" name="reportingTime" required>
                          <option value="">Weekly reporting and documentation time</option>
                          <option value="under-10">Under 10 hours</option>
                          <option value="10-20">10-20 hours</option>
                          <option value="20-30">20-30 hours</option>
                          <option value="30-50">30-50 hours</option>
                          <option value="over-50">Over 50 hours</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="communication-time">Time Spent on Project Communication per Week *</label>
                        <select className="input-fluid" id="communication-time" name="communicationTime" required>
                          <option value="">Meetings, emails, calls, coordination</option>
                          <option value="under-15">Under 15 hours</option>
                          <option value="15-25">15-25 hours</option>
                          <option value="25-35">25-35 hours</option>
                          <option value="35-50">35-50 hours</option>
                          <option value="over-50">Over 50 hours</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 6: Financial Goals */}
                    <div className="form-step" data-step="6">
                      <div className="step-header">
                        <h4 className="text-fluid-xl font-semibold">💰 Financial Goals & Expectations</h4>
                        <p className="text-fluid-base opacity-75">What would success look like for your business?</p>
                      </div>
                      
                      <div className="form-group">
                        <label className="label-fluid" for="growth-target">Annual Growth Target *</label>
                        <select className="input-fluid" id="growth-target" name="growthTarget" required>
                          <option value="">Desired annual growth rate</option>
                          <option value="maintain">Maintain current volume</option>
                          <option value="5-10">5-10% growth</option>
                          <option value="10-20">10-20% growth</option>
                          <option value="20-30">20-30% growth</option>
                          <option value="30-50">30-50% growth</option>
                          <option value="over-50">Over 50% growth</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="roi-timeline">Expected ROI Timeline *</label>
                        <select className="input-fluid" id="roi-timeline" name="roiTimeline" required>
                          <option value="">When do you need to see returns?</option>
                          <option value="immediate">Immediate (1-3 months)</option>
                          <option value="short-term">Short-term (3-6 months)</option>
                          <option value="medium-term">Medium-term (6-12 months)</option>
                          <option value="long-term">Long-term (12+ months)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="investment-budget">Technology Investment Budget *</label>
                        <select className="input-fluid" id="investment-budget" name="investmentBudget" required>
                          <option value="">Annual technology/software budget</option>
                          <option value="under-25k">Under $25K</option>
                          <option value="25k-50k">$25K - $50K</option>
                          <option value="50k-100k">$50K - $100K</option>
                          <option value="100k-200k">$100K - $200K</option>
                          <option value="over-200k">Over $200K</option>
                        </select>
                      </div>
                    </div>

                    {/* Step 7: Contact & Report Delivery */}
                    <div className="form-step" data-step="7">
                      <div className="step-header">
                        <h4 className="text-fluid-xl font-semibold">📧 Contact Information & Report Delivery</h4>
                        <p className="text-fluid-base opacity-75">Where should we send your personalized ROI analysis?</p>
                      </div>
                      
                      <div className="form-group">
                        <label className="label-fluid" for="contact-name">Your Name *</label>
                        <input className="input-fluid" type="text" id="contact-name" name="contactName" placeholder="Your full name" required />
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="job-title">Job Title *</label>
                        <input className="input-fluid" type="text" id="job-title" name="jobTitle" placeholder="e.g., Project Manager, Owner, Operations Director" required />
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="email">Email Address *</label>
                        <input className="input-fluid" type="email" id="email" name="email" placeholder="your.email@company.com" required />
                        <small className="text-fluid-sm opacity-75">Your personalized ROI report will be delivered to this email within 4 hours</small>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="phone">Phone Number (Optional)</label>
                        <input className="input-fluid" type="tel" id="phone" name="phone" placeholder="(555) 123-4567" />
                        <small className="text-fluid-sm opacity-75">For follow-up questions about your ROI analysis</small>
                      </div>

                      <div className="form-group">
                        <label className="label-fluid" for="preferred-contact">Preferred Contact Method *</label>
                        <select className="input-fluid" id="preferred-contact" name="preferredContact" required>
                          <option value="">How would you like us to follow up?</option>
                          <option value="email-only">Email only - send report and resources</option>
                          <option value="email-call">Email + optional phone consultation</option>
                          <option value="schedule-demo">Email + schedule a demo</option>
                          <option value="no-contact">Report only - no follow-up needed</option>
                        </select>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="form-navigation flex-fluid between">
                      <button type="button" id="prev-btn" className="cta-button secondary" style="display: none;">← Previous</button>
                      <button type="button" id="next-btn" className="cta-button primary">Next →</button>
                      <button type="submit" id="calculate-btn" className="cta-button primary large" style="display: none;">
                        🧮 Calculate My ROI
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Live Results Preview */}
              <div className="results-preview-section">
                <div className="card-fluid primary">
                  <h3 className="text-fluid-2xl font-bold mb-fluid-lg">📊 Your Estimated Savings</h3>
                  
                  <div id="live-results" className="results-display">
                    <div className="placeholder-results">
                      <div className="result-item">
                        <span className="result-label">Complete the form to see</span>
                        <span className="result-value">Your Savings</span>
                      </div>
                      <div className="coming-up">
                        <h4 className="text-fluid-lg font-semibold mb-fluid-sm">📈 What You'll Get:</h4>
                        <ul className="benefits-list">
                          <li>✅ Detailed annual savings breakdown</li>
                          <li>✅ Month-by-month ROI progression</li>
                          <li>✅ Payback period analysis</li>
                          <li>✅ Recommended AI agent priorities</li>
                          <li>✅ Implementation timeline</li>
                          <li>✅ Industry benchmarking</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div id="calculated-results" style="display: none;">
                      {/* Results populated by JavaScript */}
                    </div>
                  </div>
                </div>

                {/* Example Results Teaser */}
                <div className="card-fluid mt-fluid-lg">
                  <h4 className="text-fluid-lg font-semibold mb-fluid-md">🎯 Example Results</h4>
                  <div className="example-scenarios">
                    <div className="scenario-item">
                      <div className="scenario-profile">
                        <strong>$15M Builder</strong>
                        <span>25 projects, 4 PMs</span>
                      </div>
                      <div className="scenario-result">
                        <span className="savings-amount">$847K/year</span>
                        <span className="roi-percent">612% ROI</span>
                      </div>
                    </div>
                    <div className="scenario-item">
                      <div className="scenario-profile">
                        <strong>$35M Contractor</strong>
                        <span>45 projects, 8 PMs</span>
                      </div>
                      <div className="scenario-result">
                        <span className="savings-amount">$1.9M/year</span>
                        <span className="roi-percent">723% ROI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed ROI Methodology - Transparent & Credible */}
        <section className="section-fluid light">
          <div className="container">
            <div className="methodology-header text-center my-fluid-xl">
              <h2 className="text-fluid-4xl font-bold mb-fluid-md">📋 How We Calculate Your ROI</h2>
              <p className="text-fluid-lg opacity-75 max-w-3xl mx-auto">Transparent methodology based on real data from 200+ construction companies. Every calculation is conservative and verifiable.</p>
            </div>

            <div className="methodology-grid grid-auto-fit gap-fluid">
              
              <div className="card-fluid">
                <div className="methodology-step">
                  <div className="step-icon">⏱️</div>
                  <h4 className="text-fluid-xl font-semibold">Time Savings Calculation</h4>
                  <div className="calculation-breakdown">
                    <div className="calc-item">
                      <span className="calc-label">Admin time reduction:</span>
                      <span className="calc-formula">35-60% savings</span>
                    </div>
                    <div className="calc-item">
                      <span className="calc-label">Reporting automation:</span>
                      <span className="calc-formula">70-85% savings</span>
                    </div>
                    <div className="calc-item">
                      <span className="calc-label">Communication efficiency:</span>
                      <span className="calc-formula">40-55% savings</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-fluid">
                <div className="methodology-step">
                  <div className="step-icon">💰</div>
                  <h4 className="text-fluid-xl font-semibold">Cost Savings Calculation</h4>
                  <div className="calculation-breakdown">
                    <div className="calc-item">
                      <span className="calc-label">Delay prevention:</span>
                      <span className="calc-formula">8-15% of project value</span>
                    </div>
                    <div className="calc-item">
                      <span className="calc-label">Budget variance reduction:</span>
                      <span className="calc-formula">3-8% improvement</span>
                    </div>
                    <div className="calc-item">
                      <span className="calc-label">Material optimization:</span>
                      <span className="calc-formula">2-5% cost reduction</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-fluid">
                <div className="methodology-step">
                  <div className="step-icon">📊</div>
                  <h4 className="text-fluid-xl font-semibold">ROI Calculation Formula</h4>
                  <div className="calculation-breakdown">
                    <div className="calc-formula-display">
                      <span className="formula-label">ROI % =</span>
                      <div className="formula-fraction">
                        <div className="numerator">(Annual Savings - Annual Cost)</div>
                        <div className="denominator">Annual Cost</div>
                      </div>
                      <span className="formula-multiply">× 100</span>
                    </div>
                    <div className="calc-item">
                      <span className="calc-label">Conservative assumptions:</span>
                      <span className="calc-formula">20% buffer applied</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Real Client Examples */}
            <div className="real-examples-section my-fluid-xl">
              <h3 className="text-fluid-3xl font-bold text-center mb-fluid-xl">📈 Real Client Results</h3>
              
              <div className="examples-grid grid-auto-fit gap-fluid">
                
                <div className="card-fluid primary">
                  <div className="example-header">
                    <h4 className="text-fluid-xl font-bold">🏗️ Regional Builder</h4>
                    <div className="company-specs">
                      <div className="spec-item">
                        <span className="spec-label">Volume:</span>
                        <span className="spec-value">$8M annually</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Projects:</span>
                        <span className="spec-value">15 concurrent</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Challenge:</span>
                        <span className="spec-value">Schedule delays</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="savings-breakdown">
                    <div className="savings-category">
                      <h5 className="category-title">⏰ Time Savings (18hrs/week)</h5>
                      <div className="savings-item">
                        <span className="item-desc">3 PMs × 6hrs saved weekly × $65/hr</span>
                        <span className="item-value">$61K/year</span>
                      </div>
                    </div>
                    
                    <div className="savings-category">
                      <h5 className="category-title">🚫 Avoided Delays</h5>
                      <div className="savings-item">
                        <span className="item-desc">4 projects × $70K average delay cost</span>
                        <span className="item-value">$280K/year</span>
                      </div>
                    </div>
                    
                    <div className="savings-category">
                      <h5 className="category-title">🎯 Budget Accuracy</h5>
                      <div className="savings-item">
                        <span className="item-desc">Reduced variance from 8% to 3%</span>
                        <span className="item-value">$158K/year</span>
                      </div>
                    </div>
                    
                    <div className="total-results">
                      <div className="total-savings">
                        <span className="total-label">Total Annual Savings:</span>
                        <span className="total-value">$499K</span>
                      </div>
                      <div className="roi-calculation">
                        <span className="roi-breakdown">Investment: $89K → Return: $499K</span>
                        <span className="roi-result">560% ROI</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-fluid accent">
                  <div className="example-header">
                    <h4 className="text-fluid-xl font-bold">🏢 Commercial Contractor</h4>
                    <div className="company-specs">
                      <div className="spec-item">
                        <span className="spec-label">Volume:</span>
                        <span className="spec-value">$25M annually</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Projects:</span>
                        <span className="spec-value">35 concurrent</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Challenge:</span>
                        <span className="spec-value">Budget overruns</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="savings-breakdown">
                    <div className="savings-category">
                      <h5 className="category-title">⚡ Admin Efficiency</h5>
                      <div className="savings-item">
                        <span className="item-desc">7 staff × 12hrs saved weekly × $75/hr</span>
                        <span className="item-value">$327K/year</span>
                      </div>
                    </div>
                    
                    <div className="savings-category">
                      <h5 className="category-title">🛡️ Overrun Prevention</h5>
                      <div className="savings-item">
                        <span className="item-desc">Reduced overruns from 12% to 4%</span>
                        <span className="item-value">$625K/year</span>
                      </div>
                    </div>
                    
                    <div className="savings-category">
                      <h5 className="category-title">📦 Material Optimization</h5>
                      <div className="savings-item">
                        <span className="item-desc">Supply chain intelligence & timing</span>
                        <span className="item-value">$198K/year</span>
                      </div>
                    </div>
                    
                    <div className="total-results">
                      <div className="total-savings">
                        <span className="total-label">Total Annual Savings:</span>
                        <span className="total-value">$1.15M</span>
                      </div>
                      <div className="roi-calculation">
                        <span className="roi-breakdown">Investment: $156K → Return: $1.15M</span>
                        <span className="roi-result">737% ROI</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-fluid dark">
                  <div className="example-header">
                    <h4 className="text-fluid-xl font-bold">🏗️ Infrastructure Specialist</h4>
                    <div className="company-specs">
                      <div className="spec-item">
                        <span className="spec-label">Volume:</span>
                        <span className="spec-value">$45M annually</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Projects:</span>
                        <span className="spec-value">12 major projects</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Challenge:</span>
                        <span className="spec-value">Complex coordination</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="savings-breakdown">
                    <div className="savings-category">
                      <h5 className="category-title">🤝 Coordination Efficiency</h5>
                      <div className="savings-item">
                        <span className="item-desc">Multi-stakeholder project management</span>
                        <span className="item-value">$445K/year</span>
                      </div>
                    </div>
                    
                    <div className="savings-category">
                      <h5 className="category-title">📋 Compliance Automation</h5>
                      <div className="savings-item">
                        <span className="item-desc">Regulatory reporting & documentation</span>
                        <span className="item-value">$289K/year</span>
                      </div>
                    </div>
                    
                    <div className="savings-category">
                      <h5 className="category-title">🔍 Quality Control</h5>
                      <div className="savings-item">
                        <span className="item-desc">Predictive issue detection</span>
                        <span className="item-value">$567K/year</span>
                      </div>
                    </div>
                    
                    <div className="total-results">
                      <div className="total-savings">
                        <span className="total-label">Total Annual Savings:</span>
                        <span className="total-value">$1.3M</span>
                      </div>
                      <div className="roi-calculation">
                        <span className="roi-breakdown">Investment: $198K → Return: $1.3M</span>
                        <span className="roi-result">657% ROI</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Industry Benchmarks */}
            <div className="benchmarks-section">
              <h3 className="text-fluid-3xl font-bold text-center mb-fluid-lg">📊 Industry Benchmarks</h3>
              <div className="card-fluid">
                <p className="text-fluid-lg text-center mb-fluid-lg opacity-75">
                  Based on analysis of 200+ construction companies across different segments
                </p>
                
                <div className="benchmark-stats grid-auto-fit gap-fluid">
                  <div className="benchmark-item">
                    <div className="benchmark-metric">35-75%</div>
                    <div className="benchmark-label">Admin Time Reduction</div>
                    <div className="benchmark-note">Varies by business size & complexity</div>
                  </div>
                  <div className="benchmark-item">
                    <div className="benchmark-metric">450-850%</div>
                    <div className="benchmark-label">Typical ROI Range</div>
                    <div className="benchmark-note">First year results, conservative</div>
                  </div>
                  <div className="benchmark-item">
                    <div className="benchmark-metric">3-6 months</div>
                    <div className="benchmark-label">Payback Period</div>
                    <div className="benchmark-note">Time to break even on investment</div>
                  </div>
                  <div className="benchmark-item">
                    <div className="benchmark-metric">$50K-$2.5M</div>
                    <div className="benchmark-label">Annual Savings Range</div>
                    <div className="benchmark-note">Depends on business volume & challenges</div>
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