<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
    <!-- Floating Progress Bar -->
    <div class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between py-4">
          <div class="flex items-center gap-3">
            <button 
              v-if="currentStep > 1" 
              @click="previousStep"
              class="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-all"
            >
              <svg class="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <div>
              <h1 class="text-lg font-bold text-slate-900">Book Appointment</h1>
              <p class="text-xs text-slate-500">{{ stepTitles[currentStep - 1] }}</p>
            </div>
          </div>
          
          <div class="flex items-center gap-1">
            <div 
              v-for="s in 3" 
              :key="s"
              :class="[
                'h-1.5 rounded-full transition-all duration-500',
                currentStep >= s ? 'w-12 bg-blue-600' : 'w-8 bg-slate-200'
              ]"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 max-w-6xl">
      <!-- Doctor Quick Info (Compact) -->
      <div class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm p-4 mb-6 border border-slate-200/60">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
            👨‍⚕️
          </div>
          <div class="flex-1 min-w-0">
            <h2 class="text-base font-bold text-slate-900 truncate">{{ doctorName }}</h2>
            <p class="text-xs text-slate-600">{{ doctorSpecialty }} • ⭐ {{ doctorRating }}</p>
          </div>
          <button
            @click="showBiography = !showBiography"
            class="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
          >
            {{ showBiography ? 'Hide' : 'View' }} Bio
          </button>
        </div>

        <transition name="slide-down">
          <div v-if="showBiography" class="mt-4 pt-4 border-t border-slate-200">
            <p class="text-sm text-slate-600 leading-relaxed">{{ doctorBio }}</p>
          </div>
        </transition>
      </div>

      <!-- Main Content Area -->
      <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200/60 overflow-hidden">
        <transition name="slide-fade" mode="out-in">
          <!-- Step 1: Select Plan -->
          <div v-if="currentStep === 1" key="step1" class="p-6 md:p-8">
            <div class="text-center mb-8">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 mb-2">Choose Your Plan</h2>
              <p class="text-slate-600">Select a consultation plan that fits your needs</p>
            </div>

            <!-- Loading State -->
            <div v-if="plansLoading" class="flex flex-col items-center justify-center py-16">
              <div class="w-12 h-12 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
              <p class="text-sm text-slate-500">Loading plans...</p>
            </div>

              <!-- In your plans grid -->
  <div v-else-if="eligiblePlans && eligiblePlans.length > 0" class="space-y-3">
    <button
      v-for="plan in eligiblePlans"
      :key="plan._id"
      @click="selectPlan(plan)"
      :class="[
        'w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left group',
        selectedPlan?._id === plan._id
          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg scale-[1.02]'
          : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
      ]"
    >
      <div class="flex items-start justify-between gap-4">
        <div class="flex items-start gap-4 flex-1 min-w-0">
          <div :class="[
            'w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all',
            selectedPlan?._id === plan._id ? 'bg-blue-100 scale-110' : 'bg-slate-100 group-hover:bg-blue-50'
          ]">
            {{ getPlanIcon(plan) }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <h3 class="font-bold text-base text-slate-900">{{ plan.name }}</h3>
              
              <!-- New Patient Badge -->
              <span 
                v-if="plan.isNewPatientOnly" 
                class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold"
              >
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                New Patients
              </span>
              
              <!-- Existing Patient Badge -->
              <span 
                v-if="plan.isExistingPatientOnly" 
                class="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold"
              >
                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Existing Patients
              </span>
              
              <!-- All Patients (default) -->
              <span 
                v-if="!plan.isNewPatientOnly && !plan.isExistingPatientOnly" 
                class="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold"
              >
                All Patients
              </span>
            </div>
            
            <p class="text-sm text-slate-600 mb-3 line-clamp-2">{{ plan.description }}</p>
            
            <div class="flex flex-wrap items-center gap-3 text-xs">
              <span class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 rounded-full text-slate-700">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {{ plan.duration }} mins
              </span>
              <span class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 rounded-full text-slate-700 capitalize">
                {{ plan.consultationCategory }}
              </span>
              <span v-if="plan.availableDays?.length" class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 rounded-full text-slate-700">
                {{ getAvailableDaysText(plan.availableDays) }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-end gap-2 flex-shrink-0">
          <p class="text-2xl font-black text-blue-600">₦{{ plan.price.toLocaleString() }}</p>
          <transition name="scale">
            <div 
              v-if="selectedPlan?._id === plan._id" 
              class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"
            >
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </transition>
        </div>
      </div>
    </button>
  </div>

  <!-- No Eligible Plans Message -->
  <div v-else-if="!plansLoading && patientStatus" class="text-center py-16">
    <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
      </svg>
    </div>
    <p class="text-slate-600 mb-2">No consultation plans available for you</p>
    <p class="text-sm text-slate-500">
      <span v-if="patientStatus.isNewPatient">Complete your first appointment to access more plans</span>
      <span v-else>Please check back later for new plans</span>
    </p>
  </div>

<!--  
            <div v-else-if="allPlans && allPlans.length > 0" class="space-y-3">
              <button
                v-for="plan in allPlans"
                :key="plan._id"
                @click="selectPlan(plan)"
                :class="[
                  'w-full p-5 rounded-2xl border-2 transition-all duration-300 text-left group',
                  selectedPlan?._id === plan._id
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg scale-[1.02]'
                    : 'border-slate-200 hover:border-blue-300 hover:shadow-md'
                ]"
              >
                <div class="flex items-start justify-between gap-4">
                  <div class="flex items-start gap-4 flex-1 min-w-0">
                    <div :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-all',
                      selectedPlan?._id === plan._id ? 'bg-blue-100 scale-110' : 'bg-slate-100 group-hover:bg-blue-50'
                    ]">
                      {{ getPlanIcon(plan) }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-bold text-base text-slate-900 mb-1">{{ plan.name }}</h3>
                      <p class="text-sm text-slate-600 mb-3 line-clamp-2">{{ plan.description }}</p>
                      
                      <div class="flex flex-wrap items-center gap-3 text-xs">
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 rounded-full text-slate-700">
                          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {{ plan.duration }} mins
                        </span>
                        <span class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 rounded-full text-slate-700 capitalize">
                          {{ plan.consultationCategory }}
                        </span>
                        <span v-if="plan.availableDays?.length" class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 rounded-full text-slate-700">
                          {{ getAvailableDaysText(plan.availableDays) }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col items-end gap-2 flex-shrink-0">
                    <p class="text-2xl font-black text-blue-600">₦{{ plan.price.toLocaleString() }}</p>
                    <transition name="scale">
                      <div 
                        v-if="selectedPlan?._id === plan._id" 
                        class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center"
                      >
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </transition>
                  </div>
                </div>
              </button>
            </div>


            <div v-else class="text-center py-16">
              <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <p class="text-slate-600">No consultation plans available</p>
            </div> -->
          </div>

          <!-- Step 2: Select Date & Time -->
          <div v-else-if="currentStep === 2" key="step2" class="p-6 md:p-8">
            <div class="text-center mb-8">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 mb-4">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 mb-2">Pick Date & Time</h2>
              <p class="text-slate-600">Select when you'd like to meet</p>
            </div>

            <!-- Selected Plan Badge -->
            <div v-if="selectedPlan" class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-blue-200">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="text-2xl">{{ getPlanIcon(selectedPlan) }}</div>
                  <div>
                    <p class="font-semibold text-slate-900 text-sm">{{ selectedPlan.name }}</p>
                    <p class="text-xs text-slate-600">{{ selectedPlan.duration }} minutes • ₦{{ selectedPlan.price.toLocaleString() }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-6">
              <!-- Calendar Section -->
              <div>
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-bold text-slate-900">Select Date</h3>
                  <div class="flex gap-1">
                    <button
                      @click="previousMonth"
                      class="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                    </button>
                    <button
                      @click="nextMonth"
                      class="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-all"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <p class="text-sm font-medium text-slate-600 mb-3">{{ currentMonthYear }}</p>

                <div class="grid grid-cols-7 gap-1 mb-2">
                  <div v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']" :key="day" class="text-center text-xs font-semibold text-slate-500 py-2">
                    {{ day }}
                  </div>
                </div>

                <div class="grid grid-cols-7 gap-1">
                  <button
                    v-for="(day, idx) in calendarDays"
                    :key="idx"
                    @click="selectDate(day)"
                    :disabled="!day || !day.isEnabled"
                    :class="[
                      'aspect-square rounded-lg text-sm font-medium transition-all',
                      !day ? 'invisible' :
                      !day.isEnabled ? 'bg-slate-50 text-slate-300 cursor-not-allowed' :
                      selectedDate === day.dateString ? 'bg-blue-600 text-white shadow-lg scale-110' :
                      'bg-slate-50 hover:bg-blue-100 hover:scale-105'
                    ]"
                  >
                    {{ day?.day }}
                  </button>
                </div>
              </div>

              <!-- Time Slots Section -->
              <div>
                <h3 class="font-bold text-slate-900 mb-4">Available Times</h3>

                <div v-if="!selectedDate" class="flex flex-col items-center justify-center py-16 text-center">
                  <svg class="w-12 h-12 text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p class="text-sm text-slate-500">Select a date first</p>
                </div>

                <div v-else-if="availLoading" class="flex flex-col items-center justify-center py-16">
                  <div class="w-10 h-10 border-3 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-3"></div>
                  <p class="text-sm text-slate-500">Loading slots...</p>
                </div>

                <div v-else-if="generatedTimeSlots.length === 0" class="flex flex-col items-center justify-center py-16 text-center">
                  <svg class="w-12 h-12 text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p class="text-sm text-slate-500">No available slots for this date</p>
                </div>

                <div v-else class="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                  <div v-for="(group, period) in groupedTimeSlots" :key="period">
                    <h4 class="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2 capitalize">{{ period }}</h4>
                    <div class="grid grid-cols-3 gap-2">
                      <button
                        v-for="slot in group"
                        :key="`${slot.startTime}-${slot.endTime}`"
                        @click="selectTimeSlot(slot)"
                        :class="[
                          'py-2.5 px-2 rounded-lg text-xs font-medium transition-all',
                          selectedSlot?.startTime === slot.startTime && selectedSlot?.endTime === slot.endTime
                            ? 'bg-purple-600 text-white shadow-md scale-105'
                            : 'bg-slate-50 text-slate-700 hover:bg-purple-50 hover:text-purple-600'
                        ]"
                      >
                        {{ formatTimeSlot(slot.startTime) }}
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Consultation Mode (for virtual) -->
                <transition name="slide-down">
                  <div v-if="selectedSlot && selectedPlan?.consultationCategory === 'virtual'" class="mt-6 pt-6 border-t border-slate-200">
                    <h4 class="font-semibold text-slate-900 mb-3 text-sm">Consultation Mode</h4>
                    <div class="grid grid-cols-2 gap-3">
                      <button
                        v-for="mode in selectedPlan.consultationModes"
                        :key="mode"
                        @click="consultationMode = mode"
                        :class="[
                          'p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2',
                          consultationMode === mode
                            ? 'border-purple-500 bg-purple-50 scale-105'
                            : 'border-slate-200 hover:border-purple-300'
                        ]"
                      >
                        <div class="text-2xl">{{ mode === 'video' ? '📹' : '🎤' }}</div>
                        <span class="text-xs font-semibold text-slate-900 capitalize">{{ mode }}</span>
                      </button>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>

          <!-- Step 3: Confirmation -->
          <div v-else-if="currentStep === 3" key="step3" class="p-6 md:p-8">
            <div class="text-center mb-8">
              <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 mb-2">Review & Confirm</h2>
              <p class="text-slate-600">Check your appointment details</p>
            </div>

            <div class="max-w-2xl mx-auto">
              <div class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 mb-6">
                <div class="space-y-5">
                  <!-- Plan -->
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
                      {{ getPlanIcon(selectedPlan) }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs text-slate-500 font-medium mb-1">Consultation Plan</p>
                      <p class="font-bold text-slate-900">{{ selectedPlan?.name }}</p>
                      <p class="text-sm text-slate-600">{{ selectedPlan?.duration }} minutes</p>
                    </div>
                  </div>

                  <!-- Mode (virtual) -->
                  <div v-if="selectedPlan?.consultationCategory === 'virtual'" class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
                      {{ consultationMode === 'video' ? '📹' : '🎤' }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs text-slate-500 font-medium mb-1">Consultation Mode</p>
                      <p class="font-bold text-slate-900 capitalize">{{ consultationMode }} Call</p>
                    </div>
                  </div>

                  <!-- Date & Time -->
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                      <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs text-slate-500 font-medium mb-1">Appointment Date & Time</p>
                      <p class="font-bold text-slate-900">{{ formattedSelectedDate }}</p>
                      <p class="text-sm text-slate-600">{{ formatTimeSlot(selectedSlot?.startTime) }} - {{ formatTimeSlot(selectedSlot?.endTime) }}</p>
                    </div>
                  </div>

                  <!-- Location (physical) -->
                  <div v-if="selectedPlan?.consultationCategory === 'physical'" class="flex items-start gap-4">
                    <div class="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
                      📍
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="text-xs text-slate-500 font-medium mb-1">Location</p>
                      <p class="font-semibold text-slate-900 text-sm">{{ settings?.clinicLocation || 'Address not available' }}</p>
                    </div>
                  </div>

                  <!-- Total -->
                  <div class="pt-5 border-t border-slate-200 flex items-center justify-between">
                    <div>
                      <p class="text-xs text-slate-500 font-medium mb-1">Total Amount</p>
                      <p class="text-3xl font-black text-blue-600">₦{{ selectedPlan?.price.toLocaleString() }}</p>
                    </div>
                    <div class="inline-flex items-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-lg text-xs font-semibold">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      Secure
                    </div>
                  </div>
                </div>
              </div>

              <!-- Important Notes -->
              <div class="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <h4 class="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                  Before You Proceed
                </h4>
                <ul class="space-y-2 text-sm text-slate-700">
                  <li class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Confirmation email will be sent after payment</span>
                  </li>
                  <li v-if="selectedPlan?.consultationCategory === 'virtual'" class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Meeting link will be available in your appointments</span>
                  </li>
                  <li v-if="selectedPlan?.consultationCategory === 'physical'" class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Please arrive 10 minutes before your appointment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <!-- Action Button -->
      <div v-if="currentStep < 3" class="mt-6">
        <button
          @click="nextStep"
          :disabled="!canProceed"
          class="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
        >
          <span>Continue</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div v-else class="mt-6">
        <button
          @click="handleBooking"
          :disabled="bookingLoading || initiating"
          class="w-full py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg v-if="bookingLoading || initiating" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <span v-if="bookingLoading || initiating">Processing...</span>
          <span v-else>
            <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Proceed to Payment
          </span>
        </button>
      </div>
    </div>

    <!-- Success Modal -->
    <transition name="modal">
      <div v-if="showSuccessModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click="closeSuccessModal">
        <div class="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-scaleIn" @click.stop>
          <div class="flex justify-center mb-6">
            <div class="relative">
              <div class="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div class="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-slate-900 text-center mb-2">Payment Successful!</h3>
          <p class="text-slate-600 text-center mb-6 text-sm">Your appointment has been confirmed</p>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 mb-6 border border-green-200">
            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-slate-600">Plan</span>
                <span class="font-bold text-slate-900">{{ selectedPlan?.name }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-600">Date</span>
                <span class="font-bold text-slate-900">{{ formattedSelectedDate }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-600">Time</span>
                <span class="font-bold text-slate-900">{{ formatTimeSlot(selectedSlot?.startTime) }}</span>
              </div>
              <div class="pt-3 border-t border-green-200 flex justify-between items-center">
                <span class="font-bold text-slate-900">Paid</span>
                <span class="text-2xl font-black text-green-600">₦{{ selectedPlan?.price.toLocaleString() }}</span>
              </div>
            </div>
          </div>

          <div v-if="paymentCallbackData.meetLink && selectedPlan?.consultationCategory === 'virtual'" class="bg-purple-50 rounded-xl p-4 mb-6 border border-purple-200">
            <h4 class="font-bold text-slate-900 mb-2 text-sm">Virtual Meeting</h4>
            <a
              :href="paymentCallbackData.meetLink"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold text-center text-sm hover:from-purple-700 hover:to-purple-800 transition-all"
            >
              Join Meeting
            </a>
          </div>

          <button
            @click="closeSuccessModal"
            class="w-full py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-all"
          >
            View Appointments
          </button>
        </div>
      </div>
    </transition>

    <!-- Error Modal -->
    <transition name="modal">
      <div v-if="showErrorModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click="closeErrorModal">
        <div class="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8" @click.stop>
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center shadow-lg">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-slate-900 text-center mb-2">Payment Failed</h3>
          <p class="text-slate-600 text-center mb-6 text-sm">{{ errorMessage || 'Unable to process payment' }}</p>

          <div class="space-y-3">
            <button
              @click="retryPayment"
              class="w-full py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:bg-slate-800 transition-all"
            >
              Try Again
            </button>
            <button
              @click="closeErrorModal"
              class="w-full py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Processing Modal -->
    <transition name="modal">
      <div v-if="processingPayment" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 text-center">
          <div class="relative mb-6">
            <div class="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          </div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">Verifying Payment</h3>
          <p class="text-slate-600 text-sm">Please wait...</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { ConsultationPlan } from '@/api_factory/modules/consultation-plans'
import { useGetSettings } from '@/composables/modules/public/useGetSettings'
import { useCreateAppointment } from '@/composables/modules/appointments/useCreateAppointment'
import { useGetAvailabilityByDate } from '@/composables/modules/public/useGetAvailabilityByDate'
import { useInitiatePayment } from '@/composables/modules/payments/useInitiatePayment'
import { useGetAllConsultationPlans } from '@/composables/modules/consultation-plans/useGetAllConsultationPlans'
import { useGetPatientStatus } from '@/composables/modules/appointments/useGetPatientStatus'
import { useUser } from '@/composables/modules/auth/user'

definePageMeta({
  middleware: 'auth',
  layout: 'user'
})

const router = useRouter()
const route = useRoute()
const { user } = useUser()

// Composables
const { loading: initiating, initiatePayment } = useInitiatePayment()
const { settings, loading: settingsLoading } = useGetSettings()
const { createAppointment, loading: bookingLoading } = useCreateAppointment()
const { availability, loading: availLoading, getAvailabilityByDate } = useGetAvailabilityByDate()
const { plans: allPlans, loading: plansLoading, getAllPlans } = useGetAllConsultationPlans()
const { patientStatus, loading: statusLoading, getPatientStatus } = useGetPatientStatus()
// Doctor info (these should ideally come from settings or API)
const doctorName = computed(() => settings.value?.doctorName || 'Dr. Nwachi Patrick')
const doctorSpecialty = computed(() => settings.value?.doctorSpecialty || 'General Practitioner')
const doctorRating = computed(() => settings.value?.doctorRating || '4.8')
const doctorExperience = computed(() => settings.value?.doctorExperience || '24+ years')
const doctorBio = computed(() => settings.value?.doctorBio || 'Dr. Nwachi Patrick is a dedicated healthcare professional with over 24 years of experience providing comprehensive medical care. He specialises in family medicine (general practice) and lifestyle medicine. He also offers a range of therapy and counselling services.')

// State
const currentStep = ref(1)
const selectedPlan = ref<ConsultationPlan | null>(null)
const selectedDate = ref<string | null>(null)
const selectedSlot = ref<{ startTime: string; endTime: string } | null>(null)
const consultationMode = ref<'video' | 'voice'>('video')
const showBiography = ref(false)
const currentMonthDate = ref(new Date())

// Modals
const showSuccessModal = ref(false)
const showErrorModal = ref(false)
const processingPayment = ref(false)
const errorMessage = ref('')
const paymentCallbackData = ref<any>({})

const stepTitles = [
  'Choose consultation plan',
  'Select date and time',
  'Review and confirm'
]

// Helper function to convert time string to minutes
const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

// Helper function to convert minutes to time string
const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
}

// Generate time slots based on consultation duration
const generateTimeSlots = (startTime: string, endTime: string, duration: number) => {
  const slots: { startTime: string; endTime: string }[] = []
  const startMinutes = timeToMinutes(startTime)
  const endMinutes = timeToMinutes(endTime)
  
  let currentMinutes = startMinutes
  
  while (currentMinutes + duration <= endMinutes) {
    const slotStart = minutesToTime(currentMinutes)
    const slotEnd = minutesToTime(currentMinutes + duration)
    slots.push({ startTime: slotStart, endTime: slotEnd })
    currentMinutes += duration
  }
  
  return slots
}

// Computed
const currentMonthYear = computed(() => {
  return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentMonthDate.value)
})

// const calendarDays = computed(() => {
//   const year = currentMonthDate.value.getFullYear()
//   const month = currentMonthDate.value.getMonth()
//   const firstDay = new Date(year, month, 1)
//   const lastDay = new Date(year, month + 1, 0)
//   const daysInMonth = lastDay.getDate()
//   const startingDayOfWeek = firstDay.getDay()

//   const days: any[] = []
//   const today = new Date()
//   today.setHours(0, 0, 0, 0)

//   // Empty cells for days before month starts
//   for (let i = 0; i < startingDayOfWeek; i++) {
//     days.push(null)
//   }

//   // Days of the month
//   for (let day = 1; day <= daysInMonth; day++) {
//     const date = new Date(year, month, day)
//     const dateString = date.toISOString().split('T')[0]
//     const dayOfWeek = date.getDay()
    
//     // Check if date is in the past
//     const isPast = date < today
    
//     // Check if day is enabled based on selected plan
//     let isEnabled = !isPast
//     if (selectedPlan.value?.availableDays && selectedPlan.value.availableDays.length > 0) {
//       isEnabled = isEnabled && selectedPlan.value.availableDays.includes(dayOfWeek)
//     }

//     days.push({
//       day,
//       date,
//       dateString,
//       isPast,
//       isEnabled
//     })
//   }

//   return days
// })

// Generate time slots based on availability and consultation duration
// const generatedTimeSlots = computed(() => {
//   if (!availability.value || !Array.isArray(availability.value.availability)) return []
//   if (!selectedPlan.value) return []

//   const slots: { startTime: string; endTime: string }[] = []
  
//   // Filter availability based on consultation category
//   const relevantAvailability = availability.value.availability.filter((avail: any) => {
//     // If plan is physical, use physical availability
//     if (selectedPlan.value?.consultationCategory === 'physical') {
//       return avail.allowedConsultationTypes?.includes('physical') || 
//              (!avail.allowedConsultationTypes || avail.allowedConsultationTypes.length === 0)
//     }
    
//     // If plan is virtual, check consultation modes
//     if (selectedPlan.value?.consultationCategory === 'virtual') {
//       return avail.allowedConsultationModes?.some((mode: string) => 
//         selectedPlan.value?.consultationModes?.includes(mode)
//       ) || (!avail.allowedConsultationModes || avail.allowedConsultationModes.length === 0)
//     }
    
//     return true
//   })

//   // Generate slots from each availability window
//   relevantAvailability.forEach((avail: any) => {
//     if (avail.isAvailable && Array.isArray(avail.timeSlots)) {
//       avail.timeSlots.forEach((timeSlot: any) => {
//         if (timeSlot.isAvailable) {
//           const generatedSlots = generateTimeSlots(
//             timeSlot.startTime,
//             timeSlot.endTime,
//             selectedPlan.value!.duration
//           )
//           slots.push(...generatedSlots)
//         }
//       })
//     }
//   })

//   // Remove duplicates and sort
//   const uniqueSlots = Array.from(
//     new Set(slots.map(s => `${s.startTime}-${s.endTime}`))
//   ).map(str => {
//     const [startTime, endTime] = str.split('-')
//     return { startTime, endTime }
//   }).sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))

//   return uniqueSlots
// })

const calendarDays = computed(() => {
  const year = currentMonthDate.value.getFullYear()
  const month = currentMonthDate.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const days: any[] = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Empty cells for days before month starts
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null)
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day)
    
    // Create date string without timezone conversion
    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    
    const dayOfWeek = date.getDay()
    
    // Check if date is in the past
    const isPast = date < today
    
    // Check if day is enabled based on selected plan
    let isEnabled = !isPast
    if (selectedPlan.value?.availableDays && selectedPlan.value.availableDays.length > 0) {
      isEnabled = isEnabled && selectedPlan.value.availableDays.includes(dayOfWeek)
    }

    days.push({
      day,
      date,
      dateString,
      isPast,
      isEnabled
    })
  }

  return days
})

const isTimeInRange = (time: string, rangeStart: string, rangeEnd: string): boolean => {
  return time >= rangeStart && time <= rangeEnd
}

// Generate time slots based on availability and consultation duration
const generatedTimeSlots = computed(() => {
  if (!availability.value || !Array.isArray(availability.value.availability)) return []
  if (!selectedPlan.value) return []

  const slots: { startTime: string; endTime: string }[] = []
  
  // Filter availability based on consultation category
  const relevantAvailability = availability.value.availability.filter((avail: any) => {
    // If plan is physical, use physical availability
    if (selectedPlan.value?.consultationCategory === 'physical') {
      return avail.allowedConsultationTypes?.includes('physical') || 
             (!avail.allowedConsultationTypes || avail.allowedConsultationTypes.length === 0)
    }
    
    // If plan is virtual, check consultation modes
    if (selectedPlan.value?.consultationCategory === 'virtual') {
      return avail.allowedConsultationModes?.some((mode: string) => 
        selectedPlan.value?.consultationModes?.includes(mode)
      ) || (!avail.allowedConsultationModes || avail.allowedConsultationModes.length === 0)
    }
    
    return true
  })

  // Generate slots from each availability window
  relevantAvailability.forEach((avail: any) => {
    if (avail.isAvailable && Array.isArray(avail.timeSlots)) {
      avail.timeSlots.forEach((timeSlot: any) => {
        if (timeSlot.isAvailable) {
          let generatedSlots = generateTimeSlots(
            timeSlot.startTime,
            timeSlot.endTime,
            selectedPlan.value!.duration
          )

          // Filter slots based on plan's availableTimeRange
          if (selectedPlan.value?.availableTimeRange) {
            const [planStartTime, planEndTime] = selectedPlan.value.availableTimeRange.split('-')
            generatedSlots = generatedSlots.filter(slot => {
              return isTimeInRange(slot.startTime, planStartTime, planEndTime) &&
                     isTimeInRange(slot.endTime, planStartTime, planEndTime)
            })
          }

          slots.push(...generatedSlots)
        }
      })
    }
  })

  // Remove duplicates and sort
  const uniqueSlots = Array.from(
    new Set(slots.map(s => `${s.startTime}-${s.endTime}`))
  ).map(str => {
    const [startTime, endTime] = str.split('-')
    return { startTime, endTime }
  }).sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))

  return uniqueSlots
})

// Group time slots by period (morning, afternoon, evening)
const groupedTimeSlots = computed(() => {
  const groups: Record<string, typeof generatedTimeSlots.value> = {
    morning: [],
    afternoon: [],
    evening: []
  }

  generatedTimeSlots.value.forEach(slot => {
    const hour = parseInt(slot.startTime.split(':')[0])
    if (hour >= 6 && hour < 12) {
      groups.morning.push(slot)
    } else if (hour >= 12 && hour < 17) {
      groups.afternoon.push(slot)
    } else if (hour >= 17 && hour < 22) {
      groups.evening.push(slot)
    }
  })

  // Remove empty groups
  Object.keys(groups).forEach(key => {
    if (groups[key].length === 0) {
      delete groups[key]
    }
  })

  return groups
})

const formattedSelectedDate = computed(() => {
  if (!selectedDate.value) return ''
  const date = new Date(selectedDate.value + 'T00:00:00')
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
})

const canProceed = computed(() => {
  if (currentStep.value === 1) return selectedPlan.value !== null
  if (currentStep.value === 2) {
    const hasSlot = selectedDate.value !== null && selectedSlot.value !== null
    if (selectedPlan.value?.consultationCategory === 'virtual') {
      return hasSlot && consultationMode.value !== null
    }
    return hasSlot
  }
  return true
})

// Methods
const getPlanIcon = (plan: ConsultationPlan | null) => {
  if (!plan) return '📋'
  
  if (plan.consultationType === 'follow_up') return '🔄'
  if (plan.consultationCategory === 'virtual') return '💻'
  if (plan.consultationCategory === 'physical') return '🏥'
  
  return '📋'
}

const getAvailableDaysText = (days: number[]) => {
  if (!days || days.length === 0) return 'No specific days'
  if (days.length === 7) return 'All days'
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayStrings = days.map(d => dayNames[d])
  
  if (dayStrings.length <= 3) {
    return dayStrings.join(', ')
  }
  
  return `${dayStrings.length} days/week`
}

const selectPlan = (plan: ConsultationPlan) => {
  selectedPlan.value = plan
  selectedDate.value = null
  selectedSlot.value = null
  
  // Set default consultation mode
  if (plan.consultationModes && plan.consultationModes.length > 0) {
    consultationMode.value = plan.consultationModes[0] as 'video' | 'voice'
  }
}

const previousMonth = () => {
  currentMonthDate.value = new Date(
    currentMonthDate.value.getFullYear(),
    currentMonthDate.value.getMonth() - 1,
    1
  )
}

// Filter eligible plans
const eligiblePlans = computed(() => {
  if (!allPlans.value || !patientStatus.value) return []
  
  return allPlans.value.filter(plan => {
    // If plan is for new patients only
    if (plan.isNewPatientOnly && !patientStatus.value.isNewPatient) {
      return false
    }
    
    // If plan is for existing patients only
    if (plan.isExistingPatientOnly && !patientStatus.value.isExistingPatient) {
      return false
    }
    
    // Plan is available for all or matches patient status
    return true
  })
})

const nextMonth = () => {
  currentMonthDate.value = new Date(
    currentMonthDate.value.getFullYear(),
    currentMonthDate.value.getMonth() + 1,
    1
  )
}

// const selectDate = async (day: any) => {
//   if (!day || !day.isEnabled) return
  
//   selectedDate.value = day.dateString
//   selectedSlot.value = null
  
//   // Fetch availability for selected date
//   if (selectedPlan.value) {
//     await getAvailabilityByDate({
//       date: day.dateString,
//       consultationType: selectedPlan.value.consultationCategory
//     })
//   }
// }

const selectDate = async (day: any) => {
  if (!day || !day.isEnabled) return
  
  selectedDate.value = day.dateString
  selectedSlot.value = null
  
  // Fetch availability for selected date
  if (selectedPlan.value) {
    await getAvailabilityByDate({
      date: day.dateString, // This is already in YYYY-MM-DD format
      consultationType: selectedPlan.value.consultationCategory
    })
  }
}

const selectTimeSlot = (slot: { startTime: string; endTime: string }) => {
  selectedSlot.value = slot
}

const formatTimeSlot = (time?: string) => {
  if (!time) return ''
  const [h, m] = time.split(':')
  const hh = parseInt(h, 10)
  const period = hh >= 12 ? 'PM' : 'AM'
  const displayHour = hh % 12 || 12
  return `${displayHour}:${m} ${period}`
}

const nextStep = () => {
  if (canProceed.value && currentStep.value < 3) {
    currentStep.value++
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// const handleBooking = async () => {
//   if (!selectedPlan.value || !selectedDate.value || !selectedSlot.value) return

//   try {
//     const timeSlot = `${selectedSlot.value.startTime}-${selectedSlot.value.endTime}`

//     // Parse the date correctly to avoid timezone issues
//     const appointmentDate = new Date(selectedDate.value + 'T00:00:00')
    
//     // Create appointment payload
//     const appointmentPayload: any = {
//       planId: selectedPlan.value._id,
//       // consultationType: selectedPlan.value.consultationType,
//       consultationType: selectedPlan.value.consultationType || 
//                  (patientStatus.value?.isNewPatient ? 'first_contact' : 'follow_up'),
//       consultationCategory: selectedPlan.value.consultationCategory,
//       date: selectedDate.value,
//       // date: appointmentDate.toISOString(), // Send as ISO string
//       timeSlot: timeSlot,
//       price: selectedPlan.value.price,
//       duration: selectedPlan.value.duration
//     }

//     // Add consultation mode for virtual consultations
//     if (selectedPlan.value.consultationCategory === 'virtual') {
//       appointmentPayload.consultationMode = consultationMode.value
//     } else if (selectedPlan.value.consultationCategory === 'physical') {
//       // Set consultation mode as in_person for physical appointments
//       appointmentPayload.consultationMode = 'in_person'
//     }

//     // Add location for physical consultations
//     if (selectedPlan.value.consultationCategory === 'physical' && settings.value?.clinicLocation) {
//       appointmentPayload.location = settings.value.clinicLocation
//     }

//     // Create the appointment
//     const appointmentResult = await createAppointment(appointmentPayload)

//     if (!appointmentResult || !appointmentResult._id) {
//       throw new Error('Failed to create appointment')
//     }

//     // Prepare payment payload
//     const paymentPayload = {
//       appointmentId: appointmentResult._id,
//       amount: selectedPlan.value.price,
//       paymentMethod: 'Paystack' as const,
//       email: user?.value?.email || '',
//       phone: user?.value?.phone || '+2348012345678',
//       address: user?.value?.address || settings.value?.clinicLocation || 'Not provided',
//       customerName: `${user?.value?.firstName || ''} ${user?.value?.lastName || ''}`.trim() || 'Customer',
//       description: `Payment for ${selectedPlan.value.name}`
//     }

//     // Initiate payment
//     const paymentResult = await initiatePayment(paymentPayload)

//     if (!paymentResult || !paymentResult.authorization_url) {
//       throw new Error('Failed to initiate payment')
//     }

//     // Redirect to payment gateway
//     window.location.href = paymentResult.authorization_url

//   } catch (error: any) {
//     console.error('Booking error:', error)
//     errorMessage.value = error?.message || 'Failed to process booking. Please try again.'
//     showErrorModal.value = true
//   }
// }

// const handleBooking = async () => {
//   if (!selectedPlan.value || !selectedDate.value || !selectedSlot.value) return

//   try {
//     const timeSlot = `${selectedSlot.value.startTime}-${selectedSlot.value.endTime}`

//     // Create appointment
//     const appointmentPayload: any = {
//       planId: selectedPlan.value._id,
//       consultationType: selectedPlan.value.consultationType,
//       date: selectedDate.value,
//       timeSlot: timeSlot,
//       price: selectedPlan.value.price,
//       duration: selectedPlan.value.duration
//     }

//     // Add consultation mode for virtual
//     if (selectedPlan.value.consultationCategory === 'virtual') {
//       appointmentPayload.consultationMode = consultationMode.value
//     }

//     // Add location for physical
//     if (selectedPlan.value.consultationCategory === 'physical' && settings.value?.clinicLocation) {
//       appointmentPayload.location = settings.value.clinicLocation
//     }

//     const appointmentResult = await createAppointment(appointmentPayload)

//     if (!appointmentResult || !appointmentResult._id) {
//       throw new Error('Failed to create appointment')
//     }

//     // Initiate payment
//     const paymentPayload = {
//       appointmentId: appointmentResult._id,
//       amount: selectedPlan.value.price,
//       paymentMethod: 'Paystack' as const,
//       email: user?.value?.email || '',
//       phone: user?.value?.phone || '+2348012345678',
//       address: user?.value?.address || settings.value?.clinicLocation || 'Not provided',
//       customerName: `${user?.value?.firstName || ''} ${user?.value?.lastName || ''}`.trim() || 'Customer',
//       description: `Payment for ${selectedPlan.value.name}`
//     }

//     const paymentResult = await initiatePayment(paymentPayload)

//     if (!paymentResult || !paymentResult.authorization_url) {
//       throw new Error('Failed to initiate payment')
//     }

//     // Redirect to payment
//     window.location.href = paymentResult.authorization_url

//   } catch (error: any) {
//     console.error('Booking error:', error)
//     errorMessage.value = error.message || 'Failed to process booking'
//     showErrorModal.value = true
//   }
// }

// const handleBooking = async () => {
//   if (!selectedPlan.value || !selectedDate.value || !selectedSlot.value) return

//   try {
//     const timeSlot = `${selectedSlot.value.startTime}-${selectedSlot.value.endTime}`

//     // Create appointment payload
//     const appointmentPayload: any = {
//       planId: selectedPlan.value._id,
//       consultationType: selectedPlan.value.consultationType,
//       consultationCategory: selectedPlan.value.consultationCategory,
//       date: selectedDate.value,
//       timeSlot: timeSlot,
//       price: selectedPlan.value.price,
//       duration: selectedPlan.value.duration
//     }

//     // Add consultation mode for virtual consultations
//     if (selectedPlan.value.consultationCategory === 'virtual') {
//       appointmentPayload.consultationMode = consultationMode.value
//     } else if (selectedPlan.value.consultationCategory === 'physical') {
//       // Set consultation mode as in_person for physical appointments
//       appointmentPayload.consultationMode = 'in_person'
//     }

//     // Add location for physical consultations
//     if (selectedPlan.value.consultationCategory === 'physical' && settings.value?.clinicLocation) {
//       appointmentPayload.location = settings.value.clinicLocation
//     }

//     // Create the appointment
//     const appointmentResult = await createAppointment(appointmentPayload)

//     if (!appointmentResult || !appointmentResult._id) {
//       throw new Error('Failed to create appointment')
//     }

//     // Prepare payment payload
//     const paymentPayload = {
//       appointmentId: appointmentResult._id,
//       amount: selectedPlan.value.price,
//       paymentMethod: 'Paystack' as const,
//       email: user?.value?.email || '',
//       phone: user?.value?.phone || '+2348012345678',
//       address: user?.value?.address || settings.value?.clinicLocation || 'Not provided',
//       customerName: `${user?.value?.firstName || ''} ${user?.value?.lastName || ''}`.trim() || 'Customer',
//       description: `Payment for ${selectedPlan.value.name}`
//     }

//     // Initiate payment
//     const paymentResult = await initiatePayment(paymentPayload)

//     if (!paymentResult || !paymentResult.authorization_url) {
//       throw new Error('Failed to initiate payment')
//     }

//     // Redirect to payment gateway
//     window.location.href = paymentResult.authorization_url

//   } catch (error: any) {
//     console.error('Booking error:', error)
//     errorMessage.value = error?.message || 'Failed to process booking. Please try again.'
//     showErrorModal.value = true
//   }
// }

// const handleBooking = async () => {
//   if (!selectedPlan.value || !selectedDate.value || !selectedSlot.value) return

//   try {
//     const timeSlot = `${selectedSlot.value.startTime}-${selectedSlot.value.endTime}`

//     // Debug: Check what consultationType the plan has
//     console.log('Plan consultationType:', selectedPlan.value.consultationType)
//     console.log('Plan consultationCategory:', selectedPlan.value.consultationCategory)
//     console.log('Patient Status:', patientStatus.value)

//     // Determine the correct consultationType
//     // The plan's consultationType should be like 'first_contact', 'follow_up', etc.
//     // NOT 'virtual' or 'physical' (those are consultationCategory)
//     let consultationType = selectedPlan.value.consultationType
    
//     // If consultationType is invalid or missing, determine from patient status
//     const validConsultationTypes = [
//       'first_contact', 'follow_up', 'medical_review', 'emergency', 
//       'routine_checkup', 'prescription_refill', 'lab_result_review', 
//       'second_opinion', 'mental_health', 'chronic_disease_management', 
//       'prenatal_postnatal', 'pediatric', 'geriatric', 'nutrition_counseling', 
//       'pre_operative', 'post_operative', 'procedure_consultation', 
//       'health_screening', 'wellness_consultation', 'vaccination', 
//       'sick_note', 'referral'
//     ]
    
//     if (!consultationType || !validConsultationTypes.includes(consultationType)) {
//       // Fallback: determine from patient status
//       consultationType = patientStatus.value?.isNewPatient ? 'first_contact' : 'follow_up'
//       console.log('Using fallback consultationType:', consultationType)
//     }
    
//     // Create appointment payload
//     const appointmentPayload: any = {
//       planId: selectedPlan.value._id,
//       consultationType: consultationType,
//       consultationCategory: selectedPlan.value.consultationCategory,
//       date: selectedDate.value,
//       timeSlot: timeSlot,
//       price: selectedPlan.value.price,
//       duration: selectedPlan.value.duration
//     }

//     // Add consultation mode for virtual consultations
//     if (selectedPlan.value.consultationCategory === 'virtual') {
//       appointmentPayload.consultationMode = consultationMode.value
//     } else if (selectedPlan.value.consultationCategory === 'physical') {
//       // Set consultation mode as in_person for physical appointments
//       appointmentPayload.consultationMode = 'in_person'
//     }

//     // Add location for physical consultations
//     if (selectedPlan.value.consultationCategory === 'physical' && settings.value?.clinicLocation) {
//       appointmentPayload.location = settings.value.clinicLocation
//     }

//     console.log('Final appointment payload:', appointmentPayload)

//     // Create the appointment
//     const appointmentResult = await createAppointment(appointmentPayload)

//     if (!appointmentResult || !appointmentResult._id) {
//       throw new Error('Failed to create appointment')
//     }

//     // Prepare payment payload
//     const paymentPayload = {
//       appointmentId: appointmentResult._id,
//       amount: selectedPlan.value.price,
//       paymentMethod: 'Paystack' as const,
//       email: user?.value?.email || '',
//       phone: user?.value?.phone || '+2348012345678',
//       address: user?.value?.address || settings.value?.clinicLocation || 'Not provided',
//       customerName: `${user?.value?.firstName || ''} ${user?.value?.lastName || ''}`.trim() || 'Customer',
//       description: `Payment for ${selectedPlan.value.name}`
//     }

//     // Initiate payment
//     const paymentResult = await initiatePayment(paymentPayload)

//     if (!paymentResult || !paymentResult.authorization_url) {
//       throw new Error('Failed to initiate payment')
//     }

//     // Redirect to payment gateway
//     window.location.href = paymentResult.authorization_url

//   } catch (error: any) {
//     console.error('Booking error:', error)
//     errorMessage.value = error?.message || 'Failed to process booking. Please try again.'
//     showErrorModal.value = true
//   }
// }




const handleBooking = async () => {
  if (!selectedPlan.value || !selectedDate.value || !selectedSlot.value) return

  try {
    const timeSlot = `${selectedSlot.value.startTime}-${selectedSlot.value.endTime}`

    // Debug: Check what consultationType the plan has
    console.log('Plan consultationType:', selectedPlan.value.consultationType)
    console.log('Plan consultationCategory:', selectedPlan.value.consultationCategory)
    console.log('Patient Status:', patientStatus.value)

    // Determine the correct consultationType
    // The plan's consultationType should be like 'first_contact', 'follow_up', etc.
    // NOT 'virtual' or 'physical' (those are consultationCategory)
    let consultationType = selectedPlan.value.consultationType
    
    // If consultationType is invalid or missing, determine from patient status
    const validConsultationTypes = [
      'first_contact', 'follow_up', 'medical_review', 'emergency', 
      'routine_checkup', 'prescription_refill', 'lab_result_review', 
      'second_opinion', 'mental_health', 'chronic_disease_management', 
      'prenatal_postnatal', 'pediatric', 'geriatric', 'nutrition_counseling', 
      'pre_operative', 'post_operative', 'procedure_consultation', 
      'health_screening', 'wellness_consultation', 'vaccination', 
      'sick_note', 'referral'
    ]
    
    if (!consultationType || !validConsultationTypes.includes(consultationType)) {
      // Fallback: determine from patient status
      consultationType = patientStatus.value?.isNewPatient ? 'first_contact' : 'follow_up'
      console.log('Using fallback consultationType:', consultationType)
    }
    
    // Create appointment payload
    const appointmentPayload: any = {
      planId: selectedPlan.value._id,
      consultationType: consultationType,
      consultationCategory: selectedPlan.value.consultationCategory,
      date: selectedDate.value,
      timeSlot: timeSlot,
      price: selectedPlan.value.price,
      duration: selectedPlan.value.duration
    }

    // Add consultation mode for virtual consultations
    if (selectedPlan.value.consultationCategory === 'virtual') {
      appointmentPayload.consultationMode = consultationMode.value
    } else if (selectedPlan.value.consultationCategory === 'physical') {
      // Set consultation mode as in_person for physical appointments
      appointmentPayload.consultationMode = 'in_person'
    }

    // Add location for physical consultations
    if (selectedPlan.value.consultationCategory === 'physical' && settings.value?.clinicLocation) {
      appointmentPayload.location = settings.value.clinicLocation
    }

    console.log('Final appointment payload:', appointmentPayload)

    // Create the appointment
    const appointmentResult = await createAppointment(appointmentPayload)

    if (!appointmentResult || !appointmentResult._id) {
      throw new Error('Failed to create appointment')
    }

    // Prepare payment payload
    const paymentPayload = {
      appointmentId: appointmentResult._id,
      amount: selectedPlan.value.price,
      paymentMethod: 'Paystack' as const,
      email: user?.value?.email || '',
      phone: user?.value?.phone || '+2348012345678',
      address: user?.value?.address || settings.value?.clinicLocation || 'Not provided',
      customerName: `${user?.value?.firstName || ''} ${user?.value?.lastName || ''}`.trim() || 'Customer',
      description: `Payment for ${selectedPlan.value.name}`
    }

    // Initiate payment
    const paymentResult = await initiatePayment(paymentPayload)

    if (!paymentResult || !paymentResult.authorization_url) {
      throw new Error('Failed to initiate payment')
    }

    // Redirect to payment gateway
    window.location.href = paymentResult.authorization_url

  } catch (error: any) {
    console.error('Booking error:', error)
    errorMessage.value = error?.message || 'Failed to process booking. Please try again.'
    showErrorModal.value = true
  }
}

const handlePaymentCallback = async () => {
  const status = route.query.status as string
  const reference = (route.query.reference || route.query.trxref) as string
  const appointmentId = route.query.appointmentId as string
  const meetLink = route.query.meetLink as string

  if (!status || !reference) {
    await router.push('/book')
    return
  }

  try {
    processingPayment.value = true

    if (status === 'success') {
      paymentCallbackData.value = {
        status,
        reference,
        appointmentId,
        meetLink: meetLink ? decodeURIComponent(meetLink) : undefined
      }
      showSuccessModal.value = true
    } else {
      errorMessage.value = (route.query.message as string) || 'Payment failed. Please try again.'
      showErrorModal.value = true
    }
  } catch (error: any) {
    console.error('Payment callback error:', error)
    errorMessage.value = error.message || 'Failed to process payment'
    showErrorModal.value = true
  } finally {
    processingPayment.value = false
  }
}

const closeSuccessModal = () => {
  showSuccessModal.value = false
  router.push('/appointments')
}

const closeErrorModal = () => {
  showErrorModal.value = false
  router.push('/book')
}

const retryPayment = () => {
  showErrorModal.value = false
  currentStep.value = 3
}

// Watchers
watch(selectedDate, async (newDate) => {
  if (newDate && selectedPlan.value) {
    await getAvailabilityByDate({
      date: newDate,
      consultationType: selectedPlan.value.consultationCategory
    })
  }
})

// Lifecycle
onMounted(async () => {
    // Fetch patient status first
  await getPatientStatus()

  // Fetch plans
  await getAllPlans()
  // Handle payment callback
  if (route.query.status && (route.query.reference || route.query.trxref)) {
    await handlePaymentCallback()
  }
})

// // Update onMounted
// onMounted(async () => {
//   // Fetch patient status first
//   await getPatientStatus()
  
//   // Then fetch plans
//   await getAllPlans()
  
//   // Handle payment callback
//   if (route.query.status && (route.query.reference || route.query.trxref)) {
//     await handlePaymentCallback()
//   }
// })
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95) translateY(20px);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scaleIn {
  animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>