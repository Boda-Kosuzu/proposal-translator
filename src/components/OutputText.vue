<template>
<div class="output-area">
  <div id="output_area" class="output-body">
    <h1>企画書</h1>
    <h2>タイトル</h2>
    <p class="output-title">
      {{ title }}
    </p>
    <h2>概要</h2>
    <p class="output-overview">
      {{ overview }}
    </p>
    <h2>目的</h2>
    <ol class="output-purpose">
      <li v-for="(p, index) in purpose" :key="index" class="output-purpose-item">
        {{p}}
      </li>
    </ol>
    <h2>詳細</h2>
    <p class="output-details">
      {{ details }}
    </p>
    <h2>メリット</h2>
    <ol class="output-merit">
      <li v-for="(m, index) in merit" :key="index" class="output-merit-item">
        {{m}}
      </li>
    </ol>
    <h2>締め切り</h2>
    <p class="output-limit">
      {{ limit }}
    </p>
    <h2>連絡先</h2>
    <p class="output-contact">
      {{ contact }}
    </p>
  </div>
</div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
} from 'vue'
import {
  useStore,
} from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const title = computed(() => store.state.title)
    const overview = computed(() => store.state.overview)
    const purpose = computed(() => store.state.purpose)
    const details = computed(() => store.state.details)
    const merit = computed(() => store.state.merit)
    const contact = computed(() => store.state.contact)
    const limit = computed(() => {
      if (!store.state.limit) return ''
      const l = store.state.limit.split('-')
      return `${l[1]}月${l[2]}日`
    })

    return {
      title,
      overview,
      purpose,
      details,
      merit,
      limit,
      contact,
    };
  }
})
</script>

<style scoped>
.output-area {
  border: 1px solid black;
}

.output-body {
  max-width: 595px;
  min-width: 595px;
  min-height: 842px;
  padding: 10px 15%;
  box-sizing: border-box;
}

.output-title,
.output-contact {
  word-break: break-all;
}

.output-overview,
.output-details {
  word-break: break-all;
  white-space: pre-wrap;
  text-align: left;
}

.output-purpose-item,
.output-merit-item {
  word-break: break-all;
  text-align: left;
}
</style>
