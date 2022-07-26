if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)  
}else{
    ready()
}
function ready(){
    var removeCartItemButtons = document.getElementsByClassName('border')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
}
var quantityInputs = document.getElementsByClassName('col')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

var addToCartButtons = document.getElementsByClassName('close')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}