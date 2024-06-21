import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import articleReducer from "@/app/component/articles/service/article.slice";
import adminReducer from "@/app/component/admins/service/admin.slice";
import boardReducer from "@/app/component/boards/service/board.slice";
import npsReducer from "@/app/component/jusik/service/transaction.slice";


const createNoopStorage = () => {
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
const npsPersistConfig = {
  key: "nps",
  storage,
  whitelist: ["npsState"],
};




const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedAdminReducer = persistReducer(adminPersistConfig, adminReducer);
const persistedBoardReducer = persistReducer(boardPersistConfig, boardReducer);
const persistedNpsReducer = persistReducer(npsPersistConfig, npsReducer);

export const rootReducer = combineReducers({
  article: persistedArticleReducer,
  admin: persistedAdminReducer,
  board: persistedBoardReducer,
  nps: persistedNpsReducer
});