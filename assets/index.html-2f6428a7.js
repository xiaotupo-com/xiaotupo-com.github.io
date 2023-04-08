import{_ as n,p as s,q as a,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<p><code>C</code>语言是一门十分强大的编程语言，速度快小巧易学。</p><h2 id="大小端存储模式" tabindex="-1"><a class="header-anchor" href="#大小端存储模式" aria-hidden="true">#</a> 大小端存储模式</h2><p>大小端的定义：所谓大端(存储)模式，是指把数值的高位字节放在内存的低位地址上，把数值的低位字节放在内存的高位地址上。所谓小端(存储)模式，是指把数值的高位字节放在内存的高位地址上，把数值的低位字节放在内存的低位地址上。</p><p>为什么会有大端小端之分呢？我们知道，一个大于BYTE的数据类型在内存中存放要有先后顺序。对于像char这样的数据类型，本身只占一个字节的大小，不会产生什么问题，但是当数据类型为例如int时，在32bit的系统中，它需要占用4个字节，这时就会产生这4个字节在寄存器中的存放顺序问题。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">union</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> a<span class="token punctuation">;</span>
        <span class="token keyword">short</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> test<span class="token punctuation">;</span>

    test<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">0x0001</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>a <span class="token operator">==</span> <span class="token number">0x01</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Small\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Big\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>output: <code>Small</code></p><h2 id="输入型参数和输出型参数" tabindex="-1"><a class="header-anchor" href="#输入型参数和输出型参数" aria-hidden="true">#</a> 输入型参数和输出型参数</h2><p>下面例子中 <code>fun1()</code> 函数中的 <code>a</code> 为输入型参数，<code>b</code> 为输入型参数；传值参数为输入型参数，传地址则可能为输入型参数也可能为输出型参数，如果不修改传地址参数的值则可以用 <code>const</code> 修饰。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>b<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a: %d\\n&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">*</span>b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
   <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
   <span class="token function">fun1</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;num2: %d\\n&quot;</span><span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(t,[["render",o],["__file","index.html.vue"]]);export{d as default};
