<template>
  <div class="datePicker-container">
    <MyInput placeholder="你在说什么" v-model="realDateSelfFormat" readonly="true" @click="triggerShow"></MyInput>
    <div class="datePicker-wrapper" v-show="isShow">
      <div class="datePicker-header">
        <div style="float: left; cursor:pointer" @click="getPreMonth">&lt;</div>
        <div class="yearandmonth">{{ showDateSelf.getFullYear() + ' / ' + (showDateSelf.getMonth() + 1) }}</div>
        <div style="float: right; cursor:pointer" @click="getNextMonth">&gt;</div>
      </div>
      <table class="datePicker-body date-table">
        <tr>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
          <th>日</th>
        </tr>
        <tr v-for="index1 in 6">
          <template v-for="(item, index) in dateArr">
            <td v-if="index >= (index1 - 1) * 7 && index < index1 * 7"
                :class="[{'not-current' : typeof item.sort == 'string'},{'active': (realDateSelf.getDate() - 1) === item.sort && realDateSelf.getTime() === showDateSelf.getTime()}]"
                @click="selectDate(item.date)"
            >{{ item.date.getDate() }}</td>
          </template>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Model, Watch} from 'vue-property-decorator';

  interface dateItem {
    sort: Number,
    date: Date
  }

  @Component({
    name: `MyDatePicker.vue`,
    mounted() {
      this.getMonthDay();
    }
  })
  export default class MyDatePicker extends Vue {
    @Model('change')
    currentDate: Date; // 绑定的时间

    dateArr: Array<dateItem> = [];
    isShow: boolean = false;
    showDateSelf: Date = new Date(this.currentDate); // 展示的切换时间
    get realDateSelf() {
      return (this.currentDate && new Date(this.currentDate)) || new Date();
    }
    set realDateSelf(newValue) {
      this.showDateSelf = newValue;
      this.emitChange(newValue);
    }
    get realDateSelfFormat() {
      return this.realDateSelf.getFullYear() + '-' + (this.realDateSelf.getMonth() + 1) + '-' + this.realDateSelf.getDate();
    }

    triggerShow() {
      this.getMonthDay();
      this.isShow = !this.isShow;
    }
    getPreMonth() {
      let temp = this.showDateSelf;
      this.showDateSelf = new Date(temp.setMonth(temp.getMonth() - 1));
      this.getMonthDay();
    }
    getNextMonth() {
      let temp = this.showDateSelf;
      this.showDateSelf = new Date(temp.setMonth(temp.getMonth() + 1));
      this.getMonthDay();
    }
    getMonthDay() {
      // 获取当前日期
      let date = new Date(this.showDateSelf);
      // 当前月的最后一天
      date.setMonth(date.getMonth() + 1);
      date.setDate(0);
      let currentMonthLastDate = date;
      let dateLen = currentMonthLastDate.getDate();
      // 获取当前月第一天的信息
      date.setDate(1);
      let currentMonthFirstDay = date;
      // 获取上个月最后一天的信息
      date.setDate(0);
      let lastMonthLastDay = date;
      // 获取上个月需要弥补的日期
      let resultArr = [];
      const oneDayTime = 1000 * 60 * 60 * 24
      let lastMonthDay = currentMonthFirstDay.getDay() === 0 ? 7 : currentMonthFirstDay.getDay();
      for(let i = 0; i < lastMonthDay; i++) {
        resultArr.unshift({
          sort: String(-i - 1),
          date: lastMonthLastDay,
        })
        lastMonthLastDay = new Date(lastMonthLastDay.getTime() - oneDayTime);
      }
      // 当月的数据
      for(let i = 0; i < dateLen; i++) {
        // 获取后一天
        let nextDate = new Date(currentMonthFirstDay.getTime() + oneDayTime);
        resultArr.push({
          sort: i,
          date: nextDate,
        })
        currentMonthFirstDay = nextDate;
      }
      // 下个月的数据
      let nextMonthDay = 42 - dateLen - lastMonthDay;
      for(let i = 0; i < nextMonthDay; i++) {
        // 获取后一天
        let nextDate = new Date(currentMonthFirstDay.getTime() + oneDayTime);
        resultArr.push({
          sort: '+' + (i+1),
          date: nextDate,
        })
        currentMonthFirstDay = nextDate;
      }
      this.dateArr = resultArr;
    }
    selectDate(value) {
      this.isShow = false;
      this.realDateSelf = value;
    }

    @Emit('change')
    emitChange(newValue: Date): void {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .datePicker-container {
    position: relative;
    .datePicker-wrapper {
      position: absolute;
      top: 50px;
      width: 210px;
      padding: 10px;
      border: 1px solid #ccc;
      background: #fff;
      z-index: 99;
      .datePicker-header {
        text-align: center;
        div {
          display: inline-block;
        }
      }
      .datePicker-body {
        border-collapse: collapse;
        th, td {
          width: 30px;
          height: 30px;
          line-height: 30px;
          box-sizing: border-box;
          border: 1px solid #eee;
          text-align: center;
          cursor: pointer;
        }
        .not-current {
          background: #eee;
        }
        .active {
          background: skyblue;
          color: white;
        }
      }
    }
  }
</style>