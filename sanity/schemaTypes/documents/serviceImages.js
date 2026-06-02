export default {
    name: "serviceImages",
    title: "Pricing Images",
    type: "document",
    fields: [
        {
            name: "pricing",
            title: "Price Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "bundle",
            title: "Bundle Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ],
}