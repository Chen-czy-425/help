
export function Product(props: any) {
    return (
        <>
            <h1 className="text-[28px] font-bold text-[#333333] mt-[40px]">鲁大师产品服务</h1>
            <div className="mt-[34px] py-[22px] px-[44px] bg-[#FFF] grid  grid-cols-7 " >
                {
                    props.product.map((item: any) => {
                        if (item.src) {
                            return (
                                <div className="w-[122px] 
                                                h-[150px] 
                                                pt-[12px]  
                                                flex 
                                                flex-col 
                                                items-center 
                                                justify-center 
                                                mb-[16px] 
                                                rounded-[14px] 
                                                cursor-pointer 
                                                transition-shadow 
                                                duration-700 
                                                hover:shadow-lg"
                                    key={item.id}>
                                    <img src={item.src} alt="" className="" />
                                    <div className="text-[#333333] text-[14px] text-center px-[12px] mt-[18px] mb-[12px]">
                                        {item.question_type_name}
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}
