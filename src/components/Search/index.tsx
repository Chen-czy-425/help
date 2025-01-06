import { useState } from "react";
import search from "../../assets/search.png";
import { useBearStore } from "../../store";

// 搜索
export function Search() {
    const [keyword, setKeyword] = useState("");
    function handleChange(e: string) {
        setKeyword(e);
    }

    function handleSearch(value: string) {
        console.log(useBearStore.getState().productData);
        console.log(useBearStore.getState().questionData);
        console.log(value);
    }

    return (
        <div className="mx-[auto] flex w-[804px]">
            <input
                className="h-[50px] w-[710px] border-[2px] border-[#0056FF] px-[24px] text-[16px] text-[#888888] outline-none"
                placeholder="请输入您遇到的问题"
                value={keyword}
                onChange={(e) => {
                    handleChange(e.target.value);
                }}
            ></input>
            <div
                className="flex h-[50px] w-[110px] items-center justify-center bg-[#0056FF] text-center leading-[50px] text-[#FFF]"
                onClick={() => {
                    handleSearch(keyword);
                }}
            >
                <img
                    src={search}
                    alt=""
                    className="block h-[18.77px] w-[18.76px]"
                />
                <span className="ml-[10px] block text-[16px]">搜索</span>
            </div>
        </div>
    );
}
