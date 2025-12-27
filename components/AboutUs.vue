<template>
  <section id="about" class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32 mt-20 lg:mt-32 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div class="absolute top-1/4 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 right-10 w-80 h-80 bg-gray-600 rounded-full blur-3xl animate-float-delayed"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-20">
        <div class="inline-block mb-6">
          <span class="text-sm font-medium tracking-wider uppercase text-gray-400 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            About Us
          </span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
          About Doctor Dey<br />
          <span class="font-semibold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Consulting
          </span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <!-- Left Content - Mission & Vision -->
        <div class="space-y-8">
          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 group">
            <div class="flex items-start space-x-4 mb-6">
              <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl lg:text-3xl font-medium text-white mb-3">Our Mission</h3>
                <div class="w-16 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
              </div>
            </div>
            <p class="text-base lg:text-lg text-gray-300 leading-relaxed">
              Doctor Dey Consulting for Medical Services is a premier healthcare consulting firm dedicated to providing exceptional medical guidance and support to patients worldwide. Our mission is to bridge the gap between patients and world-class medical expertise, ensuring everyone has access to top-tier healthcare consultations regardless of their location.
            </p>
          </div>

          <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-500 group">
            <div class="flex items-start space-x-4 mb-6">
              <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-2xl lg:text-3xl font-medium text-white mb-3">Our Vision</h3>
                <div class="w-16 h-0.5 bg-gradient-to-r from-white to-transparent"></div>
              </div>
            </div>
            <p class="text-base lg:text-lg text-gray-300 leading-relaxed">
              With a network of highly qualified specialists and cutting-edge telehealth technology, we deliver personalized care that puts your health and wellbeing first. We envision a world where quality healthcare is accessible to all.
            </p>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 lg:gap-6">
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-6 text-center hover:bg-white/10 transition-all duration-300">
              <p class="text-3xl lg:text-4xl font-bold text-white mb-2">24+</p>
              <p class="text-xs lg:text-sm text-gray-400">Years Experience</p>
            </div>
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-6 text-center hover:bg-white/10 transition-all duration-300">
              <p class="text-3xl lg:text-4xl font-bold text-white mb-2">1000+</p>
              <p class="text-xs lg:text-sm text-gray-400">Patients Served</p>
            </div>
            <div class="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-6 text-center hover:bg-white/10 transition-all duration-300">
              <p class="text-3xl lg:text-4xl font-bold text-white mb-2">5.0</p>
              <p class="text-xs lg:text-sm text-gray-400">Average Rating</p>
            </div>
          </div>
        </div>

        <!-- Right Content - Key Features -->
        <div class="space-y-6">
          <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 group">
            <div class="flex items-start space-x-5">
              <div class="flex-shrink-0">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl lg:text-2xl font-semibold text-white mb-3">Expert Medical Team</h3>
                <p class="text-gray-300 leading-relaxed">
                  Access to board-certified physicians and specialists with decades of combined experience across multiple medical disciplines.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 group">
            <div class="flex items-start space-x-5">
              <div class="flex-shrink-0">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl lg:text-2xl font-semibold text-white mb-3">Comprehensive Care</h3>
                <p class="text-gray-300 leading-relaxed">
                  From initial consultation to treatment planning and follow-up care, we provide end-to-end medical consultation services tailored to your needs.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 group">
            <div class="flex items-start space-x-5">
              <div class="flex-shrink-0">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl lg:text-2xl font-semibold text-white mb-3">Patient-Centered Approach</h3>
                <p class="text-gray-300 leading-relaxed">
                  Your health journey is unique. We tailor our consultations to your specific needs, concerns, and medical history for personalized care.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 group">
            <div class="flex items-start space-x-5">
              <div class="flex-shrink-0">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <svg class="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-xl lg:text-2xl font-semibold text-white mb-3">24/7 Accessibility</h3>
                <p class="text-gray-300 leading-relaxed">
                  Get medical guidance whenever you need it with our round-the-clock telehealth platform and responsive support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(20px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(20px) translateX(-20px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
}
</style>