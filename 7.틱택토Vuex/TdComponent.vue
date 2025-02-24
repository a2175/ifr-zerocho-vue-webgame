<template>
  <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    props: {
      rowIndex: Number,
      cellIndex: Number,
    },
    computed: {
      ...mapState({
        tableData: state => state.tableData,
        turn: state => state.turn,
        cellData(state) {
          return state.tableData[this.rowIndex][this.cellIndex];
        },
      }),
    },
  }
</script>