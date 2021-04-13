function preload() {}

function setup() {
    canvas=createCanvas(500,500)
    canvas.position(100,250)
    video=createCapture(VIDEO)
    video.size(500,500)
    video.hide()
    tintcolor=""
}
function draw() {
    image(video,0,0,500,500)
    tint(tintcolor)
}
function take_snapshot() {
    save("image.png")
}
function apply() {
    tintcolor=document.getElementById("colori").value
}