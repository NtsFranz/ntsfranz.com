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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/iron-image/iron-image.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class AntonFranzluebbers extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4caf50;
          --app-secondary-color: #03a9f4;

          display: block;
        }
        
        ::selection {
          background: var(--app-primary-color);
        }
        
        app-drawer {
          background-color: var(--dark-theme-background-color);
          color: var(--dark-theme-base-color);
        }
        
        app-drawer a {
          text-decoration: none;
          color: black;
          background-color:black;
        }

        app-header {
          color: var(--light-theme-base-color);
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }
        
        app-header paper-button:hover {
          background-color: var(--paper-green-800);
        }       
        
        
        a paper-button {
          color:var(--light-theme-base-color);
          text-decoration: none;
        }
        
        @media (max-width: 450px) {
          .drawer-hide {
            display:block;
          }
          
          .toolbar-hide {
            display:none;
          }
        }
        
        @media (min-width: 450px) {
          .drawer-hide {
            display:none;
          }
          
          .toolbar-hide {
            display:block;
          }
        }
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
        
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
      
        <app-drawer class="drawer-hide" id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <paper-listbox selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
-           <a name="projects" href="[[rootPath]]projects" tabindex="-1"><paper-item>Projects</paper-item></a>
-           <a name="links" href="[[rootPath]]links" tabindex="-1"><paper-item>Links</paper-item></a>
-         </paper-listbox>
        </app-drawer>
      
        <!-- Main content -->
        <app-header-layout has-scrolling-region="">
          
          
          <app-header slot="header" condenses="" reveals="" effects="waterfall">
              
            <app-toolbar>
              <paper-icon-button class="drawer-hide" icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
              <div main-title="">Anton Franzluebbers</div>
              <!--<div condensed-title="">Anton F.</div>-->
              <a class="toolbar-hide" name="projects" href="[[rootPath]]projects"><paper-button>Projects</paper-button></a>
              <a class="toolbar-hide" name="projects" href="[[rootPath]]links"><paper-button>Links</paper-button></a>
            </app-toolbar>
            <!--<app-toolbar class="tall">-->
              <!--&lt;!&ndash;<div main-title="">Anton Franzluebbers</div>          &ndash;&gt;-->
            <!--</app-toolbar>-->
          </app-header>
  
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            <projects-view name="projects"></projects-view>
            <links-view name="links"></links-view>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
     // Show the corresponding page according to the route.
     //
     // If no page was found in the route data, page will be an empty string.
     // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
    if (!page) {
      this.page = 'projects';
    } else if (['projects', 'links'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'view404';
    }
  }

  _pageChanged(page) {
    // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.
    switch (page) {
      case 'projects':
        import('./projects-view.js');
        break;
      case 'links':
        import('./links-view.js');
        break;
      case 'view404':
        import('./my-view404.js');
        break;
    }
  }
}

window.customElements.define('anton-franzluebbers', AntonFranzluebbers);
