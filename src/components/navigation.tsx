import { FC } from 'hono/jsx'

export const Navigation: FC = () => {
  return (
    <nav className="main-navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <a href="/" className="brand-link">
            <span className="brand-icon">⚡</span>
            <span className="brand-text">
              <span className="brand-main">DEVELOPER</span>
              <span className="brand-accent">DOPAMINE</span>
            </span>
          </a>
        </div>
        
        <div className="nav-menu">
          <a href="/" className="nav-link">Home</a>
          <a href="/how-it-works" className="nav-link">How It Works</a>
          <div className="nav-dropdown">
            <a href="/use-cases" className="nav-link dropdown-trigger">
              Use Cases
              <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="/use-cases/schedule-intelligence" className="dropdown-link">Schedule Intelligence</a>
              <a href="/use-cases/budget-guardian" className="dropdown-link">Budget Guardian</a>
              <a href="/use-cases/document-processor" className="dropdown-link">Document Processor</a>
              <a href="/use-cases/workforce-tracker" className="dropdown-link">Workforce Tracker</a>
              <a href="/use-cases/communication-hub" className="dropdown-link">Communication Hub</a>
              <a href="/use-cases/supply-chain-oracle" className="dropdown-link">Supply Chain Oracle</a>
            </div>
          </div>
          <a href="/portal" className="nav-link">Portal</a>
          <a href="/project-tracker" className="nav-link">Project Tracker</a>
          <a href="/roi-calculator" className="nav-link">ROI Calculator</a>
          <a href="/case-studies" className="nav-link">Case Studies</a>
        </div>
        
        <div className="nav-cta">
          <a href="/apply" className="nav-cta-button">Apply for Partnership</a>
        </div>
        
        <div className="nav-mobile-toggle">
          <span className="hamburger"></span>
        </div>
      </div>
    </nav>
  )
}