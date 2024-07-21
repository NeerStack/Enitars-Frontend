// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // modules:[
  //   'nuxt-compress'
  // ],
  // devtools: { enabled: true },
  css:[
    '~/assets/lib/animate/animate.min.css', '~/assets/lib/owlcarousel/assets/owl.carousel.min.css', '~/assets/lib/lightbox/css/lightbox.min.css', '~/assets/css/bootstrap.min.css', '~/assets/css/style.css'
  ],

  app:{
    head:{
      // __dangerouslyDisableSanitizers: ['script', 'link'],
      link:[
        // {href:"~/assets/img/favicon.ico", rel:"icon"},
        {rel:"preconnect", href:"https://fonts.googleapis.com"},
        {rel:"preconnect", href:"https://fonts.gstatic.com", crossorigin: ""},
        {href:"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&family=Jost:wght@500;600;700&display=swap", rel:"stylesheet"},
        {href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css", rel:"stylesheet"},
        {href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css", rel:"stylesheet"},

      ],
      meta:[
        {charset:"utf-8"},
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: "IE=edge"
        },
        {
          name: 'description',
          content: 'AI Tools Service website'
      },
      {
          property: "og:title",
          content: "Enitars"
        },
        {
          property: "og:site_name",
          content: "Enitars"
        },
        {
          property: "og:url",
          content: "https://enitars.com"
        },
        {
          property: "og:type",
          content: "website"
        },
        // {
        //   property: "og:image",
        //   // itemProp: "image",
        //   content: "https://enitars.com/og.png"
        // },
        {
          property: "og:locale",
          content: "en:GB"
        },
        // {
        //   property: "og:image:width",
        //   content: "1200"
        // },
        // {
        //   property: "og:image:height",
        //   content: "600"
        // },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:image:alt",
          content: "Enitars"
        },
        {
          name: "twitter:title",
          content: "Enitars"
        },
        {
          name: "twitter:description",
          content: "Ai Tools Service website"
        }
      ],
      script:[
        {src:"https://code.jquery.com/jquery-3.4.1.min.js", defer: true,
        type: "text/javascript",},
        {src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",defer: true,
        type: "text/javascript",},
        {src:"lib/wow/wow.min.js", defer: true,
        type: "text/javascript",},
        {src:"lib/easing/easing.min.js", defer: true,
        type: "text/javascript",},
        {src:"lib/waypoints/waypoints.min.js", defer: true,
        type: "text/javascript",},
        {src:"lib/counterup/counterup.min.js", defer: true,
        type: "text/javascript",},
        {src:"lib/owlcarousel/owl.carousel.min.js", defer: true,
        type: "text/javascript",},
        {src:"lib/isotope/isotope.pkgd.min.js", defer: true,
        type: "text/javascript",},
        {src:"lib/lightbox/js/lightbox.min.js", defer: true,
        type: "text/javascript",},
        {src:"js/main.js", defer: true,
        type: "text/javascript",}
      ]
    }
},

  // vite:{
  //   plugins:[
  //       Icons({
  //           autoInstall: true
  //       })
  //   ]
  // },
  ssr: false,

  compatibilityDate: "2024-07-21",
})