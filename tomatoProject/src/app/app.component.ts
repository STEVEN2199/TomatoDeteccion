import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model!: tf.LayersModel;
  /*imagenUrl: string | ArrayBuffer;
  defectosDetectados: string;
  porcentajeDefecto: number;*/

  ngOnInit() {
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadLayersModel('ruta/a/tu/modelo.json');
  }

  /*predict(imageData) {
    const imageTensor = tf.browser.fromPixels(imageData).toFloat();
    const normalized = imageTensor.div(tf.scalar(255.0));
    const input = normalized.reshape([1, ...normalized.shape]);


    const prediction = this.model.predict(input);
    return prediction.arraySync();
  }*/

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
