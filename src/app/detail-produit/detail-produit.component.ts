import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../produit/produit.model';


@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css'],
  standalone: true,
  imports: [CommonModule] // Assure-toi que CommonModule est bien importé
})
export class DetailProduitComponent {
  @Input() produit?: Produit | null = null;
}
