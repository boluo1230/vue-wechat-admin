<template>
    <div id="app">
        <el-col :span="24">
            <div class="app-search-bg">
                <div class="block">
                    <el-date-picker v-model="choiceData" type="datetimerange" placeholder="选择时间范围">
                    </el-date-picker>
                    <el-button type="primary" icon="search">查询</el-button>
                </div>
            </div>
        </el-col>
        <el-col :span="14">
            <div id="main"></div>
        </el-col>
        <el-col :span="10">
            <div style="margin-top: 190px;">
                <template>
                    <el-table :data="tableData" :show-header="false">
                        <el-table-column prop="date" width="180">
                        </el-table-column>
                        <el-table-column prop="name" width="180">
                        </el-table-column>
                        <el-table-column prop="address">
                        </el-table-column>
                    </el-table>
                </template>
            </div>
        </el-col>
    </div>
</template>

<script>
export default {
    data() {
        return {
            choiceData: '',
            myChart: '',
            tableData: [{
                date: '店内活动',
                name: '100',
                address: '20%'
            }, {
                date: '金融活动',
                name: '100',
                address: '20%'
            }, {
                date: '首页焦点图',
                name: '100',
                address: '20%'
            }, {
                date: '登录焦点图',
                name: '100',
                address: '20%'
            }, {
                date: '登录焦点图',
                name: '100',
                address: '20%'
            }],
            option: {
                title: {
                    text: '用户点击数据',
                    x: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['店内活动', '金融活动', '首页焦点图', '登录焦点图', '销售顾问列表']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [
                            { value: 335, name: '店内活动' },
                            { value: 310, name: '金融活动' },
                            { value: 234, name: '首页焦点图' },
                            { value: 135, name: '登录焦点图' },
                            { value: 1548, name: '销售顾问列表' }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
        }
    },
    mounted() {
        this.myChart = this.$echarts.init(document.getElementById('main'))
        this.setOptionEcharts(this.option)
    },
    methods: {
        setOptionEcharts(option) {
            this.myChart.clear()
            this.myChart.hideLoading()
            this.myChart.setOption(option)
            window.onresize = this.myChart.resize
        },
    }
}
</script>

<style>
#main {
    width: 600px;
    height: 480px;
    margin-top: 20px;
}
</style>

