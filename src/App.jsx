import restaurants from './data/restaurants.js'
import RestaurantCard from './components/RestaurantCard'  
const regions = ['전체', '동구', '중구', '서구', '유성구', '대덕구']

function App() {
  const selectedRegion = '전체'
  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="mx-auto min-h-screen max-w-120 bg-white">
        {/* 상단 앱바 */}
        <header className="sticky top-0 z-10 flex h-14 items-center border-b border-neutral-100 bg-white px-5">
          <h1 className="text-lg font-bold text-brand">대전 한입</h1>
        </header>
 
        <main className="px-5 pt-4 pb-28">
          {/* 검색창 */}
          <div className="flex h-11 items-center gap-2 rounded-xl bg-neutral-100 px-4">
            <svg className="size-4 shrink-0 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              placeholder="식당 이름, 메뉴로 검색"
              className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
            />
          </div>
 
          {/* 지역 필터 */}
         <div className="mt-4 flex gap-2 overflow-x-auto">
            {regions.map((region) => (
              <button
                key={region}
                className={
                  region === selectedRegion
                    ? 'shrink-0 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white'
                    : 'shrink-0 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600'
                }
              >
                {region}
              </button>
            ))}
          </div>

 
          {/* 목록 제목 */}
          <div className="mt-8 flex items-center justify-between">
            <h2 className="font-bold text-neutral-900">
              나의 맛집 기록 <span className="text-brand">{restaurants.length}</span>
            </h2>
            <button className="text-sm text-neutral-500">최신순</button>
          </div>
 
          {/* 맛집 목록 */}
          {restaurants.length === 0 ? (
            //기록이 없을 때
            <div className="flex flex-col items-center py-20 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-light">
              <svg className="size-7 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="mt-4 font-bold text-neutral-900">아직 기록한 맛집이 없어요</p>
            <p className="mt-1 text-sm text-neutral-500">+ 버튼을 눌러 첫 번째 맛집을 기록해 보세요.</p>
            </div>
            ) : (
              <ul className="mt-2 divide-y divide-neutral-100">
                {restaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    name={restaurant.name}
                    address={restaurant.address}
                    menu={restaurant.menu}
                    rating={restaurant.rating}
                    visitDate={restaurant.visitDate}
                    revisit={restaurant.revisit}
                    image={restaurant.image}
                  />
                ))}
              </ul>
            )}
        </main>
 
        {/* 기록 추가 버튼 */}
        <div className="pointer-events-none fixed inset-x-0 bottom-6">
          <div className="mx-auto flex max-w-120 justify-end px-5">
            <button
              aria-label="맛집 기록 추가"
              className="pointer-events-auto flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-lg"
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default App
