// Developer Dopamine - Main Application JavaScript
console.log('Developer Dopamine app loaded');

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready, initializing Developer Dopamine features...');
  
  // Mobile navigation toggle
  const mobileToggle = document.querySelector('.nav-mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }
  
  // Dropdown menu functionality
  const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
  dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      const dropdown = this.parentNode;
      dropdown.classList.toggle('active');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
  
  // Smooth scrolling for anchor links
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
  
  // Form submission handling
  const forms = document.querySelectorAll('form[data-form-type]');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmission);
  });
  
  // Animation on scroll (optional)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.timeline-item, .metric-card, .tech-card').forEach(el => {
    observer.observe(el);
  });
});

// Form submission handler
async function handleFormSubmission(e) {
  e.preventDefault();
  
  const form = e.target;
  const formType = form.getAttribute('data-form-type');
  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  // Show loading state
  submitButton.textContent = 'Submitting...';
  submitButton.disabled = true;
  
  try {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    let endpoint;
    switch (formType) {
      case 'application':
        endpoint = '/api/apply';
        break;
      case 'contact':
        endpoint = '/api/contact';
        break;
      case 'lead-capture':
        endpoint = '/api/lead-capture';
        break;
      case 'roi-calculator':
        endpoint = '/api/roi-calculator';
        break;
      default:
        throw new Error('Unknown form type');
    }
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (result.success) {
      showSuccessMessage(result.message);
      form.reset();
    } else {
      throw new Error(result.message || 'Submission failed');
    }
  } catch (error) {
    showErrorMessage(error.message || 'An error occurred. Please try again.');
  } finally {
    // Restore button state
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
}

// Success message display
function showSuccessMessage(message) {
  const notification = createNotification(message, 'success');
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Error message display
function showErrorMessage(message) {
  const notification = createNotification(message, 'error');
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Create notification element
function createNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    animation: slideIn 0.3s ease-out;
  `;
  
  if (type === 'success') {
    notification.style.backgroundColor = '#10b981';
  } else {
    notification.style.backgroundColor = '#ef4444';
  }
  
  notification.textContent = message;
  
  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
    padding: 0;
  `;
  closeBtn.onclick = () => notification.remove();
  
  notification.appendChild(closeBtn);
  
  return notification;
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .animate-in {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);