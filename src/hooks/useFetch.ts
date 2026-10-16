import { useEffect, useState } from 'react'

export const useFetch = (fetchFn: () => Promise<any>) => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    fetchFn()
      .then((res) => {
        if (!isMounted) return
        const nextData = Array.isArray(res) ? res : res?.data ?? []
        setData(nextData)
      })
      .catch(() => {
        if (isMounted) setData([])
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [fetchFn])

  return { data, loading }
}
