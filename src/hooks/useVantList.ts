import { reactive } from 'vue'
export interface PageInfo {
  pageIndex: number
  pageSize: number
}
export interface CommonPage<T> extends PageInfo {
  // T 为列表项数据类型
  list: T[]
  totalCount: number
}
export interface ListInfo<T> extends CommonPage<T> {
  loading: boolean
  ifinished: boolean
  refreshing: boolean
}
export interface FetchDataParams<K> extends PageInfo {
  // K是查询字段配置类型
  searchConfig: K
}
/**
 * @param api 异步接口
 * @param pageConfig 初始分页配置
 * @param searchConfig 查询字段配置
 * @returns listInfo action
 */
export function useVantList<T, K>(
  api: (data: FetchDataParams<K>) => Promise<CommonPage<T>>,
  pageConfig: PageInfo,
  searchConfig: K
) {
  const listInfo = reactive<ListInfo<T>>({
    pageIndex: pageConfig.pageIndex,
    pageSize: pageConfig.pageSize,
    loading: false,
    list: [],
    totalCount: 0,
    ifinished: false, // 是否到底部
    refreshing: false, // 是否正在刷新
  })

  // 拉取数据
  const fetchData = (data: FetchDataParams<K>) => {
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
      searchConfig,
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
      searchConfig,
    })
  }
  return { listInfo, action: [handleSearchOrRefresh, handleLoad] }
}
