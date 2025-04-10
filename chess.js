const WHITE_PAWN =  "https://codehs.com/uploads/ade5df8ce83d959e974fc81b04efa33d "; // inports image of all the white pawns and is a global varuble
const WHITE_ROOK = "https://codehs.com/uploads/3c70820ddf476f93d83b48bb6e75c98d";// inports image of all the white rooks and is a global varuble
const WHITE_KNIGHT = "https://codehs.com/uploads/af1ce34e8abe15da4d15ec2760819590";// inports image of all white knights and is a global varuble
const WHITE_BISHOP = "https://codehs.com/uploads/deb87681b9197dbebdc43c322e407938";// inports image of all white bishops and is a global varuble
const WHITE_QUEEN = "https://codehs.com/uploads/fee1ac1eddcfef06b0858ae4d75d2d98";// inports image of the white queen and is a global varuble
const WHITE_KING = "https://codehs.com/uploads/9a93e570f8db45c1db75e1896472c0bf";// inports image of the white king and is a global varuble


const BLACK_PAWN = "https://codehs.com/uploads/f2eb6508892ce6d92c7af2aefda98cd9";// inports image of all the black pawns and is a global varuble
const BLACK_ROOK = "https://codehs.com/uploads/093c4e3f03d003374766b3b057ffb535";//inports image of all the black rooks and is a global varuble
const BLACK_KNIGHT = "https://codehs.com/uploads/397a015f718835f03e18df9552abf743";// inports image of all the black knights and is a global varuble
const BLACK_BISHOP = "https://codehs.com/uploads/de0c99ab09b323e9bfc783ce49dda7a5";// inports image of all the  black bishops and is a global varuble
const BLACK_QUEEN = "https://codehs.com/uploads/14b1baf5e93f53bf22fdf51c9d7cff7d";//inports image of black queen and is a global varuble
const BLACK_KING = "https://codehs.com/uploads/e855be6b9978df4af2e9a6056a5143e9";//inports image of black king and is a global varuble

let curElem = null; // varuble current element wich is any object on the board is equal to null and is a global varuble 
let image; //image is global varuble so now we dont declare image as a local varuble all the time
let isMovable = true;


function main(){// this function usses all the other functions that is used to make the boared and you to play chess
    board();// calls the board function 
    line(  500 , 500 , 100 , 402 , 100 , 0);
    line(500 , 500 , 50 , 402 , 50 , 0);
    line(500 , 500 , 0 , 402 , 0 , 0);
    line(500 , 500 , 150 , 402 , 150 , 0);
    line(500 , 500 , 200 , 402 , 200 , 0);
    line(500 , 500 , 250 , 402 , 250 , 0);
    line(500 , 500 , 300 , 402 , 300 , 0);
    line(500 , 500 , 350 , 402 , 350 , 0);
    line(500 , 500 , 402 , 402 , 402 , 0);
    line(500 , 0 , 500 , 50 , 0 , 50);
    line(0 , 0 , 500 , 100 ,0 , 100);
    line(0 , 0 , 500 , 150 , 0 , 150);
    line(0 , 0 , 500 , 200 , 0 , 200);
    line(0 , 0 , 500 , 250 , 0 , 250);
    line(0 , 0 , 500 , 300 , 0 , 300);
    line(0 , 0 , 500 , 350 , 0 , 350);
    line(0 , 0 , 500 , 402 , 0 , 402);
    line(0 , 0 , 500 , 0 , 0  , 0);
    mouseDownMethod(select);
    mouseDragMethod(drag);
    mouseUpMethod(release);
    console.log("Welcome to the game of chess! here are the rules of the game. pawns can only move one or two times. knights move in L's. bishops move in diagnals, the queen can move evreywhere. The king moves one square at a time. White plays first. To remove the pecies from the board you have to drag the peice out of the board at the bottom. good luck!");// tells the user the game rules
    letter();
    let q = readLine("would you like to play as white or black? ");// asks user if they want to play as white or black
    if (q == "white"){// if user said white
        white();//they will play as white
        black();//thier friend will be playing the black pieces
    }else if (q == "black" ){// if user said black
        black2();//they will play black
        white2();//their friend will play white
        
    }else{//if not put anything at all
        white();//user will play white
        black();// friend will play black 
    }
    
    
  

    
       
}




function white(){
    initPawn(0 , 300);// calls the initPawn function with the position of 0 , 300 and is the white pawn
    initPawn(50 , 300);// calls the initPawn function with the position of 50 , 300 and is the white pawn
    initPawn(100 , 300);// calls the initPawn function with the position of 100 , 300 and is the white pawn
    initPawn(150 , 300);// calls the initPawn function with the position of 150 , 300 and is the white pawn
    initPawn(200 , 300);// calls the initPawn function with the position of 200 , 300 and is the white pawn
    initPawn(250 , 300);// calls the initPawn function with the position of 250 , 300 and is the white pawn
    initPawn(300 , 300);//calls the initPawn function with the position of 300 , 300 and is the white pawn
    initPawn(350 , 300);// calls the initPawn function with the position of 350 , 300 and is the white pawn
    initWhiteRook(0 , 350);// calls the initWhiteRook function with the position of 0 , 350 and is the white rook
    initWhiteRook(350 , 350);// calls the initWhiteRook function with the position of 350 , 350 and is the white rook
    initwhiteKnight(50 , 350);//calls the initWhiteKnight function with the position of 50 , 350 and is the white knight
    initwhiteKnight(300 , 350);// calls the initWhiteKnight function with the position of 300 , 350 and is the white knight
    initWhiteBishop(100 , 350);// calls the initWhiteBishop function with the position of 300 , 350 and is the white bishop
    initWhiteBishop(250 , 350);//calls the initWhiteBishop function with the position of 250 , 250 and is the white bishop
    initWQueen(150 , 350);// calls the initWhiteQueen function with the position of 150 , 350 and is the white queen
    initKing(200 , 350);// calls the initWhiteKing function with the position of 200 , 350 and is the white king 
}

function black(){
    initBlackPawn(0 , 50);// calls the initBlackPawn function with the position of 0 , 50 and is the black pawn
    initBlackPawn(50 , 50);//calls the initBlackPawn function with the position of 50 , 50 and is the black pawn
    initBlackPawn(100 , 50);// calls the initBlackPawn function with the position of 100 , 50 and is the black pawn
    initBlackPawn(150 , 50);// calls the initBlackPawn function with the position of 150 , 50 and is the black pawn
    initBlackPawn(200 , 50);// calls the initBlackPawn function with the position of 200 , 50 and is the black pawn
    initBlackPawn(250 , 50);// calls the initBlackPawn function with the position of 250 , 50 and is black pawn
    initBlackPawn(300 , 50);// calls the initBlackPawn function with the position of 300 , 50 and is black pawn
    initBlackPawn(350 , 50);// calls the initBlackPawn function with the position of 350 , 50 and is black pawn
    initBlackRook(0 , 0);// calls the initBlackRook function with the position of 0 . 0 and is the black rook
    initBlackRook(350 , 0);// calls the initBlackRook function with the position of 350 , 0 and is the black rook
    initBlackKnight(50 , 0);// calls the initBlackKnight function with the position of 50 , 0 and is the black knight
    initBlackKnight(300 , 0);// calls the initBlackKnight function with the position of 300 , 0 and is the black knight
    initBlackBishop(100 , 0);// calls the initBlackBishop function with the position of 100 , 0 and is the black bishop
    initBlackBishop(250 , 0);// calls the initBlackBishop function with the position of 250 , 0 and is the black bishop
    initblackQueen(150 , 0);//calls the initBlackQueen function with the position of 150 , 0 and is the black queen
    initBlackKing(200 , 0);// calls the initBlackKing function with the position of 200 , 0 and is the black king
    
}

function black2(){
     initBlackPawn(0 , 300);// calls the initBlackPawn function with the position of 0 , 50 and is the black pawn
    initBlackPawn(50 , 300);//calls the initBlackPawn function with the position of 50 , 50 and is the black pawn
    initBlackPawn(100 , 300);// calls the initBlackPawn function with the position of 100 , 50 and is the black pawn
    initBlackPawn(150 , 300);// calls the initBlackPawn function with the position of 150 , 50 and is the black pawn
    initBlackPawn(200 , 300);// calls the initBlackPawn function with the position of 200 , 50 and is the black pawn
    initBlackPawn(250 , 300);// calls the initBlackPawn function with the position of 250 , 50 and is black pawn
    initBlackPawn(300 , 300);// calls the initBlackPawn function with the position of 300 , 50 and is black pawn
    initBlackPawn(350 , 300);// calls the initBlackPawn function with the position of 350 , 50 and is black pawn
    initBlackRook(0 , 350);// calls the initBlackRook function with the position of 0 . 0 and is the black rook
    initBlackRook(350 , 350);// calls the initBlackRook function with the position of 350 , 0 and is the black rook
    initBlackKnight(50 , 350);// calls the initBlackKnight function with the position of 50 , 0 and is the black knight
    initBlackKnight(300 , 350);// calls the initBlackKnight function with the position of 300 , 0 and is the black knight
    initBlackBishop(100 , 350);// calls the initBlackBishop function with the position of 100 , 0 and is the black bishop
    initBlackBishop(250 , 350);// calls the initBlackBishop function with the position of 250 , 0 and is the black bishop
    initblackQueen(150 , 350);//calls the initBlackQueen function with the position of 150 , 0 and is the black queen
    initBlackKing(200 , 350);
    
}

function white2(){
    initPawn(0 , 50);// calls the initPawn function with the position of 0 , 300 and is the white pawn
    initPawn(50 , 50);// calls the initPawn function with the position of 50 , 300 and is the white pawn
    initPawn(100 , 50);// calls the initPawn function with the position of 100 , 300 and is the white pawn
    initPawn(150 , 50);// calls the initPawn function with the position of 150 , 300 and is the white pawn
    initPawn(200 , 50);// calls the initPawn function with the position of 200 , 300 and is the white pawn
    initPawn(250 , 50);// calls the initPawn function with the position of 250 , 300 and is the white pawn
    initPawn(300 , 50);//calls the initPawn function with the position of 300 , 300 and is the white pawn
    initPawn(350 , 50);// calls the initPawn function with the position of 350 , 300 and is the white pawn
    initWhiteRook(0 , 0);// calls the initWhiteRook function with the position of 0 , 350 and is the white rook
    initWhiteRook(350 , 0);// calls the initWhiteRook function with the position of 350 , 350 and is the white rook
    initwhiteKnight(50 , 0);//calls the initWhiteKnight function with the position of 50 , 350 and is the white knight
    initwhiteKnight(300 , 0);// calls the initWhiteKnight function with the position of 300 , 350 and is the white knight
    initWhiteBishop(100 , 0);// calls the initWhiteBishop function with the position of 300 , 350 and is the white bishop
    initWhiteBishop(250 , 0);//calls the initWhiteBishop function with the position of 250 , 250 and is the white bishop
    initWQueen(150 , 0);// calls the initWhiteQueen function with the position of 150 , 350 and is the white queen
    initKing(200 , 0);
}

 

function letter(){
    let a = new Text("Put dead pieces here!" , "30pt Arial");
    a.setColor("Black");
    a.setPosition(10 , 460);
    add(a);
}



    




function line(x1 , y1 , x2 , y2 , x , y){//this function makes all the lines on the board with the paramiters x1 , x2 , y2 , x , y
    let line = new Line(x1 , y1 , x2 , y2);//makes new line with the paramiters 
    line.setPosition(x  , y);//sets position at the paramiters x and y
    line.setLineWidth(10);//sets the line width to 10 to make the line more thick 
    line.setEndpoint(x2 , y2);//sets the endpoint so you can make a line where you want it to be
    line.setColor("Black");//line color is random
    add(line);//adds line
}

function board(){// board back round function 
    let rect = new Rectangle(500 , 401);// makes a new rectangle with the width of 500 and the height of 420
    rect.setColor(Randomizer.nextColor());//sets the rectangles color to a random color 
    rect.setPosition(0 , 0);//sets the rectangles position to be at 0 , 0
    add(rect);// adds the rectangle
    
}//end of function



function initPawn(x , y){// the function for evrey white pawn on the board with the paramiters x and y 
    image = new WebImage(WHITE_PAWN);//makes new image from the global varuble white_pawn 
    image.setSize(50 , 50);//sets the images size 50 width and 50 height
    image.setPosition(x , y);//sets the images position with the paramiter 
    add(image)//adds image
}



function initWhiteRook(x , y){// the function for evrey white rook on the board with the paramiters x and y 
    image = new WebImage(WHITE_ROOK);// makes new image from the global varuble white_rook
    image.setSize(50 , 50);//sets the size of the image 50 width and 60 height
    image.setPosition(x , y);//sets the image position with the x and y paramiters
    add(image);// adds image
}



function initwhiteKnight(x , y){// the function for evrey white knight on the board
    image = new WebImage(WHITE_KNIGHT);// makes new image from the global varuble white_knight 
    image.setSize(50 , 50);//sets the size of the image 50 width and 60 height 
    image.setPosition(x , y);// sets the position of the image with the x and y paramiters
    add(image);// adds the image
    
}



function initWhiteBishop(x , y){// the function for evrey white bishop on the board with the paramiters x and y 
    image = new WebImage(WHITE_BISHOP);// makes new image from the global varuble white_bishop
    image.setSize(50 , 50);// sets the image size 50 width and 60 height
    image.setPosition(x , y);// sets the image position with the x and y paramiters
    add(image);// adds the image
}



function initWQueen(x , y){// the function for the white queen on the board with the paramiters x and y 
    image = new WebImage(WHITE_QUEEN);// makes new image from the global varuble white_queen
    image.setSize(50 , 50);//sets the image size 50 width and 60 height
    image.setPosition(x , y);// sets the image position with x and y paramiters
    add(image);// adds image 
    
}


function initKing(x , y){// the function for the white king on the board with the paramiters x and y
    image = new WebImage(WHITE_KING);//makes new image from the global varublr WHITE_KING
    image.setSize(55 , 50);//sets the image size 55 width and 60 height
    image.setPosition(x , y);//sets the image position with the x and y paramiters
    add(image);//adds image
    
}

function initBlackPawn(x , y){//the function for all the black pawns on the board with the paramiters x and y
    image = new WebImage(BLACK_PAWN);//makes new image from the global varuble BLACK_PAWN
    image.setSize(50 , 50);//sets the image size 50 width , 50 height
    image.setPosition(x , y);//sets the image position with the paramiters x and y
    add(image);//ads image
}

function initBlackRook(x , y){//the function makes all the black rooks on the board with the paramiters x and y 
    image = new WebImage(BLACK_ROOK);//makes new image from the global varuble BLACK_ROOK
    image.setSize(50 , 50);//sets the image size with 50 width and 50 height
    image.setPosition(x , y);//sets the image position with the paramiters x and y
    add(image);// ads image
}

function initBlackKnight(x , y){//the function makes all the black knights with the paramiters x and y
    image = new WebImage(BLACK_KNIGHT);//makes new image from the global varuble BLACK_KNIGHT
    image.setSize(50 , 50);//sets the image size 50 width and 50 height
    image.setPosition(x , y);//sets image position with the paramiters x and y 
    add(image);// adds image
}

function initBlackBishop(x , y){// the function makes all the black bishops on the board with the paramiters x and y
    image = new WebImage(BLACK_BISHOP);// makes new image from the global varuble BLACK_BISHOP
    image.setSize(50 , 50);//sets image size 50 width and 50 height
    image.setPosition(x , y);//sets the image position with the paramiters x and y
    add(image);// adds image
    
}

function initblackQueen(x , y){// the function makes the black queen on the board with the paramiters x and y
    image = new WebImage(BLACK_QUEEN);//makes new image from the global varuble BLACK_QUEEN
    image.setSize(50 , 50);//sets the image size 50 width and 50 height
    image.setPosition(x , y);//swts the image position with the paramiters x and y
    add(image);//adds image
}

function initBlackKing(x , y){// the function makes the black king on the board with the paramiters x and y
    image = new WebImage(BLACK_KING);//makes new image from the global varuble BLACK_KING
    image.setSize(50 , 50);//sets the image size 50 width , 50 height 
    image.setPosition(x , y);//sets the image position with the paramiters x and y
    add(image);//adds image
}

function select(e){

    let elem = getElementAt(e.getX() , e.getY())
          curElem = elem;
    

}
function drag(e){
    
    if (curElem != null){
    curElem.setPosition(e.getX()  , e.getY());
    
    }
}
function release(e){
    
    curElem = null;
}

main();
