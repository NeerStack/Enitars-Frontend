<template>
    <div>
        <!-- Footer Start -->
        <div class="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-4 col-lg-4">
                        <div class="footer-widget widget-about">
                            <NuxtLink href="#"><img class="footer-logo" :src="Enitars_White" alt="footer logo" height="200"></NuxtLink>
                        </div>
                        <div class="d-flex pt-2">
                            <NuxtLink class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></NuxtLink>
                            <NuxtLink class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></NuxtLink>
                            <NuxtLink class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></NuxtLink>
                            <NuxtLink class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></NuxtLink>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <p class="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i class="fa fa-map-marker-alt me-3"></i>19, church street, sango ota, ogun state, Nigeria</p>
                        <p><i class="fa fa-phone-alt me-3"></i>+2348130972930</p>
                        <p><i class="fa fa-envelope me-3"></i>support@enitars.com</p>
                        <!-- <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div> -->
                    </div>
                    <div class="col-md-4 col-lg-4">
                        <p class="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        <NuxtLink class="btn btn-link" href="#about">About Us</NuxtLink>
                        <NuxtLink class="btn btn-link" href="#contact-us">Contact Us</NuxtLink>
                        <!-- <a class="btn btn-link" href="">Privacy Policy</a>
                        <a class="btn btn-link" href="">Terms & Condition</a> -->
                        <!-- <a class="btn btn-link" href="">Career</a> -->
                    </div>
                    <!-- <div class="col-md-6 col-lg-3">
                        <p class="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div class="row g-2">
                            <div class="col-4">
                                <img class="img-fluid" :src="Port1" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" :src="Port2" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" :src="Port3" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" :src="Port4" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" :src="Port5" alt="Image">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" :src="Port6" alt="Image">
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="col-md-6 col-lg-4">
                        <p class="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Sign up for our newsletter to stay up to date with amazing tech news!</p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style="height: 48px;">
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="container px-lg-5">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <NuxtLink class="border-bottom" href="#">Enitars {{ new Date().getFullYear() }}</NuxtLink>. All Rights Reserved.
	                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <NuxtLink href="#">Home</NuxtLink>
                                <NuxtLink >Cookies</NuxtLink>
                                <NuxtLink >Help</NuxtLink>
                                <NuxtLink >FAQs</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-secondary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
</template>
<script setup>
    import Enitars_White from '~/assets/img/enitar_white.png'
     import Port1 from '~/assets/img/portfolio-1.jpg';
    import Port2 from '~/assets/img/portfolio-2.jpg';
    import Port3 from '~/assets/img/portfolio-3.jpg';
    import Port4 from '~/assets/img/portfolio-4.jpg';
    import Port5 from '~/assets/img/portfolio-5.jpg';
    import Port6 from '~/assets/img/portfolio-6.jpg';
</script>
