import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "../../components";
import { useEffect, useState } from "react";
import { useHomeStore } from "../../store";
import { ProductType } from "../../types";
const Detail = () => {
    const { id,docid } = useParams(); // 获取URL中的参数
    const [menu, setMenu] = useState<ProductType[]>([]);

    // 返回首页
    const goHome = () => {
        window.location.href = "/";
    };

    // 页面加载时获取菜单
    useEffect(() => {
        const productData = useHomeStore.getState().productData;
        const questionData = useHomeStore.getState().questionData;
        console.log("que",questionData);
        console.log("pro",productData);
        setMenu(productData);
    }, []);

    return (
        <div className="mx-[auto] w-[1200px]">
            <div className="mb-[16px] cursor-pointer select-none text-[14px] hover:text-[#0056FF]">
                <div onClick={goHome}>
                    <FontAwesomeIcon icon={faHouse} className="mr-[10px]" />
                    首页
                </div>
            </div>
            {/* 目录 */}
            <Menu menu={menu} docid={docid} id={id} />
        </div>
    );
};

export default Detail;
