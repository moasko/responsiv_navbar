//declaration des variables ( elements du DOM)



//recupeeation de la bar de navigation par la "class"
const navigation = document.querySelector('.navigation')

//recupeeation de la puce open par la "class"
const open = document.querySelector('.open')

//fonction de l'ouverture de la navbar par un click sur open
open.onclick = function() {
    navigation.classList.toggle('nav_open')
}