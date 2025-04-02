// Stahl Insights Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize breaking news ticker
    initBreakingNewsTicker();
    
    // Initialize animated elements
    initAnimations();
    
    // Initialize login modal
    initLoginModal();
    
    // Initialize data refresh simulation
    initDataRefresh();
    
    // Initialize article filter tabs
    initArticleFilterTabs();
    
    // Initialize dashboard tabs
    initDashboardTabs();
    
    // Initialize index page tabs
    initIndexPageTabs();
});

// Breaking News Ticker Functions
function initBreakingNewsTicker() {
    const ticker = document.querySelector('.ticker');
    if (!ticker) return;
    
    // Clone ticker items to ensure continuous scrolling
    const tickerItems = ticker.innerHTML;
    ticker.innerHTML = tickerItems + tickerItems;
    
    // Adjust ticker speed based on content length
    const tickerWidth = ticker.scrollWidth / 2;
    const duration = tickerWidth / 50; // pixels per second
    
    ticker.style.animation = `ticker ${duration}s linear infinite`;
    
    // Pause ticker on hover
    ticker.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    ticker.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
}

// Animation Functions
function initAnimations() {
    // Detect elements with animation classes and trigger them when in viewport
    const animatedElements = document.querySelectorAll('.fade-in, .slide-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
}

// Login Modal Functions
function initLoginModal() {
    const loginBtn = document.querySelector('.login-btn');
    if (!loginBtn) return;
    
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'login-modal';
    modal.style.display = 'none';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Access Elite Intelligence</h2>
            <form id="login-form">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="submit-btn">Login</button>
            </form>
            <div class="modal-footer">
                <p>Don't have an account? <a href="premium.html">Join the Elite</a></p>
                <p><a href="#">Forgot password?</a></p>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .modal.show {
            opacity: 1;
        }
        
        .modal-content {
            background-color: var(--bg-secondary);
            border-radius: 8px;
            width: 90%;
            max-width: 500px;
            padding: 2rem;
            position: relative;
            border: 1px solid rgba(0, 200, 255, 0.2);
            box-shadow: 0 0 30px rgba(0, 200, 255, 0.2);
            transform: translateY(-20px);
            transition: transform 0.3s ease;
        }
        
        .modal.show .modal-content {
            transform: translateY(0);
        }
        
        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1.5rem;
            font-size: 1.5rem;
            color: var(--text-secondary);
            cursor: pointer;
            transition: color 0.2s ease;
        }
        
        .close-modal:hover {
            color: var(--accent-1);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-family: var(--font-heading);
            font-size: 0.9rem;
            color: var(--text-secondary);
        }
        
        .form-group input {
            width: 100%;
            padding: 0.8rem 1rem;
            border-radius: 4px;
            background-color: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(0, 200, 255, 0.2);
            color: var(--text-primary);
            font-family: var(--font-body);
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        
        .form-group input:focus {
            outline: none;
            border-color: var(--accent-1);
            box-shadow: 0 0 10px rgba(0, 200, 255, 0.2);
        }
        
        .submit-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(90deg, var(--accent-1), var(--accent-3));
            color: var(--bg-primary);
            font-family: var(--font-heading);
            font-weight: 600;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 200, 255, 0.3);
        }
        
        .modal-footer {
            margin-top: 1.5rem;
            text-align: center;
            font-size: 0.9rem;
        }
        
        .modal-footer p {
            margin-bottom: 0.5rem;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Modal functionality
    loginBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    });
    
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
    
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simulate login process
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show error message (since this is a fictional site)
            alert('This is a fictional website. No actual login functionality is implemented.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Data Refresh Simulation
function initDataRefresh() {
    // Simulate real-time data updates
    setInterval(() => {
        // Update ticker items with random price changes
        const tickerItems = document.querySelectorAll('.ticker-item');
        if (tickerItems.length > 0) {
            const randomIndex = Math.floor(Math.random() * tickerItems.length);
            const tickerItem = tickerItems[randomIndex];
            
            // Add a subtle flash effect
            tickerItem.style.backgroundColor = 'rgba(0, 200, 255, 0.1)';
            setTimeout(() => {
                tickerItem.style.backgroundColor = 'transparent';
            }, 500);
        }
        
        // Simulate dashboard data updates if on dashboard page
        const dashboardElements = document.querySelectorAll('.dashboard-data');
        dashboardElements.forEach(element => {
            // Generate random percentage change
            const change = (Math.random() * 2 - 1).toFixed(2);
            const isPositive = parseFloat(change) >= 0;
            
            // Update element with new value and appropriate color
            element.textContent = isPositive ? `+${change}%` : `${change}%`;
            element.style.color = isPositive ? 'var(--chart-green)' : 'var(--chart-red)';
            
            // Add pulse effect
            element.classList.add('pulse-once');
            setTimeout(() => {
                element.classList.remove('pulse-once');
            }, 1000);
        });
    }, 5000);
}

// Article Filter Tabs Function
function initArticleFilterTabs() {
    const filterCategories = document.querySelectorAll('.filter-category');
    if (filterCategories.length === 0) return;
    
    const articleItems = document.querySelectorAll('.article-item');
    
    filterCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Update active class
            filterCategories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.textContent.trim();
            
            // Filter articles based on selected category
            articleItems.forEach(article => {
                const articleTag = article.querySelector('.article-item-tag');
                if (!articleTag) return;
                
                const articleCategory = articleTag.textContent.trim();
                
                if (selectedCategory === 'All' || selectedCategory === articleCategory) {
                    article.style.display = 'flex';
                    // Add animation for appearing items
                    article.style.opacity = '0';
                    article.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        article.style.opacity = '1';
                        article.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });
}

// Dashboard Tabs Function
function initDashboardTabs() {
    const dashboardTabs = document.querySelectorAll('.dashboard-tab');
    if (dashboardTabs.length === 0) return;
    
    const dashboardContainers = document.querySelectorAll('.dashboard-container');
    
    dashboardTabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // Update active class on tabs
            dashboardTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding dashboard container
            dashboardContainers.forEach(container => {
                container.style.display = 'none';
                container.style.opacity = '0';
            });
            
            if (dashboardContainers[index]) {
                dashboardContainers[index].style.display = 'block';
                // Add fade-in animation
                setTimeout(() => {
                    dashboardContainers[index].style.opacity = '1';
                }, 50);
            }
        });
    });
}

// Index Page Tabs Function
function initIndexPageTabs() {
    // Market Intelligence section tabs
    const marketTabs = document.querySelectorAll('.market-tab');
    if (marketTabs.length === 0) return;
    
    const marketContents = document.querySelectorAll('.market-content');
    
    marketTabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // Update active class on tabs
            marketTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            marketContents.forEach(content => {
                content.style.display = 'none';
                content.style.opacity = '0';
            });
            
            if (marketContents[index]) {
                marketContents[index].style.display = 'block';
                // Add fade-in animation
                setTimeout(() => {
                    marketContents[index].style.opacity = '1';
                }, 50);
            }
        });
    });
}

// Placeholder Image Generation
function generatePlaceholderImages() {
    const placeholders = document.querySelectorAll('[id$="-placeholder"]');
    
    placeholders.forEach(placeholder => {
        const id = placeholder.id;
        const width = placeholder.width || 100;
        const height = placeholder.height || 100;
        
        // Generate placeholder based on id
        if (id === 'logo-placeholder') {
            placeholder.src = generateLogoPlaceholder();
        } else if (id.includes('article')) {
            placeholder.src = generateArticlePlaceholder(width, height);
        } else if (id.includes('chart')) {
            placeholder.src = generateChartPlaceholder(width, height);
        } else {
            placeholder.src = generateDefaultPlaceholder(width, height);
        }
    });
}

function generateLogoPlaceholder() {
    // Create canvas for logo
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 50;
    canvas.height = 50;
    
    // Draw logo
    ctx.fillStyle = '#00C8FF';
    ctx.fillRect(0, 0, 50, 50);
    
    // Add some design elements
    ctx.strokeStyle = '#0A0E17';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(10, 25);
    ctx.lineTo(40, 25);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(25, 10);
    ctx.lineTo(25, 40);
    ctx.stroke();
    
    return canvas.toDataURL();
}

function generateArticlePlaceholder(width, height) {
    // Create canvas for article image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    
    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#0A0E17');
    gradient.addColorStop(1, '#111927');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Add some design elements
    ctx.strokeStyle = '#00C8FF';
    ctx.lineWidth = 2;
    
    // Draw random chart-like elements
    ctx.beginPath();
    ctx.moveTo(0, height * 0.8);
    
    for (let x = 0; x < width; x += width / 10) {
        const y = height * 0.8 - Math.random() * height * 0.6;
        ctx.lineTo(x, y);
    }
    
    ctx.lineTo(width, height * 0.8 - Math.random() * height * 0.6);
    ctx.stroke();
    
    return canvas.toDataURL();
}

function generateChartPlaceholder(width, height) {
    // Create canvas for chart
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    
    // Draw background
    ctx.fillStyle = '#0A0E17';
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let y = 0; y < height; y += height / 5) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    // Vertical grid lines
    for (let x = 0; x < width; x += width / 10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    
    // Draw chart line
    ctx.strokeStyle = '#00C8FF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, height * 0.5);
    
    // Generate random points for the chart
    const points = [];
    for (let i = 0; i <= 10; i++) {
        points.push({
            x: width * (i / 10),
            y: height * (0.2 + Math.random() * 0.6)
        });
    }
    
    // Draw smooth curve through points
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
        const xc = (points[i].x + points[i - 1].x) / 2;
        const yc = (points[i].y + points[i - 1].y) / 2;
        ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
    }
    
    ctx.stroke();
    
    // Add gradient under the line
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(0, 200, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(0, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
        const xc = (points[i].x + points[i - 1].x) / 2;
        const yc = (points[i].y + points[i - 1].y) / 2;
        ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
    }
    
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();
    
    return canvas.toDataURL();
}

function generateDefaultPlaceholder(width, height) {
    // Create canvas for default placeholder
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    
    // Draw background
    ctx.fillStyle = '#0A0E17';
    ctx.fillRect(0, 0, width, height);
    
    // Add some design elements
    ctx.strokeStyle = '#00C8FF';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, width - 20, height - 20);
    
    // Draw text
    ctx.font = '20px Arial';
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Stahl Insights', width / 2, height / 2);
    
    return canvas.toDataURL();
}
