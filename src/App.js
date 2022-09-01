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
      <div className='flex justify-between px-6 py-3 border border-b'>
        <div className='flex items-center text-sm'>
          <div className='flex items-center gap-x-1'>
            <div className='p-2'>
              <ViewGridIcon className='w-5 h-5 text-[#5B6871]' />
            </div>
            <div className='p-2'>
              <FireIcon className='w-5 h-5 text-[#F76659]' />
            </div>
          </div>
          <div className='flex ml-6 gap-x-4'>
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
              className='border border-gray-100 rounded-full shadow-sm h-7 w-7'
            />
          </div>
        </div>
      </div>

      <div className='flex scrollable'>
        <div className='w-[240px] border-r bg-[#F6F8F9] px-[15px] py-5'>
          <div className='flex items-center p-2 gap-x-2'>
            <AtSymbolIcon className='w-6 h-6 text-[#F8C51B]' />

            <div>
              <div className='text-[#252C32] font-semibold text-sm'>Product Web</div>
              <div className='text-[#84919A] text-xs'>Classic software project</div>
            </div>
          </div>

          <div className='p-2'>
            <div className='flex items-center px-3 py-2 rounded-md cursor-pointer gap-x-2 hover:bg-gray-100'>
              <NewspaperIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Backlog</span>
            </div>
            <div className='flex gap-x-2 py-2 px-3 bg-[#D7EDFF] cursor-pointer rounded-md mt-1 items-center'>
              <ViewBoardsIcon className='w-5 h-5 text-[#0E73F6]' />
              <span className='text-xs text-[#0E73F6] font-semibold'>Active sprints</span>
            </div>
            <div className='flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer gap-x-2 hover:bg-gray-100'>
              <TrendingUpIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Reports</span>
            </div>

            <div className='h-[1px] bg-[#E5E9EB] w-full mt-4 mb-4'></div>

            <div className='flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer gap-x-2 hover:bg-gray-100'>
              <CollectionIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Issues</span>
            </div>

            <div className='flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer gap-x-2 hover:bg-gray-100'>
              <PuzzleIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Components</span>
            </div>

            <div className='flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer gap-x-2 hover:bg-gray-100'>
              <CodeIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Code</span>
            </div>

            <div className='flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer gap-x-2 hover:bg-gray-100'>
              <ClipboardCheckIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Releases</span>
            </div>

            <div className='flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer gap-x-2 hover:bg-gray-100'>
              <DocumentDuplicateIcon className='w-5 h-5 text-[#84919A]' />
              <span className='text-xs text-[#252C32]'>Project pages</span>
            </div>
          </div>
        </div>

        <div className='w-full p-7'>
          <div className='flex items-center gap-x-1'>
            <div className='text-xs text-[#6E7C87] cursor-pointer '>Projects</div>
            <ChevronRightIcon className='w-4 h-4 text-[#B0BABF]' />
            <div className='text-xs text-[#6E7C87] cursor-pointer hover:underline'>International</div>
            <ChevronRightIcon className='w-4 h-4 text-[#B0BABF]' />
            <div className='text-xs text-[#252C32] cursor-pointer hover:underline'>Product Web</div>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <div className='text-2xl font-bold text-black'>All sprints</div>

            <div className='flex items-center gap-x-3'>
              <StarIcon className='w-5 h-5 text-[#5B6871] cursor-pointer' />
              <button className='bg-[#4094F7] text-white font-semibold px-3 py-2 text-xs rounded-md cursor-pointer select-none'>Complete sprint</button>
              <ShareIcon className='w-5 h-5 text-[#5B6871] cursor-pointer' />
              <div className='p-1 border rounded-md'>
                <DotsHorizontalIcon className='w-5 h-5 text-[#5B6871] cursor-pointer' />
              </div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='flex items-center gap-x-3'>
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
                <div className='z-10 flex items-center justify-center w-10 h-10 text-sm border border-gray-300 rounded-full cursor-pointer'>9</div>
              </div>

              <div className='flex items-center gap-x-6'>
                <div className='text-[#252C32] text-sm cursor-pointer'>Only My Issues</div>
                <div className='text-[#252C32] text-sm cursor-pointer'>Recently Updated</div>
                <div className='flex items-center cursor-pointer gap-x-1'>
                  <span className='text-[#252C32] text-sm'>All sprints</span>
                  <ChevronDownIcon className='w-4 h-4 text-[#6E7C87]' />
                </div>
              </div>
            </div>

            <div className='grid grid-cols-3 mt-4 gap-x-3'>
              <div className='bg-[#F6F8F9] p-4 scrollable-content overflow-y-auto shadow-md'>
                <div className='text-[#6E7C87] font-semibold text-sm'>TO DO</div>
                {Array(5)
                  .fill()
                  .map(() => (
                    <div className='p-4 mt-2 bg-white rounded-md shadow-md cursor-pointer'>
                      <span className='block mb-3 text-sm'>{data.tasks.title}</span>
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

              <div className='bg-[#F6F8F9] p-4 scrollable-content overflow-y-auto shadow-md'>
                <div className='text-[#6E7C87] font-semibold text-sm'>IN PROGRESS</div>
                {Array(6)
                  .fill()
                  .map(() => (
                    <div className='p-4 mt-2 bg-white rounded-md shadow-md cursor-pointer'>
                      <span className='block mb-3 text-sm'>{data.tasks.title}</span>
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

              <div className='bg-[#F6F8F9] p-4 scrollable-content overflow-y-auto shadow-md'>
                <div className='text-[#6E7C87] font-semibold text-sm'>DONE</div>
                {Array(10)
                  .fill()
                  .map(() => (
                    <div className='p-4 mt-2 bg-white rounded-md shadow-md cursor-pointer'>
                      <span className='block mb-3 text-sm'>{data.tasks.title}</span>
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
