export default {
    name: "service",
    title: "Service",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Service Name",
            type: "text",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                accept: '.svg'
            },
            validation: Rule => Rule.custom(value => {
                if (!value || !value.asset || !value.asset._ref) {
                return true;
                }
                
                const assetRef = value.asset._ref;
                const isSvg = assetRef.endsWith('-svg');
                
                return isSvg ? true : 'Only SVG files are allowed.';
            })
        }
    ]
}