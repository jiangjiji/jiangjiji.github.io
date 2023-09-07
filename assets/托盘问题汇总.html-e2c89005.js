import{_ as e,o as s,c as a,a as i}from"./app-9862bb06.js";const n={},t=i(`<h1 id="托盘开发问题汇总" tabindex="-1"><a class="header-anchor" href="#托盘开发问题汇总" aria-hidden="true">#</a> 托盘开发问题汇总</h1><h3 id="杀进程前-需要提前关闭托盘图片" tabindex="-1"><a class="header-anchor" href="#杀进程前-需要提前关闭托盘图片" aria-hidden="true">#</a> 杀进程前，需要提前关闭托盘图片</h3><p>杀进程前如果不关闭托盘，会让托盘区域一直残留托盘图标。</p><h3 id="托盘图标设置隐藏时可能会报错" tabindex="-1"><a class="header-anchor" href="#托盘图标设置隐藏时可能会报错" aria-hidden="true">#</a> 托盘图标设置隐藏时可能会报错</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exception class    : EOutOfResources
exception message  : Cannot remove shell notification icon.

main thread ($8e0):
00774908 +0e8 iEasyDesk.exe Vcl.ExtCtrls  9604 +14 TCustomTrayIcon.SetVisible
007f2e03 +033 iEasyDesk.exe Vcl.Forms     3732  +3 TCustomForm.DoDestroy
0040ca35 +015 iEasyDesk.exe System       15046  +5 TObject.Free
007f2cd2 +1e2 iEasyDesk.exe Vcl.Forms     3706 +32 TCustomForm.Destroy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在开发IED 2.1的时候发现，设置图标隐藏时，系统可能会报错Cannot remove shell notification icon。</p>`,6),r=[t];function c(d,o){return s(),a("div",null,r)}const m=e(n,[["render",c],["__file","托盘问题汇总.html.vue"]]);export{m as default};
