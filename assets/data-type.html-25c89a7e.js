import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<p><strong>FreeRTOS</strong> 中对一些 <code>C</code> 的标准类型进行了重新定义，重定义的类型在 <code>portmacro.h</code> 这个头文件中。</p><p><code>portmacro.h</code> 的位置在 <code>FreeRTOS-Kernel\\portable\\RVDS\\ARM_XXX\\</code> 目录下，其中 <code>ARM_XXX</code> 为具体的cortexM架构。移植不同平台可能需要去 portable 目录下复制不同的文件。</p><table><thead><tr><th>新类型</th><th>实际类型（C标准类型）</th><th>描述</th></tr></thead><tbody><tr><td><strong>portCHAR</strong></td><td><strong>char</strong></td><td>字符</td></tr><tr><td><strong>portSHORT</strong></td><td><strong>short</strong></td><td>短整型</td></tr><tr><td><strong>portLONG</strong></td><td><strong>long</strong></td><td>长整型</td></tr><tr><td><strong>portTickType</strong></td><td><strong>unsigned short int</strong> 或 <strong>unsigned int</strong></td><td>由 <code>configUSE_16_BIT_TICKS</code> 决定</td></tr><tr><td><strong>portBASW_TYPE</strong></td><td><strong>long</strong></td><td>根据处理器的架构来决定是多少位的，如果是 <code>32/16/8bit</code> 的处理器则是 <code>32/16/8bit</code> 的数据类型。一般用于定义函数的返回值或者布尔类型。</td></tr></tbody></table><h2 id="portmacro-h" tabindex="-1"><a class="header-anchor" href="#portmacro-h" aria-hidden="true">#</a> portmacro.h</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
 * FreeRTOS Kernel V10.5.1
 * Copyright (C) 2021 Amazon.com, Inc. or its affiliates.  All Rights Reserved.
 *
 * SPDX-License-Identifier: MIT
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the &quot;Software&quot;), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * https://www.FreeRTOS.org
 * https://github.com/FreeRTOS
 *
 */</span>


<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">PORTMACRO_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">PORTMACRO_H</span></span>

<span class="token comment">/* *INDENT-OFF* */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">__cplusplus</span></span>
    <span class="token keyword">extern</span> <span class="token string">&quot;C&quot;</span> <span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token comment">/* *INDENT-ON* */</span>

<span class="token comment">/*-----------------------------------------------------------
 * Port specific definitions.
 *
 * The settings in this file configure FreeRTOS correctly for the
 * given hardware and compiler.
 *
 * These settings should not be altered.
 *-----------------------------------------------------------
 */</span>

<span class="token comment">/* Type definitions. */</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portCHAR</span>          <span class="token expression"><span class="token keyword">char</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portFLOAT</span>         <span class="token expression"><span class="token keyword">float</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portDOUBLE</span>        <span class="token expression"><span class="token keyword">double</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portLONG</span>          <span class="token expression"><span class="token keyword">long</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portSHORT</span>         <span class="token expression"><span class="token keyword">short</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portSTACK_TYPE</span>    <span class="token expression"><span class="token class-name">uint32_t</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portBASE_TYPE</span>     <span class="token expression"><span class="token keyword">long</span></span></span>

    <span class="token keyword">typedef</span> portSTACK_TYPE   StackType_t<span class="token punctuation">;</span>
    <span class="token keyword">typedef</span> <span class="token keyword">long</span>             BaseType_t<span class="token punctuation">;</span>
    <span class="token keyword">typedef</span> <span class="token keyword">unsigned</span> <span class="token keyword">long</span>    UBaseType_t<span class="token punctuation">;</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token punctuation">(</span> configUSE_16_BIT_TICKS <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">)</span></span></span>
        <span class="token keyword">typedef</span> <span class="token class-name">uint16_t</span>     TickType_t<span class="token punctuation">;</span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portMAX_DELAY</span>              <span class="token expression"><span class="token punctuation">(</span> TickType_t <span class="token punctuation">)</span> <span class="token number">0xffff</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
        <span class="token keyword">typedef</span> <span class="token class-name">uint32_t</span>     TickType_t<span class="token punctuation">;</span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portMAX_DELAY</span>              <span class="token expression"><span class="token punctuation">(</span> TickType_t <span class="token punctuation">)</span> <span class="token number">0xffffffffUL</span></span></span>

<span class="token comment">/* 32-bit tick type on a 32-bit architecture, so reads of the tick count do
 * not need to be guarded with a critical section. */</span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portTICK_TYPE_IS_ATOMIC</span>    <span class="token expression"><span class="token number">1</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

<span class="token comment">/* Architecture specifics. */</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portSTACK_GROWTH</span>          <span class="token expression"><span class="token punctuation">(</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portTICK_PERIOD_MS</span>        <span class="token expression"><span class="token punctuation">(</span> <span class="token punctuation">(</span> TickType_t <span class="token punctuation">)</span> <span class="token number">1000</span> <span class="token operator">/</span> configTICK_RATE_HZ <span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portBYTE_ALIGNMENT</span>        <span class="token expression"><span class="token number">8</span></span></span>

<span class="token comment">/* Constants used with memory barrier intrinsics. */</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portSY_FULL_READ_WRITE</span>    <span class="token expression"><span class="token punctuation">(</span> <span class="token number">15</span> <span class="token punctuation">)</span></span></span>

<span class="token comment">/*-----------------------------------------------------------*/</span>

<span class="token comment">/* Scheduler utilities. */</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portYIELD</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span>                                 </span><span class="token punctuation">\\</span>
    <span class="token expression"><span class="token punctuation">{</span>                                                   </span><span class="token punctuation">\\</span>
        <span class="token comment">/* Set a PendSV to request a context switch. */</span> <span class="token punctuation">\\</span>
        <span class="token expression">portNVIC_INT_CTRL_REG <span class="token operator">=</span> portNVIC_PENDSVSET_BIT<span class="token punctuation">;</span> </span><span class="token punctuation">\\</span>
                                                        <span class="token punctuation">\\</span>
        <span class="token comment">/* Barriers are normally not required but do ensure the code is completely \\
         * within the specified behaviour for the architecture. */</span> <span class="token punctuation">\\</span>
        <span class="token expression"><span class="token function">__dsb</span><span class="token punctuation">(</span> portSY_FULL_READ_WRITE <span class="token punctuation">)</span><span class="token punctuation">;</span>                           </span><span class="token punctuation">\\</span>
        <span class="token expression"><span class="token function">__isb</span><span class="token punctuation">(</span> portSY_FULL_READ_WRITE <span class="token punctuation">)</span><span class="token punctuation">;</span>                           </span><span class="token punctuation">\\</span>
    <span class="token expression"><span class="token punctuation">}</span></span></span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portNVIC_INT_CTRL_REG</span>     <span class="token expression"><span class="token punctuation">(</span> <span class="token operator">*</span><span class="token punctuation">(</span> <span class="token punctuation">(</span> <span class="token keyword">volatile</span> <span class="token class-name">uint32_t</span> <span class="token operator">*</span> <span class="token punctuation">)</span> <span class="token number">0xe000ed04</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portNVIC_PENDSVSET_BIT</span>    <span class="token expression"><span class="token punctuation">(</span> <span class="token number">1UL</span> <span class="token operator">&lt;&lt;</span> <span class="token number">28UL</span> <span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portEND_SWITCHING_ISR</span><span class="token expression"><span class="token punctuation">(</span> xSwitchRequired <span class="token punctuation">)</span>    <span class="token keyword">do</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token punctuation">(</span> xSwitchRequired <span class="token operator">!=</span> pdFALSE <span class="token punctuation">)</span> <span class="token function">portYIELD</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span> <span class="token keyword">while</span><span class="token punctuation">(</span> <span class="token number">0</span> <span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portYIELD_FROM_ISR</span><span class="token expression"><span class="token punctuation">(</span> x <span class="token punctuation">)</span>                     <span class="token function">portEND_SWITCHING_ISR</span><span class="token punctuation">(</span> x <span class="token punctuation">)</span></span></span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

<span class="token comment">/* Critical section management. */</span>
    <span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token function">vPortEnterCritical</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token function">vPortExitCritical</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portDISABLE_INTERRUPTS</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span>                  <span class="token function">vPortRaiseBASEPRI</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portENABLE_INTERRUPTS</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span>                   <span class="token function">vPortSetBASEPRI</span><span class="token punctuation">(</span> <span class="token number">0</span> <span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portENTER_CRITICAL</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span>                      <span class="token function">vPortEnterCritical</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portEXIT_CRITICAL</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span>                       <span class="token function">vPortExitCritical</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portSET_INTERRUPT_MASK_FROM_ISR</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token function">ulPortRaiseBASEPRI</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portCLEAR_INTERRUPT_MASK_FROM_ISR</span><span class="token expression"><span class="token punctuation">(</span> x <span class="token punctuation">)</span>    <span class="token function">vPortSetBASEPRI</span><span class="token punctuation">(</span> x <span class="token punctuation">)</span></span></span>

<span class="token comment">/*-----------------------------------------------------------*/</span>

<span class="token comment">/* Tickless idle/low power functionality. */</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">portSUPPRESS_TICKS_AND_SLEEP</span></span>
        <span class="token keyword">extern</span> <span class="token keyword">void</span> <span class="token function">vPortSuppressTicksAndSleep</span><span class="token punctuation">(</span> TickType_t xExpectedIdleTime <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portSUPPRESS_TICKS_AND_SLEEP</span><span class="token expression"><span class="token punctuation">(</span> xExpectedIdleTime <span class="token punctuation">)</span>    <span class="token function">vPortSuppressTicksAndSleep</span><span class="token punctuation">(</span> xExpectedIdleTime <span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

<span class="token comment">/* Port specific optimisations. */</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">configUSE_PORT_OPTIMISED_TASK_SELECTION</span></span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_PORT_OPTIMISED_TASK_SELECTION</span>    <span class="token expression"><span class="token number">1</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">configUSE_PORT_OPTIMISED_TASK_SELECTION <span class="token operator">==</span> <span class="token number">1</span></span></span>

<span class="token comment">/* Check the configuration. */</span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token punctuation">(</span> configMAX_PRIORITIES <span class="token operator">&gt;</span> <span class="token number">32</span> <span class="token punctuation">)</span></span></span>
            <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">error</span> <span class="token expression">configUSE_PORT_OPTIMISED_TASK_SELECTION can only be set to <span class="token number">1</span> when configMAX_PRIORITIES is less than or equal to <span class="token number">32.</span>  It is very rare that a system requires more than <span class="token number">10</span> to <span class="token number">15</span> difference priorities as tasks that share a priority will time slice<span class="token punctuation">.</span></span></span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token comment">/* Store/clear the ready priorities in a bit map. */</span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portRECORD_READY_PRIORITY</span><span class="token expression"><span class="token punctuation">(</span> uxPriority<span class="token punctuation">,</span> uxReadyPriorities <span class="token punctuation">)</span>    <span class="token punctuation">(</span> uxReadyPriorities <span class="token punctuation">)</span> <span class="token operator">|=</span> <span class="token punctuation">(</span> <span class="token number">1UL</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span> uxPriority <span class="token punctuation">)</span> <span class="token punctuation">)</span></span></span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portRESET_READY_PRIORITY</span><span class="token expression"><span class="token punctuation">(</span> uxPriority<span class="token punctuation">,</span> uxReadyPriorities <span class="token punctuation">)</span>     <span class="token punctuation">(</span> uxReadyPriorities <span class="token punctuation">)</span> <span class="token operator">&amp;=</span> <span class="token operator">~</span><span class="token punctuation">(</span> <span class="token number">1UL</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span> uxPriority <span class="token punctuation">)</span> <span class="token punctuation">)</span></span></span>

<span class="token comment">/*-----------------------------------------------------------*/</span>

        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portGET_HIGHEST_PRIORITY</span><span class="token expression"><span class="token punctuation">(</span> uxTopPriority<span class="token punctuation">,</span> uxReadyPriorities <span class="token punctuation">)</span>    uxTopPriority <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token number">31UL</span> <span class="token operator">-</span> <span class="token punctuation">(</span> <span class="token class-name">uint32_t</span> <span class="token punctuation">)</span> <span class="token function">__clz</span><span class="token punctuation">(</span> <span class="token punctuation">(</span> uxReadyPriorities <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/* taskRECORD_READY_PRIORITY */</span></span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

<span class="token comment">/* Task function macros as described on the FreeRTOS.org WEB site.  These are
 * not necessary for to use this port.  They are defined so the common demo files
 * (which build with all the ports) will build. */</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portTASK_FUNCTION_PROTO</span><span class="token expression"><span class="token punctuation">(</span> vFunction<span class="token punctuation">,</span> pvParameters <span class="token punctuation">)</span>    <span class="token keyword">void</span> <span class="token function">vFunction</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token operator">*</span> pvParameters <span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portTASK_FUNCTION</span><span class="token expression"><span class="token punctuation">(</span> vFunction<span class="token punctuation">,</span> pvParameters <span class="token punctuation">)</span>          <span class="token keyword">void</span> <span class="token function">vFunction</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token operator">*</span> pvParameters <span class="token punctuation">)</span></span></span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">configASSERT</span></span>
        <span class="token keyword">void</span> <span class="token function">vPortValidateInterruptPriority</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portASSERT_IF_INTERRUPT_PRIORITY_INVALID</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token function">vPortValidateInterruptPriority</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token comment">/* portNOP() is not required by this port. */</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name function">portNOP</span><span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">)</span></span></span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portINLINE</span>              <span class="token expression">__inline</span></span>

    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">portFORCE_INLINE</span></span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">portFORCE_INLINE</span>    <span class="token expression">__forceinline</span></span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token comment">/*-----------------------------------------------------------*/</span>

    <span class="token keyword">static</span> portFORCE_INLINE <span class="token keyword">void</span> <span class="token function">vPortSetBASEPRI</span><span class="token punctuation">(</span> <span class="token class-name">uint32_t</span> ulBASEPRI <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        __asm
        <span class="token punctuation">{</span>
            <span class="token comment">/* Barrier instructions are not used as this function is only used to
             * lower the BASEPRI value. */</span>
<span class="token comment">/* *INDENT-OFF* */</span>
            msr basepri<span class="token punctuation">,</span> ulBASEPRI
<span class="token comment">/* *INDENT-ON* */</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

    <span class="token keyword">static</span> portFORCE_INLINE <span class="token keyword">void</span> <span class="token function">vPortRaiseBASEPRI</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">uint32_t</span> ulNewBASEPRI <span class="token operator">=</span> configMAX_SYSCALL_INTERRUPT_PRIORITY<span class="token punctuation">;</span>

        __asm
        <span class="token punctuation">{</span>
            <span class="token comment">/* Set BASEPRI to the max syscall priority to effect a critical
             * section. */</span>
<span class="token comment">/* *INDENT-OFF* */</span>
            msr basepri<span class="token punctuation">,</span> ulNewBASEPRI
            dsb
            isb
<span class="token comment">/* *INDENT-ON* */</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

    <span class="token keyword">static</span> portFORCE_INLINE <span class="token keyword">void</span> <span class="token function">vPortClearBASEPRIFromISR</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        __asm
        <span class="token punctuation">{</span>
            <span class="token comment">/* Set BASEPRI to 0 so no interrupts are masked.  This function is only
             * used to lower the mask in an interrupt, so memory barriers are not
             * used. */</span>
<span class="token comment">/* *INDENT-OFF* */</span>
            msr basepri<span class="token punctuation">,</span> # <span class="token number">0</span>
<span class="token comment">/* *INDENT-ON* */</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

    <span class="token keyword">static</span> portFORCE_INLINE <span class="token class-name">uint32_t</span> <span class="token function">ulPortRaiseBASEPRI</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">uint32_t</span> ulReturn<span class="token punctuation">,</span> ulNewBASEPRI <span class="token operator">=</span> configMAX_SYSCALL_INTERRUPT_PRIORITY<span class="token punctuation">;</span>

        __asm
        <span class="token punctuation">{</span>
            <span class="token comment">/* Set BASEPRI to the max syscall priority to effect a critical
             * section. */</span>
<span class="token comment">/* *INDENT-OFF* */</span>
            mrs ulReturn<span class="token punctuation">,</span> basepri
            msr basepri<span class="token punctuation">,</span> ulNewBASEPRI
            dsb
            isb
<span class="token comment">/* *INDENT-ON* */</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> ulReturn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token comment">/*-----------------------------------------------------------*/</span>

    <span class="token keyword">static</span> portFORCE_INLINE BaseType_t <span class="token function">xPortIsInsideInterrupt</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">uint32_t</span> ulCurrentInterrupt<span class="token punctuation">;</span>
        BaseType_t xReturn<span class="token punctuation">;</span>

        <span class="token comment">/* Obtain the number of the currently executing interrupt. */</span>
        __asm
        <span class="token punctuation">{</span>
<span class="token comment">/* *INDENT-OFF* */</span>
            mrs ulCurrentInterrupt<span class="token punctuation">,</span> ipsr
<span class="token comment">/* *INDENT-ON* */</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span> ulCurrentInterrupt <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            xReturn <span class="token operator">=</span> pdFALSE<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span>
        <span class="token punctuation">{</span>
            xReturn <span class="token operator">=</span> pdTRUE<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> xReturn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token comment">/* *INDENT-OFF* */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifdef</span> <span class="token expression">__cplusplus</span></span>
    <span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token comment">/* *INDENT-ON* */</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/* PORTMACRO_H */</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变量名" tabindex="-1"><a class="header-anchor" href="#变量名" aria-hidden="true">#</a> 变量名</h2><blockquote><p>在 FreeRTOS 中，定义变量的时候往往会把变量的类型当作前缀加在变量上，这样的好处是让用户一看到这个变量就知道该变量的类型。</p><ul><li><code>char -&gt; c</code></li><li><code>short -&gt; s</code></li><li><code>long -&gt; l</code></li><li><code>portBASE_TYPE -&gt; x</code> 还有其他的数据类型，比如数据结构，任务句柄，队列句柄等定义的变量名的前缀也是 x。</li><li><code>无符号 -&gt; u</code></li><li><code>指针 -&gt; p</code></li><li><code>无符号 char -&gt; uc</code></li><li><code>char 型指针 -&gt; pc</code></li></ul></blockquote><h2 id="函数名" tabindex="-1"><a class="header-anchor" href="#函数名" aria-hidden="true">#</a> 函数名</h2><p><code>FreeRTOS</code> 中的函数名是包含返回值的类型的，这样一来只有看到函数名就指定该函数的返回值了。</p><ul><li>私有函数的前缀为 <code>prv</code></li><li><code>v</code> 前缀开头的函数返回值类型为 <code>void</code></li><li><code>x</code> 前缀开头的函数返回值类型为 <code>portBASE_TYPE</code>，实际类型为 <code>long</code></li></ul><h2 id="宏" tabindex="-1"><a class="header-anchor" href="#宏" aria-hidden="true">#</a> 宏</h2><p><strong>宏</strong>的名字均为大写字母，并配有小写字母的前缀，前缀用于表示宏在哪个头文件中。</p><p>例子：</p><ul><li><code>port</code>（如：portMAX_DELAY）在 <code>portable.h</code>文件中</li><li><code>task</code>（如：taskENTER_CRITICAL()) 在 <code>task.h</code>文件中</li><li><code>pd</code> （如：pdTRUE） 在 <code>projdefs.h</code> 文件中</li><li><code>config</code> （如：configUSE_PREEMPTION）在 <code>FreeRTOSConfig.h</code> 文件中</li><li><code>err</code> （如：errQUEUE_FULL）在 <code>projdefs.h</code> 文件中</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>这里有个地方要注意的是<strong>信号量</strong>的函数都是一个宏定义，但是它的函数的命名方法是遵循<strong>函数</strong>的命名方法而不是宏定义的方法。</p></div><h3 id="值为-0-或-1-的宏" tabindex="-1"><a class="header-anchor" href="#值为-0-或-1-的宏" aria-hidden="true">#</a> 值为 0 或 1 的宏</h3><table><thead><tr><th>宏</th><th>实际值</th></tr></thead><tbody><tr><td>pdTRUE</td><td>1</td></tr><tr><td>pdFALSE</td><td>0</td></tr><tr><td>pdPASS</td><td>1</td></tr><tr><td>pdFAIL</td><td>0</td></tr></tbody></table>`,17),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","data-type.html.vue"]]);export{d as default};
