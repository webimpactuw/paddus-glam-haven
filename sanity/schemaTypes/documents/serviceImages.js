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
            name: "bundle",
            title: "Bundle Image",
            type: "image",
            options: {
                hotspot: true,
            },
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
    ],
}