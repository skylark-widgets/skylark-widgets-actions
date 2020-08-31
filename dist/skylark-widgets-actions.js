/**
 * skylark-widgets-actions - The skylark action widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-actions/
 * @license MIT
 */
!function(t,e){var s=e.define,require=e.require,i="function"==typeof s&&s.amd,n=!i&&"undefined"!=typeof exports;if(!i&&!s){var o={};s=e.define=function(t,e,s){"function"==typeof s?(o[t]={factory:s,deps:e.map(function(e){return function(t,e){if("."!==t[0])return t;var s=e.split("/"),i=t.split("/");s.pop();for(var n=0;n<i.length;n++)"."!=i[n]&&(".."==i[n]?s.pop():s.push(i[n]));return s.join("/")}(e,t)}),resolved:!1,exports:null},require(t)):o[t]={factory:null,resolved:!0,exports:s}},require=e.require=function(t){if(!o.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var module=o[t];if(!module.resolved){var s=[];module.deps.forEach(function(t){s.push(require(t))}),module.exports=module.factory.apply(e,s)||null,module.resolved=!0}return module.exports}}if(!s)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,require){t("skylark-widgets-actions/actions",["skylark-langx/skylark"],function(t){return t.attach("widgets.actions",{buttons:{},menus:{}})}),t("skylark-widgets-actions/buttons/Button",["skylark-widgets-base/Widget","../actions"],function(t,e){"use strict";var s=t.inherit({_construct:function(e){t.prototype._construct.call(this,e,"div"),this._elm.style.cursor="pointer",this.preventDragEvents()},setColor:function(t,e){this._elm.style.backgroundColor=t,this._elm.onmouseenter=function(){this.style.backgroundColor=e},this._elm.onmouseleave=function(){this.style.backgroundColor=t}},setStyles:function(t,e){for(var s in t)this._elm.style[s]=t[s];this._elm.onmouseenter=function(){for(var t in e)this.style[t]=e[t]},this._elm.onmouseleave=function(){for(var e in t)this.style[e]=t[e]}}});return e.buttons.Button=s}),t("skylark-widgets-base/mixins/ImageMixin",["skylark-langx-numerics/Vector2","../Widget"],function(t,e){"use strict";var s={_buildImage:function(t){this.icon=document.createElement("img"),this.icon.style.pointerEvents="none",this.icon.style.position="absolute",this.icon.style.top="15%",this.icon.style.left="15%",this.icon.style.width="70%",this.icon.style.height="70%",this._elm.appendChild(this.icon)},setImage:function(t){this.icon.src=t},setImageScale:function(t,e){this.icon.style.top=(1-e)/2*100+"%",this.icon.style.left=(1-t)/2*100+"%",this.icon.style.width=100*t+"%",this.icon.style.height=100*e+"%"}};return s}),t("skylark-widgets-actions/buttons/ButtonImage",["skylark-widgets-base/mixins/ImageMixin","../actions","./Button"],function(t,e,s){"use strict";var i=s.inherit({_construct:function(t){s.prototype._construct.call(this,t),this._buildImage(),this.setColor(null,Editor.theme.buttonOverColor)},...t});return e.buttons.ButtonImage=i}),t("skylark-widgets-actions/buttons/ButtonDrawer",["skylark-langx-numerics/Vector2","skylark-widgets-base/Widget","../actions","./ButtonImage"],function(t,e,s,i){"use strict";var n=i.inherit({_construct:function(s){i.prototype._construct.call(this,s),this._elm.style.zIndex="200",this._elm.style.backgroundColor=Editor.theme.buttonColor,this._elm.style.overflow="visible",this.panel=new e(this,"div"),this.panel.element.style.overflow="visible",this.panel.element.style.backgroundColor=Editor.theme.barColor,this.panel.element.style.zIndex="250",this.items=[],this.itemsPerLine=3,this.itemsSize=new t(40,40),this.itemsScale=new t(.7,.7),this.expanded=!1,this.setExpanded(!1);var n=this;this._elm.onmouseenter=function(){n.element.style.backgroundColor=Editor.theme.buttonOverColor,n.setExpanded(!0)},this._elm.onmouseleave=function(){n.element.style.backgroundColor=Editor.theme.buttonColor,n.setExpanded(!1)},this.panel.element.onmouseenter=function(){n.setExpanded(!0)},this.panel.element.onmouseleave=function(){n.setExpanded(!1)}},clear:function(){for(var t=0;t<this.items.length;t++)this.items[t].destroy();this.items=[]},setExpanded:function(t){this.expanded=t,this.panel.element.style.display=this.expanded?"block":"none"},insertItem:function(t){t.attachTo(this.panel),this.items.push(t)},addItem:function(t,e,s){var n=this,o=new i(this.panel);o.setImage(t),o.setOnClick(function(){e(),n.expanded=!1,n.updateInterface()}),void 0!==s&&o.setAltText(s),this.items.push(o)},removeItem:function(t){t>=0&&t<this.items.length&&(this.items[t].destroy(),this.items.splice(t,1))},updatePanelSize:function(){var t=this.items.length<this.itemsPerLine?this.items.length:this.itemsPerLine;this.panel.size.x=this.itemsSize.x*t,this.panel.size.y=this.itemsSize.y*(Math.floor((this.items.length-1)/t)+1),this.panel.updateSize(),this.panel.position.set(this.itemsSize.x,0),this.panel.updatePosition()},updateItems:function(){this.updatePanelSize();for(var t=this.items.length<this.itemsPerLine?this.items.length:this.itemsPerLine,e=0;e<this.items.length;e++)this.items[e].size.set(this.itemsSize.x,this.itemsSize.y),this.items[e].position.x=this.itemsSize.x*(e%t),this.items[e].position.y=this.itemsSize.y*Math.floor(e/t),this.items[e].updateInterface()},updateVisibility:function(){this._elm.style.display=this.visible?"block":"none"},optionsSize:{get:function(){return this.itemsSize},set:function(t){this.itemsSize=t}},optionsPerLine:{get:function(){return this.itemsPerLine},set:function(t){this.itemsPerLine=t}}});return n.prototype.addOption=n.prototype.addItem,n.prototype.insertOption=n.prototype.insertItem,n.prototype.updateOptions=n.prototype.updateItems,n.prototype.removeOption=n.prototype.reomveItem,s.buttons.ButtonDrawer=n}),t("skylark-widgets-actions/buttons/ButtonImageToggle",["../actions","./ButtonImage"],function(t,e){"use strict";var s=e.inherit({_construct:function(t){e.prototype._construct.call(this,t),this._elm.style.display="flex",this._elm.style.justifyContent="center",this._elm.style.alignItems="center";var s=this.getSkin();this._elm.style.backgroundColor=s.buttonColor,this.selected=!1;var i=this;this._elm.onclick=function(){i.selected=!i.selected},this._elm.onmouseenter=function(){i.element.style.backgroundColor=s.buttonOverColor},this._elm.onmouseleave=function(){i.selected||(i.element.style.backgroundColor=s.buttonColor)}},setSelected:function(t){this.selected=t;var e=this.getSkin();this._elm.style.backgroundColor=this.selected?e.buttonOverColor:e.buttonColor},setOnClick:function(t){var e=this;this._elm.onclick=function(){e.selected=!e.selected,t()}}});return t.buttons.ButtonImageToggle=s}),t("skylark-widgets-base/mixins/TextMixin",["skylark-langx-numerics/Vector2","../Widget"],function(t,e){"use strict";var s={_buildText:function(){var t=this.getSkin();this._elm.style.pointerEvents="none",this._elm.style.color=t.textColor,this._elm.style.display="flex",this.span=document.createElement("span"),this.span.style.overflow="hidden",this._elm.appendChild(this.span),this.text=document.createTextNode(""),this.span.appendChild(this.text),this.fitContent=!1,this.allowWordBreak(!1),this.setVerticalAlignment(s.CENTER),this.setAlignment(s.CENTER)},setFont:function(t,e,s){this.span.style.fontFamily=t,void 0!==e&&(this.span.style.fontWeight=e),void 0!==s&&(this.span.style.fontStyle=s)},allowWordBreak:function(t){!0===t?(this.span.style.whiteSpace="normal",this.span.style.wordBreak="break-word"):(this.span.style.whiteSpace="pre",this.span.style.wordBreak="normal")},setText:function(t){this.text.data=t},setTextBorder:function(t,e){this.span.style.textShadow="-"+t+"px 0 "+e+", 0 "+t+"px "+e+", "+t+"px 0 "+e+", 0 -"+t+"px "+e},setTextSize:function(t){this._elm.style.fontSize=t+"px"},setTextColor:function(t){this.span.style.color=t},setOverflow:function(t){t===s.ELLIPSIS?(this.span.style.whiteSpace="nowrap",this.span.style.textOverflow="ellipsis"):(this.span.style.whiteSpace="pre",this.span.style.textOverflow="clip")},setAlignment:function(t){t===s.CENTER?(this._elm.style.justifyContent="center",this._elm.style.textAlign="center"):t===s.LEFT?(this._elm.style.justifyContent="flex-start",this._elm.style.textAlign="left"):t===s.RIGHT&&(this._elm.style.justifyContent="flex-end",this._elm.style.textAlign="right")},setVerticalAlignment:function(t){t===s.CENTER?this._elm.style.alignItems="center":t===s.TOP?this._elm.style.alignItems="flex-start":t===s.BOTTOM&&(this._elm.style.alignItems="flex-end")},measure:function(){return new t(this.span.offsetWidth,this.span.offsetHeight)},setMargin:function(t){this.span.style.margin=t+"px"},updateSize:function(){this.fitContent&&(this.size.x=this.span.clientWidth,this.size.y=this.span.clientHeight),e.prototype.updateSize.call(this)},CENTER:0,LEFT:1,RIGHT:2,TOP:3,BOTTOM:4,CLIP:10,ELLIPSIS:11};return s}),t("skylark-widgets-actions/buttons/ButtonText",["skylark-widgets-base/mixins/TextMixin","../actions","./Button"],function(t,e,s){"use strict";var i=s.inherit({_construct:function(t){s.prototype._construct.call(this,t);var e=this.getSkin();this._buildText(),this.setColor(e.buttonColor,e.buttonOverColor)},...t});return e.buttons.ButtonText=i}),t("skylark-widgets-actions/menus/ButtonMenu",["../actions","../buttons/ButtonText"],function(t,e){"use strict";var s=e.inherit({_construct:function(t){e.prototype._construct.call(this,t),this.span.style.textIndent="25px",this.icon=null;var s=this.getSkin();this.setColor(s.buttonColor,s.buttonOverColor)},setIcon:function(t){null===this.icon&&(this.icon=document.createElement("img"),this.icon.style.position="absolute",this.icon.style.display="block",this.icon.style.left="5px",this.icon.style.top="3px",this.icon.style.width="12px",this.icon.style.height="12px",this._elm.appendChild(this.icon)),this.icon.src=t}});return t.buttons.ButtonMenu=s}),t("skylark-widgets-actions/menus/DropdownMenu",["skylark-langx-numerics/Vector2","skylark-domx-geom","skylark-widgets-base/Widget","skylark-widgets-base/mixins/TextMixin","./ButtonMenu"],function(t,e,s,i,n){"use strict";var o=s.inherit({_construct:function(e){s.prototype._construct.call(this,e,"div"),this._buildText(),this._elm.style.backgroundColor=Editor.theme.buttonColor,this._elm.style.cursor="pointer",this._elm.style.pointerEvents="auto",this.preventDragEvents(),this.panel=new s(e,"div"),this.panel._elm.style.overflow="visible",this.panel._elm.style.display="none",this.panel._elm.style.zIndex="300",this.icon=null,this.arrow=document.createElement("img"),this.arrow.style.display="none",this.arrow.style.position="absolute",this.arrow.style.right="5px",this.arrow.style.top="3px",this.arrow.style.width="12px",this.arrow.style.height="12px",this._elm.appendChild(this.arrow),this.direction=o.DOWN,this.expanded=!1,this.itemsSize=new t(150,20),this.items=[];var i=this;this._elm.onmouseenter=function(){i.setExpanded(!0),i._elm.style.backgroundColor=Editor.theme.buttonOverColor},this._elm.onmouseleave=function(){i.setExpanded(!1),i._elm.style.backgroundColor=Editor.theme.buttonColor},this.panel._elm.onmouseenter=function(){i.setExpanded(!0)},this.panel._elm.onmouseleave=function(){i.setExpanded(!1)}},setDirection:function(t){this.direction=t},showArrow:function(){this.arrow.style.display="block"},setIcon:function(t){null===this.icon&&(this.icon=document.createElement("img"),this.icon.style.display="block",this.icon.style.position="absolute",this.icon.style.left="5px",this.icon.style.top="3px",this.icon.style.width="12px",this.icon.style.height="12px",this._elm.appendChild(this.icon)),this.icon.src=t},removeOption:function(t){t>=0&&t<this.items.length&&(this.items[t].destroy(),this.items.splice(t,1))},addOption:function(t,e,s){var i=new n(this.panel);i._elm.style.zIndex="200",i.setText(t),i.setAlignment(Text.LEFT),i.position.set(25,0);var o=this;return i.setOnClick(function(){e(),o.setExpanded(!1)}),void 0!==s&&i.setIcon(s),this.items.push(i),i},addMenu:function(t,e){var s=new o(this.panel);return s.setText(t),s.setDirection(o.LEFT),s.showArrow(),s.setAlignment(Text.LEFT),s.setMargin(25),void 0!==e&&s.setIcon(e),this.items.push(s),s},setExpanded:function(t){if(this.expanded=t,this.expanded){if(this.panel._elm.style.display="block",this.direction===o.DOWN){this.panel._elm.style.top=this.position.y+this.size.y+"px",this.panel._elm.style.left=this.position.x+"px";var s=e.testAxis(this.panel);0!==s.y&&(this.panel._elm.style.top=null,this.panel._elm.style.bottom=this.position.y+this.size.y+"px"),0!==s.x&&(this.panel._elm.style.left=this.position.x-s.x+"px")}else if(this.direction===o.UP){this.panel._elm.style.bottom=this.position.y+this.size.y+"px",this.panel._elm.style.left=this.position.x+"px";var s=e.testAxis(this.panel);0!==s.y&&(this.panel._elm.style.bottom=null,this.panel._elm.style.top=this.position.y+this.size.y+"px"),0!==s.x&&(this.panel._elm.style.left=this.position.x-s.x+"px")}else if(this.direction===o.LEFT){this.panel._elm.style.top=this.position.y+"px",this.panel._elm.style.left=this.position.x+this.size.x+"px";var s=e.testAxis(this.panel);0!==s.x&&(this.panel._elm.style.left=this.position.x-this.size.x+"px"),0!==s.y&&(this.panel._elm.style.top=this.position.y-s.y+"px")}else if(this.direction===o.RIGHT){this.panel._elm.style.top=this.position.y+"px",this.panel._elm.style.left=this.position.x-this.size.x+"px";var s=e.testAxis(this.panel);0!==s.x&&(this.panel._elm.style.left=this.position.x+this.size.x+"px"),0!==s.y&&(this.panel._elm.style.top=this.position.y-s.y+"px")}}else this.panel._elm.style.display="none"},updateItems:function(){for(var t=0;t<this.items.length;t++)this.items[t].size.set(this.itemsSize.x,this.itemsSize.y),this.items[t].position.set(0,this.itemsSize.y*t),this.items[t].updateInterface();this.panel._elm.style.width=this.size.x+"px",this.panel._elm.style.height=this.itemsSize.y*this.items.length+"px"},destroy:function(){s.prototype.destroy.call(this),this.parent.destroy()},updateSize:function(){this.updateItems()},...i});return o.DOWN=0,o.UP=1,o.LEFT=2,o.RIGHT=3,o}),t("skylark-widgets-actions/menus/ContextMenu",["skylark-langx-numerics/Vector2","skylark-domx-geom","skylark-widgets-base/Widget","../actions","./ButtonMenu","./DropdownMenu"],function(t,e,s,i,n,o){"use strict";var l=s.inherit({_construct:function(e){s.prototype._construct.call(this,e,"div");var i=this;this._elm.style.overflow="visible",this._elm.style.zIndex="300",this._elm.onmouseleave=function(){i.destroy()},this.offset=new t(20,10),this.items=[]},setText:function(t){this.text.setText(t)},removeItem:function(t){t>=0&&t<this.items.length&&(this.items[t].destroy(),this.items.splice(t,1))},addItem:function(t,e){var s=new n(this);s._elm.style.zIndex="10000",s.setText(t),s.setAlignment(Text.LEFT),s.position.x=25;var i=this;s.setOnClick(function(){e(),i.destroy()}),this.items.push(s)},addMenu:function(t){var e=new o(this);return e.setText(t),e.setDirection(o.LEFT),e.showArrow(),e.setAlignment(Text.LEFT),e.setMargin(25),this.items.push(e),e},updateItems:function(){for(var t=0;t<this.items.length;t++)this.items[t].size.copy(this.size),this.items[t].position.set(0,this.size.y*t),this.items[t].updateInterface()},updateSize:function(){this._elm.style.width=this.size.x+"px",this._elm.style.height=this.size.y*this.items.length+"px",this.updateItems()},updatePosition:function(){this._elm.style.top=this.position.y-this.offset.y+"px",this._elm.style.left=this.position.x-this.offset.x+"px";var t=e.testAxis(this._elm);0!==t.x&&(this._elm.style.left=this.position.x+this.offset.x-this.size.x+"px"),0!==t.y&&(this._elm.style.top=this.position.y-this.offset.y-t.y+"px")}});return i.menus.ContextMenu=l}),t("skylark-widgets-actions/main",["./actions","./buttons/Button","./buttons/ButtonDrawer","./buttons/ButtonImage","./buttons/ButtonImageToggle","./buttons/ButtonText","./menus/ButtonMenu","./menus/ContextMenu","./menus/DropdownMenu"],function(t){return actions}),t("skylark-widgets-actions",["skylark-widgets-actions/main"],function(t){return t})}(s),!i){var l=require("skylark-langx-ns");n?module.exports=l:e.skylarkjs=l}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-widgets-actions.js.map
