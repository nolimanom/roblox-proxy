const axios = require('axios');

module.exports = async (req, res) => {
  const { itemId } = req.query; // Get itemId from query params
  if (!itemId) {
    return res.status(400).json({ error: 'itemId is required' });
  }

  try {
    const response = await axios.get(`https://economy.roblox.com/v1/assets/${itemId}/details`);
    res.json(response.data); // Return the Roblox API response
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
};
