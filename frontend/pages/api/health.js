export default function handler(req, res) {
  res.status(200).json({ 
    status: 'OK',
    service: 'frontend-app',
    timestamp: new Date().toISOString()
  });
}
