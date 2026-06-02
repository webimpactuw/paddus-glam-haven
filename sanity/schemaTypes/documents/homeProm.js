export default {
    name: "homeProm",
    title: "Prom",
    type: "document",
    fields: [
        {
            name: "one",
            title: "Prom 1",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "two",
            title: "Prom 2",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "three",
            title: "Prom 3",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "four",
            title: "Prom 4",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ]
}