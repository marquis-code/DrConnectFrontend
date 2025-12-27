<!-- Add this component to your components folder: components/SuccessModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center px-4"
        @click="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>

        <!-- Animated Ribbons -->
        <div class="ribbon-container">
          <div class="ribbon ribbon-1"></div>
          <div class="ribbon ribbon-2"></div>
          <div class="ribbon ribbon-3"></div>
        </div>

        <!-- Modal Content -->
        <div
          class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          @click.stop
        >
          <!-- Success Icon with Animation -->
          <div class="pt-12 pb-6 flex justify-center">
            <div class="success-checkmark">
              <div class="check-icon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="px-8 pb-8 text-center">
            <h3 class="text-2xl font-semibold text-gray-900 mb-3">
              Enquiry Received Successfully! 🎉
            </h3>
            <p class="text-gray-600 leading-relaxed mb-6">
              Your enquiry to <span class="font-semibold text-gray-900">Doctor Dey Consulting</span> 
              has been received successfully. We will revert to you shortly with the best care options.
            </p>
            
            <div class="bg-gray-50 rounded-xl p-4 mb-6">
              <p class="text-sm text-gray-700">
                <span class="font-medium">Expected response time:</span> Within 24 hours
              </p>
            </div>

            <button
              @click="closeModal"
              class="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
            >
              Got it, Thanks!
            </button>
          </div>

          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  show: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > div:last-child,
.modal-leave-active > div:last-child {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}

/* Animated Ribbons */
.ribbon-container {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.ribbon {
  position: absolute;
  width: 300px;
  height: 8px;
  background: linear-gradient(90deg, transparent, #1f2937, transparent);
  animation: ribbon-fall 3s ease-out;
  opacity: 0;
}

.ribbon-1 {
  top: -100px;
  left: 10%;
  animation-delay: 0.2s;
  transform: rotate(-45deg);
}

.ribbon-2 {
  top: -100px;
  left: 40%;
  animation-delay: 0.4s;
  transform: rotate(45deg);
}

.ribbon-3 {
  top: -100px;
  right: 10%;
  animation-delay: 0.6s;
  transform: rotate(-30deg);
}

@keyframes ribbon-fall {
  0% {
    transform: translateY(0) rotate(var(--rotate, -45deg));
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(120vh) rotate(calc(var(--rotate, -45deg) + 180deg));
    opacity: 0;
  }
}

/* Success Checkmark Animation */
.success-checkmark {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.check-icon {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #1f2937;
  animation: checkmark-appear 0.6s ease-in-out;
}

.icon-line {
  height: 5px;
  background-color: #1f2937;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
}

.line-tip {
  top: 46px;
  left: 14px;
  width: 25px;
  transform: rotate(45deg);
  animation: icon-line-tip 0.75s 0.3s ease-in-out;
}

.line-long {
  top: 38px;
  right: 8px;
  width: 47px;
  transform: rotate(-45deg);
  animation: icon-line-long 0.75s 0.5s ease-in-out;
}

.icon-circle {
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(31, 41, 55, 0.2);
}

.icon-fix {
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: white;
}

@keyframes checkmark-appear {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 46px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}
</style>