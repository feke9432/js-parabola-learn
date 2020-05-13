// import Parabolic from './parabola.js'
import './style/common.css'
import Icon from './image/anbei.jpg'

const rootEl = document.getElementById('app')

function init(Curvature) {
  // let box = new Parabolic().getLineBoxEl({ Curvature })
  // rootEl.appendChild(box)
}

document.getElementById('input').addEventListener('input', function (e) {
  let val = e.target.value
  val = Number(val)
  if (val) {
    init(val)
  }
  var icon = new Image()
  icon.src = Icon

  document.body.appendChild(icon)
})
