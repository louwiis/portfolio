import { reactive } from 'vue'
import terminal from '../assets/images/terminal.png'
import folder from '../assets/images/folder.png'
import note from '../assets/images/note.png'
import trash from '../assets/images/trash.png'

// AGILY
import agilySetup from '../assets/images/agily/setup.png'
import agilyPoussin from '../assets/images/agily/poussin.png'
import agilyPhoto1 from '../assets/images/agily/photo-1.jpg'
import agilyPhoto2 from '../assets/images/agily/photo-2.png'
import agilyPhoto3 from '../assets/images/agily/photo-3.jpg'

export const tabsStore = reactive({
  state: {
    selectedTab: 'terminal',
    apps: [
      {
        id: 'terminal',
        icon: terminal,
        name: 'Le gentil terminal de Luis',
        isOpened: true,
        isMinimized: false,
        isFullscreen: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 200,
        y: 150,
      },
    ],
    folders: [
      {
        id: 'personal',
        icon: folder,
        name: 'À propos de moi',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        isActive: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 100,
        y: 100,
        files: [
          {
            id: 'note-aboutme',
          }
        ],
      },
      {
        id: 'experiences',
        icon: folder,
        name: 'Mes expériences',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        isActive: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
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
        previousWith: 600,
        width: 600,
        previousHeight: 400,
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
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 120,
        y: 120,
        files: [
          {
            id: 'agily-photo-1',
          },
          {
            id: 'agily-photo-2',
          },
          {
            id: 'agily-setup',
          },
          {
            id: 'agily-poussin',
          },
          {
            id: 'agily-photo-3',
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
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 120,
        y: 120,
        files: [
        ],
      }
    ],
    pictures: [
      {
        id: 'agily-setup',
        icon: agilySetup,
        src: agilySetup,
        name: 'Mon setup chez Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
        ratio: '1.5'
      },
      {
        id: 'agily-poussin',
        icon: agilyPoussin,
        src: agilyPoussin,
        name: 'Le poussin d\'Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
        ratio: '1.5'
      },
      {
        id: 'agily-photo-1',
        icon: agilyPhoto1,
        src: agilyPhoto1,
        name: 'Photo 1',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
        ratio: '1.5'
      },
      {
        id: 'agily-photo-2',
        icon: agilyPhoto2,
        src: agilyPhoto2,
        name: 'Photo 2',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
        ratio: '1.5'
      },
      {
        id: 'agily-photo-3',
        icon: agilyPhoto3,
        src: agilyPhoto3,
        name: 'Photo 3',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 140,
        y: 140,
        ratio: '1.5'
      }
    ],
    notes: [
      {
        id: 'note-aboutme',
        icon: note,
        name: 'Luis Teixeira Lima.txt',
        content: "<div>Hey, <span class='wave'>👋🏼</span></div><div><br></div><div>Je suis Luis Teixeira Lima, un développeur junior de Paris.</div><div>J'ai commencé à coder pour m'amuser, mais désormais j'aimerais faire du code mon métier.</div><div><br></div><div>Actuellement, je suis un étudiant en fin de deuxième année dans le programme Web Development de l'école EPITECH Digital School à Paris.</div><div><br></div><div>Pendant mes cours j'apprends tout pleins de languages mais j'ai aussi tendance à travailler en dehors de l'école.</div><div><br></div><div>Lorsque je ne code pas, j'aime bien jouer aux jeux vidéo comme CS:GO et Minecraft, sortir dehors pour jouer au foot ou encore, manger avec des amis.</div><div><br></div><div>N'hésite pas à aller faire un tour dans mes expériences ou encore mes projets, il y a quelques trucs sympas à voir.</div>",
        tmpContent: '',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
        height: 400,
        x: 160,
        y: 160,
      },
      {
        id: 'note-asquinas',
        icon: note,
        name: 'Résumé de mon expérience chez As Quinas',
        content: '',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        previousWith: 600,
        width: 600,
        previousHeight: 400,
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

    if (tab.tmpContent) {
      tab.content = tab.tmpContent
    }
  },

  minimizeTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)
    
    tab.isMinimized = !tab.isMinimized
  },

  fullscreenTab(id) {
    const tab = this.getAllTabs().find((tab) => tab.id === id)

    tab.isFullscreen = !tab.isFullscreen

    if (tab.isFullscreen) {
      tab.previousWith = tab.width
      tab.previousHeight = tab.height
      tab.width = window.innerWidth
      tab.height = window.innerHeight
    } else {
      tab.width = tab.previousWith
      tab.height = tab.previousHeight
    }
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

  closeSelectedTab() {
    this.closeTab(this.state.selectedTab)
  },

  updateNoteContent(id, content) {
    const note = this.state.notes.find((note) => note.id === id)

    note.tmpContent = content
  }
});

export default tabsStore;