<template>
  <footer class="bg-gradient-to-b from-[#0144a1] to-[#013379] text-white mt-10">
    <div class="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

      <div>
        <h2 class="font-bold text-xl mb-4">PT. SAZAYAN KONSTRUKSI MEGAH</h2>
        <div class="space-y-2 text-gray-300">
          <p class="font-semibold">Office:</p>
          <p>Jl. Dahlia III Blok F3 No.24, RT.003/RW.015</p>
          <p>Pengasinan, Kec. Rawalumbu, Kota Bekasi,</p>
          <p>Jawa Barat 17115</p>
        </div>
        <div class="mt-4 space-y-2">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@digitalsolusikreasi.com&su=&body="
            target="_blank" class="flex items-center hover:text-gray-300">
            <span class="mr-2">📧</span> Sales@sazayankonstruksimegah.com
          </a>
          <a href="tel:+628569002429" class="flex items-center hover:text-gray-300">
            <span class="mr-2">📞</span> 0819-1227-0992
          </a>
        </div>
      </div>

      <div>
        <h2 class="font-bold text-xl mb-4">Quick Links</h2>
        <ul class="space-y-2 text-gray-300">
          <li>
            <RouterLink to="/" class="hover:text-white">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:text-white">About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/solutions" class="hover:text-white">Solutions</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:text-white">Contact</RouterLink>
          </li>
        </ul>
      </div>

<div>
  <h2 class="font-bold text-xl mb-4">Our Company Profile</h2>
  <div class="flex space-x-4">
    <a 
      href="https://sazayankonstruksimegah.com/file/ComproSKM.pdf" 
      download="Brosur-Produk-Kreatif-Digital.pdf"
      class="px-3 py-2 bg-[#0398dc] text-white font-semibold rounded-2xl shadow-md hover:bg-blue-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg inline-block"
    >
      ⬇️ Download
    </a>
  </div>
</div>

    </div>
    <div class="text-center py-4">
      <p class="text-sm text-gray-300">© 2025 PT. SAZAYAN KONSTRUKSI MEGAH. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>