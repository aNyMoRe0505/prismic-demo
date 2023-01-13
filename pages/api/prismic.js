export default async function handler(req, res) {
  const { type, documents, secret } = req.body;

  if (type === 'api-update' && documents.length > 0 && secret === 'your-secret') {
    await res.revalidate('/pageA');
    // await Promise.all([
    //   res.revalidate('/pageA'),
    //   res.revalidate('/pageB'),
    // ]);
    return res.status(200).json({ message: 'success' });
  }

  return res.status(400).json({ message: 'invalid body or secret' });
}
