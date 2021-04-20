const CRYSTAL_SIZE = 500
const SIDES = 6
let PALETTE = []

function setup() {
  createCanvas(530, 530, SVG)

  PALETTE = [
    color(255, 52, 154), //pink
    color(4, 0, 152),  //blue
    'limegreen',
    'teal'
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  // background('teal')
  testLines()
}

function testLines() {
  let numShapes = getRandomTwo() ? SIDES : SIDES * 2
  let strokeColor = getRandomFromPalette()

  noFill()
  stroke(PALETTE[0])

  push()
		translate(width/2, height/2)

    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE)
    
    stroke(strokeColor)

    const angle = 360/numShapes

    for(let i = 0; i < numShapes; i++) {
      line(0, 0, CRYSTAL_SIZE/2, 0)
      rotate(angle)
    }
  pop()
}

function getRandomTwo() {
  const randomSides = random(1)
  return (randomSides > 0.5)  
}

function getRandomFromPalette() {
  const randomColor = floor(random(0, PALETTE.length))
  return PALETTE[randomColor]
}