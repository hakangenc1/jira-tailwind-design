import {
  ViewGridIcon,
  FireIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  SearchIcon,
  ChevronDownIcon,
  AtSymbolIcon,
  NewspaperIcon,
  CollectionIcon,
  ViewBoardsIcon,
  TrendingUpIcon,
  PuzzleIcon,
  CodeIcon,
  ClipboardCheckIcon,
  DocumentDuplicateIcon,
  ChevronRightIcon,
  StarIcon,
  ShareIcon,
  DotsHorizontalIcon,
  BookmarkAltIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/solid";

import data from "./data/data.json";

function App() {
  return (
    <div className='w-full h-screen'>
      <div className='flex justify-between py-3 px-6 border border-b'>
        <div className='flex items-center text-sm'>
          <div className='flex gap-x-1 items-center'>
            <div className='p-2'>
              <ViewGridIcon className='w-5 h-5 text-[#5B6871]' />
            </div>
            <div className='p-2'>
              <FireIcon className='w-5 h-5 text-[#F76659]' />
            </div>
          </div>
          <div className='ml-6 flex gap-x-4'>
            <div className='p-2 cursor-pointer text-[#252C32] text-sm'>Your work</div>
            <div className='p-2 cursor-pointer text-[#252C32] text-sm flex items-center gap-x-1'>
              <span>Projects</span>
              <ChevronDownIcon className='w-4 h-4 text-[#6E7C87]' />
            </div>
            <div className='p-2 cursor-pointer text-[#252C32] text-sm flex items-center gap-x-1'>
              <span>Filters</span>
              <ChevronDownIcon className='w-4 h-4 text-[#6E7C87]' />
            </div>
            <div className='p-2 cursor-pointer text-[#252C32] text-sm flex items-center gap-x-1'>
              <span>Dashboards</span>
              <ChevronDownIcon className='w-4 h-4 text-[#6E7C87]' />
            </div>
            <div className='p-2 cursor-pointer text-[#252C32] text-sm flex items-center gap-x-1'>
              <span>People</span>
              <ChevronDownIcon className='w-4 h-4 text-[#6E7C87]' />
            </div>
            <div className='p-2 cursor-pointer text-[#252C32] text-sm flex items-center gap-x-1'>
              <span>Apps</span>
              <ChevronDownIcon className='w-4 h-4 text-[#6E7C87]' />
            </div>
            <div className='py-2 px-4 border rounded-md cursor-pointer text-[#252C32] text-sm'>Create</div>
          </div>
        </div>

        <div className='flex items-center'>
          <div className='relative'>
            <SearchIcon className='h-5 text-[#B0BABF] w-5 absolute top-2 left-2' />
            <input type='text' className='border py-2 px-8 border-[#DDE2E4] rounded-[6px] text-sm mr-5' placeholder='Search' />
          </div>
          <div className='p-2 cursor-pointer'>
            <BellIcon className='w-5 h-5 text-[#5B6871]' />
          </div>
          <div className='p-2 cursor-pointer'>
            <QuestionMarkCircleIcon className='w-5 h-5 text-[#5B6871]' />
          </div>
          <div className='p-2 cursor-pointer'>
            <CogIcon className='w-5 h-5 text-[#5B6871]' />
          </div>
          <div className='p-2 cursor-pointer'>
            <img
              alt='profile'
              src='https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
              className='rounded-full border border-gray-100 shadow-sm h-7 w-7'
            />
          </div>
        </div>
      </div>

      <div className='flex scrollable'>
        <div className='w-[240px] border-r bg-[#F6F8F9] px-[15px] py-5'>
          <div className='flex gap-x-2 p-2 items-center'>
            <AtSymbolIcon className='w-6 h-6 text-[#F8C51B]' />

            <div>
              <div className='text-[#252C32] font-semibold text-sm'>Product Web</div>
              <div className='text-[#84919A] text-xs'>Classic software project</div>
            </div>
          </div>

          <div className='p-2'>
            <div className='flex gap-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md items-center'>
              <NewspaperIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Backlog</span>
            </div>
            <div className='flex gap-x-2 py-2 px-3 bg-[#D7EDFF] cursor-pointer rounded-md mt-1 items-center'>
              <ViewBoardsIcon className='w-5 h-5 text-[#0E73F6]' />
              <span className='text-xs text-[#0E73F6] font-semibold'>Active sprints</span>
            </div>
            <div className='flex gap-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md mt-1 items-center'>
              <TrendingUpIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Reports</span>
            </div>

            <div className='h-[1px] bg-[#E5E9EB] w-full mt-4 mb-4'></div>

            <div className='flex gap-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md mt-1 items-center'>
              <CollectionIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Issues</span>
            </div>

            <div className='flex gap-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md mt-1 items-center'>
              <PuzzleIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Components</span>
            </div>

            <div className='flex gap-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md mt-1 items-center'>
              <CodeIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Code</span>
            </div>

            <div className='flex gap-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md mt-1 items-center'>
              <ClipboardCheckIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Releases</span>
            </div>

            <div className='flex gap-x-2 py-2 px-3 hover:bg-gray-100 cursor-pointer rounded-md mt-1 items-center'>
              <DocumentDuplicateIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Project pages</span>
            </div>
          </div>
        </div>

        <div className='p-7 w-full'>
          <div className='flex gap-x-1 items-center'>
            <div className='text-xs text-[#6E7C87] cursor-pointer '>Projects</div>
            <ChevronRightIcon className='w-4 h-4 text-[#B0BABF]' />
            <div className='text-xs text-[#6E7C87] cursor-pointer hover:underline'>International</div>
            <ChevronRightIcon className='w-4 h-4 text-[#B0BABF]' />
            <div className='text-xs text-[#252C32] cursor-pointer hover:underline'>Product Web</div>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <div className='font-bold text-2xl text-black'>All sprints</div>

            <div className='flex gap-x-3 items-center'>
              <StarIcon className='w-5 h-5 text-[#5B6871] cursor-pointer' />
              <button className='bg-[#4094F7] text-white font-semibold px-3 py-2 text-xs rounded-md cursor-pointer select-none'>Complete sprint</button>
              <ShareIcon className='w-5 h-5 text-[#5B6871] cursor-pointer' />
              <div className='border p-1 rounded-md'>
                <DotsHorizontalIcon className='w-5 h-5 text-[#5B6871] cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='flex gap-x-3 items-center'>
              <div className='relative'>
                <SearchIcon className='h-5 text-[#B0BABF] w-5 absolute top-2 left-2' />
                <input type='text' className='border py-2 px-8 border-[#DDE2E4] rounded-[6px] text-sm mr-5' placeholder='Search' />
              </div>

              <div class='flex -space-x-3 items-center'>
                <img
                  class='w-10 h-10 rounded-full border-2 z-50 border-white overflow-hidden cursor-pointer'
                  src='https://images.unsplash.com/photo-1603780057844-108f8bd83502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
                  alt=''
                />
                <img
                  class='w-10 h-10 rounded-full border-2 z-40 border-white overflow-hidden cursor-pointer'
                  src='https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  alt=''
                />
                <img
                  class='w-10 h-10 rounded-full border-2 z-30 border-white overflow-hidden cursor-pointer'
                  src='https://images.unsplash.com/photo-1568927198336-e9ae04365910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  alt=''
                />
                <img
                  class='w-10 h-10 rounded-full border-2 z-20 border-white overflow-hidden cursor-pointer'
                  src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                  alt=''
                />
                <div className='w-10 h-10 rounded-full border z-10 border-gray-300 text-sm flex items-center justify-center cursor-pointer'>9</div>
              </div>

              <div className='flex gap-x-6 items-center'>
                <div className='text-[#252C32] text-sm cursor-pointer'>Only My Issues</div>
                <div className='text-[#252C32] text-sm cursor-pointer'>Recently Updated</div>
                <div className='flex items-center gap-x-1 cursor-pointer'>
                  <span className='text-[#252C32] text-sm'>All sprints</span>
                  <ChevronDownIcon className='w-4 h-4 text-[#6E7C87]' />
                </div>
              </div>
            </div>

            <div className='mt-4 grid grid-cols-3'>
              <div className='bg-[#F6F8F9] p-4 scrollable-content overflow-y-auto'>
                <div className='text-[#6E7C87] font-semibold text-sm'>TO DO</div>
                {Array(5)
                  .fill()
                  .map(() => (
                    <div className='p-4 bg-white shadow-md mt-2 rounded-md cursor-pointer'>
                      <span className='text-sm block mb-3'>{data.tasks.title}</span>
                      <span className='text-[#835101] bg-[#F8DD4E] text-xs px-[4px] py-[1px] rounded-md font-semibold'>{data.tasks.tag}</span>

                      <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-x-1'>
                          <BookmarkAltIcon className='w-5 h-5 text-[#47D16C]' />
                          <ChevronDoubleUpIcon className='w-5 h-5 text-[#F76659]' />
                          <div className='w-5 h-5 bg-[#E5E9EB] font-semibold text-xs rounded-full flex items-center justify-center'>2</div>
                        </div>

                        <div className='flex items-center gap-x-1'>
                          <span className='text-[#6E7C87] text-sm'>{data.tasks.number}</span>
                          <div className='relative'>
                            <div className='w-5 h-5 bg-[#D7EDFF] text-[#0452C8] font-bold text-[9px] rounded-full flex items-center justify-center'>{data.tasks.person}</div>
                            <div className='absolute w-[6px] h-[6px] bg-[#47D16C] rounded-full right-0 bottom-0'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className='bg-[#F6F8F9] p-4 scrollable-content overflow-y-auto'>
                <div className='text-[#6E7C87] font-semibold text-sm'>IN PROGRESS</div>
                {Array(6)
                  .fill()
                  .map(() => (
                    <div className='p-4 bg-white shadow-md mt-2 rounded-md cursor-pointer'>
                      <span className='text-sm block mb-3'>{data.tasks.title}</span>
                      <span className='text-[#835101] bg-[#F8DD4E] text-xs px-[4px] py-[1px] rounded-md font-semibold'>{data.tasks.tag}</span>

                      <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-x-1'>
                          <BookmarkAltIcon className='w-5 h-5 text-[#47D16C]' />
                          <ChevronDoubleUpIcon className='w-5 h-5 text-[#F76659]' />
                          <div className='w-5 h-5 bg-[#E5E9EB] font-semibold text-xs rounded-full flex items-center justify-center'>2</div>
                        </div>

                        <div className='flex items-center gap-x-1'>
                          <span className='text-[#6E7C87] text-sm'>{data.tasks.number}</span>
                          <div className='relative'>
                            <div className='w-5 h-5 bg-[#D7EDFF] text-[#0452C8] font-bold text-[9px] rounded-full flex items-center justify-center'>{data.tasks.person}</div>
                            <div className='absolute w-[6px] h-[6px] bg-[#47D16C] rounded-full right-0 bottom-0'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className='bg-[#F6F8F9] p-4 scrollable-content overflow-y-auto'>
                <div className='text-[#6E7C87] font-semibold text-sm'>DONE</div>
                {Array(10)
                  .fill()
                  .map(() => (
                    <div className='p-4 bg-white shadow-md mt-2 rounded-md cursor-pointer'>
                      <span className='text-sm block mb-3'>{data.tasks.title}</span>
                      <span className='text-[#835101] bg-[#F8DD4E] text-xs px-[4px] py-[1px] rounded-md font-semibold'>{data.tasks.tag}</span>

                      <div className='flex items-center justify-between mt-3'>
                        <div className='flex items-center gap-x-1'>
                          <BookmarkAltIcon className='w-5 h-5 text-[#47D16C]' />
                          <ChevronDoubleUpIcon className='w-5 h-5 text-[#F76659]' />
                          <div className='w-5 h-5 bg-[#E5E9EB] font-semibold text-xs rounded-full flex items-center justify-center'>2</div>
                        </div>

                        <div className='flex items-center gap-x-1'>
                          <span className='text-[#6E7C87] text-sm'>{data.tasks.number}</span>
                          <div className='relative'>
                            <div className='w-5 h-5 bg-[#D7EDFF] text-[#0452C8] font-bold text-[9px] rounded-full flex items-center justify-center'>{data.tasks.person}</div>
                            <div className='absolute w-[6px] h-[6px] bg-[#47D16C] rounded-full right-0 bottom-0'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
