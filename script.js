class Juego{
    constructor(nombre, año, categoria, plataforma){
        this.nombre = nombre
        this.año = año
        this.categoria = categoria
        this.plataforma  = plataforma
}
}

const juego1 = new Juego ("LEGO Star Wars: The Skywalker Saga", 2022, ["aventuras, LEGO"], ["PS5", "Xbox", "PS4", "PC", "Switch"])
const juego2 = new Juego("Tunic", 2022, ["aventuras", "combate"], ["Xbox", "PC"])
const juego3 = new Juego("Elden Ring", 2022, ["mundo abierto", "rpg", "demonios"], ["PS5", "PS4", "Xbox", "PC"])
const juego4 = new Juego("Leyendas Pokémon Arceus", 2022, ["pokemon", "aventuras", "combate"], ["Switch"])
const juego5 = new Juego("Hitman 3", 2021, ["estrategia" , "asesinos"], ["PS4", "PS5", "Xbox", "Switch", "PC"])
const juego6 = new Juego("Final Fantasy VII Remake", 2021, ["accion", "rpg"], ["PS5", "PC"])
const juego7 = new Juego("Little Nightmares 2", 2021, ["misterio" , "aventuras"], ["PC", "PS4", "Switch", "PS5", "Xbox"])
const juego8 = new Juego("Resident Evil Village", 2021, ["suspenso", "terror"], ["PC", "PS4", "Xbox", "PS5", "Xbox"])
const juego9 = new Juego("Skul: The Hero Slayer", 2021, ["fantasia", "accion"], ["PC", "Switch"])
const juego10 = new Juego("Back 4 Blood", 2021, ["accion", "zombies"], ["PC", "PS4", "Xbox", "PS5"])
const juego11 = new Juego("Assassin's Creed Valhalla", 2020, ["accion", "asesinos"], ["Xbox", "PS4", "PS5", "PC"])
const juego12 = new Juego("Captain Tsubasa: Rise of New Champions", 2020, ["deportes", "fantasia"], ["PS4", "Switch", "PC"])
const juego13 = new Juego("Cyberpunk 2077", 2020, ["futurismo", "accion"], ["Xbox", "PS4", "PC", "Stadia"])
const juego14 = new Juego("Demon’s Souls", 2020, ["accion", "rol", "demonios"], ["PS5"])
const juego15 = new Juego("Doom Eternal", 2020, ["accion", "demonios"], ["PS4", "Xbox", "Switch", "PC", "Stadia"])
const juego16 = new Juego("Dragon Ball Z: Kakarot", 2020, ["accion"], ["PS4", "Xbox", "PC"])
const juego17 = new Juego("Marvel's Spider-man: Miles Morales", 2020, ["heroes", "accion"], ["PS5", "PS4"])
const juego18 = new Juego("Halo Reach", 2019, ["espacio", "accion"], ["PC", "Xbox"])
const juego19 = new Juego("Sekiro: Shadows Die Twice", 2019, ["fantasia", "rpg"], ["PC", "PS4", "PS5", "Xbox"])
const juego20 = new Juego("Ori and the Blind Forest: Definitive Edition", 2019, ["accion", "plataformas"], ["PC", "Xbox","Switch"])
const juego21 = new Juego("Resident Evil 2: Remake", 2019, ["zombies", "suspenso"], ["PC", "PS4", "PS5", "Xbox"])
const juego22 = new Juego("Sea of Thieves", 2018, ["piratas", "cooperativo"], ["PC", "Xbox"])
const juego23 = new Juego("God of War 4", 2018, ["accion", "fantasia"], ["PS4", "PS5", "PC"])
const juego24 = new Juego("Injustice 2", 2017, ["heroes"], ["PC", "PS4", "PS5", "Xbox"])
const juego25 = new Juego("Crash Bandicoot N. Sane Trilogy", 2017, ["plataformas"], ["PS4", "PS5"])

const juegos = [juego1, juego2, juego3, juego4, juego5, juego6, juego7, juego8, juego9, juego10, juego11, juego12, juego13, juego14, juego15, juego16, juego17, juego18, juego19, juego20, juego21, juego22, juego23, juego24, juego25]


alert("¡Que tal GAMER! aca te dejamos una lista con los mejores videojuegos de los ultimos años, echales un vistazo!")

let respuesta, respuestaSwitch
//Consulto el tipo de búsqueda
do {
    respuesta = parseFloat(prompt(" Ingrese un numero dependiendo del tipo de búsqueda que desea hacer, si desea buscar según el año ingrese 1. Si desea buscar según su categoría ingrese 2."))
    if ((respuesta != 1) && (respuesta!= 2)){
        alert("Por favor ingrese un número válido")
    }
} while((respuesta != "1") &&(respuesta != 2))


//Switch según la respuesta 
switch(respuesta){
    case 1 : 
        do{ 
            respuestaSwitch = parseFloat(prompt("Ingrese el año de el juego que quiere ver, entre 2017 y 2022 (Los resultados se mostraran en consola)"))
        } while (respuestaSwitch <= 2016 || respuestaSwitch>=2023)
        
        const juegosFiltradosAño = juegos.filter(juego => juego.año == respuestaSwitch)
        juegosFiltradosAño.forEach(juego => {
            console.log(`Quizá pueda interesarte el juego ${juego.nombre}, es de ${juego.categoria}, y esta disponible en ${juego.plataforma}.`)
        })
        break

    case 2 :
        do{ respuestaSwitch = prompt("Ingrese la categoría que quiere ver, las opciones son : accion, misterio, demonios, futurismo, suspenso, terror, deportes, aventuras, zombies, heroes, piratas, plataformas, rpg, mundo abierto, estrategia, asesinos, fantasia. (Los resultados se mostraran en consola)").toLocaleLowerCase()

        } while (respuestaSwitch!= "accion" && respuestaSwitch!= "misterio" && respuestaSwitch!= "demonios" && respuestaSwitch!= "futurismo" && respuestaSwitch!= "suspenso" && respuestaSwitch!= "deportes" && respuestaSwitch!= "terror" && respuestaSwitch!= "aventuras" && respuestaSwitch!= "zombies" && respuestaSwitch!= "heroes" && respuestaSwitch!= "piratas" && respuestaSwitch!= "plataformas" && respuestaSwitch!= "rpg" && respuestaSwitch!= "mundo abierto" && respuestaSwitch!= "asesinos" && respuestaSwitch!= "estrategia" && respuestaSwitch!= "fantasia")
      
        const juegosFiltradosCategoria = juegos.filter(juego => juego.categoria.includes(respuestaSwitch) == true)
        juegosFiltradosCategoria.forEach(juego => {console.log(`Quizá te interese el juego ${juego.nombre} del año ${juego.año}, es de ${juego.categoria} y esta disponible en ${juego.plataforma}`)
        })
        break
}
