export default {
    name: "testamonial",
    title: "Testamonial",
    type: "document",
    fields: [
        {
            name: "clientName",
            title: "name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "clientComment",
            title: "comment",
            type: "text",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "clientAvatar",
            title: "avatar",
            type: "image",
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true,
            },
        },
    ],
}