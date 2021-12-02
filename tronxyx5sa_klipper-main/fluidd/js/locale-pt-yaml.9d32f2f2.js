(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["locale-pt-yaml"],{e8cc:function(e,a){e.exports={app:{bedmesh:{label:{flat_surface:"Mostrar plano plano",mesh_matrix:"Matriz de malha",probed_matrix:"Matriz sondada",profile_name:"Perfil",remove_profile:"Remover perfil %{name}",scale:"Escala por min / max",wireframe:"Wireframe"},msg:{hint:"Se salvar algo diferente de % {name},  pode escolher remover também o perfi % {name}",not_found:"Não foram encontrados nivelamentos da mesa.",not_loaded:"Nenhuma malha carregada"},tooltip:{calibrate:"Nova calibração, salvando o perfil como 'default'",delete:"Eliminar perfil. A impressora irá reiniciar.",load:"Carregar perfil",save:"Carregar o perfil calibrado no ficheiro printer.cfg. A impressora irá reiniciar."}},chart:{label:{current:"Corrente",item:"Item",off:"Gráfico desligado",on:"Gráfico ligado",power:"Energia",target:"Alvo"},tooltip:{help:"Mantenha a tecla Shift pressionada para aumentar o zoom. <br /> Clique num item para alternar no gráfico. <br /> Clique em Ligar para alternar no gráfico."}},console:{label:{auto_scroll:"Auto scroll",hide_temp_waits:"Ocultar temperaturas"},placeholder:{command:"'tab' para autocompletar, 'help' para comandos  'setas' para histórico"}},endpoint:{error:{cant_connect:"Algo está errado e não é possivel carregar o fluidd  . Tem a certeza de que este é o endereço correto?",cors_error:"bloqueado pela política CORS",cors_note:'Isso pode significar que você precisa modificar a configuração do moonraker. Consulte a documentação sobre configurações de várias impressoras <a href="%{url}" target="_blank"> aqui </a>'},hint:{add_printer:"Ex., http://fluiddpi.local"},msg:{trouble:'Está com problemas? <a href="%{url}" target="_blank"> Veja aqui </a> para mais informações.'},tooltip:{endpoint_examples:"Insira o URL da API. <br /> Alguns exemplos podem ser; <br /> <blockquote> http: //fluidd.local, http://192.168.1.150 </blockquote>"}},endstop:{label:{open:"DESATIVADO",triggered:"ATIVADO"},msg:{subtitle:"Use o botão de atualização para atualizar o status do fim de curso."}},file_system:{filters:{label:{print_start_time:"Filtrar já impresso",print_start_time_desc:"Filtrar os itens que  já imprimiu."}},label:{dir_name:"Nome diretório",disk_usage:"Disco usado",downloaded:"Descarregado",file_name:"Nome ficheiro",transfer_rate:"Taxa de transferência",uploaded:"Carregado"},msg:{confirm:"Tem a certeza? Vai excluir todos os arquivos e pastas existentes.",not_found:"Não foram encontrados ficheiros",processing:"A processar..."},overlay:{label:"<strong>Largar</strong> um ficheiro aqui."},title:{add_dir:"Adicionar diretório",add_file:"Adicionar ficheiro",download_file:"Recuperando ficheiro",keyboard_shortcuts:"Atalhos do teclado",rename_dir:"Renomear diretório",rename_file:"Renomear ficheiro",upload_file:"Carregando ficheiro | Carregando ficheiros"},tooltip:{disabled:"Os trabalhos são desativados antes da comunicação inicial com o klippy",low_on_space:"Pouco espaço em disco"}},general:{btn:{add:"Adicionar",add_dir:"Adicionar diretório",add_file:"Adicionar ficheiro",add_printer:"Adicionar impressora",adjust_layout:"Ajuste o layout do painel",all:"Tudo",calibrate:"Calibrar",cancel:"Cancelar",clear_profile:"Limpar Perfil",close:"Fechar",config_reference:"Referencias da configuração",download:"Download",edit:"Editar",extrude:"Extrudir",heaters_off:"Heaters desligados",load_all:"Carregar tudo",pause:"Pausa",preheat:"Pré aquecer",presets:"Presets",quad_gantry_level:"QGL",reboot:"Reiniciar",remove:"Remover",remove_all:"Remover todos",rename:"Renomear",reprint:"Reimprimir",reset_file:"Reiniciar arquivo",reset_layout:"Reiniciar layout",restart_firmware:"Reiniciar firmware",restart_service_klipper:"Reiniciar Klipper",restart_service_moonraker:"Reiniciar Moonraker",restart_service_webcamd:"Reiniciar Webcam",resume:"Retomar",retract:"Retração",save:"Salvar",save_as:"Salvar como",save_restart:"Salvar e reiniciar",send:"Enviar",shutdown:"Desligar",socket_refresh:"Forçar atualização",upload:"Envio",upload_print:"Envio e impressão",view:"Ver"},error:{app_setup_link:'Os requisitos de configuração do Fluidd podem ser encontrados <a target="_blank" href="%{url}"> aqui. </a>',app_warnings_found:"%{appName} avisos encontrados.",components_config:'A configuração do plugin Moonraker pode ser encontrada <a target="_blank" href="%{url}"> aqui. </a>',failed_components:"O Moonraker tem falhas nos plug-ins, verifique os registros, atualize a sua configuração e reinicie o moonraker."},label:{accel_to_decel:"Acel. e Desacel.",acceleration:"Acelaração",add_camera:"Adicionar Camera",add_category:"Adicionar categoria",add_preset:"Adicionar predefinição",api_url:"URL do API",confirm:"Confirmar",edit_camera:"Editar camera",edit_preset:"Editar predefinição",extrude_length:"Comprimento extrusão",extrude_speed:"Velocidade extrusão",flow:"Fluxo",free:"livre",high:"Alto",host:"Anfitrião",layout:"Layout",longest_job:"Maior trabalho",low:"Baixo",name:"Nome",off:"Desligado",power:"Energia",printers:"Impressoras",requested_speed:"Velocidade requerida",save_as:"Salvar como",services:"Serviços",speed:"Velocidade",sqv:"Velocidade do canto quadrado",total_filament:"Total filamento usado",total_filament_avg:"Média por impressão",total_jobs:"Total trabalhos impressos",total_print_time:"Tempo de impressão total",total_print_time_avg:"Média por impressão",total_time:"Tempo total",total_time_avg:"Média por impressão",uncategorized:"Sem categoria",used:"usado",variance:"Variação",velocity:"Velocidade",z_offset:"Z Offset"},simple_form:{error:{arrayofnums:"Apenas números",exists:"Já existe",invalid_url:"URL inválido",max:"Max. %{max}",min:"Min. %{min}",min_or_0:"Min %{min} ou 0",required:"Obrigatório"},msg:{confirm:"Tem a certeza?",confirm_reboot_host:"Tem certeza? O sistema vai reiniciar.",confirm_shutdown_host:"Tem certeza? O sistema vai desligar."}},table:{header:{actions:"Ações",end_time:"Terminado",estimated_time:"Tempo estimado",filament:"Filamento",filament_used:"Filamento",first_layer_bed_temp:"Temperature da mesa na primeira camada",first_layer_extr_temp:"Temperatura da extrusora na primeira camada",first_layer_height:"Altura da primeira camada",height:"Altura",last_printed:"Ultima impressão",layer_height:"Altura da camada",modified:"Modificado",name:"Nome",print_duration:"Duração da impressão",size:"Tamanho",slicer:"Slicer",slicer_version:"Versão Slicer",start_time:"Iniciado",status:"Estado",total_duration:"Duração total"}},title:{add_printer:"Adicionar impressora",bedmesh:"Nivelamento cama",bedmesh_controls:"Controlos de malha de mesa",camera:"Camera | Cameras",config_files:"Ficheiros configuração",configure:"Configurar",console:"Consola",endstops:"Fins de curso",fans_outputs:"Ventoinhas e saídas",history:"Histórico trabalhos",home:"Painel",jobs:"Trabalhos",limits:"Limites impressora",macros:"Macros",runout_sensors:"Sensores filamento",settings:"Definições",stats:"Estatísticas da impressora",status:"Estado",system_control:"Controlo sistema",temperature:"Temperatura",tool:"Ferramentas",tune:"Afinação"},tooltip:{estop:"Paragem emergência",reload_klipper:"Recarrega a configuração do klipper.",reload_restart_klipper:"Recarrega a configuração do klipper e reinicia os MCUs.",restart_klipper:"Reinicia o serviço do sistema klipper."}},history:{msg:{confirm:"Tem certeza? Isso limpará todo o histórico e estatísticas da impressora"}},printer:{state:{busy:"Ocupada",complete:"Completo",idle:"Inativo",loading:"A carregar",paused:"Pausada",printing:"A imprimir",ready:"Preparada",standby:"Standby"},status:{duration:"duração",duration_total:"duração e total",time_left:"tempo restante estimado ",used_filament:"filamento usado"}},setting:{btn:{add_camera:"Adicionar Camera",add_thermal_preset:"Adicionar predefinição",reset:"Reset",select_theme:"Selecionar tema"},camera_type_options:{mjpegadaptive:"MJPEG Adaptativo",mjpegstream:"MJPEG Stream",video:"IP Camera"},label:{all_off:"Tudo Off",all_on:"Tudo On",camera_fillspace:"Preencher espaço",camera_fillspace_help:"Com apenas uma câmera habilitada, preencha o espaço da câmera do painel.",camera_flip_x:"Virar horizontal",camera_flip_y:"Virar vertical",camera_stream_type:"Tipo stream",camera_url:"Url Camera ",dark_mode:"Modo escuro",default_extrude_length:"Comprimento de extrusão padrão",default_extrude_speed:"Velocidade de extrusão padrão",default_toolhead_move_length:"Comprimento de movimento do toolhead padrão",default_toolhead_xy_speed:"Velocidade XY do toolhead padrão",default_toolhead_z_speed:"Velocidade Z do toolhead  padrão",enable:"Habilitar",enable_notifications:"Ativar notificações",fps_target:"Frames por segundo",gcode_coords:"Usar Coordenadas GCode",invert_x_control:"Inverter controlo X",invert_y_control:"Inverter controlo Y",invert_z_control:"Inverter controlo Z",language:"Mostrar Linguagem",primary_color:"Cor principal",printer_name:"Nome impressora",reset:"Redefinir as configurações",thermal_preset_name:"Nome predefinição",time_estimates:"Estimativas de tempo",toggle:"Alternar",z_adjust_values:"Ajustar valores Z"},timer_options:{duration:"Só duração",duration_description:"Semelhante ao LCD klipper, mostra apenas a duração, sem estimativas.",filament:"Estimativas filamento.",filament_description:"Compara filamento usado versus filamento estimado, para calcular a duração total.n.<br /> Mais preciso ao longo do tempo.",file:"Estimativa do ficheiro",file_description:"Compara o progresso da % e a duração para calcular a duração total.<br /> Mais preciso ao longo do tempo.",slicer:"Slicer",slicer_description:"Usa estimativas do Slicer para exibição. Deve habilitar isso no seu Slicer."},title:{camera:"Camera | Cameras",general:"Geral",macros:"Macros",theme:"Tema",thermal_presets:"Pré-ajustes térmicos",tool:"Ferramentas"},tooltip:{gcode_coords:"Usar a posição GCode em vez da posição da toolhead no painel"}},socket:{msg:{connecting:"A conectar ao moonraker...",no_connection:"Sem coneção ao moonraker. Por favor verifique o estado do moonraker e / ou faça atualizar."}},tool:{btn:{home_x:"X",home_y:"Y"},tooltip:{extruder_disabled:"extruder disabilitado, abaixo min_extrude_temp (%{min}<small>°C</small>)",home_xy:"Origem XY",home_z:"Origem Z"}},version:{btn:{check_for_updates:"Verificar atualizações",finish:"Terminar",update:"Atualizar"},label:{dirty:"DIRTY",invalid:"INVÁLIDO",os_packages:"Pacotes de SO",package_list:"Lista de Pacotes",up_to_date:"ATUALIZADO"},status:{finished:"Atualizações terminadas",updating:"A atualizar..."},title:"Atualizações de software",tooltip:{dirty:"indicação de erro no cabeçalho, não existente na fonte ou fonte inválida.",invalid:"indicação de alteração do local da repo",packages:"Pacotes",release_notes:"Notas de lançamento"}}}}}}]);
//# sourceMappingURL=locale-pt-yaml.9d32f2f2.js.map