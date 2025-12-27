// src/composables/consultation-plans/useGetAllConsultationPlans.ts
import { ref } from "vue"
import { consultationPlans_api, type ConsultationPlan } from "@/api_factory/modules/consultation-plans"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useGetAllConsultationPlans = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const plans = ref<ConsultationPlan[]>([])
  const { showToast } = useCustomToast()

  const getAllPlans = async (includeInactive?: boolean) => {
    loading.value = true
    error.value = null
    try {
      const res = (await consultationPlans_api.getAll(includeInactive)) as any
      if (res.type !== "ERROR") {
        plans.value = res.data
        return res.data
      } else {
        error.value = res.message
        showToast({
          title: "Error",
          message: res.message || "Failed to fetch consultation plans",
          toastType: "error",
          duration: 3000,
        })
        throw new Error(res.message)
      }
    } catch (err: any) {
      error.value = err.message
      showToast({
        title: "Error",
        message: err.message || "Failed to fetch consultation plans",
        toastType: "error",
        duration: 3000,
      })
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, plans, getAllPlans }
}