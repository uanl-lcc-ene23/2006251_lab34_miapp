import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];
  nombre: any = "Pedro";

  constructor(private actionSheetCtrl: ActionSheetController) {}

  async presentarActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Confirma que desea eliminar este registro',
      //subHeader: "Confirma que quieres eliminar este registro",
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }


  

}
