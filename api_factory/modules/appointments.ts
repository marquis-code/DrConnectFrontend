import { GATEWAY_ENDPOINT } from '../axios.config'

export const appointments_api = {
  getAppointments: (filters?: { status?: string; type?: string }) => {
    const url = "/appointments"
    return GATEWAY_ENDPOINT.get(url, { params: filters })
  },

  getAppointmentById: (id: string) => {
    const url = `/appointments/${id}`
    return GATEWAY_ENDPOINT.get(url)
  },

  // createAppointment: (payload: {
  //   consultationType: "physical" | "virtual"
  //   consultationMode?: "voice" | "video"
  //   date: string
  //   timeSlot: string
  //   location?: string
  //   price: number
  // }) => {
  //   const url = "/appointments"
  //   return GATEWAY_ENDPOINT.post(url, payload)
  // },

  createAppointment: (payload: {
    planId: string
    consultationType: "first_contact" | "follow_up" | "medical_review" | "emergency" | "routine_checkup" | "prescription_refill" | "lab_result_review" | "second_opinion" | "mental_health" | "chronic_disease_management" | "prenatal_postnatal" | "pediatric" | "geriatric" | "nutrition_counseling" | "pre_operative" | "post_operative" | "procedure_consultation" | "health_screening" | "wellness_consultation" | "vaccination" | "sick_note" | "referral"
    consultationCategory: "physical" | "virtual"
    consultationMode?: "voice" | "video" | "in_person"
    date: string
    timeSlot: string
    location?: string
    price: number
    duration: number
  }) => {
    const url = "/appointments"
    return GATEWAY_ENDPOINT.post(url, payload)
  },

  cancelAppointment: (id: string) => {
    const url = `/appointments/${id}/cancel`
    return GATEWAY_ENDPOINT.put(url, {})
  },

  rescheduleAppointment: (id: string, payload: { newDate: string | Record<string, any>; newTimeSlot: string | Record<string, any> }) => {
    const url = `/appointments/${id}/reschedule`
    return GATEWAY_ENDPOINT.put(url, payload)
  },

  getAvailability: (consultationType: "physical" | "virtual") => {
    const url = "/appointments/availability"
    return GATEWAY_ENDPOINT.get(url, { params: { consultationType } })
  },

  getTimeSlots: (date: string, consultationType: "physical" | "virtual") => {
    const url = "/appointments/time-slots"
    return GATEWAY_ENDPOINT.get(url, { params: { date, consultationType } })
  },
  getPatientStatus: () => {
    const url = "/appointments/patient-status"
    return GATEWAY_ENDPOINT.get(url)
  }
}
