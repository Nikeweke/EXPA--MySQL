module.exports = {
  title: 'Angular',
  description: 'Experience from angular world',
  base: '/EXPA--Angular/',
  dest: '../docs',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Basic',
        collapsable: true,
        children: [
          '/intro/angular-cli.md',
          '/intro/angular-project.md',
          '/intro/typescript.md',
        ]
      },
      {
        title: 'Insert',
        collapsable: true,
        children: [
          '/intro/angular-cli.md',
          '/intro/angular-project.md',
          '/intro/typescript.md',
        ]
      },
      {
        title: 'Select',
        collapsable: true,
        children: [
          '/intro/angular-cli.md',
          '/intro/angular-project.md',
          '/intro/typescript.md',
        ]
      },
      '/update.md',
      '/delete.md',
      '/console.md',
      {
        title: 'Advanced',
        collapsable: true,
        children: [
          '/intro/angular-cli.md',
          '/intro/angular-project.md',
          '/intro/typescript.md',
        ]
      },

    ]
  }
}