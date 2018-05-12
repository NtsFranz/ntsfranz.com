/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class ProjectsView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>


      <h1>Personal Projects</h1>
      <div class="card">
        <h2>Sudoku Solver</h2>
        <p><a href="https://github.com/NtsFranz/SudokuSolver">https://github.com/NtsFranz/SudokuSolver</a></p>
        
      </div>
      
      <h1>School Projects</h1>
      <div class="card">
        <h2>Parking-Monitor</h2>
        <p>An array of ultrasonic sensors to monitor the occupancy of parking spaces in a parking lot.</p>
        <p>The original project: <a href="https://github.com/AntonFranzluebbers/Parking-Monitor/">https://github.com/AntonFranzluebbers/Parking-Monitor/</a></p>
        <p>Later, I improved it a bit with live updates using Firebase: <a href="https://github.com/AntonFranzluebbers/Parking-Monitor-Firebase/">https://github.com/AntonFranzluebbers/Parking-Monitor-Firebase/</a></p>
        <p>Parking sensors read data using the scripts found in <a href="https://github.com/AntonFranzluebbers/Parking-Monitor-Sensor">https://github.com/AntonFranzluebbers/Parking-Monitor-Sensor</a></p>
      </div>
    `;
  }
}

window.customElements.define('projects-view', ProjectsView);
