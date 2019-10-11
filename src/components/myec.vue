<template>
  <div style="width:100%;height:100%;" class="myec">
    <div v-if="no_data" class="nodata">
      <span style="fontSize:15px">暂无数据</span>
    </div>
    <div v-else :id="echarts_num" style="width:100%;height:100%"></div>
  </div>
</template>

<script>
export default {
  name: "myec",
  data() {
    return {
      echarts_num: null,
      myecharts: null,
      no_data: false,
      dd: [],
      name: "",
      echarts_dom: null
    };
  },

  methods: {
    randomWord() {
      var str = "",
        range = 10,
        arr = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z"
        ];

      // 随机产生
      //range = Math.round(Math.random() * 4) + 5;
      for (var i = 0; i < range; i++) {
        var pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
      }
      return str;
    },
    make_pie2_kong(result, c) {
      this.myecharts = this.$echarts.init(
        document.getElementById(this.echarts_num)
      );
      let dd = result * 1000/100;
      c.push('rgba(0,0,0,0)')
      let option = {
        series: [
          {
            name: "背景",
            type: "pie",
            radius: ["60%", "70%"],
            silent: true,
            hoverAnimation: false,
            color: "#F1F4F7",
            label: {
              normal: {
                show: true,
                position: "center",
                formatter: a => {
                  return a.value;
                },
                textStyle: {
                  fontSize: 14,
                  fontFamily: "Microsoft YaHei",
                  color: ["#000"]
                }
              }
            },
            labelLine: {
              show: false
            },
            data: [{ value: dd }]
          },
          {
            name: "概率",
            type: "pie",
            silent: true,
            radius: ["60%", "70%"],
            hoverAnimation: false,
            color: c,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: dd, name: "概率" },
              { value: 10 - dd, name: "反概率" }
            ]
          }
        ]
      };

      this.myecharts.setOption(option);
    }
  },

  created() {
    this.echarts_num = this.randomWord();
  }
};
</script>

<style type="scss" scpoed>
.nodata {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

