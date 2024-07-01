
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Layout from "./common/layout/layout";

// const ReduxProvider = dynamic(() => import("./redux/redux-provider"), {
//   ssr: false
// });

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/imgs/chart.png" type="image/<generated>" sizes="<generated" border-radius="50%"  />
        <title>최고의 주식거래소:: GGUN</title>
      </head>
      <body className={inter.className}>
        <div className="">
            <div>
              <Layout>{children}</Layout>
            </div>
        </div>
      </body>
    </html>
  );
}