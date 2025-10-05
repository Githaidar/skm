<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import heroBg from '../assets/hero/ServiceHero.webp'
</script>

<template>
  <div>
    <!-- Header -->
    <Header />

    <!-- Hero -->
    <section class="relative w-full flex flex-col md:flex-row-reverse items-center justify-between -top-20">
      <!-- Gambar -->
      <div class="relative w-full md:w-3/5">
        <img src="../assets/hero/image4.png" alt="Hero" class="w-full h-220 object-cover rounded-1xl" />

        <!-- Overlay layer khusus mobile -->
        <div class="absolute inset-0 bg-[#444444]/90 rounded-3xl md:hidden"></div>

        <!-- Overlay text (mobile) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white md:hidden">
         <h1 class="text-4xl md:text-6xl font-bold text-[#0144a1] mb-6 leading-tight">
          “Setiap proyek adalah amanah, dan kami wujudkan dengan profesionalisme kerja yang terukur, rapi, dan bertanggung jawab.”
        </h1>
        </div>
      </div>

      <!-- Text + Button (desktop) -->
      <div class="hidden md:flex w-full md:w-2/5 flex-col items-start text-left px-6 md:px-12">
        <h1 class="text-4xl md:text-6xl font-bold text-[#0144a1] mb-6 leading-tight">
          “Setiap proyek adalah amanah, dan kami wujudkan dengan profesionalisme kerja yang terukur, rapi, dan bertanggung jawab.”
        </h1>
      </div>
    </section>

    <!-- service card -->
    <section class="relative -top-20 py-10">
      <div class="mx-auto flex flex-col items-center px-6">
        <h2 class="text-3xl font-bold pb-12 text-gray-900 text-center">
          Our <span class="text-[#0398dc]">Signature </span> Service
        </h2>

        <div class="grid w-full md:grid-cols-3 gap-8 justify-items-center max-w-6xl">

          <div
            class="bg-[#e6eaf0] text-[#002a66] rounded-xl shadow-lg border-2 border-[#b0bdd0] hover:bg-[#d9dfe8] hover:border-[#b0bdd0] hover:scale-105 transform transition-all duration-300 ease-in-out group block cursor-pointer max-w-sm flex flex-col">

            <div class="flex-1">
              <h3
                class="text-3xl pb-3 pt-1 font-extrabold mt-4 group-hover:text-gray-900 transition-colors text-center">
                Perencanaan
              </h3>
              <p class=" px-2 text-justify">
                Tahap perencanaan kami dimulai dengan diskusi intensif bersama klien untuk memahami kebutuhan secara menyeluruh. Dari sana, kami menyusun lingkup pekerjaan yang tepat, dengan biaya dan waktu pelaksanaan yang dirancang seefektif dan seefisien mungkin, demi memastikan proyek berjalan lancar dan hasil yang memuaskan.
              </p>
            </div>

            <!-- Gambar akan selalu menempel di bawah -->
            <img src="@/assets/service-card/image1.png" alt="Core Values"
              class="w-full h-30 object-cover rounded-b-lg" />
          </div>

          <div
            class="bg-[#e6eaf0] text-[#002a66] rounded-xl shadow-lg border-2 border-[#b0bdd0] hover:bg-[#d9dfe8] hover:border-[#b0bdd0] hover:scale-105 transform transition-all duration-300 ease-in-out group block cursor-pointer max-w-sm flex flex-col">

            <div class="flex-1">
              <h3
                class="text-3xl pb-3 pt-1 font-extrabold mt-4 group-hover:text-gray-900 transition-colors text-center">
                Pelaksanaan
              </h3>
              <p class=" px-2 text-justify">
                Pada tahap pelaksanaan, kami mengedepankan profesionalisme dengan dukungan tenaga ahli berpengalaman serta penerapan standar kerja yang disiplin. Setiap detail pekerjaan dilakukan secara sistematis dan terkontrol untuk memastikan mutu, ketepatan waktu, serta efisiensi biaya.
              </p>
            </div>

            <!-- Gambar akan selalu menempel di bawah -->
            <img src="@/assets/service-card/image2.png" alt="Core Values"
              class="w-full h-30 object-cover rounded-b-lg" />
          </div>

          <div
            class="bg-[#e6eaf0] text-[#002a66] rounded-xl shadow-lg border-2 border-[#b0bdd0] hover:bg-[#d9dfe8] hover:border-[#b0bdd0] hover:scale-105 transform transition-all duration-300 ease-in-out group block cursor-pointer max-w-sm flex flex-col">

            <div class="flex-1">
              <h3
                class="text-3xl pb-3 pt-1 font-extrabold mt-4 group-hover:text-gray-900 transition-colors text-center">
                Pengawasan
              </h3>
              <p class=" px-2 text-justify">
                Pengawasan dilakukan secara menyeluruh dan berkelanjutan sepanjang proyek berlangsung. Kami memastikan setiap tahap pekerjaan sesuai dengan rencana, spesifikasi teknis, serta standar kualitas yang telah ditetapkan, sehingga hasil akhir dapat memberikan kepuasan maksimal bagi klien.
              </p>
            </div>

            <!-- Gambar akan selalu menempel di bawah -->
            <img src="@/assets/service-card/image3.png" alt="Core Values"
              class="w-full h-30 object-cover rounded-b-lg" />
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
