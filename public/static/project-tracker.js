// Real Estate Project Tracker - Calculation Engine
// Industry-standard formulas for development, flipping, and rental analysis

// Global variables for current project type and calculations
let currentProjectType = 'development';
let savedVariations = JSON.parse(localStorage.getItem('realEstateVariations') || '[]');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    showProjectType('development');
    loadSavedVariations();
    
    // Add event listeners for real-time calculations
    addCalculationListeners();
});

// Project type switching
function showProjectType(type) {
    currentProjectType = type;
    
    // Hide all calculators
    document.getElementById('development-calculator').style.display = 'none';
    document.getElementById('flipping-calculator').style.display = 'none';
    document.getElementById('rental-calculator').style.display = 'none';
    
    // Show selected calculator
    document.getElementById(type + '-calculator').style.display = 'block';
    
    // Update button states
    document.querySelectorAll('.project-type-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(type + '-btn').classList.add('active');
    
    // Clear results
    clearResults(type);
}

// Add event listeners for real-time calculations
function addCalculationListeners() {
    // Development calculator listeners
    const devInputs = [
        'dev-land-cost', 'dev-closing-costs', 'dev-due-diligence', 'dev-site-prep',
        'dev-hard-costs', 'dev-soft-costs', 'dev-contingency', 'dev-fee',
        'dev-ltc', 'dev-interest-rate', 'dev-loan-fees', 'dev-interest-reserve',
        'dev-unit-price', 'dev-absorption', 'dev-exit-cap', 'dev-sales-commission', 'dev-units', 'dev-timeline'
    ];
    
    devInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => calculateDevelopment());
        }
    });
    
    // Flipping calculator listeners
    const flipInputs = [
        'flip-purchase-price', 'flip-arv', 'flip-kitchen', 'flip-bathrooms', 'flip-flooring',
        'flip-paint', 'flip-hvac', 'flip-electrical', 'flip-plumbing', 'flip-other-repairs',
        'flip-contingency', 'flip-purchase-closing', 'flip-selling-costs', 'flip-holding-period',
        'flip-monthly-holding', 'flip-interest-rate'
    ];
    
    flipInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => calculateFlipping());
        }
    });
    
    // Rental calculator listeners
    const rentalInputs = [
        'rental-purchase-price', 'rental-down-payment', 'rental-interest-rate', 'rental-loan-term',
        'rental-monthly-rent', 'rental-other-income', 'rental-vacancy-rate', 'rental-rent-increases',
        'rental-property-taxes', 'rental-insurance', 'rental-property-mgmt', 'rental-maintenance',
        'rental-capex', 'rental-other-expenses'
    ];
    
    rentalInputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => calculateRental());
        }
    });
}

// DEVELOPMENT PROJECT CALCULATIONS
function calculateDevelopment() {
    try {
        // Get inputs
        const landCost = parseFloat(document.getElementById('dev-land-cost').value) || 0;
        const closingCostsPercent = parseFloat(document.getElementById('dev-closing-costs').value) || 0;
        const dueDiligence = parseFloat(document.getElementById('dev-due-diligence').value) || 0;
        const sitePrep = parseFloat(document.getElementById('dev-site-prep').value) || 0;
        const hardCosts = parseFloat(document.getElementById('dev-hard-costs').value) || 0;
        const softCostsPercent = parseFloat(document.getElementById('dev-soft-costs').value) || 0;
        const contingencyPercent = parseFloat(document.getElementById('dev-contingency').value) || 0;
        const devFeePercent = parseFloat(document.getElementById('dev-fee').value) || 0;
        const ltcPercent = parseFloat(document.getElementById('dev-ltc').value) || 0;
        const interestRate = parseFloat(document.getElementById('dev-interest-rate').value) || 0;
        const loanFeesPercent = parseFloat(document.getElementById('dev-loan-fees').value) || 0;
        const interestReserveMonths = parseFloat(document.getElementById('dev-interest-reserve').value) || 0;
        const unitPrice = parseFloat(document.getElementById('dev-unit-price').value) || 0;
        const absorption = parseFloat(document.getElementById('dev-absorption').value) || 0;
        const exitCap = parseFloat(document.getElementById('dev-exit-cap').value) || 0;
        const salesCommissionPercent = parseFloat(document.getElementById('dev-sales-commission').value) || 0;
        const units = parseFloat(document.getElementById('dev-units').value) || 0;
        const timeline = parseFloat(document.getElementById('dev-timeline').value) || 0;
        
        // Calculate land and acquisition costs
        const closingCosts = landCost * (closingCostsPercent / 100);
        const totalLandCosts = landCost + closingCosts + dueDiligence + sitePrep;
        
        // Calculate construction costs
        const totalHardCosts = hardCosts * units;
        const softCosts = totalHardCosts * (softCostsPercent / 100);
        const constructionBase = totalHardCosts + softCosts;
        const contingency = constructionBase * (contingencyPercent / 100);
        const devFee = constructionBase * (devFeePercent / 100);
        const totalConstructionCosts = constructionBase + contingency + devFee;
        
        // Calculate total development cost
        const totalDevCost = totalLandCosts + totalConstructionCosts;
        
        // Calculate financing
        const loanAmount = totalDevCost * (ltcPercent / 100);
        const loanFees = loanAmount * (loanFeesPercent / 100);
        const monthlyInterest = (loanAmount * (interestRate / 100)) / 12;
        const totalInterestCost = monthlyInterest * timeline;
        const interestReserve = monthlyInterest * interestReserveMonths;
        const totalFinancingCosts = loanFees + totalInterestCost + interestReserve;
        
        // Total project cost including financing
        const totalProjectCost = totalDevCost + totalFinancingCosts;
        const equityRequired = totalProjectCost - loanAmount;
        
        // Calculate revenue
        const grossRevenue = unitPrice * units;
        const salesCommission = grossRevenue * (salesCommissionPercent / 100);
        const netRevenue = grossRevenue - salesCommission;
        
        // Calculate returns
        const netProfit = netRevenue - totalProjectCost;
        const profitMargin = ((netProfit / netRevenue) * 100);
        const roe = ((netProfit / equityRequired) * 100);
        
        // Calculate IRR (simplified approximation)
        const annualizedProfit = netProfit / (timeline / 12);
        const irr = (annualizedProfit / equityRequired) * 100;
        
        // Development spread (simplified)
        const devSpread = profitMargin - (interestRate);
        
        // Update display
        document.getElementById('total-dev-cost').textContent = formatCurrency(totalProjectCost);
        document.getElementById('equity-required').textContent = formatCurrency(equityRequired);
        document.getElementById('gross-revenue').textContent = formatCurrency(grossRevenue);
        document.getElementById('net-profit').textContent = formatCurrency(netProfit);
        document.getElementById('profit-margin').textContent = formatPercent(profitMargin);
        document.getElementById('dev-irr').textContent = formatPercent(irr);
        document.getElementById('dev-roe').textContent = formatPercent(roe);
        document.getElementById('dev-spread').textContent = formatPercent(devSpread);
        
        // Color code results
        colorCodeResult('net-profit', netProfit);
        colorCodeResult('profit-margin', profitMargin, 20);
        colorCodeResult('dev-irr', irr, 15);
        colorCodeResult('dev-roe', roe, 20);
        
    } catch (error) {
        console.error('Development calculation error:', error);
    }
}

// HOUSE FLIPPING CALCULATIONS
function calculateFlipping() {
    try {
        // Get inputs
        const purchasePrice = parseFloat(document.getElementById('flip-purchase-price').value) || 0;
        const arv = parseFloat(document.getElementById('flip-arv').value) || 0;
        const kitchen = parseFloat(document.getElementById('flip-kitchen').value) || 0;
        const bathrooms = parseFloat(document.getElementById('flip-bathrooms').value) || 0;
        const flooring = parseFloat(document.getElementById('flip-flooring').value) || 0;
        const paint = parseFloat(document.getElementById('flip-paint').value) || 0;
        const hvac = parseFloat(document.getElementById('flip-hvac').value) || 0;
        const electrical = parseFloat(document.getElementById('flip-electrical').value) || 0;
        const plumbing = parseFloat(document.getElementById('flip-plumbing').value) || 0;
        const otherRepairs = parseFloat(document.getElementById('flip-other-repairs').value) || 0;
        const contingencyPercent = parseFloat(document.getElementById('flip-contingency').value) || 0;
        const purchaseClosing = parseFloat(document.getElementById('flip-purchase-closing').value) || 0;
        const sellingCostsPercent = parseFloat(document.getElementById('flip-selling-costs').value) || 0;
        const holdingPeriod = parseFloat(document.getElementById('flip-holding-period').value) || 0;
        const monthlyHolding = parseFloat(document.getElementById('flip-monthly-holding').value) || 0;
        const interestRate = parseFloat(document.getElementById('flip-interest-rate').value) || 0;
        
        // Calculate repair costs
        const baseRepairCosts = kitchen + bathrooms + flooring + paint + hvac + electrical + plumbing + otherRepairs;
        const contingency = baseRepairCosts * (contingencyPercent / 100);
        const totalRepairCosts = baseRepairCosts + contingency;
        
        // Calculate holding costs
        const totalHoldingCosts = monthlyHolding * holdingPeriod;
        
        // Calculate financing costs (simplified - interest on purchase price)
        const monthlyInterestCost = (purchasePrice * (interestRate / 100)) / 12;
        const totalInterestCost = monthlyInterestCost * holdingPeriod;
        
        // Calculate selling costs
        const sellingCosts = arv * (sellingCostsPercent / 100);
        
        // Calculate total investment
        const totalInvestment = purchasePrice + totalRepairCosts + purchaseClosing + totalHoldingCosts + totalInterestCost;
        
        // Calculate profits
        const grossProfit = arv - purchasePrice;
        const netProfit = arv - totalInvestment - sellingCosts;
        const roi = ((netProfit / totalInvestment) * 100);
        const annualizedRoi = roi * (12 / holdingPeriod);
        
        // 70% Rule calculation
        const maxAllowableOffer = (arv * 0.7) - totalRepairCosts;
        const seventyRulePass = purchasePrice <= maxAllowableOffer;
        
        // Update display
        document.getElementById('total-repair-costs').textContent = formatCurrency(totalRepairCosts);
        document.getElementById('total-investment').textContent = formatCurrency(totalInvestment);
        document.getElementById('total-holding-costs').textContent = formatCurrency(totalHoldingCosts);
        document.getElementById('gross-profit').textContent = formatCurrency(grossProfit);
        document.getElementById('flip-net-profit').textContent = formatCurrency(netProfit);
        document.getElementById('flip-roi').textContent = formatPercent(roi);
        document.getElementById('flip-annualized-roi').textContent = formatPercent(annualizedRoi);
        document.getElementById('seventy-rule-check').textContent = seventyRulePass ? '✅ Pass' : '❌ Fail';
        document.getElementById('flip-mao').textContent = formatCurrency(maxAllowableOffer);
        
        // Color code results
        colorCodeResult('flip-net-profit', netProfit);
        colorCodeResult('flip-roi', roi, 20);
        colorCodeResult('flip-annualized-roi', annualizedRoi, 25);
        document.getElementById('seventy-rule-check').style.color = seventyRulePass ? '#22c55e' : '#ef4444';
        
    } catch (error) {
        console.error('Flipping calculation error:', error);
    }
}

// RENTAL PROPERTY CALCULATIONS
function calculateRental() {
    try {
        // Get inputs
        const purchasePrice = parseFloat(document.getElementById('rental-purchase-price').value) || 0;
        const downPaymentPercent = parseFloat(document.getElementById('rental-down-payment').value) || 0;
        const interestRate = parseFloat(document.getElementById('rental-interest-rate').value) || 0;
        const loanTerm = parseFloat(document.getElementById('rental-loan-term').value) || 0;
        const monthlyRent = parseFloat(document.getElementById('rental-monthly-rent').value) || 0;
        const otherIncome = parseFloat(document.getElementById('rental-other-income').value) || 0;
        const vacancyRate = parseFloat(document.getElementById('rental-vacancy-rate').value) || 0;
        const rentIncreases = parseFloat(document.getElementById('rental-rent-increases').value) || 0;
        const propertyTaxes = parseFloat(document.getElementById('rental-property-taxes').value) || 0;
        const insurance = parseFloat(document.getElementById('rental-insurance').value) || 0;
        const propertyMgmtPercent = parseFloat(document.getElementById('rental-property-mgmt').value) || 0;
        const maintenance = parseFloat(document.getElementById('rental-maintenance').value) || 0;
        const capex = parseFloat(document.getElementById('rental-capex').value) || 0;
        const otherExpenses = parseFloat(document.getElementById('rental-other-expenses').value) || 0;
        
        // Calculate loan details
        const downPayment = purchasePrice * (downPaymentPercent / 100);
        const loanAmount = purchasePrice - downPayment;
        const monthlyInterestRate = (interestRate / 100) / 12;
        const numPayments = loanTerm * 12;
        
        // Monthly mortgage payment (P&I only)
        const monthlyPayment = loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments)) / 
                              (Math.pow(1 + monthlyInterestRate, numPayments) - 1);
        
        // Calculate income
        const grossMonthlyIncome = monthlyRent + otherIncome;
        const grossAnnualIncome = grossMonthlyIncome * 12;
        const vacancyLoss = grossAnnualIncome * (vacancyRate / 100);
        const effectiveGrossIncome = grossAnnualIncome - vacancyLoss;
        
        // Calculate expenses
        const propertyMgmt = effectiveGrossIncome * (propertyMgmtPercent / 100);
        const totalAnnualExpenses = propertyTaxes + insurance + propertyMgmt + maintenance + capex + otherExpenses;
        
        // Calculate NOI and cash flow
        const noi = effectiveGrossIncome - totalAnnualExpenses;
        const annualDebtService = monthlyPayment * 12;
        const annualCashFlow = noi - annualDebtService;
        const monthlyCashFlow = annualCashFlow / 12;
        
        // Calculate key metrics
        const capRate = (noi / purchasePrice) * 100;
        const cashOnCashReturn = (annualCashFlow / downPayment) * 100;
        const dscr = noi / annualDebtService;
        
        // 1% Rule check
        const onePercentRule = monthlyRent >= (purchasePrice * 0.01);
        
        // Update display
        document.getElementById('rental-monthly-payment').textContent = formatCurrency(monthlyPayment);
        document.getElementById('rental-gross-income').textContent = formatCurrency(grossAnnualIncome);
        document.getElementById('rental-noi').textContent = formatCurrency(noi);
        document.getElementById('rental-cash-flow').textContent = formatCurrency(monthlyCashFlow);
        document.getElementById('rental-cap-rate').textContent = formatPercent(capRate);
        document.getElementById('rental-coc-return').textContent = formatPercent(cashOnCashReturn);
        document.getElementById('one-percent-rule').textContent = onePercentRule ? '✅ Pass' : '❌ Fail';
        document.getElementById('rental-dscr').textContent = dscr.toFixed(2);
        
        // Color code results
        colorCodeResult('rental-cash-flow', monthlyCashFlow);
        colorCodeResult('rental-cap-rate', capRate, 6);
        colorCodeResult('rental-coc-return', cashOnCashReturn, 8);
        document.getElementById('one-percent-rule').style.color = onePercentRule ? '#22c55e' : '#ef4444';
        colorCodeResult('rental-dscr', dscr, 1.2, true);
        
    } catch (error) {
        console.error('Rental calculation error:', error);
    }
}

// UTILITY FUNCTIONS

// Clear results for a specific calculator type
function clearResults(type) {
    const resultElements = document.querySelectorAll(`#${type}-results .result-item span`);
    resultElements.forEach(el => {
        if (el.id) {
            if (el.id.includes('percent') || el.id.includes('rate') || el.id.includes('roi') || el.id.includes('irr')) {
                el.textContent = '0%';
            } else if (el.id.includes('check') || el.id.includes('rule')) {
                el.textContent = '❌';
            } else if (el.id.includes('dscr')) {
                el.textContent = '0.00';
            } else {
                el.textContent = '$0';
            }
            el.style.color = '';
        }
    });
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Format percentage
function formatPercent(percent) {
    return percent.toFixed(2) + '%';
}

// Color code results based on performance
function colorCodeResult(elementId, value, threshold = 0, isRatio = false) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let color = '#ef4444'; // Red for poor
    
    if (isRatio) {
        // For ratios like DSCR where higher is better
        if (value >= threshold) color = '#22c55e'; // Green
        else if (value >= threshold * 0.8) color = '#f59e0b'; // Yellow
    } else {
        // For percentages and amounts
        if (value > threshold) color = '#22c55e'; // Green
        else if (value > threshold * 0.5) color = '#f59e0b'; // Yellow
    }
    
    element.style.color = color;
}

// CUSTOMER VARIATIONS FUNCTIONALITY

// Save current project as variation
function saveVariation() {
    const variationName = document.getElementById('variation-name').value.trim();
    if (!variationName) {
        alert('Please enter a name for this variation.');
        return;
    }
    
    // Collect current form data based on active project type
    const variationData = {
        name: variationName,
        type: currentProjectType,
        timestamp: new Date().toISOString(),
        data: {}
    };
    
    // Collect data based on current project type
    if (currentProjectType === 'development') {
        const devInputs = [
            'dev-project-name', 'dev-project-type', 'dev-units', 'dev-timeline',
            'dev-land-cost', 'dev-closing-costs', 'dev-due-diligence', 'dev-site-prep',
            'dev-hard-costs', 'dev-soft-costs', 'dev-contingency', 'dev-fee',
            'dev-ltc', 'dev-interest-rate', 'dev-loan-fees', 'dev-interest-reserve',
            'dev-unit-price', 'dev-absorption', 'dev-exit-cap', 'dev-sales-commission'
        ];
        
        devInputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                variationData.data[id] = element.value;
            }
        });
    } else if (currentProjectType === 'flipping') {
        const flipInputs = [
            'flip-address', 'flip-sqft', 'flip-year-built', 'flip-property-type',
            'flip-purchase-price', 'flip-arv', 'flip-arv-confidence',
            'flip-kitchen', 'flip-bathrooms', 'flip-flooring', 'flip-paint',
            'flip-hvac', 'flip-electrical', 'flip-plumbing', 'flip-other-repairs', 'flip-contingency',
            'flip-purchase-closing', 'flip-selling-costs', 'flip-holding-period',
            'flip-monthly-holding', 'flip-interest-rate'
        ];
        
        flipInputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                variationData.data[id] = element.value;
            }
        });
    } else if (currentProjectType === 'rental') {
        const rentalInputs = [
            'rental-address', 'rental-purchase-price', 'rental-down-payment',
            'rental-interest-rate', 'rental-loan-term', 'rental-monthly-rent',
            'rental-other-income', 'rental-vacancy-rate', 'rental-rent-increases',
            'rental-property-taxes', 'rental-insurance', 'rental-property-mgmt',
            'rental-maintenance', 'rental-capex', 'rental-other-expenses'
        ];
        
        rentalInputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                variationData.data[id] = element.value;
            }
        });
    }
    
    // Save to localStorage
    savedVariations.push(variationData);
    localStorage.setItem('realEstateVariations', JSON.stringify(savedVariations));
    
    // Clear input and reload variations list
    document.getElementById('variation-name').value = '';
    loadSavedVariations();
    
    alert(`Variation "${variationName}" saved successfully!`);
}

// Load variation into form
function loadVariation(index) {
    const variation = savedVariations[index];
    if (!variation) return;
    
    // Switch to the correct project type
    showProjectType(variation.type);
    
    // Load the data
    Object.keys(variation.data).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.value = variation.data[id];
        }
    });
    
    // Trigger calculation
    if (variation.type === 'development') {
        calculateDevelopment();
    } else if (variation.type === 'flipping') {
        calculateFlipping();
    } else if (variation.type === 'rental') {
        calculateRental();
    }
    
    alert(`Variation "${variation.name}" loaded successfully!`);
}

// Delete variation
function deleteVariation(index) {
    const variation = savedVariations[index];
    if (confirm(`Are you sure you want to delete "${variation.name}"?`)) {
        savedVariations.splice(index, 1);
        localStorage.setItem('realEstateVariations', JSON.stringify(savedVariations));
        loadSavedVariations();
    }
}

// Load and display saved variations
function loadSavedVariations() {
    const container = document.getElementById('saved-variations');
    if (!container) return;
    
    if (savedVariations.length === 0) {
        container.innerHTML = '<p class="no-variations">No saved variations yet. Save your first project above.</p>';
        return;
    }
    
    container.innerHTML = savedVariations.map((variation, index) => `
        <div class="variation-item">
            <div class="variation-info">
                <h4>${variation.name}</h4>
                <p>Type: ${variation.type.charAt(0).toUpperCase() + variation.type.slice(1)}</p>
                <p>Saved: ${new Date(variation.timestamp).toLocaleDateString()}</p>
            </div>
            <div class="variation-actions">
                <button onclick="loadVariation(${index})" class="load-btn">Load</button>
                <button onclick="deleteVariation(${index})" class="delete-btn">Delete</button>
            </div>
        </div>
    `).join('');
}

// Export variations (bonus feature)
function exportVariations() {
    const dataStr = JSON.stringify(savedVariations, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'real-estate-variations.json';
    link.click();
}

// Import variations (bonus feature)
function importVariations(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedVariations = JSON.parse(e.target.result);
            savedVariations = [...savedVariations, ...importedVariations];
            localStorage.setItem('realEstateVariations', JSON.stringify(savedVariations));
            loadSavedVariations();
            alert(`Imported ${importedVariations.length} variations successfully!`);
        } catch (error) {
            alert('Error importing variations. Please check the file format.');
        }
    };
    reader.readAsText(file);
}