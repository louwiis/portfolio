<script setup>
import tabsStore from '../stores/tabs';
import TabbedWindow from './TabbedWindow.vue';
import { computed, defineProps } from 'vue';

const { id } = defineProps({
  id: {
    type: String,
    required: true
  }
});

const image = tabsStore.getTabById(id);
</script>

<template>
  <TabbedWindow v-if="image.isOpened" :id="id" :title="image.name">
    <slot>
      <div class="image">
        <img 
          class="img"
          :src="image.src"
          :alt="image.src"
          :style="{ width: image.isFullscreen ? '100%' : image.width + 'px', height: image.isFullscreen ? '100%' : image.height - 28 + 'px' }"
          :class="{ portrait: image.ratio < image.width / image.height, landscape: image.ratio > image.width / image.height }"
         />
      </div>
    </slot>
  </TabbedWindow>
</template>

<style scoped lang="scss">
.image {
  background-color: rgb(45, 34, 31);
  color: rgba(#FFFFFF, 0.8);
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;

  user-select: none;

  img {
    width: 100%;
    user-select: none;
    min-width: 300px;
    min-height: 172px;

    &.portrait {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain
    }

    &.landscape {
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }
  }
}
</style>