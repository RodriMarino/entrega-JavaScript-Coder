// Tasas de cambio cargadas desde JSON 
let tasas = {}

fetch("data/tasas.json")
    .then(response => response.json())
    .then(data => {
        tasas = data
    })
    .catch(error => console.error("Error cargando tasas:", error))
    .finally(() => {
        console.log("Carga de tasas completada")})


const monedaInfo = {
    usd: { nombre: "Dólar Estadounidense", simbolo: "U$D" },
    eur: { nombre: "Euro", simbolo: "€" },
    lib: { nombre: "Libra Esterlina", simbolo: "£" }
}


//DOM
let input = document.getElementById("input")
let calcular = document.getElementById("calcular")
let selectMoneda = document.getElementById("moneda")
let banner = document.getElementById("banner")

//lista de monedas
function renderTasas() {
    const lista = document.createElement("ul")
    for (const codigo in monedaInfo) {
        const divisas = document.createElement("li")
        divisas.innerHTML = `<h4>${monedaInfo[codigo].nombre} ${monedaInfo[codigo].simbolo}.</h4>`
        lista.appendChild(divisas)
    }
    banner.appendChild(lista)
}
renderTasas()


//Onclick
calcular.onclick = () => {
    try {
        
        if (input.value === null || input.value === undefined || input.value === "" || input.value < 0) {
            throw new Error("Por favor, ingresá un monto válido")
        }
        const moneda = selectMoneda.value
        const resultado = (input.value * tasas[moneda]).toFixed(2)
        const simbolo = monedaInfo[moneda].simbolo

    Swal.fire({
        title: '¡Listo!',
        html: `$${input.value} ARS = <p>${resultado} ${simbolo}</p>`,
        icon: 'success'
        })

//Almacenamiento en localStorage
    const historial = JSON.parse(localStorage.getItem('historial')) || []
    historial.push(`$${input.value} ARS = ${resultado} ${simbolo}`)
    localStorage.setItem('historial', JSON.stringify(historial))

    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: error.message,
            icon: 'error'
        })

    } finally {

        console.log("Operación de conversión finalizada")
    }
}





