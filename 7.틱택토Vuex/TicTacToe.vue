<template>
  <div>
    <div>{{turnMessage}}</div>
    <table-component>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{cellData}}</td>
      </tr>
    </table-component>
    <div v-if="winner">{{winner}}님의 승리!</div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex';
  import store, { CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER } from './store';
  import TableComponent from './TableComponent';

  export default {
    store,
    components: {
      TableComponent
    },
    computed: {
      ...mapState(['turn', 'winner', 'tableData']),
      ...mapGetters(['turnMessage']),
    },
    methods: {
      onClickTd(rowIndex, cellIndex) {
        if (this.cellData) return;

        this.$store.commit(CLICK_CELL, { row: rowIndex, cell: cellIndex });

        // 가로, 세로, 대각선이 삼목이 됐는지 체크
        let win = false;
        if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
          win = true;
        }
        if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
          win = true;
        }
        if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
          win = true;
        }

        if (win) { // 이긴 경우: 3줄 달성
          this.$store.commit(SET_WINNER, this.turn);
          this.$store.commit(RESET_GAME);
        } else { // 무승부
          let all = true; // all이 true면 무승부라는 뜻
          this.tableData.forEach((row) => { // 무승부 검사
            row.forEach((cell) => {
              if (!cell) {
                all = false;
              }
            });
          });
          if (all) { // 무승부
            this.$store.commit(NO_WINNER);
            this.$store.commit(RESET_GAME);
          } else {
            this.$store.commit(CHANGE_TURN);
          }
        }
      }
    }
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