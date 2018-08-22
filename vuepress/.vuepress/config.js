module.exports = {
  title: 'MySQL',
  description: 'Experience from mysql world',
  base: '/EXPA--MySQL/',
  dest: '../docs',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      '/introduction.md',
      '/basic.md',
      '/update.md',
      '/delete.md',
      '/console.md',
      '/create-tables.md',
      '/create-procedures.md',
      '/create-triggers.md',
      {
        title: 'Insert',
        collapsable: true,
        children: [
          '/insert/intro.md',
          '/insert/insert-select.md',
        ]
      },
      {
        title: 'Select',
        collapsable: true,
        children: [
          '/select/intro.md',
          '/select/select-into.md',
          '/select/order-by.md',
          '/select/group-by-having.md',
          '/select/where.md',
          '/select/join.md',
          '/select/metasymbols.md',
          '/select/concat-adding.md',
          '/select/podzaprosi.md',
          '/select/union.md',
          '/select/obedinenie.md',
        ]
      },
      {
        title: 'Select Functions',
        collapsable: true,
        children: [
          '/select/functions/upper.md',
          '/select/functions/math-fns.md',
        ]
      },
      {
        title: 'Advanced',
        collapsable: true,
        children: [
          '/advanced/cursor.md',
          '/advanced/index-db.md',
          '/advanced/procedure.md',
          '/advanced/transaction.md',
          '/advanced/triggers.md',
          '/advanced/view.md',
        ]
      },
    ]
  }
}