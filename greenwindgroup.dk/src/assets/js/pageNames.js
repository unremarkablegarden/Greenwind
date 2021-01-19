// pageNames[section][pagename][lang].slug
// pageNames[section][pagename][lang].name
// pageNames[section][pagename][lang].enabled

const pageNames = {
  energy: {
    start: {
      de: {
        slug: '',
        name: 'Start',
        enabled: true
      },
      en: {
        slug: '',
        name: 'Start',
        enabled: true
      },
      dk: {
        slug: '',
        name: 'Start',
        enabled: true
      }
    },
    profil: {
      de: {
        slug: 'profil',
        name: 'Profil',
        enabled: true
      },
      en: {
        slug: 'profile',
        name: 'Profile',
        enabled: true
      },
      dk: {
        slug: 'profil',
        name: 'Profil',
        enabled: true
      }
    },
    team: {
      de: {
        slug: 'team',
        name: 'Team',
        enabled: true
      },
      en: {
        slug: 'team',
        name: 'Team',
        enabled: true
      },
      dk: {
        slug: 'team',
        name: 'Team',
        enabled: true
      }
    },
    leistungen: {
      de: {
        slug: 'leistungen',
        name: 'Leistungen',
        enabled: true
      },
      en: {
        slug: 'services',
        name: 'Services',
        enabled: true
      },
      dk: {
        slug: 'serviceydelser',
        name: 'Serviceydelser',
        enabled: true
      }
    },
    netzwerk: {
      de: {
        slug: 'netzwerk',
        name: 'Netzwerk',
        enabled: false
      },
      en: {
        slug: 'network',
        name: 'Network',
        enabled: false
      },
      dk: {
        slug: 'netvaerk',
        name: 'Netværk',
        enabled: false
      }
    },
    referenzen: {
      de: {
        slug: 'referenzen',
        name: 'Referenzen',
        enabled: true
      },
      en: {
        slug: 'references',
        name: 'References',
        enabled: true
      },
      dk: {
        slug: 'referencer',
        name: 'Referencer',
        enabled: true
      }
    },
    windwissen: {
      de: {
        slug: 'windwissen',
        name: 'Windwissen',
        enabled: false
      },
      en: {
        slug: 'knowledge',
        name: 'Knowledge',
        enabled: false
      },
      dk: {
        slug: 'viden-om-vind',
        name: 'Viden om vind',
        enabled: false
      }
    },
    kontakt: {
      de: {
        slug: 'kontakt',
        name: 'Kontakt',
        enabled: true
      },
      en: {
        slug: 'contact',
        name: 'Contact',
        enabled: true
      },
      dk: {
        slug: 'kontakt',
        name: 'Kontakt',
        enabled: true
      }
    },
    datenschutz: {
      de: {
        slug: 'datenschutz',
        name: 'Datenschutz',
        enabled: true
      },
      en: {
        slug: 'dataprotection',
        name: 'Data Protection',
        enabled: true
      },
      dk: {
        slug: 'databeskyttelse',
        name: 'Databeskyttelse',
        enabled: true
      }
    },
    impressum: {
      de: {
        slug: 'impressum',
        name: 'Impressum',
        enabled: true
      },
      en: {
        slug: 'imprint',
        name: 'Imprint',
        enabled: true
      },
      dk: {
        slug: 'kolofon',
        name: 'Kolofon',
        enabled: true
      }
    }
  },
  operations: {
    start: {
      de: {
        slug: '',
        name: 'Start',
        enabled: true
      },
      en: {
        slug: '',
        name: 'Start',
        enabled: true
      },
      dk: {
        slug: '',
        name: 'Start',
        enabled: true
      }
    },
    profil: {
      de: {
        slug: 'profil',
        name: 'Profil',
        enabled: true
      },
      en: {
        slug: 'profile',
        name: 'Profile',
        enabled: true
      },
      dk: {
        slug: 'profil',
        name: 'Profil',
        enabled: true
      }
    },
    team: {
      de: {
        slug: 'team',
        name: 'Team',
        enabled: true
      },
      en: {
        slug: 'team',
        name: 'Team',
        enabled: true
      },
      dk: {
        slug: 'team',
        name: 'Team',
        enabled: true
      }
    },
    leistungen: {
      de: {
        slug: 'leistungen',
        name: 'Leistungen',
        enabled: true
      },
      en: {
        slug: 'services',
        name: 'Services',
        enabled: true
      },
      dk: {
        slug: 'serviceydelser',
        name: 'Serviceydelser',
        enabled: true
      }
    },
    netzwerk: {
      de: {
        slug: 'netzwerk',
        name: 'Netzwerk',
        enabled: false
      },
      en: {
        slug: 'network',
        name: 'Network',
        enabled: false
      },
      dk: {
        slug: 'netvaerk',
        name: 'Netværk',
        enabled: false
      }
    },
    referenzen: {
      de: {
        slug: 'standorte',
        name: 'Standorte',
        enabled: true
      },
      en: {
        slug: 'locations',
        name: 'Locations',
        enabled: true
      },
      dk: {
        slug: 'lokaliteter',
        name: 'Lokaliteter',
        enabled: true
      }
    },
    windwissen: {
      de: {
        slug: 'windwissen',
        name: 'Windwissen',
        enabled: false
      },
      en: {
        slug: 'knowledge',
        name: 'Knowledge',
        enabled: false
      },
      dk: {
        slug: 'viden-om-vind',
        name: 'Viden om vind',
        enabled: false
      }
    },
    kontakt: {
      de: {
        slug: 'kontakt',
        name: 'Kontakt',
        enabled: true
      },
      en: {
        slug: 'contact',
        name: 'Contact',
        enabled: true
      },
      dk: {
        slug: 'kontakt',
        name: 'Kontakt',
        enabled: true
      }
    },
    datenschutz: {
      de: {
        slug: 'datenschutz',
        name: 'Datenschutz',
        enabled: true
      },
      en: {
        slug: 'dataprotection',
        name: 'Data Protection',
        enabled: true
      },
      dk: {
        slug: 'databeskyttelse',
        name: 'Databeskyttelse',
        enabled: true
      }
    },
    impressum: {
      de: {
        slug: 'impressum',
        name: 'Impressum',
        enabled: true
      },
      en: {
        slug: 'imprint',
        name: 'Imprint',
        enabled: true
      },
      dk: {
        slug: 'kolofon',
        name: 'Kolofon',
        enabled: true
      }
    }
  },
  offshore: {
    start: {
      de: {
        slug: '',
        name: 'Start',
        enabled: true
      },
      en: {
        slug: '',
        name: 'Start',
        enabled: true
      },
      dk: {
        slug: '',
        name: 'Start',
        enabled: true
      }
    },
    profil: {
      de: {
        slug: 'profil',
        name: 'Profil',
        enabled: true
      },
      en: {
        slug: 'profile',
        name: 'Profile',
        enabled: true
      },
      dk: {
        slug: 'profil',
        name: 'Profil',
        enabled: true
      }
    },
    team: {
      de: {
        slug: 'team',
        name: 'Team',
        enabled: true
      },
      en: {
        slug: 'team',
        name: 'Team',
        enabled: true
      },
      dk: {
        slug: 'team',
        name: 'Team',
        enabled: true
      }
    },
    leistungen: {
      de: {
        slug: 'leistungen',
        name: 'Leistungen',
        enabled: true
      },
      en: {
        slug: 'services',
        name: 'Services',
        enabled: true
      },
      dk: {
        slug: 'serviceydelser',
        name: 'Serviceydelser',
        enabled: true
      }
    },
    netzwerk: {
      de: {
        slug: 'netzwerk',
        name: 'Netzwerk',
        enabled: false
      },
      en: {
        slug: 'network',
        name: 'Network',
        enabled: false
      },
      dk: {
        slug: 'netvaerk',
        name: 'Netværk',
        enabled: false
      }
    },
    referenzen: {
      de: {
        slug: 'referenzen',
        name: 'Referenzen',
        enabled: true
      },
      en: {
        slug: 'references',
        name: 'References',
        enabled: true
      },
      dk: {
        slug: 'referencer',
        name: 'Referencer',
        enabled: true
      }
    },
    windwissen: {
      de: {
        slug: 'windwissen',
        name: 'Windwissen',
        enabled: false
      },
      en: {
        slug: 'knowledge',
        name: 'Knowledge',
        enabled: false
      },
      dk: {
        slug: 'viden-om-vind',
        name: 'Viden om vind',
        enabled: false
      }
    },
    kontakt: {
      de: {
        slug: 'kontakt',
        name: 'Kontakt',
        enabled: true
      },
      en: {
        slug: 'contact',
        name: 'Contact',
        enabled: true
      },
      dk: {
        slug: 'kontakt',
        name: 'Kontakt',
        enabled: true
      },
      datenschutz: {
        de: {
          slug: 'datenschutz',
          name: 'Datenschutz',
          enabled: true
        },
        en: {
          slug: 'dataprotection',
          name: 'Data Protection',
          enabled: true
        },
        dk: {
          slug: 'databeskyttelse',
          name: 'Databeskyttelse',
          enabled: true
        }
      },
      impressum: {
        de: {
          slug: 'impressum',
          name: 'Impressum',
          enabled: true
        },
        en: {
          slug: 'imprint',
          name: 'Imprint',
          enabled: true
        },
        dk: {
          slug: 'kolofon',
          name: 'Kolofon',
          enabled: true
        }
      }
    }
  }
}

export default pageNames
