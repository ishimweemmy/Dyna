import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { MdArrowDropUp } from 'react-icons/md';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const WeeklySales = () => {
  return (
    <div className="w-full ">
        <Swiper spaceBetween={20} modules={[Pagination]} pagination={{ clickable: true }}>
            <SwiperSlide className='w-full flex bg-brand-500 rounded-lg p-4 text-white'>
                <div className='w-full flex flex-col items-start justify-center gap-6 '>
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
                    <ul className='w-1/2 grid grid-cols-2 justify-items-start gap-2 gap-y-6'>
                        <li className='flex items-center justify-center gap-2 text-base'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-4'>16</p>
                            <p>TV's</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-base'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-4'>16</p>
                            <p>speakers</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-base'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-4'>16</p>
                            <p>cameras</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-base'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-4'>16</p>
                            <p>consoles</p>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    
                </div>
            </SwiperSlide>
            <SwiperSlide className='w-full flex bg-brand-500 rounded-lg p-4 text-white'>
                <div className='w-full flex flex-col items-start justify-center gap-6 '>
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
                    <ul className='w-1/2 grid grid-cols-2 justify-items-start gap-2 gap-y-6'>
                        <li className='flex items-center justify-center gap-2 text-base'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-4'>16</p>
                            <p>TV's</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-base'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-4'>16</p>
                            <p>speakers</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-base'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-4'>16</p>
                            <p>cameras</p>
                        </li>
                        <li className='flex items-center justify-center gap-2 text-base'>
                            <p className='bg-[#ffffff35] rounded-lg p-1 px-4'>16</p>
                            <p>consoles</p>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default WeeklySales;
