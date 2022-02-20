export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '62125c01606d7303a56e803b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-bd97qcj6',
                  apiId: '97abc9fc-554e-491a-97b1-1f2fa7d6cbab'
                },
                {
                  buildHookId: '62125c0104ce54fe3307f61b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-41ii9epp',
                  apiId: '568dd442-e286-49d9-92cf-539836d2b750'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SteveALee/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-41ii9epp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
