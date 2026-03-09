export default {
  name: '曹发友',
  tel: '18273358731',
  email: 'liamcao1999@gmail.com',
  website: 'github.com/cfy1126',
  politicalStatus: '中共党员',
  nation: '汉',
  birthday: '1999.01.13',
  nativePlace: '湖南株洲',
  graduationDate: '2022.06',
  edus: [
    {
      left: '南华大学船山学院',
      right: '湖南衡阳',
      children: [
        {
          left: '专业：软件工程',
          right: '2018年9月 - 2022年6月'
        },
      ]
    },
  ],
  skills: {
    frameworks: ['Vue.js', 'Node.js', 'Express', 'Nest.js', 'TypeScript', 'PHP', '微信小程序', 'uniapp'],
    libraries: ['Ant Design', 'ECharts', 'Vuex', 'Pinia'],
    tools: ['Git', 'Webpack', 'SCSS', 'WordPress', 'Claude Code', 'Cursor', 'MySQL', 'MongoDB', 'HBuilderX'],
    tests: ['Jest', 'Cypress'],
  },
  works: [
    {
      left: '湖南慧明谦数字能源技术有限公司@能源管理系统开发',
      link: 'https://energy.hncbyun.com/iems/index',
      right: '2025年5月 - 2026年2月',
      children: [
        {left: '主导能源管理系统（储能、光伏、微电网、虚拟电厂）前端开发，使用 *Vue3* + *ECharts* + *Element UI* + *Vxe-Table* 构建可视化界面'},
        {left: '开发一次主接线图组态、储能看板、光储直柔智能微电网*SVG*等核心页面，实现日/月/年数据切换及充放电累计排名功能'},
        {left: '主导哈萨克斯坦光储充一体化项目国际化开发，*vue-i18n*实现中英俄三语支持，提升客户满意度'},
        {left: '开发虚拟电厂、账单模块、储能转换效率等6+核心功能，交付5+客户定制项目（东福、胜利油田、西安国顺等）'},
        {left: '源网荷储平台 *App* 开发：使用 *uni-app* + *Vue 2* + *uview-ui* 开发跨平台应用，实现储能、光伏、微电网等能源管理功能'},
        {left: '集成档案管理、报表管理、财务管理，曲线分析、设备监测等核心功能'},
      ]
    },
    {
      left: '杭州海兴电力科技股份有限公司',
      link: 'https://support.livoltek.com/',
      right: '2024年5月 - 2025年5月',
      children: [
        {left: '独立开发产品管理平台（全栈），使用 *Vue.js* + *Element UI* + *Express* + *SQLite* + *Sequelize ORM*'},
        {left: '设计*RESTful API*（产品分类、附件管理、信息查询），使用 *Sequelize ORM* 数据建模，实现4类业务接口'},
        {left: '开发首页、产品分类、内容管理页面，提取公共组件提升代码复用率30%'},
        {left: '实现动态三级导航、搜索过滤、多语言功能，优化用户体验'},
      ]
    },
    {
      left: '映翰通嘉兴通信技术有限公司@WordPress 网站开发',
      link: '',
      right: '2022年6月 - 2024年4月',
      children: [
        {left: '开发企业门户和电商平台，基于 *WordPress* + *WooCommerce* 构建响应式站点'},
        {left: '性能优化：通过 *LiteSpeed* 缓存、*WebP* 压缩、*Critical CSS* 优化，页面加载速度降至1.3s'},
        {left: '*SEO*优化：关键词排名提升35%，自然流量月增40%，代表作品：Livoltek全球站、SolarShop电商'},
      ]
    },
  ],
  projects: [
    {
      left: '个人简历展示系统',
      link: 'https://github.com/cfy1126/resume',
      right: '2025年11月',
      children: [
        {left: '基于 *Vue.js* + *SCSS* 构建的个人简历展示系统，采用组件化设计，包含个人基本信息、教育背景、技能清单、工作经历、个人项目等模块'},
        {left: '使用 *CSS Grid* 和 *Flexbox* 实现响应式布局，数据与视图分离，通过 *info.js* 统一管理简历数据，支持富文本渲染和外部链接跳转'},
        {left: '可复用的 *List* 组件处理不同类型的列表展示，配置 *GitHub Pages* 一键部署，清晰的信息层级结构展示个人技术能力和项目经验'},
      ]
    },
    {
      left: '仿亚马逊商城平台',
      link: 'supersimple.dev/projects/ecommerce',
      right: '2024年10月',
      children: [
        {left: '使用 *Vue.js* + *Express* + *SQLite* + *Sequelize ORM* 构建全栈电商平台，实现商品管理、购物车、结算、订单管理完整流程'},
        {left: '使用 *Pinia* 实现全局状态管理，开发商品动态加载、购物车数据持久化、订单自动清空等核心功能'},
      ]
    },
  ],
}
