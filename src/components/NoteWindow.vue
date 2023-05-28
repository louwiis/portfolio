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

const note = tabsStore.getTabById(id);
</script>

<template>
  <TabbedWindow v-if="note.isOpened" :id="id" :title="note.name">
    <slot>
      <div class="note" v-html="note.content" contenteditable="true" @input="tabsStore.updateNoteContent(id, $event.target.innerHTML)" />
    </slot>
  </TabbedWindow>
</template>

<style scoped lang="scss">
.note {
  background-color: rgb(45, 34, 31);
  color: rgba(#FFFFFF, 0.8);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;
  }
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}

:deep() {
  .wave {
    animation-name: wave-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
    line-height: 16px;
    font-size: 14px;
  }

  .highlight {
    color: rgb(255, 0, 0);
  }
}
</style>