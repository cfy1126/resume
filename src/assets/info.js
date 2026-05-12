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
    frameworks: ['React.js', 'TypeScript', 'Vue.js', 'Node.js', 'Express', 'PHP', '微信小程序', 'uni-app'],
    libraries: ['Ant Design', 'Element UI', 'Element Plus', 'ECharts', 'Vue Router', 'Pinia'],
    tools: ['Git', 'Vite', 'Webpack', 'SCSS', 'WordPress', 'Claude Code', 'Cursor', 'MySQL', 'MongoDB', 'Docker'],
    tests: ['Apifox', 'Vercel', 'GitHub Pages', 'Cloudflare Workers'],
  },
  works: [
    {
      left: '湖南智轩信息科技有限公司@智慧水务 / 低代码开发平台',
      link: 'https://github.com/cfy1126/web-vue3',
      right: '2026年2月 - 至今',
      children: [
        {left: '参与企业级低代码平台前端开发，支持通过可视化配置、表单设计、流程配置和数据看板搭建业务应用'},
        {left: '负责管理后台、业务配置、数据报表、大屏页面等模块开发，配合后端完成接口联调和页面状态处理'},
        {left: '处理 *pnpm*、*Vite*、环境变量、API 代理、WebSocket 地址、报表服务路径等工程配置'},
        {left: '参与测试/生产环境构建与部署验证，支持 *Nginx* / *TongHttpServer* 等运行环境'},
      ]
    },
    {
      left: '湖南慧明谦数字能源技术有限公司@数字能源管理操作平台',
      link: 'https://energy.hncbyun.com/iems/index',
      right: '2025年5月 - 2026年2月',
      children: [
        {left: '开发数字能源管理操作平台（储能、光伏、充电桩、微电网、虚拟电厂相关页面）'},
        {left: '使用 *Vue3* + *Element Plus* + *ECharts* 开发数据曲线分析模块，并且使用 *SVG* 绘制微电网 *SCADA* 图'},
        {left: '使用 *autofit.js* 做可视化大屏开发，适配不同屏幕尺寸'},
        {left: '使用 *vue-i18n* 做中英俄三语支持，提升国际化用户体验'},
        {left: '使用 *html2pdf.js* 导出日报表、周报表、月报表等 PDF 文档，并使用 *xlsx* 导出 Excel 表格'},
        {left: '源网荷储平台 *App* 开发：使用 *uni-app* + *Vue 2* + *uView UI* 开发跨平台应用，开发设备曲线分析页面'},
      ]
    },
    {
      left: '杭州海兴电力科技股份有限公司@售后技术支持平台',
      link: 'https://support.livoltek.com/',
      right: '2024年5月 - 2025年5月',
      children: [
        {left: '使用 *Vue 2* + *Express* + *SQLite* 开发技术支持平台，提供文档、视频、工单等功能'},
        {left: '基于 *Element UI* + *SCSS* 开发首页、产品分类、内容管理等页面'},
        {left: '设计 *RESTful API*（产品分类、附件管理、信息查询），使用 *Sequelize ORM* 数据建模，实现业务接口'},
      ]
    },
    {
      left: '映翰通嘉兴通信技术有限公司@WordPress 网站开发',
      link: '',
      right: '2022年6月 - 2024年4月',
      children: [
        {left: '开发企业门户和电商平台，基于 *WordPress* + *WooCommerce* 构建响应式站点'},
        {left: '性能优化：通过 *LiteSpeed* 缓存、*WebP* 压缩、*Critical CSS* 优化，页面加载速度降至1.3s'},
        {left: '*SEO* 优化：关键词排名提升35%，自然流量月增40%，代表作品：Livoltek全球站、SolarShop电商'},
      ]
    },
  ],
  projects: [
    {
      left: '智慧水务 / 低代码开发平台前端',
      link: 'https://github.com/cfy1126/web-vue3',
      right: '2026年',
      children: [
        {left: '企业级低代码平台前端项目，支持通过可视化页面、拖拉拽配置、表单设计和数据看板搭建业务应用'},
        {left: '涉及管理后台、数据报表、大屏应用、文件预览、地图 AK、WebSocket 和多后端服务环境配置'},
        {left: '项目使用 *pnpm* + *Vite* 构建，支持 *Nginx* / *TongHttpServer* 测试和生产环境部署'},
      ]
    },
    {
      left: 'CloudflareSub 轻量化优选 IP 订阅器',
      link: 'https://github.com/cfy1126/cloudflaresub',
      right: '2026年',
      children: [
        {left: '基于 *Cloudflare Workers* 的工具类项目，支持节点解析、优选地址处理、短链生成和订阅导出'},
        {left: '支持 Raw、Clash、Surge 多种订阅格式，使用 Workers KV 存储生成结果并设置 TTL'},
        {left: '提供前端表单页面，支持粘贴节点、生成订阅链接、一键复制和二维码展示'},
      ]
    },
    {
      left: 'Vue Router 路由守卫演示项目',
      link: 'https://github.com/cfy1126/RouteWarden',
      right: '2026年',
      children: [
        {left: '使用 *Vue 3* + *Vue Router 4* + *Vite* 构建路由守卫学习与演示项目'},
        {left: '覆盖全局前置守卫、路由独享守卫、组件内守卫、登录拦截、权限控制和离开确认等场景'},
        {left: '项目同时整理了路由守卫执行顺序和面试要点，便于复习和知识沉淀'},
      ]
    },
    {
      left: 'PiniaCraft 状态管理练习项目',
      link: 'https://github.com/cfy1126/PiniaCraft',
      right: '2026年',
      children: [
        {left: '基于 *Vue 3* + *Pinia* + *Vite* 的状态管理实践项目'},
        {left: '使用 *pinia-plugin-persistedstate* 做状态持久化，练习模块化状态组织和页面状态同步'},
      ]
    },
    {
      left: 'Tickly Todo 任务管理练习项目',
      link: 'https://github.com/cfy1126/tickly-todo',
      right: '2026年',
      children: [
        {left: '基于 *Vue 3* + *Element Plus* + *Vite* 的任务管理页面练习项目'},
        {left: '练习列表展示、任务操作、组件拆分、代码格式化和 ESLint 规范处理'},
      ]
    },
    {
      left: '个人简历展示系统',
      link: 'https://github.com/cfy1126/resume',
      right: '2025年11月',
      children: [
        {left: '基于 *Vue.js* + *SCSS* 构建的个人简历展示系统'},
        {left: '使用 *Flexbox* 实现响应式布局，通过 *info.js* 统一管理简历数据，支持文本渲染和外部链接跳转'},
        {left: '可复用的 *List* 组件处理不同类型的列表展示，配置 *GitHub Pages* 一键部署'},
      ]
    },
    {
      left: '仿亚马逊商城平台',
      link: 'supersimple.dev/projects/ecommerce',
      right: '2024年10月',
      children: [
        {left: '使用 *Vue.js* + *Express* + *SQLite* + *Sequelize ORM* 构建全栈电商平台，实现商品管理、购物车、结算、订单管理完整流程'},
        {left: '使用 *Pinia* 实现全局状态管理，开发商品动态加载、购物车数据持久化、订单清空等核心功能'},
      ]
    },
  ],
}
