import { Navigation } from '../components/navigation'

export const ProjectTrackerPage = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Real Estate Project Tracker - Developer Dopamine</title>
        <link href="/static/style.css" rel="stylesheet" />
        <meta name="description" content="Professional real estate development and flipping calculator with industry-standard formulas, pro forma analysis, and customer variations." />
      </head>
      <body>
        <Navigation />

        {/* Header */}
        <section className="tracker-header bg-primary text-white">
          <div className="container">
            <div className="tracker-hero">
              <h1 style={{fontSize: 'var(--fluid-text-6xl)', lineHeight: '1.1', marginBottom: 'var(--fluid-md)'}}>Real Estate Project Tracker</h1>
              <p style={{fontSize: 'var(--fluid-text-lg)', marginBottom: 'var(--fluid-xl)'}}>Industry-standard calculations for development and flipping projects</p>
              <div className="tracker-features">
                <div className="feature">✓ Pro Forma Analysis</div>
                <div className="feature">✓ IRR & Cap Rate Calculations</div>
                <div className="feature">✓ Flip Analysis (70% Rule)</div>
                <div className="feature">✓ Custom Customer Variations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Type Selection */}
        <section className="project-type-section">
          <div className="container">
            <h2 style={{fontSize: 'var(--fluid-text-4xl)', textAlign: 'center', marginBottom: 'var(--fluid-2xl)'}}>Select Project Type</h2>
            <div className="project-types">
              <button id="development-btn" className="project-type-btn active" onclick="showProjectType('development')">
                <div className="type-icon">🏗️</div>
                <h3>Development Project</h3>
                <p>New construction, multifamily, commercial development</p>
              </button>
              <button id="flipping-btn" className="project-type-btn" onclick="showProjectType('flipping')">
                <div className="type-icon">🔄</div>
                <h3>House Flipping</h3>
                <p>Fix & flip, rehab projects, quick turnaround</p>
              </button>
              <button id="rental-btn" className="project-type-btn" onclick="showProjectType('rental')">
                <div className="type-icon">🏠</div>
                <h3>Rental Property</h3>
                <p>Buy & hold, cash flow analysis, long-term investment</p>
              </button>
            </div>
          </div>
        </section>

        {/* Development Project Calculator */}
        <section id="development-calculator" className="calculator-section">
          <div className="container">
            <h2>Development Project Analysis</h2>
            <div className="calculator-grid">
              
              {/* Project Inputs */}
              <div className="input-section">
                <h3>Project Information</h3>
                <div className="input-group">
                  <label>Project Name</label>
                  <input type="text" id="dev-project-name" placeholder="Austin Multifamily Development" />
                </div>
                <div className="input-group">
                  <label>Project Type</label>
                  <select id="dev-project-type">
                    <option value="multifamily">Multifamily</option>
                    <option value="commercial">Commercial</option>
                    <option value="single-family">Single Family</option>
                    <option value="mixed-use">Mixed Use</option>
                  </select>
                </div>
                <div className="input-group">
                  <label>Total Units/SF</label>
                  <input type="number" id="dev-units" placeholder="150" />
                </div>
                <div className="input-group">
                  <label>Project Timeline (Months)</label>
                  <input type="number" id="dev-timeline" placeholder="24" />
                </div>
              </div>

              {/* Land & Acquisition Costs */}
              <div className="input-section">
                <h3>Land & Acquisition</h3>
                <div className="input-group">
                  <label>Land Purchase Price</label>
                  <input type="number" id="dev-land-cost" placeholder="2500000" />
                </div>
                <div className="input-group">
                  <label>Closing Costs (% of land)</label>
                  <input type="number" id="dev-closing-costs" placeholder="3" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Due Diligence Costs</label>
                  <input type="number" id="dev-due-diligence" placeholder="50000" />
                </div>
                <div className="input-group">
                  <label>Site Preparation</label>
                  <input type="number" id="dev-site-prep" placeholder="200000" />
                </div>
              </div>

              {/* Construction Costs */}
              <div className="input-section">
                <h3>Construction Costs</h3>
                <div className="input-group">
                  <label>Hard Costs ($/Unit or $/SF)</label>
                  <input type="number" id="dev-hard-costs" placeholder="120000" />
                </div>
                <div className="input-group">
                  <label>Soft Costs (% of Hard Costs)</label>
                  <input type="number" id="dev-soft-costs" placeholder="25" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Contingency (%)</label>
                  <input type="number" id="dev-contingency" placeholder="10" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Developer Fee (%)</label>
                  <input type="number" id="dev-fee" placeholder="5" step="0.1" />
                </div>
              </div>

              {/* Financing */}
              <div className="input-section">
                <h3>Financing</h3>
                <div className="input-group">
                  <label>Loan-to-Cost Ratio (%)</label>
                  <input type="number" id="dev-ltc" placeholder="75" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Interest Rate (%)</label>
                  <input type="number" id="dev-interest-rate" placeholder="7.5" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Loan Fees (%)</label>
                  <input type="number" id="dev-loan-fees" placeholder="2" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Interest Reserve (Months)</label>
                  <input type="number" id="dev-interest-reserve" placeholder="6" />
                </div>
              </div>

              {/* Revenue Projections */}
              <div className="input-section">
                <h3>Revenue Projections</h3>
                <div className="input-group">
                  <label>Average Sale Price/Rent per Unit</label>
                  <input type="number" id="dev-unit-price" placeholder="450000" />
                </div>
                <div className="input-group">
                  <label>Absorption Rate (Units/Month)</label>
                  <input type="number" id="dev-absorption" placeholder="8" />
                </div>
                <div className="input-group">
                  <label>Exit Cap Rate (%) - If Rental</label>
                  <input type="number" id="dev-exit-cap" placeholder="5.5" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Sales Commission (%)</label>
                  <input type="number" id="dev-sales-commission" placeholder="6" step="0.1" />
                </div>
              </div>

              {/* Calculations Display */}
              <div className="results-section">
                <h3>Financial Analysis</h3>
                <div id="dev-results" className="results-grid">
                  <div className="result-item">
                    <label>Total Development Cost</label>
                    <span id="total-dev-cost">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Equity Required</label>
                    <span id="equity-required">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Gross Revenue</label>
                    <span id="gross-revenue">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Net Profit</label>
                    <span id="net-profit">$0</span>
                  </div>
                  <div className="result-item highlight">
                    <label>Profit Margin</label>
                    <span id="profit-margin">0%</span>
                  </div>
                  <div className="result-item highlight">
                    <label>IRR (Internal Rate of Return)</label>
                    <span id="dev-irr">0%</span>
                  </div>
                  <div className="result-item highlight">
                    <label>ROE (Return on Equity)</label>
                    <span id="dev-roe">0%</span>
                  </div>
                  <div className="result-item">
                    <label>Development Spread</label>
                    <span id="dev-spread">0%</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="calculate-btn" onclick="calculateDevelopment()">Calculate Development Returns</button>
          </div>
        </section>

        {/* House Flipping Calculator */}
        <section id="flipping-calculator" className="calculator-section" style="display: none;">
          <div className="container">
            <h2>House Flipping Analysis</h2>
            <div className="calculator-grid">
              
              {/* Property Information */}
              <div className="input-section">
                <h3>Property Information</h3>
                <div className="input-group">
                  <label>Property Address</label>
                  <input type="text" id="flip-address" placeholder="123 Main St, Austin TX" />
                </div>
                <div className="input-group">
                  <label>Square Footage</label>
                  <input type="number" id="flip-sqft" placeholder="2200" />
                </div>
                <div className="input-group">
                  <label>Year Built</label>
                  <input type="number" id="flip-year-built" placeholder="1995" />
                </div>
                <div className="input-group">
                  <label>Property Type</label>
                  <select id="flip-property-type">
                    <option value="single-family">Single Family</option>
                    <option value="condo">Condo</option>
                    <option value="townhome">Townhome</option>
                    <option value="duplex">Duplex</option>
                  </select>
                </div>
              </div>

              {/* Purchase & ARV */}
              <div className="input-section">
                <h3>Purchase & ARV</h3>
                <div className="input-group">
                  <label>Purchase Price</label>
                  <input type="number" id="flip-purchase-price" placeholder="250000" />
                </div>
                <div className="input-group">
                  <label>After Repair Value (ARV)</label>
                  <input type="number" id="flip-arv" placeholder="350000" />
                </div>
                <div className="input-group">
                  <label>ARV Confidence Level</label>
                  <select id="flip-arv-confidence">
                    <option value="high">High (Recent Comps)</option>
                    <option value="medium">Medium (6-month Comps)</option>
                    <option value="low">Low (Estimated)</option>
                  </select>
                </div>
              </div>

              {/* Repair Costs */}
              <div className="input-section">
                <h3>Repair & Renovation Costs</h3>
                <div className="input-group">
                  <label>Kitchen Renovation</label>
                  <input type="number" id="flip-kitchen" placeholder="25000" />
                </div>
                <div className="input-group">
                  <label>Bathroom(s) Renovation</label>
                  <input type="number" id="flip-bathrooms" placeholder="15000" />
                </div>
                <div className="input-group">
                  <label>Flooring</label>
                  <input type="number" id="flip-flooring" placeholder="8000" />
                </div>
                <div className="input-group">
                  <label>Paint & Cosmetics</label>
                  <input type="number" id="flip-paint" placeholder="5000" />
                </div>
                <div className="input-group">
                  <label>HVAC System</label>
                  <input type="number" id="flip-hvac" placeholder="6000" />
                </div>
                <div className="input-group">
                  <label>Electrical Updates</label>
                  <input type="number" id="flip-electrical" placeholder="4000" />
                </div>
                <div className="input-group">
                  <label>Plumbing Updates</label>
                  <input type="number" id="flip-plumbing" placeholder="3000" />
                </div>
                <div className="input-group">
                  <label>Other Repairs</label>
                  <input type="number" id="flip-other-repairs" placeholder="8000" />
                </div>
                <div className="input-group">
                  <label>Contingency (% of repair costs)</label>
                  <input type="number" id="flip-contingency" placeholder="15" step="0.1" />
                </div>
              </div>

              {/* Transaction Costs */}
              <div className="input-section">
                <h3>Transaction & Holding Costs</h3>
                <div className="input-group">
                  <label>Purchase Closing Costs</label>
                  <input type="number" id="flip-purchase-closing" placeholder="3000" />
                </div>
                <div className="input-group">
                  <label>Selling Costs (%)</label>
                  <input type="number" id="flip-selling-costs" placeholder="10" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Holding Period (Months)</label>
                  <input type="number" id="flip-holding-period" placeholder="6" />
                </div>
                <div className="input-group">
                  <label>Monthly Holding Costs</label>
                  <input type="number" id="flip-monthly-holding" placeholder="2000" />
                </div>
                <div className="input-group">
                  <label>Financing Interest Rate (%)</label>
                  <input type="number" id="flip-interest-rate" placeholder="12" step="0.1" />
                </div>
              </div>

              {/* Results */}
              <div className="results-section">
                <h3>Flip Analysis Results</h3>
                <div id="flip-results" className="results-grid">
                  <div className="result-item">
                    <label>Total Repair Costs</label>
                    <span id="total-repair-costs">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Total Investment</label>
                    <span id="total-investment">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Total Holding Costs</label>
                    <span id="total-holding-costs">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Gross Profit</label>
                    <span id="gross-profit">$0</span>
                  </div>
                  <div className="result-item highlight">
                    <label>Net Profit</label>
                    <span id="flip-net-profit">$0</span>
                  </div>
                  <div className="result-item highlight">
                    <label>ROI</label>
                    <span id="flip-roi">0%</span>
                  </div>
                  <div className="result-item highlight">
                    <label>Annualized ROI</label>
                    <span id="flip-annualized-roi">0%</span>
                  </div>
                  <div className="result-item">
                    <label>70% Rule Check</label>
                    <span id="seventy-rule-check">❌</span>
                  </div>
                  <div className="result-item">
                    <label>Maximum Allowable Offer (MAO)</label>
                    <span id="flip-mao">$0</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="calculate-btn" onclick="calculateFlipping()">Calculate Flip Returns</button>
          </div>
        </section>

        {/* Rental Property Calculator */}
        <section id="rental-calculator" className="calculator-section" style="display: none;">
          <div className="container">
            <h2>Rental Property Analysis</h2>
            <div className="calculator-grid">
              
              {/* Property Details */}
              <div className="input-section">
                <h3>Property Information</h3>
                <div className="input-group">
                  <label>Property Address</label>
                  <input type="text" id="rental-address" placeholder="456 Oak Ave, Dallas TX" />
                </div>
                <div className="input-group">
                  <label>Purchase Price</label>
                  <input type="number" id="rental-purchase-price" placeholder="350000" />
                </div>
                <div className="input-group">
                  <label>Down Payment (%)</label>
                  <input type="number" id="rental-down-payment" placeholder="25" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Interest Rate (%)</label>
                  <input type="number" id="rental-interest-rate" placeholder="7.25" step="0.01" />
                </div>
                <div className="input-group">
                  <label>Loan Term (Years)</label>
                  <input type="number" id="rental-loan-term" placeholder="30" />
                </div>
              </div>

              {/* Income */}
              <div className="input-section">
                <h3>Rental Income</h3>
                <div className="input-group">
                  <label>Monthly Rent</label>
                  <input type="number" id="rental-monthly-rent" placeholder="2800" />
                </div>
                <div className="input-group">
                  <label>Other Monthly Income</label>
                  <input type="number" id="rental-other-income" placeholder="100" />
                </div>
                <div className="input-group">
                  <label>Vacancy Rate (%)</label>
                  <input type="number" id="rental-vacancy-rate" placeholder="5" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Annual Rent Increases (%)</label>
                  <input type="number" id="rental-rent-increases" placeholder="3" step="0.1" />
                </div>
              </div>

              {/* Expenses */}
              <div className="input-section">
                <h3>Operating Expenses</h3>
                <div className="input-group">
                  <label>Property Taxes (Annual)</label>
                  <input type="number" id="rental-property-taxes" placeholder="4200" />
                </div>
                <div className="input-group">
                  <label>Insurance (Annual)</label>
                  <input type="number" id="rental-insurance" placeholder="1200" />
                </div>
                <div className="input-group">
                  <label>Property Management (%)</label>
                  <input type="number" id="rental-property-mgmt" placeholder="8" step="0.1" />
                </div>
                <div className="input-group">
                  <label>Maintenance & Repairs (Annual)</label>
                  <input type="number" id="rental-maintenance" placeholder="2000" />
                </div>
                <div className="input-group">
                  <label>Capital Expenditures (Annual)</label>
                  <input type="number" id="rental-capex" placeholder="1500" />
                </div>
                <div className="input-group">
                  <label>Other Expenses (Annual)</label>
                  <input type="number" id="rental-other-expenses" placeholder="800" />
                </div>
              </div>

              {/* Results */}
              <div className="results-section">
                <h3>Rental Analysis Results</h3>
                <div id="rental-results" className="results-grid">
                  <div className="result-item">
                    <label>Monthly Payment (P&I)</label>
                    <span id="rental-monthly-payment">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Gross Annual Income</label>
                    <span id="rental-gross-income">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Net Operating Income</label>
                    <span id="rental-noi">$0</span>
                  </div>
                  <div className="result-item">
                    <label>Monthly Cash Flow</label>
                    <span id="rental-cash-flow">$0</span>
                  </div>
                  <div className="result-item highlight">
                    <label>Cap Rate</label>
                    <span id="rental-cap-rate">0%</span>
                  </div>
                  <div className="result-item highlight">
                    <label>Cash-on-Cash Return</label>
                    <span id="rental-coc-return">0%</span>
                  </div>
                  <div className="result-item">
                    <label>1% Rule Check</label>
                    <span id="one-percent-rule">❌</span>
                  </div>
                  <div className="result-item">
                    <label>DSCR (Debt Service Coverage)</label>
                    <span id="rental-dscr">0.00</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="calculate-btn" onclick="calculateRental()">Calculate Rental Returns</button>
          </div>
        </section>

        {/* Customer Variations */}
        <section className="customer-variations bg-light">
          <div className="container">
            <h2>Save & Load Project Variations</h2>
            <div className="variations-controls">
              <div className="save-section">
                <input type="text" id="variation-name" placeholder="Enter variation name (e.g., Conservative Scenario)" />
                <button onclick="saveVariation()" className="save-btn">Save Current Project</button>
              </div>
              <div className="load-section">
                <h3>Saved Variations</h3>
                <div id="saved-variations" className="variations-list">
                  {/* Saved variations will appear here */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Formulas Reference */}
        <section className="formulas-reference bg-dark text-white">
          <div className="container">
            <h2>Industry-Standard Formulas Reference</h2>
            <div className="formulas-grid">
              <div className="formula-section">
                <h3>Development Formulas</h3>
                <div className="formula-item">
                  <strong>IRR (Internal Rate of Return):</strong>
                  <p>NPV = 0 = CF₀ + CF₁/(1+IRR)¹ + CF₂/(1+IRR)² + ... + CFₙ/(1+IRR)ⁿ</p>
                </div>
                <div className="formula-item">
                  <strong>Development Spread:</strong>
                  <p>Stabilized NOI / Stabilized Value - Construction Loan Rate</p>
                </div>
                <div className="formula-item">
                  <strong>Return on Equity (ROE):</strong>
                  <p>(Net Profit / Total Equity Invested) × 100</p>
                </div>
              </div>
              
              <div className="formula-section">
                <h3>Flipping Formulas</h3>
                <div className="formula-item">
                  <strong>70% Rule:</strong>
                  <p>Max Offer = (ARV × 0.70) - Repair Costs</p>
                </div>
                <div className="formula-item">
                  <strong>ROI:</strong>
                  <p>(Net Profit / Total Investment) × 100</p>
                </div>
                <div className="formula-item">
                  <strong>Annualized ROI:</strong>
                  <p>ROI × (12 / Holding Period in Months)</p>
                </div>
              </div>
              
              <div className="formula-section">
                <h3>Rental Property Formulas</h3>
                <div className="formula-item">
                  <strong>Cap Rate:</strong>
                  <p>Net Operating Income / Property Value × 100</p>
                </div>
                <div className="formula-item">
                  <strong>Cash-on-Cash Return:</strong>
                  <p>(Annual Cash Flow / Cash Invested) × 100</p>
                </div>
                <div className="formula-item">
                  <strong>DSCR:</strong>
                  <p>Net Operating Income / Annual Debt Service</p>
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
                <p>Professional Real Estate Analysis Tools</p>
              </div>
              <div className="footer-links">
                <div className="link-group">
                  <h4>Tools</h4>
                  <a href="/project-tracker">Project Tracker</a>
                  <a href="/portal">Backend Portal</a>
                  <a href="/roi-calculator">ROI Calculator</a>
                </div>
                <div className="link-group">
                  <h4>Support</h4>
                  <a href="mailto:julian@developerdopamine.com">Contact Julian</a>
                  <a href="/how-it-works">How It Works</a>
                  <a href="/apply">Apply Now</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Developer Dopamine. Professional real estate analysis with industry-standard calculations.</p>
            </div>
          </div>
        </footer>

        <script src="/static/project-tracker.js"></script>
      </body>
    </html>
  )
}