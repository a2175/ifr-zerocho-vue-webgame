<template>
  <div>
    <div>{{turnMessage}}</div>
    <table-component />
    <div v-if="winner">{{winner}}님의 승리!</div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import store from './store';
  import TableComponent from './TableComponent';

  export default {
    store,
    components: {
      TableComponent
    },
    computed: {
      ...mapState(['winner']),
      ...mapGetters(['turnMessage']),
    },
  };
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 40px;
    height: 40px;
    text-align: center;
  }
</style>