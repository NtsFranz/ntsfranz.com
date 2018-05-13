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
      <paper-card></paper-card>
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
      
      <div class="card">
        <h2>CSCI 4070 Game Programming</h2>
        <h3>Pacman</h3>
        <p>The assignment was to recreate a classic game with some additions (such as adding my face).</p>
        <p><a href="http://cobweb.cs.uga.edu/~anton/projects/P1/index.html">http://cobweb.cs.uga.edu/~anton/projects/P1/index.html</a></p>
        <h3>"The Lorax" 2D Platformer</h3>
        <p>The game needed to include walking, running, jumping, climbing (on vines), flying, and swimming.</p>
        <p><a href="http://cobweb.cs.uga.edu/~anton/projects/P2/index.html">http://cobweb.cs.uga.edu/~anton/projects/P2/index.html</a></p>
        <h3>Search Algorithms</h3>
        <p>On this project, I went the farthest beyond the requirements. Algorithms included are:</p>
        <ul>
            <li>A*</li>
            <li>Breadth First</li>
            <li>Depth First</li>
            <li>Dijkstra</li>
            <li>Best First</li>
            <li>RRT (Rapidly-exploring Random Tree</li>
        </ul>
        <p><a href="http://cobweb.cs.uga.edu/~anton/projects/P3/index.html">http://cobweb.cs.uga.edu/~anton/projects/P3/index.html</a></p>
        <h3>Unity Project</h3>
        <p><a href="http://cobweb.cs.uga.edu/~anton/projects/P5/index.html">http://cobweb.cs.uga.edu/~anton/projects/P5/index.html</a></p>
      </div>
    `;
  }
}

window.customElements.define('projects-view', ProjectsView);
