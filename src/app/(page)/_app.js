import Layout from "@/app/common/Layout"

export default function app ({Component, pageProps}){
    return(<>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>)
};