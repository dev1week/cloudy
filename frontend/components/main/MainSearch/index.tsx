'use client'

import { useEffect, useState } from 'react'
import styles from './MainSearch.module.scss'
import { BiSearch } from 'react-icons/bi'
import { useForm } from 'react-hook-form'
import { getSearchAutoComplete } from '@/apis/learning'
import { useLearningActions } from '@/stores/learning'
import { useRouter } from 'next/navigation'

function MainSearch() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [list, setList] = useState<{ learningId: number; title: string }[]>([])
  const { register, watch, handleSubmit } = useForm<{ search: string }>()

  const router = useRouter()

  const { setKeyword } = useLearningActions()

  const keyword = watch('search', '')

  // match 함수
  const innerHtml = (word: string) => {
    const regex = new RegExp(`${keyword}`, 'i')

    return {
      __html: word.replace(regex, matched => {
        return `<span>${matched}</span>`
      }),
    }
  }

  const handleKeyUp = async () => {
    const data = await getSearchAutoComplete(keyword)
    setList(data)
  }

  const onSearch = (v: string) => {
    router.push(`/learning`)
    setKeyword(v)
  }

  useEffect(() => {
    if (!keyword) return
    if (keyword.length > 0 && list.length > 0) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [keyword])

  return (
    <div
      className={styles.container}
      onBlur={() => setIsOpen(false)}
      onFocus={() => {
        if (keyword) setIsOpen(true)
      }}
    >
      <div className={styles.searchBox}>
        <form onSubmit={handleSubmit(() => onSearch(keyword))}>
          <input type="text" className={styles.searchInput} {...register('search')} onKeyUp={handleKeyUp} />
        </form>
        <BiSearch className={styles.searchIcon} />
        {isOpen && (
          <div className={styles.searchItemBox}>
            {list &&
              list.map(item => (
                <div
                  key={item.learningId}
                  className={styles.searchItem}
                  dangerouslySetInnerHTML={innerHtml(item.title)}
                  onMouseDown={e => onSearch(item.title)}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MainSearch
