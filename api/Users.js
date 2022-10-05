import { useContext } from '@nuxtjs/composition-api'

export const userApi = () => {
  const { $api } = useContext()

  const fetchUser = async () => {
    const res = await $api.get(`/api/article/trendings`)
    return res
  }

  const fetchUsers = async () => {
    const res = await $api.get(`/api/article/trendings`)
    return res
  }

  return {
    fetchUser,
    fetchUsers,
  }
}