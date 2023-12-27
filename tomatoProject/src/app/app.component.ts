import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*imagenUrl: string | ArrayBuffer;
  defectosDetectados: string;
  porcentajeDefecto: number;*/

  /*onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      //reader.onload = e => this.imagenUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }*/

  onUpload() {
    // Aquí puedes añadir la lógica para enviar la imagen al servidor y obtener los resultados del análisis de la CNN.
    // Una vez que obtengas los resultados, puedes mostrarlos en la vista.
    // Actualiza defectosDetectados y porcentajeDefecto según los resultados del análisis.
    /*this.defectosDetectados = "ManchasColor";
    this.porcentajeDefecto = 47.86;*/
  }
}
