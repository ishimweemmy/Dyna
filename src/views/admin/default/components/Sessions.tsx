import { MdArrowDropUp } from "react-icons/md";
import Card from "src/components/card";
import ratingsImg from "src/assets/img/dashboards/card-session-illustration.png";

const Sessions = () => {
  return (
    <Card extra="!flex-row items-center">
      <div className="w-full flex flex-col items-start justify-center gap-3 p-8 pl-4">
        <h1 className="text-xl font-bold text-navy-700 dark:text-white">
          Sessions
        </h1>
        <span className="text-sm text-green-500 bg-green-100 rounded-full px-2">
          last Month
        </span>
        <div className="w-full flex items-center justify-start gap-3">
          <p className="text-xl text-gray-700">12.2kk </p>
          <div className="flex items-center justify-center">
            <p className="text-sm font-medium text-brand-500"> -2.45% </p>
            <MdArrowDropUp className="font-medium text-brand-500" />
          </div>
        </div>
      </div>
      <div className="w-full h-full grid justify-items-center ">
        <img
          src={ratingsImg}
          alt="ratings_image"
          width={80}
          className="self-end"
        />
      </div>
    </Card>
  );
};

export default Sessions;
