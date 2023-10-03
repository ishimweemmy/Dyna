import { useState } from "react";
import Card from "src/components/card";
const General = () => {
  const [userInfo] = useState([
    {
      name: "First Name",
      value: "Umugwaneza"
    },
    {
      name: "Last Name",
      value: "Alice"
    },
    {
      name: "E-mail",
      value: "aliceumugwaneza@gmail.com"
    },
    {
      name: "Organization",
      value: "Dyna"
    },
    {
      name: "Phone Number",
      value: "+07897090113"
    },
    {
      name: "Address",
      value: "kigali__and__other__stuffs"
    }
  ])

  return (
    <Card extra={"w-full h-fit p-3 mb-3"}>
      {/* Header */}
      <h4 className="px-2 text-lg font-medium text-gray-700 dark:text-white self-center font-logo">
        Other Information
      </h4>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        {userInfo.map(userInfo => {
          const {name, value} = userInfo

          return (
            <div className="flex flex-col items-start justify-center rounded-md bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">{ name }</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {value}
              </p>
            </div>
          )
        })}
      </div>
    </Card>
  );
};

export default General;
