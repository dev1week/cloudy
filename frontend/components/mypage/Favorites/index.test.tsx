import { fireEvent, render, screen } from '@testing-library/react'
import Favorites from '.'
import RoadmapCard from '@/components/common/RoadmapCard'
import roadmapgreen from '../../../public/img/roadmap/roadmapgreen.jpg'

const testData = {
  id: 1,
  image: roadmapgreen,
  status: 'scrap',
  title: 'AWS Skill Builder Learner Guide AWS Skill Builder Learner Guide AWS Skill Builder Learner Guide Guide ',
  context:
    '효과적인 프롬포트를 설계하기 위한 원칙, 기법 및 모범 사례를 알 수 있음 효과적인 프롬포트를 설계하기 위한 원칙, 기법 및 모범 사례를 보여준다.',
  tags: ['DataWrangler', 'GeneratedAI'],
  comments: 2,
}

describe('<Favorites />', () => {
  it('찜한 로드맵을 렌더링합니다.', () => {
    const { container } = render(<Favorites />)
    expect(container).toBeInTheDocument()
  })

  it('북마크 아이콘 클릭 이벤트가 정상 작동됩니다.', () => {
    render(<RoadmapCard road={testData} />)
    const bookMark = screen.getByRole('button')
    //북마크 아이콘 클릭 이벤트 시뮬레이션
    fireEvent.click(bookMark)
  })
})