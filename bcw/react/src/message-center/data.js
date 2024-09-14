const scenesCodeArr= [
    {
      "scenesName": "通知",
      "num": null,
      "scenesDesc": "通知",
      "scenesCode": "notice",
      "dictCode": 901,
      "messageTypeList": null
    },
    {
      "scenesName": "告警",
      "num": null,
      "scenesDesc": "告警",
      "scenesCode": "alarm",
      "dictCode": 902,
      "messageTypeList": null
    },
    {
      "scenesName": "待办",
      "num": null,
      "scenesDesc": "待办",
      "scenesCode": "backlog",
      "dictCode": 903,
      "messageTypeList": null
    },
    {
      "scenesName": "其他",
      "num": null,
      "scenesDesc": "其他",
      "scenesCode": "other",
      "dictCode": 904,
      "messageTypeList": null
    }
  ]
   const dataSource= [
    {
      "id": 11,
      "scenesCode": "alarm",
      "name": "系统告警",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": [],
      "briefCodeList": [],
      "dictCodeList": ["SYS_LOG"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": [],
      "briefNameList": [],
      "level": 0,
      "levelTo": 4,
      "desc": "系统告警",
      "template": "[[Describe]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [2, 3, 4],
      "syslogList": [],
      "mailList": [],
      "enable": true,
      "isPreset": true
    },
    {
      "id": 12,
      "scenesCode": "alarm",
      "name": "登录告警",
      "subcategoryCodeList": ["LOGIN_LOG"],
      "moduleCodeList": [],
      "briefCodeList": [],
      "dictCodeList": ["LOGIN_LOG"],
      "subcategoryNameList": ["登录日志"],
      "moduleNameList": [],
      "briefNameList": [],
      "level": 0,
      "levelTo": 4,
      "desc": "登录告警",
      "template": "[[Describe]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [2, 3, 4],
      "syslogList": [],
      "mailList": [],
      "enable": true,
      "isPreset": true
    },
    {
      "id": 1001,
      "scenesCode": "alarm",
      "name": "CPU告警",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["CPU_USAGE_HIGH"],
      "dictCodeList": ["CPU_USAGE_HIGH"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["CPU占用率过高"],
      "level": 4,
      "levelTo": 4,
      "desc": "CPU占用率过高",
      "template": "cpu存储告警[[Value]],阈值[[Threshold]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Value",
          "name": "当前读数",
          "desc": null
        },
        {
          "code": "Threshold",
          "name": "当前读告警阈值",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1002,
      "scenesCode": "alarm",
      "name": "内存告警",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["MEM_USAGE_HIGH"],
      "dictCodeList": ["MEM_USAGE_HIGH"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["内存占用率过高"],
      "level": 4,
      "levelTo": 4,
      "desc": "内存占用率过高",
      "template": "内存告警[[Value]],阈值[[Threshold]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Value",
          "name": "当前读数",
          "desc": null
        },
        {
          "code": "Threshold",
          "name": "当前读告警阈值",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1003,
      "scenesCode": "alarm",
      "name": "磁盘告警",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["DISKSPACE_NOT_ENOUGH"],
      "dictCodeList": ["DISKSPACE_NOT_ENOUGH"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["磁盘空间不足"],
      "level": 4,
      "levelTo": 4,
      "desc": "磁盘空间不足",
      "template": "磁盘告警[[Value]],阈值[[Threshold]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Value",
          "name": "当前读数",
          "desc": null
        },
        {
          "code": "Threshold",
          "name": "当前读告警阈值",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1004,
      "scenesCode": "alarm",
      "name": "日志存储告警",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["LOGSPACE_NOT_ENOUGH"],
      "dictCodeList": ["LOGSPACE_NOT_ENOUGH"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["日志存储空间不足"],
      "level": 2,
      "levelTo": 2,
      "desc": "日志存储空间不足",
      "template": "日志存储告警[[Value]],阈值[[Threshold]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Value",
          "name": "当前读数",
          "desc": null
        },
        {
          "code": "Threshold",
          "name": "当前读告警阈值",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1005,
      "scenesCode": "alarm",
      "name": "备份存储告警",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["BACKUPSPACE_NOT_ENOUGH"],
      "dictCodeList": ["BACKUPSPACE_NOT_ENOUGH"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["备份存储空间不足"],
      "level": 2,
      "levelTo": 2,
      "desc": "备份存储空间不足",
      "template": "备份存储告警[[Value]],阈值[[Threshold]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Value",
          "name": "当前读数",
          "desc": null
        },
        {
          "code": "Threshold",
          "name": "当前读告警阈值",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1006,
      "scenesCode": "alarm",
      "name": "本地自动备份失败告警",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["AUTOMATIC_BACKUP_FAILED"],
      "dictCodeList": ["AUTOMATIC_BACKUP_FAILED"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["自动备份失败"],
      "level": 3,
      "levelTo": 3,
      "desc": "自动备份失败",
      "template": "系统备往[[DesAddress]]的自动备份任务失败，备份时间[[Time]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "DesAddress",
          "name": "备份目的地址",
          "desc": null
        },
        {
          "code": "Time",
          "name": "备份时间",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1101,
      "scenesCode": "notice",
      "name": "授权到期预警",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["TRIAL_LICENSE_EXPIRING_SOON"],
      "dictCodeList": ["TRIAL_LICENSE_EXPIRING_SOON"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["平台试用许可证，在X天后过期。"],
      "level": 3,
      "levelTo": 3,
      "desc": "平台试用许可证，在 X 天后过期。",
      "template": "授权即将于[[Time]]到期,为了不影响使用,请尽快重新授权",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Time",
          "name": "到期时间",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1102,
      "scenesCode": "notice",
      "name": "FTP服务器连接失败",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["FAIL_CONNECT_WITH_FTP"],
      "dictCodeList": ["FAIL_CONNECT_WITH_FTP"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["FTP服务器连接失败"],
      "level": 3,
      "levelTo": 3,
      "desc": "FTP服务器连接失败",
      "template": "系统于[[Time]]",
      "variables": [
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Time",
          "name": "连接时间",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1103,
      "scenesCode": "notice",
      "name": "账号到期预警",
      "subcategoryCodeList": ["LOGIN_LOG"],
      "moduleCodeList": ["USER_AUTH"],
      "briefCodeList": ["ACCOUNT_EXPIRING_SOON"],
      "dictCodeList": ["ACCOUNT_EXPIRING_SOON"],
      "subcategoryNameList": ["登录日志"],
      "moduleNameList": ["用户认证"],
      "briefNameList": ["账号即将到期"],
      "level": 6,
      "levelTo": 6,
      "desc": "账号到期预警",
      "template": "你的账号将在[[Time]]到期,为了不影响使用,请尽快更改有效期！",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Time",
          "name": "到期时间",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1104,
      "scenesCode": "notice",
      "name": "账号状态变更通知",
      "subcategoryCodeList": ["LOGIN_LOG"],
      "moduleCodeList": ["USER_AUTH"],
      "briefCodeList": ["ACCOUNT_STATE_CHANGE"],
      "dictCodeList": ["ACCOUNT_STATE_CHANGE"],
      "subcategoryNameList": ["登录日志"],
      "moduleNameList": ["用户认证"],
      "briefNameList": ["账号状态发生变更"],
      "level": 6,
      "levelTo": 6,
      "desc": "账号状态变更通知",
      "template": "你的账号状态于[[Time]]发生了变更,操作账号[[Account]],当前账号状态为[[Status]]",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Time",
          "name": "变更时间",
          "desc": null
        },
        {
          "code": "Account",
          "name": "操作账号",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1105,
      "scenesCode": "notice",
      "name": "密码重置通知",
      "subcategoryCodeList": ["LOGIN_LOG"],
      "moduleCodeList": ["USER_AUTH"],
      "briefCodeList": ["PASSWORD_RESETTING"],
      "dictCodeList": ["PASSWORD_RESETTING"],
      "subcategoryNameList": ["登录日志"],
      "moduleNameList": ["用户认证"],
      "briefNameList": ["密码已被重置"],
      "level": 6,
      "levelTo": 6,
      "desc": "密码重置通知",
      "template": "你的密码被账号[[Account]]于[[Time]]重置",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Time",
          "name": "重置时间",
          "desc": null
        },
        {
          "code": "Account",
          "name": "操作账号",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1106,
      "scenesCode": "notice",
      "name": "密码到期预警",
      "subcategoryCodeList": ["LOGIN_LOG"],
      "moduleCodeList": ["USER_AUTH"],
      "briefCodeList": ["PASSWORD_EXPIRING_SOON"],
      "dictCodeList": ["PASSWORD_EXPIRING_SOON"],
      "subcategoryNameList": ["登录日志"],
      "moduleNameList": ["用户认证"],
      "briefNameList": ["密码即将到期"],
      "level": 6,
      "levelTo": 6,
      "desc": "密码到期预警",
      "template": "你的密码将在[[Time]]到期,为了不影响使用,请尽快修改密码",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Time",
          "name": "到期时间",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1107,
      "scenesCode": "notice",
      "name": "多IP登录通知",
      "subcategoryCodeList": ["LOGIN_LOG"],
      "moduleCodeList": ["USER_AUTH"],
      "briefCodeList": ["LOGIN_MULTIPLE_IPS"],
      "dictCodeList": ["LOGIN_MULTIPLE_IPS"],
      "subcategoryNameList": ["登录日志"],
      "moduleNameList": ["用户认证"],
      "briefNameList": ["用户在多IP登录"],
      "level": 4,
      "levelTo": 4,
      "desc": "用户在多IP登录",
      "template": "账号[[Account]]在[[Time]]于另一个IP地址[[IPAddress]]登录,如果不是本人登录,请尽快修改密码",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Account",
          "name": "操作账号",
          "desc": null
        },
        {
          "code": "Time",
          "name": "登录时间",
          "desc": null
        },
        {
          "code": "IPAddress",
          "name": "地址登录",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1108,
      "scenesCode": "notice",
      "name": "登录失败通知",
      "subcategoryCodeList": ["LOGIN_LOG"],
      "moduleCodeList": ["USER_AUTH"],
      "briefCodeList": ["LOGIN_FAILED"],
      "dictCodeList": ["LOGIN_FAILED"],
      "subcategoryNameList": ["登录日志"],
      "moduleNameList": ["用户认证"],
      "briefNameList": ["用户登录失败"],
      "level": 4,
      "levelTo": 4,
      "desc": "用户登录失败",
      "template": "账号[[Account]]在[[Time]]于[[IPAddress]]登录失败",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Account",
          "name": "操作账号",
          "desc": null
        },
        {
          "code": "Time",
          "name": "登录时间",
          "desc": null
        },
        {
          "code": "IPAddress",
          "name": "地址登录",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": true
    },
    {
      "id": 1109,
      "scenesCode": "notice",
      "name": "FTP服务器连接失败-副本",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["FAIL_CONNECT_WITH_FTP"],
      "dictCodeList": ["FAIL_CONNECT_WITH_FTP"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["FTP服务器连接失败"],
      "level": 3,
      "levelTo": 3,
      "desc": "FTP服务器连接失败",
      "template": "系统于[[Time]]",
      "variables": [
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Time",
          "name": "连接时间",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": false
    },
    {
      "id": 1113,
      "scenesCode": "notice",
      "name": "授权到期预警-副本2",
      "subcategoryCodeList": ["SYS_LOG"],
      "moduleCodeList": ["SYS_MGR"],
      "briefCodeList": ["TRIAL_LICENSE_EXPIRING_SOON"],
      "dictCodeList": ["TRIAL_LICENSE_EXPIRING_SOON"],
      "subcategoryNameList": ["系统日志"],
      "moduleNameList": ["系统管理"],
      "briefNameList": ["平台试用许可证，在X天后过期。"],
      "level": 2,
      "levelTo": 3,
      "desc": "平台试用许可证，在 X 天后过期。",
      "template": "授权即将于[[Time]]到期,为了不影响使用,请尽快重新授权",
      "variables": [
        {
          "code": "Type",
          "name": "消息归类",
          "desc": null
        },
        {
          "code": "Module",
          "name": "消息模块名称",
          "desc": null
        },
        {
          "code": "Cutline",
          "name": "消息说明",
          "desc": null
        },
        {
          "code": "Level",
          "name": "消息级别",
          "desc": null
        },
        {
          "code": "Describe",
          "name": "预置消息内容",
          "desc": null
        },
        {
          "code": "Time",
          "name": "到期时间",
          "desc": null
        }
      ],
      "sendType": "NOTIFY",
      "roleList": [4],
      "syslogList": [],
      "mailList": [],
      "enable": false,
      "isPreset": false
    }
  ]
  const levelArr= [
    {
      "id": 3001499,
      "dictCode": "0",
      "dictValue": "紧急",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "紧急"
    },
    {
      "id": 3001501,
      "dictCode": "1",
      "dictValue": "警报",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "警报"
    },
    {
      "id": 3001503,
      "dictCode": "2",
      "dictValue": "严重",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "严重"
    },
    {
      "id": 3001505,
      "dictCode": "3",
      "dictValue": "错误",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "错误"
    },
    {
      "id": 3001507,
      "dictCode": "4",
      "dictValue": "警告",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "警告"
    },
    {
      "id": 3001509,
      "dictCode": "5",
      "dictValue": "通知",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "通知"
    },
    {
      "id": 3001511,
      "dictCode": "6",
      "dictValue": "信息",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "信息"
    },
    {
      "id": 3001513,
      "dictCode": "7",
      "dictValue": "调试",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "调试"
    }
  ]
 const  maiListArr= [
    {
        "id": 1735176668783210497,
        "groupName": "dasdas",
        "description": "dassd",
        "recipients": "qqq@sad.com"
    },
    {
        "id": 1735176763159244801,
        "groupName": "dawad",
        "description": "wdad",
        "recipients": "adda@qq.com"
    }
]
const sendTypeArr= [
    {
      "id": 3001499,
      "dictCode": "0",
      "dictValue": "紧急",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "紧急"
    },
    {
      "id": 3001501,
      "dictCode": "1",
      "dictValue": "警报",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "警报"
    },
    {
      "id": 3001503,
      "dictCode": "2",
      "dictValue": "严重",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "严重"
    },
    {
      "id": 3001505,
      "dictCode": "3",
      "dictValue": "错误",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "错误"
    },
    {
      "id": 3001507,
      "dictCode": "4",
      "dictValue": "警告",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "警告"
    },
    {
      "id": 3001509,
      "dictCode": "5",
      "dictValue": "通知",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "通知"
    },
    {
      "id": 3001511,
      "dictCode": "6",
      "dictValue": "信息",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "信息"
    },
    {
      "id": 3001513,
      "dictCode": "7",
      "dictValue": "调试",
      "dictValueEn": null,
      "comment": null,
      "dictTypeId": null,
      "dictTypeCode": "30023",
      "dictTypeName": "告警级别",
      "dictTypeNameEn": null,
      "dictTypeComment": null,
      "i18nDictTypeName": "告警级别",
      "i18nDictValue": "调试"
    }
  ]
 const  dictData= [
        {
            "id": 11,
            "parentCode": "DEV_LOG",
            "code": "SYS_LOG",
            "name": "系统日志",
            "type": "SUBCATEGORY",
            "children": [
                {
                    "id": 101,
                    "parentCode": "SYS_LOG",
                    "code": "SYS_MGR",
                    "name": "系统管理",
                    "type": "MODULE",
                    "children": [
                        {
                            "id": 10101,
                            "parentCode": "SYS_MGR",
                            "code": "LICENSE_UNFOUND",
                            "name": "没有找到平台许可证",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10102,
                            "parentCode": "SYS_MGR",
                            "code": "INSTALL_LICENSE_SUCCESS",
                            "name": "安装许可证成功",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10103,
                            "parentCode": "SYS_MGR",
                            "code": "TRIAL_LICENSE_EXPIRING_SOOM",
                            "name": "平台试用许可证，在X天后过期。",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10104,
                            "parentCode": "SYS_MGR",
                            "code": "CPU_USAGE_HIGH",
                            "name": "CPU占用率过高",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10105,
                            "parentCode": "SYS_MGR",
                            "code": "CPU_USAGE_RESUME",
                            "name": "CPU占用率恢复到正常值",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10106,
                            "parentCode": "SYS_MGR",
                            "code": "MEM_USAGE_HIGH",
                            "name": "内存占用率过高",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10107,
                            "parentCode": "SYS_MGR",
                            "code": "MEM_USAGE_RESUME",
                            "name": "内存占用率恢复到正常值",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10108,
                            "parentCode": "SYS_MGR",
                            "code": "DISKSPACE_NOT_ENOUGH",
                            "name": "磁盘空间不足",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10109,
                            "parentCode": "SYS_MGR",
                            "code": "DISK_USAGE_RESUME",
                            "name": "磁盘空间恢复到正常值",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10110,
                            "parentCode": "SYS_MGR",
                            "code": "LOGSPACE_NOT_ENOUGH",
                            "name": "日志存储空间不足",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10111,
                            "parentCode": "SYS_MGR",
                            "code": "BACKUPSPACE_NOT_ENOUGH",
                            "name": "备份存储空间不足",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10112,
                            "parentCode": "SYS_MGR",
                            "code": "AUTOMATIC_BACKUP_FAILED",
                            "name": "自动备份失败",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10113,
                            "parentCode": "SYS_MGR",
                            "code": "FAIL_CONNECT_WITH_FTP",
                            "name": "FTP服务器连接失败",
                            "type": "BRIEF",
                            "children": null
                        }
                    ]
                },
                {
                    "id": 102,
                    "parentCode": "SYS_LOG",
                    "code": "HA_MGR",
                    "name": "高可用管理",
                    "type": "MODULE",
                    "children": [
                        {
                            "id": 10201,
                            "parentCode": "HA_MGR",
                            "code": "HA_ON",
                            "name": "HA高可用开启",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10202,
                            "parentCode": "HA_MGR",
                            "code": "HA_OFF",
                            "name": "HA高可用关闭",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10203,
                            "parentCode": "HA_MGR",
                            "code": "DATA_SYNC_ON",
                            "name": "数据同步开启",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10204,
                            "parentCode": "HA_MGR",
                            "code": "DATA_SYNC_OFF",
                            "name": "数据同步关闭",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10205,
                            "parentCode": "HA_MGR",
                            "code": "HA_STATE_CHANGE",
                            "name": "HA状态发生变化",
                            "type": "BRIEF",
                            "children": null
                        }
                    ]
                },
                {
                    "id": 103,
                    "parentCode": "SYS_LOG",
                    "code": "MSG_MGR",
                    "name": "消息管理",
                    "type": "MODULE",
                    "children": [
                        {
                            "id": 10301,
                            "parentCode": "MSG_MGR",
                            "code": "MESSAGE_SEND_TO_EMAIL_SUCCESS",
                            "name": "外发消息到邮件成功",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10302,
                            "parentCode": "MSG_MGR",
                            "code": "MESSAGE_SEND_TO_EMAIL__FAIL",
                            "name": "外发消息到邮件失败",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10303,
                            "parentCode": "MSG_MGR",
                            "code": "MESSAGE_SEND_TO_SYSLOG_SUCCESS",
                            "name": "外发消息到指定的SYSLOG服务器成功",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10304,
                            "parentCode": "MSG_MGR",
                            "code": "MESSAGE_SEND_TO__SYSLOG_FAIL",
                            "name": "外发消息到指定的SYSLOG服务器失败",
                            "type": "BRIEF",
                            "children": null
                        }
                    ]
                }
            ]
        },
        {
            "id": 12,
            "parentCode": "DEV_LOG",
            "code": "LOGIN_LOG",
            "name": "登录日志",
            "type": "SUBCATEGORY",
            "children": [
                {
                    "id": 104,
                    "parentCode": "LOGIN_LOG",
                    "code": "USER_AUTH",
                    "name": "用户认证",
                    "type": "MODULE",
                    "children": [
                        {
                            "id": 10401,
                            "parentCode": "USER_AUTH",
                            "code": "LOGIN_FAILED",
                            "name": "用户登录失败",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10402,
                            "parentCode": "USER_AUTH",
                            "code": "LOGIN",
                            "name": "用户登录成功",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10403,
                            "parentCode": "USER_AUTH",
                            "code": "LOGIN_MULTIPLE_IPS",
                            "name": "用户在多IP登录",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10404,
                            "parentCode": "USER_AUTH",
                            "code": "ACCOUNT_EXPIRING_SOOM",
                            "name": "账号即将到期",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10405,
                            "parentCode": "USER_AUTH",
                            "code": "ACCOUNT_STATE_CHANGE",
                            "name": "账号状态发生变更",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10406,
                            "parentCode": "USER_AUTH",
                            "code": "PASSWORD_EXPIRING_SOOM",
                            "name": "密码即将到期",
                            "type": "BRIEF",
                            "children": null
                        },
                        {
                            "id": 10407,
                            "parentCode": "USER_AUTH",
                            "code": "PASSWORD_RESETTING",
                            "name": "密码已被重置",
                            "type": "BRIEF",
                            "children": null
                        }
                    ]
                }
            ]
        },
        {
            "id": 13,
            "parentCode": "DEV_LOG",
            "code": "OPT_LOG",
            "name": "操作日志",
            "type": "SUBCATEGORY",
            "children": [
                {
                    "id": 105,
                    "parentCode": "OPT_LOG",
                    "code": "USER_CONF",
                    "name": "用户配置",
                    "type": "MODULE",
                    "children": [
                        {
                            "id": 10501,
                            "parentCode": "USER_CONF",
                            "code": "USRADD",
                            "name": "添加用户成功",
                            "type": "BRIEF",
                            "children": null
                        }
                    ]
                }
            ]
        }
    ]
  const   roleList= [
        {
            "id": 1,
            "roleName": "超级管理员",
            "closeRole": null
        },
        {
            "id": 2,
            "roleName": "安全管理员",
            "closeRole": false
        },
        {
            "id": 3,
            "roleName": "审计管理员",
            "closeRole": null
        },
        {
            "id": 4,
            "roleName": "系统管理员",
            "closeRole": null
        }
    ]
   const  messageList = [
      {
          "id":1,
          "content": "我是系统告警消息20220216",
          "typeName": "系统告警消息",
          "typeId": 13,
          "scenes": null,
          "isRead": false,
          "createTime": 1644996375964
      },
      {
          "id":2,
          "content": "我是系统告警消息20220216",
          "typeName": "系统告警消息",
          "typeId": 13,
          "scenes": null,
          "isRead": false,
          "createTime": 1644996375964
      },
      {
          "id":3,
          "content": "我是系统告警消息20220216",
          "typeName": "系统告警消息",
          "typeId": 13,
          "scenes": null,
          "isRead": false,
          "createTime": 1644996375964
      },
      {
          "id":4,
          "content": "我是系统告警消息20220216",
          "typeName": "系统告警消息",
          "typeId": 13,
          "scenes": null,
          "isRead": false,
          "createTime": 1644996375964
      },
      {
          "id":5,
          "content": "我是系统告警消息20220216",
          "typeName": "系统告警消息",
          "typeId": 13,
          "scenes": null,
          "isRead": false,
          "createTime": 1644996375964
      },
      {
          "id":6,
          "content": "防火墙产线自定义消息20220216",
          "typeName": "防火墙产线自定义消息",
          "typeId": 21,
          "scenes": null,
          "isRead": false,
          "createTime": 1644997175400
      },
      {
          "id":7,
          "content": "资产产线自定义消息20220216",
          "typeName": "资产产线自定义消息",
          "typeId": 20,
          "scenes": null,
          "isRead": true,
          "createTime": 1644997117375
      },
      {
          "id":8,
          "content": "待处理告警信息20220216",
          "typeName": "待处理告警信息",
          "typeId": 19,
          "scenes": null,
          "isRead": true,
          "createTime": 1644997074802
      },
      {
          "id":9,
          "content": "待审核账号20220216",
          "typeName": "待审核账号",
          "typeId": 18,
          "scenes": null,
          "isRead": true,
          "createTime": 1644997013436
      },
      {
          "id":10,
          "content": "多IP登录通知20220216",
          "typeName": "多IP登录通知",
          "typeId": 17,
          "scenes": null,
          "isRead": true,
          "createTime": 1644996971595
      },
      {
          "id":11,
          "content": "登录失败通知20220216",
          "typeName": "登录失败通知",
          "typeId": 16,
          "scenes": null,
          "isRead": true,
          "createTime": 1644996917578
      },
      {
          "id":12,
          "content": "CPU告警20220216",
          "typeName": "CPU告警",
          "typeId": 15,
          "scenes": null,
          "isRead": true,
          "createTime": 1644996877174
      },
      {
          "id":13,
          "content": "日志存储告警20220216",
          "typeName": "日志存储告警",
          "typeId": 14,
          "scenes": null,
          "isRead": true,
          "createTime": 1644996795202
      },
      {
          "id":14,
          "content": "我是系统告警消息20220216",
          "typeName": "系统告警消息",
          "typeId": 13,
          "scenes": null,
          "isRead": true,
          "createTime": 1644996375964
      },{
          "id":15,
          "content": "我是系统告警消息20220216",
          "typeName": "系统告警消息",
          "typeId": 13,
          "scenes": null,
          "isRead": true,
          "createTime": 1644996375964
      },{
          "id":16,
          "content": "我是系统告警消息20220216",
          "typeName": "系统告警消息",
          "typeId": 13,
          "scenes": null,
          "isRead": true,
          "createTime": 1644996375964
      }
          
      
  ]
  export { scenesCodeArr ,dataSource,levelArr,maiListArr ,sendTypeArr,dictData,roleList,messageList}