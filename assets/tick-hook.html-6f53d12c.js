import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<p><code>FreeRTOS</code> 滴答定时器钩子函数例子，下面是滴答定时器钩子函数的实现，首先要在 <code>FreeRTOSConfig.h</code> 中配置 <code>configUSE_IDLE_HOOK</code> 为 <code>0</code>。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* 滴答定时器钩子函数 */</span>
<span class="token keyword">void</span> <span class="token function">vApplicationTickHook</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token comment">//	/* 1sm 执行一次 */</span>
	FlagStatus key_state <span class="token operator">=</span> USER_KEY_STATE<span class="token punctuation">;</span> <span class="token comment">/* 读取按键当前状态 */</span>

	user_key<span class="token punctuation">.</span>key_buf <span class="token operator">=</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>key_buf <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> key_state<span class="token punctuation">;</span> <span class="token comment">/* key_buf 左移一位，并或上按键状态 key_state */</span>

	<span class="token comment">/* 如果 32sm 内 32次读到的状态都为 0 代表按键按下了 */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>key_buf <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span><span class="token number">0x00000000</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/* 如果 ok_down_flag 等于 1  */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		user_key<span class="token punctuation">.</span>long_down_ms<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">/* 如果 long_down_ms 小于 LONG_DOWN_FLAG_MS 则为短按 */</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>key_buf <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span><span class="token number">0xffffffff</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>long_down_ms <span class="token operator">&lt;</span> LONG_DOWN_FLAG_MS<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>ok_down_flag <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		user_key<span class="token punctuation">.</span>state <span class="token operator">=</span> CLICK<span class="token punctuation">;</span> <span class="token comment">/* 单击 */</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>user_key<span class="token punctuation">.</span>long_down_ms <span class="token operator">&gt;</span> LONG_DOWN_FLAG_MS <span class="token operator">&amp;&amp;</span> user_key<span class="token punctuation">.</span>key_buf <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span><span class="token number">0x00000000</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		user_key<span class="token punctuation">.</span>state <span class="token operator">=</span> HOLD_OR_LOND_DOWN<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>FreeRTOSConfig.h</code> :</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**
 * 配置滴答定时器钩子函数；
 * 1: 使能滴答定时器中断里面执行的钩子函数
 * 0: 禁能滴答定时器里面执行的钩子函数
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">configUSE_TICK_HOOK</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","tick-hook.html.vue"]]);export{k as default};
