import { createStore } from 'vuex'

export default createStore({
  state: {
    title: '',
    overview: '',
    purpose: [''],
    details: '',
    merit: [''],
    limit: '',
    contact: '',
  },
  mutations: {
    setTitle(state, title) {
      state.title = title;
    },
    setOverview(state, overview) {
      state.overview = overview;
    },
    setPurpose(state, purpose) {
      state.purpose = purpose;
    },
    setDetails(state, details) {
      state.details = details;
    },
    setMerit(state, merit) {
      state.merit = merit;
    },
    setLimit(state, limit) {
      state.limit = limit;
    },
    setContact(state, contact) {
      state.contact = contact;
    },
    addPurpose(state) {
      state.purpose.push('');
    },
    addMerit(state) {
      state.merit.push('');
    },
    updatePurpose(state, {value, index}) {
      state.purpose[index] = value;
    },
    updateMerit(state, {value, index}) {
      state.merit[index] = value;
    },
    deletePurpose(state, index) {
      if(state.purpose.length < 2) return
      state.purpose.splice(index, 1)
    },
    deleteMerit(state, index) {
      if(state.merit.length < 2) return
      state.merit.splice(index, 1)
    },
  },
  actions: {
  },
  modules: {
  }
})
