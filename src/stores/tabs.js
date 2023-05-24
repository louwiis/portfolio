import { reactive } from 'vue'
import terminal from '../assets/images/terminal.png'
import folder from '../assets/images/folder.png'
import wallpaper from '../assets/images/wallpaper.jpg'
import note from '../assets/images/note.png'
import trash from '../assets/images/trash.png'

import agilyLogo from '../assets/images/agily-logo.svg'
import agilyTeam from '../assets/images/agily-team.webp'

export const tabsStore = reactive({
  state: {
    selectedTab: null,
    apps: [
      {
        id: 'terminal',
        icon: terminal,
        name: 'Le gentil terminal de Luis',
        isOpened: true,
        isMinimized: false,
        isFullscreen: false,
        width: 600,
        height: 400,
        x: 200,
        y: 150,
      },
    ],
    folders: [
      {
        id: 'experiences',
        icon: folder,
        name: 'Mes expériences',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        isActive: false,
        width: 600,
        height: 400,
        x: 100,
        y: 100,
        files: [
          {
            id: 'agily',
          }
        ],
      },
      {
        id: 'agily',
        icon: folder,
        name: 'Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        width: 600,
        height: 400,
        x: 120,
        y: 120,
        files: [
          {
            id: 'agily-note',
          },
          {
            id: 'agily-pictures',
          },
        ],
      },
      {
        id: 'agily-pictures',
        icon: folder,
        name: 'Quelques photos',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        width: 600,
        height: 400,
        x: 120,
        y: 120,
        files: [
          {
            id: 'agily-logo',
          },
          {
            id: 'agily-team',
          },
        ],
      },
      {
        id: 'trash',
        icon: trash,
        name: 'Corbeille',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        width: 600,
        height: 400,
        x: 120,
        y: 120,
        files: [
          {
            id: 'agily-logo',
          },
          {
            id: 'agily-team',
          },
        ],
      }
    ],
    pictures: [
      {
        id: 'agily-logo',
        icon: agilyLogo,
        src: agilyLogo,
        name: 'Le logo d\'Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        width: 600,
        height: 400,
        x: 140,
        y: 140, 
        ratio: '1.5'
      },
      {
        id: 'agily-team',
        icon: agilyTeam,
        src: agilyTeam,
        name: 'L\'équipe d\'Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        width: 600,
        height: 400,
        x: 140,
        y: 140, 
        ratio: '2'
      },
    ],
    notes: [
      {
        id: 'agily-note',
        icon: note,
        name: 'Résumé de mon expérience chez Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        width: 600,
        height: 400,
        x: 160,
        y: 160,
      },
      {
        id: 'note-asquinas',
        icon: note,
        name: 'Résumé de mon expérience chez As Quinas',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        width: 600,
        height: 400,
        x: 160,
        y: 160,
      },
    ]
  },

  getTabById(id) {
    const tabs = [
      ...this.state.apps,
      ...this.state.folders,
      ...this.state.pictures,
      ...this.state.notes,
    ]

    return tabs.find((tab) => tab.id === id)
  },

  getAllTabs() {
    return [
      ...this.state.apps,
      ...this.state.folders,
      ...this.state.pictures,
      ...this.state.notes,
    ]
  },

  getActiveTabs() {
    return this.getAllTabs().filter((tab) => tab.isOpened || tab.isMinimized)
  },

  openTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id);

    tab.isOpened = true
    tab.isActive = true
    tab.isMinimized = false
    this.selectTab(id)
  },
    
  closeTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id);

    tab.isOpened = false
    tab.isFullscreen = false
  },

  minimizeTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)
    
    tab.isMinimized = !tab.isMinimized
  },

  fullscreenTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)

    tab.isFullscreen = !tab.isFullscreen
  },

  updateSize(id, data) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)

    tab.width = data.width
    tab.height = data.height
  },

  updatePosition(id, data) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)

    tab.x = data.x
    tab.y = data.y
  },

  selectTab(id) {
    this.state.selectedTab = id
  },
});

export default tabsStore;