import { useEffect, useState } from "react";
import { ProductType } from "../../types";

interface Props {
    menu: ProductType[];
    docid?: string;
    id?: string;
}

export function Menu(props: Props) {
    const [active, setActive] = useState<number>();
    const { id, menu, docid } = props;

    // 处理菜单初始值
    useEffect(() => {
        if (id) {
            setActive(Number(id));
            console.log("常见问题：",id);
            console.log("常见问题项：",docid);
        }
    }, []);

    // 处理菜单点击事件
    function handleClick(id: number) {
        setActive(id);
    }

    return (
        <div className="mr-[20px] w-[230px] bg-[#FFF]">
            <ul>
                {menu.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => handleClick(Number(item.id))}
                        className={`${active === Number(item.id) ? "bg-[#0056FF] text-[#fff]" : "hover:bg-[#DAE7FF]"} h-[49px] cursor-pointer text-center text-[16px] leading-[49px]`}>
                        {item.question_type_name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
