import { Outlet } from "react-router-dom";
import logo from "./images/logo.png"
import search from "./images/search.png"
import service from "./images/service.png"
import weChat from "./images/wechat.png"

// 头部
const Header = () => {
    return (
        <>
            <div className="w-[1100px] flex items-center">
                <a href="https://www.ludashi.com/" className="block">
                    <img src={logo} alt="logo" />
                </a>
                <p className="text-[#FFFFFF] block h-[80px] leading-[77px] ml-[23px]">帮助中心</p>
            </div>
        </>
    )
}

// 搜索
const Search = () => {
    return (
        <>
            <div className="w-[804px]  mx-[auto] flex  ">
                <input
                    className="w-[710px] h-[50px] border-[2px] border-[#0056FF] outline-none px-[24px] text-[16px] text-[#888888] "
                    placeholder="请输入您遇到的问题"
                ></input>
                <div className="w-[110px] h-[50px] bg-[#0056FF] text-center text-[#FFF] leading-[50px] flex items-center justify-center ">
                    <img src={search} alt="" className=" block w-[18.76px] h-[18.77px]" />
                    <span className="block text-[16px] ml-[10px]">搜索</span>
                </div>
            </div>
        </>
    )
}

// 联系客服
const Service = () => {
    return (
        <>
            <div className="fixed top-[650px] left-[50%] ml-[620px] hover:cursor-pointer ">
                <img src={service} alt="" className="mb-[14px] w-[70px] mx-[auto]"/>
                <div className="flex items-center">
                    <img src={weChat} alt="" className=""/>
                    <span className="text-[#0056FF] text-[16px] ml-[10px] select-none">联系客服</span>
                </div>
            </div>
        </>
    )
}

// 底部
const Bottom = () => {
    return (
        <>
            <div className="w-[1100px] text-center text-[#666666] pt-[37px]">
                <div>
                    <a href="https://www.ludashi.com/page/contact.php" className="text-[#666666] mx-[5px]">联系我们</a>|
                    <a href="https://www.sobot.com/ticketclient/index.html?sysNum=7b3d901cda854f1985677d1b773800cd&deployId=e492cf1d49d041cba51d253180a1350f&params={%22pid%22:%22home%22,%22from%22:%22officalwebsite%22}" className="text-[#666666] mx-[5px]">意见反馈</a>|
                    <a href="https://www.ludashi.com/link/" className="text-[#666666] mx-[5px]">友情链接</a>
                </div>
                <div className="select-none">
                    <span className="block">Copyright © 2008-2022 Ludashi.com All Rights Reserved 成都奇鲁科技有限公司&成都安易迅科技有限公司</span>
                    <span className="block">中国(四川)自由贸易试验区成都高新区天府大道中段1268</span>
                    <a href="https://beian.miit.gov.cn/" className="block text-[#666666]">蜀ICP备15008964号-1</a>
                    <a href="https://beian.mps.gov.cn/#/query/webSearch" className="block text-[#666666]">川公网安备&nbsp;51019002000701号</a>
                </div>
            </div>
        </>
    )
}

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
