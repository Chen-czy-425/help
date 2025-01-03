import { Outlet } from "react-router-dom";
import {Header,Bottom,Search,Service} from "./components";

function App() {

    return (
        <>
            <div className="w-[100%] flex justify-center header h-[80px] ">
                {/* 头部 */}
                <Header />
            </div>
            <div className="w-[100%] h-[90px] bg-[#EBF2F9] pt-[20px] ">
                {/* 搜索 */}
                <Search />
            </div>
            <Service/>
            <div className="w-auto bg-[#F6F9FB] py-[36px]">
                {/* 页面跳转 */}
                <Outlet />
            </div>
            <div className="w-auto flex justify-center">
                {/* 底部 */}
                <Bottom />
            </div>
        </>
    )
}

export default App
