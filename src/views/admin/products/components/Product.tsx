/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDisclosure } from "@chakra-ui/hooks";
import {
    Avatar,
  Modal,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';
import { useState, type FC } from "react";
import { MdClose } from "react-icons/md";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BsStarFill } from "react-icons/bs";

const RATINGS = 4;

const Stars:FC<{extraStyles: string, rating: number}> = ({extraStyles, rating}) => {

    const ratingStarsFilled = Array.from({length: rating}).fill(undefined).map((_item) => {
        return <BsStarFill className={`text-yellow-500 text-base  ${extraStyles}`} />
    })

    const ratingStarsHalf = Array.from({length: Math.round(5 - rating)}).fill(undefined).map((_item) => {
        return <BsStarFill className={`text-gray-500 text-base ${extraStyles}`} />
    })

    return <span className="flex gap-1 items-center justify-start !text-sm">{ratingStarsFilled}{ratingStarsHalf}</span>
}

const Product: FC<{ productId: string, tableData: any }> = ({ productId, tableData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [bottomSwiper, setBottomSwiper] = useState(null)
  const [topSwiper, setTopSwiper] = useState(null)
  const { images, category, status } = tableData;

  const ratingStarsFilled = Array.from({length: RATINGS}).fill(undefined).map((_item) => {
    return <BsStarFill className="text-yellow-500 text-base" />
  })

  const ratingStarsHalf = Array.from({length: Math.round(5 - RATINGS)}).fill(undefined).map((_item) => {
    return <BsStarFill className="text-gray-500 text-base" />
  })

  return (
    <div>
        <button
            className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 active:border-brand-600 0 hover:bg-brand-500 hover:text-white"
            onClick={onOpen}
        >
            view product details
        </button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent className="w-full py-8 px-10 flex flex-col items-start justify-center gap-4" maxWidth={900}>
                <div className="w-full flex items-center justify-between border-b py-3">
                    <span className="font-bold text-black/50">Product Details</span>
                    <MdClose onClick={onClose} className="cursor-pointer" />
                </div>
                <div className="w-full flex items-start justify-center gap-8">
                    <div className="w-fit flex flex-col gap-4">
                        <Swiper spaceBetween={10} modules={[Autoplay, Controller]} slidesPerGroup={1} pagination={{ clickable: true }} autoplay loop aria-disabled={false} className="h-[20rem] w-[23rem] rounded-lg" onSwiper={setTopSwiper} controller={{control: bottomSwiper}}>
                            {
                                images.map((image: string) => {
                                    return (
                                        <SwiperSlide>
                                            <img src={image} alt="" className="w-full h-full" />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <Swiper spaceBetween={10} modules={[Autoplay, Controller]} slidesPerView={5} pagination={{ clickable: true }} autoplay loop aria-disabled={false} className="h-[3rem] w-[23rem] rounded-lg" onSwiper={setBottomSwiper} controller={{control: topSwiper}}>
                            {
                                images.map((image: string) => {
                                    return (
                                        <SwiperSlide>
                                            <img src={image} alt="" className="w-full h-full" />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-4">
                        <span className="text-sm text-gray-600 font-semibold">{category} products</span>
                        <span className="text-2xl font-semibold">Ultimate Ears Wonderboom</span>
                        <span className={ `text-white text-xs font-bold rounded-full px-2 ${status == "in_stock" ? "bg-green-500" : "bg-brand-500"}` }>{ status == "in_stock" ? "In stock" : "Out of stock" }</span>
                        <span className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda autem eaque error explicabo fugiat iusto necessitatibus, temporibus. Laudantium, voluptate?</span>
                        <p className="flex gap-4 text-xl">
                            <span className="line-through text-black/50">frw 10000</span>
                            <span className="">frw 5000</span>
                        </p>
                        <span className="flex gap-1">{ratingStarsFilled}{ratingStarsHalf}</span>
                        <div className="flex items-center justify-center gap-3">
                            <span className="text-sm font-semibold">Available in:</span>
                            <div className="flex items-center justify-center gap-1">
                                <div className="w-4 h-4 rounded-full bg-slate-600"></div>
                                <div className="w-4 h-4 rounded-full bg-red-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-h-[20vh] overflow-scroll">
                    <Tabs>
                        <TabList>
                            <Tab _selected={{bg: "#fdf2f8", color: "#ff0080", borderRadius: "20%"}} className="!text-sm !mb-2">Description</Tab>
                            <Tab _selected={{bg: "#fdf2f8", color: "#ff0080", borderRadius: "20%"}} className="!text-sm !mb-2">Reviews (50)</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel className="text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laborum eius dignissimos veritatis quibusdam doloremque corporis nobis cumque rem laudantium. Quibusdam, aut? Quod obcaecati in consequuntur sed asperiores necessitatibus exercitationem.
                            </TabPanel>
                            <TabPanel className="flex flex-col gap-6">
                                <span className="text-3xl font-medium">4.0</span>
                                <span className="flex gap-1 items-center justify-start">{ratingStarsFilled}{ratingStarsHalf} <b className="text-sm font-medium">(10)</b></span>
                                <div className="flex flex-col items-start justify-center gap-6">
                                    <div className="flex items-center justify-start gap-4">
                                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        <div className="flex flex-col items-start justify-center gap-1">
                                            <span className="text-base font-semibold">Rodger Stutely</span>
                                            <Stars extraStyles="text-xs" rating={RATINGS} />
                                            <span className="text-sm">I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start gap-4">
                                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                        <div className="flex flex-col items-start justify-center gap-1">
                                            <span className="text-base font-semibold">Rodger Stutely</span>
                                            <Stars extraStyles="text-xs" rating={RATINGS} />
                                            <span className="text-sm">I love your products. It is very easy and fun to use this panel. I would recommend it to everyone.</span>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
                <div className="flex items-center justify-center gap-3 w-full">
                    <button className="text-brand-500 border border-brand-500 text-sm p-2 w-1/3 rounded-md self-end my-3 whitespace-nowrap">Edit product</button>
                    <button className="text-white bg-brand-500 text-sm p-2 w-1/3 rounded-md self-end my-3 whitespace-nowrap">Delete product</button>
                    <button className="text-white bg-brand-500 text-sm p-2 w-1/3 rounded-md self-end my-3" onClick={onClose}>Close</button>
                </div>
            </ModalContent>
        </Modal>
    </div>
  )
}

export default Product;
