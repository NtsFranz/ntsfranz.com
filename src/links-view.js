/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class LinksView extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
        
        .card {
          max-width: 500px;
          float: left;
        }
        
        iron-image {
          width:50px;
          height:50px;
          float:right;
        }
      </style>

      <h1>Links</h1>
      <div class="card">
        <iron-image sizing="contain" src="https://github.com/fluidicon.png"></iron-image>
        <h2>GitHub</h2>
        <p><a href="https://github.com/AntonFranzluebbers/">https://github.com/AntonFranzluebbers/</a></p>
        <p><a href="https://github.com/ntsfranz">https://github.com/ntsfranz</a></p>
      </div>
      <div class="card">
        <iron-image sizing="contain" src="https://bitbucket-marketing-cdn.atlassian.com/assets/img/favicons/bitbucket/favicon-32x32.png"></iron-image>
        <h2>Bitbucket</h2>
        <p><a href="https://bitbucket.org/AntonFranzluebbers/">https://bitbucket.org/AntonFranzluebbers/</a></p>
      </div>
      <div class="card">
        <iron-image style="border-radius:100px;" sizing="contain" src="http://www.gstatic.com/images/branding/google_plus/1x/gplus_icon_flush_76dp.png"></iron-image>
        <h2>Google+</h2>
        <p><a href="https://plus.google.com/+AntonFranzluebbers">https://plus.google.com/+AntonFranzluebbers</a></p>
      </div>
        
        
    `;
    }
}

window.customElements.define('links-view', LinksView);
