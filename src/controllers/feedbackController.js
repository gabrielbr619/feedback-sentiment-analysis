const Feedback = require("../models/feedback");
const {
  analyzeSentiment,
  analyzeFeedback,
} = require("../services/sentimentService");

exports.submitFeedback = async (req, res) => {
  const { text, category } = req.body;

  if (!text || !category) {
    return res
      .status(400)
      .json({ error: "Texto e categoria são obrigatórios" });
  }

  const analysis = analyzeFeedback(text);

  const feedback = new Feedback({
    text,
    category,
    sentiment: analysis.sentiment,
    language: analysis.language,
    keywords: analysis.keywords,
    emotion: analysis.emotion,
  });

  try {
    await feedback.save();
    res.status(201).json({ message: "Feedback recebido", analysis });

    if (analysis.sentiment < -0.5) {
      console.log("ALERTA: Feedback muito negativo recebido:", text);
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar feedback" });
  }
};

exports.getAnalysis = async (req, res) => {
  try {
    const analysis = await Feedback.aggregate([
      {
        $group: {
          _id: "$category",
          averageSentiment: { $avg: "$sentiment" },
          count: { $sum: 1 },
          keywords: { $push: "$keywords" },
          emotions: { $push: "$emotion" },
        },
      },
      {
        $project: {
          _id: 1,
          averageSentiment: 1,
          count: 1,
          topKeywords: {
            $slice: [{ $setUnion: "$keywords" }, 5],
          },
          emotions: 1,
        },
      },
      {
        $addFields: {
          emotionCounts: {
            $reduce: {
              input: "$emotions",
              initialValue: {},
              in: {
                $mergeObjects: [
                  "$$value",
                  { $literal: { $concat: ["$$this", ""] } },
                ],
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 1,
          averageSentiment: 1,
          count: 1,
          topKeywords: 1,
          dominantEmotion: {
            $arrayElemAt: [
              {
                $filter: {
                  input: { $objectToArray: "$emotionCounts" },
                  as: "emotion",
                  cond: {
                    $eq: ["$$emotion.v", { $max: "$emotionCounts" }],
                  },
                },
              },
              0,
            ],
          },
        },
      },
      {
        $project: {
          _id: 1,
          averageSentiment: 1,
          count: 1,
          topKeywords: 1,
          dominantEmotion: "$dominantEmotion.k",
        },
      },
    ]);
    res.json(analysis);
  } catch (error) {
    console.error("Erro ao obter análise:", error);
    res.status(500).json({ error: "Erro ao obter análise" });
  }
};

exports.getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort("-timestamp");
    res.json(feedbacks);
  } catch (error) {
    console.error("Erro ao obter feedbacks:", error);
    res.status(500).json({ error: "Erro ao obter feedbacks" });
  }
};
