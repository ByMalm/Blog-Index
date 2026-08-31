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
        title: "GROQ",
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

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "EsunR-Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.esunr.xyz",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "京ICP证000001号",
  ICP_URL: "https://beian.miit.gov.cn/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
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
