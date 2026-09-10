/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "Site Apps",
    sites: [
      {
        title: "",
        url: "",
        icon: "",
        color: "",
      },
    ],
  },

  {
    title: "Chat AI",
    sites: [
      {
        title: "CHATGPT",
        description: "CHATGPT",
        url: "https://chat.openai.com",
        icon: "https://www.google.com/s2/favicons?domain=chat.openai.com&sz=128",
        color: "",
      },
      {
        title: "CLAUDE",
        description: "CLAUDE",
        url: "https://claude.ai",
        icon: "https://cdn.simpleicons.org/claude",
      },
      {
        title: "DEEPSEEK",
        description: "DEEPSEEK",
        url: "https://chat.deepseek.com",
        icon: "https://cdn.simpleicons.org/deepseek",
      },
      {
        title: "GEMINI",
        description: "GEMINI",
        url: "https://gemini.google.com",
        icon: "https://cdn.simpleicons.org/googlegemini/8E75B2",
      },
      {
        title: "GROK",
        description: "GROK",
        url: "	https://grok.com",
        icon: "https://cdn.simpleicons.org/x",
      },
    ],
  },
  {
    title: "SITE WEBS",
    sites: [
      {
        title: "GROQ",
        description: "GROQ",
        url: "	https://groq.com",
        icon: "",
        color: "",
      },
    ],
  },
];

const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  BLOG_NAME: "MALM",

  BLOG_URL: "https://bymalm.com/",

  LOGO_URL: null,

  GITHUB_URL: "https://github.com/ByMalm",

  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",

  SLOGANS: [
    "Bienvenido, mi amigo!",
    "欢迎拜访",
    "Welcome to our home!",
    "Bienvenue, mon cher ami!",
    "नमस्ते, आप कैसे हैं?",
    "خوش آمدید، دوست من",
    "Bem-vindo à nossa jornada!",
    "Привет! Как твои дела?",
    "Benvenuto, caro amico!",
    "Willkommen in unserer Welt!",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
