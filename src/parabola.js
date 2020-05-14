export default class Parabolic {
  constructor() {
    this.Curvature = 0.001
    this.defaultWidth = '100px'
    this.defaultHeight = 'auto'
  }
  
  itemFly (startel, endElClass) {
    if (!startel || !endElClass) return 
    
    let startEl = el.target? el.target : startel ;
    let endEl = document.querySelector(endElClass) ;
    
    let startPosition = this.getScrollPosition(startEl)
    let endPosition = this.getScrollPosition(endEl)
    let moveEl = this.getMoveEl(startPosition)
    let startX = startPosition.x
    let startY = startPosition.y
    let endX = endPosition.x
    let {a, b, c} = this.getABC(this.Curvature, endPosition, startPosition)
    
    // 单位时间走的距离
    let ml = 20, y = 0, x = 0
    
    const step = () => {
      if (endX - startX - x > 0) {
        x += ml
        y = a * x * x + b* x + c
        moveEl.style.transform = `scale(${(endX - startX - x)/(endX - startX)})`
        this.move(moveEl, startX + x, startY + y)
        this.animate(step)
      } else {
        document.body.removeChild(moveEl)
      }
    }
    
    step()
  }

  getLineBoxEl(opts) {
    let defaultOpts = {
      Curvature : this.Curvature,
      width : 500,
      jingdu : 100
    }

    opts = Object.assign({}, defaultOpts, opts)

    let {Curvature, width, jingdu} = opts

    let startPoint = {x: 0, y: width}
    let endPoint = {x: width, y: width}

    let {a, b, c} = this.getABC(Curvature, startPoint, endPoint)
    
    let pointArr = new Array(jingdu)

    let ml = width / jingdu
    let box = this.getBox(width)

    for(let i = 0; i < jingdu; i++) {
      let x = i * ml
      let y = this.getY_By_x(x, a, b, c)

      let point = this.getPoint({x, y})
      pointArr.push(point)
      box.appendChild(point)
    }

    return box
  }

  getY_By_x(x, a, b, c) {
    return a * x * x + b* x + c
  }

  getBox(width) {
    let box = document.createElement('div')
    box.style = `position: relative; width: ${width}px; height: ${width}px; padding: 10px;`
    return box
  }

  getPoint(position) {
    let {x, y} = position
    let _point = document.createElement('div')
    _point.style = `position: absolute; top: ${x}px; left: ${y}px;width: 10px; height: 10px; background: red; border-radius: 50%;`
    return _point
  }
  
  getScrollPosition (el) {
    let p = el.getBoundingClientRect()
    
    return {
      x: p.x || p.left,
      y: p.y || p.top
    }
  }
  
  toInteger(text) {
    text = parseInt(text + '');
    return isFinite(text) ? text : 0;
  }
  
  getABC(Curvature, endPosition, startPosition) {
    // a 给一个默认精度
    let a = Curvature , b, c
    let sx = this.toInteger(startPosition.x)
    let sy = this.toInteger(startPosition.y)
    let ex = this.toInteger(endPosition.x)
    let ey = this.toInteger(endPosition.y)
    let py = ey - sy
    let px = ex - sx
    b = (py - a * px * px) / (px)
    c = 0
    return {a, b, c}
  }
  
  getMoveEl(startPosition) {
    let imgEl = document.createElement('img')
    imgEl.src = "https://img.51mydao.com/image/icon-fly20170104.png"
    // @ts-ignore
    imgEl.style = `display: block; position: fixed; top: ${startPosition.y}px; left: ${startPosition.x}px; width: ${this.defaultWidth}; height: ${this.defaultHeight};z-index: 100000;`

    document.body.appendChild(imgEl)
    return imgEl
  }
  
  animate(step) {
    // 平滑关键帧
    if (!window.requestAnimationFrame) {
      // @ts-ignore
      window.requestAnimationFrame = function (cb) {
        return setTimeout(cb, 17)
      }
    }
    
    requestAnimationFrame(() => {
      step && step()
    })
  }
  
  move(moveEl, x, y) {
    moveEl.style.top = y + 'px'
    moveEl.style.left = x + 'px'
  }
}
