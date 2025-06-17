import { VercelRequest, VercelResponse } from '@vercel/node';
import { submitAuditHandler } from '../server/api/submit';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await submitAuditHandler(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error('Submit API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}