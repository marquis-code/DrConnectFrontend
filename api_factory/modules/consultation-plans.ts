// src/api_factory/modules/consultation-plans.ts
import { GATEWAY_ENDPOINT } from '../axios.config'

export interface CreateConsultationPlanDto {
  name: string
  description: string
  consultationType: 'physical' | 'virtual'
  duration: number // in minutes
  price: number
  availableDays?: number[] // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  availableTimeRange?: string | null // e.g., "09:00-17:00"
  isActive?: boolean
  consultationModes?: ('voice' | 'video')[]
  sortOrder?: number
}

export interface UpdateConsultationPlanDto {
  name?: string
  description?: string
  consultationType?: 'physical' | 'virtual'
  duration?: number
  price?: number
  availableDays?: number[]
  availableTimeRange?: string | null
  isActive?: boolean
  consultationModes?: ('voice' | 'video')[]
  sortOrder?: number
}

export interface ConsultationPlan {
  _id: string
  name: string
  description: string
  consultationType: 'physical' | 'virtual'
  duration: number
  price: number
  availableDays: number[]
  availableTimeRange: string | null
  isActive: boolean
  consultationModes: ('voice' | 'video')[]
  sortOrder: number
  createdAt: Date
  updatedAt: Date
}

export const consultationPlans_api = {
  create: (payload: CreateConsultationPlanDto) => {
    const url = "/consultation-plans"
    return GATEWAY_ENDPOINT.post(url, payload)
  },

  getAll: (includeInactive?: boolean) => {
    const url = "/consultation-plans"
    return GATEWAY_ENDPOINT.get(url, { params: { includeInactive } })
  },

  getAvailableForDate: (date: string) => {
    const url = `/consultation-plans/available/${date}`
    return GATEWAY_ENDPOINT.get(url)
  },

  getById: (id: string) => {
    const url = `/consultation-plans/${id}`
    return GATEWAY_ENDPOINT.get(url)
  },

  update: (id: string, payload: UpdateConsultationPlanDto) => {
    const url = `/consultation-plans/${id}`
    return GATEWAY_ENDPOINT.put(url, payload)
  },

  toggleStatus: (id: string) => {
    const url = `/consultation-plans/${id}/toggle-status`
    return GATEWAY_ENDPOINT.put(url)
  },

  delete: (id: string) => {
    const url = `/consultation-plans/${id}`
    return GATEWAY_ENDPOINT.delete(url)
  },
}