import Parabolic from './parabola.js'

const rootEl = document.getElementById('app')

function init (Curvature) {
  let box = new Parabolic().getLineBoxEl({Curvature})
  rootEl.appendChild(box)
}

document.getElementById('input').addEventListener('input', function (e) {
  let val = e.target.value
  val = Number(val)
  if (val) {
    init(val)
  }
})