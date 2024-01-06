import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model!: tf.LayersModel;
  imagenUrl: string | ArrayBuffer;
  resultado: string;
  porcentaje: number;
  cargando: boolean = false;
  progreso: number = 0;

  constructor(private cd: ChangeDetectorRef) {} // Inyecta ChangeDetectorRef

  ngOnInit() {
    this.loadModel();
  }

  async loadModel() {
    this.model = await tf.loadLayersModel('../assets/model.json');
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];

    if (file) {
      this.progreso = 0; // Comienza la carga

      const reader = new FileReader();
      reader.onload = async e => {
        this.imagenUrl = reader.result as string;
        this.cd.detectChanges(); // Detecta los cambios

        this.progreso = 100; // Termina la carga
      }
      reader.readAsDataURL(file);
    }
  }

  async preprocessImage(imageSrc: string) {
    const img = new Image();
    img.src = imageSrc;
    await img.decode(); // Espera a que se cargue la imagen
    let tensor = tf.browser.fromPixels(img)
      .resizeNearestNeighbor([224, 224]) // Redimensiona la imagen
      .toFloat()
      .expandDims(0); // Añade una dimensión de lote al principio

    return tensor;
  }

  async detectDefects() {
    // Preprocesa la imagen y conviértela en un tensor
    const tensor = await this.preprocessImage(this.imagenUrl as string);

    // Haz la predicción
    const prediction = this.model.predict(tensor) as tf.Tensor;

    // Aquí puedes procesar la predicción como necesites
    // Por ejemplo, puedes encontrar el índice de la clase con la mayor probabilidad
    const result = prediction.argMax(1).dataSync()[0];

    // Y luego asignar el resultado y el porcentaje a tus propiedades
    this.resultado = `Clase ${result}`;
    this.porcentaje = prediction.max().dataSync()[0] * 100;

    this.cd.detectChanges(); // Detecta los cambios
  }

  limpiar() {
    this.imagenUrl = '';
    this.resultado = '';
    this.porcentaje = 0;
  }
}
