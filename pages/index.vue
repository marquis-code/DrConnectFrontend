<template>
  <div class="min-h-screen bg-gray-50">

     <!-- Hero Section -->
   <HeroSwection />

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
                to="/login"
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

    <!-- Future Expansion Notice (Optional) -->
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


<section id="prices" class="bg-gray-900 text-white py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16 lg:mb-20">
        <div class="inline-block mb-4">
          <span class="text-gray-400 text-sm font-semibold tracking-wider uppercase">Flexible Options</span>
        </div>
        <h2 class="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
          Choose Your Care Style
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Quality healthcare on your terms - whether from the comfort of home or in-person at our clinic
        </p>
      </div>

      <!-- Consultation Type Tabs -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex bg-gray-800 rounded-full p-1.5 border border-gray-700">
          <button
            @click="consultationType = 'virtual'"
            :class="[
              'px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300',
              consultationType === 'virtual'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'text-gray-400 hover:text-white'
            ]"
          >
            💻 Virtual Consultation
          </button>
          <button
            @click="consultationType = 'physical'"
            :class="[
              'px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300',
              consultationType === 'physical'
                ? 'bg-white text-gray-900 shadow-lg'
                : 'text-gray-400 hover:text-white'
            ]"
          >
            🏥 Physical Consultation
          </button>
        </div>
      </div>

      <!-- Virtual Consultation Plans -->
      <div v-show="consultationType === 'virtual'" class="grid md:grid-cols-3 gap-8 lg:gap-10">
        <!-- Show loading state -->
        <div v-if="plansLoading" class="col-span-3 text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p class="text-gray-400 mt-4">Loading consultation plans...</p>
        </div>

        <!-- Virtual plan cards -->
        <div 
          v-else
          v-for="(plan, index) in virtualPlans" 
          :key="plan._id"
          :class="[
            'rounded-2xl p-8 transition-all duration-300 relative',
            isMostPopular(plan, index)
              ? 'group bg-white text-gray-900 transform lg:scale-105 shadow-2xl hover:-translate-y-2'
              : 'group bg-gray-800 border border-gray-700 hover:border-gray-500 hover:-translate-y-1'
          ]"
        >
          <!-- Most Popular Badge -->
          <div v-if="isMostPopular(plan, index)" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div class="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ MOST POPULAR
            </div>
          </div>

          <div :class="isMostPopular(plan, index) ? 'pt-4' : ''">
            <div class="flex items-center justify-between mb-4">
              <h3 :class="[
                'text-2xl font-light leading-tight',
                isMostPopular(plan, index) ? 'text-gray-900' : 'text-white'
              ]">
                {{ getPlanTitle(plan) }}
              </h3>
              <div class="text-3xl">{{ getPlanIcon(plan) }}</div>
            </div>
            
            <div class="mb-6">
              <div class="flex items-baseline">
                <span :class="[
                  'font-light leading-tight',
                  isMostPopular(plan, index) ? 'text-6xl text-gray-900' : 'text-5xl text-white'
                ]">
                  {{ formatPrice(plan.price) }}
                </span>
              </div>
              <p :class="[
                'mt-2',
                isMostPopular(plan, index) ? 'text-gray-600' : 'text-gray-400'
              ]">
                {{ plan.duration }}-minute session
              </p>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-3">
                <div :class="[
                  'mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                  isMostPopular(plan, index) ? 'bg-gray-900' : 'bg-gray-700'
                ]">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span :class="isMostPopular(plan, index) ? 'text-gray-900 font-medium' : 'text-gray-300'">
                  {{ plan.consultationModes.includes('video') ? 'Video' : '' }}{{ plan.consultationModes.includes('video') && plan.consultationModes.includes('voice') ? ' or ' : '' }}{{ plan.consultationModes.includes('voice') ? 'Voice' : '' }} call
                </span>
              </div>
              <div class="flex items-start gap-3">
                <div :class="[
                  'mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                  isMostPopular(plan, index) ? 'bg-gray-900' : 'bg-gray-700'
                ]">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span :class="isMostPopular(plan, index) ? 'text-gray-900 font-medium' : 'text-gray-300'">
                  {{ plan.description }}
                </span>
              </div>
              <!-- Additional features based on duration -->
              <div v-if="plan.duration >= 20" class="flex items-start gap-3">
                <div :class="[
                  'mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                  isMostPopular(plan, index) ? 'bg-gray-900' : 'bg-gray-700'
                ]">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span :class="isMostPopular(plan, index) ? 'text-gray-900 font-medium' : 'text-gray-300'">
                  Treatment plan & prescriptions
                </span>
              </div>
              <div v-if="plan.duration >= 20" class="flex items-start gap-3">
                <div :class="[
                  'mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                  isMostPopular(plan, index) ? 'bg-gray-900' : 'bg-gray-700'
                ]">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span :class="isMostPopular(plan, index) ? 'text-gray-900 font-medium' : 'text-gray-300'">
                  {{ plan.duration === 20 ? '7-day follow-up support' : '14-day priority support' }}
                </span>
              </div>
            </div>

            <NuxtLink 
              to="/register"
              @click="scrollToContact"
              :class="[
                'w-full block text-center py-3 rounded-xl text-lg font-medium transition-all duration-300',
                isMostPopular(plan, index)
                  ? 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg'
                  : 'bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 text-white'
              ]"
            >
              {{ isMostPopular(plan, index) ? 'Get Started Now' : 'Book Now' }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Physical Consultation Plans -->
      <div v-show="consultationType === 'physical'">
        <!-- Show loading state -->
        <div v-if="plansLoading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          <p class="text-gray-400 mt-4">Loading consultation plans...</p>
        </div>

        <!-- Physical plan card -->
        <div 
          v-else-if="physicalPlans.length > 0"
          class="max-w-2xl mx-auto"
        >
          <div class="group bg-white text-gray-900 rounded-2xl p-10 shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-3xl leading-tight font-light text-gray-900 mb-2">
                  In-Person Consultation
                </h3>
                <p class="text-gray-600">Complete physical examination at our clinic</p>
              </div>
              <div class="text-5xl">🏥</div>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline">
                <span class="text-6xl leading-tight font-light text-gray-900">
                  {{ formatPrice(physicalPlans[0].price) }}
                </span>
              </div>
              <p class="text-gray-600 mt-2 text-lg">{{ physicalPlans[0].duration }}-minute in-clinic session</p>
            </div>

            <!-- Features Grid -->
            <div class="grid md:grid-cols-2 gap-4 mb-10">
              <div class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Full physical examination</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Diagnostic tests available</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Specialist physicians</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Immediate prescriptions</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Lab work coordination</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Medical documentation</span>
              </div>
            </div>

            <!-- Clinic Hours - Now dynamically mapped -->
            <div class="bg-gray-100 rounded-2xl p-6 mb-8">
              <h4 class="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Clinic Hours
              </h4>
              <div class="space-y-2 text-gray-700">
                <div 
                  v-for="plan in physicalPlans" 
                  :key="plan._id"
                  class="flex justify-between items-center"
                >
                  <span>{{ getAvailableDaysText(plan).join(', ') }}</span>
                  <span class="font-semibold">
                    {{ formatTimeRange(plan.availableTimeRange) }}
                  </span>
                </div>
              </div>
            </div>

            <NuxtLink 
              to="/register"
              @click="scrollToContact"
              class="w-full block text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl text-lg font-medium transition-all duration-300 shadow-lg"
            >
              Schedule Clinic Visit
            </NuxtLink>
          </div>
        </div>

        <!-- No plans available message -->
        <div v-else class="max-w-2xl mx-auto text-center py-12">
          <div class="bg-gray-800 border border-gray-700 rounded-2xl p-12">
            <div class="text-6xl mb-4">🏥</div>
            <p class="text-gray-300 text-lg">No physical consultation plans available at the moment.</p>
            <p class="text-gray-400 mt-2">Please check back later or contact us for more information.</p>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center gap-3 bg-gray-800 border border-gray-700 rounded-full px-8 py-4">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span class="text-gray-300">All consultations are confidential and HIPAA compliant</span>
        </div>
      </div>
    </div>
  </section>

    <!-- Contact -->
    <section id="contact" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div class="space-y-6">
          <h2 class="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight">Get in Touch
          </h2>
          <div class="border-t border-gray-300 pt-6">
            <p class="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">Ready to take
              control of your health? Contact us today to schedule your consultation with our
              expert medical team.</p>
            <div class="space-y-4">
              <div class="flex items-start space-x-4">
                <svg class="w-6 h-6 text-gray-900 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p class="text-gray-900 font-medium">Email</p>
                  <a href="mailto:info.doctordey@gmail.com" class="text-gray-700">
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
                  <a href="tel:+2348034080064" class="text-gray-700">
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
            <div><label class="block text-sm font-medium text-gray-900 mb-2">Full
                Name</label><input v-model="form.name" type="text" required
                class="w-full px-4 py-3 border-[0.5px] rounded-xl border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="John Doe" /></div>
            <div><label class="block text-sm font-medium text-gray-900 mb-2">Email</label><input v-model="form.email"
                type="email" required
                class="w-full px-4 py-3 border-[0.5px] rounded-xl border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="john@example.com" /></div>
            <div><label class="block text-sm font-medium text-gray-900 mb-2">Phone</label><input v-model="form.phone"
                type="tel" required
                class="w-full px-4 py-3 border-[0.5px] rounded-xl border-gray-200 focus:outline-none focus:border-gray-900 transition-colors"
                placeholder="+1 (555) 000-0000" /></div>
            <div><label class="block text-sm font-medium text-gray-900 mb-2">Message</label><textarea
                v-model="form.message" required rows="4"
                class="w-full px-4 py-3 border-[0.5px] rounded-xl border-gray-200 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                placeholder="Tell us about your healthcare needs..."></textarea></div>
            <button type="submit" :disabled="loading"
              class="w-full bg-gray-900 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-25 text-white py-4 text-lg transition-colors rounded-xl">{{loading ? 'processing' : 'Send Message'}}
  </button>
          </form>
        </div>
      </div>
    </section>
    <!-- Footer -->

 <SuccessModal :show="showSuccessModal" @close="closeSuccessModal" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useCreateEnquiry } from "@/composables/modules/enquiry/useCreateEnquiry"
import { useGetAllConsultationPlans } from '@/composables/modules/consultation-plans/useGetAllConsultationPlans'

const { createEnquiry, loading } = useCreateEnquiry()
const { plans: allPlans, loading: plansLoading, getAllPlans } = useGetAllConsultationPlans()

const showSuccessModal = ref(false)
const mobileMenuOpen = ref(false)
const consultationType = ref<'virtual' | 'physical'>('virtual')

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

// Computed properties to filter and sort plans
const virtualPlans = computed(() => {
  if (!allPlans.value) return []
  return allPlans.value
    .filter(plan => plan.consultationType === 'virtual' && plan.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder)
})

const physicalPlans = computed(() => {
  if (!allPlans.value) return []
  return allPlans.value
    .filter(plan => plan.consultationType === 'physical' && plan.isActive)
    .sort((a, b) => a.sortOrder - b.sortOrder)
})

// Helper function to determine if a plan is most popular
const isMostPopular = (plan: any, index: number) => {
  if (plan.consultationType === 'virtual' && plan.duration === 20) {
    return true
  }
  return false
}

// Helper function to get plan icon
const getPlanIcon = (plan: any) => {
  if (plan.consultationType === 'physical') return '🏥'
  if (plan.duration === 10) return '⚡'
  if (plan.duration === 20) return '🎯'
  if (plan.duration === 30) return '💎'
  return '💊'
}

// Helper function to get plan title
const getPlanTitle = (plan: any) => {
  if (plan.consultationType === 'physical') return 'In-Person Consultation'
  if (plan.duration === 10) return 'Quick Connect'
  if (plan.duration === 20) return 'Standard Care'
  if (plan.duration === 30) return 'Extended Care'
  return plan.name
}

// Helper function to format price
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  }).format(price)
}

// Helper function to get available days text
const getAvailableDaysText = (plan: any) => {
  const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return plan.availableDays.map((day: number) => daysMap[day])
}

// Helper function to format time range
const formatTimeRange = (timeRange: string | null) => {
  if (!timeRange) return '9:00 AM - 5:00 PM'
  
  const [start, end] = timeRange.split('-')
  
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour
    return `${displayHour}:${minutes} ${ampm}`
  }
  
  return `${formatTime(start)} - ${formatTime(end)}`
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

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

const closeSuccessModal = () => {
  showSuccessModal.value = false
}

onMounted(async () => {
  await getAllPlans()
})

const selectDoctorAndRedirect = (doctorName: string) => {
  // Store selected doctor in localStorage or Pinia store
  if (process.client) {
    localStorage.setItem('selectedDoctor', doctorName)
  }
  // Redirect to login/register
  navigateTo('/login')
}
</script>

<style scoped>
[v-show] {
  transition: opacity 0.3s ease-in-out;
}
</style>