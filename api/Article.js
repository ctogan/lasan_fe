import { useContext } from '@nuxtjs/composition-api'

export const articleApi = () => {
  const { $api } = useContext()

  const fetchArticleTrendings = async () => {
    const res = await $api.get(`/api/article/trendings`)
    return res
  }

  return {
    fetchArticleTrendings,
  }
}