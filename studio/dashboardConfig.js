export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6075c5cc02904d0b8f59b10e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-afioig78',
                  apiId: '0eef6b26-e008-4ee6-b7a4-4bba6d87d5ba'
                },
                {
                  buildHookId: '6075c5cc4287270aff627b5e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ecr5w3gh',
                  apiId: '480215cf-0fe1-4313-88db-ad2caa8ee32f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HamzaWaheed98/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ecr5w3gh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
