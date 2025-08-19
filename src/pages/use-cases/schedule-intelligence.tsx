import { FC } from 'hono/jsx'
import { Navigation } from '../../components/navigation'

export const ScheduleIntelligencePage: FC = () => {
  return (
    <div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="use-case-hero">
        <div className="container">
          <div className="hero-content">
            <div className="use-case-badge">
              <span className="badge-icon">SCHED</span>
              <span className="badge-text">Schedule Intelligence</span>
            </div>
            
            <h1 className="use-case-headline">
              Never Miss Another Deadline<br/>
              <span className="highlight-gradient">Because You Saw It Coming</span>
            </h1>
            
            <p className="use-case-subheadline">
              Watch a day in the life of a project manager who stopped juggling chaos 
              and started predicting the future. Every delay caught, every bottleneck avoided, 
              every deadline met.
            </p>
          </div>
        </div>
      </section>

      {/* Day-in-Life Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-header">
            <h2>Monday, 7:42 AM</h2>
            <p className="timeline-subtitle">Mike opens his laptop. The coffee isn't even ready, but DD already is.</p>
          </div>
          
          <div className="timeline-grid">
            <div className="timeline-item">
              <div className="timeline-time">7:42 AM</div>
              <div className="timeline-content">
                <h3>Morning Intelligence Brief</h3>
                <div className="timeline-card">
                  <div className="card-header">
                    <span className="status-badge critical">CRITICAL</span>
                    <span className="card-title">Steel Delivery Delay Detected</span>
                  </div>
                  <div className="card-body">
                    <p><strong>Impact:</strong> 3-day schedule slip, affecting 4 downstream tasks</p>
                    <p><strong>Auto-Mitigation:</strong> Concrete pour rescheduled to Thursday</p>
                    <p><strong>Vendor Contact:</strong> Alternative supplier identified, quote requested</p>
                  </div>
                  <div className="card-footer">
                    <span className="savings-tag">Saved: $47K in delay costs</span>
                  </div>
                </div>
                <p className="timeline-description">
                  Before DD: Mike finds out about the steel delay on Wednesday when the truck doesn't show up. 
                  Panic mode activated.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">9:15 AM</div>
              <div className="timeline-content">
                <h3>Automatic Task Sequencing</h3>
                <div className="timeline-card">
                  <div className="card-header">
                    <span className="status-badge optimized">OPTIMIZED</span>
                    <span className="card-title">Schedule Rebalanced</span>
                  </div>
                  <div className="card-body">
                    <p><strong>Moved Up:</strong> Interior framing (was scheduled for next week)</p>
                    <p><strong>Resource Shift:</strong> Electrical crew available 2 days earlier</p>
                    <p><strong>Critical Path:</strong> Maintained despite steel delay</p>
                  </div>
                  <div className="card-actions">
                    <button className="approve-button">Approve Changes</button>
                    <button className="review-button">Review Impact</button>
                  </div>
                </div>
                <p className="timeline-description">
                  Mike reviews the proposed changes over his second coffee. Two clicks and the entire project 
                  is back on track. His crew gets updated schedules via SMS.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">11:30 AM</div>
              <div className="timeline-content">
                <h3>Predictive Delay Warning</h3>
                <div className="timeline-card">
                  <div className="card-header">
                    <span className="status-badge warning">WARNING</span>
                    <span className="card-title">Weather Impact Analysis</span>
                  </div>
                  <div className="card-body">
                    <p><strong>Forecast:</strong> Heavy rain Thursday-Friday (87% confidence)</p>
                    <p><strong>At Risk:</strong> Foundation pour, site access, material delivery</p>
                    <p><strong>Recommendation:</strong> Move pour to Wednesday, extend hours</p>
                  </div>
                  <div className="card-metadata">
                    <span>Data sources: Weather.gov, site sensors, historical patterns</span>
                  </div>
                </div>
                <p className="timeline-description">
                  The system cross-references weather data, soil conditions, and historical project data. 
                  Mike makes the call to accelerate the pour – avoiding a week-long delay.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">2:45 PM</div>
              <div className="timeline-content">
                <h3>Real-Time Progress Tracking</h3>
                <div className="timeline-card">
                  <div className="card-header">
                    <span className="status-badge success">ON TRACK</span>
                    <span className="card-title">Daily Progress Report</span>
                  </div>
                  <div className="card-body">
                    <div className="progress-grid">
                      <div className="progress-item">
                        <span className="progress-label">Framing</span>
                        <div className="progress-bar">
                          <div className="progress-fill" style="width: 78%">78%</div>
                        </div>
                      </div>
                      <div className="progress-item">
                        <span className="progress-label">Electrical</span>
                        <div className="progress-bar">
                          <div className="progress-fill" style="width: 65%">65%</div>
                        </div>
                      </div>
                      <div className="progress-item">
                        <span className="progress-label">Plumbing</span>
                        <div className="progress-bar">
                          <div className="progress-fill" style="width: 45%">45%</div>
                        </div>
                      </div>
                    </div>
                    <p><strong>Overall:</strong> 2 days ahead of baseline schedule</p>
                  </div>
                </div>
                <p className="timeline-description">
                  No more walking the site with a clipboard. Mike gets real-time updates as work gets completed, 
                  with photo verification and GPS timestamps.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">4:20 PM</div>
              <div className="timeline-content">
                <h3>Stakeholder Communication</h3>
                <div className="timeline-card">
                  <div className="card-header">
                    <span className="status-badge info">SENT</span>
                    <span className="card-title">Weekly Progress Update</span>
                  </div>
                  <div className="card-body">
                    <p><strong>To:</strong> Client, architect, key subcontractors</p>
                    <p><strong>Highlights:</strong> Steel issue resolved, schedule maintained</p>
                    <p><strong>Next Week:</strong> Foundation complete, framing 90% done</p>
                    <p><strong>Photos:</strong> 12 progress shots included</p>
                  </div>
                  <div className="card-preview">
                    <div className="email-preview">
                      <strong>Subject:</strong> Oakwood Commons - Week 8 Progress (Ahead of Schedule)
                    </div>
                  </div>
                </div>
                <p className="timeline-description">
                  The client gets a professionally formatted progress report with photos, metrics, 
                  and next week's forecast. Mike didn't write a single word.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-time">5:45 PM</div>
              <div className="timeline-content">
                <h3>Tomorrow's Game Plan</h3>
                <div className="timeline-card">
                  <div className="card-header">
                    <span className="status-badge ready">READY</span>
                    <span className="card-title">Tuesday Schedule Preview</span>
                  </div>
                  <div className="card-body">
                    <p><strong>Priority Tasks:</strong> Foundation forms, electrical rough-in</p>
                    <p><strong>Material Deliveries:</strong> Concrete at 7 AM, wire at 10 AM</p>
                    <p><strong>Crew Assignments:</strong> 8 workers optimally allocated</p>
                    <p><strong>Weather:</strong> Clear skies, optimal conditions</p>
                  </div>
                  <div className="confidence-meter">
                    <span className="confidence-label">Schedule Confidence:</span>
                    <div className="confidence-bar">
                      <div className="confidence-fill" style="width: 94%">94%</div>
                    </div>
                  </div>
                </div>
                <p className="timeline-description">
                  Mike heads home knowing exactly what tomorrow will bring. No surprises, no scrambling, 
                  no 6 AM panic calls from the site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="impact-section">
        <div className="container">
          <div className="impact-header">
            <h2>The Numbers Don't Lie</h2>
            <p className="impact-subtitle">Real metrics from Schedule Intelligence implementations</p>
          </div>
          
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">73%</div>
              <div className="impact-label">Fewer Schedule Overruns</div>
              <div className="impact-description">
                From 34% of projects late to 9% of projects late
              </div>
            </div>
            
            <div className="impact-card">
              <div className="impact-number">$1.2M</div>
              <div className="impact-label">Average Annual Savings</div>
              <div className="impact-description">
                Delay costs avoided across portfolio of projects
              </div>
            </div>
            
            <div className="impact-card">
              <div className="impact-number">4.2hrs</div>
              <div className="impact-label">Daily Time Savings</div>
              <div className="impact-description">
                Project managers reclaim admin time for strategic work
              </div>
            </div>
            
            <div className="impact-card">
              <div className="impact-number">89%</div>
              <div className="impact-label">Issue Prediction Rate</div>
              <div className="impact-description">
                Problems caught before they impact timeline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="technical-section">
        <div className="container">
          <div className="technical-header">
            <h2>How It Actually Works</h2>
            <p className="technical-subtitle">The AI technology behind the magic</p>
          </div>
          
          <div className="technical-grid">
            <div className="tech-card">
              <div className="tech-icon">DATA</div>
              <h3>Multi-Source Integration</h3>
              <p>Connects to your existing project management tools, ERP systems, weather APIs, and IoT sensors. No rip-and-replace required.</p>
              <div className="tech-list">
                <span className="tech-tag">Procore</span>
                <span className="tech-tag">Buildertrend</span>
                <span className="tech-tag">CoConstruct</span>
                <span className="tech-tag">QuickBooks</span>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">ML</div>
              <h3>Predictive Modeling</h3>
              <p>Machine learning algorithms analyze historical patterns, resource constraints, and external factors to predict schedule risks.</p>
              <div className="tech-specs">
                <div className="spec-item">
                  <span className="spec-label">Accuracy:</span>
                  <span className="spec-value">87-94%</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Prediction Window:</span>
                  <span className="spec-value">1-4 weeks</span>
                </div>
              </div>
            </div>
            
            <div className="tech-card">
              <div className="tech-icon">AUTO</div>
              <h3>Automated Actions</h3>
              <p>When issues are detected, the system automatically proposes solutions, reschedules tasks, and notifies stakeholders.</p>
              <div className="automation-list">
                <div className="auto-item">Task resequencing</div>
                <div className="auto-item">Resource reallocation</div>
                <div className="auto-item">Stakeholder notifications</div>
                <div className="auto-item">Alternative vendor sourcing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="use-case-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Never Miss Another Deadline?</h2>
            <p className="cta-description">
              See how Schedule Intelligence transforms your daily project management routine.
            </p>
            
            <div className="cta-buttons">
              <a href="/apply" className="cta-button primary large">
                Get Schedule Intelligence
              </a>
              <a href="/use-cases" className="cta-button secondary large">
                Explore Other Agents
              </a>
            </div>
            
            <div className="cta-guarantee">
              <p>20% faster project delivery guaranteed, or you don't pay.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}