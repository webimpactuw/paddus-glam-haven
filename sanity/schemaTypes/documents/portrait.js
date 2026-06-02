export default {
    name: "portrait",
    title: "Portraits",
    type: "document",
    fields: [
        {
            name: "homePortrait",
            title: "Home Portrait",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "aboutPortrait",
            title: "About Us Portrait",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }
    ]
}