(window).onscroll = function (){
    $('.cart-itens').removeClass('scale1')
}
function cartItens(){
    $('.cart-itens').toggleClass('scale1')
}

let carrinho = []
const produtos = [
    {
        id : 1,
        nome : 'Air max 200',
        imagem : 'imagens/air-max-200.png',
        quntidade: 0
    },
    {
        id : 2,
        nome : 'Air max command',
        imagem : 'imagens/air-max-command.png',
        quntidade: 0
    },
    {
        id : 3,
        nome : 'Nike unissex',
        imagem : 'imagens/nike-unissex-black.png',
        quntidade: 0
    },
    {
        id : 4,
        nome : 'nike shox r34',
        imagem : 'imagens/nike-shox-r4.png',
        quntidade: 0
    },
    {
        id : 5,
        nome : 'Nike unisex vermelho',
        imagem : 'imagens/nike-unissex.png',
        quntidade: 0
    }
]
function crearItem(img,nome,id){
    let item = (`<div class="itens" id="${id}"`)
    let produto = (
        `<div class="img-cart"> 
            <img src="${img}" class="img-produto-cart" alt="imagens-produto" style="width:150px;">`+
        `<div class="sessao" ">` + 
            `<h1 class="nome-do-modelo"> ${nome} </h1>`+
            `<div class="quant">
                <label for="quant">quantidade </label>
                <input type="number" name="quantidade" id="quantidade" >
            </div>` + 
            `<p class="prec-color">R$299,99</p>
            <a class=" remove"><img src="imagens/lixeira.png" alt="ico-lixeira" class="lixeira"></a>`)

    $('.pedidos').append(item + produto)
}
function aposAddcart(){
    $(window).scrollTop(0)
            setTimeout(()=> {
                $('.cart-itens').toggleClass('scale1')},1000)
            $('#ico-cart').css({'border':'1px solid red'})
            setTimeout(()=>{
                $('#ico-cart').css({'border': 'none'})
            },2000)
}

function addTOcart(){
    $('#1').click(()=>{

        if(carrinho.indexOf(1) === -1){
            aposAddcart()
            carrinho.push(produtos[0].id)
            crearItem(produtos[0].imagem, produtos[0].nome,produtos[0].id)
            }
            
        else{
            aposAddcart()
        }
        
    })
    $('#2').click(()=>{
        if(carrinho.indexOf(2) === -1){
            aposAddcart()

            carrinho.push(produtos[1].id)
            crearItem(produtos[1].imagem, produtos[1].nome,produtos[1].id)
        }
        else{
            aposAddcart()
            
        }
        
    })
    $('#3').click(()=>{
        if(carrinho.indexOf(3) === -1){
            
            aposAddcart()

            carrinho.push(produtos[2].id)
            crearItem(produtos[2].imagem, produtos[2].nome,produtos[2].id)}
        else{
            aposAddcart()
        }
        
    })
    $('#4').click(()=>{
        if(carrinho.indexOf(4) === -1){
            
            aposAddcart()

            carrinho.push(produtos[3].id)
            crearItem(produtos[3].imagem, produtos[3].nome,produtos[3].id)}
        else{
            aposAddcart()
        }
        
    })
    $('#5').click(()=>{
        if(carrinho.indexOf(5) === -1){
            
            carrinho.push(produtos[4].id)
            crearItem(produtos[4].imagem, produtos[4].nome,produtos[4].id)}
        else{
            aposAddcart()
        }
        
    })
}
addTOcart()