console.log(salarios);

//Análisis personal para Juanita

function encontrarPersona (personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
}

function medianaPorPersona (nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    console.log(trabajos);

    const salarios = trabajos.map((elemento) => elemento.salario);

    const medianaSalarios = platziMath.calcularMediana(salarios);

    console.log(salarios);
    console.log(medianaSalarios);
   
}

function proyeccionPorPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    let porcentajesCrecimiento = [];

    for(let i = 1; i < trabajos.length; i++){
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario;
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }
    
  const medianaPorcentajesCrecimiento = platziMath.calcularMediana(porcentajesCrecimiento);

  // console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;

}