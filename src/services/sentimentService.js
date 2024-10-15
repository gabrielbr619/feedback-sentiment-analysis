const natural = require("natural");
//const nlp = require("node-nlp");
const langdetect = require("langdetect");
const keyword_extractor = require("keyword-extractor");

const classifyEmotion = require('./emotionClassifier');

const getSentimentAnalyzer = (lang) => {
  switch (lang) {
    case "Portuguese":
      return new natural.SentimentAnalyzer(
        "Portuguese",
        natural.PorterStemmerPt,
        "afinn"
      );
    case "Spanish":
      return new natural.SentimentAnalyzer(
        "Spanish",
        natural.PorterStemmerEs,
        "afinn"
      );
    default:
      return new natural.SentimentAnalyzer(
        "English",
        natural.PorterStemmer,
        "afinn"
      );
  }
};

const sentimentDictPt = {
  bom: 3,
  ótimo: 4,
  excelente: 5,
  maravilhoso: 5,
  ruim: -3,
  péssimo: -4,
  terrível: -5,
  horrível: -5,
  satisfeito: 4,
  insatisfeito: -4,
  contente: 3,
  descontente: -3,
  rápido: 2,
  lento: -2,
  eficiente: 3,
  ineficiente: -3,
  recomendo: 4,
  "não recomendo": -4,
};

const getSentimentScore = (tokens, lang) => {
  if (lang === "pt") {
    let score = 0;
    let wordCount = 0;
    tokens.forEach((token) => {
      const lowercaseToken = token.toLowerCase();
      if (sentimentDictPt.hasOwnProperty(lowercaseToken)) {
        score += sentimentDictPt[lowercaseToken];
        wordCount++;
      }
    });
    return wordCount > 0 ? score / wordCount : 0;
  } else {
    const analyzer = new natural.SentimentAnalyzer(
      "English",
      natural.PorterStemmer,
      "afinn"
    );
    return analyzer.getSentiment(tokens);
  }
};

exports.analyzeFeedback = (text) => {
  const detectedLang = langdetect.detect(text)[0].lang;
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(text);

  const sentimentScore = getSentimentScore(tokens, detectedLang);

  const keywords = keyword_extractor.extract(text, {
    language: detectedLang === "pt" ? "portuguese" : "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false,
  });

  const emotion = classifyEmotion(text);

  return {
    language: detectedLang,
    sentiment: sentimentScore,
    keywords: keywords.slice(0, 5), // Top 5 keywords
    emotion: emotion,
  };
};