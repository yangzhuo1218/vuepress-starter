module.exports = {
  title: '行走的程序员',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/foo/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          {
            text: 'Chinese',
            items: [
              { text: 'Chinese1', link: '/language/japanese1/' },
              { text: 'Chinese2', link: '/language/japanese2/' },
            ],
          },
          { text: 'Japanese', items: [
            { text: 'Chinese3', link: '/language/japanese3/' },
            { text: 'Chinese4', link: '/language/japanese4/' },
          ], },
        ],
      },
    ],
    sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'foo1',  /* /foo/one.html */
      ],
      // fallback
      '/': [
        '',        /* / */
        'about'    /* /about.html */
      ]
    }
  },
};
