<script setup lang="ts">
import tabsStore from '../stores/tabs';

import Icon from '../components/Icon.vue';;

import TerminalWindow from '../components/TerminalWindow.vue';
import FolderWindow from '../components/FolderWindow.vue';
import ImageWindow from '../components/ImageWindow.vue';

const terminal = tabsStore.getTabById('terminal');
const experiences = tabsStore.getTabById('experiences');
const agily = tabsStore.getTabById('agily');

const images = tabsStore.state.pictures;

const getImageUrl = (url) => {
  return new URL('/src/assets/images/' + url, import.meta.url);
}
</script>

<template>
  <main>
    <Icon id="terminal" :x="16" :y="16" />
    <Icon id="experiences" :x="16" :y="144" />
    
    <TerminalWindow v-if="terminal?.isOpened" />
    <FolderWindow v-if="experiences?.isOpened" :id="experiences.id"/>
    <FolderWindow v-if="agily?.isOpened" :id="agily.id"/>

    <ImageWindow v-for="image in images" :id="image.id"/>

    <div v-if="tabsStore.getActiveTabs().length > 0" class="menu">
      <div v-for="tab in tabsStore.getActiveTabs()" :key="tab.id" class="app">
        <img :src="getImageUrl(tab.icon)" :alt="tab.name" @click="tabsStore.openTab(tab.id)" />

        <div v-if="tab.isMinimized" class="minimize"></div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100vh;
  width: 100vw;
  background: url(@/assets/images/wallpaper.jpg) no-repeat center center fixed;

  .menu {
    position: fixed;
    display: flex;
    flex-direction: row;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 8px 16px;
    background-color: rgba(#FFFFFF, 0.1);
    border: 1px solid rgba(#FFFFFF, 0.2);
    border-radius: 8px;
    margin: 12px auto;
    width: fit-content;
    gap: 8px;
    align-items: center;


    .app {
      position: relative;

      img {
        width: 60px;
      }

      .minimize {
        position: absolute;
        top: -4px;
        right: -4px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #FF0000;
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