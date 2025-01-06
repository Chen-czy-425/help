import logo from "../../assets/logo.png";
// 头部
export function Header() {
    return (
        <>
            <div className="flex w-[1100px] items-center">
                <a href="https://www.ludashi.com/" className="block">
                    <img src={logo} alt="logo" />
                </a>
                <p className="ml-[23px] block h-[80px] leading-[77px] text-[#FFFFFF]">
                    帮助中心
                </p>
            </div>
        </>
    );
}
