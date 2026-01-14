<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Carousel Images with Ken Burns Effect -->
    <div class="absolute inset-0">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        :class="[
          'absolute inset-0 transition-all duration-1000 ease-in-out',
          index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
        ]"
      >
        <img
          :src="slide.image"
          :alt="`Healthcare slide ${index + 1}`"
          :class="[
            'w-full h-full object-cover',
            index === currentSlide ? 'animate-kenburns' : ''
          ]"
        />
        <!-- Gradient Overlays -->
        <div class="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-gray-900/80"></div>
      </div>
    </div>

    <!-- Animated Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
      <div class="grid lg:grid-cols-1 gap-8 lg:gap-12 items-center">
        <!-- Main Content -->
        <div class="space-y-8 lg:space-y-12 text-center lg:text-left container mx-auto">
          <!-- Badge -->
          <div
            :class="[
              'inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-default border border-white/20',
              isTransitioning ? 'animate-fade-in-up delay-100' : ''
            ]"
          >
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium tracking-wide">Premium Healthcare Consulting</span>
          </div>

          <!-- Main Headline with Slide Content -->
          <div class="space-y-6">
            <div
              v-for="(slide, index) in slides"
              :key="slide.id"
              :class="[
                'transition-all duration-700',
                index === currentSlide
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute'
              ]"
            >
              <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-tight">
                {{ slide.title }}<br />
                <span class="font-medium text-gray-100">{{ slide.subtitle }}</span><br />
                <span class="relative inline-block">
                  <span class="font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    {{ slide.highlight }}
                  </span>
                  <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C80 3 160 2 240 6C300 8.5 360 10 398 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="text-white"/>
                  </svg>
                </span>
              </h1>
              
              <p class="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto lg:mx-0 mt-6">
                {{ slide.description }}
              </p>
            </div>
          </div>

          <!-- Features Grid -->
          <div
            :class="[
              'grid sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto lg:mx-0',
              isTransitioning ? 'animate-fade-in-up delay-300' : ''
            ]"
          >
            <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/20 group">
              <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">24 Years+</h3>
              <p class="text-sm text-gray-300">Experience</p>
            </div>

            <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/20 group">
              <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">1000+</h3>
              <p class="text-sm text-gray-300">Patients Treated</p>
            </div>

            <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:bg-white/20 group">
              <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto lg:mx-0">
                <svg class="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">5.0 Rating</h3>
              <p class="text-sm text-gray-300">Patient Reviews</p>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div
            :class="[
              'flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start',
              isTransitioning ? 'animate-fade-in-up delay-500' : ''
            ]"
          >
            <button
              @click="scrollToContact"
              class="group relative bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl rounded-full overflow-hidden"
            >
              <span class="relative z-10 flex items-center justify-center space-x-2">
                <span>Request a Call</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <a
              href="mailto:info.doctordey@gmail.com"
              class="group text-center bg-transparent hover:bg-white text-white hover:text-gray-900 px-10 py-5 text-lg font-medium border-2 border-white transition-all duration-300 shadow-lg hover:shadow-2xl rounded-full flex items-center justify-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Navigation Controls -->
      <!-- <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-20">

        <button
          @click="handlePrev"
          class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <svg class="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>


        <div class="flex gap-3">
          <button
            v-for="(_, index) in slides"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'transition-all duration-500 rounded-full',
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            ]"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>

        <button
          @click="handleNext"
          class="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
          aria-label="Next slide"
        >
          <svg class="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> -->

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 right-8 hidden lg:flex flex-col items-center space-y-2 animate-bounce">
        <span class="text-sm text-white font-medium">Scroll</span>
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import hero1 from "@/assets/img/hero1.jpg"
import hero2 from "@/assets/img/hero2.jpg"

const currentSlide = ref(0)
const isTransitioning = ref(false)
let autoplayInterval: ReturnType<typeof setInterval> | null = null

const slides = [
  {
    id: 1,
    image: hero1,
    title: 'Entrust your',
    subtitle: 'health care to',
    highlight: 'reliable specialists',
    description: 'Get trusted counselling and personalised therapy from a professional service that puts your wellbeing first.'
  },
  {
    id: 2,
    image: hero2,
    title: 'Experience',
    subtitle: 'healthcare',
    highlight: 'reimagined',
    description: 'Modern medical solutions combined with compassionate care for your complete wellbeing journey.'
  }
]

const handleNext = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true
    currentSlide.value = (currentSlide.value + 1) % slides.length
    setTimeout(() => {
      isTransitioning.value = false
    }, 1000)
  }
}

const handlePrev = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
    setTimeout(() => {
      isTransitioning.value = false
    }, 1000)
  }
}

const goToSlide = (index: number) => {
  if (!isTransitioning.value && index !== currentSlide.value) {
    isTransitioning.value = true
    currentSlide.value = index
    setTimeout(() => {
      isTransitioning.value = false
    }, 1000)
  }
}

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  autoplayInterval = setInterval(() => {
    handleNext()
  }, 6000)
})

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
})
</script>

<style scoped>
@keyframes kenburns {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-kenburns {
  animation: kenburns 10s ease-out infinite alternate;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}

.delay-300 {
  animation-delay: 0.3s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.animate-pulse-slow {
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 1s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
</style>