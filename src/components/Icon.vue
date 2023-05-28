<script setup lang="ts">
import tabsStore from '../stores/tabs';
import { ref, computed } from 'vue';

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
</script>

<template>
  <div
    class="icon"
    :class="{ image: tab?.ratio }"
    :style="{ top: y + 'px', left: x + 'px' }"
    @dblclick="
      () => {
        tabsStore.openTab(id)
      }
    "
    @mousedown="drag"
  >
    <img :src="tab?.icon" :alt="tab?.name" unselectable="on" />
    
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
  max-width: 100px;
  height: fit-content;

  cursor: pointer;
  user-select: none;
  gap: 8px;

  &.image {
    img {
      border: 3px solid white;
    }
  }

  img {
    max-width: 70px;
    max-height: 70px;
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