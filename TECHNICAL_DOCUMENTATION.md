# Stahl Insights - Technical Documentation

## Architecture Overview

Stahl Insights is a static website built with HTML5, CSS3, and vanilla JavaScript. The architecture follows a modular approach with separate files for different pages and functionality.

## File Structure

```
stahl-insights/
├── css/
│   └── style.css          # Main stylesheet with CSS variables for theming
├── js/
│   └── main.js            # Core JavaScript functionality
├── images/                # Image assets directory
├── index.html             # Homepage
├── articles.html          # Articles listing page
├── dashboards.html        # Interactive dashboards page
├── premium.html           # Premium subscription tiers page
├── crowd-sourced.html     # Crowd-sourced voting feature
├── trading-tool.html      # Virtual trading simulator
├── robots.txt             # Search engine directives
├── README.md              # Project overview
├── RELEASE_NOTES.md       # Version history and changes
└── TECHNICAL_DOCUMENTATION.md  # This file
```

## CSS Architecture

### Theme Variables

The site uses CSS variables for consistent theming:

```css
:root {
    /* Color Palette */
    --bg-primary: #0A0E17;
    --bg-secondary: #111927;
    --text-primary: #FFFFFF;
    --text-secondary: #8B9CB3;
    --accent-1: #00C8FF;    /* Neon Cyan */
    --accent-2: #FF3A5E;    /* Electric Pink */
    --accent-3: #36F9C5;    /* Mint Green */
    --chart-green: #36F9C5;
    --chart-red: #FF3A5E;
    
    /* Typography */
    --font-heading: 'Rajdhani', sans-serif;
    --font-body: 'Inter', sans-serif;
    --font-data: 'JetBrains Mono', monospace;
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 4rem;
    --spacing-xl: 8rem;
    
    /* Animation */
    --transition-speed: 0.3s;
}
```

### Responsive Design

The site uses a mobile-first approach with media queries for larger screens:

```css
/* Base mobile styles */
.container {
    width: 100%;
    padding: 0 1rem;
    margin: 0 auto;
}

/* Tablet styles */
@media (min-width: 768px) {
    .container {
        max-width: 720px;
    }
}

/* Desktop styles */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
}

/* Large desktop styles */
@media (min-width: 1280px) {
    .container {
        max-width: 1200px;
    }
}
```

## JavaScript Components

### Breaking News Ticker

The ticker uses CSS animations with JavaScript initialization:

```javascript
// Initialize ticker animation
function initTicker() {
    const tickerItems = document.querySelectorAll('.ticker-item');
    const tickerWidth = tickerItems.length * 100;
    document.querySelector('.ticker').style.width = `${tickerWidth}%`;
}
```

### Dashboard Tab Switching

Tab switching functionality with smooth transitions:

```javascript
// Dashboard tab switching
function initDashboardTabs() {
    const tabs = document.querySelectorAll('.dashboard-tab');
    const dashboards = document.querySelectorAll('.dashboard-container');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and dashboards
            tabs.forEach(t => t.classList.remove('active'));
            dashboards.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding dashboard
            this.classList.add('active');
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
}
```

### Virtual Trading Tool

The trading tool uses a combination of state management and DOM manipulation:

```javascript
// Trading tool state
let balance = 1000;
let portfolio = [];
let tradeHistory = [];

// Buy stock function
function buyStock(ticker, name, price, shares) {
    const total = price * shares;
    
    // Check if enough balance
    if (total > balance) {
        alert('Not enough balance to complete this purchase.');
        return;
    }
    
    // Update balance
    balance -= total;
    updateBalance();
    
    // Add to portfolio or update existing position
    const existingStock = portfolio.find(item => item.ticker === ticker);
    if (existingStock) {
        // Update existing position
        const totalShares = existingStock.shares + shares;
        const totalCost = existingStock.totalCost + total;
        existingStock.shares = totalShares;
        existingStock.avgPrice = totalCost / totalShares;
        existingStock.currentPrice = price;
        existingStock.value = totalShares * price;
    } else {
        // Add new position
        portfolio.push({
            ticker: ticker,
            name: name,
            shares: shares,
            avgPrice: price,
            currentPrice: price,
            value: shares * price
        });
    }
    
    // Add to trade history
    tradeHistory.push({
        date: new Date(),
        type: 'buy',
        ticker: ticker,
        shares: shares,
        price: price,
        total: total,
        profit: null
    });
    
    // Update UI
    updatePortfolio();
    updateHistory();
}
```

### Crowd-Sourced Voting

The voting system uses event listeners and DOM updates:

```javascript
// Handle vote buttons
const voteButtons = document.querySelectorAll('.vote-btn');
voteButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('voted')) {
            // Update button state
            this.classList.add('voted');
            this.querySelector('span').textContent = 'Voted';
            
            // Update vote count
            const countElement = this.closest('.voting-card').querySelector('.voting-count span');
            const currentCount = parseInt(countElement.textContent);
            countElement.textContent = (currentCount + 1) + ' votes';
            
            // Add animation effect
            this.closest('.voting-card').style.transform = 'scale(1.03)';
            setTimeout(() => {
                this.closest('.voting-card').style.transform = 'translateY(-5px)';
            }, 300);
        }
    });
});
```

## Canvas Visualizations

The site uses HTML5 Canvas for creating dynamic charts and visualizations:

```javascript
// Function to create stock chart
function createStockChart(containerId, color, isPositive) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Generate random data points
    const points = [];
    const numPoints = 20;
    const startY = canvas.height * 0.5;
    let currentY = startY;
    
    for (let i = 0; i < numPoints; i++) {
        const x = (i / (numPoints - 1)) * canvas.width;
        
        // Generate next point with trend bias
        const randomFactor = Math.random() * 10 - 5;
        const trendFactor = isPositive ? 1 : -1;
        currentY = Math.max(10, Math.min(canvas.height - 10, currentY + randomFactor + trendFactor));
        
        points.push({ x, y: currentY });
    }
    
    // Draw line
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    
    ctx.stroke();
    
    // Add subtle glow effect
    ctx.shadowColor = color;
    ctx.shadowBlur = 5;
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Add area fill
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, color.replace(')', ', 0.2)').replace('rgb', 'rgba'));
    gradient.addColorStop(1, color.replace(')', ', 0.0)').replace('rgb', 'rgba'));
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(points[0].x, canvas.height);
    ctx.lineTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    
    ctx.lineTo(points[points.length - 1].x, canvas.height);
    ctx.closePath();
    ctx.fill();
    
    container.appendChild(canvas);
}
```

## Animation System

The site uses CSS transitions and animations for smooth effects:

```css
/* Fade-in animation */
.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Slide-up animation */
.slide-up {
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 0.8s ease forwards;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Pulse animation */
.pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 200, 255, 0.7);
    }
    70% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(0, 200, 255, 0);
    }
    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 200, 255, 0);
    }
}
```

## Privacy Implementation

The site implements privacy protections to prevent search engine indexing:

1. **robots.txt** file with directives to disallow all crawlers
2. **Meta tags** in HTML head with noindex, nofollow attributes

## Browser Compatibility

The site is tested and compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Android Chrome)

## Performance Optimization

- Minimal external dependencies
- Optimized image assets
- Efficient JavaScript with event delegation
- CSS animations hardware-accelerated where possible

## Deployment

The site is deployed as a static website with no server-side dependencies, making it easy to host on any static hosting service.

## Backup and Recovery

All source code is version-controlled in the GitHub repository. To restore the project:

1. Clone the repository
2. No build process required - files can be directly deployed
3. All assets and code are included in the repository

## Future Technical Enhancements

1. **Personalized Trading Interface**
   - User preference storage using localStorage
   - Custom dashboard layouts
   - Personalized alert system

2. **Hotcopper Advertising Widget**
   - Embeddable iframe implementation
   - Cross-origin communication
   - Dynamic content injection

3. **Mobile Enhancements**
   - Touch-optimized interactions
   - Progressive Web App capabilities
   - Offline functionality
