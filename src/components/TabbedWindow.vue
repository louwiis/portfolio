<script setup lang="ts">
import tabsStore from '../stores/tabs';
import { ref, computed } from 'vue';

const { id } = defineProps({
  id: {
    type: String,
    required: true
  }
});

const tab = tabsStore.getTabById(id);

const selectedTab = computed(() => tabsStore.state.selectedTab);

const width = ref(tab?.width);
const height = ref(tab?.height);
const x = ref(tab?.x);
const y = ref(tab?.y);

const resize = (e: MouseEvent) => {
  if (tab?.isFullscreen) return;
  e.preventDefault();
  
  const startX = e.clientX;
  const startY = e.clientY;

  const startWidth = width.value;
  const startHeight = height.value;

  const mouseMove = (e: MouseEvent) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (startWidth + dx >= 300) {
      width.value = startWidth + dx;
    }

    if (startHeight + dy >= 172) {
      height.value = startHeight + dy;
    }

    tabsStore.updateSize(tab?.id, { width: width.value, height: height.value });
  };

  const mouseUp = () => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', mouseUp);
  };

  window.addEventListener('mousemove', mouseMove);
  window.addEventListener('mouseup', mouseUp);
}

const drag = (e: MouseEvent) => {
  if (tab?.isFullscreen) return;

  const startX = e.clientX;
  const startY = e.clientY;

  const startWidth = x.value;
  const startHeight = y.value;

  const mouseMove = (e: MouseEvent) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (startWidth + dx > 0) {
      x.value = startWidth + dx;
    }

    if (startHeight + dy > 0) {
      y.value = startHeight + dy;
    }

    tabsStore.updatePosition(tab?.id, { x: x.value, y: y.value });
  };

  const mouseUp = () => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', mouseUp);
  };

  window.addEventListener('mousemove', mouseMove);
  window.addEventListener('mouseup', mouseUp);
}
</script>

<template>
  <div
    class="tab"
    :class="{ fullscreen: tab?.isFullscreen, minimize: tab?.isMinimized }"
    :style="{ width: width + 'px', height: height + 'px', top: y + 'px', left: x + 'px', zIndex: selectedTab === tab?.id ? 1000000 : 100 }"
    @mousedown="tabsStore.selectTab(tab?.id)"
  >
    <div class="header" @mousedown="drag" @dblclick="tabsStore.fullscreenTab(tab?.id)">
      <div class="buttons">
        <div class="button" @click="tabsStore.closeTab(tab?.id)" />
        <div class="button" @click="tabsStore.minimizeTab(tab?.id)" />
        <div class="button" @click="tabsStore.fullscreenTab(tab?.id)" />
      </div>

      <div class="title">{{ tab?.name }}</div>
    </div>

    <slot />

    <div class="resize" @mousedown="resize" />
  </div>
</template>

<style scoped lang="scss">
.tab {
  font-family: 'Inter', sans-serif;

  display: grid;
  position: relative;
  position: absolute;

  grid-template-rows: 28px 1fr;

  min-width: 300px;
  min-height: 200px;

  border-radius: 10px;
  overflow: hidden;
  font-size: 13px;

  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.4);
  
  &.fullscreen {
    position: fixed;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;

    border-radius: 0;

    width: 100vw !important;
    height: 100vh !important;

    z-index: 1000;

    transition: width 0.1s ease, height 0.1s ease, top 0.1s ease-in-out, left 0.1s ease-in-out;

    .header {
      border-radius: 0;
      border: 0;
    }
  }

  &.minimize {
    display: none;

    transition: width 0.1s ease, height 0.1s ease, top 0.1s ease, left 0.1s ease;
  }

  .header {
    font-weight: 600;

    display: flex;
        
    background-color: rgb(64, 57, 55);
    color: rgb(186, 179, 178);

    height: 28px;
    padding: 0 8px;

    border: 1px solid rgb(114, 107, 104);
    border-radius: 10px 10px 0 0;
    user-select: none;
    position: relative;

    .buttons {
      display: flex;
      position: absolute;

      top: 0;
      bottom: 0;
      align-items: center;
      justify-content: center;
      
      gap: 8px;

      .button {
        width: 12px;
        height: 12px;

        border-radius: 50%;
        background-color: rgb(234, 183, 77);

        &:first-child {
          background-color: rgb(236, 106, 95);
        }

        &:last-child {
          background-color: rgb(97, 197, 84);
        }
      }
    }

    // i want the title to be in the middle of the header even if there is buttons
    .title {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  .resize {
    position: absolute;

    bottom: 0;
    right: 0;

    width: 10px;
    height: 10px;

    cursor: nwse-resize;
  }
}
</style>