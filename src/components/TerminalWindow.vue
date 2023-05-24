<script setup>
import TabbedWindow from './TabbedWindow.vue';
import { ref } from 'vue';

const messages = ref([]);

const introMessages = [
  'Ohhh, salut toi ! <span class="wave">👋🏼</span>',
  '',
  'Je ne t\'avais pas vu arriver !',
  'Je pensais vraiment être seul ici...',
  '',
  'Enfin bref, je suis content de te voir !',
  'Laisse moi me présenter, je suis le terminal de ce superbe site et j\'ai une mission !',
  'Je dois te faire découvrir mon créateur, il s\'appelle Luis et il est vraiment cool !',
  '',
  'Ça te dirait d\'apprendre à le connaître ?',
  '',
  'En vrai je ne compte pas vraiment te laisser le choix !',
  'Que tu le veuilles ou non, ma mission a déjà commencée !',
  '',
  'Sur cet ordinateur tu as plusieurs dossiers, tu peux les ouvrir en cliquant deux fois dessus.',
  'C\'est comme ça que tu vas pouvoir découvrir Luis !',
  '',
  'Bon je te laisse faire, amuse toi bien et à bientôt !'
];

const inputFocus = () => {
  const input = document.querySelector('.console-input');

  input.focus();
  input.focus();
}

const pushMessages = async () => {
  for (const message of introMessages) {
    messages.value.push(message);
    await new Promise(resolve => setTimeout(resolve, 1500));
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
          <span class="console-message" v-html="message" />
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

  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

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

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
  100% { transform: rotate( 0.0deg) }
}

:deep() {
  .wave {
    animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s;        /* Change to speed up or slow down */
    animation-iteration-count: infinite;  /* Never stop waving :) */
    transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
    display: inline-block;

    font-size: 14px;
  }

  .highlight {
    color: rgb(255, 0, 0);
  }
}
</style>