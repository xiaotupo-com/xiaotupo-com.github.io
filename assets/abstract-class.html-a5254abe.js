import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<p><code>Java</code> 中的抽象类不能实例化，只能用来当作基类来使用。</p><p>抽象类中的抽象方法的访问权限只能是 <code>public</code> 或 <code>protected</code>，不能设置为 <code>private</code>。</p><p>抽象类可以定义哪些内容：</p><ul><li>可以定义抽象方法</li><li>可以定义成员变量</li><li>可以定义构造函数</li><li>可以定义成员函数</li><li>可以定义静态方法</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * FileName: AbstractClass.java
 * Java 抽象类练习
 */</span>
<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaotupo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractClass</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> message<span class="token punctuation">;</span>
	<span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 定义一个抽象方法</span>
	
	<span class="token comment">// 构造函数</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractClass</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated constructor stub</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> s<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 定义一个普通成员函数，可以被子类调用</span>
	<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">runPrintMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token comment">// 定义一个静态方法</span>
	
	<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printAbstract</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;printAbstract()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * FileName: Main.java
 * main() 函数文件
 * Java 基础知识练习
 * 日期：2023-3-22
 */</span>


<span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaotupo</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		
		<span class="token comment">// 创建一个 AbstractClassTest 类</span>
		<span class="token class-name">AbstractClass</span> ac <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbstractClassTest</span><span class="token punctuation">(</span><span class="token string">&quot;抽象类测试&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ac<span class="token punctuation">.</span><span class="token function">runPrintMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ac<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		ac<span class="token punctuation">.</span><span class="token function">runPrintMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">AbstractClassTest</span><span class="token punctuation">.</span><span class="token function">printAbstract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractClass</span><span class="token punctuation">.</span><span class="token function">printAbstract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------- 程序运行结束! --------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">AbstractClassTest</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractClass</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token class-name">AbstractClassTest</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// TODO Auto-generated constructor stub</span>
	<span class="token punctuation">}</span>
	
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">printMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;------ %s -----\\n&quot;</span><span class="token punctuation">,</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractClass</span><span class="token punctuation">.</span><span class="token function">printAbstract</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","abstract-class.html.vue"]]);export{d as default};
