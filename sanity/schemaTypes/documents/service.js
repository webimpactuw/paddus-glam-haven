export default {
    name: "serviceCard",
    title: "Service",
    type: "document",
    fields: [
        {
            name: "serviceName",
            title: "Service Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "price",
            title: "Price",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "route",
            title: "URL",
            type: "slug",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "key",
            title: "ID (1-8)",
            type: "number",
            validation: (Rule) => Rule.required(),
        },
    ],
}