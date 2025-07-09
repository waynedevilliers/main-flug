export const pricingData = {
  immobilien: {
    title: 'Immobilien-Exposés',
    subtitle: 'Ihr Zuhause im besten Licht',
    description: 'Professionelle Präsentation für private Verkäufer.',
    packages: [
      {
        name: 'Basis Foto-Paket',
        price: '€250',
        description: 'Professionelle Innen- & Außenfotos (15-20 Bilder)',
        features: [
          '15-20 hochwertige Bilder',
          'Innen- und Außenaufnahmen',
          'Professionelle Bearbeitung',
          'Digitale Bereitstellung'
        ],
        note: 'Ideal für Wohnungen oder kleinere Häuser. Fokus auf hochwertige Standbilder.'
      },
      {
        name: 'Standard Visuelles Paket',
        price: '€500',
        description: 'Professionelle Innen- & Außenfotos (20-30 Bilder), Drohnenfotos (5-10 Bilder), Kurzes Video (bis 1 Min.)',
        features: [
          '20-30 professionelle Fotos',
          '5-10 Drohnenaufnahmen',
          'Video bis 1 Minute',
          'Luft- und Bodenaufnahmen',
          'Digitale Bereitstellung'
        ],
        note: 'Gut für durchschnittlich große Häuser. Kombiniert Boden- und Luftaufnahmen.',
        popular: true
      },
      {
        name: 'Premium Digital Paket',
        price: '€800',
        description: 'Alle Leistungen des Standard-Pakets, Erweitertes Video (bis 2,5 Min.), 3D Virtueller Rundgang, Einfaches 3D-Außenmodell',
        features: [
          'Alle Standard-Paket Leistungen',
          'Erweitertes Video bis 2,5 Min.',
          '3D virtueller Rundgang',
          'Einfaches 3D-Außenmodell',
          'Immersive Elemente'
        ],
        note: 'Umfassende Lösung für detaillierte Immobilienpräsentation. Inkl. immersiver Elemente.'
      },
      {
        name: 'Luxus Maßgeschneidertes Paket',
        price: '€1.440 - €2.400+',
        description: 'Alle Premium Digital-Funktionen, Erweitertes 3D-Modell, Präsentationsvideo für Eigentümer, Social Media optimierter Content',
        features: [
          'Alle Premium-Paket Leistungen',
          'Erweitertes 3D-Modell',
          'Präsentationsvideo für Eigentümer',
          'Social Media Content',
          'Maßgeschneiderte Lösung'
        ],
        note: 'Maßgeschneidert für hochwertige Immobilien oder solche mit tiefgehender Analyse.'
      }
    ],
    addons: [
      { name: 'Zusätzliche Fotos', price: '€40 - €80' },
      { name: 'Zusätzliche Videominuten', price: '€60 - €120' },
      { name: 'Weitere 3D-Panoramen', price: '€80 - €160' },
      { name: 'Schematische Grundrisse', price: '€120 - €200' },
      { name: 'Google Street View Integration', price: '€160 - €240' },
      { name: 'Virtuelles Staging', price: '€200 - €320' }
    ]
  },
  imagefilme: {
    title: 'Imagefilme',
    subtitle: 'Ihre Geschichte, visuell erzählt',
    description: 'Maßgeschneiderte Filmproduktionen für Unternehmen und Marken.',
    packages: [
      {
        name: 'Kurz-Imagefilm (Basic)',
        price: '€500',
        description: 'Konzeption, Dreh (1/2 Tag), Schnitt, Musik, einfache Drohnenaufnahmen (bis 1-2 Min.)',
        features: [
          'Konzeption und Planung',
          'Halbtägiger Dreh',
          'Professioneller Schnitt',
          'Musikuntermalung',
          'Einfache Drohnenaufnahmen',
          '1-2 Minuten Filmlänge'
        ],
        note: 'Geeignet für kleinere Unternehmen oder spezifische Produktvorstellungen.'
      },
      {
        name: 'Standard-Imagefilm',
        price: '€800',
        description: 'Ausführlichere Konzeption, Dreh (1 Tag), professioneller Schnitt, Musik, erweiterte Drohnenaufnahmen (bis 2-3 Min.)',
        features: [
          'Ausführliche Konzeption',
          'Ganztägiger Dreh',
          'Professioneller Schnitt',
          'Musikuntermalung',
          'Erweiterte Drohnenaufnahmen',
          '2-3 Minuten Filmlänge'
        ],
        note: 'Umfassende Darstellung von Unternehmen oder komplexeren Projekten.',
        popular: true
      }
    ]
  },
  modellierung: {
    title: '3D-Modellierung',
    subtitle: 'Präzision in drei Dimensionen',
    description: 'Erstellung hochpräziser dreidimensionaler Modelle von Objekten, Gebäuden oder Gelände.',
    packages: [
      {
        name: 'Einfaches 3D-Modell (Gebäude)',
        price: '€200',
        description: '3D-Modell eines Einfamilienhauses (Außenansicht)',
        features: [
          '3D-Außenmodell',
          'Grundlegende Details',
          'Digitale Bereitstellung',
          'Standardauflösung'
        ],
        note: 'Basismodell zur Visualisierung.'
      },
      {
        name: '3D-Modellierung (Fläche)',
        price: '€50 pro 1.000 m²',
        description: '3D-Modellierung von Flächen (z.B. für Solaranlagenplanung)',
        features: [
          'Flächenmodellierung',
          'Präzise Vermessung',
          'Topographische Daten',
          'Planungsgrundlage'
        ],
        note: 'Für größere Flächen, z.B. Dächer oder Gelände.',
        popular: true
      },
      {
        name: 'Komplexes 3D-Modell',
        price: 'Auf Anfrage',
        description: 'Detailreiches 3D-Modell von komplexen Strukturen oder größeren Arealen',
        features: [
          'Hochdetaillierte Modelle',
          'Komplexe Strukturen',
          'Individuelle Anforderungen',
          'Professionelle Aufbereitung'
        ],
        note: 'Preis abhängig von Größe, Detailgrad und Komplexität.'
      }
    ]
  },
  dachinspektionen: {
    title: 'Dachinspektionen',
    subtitle: 'Sicherheit und Klarheit von oben',
    description: 'Schnelle, sichere und kosteneffiziente Drohneninspektionen von Dächern.',
    packages: [
      {
        name: 'Basis Visuelle Inspektion',
        price: '€200',
        description: 'Hochauflösende Fotos/Videos zur allgemeinen Zustandsbewertung, Erkennung sichtbarer Schäden',
        features: [
          'Hochauflösende Aufnahmen',
          'Zustandsbewertung',
          'Schadenserkennung',
          'Digitaler Bericht',
          'Schnelle Durchführung'
        ],
        note: 'Für Standarddächer, schnelle Übersicht.',
        popular: true
      }
    ]
  },
  messungen: {
    title: 'Präzisionsmessungen',
    subtitle: 'Daten, auf die Sie bauen können',
    description: 'Exakte Vermessung von Flächen, Längen, Höhen und Volumen.',
    packages: [
      {
        name: 'Dachflächenvermessung (2D/3D)',
        price: 'Ab €250',
        description: 'Präzise Messung von Dachflächen, Längen, Neigungen und Dachgauben',
        features: [
          'Präzise Flächenmessung',
          '2D und 3D Daten',
          'Neigungsmessung',
          '3D-Modell zur Selbstvermessung',
          'Detaillierte Dokumentation'
        ],
        note: 'Inklusive Flug und 3D-Modell zur Selbstvermessung.',
        popular: true
      },
      {
        name: 'Volumenberechnung',
        price: 'Ab €250',
        description: 'Vermessung und Berechnung des Volumens von Materialhaufen (z.B. Kies, Erde) auf Baustellen',
        features: [
          'Volumenmessung',
          'Materialhaufen-Analyse',
          'Präzise Berechnungen',
          'Baustellendokumentation',
          'Digitale Bereitstellung'
        ],
        note: 'Preis variiert je nach Größe und Komplexität des Objekts.'
      },
      {
        name: 'DIN-zertifizierter Bericht',
        price: '+€60',
        description: 'Ergänzung zur Dachflächenvermessung mit einem zertifizierten Bericht',
        features: [
          'Zertifizierter Bericht',
          'DIN-konforme Dokumentation',
          'Offizielle Anerkennung',
          'Versicherungsgeeignet'
        ],
        note: 'Für offizielle Dokumentationen oder Versicherungszwecke.'
      }
    ]
  },
  baudokumentation: {
    title: 'Baudokumentation',
    subtitle: 'Fortschritt sichtbar gemacht',
    description: 'Regelmäßige Dokumentation und Überwachung von Bauvorhaben.',
    packages: [
      {
        name: 'Regelmäßige Baudokumentation',
        price: '€400 - €2.000 pro Projekt',
        description: 'Laufende Überwachung mit regelmäßigen Drohnenflügen (Fotos, Videos, 3D-Modelle)',
        features: [
          'Regelmäßige Drohnenflüge',
          'Foto- und Videodokumentation',
          '3D-Modelle',
          'Fortschrittsberichte',
          'Zeitvergleiche'
        ],
        note: 'Preis abhängig von Frequenz der Flüge und Dauer des Projekts.',
        popular: true
      },
      {
        name: 'Notfall-Service',
        price: 'Auf Anfrage',
        description: 'Schnelle Drohneninspektion nach Sturmschäden oder Unfällen',
        features: [
          'Schnelle Reaktion',
          'Schadensdokumentation',
          'Sofortbericht',
          'Versicherungsgeeignet',
          'Express-Service'
        ],
        note: 'Schnelle Reaktion zur Schadensdokumentation. Express-Zuschlag möglich.'
      }
    ]
  }
}

export const pricingNotes = [
  'Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer (19%).',
  'Anfahrtskosten können je nach Entfernung anfallen (z.B. ab €20 lokal, oder €0.96-€1.14 pro km ab 50km).',
  'Kosten für spezielle Flug-Genehmigungen (z.B. in urbanen Gebieten) werden separat berechnet (€40 - €160 pro Genehmigung).'
]
