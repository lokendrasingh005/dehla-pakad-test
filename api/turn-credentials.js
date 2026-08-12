export default async function handler(req, res) {
  const METERED_DOMAIN = 'dehlapakad.metered.live';
  const METERED_API_KEY = process.env.METERED_API_KEY;

  try {
    const response = await fetch(
      `https://${METERED_DOMAIN}/api/v1/turn/credentials?apiKey=${METERED_API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ICE servers' });
  }
}
