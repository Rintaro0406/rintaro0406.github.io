const translations = {
  en: {
    cv: "CV",
    cv_text: `
<strong>🎓 Education:</strong><br>
PhD Newcastle 🇬🇧 | MSc LMU 🇩🇪 | Exchange Bologna 🇮🇹 | BSc Bayreuth 🇩🇪<br>
<strong>🔬 Research:</strong><br>
Bayesian photo-z | Weak lensing GNN | MRI disk modeling<br>
<strong>💼 Experience:</strong><br>
Zeiss Meditec 🇩🇪 | NGO Volunteer 🇺🇦<br>
<strong>🧑‍🏫 Teaching:</strong> 🇬🇧🇩🇪 | <strong>💬 Languages:</strong> 🇯🇵🇩🇪🇬🇧🇮🇹
`,
    research: "Research",
    research_text: "My current research focuses on cosmological applications of statistical methods, particularly spatial modelling, machine learning, and Bayesian inference.",
    blog: "Blog (Hobby)",
    hobby1: "Physics and Statistical Science",
    hobby2: "International Coin Collection",
    hobby3: "Travel journals and walks",
    hobby4: "Cooking and smoking",
    apps: "App / Code"
  },
  ja: {
    cv: "履歴書",
    cv_text: `
<strong>🎓 学歴:</strong><br>
博士🇬🇧 | 修士🇩🇪 | 交換留学🇮🇹 | 学士🇩🇪<br>
<strong>🔬 研究:</strong><br>
ベイズ的photo-z推定 | 弱重力レンズGNN | MRI円盤モデル<br>
<strong>💼 経験:</strong><br>
ツァイス🇩🇪 | NGOボランティア🇺🇦<br>
<strong>🧑‍🏫 教育:</strong> 🇬🇧🇩🇪 | <strong>💬 言語:</strong> 🇯🇵🇩🇪🇬🇧🇮🇹
`,
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
    cv_text: `
<strong>🎓 Ausbildung:</strong><br>
PhD Newcastle 🇬🇧 | MSc LMU 🇩🇪 | Austausch Bologna 🇮🇹 | BSc Bayreuth 🇩🇪<br>
<strong>🔬 Forschung:</strong><br>
Bayes. Photo-z | Schwache Linsen GNN | MRI Scheibenmodellierung<br>
<strong>💼 Erfahrung:</strong><br>
Zeiss Meditec 🇩🇪 | NGO Helfer 🇺🇦<br>
<strong>🧑‍🏫 Lehre:</strong> 🇬🇧🇩🇪 | <strong>💬 Sprachen:</strong> 🇯🇵🇩🇪🇬🇧🇮🇹
`,
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