import { Navigation } from '../../components/navigation'

export const BudgetGuardianPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Budget Guardian - Stop Bleeding Money on Your Next Build</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="The AI that catches budget hemorrhaging before your accountant does. Real estate developers using Budget Guardian haven't had a cost overrun in 18 months." />
      </head>
      <body>
        <Navigation />

        {/* Hero Section */}
        <section className="hero-section bg-primary text-white">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <div className="badge text-accent">COST KILLER</div>
                <h1 className="hero-title">Budget Guardian</h1>
                <p className="hero-subtitle">
                  The AI that knows you're about to get screwed on material costs <strong>3 weeks before your supplier calls</strong> with the "bad news."
                </p>
                <div className="skeptic-proof">
                  <div className="proof-item">
                    <span className="proof-label">Last "Surprise" Cost Overrun:</span>
                    <span className="proof-value">18 months ago</span>
                  </div>
                  <div className="proof-item">
                    <span className="proof-label">Average Developer Saves:</span>
                    <span className="proof-value">$340K per project</span>
                  </div>
                  <div className="proof-item">
                    <span className="proof-label">Time to Payback:</span>
                    <span className="proof-value">14 days</span>
                  </div>
                </div>
              </div>
              <div className="quirky-features">
                <h3>Weirdly Specific Features You Won't Find Anywhere Else:</h3>
                <ul className="quirky-list">
                  <li><strong>"Subcontractor Bullshit Detector"</strong> - Flags when change orders smell fishy</li>
                  <li><strong>"The Bleeding Indicator"</strong> - Shows exactly where money disappears (spoiler: it's always HVAC)</li>
                  <li><strong>"Supplier Loyalty Tax Calculator"</strong> - Quantifies how much extra you pay for "trusted" vendors</li>
                  <li><strong>"The Oh Shit Alert"</strong> - Emergency notifications that actually matter</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reality Check Section */}
        <section className="reality-section bg-dark text-white">
          <div className="container">
            <h2>Let's Be Honest About Your Last Project</h2>
            <div className="reality-grid">
              <div className="reality-card pain">
                <h3>What You Told Your Investors</h3>
                <p>"Construction budget: $2.4M, completion in 8 months, 22% profit margin"</p>
              </div>
              <div className="reality-card truth">
                <h3>What Actually Happened</h3>
                <p>"Final cost: $3.1M, took 11 months, profit margin: 4% (if you don't count your time)"</p>
              </div>
            </div>
            <p className="reality-truth">
              <strong>The brutal truth:</strong> 89% of developers underestimate costs by 25%+. 
              It's not because you're bad at math. It's because you're playing a game where everyone lies about the real numbers.
            </p>
          </div>
        </section>

        {/* Day in the Life Section - Developer Focus */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title">How Budget Guardian Actually Works (Real Developer Day)</h2>
            <p className="section-subtitle">Follow Marcus Chen, developing a 47-unit multifamily in Austin. His Budget Guardian catches problems other developers miss.</p>
            
            <div className="timeline">
              {/* 5:47 AM */}
              <div className="timeline-item">
                <div className="timeline-time">5:47 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-alert">COFFEE ALERT</div>
                  <h3>"Your Concrete Guy Is About To Screw You"</h3>
                  <p>Marcus gets this text while making coffee: <em>"Lone Star Concrete raised prices 18% overnight. Your Friday pour = $23K over budget. Alternative supplier identified: same quality, 8% cheaper, available Thursday."</em></p>
                  <div className="developer-mindset">
                    <strong>Developer Brain:</strong> "How the hell does AI know my concrete guy better than I do?"
                  </div>
                  <div className="quirky-detail">
                    <strong>Quirky Feature:</strong> Budget Guardian monitors supplier social media, news mentions, and vendor gossip networks. Yes, it literally reads construction forums.
                  </div>
                </div>
              </div>

              {/* 7:23 AM */}
              <div className="timeline-item">
                <div className="timeline-time">7:23 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-investigate">SNIFF TEST</div>
                  <h3>The "Subcontractor Bullshit Detector" Activates</h3>
                  <p>HVAC contractor emails a change order: <em>"Discovered additional ductwork needed for code compliance - $47K."</em> Budget Guardian responds in 4 minutes: <em>"BULLSHIT PROBABILITY: 73%. This 'discovery' happens on 84% of this contractor's jobs. Here's the real story..."</em></p>
                  <div className="developer-relief">
                    <strong>Marcus thinks:</strong> "Finally, something that calls out these guys on their games."
                  </div>
                  <div className="psychology-trigger">
                    <strong>Why this works:</strong> Developers HATE being played for suckers. They respect straight talk about contractor manipulation.
                  </div>
                </div>
              </div>

              {/* 9:15 AM */}
              <div className="timeline-item">
                <div className="timeline-time">9:15 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-money">BLEEDING INDICATOR</div>
                  <h3>"The Money Hemorrhage Visualization"</h3>
                  <p>Budget Guardian shows a real-time "bleeding" animation: <em>"Your project is bleeding $3,400 per day due to: Inefficient labor scheduling (68%), material waste (22%), change order creep (10%)."</em></p>
                  <div className="visceral-impact">
                    <strong>Visual Psychology:</strong> Seeing money "bleed" creates urgency that spreadsheets never could.
                  </div>
                  <div className="quirky-detail">
                    <strong>Quirky Feature:</strong> The bleeding gets faster/slower based on real cash flow. Developers become addicted to "stopping the bleeding."
                  </div>
                </div>
              </div>

              {/* 11:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">11:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-negotiate">LEVERAGE</div>
                  <h3>The "Supplier Loyalty Tax" Reality Check</h3>
                  <p>Budget Guardian calculates: <em>"Your 'trusted' electrical supplier charges 23% premium vs. market rate. Loyalty tax this year: $67K. Want to see what competitive pricing looks like?"</em></p>
                  <div className="ego-protection">
                    <strong>Smart Psychology:</strong> Frames overpaying as "loyalty tax" not "getting ripped off" - protects developer ego while motivating change.
                  </div>
                  <div className="action-trigger">
                    <strong>Result:</strong> Marcus calls electrician, negotiates 15% discount by mentioning "market analysis." Saves $34K without burning bridges.
                  </div>
                </div>
              </div>

              {/* 1:45 PM */}
              <div className="timeline-item">
                <div className="timeline-time">1:45 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-predict">CRYSTAL BALL</div>
                  <h3>"The Profit Erosion Predictor"</h3>
                  <p>Budget Guardian forecasts: <em>"At current burn rate, your 22% target margin becomes 8.4% by completion. Here's the 3-move chess game to fix it..."</em></p>
                  <div className="strategic-thinking">
                    <strong>Developer Appeal:</strong> Shows exactly how current decisions impact final profit margins. Developers think in ROI, not just costs.
                  </div>
                  <div className="competitive-advantage">
                    <strong>Quirky Feature:</strong> "Profit Erosion Predictor" runs 10,000 Monte Carlo simulations to show best/worst case scenarios.
                  </div>
                </div>
              </div>

              {/* 3:20 PM */}
              <div className="timeline-item">
                <div className="timeline-time">3:20 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-shield">OH SHIT</div>
                  <h3>The "Oh Shit Alert" That Actually Matters</h3>
                  <p>Red alert notification: <em>"MATERIAL SHORTAGE INCOMING: Your flooring supplier just lost their main distributor. 73% chance of 3-week delay unless you act in next 6 hours. Alternative sources ready for immediate order."</em></p>
                  <div className="crisis-management">
                    <strong>Developer Panic:</strong> "How did this thing know about supplier problems before my supplier did?"
                  </div>
                  <div className="quirky-detail">
                    <strong>Quirky Feature:</strong> Budget Guardian monitors shipping manifests, supplier financials, and industry news to predict disruptions. It's like having an insider in every company.
                  </div>
                </div>
              </div>

              {/* 4:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">4:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-flex">POWER MOVE</div>
                  <h3>"The Contractor Leverage Calculator"</h3>
                  <p>Before calling his GC about delays, Budget Guardian provides: <em>"Your GC's cash flow analysis: They need this job more than you need them. Negotiation leverage: 78%. Suggested approach: Firm but supportive. Avoid: Threats or ultimatums."</em></p>
                  <div className="relationship-dynamics">
                    <strong>Psychological Edge:</strong> Understanding the other party's financial position transforms negotiations from emotional to strategic.
                  </div>
                </div>
              </div>

              {/* 6:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">6:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-victory">WINNING</div>
                  <h3>End of Day: The "Victory Lap" Report</h3>
                  <p>Budget Guardian summary: <em>"Today's saves: $67K (supplier negotiation + change order challenge). Project health: Excellent. Profit protection: On track for 19.2% margin. Sleep well, Marcus."</em></p>
                  <div className="satisfaction">
                    <strong>Psychological Reward:</strong> Daily validation that the system is actively protecting profit. Creates addictive sense of control.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skeptic Conversion Section */}
        <section className="skeptic-section bg-light">
          <div className="container">
            <h2>"Yeah Right, Another AI Snake Oil Pitch"</h2>
            <div className="skeptic-grid">
              <div className="skeptic-concern">
                <h3>Your Concern: "AI doesn't understand construction"</h3>
                <p className="reality-check">
                  <strong>Fair point.</strong> 97% of "construction AI" is built by tech bros who've never held a hammer.
                  Budget Guardian was trained on $2.3B worth of actual construction projects. It knows why concrete costs more on Fridays.
                </p>
              </div>
              <div className="skeptic-concern">
                <h3>Your Concern: "This sounds too good to be true"</h3>
                <p className="reality-check">
                  <strong>Healthy skepticism.</strong> Here's what Budget Guardian CAN'T do: Make your subs show up on time, fix your architect's mistakes, or turn bad decisions into good ones. It just prevents the financial surprises that kill deals.
                </p>
              </div>
              <div className="skeptic-concern">
                <h3>Your Concern: "What if it's wrong?"</h3>
                <p className="reality-check">
                  <strong>Valid worry.</strong> Budget Guardian is wrong about 6% of predictions. Your gut instinct is wrong about 43% of the time. Which odds do you prefer?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile UX Preview */}
        <section className="mobile-ux-section">
          <div className="container">
            <h2>What This Looks Like on Your iPhone</h2>
            <div className="mobile-preview">
              <div className="iphone-mockup">
                <div className="iphone-screen">
                  <div className="ios-status-bar">
                    <span className="time">9:41 AM</span>
                    <span className="battery">100%</span>
                  </div>
                  <div className="app-header">
                    <h4>Budget Guardian</h4>
                    <div className="alert-badge">3 Alerts</div>
                  </div>
                  <div className="bleeding-indicator">
                    <div className="bleed-animation">💸</div>
                    <p>Bleeding: $2,340/day</p>
                    <div className="stop-bleeding-btn">STOP THE BLEEDING</div>
                  </div>
                  <div className="quick-stats">
                    <div className="stat">Budget Health: 87%</div>
                    <div className="stat">Margin: 19.2%</div>
                    <div className="stat">Days Left: 45</div>
                  </div>
                  <div className="alerts-preview">
                    <div className="alert-item urgent">
                      <span className="alert-icon">🚨</span>
                      <span>Concrete price spike incoming</span>
                    </div>
                    <div className="alert-item warning">
                      <span className="alert-icon">⚠️</span>
                      <span>HVAC change order smells fishy</span>
                    </div>
                    <div className="alert-item good">
                      <span className="alert-icon">✅</span>
                      <span>Electrical crew ahead of schedule</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ux-explanation">
                <h3>iPhone UX Design Principles:</h3>
                <ul>
                  <li><strong>Glanceable Alerts:</strong> Critical info in under 3 seconds</li>
                  <li><strong>Gesture-Based Actions:</strong> Swipe to approve/reject change orders</li>
                  <li><strong>Visual Bleeding:</strong> Animated money loss that hurts to watch</li>
                  <li><strong>One-Thumb Navigation:</strong> All controls within thumb reach</li>
                  <li><strong>Offline Capability:</strong> Works on job sites with poor signal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI for Developers */}
        <section className="roi-reality">
          <div className="container">
            <div className="roi-card developer-focused">
              <h3>Real Numbers for Real Developers</h3>
              <p>Based on 300-unit multifamily project ($45M total development cost):</p>
              <div className="roi-breakdown realistic">
                <div className="roi-item">
                  <span className="roi-label">Typical cost overruns you'll avoid:</span>
                  <span className="roi-value">$2.1M</span>
                  <span className="roi-note">(Industry average: 15-20% over budget)</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Time savings (no more budget firefighting):</span>
                  <span className="roi-value">$180K</span>
                  <span className="roi-note">(Your time = $150/hour, save 20hrs/week)</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Improved final profit margin:</span>
                  <span className="roi-value">$900K</span>
                  <span className="roi-note">(2% margin improvement on $45M project)</span>
                </div>
                <div className="roi-investment">
                  <span className="roi-label">Budget Guardian annual cost:</span>
                  <span className="roi-value">$89K</span>
                  <span className="roi-note">(Less than one change order surprise)</span>
                </div>
                <div className="roi-total developer">
                  <span className="roi-label"><strong>Net Profit Protection:</strong></span>
                  <span className="roi-value"><strong>$3.09M</strong></span>
                  <span className="roi-confidence">(Conservative estimate, 12-month analysis)</span>
                </div>
              </div>
              <div className="roi-reality-check">
                <p><strong>Reality Check:</strong> Even if Budget Guardian only catches ONE major cost overrun, it pays for itself 23x over. Everything else is pure profit protection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Developer Psychology */}
        <section className="cta-section bg-primary text-white">
          <div className="container">
            <h2>Stop Getting Financially Blindsided</h2>
            <div className="cta-psychology">
              <div className="cta-truth">
                <p>Look, you didn't get into development to become an expert in construction cost accounting. You got in to make money building things people need.</p>
                <p><strong>Budget Guardian handles the money-watching part</strong> so you can focus on the deal-making part.</p>
              </div>
              <div className="urgency-real">
                <div className="urgency-stat">
                  <span className="urgency-number">7</span>
                  <span className="urgency-text">developers currently in our pilot program</span>
                </div>
                <div className="urgency-stat">
                  <span className="urgency-number">3</span>
                  <span className="urgency-text">spots remaining for Q1 2025</span>
                </div>
                <p className="urgency-why">We limit pilot participants because each implementation requires custom integration with your existing systems. Quality over quantity.</p>
              </div>
              <div className="cta-buttons">
                <a href="/apply" className="btn-accent btn-large">Get Budget Guardian</a>
                <a href="/case-studies" className="btn-secondary-outline">See Developer Case Studies</a>
              </div>
              <div className="guarantee-real">
                <p><strong>Money-Back Guarantee:</strong> If Budget Guardian doesn't catch at least $50K in potential overruns in your first 90 days, you get a full refund plus $10K for wasting your time.</p>
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
                  <a href="/case-studies">Developer Case Studies</a>
                  <a href="/how-it-works">How It Works</a>
                  <a href="/apply">Apply Now</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Developer Dopamine. Built by developers, for developers who refuse to lose money on preventable surprises.</p>
            </div>
          </div>
        </footer>

        <script src="/static/app.js"></script>
      </body>
    </html>
  )
}