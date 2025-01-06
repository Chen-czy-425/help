import { useEffect, useState } from "react";
import { Question, Product } from "../../components";
import { getHomeData } from "../../API";
import { ProductType, QuestionType } from "../../types";
import { useBearStore } from "../../store";
const Home = () => {
    const [questionData, setQuestionData] = useState<QuestionType[]>([]);

    const [productData, setProductData] = useState<ProductType[]>([]);

    // 页面加载时发送请求
    useEffect(() => {
        getHomeData().then((res) => {
            // 将数据存储在store
            useBearStore.getState().setQuestionData(res.data.data.lists);
            useBearStore.getState().setProductData(res.data.data.type);

            setQuestionData(res.data.data.lists);
            setProductData(res.data.data.type);
        });
    }, []);

    return (
        <>
            <div className="mx-[auto] w-[1200px]">
                <Question question={questionData}></Question>
                <Product product={productData}></Product>
            </div>
        </>
    );
};

export default Home;
