import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import articleReducer from "./silce/article.slice";
import adminReducer from "./silce/admin.slice";
import boardReducer from "./silce/board.slice";
import chatReducer from "./silce/chat.slice";


const createNoopStorage:any = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();


const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};
const adminPersistConfig = {
  key: "admin",
  storage,
  whitelist: ["adminState"],
};
const boardPersistConfig = {
  key: "board",
  storage,
  whitelist: ["boardState"],
};
const chatPersistConfig = {
  key: "chat",
  storage,
  whitelist: ["chatState"],
};


const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer);
const persistedBoardReducer = persistReducer(boardPersistConfig, boardReducer);
const persistedChatReducer = persistReducer(chatPersistConfig, chatReducer);

export const rootReducer = combineReducers({
  article: persistedArticleReducer,
  admin: persistedAdminReducer,
  board: persistedBoardReducer,
  chat: persistedChatReducer,
});