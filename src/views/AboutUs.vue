<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import heroBg from '../assets/hero/image1.png'
</script>

<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Hero -->
    <section class="relative w-full h-175 bg-cover bg-center bg-no-repeat flex items-center justify-center -top-20"
      :style="{ backgroundImage: `url(${heroBg})` }">
      <div class="absolute inset-0 bg-[#444444]/80"></div>

      <div class="relative z-10 container mx-auto px-6 text-white max-w-5xl">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl leading-tight text-center md:text-left ">
          Your Trusted <br>Builder
        </h1>

        <!-- Sub Text -->
        <p class="text-base pr-7 pt-5 font-light opacity-70 text-center md:text-justify">
          <span class="text-[#0398dc] font-black">PT. SAZAYAN KONSTRUKSI MEGAH</span> telah menjadi mitra andal dalam
          menyediakan solusi pembangunan sipil dan arsitektur profesional. Dengan landasan komitmen pada kualitas,
          disiplin, dan dedikasi penuh, kami menghadirkan hasil kerja yang dirancang untuk mencapai kepuasan maksimal
          setiap klien—baik dari sisi kekuatan, manajemen proyek, maupun efisiensi. Didukung oleh tim tenaga ahli yang
          berpengalaman, kami terus berupaya menjadi pelopor pembangunan yang inovatif, berkelanjutan, dan ramah
          lingkungan bagi masa depan.
        </p>
      </div>
    </section>

    <!-- Core Values -->
    <section class="bg-white py-20 flex justify-center">
      <div class="w-full max-w-7xl px-6">

        <div class="grid md:grid-cols-3 md:gap-8 md:items-center">

          <div class="mb-8 md:mb-0 md:place-self-start">
            <div class="bg-white p-8 rounded-lg shadow-xl w-full">
              <h2 class="text-3xl md:text-4xl font-bold text-[#002a66] pb-3 text-center md:text-left">
                Visi
              </h2>
              <p class="font-light text-gray-700 leading-relaxed text-justify md:text-left">
                <strong class="text-[#002a66]">PT Digital Solusi Kreasi</strong>
                Kami membangun secara profesional dengan dedikasi dan disiplin tinggi untuk menghadirkan hasil yang
                memuaskan dan bernilai jangka panjang.
              </p>
            </div>
          </div>

          <div class="relative my-8 md:my-0 flex justify-center items-center">
            <div class="absolute bg-[#bfa448] opacity-80 rounded-lg"
              style="width: 100%; height: 100%; top: 1%; left: -10%; transform: translate(15px, 15px); z-index: 1;">
            </div>
            <img src="@/assets/AboutUs/image5.png" alt="Visi dan Misi Perusahaan"
              class="rounded-lg shadow-2xl max-w-full w-full h-auto z-0" />
          </div>

          <div class="mt-8 md:mt-0 md:place-self-end">
            <div class="bg-white p-8 rounded-lg shadow-xl w-full">
              <h2 class="text-3xl md:text-4xl font-bold text-[#002a66] pb-3 text-center md:text-left">
                Misi
              </h2>
              <p class=" space-y-3 font-light text-gray-700 list-disc list-inside text-justify md:text-left">
                Kami berkomitmen menghasilkan karya di bidang jasa konstruksi yang bermutu tinggi, berkualitas, dan
                diselesaikan tepat waktu. kami senantiasa memberikan pelayanan terbaik demi terciptanya pembangunan yang
                berkelanjutan dan memuaskan bagi semua pihak
              </p>
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