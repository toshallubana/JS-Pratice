// Object flatten
const obj = {
  name:"Toshal",
  val:{
    address:"chandimandir",
    lastName:"Lubana",
    xyz:{
      yzx: "dasdsd"
    }
  }
}

const flattenObject = (obj) => {
const flattened = {}

Object.keys(obj).forEach((key) => {
  const value = obj[key]

  if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
    Object.assign(flattened, flattenObject(value))
  } else {
    flattened[key] = value
  }
})

return flattened
}

// {
//   name: 'Toshal',
//   address: 'chandimandir',
//   lastName: 'Lubana',
//   yzx: 'dasdsd'
// }

const flatten = (obj, prefix = '', res = {}) => 
Object.entries(obj).reduce((r, [key, val]) => {
  const k = `${prefix}${key}`
  console.log(r)
  if(typeof val === 'object'){ 
    flatten(val, `${k}.`, r)
  } else {
    res[k] = val
  }
  return r
}, res)

flatten(obj)