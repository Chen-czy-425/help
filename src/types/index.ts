export interface QuestionType {
    id: number;
    questions: Array<{ docid: string; question_title: string }>;
}

export interface ProductType {
    id: number;
    src: string;
    question_type_name: string;
}


export interface ApiResponse {
    data: {
        data: {
            type: ProductType[];
            lists: QuestionType[];
        };
        msg: string;
        errno: number;
    };
}
