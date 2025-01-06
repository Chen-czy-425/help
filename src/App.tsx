import { Outlet } from "react-router-dom";
import { Header, Bottom, Search, Service } from "./components";

function App() {
    return (
        <>
            <div className="header flex h-[80px] w-[100%] justify-center">
                {/* 头部 */}
                <Header />
            </div>
            <div className="h-[90px] w-[100%] bg-[#EBF2F9] pt-[20px]">
                {/* 搜索 */}
                <Search />
            </div>
            <Service />
            <div className="w-auto bg-[#F6F9FB] py-[36px]">
                {/* 页面跳转 */}
                <Outlet />
            </div>
            <div className="flex w-auto justify-center">
                {/* 底部 */}
                <Bottom />
            </div>
        </>
    );
}

export default App;
