import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'article-extractor-and-summarizer.p.rapidapi.com/summarize-text',
        baseUrl: 'https://google-translation-unlimited.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-host: article-extractor-and-summarizer.p.rapidapi.com');
            headers.set('x-rapidapi-host: google-translation-unlimited.p.rapidapi.com');
            headers.set('x-rapidapi-key', '0e369d52b7msh9eea79c83313315p131b35jsnb515c61cd7b7');
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi;
