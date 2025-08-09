
const historialLista = document.getElementById('historial-lista')
const historial = JSON.parse(localStorage.getItem('historial')) || []

//verificar si el historial sta vacio
if (historial.length === 0) {
    const mensaje = document.createElement('p')
    mensaje.textContent = 'No hay conversions en el historial.'
    historialLista.appendChild(mensaje)
} else {
    const lista = document.createElement('ul')

//reccorrer el array
    historial.forEach(conversion => {
        const itemLista = document.createElement('li')
        itemLista.textContent = conversion
        lista.appendChild(itemLista)
    })
//agregar la lista al dom 
    historialLista.appendChild(lista)
}