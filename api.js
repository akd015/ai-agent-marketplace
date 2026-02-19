// Simple API integration for the static frontend
// Usage: Call fetchAgents() to get agent data from backend

const API_URL = 'http://localhost:3001/api';

async function fetchAgents() {
    const res = await fetch(`${API_URL}/agents`);
    return res.json();
}

async function fetchAgent(id) {
    const res = await fetch(`${API_URL}/agents/${id}`);
    return res.json();
}

async function rentAgent(agentId, userData) {
    const res = await fetch(`${API_URL}/rent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ agentId, ...userData })
    });
    return res.json();
}

// Expose globally for demo
window.fetchAgents = fetchAgents;
window.fetchAgent = fetchAgent;
window.rentAgent = rentAgent;
