import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: "Qu’est-ce que le COSACE ?  ",
      answer: "Le COSACE est une structure citoyenne engagée à assurer la protection du Chef de l’État et à suivre ses actions. Il agit pour garantir la sécurité des institutions et des citoyens.",
      open: false
    },
    {
      question: " Quelles sont les principales missions de COSACE ?  ",
      answer: " Sécuriser les institutions démocratiques, les données sensibles et les citoyens.Collaborer avec les autorités politico-administratives comme la Présidence de la République et la CNS.  Protéger les lanceurs d’alerte et défendre les droits humains",
      open: false
    },
    {
      question: "Avec quelles institutions COSACE collabore-t-il ?",
      answer: "COSACE travaille en lien direct avec la Présidence de la République et la CNS, notamment par l’intermédiaire de conseillers spécialisés.",
      open: false
    },
    {
      question: "Comment COSACE protège-t-il les lanceurs d’alerte ?",
      answer: "Le comité a mis en place une unité dédiée à la protection des personnes dénonçant des abus, garantissant ainsi leur sécurité.",
      open: false
    },
    {
      question: "Puis-je devenir membre du COSACE ?",
      answer: "L’adhésion est ouverte aux personnes engagées respectant les statuts et les conditions internes du comité.",
      open: false
    },
     {
      question: "COSACE intervient-il dans le domaine de la cybersécurité ?",
      answer: "Oui, il développe des protocoles pour protéger les données gouvernementales et personnelles contre les cyberattaques.",
      open: false
    },
      {
      question: "Comment contacter COSACE ?",
      answer: "Téléphone : (+243) 81 76 48 404",
      open: false
    }
  ];

  toggleFAQ(index: number): void {
    this.faqs = this.faqs.map((faq, i) => ({
      ...faq,
      open: i === index ? !faq.open : false
    }));
  }
}
