import { GATEWAY_ENDPOINT } from '../axios.config'

export const enquiry_api = {
  createEnquiry: (payload: {
    fullName: string
    email?: string
    phone: string
    message: string
  }) => {
    const url = "/enquiries"
    return GATEWAY_ENDPOINT.post(url, payload)
  },

}
