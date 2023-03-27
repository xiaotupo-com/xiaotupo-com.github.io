import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<p>如果用 <code>System.out.println();</code> 来作为 <code>java</code> 的调试方法会很麻烦，需要时到处都是 <code>println()</code> ，不需要时还要到处找让后删掉或注释起来，使用日志可以很好的解决这些问题。</p><p><code>Java</code> 中的日志输出时可以控制的，并且还分为不同的等级，如：警告、提示、错误等。我们可以控制显示那个级别的信息，也可以控制不显示。</p><p>例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaotupo<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span></span><span class="token class-name">Level</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>logging<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">Logger</span><span class="token punctuation">.</span><span class="token function">getGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		logger<span class="token punctuation">.</span><span class="token function">setLevel</span><span class="token punctuation">(</span><span class="token class-name">Level</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 等级控制</span>
		logger<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">&quot;警告信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;提示信息&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		logger<span class="token punctuation">.</span><span class="token function">severe</span><span class="token punctuation">(</span><span class="token string">&quot;severe(严重的)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		logger<span class="token punctuation">.</span><span class="token function">fine</span><span class="token punctuation">(</span><span class="token string">&quot;fine tip&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在 Elcipse 中基于模块化时，需要在 <code>module-info.java</code> 中加上请求日志依赖的代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> freer
 *
 */</span>
<span class="token keyword">module</span> <span class="token namespace">javaLearn</span> <span class="token punctuation">{</span>
	<span class="token keyword">requires</span> <span class="token namespace">java<span class="token punctuation">.</span>logging</span><span class="token punctuation">;</span> <span class="token comment">// 请求使用日志系统</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,5),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","logger.html.vue"]]);export{d as default};
