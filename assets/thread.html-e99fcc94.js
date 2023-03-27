import{_ as n,p as s,q as a,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<p>Java 有一个住线程就是 <code>main</code> 线程，在 <code>main()</code> 函数中执行的内容就是主线程。</p><h2 id="继承-thread" tabindex="-1"><a class="header-anchor" href="#继承-thread" aria-hidden="true">#</a> 继承 Thread</h2><p>第一种创建线程的方式是，定义一个继承自 <code>Thread</code> 的类，并且重写 <code>run</code> 方法。</p><p><strong>特点</strong></p><p>由于是继承方式，所以不建议使用，因为Java 是单继承的，不够灵活</p><p>Thread类本质也是实现Runnable接口（public class Thread implements Runnable）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaotupo<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		
		<span class="token class-name">MyThread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">&quot;Thread---------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">MyThread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">&quot;--------Thread1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">MyThread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">&quot;Thread2---------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">MyThread</span> thread3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token string">&quot;--------Thread3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		thread3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> nameString<span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated constructor stub</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>nameString <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
<span class="token comment">//		super.run();</span>
		
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">500000000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nameString <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现-runnable-接口" tabindex="-1"><a class="header-anchor" href="#实现-runnable-接口" aria-hidden="true">#</a> 实现 Runnable 接口</h2><p>实现Runnable接口，重写run()方法</p><p>创建Runnable实现类的实例，并用这个实例作为Thread的target来创建Thread对象</p><p>调用Thread类实例对象的start()方法启动线程</p><p>特点</p><p>只是实现，保留了继承的其他类的能力</p><p>如果需要访问当前线程，必须使用Thread.currentThread()方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xiaotupo<span class="token punctuation">.</span>test</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		
		<span class="token class-name">XiaoRunnable</span> xiaoRunnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XiaoRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">Thread</span> thread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>xiaoRunnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		thread<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">XiaoRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[p];function o(l,i){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","thread.html.vue"]]);export{d as default};
