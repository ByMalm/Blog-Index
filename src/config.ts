const WEBSITE_SORTS: WebsiteSort[] = [
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
      {
        title: "DUCK AI",
        description: "DUCK AI",
        url: "https://duck.ai/chat?ia=chat&duckai=1",
        icon: "https://cdn.simpleicons.org/duckduckgo",
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

  {
    title: "TOOLS",
    sites: [
      {
        title: "",
        description: "",
        url: "",
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

  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: false,

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

  WEBSITE_SORTS,

  WEBSITE_ITEMS,

  TKD: {
    title: "Malm",
    keywords: "",
    description: "",
  },
};

export default GLOBAL_CONFIG;
