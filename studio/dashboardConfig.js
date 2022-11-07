export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '636947fc8aa33a0f73a43bd1',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-bji4zegq',
                  apiId: '48d9c39a-50d3-4bb1-be9b-02fc9eadf5a0'
                },
                {
                  buildHookId: '636947fdd25604116b0013cc',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-dp5qxv7o',
                  apiId: 'df1ff368-9cbe-48ee-a939-62637fd035ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aviavia/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-dp5qxv7o.netlify.app', category: 'apps'}
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
