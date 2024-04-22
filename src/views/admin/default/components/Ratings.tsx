import { MdArrowDropDown } from "react-icons/md";
import Card from "src/components/card";
import ratingsImg from "src/assets/img/dashboards/card-ratings-illustration.png";

const Ratings = () => {
  return (
    <Card extra="!flex-row items-center">
      <div className="w-full flex flex-col items-start justify-center gap-3 p-8 pl-4">
        <h1 className="text-xl font-bold text-navy-700 dark:text-white">
          Ratings
        </h1>
        <span className="text-sm text-brand-500 bg-brand-100 rounded-full px-2">
          Year of 2023
        </span>
        <div className="w-full flex items-center justify-start gap-3">
          <p className="text-xl text-gray-700">8.14k </p>
          <div className="flex items-center justify-center">
            <p className="text-sm font-medium text-green-500"> -25.5%</p>
            <MdArrowDropDown className="font-medium text-green-500" />
          </div>
        </div>
      </div>
      <div className="w-full h-full grid justify-items-center ">
        <img
          src={ratingsImg}
          alt="ratings_image"
          width={90}
          className="self-end"
        />
      </div>
    </Card>
  );
};

export default Ratings;
