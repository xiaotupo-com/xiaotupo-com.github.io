import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p><strong>任务通知</strong> 是 <code>FreeRTOS</code> 提供的任务和任务之间直接通信的一种方式。（每个）任务都有一个<strong>任务通知值</strong>和<strong>任务通知状态</strong>，我们可以在任务<code>A</code> 中给任务<code>B</code> 发送任务通知，任务通知的类型有一下几种：</p><p>发送任务通知用 <code>xTaskNotify()</code> 函数，该函数是<strong>高级</strong>版本的任务通知函数，另外还有精简版，精简版的以后再说，<code>xTaskNotify()</code> 原型如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>BaseType_t <span class="token function">xTaskNotify</span><span class="token punctuation">(</span> TaskHandle_t xTaskToNotify<span class="token punctuation">,</span>
                       <span class="token class-name">uint32_t</span> ulValue<span class="token punctuation">,</span>
                       eNotifyAction eAction<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>xTaskToNotify</code> 要发送给的任务句柄</li><li><code>ulValue</code> 把指定任务的任务通知值设置为该值</li><li><code>eAction</code> 指定发送任务的模式</li></ul><p><strong>eAction</strong> 枚举类型：</p><p><code>eNoAction</code> : 发送通知，但不更新值</p><p><code>eSetBits</code> : 被通知的通知值按位或ulValue。(某些场景下可代替事件组）</p><p><code>eIncrement</code> : 被通知任务的通知值增加1。可以用 <code>xTaskNotifyGive()</code> 代替更方便。</p><p><code>eSetValueWithOverWrite</code> : 被通知任务的通知值设为 <code>ulValue</code>。某些场景下可代替 <code>xQueueOverwrite</code></p><p><code>eSetValueWithoutOverwrite</code> : 如果被通知的任务当前没有通知，则被通知的任务的通知值设为 <code>ulValue</code>。如果被通知任务没有取走上一个通知，又接收到了一个通知，则这次通知值丢弃，在这种情况下视为调用失败并返回pdFALSE（某些场景下可代替<code>xQueueSend</code>，效率更高）</p><h2 id="freertosconfig-h-配置" tabindex="-1"><a class="header-anchor" href="#freertosconfig-h-配置" aria-hidden="true">#</a> FreeRTOSConfig.h 配置</h2><p>要使用任务通知，首先要在 <code>FreeRTOSConfig.h</code> 中把 <code>configUSE_TASK_NOTIFICATIONS</code> 设置为 <code>1</code>。</p><p>当 <code>configUSE_TASK_NOTIFICATIONS</code> 设置为 <code>1</code> 时，每个任务都有一个“<code>通知状态</code>”，可以是“未决”或“未未决”，还有一个“通知值”，这是一个32位的无符号整数。当任务收到通知时，其通知状态被设置为挂起。当任务读取其通知值时，其通知状态被设置为不挂起。</p><h2 id="任务通知的优点" tabindex="-1"><a class="header-anchor" href="#任务通知的优点" aria-hidden="true">#</a> 任务通知的优点</h2><p>使用<strong>任务通知</strong>来向任务发送事件或数据比使用<strong>队列</strong>、<strong>信号量</strong>或<strong>事件组</strong>来执行等效的操作要<strong>快</strong>得多。</p><p>同样地，使用<strong>任务通知</strong>来向任务发送事件或数据所需的<strong>RAM</strong>比使用<strong>队列、信号量或事件组</strong>来执行等效操作所需的<code>RAM</code>要<strong>少</strong>得多。这是因为每个通信对象（队列、信号量或事件组）必须创建才能使用，而启用任务通知功能，每个任务只有8个字节的RAM开销.</p><h2 id="任务通知的限制" tabindex="-1"><a class="header-anchor" href="#任务通知的限制" aria-hidden="true">#</a> 任务通知的限制</h2><p>任务通知不能在所有场景中使用。本节记录了无法使用任务通知的场景：</p><ul><li>向ISR发送事件或数据</li></ul><p>通信对象可用于将事件和数据从ISR发送到任务，并从任务发送到ISR。</p><p>任务通知可用于将事件和数据从ISR发送到任务，但它们不能用于将事件或数据从任务发送到ISR。</p><ul><li>启用多个接收任务</li></ul><p>通信对象可以由任何知道其句柄（可能是队列句柄、信号量句柄的任务或ISR来访问，或由事件组句柄）来访问。任意数量的任务和isr都可以处理发送到任何给定通信对象的事件或数据。</p><p>任务通知直接发送到接收任务，因此只能由将通知发送到的任务。然而，在实际情况下，这很少是一种限制 因为，虽然有多个任务和isr发送到同一个通信对象是很常见的，但很少有多个任务和isr从同一个通信对象接收 沟通对象。</p><ul><li>广播到多个任务</li></ul><p>事件组是一种通信对象，可用于一次向多个任务发送一个事件。</p><ul><li>任务通知被直接发送到接收任务，因此只能由接收任务进行处理。</li></ul><h2 id="任务通知-api-列表" tabindex="-1"><a class="header-anchor" href="#任务通知-api-列表" aria-hidden="true">#</a> 任务通知 API 列表</h2><p>在大多数情况下，不需要<code>xTaskNotify()</code>任务通知和<code>xTaskNotifyWait()</code>任务通知等待API函数所提供的完全灵活性，而是使用简单版本的函数就足够了。因此， <code>xTaskNotifyGive()</code> API函数作为简单版本的 <code>xTaskNotify()</code>代替品，而 <code>ulTaskNotifyTake()</code> API函数作为一个简单版本的 <code>xTaskNotifyWait()</code> 函数的代替品。</p><ol><li><code>xTaskNotify()</code> 发送通知</li><li><code>xTaskNotifyWait()</code> 等待通知</li><li><code>xTaskNotifyGive()</code> 发送通知</li><li><code>ulTaskNotifyTake()</code> 等待通知</li></ol><h2 id="xtasknotify-例子" tabindex="-1"><a class="header-anchor" href="#xtasknotify-例子" aria-hidden="true">#</a> xTaskNotify() 例子</h2><p>函数原型：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>BaseType_t <span class="token function">xTaskNotify</span><span class="token punctuation">(</span> TaskHandle_t xTaskToNotify<span class="token punctuation">,</span> 
                        <span class="token class-name">uint32_t</span> ulValue<span class="token punctuation">,</span> 
                        eNotifyAction eAction <span class="token punctuation">)</span><span class="token punctuation">;</span>

BaseType_t <span class="token function">xTaskNotifyFromISR</span><span class="token punctuation">(</span> TaskHandle_t xTaskToNotify<span class="token punctuation">,</span> 
                               <span class="token class-name">uint32_t</span> ulValue<span class="token punctuation">,</span> 
                               eNotifyAction eAction<span class="token punctuation">,</span>
                               BaseType_t <span class="token operator">*</span>pxHigherPriorityTaskWoken <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子1-enoaction" tabindex="-1"><a class="header-anchor" href="#例子1-enoaction" aria-hidden="true">#</a> 例子1 eNoAction</h3><p>该例子演示了 <code>eAction</code> 为 <code>eNoAction</code> 的情况，这是参数 <code>ulValue</code> 将失效不使用，对应的使用 <code>ulTaskNotifyTake()</code> 函数接收通知时就无需获取返回值。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 发送通知的任务</span>
<span class="token keyword">void</span> <span class="token function">keys_task</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span> pvParametrs<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>state <span class="token operator">==</span> CLICK<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">xTaskNotify</span><span class="token punctuation">(</span>user_led_handle<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> eNoAction <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 发送任务通知，被接受任务将会接触阻塞态</span>
            user_key<span class="token punctuation">.</span>long_down_ms <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		    user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		    user_key<span class="token punctuation">.</span>state <span class="token operator">=</span> None<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">user_led_task</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>pvParameters<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">uint32_t</span> ulNotifyValue<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">/* 等待用户按键单击通知 */</span>
        <span class="token comment">/* 在没有接收到任务通知时，该任务处于阻塞态，接到任务通知后则会解除阻塞态，接着指向 LED 反转，等到下一个周期该任务再一次进入阻塞态 */</span>
		<span class="token function">ulTaskNotifyTake</span><span class="token punctuation">(</span>pdTRUE<span class="token punctuation">,</span> portMAX_DELAY<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">led_toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子2-esetbits" tabindex="-1"><a class="header-anchor" href="#例子2-esetbits" aria-hidden="true">#</a> 例子2 eSetBits</h3><p>该例子演示了 <code>eAction</code> 为 <code>eSetBits</code> 的情况，被通知的通知值按位或<code>ulValue</code>。(某些场景下可代替事件组）</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 发送通知的任务</span>
<span class="token keyword">void</span> <span class="token function">keys_task</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span> pvParametrs<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">uint8_t</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>state <span class="token operator">==</span> CLICK<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// num 为偶数 让 1 与接收任务的通知值相或</span>
			    <span class="token function">xTaskNotify</span><span class="token punctuation">(</span>user_led_handle<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span><span class="token number">1</span><span class="token punctuation">,</span> eSetBits <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token comment">// num 为奇数 让 2 与接收任务的通知值相或</span>
                <span class="token function">xTaskNotify</span><span class="token punctuation">(</span>user_led_handle<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span><span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">,</span> eSetBits <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>            


            user_key<span class="token punctuation">.</span>long_down_ms <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		    user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		    user_key<span class="token punctuation">.</span>state <span class="token operator">=</span> None<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">user_led_task</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>pvParameters<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">uint32_t</span> ulNotifyValue<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">/* 等待用户按键单击通知 */</span>
		ulNotifyValue <span class="token operator">=</span> <span class="token function">ulTaskNotifyTake</span><span class="token punctuation">(</span>pdTRUE<span class="token punctuation">,</span> portMAX_DELAY<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 根据 ulNotifyValue 的值来执行相应的操作</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ulNotifyValue <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">led_toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span>ulNotifyValue <span class="token operator">==</span> <span class="token number">1</span><span class="token operator">&lt;&lt;</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">led_toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">vTaskDelay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">led_toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="例子3-eincrement" tabindex="-1"><a class="header-anchor" href="#例子3-eincrement" aria-hidden="true">#</a> 例子3 eIncrement</h3><p>eIncrement : 被通知任务的通知值增加1，形参中的 <code>ulValue</code> 将失效不使用。可以用 xTaskNotifyGive() 代替更方便。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 发送通知的任务</span>
<span class="token keyword">void</span> <span class="token function">keys_task</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token operator">*</span> pvParametrs<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>state <span class="token operator">==</span> CLICK<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">xTaskNotify</span><span class="token punctuation">(</span>user_led_handle<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> eIncrement <span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 发送一次通知，被通知任务的通知值将会加一     </span>
            user_key<span class="token punctuation">.</span>long_down_ms <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		    user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		    user_key<span class="token punctuation">.</span>state <span class="token operator">=</span> None<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xtasknotifywait" tabindex="-1"><a class="header-anchor" href="#xtasknotifywait" aria-hidden="true">#</a> xTaskNotifyWait()</h2><p>函数原型：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>BaseType_t <span class="token function">xTaskNotifyWait</span><span class="token punctuation">(</span> <span class="token class-name">uint32_t</span> ulBitsToClearOnEntry<span class="token punctuation">,</span>
                            <span class="token class-name">uint32_t</span> ulBitsToClearOnExit<span class="token punctuation">,</span>
                            <span class="token class-name">uint32_t</span> <span class="token operator">*</span>pulNotificationValue<span class="token punctuation">,</span>
                            TickType_t xTicksToWait <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ulBitsToClearOnEntry</li></ul><p><code>ulBitsToClearOnEntry</code> 表示在使用通知之前，将任务通知值的哪些位清 <code>0</code>，实现过程就是将任务的通知值与参数 <code>ulBitsToClearOnEntry</code> 的按位取反值按位与操作。如果 <code>ulBitsToClearOnEntry</code> 设置为 <code>0x01</code>，那么在函数进入前，任务通知值的位1会被清 <code>0</code>，其他位保持不变。如果 <code>ulBitsToClearOnEntry</code> 设置为 <code>0xFFFFFFFF</code> (<code>ULONG_MAX</code>)，那么在进入函数前任务通知值的所有位都会被清 <code>0</code>，表示清零任务通知值</p><ul><li>ulBitsToClearOnExit</li></ul><p><code>ulBitsToClearOnExit</code> 表示在函数 <code>xTaskNotifyWait()</code> 退出前，决定任务接收到的通知值的哪些位会被清 <code>0</code>，实现过程就是将任务的通知值与参数 <code>ulBitsToClearOnExit</code> 的按位取反值按位与操作。在清 <code>0</code> 前，接收到的任务通知值会先被保存到形参 <code>*pulNotificationValue</code> 中。如果 <code>ulBitsToClearOnExit</code> 设置为 <code>0x03</code>，那么在函数退出前，接收到的任务通知值的位 <code>0</code> 和位 <code>1</code> 会被清 <code>0</code>，其他位保持不变。如果 <code>ulBitsToClearOnExi</code> 设 置 为 <code>0xFFFFFFFF</code>(<code>ULONG_MAX</code>)，那么在退出函数前接收到的任务通知值的所有位都会被清 <code>0</code>，表示退出时清零任务通知值</p><ul><li>pulNotificationValue</li></ul><p>用于保存接收到的任务通知值。如果接收到的任务通知不需要使用，则设置为 <code>NULL</code> 即可。这个通知值在参数 <code>ulBitsToClearOnExit</code> 起作用前将通知值拷贝到 <code>*pulNotificationValue</code> 中</p><h2 id="任务通知例子1" tabindex="-1"><a class="header-anchor" href="#任务通知例子1" aria-hidden="true">#</a> 任务通知例子1</h2><p>该例子中创建了2个任务，一个 <code>user_led_task()</code> 任务和一个 <code>key_task()</code> 任务，当按键任务检测到按键单击了，就发送一个通知给<code>user_led_task</code>任务，<code>user_led_task</code> 任务在没有收到通知时是处于<strong>挂起态</strong>的，接收到通知后会进入<strong>运行态</strong>。</p><h3 id="按键任务函数" tabindex="-1"><a class="header-anchor" href="#按键任务函数" aria-hidden="true">#</a> 按键任务函数</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">key_task</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>pvParameters<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		user_key<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>mode<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// handle 函数指针指向 keys_user_key_handle() 函数</span>
		<span class="token function">vTaskDelay</span><span class="token punctuation">(</span><span class="token function">pdMS_TO_TICKS</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">keys_user_key_handle</span><span class="token punctuation">(</span>KeyMode mode<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">static</span> <span class="token class-name">uint8_t</span> dir <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">/* 按键单击处理 */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>state <span class="token operator">==</span> CLICK<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;CLICK\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token function">xTaskNotifyGive</span><span class="token punctuation">(</span>user_led_handle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 发送通知给 user_led_handle 任务句柄</span>

		user_key<span class="token punctuation">.</span>long_down_ms <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		user_key<span class="token punctuation">.</span>state <span class="token operator">=</span> None<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>state <span class="token operator">==</span> HOLD_OR_LOND_DOWN<span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">/* 判断按键模式 */</span>
		<span class="token keyword">switch</span> <span class="token punctuation">(</span>mode<span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
		<span class="token keyword">case</span> HOLD_MODE<span class="token operator">:</span> <span class="token comment">/* 按住按键不松开 */</span>
			<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;HOLD_MODE\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">/* 闪烁频率减小 */</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>led_hz <span class="token operator">&lt;=</span> <span class="token number">250</span> <span class="token operator">&amp;&amp;</span> dir <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>led_hz <span class="token operator">==</span> <span class="token number">250</span><span class="token punctuation">)</span>
					dir <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
				led_hz<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">/* 闪烁频率增大 */</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>led_hz <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> dir <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>led_hz <span class="token operator">==</span> <span class="token number">10</span><span class="token punctuation">)</span>
					dir <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
				led_hz<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token function">vTaskDelay</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>key_buf <span class="token operator">==</span> <span class="token number">0xffffffff</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				user_key<span class="token punctuation">.</span>long_down_ms <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
				user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
				user_key<span class="token punctuation">.</span>state <span class="token operator">=</span> None<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">case</span> LONG_DOWN_MODE<span class="token operator">:</span> <span class="token comment">/* 按住按键超过指定时长后松开 */</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>key_buf <span class="token operator">==</span> <span class="token number">0xffffffff</span><span class="token punctuation">)</span>
			<span class="token punctuation">{</span>
				<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;LONG_DOWN_MODE \\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				user_key<span class="token punctuation">.</span>long_down_ms <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
				user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
				user_key<span class="token punctuation">.</span>state <span class="token operator">=</span> None<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>

		<span class="token keyword">default</span><span class="token operator">:</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="led-任务函数" tabindex="-1"><a class="header-anchor" href="#led-任务函数" aria-hidden="true">#</a> LED 任务函数</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">user_led_task</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>pvParameters<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name">uint32_t</span> ulNotifyValue<span class="token punctuation">;</span> <span class="token comment">// 用来接收任务通知值的变量</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment">/* 等待用户按键单击通知，在任务通知没有接收到通知时该任务处于阻塞态 */</span>
		ulNotifyValue <span class="token operator">=</span> <span class="token function">ulTaskNotifyTake</span><span class="token punctuation">(</span>pdTRUE<span class="token punctuation">,</span> portMAX_DELAY<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ulNotifyValue <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token function">led_toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","task-notify.html.vue"]]);export{d as default};
