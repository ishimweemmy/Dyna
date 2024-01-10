/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDisclosure } from "@chakra-ui/hooks";
import {
    Avatar,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea
} from '@chakra-ui/react';
import { useState, type FC } from "react";
import { MdClose, MdFileUpload } from "react-icons/md";
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
import Upload from "../../profile/components/Upload";

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

const EditProduct: FC<{ productId: string, tableData: any, isProductEditOpen: boolean, onProductEditClose: () => void }> = ({ productId, tableData, isProductEditOpen, onProductEditClose }) => {
  const ratingStarsFilled = Array.from({length: RATINGS}).fill(undefined).map((_item) => {
    return <BsStarFill className="text-yellow-500 text-base" />
  })

  const ratingStarsHalf = Array.from({length: Math.round(5 - RATINGS)}).fill(undefined).map((_item) => {
    return <BsStarFill className="text-gray-500 text-base" />
  })

  return (
    <form>
        <Modal isOpen={isProductEditOpen} onClose={onProductEditClose} isCentered>
            <ModalOverlay />
            <ModalContent className="w-full py-8 px-10 flex flex-col items-start justify-center gap-4" maxWidth={900}>
                <div className="w-full flex items-center justify-between border-b py-3">
                    <span className="font-bold text-black/50">Edit product</span>
                    <MdClose onClick={onProductEditClose} className="cursor-pointer" />
                </div>
                <div className="w-full flex items-stretch justify-center gap-8">
                    <div className="col-span-5 w-[40%] rounded-xl bg-lightPrimary dark:!bg-navy-700 2xl:col-span-6">
                        <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-navy-700 lg:pb-0">
                        <MdFileUpload className="text-[80px] text-brand-500 dark:text-white" />
                        <h4 className="text-xl font-bold text-brand-500 dark:text-white">
                            update product's images
                        </h4>
                        <p className="mt-2 text-sm font-medium text-gray-600">
                            PNG, JPG and GIF files are allowed
                        </p>
                        <p className="mt-2 text-sm font-medium text-gray-600">Note that the first image will be the cover image</p>
                        </button>
                    </div>
                    <div className="w-[60%] flex flex-col items-start justify-center gap-4">
                        <Select placeholder='Select category' name="category" className="!text-sm">
                            <option value="fire_extinguishers" selected>Fire extinguishers services</option>
                            <option value="construction_services">Construction services</option>
                            <option value="hardware">Hardware</option>
                        </Select>
                        <Input variant='outline' defaultValue="Ultimate Ears Wonderboom" name="name" className="!text-sm" />
                        <Select placeholder='Select status' name="status" className="!text-sm">
                            <option value="in_stock" selected>In stock</option>
                            <option value="out_of_stock">Out of stock</option>
                        </Select>
                        <Textarea resize={"none"} defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda autem eaque error explicabo fugiat iusto necessitatibus, temporibus. Laudantium, voluptate?" className="!text-sm" />
                        <p className="flex gap-4 text-xl">
                            <Select placeholder='Select currency' name="currency" className="!text-sm">
                                <option value="frw" selected>FRW</option>
                                <option value="usd">USD</option>
                            </Select>
                            <Input variant='outline' defaultValue="10000" name="oldPrice" className="line-through text-black/50 !text-sm" />
                            <Input variant='outline' defaultValue="5000" name="newPrice" className="!text-sm" />
                        </p>
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
                    <button className="text-brand-500 border border-brand-500 text-sm p-2 w-1/3 rounded-md self-end my-3 whitespace-nowrap">Save product</button>
                    <button className="text-white bg-brand-500 text-sm p-2 w-1/3 rounded-md self-end my-3 whitespace-nowrap">Delete product</button>
                    <button className="text-white bg-brand-500 text-sm p-2 w-1/3 rounded-md self-end my-3" onClick={onProductEditClose}>Close</button>
                </div>
            </ModalContent>
        </Modal>
    </form>
  )
}

export default EditProduct;
