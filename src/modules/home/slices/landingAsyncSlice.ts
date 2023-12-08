import { globalApi } from '../../../app/globalAsync'

export const landingAsyncSlice = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query<any[], any>({
      query: () => ({
        url: 'https://app.extraexpertise.be/api/quick-links/feeds/test',
      }),
    }),
    getImage: build.query<File, { url: string }>({
      query: ({
        url = 'https://static01.nyt.com/images/2022/11/18/podcasts/18HF-ftx-twitter/18HF-ftx-twitter-moth.jpg',
      }) => ({
        url,
        responseHandler: async (response) =>
          window.URL.createObjectURL(await response.blob()),
        cache: 'no-cache',
      }),
    }),
    getImageProfile: build.query<File, { url: string }>({
      query: ({
        url = 'https://static01.nyt.com/images/2022/11/18/podcasts/18HF-ftx-twitter/18HF-ftx-twitter-moth.jpg',
      }) => ({
        url,
        responseHandler: async (response) =>
          window.URL.createObjectURL(await response.blob()),
        cache: 'no-cache',
      }),
    }),
  }),
})
export const {
  useGetNewsQuery,
  useLazyGetImageQuery,
  useLazyGetImageProfileQuery,
} = landingAsyncSlice
