import { useState, useEffect } from 'react'
import type { Category } from '@/types/Category'

export function useGetCategories() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/categories')
        const data = await res.json()
        setCategories(data)
      } catch (e) {
        console.error(e)
      }
    }

    load()
  }, [])

  return { categories }
}
