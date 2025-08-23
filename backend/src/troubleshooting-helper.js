// Troubleshooting Helper Script

// 1. Dependency Version Check
function checkDependencyVersion() {
    const { execSync } = require("child_process");
    try {
        const version = execSync("npm list openai").toString();
        console.log("✅ OpenAI Library Version:");
        console.log(version);
    } catch (error) {
        console.error("❌ Failed to check OpenAI library version:", error.message);
    }
}

// 2. Environment Variable Logging
function logEnvironmentVariables() {
    console.log("✅ Environment Variables:");
    console.log(`OPENAI_API_KEY: ${process.env.OPENAI_API_KEY || "Not Set"}`);
    console.log(`NODE_ENV: ${process.env.NODE_ENV || "Not Set"}`);
    console.log(`SCAM_MODEL: ${process.env.SCAM_MODEL || "Not Set"}`);
}

// 3. Network Connectivity Test
async function testNetworkConnectivity() {
    const https = require("https");
    const options = {
        hostname: "api.openai.com",
        port: 443,
        path: "/v1/chat/completions",
        method: "GET",
    };

    const req = https.request(options, (res) => {
        console.log(`✅ OpenAI API Connectivity: Status Code ${res.statusCode}`);
    });

    req.on("error", (error) => {
        console.error("❌ OpenAI API Connectivity Test Failed:", error.message);
    });

    req.end();
}

// 4. API Key Scope Validation
async function validateApiKey() {
    const fetch = require("node-fetch");
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        console.error("❌ API Key is not set in environment variables.");
        return;
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: "test" }],
            }),
        });

        if (response.ok) {
            console.log("✅ API Key Validation Successful");
        } else {
            console.error(`❌ API Key Validation Failed: ${response.status} - ${await response.text()}`);
        }
    } catch (error) {
        console.error("❌ API Key Validation Error:", error.message);
    }
}

// 5. Error Messaging Improvements
function enhanceErrorLogging(error) {
    console.error("❌ Enhanced Error Logging:");
    console.error("Error Message:", error.message || "Unknown Error");
    console.error("Error Stack:", error.stack || "No stack trace available");
}

// Testing All Functions
(async () => {
    console.log("🔄 Running Troubleshooting Helper...");
    checkDependencyVersion();
    logEnvironmentVariables();
    await testNetworkConnectivity();
    await validateApiKey();
})();