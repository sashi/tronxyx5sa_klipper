(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["locale-ar-yaml"],{"390b":function(e,t){e.exports={app:{bedmesh:{label:{box_scale:"مقياس الصندوق",flat_surface:"عرض سطح مستوي",mesh_matrix:"مصفوفة شبكة",probed_matrix:"مصفوفة Probed",profile_name:"اسم الملف",remove_profile:"حذف %{name}",scale:"مقياس اللون",wireframe:"الاطار"},msg:{hint:"If saving as something other than %{name}, you can choose to also remove the %{name} profile",not_found:"لا يوجد اي شبكة",not_loaded:"لم يتم تحميل شبكة"},tooltip:{calibrate:"Begins a new calibration, saving as profile 'default'",delete:"Delete Profile. This WILL restart your printer",load:"Load Profile",save:"Commits calibrated profile to printer.cfg. This WILL restart your printer"}},chart:{label:{current:"درجة الحرارة",item:"الاسم",off:"اخفاء الرسم البياني",on:"عرض الرسم البياني",power:"الطاقة",target:"الهدف"},tooltip:{help:"Hold shift to zoom.<br />Click an item to toggle in the graph.<br />Click a power to toggle in the graph."}},console:{label:{auto_scroll:"التفاف تلقائي",hide_temp_waits:"Hide temp waits"},placeholder:{command:"'tab' للاكمال التلقائي، 'help' للاوامر 'الاسهم' للاوامر السابقة"}},endpoint:{error:{cant_connect:"Something went wrong, and fluidd can't reach the destination. Are you sure this is the correct address?",cors_error:"blocked by CORS policy",cors_note:'This may mean you need to modify your moonraker configuration. Please see the documentation on multi printer setups <a href="%{url}" target="_blank">here</a>'},hint:{add_printer:"مثلا http://fluiddpi.local"},msg:{trouble:'لديك مشكلة؟  <a href="%{url}" target="_blank">انظر هنا</a> لمزيد من المعلومات'},tooltip:{endpoint_examples:"Enter your API URL.<br />Some examples might be;<br /><blockquote>http://fluidd.local, http://192.168.1.150</blockquote>"}},endstop:{label:{open:"مفتوح",triggered:"مفعل"},msg:{subtitle:"استخدم زر التحديث لتحديث حالة نقطة التوقف."}},file_system:{filters:{label:{print_start_time:"Filter printed",print_start_time_desc:"Filters out items you've already printed."}},label:{dir_name:"اسم المجلد",disk_usage:"استخدام قرص التخزين",diskinfo:"معلومات قرص التخزين",downloaded:"محمل",file_name:"اسم الملف",transfer_rate:"معدل النقل",uploaded:"مرفوع"},msg:{confirm:"هل انت متأكد؟ سيتم حذف جميع المجلدات والملفات",not_found:"لا يوجد ملفات",processing:"جاري المعالجة"},overlay:{label:"<strong>الق</strong> ملف هنا"},title:{add_dir:"اضافة مجلد",add_file:"اضافة ملف",download_file:"جاري جلب الملف",keyboard_shortcuts:"اختصارات لوحة المفاتيح",rename_dir:"اعادة تسمية مجلد",rename_file:"اعادة تسمية ملف",upload_file:"جاري رفع الملف | جاري رفع الملفات"},tooltip:{low_on_space:"مساحة القرص منخفضة",root_disabled:"{root} الجذر غير متوفر الرجاء مراجعة السجل"}},gcode:{btn:{load_current_file:"تحميل الملف الحالي"},label:{current_layer_height:"ارتفاع الطبقة الحالية",follow_progress:"متابعة التقدم",layer:"طبقة",layers:"طبقات",parsed:"Parsed",show_extrusions:"عرض التدفقات",show_moves:"عرض التنقلات",show_next_layer:"عرض الطبقة التالية",show_previous_layer:"عرض الطبقة السابقة",show_retractions:"عرض التراجعات"},msg:{confirm:'The file "%{filename}" is %{size}, this might be resource intensive for your system. Are you sure?'}},general:{btn:{add:"اضاقة",add_dir:"اضافة مجلد",add_file:"اضافة ملف",add_printer:"اضافة طابعة",adjust_layout:"تعديل تخطيط لوحة المعلومات",all:"الكل",calibrate:"معايرة",cancel:"الغاء الامر",clear_profile:"Clear Profile",close:"اغلاق",config_reference:"مرجع التكوين",download:"تحميل",edit:"تحرير",exit_layout:"الخروج من وضع التخطيط",extrude:"اخراج",heaters_off:"اغلاق المسخنات",load_all:"تحميل الكل",more_information:"المزيد من المعلومات",pause:"ايقاف مؤقت",preheat:"تسخين",presets:"الإعدادات المسبقة",preview_gcode:"Gcode معاينة",quad_gantry_level:"QGL",reboot:"اعادة التشغيل",refresh:"تحديث",remove:"ازالة",remove_all:"ازالة الكل",rename:"اعادة تسمية",reprint:"اعادة الطباعة",reset_file:"اعادة تعيين الملف",reset_layout:"اعادة تعيين التخطيط",restart_firmware:"اعادة تشغيل برنامج الطابعة",restart_service:"%{service} اعادة تشغيل",restart_service_klipper:"Klipper اعادة تشغيل",restart_service_moonraker:"Moonraker اعادة تشغيل",resume:"متابعة",retract:"تراجع",save:"حفظ",save_as:"حفظ باسم",save_restart:"حفظ واعادة تشغيل",send:"ارسال",set_color:"تعيين اللون",shutdown:"ايقاف التشغيل",socket_refresh:"تحديث اجباري",upload:"رفع",upload_print:"رفع وطباعة",view:"عرض"},error:{app_setup_link:'Fluidd setup requirements can be found <a target="_blank" href="%{url}">here.</a>',app_warnings_found:"%{appName} warnings found.",components_config:'Moonraker plugin configuration can be found <a target="_blank" href="%{url}">here.</a>',failed_components:"Moonraker has failed plugins, please check your logs, update your configuration and restart moonraker."},label:{accel_to_decel:"التسارع الى التباطؤ",acceleration:"التسارع",add_camera:"اضافة كاميرا",add_preset:"اضافة اعداد مسبق",add_user:"اضافة مستخدم",api_key:"مفتاح API",api_url:"رابط API",category:"تصنيف",change_password:"تغيير كلمة المرور",clear_all:"مسح الكل",color:"اللون",confirm:"تاكيد",current_password:"كلمة المرور الحالية",disabled_while_printing:"معطل اثناء الطباعة",edit_camera:"تحرير الكاميرا",edit_preset:"تحرير اعداد مسبق",edit_user:"تحرير مستخدم",extrude_length:"طول الاخراج",extrude_speed:"سرعة الاخراج",flow:"التدفق",free:"متاح",high:"High",host:"المضيف",layout:"التخطيط",longest_job:"اطول مهمة",low:"Low",name:"الاسم",new_password:"كلمة مرور جديدة",no_notifications:"لا يوجد تنبيهات",off:"Off",password:"كلمة المرور",power:"الطاقة",printers:"الطابعات",requested_speed:"السرعة المطلوبة",retract_length:"طول التراجع",retract_speed:"سرعة التراجع",save_as:"حفظ باسم",services:"الخدمات",speed:"السرعة",sqv:"سرعة الزاوية المربعة",total_filament:"اجمالي الخيط المستخدم",total_filament_avg:"معدل الطبعة",total_jobs:"اجمالي المهام المطبوعة",total_print_time:"اجمالي وقت الطباعة",total_print_time_avg:"معدل الطبعة",total_time:"اجمالي الوقت",total_time_avg:"معدل الطبعة",uncategorized:"غير مصنف",unretract_speed:"سرعة الكسر",used:"مستخدم",variance:"التباين",velocity:"السرعة",visible:"ظاهر",z_offset:"موازنة Z"},msg:{password_changed:"تم تغيير كلمة المرور",wrong_password:"حدث خطأ هل انت متأكد من كلمة المرور؟"},simple_form:{error:{arrayofnums:"ارقام فقط",exists:"موجود مسبقا",invalid_url:"الرابط غير صحيح",max:"%{max} اعلى",min:"%{min} اقل",min_or_0:"Min %{min} or 0",password_username:"Cannot match username",required:"مطلوب"},msg:{confirm:"هل انت متأكد؟",confirm_reboot_host:"هل انت متأكد؟ سيتم اعادة تشغيل النظام.",confirm_shutdown_host:"هل انت متأكد؟ سيتم ايقاف تشغيل النظام."}},table:{header:{actions:"اجراءات",end_time:"انتهى",estimated_time:"الوقت المتوقع",filament:"الخيط",filament_used:"الخيط المستخدم",filament_weight_total:"وزن الخيط",first_layer_bed_temp:"درجة حرارة السطح للطبقة الاولى",first_layer_extr_temp:"درجة حرارة الفوهة للطبقة الاولى",first_layer_height:"ارتفاع الطبقة الاولى",height:"الارتفاع",last_printed:"اخر طباعة",layer_height:"ارتفاع الطبقة",modified:"اخر تعديل",name:"الاسم",print_duration:"مدة الطباعة",size:"الحجم",slicer:"التطبيق",slicer_version:"نسخة التطبيق",start_time:"بدء",status:"الحالة",total_duration:"اجمالي المدة"}},title:{add_printer:"اضافة طابعة",bedmesh:"شبكة السطح",bedmesh_controls:"ادوات شبكة السطح",camera:"الكاميرا | الكاميرات",config_files:"ملفات التكوين",configure:"الاعدادات",console:"الطرفية",endstops:"نقاط التوقف",fans_outputs:"المراوح والمخرجات",gcode_preview:"معاينة Gcode [تجريبي]",history:"التاريخ",home:"الرئيسية",jobs:"المهام",limits:"قيود الطابعة",macros:"اوامر صغيرة",retract:"Firmware Retraction",runout_sensors:"حساسات انقطاع الخيط",settings:"الاعدادات",stats:"حالة الطابعة",system:"النظام",system_overview:"معلومات النظام",temperature:"مؤشرات حرارية",tool:"الفوهة",tune:"ضبط"},tooltip:{estop:"ايقاف طوارئ",reload_klipper:"اعادة تحميل تكوين klipper.",reload_restart_klipper:"اعادة تحميل تكوين klipper واعادة تشغيل الطابعة.",restart_klipper:"اعادة تشغيل خدمة klipper الخاصة بالنظام"}},history:{msg:{confirm:"هل انت متأكد؟ سيتم مسح التاريخ واحصائيات الطابعة"}},printer:{state:{busy:"مشغولة",complete:"مكتملة",idle:"خاملة",loading:"جاري التحميل",paused:"موقفة مؤفتا",printing:"جاري الطباعة",ready:"جاهزة",standby:"وضع الانتظار"}},setting:{btn:{add_camera:"اضافة كاميرا",add_thermal_preset:"اضافة اعداد مسبق",add_user:"اضافة مستخدم",reset:"اعادة تعيين",select_theme:"اختيار"},camera_type_options:{mjpegadaptive:"MJPEG Adaptive",mjpegstream:"بث MJPEG",video:"IP الكامير"},label:{all_off:"ايقاف الكل",all_on:"تشغيل الكل",camera_flip_x:"عكس افقي",camera_flip_y:"عكس عمودي",camera_stream_type:"نوع البث",camera_url:"رابط الكاميرا",confirm_on_estop:"ايقاف الطوارئ يحتاج تأكيد",dark_mode:"الوضع الداكن",default_extrude_length:"Default extrude length",default_extrude_speed:"Default extrude speed",default_toolhead_move_length:"Default toolhead move length",default_toolhead_xy_speed:"Default toolhead XY speed",default_toolhead_z_speed:"Default toolhead Z speed",draw_background:"رسم خلفية",enable:"تفعيل",enable_notifications:"تفعيل التنبيهات",extrusion_line_width:"Extrusion Line Width",flip_horizontal:"عكس افقي",flip_vertical:"عكس عمودي",fps_target:"عدد الاطارات المستهدف",gcode_coords:"استخدام احداثيات GCode",invert_x_control:"عكس تحكم محور X",invert_y_control:"عكس تحكم محور Y",invert_z_control:"عكس تحكم محور Z",language:"لغة العرض",move_line_width:"Move Line Width",primary_color:"اللون الاساسي",printer_name:"اسم الطابعة",reset:"اعادة تعيين الاعدادات",retraction_icon_size:"Retraction Icon Size",show_animations:"عرض الحركات",theme_preset:"Community preset",thermal_preset_gcode:"GCode",thermal_preset_name:"اسم الاعداد المسبق",z_adjust_values:"Z Adjust values"},timer_options:{duration:"المدة فقط",filament:"تقدير الخيط",file:"File Estimation",slicer:"Slicer"},title:{authentication:"المصادقة",camera:"الكاميرا | الكاميرات",gcode_preview:"Gcode معاينة",general:"عام",macros:"اوامر صغيرة",theme:"التصميم",thermal_presets:"الإعدادات الحرارية المسبقة",tool:"الفوهة"},tooltip:{gcode_coords:"Use GCode position instead of toolhead position on dashboard"}},socket:{msg:{connecting:"Connecting to moonraker...",no_connection:"No moonraker connection. Please check moonraker status and / or refresh."}},system_info:{label:{capacity:"السعة",cpu_desc:"وصف المعالج",distribution_codename:"Codename",distribution_like:"Distribution Like",distribution_name:"Distribution",hardware_desc:"Hardware Description",hostname:"Hostname",klipper_load:"Klipper Load",manufactured:"Manufactured",manufacturer:"المصنع",mcu_awake:"{mcu} Awake Time",mcu_bandwidth:"{mcu} عرض نطاق",mcu_load:"{mcu} Load",model:"طراز المعالج",moonraker_load:"Moonraker Load",processor_desc:"المعالج",product_name:"اسم المنتج",serial_number:"الرقم التسلسلي",system_load:"تحميل النظام",system_memory:"ذاكرة النظام",system_utilization:"System Utilization",total_memory:"اجمالي الذاكرة"}},tool:{btn:{home_x:"X",home_y:"Y"},tooltip:{extruder_disabled:"extruder disabled, below min_extrude_temp (%{min}<small>°C</small>)",home_xy:"Home XY",home_z:"Home Z"}},version:{btn:{check_for_updates:"التحقق من التحديثات",finish:"انتهى",update:"تحديث",view_versions:"عرض النسخ"},label:{commit_history:"Commit History",commits_on:"commits on",committed:"Committed",dirty:"DIRTY",invalid:"INVALID",os_packages:"حزم نظام التشغيل",package_list:"قائمة الحزم",up_to_date:"محدث",updates_available:"التحديثات متوفرة"},status:{finished:"اكتمل التحديث",updating:"جاري التحديث"},title:"تحديث البرمجيات",tooltip:{commit_history:"Commit history",dirty:"indicates a detached head, not on master or an invalid origin",invalid:"indicates local changes to the repo",packages:"الحزم",release_notes:"ملاحظات الاصدارة"}}}}}}]);
//# sourceMappingURL=locale-ar-yaml.b59c8261.js.map