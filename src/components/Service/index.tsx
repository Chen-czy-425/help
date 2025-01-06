import service from "../../assets/service.png";
import weChat from "../../assets/wechat.png";
// 联系客服
export function Service() {
    return (
        <>
            <div className="fixed left-[50%] top-[650px] ml-[620px] hover:cursor-pointer">
                <img
                    src={service}
                    alt=""
                    className="mx-[auto] mb-[14px] w-[70px]"
                />
                <div className="flex items-center">
                    <img src={weChat} alt="" className="" />
                    <span className="ml-[10px] select-none text-[16px] text-[#0056FF]">
                        联系客服
                    </span>
                </div>
            </div>
        </>
    );
}
