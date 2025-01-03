import { useNavigate } from 'react-router-dom';

// 常见问题
export function Question(props: any) {

    const navigate = useNavigate();
    // 点击时发起请求页面跳转
    const handleClick = (docid: String) => {
        console.log('docid:', docid);
        // 页面跳转
        navigate(`/detail/${docid}`)
    }

    // 存储常见问题数据
    const M1_data = props.question.length > 9 ? props.question[9] : null;

    return (
        <>
            <h1 className="text-[28px] font-bold text-[#333333]">常见问题</h1>
            <div className="mt-[24px] px-[42px] pt-[42px] pb-[40px] bg-[#FFF] grid  grid-cols-3 ">
                {
                    M1_data?.questions.map((item: any) => (
                        <div className='relative' key={item.docid}>
                            <div className="mb-[29px] 
                                          hover:text-[#0056FF] 
                                            hover:cursor-pointer
                                            before:absolute 
                                            before:top-[4px]
                                            before:inline-block 
                                            before:h-[14px]
                                            before:w-[4px]  
                                            before:rounded-[5px] 
                                          before:bg-[#9FC7FF]  
                                            before:content-[''] "
                                    onClick={() => { handleClick(item.docid) }}>
                                <span className='ml-[13px]'>
                                    {item.question_title}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}