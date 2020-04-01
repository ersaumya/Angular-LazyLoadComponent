import { Component, OnInit} from '@angular/core';

@Component({
  templateUrl: "./lazycomp.component.html",
  styleUrls: ["./lazycomp.component.css"]
})

// ng g c lazycomp --skip-import --skip-selector

export class LazycompComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
}
