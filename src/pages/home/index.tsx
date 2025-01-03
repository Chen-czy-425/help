import { useEffect, useState } from "react"
import { Question, Product } from "../../components"
import { getHomeData } from "../../API";
import { ProductType, QuestionType } from "../../API/home/type";

const Home = () => {
    const [questionData, setQuestionData] = useState<QuestionType[]>([]);

    const [productData, setProductData] = useState<ProductType[]>([]);

    // 页面加载时发送请求
    useEffect(() => {
        getHomeData().then(res => {
            setQuestionData(res.data.data.lists);
            setProductData(res.data.data.type);
        })

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