<script setup>
import TabbedWindow from './TabbedWindow.vue';
import { ref } from 'vue';

const messages = ref([]);

const introMessages = [
  'Ohhh, salut toi !',
  'Je ne t\'avais pas vu arriver !',
  'Je pensais vraiment être seul ici...',
  'Enfin bref, je suis content de te voir !',
  'Laisse moi me présenter, je suis le terminal de ce superbe site et j\'ai une mission !',
  'Je dois te faire découvrir mon créateur, il s\'appelle Luis et il est vraiment cool !',
  'Ça te dirait que je te parle un peu de lui ?',
  'En vrai je ne compte pas vraiment te laisser le choix !',
  'Je vais te parler de lui que tu le veuilles ou non !',
  'Sur cet ordinateur tu as plusieurs dossiers, tu peux les ouvrir en cliquant deux fois dessus.',
  'C\'est comme ça que tu vas pouvoir découvrir Luis !',
  'Bon je te laisse faire, amuse toi bien et à bientôt !'
];

const inputFocus = () => {
  const input = document.querySelector('.console-input');

  input.focus();
}

// push every messages, one by one, with a delay of 1 second
const pushMessages = async () => {
  for (const message of introMessages) {
    messages.value.push(message);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
}

setTimeout(() => {
  pushMessages();
}, 3000);

</script>

<template>
  <TabbedWindow id="terminal">
    <slot>
      <div class="terminal" @click="inputFocus">
        <div v-for="message in messages" :key="message" class="row">
          <span class="console-prefix">> ~</span>
          <span class="console-message">{{ message }}</span>
        </div>

        <div class="row">
          <span class="console-prefix">> ~</span>
          <span 
            class="console-input" 
            contenteditable="true" 
            @keydown.enter="(e) => {              
              messages.push(e.target.innerText);
              e.target.innerText = '';

              e.preventDefault();
            }"
          />
        </div>
      </div>
    </slot>
  </TabbedWindow>
</template>

<style scoped lang="scss">
.terminal {
  background-color: black;
  border: 1px solid rgb(46, 46, 46);
  padding: 4px 6px;
  color: rgba(#FFFFFF, 0.8);
  display: flex;
  flex-direction: column;

  .row {
    .console-prefix {
      font-weight: 600;
      color: rgb(0, 255, 0);
      margin-right: 6px;
      float: left;

      user-select: none;
    }

    .console-input {
      outline: none;
      min-width: 100px;
      word-break: break-all;
    }

    .console-message {
      word-break: break-all;
    }
  }
}
</style>