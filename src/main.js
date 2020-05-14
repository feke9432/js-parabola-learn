// import Parabolic from './parabola.js'
import printMe from './print'

const rootEl = createRoot()
init()
function init(Curvature) {
  // let box = new Parabolic().getLineBoxEl({ Curvature })
  // rootEl.appendChild(box)
  components () 
}

function components () {
  var btn = document.createElement('button')
  btn.innerHTML = 'click me will console'
  btn.onclick = printMe
  rootEl.appendChild(btn)
}
// document.getElementById('input').addEventListener('input', function (e) {
//   let val = e.target.value
//   val = Number(val)
//   if (val) {
//     init(val)
//   }

//   var btn = document.createElement('button')
//   btn.innerHTML = 'click me will console'
//   btn.onclick = printMe

//   rootEl.appendChild(btn)
// })

function createRoot() {
  let root = document.createElement('div')
  root.id = 'app'
  document.body.appendChild(root)
  return root
}