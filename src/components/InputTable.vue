<template>
<div>
  <table class="input-table">
    <tr>
      <th>タイトル</th>
      <td>
        <input type="text" v-model="title">
      </td>
    </tr>
    <tr>
      <th>概要</th>
      <td>
        <textarea cols="30" rows="10" v-model="overview"></textarea>
      </td>
    </tr>
    <tr>
      <th>目的</th>
      <td>
        <ol>
          <li v-for="(p, index) in purpose" :key="index" class="input-purpose-item">
            <input type="text" :value="p" @input="updatePurpose(index, $event)">
            <button @click="deletePurpose(index)" class="input-purpose-delete">削除</button>
          </li>
        </ol>
        <button @click="addPurpose">追加</button>
      </td>
    </tr>
    <tr>
      <th>詳細</th>
      <td>
        <textarea cols="30" rows="10" v-model="details"></textarea>
      </td>
    </tr>
    <tr>
      <th>参加するメリット</th>
      <td>
        <ol>
          <li v-for="(m, index) in merit" :key="index" class="input-merit-item">
            <input type="text" :value="m" @input="updateMerit($event, index)">
            <button @click="deleteMerit(index)" class="input-merit-delete">削除</button>
          </li>
        </ol>
        <button @click="addMerit">追加</button>
      </td>
    </tr>
    <tr>
      <th>
        締め切り
      </th>
      <td>
        <input type="date" v-model="limit">
      </td>
    </tr>
    <tr>
      <th>連絡先</th>
      <td>
        <input type="text" v-model="contact">
      </td>
    </tr>
  </table>
  <button @click="output">png形式で出力</button>
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
import html2canvas from 'html2canvas';

export default defineComponent({
  setup() {
    const store = useStore();

    const title = computed({
      get() {
        return store.state.title;
      },
      set(title) {
        store.commit('setTitle', title);
      }
    });

    const overview = computed({
      get() {
        return store.state.overview;
      },
      set(overview) {
        store.commit('setOverview', overview);
      }
    });

    const purpose = computed(() => store.state.purpose);

    const details = computed({
      get() {
        return store.state.details;
      },
      set(details) {
        store.commit('setDetails', details);
      }
    });

    const merit = computed(() => store.state.merit);

    const limit = computed({
      get() {
        return store.state.limit;
      },
      set(limit) {
        store.commit('setLimit', limit);
      }
    });

    const contact = computed({
      get() {
        return store.state.contact;
      },
      set(contact) {
        store.commit('setContact', contact);
      }
    });

    const addPurpose = () => store.commit('addPurpose');
    const addMerit = () => store.commit('addMerit');
    const updatePurpose = (index: number, event: InputEvent) =>
      store.commit('updatePurpose', {
        value: (event.target as HTMLTextAreaElement).value,
        index
      });

    const updateMerit = (event: InputEvent, index: number) =>
      store.commit('updateMerit', {
        value: (event.target as HTMLTextAreaElement).value,
        index
      });

    const deletePurpose = (index: number) => store.commit('deletePurpose', index);
    const deleteMerit = (index: number) => store.commit('deleteMerit', index);

    const output = async () => {
      const canvas = await html2canvas(document.getElementById('output_area') as HTMLElement) as HTMLCanvasElement;
      const download = document.createElement('a')
      download.href = canvas.toDataURL();
      download.download = '企画書';
      download.click();
    }

    return {
      title,
      overview,
      purpose,
      details,
      merit,
      limit,
      contact,
      addPurpose,
      addMerit,
      updatePurpose,
      updateMerit,
      deletePurpose,
      deleteMerit,
      output,
    };
  }
});
</script>

<style scoped>
.input-table {
  border-spacing: 0 15px;
  margin-right: 50px;
}

.input-purpose-item+.input-purpose-item,
.input-merit-item+.input-merit-item {
  margin-top: 10px;
}

.input-purpose-delete,
.input-merit-delete {
  margin-left: 10px;
}
</style>
