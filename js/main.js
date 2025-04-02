// Stahl Insights Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
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
    
    // Debug log to confirm initialization
    console.log("All initializations complete");
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
    console.log("Initializing article filter tabs");
    
    // Fixed: Added direct DOM check to verify we're on the articles page
    if (!document.querySelector('.filter-categories')) {
        console.log("Not on articles page, skipping filter initialization");
        return;
    }
    
    const filterCategories = document.querySelectorAll('.filter-category');
    if (filterCategories.length === 0) {
        console.log("No filter categories found");
        return;
    }
    
    console.log(`Found ${filterCategories.length} filter categories`);
    
    // Set the first tab (All) as active by default
    if (filterCategories[0] && !filterCategories[0].classList.contains('active')) {
        filterCategories[0].classList.add('active');
    }
    
    const articleItems = document.querySelectorAll('.article-item');
    console.log(`Found ${articleItems.length} article items`);
    
    // Create a mapping of article items to their categories for faster lookup
    const articleCategoryMap = new Map();
    articleItems.forEach(article => {
        const articleTag = article.querySelector('.article-item-tag');
        if (articleTag) {
            const category = articleTag.textContent.trim().toUpperCase();
            console.log(`Article tagged as: ${category}`);
            articleCategoryMap.set(article, category);
        } else {
            console.log("Article has no tag element");
        }
    });
    
    // Function to filter articles based on selected category
    function filterArticles(selectedCategory) {
        console.log(`Filtering articles by category: ${selectedCategory}`);
        selectedCategory = selectedCategory.toUpperCase();
        
        articleItems.forEach(article => {
            const articleCategory = articleCategoryMap.get(article);
            if (!articleCategory) {
                console.log("Article has no category, always showing");
                article.style.display = 'flex';
                return;
            }
            
            console.log(`Comparing selected: ${selectedCategory} with article: ${articleCategory}`);
            
            if (selectedCategory === 'ALL' || selectedCategory === articleCategory) {
                console.log("Match found, showing article");
                article.style.display = 'flex';
                // Add animation for appearing items
                article.style.opacity = '0';
                article.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    article.style.opacity = '1';
                    article.style.transform = 'translateY(0)';
                }, 50);
            } else {
                console.log("No match, hiding article");
                article.style.display = 'none';
            }
        });
    }
    
    // Add click event listeners to each category tab
    filterCategories.forEach(category => {
        category.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(`Clicked on category: ${this.textContent.trim()}`);
            
            // Update active class
            filterCategories.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            const selectedCategory = this.textContent.trim();
            filterArticles(selectedCategory);
        });
    });
    
    // Initialize with the active category
    const activeCategory = document.querySelector('.filter-category.active');
    if (activeCategory) {
        console.log(`Initializing with active category: ${activeCategory.textContent.trim()}`);
        filterArticles(activeCategory.textContent.trim());
    } else if (filterCategories[0]) {
        console.log(`No active category found, using first category: ${filterCategories[0].textContent.trim()}`);
        filterArticles(filterCategories[0].textContent.trim());
    }
}

// Dashboard Tabs Function
function initDashboardTabs() {
    // Fixed: Changed selector from 'dashboard-tab' to 'tab-item' to match HTML
    const dashboardTabs = document.querySelectorAll('.tab-item');
    if (dashboardTabs.length === 0) return;
    
    const dashboardContainers = document.querySelectorAll('.dashboard-container');
    
    // Set first tab as active by default if none is active
    let activeTabFound = false;
    dashboardTabs.forEach(tab => {
        if (tab.classList.contains('active')) {
            activeTabFound = true;
        }
    });
    
    if (!activeTabFound && dashboardTabs.length > 0) {
        dashboardTabs[0].classList.add('active');
        if (dashboardContainers.length > 0) {
            dashboardContainers[0].style.display = 'block';
            dashboardContainers[0].style.opacity = '1';
        }
    }
    
    // Hide all containers except the active one
    let activeIndex = 0;
    dashboardTabs.forEach((tab, index) => {
        if (tab.classList.contains('active')) {
            activeIndex = index;
        }
    });
    
    dashboardContainers.forEach((container, index) => {
        if (index !== activeIndex) {
            container.style.display = 'none';
            container.style.opacity = '0';
        }
    });
    
    // Add click event listeners to tabs
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
        const type = id.split('-')[0];
        
        // Generate different placeholder based on type
        switch(type) {
            case 'chart':
                generateChartPlaceholder(placeholder);
                break;
            case 'heatmap':
                generateHeatmapPlaceholder(placeholder);
                break;
            case 'network':
                generateNetworkPlaceholder(placeholder);
                break;
            default:
                generateDefaultPlaceholder(placeholder);
        }
    });
}

// Generate chart placeholder
function generateChartPlaceholder(container) {
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
        const trendFactor = Math.random() > 0.5 ? 1 : -1;
        currentY = Math.max(10, Math.min(canvas.height - 10, currentY + randomFactor + trendFactor));
        
        points.push({ x, y: currentY });
    }
    
    // Draw line
    ctx.strokeStyle = 'rgb(0, 200, 255)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    
    ctx.stroke();
    
    // Add subtle glow effect
    ctx.shadowColor = 'rgb(0, 200, 255)';
    ctx.shadowBlur = 5;
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Add area fill
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 200, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 200, 255, 0.0)');
    
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

// Generate heatmap placeholder
function generateHeatmapPlaceholder(container) {
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Generate heatmap cells
    const cellSize = 20;
    const cols = Math.ceil(canvas.width / cellSize);
    const rows = Math.ceil(canvas.height / cellSize);
    
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const x = i * cellSize;
            const y = j * cellSize;
            
            // Generate random heat value
            const heat = Math.random();
            
            // Determine color based on heat value
            let color;
            if (heat < 0.3) {
                color = `rgba(0, 100, 255, ${heat + 0.1})`;
            } else if (heat < 0.6) {
                color = `rgba(0, 200, 255, ${heat + 0.1})`;
            } else if (heat < 0.8) {
                color = `rgba(255, 200, 0, ${heat + 0.1})`;
            } else {
                color = `rgba(255, 50, 50, ${heat + 0.1})`;
            }
            
            ctx.fillStyle = color;
            ctx.fillRect(x, y, cellSize, cellSize);
        }
    }
    
    container.appendChild(canvas);
}

// Generate network placeholder
function generateNetworkPlaceholder(container) {
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Generate nodes
    const nodes = [];
    const numNodes = 15;
    
    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 5 + 3,
            color: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 200 + 55}, 255, 0.8)`
        });
    }
    
    // Draw connections
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.2)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            // Only connect some nodes
            if (Math.random() > 0.7) continue;
            
            const nodeA = nodes[i];
            const nodeB = nodes[j];
            
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
        }
    }
    
    // Draw nodes
    nodes.forEach(node => {
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
    });
    
    container.appendChild(canvas);
}

// Generate default placeholder
function generateDefaultPlaceholder(container) {
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // Vertical lines
    for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    
    // Horizontal lines
    for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    // Draw text
    ctx.fillStyle = 'rgba(0, 200, 255, 0.5)';
    ctx.font = '14px var(--font-data)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Visualization Placeholder', canvas.width / 2, canvas.height / 2);
    
    container.appendChild(canvas);
}
