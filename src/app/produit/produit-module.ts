import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit.component';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component'; // Assure-toi que ce chemin est correct

@NgModule({
  declarations: [ProduitComponent, DetailProduitComponent],
  imports: [CommonModule],
  exports: [ProduitComponent, DetailProduitComponent] // Exporter si nécessaire
})
export class ProduitModule { }
