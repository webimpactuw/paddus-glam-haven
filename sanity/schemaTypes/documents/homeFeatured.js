export default {
    name: "homeFeatured",
    title: "Featured",
    type: "document",
    fields: [
        {
            name: "one",
            title: "Featured 1",
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
            name: "two",
            title: "Featured 2",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "three",
            title: "Featured 3",
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
            name: "four",
            title: "Featured 4",
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
    ]
}