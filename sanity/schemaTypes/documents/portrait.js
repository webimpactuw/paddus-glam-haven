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
            name: "aboutPortrait",
            title: "About Us Portrait",
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
        }
    ]
}