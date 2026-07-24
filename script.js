const dictionary = {
  en: {
    brand: { subtitle: "Research institute for migration, rights, and community" },
    nav: {
      about: "About",
      focus: "Focus",
      work: "Work",
      resources: "Resources",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Migration Rights Institute",
      title: "Korea Migration Institute",
      copy:
        "A public-interest platform researching and advocating for migrant rights, family safety, labor dignity, and community connection in Korea.",
      primary: "View Focus Areas",
      secondary: "Contact Us",
    },
    about: {
      eyebrow: "About KMI",
      title: "A migration institute connecting field realities and policy",
      body:
        "Korea Migration Institute treats migration not as a single policy issue, but as social infrastructure where family, labor, status, education, care, memory, and citizenship meet.",
      body2:
        "The site is structured like a public-interest legal and migrant-support organization: research briefs, field records, rights guides, and solidarity campaigns in one place.",
    },
    focus: {
      eyebrow: "Focus Areas",
      title: "Related Fields",
      women: { title: "Migrant women", body: "Safety, immigration status, family relations, discrimination response, and self-reliance." },
      children: { title: "Children and families", body: "Education, care, and welfare access for migrant-background children and families." },
      irregular: { title: "Irregular labor migrants / undocumented workers", body: "Labor rights for irregular migrant workers, including Filipino and Southeast Asian communities." },
      refugees: { title: "Refugees", body: "Protection procedures, settlement, family unity, and community connections." },
      diaspora: { title: "Overseas Koreans", body: "Rights issues connecting Korean society and diaspora communities." },
      workers: { title: "Foreign workers / care working", body: "Employment stability, workplace safety, and dignity for foreign and care workers." },
      patriots: { title: "Descendants of independence patriots", body: "Historical memory, status, rights, and recognition in the present." },
      students: { title: "International students", body: "Temporarily on hold, to be expanded according to future research scope." },
    },
    work: {
      eyebrow: "What We Do",
      title: "Research, rights guidance, and solidarity",
      research: { title: "Policy research", body: "Briefs and reports based on institutional changes, field cases, and statistical data." },
      guide: { title: "Rights guidance", body: "Accessible information on status, labor, family issues, and refugee procedures." },
      network: { title: "Solidarity network", body: "Connection paths with lawyers, counselors, organizers, and local institutions." },
    },
    resources: {
      eyebrow: "Resources",
      title: "Notices and Materials",
      one: "Migrant women rights guidance in preparation",
      two: "Irregular migrant worker labor-rights brief in preparation",
      three: "Refugee settlement support network guide in preparation",
    },
    contact: {
      eyebrow: "Contact",
      title: "Collaboration and inquiries",
      body: "For research collaboration, field case sharing, counseling referrals, or material requests, contact us below.",
    },
    footer: { note: "Research · Advocacy · Community" },
  },
};

const originals = new Map();
const i18nNodes = document.querySelectorAll("[data-i18n]");
const buttons = document.querySelectorAll("[data-lang]");

i18nNodes.forEach((node) => {
  originals.set(node, node.textContent);
});

function readPath(source, path) {
  return path.split(".").reduce((value, key) => (value ? value[key] : undefined), source);
}

function setLanguage(language) {
  document.documentElement.lang = language;
  const source = language === "en" ? dictionary.en : null;

  i18nNodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = source && key ? readPath(source, key) : null;
    node.textContent = value || originals.get(node) || "";
  });

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  localStorage.setItem("kmi-language", language);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang || "ko"));
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("kmi-language") || "ko");
