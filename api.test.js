const request = require('supertest');
const express = require('express');

const app = express();
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

describe('GET /api/hello', () => {
  it('should return a greeting message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello from backend!');
  });
});
