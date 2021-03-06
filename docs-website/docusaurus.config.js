module.exports = {
    title: 'fiora',
    tagline: 'An interesting open source chat application',
    url: 'https://fiora.suisuijiang.com',
    baseUrl: '/fiora/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'yinxin630', // Usually your GitHub org/user name.
    projectName: 'fiora', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'fiora',
            logo: {
                alt: 'Logo',
                src: 'img/favicon.png',
            },
            items: [
                {
                    to: 'docs/getting-start',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'right',
                },
                {
                    href: 'https://github.com/yinxin630/fiora',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Overview',
                            to: '/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Feedback',
                            href:
                                'https://fiora.suisuijiang.com/invite/group/5adacdcfa109ce59da3e83d3',
                        },
                        {
                            label: 'Issues',
                            href: 'https://github.com/yinxin630/fiora/issues',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Author',
                            href: 'https://suisuijiang.com',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/yinxin630/fiora',
                        },
                    ],
                },
            ],
            copyright: `Copyright © 2015 - ${new Date().getFullYear()} developed by 碎碎酱`,
        },
        colorMode: {
            disableSwitch: true,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/yinxin630/fiora/edit/master/docs-website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            zh: {
                label: '简体中文',
            },
        },
    },
};
