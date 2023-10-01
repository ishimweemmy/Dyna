import Card from 'src/components/card';
import { BsPhone } from 'react-icons/bs';
import { MdArrowDropUp, MdComputer } from 'react-icons/md';

const TotalVisitors = () => {

  return (
    <Card extra='!grid grid-cols-3 p-5 gap-y-6'>
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <span className='text-lg font-medium whitespace-nowrap'>Total Visits</span>
          <span className='text-xl font-semibold'>$42.5k</span>
          <div className=" flex items-center justify-start gap-2">
            <span className='rounded-md bg-yellow-100 grid justify-items-center p-1'>
              <BsPhone className='text-sm  text-yellow-500' />
            </span>
            <span className=''>Mobile</span>
          </div>
          <div className='flex flex-col items-start justify-center'>
            <span className='text-xl font-semibold'>20%</span>
            <span className='text-xs text-gray-700'>2,890</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-2">

        </div>
        <div className="w-full flex flex-col items-end justify- gap-4">
          <div className="flex items-center justify-center">
            <p className="text-sm font-bold text-green-500"> +2.45% </p>
            <MdArrowDropUp className="font-medium text-green-500" />
          </div>
          <div className='flex flex-col items-end justify-center gap-3'>
            <div className=" flex items-center justify-start gap-2">
              <span className='rounded-md bg-brand-100 grid justify-items-center p-1'>
                <MdComputer className='text-sm  text-brand-500' />
              </span>
              <span className=''>Desktop</span>
            </div>
            <div className='flex flex-col items-start justify-center'>
              <span className='text-xl font-semibold'>80%</span>
              <span className='text-xs text-gray-700'>2,890</span>
            </div>
          </div>
        </div>
        <div className="w-full flex rounded-xl col-span-3 h-3">
          <div className='w-[20%] bg-yellow-500 rounded-l-xl'></div>
          <div className='w-[80%] bg-brand-500 rounded-r-xl'></div>
        </div>
    </Card>
  )
}

export default TotalVisitors;
