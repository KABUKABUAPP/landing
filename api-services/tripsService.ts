import { BASE_URL } from "@/constants";
import axios from 'axios';

export const useViewTripQuery = async (id: string) => {
  try {
    const getTrip = await axios.get(`${BASE_URL}/admin/trip/view/${id}`)
    const response = getTrip?.data;
    return {
      carModel: `${response?.data?.car?.brand_name} ${response?.data?.car?.model}`,
      destination: `${response?.data?.destination?.city}, ${response?.data?.destination?.state}, ${response?.data?.destination?.country}`,
      driverFullname: `${response?.data?.driver_details?.full_name}`,
      driverId: `${response?.data?.driver_details._id}`,
      driverLocation: `${response?.data?.driver_details?.driver?.city}, ${response?.data?.driver_details?.driver?.state}, ${response?.data?.driver_details?.driver?.country}`,
      driverRating: response?.data?.driver_rating,
      driverTripCount: response?.data?.driver_details?.total_trips,
      estimatedPrice: response?.data?.estimated_price,
      origin: `${response?.data?.origin.city}, ${response?.data?.origin?.state}, ${response?.data?.origin.country}`,
      paymentType: response?.data?.payment_type,
      plateNumber: response?.data?.car?.plate_number,
      riderFullName: response?.data?.rider_details.full_name,
      riderId: response?.data?.rider_details._id,
      riderLocation: response?.data?.rider_details?.state,
      riderRating: response?.data?.rider_details?.average_rating.value,
      riderTripCount: response.data.rider_details.total_trips,
      tripEnded: response?.data?.time_of_cancel ? response?.data?.time_of_cancel : response?.data?.trip_completion_time,
      tripStarted: response?.data?.start_time,
      driverImage: response?.data?.driver_details?.profile_image,
      riderImage: response.data.rider_details.profile_image,
      orderId: response.data.order_id,
      startPoint: response?.data?.start_point,
      endPoint: response?.data?.end_point,
      driverTripRating: response?.data?.driver_rating,
      riderTripRating: response?.data?.rider_rating,
      tripRating: response?.data?.trip_rating,
      riderComment: response?.data?.rider_comment
    }
  } catch (error) {
    return {
      error,
      message: 'There was an issue retrieving the trip',
      status: 'failure'
    }
  }
  
}


