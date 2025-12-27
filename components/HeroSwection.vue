<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 right-10 w-72 h-72 bg-gray-900/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-gray-800/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Content - Takes 7 columns on large screens -->
        <div class="lg:col-span-7 space-y-8 lg:space-y-12">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-default">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-sm font-medium tracking-wide">Premium Healthcare Consulting</span>
          </div>

          <!-- Main Headline -->
          <div class="space-y-6">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 leading-[1.1] tracking-tight">
              Entrust your<br />
              <span class="font-medium text-gray-800">health care to</span><br />
              <span class="relative inline-block">
                <span class="font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  reliable specialists
                </span>
                <svg class="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C80 3 160 2 240 6C300 8.5 360 10 398 10" stroke="currentColor" stroke-width="3" stroke-linecap="round" class="text-gray-900"/>
                </svg>
              </span>
            </h1>
            
            <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Get trusted counselling and personalised therapy from a professional service that puts your wellbeing first.
            </p>
          </div>

          <!-- Doctor Profile - Mobile Only (Shows after headline) -->
          <div class="lg:hidden">
            <div class="relative w-full space-y-6">
              <!-- Doctor Image with Modern Design -->
              <div class="relative">
                <!-- Main Image Container -->
                <div class="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] transform hover:scale-[1.02] transition-all duration-500">
                  <img 
                    src="@/assets/img/founder.jpeg" 
                    alt="Dr Patrick Nwachi"
                    class="w-full h-full object-cover object-center" />
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                  
                  <!-- Doctor Info Overlay -->
                  <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div class="space-y-3">
                      <div class="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <span class="text-sm font-medium">Available for Consultation</span>
                      </div>
                      <h2 class="text-3xl font-light tracking-wide">Dr Patrick Nwachi</h2>
                      <p class="text-sm text-gray-300">MBBS, FMCFM, DipIBLM</p>
                    </div>
                  </div>

                  <!-- Decorative Corner Element -->
                  <div class="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-white/30 rounded-tr-3xl"></div>
                </div>
              </div>

              <!-- Doctor Bio Card - Separate from Image -->
              <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <p class="text-base text-gray-700 leading-relaxed mb-5">
                  Consultant Family Physician and International Board Certified Lifestyle Physician with broad clinical experience in holistic medicine.
                </p>
                
                <NuxtLink 
                  to="/login"
                  class="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white py-4 text-base font-medium shadow-md hover:shadow-xl transition-all duration-300 rounded-full group">
                  <span class="flex items-center justify-center space-x-2">
                    <span>Schedule Appointment</span>
                    <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Features Grid -->
          <div class="grid sm:grid-cols-3 gap-4 lg:gap-6">
            <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-900 group">
              <div class="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">24 Years+</h3>
              <p class="text-sm text-gray-600">Experience</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-900 group">
              <div class="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">1000+</h3>
              <p class="text-sm text-gray-600">Patients Treated</p>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-900 group">
              <div class="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">5.0 Rating</h3>
              <p class="text-sm text-gray-600">Patient Reviews</p>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              @click="scrollToContact"
              class="group relative bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-2xl rounded-full overflow-hidden">
              <span class="relative z-10 flex items-center justify-center space-x-2">
                <span>Request a Call</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            
            <a 
              href="mailto:info.doctordey@gmail.com"
              class="group text-center bg-white hover:bg-gray-900 text-gray-900 hover:text-white px-10 py-5 text-lg font-medium border-2 border-gray-900 transition-all duration-300 shadow-md hover:shadow-xl rounded-full flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send Email</span>
            </a>
          </div>
        </div>

        <!-- Right Content - Doctor Profile Card - Takes 5 columns on large screens (Hidden on Mobile) -->
        <div class="hidden lg:flex lg:col-span-5 justify-center lg:justify-end mt-8 lg:mt-0">
          <div class="relative w-full max-w-md space-y-6 pb-8">
            <!-- Doctor Image with Modern Design -->
            <div class="relative">
              <!-- Main Image Container -->
              <div class="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] transform hover:scale-[1.02] transition-all duration-500">
                <img 
                  src="@/assets/img/founder.jpeg" 
                  alt="Dr Patrick Nwachi"
                  class="w-full h-full object-cover object-center" />
                
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                
                <!-- Doctor Info Overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                  <div class="space-y-3">
                    <div class="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      <span class="text-sm font-medium">Available for Consultation</span>
                    </div>
                    <h2 class="text-3xl sm:text-4xl font-light tracking-wide">Dr Patrick Nwachi</h2>
                    <p class="text-sm text-gray-300">MBBS, FMCFM, DipIBLM</p>
                  </div>
                </div>

                <!-- Decorative Corner Element -->
                <div class="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-white/30 rounded-tr-3xl"></div>
              </div>
            </div>

            <!-- Doctor Bio Card - Separate from Image -->
            <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <p class="text-base text-gray-700 leading-relaxed mb-5">
                Consultant Family Physician and International Board Certified Lifestyle Physician with broad clinical experience in holistic medicine.
              </p>
              
              <NuxtLink 
                to="/login"
                class="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white py-4 text-base font-medium shadow-md hover:shadow-xl transition-all duration-300 rounded-full group">
                <span class="flex items-center justify-center space-x-2">
                  <span>Schedule Appointment</span>
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center space-y-2 animate-bounce">
        <span class="text-sm text-gray-600 font-medium">Scroll to explore</span>
        <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const contactSection = document.querySelector('#contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>