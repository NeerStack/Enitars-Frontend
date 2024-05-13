// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // modules:[
  //   '@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'bootstrap-vue/nuxt', 'nuxt-compress', '@nuxtjs/dotenv'
  // ],
  devtools: { enabled: true },
  css:[
    '~/assets/lib/animate/animate.min.css', '~/assets/lib/owlcarousel/assets/owl.carousel.min.css', '~/assets/lib/lightbox/css/lightbox.min.css', '~/assets/css/bootstrap.min.css', '~/assets/css/style.css'
  ],
  app:{
    head:{
      // __dangerouslyDisableSanitizers: ['script', 'link'],
      link:[
        {href:"~/assets/img/favicon.ico", rel:"icon"},
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
      ],
      script:[
        {src:"https://code.jquery.com/jquery-3.4.1.min.js"},
        {src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"},
        {src:"lib/wow/wow.min.js"},
        {src:"lib/easing/easing.min.js"},
        {src:"lib/waypoints/waypoints.min.js"},
        {src:"lib/counterup/counterup.min.js"},
        {src:"lib/owlcarousel/owl.carousel.min.js"},
        {src:"lib/isotope/isotope.pkgd.min.js"},
        {src:"lib/lightbox/js/lightbox.min.js"},
        {src:"js/main.js"}
      ]
    }
}
})
