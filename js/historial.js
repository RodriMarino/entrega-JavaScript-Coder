
const historialLista = document.getElementById('historial-lista')
const historial = JSON.parse(localStorage.getItem('historial')) || []
const borrarHistorial = document.getElementById('boton-limpiar')

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

//borrar el historial
borrarHistorial.addEventListener('click', () => {
    localStorage.removeItem('historial')
    historialLista.innerHTML = '<p>No hay nada que mostrar.</p>'
}
)
