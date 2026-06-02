export default {
    name: "homePhotoShoot",
    title: "PhotoShoot",
    type: "document",
    fields: [
        {
            name: "one",
            title: "PhotoShoot 1",
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
            title: "PhotoShoot 2",
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
            name: "three",
            title: "PhotoShoot 3",
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
            title: "PhotoShoot 4",
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