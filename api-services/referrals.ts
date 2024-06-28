import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, RIDES_BASE_URL } from "../constants";
import { secondsToMilliSeconds } from "@/utils";

export const referralsApi = createApi({
  reducerPath: "referralsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: RIDES_BASE_URL,
    timeout: secondsToMilliSeconds(30),
  }),
  endpoints: (build) => ({
    submitReferralsForm: build.mutation<any, any>({
      query: ({ email, code }) => ({
        url: `referral/temporary`,
        method: "POST",
        body: {email, code},
      }),
    }),
  }),
});

export const { useSubmitReferralsFormMutation } = referralsApi;
