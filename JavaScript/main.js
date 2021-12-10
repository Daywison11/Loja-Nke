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
                <input type="number" name="quantidade" id="quantidade${id}" >
            </div>` + 
            `<p class="prec-color">R$299,99</p>
            <button class="remove" ><img src="imagens/lixeira.png" alt="ico-lixeira" class="lixeira" onclick="lixeira${id}()" id="lixeira${id}()" ></button>`)

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
            crearItem(produtos[4].imagem, produtos[4].nome,produtos[4].id)
            aposAddcart()
        }
        else{
            aposAddcart()
        }
        
    })
}
function lixeira1(){
    $("#1").remove()
    carrinho.splice(0)
}

function lixeira2(){
    $("#2").remove()
    carrinho.splice(1)
}
function lixeira3(){
    $("#3").remove()
    carrinho.splice(2)
}
function lixeira4(){
    $("#4").remove()
    carrinho.splice(3)
}
function lixeira5(){
    $("#5").remove()
    carrinho.splice(4)
}

function somar(){
    if (existeInCart(1)== true){
        var primeiro = pegarValue(1,'primeiro')
    }
    else{
        var primeiro = 0
    }
    if (existeInCart(2)== true){
        var segundo = pegarValue(2,'segundo')

    }
    else{
        var segundo = 0
    }
    if  (existeInCart(3)== true){
        var terceiro = pegarValue(3,'terceiro')

    }
    else{
        var terceiro = 0
    }
    if (existeInCart(4)== true){
        var quarto = pegarValue(4,'quarto')

    }
    else{
        var quarto = 0
    }
    if (existeInCart(5)== true){
        var quinto = pegarValue(5,'quinto')
    }
    else{
        var quinto = 0
    }
    function total(){
        var total = ((primeiro + segundo + terceiro + quarto) * 299.99) +  quinto * 249.99
        $('#total').html('R$'+ total.toFixed(2))
    }
    total()
    
}
function pegarValue(id,result){
    var prim = document.querySelector(`#quantidade${id}`).value
    var result = Number(prim)
    return result
}

function existeInCart(id){
    if(carrinho.indexOf(id) === -1){
        return false
    }
    else{
        return true
    }
}


addTOcart()
