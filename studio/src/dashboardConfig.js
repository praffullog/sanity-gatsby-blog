export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffe01539c8ae200e5129e05',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ou6nugn7',
                  apiId: 'ec604b4f-2a71-4f0b-9127-c919d3dda22f'
                },
                {
                  buildHookId: '5ffe0153f1a1960cf2a7afd1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-c115banj',
                  apiId: '834fd82c-2f48-48f0-923f-1de1a9ecb8e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/praffullog/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog.praffulindirala.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
