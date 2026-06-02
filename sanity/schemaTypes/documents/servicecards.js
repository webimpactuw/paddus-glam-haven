export default {
    name: "servicecards",
    title: "Service Cards",
    type: "document",
    fields: [
        {
            name: "OneonOne",
            title: "One on One Image",
            type: "image",
            options: {
                accept: '.svg'
            },
            validation: Rule => Rule.required().custom(value => {
                if (!value || !value.asset || !value.asset._ref) {
                return true;
                }
                
                const assetRef = value.asset._ref;
                const isSvg = assetRef.endsWith('-svg');
                
                return isSvg ? true : 'Only SVG files are allowed.';
            })
        },
        {
            name: "group",
            title: "Group Tutorial Image",
            type: "image",
            options: {
                accept: '.svg'
            },
            validation: Rule => Rule.required().custom(value => {
                if (!value || !value.asset || !value.asset._ref) {
                return true;
                }
                
                const assetRef = value.asset._ref;
                const isSvg = assetRef.endsWith('-svg');
                
                return isSvg ? true : 'Only SVG files are allowed.';
            })
        }
    ],
}