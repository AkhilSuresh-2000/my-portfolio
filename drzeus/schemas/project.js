export default{
    name:"project",
    title:"Project",
    type:"document",
    fields:[
        {
            name:"title",
            type:"string",

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
        {
            name:"date",
            type:"datetime",
        },
        {
            name:"place",
            type:"string"
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:"description",
            type:"text",
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name:"projectType",
            title:"Project type",
            type:"string",
            options:{
                list:[

                {value: "personal", title:"Personal"},
                {value: "client", title:"Client"},
                {value: "school", title:"School"},
            ],
          },
        },
        {
            name: "link",
            type:"url",
        },
        {
            name:"tags",
            type:"array",
            of: [
                {
                    type: "string",
                },
            ],
            options:{
                layout:"tages",
            }
        }

    ],
    preview: {
        select: {
          title: 'title',
          author: 'author.name',
          media: 'mainImage',
        },
        prepare(selection) {
          const {author} = selection
          return Object.assign({}, selection, {
            subtitle: author && `by ${author}`,
          })
        },
      },
};