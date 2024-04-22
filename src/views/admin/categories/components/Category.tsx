import { type FC } from "react";
import Card from "src/components/card";

const Category: FC<TCategory> = ({ name, description, subCategories }) => {
  return (
    <Card extra="w-full p-5 gap-4 ring-1 cursor-pointer">
      <div className="flex flex-col items-start justify-center gap-2">
        <span className="text-lg font-semibold">{name}</span>
        <span className="text-base font-semibold text-gray-700">
          {description}
        </span>
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <span className="text-sm font-semibold underline">Subcategories</span>
        <div className="flex items-center justify-start gap-4 flex-wrap">
          {subCategories.map((category) => {
            return (
              <div className="w-max flex flex-col gap-1 text-xs">
                <span className="font-semibold text-brand-500">
                  {category.name}
                </span>
                <span className="text-gray-700">{category.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Category;
