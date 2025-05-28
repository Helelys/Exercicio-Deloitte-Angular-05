import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProdutosServiceService } from '../../services/produtos-service.service';

interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    HttpClient
  ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  error: string = '';

  constructor(private produtosService: ProdutosServiceService) {}

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe({
      next: (data) => {
        this.produtos = data;
      },
      error: (error) => {
        this.error = error.message;
      }
    });
  }

  
}
