import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"HTTP/1.1 通用首部字段","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/1 网络/2-HTTP1.1.md","filePath":"markdown/1-前端/1-Web/1 网络/2-HTTP1.1.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/1 网络/2-HTTP1.1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="http-1-1-通用首部字段" tabindex="-1">HTTP/1.1 通用首部字段 <a class="header-anchor" href="#http-1-1-通用首部字段" aria-label="Permalink to &quot;HTTP/1.1 通用首部字段&quot;">​</a></h1><h2 id="cache-control" tabindex="-1">Cache-Control <a class="header-anchor" href="#cache-control" aria-label="Permalink to &quot;Cache-Control&quot;">​</a></h2><ul><li>操作缓存的工作机制</li><li>多个指令之间通过“,”分隔</li></ul><p>缓存请求指令</p><table><thead><tr><th>指令</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>no-cache</td><td>无</td><td>强制向源服务器再次验证</td></tr><tr><td>no-store</td><td>无</td><td>不缓存请求或响应的任何内容</td></tr><tr><td>max-age = [秒]</td><td>必需</td><td>响应的最大 Age 值</td></tr><tr><td>max-stale = [秒]</td><td>可省略</td><td>接收已过期的响应</td></tr><tr><td>min-fresh = [秒]</td><td>必需</td><td>期望在指定时间内的响应仍有效</td></tr><tr><td>no-transform</td><td>无</td><td>代理不可更改媒体类型</td></tr><tr><td>only-if-cached</td><td>无</td><td>从缓存获取资源</td></tr><tr><td>cache-extension</td><td>无</td><td>新指令标记（token）</td></tr></tbody></table><p>缓存响应指令</p><table><thead><tr><th>指令</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>public</td><td>无</td><td>可向任意方提供响应的缓存</td></tr><tr><td>private</td><td>可省略</td><td>仅向特定用户返回响应</td></tr><tr><td>no-cache</td><td>可省略</td><td>缓存前必须先确认其有效性</td></tr><tr><td>no-store</td><td>无</td><td>不缓存请求或响应的任何内容</td></tr><tr><td>no-transform</td><td>无</td><td>代理不可更改媒体类型</td></tr><tr><td>must-revalidate</td><td>无</td><td>可缓存但必须再向源服务器进行确认</td></tr><tr><td>proxy-revalidate</td><td>无</td><td>要求中间缓存服务器对缓存的响应有效性再进行确认</td></tr><tr><td>max-age = [秒]</td><td>必需</td><td>响应的最大 Age 值</td></tr><tr><td>s-maxage = [秒]</td><td>必需</td><td>公共缓存服务器响应的最大 Age 值</td></tr><tr><td>cache-extension</td><td>无</td><td>新指令标记（token）</td></tr></tbody></table><blockquote><p>通过 cache-extension 标记（token），可以扩展 Cache-Control 首部字段内的指令</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Cache-Control</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> private, community=&quot;UCI&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如上例，Cache-Control 首部字段本身没有 community 这个指令。借助 extension tokens 实现了该指令的添加。如果缓存服务器不能理解 community 这个新指令，就会直接忽略</p></blockquote><h2 id="connection" tabindex="-1">Connection <a class="header-anchor" href="#connection" aria-label="Permalink to &quot;Connection&quot;">​</a></h2><ul><li>控制不再转发给代理的首部字段</li></ul><p><img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051437248.png" alt=""></p><ul><li><p>管理持久连接</p><ul><li><code>Connection: Keep-Alive</code> 持久连接</li><li><code>Connection: close</code> 当服务器端想明确断开连接时，则指定为 <strong>close</strong></li></ul></li></ul><h2 id="date" tabindex="-1">Date <a class="header-anchor" href="#date" aria-label="Permalink to &quot;Date&quot;">​</a></h2><ul><li>表明创建 HTTP 报文的日期和时间</li></ul><p>HTTP 1.0 采用 RFC850 格式</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Date</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Tue, 03-Jul-12 04:40:59 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>HTTP 1.1 采用 RFC1123 格式</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Date</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Tue, 03 Jul 2012 04:40:59 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="trailer" tabindex="-1">Trailer <a class="header-anchor" href="#trailer" aria-label="Permalink to &quot;Trailer&quot;">​</a></h2><ul><li>说明在报文主体后记录了哪些首部字段</li></ul><h2 id="transfer-encoding" tabindex="-1">Transfer-Encoding <a class="header-anchor" href="#transfer-encoding" aria-label="Permalink to &quot;Transfer-Encoding&quot;">​</a></h2><ul><li>规定了传输报文主体时采用的编码方式</li></ul><h2 id="upgrade" tabindex="-1">Upgrade <a class="header-anchor" href="#upgrade" aria-label="Permalink to &quot;Upgrade&quot;">​</a></h2><ul><li>用于检测 HTTP 协议及其他协议是否可使用更高的 版本进行通信，其参数值可以用来指定一个完全不同的通信协议</li></ul><h2 id="via" tabindex="-1">Via <a class="header-anchor" href="#via" aria-label="Permalink to &quot;Via&quot;">​</a></h2><ul><li>追踪客户端与服务器之间的请求和响应报文的传输路径</li><li>报文经过代理或网关时，会先在首部字段 Via 中附加该服务器的信息，然后再进行转发</li></ul><h2 id="warning" tabindex="-1">Warning <a class="header-anchor" href="#warning" aria-label="Permalink to &quot;Warning&quot;">​</a></h2><ul><li>通常会告知用户一些与缓存相关的问题的警告</li></ul><p>格式</p><p><code>Warning: [警告码][警告的主机:端口号]“[警告内容]”([日期时间])</code></p><h1 id="http-1-1-请求首部字段" tabindex="-1">HTTP/1.1 请求首部字段 <a class="header-anchor" href="#http-1-1-请求首部字段" aria-label="Permalink to &quot;HTTP/1.1 请求首部字段&quot;">​</a></h1><h2 id="accept" tabindex="-1">Accept <a class="header-anchor" href="#accept" aria-label="Permalink to &quot;Accept&quot;">​</a></h2><ul><li>通知服务器，用户代理能够处理的媒体类型及媒体类型的相对优先级</li><li>可使用 <strong>type/subtype</strong> 这种形式，一次指定多种媒体类型</li></ul><p>常用列子</p><ul><li><p>文本文件</p><p>text/html, text/plain, text/css</p><p>application/xhtml+xml, application/xml</p></li><li><p>图片文件</p><p>image/jpeg, image/gif, image/png</p></li><li><p>视频文件</p><p>video/mpeg, video/quicktime</p></li><li><p>应用程序使用的二进制文件</p><p>application/octet-stream, application/zip</p></li></ul><h2 id="accept-charset" tabindex="-1">Accept-Charset <a class="header-anchor" href="#accept-charset" aria-label="Permalink to &quot;Accept-Charset&quot;">​</a></h2><ul><li>来通知服务器用户代理支持的字符集及字符集的相对优先顺序</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Accept-Charset</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> iso-8859-5, unicode-1-1;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="accept-encoding" tabindex="-1">Accept-Encoding <a class="header-anchor" href="#accept-encoding" aria-label="Permalink to &quot;Accept-Encoding&quot;">​</a></h2><ul><li>告知服务器用户代理支持的内容编码及 内容编码的优先级顺序</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Accept-Encoding</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> gzip, deflate</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>常用例子</p><ul><li><p><strong>gzip</strong></p><p>由文件压缩程序 gzip（GNU zip）生成的编码格式 （RFC1952），采用 Lempel-Ziv 算法（LZ77）及 32 位循环冗余校验（Cyclic Redundancy Check，通称 CRC）</p></li><li><p><strong>compress</strong></p><p>由 UNIX 文件压缩程序 compress 生成的编码格式，采用 LempelZiv-Welch 算法（LZW）</p></li><li><p><strong>deflate</strong></p><p>组合使用 zlib 格式（RFC1950）及由 deflate 压缩算法 （RFC1951）生成的编码格式</p></li><li><p><strong>identity</strong></p><p>不执行压缩或不会变化的默认编码格式</p></li></ul><h2 id="accept-language" tabindex="-1">Accept-Language <a class="header-anchor" href="#accept-language" aria-label="Permalink to &quot;Accept-Language&quot;">​</a></h2><ul><li>告知服务器用户代理能够处理的自然语言集</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Accept-Language</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> zh-cn,zh;q=0.7,en-us,en;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="authorization" tabindex="-1">Authorization <a class="header-anchor" href="#authorization" aria-label="Permalink to &quot;Authorization&quot;">​</a></h2><ul><li>用来告知服务器，用户代理的认证信息（证书值）</li></ul><p><img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051439315.png" alt=""></p><h2 id="from" tabindex="-1">From <a class="header-anchor" href="#from" aria-label="Permalink to &quot;From&quot;">​</a></h2><ul><li>用来告知服务器使用用户代理的用户的电子邮件地址</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Form</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> 543657931@qq.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="host" tabindex="-1">Host <a class="header-anchor" href="#host" aria-label="Permalink to &quot;Host&quot;">​</a></h2><ul><li>告知服务器，请求的资源所处的互联网主机名和端口号</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Host</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> www.kingmusi.xyz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="if-match" tabindex="-1">If-Match <a class="header-anchor" href="#if-match" aria-label="Permalink to &quot;If-Match&quot;">​</a></h2><ul><li>告知服务器匹配资源所用 的实体标记（ETag）值</li><li>服务器会比对 If-Match 的字段值和资源的 ETag 值，仅当两者一致时，才会执行请求。反之，则返回状态码 412 Precondition Failed 的响应</li><li>可以使用星号（*）指定 If-Match 的字段值，服务器将会忽略 ETag 的值，只要资源存在就处理请求</li></ul><h2 id="if-modified-since" tabindex="-1">If-Modified-Since <a class="header-anchor" href="#if-modified-since" aria-label="Permalink to &quot;If-Modified-Since&quot;">​</a></h2><ul><li>若 IfModified-Since 字段值早于资源的更新时间，则希望能处理该请求</li><li>在 If-Modified-Since 字段值的日期时间之后，如果请求的资源都没有过更新，则返回状态码 304 Not Modified 的响应</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">If-Modified-Since</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Thu, 15 Apr 2004 00:00:00 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="if-none-match" tabindex="-1">If-None-Match <a class="header-anchor" href="#if-none-match" aria-label="Permalink to &quot;If-None-Match&quot;">​</a></h2><ul><li>和首部字段 If-Match 作用相反</li><li>指定 If-None-Match 字段值的实体标记（ETag）值与请求资源的 ETag 不一致时，它就告知服务器处理该请求</li></ul><h2 id="if-range" tabindex="-1">If-Range <a class="header-anchor" href="#if-range" aria-label="Permalink to &quot;If-Range&quot;">​</a></h2><ul><li>若指定的 IfRange 字段值（ETag 值或者时间）和请求资源的 ETag 值或时间相一致时，则作为范围请求处理</li><li>反之，则返回全体资源</li></ul><h2 id="if-unmodified-since" tabindex="-1">If-Unmodified-Since <a class="header-anchor" href="#if-unmodified-since" aria-label="Permalink to &quot;If-Unmodified-Since&quot;">​</a></h2><ul><li>指定的请求资源只有在字段值内指定的日期时间之后，未发生更新的情况下，才能处理请求</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">If-Unmodified-Since</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Thu, 03 Jul 2012 00:00:00 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="max-forwards" tabindex="-1">Max-Forwards <a class="header-anchor" href="#max-forwards" aria-label="Permalink to &quot;Max-Forwards&quot;">​</a></h2><ul><li>通过 TRACE 方法或 OPTIONS 方法，发送包含首部字段 MaxForwards 的请求时，该字段以十进制整数形式指定可经过的服务器最大数目</li></ul><p><img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051439355.png" alt=""></p><h2 id="range" tabindex="-1">Range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;Range&quot;">​</a></h2><ul><li>器资源的指定范围</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Range</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> bytes=5001-10000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>请求获取从第 5001 字节至第 10000 字节的资源</p><h2 id="referer" tabindex="-1">Referer <a class="header-anchor" href="#referer" aria-label="Permalink to &quot;Referer&quot;">​</a></h2><ul><li>请求的原始资源的 URI</li><li>客户端一般都会发送 Referer 首部字段给服务器。但当直接在浏览器的地址栏输入 URI，或出于安全性的考虑时，也可以不发送该首部字段</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Referer</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> http://www.hackr.jp/index.htm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="te" tabindex="-1">TE <a class="header-anchor" href="#te" aria-label="Permalink to &quot;TE&quot;">​</a></h2><ul><li>会告知服务器客户端能够处理响应的传输编码方式及相对优先级</li><li>和首部字段 Accept-Encoding 的功能很相像</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">TE</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> gzip, deflate;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="user-agent" tabindex="-1">User-Agent <a class="header-anchor" href="#user-agent" aria-label="Permalink to &quot;User-Agent&quot;">​</a></h2><ul><li>将创建请求的浏览器和用户代理名称等信息传达给服务器</li></ul><h1 id="http-1-1-响应首部字段" tabindex="-1">HTTP/1.1 响应首部字段 <a class="header-anchor" href="#http-1-1-响应首部字段" aria-label="Permalink to &quot;HTTP/1.1 响应首部字段&quot;">​</a></h1><h2 id="accept-ranges" tabindex="-1">Accept-Ranges <a class="header-anchor" href="#accept-ranges" aria-label="Permalink to &quot;Accept-Ranges&quot;">​</a></h2><ul><li>来告知客户端服务器是否能处理范围请求，以指定获取服务器端某个部分的资源</li></ul><p><strong>bytes</strong>：可以</p><p><strong>none</strong>：不可以</p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Accept-Ranges</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> bytes</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="age" tabindex="-1">Age <a class="header-anchor" href="#age" aria-label="Permalink to &quot;Age&quot;">​</a></h2><ul><li>告知客户端，源服务器在多久前创建了响应。单位为秒</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Age</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> 600</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="etag" tabindex="-1">ETag <a class="header-anchor" href="#etag" aria-label="Permalink to &quot;ETag&quot;">​</a></h2><ul><li>告知客户端实体标识</li><li>客户端通过判断 ETag 值是否有改变，进行重新获取</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">ETag</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;82e22293907ce725faf67773957acd12&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="location" tabindex="-1">Location <a class="header-anchor" href="#location" aria-label="Permalink to &quot;Location&quot;">​</a></h2><ul><li><p>将响应接收方引导至某个与请求 URI 位置不同的资源</p></li><li><p>基本上，该字段会配合 3xx ：Redirection 的响应，提供重定向的 URI</p></li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Location</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> http://www.usagidesign.jp/sample.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="proxy-authenticate" tabindex="-1">Proxy-Authenticate <a class="header-anchor" href="#proxy-authenticate" aria-label="Permalink to &quot;Proxy-Authenticate&quot;">​</a></h2><ul><li>把由代理服务器所要求的认证信息发送给客户端</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Proxy-Authenticate</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Basic realm=&quot;Usagidesign Auth&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="retry-after" tabindex="-1">Retry-After <a class="header-anchor" href="#retry-after" aria-label="Permalink to &quot;Retry-After&quot;">​</a></h2><ul><li>告知客户端应该在多久之后再次发送请求</li><li>主要 配合状态码 503 Service Unavailable 响应，或 3xx Redirect 响应一起使用</li><li>字段值可以指定为具体的日期时间（Wed, 04 Jul 2012 06：34：24 GMT 等格式），也可以是创建响应后的秒数</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Retry-After</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> 120</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="server" tabindex="-1">Server <a class="header-anchor" href="#server" aria-label="Permalink to &quot;Server&quot;">​</a></h2><ul><li>告知客户端当前服务器上安装的 HTTP 服务器应用程序的信息</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Server</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Apache/2.2.6 (Unix) PHP/5.2.5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="vary" tabindex="-1">Vary <a class="header-anchor" href="#vary" aria-label="Permalink to &quot;Vary&quot;">​</a></h2><ul><li>对缓存进行控制。源服务器会向代理服务器传达关于本地缓存使用方法的命令</li></ul><p><img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051439453.png" alt=""></p><p>上图：当代理服务器接收到带有 Vary 首部字段指定获取资源的请求时，如果使用的 Accept-Language 字段的值相同，那么就直接从缓存返回响应。反之，则需要先从源服务器端获取资源后才能作为响应返回</p><h2 id="www-authenticate" tabindex="-1">WWW-Authenticate <a class="header-anchor" href="#www-authenticate" aria-label="Permalink to &quot;WWW-Authenticate&quot;">​</a></h2><ul><li>告知客户端适用于访问请求 URI 所指定资源的认证方案</li></ul><h1 id="http-1-1-实体首部字段" tabindex="-1">HTTP/1.1 实体首部字段 <a class="header-anchor" href="#http-1-1-实体首部字段" aria-label="Permalink to &quot;HTTP/1.1 实体首部字段&quot;">​</a></h1><h2 id="allow" tabindex="-1">Allow <a class="header-anchor" href="#allow" aria-label="Permalink to &quot;Allow&quot;">​</a></h2><ul><li>通知客户端能够支持 Request-URI 指定资源的所有 HTTP 方法</li><li>当服务器接收到不支持的 HTTP 方法时，会以状态码 405 Method Not Allowed 作为响应返回。并把所有能支持的 HTTP 方法写入首部字段 Allow 后返回</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Allow</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> GET, HEAD</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="content-encoding" tabindex="-1">Content-Encoding <a class="header-anchor" href="#content-encoding" aria-label="Permalink to &quot;Content-Encoding&quot;">​</a></h2><ul><li>会告知客户端服务器对实体的主体部分选用的内容编码方式</li></ul><p><img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051440867.png" alt=""></p><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Content-Encoding</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> gzip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="content-language" tabindex="-1">Content-Language <a class="header-anchor" href="#content-language" aria-label="Permalink to &quot;Content-Language&quot;">​</a></h2><ul><li>会告知客户端，实体主体使用的自然语言</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Content-Language</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> zh-CN</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="content-length" tabindex="-1">Content-Length <a class="header-anchor" href="#content-length" aria-label="Permalink to &quot;Content-Length&quot;">​</a></h2><ul><li>表明了实体主体部分的大小（单位是字节）</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Content-Length</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> 15000</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="content-location" tabindex="-1">Content-Location <a class="header-anchor" href="#content-location" aria-label="Permalink to &quot;Content-Location&quot;">​</a></h2><ul><li>报文主体部分相对应的 URI</li><li>和首部字段 Location 不同，Content-Location 表示的是报文主体返回资源对应的 URI</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Content-Location</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> http://www.hackr.jp/index-ja.html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="content-md5" tabindex="-1">Content-MD5 <a class="header-anchor" href="#content-md5" aria-label="Permalink to &quot;Content-MD5&quot;">​</a></h2><ul><li>Content-MD5 是一串由 MD5 算法生成的值，其目的在于检查报文主体在传输过程中是否保持完整，以及确认传输到达</li></ul><p><img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051440797.png" alt=""></p><p>上图例子：客户端会对接收的报文主体执行相同的 MD5 算法，然后与首部字段 Content-MD5 的字段值比较</p><h2 id="content-range" tabindex="-1">Content-Range <a class="header-anchor" href="#content-range" aria-label="Permalink to &quot;Content-Range&quot;">​</a></h2><ul><li>告知客户端作为响应返回的实体的哪个部分符合范围请求</li></ul><p><img src="https://cdn.jsdelivr.net/gh/raisew/gallery/wedoc/202401051440050.png" alt=""></p><h2 id="content-type" tabindex="-1">Content-Type <a class="header-anchor" href="#content-type" aria-label="Permalink to &quot;Content-Type&quot;">​</a></h2><ul><li>说明了实体主体内对象的媒体类型</li></ul><h2 id="expires" tabindex="-1">Expires <a class="header-anchor" href="#expires" aria-label="Permalink to &quot;Expires&quot;">​</a></h2><ul><li>会将资源失效的日期告知客户端</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Expires</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Wed, 04 Jul 2012 08:26:05 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="last-modified" tabindex="-1">Last-Modified <a class="header-anchor" href="#last-modified" aria-label="Permalink to &quot;Last-Modified&quot;">​</a></h2><ul><li>指明资源最终修改的时间</li></ul><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">Last-Modified</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">:</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> Wed, 23 May 2012 09:59:55 GMT</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="为-cookie-服务的首部字段" tabindex="-1">为 Cookie 服务的首部字段 <a class="header-anchor" href="#为-cookie-服务的首部字段" aria-label="Permalink to &quot;为 Cookie 服务的首部字段&quot;">​</a></h1><table><thead><tr><th>首部字段名</th><th>说明</th><th>首部类型</th></tr></thead><tbody><tr><td>Set-Cookie</td><td>开始状态管理所使用的 Cookie 信息</td><td>响应首部字段</td></tr><tr><td>Cookie</td><td>服务器接收到的 Cookie 信息</td><td>请求首部字段</td></tr></tbody></table><h2 id="set-cookie" tabindex="-1">Set-Cookie <a class="header-anchor" href="#set-cookie" aria-label="Permalink to &quot;Set-Cookie&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>NAME=VALUE</td><td>赋予 Cookie 的名称和其值（必需项）</td></tr><tr><td>expires=DATE</td><td>Cookie 的有效期（若不明确指定则默认为浏览器关闭前为止）</td></tr><tr><td>path=PATH</td><td>将服务器上的文件目录作为 Cookie 的适用对象（若不指定则默认为文档所在的文件目录）</td></tr><tr><td>domain=域名</td><td>作为 Cookie 适用对象的域名 （若不指定则默认为创建 Cookie 的服务器的域名）</td></tr><tr><td>Secure</td><td>仅在 HTTPS 安全通信时才会发送 Cookie</td></tr><tr><td>HttpOnly</td><td>加以限制，使 Cookie 不能被 JavaScript 脚本访问</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/1 网络/2-HTTP1.1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2HTTP1_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2HTTP1_1 as default
};
