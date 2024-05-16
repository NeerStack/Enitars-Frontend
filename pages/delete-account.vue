<template>
    <main>

        <div class="container-xxl position-relative p-0" id="#">
            <div class="container-xxl bg-primary hero-header">
                <div class="container px-lg-5">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 text-center text-lg-start">
                            <h1 class="text-white mb-4 animated slideInDown">Farewell, but Not Forgotten</h1>
                            <p class="text-white pb-3 animated slideInDown">We're sorry to see you go. Account deletion is a significant step, and we understand it's not a decision made lightly. Before you proceed, allow us to ensure you have all the information you need.</p>
                            <!-- <NuxtLink class="rounded-pill animated slideInLeft" @click="andriodCheck"><img height="60" :src="PlayStoreImg"> </NuxtLink> -->
                            <!-- <a href="" class="btn btn-light py-sm-4 px-sm-5 rounded-pill animated slideInRight">Contact Us</a> -->
                        </div>
                        <div class="col-lg-6 text-center text-lg-start">
                            <img class="img-fluid animated zoomIn" :src="Hero" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Start -->
        <div class="container-xxl py-5" id="#account-deletion">
            <div class="container py-5 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Request Account Deletion<span></span></p>
                    <h1 class="text-center mb-3">Request Account Deletion</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="wow fadeInUp" data-wow-delay="0.3s">
                            <p class="text-center mb-4">Sorry to see you go 😢, If you're sure you want to delete your account, please confirm below. Once your account is deleted, all your data will be permanently removed from our system.</p>
                            <form @submit.prevent>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input v-model="name" type="text" class="form-control" id="name" placeholder="Your Name">
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input v-model="email" type="email" class="form-control" id="email" placeholder="Your Email">
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <!-- <div class="col-12">
                                        <div class="form-floating">
                                            <input v-model="subject" type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div> -->
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea v-model="message" class="form-control" placeholder="We value your feedback. Understanding why you're leaving helps us improve our service for others. If you're comfortable, please let us know your reason for deletion." id="message" style="height: 150px"></textarea>
                                            <label for="message">Why do you decide to leave us? (OPTIONAL)</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit" @click="sendContact">Request account deletion</button>
                                    </div>
                                </div>
                            </form>
                            <div class="col-lg-12 mb-4 mt-2 text-center signuas" v-if="Loading">
                                <span class="spinner-border spinner-border-sm"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Contact End -->
    </main>
</template>
<script setup>
    import PlayStoreImg from '~/assets/img/play-store-badge.svg'
    import AboutImg from '~/assets/img/about.svg';
    import Hero from '~/assets/img/delete-account.svg';
    import Swal from 'sweetalert2'

    definePageMeta({
        layout: 'external',
    })

    const name = ref("");
    const email = ref("");
    const subject = ref("Request for account deletion");
    const message = ref("");
    const Loading = ref(false)

    const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
})

    const sendContact = async() => {
        Loading.value = true
        const body = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }
        const res = await fetch('https://meshenitarsback.enitars.com/contact', {
            method: "POST",
            headers:{
                "Content-type": "application/json",
            },
            body: JSON.stringify(body)
        })

        const data = await res.json()

        if(data.status){
            Loading.value = false
            Toast.fire({
                icon: "success",
                title: "Request sent successfully"
            })
            name.value = ""
            email.value = ""
            subject.value = ""
            message.value = ""
        }else{
            Loading.value = false
            Toast.fire({
                icon: "error",
                title: "Unable to send request, please try again"
            })
        }
    }

    const setdata = {
    title: "Enitars | Account Deletion",
    }
    useHead({
        title: computed(() => setdata.title)
    })

</script>
