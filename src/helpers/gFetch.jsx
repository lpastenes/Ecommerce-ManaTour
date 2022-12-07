let obj = [
    {id: '1', 
    nombre: 'Aeropuerto - Chicureo', 
    categoria: 'transfer',
    stock: '10',
    precio: '20.000',
    detalle: 'Servicio privado que consiste en transportar al cliente desde el aeropuerto AMB hacia la localidad de Chicuero comuna de Colina.',   
    imagen:'/img/airport.jpg'},

    {id: '2', 
    nombre: 'City Tour Santiago', 
    categoria: 'tour',
    stock: '10',
    precio: '40.000',
    detalle: 'Servicio privado que consiste en transportar a un grupo de pasajeros a diferentes localidades de la cuidad de Santiago de Chile, incluye desayuno y almuerzo.',  
    imagen:'/img/tour_santiago.jpg'},

    {id: '3', 
    nombre: 'Chicureo - Aeropuerto', 
    categoria: 'transfer',
    stock: '10',
    precio: '20.000',
    detalle: 'Servicio privado que consiste en transportar al cliente desde la localidad de Chicuero comuna de Colina, al aeropuerto AMB.',  
    imagen:'/img/lan-chile.jpg'},

    {id: '4', 
    nombre: 'Tour Valparaiso', 
    categoria: 'tour',
    stock: '10',
    precio: '40.000',
    detalle: 'Servicio privado que consiste en transportar a un grupo de pasajeros a diferentes localidades de la cuidad de Valapraiso, incluye desayuno y almuerzo.', 
    imagen:'/img/valpo.jpg'},

    {id: '5', 
    nombre: 'Tour Viña del Mar', 
    categoria: 'tour',
    stock: '10',
    precio: '40.000',
    detalle: 'Servicio privado que consiste en transportar a un grupo de pasajeros a diferentes localidades de la cuidad de Viña del Mar, incluye desayuno y almuerzo.', 
    imagen:'/img/vina-del-mar2.jpg'},

    {id: '6', 
    nombre: 'Aeropuerto - Hotel', 
    categoria: 'transfer',
    stock: '10',
    precio: '30.000',
    detalle: 'Servicio privado que consiste en transportar al cliente desde el aeropuerto AMB hacia el Hotel en que se hospedara el cliente.', 
    imagen:'/img/hotel.jpg'},

    {id: '7', 
    nombre: 'Aeropuerto - Valle Nevado', 
    categoria: 'transfer',
    stock: '10',
    precio: '50.000',
    detalle: 'Servicio privado que consiste en transportar al cliente desde el aeropuerto AMB hacia la localidad de Valle Nevado, unos de los principales centros invernales del Pais.', 
    imagen:'/img/valle-nevado.jpg'},
    
    {id: '8', 
    nombre: 'Aeropuerto - Valparaíso', 
    categoria: 'transfer',
    stock: '10',
    precio: '50.000',
    detalle: 'Servicio privado que consiste en transportar al cliente desde el aeropuerto AMB a la ciudad de Valparaiso.', 
    imagen:'/img/valpo.jpg'},

    {id: '9', 
    nombre: 'Aeropuerto - Viña del Mar', 
    categoria: 'transfer',
    stock: '10',
    precio: '40.000',
    detalle: 'Servicio privado que consiste en transportar al cliente desde el aeropuerto AMB a la ciudad de Viña del Mar.', 
    imagen:'/img/vina-del-mar.jpg'},

    {id: '10', 
    nombre: 'Tour Isla Negra', 
    categoria: 'tour',
    stock: '10',
    precio: '40.000',
    detalle: 'Servicio privado que consiste en transportar a un grupo de pasajeros a diferentes localidad de Isla Negra, incluye desayuno y almuerzo.', 
    imagen:'/img/beach.jpg'}
]
export const gFetch = (nro) => {
    return new Promise( (respuesta, reject)=>{
        //acciones 
        const condition = true
        if (condition) {    
            setTimeout(()=>{
                respuesta(obj )            
            }, 2000)
        } else {
            reject( '400 not found' )        
        }
    } )
}
