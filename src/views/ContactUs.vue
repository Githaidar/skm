<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import heroBg from '../assets/hero/image3.webp'
</script>

<template>
    <div>
        <!-- Header -->
        <Header class="bg-[#002A66]" />

        <!-- Hero -->
        <section class="relative w-full h-175 bg-cover bg-center bg-no-repeat flex items-center justify-center -top-20"
            :style="{ backgroundImage: `url(${heroBg})` }">
            <div class="absolute inset-0 bg-[#444444]/80"></div>

            <div class="relative z-10 container mx-auto px-6 text-white max-w-5xl">
                <h1 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl leading-tight text-center md:text-left ">
                    Let's Start a <br> Conversation
                </h1>

                <!-- Sub Text -->
                <p class="text-base pr-7 pt-5 font-light opacity-70 text-center md:text-justify">
                    Siap untuk memulai proyek Anda? Tim kami siap mendengarkan dan memberikan solusi konstruksi terbaik yang disesuaikan untuk Anda. Hubungi kami melalui email atau WhatsApp untuk konsultasi lebih lanjut!
                </p>

                <!-- Buttons: Email & WhatsApp -->
                <div class="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start pt-5">
                    <!-- Email Button -->
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@sazayankonstruksimegah.com&su=&body="
                        target="_blank"
                        class="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium text-center hover:bg-white/30 transition duration-300 ease-in-out">
                        📧 Contact via Email
                    </a>
                    
                    <!-- WhatsApp Button -->
                    <a href="https://wa.me/6281912270992?text=Hello%2C%20I'm%20interested%20in%20your%20services"
                        target="_blank"
                        class="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium text-center hover:bg-white/30 transition duration-300 ease-in-out">
                        💬 Chat on WhatsApp
                    </a>
                </div>
            </div>
        </section>

        <!-- Location Section (Full Width) -->
        <section class="w-full relative -top-10 m-auto">
            <h2 class="text-3xl font-bold pb-12 text-gray-900 text-center">
                From Our Desk to Your <span class="text-[#0144a1]">Success</span>
            </h2>
            <div class="w-full flex justify-center h-[350px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1674.2259326226767!2d107.01168908206695!3d-6.26585256348357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698e76b377f7b5%3A0xe4db025ec7bbbde5!2sJl.%20Dahlia%20III%20Blok%20F3%20No.24%2C%20RT.003%2FRW.015%2C%20Pengasinan%2C%20Kec.%20Rawalumbu%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017115!5e1!3m2!1sen!2sid!4v1759693164642!5m2!1sen!2sid" width="80%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        <!-- Contact Info Section -->
        <section class="w-full m-auto py-4">
            <div class="mx-auto px-6">
                <div class="flex flex-col lg:flex-row items-center justify-center md:gap-10">
                    <!-- Image (Centered) -->
                    <div class="h-auto w-auto flex pb-10 justify-center bg-white">
                        <img src="@/assets/icon/logo.webp" alt="PT Digital Solusi Kreasi Office"
                            class="pl-5 max-w-1/2 md:max-w-1/4 object-cover max-h-max" />
                    </div>

                    <!-- Contact Info (Centered & Not Too Wide) -->
                    <div
                        class="w-full lg:w-1/2 text-black max-w-md mx-auto text-center relative  md:top-0 md:text-left hidden">
                        <div class="space-y-5 text-lg leading-relaxed">
                            <div>
                                <span class="opacity-90">
                                    Jl. Dahlia III Blok F3 No.24, RT.003/RW.015,<br>
                                    Pengasinan, Kec. Rawalumbu, Kota Bekasi,<br>
                                    Jawa Barat 17115
                                </span>
                            </div>
                            <div>
                                <span class="font-semibold text-white">Alamat E-mail</span><br>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@sazayankonstruksimegah.com&su=&body="
                                    target="_blank" class="opacity-90 hover:opacity-100 transition">
                                    Sales@sazayankonstruksimegah.com
                                </a>
                            </div>
                            <div>
                                <span class="font-semibold text-white">No Telp</span><br>
                                <a href="tel:+6281912270992" class="opacity-90 hover:opacity-100 transition">
                                0819-1227-0992
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>