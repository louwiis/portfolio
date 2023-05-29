<script setup>
import tabsStore from '../stores/tabs';

import TabbedWindow from './TabbedWindow.vue';
import Icon from './Icon.vue';

const { id } = defineProps({
  id: {
    type: String,
    required: true
  }
});

const folder = tabsStore.getTabById(id);
</script>

<template>
  <TabbedWindow v-if="folder.isOpened" :id="id">
    <slot>
      <div class="folder">
        <div class="icons">
          <div v-for="file in folder.files" :key="file" class="icon">
            <Icon :id="file" />
          </div>
        </div>
      </div>
    </slot>
  </TabbedWindow>
</template>

<style scoped lang="scss">
.folder {
  background-color: rgb(45, 34, 31);
  border: 1px solid black;
  color: rgba(#FFFFFF, 0.8);

  display: flex;
  flex-wrap: wrap;
  height: 100%;

  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;
  }

  .icons {
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    row-gap: 12px;

    height: fit-content;
    width: 100%;

    padding: 16px 8px;

    .icon {
      position: inherit;
      display: flex;
      justify-content: center;
      
      :deep(img) {
        width: 50px !important;
      }
    }
  }
}
</style>