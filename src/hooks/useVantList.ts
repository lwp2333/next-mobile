import { reactive } from 'vue'

interface IPageInfo {
  pageIndex: number
  pageSize: number
}

interface ICommonPage<T> extends IPageInfo {
  list: T[]
  totalCount: number
}

interface IListInfo<T> extends ICommonPage<T> {
  loading: boolean
  ifinished: boolean
  refreshing: boolean
}

interface IFetchDataParams extends IPageInfo {
  [key: string]: unknown
}

/**
 *
 * @param config 分页配置
 * @param api 异步接口
 * @param params 查询字段
 * @returns
 */
export function useVantList<T>(
  config: IPageInfo,
  api: (data?: any) => Promise<ICommonPage<T>>,
  params?: { [key: string]: unknown }
) {
  const listInfo = reactive<IListInfo<T>>({
    pageIndex: config.pageIndex,
    pageSize: config.pageSize,
    loading: false,
    list: [],
    totalCount: 0,
    ifinished: false, // 是否到底部
    refreshing: false, // 是否正在刷新
  })

  // 拉取数据
  const fetchData = (data: IFetchDataParams) => {
    listInfo.loading = true
    api(data)
      .then(res => {
        if (Array.isArray(res.list) && res.list.length) {
          listInfo.list.push(...(res.list as any))
        }
        listInfo.totalCount = res.totalCount
        if (listInfo.pageIndex * listInfo.pageSize >= res.totalCount) {
          listInfo.ifinished = true
        } else {
          listInfo.pageIndex++
        }
      })
      .finally(() => {
        listInfo.loading = false
        listInfo.refreshing = false
      })
  }

  // 初始化数据/加载更多
  const handleLoad = () => {
    const { pageIndex, pageSize } = listInfo
    fetchData({
      pageIndex,
      pageSize,
      ...params,
    })
  }

  // 查询数据/下拉更新
  const handleSearchOrRefresh = () => {
    // 先清空原有数据
    listInfo.list = []
    listInfo.ifinished = false
    listInfo.pageIndex = 1
    const { pageIndex, pageSize } = listInfo
    fetchData({
      pageIndex,
      pageSize,
      ...params,
    })
  }

  const action = [handleSearchOrRefresh, handleLoad]
  return { listInfo, action }
}
