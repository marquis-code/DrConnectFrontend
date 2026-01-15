import { ref } from "vue"
import { appointments_api } from "@/api_factory/modules/appointments"
import { useCustomToast } from "@/composables/core/useCustomToast"

export const useGetPatientStatus = () => {
  const loading = ref(false)
//   const patientStatus = ref<any>({})
  const error = ref<string | null>(null)
  const { showToast } = useCustomToast()
   const patientStatus = ref<{
    isNewPatient: boolean
    isExistingPatient: boolean
    completedAppointments: number
  } | null>(null)

  const getPatientStatus = async () => {
    
    loading.value = true
    error.value = null
    try {
      const res = (await appointments_api.getPatientStatus()) as any
      console.log(res.data, 'patient status res')
      if (res.type !== "ERROR") {
        patientStatus.value = res.data || {}
        return res.data
      } else {
        error.value = res.message
        showToast({
          title: "Error",
          message: res.message || "Failed to load patient status",
          toastType: "error",
          duration: 3000,
        })
        throw new Error(res.message)
      }
    } catch (err: any) {
      error.value = err.message
      showToast({
        title: "Error",
        message: err.message || "Failed to load availability",
        toastType: "error",
        duration: 3000,
      })
      throw err 
    } finally {
      loading.value = false     
    }
  }

  return { loading, patientStatus, error, getPatientStatus }
}