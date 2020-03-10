<template>
  <div class="table-container" :class="[{'table-border' : border}]">
    <table>
      <thead>
        <tr>
          <td v-for="(item, index) in header">
            {{ item }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData">
          <td v-for="(subitem, subindex) in item">
            {{ subitem }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch} from 'vue-property-decorator';

  @Component({
    name: `MyTable.vue`,
    mounted() {

    }
  })
  export default class MyTable extends Vue {
    @Prop() header: Array<String>;
    @Prop() tableData: [];
    @Prop() border: boolean;

  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .table-container {

  }

  .table-border {
    border: 1px solid #ccc;
    tr, td {
      border: 1px solid #ccc;
    }
  }
</style>