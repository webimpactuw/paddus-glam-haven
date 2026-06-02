export default {
    name: "appointment",
    title: "Appointments",
    type: "document",
    fields: [
        {
            name: "day",
            title: "Day",
            type: "date",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "times",
            title: "Times",
            type: 'array',
            of: [
                {
                    type: 'string',
                    validation: Rule => Rule.regex(
                        /^(0?[1-9]|1[0-2]):00 (AM|PM)$/
                    )
                }
            ],
            validation: (Rule) => Rule.required(),
        }
    ]
}