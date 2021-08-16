var canvas = new fabric.Canvas('canvas');
var x = document.getElementById("myAudio");
var birthdayimage = ['https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlydGhkYXl8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1567768823253-c4fe2bf7143e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcnRoZGF5fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1620324446278-be6c7bb3ece5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJpcnRoZGF5fGVufDB8MnwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1526653054275-5a4f37ea1c64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBiaXJ0aGRheXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'];
var no = Math.floor(Math.random() * 4);;
console.log(no);
function newimage()
{
	fabric.Image.fromURL(birthdayimage[no], function (Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(500);
    block_image_object.scaleToWidth(500);
    block_image_object.set({
    top: 0,
    left:0
    });
    canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play();
}
