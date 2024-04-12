import Footer from "src/components/footer/FooterAuthDefault";
import authImg from "src/assets/img/auth/authBg1.png";
import { Navigate, Outlet } from "react-router-dom";
import FixedPlugin from "src/components/fixedPlugin/FixedPlugin";
import { isAuthenticated } from "@/lib/utils";

export default function Auth() {
  document.documentElement.dir = "ltr";
  const isAllowed = isAuthenticated()

  if(isAllowed) return <Navigate to={"/"} />

  return (
    <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
      <FixedPlugin />
      <main className={`min-h-screen w-full flex items-stretch justify-center`}>
        <div className="w-full relative flex">
          <div className="min-h-full w-full flex flex-col justify-between gap-8 overflow-hidden lg-max:py-8 lg:h-screen lg:px-0">
            <div className="w-full flex flex-col px-5 justify-center lg:flex-row xl:max-w-full lg:gap-8 lg:h-full lg:px-0">
              <Outlet />
              <div className="h-full w-full hidden relative lg:min-h-full lg:block">
                <div
                  className="h-[120%] w-full flex items-end justify-center absolute -bottom-24 bg-cover bg-center"
                  style={{ backgroundImage: `url(${authImg})` }}
                />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
