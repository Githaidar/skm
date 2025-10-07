<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <!-- Header -->
    <Header class="bg-[#002A66]" />

    <!-- Hero -->
    <section class="relative w-full flex flex-col md:flex-row items-center justify-between -top-20">
      <!-- Gambar -->
      <div class="relative w-full md:w-3/5">
        <img src="../assets/hero/image3.webp" alt="Hero" class="w-full md:h-full h-200 object-cover rounded-1xl" />

        <!-- Overlay layer khusus mobile -->
        <div class="absolute inset-0 bg-[#000f24]/80 rounded-2xl md:hidden"></div>

        <!-- Overlay text (mobile) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white md:hidden gap-3">
          <h1 class="text-3xl font-bold mb-4 drop-shadow-lg">
            Membangun Kepercayaan Melalui Kualitas
          </h1>
          <p class="text-base mb-6 drop-shadow">
            Didukung oleh manajemen terstruktur, tenaga ahli profesional, dan dedikasi penuh untuk hasil terbaik.
          </p>
          <RouterLink to="/solutions"
            class="px-6 py-3 bg-[#0144a1] text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-[#013580] transition duration-300 ease-in-out">
            Our Services
          </RouterLink>
        </div>
      </div>

      <!-- Text + Button (desktop) -->
      <div class="hidden md:flex w-full md:w-2/5 flex-col items-start text-left px-6 md:px-12 gap-3">
        <h1 class="text-4xl md:text-6xl font-bold text-[#0144a1] mb-6 leading-tight">
          Membangun Kepercayaan Melalui Kualitas
        </h1>
        <p class="text-base md:text-lg text-[#0144a1] mb-8">
          Didukung oleh manajemen terstruktur, tenaga ahli profesional, dan dedikasi penuh untuk hasil terbaik.
        </p>
        <RouterLink to="/solutions"
          class="px-6 py-3 bg-[#0144a1] text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-[#013580] transition duration-300 ease-in-out">
          Our Services
        </RouterLink>
      </div>
    </section>

    <!-- Core Values -->
    <section class="bg-white pb-20 flex justify-center">
      <div class="w-full max-w-7xl px-6 grid md:grid-cols-5 gap-12 md:gap-20 items-center">

        <div class="hidden md:flex md:col-span-2 relative justify-start items-center">
          <img src="@/assets/hero/image4.webp" alt="Core Values" class="rounded-lg shadow-lg max-w-full h-auto" />
          <div class="absolute bg-[#3A507F] md:bg-[#bfa448] opacity-80 rounded-lg"
            style="width: 100%; height: 95%; top: 10%; left: -15%; z-index: 1;"></div>
        </div>

        <div class="md:col-span-3 text-justify md:text-left">
          <h2 class="text-xl md:text-2xl font-bold text-[#0144a1] text-center pb-3 md:text-left">
            Fondasi Kokoh, Janji Terpercaya
          </h2>
          <p class="font-light text-gray-700 leading-relaxed pb-5">
            <strong class="text-[#0144a1]">PT. SAZAYAN KONSTRUKSI MEGAH</strong>
            adalah perusahaan yang bergerak di bidang proyek pembangunan sipil dan arsitektur. Dalam setiap kinerja, kami selalu mengutamakan kualitas, disiplin, serta manajemen kerja yang terstruktur, didukung oleh tenaga ahli yang profesional di bidangnya. Komitmen kami adalah menghadirkan hasil pekerjaan dengan kualitas tinggi demi tercapainya kepuasan maksimal bagi setiap mitra dan klien.
          </p>
          <p class="font-light text-gray-700 leading-relaxed mb-8">
           Seiring perkembangan era globalisasi, kami terus beradaptasi dengan kemajuan teknologi konstruksi dan memperhatikan dampak lingkungan. Kami berusaha menjadi pelopor pembangunan yang inovatif, berwawasan, serta ramah lingkungan. Atas setiap kepercayaan yang diberikan untuk menangani proyek, kami menjadikannya sebagai tanggung jawab besar yang diiringi dedikasi penuh. Kepercayaan tersebut adalah kebanggaan sekaligus motivasi kami untuk memberikan hasil yang memuaskan bagi semua pihak.
          </p>
        </div>
      </div>
    </section>
    <!-- <h2 class="text-3xl font-bold pb-12 text-gray-900 text-center">
      In <span class="text-[#0398dc]">Partnership With </span>
    </h2>

    <section class="bg-white pb-20 flex justify-center">
      <div class="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div class="flex justify-center">
          <img src="@/assets/AboutUs/LESMANA.webp" alt="Kartu Nama 1"
            class="rounded-lg shadow-lg max-w-full h-auto w-full md:w-auto" />
        </div>
        <div class="flex justify-center">
          <img src="@/assets/AboutUs/LTC.webp" alt="Kartu Nama 2"
            class="rounded-lg shadow-lg max-w-full h-auto w-full md:w-auto" />
        </div>
      </div>
    </section> -->

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
