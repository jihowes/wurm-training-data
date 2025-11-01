# Quick script to push to GitHub
# Replace YOUR_GITHUB_USERNAME with your actual GitHub username

$githubUsername = "YOUR_GITHUB_USERNAME"

Write-Host "Connecting to GitHub repository..." -ForegroundColor Green

# Add remote (only run this once)
git remote add origin https://github.com/$githubUsername/wurmonbase.git

# Rename branch to main (GitHub standard)
git branch -M main

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "Done! Check your GitHub repository." -ForegroundColor Green


