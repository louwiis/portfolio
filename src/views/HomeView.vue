<script setup lang="ts">
import tabsStore from '../stores/tabs';
import { computed } from 'vue';

import Icon from '../components/Icon.vue';;

import TerminalWindow from '../components/TerminalWindow.vue';
import NoteWindow from '../components/NoteWindow.vue';
import FolderWindow from '../components/FolderWindow.vue';
import ImageWindow from '../components/ImageWindow.vue';

const terminal = tabsStore.getTabById('terminal');

const notes = tabsStore.state.notes;
const folders = tabsStore.state.folders;
const images = tabsStore.state.pictures;
</script>

<template>
  <main>
    <Icon id="terminal" :x="16" :y="16" />
    <Icon id="experiences" :x="16" :y="272" />
    <Icon id="trash" :x="144" :y="16" />
    <Icon id="personal" :x="16" :y="144" />
    <Icon id="projects" :x="16" :y="400" />

    
    <TerminalWindow v-if="terminal?.isOpened" />

    <NoteWindow v-for="note in notes" :id="note.id" />
    <FolderWindow v-for="folder in folders" :id="folder.id"/>
    <ImageWindow v-for="image in images" :id="image.id"/>

    <div v-if="tabsStore.getActiveTabs().length > 0" class="menu">
      <div v-for="tab in tabsStore.getActiveTabs()" :key="tab.id" class="app" @click="tabsStore.openTab(tab.id)">
        <img :src="tab.icon" :alt="tab.name" unselectable="on" />

        <div class="name">{{ tab.name }}</div>

        <div v-if="tab.isMinimized" class="minimize"></div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100vh;
  width: 100vw;
  background: url(@/assets/images/wallpaper.jpg) center center fixed;
  background-size: cover;

  .menu {
    position: fixed !important;
    display: flex;
    flex-direction: row;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 8px 16px 12px;
    background-color: rgba(#FFFFFF, 0.1);
    border: 1px solid rgba(#FFFFFF, 0.2);
    border-radius: 8px;
    margin: 12px auto;
    width: fit-content;
    align-items: center;
    gap: 8px;

    .app {
      height: 60px;
      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .icon {
        position: inherit;

        :deep(.name) {
          display: none;
        }
      }
      
      &:hover {
        .name {
          display: block;

          position: absolute;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(#000000, 0.8);
          
          border-radius: 4px;
          color: #FFFFFF;
          padding: 4px 8px;
          white-space: nowrap;
          text-align: center;
        }
      }

      img {
        max-width: 60px;
        max-height: 60px;
      }

      .name {
        display: none;
      }

      .minimize {
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        margin: auto;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgba(#fff, 0.4);
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
      }
    }
  }
}
</style>