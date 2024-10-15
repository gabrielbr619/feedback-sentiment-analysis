const natural = require("natural");

function trainEmotionClassifier() {
  const classifier = new natural.BayesClassifier();

  // Alegria
  classifier.addDocument("Estou muito feliz", "alegria");
  classifier.addDocument("Que dia maravilhoso", "alegria");
  classifier.addDocument("Estou radiante de felicidade", "alegria");
  classifier.addDocument("Isso me deixa tão contente", "alegria");
  classifier.addDocument("Estou no topo do mundo", "alegria");
  classifier.addDocument("Não poderia estar mais satisfeito", "alegria");
  classifier.addDocument("Que notícia incrível", "alegria");
  classifier.addDocument("Estou nas nuvens de tanta alegria", "alegria");
  classifier.addDocument("Meu coração está cheio de alegria", "alegria");
  classifier.addDocument("Isso é um sonho realizado", "alegria");

  // Raiva
  classifier.addDocument("Isso me deixa com raiva", "raiva");
  classifier.addDocument("Estou furioso com essa situação", "raiva");
  classifier.addDocument("Não aguento mais essa incompetência", "raiva");
  classifier.addDocument("Que absurdo inaceitável", "raiva");
  classifier.addDocument("Estou fervendo de raiva", "raiva");
  classifier.addDocument("Isso é um ultraje", "raiva");
  classifier.addDocument("Estou indignado com esse tratamento", "raiva");
  classifier.addDocument("Que falta de respeito", "raiva");
  classifier.addDocument("Isso é revoltante", "raiva");
  classifier.addDocument("Estou perdendo a paciência", "raiva");

  // Tristeza
  classifier.addDocument("Estou me sentindo tão triste", "tristeza");
  classifier.addDocument("Meu coração está partido", "tristeza");
  classifier.addDocument("Sinto-me desolado", "tristeza");
  classifier.addDocument("Que notícia devastadora", "tristeza");
  classifier.addDocument("Estou com o coração pesado", "tristeza");
  classifier.addDocument("Não vejo luz no fim do túnel", "tristeza");
  classifier.addDocument("Estou arrasado com isso", "tristeza");
  classifier.addDocument("Sinto uma profunda melancolia", "tristeza");
  classifier.addDocument("Isso me deixa tão desanimado", "tristeza");
  classifier.addDocument("Estou sem esperança", "tristeza");

  // Medo
  classifier.addDocument("Estou com medo", "medo");
  classifier.addDocument("Isso me deixa apavorado", "medo");
  classifier.addDocument("Estou tremendo de medo", "medo");
  classifier.addDocument("Sinto-me aterrorizado", "medo");
  classifier.addDocument("Tenho um mau pressentimento sobre isso", "medo");
  classifier.addDocument("Estou em pânico", "medo");
  classifier.addDocument("Isso me dá arrepios", "medo");
  classifier.addDocument("Estou com medo do que pode acontecer", "medo");
  classifier.addDocument("Sinto-me inseguro e vulnerável", "medo");
  classifier.addDocument("Isso me deixa ansioso e temeroso", "medo");

  // Surpresa
  classifier.addDocument("Uau, eu não esperava por isso", "surpresa");
  classifier.addDocument("Que surpresa incrível", "surpresa");
  classifier.addDocument("Isso me pegou totalmente desprevenido", "surpresa");
  classifier.addDocument("Não posso acreditar no que estou vendo", "surpresa");
  classifier.addDocument("Que reviravolta inesperada", "surpresa");
  classifier.addDocument("Estou boquiaberto com essa notícia", "surpresa");
  classifier.addDocument("Isso é completamente inesperado", "surpresa");
  classifier.addDocument("Que coincidência surpreendente", "surpresa");
  classifier.addDocument("Nunca imaginei que isso aconteceria", "surpresa");
  classifier.addDocument("Estou verdadeiramente espantado", "surpresa");

  classifier.train();
  return classifier;
}

const trainedClassifier = trainEmotionClassifier();

function classifyEmotion(text) {
  return trainedClassifier.classify(text);
}

module.exports = classifyEmotion;
