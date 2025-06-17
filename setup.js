/**
 * This script helps setup the AI SEO Audit Funnel after forking.
 * Run this script with: node setup.js
 */

const readline = require('readline');
const fs = require('fs');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n===================================');
console.log('  AI SEO AUDIT FUNNEL SETUP WIZARD  ');
console.log('===================================\n');

console.log('This wizard will help you configure your SEO Audit Funnel.\n');
console.log('You\'ll need the following information:');
console.log('1. OpenAI API Key');
console.log('2. Email SMTP details (host, port, username, password)');
console.log('3. Owner email for lead notifications\n');

const requiredSecrets = [
  { name: 'OPENAI_API_KEY', description: 'Your OpenAI API key (from platform.openai.com)' },
  { name: 'EMAIL_HOST', description: 'SMTP server address (e.g., mail.yourdomain.com)' },
  { name: 'EMAIL_PORT', description: 'SMTP port (usually 465 for SSL or 587 for TLS)' },
  { name: 'EMAIL_USER', description: 'Email username/address for sending reports' },
  { name: 'EMAIL_PASS', description: 'Email password' },
  { name: 'OWNER_EMAIL', description: 'Email where you want to receive lead notifications' },
];

const secrets = {};

function askForSecret(index) {
  if (index >= requiredSecrets.length) {
    confirmAndSave();
    return;
  }

  const secret = requiredSecrets[index];
  rl.question(`Enter ${secret.description}: `, (answer) => {
    secrets[secret.name] = answer;
    askForSecret(index + 1);
  });
}

function confirmAndSave() {
  console.log('\nReview your configuration:');
  requiredSecrets.forEach(secret => {
    if (secret.name === 'EMAIL_PASS' || secret.name === 'OPENAI_API_KEY') {
      console.log(`${secret.name}: ${'*'.repeat(8)}`);
    } else {
      console.log(`${secret.name}: ${secrets[secret.name]}`);
    }
  });

  rl.question('\nDoes this look correct? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
      saveSecrets();
    } else {
      console.log('\nLet\'s try again...\n');
      askForSecret(0);
    }
  });
}

function saveSecrets() {
  console.log('\nSaving secrets...');
  
  // In a Replit environment, we'd use their API to set secrets
  // For demonstration, we'll create a .env file
  let envContent = '';
  
  Object.entries(secrets).forEach(([key, value]) => {
    envContent += `${key}=${value}\n`;
  });
  
  fs.writeFileSync('.env.example', envContent);
  console.log('Created .env.example file. In Replit, please add these values to your Secrets tab.');
  
  console.log('\nSetup Complete!');
  console.log('\nNext steps:');
  console.log('1. In Replit, go to the "Secrets" tab and add each value');
  console.log('2. Run your application');
  console.log('3. Visit the application URL to check if everything is working\n');
  
  rl.close();
}

// Start the wizard
askForSecret(0);