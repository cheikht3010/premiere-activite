import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Texte wikipedia',
      content: "Un texte est une série orale ou écrite de mots perçus comme constituant un ensemble cohérent, porteur de sens et utilisant les structures propres à une langue (conjugaisons, construction et association des phrases…)1. Un texte n'a pas de longueur déterminée sauf dans le cas de poèmes à forme fixe comme le sonnet ou le haïku.",
      loveIts: 10,
      created_at: new Date()
    },
    {
      title: 'Dons wikipedia',
      content: "Chers lecteurs en France, pardon pour cette interruption, mais ce lundi, nous avons un message important : Wikipédia a besoin de vous. Si vous avez déjà fait un don, nous vous en remercions sincèrement. Nous ne sommes pas des vendeurs, nous dépendons de dons de 10 € en moyenne, mais moins d'1% de nos lecteurs contribuent. Si ce lundi.",
      loveIts: 0,
      created_at: new Date()

    },
    {
      title: 'Autre texte',
      content: "On retient en particulier la structure d'ensemble, la syntaxe et la ponctuation, l'orthographe lexicale et grammaticale, la pertinence et la richesse du vocabulaire, la présence de figures de style, le registre de langue et la fonction recherchée (narrative, descriptive, expressive, argumentative, injonctive, poétique). C'est l'objet de l'analyse littéraire.",
      loveIts: -10,
      created_at: new Date()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
