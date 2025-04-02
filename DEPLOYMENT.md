# Stahl Insights - Deployment Documentation

## Current Deployment

**Latest Deployment URL**: https://crnolpcz.manus.space  
**Deployment Date**: April 2, 2025  
**Deployment Type**: Static website  
**Current Version**: 1.2.1

## Deployment History

| Date | URL | Version | Notes |
|------|-----|---------|-------|
| April 2, 2025 | https://crnolpcz.manus.space | v1.2.1 | Current deployment with article filter tab fixes |
| April 2, 2025 | https://yjlalsrz.manus.space | v1.2.0 | Deployment with dashboard tab fixes |
| April 2, 2025 | https://cbirwpjv.manus.space | v1.2.0 | Initial deployment with all features |
| April 2, 2025 | https://wlflbpvh.manus.space | v1.1.0 | Previous deployment with dashboard tab functionality |
| April 2, 2025 | https://iqwtfqfn.manus.space | v1.0.0 | Initial deployment |

## Deployment Process

### Prerequisites
- Git repository with all website files
- Static website hosting service

### Deployment Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Hodge2Franklin/Stahl.git
   ```

2. Navigate to the repository directory:
   ```bash
   cd Stahl
   ```

3. Deploy using a static website hosting service:
   - Upload all files to the hosting service
   - Ensure all assets are properly referenced with relative paths
   - Verify that all pages are accessible

4. Test the deployed website:
   - Check all pages and navigation
   - Verify interactive elements functionality
   - Test responsive design on different devices
   - Ensure dashboard tabs are working correctly
   - Verify article filter tabs function properly

## Restoration Process

If restoration is needed, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Hodge2Franklin/Stahl.git
   ```

2. No build process is required as this is a static website

3. Deploy to any static website hosting service:
   - Upload all files to the hosting service
   - The website will be immediately functional

4. Verify functionality:
   - Test dashboard tabs (Sentiment Heatmap, Deal Comparator, etc.)
   - Test article filter tabs (All, Analysis, Hidden Gems, etc.)
   - Check all interactive elements

## Technical Requirements

- **Hosting**: Any static website hosting service
- **Domain**: Custom domain or provided by hosting service
- **SSL**: Recommended for secure connections
- **Browser Support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

## Monitoring and Maintenance

- Regularly check the deployed website for any issues
- Update the repository with any changes made to the deployed website
- Document all deployments in this file
- Keep RELEASE_NOTES.md updated with version information

## Troubleshooting

### Common Issues

1. **Missing Assets**
   - Ensure all file paths are relative and correct
   - Check for case-sensitivity in file references

2. **JavaScript Functionality Issues**
   - Verify browser console for errors
   - Ensure all script files are properly loaded
   - Check for selector mismatches in JavaScript code

3. **Dashboard Tab Issues**
   - Verify the `initDashboardTabs()` function in main.js
   - Ensure selectors match HTML structure (use '.tab-item' not '.dashboard-tab')

4. **Article Filter Tab Issues**
   - Check the `initArticleFilterTabs()` function in main.js
   - Verify DOM checking for articles page
   - Ensure case-insensitive category comparison
   - Check error handling for articles without tags

5. **Responsive Design Problems**
   - Test on multiple device sizes
   - Check media queries in CSS

### Recovery Steps

If the deployed website experiences issues:

1. Verify the issue on the live site
2. Test locally to reproduce and fix the issue
3. Update the repository with the fix
4. Redeploy the website
5. Document the issue and solution in RELEASE_NOTES.md
6. Update all relevant documentation files
