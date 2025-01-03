import search from "../../assets/search.png"

// 搜索
export function Search() {
    return (

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


    )
}

