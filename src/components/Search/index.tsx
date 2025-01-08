import { useRef, useState } from "react";
import search from "../../assets/search.png";
import { useHomeStore } from "../../store";
import { useNavigate } from "react-router-dom";

// 搜索
export function Search() {
    // 存放关键字
    const [keyword, setKeyword] = useState("");
    // 存放关键字与选项匹配的结果
    const [resData, setResData] = useState<string[]>([]);
    // ul中的li的索引
    const [activeIndex, setActiveIndex] = useState(-1);
    // 存储li标签容器
    const ulRef = useRef<HTMLUListElement>(null);

    const navigate = useNavigate();

    // 搜索框输入事件
    function handleChange(e: string) {
        setKeyword(e);
        const questionData = useHomeStore.getState().questionData;
        const results: string[] = [];
        // 查询与关键字匹配的词条
        questionData.map((items) =>
            items.questions.map((item) => {
                if (item.question_title.toLowerCase().includes(e) && e) {
                    results.push(item.question_title);
                }
            }),
        );
        setResData(results);
    }

    // 处理文字高亮
    function handleHighlight(text: string) {
        if (!keyword || !text.toLowerCase().includes(keyword.toLowerCase())) {
            return <span>{text}</span>;
        }
        const regex = new RegExp(`(${keyword})`, "gi");
        return text.split(regex).map((part, i) => (
            <span
                key={i}
                className={`${part.toLowerCase() === keyword.toLowerCase() && "text-[#0056FF]"}`}>
                {part}
            </span>
        ));
    }

    // 键盘事件
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (resData.length === 0) {
            return;
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (activeIndex === resData.length - 1) {
                setActiveIndex(0);
                return;
            }
            const nextIndex = activeIndex + 1;
            scrollIntoView(nextIndex);
            setActiveIndex(nextIndex);
            return;
        }
        if (e.key === "ArrowUp") {
            e.preventDefault();
            if (activeIndex === 0) {
                setActiveIndex(resData.length - 1);
                return;
            }
            const nextIndex = activeIndex - 1;
            scrollIntoView(nextIndex);
            setActiveIndex(nextIndex);
            return;
        }
        if (e.key === "Enter") {
            e.preventDefault();
            if  (activeIndex === -1 ){
                handleSearch(keyword)
                return;
            }
            setKeyword(resData[activeIndex]);

            handleSearch(keyword)
            setActiveIndex(-1);
        }

    }

    // 滚动到指定位置
    function scrollIntoView(index: number) {
        if (ulRef.current) {
            const liElements = ulRef.current.querySelectorAll("li");
            if (liElements[index]) {
                liElements[index].scrollIntoView({ block: "nearest" });
            }
        }
    }

    // 点击搜索
    function handleSearch(value: string) {
        if(keyword === "") return;
        navigate(`/detail-by-id/${value}`);
        setResData([]);
        return;
    }

    return (
        <div className="mx-[auto] flex w-[804px]">
            {/* 搜索框 */}
            <div className="relative z-[1000]">
                <input
                    className={`${resData.length && "border-b-0"} ${keyword && "text-[#000]"} h-[50px] w-[710px] border-[2px] border-[#0056FF] px-[24px] text-[16px] text-[#888888] outline-none`}
                    placeholder="请输入您遇到的问题"
                    value={keyword}
                    // 失焦
                    onBlur={() => {
                        // setResData([]);
                    }}
                    // 获得焦点
                    onFocus={() => {
                        handleChange(keyword);
                    }}
                    // 键盘事件
                    onKeyDown={handleKeyDown}
                    // 输入事件
                    onChange={(e) => {
                        handleChange(e.target.value);
                    }}></input>
                <ul
                    ref={ulRef}
                    className={`${resData.length > 0 ? "block" : "hidden"} max-h-[200px] w-[710px] overflow-auto border-[2px] border-t-0 border-[#0056FF] bg-[#FFF] before:absolute before:left-[24px] before:h-[1px] before:w-[644px] before:bg-[#e1e1e1] before:content-['']`}>
                    {resData.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                setKeyword(item);
                                handleSearch(item);
                            }}
                            className={`${index === activeIndex ? "bg-[#3B82F680]" : ""} mt-[2px] h-[45px] w-[685px] cursor-pointer select-none px-[24px] pt-[12px] text-[16px] text-[#000] outline-none duration-500 ease-in-out hover:bg-[#3B82F680]`}>
                            {handleHighlight(item)}
                        </li>
                    ))}
                </ul>
            </div>
            {/* 搜索按钮 */}
            <div
                className="flex h-[50px] w-[110px] items-center justify-center bg-[#0056FF] text-center leading-[50px] text-[#FFF]"
                onClick={() => {
                    handleSearch(keyword);
                }}>
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
