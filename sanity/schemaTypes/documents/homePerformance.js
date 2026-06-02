export default {
    name: "homePerformance",
    title: "Performance",
    type: "document",
    fields: [
        {
            name: "one",
            title: "Performance 1",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "two",
            title: "Performance 2",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "three",
            title: "Performance 3",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "four",
            title: "Performance 4",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ]
}