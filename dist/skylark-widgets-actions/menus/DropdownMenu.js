/**
 * skylark-widgets-actions - The skylark action widgets library
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-widgets/skylark-widgets-actions/
 * @license MIT
 */
define(["skylark-langx-numerics/Vector2","skylark-domx-geom","skylark-widgets-base/Widget","skylark-widgets-base/mixins/TextMixin","./ButtonMenu"],function(t,e,i,s,n){"use strict";var l=i.inherit({_construct:function(e){i.prototype._construct.call(this,e,"div"),this._buildText(),this._elm.style.backgroundColor=Editor.theme.buttonColor,this._elm.style.cursor="pointer",this._elm.style.pointerEvents="auto",this.preventDragEvents(),this.panel=new i(e,"div"),this.panel._elm.style.overflow="visible",this.panel._elm.style.display="none",this.panel._elm.style.zIndex="300",this.icon=null,this.arrow=document.createElement("img"),this.arrow.style.display="none",this.arrow.style.position="absolute",this.arrow.style.right="5px",this.arrow.style.top="3px",this.arrow.style.width="12px",this.arrow.style.height="12px",this._elm.appendChild(this.arrow),this.direction=l.DOWN,this.expanded=!1,this.itemsSize=new t(150,20),this.items=[];var s=this;this._elm.onmouseenter=function(){s.setExpanded(!0),s._elm.style.backgroundColor=Editor.theme.buttonOverColor},this._elm.onmouseleave=function(){s.setExpanded(!1),s._elm.style.backgroundColor=Editor.theme.buttonColor},this.panel._elm.onmouseenter=function(){s.setExpanded(!0)},this.panel._elm.onmouseleave=function(){s.setExpanded(!1)}},setDirection:function(t){this.direction=t},showArrow:function(){this.arrow.style.display="block"},setIcon:function(t){null===this.icon&&(this.icon=document.createElement("img"),this.icon.style.display="block",this.icon.style.position="absolute",this.icon.style.left="5px",this.icon.style.top="3px",this.icon.style.width="12px",this.icon.style.height="12px",this._elm.appendChild(this.icon)),this.icon.src=t},removeOption:function(t){t>=0&&t<this.items.length&&(this.items[t].destroy(),this.items.splice(t,1))},addOption:function(t,e,i){var s=new n(this.panel);s._elm.style.zIndex="200",s.setText(t),s.setAlignment(Text.LEFT),s.position.set(25,0);var l=this;return s.setOnClick(function(){e(),l.setExpanded(!1)}),void 0!==i&&s.setIcon(i),this.items.push(s),s},addMenu:function(t,e){var i=new l(this.panel);return i.setText(t),i.setDirection(l.LEFT),i.showArrow(),i.setAlignment(Text.LEFT),i.setMargin(25),void 0!==e&&i.setIcon(e),this.items.push(i),i},setExpanded:function(t){if(this.expanded=t,this.expanded){if(this.panel._elm.style.display="block",this.direction===l.DOWN)this.panel._elm.style.top=this.position.y+this.size.y+"px",this.panel._elm.style.left=this.position.x+"px",0!==(i=e.testAxis(this.panel)).y&&(this.panel._elm.style.top=null,this.panel._elm.style.bottom=this.position.y+this.size.y+"px"),0!==i.x&&(this.panel._elm.style.left=this.position.x-i.x+"px");else if(this.direction===l.UP){this.panel._elm.style.bottom=this.position.y+this.size.y+"px",this.panel._elm.style.left=this.position.x+"px",0!==(i=e.testAxis(this.panel)).y&&(this.panel._elm.style.bottom=null,this.panel._elm.style.top=this.position.y+this.size.y+"px"),0!==i.x&&(this.panel._elm.style.left=this.position.x-i.x+"px")}else if(this.direction===l.LEFT){this.panel._elm.style.top=this.position.y+"px",this.panel._elm.style.left=this.position.x+this.size.x+"px",0!==(i=e.testAxis(this.panel)).x&&(this.panel._elm.style.left=this.position.x-this.size.x+"px"),0!==i.y&&(this.panel._elm.style.top=this.position.y-i.y+"px")}else if(this.direction===l.RIGHT){var i;this.panel._elm.style.top=this.position.y+"px",this.panel._elm.style.left=this.position.x-this.size.x+"px",0!==(i=e.testAxis(this.panel)).x&&(this.panel._elm.style.left=this.position.x+this.size.x+"px"),0!==i.y&&(this.panel._elm.style.top=this.position.y-i.y+"px")}}else this.panel._elm.style.display="none"},updateItems:function(){for(var t=0;t<this.items.length;t++)this.items[t].size.set(this.itemsSize.x,this.itemsSize.y),this.items[t].position.set(0,this.itemsSize.y*t),this.items[t].updateInterface();this.panel._elm.style.width=this.size.x+"px",this.panel._elm.style.height=this.itemsSize.y*this.items.length+"px"},destroy:function(){i.prototype.destroy.call(this),this.parent.destroy()},updateSize:function(){this.updateItems()},...s});return l.DOWN=0,l.UP=1,l.LEFT=2,l.RIGHT=3,l});
//# sourceMappingURL=../sourcemaps/menus/DropdownMenu.js.map
