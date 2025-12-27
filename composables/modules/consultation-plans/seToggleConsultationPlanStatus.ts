// src/composables/consultation-plans/useToggleConsultationPlanStatus.ts
import { ref } from "vue"
import { consultationPlans_api } from "@/api_factory/modules/consultation-plans"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useToggleConsultationPlanStatus = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const { showToast } = useCustomToast()

  const togglePlanStatus = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      const res = (await consultationPlans_api.toggleStatus(id)) as any
      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Consultation plan status toggled successfully",
          toastType: "success",
          duration: 3000,
        })
        return res.data
      } else {
        error.value = res.message
        showToast({
          title: "Error",
          message: res.message || "Failed to toggle plan status",
          toastType: "error",
          duration: 3000,
        })
        throw new Error(res.message)
      }
    } catch (err: any) {
      error.value = err.message
      showToast({
        title: "Error",
        message: err.message || "Failed to toggle plan status",
        toastType: "error",
        duration: 3000,
      })
      throw err
    } finally {
      loading.value = false
    }
  }

  return { loading, error, togglePlanStatus }
}