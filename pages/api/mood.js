// pages/api/mood.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { mood } = req.body;

    if (!mood) {
      return res.status(400).json({ message: 'Mood is required.' });
    }

    // In a real application, you would save this mood data to a database.
    // For this example, we'll just log it to the console.
    console.log('Received mood:', mood);

    // You can send a success response back to the client
    res.status(200).json({ message: 'Mood received successfully!', yourMood: mood });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}