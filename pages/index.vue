<template>
  <div class="min-h-screen bg-gray-50">

     <!-- Hero Section -->
   <HeroSwection />

    <!-- About Us Section -->
     <AboutUs />


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
        <!-- Quick Connect - 10 mins -->
        <div class="group bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-300 hover:-translate-y-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-light leading-tight text-white">Quick Connect</h3>
            <div class="text-3xl">⚡</div>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-5xl font-light leading-tight text-white">₦20,000</span>
            </div>
            <p class="text-gray-400 mt-2">10-minute session</p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">Video or voice call</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">Quick medical advice</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">Prescription refills</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">Same-day availability</span>
            </div>
          </div>

          <NuxtLink to="/register"
            @click="scrollToContact"
            class="w-full block text-center bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 text-white py-3 rounded-xl text-lg font-mediun transition-all duration-300"
          >
            Book Now
          </NuxtLink>
        </div>

        <!-- Standard Care - 20 mins (MOST POPULAR) -->
        <div class="group bg-white text-gray-900 rounded-2xl p-8 transform lg:scale-105 shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div class="bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ MOST POPULAR
            </div>
          </div>

          <div class="pt-4">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-2xl font-light leading-tight text-gray-900">Standard Care</h3>
              <div class="text-3xl">🎯</div>
            </div>
            
            <div class="mb-6">
              <div class="flex items-baseline">
                <span class="text-6xl font-light leading-tight text-gray-900">₦30,000</span>
              </div>
              <p class="text-gray-600 mt-2">20-minute session</p>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-3">
                <div class="mt-1 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">HD video or voice call</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Comprehensive diagnosis</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Treatment plan & prescriptions</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">Medical records access</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-1 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-gray-900 font-medium">7-day follow-up support</span>
              </div>
            </div>

            <NuxtLink to="/register"
              @click="scrollToContact"
              class="w-full block text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl text-lg font-mediun transition-all duration-300 shadow-lg"
            >
              Get Started Now
            </NuxtLink>
          </div>
        </div>

        <!-- Extended Care - 30 mins -->
        <div class="group bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-gray-500 transition-all duration-300 hover:-translate-y-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-2xl font-light leading-tight text-white">Extended Care</h3>
            <div class="text-3xl">💎</div>
          </div>
          
          <div class="mb-6">
            <div class="flex items-baseline">
              <span class="text-5xl font-light leading-tight text-white">₦50,000</span>
            </div>
            <p class="text-gray-400 mt-2">30-minute session</p>
          </div>

          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">Premium video or voice call</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">In-depth consultation</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">Specialist referrals</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">Detailed treatment roadmap</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="mt-1 w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-300">14-day priority support</span>
            </div>
          </div>

          <NuxtLink to="/register"
            @click="scrollToContact"
            class="w-full block text-center bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500 text-white py-3 rounded-xl text-lg font-mediun transition-all duration-300"
          >
            Book Now
          </NuxtLink>
        </div>
      </div>

      <!-- Physical Consultation Plan -->
      <div v-show="consultationType === 'physical'" class="max-w-2xl mx-auto">
        <div class="group bg-white text-gray-900 rounded-2xl p-10 shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div>
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-3xl leading-tight font-light text-gray-900 mb-2">In-Person Consultation</h3>
                <p class="text-gray-600">Complete physical examination at our clinic</p>
              </div>
              <div class="text-5xl">🏥</div>
            </div>
            
            <div class="mb-8">
              <div class="flex items-baseline">
                <span class="text-6xl leading-tight font-light text-gray-900">₦100,000</span>
              </div>
              <p class="text-gray-600 mt-2 text-lg">30-minute in-clinic session</p>
            </div>

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

            <div class="bg-gray-100 rounded-2xl p-6 mb-8">
              <h4 class="text-gray-900 font-semibold mb-3 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Clinic Hours
              </h4>
              <div class="space-y-2 text-gray-700">
                <div class="flex justify-between items-center">
                  <span>Thursday</span>
                  <span class="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
                <div class="flex justify-between items-center">
                  <span>Saturday</span>
                  <span class="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>

            <NuxtLink to="/register"
              @click="scrollToContact"
              class="w-full block text-center bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl text-lg font-mediun transition-all duration-300 shadow-lg"
            >
              Schedule Clinic Visit
            </NuxtLink>
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
              class="w-full bg-gray-900 hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-25 text-white py-4 text-lg transition-colors">{{loading ? 'processing' : 'Send Message'}}
  </button>
          </form>
        </div>
      </div>
    </section>
    <!-- Footer -->

 <SuccessModal :show="showSuccessModal" @close="closeSuccessModal" />
  </div>
</template>

<!-- In your main component, add these updates: -->

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useCreateEnquiry } from "@/composables/modules/enquiry/useCreateEnquiry"

const { createEnquiry, loading } = useCreateEnquiry()

// Add this new ref
const showSuccessModal = ref(false)

const mobileMenuOpen = ref(false)
const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

// Update your handleSubmit function
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
    
    // Show success modal
    showSuccessModal.value = true
  })
}

// Add close modal handler
const closeSuccessModal = () => {
  showSuccessModal.value = false
}

const consultationType = ref<'virtual' | 'physical'>('virtual')
</script>

<style scoped>
/* Add smooth transitions */
[v-show] {
  transition: opacity 0.3s ease-in-out;
}
</style>