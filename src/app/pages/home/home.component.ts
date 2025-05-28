import { Component } from '@angular/core';
import { ProdutosComponent } from "../../components/produtos/produtos.component";

@Component({
  selector: 'app-home',
  imports: [ProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
