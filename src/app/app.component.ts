import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ProduitComponent, DetailProduitComponent, CommonModule, RouterOutlet] // Importer les composants, CommonModule et RouterOutlet
})
export class AppComponent {
  selectedProduit: any;

  onProduitSelected(produit: any) {
    this.selectedProduit = produit;
  }
}
