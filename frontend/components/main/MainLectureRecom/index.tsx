import { getUser } from '@/utils/getUser'
import styles from './MainLectureRecom.module.scss'
import { fetchLearningRecom, fetchLearningRecomWithoutJob } from '@/apis/mainLearing'
import { ILearningCard } from '@/types/learning'
import { jobOptions } from '@/constants/user'
import MainLectureRecomInner from '../MainLectureRecomInner'

async function MainLectureRecom() {
  const user = await getUser()
  const isLogin = user?.id
  const learningList = isLogin
    ? ((await fetchLearningRecom(user.jobId)) as ILearningCard[])
    : ((await fetchLearningRecomWithoutJob()) as ILearningCard[])

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.titleBox}>
          <p className={styles.titleBoxItem1}>
            {isLogin ? `${jobOptions[user.jobId - 1].label}와 관련된 강의` : '이런 강의도 있어요'}
          </p>
          <p className={styles.titleBoxItem2}>
            {isLogin
              ? `${jobOptions[user.jobId - 1].label} 직무에 관심이 있는 사람들은 이런 강의를 들었어요`
              : 'Cloudy에서는 이런 강의도 제공하고 있어요'}
          </p>
        </div>
        <MainLectureRecomInner learningList={learningList} len={learningList.length} />
      </div>
    </div>
  )
}

export default MainLectureRecom
