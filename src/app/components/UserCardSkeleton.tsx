export function UserCardSkeleton() {
  return (
    <li className='flex items-center justify-between w-full animate-pulse'>
      <div className='flex items-center gap-x-2 w-full'>
        <div className='w-10 h-10 bg-gray-300 rounded-full px-2 py-2'></div>

        <div className='flex flex-col w-full gap-1'>
          <small className='w-3/4 h-4 bg-gray-300 rounded-md'></small>
          <span className='w-2/4 h-4 bg-gray-300 rounded-md'></span>
        </div>
      </div>

      <button className='w-24 h-10 bg-gray-300 animate-pulse px-4 py-2 rounded-full'></button>
    </li>
  );
}
