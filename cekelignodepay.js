const axios = require('axios');
const readline = require('readline');

// Clear the terminal screen
console.clear();

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to verify Season 1 token eligibility
async function verifySeason1(apiToken) {
    const url = 'https://api.nodepay.ai/api/season/airdrop-status';

    try {
        console.log(`\n🔎 Checking Season 1 airdrop status...`);
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${apiToken}`,
                'Content-Type': 'application/json',
            },
        });

        const result = response.data.data || {};
        const walletAddress = result.wallet_address || 'Unknown';
        if (result.is_eligible) {
            console.log(`🎉 Congratulations! Wallet (${walletAddress}) is eligible for Season 1 tokens.`);
            console.log(`💰 Tokens Earned: ${result.season1_tokens}`);
        } else {
            console.log(`🚫 Wallet (${walletAddress}) is not eligible for Season 1 tokens.`);
        }
    } catch (error) {
        const errorMsg = error.response
            ? `API Error: ${error.response.status} - ${error.response.statusText}`
            : `Unexpected Error: ${error.message}`;
        console.error(`⚠️ Something went wrong: ${errorMsg}`);
    }
}

// Prompt user for API token
rl.question('🔐 Enter your API token: ', (apiToken) => {
    if (!apiToken.trim()) {
        console.error('⚠️ Error: API token cannot be empty. Exiting.');
        rl.close();
        return;
    }

    verifySeason1(apiToken.trim()).then(() => rl.close());
});
