# Stahl Insights - Restoration Documentation

## Overview
This document provides detailed instructions for restoring the Stahl Insights website from the GitHub repository. It includes information about the repository structure, restoration process, and deployment steps to ensure the website can be completely restored without any degradation of the product.

## Repository Information
- **Repository URL**: https://github.com/Hodge2Franklin/Stahl
- **Latest Deployment URL**: https://crnolpcz.manus.space
- **Last Updated**: April 2, 2025
- **Current Version**: 1.2.1

## Repository Structure
```
Stahl/
├── css/
│   └── style.css          # Main stylesheet with CSS variables for theming
├── js/
│   └── main.js            # Core JavaScript functionality
├── index.html             # Homepage
├── articles.html          # Articles listing page
├── dashboards.html        # Interactive dashboards page
├── premium.html           # Premium subscription tiers page
├── crowd-sourced.html     # Crowd-sourced voting feature
├── trading-tool.html      # Virtual trading simulator
├── personalized-trading.html # Personalized trading interface
├── hotcopper-widget.html  # HotCopper integration widget
├── robots.txt             # Search engine directives
├── README.md              # Project overview
├── RELEASE_NOTES.md       # Version history and changes
├── TECHNICAL_DOCUMENTATION.md # Technical implementation details
├── DEPLOYMENT.md          # Deployment history and instructions
├── RESTORATION.md         # This file - restoration instructions
└── [Additional documentation files]
```

## Complete Restoration Process

### Prerequisites
- Git installed on your system
- GitHub access token (if repository is private)
- Static website hosting service

### Step 1: Clone the Repository
```bash
git clone https://github.com/Hodge2Franklin/Stahl.git
cd Stahl
```

### Step 2: Review Documentation
Before proceeding with restoration, review these key documentation files:
- `README.md` - Project overview and basic setup instructions
- `TECHNICAL_DOCUMENTATION.md` - Technical implementation details
- `DEPLOYMENT.md` - Deployment history and instructions
- `RELEASE_NOTES.md` - Version history with detailed changelog

### Step 3: Local Testing
Test the website locally to ensure all functionality works correctly:
```bash
# Using Python's built-in HTTP server
python3 -m http.server 8000

# Or using Node.js http-server if installed
npx http-server
```

Then open a browser and navigate to `http://localhost:8000` to verify:
- All pages load correctly
- CSS styling is applied properly
- JavaScript functionality works (dashboard tabs, article filter tabs, breaking news ticker, etc.)
- All interactive elements respond as expected

### Step 4: Deployment
Once local testing confirms everything is working correctly, deploy the website:

1. **Option 1: Manual Deployment to Static Hosting**
   - Upload all files to your static hosting service
   - Ensure all file permissions are set correctly
   - Verify the website is accessible at the provided URL

2. **Option 2: Automated Deployment**
   - If using a service with GitHub integration (Netlify, Vercel, GitHub Pages, etc.)
   - Configure the service to deploy from the repository
   - Set the build command to none (as this is a static site)
   - Set the publish directory to the root folder

### Step 5: Post-Deployment Verification
After deployment, verify:
- All pages are accessible
- Dashboard tabs function correctly (Sentiment Heatmap, Deal Comparator, Forum Intelligence, etc.)
- Article filter tabs work properly (All, Analysis, Hidden Gems, Market Moves, etc.)
- Breaking news ticker animates properly
- Login modal appears when clicking the login button
- Responsive design works on different screen sizes

## Troubleshooting Common Issues

### Issue: Missing Assets or 404 Errors
- **Solution**: Check file paths in HTML files to ensure they use relative paths
- **Example**: Change `/images/logo.png` to `images/logo.png`

### Issue: JavaScript Functionality Not Working
- **Solution**: Check browser console for errors and verify script loading
- **Common Fix**: Ensure main.js is properly referenced in all HTML files

### Issue: CSS Styling Issues
- **Solution**: Verify style.css is properly loaded and check for CSS conflicts
- **Debugging**: Use browser developer tools to inspect element styles

### Issue: Dashboard Tabs Not Switching
- **Solution**: Check the JavaScript tab switching functionality in main.js
- **Specific Function**: Look for `initDashboardTabs()` function implementation
- **Common Fix**: Ensure selectors match the HTML structure (use '.tab-item' not '.dashboard-tab')

### Issue: Article Filter Tabs Not Working
- **Solution**: Check the JavaScript filter functionality in main.js
- **Specific Function**: Look for `initArticleFilterTabs()` function implementation
- **Common Fixes**: 
  - Verify DOM checking for articles page
  - Ensure case-insensitive category comparison
  - Check error handling for articles without tags

## Emergency Recovery
If the deployed website becomes inaccessible or corrupted:

1. Immediately deploy from the latest repository version
2. If repository is also compromised, use the latest backup
3. Document the issue and resolution in RELEASE_NOTES.md
4. Update the repository with any fixes made during recovery

## Maintaining Documentation
To ensure the website can always be restored without degradation:

1. Document all changes in RELEASE_NOTES.md
2. Update technical documentation when implementation changes
3. Keep deployment history current in DEPLOYMENT.md
4. Test restoration process periodically to verify documentation accuracy
5. Update this restoration guide whenever new functionality is added

## Version Control Best Practices
- Create meaningful commit messages describing changes
- Use branches for feature development
- Tag releases with version numbers
- Never commit sensitive information (API keys, passwords, etc.)
- Regularly push changes to remote repository

## Recent Updates
- **April 2, 2025**: Fixed article filter tabs functionality with improved DOM checking, case-insensitive comparison, and better error handling
- **April 2, 2025**: Fixed dashboard tab switching functionality by correcting selector mismatch
- **April 2, 2025**: Updated all documentation to reflect recent changes

By following this documentation, the Stahl Insights website can be completely restored from the repository without any loss of functionality or degradation of the product.
