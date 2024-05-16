<template>
        <!-- Navbar & Hero Start -->
        <div class="container-xxl bg-primary position-relative p-0">
            <nav class="navbar navbar-expand-lg  navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <NuxtLink href="/" class="navbar-brand p-0">
                    <!-- <h1 class="m-0">Enitars</h1> -->
                    <img :src="logo ? Enitars : Enitars_White" alt="Logo">
                    <!-- <img v-else :src="Enitars_White" alt="Logo"> -->
                </NuxtLink>
                <button class="navbar-toggler" style="border: 2px solid #fff;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars bg-white"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto py-0">
                        <NuxtLink href="/" class="nav-item nav-link" >Home</NuxtLink>
                        <NuxtLink href="/#about" class="nav-item nav-link">About</NuxtLink>
                        <!-- <a href="/service" class="nav-item nav-link">Service</a>
                        <a href="/project" class="nav-item nav-link">Project</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div> -->
                        <NuxtLink href="/#contact-us" class="nav-item nav-link" >Contact</NuxtLink>
                    </div>
                    <!-- <a href="" class="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a> -->
                </div>
            </nav>

        </div>
        <!-- Navbar & Hero End -->
</template>
<script setup>
    import Enitars from '~/assets/img/enitar_colored.png'
    import Enitars_White from '~/assets/img/enitar_white.png'
    // import { useRoute } from 'nuxt/app';

    // const route = useRoute()

    let logo = ref(false)
    // let path = ref(route.path)

    function handleScroll() {
    // console.log(window.scrollY)
    if(process.client && window.scrollY > 20 ){
        logo.value = true
    }else{
        logo.value = false
    }

  }

  onBeforeMount(()=>{
    window.addEventListener('scroll', handleScroll)

  })

  onBeforeUnmount(()=>{
    window.removeEventListener('scroll', handleScroll);

  })
</script>
