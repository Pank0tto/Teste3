var trex
var trexImg //crie as VAR para armazenar
var edges

function preload(){
  //carregue a animação
 trexImg = loadAnimation("trex1.png", "trex2.png", "trex3.png")
}

function setup(){
    createCanvas(600, 200);
        
    trex = createSprite(100, 160, 50, 50) //crie a srite do trex
    
    trex.addAnimation("imagem do trex", trexImg) //adicione a animação
    

    edges = createEdgeSprites()//crie as bordas
    
}

function draw(){
  background("white");
  drawSprites(); //desenhe a sprite
 

  if(keyDown("space")){

    trex.velocityY = -10
  } //condicional para o salto quando apertar espaço
 

  //coloque a gravidade
 trex.velocityY = trex.velocityY + 0.5
 

  //coloque a colisão com a borda inferior
 trex.collide(edges[3])

}
