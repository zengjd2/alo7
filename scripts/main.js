"use strict";window.onload=function(){function t(){for(var t=0;t<i.length;t++)if("on"==i[t].className){i[t].className="";break}i[r-1].className="on"}function e(t){function e(){s<0&&parseInt(c.style.left)>n||s>0&&parseInt(c.style.left)<n?(c.style.left=parseInt(c.style.left)+t+"px",setTimeout(e,o)):(f=!1,c.style.left=n+"px",n>m&&(c.style.left=u*m+"px"),n<u*m&&(c.style.left=m+"px"))}if(0!=t){f=!0;var n=parseInt(c.style.left)+t,o=1e3,s=t;e()}}function n(){s=setTimeout(function(){d.onclick(),n()},p)}function o(){clearTimeout(s)}var s,l=document.getElementById("imgBox"),c=document.getElementById("imgBoxList"),i=document.getElementById("imgBoxButtons").getElementsByTagName("span"),a=document.getElementById("imgBoxPrev"),d=document.getElementById("imgBoxNext"),m=parseInt(c.style.left),u=parseInt(c.getElementsByClassName("panel-img").length-2),r=1,f=!1,p=3e3;a.onclick=function(){f||(e(-m),1==r?r=u:r-=1,t())},d.onclick=function(){f||(e(m),r==u?r=1:r+=1,t())};for(var y=0;y<i.length;y++)i[y].onclick=function(){if("on"!=this.className){var n=parseInt(this.getAttribute("index")),o=m*(n-r);r=n,e(o),t()}};l.onmouseover=o,l.onmouseout=n,n()},jQuery(document).ready(function(t){var e=300,n=1200,o=700,s=t(".cd-top");t(window).scroll(function(){t(this).scrollTop()>e?s.addClass("cd-is-visible"):s.removeClass("cd-is-visible cd-fade-out"),t(this).scrollTop()>n&&s.addClass("cd-fade-out")}),s.on("click",function(e){e.preventDefault(),t("body,html").animate({scrollTop:0},o)})}),$(document).ready(function(){$(".cd-top").hover(function(){$(".cd-top").addClass("cd-top_hover"),$(".cd-top").text("返回")},function(){$(".cd-top").removeClass("cd-top_hover"),$(".cd-top").empty()})});