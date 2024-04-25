import { IFilter } from '@/types/learning'
import { create } from 'zustand'

interface ILearningState {
  jobs: IFilter[]
  services: IFilter[]
  types: IFilter[]
  difficulties: IFilter[]
  actions: {
    setJobFilter: (v: IFilter) => void
    setServiceFilter: (v: IFilter) => void
    setTypeFilter: (v: IFilter) => void
    setDifficultyFilter: (v: IFilter) => void
  }
}

const learningStore = create<ILearningState>(set => ({
  jobs: [],
  services: [],
  types: [],
  difficulties: [],
  actions: {
    setJobFilter: v =>
      set(state => {
        const index = state.jobs.indexOf(v)
        return index === -1
          ? { ...state, jobs: [...state.jobs, v] }
          : { ...state, jobs: state.jobs.filter((_, i) => i !== index) }
      }),
    setServiceFilter: v =>
      set(state => {
        const index = state.services.indexOf(v)
        return index === -1
          ? { ...state, services: [...state.services, v] }
          : { ...state, services: state.services.filter((_, i) => i !== index) }
      }),
    setTypeFilter: v => set(state => ({ ...state, types: [...state.types, v] })),
    setDifficultyFilter: v => set(state => ({ ...state, difficulties: [...state.difficulties, v] })),
  },
}))

export const usejobFilter = () => learningStore(state => state.jobs)
export const useServiceFilter = () => learningStore(state => state.services)
export const useTypeFilter = () => learningStore(state => state.types)
export const useDifficultyFilter = () => learningStore(state => state.difficulties)

export const useLearningActions = () => learningStore(state => state.actions)
