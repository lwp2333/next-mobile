const modules = import.meta.globEager('./*.vue')

interface IComponents {
  [ket: string]: any
}

const commonComponents: IComponents = {}

Object.keys(modules).forEach(file => {
  const modulesName = file.replace('./', '').replace('.vue', '')
  commonComponents[modulesName] = modules[file].default
})
export default commonComponents
