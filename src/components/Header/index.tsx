import logo from "../../assets/logo.png";
// 头部
export function Header() {
    return (
        <>
            <div className="w-[1100px] flex items-center">
                <a href="https://www.ludashi.com/" className="block">
                    <img src={logo} alt="logo" />
                </a>
                <p className="text-[#FFFFFF] block h-[80px] leading-[77px] ml-[23px]">
                    帮助中心
                </p>
            </div>
        </>
    );
}
