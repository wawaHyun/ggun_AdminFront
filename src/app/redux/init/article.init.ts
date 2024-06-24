import { IArticle } from "../model/article.model";

export const initialState: IArticle = {
    id: 0,
    title: '',
    content: '',
    writer_id : 0,
    board_id : 0,
    mod_date: '',
    reg_date: ''
}