export interface QuestionType {
    id: String;
    questions: Array<{ docid: string; question_title: string }>;
}


export interface ProductType {
    id: String;
    src: String;
    question_type_name: String;
}
export interface ApiResponse {
    data:{
        data:{
            type: ProductType[];
            lists: QuestionType[];
        }
        msg: string;
        errno: number;
    }
}