import { create } from "zustand";
import { ProductType, QuestionType } from "../types";

type HomeStoreState = {
    questionData: QuestionType[];
    productData: ProductType[];
    setQuestionData: (data: QuestionType[]) => void;
    setProductData: (data: ProductType[]) => void;
};

export const useHomeStore = create<HomeStoreState>((set) => ({
    questionData: [],
    productData: [],
    setQuestionData: (data) => set({ questionData: data }),

    setProductData: (data) => set({ productData: data }),
}));
