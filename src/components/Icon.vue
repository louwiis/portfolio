<script setup lang="ts">
import tabsStore from '../stores/tabs';
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  },
});

const tab = tabsStore.getTabById(props.id);

const x = ref(props.x);
const y = ref(props.y);

const drag = (e: MouseEvent) => {
  const startX = e.clientX;
  const startY = e.clientY;

  const startLeft = x.value;
  const startTop = y.value;

  const mouseMove = (e: MouseEvent) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    x.value = startLeft + dx;
    y.value = startTop + dy;
  };

  const mouseUp = () => {
    window.removeEventListener('mousemove', mouseMove);
    window.removeEventListener('mouseup', mouseUp);
  };

  window.addEventListener('mousemove', mouseMove);
  window.addEventListener('mouseup', mouseUp);
}

const imageUrl = new URL('/src/assets/images/' + tab?.icon, import.meta.url);
</script>

<template>
  <div
    class="icon"
    :style="{ top: y + 'px', left: x + 'px' }"
    :class="{ image: tab?.type === 'image' }"
    @dblclick="
      () => {
        tabsStore.openTab(id)
      }
    "
    @mousedown="drag"
  >
    <img :src="imageUrl" :alt="tab?.name" />
    
    <div class="name">{{ tab?.name }}</div>
  </div>
</template>

<style scoped lang="scss">
.icon {
  position: relative;
  position: absolute;
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 100px;
  height: fit-content;

  cursor: pointer;
  user-select: none;
  gap: 8px;

  img {
    max-width: 70px;
    max-height: 70px;

    // Disable dragging of the image
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .name {
    text-align: center;
    font-weight: 500;
    color: white;
    font-size: 13px;
    text-shadow: 0 0 5px black;
  }
}
</style>