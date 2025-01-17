'use client'

import React, { useEffect, useState } from 'react'
import { IFilter, ILearningFilter, ILearningFilterOpen } from '@/types/learning'
import styles from './LearningFilterOpen.module.scss'
import { MdOutlineClose } from 'react-icons/md'
import LearningTagList from '../LearningTagList'
import LearningFilterToggle from '../LearningFilterToggle'
import { difficultyData, jobData, serviceData, typeData } from '@/constants/learning'
import { useRouter, useSearchParams } from 'next/navigation'
import { extractArrFromQuery, getTextFilter } from '@/utils/getFilterFunc'
import { useLearningActions } from '@/stores/learning'

const LearningFilterOpen = (props: ILearningFilterOpen) => {
  const { closeFilter } = props

  const router = useRouter()
  const params = useSearchParams()

  const { setLearningFilterCount } = useLearningActions()

  const [filter, setFilter] = useState<ILearningFilter>({
    job: extractArrFromQuery(params.get('job'), jobData),
    service: extractArrFromQuery(params.get('service'), serviceData),
    type: extractArrFromQuery(params.get('type'), typeData),
    difficulty: extractArrFromQuery(params.get('difficulty'), difficultyData),
  })

  useEffect(() => {
    setFilter({
      job: extractArrFromQuery(params.get('job'), jobData),
      service: extractArrFromQuery(params.get('service'), serviceData),
      type: extractArrFromQuery(params.get('type'), typeData),
      difficulty: extractArrFromQuery(params.get('difficulty'), difficultyData),
    })
  }, [params])

  useEffect(() => {
    let url = `/learning?`

    const count = //  필터 개수
      params.getAll('job').length +
      params.getAll('service').length +
      params.getAll('type').length +
      params.getAll('difficulty').length
    setLearningFilterCount(count)

    params.get('query') && (url += `query=${params.get('query')}`)
    params.get('oquery') && (url += `oquery=${params.get('oquery')}`)
    filter.job.length !== 0 && (url += `&job=${getTextFilter(filter.job)}`)
    filter.service.length !== 0 && (url += `&service=${getTextFilter(filter.service)}`)
    filter.type.length !== 0 && (url += `&type=${getTextFilter(filter.type)}`)
    filter.difficulty.length !== 0 && (url += `&difficulty=${getTextFilter(filter.difficulty)}`)
    router.push(url)
  }, [filter])

  return (
    <div className={styles.container}>
      <div onClick={e => closeFilter()} className={styles.closeWrap}>
        <span>close filter</span>
        <MdOutlineClose />
      </div>
      <div className={styles.filterWrap}>
        <LearningFilterToggle
          title="직무"
          data={jobData}
          filter={filter.job}
          setFilter={(v: IFilter[]) => setFilter({ ...filter, job: v })}
        />
        <LearningFilterToggle
          title="주요 서비스"
          data={serviceData}
          filter={filter.service}
          setFilter={(v: IFilter[]) => setFilter({ ...filter, service: v })}
        />
        <LearningFilterToggle
          title="분류"
          data={typeData}
          filter={filter.type}
          setFilter={(v: IFilter[]) => setFilter({ ...filter, type: v })}
        />
        <LearningFilterToggle
          title="난이도"
          data={difficultyData}
          filter={filter.difficulty}
          setFilter={(v: IFilter[]) => setFilter({ ...filter, difficulty: v })}
        />
        <LearningTagList filter={filter} setFilter={setFilter} />
      </div>
    </div>
  )
}

export default LearningFilterOpen
