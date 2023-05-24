import { reactive } from 'vue'
import terminal from '../assets/images/terminal.png'
import folder from '../assets/images/folder.png'
import wallpaper from '../assets/images/wallpaper.jpg'

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
        isActive: true,
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
        x: 0,
        y: 0,
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
        isActive: false,
        width: 600,
        height: 400,
        x: 0,
        y: 0,
        files: [
          {
            id: 'agily-picture',
          },
        ],
      }
    ],
    pictures: [
      {
        id: 'agily-picture',
        icon: wallpaper,
        src: wallpaper,
        name: 'Ma première année chez Agily',
        isOpened: false,
        isMinimized: false,
        isFullscreen: false,
        isActive: false,
        width: 600,
        height: 400,
        x: 0,
        y: 0, 
        ratio: '1.5'
      },
    ],
  },

  getTabById(id) {
    const tabs = [
      ...this.state.apps,
      ...this.state.folders,
      ...this.state.pictures,
    ]

    return tabs.find((tab) => tab.id === id)
  },

  getAllTabs() {
    const tabs = [
      ...this.state.apps,
      ...this.state.folders,
      ...this.state.pictures,
    ]

    return tabs
  },

  getActiveTabs() {
    const tabs = [
      ...this.state.apps,
      ...this.state.folders,
      ...this.state.pictures,
    ]

    return tabs.filter((tab) => tab.isActive)
  },

  openTab(id) {
    const tab = this.state.apps.find((tab) => tab.id === id)
      || this.state.folders.find((tab) => tab.id === id)
      || this.state.pictures.find((tab) => tab.id === id)

    tab.isOpened = true
    tab.isActive = true
    tab.isMinimized = false
    this.selectTab(id)
  },
    
  closeTab(id) {
    const tab = this.state.apps.find((tab) => tab.id === id)
      || this.state.folders.find((tab) => tab.id === id)
      || this.state.pictures.find((tab) => tab.id === id)

    tab.isOpened = false
    tab.isFullscreen = false
  },

  minimizeTab(id) {
    const tab = this.state.apps.find((tab) => tab.id === id)
      || this.state.folders.find((tab) => tab.id === id)
      || this.state.pictures.find((tab) => tab.id === id)
    
    tab.isMinimized = !tab.isMinimized
  },

  fullscreenTab(id) {
    const tab = this.state.apps.find((tab) => tab.id === id)
      || this.state.folders.find((tab) => tab.id === id)
      || this.state.pictures.find((tab) => tab.id === id)

    tab.isFullscreen = !tab.isFullscreen
  },

  updateSize(id, data) {
    const tab = this.state.apps.find((tab) => tab.id === id)
      || this.state.folders.find((tab) => tab.id === id)
      || this.state.pictures.find((tab) => tab.id === id)

    tab.width = data.width
    tab.height = data.height
  },

  updatePosition(id, data) {
    const tab = this.state.apps.find((tab) => tab.id === id)
      || this.state.folders.find((tab) => tab.id === id)
      || this.state.pictures.find((tab) => tab.id === id)

    tab.x = data.x
    tab.y = data.y
  },

  selectTab(id) {
    this.state.selectedTab = id
  },
});

export default tabsStore;