export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        }
        
    ],
    orderings: [
        {
          title: 'Order',
          name: 'orderAsc',
          by: [
            {
              field: 'order',
              direction: 'asc'
            }
          ]
        },
        {
          title: 'Reverse Order',
          name: 'orderDesc',
          by: [
            {
              field: 'order',
              direction: 'desc'
            }
          ]
        }
    ]
}