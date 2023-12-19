import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { MdArrowDropUp } from 'react-icons/md';
import sheetsImg from 'src/assets/img/dashboards/sheets.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LineChart from 'src/components/charts/LineChart';
import BarChart from 'src/components/charts/BarChart'
import { barChartDataWeeklyRevenue, barChartOptionsWeeklyRevenue, lineChartDataTotalSpent, lineChartOptionsTotalSpent } from 'src/variables/charts';

const WeeklySales = () => {
  return (
    <div className="w-full col-span-2 ">
        <Swiper spaceBetween={10} modules={[Autoplay]} slidesPerGroup={1} pagination={{ clickable: true }} autoplay={false} loop aria-disabled={false}>
            <SwiperSlide className='w-full !flex bg-brand-500 rounded-lg p-4 text-white'>
                <div className='w-3/5 flex flex-col items-start justify-center gap-6 '>
                    <section className='flex flex-col items-start justify-center gap-2'>
                        <span className='text-xl font-bold'>Weekly Sales</span>
                        <div className="flex items-center justify-center gap-2">
                            <p className="text-sm">Total 42.75k Earning </p>
                            <div className="flex items-center justify-center">
                            <p className="text-sm font-bold text-green-500"> +2.45% </p>
                            <MdArrowDropUp className="font-medium text-green-500" />
                            </div>
                        </div>
                    </section>
                    <span className='font-bold'>Hardware store</span>
                    <ul className='w-full grid grid-cols-2 justify-items-start gap-2 gap-y-6'>
                        <li className='flex items-center justify-center gap-2 text-sm'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-2'>16</p>
                            <p>TV's</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-sm'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-2'>16</p>
                            <p>speakers</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-sm'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-2'>16</p>
                            <p>cameras</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-sm'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-2'>16</p>
                            <p>consoles</p>
                        </li>
                    </ul>
                </div>
                <div className='w-full flex items-center justify-center gap-3 '>
                    <LineChart
                        chartOptions={lineChartOptionsTotalSpent}
                        chartData={lineChartDataTotalSpent}
                    />
                    <img src={sheetsImg} alt="" className='w-1/4 mt-8' />
                </div>
            </SwiperSlide>
            <SwiperSlide className='w-full !flex bg-brand-500 rounded-lg p-4 text-white'>
                <div className='w-3/5 flex flex-col items-start justify-center gap-6 '>
                    <section className='flex flex-col items-start justify-center gap-2'>
                        <span className='text-xl font-bold'>Weekly Sales</span>
                        <div className="flex items-center justify-center gap-2">
                            <p className="text-sm">Total 42.75k Earning </p>
                            <div className="flex items-center justify-center">
                            <p className="text-sm font-bold text-green-500"> +2.45% </p>
                            <MdArrowDropUp className="font-medium text-green-500" />
                            </div>
                        </div>
                    </section>
                    <span className='font-bold'>Hardware store</span>
                    <ul className='w-full grid grid-cols-2 justify-items-start gap-2 gap-y-6'>
                        <li className='flex items-center justify-center gap-2 text-sm'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-2'>16</p>
                            <p>TV's</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-sm'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-2'>16</p>
                            <p>speakers</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-sm'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-2'>16</p>
                            <p>cameras</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-sm'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-2'>16</p>
                            <p>consoles</p>
                        </li>
                    </ul>
                </div>
                <div className='w-full flex items-center justify-center gap-3 '>
                    <BarChart
                        chartData={barChartDataWeeklyRevenue}
                        chartOptions={barChartOptionsWeeklyRevenue}
                    />
                    <img src={sheetsImg} alt="" className='w-1/4 mt-8' />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default WeeklySales;
