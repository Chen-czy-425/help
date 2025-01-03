import { useEffect, useState } from "react"
import { HOME_API } from "../../API/homeApi"
import { Question,Product } from "../../components"

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
                <Question question={questionData}></Question>
                <Product product={productData}></Product>
            </div>

        </>
    )
}

export default Home;