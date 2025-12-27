// src/composables/consultation-plans/useCreateConsultationPlan.ts
import { ref } from "vue"
import { consultationPlans_api, type CreateConsultationPlanDto } from "@/api_factory/modules/consultation-plans"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useCreateConsultationPlan = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const { showToast } = useCustomToast()

  const createPlan = async (payload: CreateConsultationPlanDto) => {
    loading.value = true
    error.value = null
    try {
      const res = (await consultationPlans_api.create(payload)) as any
      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Consultation plan created successfully",
          toastType: "success",
          duration: 3000,
        })
        return res.data
      } else {
        error.value = res.message
        showToast({
          title: "Error",
          message: res.message || "Failed to create consultation plan",
          toastType: "error",
          duration: 3000,
        })
        throw new Error(res.message)
      }
    } catch (err: any) {
      error.value = err.message
      showToast({
        title: "Error",
        message: err.message || "Failed to create consultation plan",
        toastType: "error",
        duration: 3000,
      })
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, createPlan }
}