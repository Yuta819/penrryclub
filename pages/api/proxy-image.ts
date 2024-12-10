import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const imageUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%87%E4%BA%BA%E3%81%AB%E8%A4%92%E3%82%81%E3%82%89%E3%82%8C%E3%82%8B%E7%AC%91%E9%A1%95.jpg-nmh0fqY7eyg45FLZPMi5NY30EpgjyC.jpeg";

  try {
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.arrayBuffer();

    res.setHeader("Content-Type", "image/jpeg");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    res.send(Buffer.from(imageBuffer));
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ error: "Failed to fetch image" });
  }
}
