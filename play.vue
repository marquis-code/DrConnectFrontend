<template>
  <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
    <HeroSection />

    <!-- About Us Section -->
    <div class="">
      <AboutUs />
    </div>

    <!-- Meet Our Founder Section -->
    <section id="founder" class="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16 lg:mb-20">
          <div class="inline-block mb-4">
            <span class="text-gray-600 text-sm font-semibold tracking-wider uppercase">Leadership</span>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
            Meet Our <span class="font-semibold">Founder</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading with expertise, compassion, and a commitment to transforming healthcare delivery
          </p>
        </div>

        <!-- Founder Profile -->
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div class="grid lg:grid-cols-5 gap-0">
              <!-- Image Section -->
              <div class="lg:col-span-2 relative">
                <div class="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700">
                  <img 
                    src="@/assets/img/founder.jpeg" 
                    alt="Dr Patrick Nwachi - Founder & CEO"
                    class="w-full h-full object-cover object-center" />
                  
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-gray-900/20"></div>
                  
                  <!-- Status Badge -->
                  <div class="absolute top-6 left-6">
                    <div class="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <div class="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span class="text-sm font-semibold text-gray-900">Available for Consultation</span>
                    </div>
                  </div>

                  <!-- Role Badge - Bottom -->
                  <div class="absolute bottom-6 left-6 right-6">
                    <div class="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <p class="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1">Founder & CEO</p>
                      <p class="text-lg font-bold text-gray-900">Dr Patrick Nwachi</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content Section -->
              <div class="lg:col-span-3 p-8 lg:p-12 space-y-8">
                <!-- Credentials -->
                <div>
                  <h3 class="text-3xl font-light text-gray-900 mb-3">Dr Patrick Nwachi</h3>
                  <p class="text-lg text-gray-600 mb-4">MBBS, FMCFM, DipIBLM</p>
                  
                  <div class="flex flex-wrap gap-2">
                    <span class="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full">
                      Family Medicine
                    </span>
                    <span class="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium rounded-full">
                      Lifestyle Medicine
                    </span>
                    <span class="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-medium rounded-full">
                      Holistic Care
                    </span>
                  </div>
                </div>

                <!-- Bio -->
                <div class="space-y-4">
                  <p class="text-base text-gray-700 leading-relaxed">
                    Dr. Patrick Nwachi is a distinguished Consultant Family Physician and International Board Certified Lifestyle Physician with over 24 years of clinical experience. His expertise spans family medicine, lifestyle interventions, and holistic healthcare approaches.
                  </p>
                  <p class="text-base text-gray-700 leading-relaxed">
                    As the founder and CEO, Dr. Nwachi has built a practice centered on personalized care, evidence-based medicine, and patient empowerment. His integrative approach combines modern medical science with lifestyle medicine principles to achieve optimal health outcomes.
                  </p>
                </div>

                <!-- Stats Grid -->
                <div class="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                  <div class="space-y-1">
                    <p class="text-4xl font-bold text-gray-900">24+</p>
                    <p class="text-sm text-gray-600 font-medium">Years of Experience</p>
                  </div>
                  <div class="space-y-1">
                    <p class="text-4xl font-bold text-gray-900">5.0</p>
                    <p class="text-sm text-gray-600 font-medium">Patient Rating</p>
                  </div>
                  <div class="space-y-1">
                    <p class="text-4xl font-bold text-gray-900">1000+</p>
                    <p class="text-sm text-gray-600 font-medium">Patients Treated</p>
                  </div>
                  <div class="space-y-1">
                    <p class="text-4xl font-bold text-gray-900">3</p>
                    <p class="text-sm text-gray-600 font-medium">Certifications</p>
                  </div>
                </div>

                <!-- CTA Button -->
                <div class="pt-6">
                  <NuxtLink
                    to="/register"
                    class="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group">
                    <span>Book Consultation</span>
                    <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Future Expansion Notice -->
        <div class="mt-16 text-center">
          <div class="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-md">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="text-gray-700 font-medium">We're expanding our team to serve you better</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <Services />
    <!-- Pricing Section -->
    <section id="prices" class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32 relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Header -->
        <div class="text-center mb-12 lg:mb-16">
          <div class="inline-block mb-4">
            <span class="text-gray-400 text-sm font-semibold tracking-wider uppercase">Flexible & Affordable</span>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Choose Your <span class="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Care Plan</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Quality healthcare tailored to your needs - virtual or in-person
          </p>
        </div>

        <!-- Consultation Mode Toggle -->
        <div class="flex justify-center mb-12">
          <div class="inline-flex bg-gray-800/50 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-700/50">
            <button
              @click="consultationMode = 'virtual'"
              :class="[
                'px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2',
                consultationMode === 'virtual'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Virtual Care
            </button>
            <button
              @click="consultationMode = 'physical'"
              :class="[
                'px-8 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2',
                consultationMode === 'physical'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                  : 'text-gray-400 hover:text-white'
              ]"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              In-Person Visit
            </button>
          </div>
        </div>

        <!-- Loading State -->
        <div v-if="plansLoading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p class="text-gray-400 mt-4">Loading consultation plans...</p>
        </div>

        <!-- Virtual Consultations -->
        <div v-else-if="consultationMode === 'virtual'">
          <!-- Category Filter Pills -->
          <div class="flex flex-wrap justify-center gap-3 mb-12">
            <button
              @click="selectedCategory = 'all'"
              :class="[
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600'
              ]"
            >
              All Services
            </button>
            <button
              v-for="cat in consultationCategories"
              :key="cat.id"
              @click="selectedCategory = cat.id"
              :class="[
                'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2',
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700/50 hover:border-gray-600'
              ]"
            >
              <span>{{ cat.icon }}</span>
              <span>{{ cat.label }}</span>
            </button>
          </div>

          <!-- Consultation Cards Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div
              v-for="group in filteredConsultationGroups"
              :key="group.type"
              class="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <!-- Group Header -->
              <div class="flex items-start justify-between mb-6">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <span class="text-3xl">{{ group.icon }}</span>
                    <div>
                      <h3 class="text-xl font-semibold text-white">{{ group.title }}</h3>
                      <p class="text-sm text-gray-400">{{ group.subtitle }}</p>
                    </div>
                  </div>
                </div>
                <div v-if="group.popular" class="flex-shrink-0">
                  <span class="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Popular
                  </span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-300 text-sm mb-6 leading-relaxed">{{ group.description }}</p>

              <!-- Plans Dropdown -->
              <div class="space-y-3 mb-6">
                <label class="block text-sm font-medium text-gray-400 mb-2">Select Duration:</label>
                <select
                  v-model="selectedPlans[group.type]"
                  class="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option
                    v-for="plan in group.plans"
                    :key="plan._id"
                    :value="plan._id"
                  >
                    {{ plan.duration }} min - {{ formatPrice(plan.price) }}
                  </option>
                </select>
              </div>

              <!-- Features -->
              <div class="space-y-2.5 mb-6 bg-gray-900/30 rounded-xl p-4">
                <div
                  v-for="feature in group.features"
                  :key="feature"
                  class="flex items-start gap-2"
                >
                  <svg class="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm text-gray-300">{{ feature }}</span>
                </div>
              </div>

              <!-- Selected Plan Details -->
              <div v-if="getSelectedPlan(group.type)" class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 mb-6 border border-blue-500/20">
                <div class="flex items-baseline justify-between mb-2">
                  <span class="text-3xl font-bold text-white">
                    {{ formatPrice(getSelectedPlan(group.type).price) }}
                  </span>
                  <span class="text-sm text-gray-400">
                    {{ getSelectedPlan(group.type).duration }} minutes
                  </span>
                </div>
                <p class="text-xs text-gray-400">
                  {{ getConsultationModesText(getSelectedPlan(group.type).consultationModes) }}
                </p>
              </div>

              <!-- CTA Button -->
              <NuxtLink
                to="/register"
                class="w-full block text-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Book Now
              </NuxtLink>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="mt-16 text-center">
            <div class="inline-flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-8 py-4">
              <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span class="text-gray-300">All consultations are confidential and HIPAA compliant</span>
            </div>
          </div>
        </div>

        <!-- Physical Consultation -->
        <div v-else-if="consultationMode === 'physical' && physicalPlans.length > 0">
          <div class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
              <!-- Header -->
              <div class="flex items-center justify-between mb-8">
                <div class="flex items-center gap-4">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl">
                    🏥
                  </div>
                  <div>
                    <h3 class="text-3xl font-semibold text-white mb-1">In-Person Consultation</h3>
                    <p class="text-gray-400">Complete examination at our clinic</p>
                  </div>
                </div>
              </div>

              <!-- Pricing -->
              <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 mb-8 border border-blue-500/20">
                <div class="flex items-baseline justify-between">
                  <div>
                    <span class="text-5xl font-bold text-white">
                      {{ formatPrice(physicalPlans[0].price) }}
                    </span>
                    <span class="text-gray-400 ml-3">per session</span>
                  </div>
                  <span class="text-lg text-gray-300">{{ physicalPlans[0].duration }} minutes</span>
                </div>
              </div>

              <!-- Features Grid -->
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                <div
                  v-for="feature in physicalFeatures"
                  :key="feature"
                  class="flex items-start gap-3 bg-gray-900/30 rounded-xl p-4"
                >
                  <svg class="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-gray-300 font-medium">{{ feature }}</span>
                </div>
              </div>

              <!-- Clinic Hours -->
              <div class="bg-gray-900/50 rounded-2xl p-6 mb-8 border border-gray-700/50">
                <h4 class="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Clinic Hours
                </h4>
                <div class="space-y-2">
                  <div
                    v-for="plan in physicalPlans"
                    :key="plan._id"
                    class="flex justify-between items-center text-gray-300"
                  >
                    <span>{{ getAvailableDaysText(plan.availableDays) }}</span>
                    <span class="font-semibold text-blue-400">
                      {{ formatTimeRange(plan.availableTimeRange) }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <NuxtLink
                to="/register"
                class="w-full block text-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Schedule Clinic Visit
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- No Plans Available -->
        <div v-else class="max-w-2xl mx-auto text-center py-12">
          <div class="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-12">
            <div class="text-6xl mb-4">🏥</div>
            <p class="text-gray-300 text-lg mb-2">No physical consultation plans available at the moment.</p>
            <p class="text-gray-400">Please check back later or contact us for more information.</p>
          </div>
        </div>
      </div>
    </section>

        <!-- Contact Section -->
    <section id="contact" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div class="space-y-6">
          <h2 class="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">Get in Touch</h2>
          <div class="border-t border-gray-300 pt-6">
            <p class="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              Ready to take control of your health? Contact us today to schedule your consultation with our expert medical team.
            </p>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <svg class="w-6 h-6 text-gray-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-gray-900 font-medium">Email</p>
                  <a href="mailto:info.doctordey@gmail.com" class="text-gray-700 hover:text-gray-900">
                    info.doctordey@gmail.com
                  </a>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <svg class="w-6 h-6 text-gray-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p class="text-gray-900 font-medium">Phone</p>
                  <a href="tel:+2349021857652" class="text-gray-700 hover:text-gray-900">
                    +234 902 185 7652
                  </a>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <svg class="w-6 h-6 text-gray-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="text-gray-900 font-medium">Hours</p>
                  <p class="text-gray-700">Mon-Fri: 8am - 8pm<br />Sat-Sun: 10am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white border-[0.5px] rounded-xl border-gray-100 p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
              <input 
                v-model="form.name" 
                type="text" 
                required
                class="w-full px-4 py-3 border-[0.5px] rounded-xl border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="John Doe" 
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                required
                class="w-full px-4 py-3 border-[0.5px] rounded-xl border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="john@example.com" 
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Phone</label>
              <input 
                v-model="form.phone"
                type="tel" 
                required
                class="w-full px-4 py-3 border-[0.5px] rounded-xl border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="+234 (XXX) XXX-XXXX" 
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-900 mb-2">Message</label>
              <textarea
                v-model="form.message" 
                required 
                rows="4"
                class="w-full px-4 py-3 border-[0.5px] rounded-xl border-gray-200 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                placeholder="Tell us about your healthcare needs..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              :disabled="loading"
              class="w-full bg-gray-900 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-25 text-white py-4 text-lg transition-colors rounded-xl"
            >
              {{ loading ? 'Processing...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <SuccessModal :show="showSuccessModal" @close="closeSuccessModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useCreateEnquiry } from '@/composables/modules/enquiry/useCreateEnquiry'
import { useGetAllConsultationPlans } from '@/composables/modules/consultation-plans/useGetAllConsultationPlans'

interface ConsultationPlan {
  _id: string
  name: string
  description: string
  consultationType: string
  consultationCategory: string
  duration: number
  price: number
  availableDays: number[]
  availableTimeRange: string | null
  isActive: boolean
  consultationModes: string[]
  sortOrder: number
  tags: string[]
  specialtyRequired: string | null
  mentalHealthSubType: string | null
}

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const showSuccessModal = ref(false)

// Composables
const { createEnquiry, loading } = useCreateEnquiry()
const { plans: allPlans, loading: plansLoading, getAllPlans } = useGetAllConsultationPlans()

// State
const consultationMode = ref<'virtual' | 'physical'>('virtual')
const selectedCategory = ref<string>('all')
const selectedPlans = ref<Record<string, string>>({})

// Consultation Categories for filtering
const consultationCategories = [
  { id: 'general', label: 'General Care', icon: '🏥' },
  { id: 'mental', label: 'Mental Health', icon: '🧠' },
  { id: 'specialty', label: 'Specialty', icon: '⚕️' },
  { id: 'counseling', label: 'Counseling', icon: '💬' },
]

// Consultation Groups Configuration
const consultationGroupsConfig = [
  {
    type: 'first_contact',
    title: 'New Patient Visit',
    subtitle: 'First-time consultation',
    icon: '🎯',
    description: 'Comprehensive initial assessment for new patients with full medical evaluation and treatment planning.',
    features: [
      'Complete health assessment',
      'Treatment plan development',
      'Prescription if needed',
      'Video or voice call'
    ],
    category: 'general',
    popular: true
  },
  {
    type: 'follow_up',
    title: 'Follow-Up Care',
    subtitle: 'Continuing treatment',
    icon: '📋',
    description: 'Monitor your progress and adjust treatment plans as needed with ongoing support.',
    features: [
      'Progress monitoring',
      'Treatment adjustments',
      'Medication review',
      'Quick check-ins'
    ],
    category: 'general',
    popular: false
  },
  {
    type: 'medical_review',
    title: 'Medical Review',
    subtitle: 'Results & records',
    icon: '📊',
    description: 'Review lab results, test findings, and medical records with expert interpretation.',
    features: [
      'Lab results review',
      'Test interpretation',
      'Next steps planning',
      'For existing patients'
    ],
    category: 'general',
    popular: false
  },
  {
    type: 'emergency',
    title: 'Emergency Care',
    subtitle: 'Urgent medical needs',
    icon: '🚨',
    description: 'Priority consultation for urgent medical situations. Immediate or within-the-hour response.',
    features: [
      'Priority scheduling',
      'Immediate response',
      'Available 24/7',
      'Quick assessment'
    ],
    category: 'general',
    popular: false
  },
  {
    type: 'mental_health',
    title: 'Mental Health',
    subtitle: 'Therapy & counseling',
    icon: '🧠',
    description: 'Professional mental health support including therapy, counseling, and psychiatric care.',
    features: [
      'Various therapy types',
      'CBT & psychotherapy',
      'Depression & anxiety treatment',
      'Confidential sessions'
    ],
    category: 'mental',
    popular: true
  },
  {
    type: 'pediatric',
    title: 'Pediatric Care',
    subtitle: "Children's health",
    icon: '👶',
    description: 'Specialized healthcare for children with experienced pediatric physicians.',
    features: [
      'Child-focused care',
      'Vaccination guidance',
      'Growth monitoring',
      'Parent consultation'
    ],
    category: 'specialty',
    popular: false
  },
  {
    type: 'geriatric',
    title: 'Senior Care',
    subtitle: 'Elderly health',
    icon: '👴',
    description: 'Comprehensive care tailored to the unique needs of elderly patients.',
    features: [
      'Age-specific care',
      'Medication management',
      'Chronic condition support',
      'Holistic approach'
    ],
    category: 'specialty',
    popular: false
  },
  {
    type: 'routine_checkup',
    title: 'Routine Checkup',
    subtitle: 'Preventive care',
    icon: '✅',
    description: 'Regular health checkups to maintain wellness and catch issues early.',
    features: [
      'Health screening',
      'Preventive care',
      'Wellness advice',
      'Health monitoring'
    ],
    category: 'general',
    popular: false
  },
  {
    type: 'wellness_consultation',
    title: 'Wellness Coach',
    subtitle: 'Lifestyle & health',
    icon: '🌟',
    description: 'Personalized wellness guidance for optimal health and lifestyle improvements.',
    features: [
      'Lifestyle counseling',
      'Health optimization',
      'Goal setting',
      'Preventive strategies'
    ],
    category: 'counseling',
    popular: false
  },
  {
    type: 'nutrition_counseling',
    title: 'Nutrition Advice',
    subtitle: 'Diet & wellness',
    icon: '🥗',
    description: 'Expert nutritional guidance to support your health goals and dietary needs.',
    features: [
      'Dietary planning',
      'Nutrition assessment',
      'Meal guidance',
      'Health goals support'
    ],
    category: 'counseling',
    popular: false
  },
  {
    type: 'marriage_relationship_counseling',
    title: 'Couples Therapy',
    subtitle: 'Relationship support',
    icon: '💑',
    description: 'Professional counseling for couples to strengthen relationships and resolve conflicts.',
    features: [
      'Relationship counseling',
      'Communication skills',
      'Conflict resolution',
      'Sex therapy included'
    ],
    category: 'counseling',
    popular: false
  },
  {
    type: 'premarital_counseling',
    title: 'Premarital Counsel',
    subtitle: 'Marriage preparation',
    icon: '💍',
    description: 'Prepare for marriage with comprehensive counseling on health and relationship topics.',
    features: [
      'Health assessment',
      'Family planning',
      'Genetic counseling',
      'Both partners present'
    ],
    category: 'counseling',
    popular: false
  },
  {
    type: 'spirituality_counseling',
    title: 'Spiritual Care',
    subtitle: 'Faith & healing',
    icon: '🙏',
    description: 'Integrate spirituality with healthcare through prayer and spiritual counseling.',
    features: [
      'Spiritual healing',
      'Prayer support',
      'Faith-based care',
      'Holistic approach'
    ],
    category: 'counseling',
    popular: false
  },
  {
    type: 'prescription_refill',
    title: 'Prescription Refill',
    subtitle: 'Medication renewal',
    icon: '💊',
    description: 'Quick medication refills for existing patients with ongoing treatment.',
    features: [
      'Fast processing',
      'Existing patients only',
      'Medication review',
      'Pharmacy coordination'
    ],
    category: 'general',
    popular: false
  },
  {
    type: 'lab_result_review',
    title: 'Lab Results',
    subtitle: 'Test analysis',
    icon: '🔬',
    description: 'Professional review and interpretation of laboratory test results.',
    features: [
      'Expert interpretation',
      'Clear explanations',
      'Next steps guidance',
      'Follow-up planning'
    ],
    category: 'general',
    popular: false
  },
  {
    type: 'second_opinion',
    title: 'Second Opinion',
    subtitle: 'Expert review',
    icon: '👨‍⚕️',
    description: 'Get a second medical opinion on diagnosis or treatment recommendations.',
    features: [
      'Independent review',
      'Treatment alternatives',
      'Diagnosis validation',
      'Expert consultation'
    ],
    category: 'general',
    popular: false
  }
]

// Physical consultation features
const physicalFeatures = [
  'Full physical examination',
  'Diagnostic tests available',
  'Specialist physicians',
  'Immediate prescriptions',
  'Lab work coordination',
  'Medical documentation'
]

// Computed properties
const virtualPlans = computed(() => {
  if (!allPlans.value) return []
  return allPlans.value
    .filter((plan: ConsultationPlan) => 
      (plan.consultationCategory === 'virtual' || plan.consultationType !== 'physical') && 
      plan.isActive &&
      plan.consultationType !== 'sick_note' &&
      plan.consultationType !== 'referral' &&
      plan.consultationType !== 'onsite_therapy'
    )
    .sort((a: ConsultationPlan, b: ConsultationPlan) => a.sortOrder - b.sortOrder)
})

const physicalPlans = computed(() => {
  if (!allPlans.value) return []
  return allPlans.value
    .filter((plan: ConsultationPlan) => 
      (plan.consultationType === 'physical' || plan.consultationType === 'onsite_therapy') && 
      plan.isActive
    )
    .sort((a: ConsultationPlan, b: ConsultationPlan) => a.sortOrder - b.sortOrder)
})

const consultationGroups = computed(() => {
  const groups: any[] = []
  
  consultationGroupsConfig.forEach(config => {
    const groupPlans = virtualPlans.value.filter(
      (plan: ConsultationPlan) => plan.consultationType === config.type
    )
    
    if (groupPlans.length > 0) {
      groups.push({
        ...config,
        plans: groupPlans
      })
    }
  })
  
  return groups
})


// Form submission
const handleSubmit = async () => {
  const payloadObj = {
    fullName: form.name,
    email: form.email,
    phone: form.phone,
    message: form.message
  }
  
  await createEnquiry(payloadObj).then(() => {
    form.name = ''
    form.email = ''
    form.phone = ''
    form.message = ''
    showSuccessModal.value = true
  })
}

const filteredConsultationGroups = computed(() => {
  if (selectedCategory.value === 'all') {
    return consultationGroups.value
  }
  return consultationGroups.value.filter(group => group.category === selectedCategory.value)
})

// Helper functions
const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}

const getConsultationModesText = (modes: string[]): string => {
  if (!modes || modes.length === 0) return 'Video or voice call'
  const modeText = modes.map(mode => mode.charAt(0).toUpperCase() + mode.slice(1)).join(' or ')
  return `${modeText} call available`
}

const getAvailableDaysText = (days: number[]): string => {
  const daysMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  if (days.length === 7) return 'Every day'
  if (days.length === 5 && days.includes(1) && days.includes(5) && !days.includes(0) && !days.includes(6)) {
    return 'Weekdays'
  }
  return days.map((day: number) => daysMap[day]).join(', ')
}

const formatTimeRange = (timeRange: string | null): string => {
  if (!timeRange) return '9:00 AM - 5:00 PM'
  const [start, end] = timeRange.split('-')
  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    return `${displayHour}:${minutes} ${ampm}`
  }
  return `${formatTime(start)} - ${formatTime(end)}`
}

const getSelectedPlan = (groupType: string) => {
  const planId = selectedPlans.value[groupType]
  if (!planId) {
    // Return first plan as default
    const group = consultationGroups.value.find(g => g.type === groupType)
    return group?.plans[0] || null
  }
  return virtualPlans.value.find((p: ConsultationPlan) => p._id === planId) || null
}

// Initialize selected plans with first option for each group
const initializeSelectedPlans = () => {
  consultationGroups.value.forEach(group => {
    if (group.plans.length > 0 && !selectedPlans.value[group.type]) {
      selectedPlans.value[group.type] = group.plans[0]._id
    }
  })
}

// Lifecycle
onMounted(async () => {
  await getAllPlans()
  initializeSelectedPlans()
})

const closeSuccessModal = () => {
  showSuccessModal.value = false
}


// Watch for changes in consultation groups to initialize plans
watch(consultationGroups, () => {
  initializeSelectedPlans()
})
</script>

<style scoped>
/* Smooth transitions */
.group:hover {
  transform: translateY(-4px);
}

/* Custom scrollbar for dropdowns */
select::-webkit-scrollbar {
  width: 8px;
}

select::-webkit-scrollbar-track {
  background: rgba(31, 41, 55, 0.5);
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}

/* Gradient animation */
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>