// src/composables/consultation-plans/useGetConsultationPlanById.ts
import { ref } from "vue"
import { consultationPlans_api, type ConsultationPlan } from "@/api_factory/modules/consultation-plans"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useGetConsultationPlanById = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const plan = ref<ConsultationPlan | null>(null)
  const { showToast } = useCustomToast()

  const getPlanById = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      const res = (await consultationPlans_api.getById(id)) as any
      if (res.type !== "ERROR") {
        plan.value = res.data
        return res.data
      } else {
        error.value = res.message
        showToast({
          title: "Error",
          message: res.message || "Failed to fetch consultation plan",
          toastType: "error",
          duration: 3000,
        })
        throw new Error(res.message)
      }
    } catch (err: any) {
      error.value = err.message
      showToast({
        title: "Error",
        message: err.message || "Failed to fetch consultation plan",
        toastType: "error",
        duration: 3000,
      })
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, plan, getPlanById }
}