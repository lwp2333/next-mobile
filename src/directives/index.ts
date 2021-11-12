import { Notify } from 'vant'

// 注册一个全局自定义指令 `v-focus`
const focus = {
  // 当被绑定的元素插入到 DOM 中时……
  mounted(el: HTMLElement) {
    // Focus the element
    el.focus()
  },
}
// 注册一个全局自定义指令 `v-copy`
const copy = {
  mounted(el: HTMLElement, binding: any) {
    el.style.cursor = 'pointer'
    const handler = () => {
      const textarea = document.createElement('textarea')
      textarea.readOnly = true
      textarea.value = binding.value || el.innerText
      document.body.appendChild(textarea)
      textarea.select()
      textarea.setSelectionRange(0, textarea.value.length)
      const result = document.execCommand('Copy')
      if (result) {
        Notify({
          type: 'success',
          message: `已复制：${textarea.value}`,
        })
      }
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', handler)
  },
}

interface IDirectives {
  [key: string]: any
}

const directives: IDirectives = {
  focus,
  copy,
}
export default directives
