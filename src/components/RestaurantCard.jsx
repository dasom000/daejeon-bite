function RestaurantCard({ name, address, menu, rating, visitDate, revisit, image }) {
    return(
        < li className="flac gap-4 py-4">
            {/* 사진 */}
            {image ?(
                <img src={import.meta.env.BASE_URL + image} alt={name} className="size-20 shrink-0 rounded-xl object-cover" />
            ) : (
                <div className="flex size-20 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-xs text-neutral-400">
                사진없음
                </div>
            )}
             {/*정보*/}
             <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                    <h3 className="turncate font-bold text-neutral-900">{name}</h3>
                    {revisit &&(
                        <span className="shrink-0 rounded-md bg-brand-light px-1.5 py-0.5 text-xs font-medium text-brand">
                            재방문
                        </span>
                    )}
                </div>
                <p className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
                    <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="roung">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="truncate">{address}</span>
                </p>
                <p className="mt-2 truncate text-sm text-neutral-700">{menu}</p>
                <p className="mt-1 text-sm text-neutral-500">
                    <span className="font-bold text-neutral-900">
                        <span className="text-amber-400">*</span>{rating.toFixed(1)}
                    </span>
                    <span className="mx-1.5 text-neutral-300">|</span>
                    {visitDate}방문
                </p>
            </div>
        </li>
        )
    }

    export default RestaurantCard

