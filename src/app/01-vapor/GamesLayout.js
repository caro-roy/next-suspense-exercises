function GamesLayout({ children, gamesCount }) {
  return (
    <section className='max-width-wrapper'>
      <header className='library-header'>
        <h1>My games</h1>
        {!!gamesCount && (
          <p>
            <span className='num-of-games'>{gamesCount}</span> games in library
          </p>
        )}
      </header>
      <div className='game-grid'>{children}</div>
    </section>
  )
}

export default GamesLayout
