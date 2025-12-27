// src/composables/consultation-plans/useGetAvailablePlansForDate.ts
import { ref } from "vue"
import { consultationPlans_api, type ConsultationPlan } from "@/api_factory/modules/consultation-plans"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useGetAvailablePlansForDate = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const availablePlans = ref<ConsultationPlan[]>([])
  const { showToast } = useCustomToast()

  const getAvailablePlans = async (date: string) => {
    loading.value = true
    error.value = null
    try {
      const res = (await consultationPlans_api.getAvailableForDate(date)) as any
      if (res.type !== "ERROR") {
        availablePlans.value = res.data
        return res.data
      } else {
        error.value = res.message
        showToast({
          title: "Error",
          message: res.message || "Failed to fetch available plans",
          toastType: "error",
          duration: 3000,
        })
        throw new Error(res.message)
      }
    } catch (err: any) {
      error.value = err.message
      showToast({
        title: "Error",
        message: err.message || "Failed to fetch available plans",
        toastType: "error",
        duration: 3000,
      })
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, availablePlans, getAvailablePlans }
}