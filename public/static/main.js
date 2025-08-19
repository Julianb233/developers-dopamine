// Developer Dopamine Landing Page JavaScript
// Countdown timer and scarcity logic

class DDLandingPage {
  constructor() {
    this.config = window.DD_CONFIG || {
      countdownToISO: '',
      maxSlotsPerQuarter: 10
    };
    
    this.init();
  }
  
  init() {
    this.setupCountdown();
    this.setupSlots();
    this.setupForm();
    this.setupAnimations();
  }
  
  // Countdown Timer Logic
  setupCountdown() {
    const countdownDisplay = document.getElementById('countdown-display');
    if (!countdownDisplay) return;
    
    // Auto-calculate quarter end if not specified
    let targetDate;
    if (this.config.countdownToISO) {
      targetDate = new Date(this.config.countdownToISO);
    } else {
      targetDate = this.getQuarterEnd();
    }
    
    this.updateCountdown(targetDate);
    
    // Update every second
    this.countdownInterval = setInterval(() => {
      this.updateCountdown(targetDate);
    }, 1000);
  }
  
  getQuarterEnd() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    // Determine current quarter and next quarter end
    let quarterEndMonth;
    if (month < 3) quarterEndMonth = 2; // March (Q1)
    else if (month < 6) quarterEndMonth = 5; // June (Q2)
    else if (month < 9) quarterEndMonth = 8; // September (Q3)
    else quarterEndMonth = 11; // December (Q4)
    
    // If we're in the last month of quarter, move to next quarter
    if (month === quarterEndMonth) {
      quarterEndMonth = (quarterEndMonth + 3) % 12;
      if (quarterEndMonth < month) year++;
    }
    
    // Last day of quarter at 23:59:59 EST
    const quarterEnd = new Date(year, quarterEndMonth + 1, 0, 23, 59, 59);
    return quarterEnd;
  }
  
  updateCountdown(targetDate) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    
    const countdownDisplay = document.getElementById('countdown-display');
    if (!countdownDisplay) return;
    
    if (distance < 0) {
      countdownDisplay.innerHTML = '<span style="color: var(--dopamine-primary);">Quarter Ended</span>';
      clearInterval(this.countdownInterval);
      return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownDisplay.innerHTML = `
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <div style="font-size: 2rem; font-weight: 700;">${days}</div>
          <div style="font-size: 0.75rem; opacity: 0.8;">DAYS</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 2rem; font-weight: 700;">${hours}</div>
          <div style="font-size: 0.75rem; opacity: 0.8;">HOURS</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 2rem; font-weight: 700;">${minutes}</div>
          <div style="font-size: 0.75rem; opacity: 0.8;">MINS</div>
        </div>
        <div style="text-align: center;">
          <div style="font-size: 2rem; font-weight: 700;">${seconds}</div>
          <div style="font-size: 0.75rem; opacity: 0.8;">SECS</div>
        </div>
      </div>
    `;
  }
  
  // Slots Scarcity Logic
  setupSlots() {
    const slotsDisplay = document.getElementById('slots-display');
    if (!slotsDisplay) return;
    
    // Check URL parameters for override
    const urlParams = new URLSearchParams(window.location.search);
    const urlSlots = parseInt(urlParams.get('slots'));
    
    let slotsRemaining;
    if (urlSlots && urlSlots >= 0 && urlSlots <= this.config.maxSlotsPerQuarter) {
      slotsRemaining = urlSlots;
    } else {
      // Default dynamic calculation (simulate based on time in quarter)
      slotsRemaining = this.calculateSlotsRemaining();
    }
    
    this.updateSlotsDisplay(slotsRemaining);
  }
  
  calculateSlotsRemaining() {
    // Simulate slots filling up over time
    const now = new Date();
    const quarterStart = this.getQuarterStart();
    const quarterEnd = this.getQuarterEnd();
    
    const quarterProgress = (now - quarterStart) / (quarterEnd - quarterStart);
    const baseSlots = Math.max(1, this.config.maxSlotsPerQuarter - Math.floor(quarterProgress * (this.config.maxSlotsPerQuarter - 2)));
    
    // Add some randomization but keep it consistent for session
    const sessionSeed = this.getSessionSeed();
    const variation = Math.floor(sessionSeed * 3) - 1; // -1, 0, or 1
    
    return Math.max(1, Math.min(this.config.maxSlotsPerQuarter, baseSlots + variation));
  }
  
  getQuarterStart() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    
    let quarterStartMonth;
    if (month < 3) quarterStartMonth = 0; // January
    else if (month < 6) quarterStartMonth = 3; // April
    else if (month < 9) quarterStartMonth = 6; // July
    else quarterStartMonth = 9; // October
    
    return new Date(year, quarterStartMonth, 1);
  }
  
  getSessionSeed() {
    // Create a consistent seed for the session
    let seed = localStorage.getItem('dd-session-seed');
    if (!seed) {
      seed = Math.random();
      localStorage.setItem('dd-session-seed', seed);
    } else {
      seed = parseFloat(seed);
    }
    return seed;
  }
  
  updateSlotsDisplay(slots) {
    const slotsDisplay = document.getElementById('slots-display');
    if (!slotsDisplay) return;
    
    const urgencyColor = slots <= 3 ? 'var(--dopamine-primary)' : 
                        slots <= 5 ? 'var(--dopamine-warning)' : 
                        'var(--dopamine-success)';
    
    const urgencyIcon = slots <= 3 ? '🔥' : slots <= 5 ? '⚠️' : '✅';
    
    slotsDisplay.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; color: ${urgencyColor};">
        <span style="font-size: 1.5rem;">${urgencyIcon}</span>
        <span style="font-size: 3rem; font-weight: 700;">${slots}</span>
        <span style="font-size: 1rem; opacity: 0.8;">/ ${this.config.maxSlotsPerQuarter}</span>
      </div>
    `;
  }
  
  // Form Handling
  setupForm() {
    const form = document.querySelector('.apply-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => this.handleFormSubmit(e));
    
    // Set webhook URL from data attribute
    const webhookUrl = form.dataset.n8nWebhook;
    if (webhookUrl) {
      this.webhookUrl = webhookUrl;
    }
  }
  
  async handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = '🚀 Submitting...';
    submitButton.disabled = true;
    form.classList.add('loading');
    
    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Add additional tracking data
      data.timestamp = new Date().toISOString();
      data.user_agent = navigator.userAgent;
      data.page_url = window.location.href;
      data.referrer = document.referrer;
      
      let response;
      
      // Try n8n webhook first, fall back to local API
      if (this.webhookUrl && !this.webhookUrl.includes('your-n8n.domain')) {
        response = await fetch(this.webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      } else {
        // Use local API endpoint
        response = await fetch('/api/apply', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      }
      
      const result = await response.json();
      
      if (result.success) {
        this.showSuccess(result.message || 'Application submitted successfully! We\'ll be in touch within 24 hours.');
        form.reset();
        
        // Update slots remaining (simulate one less slot)
        const currentSlots = parseInt(document.getElementById('slots-display').textContent.trim().split('/')[0]);
        if (currentSlots > 1) {
          this.updateSlotsDisplay(currentSlots - 1);
        }
      } else {
        this.showError(result.message || 'There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      this.showError('There was an error submitting your application. Please try again or contact us directly.');
    } finally {
      // Reset form state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
      form.classList.remove('loading');
    }
  }
  
  showSuccess(message) {
    this.showMessage(message, 'success');
  }
  
  showError(message) {
    this.showMessage(message, 'error');
  }
  
  showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.style.cssText = `
      padding: 1rem;
      border-radius: 8px;
      margin-top: 1rem;
      font-weight: 600;
      text-align: center;
      ${type === 'success' ? 
        'background: var(--dopamine-success); color: white;' : 
        'background: var(--dopamine-primary); color: white;'
      }
    `;
    messageEl.textContent = message;
    
    // Insert after form
    const form = document.querySelector('.apply-form');
    form.parentNode.insertBefore(messageEl, form.nextSibling);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      messageEl.remove();
    }, 5000);
  }
  
  // Premium Animation Enhancements
  setupAnimations() {
    // Advanced Intersection Observer for staggered animations
    const createObserver = (className, delay = 0) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(className);
            }, delay * index);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
    };

    // Staggered fade-in for agent cards
    const agentObserver = createObserver('fade-in', 150);
    document.querySelectorAll('.agent-card').forEach(el => {
      agentObserver.observe(el);
    });

    // Slide-in animations for pain points
    const painObserver = createObserver('slide-in-left', 100);
    document.querySelectorAll('.pain-list li').forEach(el => {
      painObserver.observe(el);
    });

    // Bounce-in for value cards
    const valueObserver = createObserver('bounce-in', 200);
    document.querySelectorAll('.value-card').forEach(el => {
      valueObserver.observe(el);
    });

    // Special effects for guarantee box
    const guaranteeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          // Add special pulse effect
          setTimeout(() => {
            entry.target.style.animation = 'pulse 2s ease-in-out 3';
          }, 500);
        }
      });
    }, { threshold: 0.5 });

    const guaranteeBox = document.querySelector('.guarantee-box');
    if (guaranteeBox) {
      guaranteeObserver.observe(guaranteeBox);
    }

    // Enhanced CTA button interactions
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(btn => {
      // Hover effects
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px) scale(1.02)';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0) scale(1)';
      });

      // Click effect
      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'translateY(0) scale(0.98)';
      });

      btn.addEventListener('mouseup', () => {
        btn.style.transform = 'translateY(-2px) scale(1.02)';
      });
    });

    // Parallax effect for hero background
    this.setupParallax();

    // Smooth scrolling enhancement
    this.setupSmoothScrolling();

    // Dynamic stats counter
    this.setupStatsCounter();
  }

  setupParallax() {
    const hero = document.querySelector('.hero-section');
    const pattern = document.querySelector('.hero-background-pattern');
    
    if (!hero || !pattern) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      pattern.style.transform = `translateY(${rate}px)`;
    });
  }

  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  setupStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateNumber(entry.target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
  }

  animateNumber(element) {
    const text = element.textContent;
    const hasPlus = text.includes('+');
    const hasDollar = text.includes('$');
    const hasPercent = text.includes('%');
    
    // Extract number
    let number = parseFloat(text.replace(/[^0-9.]/g, ''));
    if (text.includes('M')) number *= 1000000;
    if (text.includes('K')) number *= 1000;
    
    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        current = number;
        clearInterval(timer);
      }
      
      let displayValue = Math.floor(current);
      let suffix = '';
      
      if (number >= 1000000) {
        displayValue = (current / 1000000).toFixed(1);
        suffix = 'M';
      } else if (number >= 1000) {
        displayValue = (current / 1000).toFixed(0);
        suffix = 'K';
      }
      
      let prefix = '';
      if (hasDollar) prefix = '$';
      
      let postfix = '';
      if (hasPlus) postfix += '+';
      if (hasPercent) postfix += '%';
      
      element.textContent = prefix + displayValue + suffix + postfix;
    }, duration / steps);
  }
  
  // Utility Methods
  destroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.ddLanding = new DDLandingPage();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden && window.ddLanding) {
    window.ddLanding.destroy();
  } else if (!document.hidden && !window.ddLanding) {
    window.ddLanding = new DDLandingPage();
  }
});

// Handle configuration updates
window.updateDDConfig = (newConfig) => {
  window.DD_CONFIG = { ...window.DD_CONFIG, ...newConfig };
  if (window.ddLanding) {
    window.ddLanding.destroy();
    window.ddLanding = new DDLandingPage();
  }
};

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DDLandingPage;
}