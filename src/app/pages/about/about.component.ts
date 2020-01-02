import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  instance: any = null;

  constructor() { }

  ngOnInit() {
    // const elements = document.querySelectorAll('.slider');
    // const element = document.querySelector('.slider');
    // M.Slider.init(elements, {
    //   indicators: true,
    //   duration: 200
    // });
    // this.instance = M.Slider.getInstance(element);

    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});

    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});

    M.Tooltip.init(document.querySelectorAll('.tooltipped'), {});

    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {});

    M.Parallax.init(document.querySelectorAll('.parallax'), {});

    M.ScrollSpy.init(document.querySelectorAll('.scrollspy'), {});

    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), {
      hoverEnabled: false
    });

    M.Carousel.init(document.querySelectorAll('.carousel'), {
      indicators: true,
      duration: 200
    });

    M.Modal.init(document.querySelectorAll('.modal'), {
      dismissible: false
    });

    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
  }

}
