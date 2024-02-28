import React, { Suspense } from 'react'

export const dynamic = 'force-dynamic'
import Comments from './Comments'
import Post from './Post'
import Spinner from '@/components/Spinner'

function InterviewExercise() {
  return (
    <>
      <article className='main-article'>
        <Post />
      </article>
      <section className='comments-section'>
        <h2>Discussion</h2>
        <Suspense fallback={<Spinner />}>
          <Comments />
        </Suspense>
      </section>
    </>
  )
}

export default InterviewExercise
