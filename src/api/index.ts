import axios from '@/http/axios'

export function getList(params: any) {
  return axios({
    url: '/api/v1/reslist',
    method: 'POST',
    data: {
      now: 'https://su.3d66.com/sketchup/_1_2124-3039-3040.html',
      layout_type: 1,
      limit: 180,
      page: 1,
      is_all_search: 2,
      refer_url: 'https://www.3d66.com/',
      actionId: null,
      ...params
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(res => {
    console.log(res)
    return Promise.resolve(res.data)
  })
}