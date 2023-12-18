import '../App.css'
import BlockFilter from './BlockFilter'
import BlockSearch from './BlockSearch'
import PlayListItem from './PlayListItem'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
function TrackSkeleton() {
  ;<div className="skeleton"></div>
  ;<div className="skeleton"></div>
  ;<div className="skeleton"></div>
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton count={3} />
      </p>
    </SkeletonTheme>
  )
}
function PlayList({ isLoading }) {
  return (
    <div className="main__centerblock centerblock">
      <BlockSearch />
      <h2 className="centerblock__h2">Треки</h2>
      <BlockFilter />
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>

          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          {isLoading ? (
            <TrackSkeleton />
          ) : (
            <PlayListItem name={'Anastasija'} author={'pam'} album={'pam'} />
          )}
        </div>
      </div>
    </div>
  )
}

export default PlayList
