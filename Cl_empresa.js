import Cl_personal from "./Cl_personal.js";
export default class Cl_empresa {
    constructor() {
        this.acumMontoA = 0;
    }
    procesarPersonal(p) {
        this.acumMontoA += p.montoAdicional();
    }
    totalMontoAdicional(){
        return this.acumMontoA;

    }
        

    }
