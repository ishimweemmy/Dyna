import Category from "./components/Category"
import { constructionMaterialsCategories } from "./variables"

const Categories = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 mt-5">
      <div className="w-full flex justify-between items-center">
        <button className="linear rounded-md bg-brand-500 px-3 py-2 text-xs font-bold text-white transition duration-200 uppercase hover:bg-brand-700 active:bg-brand-600">
          View all products
        </button>
        <button className="linear rounded-md border border-brand-500 text-brand-500 px-3 py-2 text-xs font-bold transition duration-200 uppercase active:border-brand-600 0">
          create a new category
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8 flex-wrap">
        {
          constructionMaterialsCategories.map((item, idx) => {
            return <Category {...item} key={idx} />
          })
        }
      </div>
    </div>
  )
}

export default Categories
