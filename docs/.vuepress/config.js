module.exports = {
    title: 'biyingyue的学习笔记', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '前端记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', 
            { rel: 'icon', href: '/orange.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],  
    ],
    themeConfig:{//默认主题的相关配置
        logo: '/orange.png',//导航栏顶端左侧图标
        nav: [
                  { text: '首页', link: '/'}, // 直接跳转，/为不添加路由，跳转到首页
                  { text: 'Github', link: 'https://github.com/dairj', target: '_blank' }
                ],
        sidebar: [
            ['/pages/about/', '介绍'],
            {
                title: '框架',
                path: '/pages/framework/',
                collapsable: false,
                children: [
                    '/pages/framework/js',
                    '/pages/framework/angular'

                ]
            },
        ]
    }
}

//     左侧侧边栏
// sidebar: [
//           ['/pages/about/', '介绍'],
//           {
//             title: '框架',
//             path: '/pages/framework/',
//             collapsable: false,
//             children: [
//               {
//                 title: 'Angular',
//                 path: '/pages/framework/angular',
//                 collapsable: false,
//                 children: [
//                   '/pages/framework/angular/angular'
//                 ]
//               },
//               {
//                 title: 'React',
//                 path: '/pages/framework/react/',
//                 collapsable: false,
//               },
//               {
//                 title: 'Vue',
//                 path: '/pages/framework/vue/',
//                 collapsable: false,
//               }
//             ]
//           },
//           {
//             title: 'leetcode',
//             path: '/pages/leetcode',
//             collapsable: false,
//             children: [
//               '/pages/leetcode/leetcode'
//             ]
//           }
//         ]
