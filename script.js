$( document ).ready(function() {
    console.log( "ready!" );


    let sqInput = $('#squareInput');
    let sqInsert
    
    let cirInsert
    let cirInputRad
    
    let rectWidth 
    let rectHeight 
    let rectInsert
    
    let triInsert
    let triHeight
$('#sqbutton').click(function() {
    var side = sqInput.val();
    new Square(side);
})

    var Shape = function (height, width){
        this.height = height;
        this.width = width;
    }

    Shape.prototype.draw = function() {
        var newShape = $('<div></div>').addClass(this.css);
        $('#myCanvas').append(newShape);
    }

    var Square = function (side) {
        console.log(side);
        Shape.call(this, side, side);
        this.css = ("height",side)
        this.css = ("width", side)
        console.log(this.css)
        this.draw();
        
    }

    Square.prototype = Object.create(Shape.prototype);
    Square.prototype.constructor = Square;





// $('.rectangle-css').click(Shape.prototype.rectangle = function(){
    
  //  $('input:rectHeight'.val());

//$('Height.css'.val() = rectHeight)

    //set values to height and width here

  //  var rect = new Rectangle(height, width);
    //console.log(rectHeight.val())
    //console.log(rectWidth.val())
    
   // shape.prototype.rectangle(function(){

     //   Shape.call(this, height, width);

    
   // })

   // var buildRectangle = $('.rectangle-css').click(Shape.prototype.rectangle = function(){
    //{

      //  ('#Height').valueOf()=height
      //  ('#Width').valueOf()=width
      //  console.log()









        
    })
   


      

 



