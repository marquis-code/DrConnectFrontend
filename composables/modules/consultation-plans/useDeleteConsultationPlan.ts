// src/composables/consultation-plans/useDeleteConsultationPlan.ts
import { ref } from "vue"
import { consultationPlans_api } from "@/api_factory/modules/consultation-plans"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useDeleteConsultationPlan = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const { showToast } = useCustomToast()

  const deletePlan = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      const res = (await consultationPlans_api.delete(id)) as any
      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Consultation plan deleted successfully",
          toastType: "success",
          duration: 3000,
        })
        return res.data
      } else {
        error.value = res.message
        showToast({
          title: "Error",
          message: res.message || "Failed to delete consultation plan",
          toastType: "error",
          duration: 3000,
        })
        throw new Error(res.message)
      }
    } catch (err: any) {
      error.value = err.message
      showToast({
        title: "Error",
        message: err.message || "Failed to delete consultation plan",
        toastType: "error",
        duration: 3000,
      })
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, deletePlan }
}