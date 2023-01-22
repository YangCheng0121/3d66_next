import {useRouter} from "next/router";

export default function Detail() {
  const router = useRouter()

  return (
    <>
      <h1>当前路由是: {router.pathname}</h1>
      <h2>ID:{router.query.id}</h2>
    </>
  )
}