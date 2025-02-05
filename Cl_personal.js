export default class Cl_personal {
    //Tipo: 1=obrero, 2=administrativo
    constructor(nombre,tipo,sueldo) {
        this.nombre = nombre;
        this.tipo= tipo;
        this.sueldo = sueldo;
    }
        set sueldo(sueldo){
        this._sueldo = +sueldo;
    }
       get sueldo(){
        return this._sueldo;
    }
    
    montoAdicional(){
        if (this.tipo === 1){
            return this.sueldo * 0.2;
        }else{
            return this.sueldo * 0.1;
        }
    }
}