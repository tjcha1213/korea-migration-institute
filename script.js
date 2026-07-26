const dictionary = {
  en: {
    brand: { subtitle: "Research institute for migration, rights, and community" },
    nav: {
      about: "About",
      focus: "Focus",
      work: "Work",
      archive: "Archive",
      resources: "Resources",
      contact: "Contact",
    },
    hero: {
      title: "Korea Migration Institute",
      copy:
        "A public-interest platform led by migrants and people with first-hand migration experience, researching migration realities and rights in Korea.",
      primary: "View Focus Areas",
      secondary: "Contact Us",
    },
    about: {
      eyebrow: "About KMI",
      title: "A research institute grounded in lived migration experience",
      body:
        "Korea Migration Institute is led mainly by migrants and people who have directly experienced migration, working on immigration, multicultural society, status, labor, family, education, and care in Korea.",
      body2:
        "While many migration-related institutes in Korea are led primarily by Korean-run organizations, KMI begins from migrant voices, languages, and lived experience as the basis for research, education, counseling, and rights guidance.",
    },
    focus: {
      eyebrow: "Focus Areas",
      title: "Related Fields",
      women: { title: "Migrant women", body: "Safety, immigration status, family relations, discrimination response, and self-reliance." },
      children: { title: "Migrant-background children and families", body: "Education, care, and welfare access for migrant-background children and families." },
      irregular: { title: "Irregular labor migrants / undocumented workers", body: "Labor rights for irregular migrant workers, including Filipino and Southeast Asian communities." },
      refugees: { title: "Refugees", body: "Protection procedures, settlement, family unity, and community connections." },
      diaspora: { title: "Overseas Koreans", body: "Rights issues connecting Korean society and diaspora communities." },
      workers: { title: "Foreign workers / care working", body: "Employment stability, workplace safety, and dignity for foreign and care workers." },
      patriots: { title: "Descendants of independence patriots", body: "Historical memory, status, rights, and recognition in the present." },
      students: { title: "International students", body: "Temporarily on hold, to be expanded according to future research scope." },
    },
    work: {
      eyebrow: "What We Do",
      title: "Research, education, rights information, and referrals",
      center: "Operating model",
      research: {
        title: "Migration society research",
        body:
          "We conduct research on immigration, multicultural society, and migrants' lives and rights in Korea, publishing reports and materials based on field cases and statistical data.",
      },
      education: {
        title: "Education and capacity building",
        body:
          "We run programs on migration-society understanding, cultural adaptation, rights, counseling, and multicultural education for migrants, migrant-background children and youth, families, teachers, counselors, and advocates.",
      },
      rights: {
        title: "Rights information",
        body:
          "We provide accessible information on systems and rights that migrants need, including status, labor, family, education, medical care, and refugee procedures.",
      },
      counseling: {
        title: "Counseling and case referrals",
        body:
          "We counsel migrants and migrant-background families on difficulties related to status, family, education, labor, and daily-life adaptation, and connect them to specialized institutions and support systems when needed.",
      },
      collaboration: {
        title: "Research-field collaboration",
        body:
          "We collaborate with researchers, lawyers, counselors, teachers, advocates, and local institutions to connect research, education, counseling, and field practice.",
      },
    },
    archive: {
      eyebrow: "Archive",
      title: "Activity Archive",
      copy:
        "A date-based record of education, care, cultural visits, and social contribution activities with photos.",
      parent: {
        category: "Education and capacity building",
        title: "Multicultural parenting class for Chinese-national migrant-background parents of young children",
        location: "Seoul Support Center for Childcare",
        body:
          "A parent education program supporting migrant-background parents of young children in understanding Korea's childcare environment and practical information for multicultural family life.",
      },
      culture: {
        category: "Multicultural education",
        title: "Cultural understanding education for counselors and interpreters supporting migrant-background youth",
        location: "Grace Hotel Seoul",
        body:
          "Training for counselors and interpreters who support migrant-background youth, focused on cultural understanding and stronger field communication.",
      },
      award: {
        category: "Community activity",
        title: "Community Encouragement Award",
        location: "Gwanak-gu Office, Seoul",
        body:
          "The child and family care community activity received a local community encouragement award recognizing its significance and continuity.",
      },
      social: {
        category: "Social contribution",
        title: "Social contribution activity for migrant-background children and youth in Jeonbuk",
        location: "Jeonju Family Center",
        body:
          "A social contribution activity helping migrant-background children and youth in Jeonbuk experience participation and sharing within the local community.",
      },
      museum: {
        category: "Cultural visit",
        title: "Korean Immigration History Museum cultural visit",
        location: "Korean Immigration History Museum, Incheon",
        body:
          "A cultural visit with the child and family care community to learn about historical connections between migration and Korean society.",
      },
      reading: {
        category: "Child and family care",
        title: "Reading activity for migrant-background children",
        location: "Seoul National University College of Education",
        body:
          "A care program centered on reading activities to support language expression and learning interest among migrant-background children.",
      },
      childcare: {
        category: "Child and family care",
        title: "Care activity for migrant-background children",
        location: "SNU President's Lawn and College of Human Ecology",
        body:
          "A care activity supporting learning, play, and relationship-building for migrant-background children and families.",
      },
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
