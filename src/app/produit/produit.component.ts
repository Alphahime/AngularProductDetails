// produit.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from './produit.model'; // Importer l'interface depuis produit.model.ts

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProduitComponent {
  produits: Produit[] = [
    { nom: 'Mangue', prix: 100, imageUrl: 'https://img.freepik.com/photos-gratuite/nature-morte-mangue_23-2151542112.jpg?t=st=1721926013~exp=1721929613~hmac=f40a14250d38b0b18a19b183346e341fd77b6a54b214f7084059fefb017e7f36&w=740' },
    { nom: 'Orange', prix: 200, imageUrl: 'https://img.freepik.com/photos-gratuite/orange-blanc-blanc_144627-16571.jpg?t=st=1721924759~exp=1721928359~hmac=1460d0805f0509c884c3c8013adeb6eb6af6d3153969110f3a65bb78f60ff32f&w=826' },
    { nom: 'Banane', prix: 200, imageUrl: 'https://img.freepik.com/vecteurs-libre/regime-banane-jaune-mur-vecteur-isole-fond-blanc_1284-45456.jpg?t=st=1721926772~exp=1721930372~hmac=786398d1ee4bc87a5e63d68aa0bd8453850027b008a60588a7b90c8f38f0d7e7&w=996' },
    { nom: 'Pomme', prix: 200, imageUrl: 'https://img.freepik.com/photos-gratuite/fin-haut-frais-pomme_144627-14640.jpg?t=st=1721926915~exp=1721930515~hmac=62ac0eec0b8ec342a800f079055997d75deed4cf6e0ba7dbb5ac676bd89fe9bc&w=826' },
    { nom: 'Raisin', prix: 200, imageUrl: 'https://img.freepik.com/photos-gratuite/raisins-rouges-frais-feuilles-isolees-blanc_167946-37.jpg?t=st=1721926975~exp=1721930575~hmac=15a38a2339ce9e82f004caa0ad8a351e9a748bab1f21dc2e827ca8ace57326da&w=740' },
    { nom: 'Ananas', prix: 200, imageUrl: 'https://img.freepik.com/photos-gratuite/fruit-ananas_1203-7746.jpg?t=st=1721927049~exp=1721930649~hmac=8c45dd50e5dcb46e9348eb37a6b097e9ecb441753cd4f227511cf92fe0d9d619&w=740' }
  ];

  @Output() produitSelected = new EventEmitter<Produit>();

  selectProduit(produit: Produit) {
    this.produitSelected.emit(produit);
    console.log(this.produitSelected)
  }
}
