import{_ as s,p as n,q as a,a1 as e}from"./framework-96b046e1.js";const i={},p=e(`<p><code>FreeRTOS</code> 配置文件例子：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * @file        : FreeRTOSConfig.h
 * @brief       : FreeRTOS 配置文件
 * @author      : 小土坡
 * @email       : xiaotupo@163.com
 * @version     : V1.0.1
 * @date        : 2023-1-20
 * @license     : 许可
 *
 * @github      : https://github.com/xiaotupo-com
 * @site        : https://xiaotupo.com
 *
 * @note        :
 *
 */</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">__FREERTOS_CONFIG_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">__FREERTOS_CONFIG_H</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;gd32f1x0.h&quot;</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_PREEMPTION</span> <span class="token expression"><span class="token number">1</span> </span><span class="token comment">/* 1: 使用抢占式调度器，1: 使用合作式调度器 */</span></span>

<span class="token comment">/**
 * 钩子函数配置：
 * 钩子函数的主要功能是用于函数的扩展，用户可以根据自己的需要往里面添加相关的测试函数。
 * 1：使能空闲任务钩子函数
 * 0：禁能空闲钩子函数
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_IDLE_HOOK</span> <span class="token expression"><span class="token number">0</span></span></span>

<span class="token comment">/**
 * 配置滴答定时器钩子函数；
 * 1: 使能滴答定时器中断里面执行的钩子函数
 * 0: 禁能滴答定时器里面执行的钩子函数
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_TICK_HOOK</span> <span class="token expression"><span class="token number">1</span></span></span>

<span class="token comment">/**
 * CPU 时钟频率设置：GD32F150 是 72MHz
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configCPU_CLOCK_HZ</span> <span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span><span class="token punctuation">)</span>SystemCoreClock<span class="token punctuation">)</span></span></span>

<span class="token comment">/**
 * 此参数用于定义系统时钟节拍数，单位Hz，一般取1000Hz即可。
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configTICK_RATE_HZ</span> <span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">(</span>TickType_t<span class="token punctuation">)</span><span class="token number">1000</span><span class="token punctuation">)</span></span></span>

<span class="token comment">/**
 * 此参数用于定义可供用户使用的最大优先级数，如果这个定义的是5，那么用户可以使用的优先级号是0,1,2,3,4，不包含5，对于这一点，初学者要特别的注意。
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configMAX_PRIORITIES</span> <span class="token expression"><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span></span></span>

<span class="token comment">/**
 * 此参数用于定义空闲任务的栈空间大小，单位字，即4字节。
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configMINIMAL_STACK_SIZE</span> <span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">short</span><span class="token punctuation">)</span><span class="token number">128</span><span class="token punctuation">)</span></span></span>

<span class="token comment">/**
 * 定义堆大小，FreeRTOS内核，用户动态内存申请，任务栈，任务创建，信号量创建，消息队列创建等都需要用这个空间。单位（字）。
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configTOTAL_HEAP_SIZE</span> <span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">size_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span></span>

<span class="token comment">/**
 * 定义任务名字的最大长度
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configMAX_TASK_NAME_LEN</span> <span class="token expression"><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span></span></span>

<span class="token comment">/**
 * 使能此配置将添加额外的结构体成员和函数，以此来协助可视化和**跟踪**，在使用IAR中的FreeRTOS插件时要使能这个配置，否则无法显示任务栈的使用情况。
 * 1: 使能
 * 0: 禁能
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_TRACE_FACTLITY</span> <span class="token expression"><span class="token number">0</span></span></span>

<span class="token comment">/**
 * 系统时钟节拍计数使用TickType_t数据类型定义的。
 * 如果用户使能了宏定义 configUSE_16_BIT_TICKS，那么TickType_t定义的就是16位无符号数，如果没有使能，那么
 * TickType_t定义的就是32位无符号数。对于32位架构的处理器，一定要禁止此宏定义，即设置此宏定义数值为0即可。而16位无符号数类型主要用于8位和16位架构的处理器。
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_16_BIT_TICKS</span> <span class="token expression"><span class="token number">0</span></span></span>

<span class="token comment">/**
 * 此参数用于使能与空闲任务同优先级的任务，只有满足以下两个条件时，此参数才有效果：
 * 1. 使能抢占式调度器。
 * 2. 有创建与空闲任务同优先级的任务。
 * 配置为1，就可以使能此特性了，实际应用中不建议用户使用此功能，将其配置为0即可。
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configIDLE_SHOULD_YIELD</span> <span class="token expression"><span class="token number">1</span></span></span>

<span class="token comment">/* Co-routine definitions. 合作式任务配置 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_CO_ROUTINES</span> <span class="token expression"><span class="token number">0</span> </span><span class="token comment">/* 0： 禁能，1: 使能 */</span></span>
<span class="token comment">/* 此参数用于定义可供用户使用的最大的合作式任务优先级数，如果这个定义的是5，那么用户可以使用的优先级号是0,1,2,3,4，不包含5，对于这一点，初学者要特别的注意。 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configMAX_CO_ROUTINE_PRIORITIES</span> <span class="token expression"><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span></span>

<span class="token comment">/* Set the following definitions to 1 to include the API function, or zero
to exclude the API function. */</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INCLUDE_vTaskPrioritySet</span> <span class="token expression"><span class="token number">1</span>      </span><span class="token comment">/* 使能 vTaskPrioritySet() 函数 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INCLUDE_uxTaskPriorityGet</span> <span class="token expression"><span class="token number">1</span>     </span><span class="token comment">/* 使能 uxTaskPriorityGet() 函数*/</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INCLUDE_vTaskDelete</span> <span class="token expression"><span class="token number">1</span>           </span><span class="token comment">/* 使能 vTaskDelete() 函数 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INCLUDE_vTaskCleanUpResources</span> <span class="token expression"><span class="token number">0</span> </span><span class="token comment">/* 禁能 vTaskCleanUpResources() 函数 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INCLUDE_vTaskSuspend</span> <span class="token expression"><span class="token number">1</span>          </span><span class="token comment">/* 使能 vTaskSuspend() */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INCLUDE_vTaskDelayUntil</span> <span class="token expression"><span class="token number">1</span>       </span><span class="token comment">/* 使能 vTaskDelayUntil() 函数 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">INCLUDE_vTaskDelay</span> <span class="token expression"><span class="token number">1</span>            </span><span class="token comment">/* 使能 vTaskDelay() 函数 */</span></span>

<span class="token comment">/* This is the raw value as per the Cortex-M3 NVIC.  Values can be 255
(lowest) to 0 (1?) (highest). */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configKERNEL_INTERRUPT_PRIORITY</span> <span class="token expression"><span class="token number">255</span></span></span>
<span class="token comment">/* !!!! configMAX_SYSCALL_INTERRUPT_PRIORITY must not be set to zero !!!!
See http://www.FreeRTOS.org/RTOS-Cortex-M3-M4.html. */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configMAX_SYSCALL_INTERRUPT_PRIORITY</span> <span class="token expression"><span class="token number">191</span> </span><span class="token comment">/* equivalent to 0xb0, or priority 11. */</span></span>

<span class="token comment">/* This is the value being used as per the ST library which permits 16
priority values, 0 to 15.  This must correspond to the
configKERNEL_INTERRUPT_PRIORITY setting.  Here 15 corresponds to the lowest
NVIC value of 255. */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configLIBRARY_KERNEL_INTERRUPT_PRIORITY</span> <span class="token expression"><span class="token number">15</span></span></span>

<span class="token comment">/**
 * 此配置用于优化优先级列表中要执行的最高优先级任务的算法。对CM内核的移植文件，
 * 默认已经在文件portmacro.h文件中使能。
 * 0: 通用方式，任务优先级数量不限制，纯C编写，比专用方式效率低
 * 1：专用方式，比通用方式高效，有最大优先级数限制，通常限制为 32
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_PORT_OPTIMISED_TASK_SELECTIOIN</span> <span class="token expression"><span class="token number">1</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_TICKLESS_IDLE</span> <span class="token expression"><span class="token number">0</span> </span><span class="token comment">/* 1: 使能 tickless 低功耗模式，0: 禁能tickless 低功耗模式 */</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">xPortSysTickHandler</span> <span class="token expression">SysTick_Handler</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">vPortSVCHandler</span> <span class="token expression">SVC_Handler</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">xPortPendSVHandler</span> <span class="token expression">PendSV_Handler</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/* __FREERTOS_CONFIG_H end! */</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[p];function o(l,t){return n(),a("div",null,c)}const d=s(i,[["render",o],["__file","config.html.vue"]]);export{d as default};
