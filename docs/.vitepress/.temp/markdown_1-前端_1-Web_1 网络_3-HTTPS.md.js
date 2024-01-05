import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.yVxbj29m.js";
const __pageData = JSON.parse('{"title":"HTTPS","description":"","frontmatter":{},"headers":[],"relativePath":"markdown/1-前端/1-Web/1 网络/3-HTTPS.md","filePath":"markdown/1-前端/1-Web/1 网络/3-HTTPS.md"}');
const _sfc_main = { name: "markdown/1-前端/1-Web/1 网络/3-HTTPS.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h1><h2 id="工作流程" tabindex="-1">工作流程 <a class="header-anchor" href="#工作流程" aria-label="Permalink to &quot;工作流程&quot;">​</a></h2><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202207280030498.png" alt=""></p><ol><li>用户在浏览器发起HTTPS请求，默认使用服务端的443端口进行连接；</li><li>HTTPS需要使用一套<strong>CA数字证书</strong>，证书内会附带一个<strong>公钥Pub</strong>，而与之对应的<strong>私钥Private</strong>保留在服务端不公开；</li><li>服务端收到请求，返回配置好的包含<strong>公钥Pub</strong>的证书给客户端；</li><li>客户端收到<strong>证书</strong>，校验合法性，主要包括是否在有效期内、证书的域名与请求的域名是否匹配，上一级证书是否有效（递归判断，直到判断到系统内置或浏览器配置好的根证书），如果不通过，则显示HTTPS警告信息，如果通过则继续；</li><li>客户端生成一个用于对称加密的<strong>随机Key</strong>，并用证书内的<strong>公钥Pub</strong>进行加密，发送给服务端；</li><li>服务端收到<strong>随机Key</strong>的密文，使用与<strong>公钥Pub</strong>配对的<strong>私钥Private</strong>进行解密，得到客户端真正想发送的<strong>随机Key</strong>；</li><li>服务端使用客户端发送过来的<strong>随机Key</strong>对要传输的HTTP数据进行对称加密，将密文返回客户端；</li><li>客户端使用<strong>随机Key</strong>对称解密密文，得到HTTP数据明文；</li><li>后续HTTPS请求使用之前交换好的<strong>随机Key</strong>进行对称加解密</li></ol><p>采用混合加密（对称加密和非对称加密）的方式是因为<strong>非对称加密</strong>保密性高，但CPU消耗、时间消耗大，只用在第一次连接，后面的持续的长连接采用<strong>对称加密</strong>，因为第一个连接使对称加密的密钥有保障，可以采用消耗更低的对称加密</p><h2 id="ca颁发机构" tabindex="-1">CA颁发机构 <a class="header-anchor" href="#ca颁发机构" aria-label="Permalink to &quot;CA颁发机构&quot;">​</a></h2><p>考虑<strong>中间人攻击</strong>的情况，非对称加密的算法都是<strong>公开</strong>的，所有人都可以自己生成一对公钥私钥。</p><p>当服务端向客户端返回公钥A1的时候，中间人将其<strong>替换</strong>成自己的公钥B1传送给浏览器。</p><p>而浏览器此时一无所知，傻乎乎地使用公钥B1加密了密钥K发送出去，又被<strong>中间人截获</strong>，中间人利用自己的私钥B2解密，得到密钥K，再使用服务端的公钥A1加密传送给服务端，完成了通信链路，而服务端和客户端毫无感知。</p><p><img src="https://cdn.jsdelivr.net/gh/kingmusi/blogImages/img/202204111918882.png" alt=""></p><p>所以通过<strong>数字签名</strong>防伪</p><ol><li>CA机构拥有自己的一对公钥和私钥</li><li>CA机构在颁发证书时对证书明文信息进行哈希</li><li>将哈希值用私钥进行<strong>加签</strong>，得到数字签名</li></ol><h5 id="明文数据和数字签名组成证书-传递给客户端。" tabindex="-1">明文数据和数字签名组成证书，传递给客户端。 <a class="header-anchor" href="#明文数据和数字签名组成证书-传递给客户端。" aria-label="Permalink to &quot;明文数据和数字签名组成证书，传递给客户端。&quot;">​</a></h5><ol><li>客户端得到证书，分解成明文部分Text和数字签名Sig1</li><li>用CA机构的公钥进行<strong>解签</strong>，得到Sig2（由于CA机构是一种公信身份，因此在系统或浏览器中会内置CA机构的证书和公钥信息）</li><li>用证书里声明的哈希算法对明文Text部分进行哈希得到T</li><li>当自己计算得到的哈希值H与<strong>解签</strong>后的Sig2<strong>相等</strong>，表示证书可信，<strong>没有被篡改</strong></li></ol><h2 id="与-http-的区别" tabindex="-1">与 HTTP 的区别 <a class="header-anchor" href="#与-http-的区别" aria-label="Permalink to &quot;与 HTTP 的区别&quot;">​</a></h2><ol><li><strong>http</strong>是明文传输，<strong>https</strong> 则是具有安全性的 <code>SSL </code>加密传输。</li><li><strong>http</strong>协议的端口为<code>80</code>，<strong>https</strong>的端口为<code>443 </code></li><li><strong>https</strong> 需要 <code>SSL </code>证书，费用更高。同时握手阶段需要更多的数据开销，时间也更久</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("markdown/1-前端/1-Web/1 网络/3-HTTPS.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _3HTTPS = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _3HTTPS as default
};
