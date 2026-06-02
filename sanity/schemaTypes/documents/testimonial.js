export default {
    name: "testamonial",
    title: "Testamonial",
    type: "document",
    fields: [
        {
            name: "clientComment",
            title: "comment",
            type: "text",
            validation: (Rule) => Rule.required(),
        },
    ],
}