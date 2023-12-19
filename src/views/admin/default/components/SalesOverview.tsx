import React, { useState } from 'react'
import { AiOutlineTransaction } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
import { MdArrowDropUp, MdBarChart, MdDeliveryDining, MdMoreVert } from 'react-icons/md';
import Card from 'src/components/card';
import Widget from 'src/components/widget/Widget';

const SalesOverview = () => {
  const [tooltipVisible, setToolTipVisible] = useState(false)

  return (
    <Card extra='col-span-2'>
      <div className='w-full p-4 flex items-center justify-between gap-2'>
        <section className='flex flex-col items-start justify-center gap-2'>
          <span className='text-xl font-bold text-navy-700 dark:text-white'>Sales Overview</span>
          <div className="flex items-center justify-center gap-2">
            <p className="text-sm text-gray-600">Total 42.75k Sales </p>
            <div className="flex items-center justify-center">
              <p className="text-sm font-bold text-green-500"> +2.45% </p>
              <MdArrowDropUp className="font-medium text-green-500" />
            </div>
          </div>
        </section>
        <div className='relative cursor-pointer'>
          <MdMoreVert onClick={() => setToolTipVisible(prev => !prev)} />
          {tooltipVisible && <div className='flex flex-col bg-lightPrimary shadow-xl shadow-shadow-400 rounded-xl absolute w-[8rem] inset-[0px_0px_auto_auto] translate-x-2 translate-y-6 pl-2 py-2 transition-all z-[1999]' tabIndex={0}>
            <span className='text-gray-900 hover:bg-brand-500 hover:text-white rounded-md hover:p-1 px-2 transition-all duration-500'>share</span>
            <span className='text-gray-900 hover:bg-brand-500 hover:text-white rounded-md hover:p-1 px-2 transition-all duration-500'>update</span>
          </div>}
        </div>
      </div>
      <div className='w-full flex justify-between px-2'>
        <Widget
          icon={<FaUser className="h-4 w-4" />}
          title={"New Customers"}
          subtitle={"340"}
        />
        <Widget
          icon={<MdBarChart className="h-4 w-4" />}
          title={"Total Profit"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<AiOutlineTransaction className="h-4 w-4" />}
          title={"New Transactions"}
          subtitle={"150k"}
        />
        <Widget
          icon={<MdDeliveryDining className="h-4 w-4" />}
          title={"Deliveries Completed"}
          subtitle={"100"}
        />
      </div>
    </Card>
  )
}

export default SalesOverview