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

// Placeholder Image Generation
function generatePlaceholderImages() {
    const placeholders = document.querySelectorAll('[id$="-placeholder"]');
    
    placeholders.forEach(placeholder => {
        const id = placeholder.id;
        const width = placeholder.width || 100;
        const height = placeholder.height || 100;
        
        // Determine color based on placeholder type
        let color = '#111927';
        if (id.includes('logo')) {
            color = '#00C8FF';
        } else if (id.includes('dashboard')) {
            color = '#0A0E17';
        } else if (id.includes('user')) {
            // Assign different colors to user avatars
            const userIndex = id.match(/\d+/);
            if (userIndex) {
                const colors = ['#00C8FF', '#36F9C5', '#FF3A5E'];
                color = colors[(parseInt(userIndex[0]) - 1) % colors.length];
            }
        }
        
        createPlaceholder(id, width, height, color);
    });
}

function createPlaceholder(id, width, height, color) {
    const element = document.getElementById(id);
    if (!element) return;
    
    const canvas = document.createElement('canvas');
    canvas.width = width === '100%' ? element.offsetWidth : width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some visual elements to make it look like a chart/data for certain placeholders
    if (id.includes('dashboard')) {
        drawFakeDashboard(ctx, canvas.width, canvas.height);
    } else if (id.includes('article')) {
        drawFakeArticleImage(ctx, canvas.width, canvas.height);
    } else if (id.includes('logo')) {
        drawFakeLogo(ctx, canvas.width, canvas.height);
    }
    
    element.src = canvas.toDataURL();
}

function drawFakeDashboard(ctx, width, height) {
    // Draw some fake charts and data elements
    ctx.strokeStyle = '#00C8FF';
    ctx.lineWidth = 2;
    
    // Draw a line chart
    ctx.beginPath();
    ctx.moveTo(0, height * 0.7);
    for (let x = 0; x < width; x += width/20) {
        ctx.lineTo(x, height * 0.7 - Math.random() * height * 0.5);
    }
    ctx.stroke();
    
    // Draw a second line chart
    ctx.strokeStyle = '#36F9C5';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.8);
    for (let x = 0; x < width; x += width/20) {
        ctx.lineTo(x, height * 0.8 - Math.random() * height * 0.3);
    }
    ctx.stroke();
    
    // Draw some grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    for (let y = 0; y < height; y += height/10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    for (let x = 0; x < width; x += width/10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    
    // Add some fake data points
    ctx.fillStyle = '#FF3A5E';
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
    }
}

function drawFakeArticleImage(ctx, width, height) {
    // Draw a fake stock chart
    ctx.strokeStyle = '#36F9C5';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(0, height * 0.8);
    for (let x = 0; x < width; x += width/15) {
        ctx.lineTo(x, height * 0.8 - Math.random() * height * 0.6);
    }
    ctx.stroke();
    
    // Add some text-like elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    for (let i = 0; i < 3; i++) {
        ctx.fillRect(width * 0.1, height * 0.2 + i * 15, width * 0.8, 8);
    }
}

function drawFakeLogo(ctx, width, height) {
    // Draw a stylized "S" for Stahl
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    
    // Draw the S shape
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.2);
    ctx.bezierCurveTo(
        width * 0.7, height * 0.1,
        width * 0.1, height * 0.5,
        width * 0.5, height * 0.5
    );
    ctx.bezierCurveTo(
        width * 0.9, height * 0.5,
        width * 0.3, height * 0.9,
        width * 0.7, height * 0.8
    );
    ctx.stroke();
    
    // Add a glow effect
    ctx.shadowColor = '#00C8FF';
    ctx.shadowBlur = 10;
    ctx.stroke();
}

// Add pulse animation for data updates
const style = document.createElement('style');
style.textContent = `
    @keyframes pulseOnce {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
            text-shadow: 0 0 10px currentColor;
        }
        100% {
            transform: scale(1);
        }
    }
    
    .pulse-once {
        animation: pulseOnce 1s ease;
    }
`;
document.head.appendChild(style);

// Call placeholder generation on load
window.addEventListener('load', generatePlaceholderImages);
