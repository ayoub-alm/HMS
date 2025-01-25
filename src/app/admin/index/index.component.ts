import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import {MatTreeModule} from '@angular/material/tree';

interface FoodNode {
  name: string;
  icon?:string;
  url?:string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Livraisons',
    icon:'local_shipping',
    url:'/admin/deliveries',
    children: [{name: 'Tout'},{name: 'Livré', icon:"done"}, {name: 'En cours'}, {name: 'Anulée'}],
  },
];

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MatTreeModule,RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatDividerModule, RouterLink, RouterLinkWithHref],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  showFiller = true;
  dataSource = TREE_DATA;

  childrenAccessor = (node: FoodNode) => node.children ?? [];

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
