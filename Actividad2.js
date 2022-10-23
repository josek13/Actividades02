function calcularSalario(x, y) {
    // Variable donde calculamos el salario base
    let salarioBase = 35 * y;

    // Con esta variavle calculamos las horas que psan de 35
    let horasRestantes = x - 35;
    
    // Aqui estamos calculando cual es el sueldo bruto
    if (x > 35) {
        salarioBase += horasRestantes * (y * 1.5);
    } else {
        return salarioBase = x * y;
    }

    // Aqui se hacen los calculos para obtener el sueldo neto
    if (salarioBase <= 500) {
        return salarioBase;
    } else if (salarioBase <= 900) {
        salarioBase -= 500;
        return salarioBase * 0.75 + 500;
    } else if (salarioBase > 900) {
        salarioBase -= 900;
        return salarioBase * 0.55 + (400 * 0.75) + 500;
    }
}

console.log(calcularSalario(45, 30));