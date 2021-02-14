module.exports = {
    mode: 'universal',
    ssr: false,
    server: {
        port: 8080, // default: 3000
    },
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#1e297b'},
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/tailwind.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~plugins/ga.js', mode: 'client'}
    ],
    /*
    ** Nuxt.js dev-modules
    */
    devModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@aceforth/nuxt-optimized-images',
        '@nuxt/content',
        '@nuxtjs/sitemap',
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],
    optimizedImages: {
        optimizeImages: true
    },
    sitemap: {
        path: '/sitemap.xml',
        hostname: 'http://albertfoundation.com/',
        generate: true, // Enable me when using nuxt generate
        exclude: [],
        routes: []
    },
    render: {
        static: {
            setHeaders(res) {
                res.setHeader('X-Frame-Options', 'ALLOWALL')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Methods', 'GET')
                res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
            }
        }
    },

    /*
    ** Build configuration
    */
    build: {
        postcss: {
            plugins: {
                tailwindcss: './tailwind.config.js',
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}

