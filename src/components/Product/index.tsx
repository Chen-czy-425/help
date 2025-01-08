import { useNavigate } from "react-router-dom";
import { ProductType } from "../../types";

interface Props {
    product: ProductType[];
}


export function Product(props: Props) {
    const navigate = useNavigate();

    // 处理菜单点击事件
    function handleClick(id: number) {
        // 页面跳转
        navigate(`/detail-by-id/${id}`);
    }
    return (
        <>
            <h1 className="mt-[40px] text-[28px] font-bold text-[#333333]">
                鲁大师产品服务
            </h1>
            <div className="mt-[34px] grid grid-cols-7 bg-[#FFF] px-[44px] py-[22px]">
                {props.product.map((item: ProductType) => {
                    if (item.src) {
                        return (
                            <div
                                onClick={() => {
                                    handleClick(item.id);
                                }}
                                className="mb-[16px] flex h-[150px] w-[122px] cursor-pointer flex-col items-center justify-center rounded-[14px] pt-[12px] transition-shadow duration-700 hover:shadow-lg"
                                key={item.id}>
                                <img src={item.src} alt="" className="" />
                                <div className="mb-[12px] mt-[18px] px-[12px] text-center text-[14px] text-[#333333]">
                                    {item.question_type_name}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </>
    );
}
