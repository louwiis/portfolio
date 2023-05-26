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
          unselectable="on"
          class="img"
          :src="image.src"
          :alt="image.src"
          :style="{ width: image.width + 'px', height: image.height - 26 + 'px' }"
          :class="{ landscape: image.ratio > 1, portrait: image.ratio < 1 }"
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

  img {
    width: 100%;
    min-width: 300px;
    min-height: 172px;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
}
</style>