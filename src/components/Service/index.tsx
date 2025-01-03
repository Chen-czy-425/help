import service from "../../assets/service.png"
import weChat from "../../assets/wechat.png"
// 联系客服
export function Service() {
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
