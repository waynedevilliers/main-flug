export const contactServices = [
  { 
    id: 'immobilien', 
    name: 'Immobilien-Exposés',
    packages: [
      'Basis Foto-Paket (€250)',
      'Standard Visuelles Paket (€500)',
      'Premium Digital Paket (€800)',
      'Luxus Maßgeschneidertes Paket (€1.440+)'
    ]
  },
  { 
    id: 'imagefilme', 
    name: 'Imagefilme',
    packages: [
      'Kurz-Imagefilm Basic (€500)',
      'Standard-Imagefilm (€800)'
    ]
  },
  { 
    id: 'modellierung', 
    name: '3D-Modellierung',
    packages: [
      'Einfaches 3D-Modell (€200)',
      '3D-Modellierung Fläche (€50/1000m²)',
      'Komplexes 3D-Modell (auf Anfrage)'
    ]
  },
  { 
    id: 'dachinspektionen', 
    name: 'Dachinspektionen',
    packages: [
      'Basis Visuelle Inspektion (€200)'
    ]
  },
  { 
    id: 'messungen', 
    name: 'Präzisionsmessungen',
    packages: [
      'Dachflächenvermessung (ab €250)',
      'Volumenberechnung (ab €250)',
      'DIN-zertifizierter Bericht (+€60)'
    ]
  },
  { 
    id: 'baudokumentation', 
    name: 'Baudokumentation',
    packages: [
      'Regelmäßige Baudokumentation (€400-€2000)',
      'Notfall-Service (auf Anfrage)'
    ]
  }
]

export const inquiryTypes = [
  { value: 'quote', label: 'Kostenvoranschlag anfordern' },
  { value: 'consultation', label: 'Kostenlose Beratung' },
  { value: 'information', label: 'Allgemeine Informationen' },
  { value: 'partnership', label: 'Geschäftspartnerschaft' },
  { value: 'other', label: 'Sonstiges' }
]

export const urgencyLevels = [
  { value: 'low', label: 'Nicht eilig (1-2 Wochen)' },
  { value: 'medium', label: 'Normal (3-5 Tage)' },
  { value: 'high', label: 'Dringend (1-2 Tage)' },
  { value: 'urgent', label: 'Sehr dringend (24 Stunden)' }
]
