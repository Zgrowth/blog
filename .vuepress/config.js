
const autometa_options = {
  site: {
    name: "Zgrowth",
    twitter: "Zgrowth",
  },
  canonical_base: "https://zgrowth.github.io/blog/",
};

module.exports = {
  "title": "随身携带的记事本",
  "description": "在喧嚣的城市角落，沐浴晨光或陷入黄昏的余辉，每一步行走，都是一段未完待续的旋律。我们随身携带记事本，将梦想和现实的交响曲，通过文字和墨迹，谱写成一首首平凡中的不平凡",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "base": '/blog/',
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Zgrowth',
        icon: 'reco-github'
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      /* {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      }, */
    ],
    "logo": "/avatar.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "zgrowth",
    "authorAvatar": "/avatar.png",
    "startYear": "2024",
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["autometa", autometa_options],
    [
      "sitemap",
      {
        hostname: "https://zgrowth.github.io/blog/",
        // 排除无实际内容的页面
        exclude: ["/404.html"],
      },
    ],
    "vuepress-plugin-baidu-autopush", // 百度自动推送
  ]
}