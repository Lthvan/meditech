"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7550,3587],{66972:function(e,t,l){l.d(t,{A:function(){return d}});var n=l(18405),i=l(2784),c=l(98103);function d(){let e=(0,c.Z)(n.b.MD),[t,l]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{l(e)},[e]),{isDesktopView:t,isMobileView:!t}}},91395:function(e,t,l){l.r(t);var n=l(52903),i=l(33429),c=l(66972),d=l(14614),a=l(71712),o=l(6456),r=l(54973),s=l(85866),u=l(3534),h=l(82876),m=l(2784);t.default=e=>{var t,l,p,v,x,f,b,g,w,C;let{title:Z,description:N,quickAccess:y,contentBackground:k,lcpr:L,background:B,contentImage:H}=e,{isDesktopView:M}=(0,c.A)(),E=(0,h.useRouter)(),F=(0,i.b)(),V=(0,m.useCallback)((e,t)=>{M||(E.push(e||"/"),F.onClickVaccineService({value:e,click_text:t}))},[M,E,F]),q=(0,m.useMemo)(()=>(y.length<=0&&n.HY,null==y?void 0:y.map((e,t)=>(0,n.BX)("div",{onClick:V.bind(void 0,e.redirectUrl,e.title),className:"z-[1] col-span-1 flex h-full flex-col items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-md md:flex-row md:gap-4 md:py-4 md:pl-3 md:pr-6",children:[(0,n.tZ)("div",{className:"bg-blue-1 relative flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full md:h-[66px] md:w-[66px]",children:(0,n.tZ)(d.Z,{src:e.icon.url||"/estore-images/home/heath/heath-heart.png",alt:e.icon.alt||(null==e?void 0:e.title)||"heath-check-icon",className:"h-[26px] w-[26px] md:h-[40px] md:w-[40px]",width:26,height:26,sizes:"(min-width: 769px) 40px, 26px"})}),(0,n.BX)("div",{className:"col flex flex-1 flex-col pt-0",children:[(0,n.tZ)("p",{className:"line-clamp-3 text-caption md:text-label1 mb-1 text-center font-semibold text-blue-500 md:text-left md:text-gray-800",children:e.title}),(0,n.tZ)("p",{className:"md:line-clamp-3 hidden text-sm text-gray-700 md:block",children:e.description}),(0,n.tZ)(u.Z,{href:"".concat(e.redirectUrl||"/"),className:"mt-4 hidden cursor-pointer text-blue-500 md:mt-2 md:inline-block",onClick:()=>F.onClickVaccineService({value:e.redirectUrl,click_text:e.linkedName}),children:(0,n.tZ)("p",{className:"text-label2 md:text-body2 text-text-focus font-semibold",children:e.linkedName})})]})]},t))),[V,y,F]);return 0===q.length?(0,n.tZ)(n.HY,{}):(0,n.BX)("div",{"data-lcpr":L,className:"relative pb-4 omd:pb-8",children:[(0,n.tZ)(s.Z,{mobile:{src:null==B?void 0:null===(t=B.mobile)||void 0===t?void 0:t.url,quality:90},desktop:{src:null==B?void 0:null===(l=B.web)||void 0===l?void 0:l.url,quality:90}}),(0,n.tZ)("div",{className:"omd:container-lite relative z-10",children:(0,n.BX)("div",{className:"relative md:rounded-2xl",children:[(0,n.tZ)(s.Z,{"data-prop":"vaccine.contentBackground",mobile:{src:null==k?void 0:null===(p=k.mobile)||void 0===p?void 0:p.url,quality:90,className:""},desktop:{src:null==k?void 0:null===(v=k.web)||void 0===v?void 0:v.url,quality:90,className:"md:rounded-xl"}}),(null==H?void 0:null===(x=H.web)||void 0===x?void 0:x.url)&&(0,n.tZ)(r.Z,{src:null==H?void 0:null===(f=H.web)||void 0===f?void 0:f.url,alt:(null==H?void 0:null===(b=H.web)||void 0===b?void 0:b.alt)||"",className:"umd:hidden absolute right-0 top-0 w-[373px] h-[178px] object-contain",width:373,height:178}),(0,n.BX)("div",{className:"relative z-10 p-4 omd:p-8",children:[(0,n.BX)("div",{className:"py-0 px-3",children:[(0,n.tZ)("p",{className:(0,a.cn)("text-heading2 md:text-title2 text-center font-semibold text-text-focus md:font-bold"),children:Z}),(0,n.tZ)("p",{className:(0,a.cn)("mt-[2px] text-center text-base font-medium text-[#4A4F63]","md:mt-1 md:mb-0 md:text-2xl"),children:N})]}),(0,n.tZ)("div",{className:"omd:hidden w-full h-[calc(148/375*100vw)]",children:(null==H?void 0:null===(g=H.mobile)||void 0===g?void 0:g.url)&&(0,n.tZ)(r.Z,{src:null==H?void 0:null===(w=H.mobile)||void 0===w?void 0:w.url,alt:(null==H?void 0:null===(C=H.mobile)||void 0===C?void 0:C.alt)||"",className:"omd:hidden w-full h-full object-contain",width:375,height:148})}),q.length<=3?(0,n.tZ)("div",{className:"relative z-10 -mx-4 grid grid-cols-3 gap-3 px-4 md:mt-8 md:px-0",children:q}):(0,n.tZ)("div",{className:"no-scrollbar relative -mx-4 z-10 gap-x-0 gap-y-2 px-4 md:mt-8 md:px-0",children:(0,n.tZ)(o.Z,{slides:q,prevButtonClassName:"h-10 w-10",nextButtonClassName:"h-10 w-10",className:"z-10 mx-auto w-full",style:{"--slide-spacing-desktop":"12px","--slide-size-desktop":"calc(100% / 3)"}})})]})]})})]})}},14614:function(e,t,l){l.d(t,{Z:function(){return s}});var n=l(52903),i=l(96577),c=l.n(i),d=l(43587),a=l(2784);let o=e=>window.btoa(e),r=e=>"data:image/svg+xml;base64,".concat(o(e)),s=e=>{let{src:t,alt:l="",defaultSrc:i,placeholder:d,blurDataURL:o,fill:s,width:p,height:v,style:x,overrideOnError:f,onError:b,...g}=e,w=!t;t=w?i||r(h(Number(p),Number(v))):t;let C=(0,a.useCallback)(e=>{e.currentTarget.src=r(m(Number(p),Number(v))),e.currentTarget.srcset="",e.currentTarget.style.backgroundColor="#F6F7F9"},[v,p]);return(0,n.tZ)(c(),{...g,alt:l,src:t,width:p,height:v,fill:s,placeholder:d,blurDataURL:o,loader:e=>u({src:e.src,quality:e.quality,width:e.width,height:Number(v)}),onError:f?b:C,style:{backgroundColor:w?"#F6F7F9":void 0,...x}})},u=e=>{let{src:t,width:l,quality:n=90}=e;return(0,d.J)({src:t,width:l,height:0,quality:n,upScaleRate:1})},h=(e,t)=>'\n  <svg width="'.concat(e,'" height="').concat(t,'" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <g opacity="0.5">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M64.8637 54.9311H65.0874C65.2348 54.9311 65.3668 54.9109 65.3668 54.7375C65.3668 54.5838 65.2207 54.5597 65.0895 54.5597H64.8637V54.9311ZM64.6104 54.3843H65.1173C65.4423 54.3843 65.6208 54.4921 65.6208 54.7655C65.6208 54.9867 65.4867 55.0942 65.2642 55.1136L65.6287 55.6801H65.3705L65.0185 55.1223H64.8645V55.6801H64.6104V54.3843ZM65.9828 55.0348C65.9828 54.5007 65.576 54.1131 65.0738 54.1131C64.5707 54.1131 64.1651 54.5007 64.1651 55.0348C64.1651 55.5713 64.5707 55.9584 65.0738 55.9584C65.576 55.9584 65.9828 55.5713 65.9828 55.0348V55.0348ZM63.8717 55.032C63.8717 54.4027 64.4113 53.8899 65.0742 53.8899C65.7367 53.8899 66.2751 54.4027 66.2751 55.032C66.2751 55.6637 65.7367 56.1769 65.0742 56.1769C64.4113 56.1769 63.8717 55.6637 63.8717 55.032V55.032Z" fill="#4A4F63"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0256 43.8349C38.2286 43.8349 36.7065 44.9466 36.1727 46.4858C36.1598 46.5198 36.1482 46.5557 36.1374 46.5897L36.049 46.9208L33.7963 56.2068H39.4714C41.1671 56.2068 42.6108 55.1847 43.1599 53.7518L43.3741 52.8673L45.5654 43.8349H40.0256Z" fill="#4A4F63"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M50.7298 40.7408C48.8739 40.7408 47.309 41.9275 46.8262 43.5465C46.7897 43.6678 46.7602 43.7911 46.737 43.9167L43.0049 59.3009H48.5447C50.4425 59.3009 52.0356 58.0592 52.4785 56.383V56.3838H52.481L56.2754 40.7408H50.7298Z" fill="#728091"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M59.9437 43.8349C58.2103 43.8349 56.7317 44.8696 56.1506 46.3258C56.1211 46.3997 56.0178 46.7074 56.0178 46.7074L53.714 56.2068H59.2547C61.1587 56.2068 62.7551 54.9592 63.193 53.2754L63.1926 53.2762H63.193L65.4823 43.8349H59.9437Z" fill="#A9B2BE"/>\n  </g>\n  </svg>\n  '),m=(e,t)=>'\n  <svg width="'.concat(e,'" height="').concat(t,'" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <rect x="19.1358" y="19.1358" width="60.8642" height="61.7021" rx="6.59091" fill="#E4E8ED"/>\n  <rect x="25.3612" y="25.4483" width="48.4147" height="49.0812" rx="3.95455" fill="white"/>\n  <path d="M50.5756 56.5272C50.9486 56.9562 50.6499 57.6278 50.0865 57.627L33.7302 57.602C33.1657 57.6012 32.8636 56.9264 33.2363 56.499L41.4163 47.1185C41.6768 46.8198 42.1381 46.8213 42.3993 47.1218L50.5756 56.5272Z" fill="#D9DFE5"/>\n  <path d="M66.502 56.5373C66.8753 56.966 66.5772 57.6379 66.0138 57.6375L41.1878 57.619C40.6229 57.6186 40.3204 56.9432 40.6936 56.5157L53.1145 42.2886C53.3749 41.9904 53.8357 41.9918 54.0969 42.2918L66.502 56.5373Z" fill="#A9B2BE"/>\n  <path d="M37.3246 42.0334C38.9857 43.1749 41.2462 42.7336 42.3735 41.0477C43.5008 39.3618 43.0681 37.0697 41.407 35.9282C39.7459 34.7866 37.4854 35.2279 36.3581 36.9138C35.2308 38.5997 35.6635 40.8918 37.3246 42.0334Z" fill="#A9B2BE"/>\n  </svg>\n\n  ')},43587:function(e,t,l){l.d(t,{J:function(){return r}});let n="unsafe",i="".concat("https://").concat("cdn.nhathuoclongchau.com.vn","/").concat(n),c="".concat("https://").concat("cdn1.nhathuoclongchau.com.vn")||0,d=/(.svg)$/,a=(e,t)=>{let l=d.test(e),[a,r]=function(e){let t=e.match(o);return t?[t[1]||null,t[3]]:[null,e]}(e);if(l){let t="";try{t=new URL(r).pathname}catch(t){return e}return"".concat(c).concat(s(t,"/"))}return[a?"".concat(a,"/").concat(n):i,t,r].join("/")},o=/^(https?:\/\/[^/]+)?(\/(?:[^/]+\/)*)(https?:\/\/[^/]+\/.*\.\w+)$/,r=e=>{let{src:t,width:l,height:n,quality:i,fillColor:c,crop:d,upScaleRate:o=1}=e;if(!t)return"";let r=["".concat(Math.floor(l*o),"x").concat(Math.floor((null!=n?n:0)*o))],s=[];if("string"==typeof d&&r.unshift(d),"number"==typeof i&&s.push("quality(".concat(i,")")),"string"==typeof c&&""!==c&&s.push("fill(".concat(c,")")),s.length>0){s.unshift("filters");let e=s.join(":");r.push(e)}return a(t,r.join("/"))},s=(e,t)=>e.startsWith(t)?e:"".concat(t).concat(e)}}]);