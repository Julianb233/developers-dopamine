import { Navigation } from '../../components/navigation'

export const DocumentProcessorPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document Processor - Developer Dopamine AI Agents</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="AI that reads, understands, and organizes every construction document automatically. Transform paperwork chaos into searchable intelligence in seconds." />
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
                  <span className="badge-text">DOCUMENT PROCESSOR</span>
                </div>
                <h1 className="hero-headline">Document Processor</h1>
                <p className="hero-subheadline">
                  AI that reads every blueprint, contract, and change order faster than your coffee gets cold—and actually remembers what it read.
                </p>
                <div className="impact-stats">
                  <div className="stat-item">
                    <span className="stat-number">89%</span>
                    <span className="stat-label">Faster Document Search</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">47hrs</span>
                    <span className="stat-label">Weekly Time Saved</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">99.2%</span>
                    <span className="stat-label">Information Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day in the Life Section */}
        <section className="timeline-section">
          <div className="container">
            <h2 className="section-title">A Day in the Life with Document Processor</h2>
            <p className="section-subtitle">Follow Project Coordinator Mike as Document Processor transforms his daily document management</p>
            
            <div className="timeline">
              {/* 7:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">7:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-process">PROCESS</div>
                  <h3>Overnight Document Ingestion</h3>
                  <p>Mike arrives to find 23 new documents automatically processed overnight: 12 supplier quotes, 8 permit updates, 2 change orders, and 1 revised structural drawing. All categorized and indexed.</p>
                  <div className="timeline-impact">
                    <strong>Without AI:</strong> Mike spends 2-3 hours manually sorting and filing these documents.
                  </div>
                </div>
              </div>

              {/* 7:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">7:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-search">SEARCH</div>
                  <h3>Instant Information Retrieval</h3>
                  <p>Foreman calls asking about electrical outlet specifications for the kitchen. Mike types "kitchen electrical outlets spec" and gets the exact requirement from page 47 of the electrical plans in 2 seconds.</p>
                  <div className="timeline-metrics">
                    <span className="metric">Search Time: <strong>2 seconds</strong></span>
                    <span className="metric">Accuracy: <strong>100%</strong></span>
                  </div>
                </div>
              </div>

              {/* 8:45 AM */}
              <div className="timeline-item">
                <div className="timeline-time">8:45 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-alert">ALERT</div>
                  <h3>Contract Conflict Detection</h3>
                  <p>Document Processor flags a discrepancy: New change order specifies 2x8 joists, but original structural plans call for 2x10s. Alert sent with exact document references and cost implications.</p>
                  <div className="timeline-benefit">
                    <strong>AI Advantage:</strong> Potential $15K error caught before materials were ordered.
                  </div>
                </div>
              </div>

              {/* 9:30 AM */}
              <div className="timeline-item">
                <div className="timeline-time">9:30 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-extract">EXTRACT</div>
                  <h3>Permit Compliance Check</h3>
                  <p>City inspector calls about fire safety requirements. Document Processor instantly extracts all fire safety specs from permits, blueprints, and code references into a single summary report.</p>
                  <div className="timeline-data">
                    <div className="data-point">Sources: <span>14 documents</span></div>
                    <div className="data-point">Requirements: <span>23 items</span></div>
                    <div className="data-point">Compliance: <span className="on-track">100% met</span></div>
                  </div>
                </div>
              </div>

              {/* 11:00 AM */}
              <div className="timeline-item">
                <div className="timeline-time">11:00 AM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-analyze">ANALYZE</div>
                  <h3>Change Order Impact Analysis</h3>
                  <p>Client requests bathroom layout change. Document Processor analyzes impact across 47 related documents: plumbing plans, electrical layouts, permit requirements, and supplier contracts.</p>
                  <div className="timeline-analysis">
                    <strong>Analysis Results:</strong> 
                    <ul>
                      <li>Requires plumbing permit amendment</li>
                      <li>Affects 3 electrical circuits</li>
                      <li>Impacts tile order delivery schedule</li>
                      <li>Cost estimate: $12,400 ± $800</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 1:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">1:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-generate">GENERATE</div>
                  <h3>Automated Documentation</h3>
                  <p>Mike needs to create a progress report for the client. Document Processor automatically generates a summary of completed work, referencing inspection reports, photo logs, and milestone documents.</p>
                  <div className="timeline-efficiency">
                    <strong>Time Saved:</strong> Report generation from 3 hours to 15 minutes.
                  </div>
                </div>
              </div>

              {/* 2:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">2:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-verify">VERIFY</div>
                  <h3>Supplier Quote Comparison</h3>
                  <p>Three HVAC quotes arrive. Document Processor extracts specifications, terms, and pricing into a comparison matrix, flagging that Quote B excludes ductwork cleaning (saving $2,300 but creating scope gap).</p>
                  <div className="timeline-insight">
                    <strong>Hidden Insight:</strong> Lowest quote missing critical scope items worth $2,300.
                  </div>
                </div>
              </div>

              {/* 3:45 PM */}
              <div className="timeline-item">
                <div className="timeline-time">3:45 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-track">TRACK</div>
                  <h3>Document Version Control</h3>
                  <p>Architect sends revised floor plan. Document Processor automatically identifies 12 changes from previous version and highlights impact areas. Creates visual comparison with change annotations.</p>
                  <div className="timeline-tracking">
                    <strong>Version Management:</strong> All 47 document versions tracked with change history.
                  </div>
                </div>
              </div>

              {/* 4:30 PM */}
              <div className="timeline-item">
                <div className="timeline-time">4:30 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-prepare">PREPARE</div>
                  <h3>Tomorrow's Prep Work</h3>
                  <p>Document Processor automatically prepares tomorrow's document package for the concrete pour: permits, inspection checklists, weather requirements, supplier delivery confirmations, and safety protocols.</p>
                  <div className="timeline-preparation">
                    <strong>Proactive Organization:</strong> All documents ready and accessible before they're needed.
                  </div>
                </div>
              </div>

              {/* 5:00 PM */}
              <div className="timeline-item">
                <div className="timeline-time">5:00 PM</div>
                <div className="timeline-content">
                  <div className="timeline-badge status-backup">SECURE</div>
                  <h3>Automated Backup & Compliance</h3>
                  <p>End of day: All documents automatically backed up, compliance reports generated, and tomorrow's critical documents queued for review. Mike leaves knowing nothing will be lost or forgotten.</p>
                  <div className="timeline-peace">
                    <strong>Peace of Mind:</strong> Complete document security and organization, 24/7.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="impact-section bg-light">
          <div className="container">
            <h2 className="section-title">Document Intelligence Results</h2>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Search Time Reduction</h3>
                <div className="metric-value">89%</div>
                <p>From 15 minutes to 90 seconds average</p>
              </div>
              <div className="metric-card">
                <h3>Admin Time Saved</h3>
                <div className="metric-value">47hrs/week</div>
                <p>More time for actual project management</p>
              </div>
              <div className="metric-card">
                <h3>Error Detection Rate</h3>
                <div className="metric-value">94%</div>
                <p>Contract conflicts caught before becoming problems</p>
              </div>
              <div className="metric-card">
                <h3>Document Processing Speed</h3>
                <div className="metric-value">127x faster</div>
                <p>Instant categorization and indexing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="technical-section">
          <div className="container">
            <h2 className="section-title">How Document Processor Works</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <div className="tech-icon">READ</div>
                <h3>Optical Intelligence</h3>
                <p>Advanced OCR and image recognition that reads blueprints, handwritten notes, and complex technical drawings with 99.2% accuracy.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">UNDERSTAND</div>
                <h3>Context Comprehension</h3>
                <p>Natural language processing trained on construction documents understands industry terminology, specifications, and relationships.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">CONNECT</div>
                <h3>Relationship Mapping</h3>
                <p>AI identifies how documents relate to each other: change orders affect which drawings, permits reference which plans, etc.</p>
              </div>
              <div className="tech-card">
                <div className="tech-icon">ALERT</div>
                <h3>Conflict Detection</h3>
                <p>Automatically flags discrepancies, missing information, and potential compliance issues across document sets.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Document Types Processed */}
        <section className="document-types bg-light">
          <div className="container">
            <h2 className="section-title">Document Types We Process</h2>
            <div className="document-grid">
              <div className="document-category">
                <h4>Plans & Drawings</h4>
                <ul>
                  <li>Architectural blueprints</li>
                  <li>Structural drawings</li>
                  <li>MEP plans</li>
                  <li>Site surveys</li>
                  <li>As-built drawings</li>
                </ul>
              </div>
              <div className="document-category">
                <h4>Legal & Permits</h4>
                <ul>
                  <li>Building permits</li>
                  <li>Contracts & amendments</li>
                  <li>Change orders</li>
                  <li>Inspection reports</li>
                  <li>Compliance certificates</li>
                </ul>
              </div>
              <div className="document-category">
                <h4>Specifications</h4>
                <ul>
                  <li>Material specifications</li>
                  <li>Equipment manuals</li>
                  <li>Installation guides</li>
                  <li>Safety protocols</li>
                  <li>Quality standards</li>
                </ul>
              </div>
              <div className="document-category">
                <h4>Communications</h4>
                <ul>
                  <li>Email chains</li>
                  <li>Meeting notes</li>
                  <li>Field reports</li>
                  <li>Supplier communications</li>
                  <li>Client correspondence</li>
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
                <h4>Cloud Storage Systems</h4>
                <p>Works with Dropbox, Google Drive, SharePoint, and construction-specific platforms</p>
              </div>
              <div className="integration-item">
                <h4>Email Integration</h4>
                <p>Automatically processes attachments from Gmail, Outlook, and project management systems</p>
              </div>
              <div className="integration-item">
                <h4>Project Management</h4>
                <p>Syncs with Procore, PlanGrid, Buildertrend, and other PM platforms</p>
              </div>
              <div className="integration-item">
                <h4>Mobile Access</h4>
                <p>Document search and upload capabilities on any mobile device</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Preview */}
        <section className="roi-preview">
          <div className="container">
            <div className="roi-card">
              <h3>Document Processor ROI Calculator</h3>
              <p>For a team managing 15 active projects:</p>
              <div className="roi-breakdown">
                <div className="roi-item">
                  <span className="roi-label">Admin time savings (47hrs/week):</span>
                  <span className="roi-value">$122K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Error prevention value:</span>
                  <span className="roi-value">$78K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Faster decision making:</span>
                  <span className="roi-value">$34K/year</span>
                </div>
                <div className="roi-item">
                  <span className="roi-label">Document Processor investment:</span>
                  <span className="roi-value">$36K/year</span>
                </div>
                <div className="roi-total">
                  <span className="roi-label"><strong>Net ROI:</strong></span>
                  <span className="roi-value"><strong>$198K (550% return)</strong></span>
                </div>
              </div>
              <a href="/apply" className="btn-primary">Calculate Your ROI</a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section bg-primary text-white">
          <div className="container text-center">
            <h2>Turn Document Chaos Into Intelligent Organization</h2>
            <p className="cta-subtitle">
              Join 150+ construction teams using Document Processor to eliminate paperwork bottlenecks
            </p>
            <div className="cta-buttons">
              <a href="/apply" className="btn-accent btn-large">Apply for Early Access</a>
              <a href="/case-studies" className="btn-secondary-outline">See Case Studies</a>
            </div>
            <p className="cta-note">Setup completed in 24 hours, zero document migration required</p>
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