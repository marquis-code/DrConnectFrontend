<template>
  <section id="services" class="relative bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-32 overflow-hidden">
    <!-- Decorative Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div class="absolute top-20 right-0 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-40 left-0 w-80 h-80 bg-gray-800/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-20">
        <div class="inline-block mb-6">
          <span class="text-sm font-medium tracking-wider uppercase text-gray-600 bg-gray-100 px-6 py-3 rounded-full border border-gray-200">
            What We Offer
          </span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
          Our <span class="font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">Services</span>
        </h2>
        <p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Comprehensive medical consultation services designed to meet your healthcare needs with excellence and compassion
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent mx-auto mt-8"></div>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- Service Card 1 - General Consultation -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">General Consultation</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Connect with experienced general practitioners for comprehensive health assessments, diagnosis, and treatment recommendations.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Initial health screening</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Preventive care guidance</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Chronic disease management</span>
            </li>
          </ul>
        </div>

        <!-- Service Card 2 - Specialist Referrals -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Specialist Referrals</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Access our network of specialized physicians including cardiologists, neurologists, endocrinologists, and more.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Expert second opinions</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Specialty consultations</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Treatment plan reviews</span>
            </li>
          </ul>
        </div>

        <!-- Service Card 3 - Follow-Up Care -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Follow-Up Care</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Continuous monitoring and support throughout your treatment journey with scheduled check-ins and progress assessments.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Post-treatment monitoring</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Medication management</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Recovery tracking</span>
            </li>
          </ul>
        </div>

        <!-- Service Card 4 - Family Therapy -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Family Therapy</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Strengthen family bonds and resolve conflicts through guided therapeutic sessions designed to improve communication and understanding.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Conflict resolution</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Communication enhancement</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Family dynamics improvement</span>
            </li>
          </ul>
        </div>

        <!-- Service Card 5 - Marriage/Relationship Counseling -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Marriage/Relationship Counseling</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Nurture and strengthen your relationship through professional counseling that addresses challenges, builds intimacy, and fosters lasting partnership.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Couples therapy sessions</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Pre-marital counseling</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Intimacy and trust building</span>
            </li>
          </ul>
        </div>

        <!-- Service Card 6 - Group Therapy -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Group Therapy</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Find support and healing in a safe, confidential group setting where you can share experiences and learn from others facing similar challenges.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Peer support groups</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Shared experience healing</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Skill-building workshops</span>
            </li>
          </ul>
        </div>

        <!-- Service Card 7 - Anxiety/Depression Counseling -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Anxiety/Depression Counseling</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Receive specialized care for anxiety disorders and depression with evidence-based therapeutic approaches tailored to your mental health needs.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Cognitive behavioral therapy</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Stress and anxiety management</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Depression treatment plans</span>
            </li>
          </ul>
        </div>

        <!-- Service Card 8 - Lab Review & Analysis -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Lab Review & Analysis</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Expert interpretation of laboratory results, imaging studies, and diagnostic tests with detailed explanations and recommendations.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Blood work analysis</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Imaging interpretation</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Test result consultation</span>
            </li>
          </ul>
        </div>

        <!-- Service Card 9 - Wellness Programs -->
        <div class="group bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:border-gray-900 transition-all duration-500 hover:-translate-y-2">
          <div class="mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">Wellness Programs</h3>
          <p class="text-gray-600 leading-relaxed mb-6">
            Preventive health programs focusing on nutrition, fitness, and lifestyle modifications for optimal wellbeing and longevity.
          </p>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Nutrition counseling</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Fitness planning</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Lifestyle coaching</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 lg:mt-20 text-center">
        <div class="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-10 lg:p-16 shadow-2xl">
          <h3 class="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Ready to get started?
          </h3>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards better health and wellbeing
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/login"
              class="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-full group">
              <span>Book Consultation</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <a 
              href="mailto:info.doctordey@gmail.com"
              class="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white px-10 py-5 text-lg font-medium border-2 border-white transition-all duration-300 rounded-full">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>