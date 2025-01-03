import Tips from "../../common/Tips"
import { useEffect, useState } from "react"
import { HOME_API } from "../../API/homeApi"
import { useNavigate } from 'react-router-dom';
// import productImg from "../../images/product.png"

// 常见问题
const M1 = (props: any) => {
    const navigate = useNavigate();
    // 点击时发起请求页面跳转
    const handleClick = (docid:String) => {
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
                        <div key={item.docid} className="flex items-center mb-[29px] hover:text-[#0056FF] hover:cursor-pointer" onClick={()=>{handleClick(item.docid)}}>
                            <Tips></Tips>
                            <div className="">{item.question_title}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


const M2 = (props: any) => {
    return (
        <>
            <h1 className="text-[28px] font-bold text-[#333333]">鲁大师产品服务</h1>
            <div className="mt-[34px] py-[22px] px-[44px] bg-[#FFF] grid  grid-cols-7 " >
                {
                    props.product.map((item: any) => {
                        if (item.src) {
                            return (
                                <div className="w-[122px] h-[150px] pt-[12px]  flex flex-col items-center justify-center mb-[16px] rounded-[14px] cursor-pointer transition-shadow duration-700 hover:shadow-lg"
                                 key={item.id}>
                                    <img src={item.src} alt="" className="" />
                                    <div className="text-[#333333] text-[14px] text-center px-[12px] mt-[18px] mb-[12px]">{item.question_type_name}</div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}

const Home = () => {

    // 常见问题接口数据类型
    interface QuestionType {
        id: String;
        questions: Array<{ docid: string; question_title: string }>;
    }
    const [questionData, setQuestionData] = useState<QuestionType[]>([]);

    interface ProductType {
        id: String;
        src: String;
        question_type_name: String;
    }
    const [productData, setProductData] = useState<ProductType[]>([]);

    // 页面加载时发送请求
    useEffect(() => {
        HOME_API().then(res => {
            // console.log("lists", res.data.lists);
            console.log("type", res.data.type);
            setQuestionData(res.data.lists);
            setProductData(res.data.type);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);


    return (
        <>
            <div className="w-[1200px] mx-[auto]">
                <M1 question={questionData}></M1>
                <M2 product={productData}></M2>
            </div>

        </>
    )
}

export default Home;