import { VercelRequest, VercelResponse } from '@vercel/node';
import { getLeadsHandler } from '../server/api/leads';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await getLeadsHandler();
    res.status(200).json(result);
  } catch (error) {
    console.error('Leads API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}