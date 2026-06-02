export default {
    name: "homeFeatured",
    title: "Featured",
    type: "document",
    fields: [
        {
            name: "one",
            title: "Featured 1",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "two",
            title: "Featured 2",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "three",
            title: "Featured 3",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "four",
            title: "Featured 4",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ]
}