const translations = {
  en: {
    cv: "CV",
    cv_text: "Download my latest CV here.",
    research: "Research",
    research_text: "My current research focuses on spatial modeling of photometric redshifts, INLA, and N-body simulations using MICECAT2.",
    blog: "Blog (Hobby)",
    hobby1: "UK and EU coin collecting",
    hobby2: "Poetry and physics satire",
    hobby3: "Travel journals and walks",
    apps: "App / Code"
  },
  ja: {
    cv: "履歴書",
    cv_text: "最新の履歴書は<a href='assets/Rintaro_Kanaki_CV.pdf'>こちら</a>からダウンロードできます。",
    research: "研究",
    research_text: "現在は、MICECAT2を用いたINLAおよびN体シミュレーションに基づく空間的photo-zモデリングに取り組んでいます。",
    blog: "ブログ（趣味）",
    hobby1: "イギリスとEUの記念コイン収集",
    hobby2: "詩と物理風刺",
    hobby3: "旅行記と徒歩日記",
    apps: "アプリ／コード"
  },
  de: {
    cv: "Lebenslauf",
    cv_text: "Laden Sie meinen aktuellen Lebenslauf <a href='assets/Rintaro_Kanaki_CV.pdf'>hier</a> herunter.",
    research: "Forschung",
    research_text: "Meine aktuelle Forschung befasst sich mit der räumlichen Modellierung photometrischer Rotverschiebungen, INLA und N-Körper-Simulationen mit MICECAT2.",
    blog: "Blog (Hobby)",
    hobby1: "Münzsammlung in Großbritannien und der EU",
    hobby2: "Poesie und physikalische Satire",
    hobby3: "Reiseberichte und Wanderungen",
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