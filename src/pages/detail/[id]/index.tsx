import {useRouter} from "next/router";
import Header from "@/components/Header";

export default function Detail() {
  const router = useRouter()

  return (
    <>
      <Header></Header>
      <h1>当前路由是: {router.pathname}</h1>
      <h2>ID:{router.query.id}</h2>
    </>
  )
}