export default {
    name: "homePhotoShoot",
    title: "PhotoShoot",
    type: "document",
    fields: [
        {
            name: "one",
            title: "PhotoShoot 1",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "two",
            title: "PhotoShoot 2",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "three",
            title: "PhotoShoot 3",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "four",
            title: "PhotoShoot 4",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ]
}