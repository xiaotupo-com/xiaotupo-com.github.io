import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<p><code>Java</code> 中的接口和抽象类有些相似，多是用户被继承并且实现多态接口。</p><p>可以定义 <code>Default</code> 接口方法，这样可以给接口方法一个默认实现，实现该接口是可以不重写 <code>Default</code> 方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * FileName		: Person.java
 * Description	: Java 接口定义
 */</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaotupo</span><span class="token punctuation">;</span>

<span class="token comment">// Person 接口</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%s ------ Default\\n&quot;</span><span class="token punctuation">,</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * FileName		: InterfaceTest.java
 * Description	: Java 接口定义测试
 */</span>

<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaotupo<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>xiaotupo<span class="token punctuation">.</span></span><span class="token class-name">Person</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">InterfaceTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token class-name">Student</span> zhangpu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;张浦&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		zhangpu<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		zhangpu<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;张大浦&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		zhangpu<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>


	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口静态字段" tabindex="-1"><a class="header-anchor" href="#接口静态字段" aria-hidden="true">#</a> 接口静态字段</h2><p><code>interface</code> 可以定义静态自动，并且必须为 <code>final</code>，因为<code>interface</code>的字段只能是<code>public static final</code>类型，所以我们可以把这些修饰符都去掉，上述代码可以简写为：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token comment">// 编译器会自动加上public statc final:</span>
    <span class="token keyword">int</span> <span class="token constant">MALE</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token constant">FEMALE</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","interface.html.vue"]]);export{d as default};
