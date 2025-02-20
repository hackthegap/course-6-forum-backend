const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory data store
let topics = [];

// Routes
// Get all topics
app.get('/api/topics', (req, res) => {
  res.json(topics);
});

// Create a new topic
app.post('/api/topics', (req, res) => {
  const { title, content, author } = req.body;
  const newTopic = {
    id: Date.now(),
    title,
    content,
    author,
    replies: [],
  };
  topics.push(newTopic);
  res.status(201).json(newTopic);
});

// Add a reply to a topic
app.post('/api/topics/:id/replies', (req, res) => {
  const topicId = parseInt(req.params.id);
  const { content, author } = req.body;
  const topic = topics.find((t) => t.id === topicId);

  if (topic) {
    const newReply = {
      id: Date.now(),
      content,
      author,
    };
    topic.replies.push(newReply);
    res.status(201).json(newReply);
  } else {
    res.status(404).json({ message: 'Topic not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});