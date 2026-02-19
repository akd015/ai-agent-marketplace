import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Mock data for agents
const agents = [
  {
    id: 1,
    name: 'Market Analyst Pro',
    category: 'Business',
    description: 'Analyze competitors, gather pricing, generate presentation',
    rating: 4.8,
    price: 0.35,
    tags: ['business', 'research', 'real-time'],
    rentalModels: ['perTask', 'perHour', 'subscription', 'api', 'outcomeBased']
  },
  {
    id: 2,
    name: 'Code Reviewer',
    category: 'Developer',
    description: 'Automated code review and security audit',
    rating: 4.7,
    price: 0.50,
    tags: ['developer', 'security', 'review'],
    rentalModels: ['perTask', 'perHour', 'subscription']
  }
  // Add more agents as needed
];

// API: Get all agents
app.get('/api/agents', (req, res) => {
  res.json(agents);
});

// API: Get agent by ID
app.get('/api/agents/:id', (req, res) => {
  const agent = agents.find(a => a.id === parseInt(req.params.id));
  if (!agent) return res.status(404).json({ error: 'Agent not found' });
  res.json(agent);
});

// API: Rent agent (mock)
app.post('/api/rent', (req, res) => {
  // In production, validate user, payment, etc.
  res.json({ success: true, message: 'Agent rented successfully (mock)' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
