import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

// Prisma 클라이언트 선언
declare global {
  var prisma: PrismaClient | undefined;
}

// Prisma 클라이언트 인스턴스 생성
// const client =
//   global.prisma ||
//   new PrismaClient({
//     log: ["query"],
//   });

if (process.env.NODE_ENV === "development") global.prisma = client;


export default client;