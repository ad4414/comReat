import dayjs from "dayjs";
import React from "react";
const alarmSettingColumn = [
  {
    title: "指标名称",
    dataIndex: "name",
    ellipsis: true,
  },
  {
    title: "描述",
    dataIndex: "describe",
    ellipsis: true,
  },
  {
    title: "最近更新时间",
    dataIndex: "time",
    ellipsis: true,
    render: (text, record, index) => {
      return dayjs(text).format("YYYY-MM-DD HH:mm:ss");
    },
  },
];

const data = [
  {
    id: 1,
    name: "CPU",
    describe: "记录CPU资源变化",
    alarmNumber: 2,
    time: 1504256308459,
    systemAlarmConfigTOList: [
      {
        id: 1,
        alarmExplan: "CPU占用率过高",
        alarmThreshold: 80,
        alarmThresholdName: "80%",
        alarmLevel: 4,
        alarmLevelName: "警告",
        alarmFrequency: 5,
        alarmFrequencyName: "5秒",
        alarmCondition: 5,
        alarmConditionName: "连续检测到5次，且不重复触发",
        alarmType: "high",
        otherAlarmThreshold: 60,
      },
      {
        id: 2,
        alarmExplan: "CPU占用率恢复到正常值",
        alarmThreshold: 60,
        alarmThresholdName: "60%",
        alarmLevel: 6,
        alarmLevelName: "信息",
        alarmFrequency: 5,
        alarmFrequencyName: "5秒",
        alarmCondition: 5,
        alarmConditionName: "连续检测到5次，且不重复触发",
        alarmType: "low",
        otherAlarmThreshold: 80,
      },
    ],
  },
  {
    id: 2,
    name: "内存",
    describe: "记录内存资源变化",
    alarmNumber: 2,
    time: 1504256308459,
    systemAlarmConfigTOList: [
      {
        id: 3,
        alarmExplan: "内存占用率过高",
        alarmThreshold: 80,
        alarmThresholdName: "80%",
        alarmLevel: 4,
        alarmLevelName: "警告",
        alarmFrequency: 5,
        alarmFrequencyName: "5秒",
        alarmCondition: 5,
        alarmConditionName: "连续检测到5次，且不重复触发",
        alarmType: "high",
        otherAlarmThreshold: 60,
      },
      {
        id: 4,
        alarmExplan: "内存占用率恢复到正常值",
        alarmThreshold: 60,
        alarmThresholdName: "60%",
        alarmLevel: 6,
        alarmLevelName: "信息",
        alarmFrequency: 5,
        alarmFrequencyName: "5秒",
        alarmCondition: 5,
        alarmConditionName: "连续检测到5次，且不重复触发",
        alarmType: "low",
        otherAlarmThreshold: 80,
      },
    ],
  },
  {
    id: 3,
    name: "磁盘",
    describe: "记录磁盘资源变化",
    alarmNumber: 2,
    time: 1504256308459,
    systemAlarmConfigTOList: [
      {
        id: 5,
        alarmExplan: "磁盘空间不足",
        alarmThreshold: 80,
        alarmThresholdName: "80%",
        alarmLevel: 4,
        alarmLevelName: "警告",
        alarmFrequency: 5,
        alarmFrequencyName: "5秒",
        alarmCondition: 5,
        alarmConditionName: "连续检测到5次，且不重复触发",
        alarmType: "high",
        otherAlarmThreshold: 60,
      },
      {
        id: 6,
        alarmExplan: "磁盘空间恢复到正常值",
        alarmThreshold: 60,
        alarmThresholdName: "60%",
        alarmLevel: 4,
        alarmLevelName: "警告",
        alarmFrequency: 5,
        alarmFrequencyName: "5秒",
        alarmCondition: 5,
        alarmConditionName: "连续检测到5次，且不重复触发",
        alarmType: "high",
        otherAlarmThreshold: 80,
      },
    ],
  },
  {
    id: 4,
    name: "LICENSE",
    describe: "平台许可证时间告警",
    alarmNumber: 1,
    time: 1504256308459,
    systemAlarmConfigTOList: [
      {
        id: 7,
        alarmExplan: "平台试用许可证，在X天后过期",
        alarmThreshold: 30,
        alarmThresholdName: "30天",
        alarmLevel: 3,
        alarmLevelName: "错误",
        alarmFrequency: null,
        alarmFrequencyName: null,
        alarmCondition: null,
        alarmConditionName: null,
        alarmType: "license",
        otherAlarmThreshold: null,
      },
    ],
  },
];
const expandedColumn =(operate)=> [
  {
    title: "告警说明",
    dataIndex: "alarmExplan",
    width: "200px",
    ellipsis: true,
  },
  {
    title: "阈值",
    dataIndex: "alarmThresholdName",
    ellipsis: true,
  },
  {
    title: "级别",
    dataIndex: "alarmLevelName",
    ellipsis: true,
  },
  {
    title: "检测频率",
    dataIndex: "alarmFrequencyName",
    ellipsis: true,
  },
  {
    title: "触发条件",
    dataIndex: "alarmConditionName",
    ellipsis: true,
  },
  {
    title: "操作",
    width: "100px",
    align: "center",
    render: (text, record) => (
        <span className="operation-btns">
          <a onClick={() => {
              operate("edit", record);
            }}
          >
            编辑
          </a>
        </span>
      ),
  }
];
const expandedColumn_LICENSE =(operate)=>{
    return (
        [
            {
              title: "告警说明",
              dataIndex: "alarmExplan",
              width: "200px",
              ellipsis: true,
            },
            {
              title: "剩余 X 天开始告警",
              dataIndex: "alarmThresholdName",
              ellipsis: true,
            },
            {
              title: "级别",
              dataIndex: "alarmLevelName",
              ellipsis: true,
          
            },
            {
              title: "操作",
              width: "100px",
              align: "center",
              render: (text, record) => (
                  <span className="operation-btns">
                    <a onClick={() => {
                        operate("LICENSE", record);
                      }}
                    >
                      编辑
                    </a>
                  </span>
                ),
            },
          ]
    )
} 

export { alarmSettingColumn, data, expandedColumn_LICENSE, expandedColumn };
