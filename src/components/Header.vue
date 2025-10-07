<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { RouterLink } from 'vue-router'
import skmLogo from '@/assets/header/imageLogo.webp'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const isDesktop = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const checkScreenSize = () => {
  isDesktop.value = window.innerWidth >= 768
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', checkScreenSize)
  checkScreenSize()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', checkScreenSize)
})

// Background header
const headerBgClass = computed(() => {
  if (!isDesktop.value) {
    return 'bg-[#99833a]'
  } else {
    return isScrolled.value ? 'bg-[#99833a]' : 'bg-[#99833a]/50'
  }
})

// Warna teks navigation
const navTextClass = computed(() => {
  if (!isDesktop.value) {
    return 'text-white'
  } else {
    return isScrolled.value ? 'text-[#002A66] ' : 'text-[#002A66]'
  }
})
</script>

<template>
  <header :class="[
    'sticky top-0 w-full flex flex-col shadow-md z-50 transition-all duration-700 ease-in-out overflow-hidden',
    headerBgClass
  ]">
    <div class="w-full h-20 flex items-center justify-between px-6 py-4">
      <RouterLink to="/" class="md:pl-40">
        <img :src="skmLogo" alt="DSK Logo" class="h-auto m-auto w-75" />
      </RouterLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex gap-8 pr-40 font-extrabold"
           :class="navTextClass">
        <RouterLink to="/" class="hover:text-[#013d91] transition-colors">Home</RouterLink>
        <RouterLink to="/about" class="hover:text-[#013d91] transition-colors">About Us</RouterLink>
        <RouterLink to="/solutions" class="hover:text-[#013d91] transition-colors">Solutions</RouterLink>
        <RouterLink to="/contact" class="hover:text-[#013d91] transition-colors">Contact Us</RouterLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-3xl focus:outline-none"
              :class="navTextClass"
              @click="toggleMenu">
        ☰
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition name="slide-fade">
      <div v-show="isMobileMenuOpen"
           class="md:hidden bg-[#99833a] text-white overflow-hidden transition-all duration-300 ease-in-out"
           :style="{ maxHeight: isMobileMenuOpen ? '20rem' : '0' }">
        <div class="px-6 py-4 flex flex-col gap-4">
          <RouterLink to="/" class="hover:text-blue-300 transition-colors" @click="toggleMenu">Home</RouterLink>
          <RouterLink to="/about" class="hover:text-blue-300 transition-colors" @click="toggleMenu">About Us</RouterLink>
          <RouterLink to="/solutions" class="hover:text-blue-300 transition-colors" @click="toggleMenu">Solutions</RouterLink>
          <RouterLink to="/contact" class="hover:text-blue-300 transition-colors" @click="toggleMenu">Contact Us</RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>
