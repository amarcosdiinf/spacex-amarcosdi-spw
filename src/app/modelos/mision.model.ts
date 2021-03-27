import { AstronautaShort } from "./astronauta-short.model";
import { NaveShort } from "./nave-short.model";

export class Mision {
    id: string;
    titulo: string;
    descripcion: string;
    fecha_ini: Date;
    fecha_fin: Date;
    nave: NaveShort;
    tripulacion: AstronautaShort[];
}
