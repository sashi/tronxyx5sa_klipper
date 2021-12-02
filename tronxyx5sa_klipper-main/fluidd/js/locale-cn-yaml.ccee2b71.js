(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["locale-cn-yaml"],{bf0b:function(e,t){e.exports={app:{bedmesh:{label:{flat_surface:"显示参考平面",mesh_matrix:"网格矩阵",probed_matrix:"探测点矩阵",profile_name:"配置文件名称",remove_profile:"删除 %{name} 配置文件",scale:"显示偏差值",wireframe:"显示网格线"},msg:{hint:"If saving as something other than %{name}, you can choose to also remove the %{name} profile",not_found:"网床信息不存在。",not_loaded:"没有加载"},tooltip:{calibrate:"开始校准，该校准信息会默认保存为'defalut'",delete:"删除配置，这将重新启动打印机",load:"加载配置",save:"将校准的配置提交给printer.cfg。这将重新启动您的打印机"}},chart:{label:{current:"当前",item:"项目",power:"电源",target:"目标"},tooltip:{help:"按住Shift键可缩放。<br />单击一个项目可在图形中进行切换。<br/>点击Power即可在图形中进行切换。"}},console:{label:{hide_temp_waits:"Hide temp waits"},placeholder:{command:"按'tab'自动补全命令，按'上下'键获取历史命令，输入'help' 获取命令帮助"}},endpoint:{error:{cant_connect:"出了点问题，fluidd无法连接到目的地址。你确定这是正确的地址？",cors_error:"被CORS政策阻止",cors_note:'这可能意味着您需要修改moonraker配置。请参阅有关多打印机设置的<a href=\\"%{url}\\" target=\\"_blank\\">文档</a>'},hint:{add_printer:"例如：http://fluiddpi.local"},msg:{trouble:'遇到麻烦？<a href="%{url}" target="_blank">在此处</a> 查看更多信息。'},tooltip:{endpoint_examples:"输入您的API URL。<br />例如：<br/><blockquote>http://fluidd.local, http://192.168.1.150</blockquote>"}},endstop:{label:{open:"断开",triggered:"触发"},msg:{subtitle:"使用“刷新”按钮更新Endstop状态。"}},file_system:{filters:{label:{print_start_time:"过滤已打印",print_start_time_desc:"过滤掉已经打印的项目"}},label:{dir_name:"目录名称",disk_usage:"磁盘使用率",downloaded:"下载完成",file_name:"文件名",transfer_rate:"传输速率",uploaded:"上传完成"},msg:{confirm:"确定吗？这将删除其中的所有文件和文件夹。",not_found:"文件未找到",processing:"处理中..."},overlay:{label:"<strong>拖动</strong> 一个文件到这里"},title:{add_dir:"添加目录",add_file:"添加文件",download_file:"下载文件",rename_dir:"重命名目录",rename_file:"重命名文件",upload_file:"上传文件"},tooltip:{disabled:"任务在连接klippy之前被禁止",low_on_space:"磁盘空间不足"}},general:{btn:{add:"添加",add_dir:"添加目录",add_file:"添加文件",add_printer:"添加打印机",adjust_layout:"调整仪表板布局",all:"全部",calibrate:"校准",cancel:"取消",clear_profile:"清除配置文件",close:"关闭",config_reference:"配置参考",download:"下载",edit:"编辑",extrude:"挤出",load_all:"全部加载",pause:"暂停",preheat:"预热",quad_gantry_level:"龙门架调平",reboot:"重启",remove:"删除",remove_all:"全部删除",rename:"重命名",reprint:"重新打印",reset_file:"重置文件",reset_layout:"重置布局",restart_firmware:"重启Firmware",restart_service_klipper:"重启Klipper",restart_service_moonraker:"重启Moonraker",restart_service_webcamd:"重启Webcam",resume:"恢复",retract:"缩回",save:"保存",save_as:"另存为",save_restart:"保存并重启",shutdown:"关闭",socket_refresh:"强制刷新",upload:"上传",upload_print:"上传并打印",view:"视图"},error:{app_setup_link:'Fluidd setup requirements can be found <a target="_blank" href="%{url}">here.</a>',app_warnings_found:"找到％{appName}条警告。",components_config:'可以在<a target="_blank" href="%{url}">此处</a>找到Moonraker插件配置。',failed_components:"Moonraker的插件失败，请检查您的日志，更新您的配置并重新启动moonraker。"},label:{accel_to_decel:"加速到减速",acceleration:"加速",add_camera:"添加摄像头",add_preset:"添加预设",api_url:"API URL",confirm:"确认",edit_camera:"编辑摄像头",edit_preset:"编辑预设",extrude_length:"挤出长度",extrude_speed:"挤出速度",flow:"流量",free:"释放",high:"高",host:"主机",layout:"层",longest_job:"最长的任务",low:"低",name:"名称",off:"关闭",power:"电源",printers:"打印机",requested_speed:"请求的速度",save_as:"另存为",services:"服务",speed:"速度",sqv:"角速度",total_filament:"总消耗耗材",total_filament_avg:"平均消耗耗材",total_jobs:"所有打印任务",total_print_time:"合计打印时间",total_print_time_avg:"平均打印时间",total_time:"合计时间",total_time_avg:"平均时间",used:"已使用",variance:"偏差值",velocity:"速度",z_offset:"Z偏移"},simple_form:{error:{invalid_url:"无效的URL",max:"最大 %{max}",min:"最小 %{min}",min_or_0:"最小 %{min} 至 0",required:"必填"},msg:{confirm:"确定吗？",confirm_reboot_host:"确定吗？这将重启您的系统。",confirm_shutdown_host:"确定吗？这将关闭您的系统。"}},table:{header:{actions:"动作",end_time:"结束时间",estimated_time:"估计时间",filament:"耗材长度",filament_used:"使用长度",first_layer_bed_temp:"首层热床温度",first_layer_extr_temp:"首层挤出温度",first_layer_height:"首层高度",height:"高度",last_printed:"上次打印时间",layer_height:"层高度",modified:"修改时间",name:"名称",print_duration:"打印时间",size:"大小",slicer:"切片",slicer_version:"切片版本",start_time:"开始时间",status:"状态",total_duration:"总时长"}},title:{add_printer:"添加打印机",bedmesh:"网床",bedmesh_controls:"网床控制",camera:"摄像头",config_files:"配置文件",configure:"配置",console:"控制台",endstops:"Endstops",fans_outputs:"风扇和输出",history:"任务历史",home:"仪表板",jobs:"任务",limits:"打印机限制",macros:"宏",runout_sensors:"Runout传感器",settings:"设置",stats:"打印状态",status:"状态",system_control:"系统控制",temperature:"温度",tool:"工具",tune:"调整"},tooltip:{estop:"紧急停止"}},history:{msg:{confirm:"确定吗？这将清除所有历史记录和打印机统计信息"}},printer:{state:{busy:"忙",complete:"完成",idle:"空闲",loading:"加载中",paused:"已暂停",printing:"打印中",ready:"就绪",standby:"待机"},status:{duration:"时长",duration_total:"合计时间",time_left:"估计剩余时间",used_filament:"已消耗耗材"}},setting:{btn:{add_camera:"添加摄像头",add_thermal_preset:"添加预设",reset:"重置",select_theme:"选择主题"},camera_type_options:{mjpegadaptive:"MJpegAdaptive",mjpegstream:"MJpegStream",video:"IpCamera"},label:{all_off:"全部关闭",all_on:"全部打开",camera_fillspace:"填充摄像头",camera_fillspace_help:"按照窗口大小填充摄像头画面",camera_flip_x:"水平翻转",camera_flip_y:"垂直翻转",camera_stream_type:"视频流类型",camera_url:"摄像头地址",dark_mode:"黑暗模式",default_extrude_length:"默认挤出长度",default_extrude_speed:"默认挤出速度",default_toolhead_move_length:"默认打印头移动距离",default_toolhead_xy_speed:"默认打印头XY轴速度",default_toolhead_z_speed:"默认打印头Z轴速度",enable:"启用",enable_notifications:"更新提示",fps_target:"FPS",gcode_coords:"使用GCode坐标",invert_x_control:"反转X轴控制",invert_y_control:"反转Y轴控制",invert_z_control:"反转Z轴控制",language:"显示语言",primary_color:"主色调",printer_name:"打印机名称",reset:"重置设定",thermal_preset_name:"预设名称",time_estimates:"时间估计",toggle:"切换",z_adjust_values:"Z轴调整值"},timer_options:{duration:"仅显示消耗时间",duration_description:"与LCD类似, 只显示消耗时间，没有估算时间。",filament:"通过耗材估算",filament_description:"根据耗材的消耗和预估时间估算总时长<br /> 随着时间推移会越来越准确。",file:"通过文件估算",file_description:"根据进度百分比和持续时间估算总时长。<br /> 随着时间推移会越来越准确。",slicer:"使用切片文件的时间",slicer_description:"使用切片文件中的预估时间，你必须在切片软件中启用相应的功能。"},title:{camera:"摄像头",general:"一般",macros:"宏",theme:"主题",thermal_presets:"温度预设",tool:"工具"},tooltip:{gcode_coords:"使用GCode坐标位置而不是仪表板上的打印头坐标位置"}},socket:{msg:{connecting:"连接到moonraker ...",no_connection:"没有moonraker连接。请检查moonraker的状态和或刷新。"}},tool:{btn:{home_x:"X",home_y:"Y"},tooltip:{extruder_disabled:"挤出机操作已被禁用，低于 min_extrude_temp 设置的最低温度 (%{min}<small>°C</small>)",home_xy:"Home XY",home_z:"Home Z"}},version:{btn:{check_for_updates:"检查更新",finish:"完成",update:"更新"},label:{commit_history:"提交历史",commits_on:"提交于",committed:"提交完成",dirty:"肮脏",invalid:"无效",package_list:"包列表",up_to_date:"最新"},status:{finished:"更新已完成",updating:"正在更新..."},title:"软件更新",tooltip:{commit_history:"提交历史",dirty:"本地文件被污染，无法从线上的git库更新最新代码",invalid:"本地文件无效，无法从线上的git库更新最新代码",packages:"包",release_notes:"发布通知"}}}}}}]);
//# sourceMappingURL=locale-cn-yaml.ccee2b71.js.map