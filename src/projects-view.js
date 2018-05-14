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
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-styles/typography';
import './shared-styles.js';

class ProjectsView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 24px;
        }
        
        .card-group {
          display: block;
        }
        
        .project-description {
          color: var(--paper-grey-400);
        }
        
        .project-title {
          @apply --paper-font-headline;
          color: var(--dark-theme-base-color);
        }
        
        paper-card {
          max-width: 500px;
          min-width: 300px;
          margin:24px;
          background-color: var(--paper-grey-800);
          color: var(--dark-theme-base-color);
          vertical-align: top;
        }
        
        paper-card:hover {
          transform: scale(1.01);
        }
        
        
        paper-card paper-button {
          background-color: var(--paper-grey-700);
          color: var(--dark-theme-base-color);
          margin: 1px;
        }
        
        paper-card paper-button:hover {
          background-color: var(--paper-grey-600);
        }
        
        @media (max-width: 450px) {
          :host {
            padding: 8px;
          }
          
          paper-card {
            margin: 10px 0;
          }
        }
        
      </style>

      <h1>Personal Projects</h1>
      <div class="card-group">
      
        <paper-card>
          <div class="card-content">
            <div class="project-title">Sudoku Solver</div>
            <div class="project-description">A simple app to solve a user-given Sudoku grid.</div>
          </div>
          <div class="card-actions">
            <a href="https://github.com/NtsFranz/SudokuSolver"><paper-button>GitHub</paper-button></a>        
          </div>
        </paper-card>
        
        <paper-card>
        <div class="card-content">
            <div class="project-title">Chickens Directory</div>
            <div class="project-description">
              <p>Created entirely from scratch without templates or frameworks, this website shows a list of the chickens we own or have owned.</p>
              <p>The data was previously kept in the website source, but more recently, I moved the data and hosting to Firebase to enable user editing of the entries.</p>
            </div>
        </div>
        <div class="card-actions">
          <a href="https://chickens-firebase.firebaseapp.com"><paper-button>View</paper-button></a>
          <a href="https://antonfranzluebbers.github.io/chickens"><paper-button>View Old Version</paper-button></a>
        </div>
      </paper-card>
        
        
        
      </div>
      
      
      <h1>School Projects</h1> 
      <div class="card-group">
              
        <paper-card image="images/thumbnails/parking_monitor.png">
          <div class="card-content">
            <div class="project-title">Parking-Monitor</div>
            <div class="project-desctiption">
              <p>An array of ultrasonic sensors to monitor the occupancy of parking spaces in a parking lot.</p>
              <p>The original project: <a href="https://github.com/AntonFranzluebbers/Parking-Monitor/">(GitHub)</a></p>
              <p>Later, I improved it a bit with live updates using Firebase: <a href="https://github.com/AntonFranzluebbers/Parking-Monitor-Firebase/">(GitHub)</a></p>
              <p>Parking sensors read data using the scripts found in <a href="https://github.com/AntonFranzluebbers/Parking-Monitor-Sensor">(GitHub)</a></p>
            </div>
          </div>
          <div class="card-actions">
            <a href="https://parking-monitor.firebaseapp.com/"><paper-button>View</paper-button></a>          
          </div>
        </paper-card>
          
        <paper-card image="[[projectRoot]]images/thumbnails/pacman.png">
          <div class="card-content">
            <div class="project-title">Pacman</div>
            <div class="project-desctiption">
              The assignment was to recreate a classic game with some additions (such as adding my face).
            </div>
          </div>
          <div class="card-actions">
              <a href="http://cobweb.cs.uga.edu/~anton/projects/P1/index.html"><paper-button>View</paper-button></a>
          </div>
        </paper-card>
        
        <paper-card image="[[projectRoot]]images/thumbnails/lorax.png">
          <div class="card-content">
            <div class="project-title">"The Lorax" 2D Platformer</div>
            <div class="project-desctiption">
              The game needed to include walking, running, jumping, climbing (on vines), flying, and swimming.
            </div>
          </div>
          <div class="card-actions">
              <a href="http://cobweb.cs.uga.edu/~anton/projects/P2/index.html"><paper-button>View</paper-button></a>
          </div>
        </paper-card>
        
        <paper-card image="[[projectRoot]]images/thumbnails/search_algorithms.png">
          <div class="card-content">
            <div class="project-title">Search Algorithms</div>
            <div class="project-desctiption">
              <p>On this project, I went the farthest beyond the requirements. Algorithms included are:</p>
              <ul>
                <li>A*</li>
                <li>Breadth First</li>
                <li>Depth First</li>
                <li>Dijkstra</li>
                <li>Best First</li>
                <li>RRT (Rapidly-exploring Random Tree</li>
              </ul>
            </div>
          </div>
          <div class="card-actions">
              <a href="http://cobweb.cs.uga.edu/~anton/projects/P3/index.html"><paper-button>View</paper-button></a>
          </div>
        </paper-card>
        
        <paper-card image="[[projectRoot]]images/thumbnails/4070_unity_level2.png">
          <div class="card-content">
            <div class="project-title">CSCI 4070 Unity Project</div>
            <div class="project-desctiption"></div>
          </div>
          <div class="card-actions">
              <a href="http://cobweb.cs.uga.edu/~anton/projects/P5/index.html"><paper-button>View</paper-button></a>
          </div>
        </paper-card>
      </div>
      
      <!--<paper-card>-->
        <!--<div class="card-content">-->
            <!--<div class="project-title"></div>-->
            <!--<div class="project-description">-->
              <!---->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="card-actions">-->
            <!--<a href=""><paper-button>View</paper-button></a>-->
        <!--</div>-->
      <!--</paper-card>-->
      
    `;
  }
}

window.customElements.define('projects-view', ProjectsView);
