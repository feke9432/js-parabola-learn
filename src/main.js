import Parabolic from './parabola'

function component() {
  var element = document.createElement('div')

  var box = new Parabolic().getLineBoxEl({ Curvature: 0.001 })
  element.appendChild(box)

  return element
}

document.body.appendChild(component())
