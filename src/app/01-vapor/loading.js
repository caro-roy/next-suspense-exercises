import { range } from '@/utils'
import LibraryGameCardSkeleton from '@/components/LibraryGameCardSkeleton'
import GamesLayout from './GamesLayout'

function VaporExerciseLoading() {
  return (
    <GamesLayout gamesCount={0}>
      {range(12).map(index => (
        <LibraryGameCardSkeleton key={index} />
      ))}
    </GamesLayout>
  )
}

export default VaporExerciseLoading
