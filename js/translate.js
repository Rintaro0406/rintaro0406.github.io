const translations = {
  en: {
    cv: "CV",
    cv_text: "Download my latest CV here.",
    research: "Research",
    research_text: "My current research focuses on cosmological applications of statistical methods, particularly spatial modelling, machine learning, and Bayesian inference.",
    blog: "Blog (Hobby)",
    hobby1: "Physics and Statistical Science",
    hobby2: "International Coin Collection",
    hobby3: "Travel journals and walks",
    hobby4: "Cooking and smoking"
    apps: "App / Code"
  },
  ja: {
    cv: "履歴書",
    cv_text: "最新の履歴書は<a href='assets/Rintaro_Kanaki_CV.pdf'>こちら</a>からダウンロードできます。",
    research: "研究",
    research_text: "現在は、宇宙論的な統計手法の応用、特に空間モデリング、機械学習、ベイズ推論に焦点を当てています。",
    blog: "ブログ（趣味）",
    hobby1: "物理学と統計科学",
    hobby2: "国際コイン収集",
    hobby3: "旅行記と徒歩日記",
    hobby4: "料理と喫煙",
    apps: "アプリ／コード"
  },
  de: {
    cv: "Lebenslauf",
    cv_text: "Laden Sie meinen aktuellen Lebenslauf <a href='assets/Rintaro_Kanaki_CV.pdf'>hier</a> herunter.",
    research: "Forschung",
    research_text: "Meine aktuelle Forschung befasst sich mit der Anwendung kosmologischer statistischer Methoden, insbesondere der räumlichen Modellierung, des maschinellen Lernens und der bayesianischen Inferenz.",
    blog: "Blog (Hobby)",
    hobby1: "Physik und statistische Wissenschaften",
    hobby2: "Internationale Münzsammlung",
    hobby3: "Reiseberichte und Wanderungen",
    hobby4: "Kochen und Rauchen",
    apps: "App / Code"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}