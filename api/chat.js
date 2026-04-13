export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        error: { message: "Method not allowed" }
      });
    }

    const { messages } = req.body;

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: messages
        })
      }
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    console.error("API ERROR:", error);

    res.status(500).json({
      error: {
        message: "Server error"
      }
    });
  }
}