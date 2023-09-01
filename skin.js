// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: New Moveis Planejados Basico.ggsk
// Generated 2023-09-01T19:42:38

function pano2vrSkin(player,base) {
	player.addVariable('Node1', 2, false);
	player.addVariable('Opcao1', 2, false);
	player.addVariable('category_visible', 2, false);
	player.addVariable('node_visible', 2, false);
	player.addVariable('var_hs', 1, 0);
	player.addVariable('Opcao2', 2, false);
	player.addVariable('Menu', 2, false);
	player.addVariable('AudioFlores', 2, false);
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('VideoPadrao', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('Imagem1', 2, false);
	player.addVariable('vis_info_popup_1', 2, false);
	player.addVariable('indicativo', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 37px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._logo_new=document.createElement('div');
		els=me._logo_new__img=document.createElement('img');
		els.className='ggskin ggskin_logo_new';
		hs=basePath + 'images/logo_new.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Logo NEW";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._logo_new.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo_new.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/www.excellencedesign.com.br\/","");
			}
		}
		me._logo_new.ggUpdatePosition=function (useTransition) {
		}
		el=me._logo_design=document.createElement('div');
		els=me._logo_design__img=document.createElement('img');
		els.className='ggskin ggskin_logo_design';
		hs=basePath + 'images/logo_design.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Logo Design";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 74px;';
		hs+='position : absolute;';
		hs+='top : 7px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._logo_design.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo_design.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._logo_design.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._logo_design.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._logo_design.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._logo_design.ggCurrentLogicStatePosition == 0) {
					me._logo_design.style.left='45px';
					me._logo_design.style.top='7px';
				}
				else {
					me._logo_design.style.left='74px';
					me._logo_design.style.top='7px';
				}
			}
		}
		me._logo_design.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._logo_design.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._logo_design.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._logo_design.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._logo_design.ggCurrentLogicStateScaling == 0) {
					me._logo_design.ggParameter.sx = 0.7;
					me._logo_design.ggParameter.sy = 0.7;
					me._logo_design.style[domTransform]=parameterToTransform(me._logo_design.ggParameter);
				}
				else {
					me._logo_design.ggParameter.sx = 1;
					me._logo_design.ggParameter.sy = 1;
					me._logo_design.style[domTransform]=parameterToTransform(me._logo_design.ggParameter);
				}
			}
		}
		me._logo_design.ggUpdatePosition=function (useTransition) {
		}
		me._logo_new.appendChild(me._logo_design);
		me._rectangle_1.appendChild(me._logo_new);
		el=me._instagram=document.createElement('div');
		els=me._instagram__img=document.createElement('img');
		els.className='ggskin ggskin_instagram';
		hs=basePath + 'images/instagram.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Instagram";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._instagram.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instagram.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._instagram.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._instagram.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._instagram.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._instagram.ggCurrentLogicStatePosition == 0) {
					me._instagram.style.right='8px';
					me._instagram.style.top='3px';
				}
				else {
					me._instagram.style.right='13px';
					me._instagram.style.top='3px';
				}
			}
		}
		me._instagram.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._instagram.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._instagram.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._instagram.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._instagram.ggCurrentLogicStateScaling == 0) {
					me._instagram.ggParameter.sx = 0.7;
					me._instagram.ggParameter.sy = 0.7;
					me._instagram.style[domTransform]=parameterToTransform(me._instagram.ggParameter);
				}
				else {
					me._instagram.ggParameter.sx = 1;
					me._instagram.ggParameter.sy = 1;
					me._instagram.style[domTransform]=parameterToTransform(me._instagram.ggParameter);
				}
			}
		}
		me._instagram.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/www.instagram.com\/newmoveis_excellencedesign\/?igshid=NTc4MTIwNjQ2YQ%3D%3D","");
			}
		}
		me._instagram.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._instagram);
		el=me._facebook=document.createElement('div');
		els=me._facebook__img=document.createElement('img');
		els.className='ggskin ggskin_facebook';
		hs=basePath + 'images/facebook.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 48px;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._facebook.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._facebook.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._facebook.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._facebook.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._facebook.ggCurrentLogicStatePosition == 0) {
					me._facebook.style.right='37px';
					me._facebook.style.top='3px';
				}
				else {
					me._facebook.style.right='48px';
					me._facebook.style.top='3px';
				}
			}
		}
		me._facebook.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._facebook.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._facebook.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._facebook.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._facebook.ggCurrentLogicStateScaling == 0) {
					me._facebook.ggParameter.sx = 0.7;
					me._facebook.ggParameter.sy = 0.7;
					me._facebook.style[domTransform]=parameterToTransform(me._facebook.ggParameter);
				}
				else {
					me._facebook.ggParameter.sx = 1;
					me._facebook.ggParameter.sy = 1;
					me._facebook.style[domTransform]=parameterToTransform(me._facebook.ggParameter);
				}
			}
		}
		me._facebook.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/www.facebook.com\/excellencedesignnew\/videos","");
			}
		}
		me._facebook.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._facebook);
		el=me._tik_tok=document.createElement('div');
		els=me._tik_tok__img=document.createElement('img');
		els.className='ggskin ggskin_tik_tok';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Tik Tok";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 83px;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._tik_tok.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tik_tok.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tik_tok.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tik_tok.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tik_tok.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._tik_tok.ggCurrentLogicStatePosition == 0) {
					me._tik_tok.style.right='67px';
					me._tik_tok.style.top='3px';
				}
				else {
					me._tik_tok.style.right='83px';
					me._tik_tok.style.top='3px';
				}
			}
		}
		me._tik_tok.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._tik_tok.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._tik_tok.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._tik_tok.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._tik_tok.ggCurrentLogicStateScaling == 0) {
					me._tik_tok.ggParameter.sx = 0.7;
					me._tik_tok.ggParameter.sy = 0.7;
					me._tik_tok.style[domTransform]=parameterToTransform(me._tik_tok.ggParameter);
				}
				else {
					me._tik_tok.ggParameter.sx = 1;
					me._tik_tok.ggParameter.sy = 1;
					me._tik_tok.style[domTransform]=parameterToTransform(me._tik_tok.ggParameter);
				}
			}
		}
		me._tik_tok.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/www.tiktok.com\/@new.excellencedesign?is_from_webapp=1&sender_device=pc","");
			}
		}
		me._tik_tok.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._tik_tok);
		el=me._youtube=document.createElement('div');
		els=me._youtube__img=document.createElement('img');
		els.className='ggskin ggskin_youtube';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 118px;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._youtube.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._youtube.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._youtube.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._youtube.ggCurrentLogicStatePosition == 0) {
					me._youtube.style.right='95px';
					me._youtube.style.top='3px';
				}
				else {
					me._youtube.style.right='118px';
					me._youtube.style.top='3px';
				}
			}
		}
		me._youtube.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._youtube.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._youtube.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._youtube.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._youtube.ggCurrentLogicStateScaling == 0) {
					me._youtube.ggParameter.sx = 0.7;
					me._youtube.ggParameter.sy = 0.7;
					me._youtube.style[domTransform]=parameterToTransform(me._youtube.ggParameter);
				}
				else {
					me._youtube.ggParameter.sx = 1;
					me._youtube.ggParameter.sy = 1;
					me._youtube.style[domTransform]=parameterToTransform(me._youtube.ggParameter);
				}
			}
		}
		me._youtube.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/www.youtube.com\/@NewMoveisOficial","");
			}
		}
		me._youtube.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._youtube);
		el=me._local=document.createElement('div');
		els=me._local__img=document.createElement('img');
		els.className='ggskin ggskin_local';
		hs=basePath + 'images/local.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Local";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 153px;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._local.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._local.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._local.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._local.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._local.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._local.ggCurrentLogicStatePosition == 0) {
					me._local.style.right='123px';
					me._local.style.top='3px';
				}
				else {
					me._local.style.right='153px';
					me._local.style.top='3px';
				}
			}
		}
		me._local.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._local.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._local.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._local.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._local.ggCurrentLogicStateScaling == 0) {
					me._local.ggParameter.sx = 0.7;
					me._local.ggParameter.sy = 0.7;
					me._local.style[domTransform]=parameterToTransform(me._local.ggParameter);
				}
				else {
					me._local.ggParameter.sx = 1;
					me._local.ggParameter.sy = 1;
					me._local.style[domTransform]=parameterToTransform(me._local.ggParameter);
				}
			}
		}
		me._local.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/www.google.com\/maps\/place\/New+M%C3%B3veis+Planejados+%7C+Unidade+Alto+da+Boa+Vista+%7C+Excellence+Design\/@-23.6328024,-46.6899089,20.42z\/data=!4m6!3m5!1s0x94ce5092b7ca50b9:0x1932e5cf2fd5712!8m2!3d-23.6328085!4d-46.6893835!16s%2Fg%2F11hblkz2ps?entry=ttu","");
			}
		}
		me._local.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_1.appendChild(me._local);
		me.divSkin.appendChild(me._rectangle_1);
		el=me._button_auto_rotate=document.createElement('div');
		el.ggId="button_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : 92px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_auto_rotate.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_auto_rotate.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_auto_rotate.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_auto_rotate.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._button_auto_rotate.ggCurrentLogicStatePosition == 0) {
					me._button_auto_rotate.style.right='6px';
					me._button_auto_rotate.style.top='72px';
				}
				else {
					me._button_auto_rotate.style.right='11px';
					me._button_auto_rotate.style.top='92px';
				}
			}
		}
		me._button_auto_rotate.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._button_auto_rotate.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_auto_rotate.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_auto_rotate.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._button_auto_rotate.ggCurrentLogicStateScaling == 0) {
					me._button_auto_rotate.ggParameter.sx = 0.7;
					me._button_auto_rotate.ggParameter.sy = 0.7;
					me._button_auto_rotate.style[domTransform]=parameterToTransform(me._button_auto_rotate.ggParameter);
				}
				else {
					me._button_auto_rotate.ggParameter.sx = 1;
					me._button_auto_rotate.ggParameter.sy = 1;
					me._button_auto_rotate.style[domTransform]=parameterToTransform(me._button_auto_rotate.ggParameter);
				}
			}
		}
		me._button_auto_rotate.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._button_auto_rotate.onmouseover=function (e) {
			me.elementMouseOver['button_auto_rotate']=true;
			me._tt_rotate_start.logicBlock_visible();
		}
		me._button_auto_rotate.onmouseout=function (e) {
			me.elementMouseOver['button_auto_rotate']=false;
			me._tt_rotate_start.logicBlock_visible();
		}
		me._button_auto_rotate.ontouchend=function (e) {
			me.elementMouseOver['button_auto_rotate']=false;
			me._tt_rotate_start.logicBlock_visible();
		}
		me._button_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._stop_rotate_image=document.createElement('div');
		els=me._stop_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTAzLDAsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYx'+
			'Yy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNy4wMjEsMjEuMzE0LDUuODkzLDE4Ljc5NSw1Ljg5MiwxNmMwLjAwMS0yLjc5NSwxLjEzLTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLjk2LDcuMTQ3UzI0Ljk3OCwyMS4zMTQsMjMuMTQ2LDIzLjE0N3ogTTIzLjkwNywxMy4zOTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43NjMtMS4wMjQtMS45MDYtMS43Nz'+
			'YtMy4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43OTUsMC40NTYtMS40NzcsMS4wMTYtMS45ODMsMS43Yy0wLjUwNSwwLjY4LTAuODI4LDEuNTA4LTAuODI2LDIuMzkyYy0wLjAwMiwwLjgxOSwwLjI3NiwxLjU5NSwwLjcyMiwyLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDQ1LDAuNjUxLDEuMDQ5LDEuMTk0LDEuNzU1LDEuNjQ2YzAuMTk5LDAuMTI4LDAuNDIzLDAuMTg4LDAuNjQzLDAuMTg4YzAuMzk1LDAsMC43ODEtMC4xOTUsMS4wMDktMC41NTMm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O2MwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDItMC4zMSwwLjEwMi0wLjYxNywwLjM1OC0wLjk3MWMwLjM4MS0wLjUyNSwxLjE1LTEuMDkyLDIuMi0xLjQ5NWMxLjA0OC0wLjQwNiwyLjM2MS0wLjY1OCwzLjc4My0wLjY1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuODk1LTAuMDAzLDMuNTk5LDAuNDUxLDQuNzM0LDEuMTA3YzAuNTY5LDAuMzI1LDAuOT'+
			'kyLDAuNjk2LDEuMjQ4LDEuMDQ1YzAuMjU4LDAuMzU0LDAuMzU2LDAuNjYxLDAuMzU4LDAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yMTItMC44NjcsMi4xMjMtMi4xMywyLjEyNy0zLjY1M0MyNC43MzUsMTQuOSwyNC40MTIsMTQuMDcyLDIzLjkwNywxMy4zOTJ6IE0xOS4zNjQsMTYuMTgyYy0wLjQ2OC0wLjQ2Ny0xLjIyNi0wLjQ2Ny0xLjY5MiwwJiN4ZDsmI3hh'+
			'OyYjeDk7JiN4OTtsLTEuNTU3LDEuNTU4bC0xLjU1OC0xLjU1OGMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MmwxLjU1NywxLjU1N2wtMS41NTcsMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDYtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC'+
			'42MTItMC4xMTcsMC44NDctMC4zNTFjMC40NjctMC40NjcsMC40NjctMS4yMjUsMC0xLjY5MmwtMS41NTgtMS41NTdsMS41NTgtMS41NTcmI3hkOyYjeGE7JiN4OTsmI3g5O0MxOS44MzEsMTcuNDA2LDE5LjgzMSwxNi42NDgsMTkuMzY0LDE2LjE4MnoiLz4KIDwvZz4KIDxnIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiM1NWFhN2YiIGZpbGw9IiM1NWFhN2YiPgogIDxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwMywwLDEyLjQ5OS01LjU5'+
			'NiwxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC40OTgsOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ3Yy0xLjgzMywxLjgzMS00LjM1MiwyLjk1OS03LjE0NiwyLjk2MWMtMi43OTYtMC4wMDItNS4zMTUtMS4xMy03LjE0Ny0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzcuMDIxLDIxLjMxNCw1Ljg5MywxOC43OTUsNS44OTIsMTZjMC4wMDEtMi43OTUsMS4xMy01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2YzEuODMxLD'+
			'EuODMzLDIuOTYsNC4zNTIsMi45Niw3LjE0N1MyNC45NzgsMjEuMzE0LDIzLjE0NiwyMy4xNDd6IE0yMy45MDcsMTMuMzkyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNzYzLTEuMDI0LTEuOTA2LTEuNzc2LTMuMjYyLTIuMzA1QzE5LjI4NywxMC41NjIsMTcuNywxMC4yNywxNiwxMC4yNjljLTIuMjY4LDAuMDAzLTQuMzMzLDAuNTE2LTUuOTI1LDEuNDI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNzk1LDAuNDU2LTEuNDc3LDEuMDE2LTEuOTgzLDEuN2MtMC41MDUsMC42OC0wLjgyOCwxLjUwOC0wLjgyNiwyLjM5MmMtMC4wMDIsMC44MTksMC4yNzYsMS41OTUsMC43MjIsMi4yNDMmI3hkOyYjeGE7'+
			'JiN4OTsmI3g5O2MwLjQ0NSwwLjY1MSwxLjA0OSwxLjE5NCwxLjc1NSwxLjY0NmMwLjE5OSwwLjEyOCwwLjQyMywwLjE4OCwwLjY0MywwLjE4OGMwLjM5NSwwLDAuNzgxLTAuMTk1LDEuMDA5LTAuNTUzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zNTYtMC41NTcsMC4xOTMtMS4yOTYtMC4zNjMtMS42NTFsLTAuMDAxLTAuMDAxYy0wLjQ5LTAuMzEyLTAuODQ4LTAuNjU1LTEuMDY1LTAuOTc3Yy0wLjIxOC0wLjMyNC0wLjMwNC0wLjYwOC0wLjMwNi0wLjg5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDAyLTAuMzEsMC4xMDItMC42MTcsMC4zNTgtMC45NzFjMC4zODEtMC41MjUsMS4xNS0xLjA5MiwyLj'+
			'ItMS40OTVjMS4wNDgtMC40MDYsMi4zNjEtMC42NTgsMy43ODMtMC42NTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjg5NS0wLjAwMywzLjU5OSwwLjQ1MSw0LjczNCwxLjEwN2MwLjU2OSwwLjMyNSwwLjk5MiwwLjY5NiwxLjI0OCwxLjA0NWMwLjI1OCwwLjM1NCwwLjM1NiwwLjY2MSwwLjM1OCwwLjk3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMDA1LDAuNTAzLTAuMzA1LDEuMTA1LTEuMTM1LDEuNzEyYy0wLjUzNiwwLjM4Ny0wLjY1NiwxLjEzNS0wLjI3MSwxLjY3MWMwLjM4NywwLjUzNSwxLjEzNSwwLjY1NiwxLjY3MSwwLjI3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMjEyLTAuODY3LDIuMTIz'+
			'LTIuMTMsMi4xMjctMy42NTNDMjQuNzM1LDE0LjksMjQuNDEyLDE0LjA3MiwyMy45MDcsMTMuMzkyeiBNMTkuMzY0LDE2LjE4MmMtMC40NjgtMC40NjctMS4yMjYtMC40NjctMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjU1NywxLjU1OGwtMS41NTgtMS41NThjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJsMS41NTcsMS41NTdsLTEuNTU3LDEuNTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY4LTAuNDY3LDEuMjI2LDAsMS42OTJjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNy'+
			'wwLDAuNjEyLTAuMTE3LDAuODQ2LTAuMzUxbDEuNTU4LTEuNTU4bDEuNTU3LDEuNTU4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ3LTAuMzUxYzAuNDY3LTAuNDY3LDAuNDY3LTEuMjI1LDAtMS42OTJsLTEuNTU4LTEuNTU3bDEuNTU4LTEuNTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTkuODMxLDE3LjQwNiwxOS44MzEsMTYuNjQ4LDE5LjM2NCwxNi4xODJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._stop_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._stop_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNDk4LDkuMDk2LDIyLjkwMywzLjUs'+
			'MTYsMy41eiBNMjMuMTQ2LDIzLjE0N2MtMS44MzMsMS44MzEtNC4zNTIsMi45NTktNy4xNDYsMi45NjFjLTIuNzk2LTAuMDAyLTUuMzE1LTEuMTMtNy4xNDctMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M3LjAyMSwyMS4zMTQsNS44OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LDEuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3ei'+
			'BNMjMuOTA3LDEzLjM5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc2My0xLjAyNC0xLjkwNi0xLjc3Ni0zLjI2Mi0yLjMwNUMxOS4yODcsMTAuNTYyLDE3LjcsMTAuMjcsMTYsMTAuMjY5Yy0yLjI2OCwwLjAwMy00LjMzMywwLjUxNi01LjkyNSwxLjQyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc5NSwwLjQ1Ni0xLjQ3NywxLjAxNi0xLjk4MywxLjdjLTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4x'+
			'MjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzU2LTAuNTU3LDAuMTkzLTEuMjk2LTAuMzYzLTEuNjUxbC0wLjAwMS0wLjAwMWMtMC40OS0wLjMxMi0wLjg0OC0wLjY1NS0xLjA2NS0wLjk3N2MtMC4yMTgtMC4zMjQtMC4zMDQtMC42MDgtMC4zMDYtMC44OTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwMi0wLjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3JiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwNSwwLjUwMy0wLjMwNSwxLjEwNS0xLjEzNSwxLjcxMmMtMC41MzYsMC4zODctMC42NTYsMS4xMzUtMC4yNzEsMS42NzFjMC4zODcsMC41MzUsMS4xMzUsMC42NTYsMS42NzEsMC4yNzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjIxMi0wLjg2NywyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5'+
			'MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybDEuNTU3LDEuNTU3bC0xLjU1NywxLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2OC0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ni0wLjM1MWwxLjU1OC0xLjU1OGwxLjU1NywxLjU1OCYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7YzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE5LjgzMSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgyeiIvPgogPC9nPgogPGcgc3Ryb2tlLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIj'+
			'NTVhYTdmIiBmaWxsPSIjNTVhYTdmIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNDk4LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0N2MtMS44MzMsMS44MzEtNC4zNTIsMi45NTktNy4xNDYsMi45NjFjLTIuNzk2LTAuMDAyLTUuMzE1LTEuMTMtNy4xNDctMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M3LjAyMSwyMS4zMTQsNS44OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LD'+
			'EuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3eiBNMjMuOTA3LDEzLjM5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjc2My0xLjAyNC0xLjkwNi0xLjc3Ni0zLjI2Mi0yLjMwNUMxOS4yODcsMTAuNTYyLDE3LjcsMTAuMjcsMTYsMTAuMjY5Yy0yLjI2OCwwLjAwMy00LjMzMywwLjUxNi01LjkyNSwxLjQyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'Yy0wLjc5NSwwLjQ1Ni0xLjQ3NywxLjAxNi0xLjk4MywxLjdjLTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4xMjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzU2LTAuNTU3LDAuMTkzLTEuMjk2LTAuMzYzLTEuNjUxbC0wLjAwMS0wLjAwMWMtMC40OS0wLjMxMi0wLjg0OC0wLjY1NS0xLjA2NS0wLjk3N2'+
			'MtMC4yMTgtMC4zMjQtMC4zMDQtMC42MDgtMC4zMDYtMC44OTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwMi0wLjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjAwNSwwLjUwMy0wLjMwNSwxLjEwNS0xLjEz'+
			'NSwxLjcxMmMtMC41MzYsMC4zODctMC42NTYsMS4xMzUtMC4yNzEsMS42NzFjMC4zODcsMC41MzUsMS4xMzUsMC42NTYsMS42NzEsMC4yNzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjIxMi0wLjg2NywyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybD'+
			'EuNTU3LDEuNTU3bC0xLjU1NywxLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2OC0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ni0wLjM1MWwxLjU1OC0xLjU1OGwxLjU1NywxLjU1OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE5Ljgz'+
			'MSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgyeiIvPgogPC9nPgo8L3N2Zz4K';
		me._stop_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="stop_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._stop_rotate_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		me._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
		}
		me._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._stop_rotate_image);
		el=me._start_rotate_image0=document.createElement('div');
		els=me._start_rotate_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUz'+
			'LDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMz'+
			'UzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMD'+
			'k2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4'+
			'bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNj'+
			'IxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2'+
			'LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgogPGcgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzNhYzY3ZSIgZmlsbD0iIzU1YWE3ZiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMT'+
			'IuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0'+
			'N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LT'+
			'AuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCww'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMDk2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NT'+
			'ctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywx'+
			'OC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNjIxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wOD'+
			'gsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTkt'+
			'MTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMxLDEuODMzLTIuOTYsNC4zNTItMi45Niw3LjE0N2wwLDBjMCwyLjc5NCwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLj'+
			'k2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTct'+
			'MC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLj'+
			'k3OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU5Mi0wLjkw'+
			'NywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMj'+
			'AuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5'+
			'OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMzYWM2N2UiIGZpbGw9IiM1NWFhN2YiPgogIDxnPgogICA8cGF0aCBkPSJNMy41LDE2YzAtNi45MDQsNS41OT'+
			'YtMTIuNSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MzEsMS44MzMtMi45Niw0LjM1Mi0yLjk2LDcuMTQ3bDAsMGMwLDIuNzk0LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDdsMCwwYzEuODMyLDEuODMsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMy0xLjgzMi00LjM1My0yLjk2LTcuMTQ3LTIuOTZsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTRMOC44NTMsOC44NTR6Ii8+CiAgPC9nPgogIDxwYXRoIGQ9Ik0xOC4wNywyMC4wMDFjLTAuMTc0LTAuNjM4LDAuMjAzLTEuMjk1LDAuODQxLTEuNDY5bDAsMGMxLjEzNC0wLjMwNiwyLjA1NS'+
			'0wLjc4OSwyLjYzMy0xLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTg0LTAuNTI2LDAuNzk3LTEuMDA4LDAuNzk4LTEuNDQ0bDAsMGMtMC4wMDItMC4zMS0wLjEwMi0wLjYxNy0wLjM1OS0wLjk3bDAsMGMtMC4yNTYtMC4zNS0wLjY3OC0wLjcyMS0xLjI0Ny0xLjA0NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAwMS0yLjczNSwwLjI1LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTksMC45NjktMi4yMDEsMS40OTVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2Mt'+
			'MC4yNTcsMC4zNTQtMC4zNTYsMC42NjEtMC4zNTgsMC45N2wwLDBjMC4wMDEsMC4yODgsMC4wODcsMC41NzEsMC4zMDYsMC44OTVsMCwwYzAuMjE3LDAuMzIxLDAuNTc1LDAuNjY2LDEuMDY1LDAuOTc4bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMC4wMDFjMC41NTcsMC4zNTYsMC43MiwxLjA5NiwwLjM2NCwxLjY1MmwwLDBjLTAuMzU1LDAuNTU3LTEuMDk1LDAuNzItMS42NTIsMC4zNjRsMCwwYy0wLjcwNi0wLjQ1MS0xLjMxLTAuOTk0LTEuNzU1LTEuNjQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQ0LTAuNjQ3LTAuNzIzLTEuNDIzLTAuNzIyLTIuMjQzbDAsMGMtMC'+
			'4wMDEtMC44ODMsMC4zMjEtMS43MTIsMC44MjctMi4zOTJsMCwwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNTkyLTAuOTA3LDMuNjU3LTEuNDE5LDUuOTI1LTEuNDIzbDAsMGMxLjcsMCwzLjI4OCwwLjI5Myw0LjY0NiwwLjgxOGwwLDBjMS4zNTUsMC41MjksMi40OTgsMS4yODEsMy4yNjEsMi4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjUwNiwwLjY4LDAuODI5LDEuNTA4LDAuODI2LDIuMzkybDAsMGMwLjAwMSwxLjI4OC0wLjY2OCwyLjQxMy0xLjYwMiwzLjIzM2wwLDBjLTAuOTQyLDAuODMyLTIuMTc4'+
			'LDEuNDM4LTMuNTk0LDEuODI1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4KICA8cGF0aCBkPSJNMTYuMzk2LDIzLjYyMWwtMy4zNzMtMy4wMzljLTAuMjUxLTAuMjI2LTAuMzk2LTAuNTUxLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBsMy4zNzQtMy4wMzljMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMC'+
			'wwYzAuNDQyLDAuNDkxLDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtMi4zODYsMi4xNWwyLjM4NiwyLjE0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LDEuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMMTYuMzk2LDIzLjYyMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._start_rotate_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image0.style[domTransition]='';
				if (me._start_rotate_image0.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image0.style.visibility="hidden";
					me._start_rotate_image0.ggVisible=false;
				}
				else {
					me._start_rotate_image0.style.visibility=(Number(me._start_rotate_image0.style.opacity)>0||!me._start_rotate_image0.style.opacity)?'inherit':'hidden';
					me._start_rotate_image0.ggVisible=true;
				}
			}
		}
		me._start_rotate_image0.onmouseover=function (e) {
			me._start_rotate_image0__img.style.visibility='hidden';
			me._start_rotate_image0__imgo.style.visibility='inherit';
		}
		me._start_rotate_image0.onmouseout=function (e) {
			me._start_rotate_image0__img.style.visibility='inherit';
			me._start_rotate_image0__imgo.style.visibility='hidden';
		}
		me._start_rotate_image0.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._start_rotate_image0);
		el=me._tt_rotate_start=document.createElement('div');
		els=me._tt_rotate_start__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_rotate_start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : -10px;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_rotate_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_rotate_start.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_rotate_start.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_rotate_start.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_rotate_start.style[domTransition]='right 0s, top 0s';
				if (me._tt_rotate_start.ggCurrentLogicStatePosition == 0) {
					me._tt_rotate_start.style.right='0px';
					me._tt_rotate_start.style.top='32px';
				}
				else {
					me._tt_rotate_start.style.right='-10px';
					me._tt_rotate_start.style.top='32px';
				}
			}
		}
		me._tt_rotate_start.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_auto_rotate'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_rotate_start.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_rotate_start.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_rotate_start.style[domTransition]='right 0s, top 0s';
				if (me._tt_rotate_start.ggCurrentLogicStateVisible == 0) {
					me._tt_rotate_start.style.visibility=(Number(me._tt_rotate_start.style.opacity)>0||!me._tt_rotate_start.style.opacity)?'inherit':'hidden';
					me._tt_rotate_start.ggVisible=true;
				}
				else {
					me._tt_rotate_start.style.visibility="hidden";
					me._tt_rotate_start.ggVisible=false;
				}
			}
		}
		me._tt_rotate_start.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsAutorotating() == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_rotate_start.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_rotate_start.ggCurrentLogicStateText = newLogicStateText;
				me._tt_rotate_start.style[domTransition]='right 0s, top 0s';
				if (me._tt_rotate_start.ggCurrentLogicStateText == 0) {
					me._tt_rotate_start.ggText="Rota\xe7\xe3o Automatica";
					me._tt_rotate_start__text.innerHTML=me._tt_rotate_start.ggText;
					if (me._tt_rotate_start.ggUpdateText) {
					me._tt_rotate_start.ggUpdateText=function() {
						var hs="Rota\xe7\xe3o Automatica";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate_start.ggUpdatePosition) me._tt_rotate_start.ggUpdatePosition();
					}
				}
				else if (me._tt_rotate_start.ggCurrentLogicStateText == 1) {
					me._tt_rotate_start.ggText="Rota\xe7\xe3o Automatica";
					me._tt_rotate_start__text.innerHTML=me._tt_rotate_start.ggText;
					if (me._tt_rotate_start.ggUpdateText) {
					me._tt_rotate_start.ggUpdateText=function() {
						var hs="Rota\xe7\xe3o Automatica";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate_start.ggUpdatePosition) me._tt_rotate_start.ggUpdatePosition();
					}
				}
				else {
					me._tt_rotate_start.ggText="";
					me._tt_rotate_start__text.innerHTML=me._tt_rotate_start.ggText;
					if (me._tt_rotate_start.ggUpdateText) {
					me._tt_rotate_start.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_rotate_start.ggUpdatePosition) me._tt_rotate_start.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_rotate_start.ggUpdatePosition=function (useTransition) {
		}
		me._button_auto_rotate.appendChild(me._tt_rotate_start);
		me.divSkin.appendChild(me._button_auto_rotate);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_fullscreen.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._button_fullscreen.ggCurrentLogicStatePosition == 0) {
					me._button_fullscreen.style.right='0px';
					me._button_fullscreen.style.top='40px';
				}
				else {
					me._button_fullscreen.style.right='3px';
					me._button_fullscreen.style.top='50px';
				}
			}
		}
		me._button_fullscreen.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._button_fullscreen.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._button_fullscreen.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._button_fullscreen.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._button_fullscreen.ggCurrentLogicStateScaling == 0) {
					me._button_fullscreen.ggParameter.sx = 0.7;
					me._button_fullscreen.ggParameter.sy = 0.7;
					me._button_fullscreen.style[domTransform]=parameterToTransform(me._button_fullscreen.ggParameter);
				}
				else {
					me._button_fullscreen.ggParameter.sx = 1;
					me._button_fullscreen.ggParameter.sy = 1;
					me._button_fullscreen.style[domTransform]=parameterToTransform(me._button_fullscreen.ggParameter);
				}
			}
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.onmouseover=function (e) {
			me.elementMouseOver['button_fullscreen']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.onmouseout=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiM1NWFhN2YiPgogIDxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4z'+
			'MiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLj'+
			'UzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40NzcsNC42OTcsMTAuNDc3eiBNMTkuMjg5LDku'+
			'MDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE'+
			'0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7UzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2Mw'+
			'LjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0LDExLjExMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMD'+
			'QsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNCwyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2gtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAu'+
			'MzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LDcuMDMzJiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'tjLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0w'+
			'LjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjAuNTI1LD'+
			'IzLjQ2LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41'+
			'MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwyMi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMTc4LDAsMC4zNTctMC'+
			'4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KIDxnIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiM1NWFhN2YiIGZpbGw9IiM1NWFhN2YiPgogIDxwYXRoIGQ9Ik0xNiwxNC44MDRINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTFDMy42MjcsMTUuMzc3LDMuNSwxNS42ODYsMy41LDE2djguMTImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEs'+
			'MC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtINS44OTN2LTUuNzI4aDguOTExVjIyLjkyNHogTTQuNjk3LDEzLjk5OGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOGMwLTAuNjYtMC41MzYtMS4xOTUtMS4xOTYtMS4xOTUmI3hkOyYjeGE7JiN4OT'+
			'smI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzMuNjI4LDcuMjU3LDMuNSw3LjU2NCwzLjUsNy44OHYxLjM5OUMzLjUsOS45NCw0LjAzNiwxMC40Nzcs'+
			'NC42OTcsMTAuNDc3eiBNMTkuMjg5LDkuMDc2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNj'+
			'g0eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0yMi42OTgsOS4wNzZoMC4yNDNjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7UzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3'+
			'NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NlMxMS44MDgsOS4wNzYsMTIuNDY5LDkuMDc2eiBNMjcuMzA0LDExLjExMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjguNSwxMS'+
			'42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxNS4xODYsMjcuOTY0LDE0LjY1LDI3LjMwNCwxNC42NXogTTI3LjMwNCwyMS43MjhjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2gtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEu'+
			'MTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhDMjguNSwxOC43MjYsMjcuOTY0LDE4LjE4OSwyNy4zMDQsMTguMTg5eiBNMjguMTQ5LD'+
			'cuMDMzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ3YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEu'+
			'MjkxYy0wLjI4Ni0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtDMjAuNTI1LDIzLjQ2LDE5Ljk5LDIyLjkyNCwxOS4zMjksMjIuOTI0eiBNMTguNTg0LDE1LjI2NGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgt'+
			'MC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkMyMy45MzYsMjMuNDYsMjMuMzk5LDIyLjkyNCwyMi43MzksMjIuOTI0eiBNMjUuMTA0LDkuOTc2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzU1YWE3ZiI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zMTUsMC4xMjcs'+
			'MC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O0g1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLj'+
			'UzNi0xLjE5NS0xLjE5Ni0xLjE5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMu'+
			'NSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LD'+
			'EuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUz'+
			'Ni0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5Nn'+
			'YtMC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMTQuNjVjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0wLjIzNGMtMC42NiwwLTEuMTk2'+
			'LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy'+
			'45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4x'+
			'NDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYz'+
			'AuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUu'+
			'MjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LD'+
			'AuNDc0LDAuNDE0LDAuNzc0LDAuNDE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLjIyMi0wLjE0OEMyNS4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPgogPC9nPgogPGcgc3Ryb2tlLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjNTVhYTdmIiBmaWxsPSIjNTVhYTdmIj4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4'+
			'LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjMxNSwwLjEyNywwLjYyNCwwLjM1LDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxSDE2YzAuMzIsMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7SDUuODkzdi'+
			'01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTV2MC4zMDhDMy41LDEzLjQ2Miw0LjAzNiwxMy45OTgsNC42OTcsMTMuOTk4eiBNNC42OTcsMTAuNDc3YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2'+
			'SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5O0MzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM1LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0MmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlMxOC42MjgsOS4wNzYsMTkuMjg5LDkuMDc2eiBNMTYuMTIyLDYuNjg0aC0wLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy'+
			'0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O1MyMi4wMzgsOS4wNzYsMjIuNjk4LDkuMDc2eiBNOS4wNiw5LjA3NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41'+
			'MzYsMS4xOTYtMS4xOTZTOS45NjIsNi42ODQsOS4zMDIsNi42ODRIOS4wNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLj'+
			'UzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4z'+
			'MDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuMjM0Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxLjQzMWMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yz'+
			'AsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIyMy0wLjIyMi0wLjUzMS0wLjM1LTAuODQ2LTAuMzVoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4'+
			'QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRDMjEuNTI0LDEzLjQxOCwyMS43MDQsMTMuMzY3LDIxLjg2MywxMy4yNjF6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTE5LjMyOSwyMi'+
			'45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjljLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyMiwwLjE0'+
			'N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOTEmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjI4NS0wLjQyNy0wLj'+
			'g2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDdjLTAuNDI4LDAuMjg1LTAuNTQyLDAuODYzLTAuMjU2LDEuMjljMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen0=document.createElement('div');
		els=me._button_image_fullscreen0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiM1NWFhN2YiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQs'+
			'MC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjY2LDAsMS4xOTYtMC'+
			'41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'O2MwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTImI3hkOyYjeGE7JiN4OTsmI3g5O2wtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy'+
			'4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEu'+
			'MTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMC'+
			'wwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjNTVhYTdmIiBmaWxsPSIjNTVhYTdmIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7UzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5Nn'+
			'YwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0'+
			'eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDks'+
			'MjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNy'+
			'wwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_fullscreen0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzU1YWE3ZiI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O1MzLjUsNy41NjUs'+
			'My41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MS'+
			'wwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0Ljgw'+
			'NEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7bDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwy'+
			'My44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC'+
			'44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIHN0cm9rZS1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzU1YWE3ZiIgZmlsbD0iIzU1YWE3ZiI+'+
			'CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O1MzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1Ny'+
			'wyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUz'+
			'NiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC'+
			'0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQs'+
			'MC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuMz'+
			'E1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen0.style[domTransition]='';
				if (me._button_image_fullscreen0.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen0.style.visibility="hidden";
					me._button_image_fullscreen0.ggVisible=false;
				}
				else {
					me._button_image_fullscreen0.style.visibility=(Number(me._button_image_fullscreen0.style.opacity)>0||!me._button_image_fullscreen0.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen0.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen0.onmouseover=function (e) {
			me._button_image_fullscreen0__img.style.visibility='hidden';
			me._button_image_fullscreen0__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen0.onmouseout=function (e) {
			me._button_image_fullscreen0__img.style.visibility='inherit';
			me._button_image_fullscreen0__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen0.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen0);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 34px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_fullscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Tela Cheia";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Tela Cheia";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Sair";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Sair";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._tt_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTMzNDUuMjUgLTI2MDYgMzIgMzIiIHg9IjBweCIgdmlld0JveD0iLTMzNDUuMjUgLTI2MDYgMzIgMzIiIHZlcnNpb249IjEuMSIgaG'+
			'VpZ2h0PSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MtMzMyMi4zNTUtMjYw'+
			'Mi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIgZmlsbD0iIzFBMTcxQiIvPgogICAgPHBhdGggZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNjY4LTAuNTQyLTEuMjA5LT'+
			'EuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5LTAuMjk3LDEuMDM2LTAu'+
			'NTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NSwwLTEuMjMzLTAuMjg3LT'+
			'EuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3N2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFo'+
			'OC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzMyOS4yNDktMjYwMi41Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OT'+
			'smI3g5OyYjeDk7YzYuODkzLDAsMTIuNS01LjYwNywxMi41LTEyLjVTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OWM1LjQ0MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgtMjU4NC41Ni0zMzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNTgwLjEzMnoiIHN0cm9rZT0iIzFBMTcxQiIgZmlsbD0iIzU1YWE3ZiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBzdHJv'+
			'a2Utd2lkdGg9IjEuNSIgZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDloLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjNjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42Nz'+
			'ksMS41MDYsMC43OTMsMi41NzMsMC43OTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzYzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyYzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDIt'+
			'MjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLj'+
			'Y2OC0yLjY3NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NUMtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBzdHJva2U9IiMxQTE3MUIiIGZpbGw9IiM1NWFhN2YiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIg'+
			'ZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MtMzMyMi4zNTUtMjYwMi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1OD'+
			'AuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIgZmlsbD0iIzU1YWE3ZiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTMzMjEuNTg5LTI1OTMuODA4Yy0wLjktMS4yNi0yLjM5OS0xLjQyMi0zLjYwNC0xLjQyMmgtMS43MDR2LTEuNjQ2YzAtMC42NjgtMC41NDItMS4yMDktMS4yMS0xLjIwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMi4yODFjLTAuNjY4LDAtMS4yMSwwLjU0MS0xLjIxLDEuMjA5djEuNjQ2aC0xLjcwMmMtMS4yMDUsMC0yLjcwNCwwLjE2Mi0zLjYwNiwxLjQyMmMtMC42ODgsMC45NjEtMS4wMDcsMi4yMi0xLjAwNywzLjk2MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7JiN4OTsmI3g5O2MwLDIuMSwwLjYwMSwzLjgxNywxLjYwOSw0LjU5M2MwLjg4MSwwLjY3OSwxLjUwNiwwLjc5MywyLjU3MywwLjc5M2MxLjI1OCwwLDIuMjE0LTAuNDksMi45ODItMC44ODMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC41NzktMC4yOTcsMS4wMzYtMC41MzEsMS41MDEtMC41MzFzMC45MjMsMC4yMzQsMS41MDIsMC41MzJjMC43NjcsMC4zOTMsMS43MjQsMC44ODIsMi45ODIsMC44ODImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4wNjUsMCwxLjY5LTAuMTE0LDIuNTcyLTAuNzkyYzEuMDA5LTAuNzc2LDEuNjExLTIuNDkzLDEuNjExLTQuNTk1Qy0zMz'+
			'IwLjU4MS0yNTkxLjU4OC0zMzIwLjkwMi0yNTkyLjg0OC0zMzIxLjU4OS0yNTkzLjgwOHomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjY2Ny0yNTg3LjE2OGMtMC4zMzUsMC4yNTktMC4zNzgsMC4yOTItMS4wOTcsMC4yOTJjLTAuNjc1LDAtMS4yMzMtMC4yODctMS44NzktMC42MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzI5LTAuMzczLTEuNTU3LTAuNzk2LTIuNjA1LTAuNzk2cy0xLjg3NSwwLjQyMy0yLjYwNCwwLjc5NmMtMC42NDYsMC4zMzItMS4yMDQsMC42MTgtMS44NzksMC42MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzE5'+
			'LDAtMC43NjItMC4wMzMtMS4wOTYtMC4yOTJjLTAuMTQyLTAuMTEyLTAuNjY4LTAuODkzLTAuNjY4LTIuNjc3YzAtMS4xOTcsMC4xODEtMi4wMzMsMC41NTUtMi41NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMjYtMC4xNzYsMC40MzQtMC40MTEsMS42NC0wLjQxMWg4LjEwN2MxLjIwNSwwLDEuNTEyLDAuMjM0LDEuNjM4LDAuNDExYzAuMzc0LDAuNTIyLDAuNTU2LDEuMzU4LDAuNTU2LDIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzIzLTI1ODguMDYtMzMyMy41MjctMjU4Ny4yOC0zMzIzLjY2Ny0yNTg3LjE2OHoiIGZpbGw9IiM1NWFhN2YiLz4KICAgPC'+
			'9nPgogICA8Zz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGQ9Ik0tMzMyOS4yNDktMjYwMi41Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzYuODkzLDAsMTIuNS01LjYwNywxMi41LTEyLjVTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OWM1LjQ0'+
			'MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgtMjU4NC41Ni0zMzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNTgwLjEzMnoiIHN0cm9rZT0iIzFBMTcxQiIgZmlsbD0iIzU1YWE3ZiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDloLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0Nm'+
			'gtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjNjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzYzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNzY3LDAuMzkzLDEu'+
			'NzI0LDAuODgyLDIuOTgyLDAuODgyYzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44Nz'+
			'UsMC40MjMtMi42MDQsMC43OTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM3NCwwLjUyMiwwLjU1'+
			'NiwxLjM1OCwwLjU1NiwyLjU1NUMtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBzdHJva2U9IiMxQTE3MUIiIGZpbGw9IiM1NWFhN2YiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTMzNDUuMjUgLTI1NzEuMzMzIDMyIDMyIiB4PSIwcHgiIHZpZXdCb3g9Ii0zMzQ1LjI1IC0yNTcxLjMzMyAzMiAzMiIgdmVyc2lvbj'+
			'0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB5PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNy41ODMsMCwxMy43NS02LjE2'+
			'NywxMy43NS0xMy43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6IE0tMzMyOS4yNS0yNTQ0LjQ3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6IiBmaWxsPSIjMUExNzFCIi8+CiAgICA8cGF0aCBkPS'+
			'JNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NXYtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3Mywy'+
			'LjgzMSwwLjg3M2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NGMwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXomI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjFjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1'+
			'LTIuOTQ1YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MmMwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgc3'+
			'Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0tMzMyOS4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NWM3LjU4MywwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS42NjctMjU2OS4wODMtMzMyOS4yNS0yNTY5LjA4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzI5LjI1LTI1NDQuNDc5Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44'+
			'NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNS45ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLjg1NUMtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiIHN0cm9rZT0iIzFBMTcxQiIgZmlsbD0iIzU1YWE3ZiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTS0zMzIwLjgyNS0yNTU5LjUyMWMtMC45OS0xLjM4Ny0yLjYzOS0xLjU2NC0zLjk2NS0xLjU2NGgtMS44NzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTt2LTEuODEyYzAtMC43MzQtMC41OTYtMS4zMy0xLjMzMS0xLjMzaC'+
			'0yLjUwOWMtMC43MzUsMC0xLjMzMSwwLjU5Ni0xLjMzMSwxLjMzdjEuODEyaC0xLjg3M2MtMS4zMjUsMC0yLjk3NCwwLjE3OC0zLjk2NywxLjU2NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NTYsMS4wNTctMS4xMDcsMi40NDItMS4xMDcsNC4zNTljMCwyLjMxLDAuNjYyLDQuMTk5LDEuNzcsNS4wNTNjMC45NjksMC43NDcsMS42NTcsMC44NzMsMi44MzEsMC44NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4zODQsMCwyLjQzNi0wLjUzOSwzLjI4MS0wLjk3MWMwLjYzNy0wLjMyNywxLjE0LTAuNTg0LDEuNjUxLTAuNTg0YzAuNTEyLDAsMS4wMTUsMC4yNTcsMS42'+
			'NTIsMC41ODQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC44NDQsMC40MzIsMS44OTcsMC45NywzLjI4MSwwLjk3YzEuMTcxLDAsMS44NTktMC4xMjUsMi44My0wLjg3MWMxLjEwOS0wLjg1NCwxLjc3Mi0yLjc0MywxLjc3Mi01LjA1NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOS43MTUtMjU1Ny4wODEtMzMyMC4wNjgtMjU1OC40NjYtMzMyMC44MjUtMjU1OS41MjF6IE0tMzMyMy4xMTEtMjU1Mi4yMThjLTAuMzY5LDAuMjg1LTAuNDE2LDAuMzIxLTEuMjA2LDAuMzIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc0MiwwLTEuMzU3LTAuMzE1LTIuMD'+
			'Y3LTAuNjc5Yy0wLjgwMi0wLjQxMS0xLjcxMi0wLjg3Ni0yLjg2Ni0wLjg3NmMtMS4xNTMsMC0yLjA2MiwwLjQ2NS0yLjg2NSwwLjg3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43MSwwLjM2NC0xLjMyNSwwLjY3OS0yLjA2NywwLjY3OWMtMC43OTEsMC0wLjgzOC0wLjAzNi0xLjIwNS0wLjMyYy0wLjE1Ni0wLjEyMy0wLjczNS0wLjk4MS0wLjczNS0yLjk0NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMzE3LDAuMi0yLjIzNiwwLjYxLTIuODExYzAuMTM4LTAuMTk0LDAuNDc3LTAuNDUyLDEuODAzLTAuNDUyaDguOTE4YzEuMzI2LDAsMS42NjMsMC4yNTcsMS44'+
			'MDEsMC40NTImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40MTIsMC41NzUsMC42MTEsMS40OTQsMC42MTEsMi44MTFDLTMzMjIuMzc3LTI1NTMuMTk5LTMzMjIuOTU2LTI1NTIuMzQxLTMzMjMuMTExLTI1NTIuMjE4eiIgc3Ryb2tlPSIjMUExNzFCIiBmaWxsPSIjNTVhYTdmIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0tMzMyOS4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDljMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M3LjU4MywwLDEzLj'+
			'c1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS42NjctMjU2OS4wODMtMzMyOS4yNS0yNTY5LjA4M3ogTS0zMzI5LjI1LTI1NDQuNDc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44NTVjNS45ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiIGZpbGw9IiM1NWFhN2YiLz4KICAgIDxw'+
			'YXRoIGZpbGwtb3BhY2l0eT0iMSIgZD0iTS0zMzIwLjgyNS0yNTU5LjUyMWMtMC45OS0xLjM4Ny0yLjYzOS0xLjU2NC0zLjk2NS0xLjU2NGgtMS44NzV2LTEuODEyYzAtMC43MzQtMC41OTYtMS4zMy0xLjMzMS0xLjMzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0yLjUwOWMtMC43MzUsMC0xLjMzMSwwLjU5Ni0xLjMzMSwxLjMzdjEuODEyaC0xLjg3M2MtMS4zMjUsMC0yLjk3NCwwLjE3OC0zLjk2NywxLjU2NGMtMC43NTYsMS4wNTctMS4xMDcsMi40NDItMS4xMDcsNC4zNTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjMxLDAuNjYyLDQuMTk5LDEuNzcsNS4wNTNjMC'+
			'45NjksMC43NDcsMS42NTcsMC44NzMsMi44MzEsMC44NzNjMS4zODQsMCwyLjQzNi0wLjUzOSwzLjI4MS0wLjk3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjYzNy0wLjMyNywxLjE0LTAuNTg0LDEuNjUxLTAuNTg0YzAuNTEyLDAsMS4wMTUsMC4yNTcsMS42NTIsMC41ODRjMC44NDQsMC40MzIsMS44OTcsMC45NywzLjI4MSwwLjk3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMTcxLDAsMS44NTktMC4xMjUsMi44My0wLjg3MWMxLjEwOS0wLjg1NCwxLjc3Mi0yLjc0MywxLjc3Mi01LjA1NEMtMzMxOS43MTUtMjU1Ny4wODEtMzMyMC4wNjgtMjU1OC40NjYtMzMyMC44'+
			'MjUtMjU1OS41MjF6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy4xMTEtMjU1Mi4yMThjLTAuMzY5LDAuMjg1LTAuNDE2LDAuMzIxLTEuMjA2LDAuMzIxYy0wLjc0MiwwLTEuMzU3LTAuMzE1LTIuMDY3LTAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjgwMi0wLjQxMS0xLjcxMi0wLjg3Ni0yLjg2Ni0wLjg3NmMtMS4xNTMsMC0yLjA2MiwwLjQ2NS0yLjg2NSwwLjg3NmMtMC43MSwwLjM2NC0xLjMyNSwwLjY3OS0yLjA2NywwLjY3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43OTEsMC0wLjgzOC0wLjAzNi0xLjIwNS0wLjMyYy0wLjE1Ni'+
			'0wLjEyMy0wLjczNS0wLjk4MS0wLjczNS0yLjk0NWMwLTEuMzE3LDAuMi0yLjIzNiwwLjYxLTIuODExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTM4LTAuMTk0LDAuNDc3LTAuNDUyLDEuODAzLTAuNDUyaDguOTE4YzEuMzI2LDAsMS42NjMsMC4yNTcsMS44MDEsMC40NTJjMC40MTIsMC41NzUsMC42MTEsMS40OTQsMC42MTEsMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMjIuMzc3LTI1NTMuMTk5LTMzMjIuOTU2LTI1NTIuMzQxLTMzMjMuMTExLTI1NTIuMjE4eiIgZmlsbD0iIzU1YWE3ZiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbC1vcGFj'+
			'aXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTS0zMzI5LjI1LTI1NjkuMDgzYy03LjU4MSwwLTEzLjc1LDYuMTY4LTEzLjc1LDEzLjc0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDcuNTgzLDYuMTY4LDEzLjc1LDEzLjc1LDEzLjc1YzcuNTgzLDAsMTMuNzUtNi4xNjcsMTMuNzUtMTMuNzVDLTMzMTUuNS0yNTYyLjkxNS0zMzIxLjY2Ny0yNTY5LjA4My0zMzI5LjI1LTI1NjkuMDgzeiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5OyBNLTMzMjkuMjUtMjU0NC40NzljLTUuOTg1LDAtMTAuODU3LTQuODY5LTEwLjg1Ny0xMC44NTVjMC01Ljk4Niw0Ljg3Mi0xMC44NTUsMT'+
			'AuODU3LTEwLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M1Ljk4NywwLDEwLjg1Nyw0Ljg3MSwxMC44NTcsMTAuODU1Qy0zMzE4LjM5My0yNTQ5LjM0OS0zMzIzLjI2Mi0yNTQ0LjQ3OS0zMzI5LjI1LTI1NDQuNDc5eiIgc3Ryb2tlPSIjMUExNzFCIiBmaWxsPSIjNTVhYTdmIi8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3YtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEu'+
			'MzMxLTEuMzNoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OWMwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3MywyLjgzMSwwLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxYzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNS'+
			'wwLjI1NywxLjY1MiwwLjU4NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTdjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXogTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzQyLDAtMS4zNTct'+
			'MC4zMTUtMi4wNjctMC42NzljLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1LTIuOTQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTFjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2My'+
			'wwLjI1NywxLjgwMSwwLjQ1MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMUMtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6IiBzdHJva2U9IiMxQTE3MUIiIGZpbGw9IiM1NWFhN2YiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIi8+Cjwvc3ZnPgo=';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 135px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._enter_vr.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._enter_vr.ggCurrentLogicStatePosition == 0) {
					me._enter_vr.style.right='-1px';
					me._enter_vr.style.top='108px';
				}
				else {
					me._enter_vr.style.right='3px';
					me._enter_vr.style.top='135px';
				}
			}
		}
		me._enter_vr.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._enter_vr.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._enter_vr.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._enter_vr.ggCurrentLogicStateScaling == 0) {
					me._enter_vr.ggParameter.sx = 0.7;
					me._enter_vr.ggParameter.sy = 0.7;
					me._enter_vr.style[domTransform]=parameterToTransform(me._enter_vr.ggParameter);
				}
				else {
					me._enter_vr.ggParameter.sx = 1;
					me._enter_vr.ggParameter.sy = 1;
					me._enter_vr.style[domTransform]=parameterToTransform(me._enter_vr.ggParameter);
				}
			}
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='right 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_vr=document.createElement('div');
		els=me._tt_enter_vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Acessar VR";
		el.appendChild(els);
		me._tt_enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_enter_vr.style[domTransition]='right 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStatePosition == 0) {
					me._tt_enter_vr.style.right='1px';
					me._tt_enter_vr.style.top='50px';
				}
				else {
					me._tt_enter_vr.style.right='1px';
					me._tt_enter_vr.style.top='40px';
				}
			}
		}
		me._tt_enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_vr.style[domTransition]='right 0s, top 0s';
				if (me._tt_enter_vr.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_vr.style.visibility=(Number(me._tt_enter_vr.style.opacity)>0||!me._tt_enter_vr.style.opacity)?'inherit':'hidden';
					me._tt_enter_vr.ggVisible=true;
				}
				else {
					me._tt_enter_vr.style.visibility="hidden";
					me._tt_enter_vr.ggVisible=false;
				}
			}
		}
		me._tt_enter_vr.ggUpdatePosition=function (useTransition) {
		}
		me._enter_vr.appendChild(me._tt_enter_vr);
		me.divSkin.appendChild(me._enter_vr);
		el=me._whatsapp=document.createElement('div');
		els=me._whatsapp__img=document.createElement('img');
		els.className='ggskin ggskin_whatsapp';
		hs=basePath + 'images/whatsapp.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Whatsapp";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsapp.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._whatsapp.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._whatsapp.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._whatsapp.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._whatsapp.style[domTransition]='right 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._whatsapp.ggCurrentLogicStatePosition == 0) {
					me._whatsapp.style.right='9px';
					me._whatsapp.style.bottom='5px';
				}
				else {
					me._whatsapp.style.right='9px';
					me._whatsapp.style.bottom='5px';
				}
			}
		}
		me._whatsapp.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._whatsapp.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._whatsapp.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._whatsapp.style[domTransition]='right 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._whatsapp.ggCurrentLogicStateScaling == 0) {
					me._whatsapp.ggParameter.sx = 0.7;
					me._whatsapp.ggParameter.sy = 0.7;
					me._whatsapp.style[domTransform]=parameterToTransform(me._whatsapp.ggParameter);
				}
				else {
					me._whatsapp.ggParameter.sx = 1;
					me._whatsapp.ggParameter.sy = 1;
					me._whatsapp.style[domTransform]=parameterToTransform(me._whatsapp.ggParameter);
				}
			}
		}
		me._whatsapp.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				me._whatsappmenu.ggVisible = !me._whatsappmenu.ggVisible;
				var flag=me._whatsappmenu.ggVisible;
				me._whatsappmenu.style[domTransition]='none';
				me._whatsappmenu.style.visibility=((flag)&&(Number(me._whatsappmenu.style.opacity)>0||!me._whatsappmenu.style.opacity))?'inherit':'hidden';
			}
		}
		me._whatsapp.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._whatsapp);
		el=me._manual=document.createElement('div');
		el.ggId="Manual";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 50px;';
		hs+='border-radius : 50px;';
		hs+='background : #ffffff;';
		hs+='border : 5px solid #55aa7f;';
		hs+='cursor : default;';
		hs+='height : 150px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._manual.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._manual.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._manual.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._manual.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._manual.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._manual.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._manual.style.top='10px';
					me._manual.ggUpdatePosition(true);
				}
				else {
					me._manual.ggDx=0;
					me._manual.style.top='40px';
					me._manual.ggUpdatePosition(true);
				}
			}
		}
		me._manual.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._manual.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._manual.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._manual.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._manual.ggCurrentLogicStateScaling == 0) {
					me._manual.ggParameter.sx = 0.5;
					me._manual.ggParameter.sy = 0.5;
					me._manual.style[domTransform]=parameterToTransform(me._manual.ggParameter);
				}
				else {
					me._manual.ggParameter.sx = 1;
					me._manual.ggParameter.sy = 1;
					me._manual.style[domTransform]=parameterToTransform(me._manual.ggParameter);
				}
			}
		}
		me._manual.onclick=function (e) {
			player.openUrl("https:\/\/www.excellencedesign.com.br\/_files\/ugd\/72ff33_fbcd01183e5b4f53a5f4aa6a88cf018d.pdf","");
		}
		me._manual.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._garantia=document.createElement('div');
		els=me._garantia__img=document.createElement('img');
		els.className='ggskin ggskin_garantia';
		hs=basePath + 'images/garantia.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Garantia";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 113px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 442px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._garantia.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._garantia.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._manual.appendChild(me._garantia);
		me.divSkin.appendChild(me._manual);
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 124px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 167px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 15 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 15 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaX *= 0.65;
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._scrollarea_1__content.ontouchend = null;
				me._scrollarea_1__content.ontouchmove = null;
				me._scrollarea_1__content.onpointerup = null;
				me._scrollarea_1__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
		}
			me._scrollarea_1__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
				me._scrollarea_1.ggDragInertiaX = -diffX;
				me._scrollarea_1.ggDragInertiaY = -diffY;
				me._scrollarea_1.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByX(-diffX);
				me._scrollarea_1.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 270px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 270px; background-color: rgba(192,192,192,0); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  50px);';
		hs+='left : -8px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 68px;';
		hs+='visibility : inherit;';
		hs+='width : 161px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1.ggVertScrollVisible = true;
				} else {
					me._scrollarea_1__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 15;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 15;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					me.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._node_clone=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 150;
		el.ggHeight = 119;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		el.ggUpdate = function(filter) {
			if(me._node_clone.ggUpdating == true) return;
			me._node_clone.ggUpdating = true;
			var el=me._node_clone;
			var curNumCols = 0;
			curNumCols = me._node_clone.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_clone.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_clone.ggHeight) + 'px';
				parameter.left=(column * me._node_clone.ggWidth) + 'px';
				parameter.width=me._node_clone.ggWidth + 'px';
				parameter.height=me._node_clone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_clone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_clone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_clone.parentNode.classList.contains('ggskin_subelement') && me._node_clone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_clone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="Node Clone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 119px;';
		hs+='left : 17px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_clone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_clone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_clone.childNodes.length; i++) {
				var child=me._node_clone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_clone.ggUpdatePosition=function (useTransition) {
				me._node_clone.ggUpdate();
		}
		me._node_clone.ggNodeChange=function () {
			me._node_clone.ggUpdateConditionNodeChange();
		}
		me._scrollarea_1__content.appendChild(me._node_clone);
		me.divSkin.appendChild(me._scrollarea_1);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=250;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('var_hs', player.getVariableValue('var_hs') + Number("1"));
			player.setVariableValue('var_hs', player.getVariableValue('var_hs') % Number("4"));
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._video_screentint_file=document.createElement('div');
		el.ggId="video_screentint_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_screentint_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_screentint_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_screentint_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_screentint_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_screentint_file.style[domTransition]='';
				if (me._video_screentint_file.ggCurrentLogicStateVisible == 0) {
					me._video_screentint_file.style.visibility=(Number(me._video_screentint_file.style.opacity)>0||!me._video_screentint_file.style.opacity)?'inherit':'hidden';
					me._video_screentint_file.ggVisible=true;
				}
				else {
					me._video_screentint_file.style.visibility="hidden";
					me._video_screentint_file.ggVisible=false;
				}
			}
		}
		me._video_screentint_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._video_screentint_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._video_screentint_file);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style[domTransition]='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMCIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjEyNXMiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAu'+
			'NCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4yNXMiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeT0iMyIgY3g9IjE2Ij4KICA8YW5pbWF0ZSByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMzc1cyIgZH'+
			'VyPSIxcyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC41cyIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC42MjVzIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC'+
			'4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC44NzVzIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5l'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_file.ggVideoNotLoaded ==false && me._popup_video_file.ggDeactivate) { me._popup_video_file.ggDeactivate(); }
				me._popup_video_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.style.outline = 'none';
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			if (me._popup_video_file.ggActivate) {
				me._popup_video_file__vid.addEventListener('play', me._popup_video_file.ggActivate);
			}
			if (me._popup_video_file.ggDeactivate) {
				me._popup_video_file__vid.addEventListener('ended', me._popup_video_file.ggDeactivate);
				me._popup_video_file__vid.addEventListener('pause', me._popup_video_file.ggDeactivate);
			}
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0.01%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style[domTransition]='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		me._popup_video_file.ggDeactivate=function () {
			if (
				(
					((me.ggUserdata.customnodeid == "Arvores"))
				)
			) {
					player.playSound("Audio1","100");
			}
				player.playSound("Audio2","100");
		}
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style[domTransition]='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		me._seekbar_file.fromBufferSource = false;
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_file.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#000000';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl) {
				me._seekbar_file.fromBufferSource = false;
			} else {
				me._seekbar_file.mediaEl = player.getMediaBufferSourceObject('popup_video_file');
				me._seekbar_file.fromBufferSource = true;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '1px';
				if (me._seekbar_file.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
				me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function(args) {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState || (me._seekbar_file.fromBufferSource && args && args['id'] == me._seekbar_file.mediaEl.id)) {
					if (me._seekbar_file.fromBufferSource) {
						var percent = me._seekbar_file.mediaEl.bufferSoundCurrentTime() / me._seekbar_file.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					if (me._seekbar_file.fromBufferSource) {
						gradientString += ', #c0c0c0 ' + currPos +'%, #c0c0c0 100%';
					} else {
						for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', #c0c0c0 ' + currPos + '%';
								} else {
									gradientString += ', #000000 ' + currPos + '%, #000000 ' + rangeStart + '%';
									gradientString += ', #c0c0c0 ' + rangeStart + '%';
								}
									gradientString += ', #c0c0c0 ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', #000000 ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.onmouseup=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
			me._seekbar_file.updatePlayback();
		}
		me._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNTAuNSwzOTguNmwtMzguMSwyNi42Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMlYzNzBjMC0xLjUsMS0yLjEsMi4zLTEuMmwzOC4yLDI2LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQ5LjMsMzk2LjMtMTQ5LjMsMzk3LjctMTUwLjUsMzk4LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJf'+
			'MiI+CiAgPHBhdGggZD0iTS0xOTEsMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42YzEuMywwLjksMS4zLDIuMywwLDMuMmwtMzguMiwyNi42Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMlYzNzB6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_play_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0Ny44LDM5OC44bC00Mi40LDI5LjZjLTEuNCwxLTIuNiwwLjQtMi42LTEuM1YzNjdjMC0xLjcsMS4yLTIuMywyLjYtMS4zbDQyLjQsMjkuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDYuNCwzOTYuMi0xNDYuNCwzOTcuOC0xNDcuOCwzOTguOHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlk'+
			'PSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE5Mi44LDM2N2MwLTEuNywxLjItMi4zLDIuNi0xLjNsNDIuNCwyOS42YzEuNCwxLDEuNCwyLjYsMCwzLjZsLTQyLjQsMjkuNmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM2N3oiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.playVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		me._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNzcuNyw0MTYuM2MwLDEuMy0xLDIuMy0yLjMsMi4zaC0xNC4zYy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42YzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMywwLDIuMywxLDIuMywyLjNDLTE3Ny43LDM3Ny43LTE3Ny43LDQxNi4zLTE3Ny43LDQxNi4zeiBNLTE1My40LDQx'+
			'Ni4zYzAsMS4zLTEsMi4zLTIuMywyLjNILTE3MGMtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuM2MxLjMsMCwyLjMsMSwyLjMsMi4zQy0xNTMuNCwzNzcuNy0xNTMuNCw0MTYuMy0xNTMuNCw0MTYuM3oiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xODAsMzc1LjRoLTE0LjNjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OT'+
			'tDLTE3Ny43LDM3Ni40LTE3OC43LDM3NS40LTE4MCwzNzUuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdGggZD0iTS0xNTUuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OCw0MTguNGMwLDEuNC0xLjEsMi42LTIuNiwyLjZoLTE1LjljLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS40LDEuMS0yLjYsMi42LTIuNmgxNS45YzEuNCwwLDIuNiwxLjEsMi42LDIuNkMtMTc4LDM3NS41LTE3OCw0MTguNC0xNzgsNDE4LjR6IE0t'+
			'MTUxLDQxOC40YzAsMS40LTEuMSwyLjYtMi42LDIuNmgtMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjljMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNTEsMzc1LjUtMTUxLDQxOC40LTE1MSw0MTguNHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xODAuNSwzNzNoLTE1LjljLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY0Mi45YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxNS45YzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNDIuOSYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7JiN4OTtDLTE3OCwzNzQuMS0xNzkuMSwzNzMtMTgwLjUsMzczeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE1My41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LDAsMi42LTEuMSwyLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTUxLDM3NC4xLTE1Mi4xLDM3My0xNTMuNSwzNzN6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_file");
			}
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		me._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._video_popup_close_file=document.createElement('div');
		els=me._video_popup_close_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41'+
			'LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LDQxMi43eiIgZmlsbD0iIz'+
			'U1YWE3ZiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAu'+
			'My0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_popup_close_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_close_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0x'+
			'LjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiIGZpbGw9IiM1NWFhN2YiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0wLjMtMC4zLTAuNC0wLjct'+
			'MC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_popup_close_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="video_popup_close_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_close_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_close_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_file.style[domTransition]='';
				if (me._video_popup_close_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_file.style.visibility=(Number(me._video_popup_close_file.style.opacity)>0||!me._video_popup_close_file.style.opacity)?'inherit':'hidden';
					me._video_popup_close_file.ggVisible=true;
				}
				else {
					me._video_popup_close_file.style.visibility="hidden";
					me._video_popup_close_file.ggVisible=false;
				}
			}
		}
		me._video_popup_close_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._video_popup_close_file.onmouseover=function (e) {
			me._video_popup_close_file__img.style.visibility='hidden';
			me._video_popup_close_file__imgo.style.visibility='inherit';
		}
		me._video_popup_close_file.onmouseout=function (e) {
			me._video_popup_close_file__img.style.visibility='inherit';
			me._video_popup_close_file__imgo.style.visibility='hidden';
		}
		me._video_popup_close_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._video_popup_close_file);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0.16%;';
		hs+='position : absolute;';
		hs+='top : -0.22%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup_1', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._information_bg=document.createElement('div');
		el.ggId="information_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : rgba(0,85,0,0.666667);';
		hs+='border : 2px solid #005500;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._information_bg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._information_bg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 276px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 276px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 245px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 245px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41'+
			'LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LDQxMi43eiIgZmlsbD0iIz'+
			'U1YWE3ZiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAu'+
			'My0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0x'+
			'LjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiIGZpbGw9IiM1NWFhN2YiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0wLjMtMC4zLTAuNC0wLjct'+
			'MC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup_1', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		me._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._information);
		el=me._screentint_image=document.createElement('div');
		el.ggId="screentint_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_image.style[domTransition]='';
				if (me._screentint_image.ggCurrentLogicStateVisible == 0) {
					me._screentint_image.style.visibility=(Number(me._screentint_image.style.opacity)>0||!me._screentint_image.style.opacity)?'inherit':'hidden';
					me._screentint_image.ggVisible=true;
				}
				else {
					me._screentint_image.style.visibility="hidden";
					me._screentint_image.ggVisible=false;
				}
			}
		}
		me._screentint_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_image);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2NCIgd2lkdGg9IjY0IiBmaWxsPSJ3aGl0ZSI+CiA8Y2lyY2xlIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMCIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKD'+
			'Q1IDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjEyNXMiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAu'+
			'NCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC4yNXMiIGR1cj0iMXMiIGNhbGNNb2RlPSJzcGxpbmUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIiBjeT0iMyIgY3g9IjE2Ij4KICA8YW5pbWF0ZSByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHZhbHVlcz0iMDszOzA7MCIgYXR0cmlidXRlTmFtZT0iciIgYmVnaW49IjAuMzc1cyIgZH'+
			'VyPSIxcyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC41cyIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBj'+
			'eD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC42MjVzIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC'+
			'4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjc1cyIgZHVyPSIxcyIgY2FsY01vZGU9InNwbGluZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiIGN5PSIzIiBjeD0iMTYiPgogIDxhbmltYXRlIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgdmFsdWVzPSIwOzM7MDswIiBhdHRyaWJ1dGVOYW1lPSJyIiBiZWdpbj0iMC44NzVzIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5l'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCIgY3k9IjMiIGN4PSIxNiI+CiAgPGFuaW1hdGUgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiB2YWx1ZXM9IjA7MzswOzAiIGF0dHJpYnV0ZU5hbWU9InIiIGJlZ2luPSIwLjVzIiBkdXI9IjFzIiBjYWxjTW9kZT0ic3BsaW5lIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -0.19%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['popup_image'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._popup_image.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._popup_image.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._popup_image.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._popup_image.ggCurrentLogicStateScaling == 0) {
					me._popup_image.ggParameter.sx = 1.2;
					me._popup_image.ggParameter.sy = 1.2;
					me._popup_image.style[domTransform]=parameterToTransform(me._popup_image.ggParameter);
				}
				else {
					me._popup_image.ggParameter.sx = 1;
					me._popup_image.ggParameter.sy = 1;
					me._popup_image.style[domTransform]=parameterToTransform(me._popup_image.ggParameter);
				}
			}
		}
		me._popup_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._popup_image.ggCurrentLogicStateVisible == 0) {
					me._popup_image.style.visibility=(Number(me._popup_image.style.opacity)>0||!me._popup_image.style.opacity)?'inherit':'hidden';
					me._popup_image.ggSubElement.src=me._popup_image.ggText;
					me._popup_image.ggVisible=true;
				}
				else {
					me._popup_image.style.visibility="hidden";
					me._popup_image__img.src = '';
					me._popup_image.ggVisible=false;
				}
			}
		}
		me._popup_image.onmouseover=function (e) {
			me.elementMouseOver['popup_image']=true;
			me._popup_image.logicBlock_scaling();
		}
		me._popup_image.onmouseout=function (e) {
			me.elementMouseOver['popup_image']=false;
			me._popup_image.logicBlock_scaling();
		}
		me._popup_image.ontouchend=function (e) {
			me.elementMouseOver['popup_image']=false;
			me._popup_image.logicBlock_scaling();
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._image_popup_close=document.createElement('div');
		els=me._image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTEzNS4zLDM1Ny4zYy0yMS45LTIxLjktNTcuNS0yMS45LTc5LjQsMGMtMjEuOSwyMS45LTIxLjksNTcuNSwwLDc5LjRjMjEuOSwyMS45LDU3LjUsMjEuOSw3OS40LDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTEzLjQsMzc5LjItMTM1LjMsMzU3LjN6IE0tMTQ1LjgsNDEyLjdjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRsLTEwLjksMTAuOWMtMC40LDAuNC0wLjgsMC41LTEuMywwLjVjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xNS44LTE1LjhsLTE1LjcsMTUuN2MtMC40LDAuNC0wLjgsMC41'+
			'LTEuMywwLjVzLTAuOS0wLjEtMS4xLTAuNGwtMTEuMS0xMS4xYy0wLjMtMC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS43LTE1LjdsLTE1LjgtMTUuOGMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDEwLjktMTAuOWMwLjktMC45LDEuNy0wLjksMi40LTAuMWwxNS44LDE1LjhsMTUuNy0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTEuMSwxMS4xYzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xNS43LDE1LjdMLTE0NS44LDQxMi43eiIgZmlsbD0iIz'+
			'U1YWE3ZiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTYxLjYsMzk2LjlsMTUuOCwxNS44YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjEtMS4xLTAuNGwtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAu'+
			'My0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNS44LDE1LjhsMTUuNy0xNS43YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNEwtMTYxLjYsMzk2Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._image_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgYmFzZVByb2ZpbGU9InRpbnkiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBkPSJNLTEzMC45LDM1Mi45Yy0yNC40LTI0LjQtNjMuOC0yNC40LTg4LjIsMGMtMjQuNCwyNC40LTI0LjQsNjMuOCwwLDg4LjJjMjQuNCwyNC40LDYzLjgsMjQuNCw4OC4yLDAmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTA2LjUsMzc3LjMtMTMwLjksMzUyLjl6IE0tMTQyLjUsNDE0LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0x'+
			'LjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41bDE3LjQtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTcuNCwxNy40TC0xNDIuNSw0MTQuNXoiIGZpbGw9IiM1NWFhN2YiLz4KIDwvZz'+
			'4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBkPSJNLTE2MC4xLDM5Ni45bDE3LjUsMTcuNWMwLjgsMC44LDAuOCwxLjctMC4xLDIuN2wtMTIuMiwxMi4yYy0wLjQsMC40LTAuOCwwLjYtMS40LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xNy41LTE3LjVsLTE3LjQsMTcuNGMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjZjLTAuNiwwLTEtMC4xLTEuMy0wLjRsLTEyLjMtMTIuM2MtMC4zLTAuMy0wLjQtMC43LTAuNC0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNiwwLjEtMSwwLjYtMS40bDE3LjQtMTcuNGwtMTcuNS0xNy41Yy0wLjMtMC4zLTAuNC0wLjct'+
			'MC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40bDEyLjItMTIuMmMxLTEsMS44LTEsMi43LTAuMWwxNy41LDE3LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wxNy40LTE3LjRjMS0xLDEuOC0xLDIuNy0wLjFsMTIuMywxMi4zYzAuOCwwLjgsMC44LDEuNy0wLjEsMi43TC0xNjAuMSwzOTYuOXoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="image_popup_close";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close.style[domTransition]='';
				if (me._image_popup_close.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close.style.visibility=(Number(me._image_popup_close.style.opacity)>0||!me._image_popup_close.style.opacity)?'inherit':'hidden';
					me._image_popup_close.ggVisible=true;
				}
				else {
					me._image_popup_close.style.visibility="hidden";
					me._image_popup_close.ggVisible=false;
				}
			}
		}
		me._image_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._image_popup_close.onmouseover=function (e) {
			me._image_popup_close__img.style.visibility='hidden';
			me._image_popup_close__imgo.style.visibility='inherit';
		}
		me._image_popup_close.onmouseout=function (e) {
			me._image_popup_close__img.style.visibility='inherit';
			me._image_popup_close__imgo.style.visibility='hidden';
		}
		me._image_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_popup_close);
		el=me._svisuals=document.createElement('div');
		els=me._svisuals__img=document.createElement('img');
		els.className='ggskin ggskin_svisuals';
		hs=basePath + 'images/svisuals.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SVisuals";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svisuals.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svisuals.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['svisuals'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._svisuals.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._svisuals.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._svisuals.style[domTransition]='opacity 0s';
				if (me._svisuals.ggCurrentLogicStateAlpha == 0) {
					me._svisuals.style.visibility=me._svisuals.ggVisible?'inherit':'hidden';
					me._svisuals.style.opacity=1;
				}
				else {
					me._svisuals.style.visibility=me._svisuals.ggVisible?'inherit':'hidden';
					me._svisuals.style.opacity=0.5;
				}
			}
		}
		me._svisuals.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				player.openUrl("https:\/\/wa.me\/+5511989533744","");
			}
		}
		me._svisuals.onmouseover=function (e) {
			me.elementMouseOver['svisuals']=true;
			me._svisula_texto.logicBlock_visible();
			me._svisuals.logicBlock_alpha();
		}
		me._svisuals.onmouseout=function (e) {
			me.elementMouseOver['svisuals']=false;
			me._svisula_texto.logicBlock_visible();
			me._svisuals.logicBlock_alpha();
		}
		me._svisuals.ontouchend=function (e) {
			me.elementMouseOver['svisuals']=false;
			me._svisula_texto.logicBlock_visible();
			me._svisuals.logicBlock_alpha();
		}
		me._svisuals.ggUpdatePosition=function (useTransition) {
		}
		el=me._svisula_texto=document.createElement('div');
		els=me._svisula_texto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="SVisula Texto";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 20px;';
		hs+='left : 26px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 226px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 226px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Desenvolvido pela SVisuals";
		el.appendChild(els);
		me._svisula_texto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svisula_texto.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['svisuals'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svisula_texto.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svisula_texto.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svisula_texto.style[domTransition]='';
				if (me._svisula_texto.ggCurrentLogicStateVisible == 0) {
					me._svisula_texto.style.visibility=(Number(me._svisula_texto.style.opacity)>0||!me._svisula_texto.style.opacity)?'inherit':'hidden';
					me._svisula_texto.ggVisible=true;
				}
				else {
					me._svisula_texto.style.visibility="hidden";
					me._svisula_texto.ggVisible=false;
				}
			}
		}
		me._svisula_texto.ggUpdatePosition=function (useTransition) {
		}
		me._svisuals.appendChild(me._svisula_texto);
		me.divSkin.appendChild(me._svisuals);
		el=me._whatsappmenu=document.createElement('div');
		el.ggId="WhatsappMenu";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 30px;';
		hs+='border-radius : 30px;';
		hs+='background : #ffffff;';
		hs+='border : 7px solid #005500;';
		hs+='cursor : default;';
		hs+='height : 448px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappmenu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._whatsappmenu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 151px;';
		hs+='left : 29px;';
		hs+='position : absolute;';
		hs+='top : 147px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.onclick=function (e) {
			player.openUrl("https:\/\/api.whatsapp.com\/send?phone=5511940286590&text=Ol%C3%A1%2C%20preciso%20de%20ajuda","");
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._whatsappmenu.appendChild(me._image_2);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs=basePath + 'images/image_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 145px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : 301px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3.onclick=function (e) {
			player.openUrl("https:\/\/api.whatsapp.com\/send?phone=5511987515031&text=Ol%C3%A1%2C%20preciso%20de%20ajuda","");
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._whatsappmenu.appendChild(me._image_3);
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 157px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 223px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.onclick=function (e) {
			player.openUrl("https:\/\/api.whatsapp.com\/send?phone=5511975617644&text=Ol%C3%A1%2C%20preciso%20de%20ajuda","");
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._whatsappmenu.appendChild(me._image_4);
		me.divSkin.appendChild(me._whatsappmenu);
		el=me._indicaes_de_uso=document.createElement('div');
		el.ggId="Indica\xe7\xf5es de Uso";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 30px;';
		hs+='border-radius : 30px;';
		hs+='background : #ffffff;';
		hs+='border : 7px solid #005500;';
		hs+='cursor : default;';
		hs+='height : 448px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._indicaes_de_uso.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._indicaes_de_uso.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._indicaes_de_uso.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._indicaes_de_uso.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = 20;
					me._indicaes_de_uso.ggUpdatePosition(true);
				}
				else {
					me._indicaes_de_uso.ggDx=0;
					me._indicaes_de_uso.ggDy=0;
					me._indicaes_de_uso.ggUpdatePosition(true);
				}
			}
		}
		me._indicaes_de_uso.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 500))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 900))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._indicaes_de_uso.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._indicaes_de_uso.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStateScaling == 0) {
					me._indicaes_de_uso.ggParameter.sx = 0.8;
					me._indicaes_de_uso.ggParameter.sy = 0.7;
					me._indicaes_de_uso.style[domTransform]=parameterToTransform(me._indicaes_de_uso.ggParameter);
				}
				else if (me._indicaes_de_uso.ggCurrentLogicStateScaling == 1) {
					me._indicaes_de_uso.ggParameter.sx = 0.8;
					me._indicaes_de_uso.ggParameter.sy = 0.8;
					me._indicaes_de_uso.style[domTransform]=parameterToTransform(me._indicaes_de_uso.ggParameter);
				}
				else {
					me._indicaes_de_uso.ggParameter.sx = 1;
					me._indicaes_de_uso.ggParameter.sy = 1;
					me._indicaes_de_uso.style[domTransform]=parameterToTransform(me._indicaes_de_uso.ggParameter);
				}
			}
		}
		me._indicaes_de_uso.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['indicaes_de_uso'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._indicaes_de_uso.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._indicaes_de_uso.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStateAlpha == 0) {
					me._indicaes_de_uso.style.visibility=me._indicaes_de_uso.ggVisible?'inherit':'hidden';
					me._indicaes_de_uso.style.opacity=1;
				}
				else {
					me._indicaes_de_uso.style.visibility=me._indicaes_de_uso.ggVisible?'inherit':'hidden';
					me._indicaes_de_uso.style.opacity=0.3;
				}
			}
		}
		me._indicaes_de_uso.onmouseover=function (e) {
			me.elementMouseOver['indicaes_de_uso']=true;
			me._indicaes_de_uso.logicBlock_alpha();
		}
		me._indicaes_de_uso.onmouseout=function (e) {
			me.elementMouseOver['indicaes_de_uso']=false;
			me._indicaes_de_uso.logicBlock_alpha();
		}
		me._indicaes_de_uso.ontouchend=function (e) {
			me.elementMouseOver['indicaes_de_uso']=false;
			me._indicaes_de_uso.logicBlock_alpha();
		}
		me._indicaes_de_uso.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._iniciar1=document.createElement('div');
		el.ggId="Iniciar";
		el.ggDx=0;
		el.ggDy=189;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 30px;';
		hs+='border-radius : 30px;';
		hs+='background : #005500;';
		hs+='border : 7px solid #005500;';
		hs+='cursor : default;';
		hs+='height : 71px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iniciar1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iniciar1.onclick=function (e) {
			player.setVariableValue('indicativo', true);
			me._indicaes_de_uso.style[domTransition]='none';
			me._indicaes_de_uso.style.visibility='hidden';
			me._indicaes_de_uso.ggVisible=false;
		}
		me._iniciar1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._iniciar2=document.createElement('div');
		els=me._iniciar2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Iniciar";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 139px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="INICIAR";
		el.appendChild(els);
		me._iniciar2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iniciar2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((141-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._iniciar1.appendChild(me._iniciar2);
		me._indicaes_de_uso.appendChild(me._iniciar1);
		el=me._iniciar_1=document.createElement('div');
		els=me._iniciar_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Iniciar_1";
		el.ggDx=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 212px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Tour Virtual 360";
		el.appendChild(els);
		me._iniciar_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iniciar_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((214-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._indicaes_de_uso.appendChild(me._iniciar_1);
		el=me._indicativo2=document.createElement('div');
		els=me._indicativo2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Indicativo2";
		el.ggDx=5;
		el.ggDy=42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 67px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 237px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="COMO NAVEGAR NO AMBIENTE?<br\/>Clique na imagem e arrastre";
		el.appendChild(els);
		me._indicativo2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._indicativo2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((239-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._indicaes_de_uso.appendChild(me._indicativo2);
		el=me._dedo0=document.createElement('div');
		els=me._dedo0__img=document.createElement('img');
		els.className='ggskin ggskin_dedo0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="dedo";
		el.ggDx=75;
		el.ggDy=-65;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 129px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dedo0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dedo0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._indicaes_de_uso.appendChild(me._dedo0);
		el=me._mouse0=document.createElement('div');
		els=me._mouse0__img=document.createElement('img');
		els.className='ggskin ggskin_mouse0';
		hs=basePath + 'images/mouse0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mouse";
		el.ggDx=-51;
		el.ggDy=-70;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 145px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 152px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mouse0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mouse0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._indicaes_de_uso.appendChild(me._mouse0);
		el=me._indicativo_completa=document.createElement('div');
		els=me._indicativo_completa__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Indicativo completa";
		el.ggDx=-1;
		el.ggDy=127;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 67px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 237px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Instru\xe7\xe3o completa <br\/>Clique no bot\xe3o de pergunta";
		el.appendChild(els);
		me._indicativo_completa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._indicativo_completa.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((239-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._indicaes_de_uso.appendChild(me._indicativo_completa);
		el=me._pergunta_1=document.createElement('div');
		els=me._pergunta_1__img=document.createElement('img');
		els.className='ggskin ggskin_pergunta_1';
		hs=basePath + 'images/pergunta_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Pergunta_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 133px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 136px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pergunta_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pergunta_1.onclick=function (e) {
			me._indicaes_de_uso_amplo.ggVisible = !me._indicaes_de_uso_amplo.ggVisible;
			var flag=me._indicaes_de_uso_amplo.ggVisible;
			me._indicaes_de_uso_amplo.style[domTransition]='none';
			me._indicaes_de_uso_amplo.style.visibility=((flag)&&(Number(me._indicaes_de_uso_amplo.style.opacity)>0||!me._indicaes_de_uso_amplo.style.opacity))?'inherit':'hidden';
		}
		me._pergunta_1.ggUpdatePosition=function (useTransition) {
		}
		me._indicaes_de_uso.appendChild(me._pergunta_1);
		me.divSkin.appendChild(me._indicaes_de_uso);
		el=me._pergunta=document.createElement('div');
		els=me._pergunta__img=document.createElement('img');
		els.className='ggskin ggskin_pergunta';
		hs=basePath + 'images/pergunta.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Pergunta";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 11px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 55px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pergunta.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pergunta.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._pergunta.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._pergunta.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._pergunta.style[domTransition]='right 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._pergunta.ggCurrentLogicStatePosition == 0) {
					me._pergunta.style.right='50px';
					me._pergunta.style.bottom='11px';
				}
				else {
					me._pergunta.style.right='55px';
					me._pergunta.style.bottom='11px';
				}
			}
		}
		me._pergunta.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 1028))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._pergunta.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._pergunta.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._pergunta.style[domTransition]='right 0s, bottom 0s, ' + cssPrefix + 'transform 0s';
				if (me._pergunta.ggCurrentLogicStateScaling == 0) {
					me._pergunta.ggParameter.sx = 0.7;
					me._pergunta.ggParameter.sy = 0.7;
					me._pergunta.style[domTransform]=parameterToTransform(me._pergunta.ggParameter);
				}
				else {
					me._pergunta.ggParameter.sx = 1;
					me._pergunta.ggParameter.sy = 1;
					me._pergunta.style[domTransform]=parameterToTransform(me._pergunta.ggParameter);
				}
			}
		}
		me._pergunta.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				me._indicaes_de_uso_amplo.ggVisible = !me._indicaes_de_uso_amplo.ggVisible;
				var flag=me._indicaes_de_uso_amplo.ggVisible;
				me._indicaes_de_uso_amplo.style[domTransition]='none';
				me._indicaes_de_uso_amplo.style.visibility=((flag)&&(Number(me._indicaes_de_uso_amplo.style.opacity)>0||!me._indicaes_de_uso_amplo.style.opacity))?'inherit':'hidden';
			}
		}
		me._pergunta.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._pergunta);
		el=me._indicaes_de_uso_amplo=document.createElement('div');
		el.ggId="Indica\xe7\xf5es de Uso amplo";
		el.ggDx=6;
		el.ggDy=-17;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 30px;';
		hs+='border-radius : 30px;';
		hs+='background : #ffffff;';
		hs+='border : 7px solid #005500;';
		hs+='cursor : default;';
		hs+='height : 448px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._indicaes_de_uso_amplo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._indicaes_de_uso_amplo.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._indicaes_de_uso_amplo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._indicaes_de_uso_amplo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._indicaes_de_uso_amplo.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, ' + cssPrefix + 'transform 0s';
				if (me._indicaes_de_uso_amplo.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 6;
					this.ggDy = 15;
					me._indicaes_de_uso_amplo.ggUpdatePosition(true);
				}
				else {
					me._indicaes_de_uso_amplo.ggDx=6;
					me._indicaes_de_uso_amplo.ggDy=-17;
					me._indicaes_de_uso_amplo.ggUpdatePosition(true);
				}
			}
		}
		me._indicaes_de_uso_amplo.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 500))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 900))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._indicaes_de_uso_amplo.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._indicaes_de_uso_amplo.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._indicaes_de_uso_amplo.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, ' + cssPrefix + 'transform 0s';
				if (me._indicaes_de_uso_amplo.ggCurrentLogicStateScaling == 0) {
					me._indicaes_de_uso_amplo.ggParameter.sx = 0.75;
					me._indicaes_de_uso_amplo.ggParameter.sy = 0.65;
					me._indicaes_de_uso_amplo.style[domTransform]=parameterToTransform(me._indicaes_de_uso_amplo.ggParameter);
				}
				else if (me._indicaes_de_uso_amplo.ggCurrentLogicStateScaling == 1) {
					me._indicaes_de_uso_amplo.ggParameter.sx = 0.75;
					me._indicaes_de_uso_amplo.ggParameter.sy = 0.75;
					me._indicaes_de_uso_amplo.style[domTransform]=parameterToTransform(me._indicaes_de_uso_amplo.ggParameter);
				}
				else {
					me._indicaes_de_uso_amplo.ggParameter.sx = 1;
					me._indicaes_de_uso_amplo.ggParameter.sy = 1;
					me._indicaes_de_uso_amplo.style[domTransform]=parameterToTransform(me._indicaes_de_uso_amplo.ggParameter);
				}
			}
		}
		me._indicaes_de_uso_amplo.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getViewerSize().height <= 500))
			)
			{
				newLogicStateAngle = 0;
			}
			else if (
				((player.getViewerSize().width <= 900))
			)
			{
				newLogicStateAngle = 1;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._indicaes_de_uso_amplo.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._indicaes_de_uso_amplo.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._indicaes_de_uso_amplo.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, ' + cssPrefix + 'transform 0s';
				if (me._indicaes_de_uso_amplo.ggCurrentLogicStateAngle == 0) {
					me._indicaes_de_uso_amplo.ggParameter.a = 0;
					me._indicaes_de_uso_amplo.style[domTransform]=parameterToTransform(me._indicaes_de_uso_amplo.ggParameter);
				}
				else if (me._indicaes_de_uso_amplo.ggCurrentLogicStateAngle == 1) {
					me._indicaes_de_uso_amplo.ggParameter.a = 90;
					me._indicaes_de_uso_amplo.style[domTransform]=parameterToTransform(me._indicaes_de_uso_amplo.ggParameter);
				}
				else {
					me._indicaes_de_uso_amplo.ggParameter.a = 0;
					me._indicaes_de_uso_amplo.style[domTransform]=parameterToTransform(me._indicaes_de_uso_amplo.ggParameter);
				}
			}
		}
		me._indicaes_de_uso_amplo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._continuar=document.createElement('div');
		el.ggId="Continuar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 28px;';
		hs+='left : 453px;';
		hs+='position : absolute;';
		hs+='top : 429px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._continuar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._continuar.ggUpdatePosition=function (useTransition) {
		}
		el=me._iniciar0=document.createElement('div');
		el.ggId="Iniciar";
		el.ggDx=-3;
		el.ggDy=-5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #005500;';
		hs+='border : 7px solid #005500;';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 145px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iniciar0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iniciar0.onclick=function (e) {
			me._indicaes_de_uso_amplo.style[domTransition]='none';
			me._indicaes_de_uso_amplo.style.visibility='hidden';
			me._indicaes_de_uso_amplo.ggVisible=false;
			player.setVariableValue('indicativo', true);
		}
		me._iniciar0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._continuar0=document.createElement('div');
		els=me._continuar0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="continuar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='bottom : -5px;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 139px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="CONTINUAR";
		el.appendChild(els);
		me._continuar0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._continuar0.ggUpdatePosition=function (useTransition) {
		}
		me._iniciar0.appendChild(me._continuar0);
		me._continuar.appendChild(me._iniciar0);
		me._indicaes_de_uso_amplo.appendChild(me._continuar);
		el=me._touch=document.createElement('div');
		el.ggId="Touch";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 221.5px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 43px;';
		hs+='visibility : inherit;';
		hs+='width : 288px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._touch.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._touch.ggUpdatePosition=function (useTransition) {
		}
		el=me._indicativo_1=document.createElement('div');
		els=me._indicativo_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Indicativo_1";
		el.ggDx=14;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 109px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 248px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='text-align: justify;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Mova o mouse para qualquer dire\xe7\xe3o<br\/>como o bot\xe3o esquerdo pressionado<br\/><br\/>Mova o dedo na tela touch <br\/>para qualquer dire\xe7\xe3o ";
		el.appendChild(els);
		me._indicativo_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._indicativo_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((250-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._touch.appendChild(me._indicativo_1);
		el=me._dedo=document.createElement('div');
		els=me._dedo__img=document.createElement('img');
		els.className='ggskin ggskin_dedo';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="dedo";
		el.ggDx=22;
		el.ggDy=-55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 74px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 79px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dedo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dedo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._touch.appendChild(me._dedo);
		el=me._mouse=document.createElement('div');
		els=me._mouse__img=document.createElement('img');
		els.className='ggskin ggskin_mouse';
		hs=basePath + 'images/mouse.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mouse";
		el.ggDx=-65;
		el.ggDy=-57;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 82px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mouse.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mouse.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._touch.appendChild(me._mouse);
		me._indicaes_de_uso_amplo.appendChild(me._touch);
		el=me._site=document.createElement('div');
		el.ggId="Site";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 46px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 264px;';
		hs+='visibility : inherit;';
		hs+='width : 237px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._site.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._site.ggUpdatePosition=function (useTransition) {
		}
		el=me._site1=document.createElement('div');
		els=me._site1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="site";
		el.ggDx=35;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 46px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='text-align: justify;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Clique o bot\xe3o NEW para <br\/>acessar no Site";
		el.appendChild(els);
		me._site1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._site1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((172-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._site.appendChild(me._site1);
		el=me._site0=document.createElement('div');
		els=me._site0__img=document.createElement('img');
		els.className='ggskin ggskin_site0';
		hs=basePath + 'images/site0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Site";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._site0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._site0.ggUpdatePosition=function (useTransition) {
		}
		me._site.appendChild(me._site0);
		me._indicaes_de_uso_amplo.appendChild(me._site);
		el=me._menu=document.createElement('div');
		el.ggId="Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95.5px;';
		hs+='left : 328px;';
		hs+='position : absolute;';
		hs+='top : 291px;';
		hs+='visibility : inherit;';
		hs+='width : 256.5px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu1=document.createElement('div');
		els=me._menu1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Menu";
		el.ggDx=-1;
		el.ggDy=24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 253px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='text-align: justify;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Clique o bot\xe3o para ativar Menu,<br\/>Som, Tela Cheia e Rota\xe7\xe3o";
		el.appendChild(els);
		me._menu1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((255-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._menu.appendChild(me._menu1);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiM1NWFhN2YiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQs'+
			'MC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0JiN4ZDsmI3hhOyYjeDk7JiN4OTtWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjY2LDAsMS4xOTYtMC'+
			'41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5'+
			'O2MwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTImI3hkOyYjeGE7JiN4OTsmI3g5O2wtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy'+
			'4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEu'+
			'MTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMC'+
			'wwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjNTVhYTdmIiBmaWxsPSIjNTVhYTdmIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7UzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5Nn'+
			'YwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0'+
			'eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDks'+
			'MjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNy'+
			'wwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzU1YWE3ZiI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O1MzLjUsNy41NjUs'+
			'My41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MS'+
			'wwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0Ljgw'+
			'NEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7bDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwy'+
			'My44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC'+
			'44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIHN0cm9rZS1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzU1YWE3ZiIgZmlsbD0iIzU1YWE3ZiI+'+
			'CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O1MzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1Ny'+
			'wyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUz'+
			'NiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC'+
			'0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQs'+
			'MC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuMz'+
			'E1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 53px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 94px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._button_image_fullscreen);
		el=me._unmute_1=document.createElement('div');
		els=me._unmute_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiM1NWFhN2YiPgogIDxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDdjLTEuODMz'+
			'LDEuODMtNC4zNTMsMi45NTktNy4xNDcsMi45NmMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjFjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0N3omI3hkOy'+
			'YjeGE7JiN4OTsmI3g5OyYjeDk7IE0xNi4wMzIsOC45MTdjLTAuNDQzLTAuMTg2LTAuOTU4LTAuMDg3LTEuMzAxLDAuMjQ4bC0zLjEwMywzLjAzN2wtMi4yMzgsMGMtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MtMC4zNTEsMC41MzEtMC4zNTEsMC44NDZ2NS4yOTZjMCwwLjMxNSwwLjEyOCwwLjYyNCwwLjM1MSwwLjg0N3MwLjUzMSwwLjM1LDAuODQ2LDAuMzVoMi4yMzhsMy4xMDMsMy4wMzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjI4LDAuMjIzLDAuNTMxLDAuMzQxLDAuODM4LDAuMzQxYzAuMTU2LDAsMC4zMTMtMC4wMywwLjQ2'+
			'Mi0wLjA5M2MwLjQ0My0wLjE4NiwwLjczMy0wLjYyMiwwLjczMy0xLjEwM1YxMC4wMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTYuNzY1LDkuNTQsMTYuNDc1LDkuMTAzLDE2LjAzMiw4LjkxN3ogTTE0LjM3MiwxOS4yMjlsLTEuNDE3LTEuMzg5Yy0wLjIyNi0wLjIyMS0wLjUyMi0wLjM0MS0wLjgzNy0wLjM0MWgtMS41MzF2LTIuOTA1aDEuNTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE3LTEuMzg4VjE5LjIyOXogTTE5LjU0MywxOC45NzljMC43ODQtMC43NDUsMS4yOC0xLjgwNywxLjI4LTIuOTc4JiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTsmI3g5O2MwLTEuMTQ2LTAuNDc1LTIuMTg5LTEuMjMtMi45MzJjLTAuMzY2LTAuMzYtMC45NTUtMC4zNTUtMS4zMTUsMC4wMTFjLTAuMzYsMC4zNjYtMC4zNTUsMC45NTUsMC4wMTEsMS4zMTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDE4LDAuNDEyLDAuNjc0LDAuOTc1LDAuNjc0LDEuNjA1YzAsMC42NDMtMC4yNjgsMS4yMTQtMC43MDIsMS42M2MtMC4zNzIsMC4zNTQtMC4zODcsMC45NDMtMC4wMzIsMS4zMTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMTgzLDAuMTkyLDAuNDI5LDAuMjg5LDAuNjc1LDAuMjg5QzE5LjEzMywxOS4yMzUsMTkuMzYzLDE5LjE1LDE5LjU0'+
			'MywxOC45NzlMMTkuNTQzLDE4Ljk3OXogTTIwLjc2Niw5LjEzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDE0LTAuMzA2LTAuOTk2LTAuMjE3LTEuMzAxLDAuMTk3Yy0wLjMwNSwwLjQxNC0wLjIxNywwLjk5NiwwLjE5NywxLjMwMWMxLjY0OSwxLjIxNywyLjcxNywzLjE2NCwyLjcxNyw1LjM2OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwyLjIyMy0xLjA4NCw0LjE4My0yLjc1Niw1LjM5N2MtMC40MTcsMC4zMDMtMC41MDksMC44ODQtMC4yMDYsMS4zMDFjMC4xODIsMC4yNSwwLjQ2NiwwLjM4MywwLjc1NCwwLjM4MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xODksMCwwLj'+
			'M4MS0wLjA1OCwwLjU0Ni0wLjE3N2gtMC4wMDFjMi4xMzMtMS41NDcsMy41MjQtNC4wNjYsMy41MjQtNi45MDRDMjQuMjQsMTMuMTgzLDIyLjg3MSwxMC42ODEsMjAuNzY2LDkuMTMyeiIvPgogPC9nPgogPGcgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzU1YWE3ZiIgZmlsbD0iIzU1YWE3ZiI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1Mi'+
			'wyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7cy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAuNTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtj'+
			'MC4yMjgsMC4yMjMsMC41MzEsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQxLTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMT'+
			'kuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS4xNDYtMC40NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3MiwwLjM1NC0wLjM4NywwLjk0My0wLjAzMiwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xODMsMC4x'+
			'OTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTguOTc5eiBNMjAuNzY2LDkuMTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40MTQtMC4zMDYtMC45OTYtMC4yMTctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDIuMjIzLTEuMDg0LDQuMTgzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LD'+
			'AuNDY2LDAuMzgzLDAuNzU0LDAuMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMTc3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._unmute_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzU1YWE3ZiI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1Mi'+
			'wyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7cy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAuNTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtj'+
			'MC4yMjgsMC4yMjMsMC41MzEsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQxLTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMT'+
			'kuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS4xNDYtMC40NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3MiwwLjM1NC0wLjM4NywwLjk0My0wLjAzMiwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xODMsMC4x'+
			'OTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTguOTc5eiBNMjAuNzY2LDkuMTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40MTQtMC4zMDYtMC45OTYtMC4yMTctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDIuMjIzLTEuMDg0LDQuMTgzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LD'+
			'AuNDY2LDAuMzgzLDAuNzU0LDAuMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMTc3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiM1NWFhN2YiIGZpbGw9IiM1NWFhN2YiPgogIDxwYXRoIGQ9Ik0x'+
			'NiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDdjLTEuODMzLDEuODMtNC4zNTMsMi45NTktNy4xNDcsMi45NmMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3Yz'+
			'EuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjFjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0N3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xNi4wMzIsOC45MTdjLTAuNDQzLTAuMTg2LTAuOTU4LTAuMDg3LTEuMzAxLDAuMjQ4bC0zLjEwMywzLjAzN2wtMi4yMzgsMGMtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MtMC4zNTEsMC41'+
			'MzEtMC4zNTEsMC44NDZ2NS4yOTZjMCwwLjMxNSwwLjEyOCwwLjYyNCwwLjM1MSwwLjg0N3MwLjUzMSwwLjM1LDAuODQ2LDAuMzVoMi4yMzhsMy4xMDMsMy4wMzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjI4LDAuMjIzLDAuNTMxLDAuMzQxLDAuODM4LDAuMzQxYzAuMTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4NiwwLjczMy0wLjYyMiwwLjczMy0xLjEwM1YxMC4wMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTYuNzY1LDkuNTQsMTYuNDc1LDkuMTAzLDE2LjAzMiw4LjkxN3ogTTE0LjM3MiwxOS4yMjlsLTEuNDE3LTEuMzg5Yy0wLjIyNi0wLjIyMS0wLjUyMi'+
			'0wLjM0MS0wLjgzNy0wLjM0MWgtMS41MzF2LTIuOTA1aDEuNTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE3LTEuMzg4VjE5LjIyOXogTTE5LjU0MywxOC45NzljMC43ODQtMC43NDUsMS4yOC0xLjgwNywxLjI4LTIuOTc4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTEuMTQ2LTAuNDc1LTIuMTg5LTEuMjMtMi45MzJjLTAuMzY2LTAuMzYtMC45NTUtMC4zNTUtMS4zMTUsMC4wMTFjLTAuMzYsMC4zNjYtMC4zNTUsMC45NTUsMC4wMTEsMS4zMTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDE4LDAuNDEyLDAuNjc0LDAu'+
			'OTc1LDAuNjc0LDEuNjA1YzAsMC42NDMtMC4yNjgsMS4yMTQtMC43MDIsMS42M2MtMC4zNzIsMC4zNTQtMC4zODcsMC45NDMtMC4wMzIsMS4zMTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMTgzLDAuMTkyLDAuNDI5LDAuMjg5LDAuNjc1LDAuMjg5QzE5LjEzMywxOS4yMzUsMTkuMzYzLDE5LjE1LDE5LjU0MywxOC45NzlMMTkuNTQzLDE4Ljk3OXogTTIwLjc2Niw5LjEzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDE0LTAuMzA2LTAuOTk2LTAuMjE3LTEuMzAxLDAuMTk3Yy0wLjMwNSwwLjQxNC0wLjIxNywwLjk5NiwwLjE5NywxLjMwMWMxLjY0OSwxLjIxNywyLjcxNywzLjE2NC'+
			'wyLjcxNyw1LjM2OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwyLjIyMy0xLjA4NCw0LjE4My0yLjc1Niw1LjM5N2MtMC40MTcsMC4zMDMtMC41MDksMC44ODQtMC4yMDYsMS4zMDFjMC4xODIsMC4yNSwwLjQ2NiwwLjM4MywwLjc1NCwwLjM4MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xODksMCwwLjM4MS0wLjA1OCwwLjU0Ni0wLjE3N2gtMC4wMDFjMi4xMzMtMS41NDcsMy41MjQtNC4wNjYsMy41MjQtNi45MDRDMjQuMjQsMTMuMTgzLDIyLjg3MSwxMC42ODEsMjAuNzY2LDkuMTMyeiIvPgogPC9nPgo8L3N2Zz4K';
		me._unmute_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 53px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 136px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute_1.onclick=function (e) {
			player.setVolume("_main",0.8);
			me._unmute_1.style[domTransition]='none';
			me._unmute_1.style.visibility='hidden';
			me._unmute_1.ggVisible=false;
		}
		me._unmute_1.onmouseover=function (e) {
			me._unmute_1__img.style.visibility='hidden';
			me._unmute_1__imgo.style.visibility='inherit';
		}
		me._unmute_1.onmouseout=function (e) {
			me._unmute_1__img.style.visibility='inherit';
			me._unmute_1__imgo.style.visibility='hidden';
		}
		me._unmute_1.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._unmute_1);
		el=me._menu0=document.createElement('div');
		els=me._menu0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		me._menu0__img.setAttribute('src',basePath + 'images/menu0.svg');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 53px;';
		hs+='height : 43px;';
		hs+='position : absolute;';
		hs+='right : 214px;';
		hs+='visibility : inherit;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu0.onclick=function (e) {
			if (
				(
					((player.getVariableValue('indicativo') == true))
				)
			) {
				me._node_clone.ggVisible = !me._node_clone.ggVisible;
				var flag=me._node_clone.ggVisible;
				me._node_clone.style[domTransition]='none';
				me._node_clone.style.visibility=((flag)&&(Number(me._node_clone.style.opacity)>0||!me._node_clone.style.opacity))?'inherit':'hidden';
			}
		}
		me._menu0.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._menu0);
		el=me._start_rotate_image=document.createElement('div');
		els=me._start_rotate_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUz'+
			'LDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMz'+
			'UzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LTAuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMD'+
			'k2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NTctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4'+
			'bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywxOC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNj'+
			'IxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wODgsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2'+
			'LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgogPGcgc3Ryb2tlLW9wYWNpdHk9IjEiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzNhYzY3ZSIgZmlsbD0iIzU1YWE3ZiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMT'+
			'IuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0'+
			'N2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMzLTEuODMyLTQuMzUzLTIuOTYtNy4xNDctMi45NmwwLDBDMTMuMjA1LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1NEw4Ljg1Myw4Ljg1NHoiLz4KICA8L2c+CiAgPHBhdGggZD0iTTE4LjA3LDIwLjAwMWMtMC4xNzQtMC42MzgsMC4yMDMtMS4yOTUsMC44NDEtMS40NjlsMCwwYzEuMTM0LTAuMzA2LDIuMDU1LTAuNzg5LDIuNjMzLTEuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41ODQtMC41MjYsMC43OTctMS4wMDgsMC43OTgtMS40NDRsMCwwYy0wLjAwMi0wLjMxLTAuMTAyLTAuNjE3LTAuMzU5LT'+
			'AuOTdsMCwwYy0wLjI1Ni0wLjM1LTAuNjc4LTAuNzIxLTEuMjQ3LTEuMDQ1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuMTM3LTAuNjU2LTIuODQtMS4xMS00LjczNS0xLjEwNmwwLDBjLTEuNDIyLTAuMDAxLTIuNzM1LDAuMjUtMy43ODMsMC42NTdsMCwwYy0xLjA1MSwwLjQwMi0xLjgxOSwwLjk2OS0yLjIwMSwxLjQ5NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjI1NywwLjM1NC0wLjM1NiwwLjY2MS0wLjM1OCwwLjk3bDAsMGMwLjAwMSwwLjI4OCwwLjA4NywwLjU3MSwwLjMwNiwwLjg5NWwwLDBjMC4yMTcsMC4zMjEsMC41NzUsMC42NjYsMS4wNjUsMC45NzhsMCww'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2gwLjAwMWMwLjU1NywwLjM1NiwwLjcyLDEuMDk2LDAuMzY0LDEuNjUybDAsMGMtMC4zNTUsMC41NTctMS4wOTUsMC43Mi0xLjY1MiwwLjM2NGwwLDBjLTAuNzA2LTAuNDUxLTEuMzEtMC45OTQtMS43NTUtMS42NDZsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40NDQtMC42NDctMC43MjMtMS40MjMtMC43MjItMi4yNDNsMCwwYy0wLjAwMS0wLjg4MywwLjMyMS0xLjcxMiwwLjgyNy0yLjM5MmwwLDBjMC41MDctMC42ODQsMS4xODgtMS4yNDQsMS45ODMtMS43bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41OTItMC45MDcsMy42NT'+
			'ctMS40MTksNS45MjUtMS40MjNsMCwwYzEuNywwLDMuMjg4LDAuMjkzLDQuNjQ2LDAuODE4bDAsMGMxLjM1NSwwLjUyOSwyLjQ5OCwxLjI4MSwzLjI2MSwyLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTA2LDAuNjgsMC44MjksMS41MDgsMC44MjYsMi4zOTJsMCwwYzAuMDAxLDEuMjg4LTAuNjY4LDIuNDEzLTEuNjAyLDMuMjMzbDAsMGMtMC45NDIsMC44MzItMi4xNzgsMS40MzgtMy41OTQsMS44MjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xMDQsMC4wMjgtMC4yMTEsMC4wNDItMC4zMTQsMC4wNDJsMCwwQzE4LjY5NiwyMC44ODQsMTguMjE0LDIwLjUzMywx'+
			'OC4wNywyMC4wMDFMMTguMDcsMjAuMDAxeiIvPgogIDxwYXRoIGQ9Ik0xNi4zOTYsMjMuNjIxbC0zLjM3My0zLjAzOWMtMC4yNTEtMC4yMjYtMC4zOTYtMC41NTEtMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAsMGwzLjM3NC0zLjAzOWMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OTEsMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC0yLjM4NiwyLjE1bDIuMzg2LDIuMTQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQ5LDAuNDQyLDAuNTMsMS4xOTksMC4wOD'+
			'gsMS42OWwwLDBjLTAuMjM2LDAuMjYyLTAuNTYyLDAuMzk1LTAuODksMC4zOTVsMCwwQzE2LjkxMiwyMy45MjgsMTYuNjI1LDIzLjgyNiwxNi4zOTYsMjMuNjIxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wxNi4zOTYsMjMuNjIxeiIvPgogPC9nPgo8L3N2Zz4K';
		me._start_rotate_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._start_rotate_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgeD0iMHB4IiBiYXNlUHJvZmlsZT0iYmFzaWMiIHZpZXdCb3g9IjAgMCAzMiAzMiIgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPS'+
			'JodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIj4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTkt'+
			'MTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuODMxLDEuODMzLTIuOTYsNC4zNTItMi45Niw3LjE0N2wwLDBjMCwyLjc5NCwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ3bDAsMGMxLjgzMiwxLjgzLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLj'+
			'k2LTcuMTQ3bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTct'+
			'MC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLj'+
			'k3OGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjU5Mi0wLjkw'+
			'NywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMj'+
			'AuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDksMC40NDIsMC41MywxLjE5'+
			'OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+CiA8ZyBzdHJva2Utb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMzYWM2N2UiIGZpbGw9IiM1NWFhN2YiPgogIDxnPgogICA8cGF0aCBkPSJNMy41LDE2YzAtNi45MDQsNS41OT'+
			'YtMTIuNSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMS44MzEsMS44MzMtMi45Niw0LjM1Mi0yLjk2LDcuMTQ3bDAsMGMwLDIuNzk0LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDdsMCwwYzEuODMyLDEuODMsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTsmI3g5O2MyLjc5NSwwLDUuMzE0LTEuMTMsNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzMsMi45NTktNC4zNTMsMi45Ni03LjE0N2wwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0xLjgzMy0xLjgzMi00LjM1My0yLjk2LTcuMTQ3LTIuOTZsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTRMOC44NTMsOC44NTR6Ii8+CiAgPC9nPgogIDxwYXRoIGQ9Ik0xOC4wNywyMC4wMDFjLTAuMTc0LTAuNjM4LDAuMjAzLTEuMjk1LDAuODQxLTEuNDY5bDAsMGMxLjEzNC0wLjMwNiwyLjA1NS'+
			'0wLjc4OSwyLjYzMy0xLjMwNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNTg0LTAuNTI2LDAuNzk3LTEuMDA4LDAuNzk4LTEuNDQ0bDAsMGMtMC4wMDItMC4zMS0wLjEwMi0wLjYxNy0wLjM1OS0wLjk3bDAsMGMtMC4yNTYtMC4zNS0wLjY3OC0wLjcyMS0xLjI0Ny0xLjA0NWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAwMS0yLjczNSwwLjI1LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTksMC45NjktMi4yMDEsMS40OTVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2Mt'+
			'MC4yNTcsMC4zNTQtMC4zNTYsMC42NjEtMC4zNTgsMC45N2wwLDBjMC4wMDEsMC4yODgsMC4wODcsMC41NzEsMC4zMDYsMC44OTVsMCwwYzAuMjE3LDAuMzIxLDAuNTc1LDAuNjY2LDEuMDY1LDAuOTc4bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMC4wMDFjMC41NTcsMC4zNTYsMC43MiwxLjA5NiwwLjM2NCwxLjY1MmwwLDBjLTAuMzU1LDAuNTU3LTEuMDk1LDAuNzItMS42NTIsMC4zNjRsMCwwYy0wLjcwNi0wLjQ1MS0xLjMxLTAuOTk0LTEuNzU1LTEuNjQ2bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDQ0LTAuNjQ3LTAuNzIzLTEuNDIzLTAuNzIyLTIuMjQzbDAsMGMtMC'+
			'4wMDEtMC44ODMsMC4zMjEtMS43MTIsMC44MjctMi4zOTJsMCwwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNTkyLTAuOTA3LDMuNjU3LTEuNDE5LDUuOTI1LTEuNDIzbDAsMGMxLjcsMCwzLjI4OCwwLjI5Myw0LjY0NiwwLjgxOGwwLDBjMS4zNTUsMC41MjksMi40OTgsMS4yODEsMy4yNjEsMi4zMDVsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjUwNiwwLjY4LDAuODI5LDEuNTA4LDAuODI2LDIuMzkybDAsMGMwLjAwMSwxLjI4OC0wLjY2OCwyLjQxMy0xLjYwMiwzLjIzM2wwLDBjLTAuOTQyLDAuODMyLTIuMTc4'+
			'LDEuNDM4LTMuNTk0LDEuODI1bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4KICA8cGF0aCBkPSJNMTYuMzk2LDIzLjYyMWwtMy4zNzMtMy4wMzljLTAuMjUxLTAuMjI2LTAuMzk2LTAuNTUxLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wwLDBsMy4zNzQtMy4wMzljMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMC'+
			'wwYzAuNDQyLDAuNDkxLDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtMi4zODYsMi4xNWwyLjM4NiwyLjE0OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LDEuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMMTYuMzk2LDIzLjYyMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._start_rotate_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="start_rotate_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 53px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 174px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
		}
		me._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
		}
		me._start_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._start_rotate_image);
		me._indicaes_de_uso_amplo.appendChild(me._menu);
		el=me._informaoes=document.createElement('div');
		el.ggId="informa\xe7oes";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 330px;';
		hs+='position : absolute;';
		hs+='top : 179px;';
		hs+='visibility : inherit;';
		hs+='width : 132px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informaoes.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informaoes.ggUpdatePosition=function (useTransition) {
		}
		el=me._whatsappindicativo7=document.createElement('div');
		els=me._whatsappindicativo7__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo7';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAM0klEQVR4nO3cXW7kxhWAUXagLSbr8XqSRXYe4kHaska/bNYlv3MAPxgYoAtNqu43RY5u9/t9AwBa/rF6AQDA8QQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAA'+
			'AIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAS9rPrgf/3nj8/8sfuTlwEAz3T76A/8+59/HLCMv1sWAB8w+AG4gsd59mEMHGnaI4D7ZvgDcE2j5tukABj1xQDAE4yZdVMCYMwXAgBPNmLmTQiAEV8EABxo+eybEAAAwMFWB8DyAgKARZbOwNUBAAAsIAAAYJ1lpwArA8DxPwAs4gQAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIA'+
			'ABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABD0snoBC90Wfe590ecCTGZPPlgxAFbdZG99fvbGA/iTPXmR2iOA1Tfaa9PWA3CU2zZvD5y2nqcqBcDUCzt1XQBFmT25EgDTL+j09QHsafqeN319u6gEAADwQAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgqBIA99UL+MD09QHsafqeN319u6gEwLZFLijASUzdk6eua3elANi2eRf2vs1bE8BRpu1/09bzVC+rF7DA4wW+DVgDQJk9eZFiADxKXnSAoezJB6'+
			'o9AgAANgEAAEkCAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAICvuf35H8CpvaxeAJzE66H/6//vRy8EYA8CAN730d/2hQBwSh4BwD48GgBORQDA731noIsA4BQEALztJ4PcaQAwngCA5xECwFgCAJ5PCADjCAA4jggAxhAAcCynAcAIAgDWEALAUuVfBLRq8/ULY3jkFwnB/9iTD1YMgNV/63r8/OyNx9/cNvcDTfbkRWqPAFbfaK9NWw9reSxAycT7fdp6nqoUAFMv7NR1sc7EjREqMj97lQCYfkGnr481hABXNf2+nr6+XVQCAM4ssRkBxxIAcA5OA4BdCQA4FyEA7EIAwDkJAeBHBACcmwgAvkUAwPk5DQC+TADAdQgB4NMEAFyPCAA+JADgmpwGAO8S'+
			'AHBtQgB4kwCABiEA/IUAgBYRAGzbJgCgyGkAIAAgTAhAmAAAhAAECQDgFxEAIQIAeOQ0ACIEAPAWIQAXJwCA9wgBuCgBAHyGCICLEQDAZzkNgAsRAMBXCQG4AAEAfJcQgBMTAMBPiQA4IQEA7MFpAJyMAAD2JATgJAQA8AwiAIYTAMCzOA2AwQQA8GxCAAYSAMBRhAAMIgCAo4kAGEAAACs4DYDFBACwkhCARSoBcF+9gA9MXx88mxBomb7nTV/fLioBsG2RCwonJwI6pu7JU9e1u1IAbNu8C3vf5q0JVnMa0DFt/5u2nqd6Wb2ABR4v8KpNJnWTwTf9+vn083Jt9uRFigHwKHnR4WSEQIdrfKDaIwDgvDwWgB0JAOBMvB8AOxEAwBkJAfghAQCcmRCAbxIAwBWIAPgiAQBchdMA+AIBAFyNEIBPEADAVYkAeIcAAK'+
			'7MaQD8hgAAgCABABQ4BYBXBAAABAkAAAgSAAAQJAAAIEgAAECQAAAK7qsXANMIAODqDH94gwAArszwh98QAMBVGf7wjpfVCwDYmcEPnyAAgKsw+OELPAIArsDwhy9yAgCcmcEP3yQAgDMy+OGHBABwJgY/7MQ7AMBZGP6wo/IJwG3R59rE4Gv8zDTYkw9WDIBVN9lbn5+98eAT/Hw02JMXqT0CWH2jvTZtPTDBfYttxFG3bd4eOG09T1UKgKkXduq6YAWDn9Uye3IlAKZf0Onrg2fzt/6W6Xve9PXtovgOADCHoQ+LCABgBYMfFqs8AgDmMPxhACcAwFEMfhhEAADPZvDDQAIAeBaDHwbzDgDwDIY/DOcEANiTwQ8nIQCAPRj8cDIeAQA/ZfjDCTkBAL7L4IcTEwDAVxn8cAECAPgsgx8uxDsAwGcY/nAxTgCA9xj8'+
			'cFECAHiLwQ8XJwCARwY/RHgHAPjF8IcQJwCAwQ9BAgC6DH4IEwDQY/AD3gGAGMMf2LbNCQBUGPzAXwgAuDaDH3iTAIBrMviBd3kHAK7H8Ac+5AQArsPgBz5NAMD5GfzAl3kEAOdm+APf4gQAzsngB35EAMC5GPzALgQAnIPBD+zKOwAwn+EP7K4SANM30OnrY4375t7gmqbf19PXt4tKAGxb5IJyCQY/BVPv8anr2l0pALZt3oW10fPI/UDNtPt92nqeqvgS4OMFvg1YA2ybe4Iue/IixQB4lLzojOIehP/z83CgegDAKjY6YCkBAMcy+IERai8BwkqGPzCGEwB4PoMfGMcJALxtj6Htn/UBYzkBgP0Z+sB4TgDg974zyA1/4BQEALzvswPdcT9wKgIAPvbeYDf4gVPyDgB8jiEPXIoTAAAIEgAAECQAACBIAABAkA'+
			'AAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIelm9gIVuiz73vuhzASazJx+sGACrbrK3Pj974wH8yZ68SO0RwOob7bVp6wE4ym2btwdOW89TlQJg6oWdui6AosyeXAmA6Rd0+voA9jR9z5u+vl1UAgAAeCAAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAEFQJgPvqBXxg+voA9jR9z5u+vl1UAmDbIhcU4CSm7slT17W7UgBs27wLe9/mrQngKNP2v2nreaqX1QtY4PEC3was'+
			'AaDMnrxIMQAeJS86wFD25APVHgEAAJsAAIAkAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIJWBsBt4WcDwATLZqETAAAIEgAAELQ6ADwGAKBq6QxcHQAAwAITAsApAAA1y2ffhADYtgFfBAAcZMTMmxIA2zbkCwGAJxoz6yYFwLYN+mIAYEe3bdiMe1m9gDc8fkH3ZasAgJ8bNfQf3e53MxYAaqY9AgAADiAAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAgg'+
			'QAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACDov7nvyHtCTGjEAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo7.ggUpdatePosition=function (useTransition) {
		}
		me._informaoes.appendChild(me._whatsappindicativo7);
		el=me._whatsappindicativo6=document.createElement('div');
		els=me._whatsappindicativo6__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo6';
		hs=basePath + 'images/whatsappindicativo6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo6.ggUpdatePosition=function (useTransition) {
		}
		me._informaoes.appendChild(me._whatsappindicativo6);
		el=me._whatsappindicativo5=document.createElement('div');
		els=me._whatsappindicativo5__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo5.ggUpdatePosition=function (useTransition) {
		}
		me._informaoes.appendChild(me._whatsappindicativo5);
		el=me._informaoes0=document.createElement('div');
		els=me._informaoes0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Informa\xe7oes";
		el.ggDx=62;
		el.ggDy=47;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 253px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='text-align: justify;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Clique o bot\xe3o para acessar as <br\/>informa\xe7\xf5es, fotos, videos ";
		el.appendChild(els);
		me._informaoes0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informaoes0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((255-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._informaoes.appendChild(me._informaoes0);
		me._indicaes_de_uso_amplo.appendChild(me._informaoes);
		el=me._redes_socias_botao=document.createElement('div');
		el.ggId="Redes Socias Botao";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 99px;';
		hs+='left : 327px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : inherit;';
		hs+='width : 256.5px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._redes_socias_botao.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._redes_socias_botao.ggUpdatePosition=function (useTransition) {
		}
		el=me._redes_sociais=document.createElement('div');
		els=me._redes_sociais__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Redes Sociais";
		el.ggDx=3;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 46px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 253px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='text-align: justify;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Clique o bot\xe3o para acessar as <br\/>redes sociais  e o video de apresenta\xe7\xe3o";
		el.appendChild(els);
		me._redes_sociais.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._redes_sociais.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((255-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._redes_socias_botao.appendChild(me._redes_sociais);
		el=me._whatsappindicativo4=document.createElement('div');
		els=me._whatsappindicativo4__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo4';
		hs=basePath + 'images/whatsappindicativo4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 61px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo4.ggUpdatePosition=function (useTransition) {
		}
		me._redes_socias_botao.appendChild(me._whatsappindicativo4);
		el=me._whatsappindicativo3=document.createElement('div');
		els=me._whatsappindicativo3__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 59px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo3.ggUpdatePosition=function (useTransition) {
		}
		me._redes_socias_botao.appendChild(me._whatsappindicativo3);
		el=me._whatsappindicativo2=document.createElement('div');
		els=me._whatsappindicativo2__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAUvklEQVR4nO3dP49cVZ7H4e/MkG20SZNBgOUEmWhAjlbC0qqkVQHpEO1GJIBcIp9oclSWIfEbYDYEKqkEUsRktNgA0dKYzC1NwDvYoE7b5Xbb7r5dVeeee55HGpmZAP2gu+dT58+9/YfZYh4AuKo/1h4AgDYJCACDCAgAgwgIAIMICACDCAgAgwgIAIMICACDCAgAgwgIAIMICACDCAgAgwgIAIMICACDCAgAgwgIAIMICACDCAgAg7xSewCYgvVy9VqSf9Se44C+mi3mi9pDUJeAwO4c1R7ggO7UHoD6bGEBQ7xaewDqExBgiKOybUfHBAQY6o3aA1CXgABDvVl7AOoSEGCoG7UHoC4BAYayhdU5AQGGer32ANQlIMBQt2oPQF0CAgy2Xq7erT0D9Q'+
			'gIcB1uYnVMQIDrcBOrYwICXId3YnVMQIDruOWVJv0SEOC6PA/SKQEBrstBeqcEBLiuWe0BqENAgOt6p/YA1CEgwHUdeaCwTwIC7MIHtQfg8AQE2AXPg3RIQIBd8DxIhwQE2JX3aw/AYQkIsCuu83ZGQIBdcZ23MwIC7IrrvJ0REGCXPqs9AIcjIMAuzWsPwOEICLBT6+Xqk9ozcBgCAuya21idEBBg1+YeKuyDgAD74DC9AwIC7MOHtQdg/wQE2AfPhHRAQIB9uVd7APZLQIB98YbeiRMQYJ++rD0A+yMgwD650jthAgLsmyu9EyUgwL7dtQqZJgEBDsFZyAQJCHAIzkImSECAQ7EKmRgBAQ5l7un0aREQ4JA8nT4hAgIc0i2/cGo6BAQ4tPsO1KdBQIAaHKhPgIAANcxtZbVPQIBa/morq20CAtRyFFtZTRMQoCZb'+
			'WQ0TEKC2+x4wbJOAAGPw99oDcHUCAozB0Xq5+qn2EFyNgABjcWu9XC1rD8HlCQgwJncdqrdDQICxuS8ibRAQYIzczGqAgABj9Z2IjJuAAGMmIiMmIMDYichICQjQAhEZIQEBWvGd21njIiBAS+572HA8BARozd31cvVt7SEQEKBN8/Vy9ZNfSFWXgACtupXkoXORegQEaJ1zkUoEBJiCu+vl6pGrvoclIMBUHGVz1ddq5EAEBJias9WIs5E9ExBgio6yORv51rbW/ggIMGXzlG0tV353T0CAHtzN5sqvkOyQgAA9EZIdEhCgR2chcUZyDa/UHgCgonk2r0U5TvIgyTezxfy3yjM1wwoEYPNalPuxKrkSKxCAp52tSk6TfJXk6yQnVibPEhCAix1lc1ZyN8npern6Mck6yc+zxfz7qpONhIAAvNxRysokScqZycOUoK'+
			'TTFYqAAFzdrfKfefnvZyuUkyS/ppOoCAjA9Z2tUJ6ytVI5C0tS4pIkrQdGQAD252ylcpHT9XKVJI+SPJwt5u8dbKodERCAOo62/nxeZEbNcyAA9Z3WHmAIAQFgEAEBYBABAWAQAQGo71HtAYYQEID6Xq09wBACAsAgAgLAIAICwCACAsAgAgJQn1tYAAziFhYA/RAQAAYREAAGERAABhEQgPrcwgJgELewAOiHgAAwiIAAMIiAADCIgADU5xYWAIO4hQVAPwQEgEEEBIBBBASAQQQEoD63sAAYxC0sAPohIMBQx7UHoC4BAYZ6kOROhKRbAgIMNlvMv58t5m8l+TTJae15OCwBAa5ttph/keTtJPdqz9Iot7CAfs0W899mi/kim22tVe15GuMWFkDZ1novm20t5yMTJiDAXswW8y+cj0ybgAB75XxkugQE2Lut85HX'+
			'IySTISDAwQjJc7mFBXAZbmw9o8lbWK/UHgDOrJer18pfvrH1P7959hdlL50JmS3m3yf5fr1cvZvksyTzyiNxBQLC3pUwnEXhzSQ3yl+/kc1WRrL5BHb0kr+VgEzUuZB8kORu5ZG4BAFhJ7YisR2IO7lcGC7D8wQd2ArJ59msSD7Mbr5/2AMB4cq2YvFBnqwidhUKyGwx/y3JooTk/SR/je+v0REQXujcymKWTSxuVR2KbpSQfJHki/Vy9Uk234NTPCdp8haWgPCUC1YXU/xhpUHlEsUXW+ckU9recguLNpUfyLMVxjuZzg8lE3TunOT9JB/FqrgKAenQuVXGlD7F0ZFz21tnq5I7EZODEZBOlGi8H6sMJuhsVZI8XlH7cHQAAjJxWw9oiQZd2IrJwspkvwRkgnwCg40LViZjPetzC4t6zm1RuTkF52zF5IsLbhvWDo'+
			'pbWBye1QZcXTmA/y1ldZI8tUK5kd2+RWGyBKRRXj4Hu7W93XWm/JwlT8Kyrzcv2MJi/8o39L04EIS9K1FJzoUleeYlocnWm6OLG1t//esFf/ufy58ngwesTEAaUV7j4IEpGImtbbAzz0Rm6gRk5Kw4gLESkJFyxgGMnYCMTNlX/TLCAYyc34k+IuvlapnkYcQDaIAVyAiUA3K/MAdoioBUZLsKaJktrErKqsN2FdAsK5ADs+oApsIK5ICsOoApsQI5kPVy9W2EA5gQAdmz8kDg3+OGFTAxtrD2qGxZfRfxACZIQPakPBR4v/YcAPtiC2vHyi2rVbz8EJg4K5AdKucd/4h4AB0QkB1x3gH0RkB2oMTDeQfQFQG5JoflQK8E5BpKPO7WngOgBgEZSDyA3rnGO4DXkgBYgVxZWXmIB9A9AbkC21YATwjIJYkHwNME5BLK'+
			'cx7iAbBFQF7CQ4IAFxOQFyjvthIPgAsIyHOUt+p+V3sOgLESkOdb1R4AYMwE5ALlQUGvZAd4AQE5x4OCAJcjIFvKobnrugCXICCFQ3OAqxGQJ76sPQBASwQkjx8WdO4BcAXdB6RsXXlYEOCKug9IPO8BMEjXASlXdj3vATBAtwEpW1eu7AIM1G1AYusK4Fq6DEi5dWXrCuAaugxI3LoCuLbuAlIOzgG4pq4C4uAcYHe6Cki8rqRlzqxgZF6pPcChlDftel1Je46TPEyyrj0I8LRuApLkXu0BeKntWPyc5GS2mP9WdyTgeboISFl92AIZl9MkPyY5SfJ1xAKa00VAYvUxBmfBWCf5ebaYf195HuCaJh8Qq49qBAMmbvIBidXHIR1n81sdvxYMmL5JB8Tq4yBW2awyvnGGAX2ZdECSfFZ7gIkSDWC6ASlPnXvuY3eOkz'+
			'yIaADFZAMSq49duRdnGsAFphwQ77wazmoDeKlJBqT8vg+u7jjJg9li/kXtQYDxm2RAknxUe4DGCAdwZZMLiKu7V3Ka5G/CAQwxuYAk+aD2AI24N1vMF7WHANo1xYB8WHuAkVsl+djhOHBdkwpI2b46qj3HSNmuAnZqUgGJZz+ex6oD2LmpBeSd2gOMkLMOYC8mExDbVxe64wlyYF8mE5C4fbXtNMnbtqyAffpj7QF2yO2rjeOIB3AAk1iB2L567Hi2mL9VewigD1NZgdi+Eg/gwKYSkDdqD1CZeAAH13xA/OKonKbvf36gkuYDEquPvzgwB2qYQkB6Pv/41HMe41Aiflp7DjikKQTkTu0BKll5r9XoPKo9ABzSFALS4+/+OJ0t5u/VHgLoW9MBKc9/9OgvtQcAaDogSd6sPUAFK+ceo/Ww9gBwSK0HZFZ7gAo+rj0A'+
			'QNJ+QF6vPcCBrVzZBcai9YD0doBu9TFuJ7UHgENqNiAdHqBbfQCj0mxA0t8B+ue1BwDY1nJAbtQe4ICO3bwCxqblgPT0DqwHtQcAOK/lgPR0A+ub2gMAnNdyQF6tPcCBHDs8B8aoyYCU3wHSy6+wtX0FjFKTAUlf5x8/1x4A4CKtBqQXp25fMWI+3HSu1YD08gzIj7UHAHieVgPSC6/GaEtPW6vQbEB6eYjw19oDADxPqwHphT1mxswKuXOtBqSXrQI/oG3p6eFWaDYgPTj1ACEj5vuTZgPSwye9R7UH4Mp6eTsCJGk3IDAqnb0dIfEBhwjImD2sPQC8gO9PBAR2pJeLHfBYqwGx18zY9PJ2hDNuCNJsQIC6POSKgMCO9PJ2BHis1YC4AcLY9HYG4i0JNBsQGJsenk3a5gwEARmx3v4PqVnlGZBbtec4IE+hk0RAYB'+
			'd6276yhUwSARkzV5Xb0dsVXg8RkqTdgPTwDXxUtkYYv95uYDn/IEm7AelFb1sjrert6+QZEJIICOzCO7UHODBXeEnSbkB6WUL3trfenPVy9W76egtv0s/PHy/RakB6WUL3trfeot4i7wovj7UakF7cqT0ALzWrPcCB/Vh7AMaj1YD0sgfb08Nprert/MP2FY+1GpBulD12RqjT849eto+5hFYD0tOnoN722FvS49fmm9oDMB5NBqQc4p3WnuNAettjb8lHtQc4MAfoPKXJgBS9vI9nXnsAntXhCxQTB+ic03JAenidSZJkvVx9UnsGnvF+7QEq6GnrmEtoOSA9fTPbxhqfHr8mX9cegHFpOSA93QaxjTUiZfuqx69JTx/auISWA9LLsyBJbGONTI/bV8cO0Dmv5YD09mmotxs/Y9bj1+K72gMwPs0GpLOrvElyy0OF'+
			'9ZWvQW+3rxLnH1yg2YAUvV0r/Kz2AHT7Nehtxc8ltB6Q3r6p535LYT0dH547/+BCrQekp5tYZ76sPUDHel19OP/gQq0HpMf38sydhRxeWX3crT1HJc4/uFDTAenwIP3MvdoDdKjX1cfpbDH/vvYQjFPTASl6O0hPNjeyPBdyWL2uPr6qPQDjNYWArGsPUMn92gP0Yr1cLWvPUJHtK55rCgHp6on0bevl6tvaM0xd52cfsX3FizQfkPIN3uM5SLI5ULeVtV+r2gNU1PM/O5fQfECKHs9Bztz3bMh+lDj3+NT5mV63h7mkqQSk9290nxT3o+tzptli/kXtGRi3qQSkx+dBtt1yHrJb/n36UMLLTSIg5XmQ49pzVDbv/LbQzpStqx5fWbLt89oDMH6TCEjhdQvJXYfq11POk7reuoqHB7mkKQXEffWN+yJyLf+oPcAIeH'+
			'iQS5lMQDq/znueiAywXq5+SnJUe44RsH3FpUwmIIVPTk+IyBWUQ/Oer+ye8ep2Lm1qAbGN9TQRuYRy+aD3Q/MzD2oPQDsmFRDbWBe673bW85V/N92+quScU89+cBWTCkhhG+tZdz3X8CzxeIafHa5kigFxAHix+Xq5euSXUW2Ix4X87HAlkwuIhwpf6CjJd72fi5TVmHg8beXwnKt6pfYAe/IgHgZ7kfvr5WqW5OOe/k+jrL7uxW2ri1h9cGWTW4Ekj18C5zD9xeZJHvayGin/nN9FPC5y7MlzhphkQAoHgpdzf71c/TTVs5H1cvVa2bKyIn0+23kMMuWAWJJf3q1szka+nVJIyqrjYTzj8SJWHwz2pxu3b9aeYS9u3L75+8kPv/w5yTT/AffjZpL/Pvnhl38/+eGX/7tx++bvtQcaYr1cvXvywy/fJPmf2rM04MMb'+
			't2/+s/YQtOkPs8V0P5yVT9Pe0jvcKsnnrXxCLV/vz2LFcVnHs8X8rdpD0K5JByR5/II8B6fXc5zNzbZvxnhrq2xVfRRf56u608qHA8aph4BYhezWKptfIVw1JuXr+kGSD+MNukNYfXBtkw9IYhWyR6skJ0m+3vcn2fKLnt7IJhp34ut5XVYfXNtUHyQ8726sQvbh7NPH3fVydZrkUTb/nn9N8nOSkyGrlK1YvJnkRgRj11biwS50sQJJrEIqOgtLsrlSm2xWLckmEmdeL3++GltS+/b6GM+yaE8vK5DEKqSWozwJgoDXd0882JUpP0j4lLJk95JFujZbzBe1Z2A6uglI4ZUN9OzT2gMwLV0FpKxCVrXngAqO/bZBdq2rgBQf1x4AKrD6Zue6C0g5QLxXew44oHuu7bIP3QUkeXyQ6PeF0INTB+fsS5cBKf5SewA4AN'+
			'/n7E23AXGgTgdsXbFX3QYkSWaL+Xu1Z4A9sXXF3nUdkMLdeKbI1hV7131Ayt14W1lMia0rDqL7gCS2spiUY1tXHIqAPHGn9gCwA328XptREJCiLPk9YEjL7njTLockIFvK0t8be2mRcw8OTkCeZQuA1qyce1CDgJxTtgBc7aUVpy6BUIuAXKBc7XUeQgverj0A/RKQ53AeQgMcmlOVgLzYPN7ayzh96tCc2gTkBcqnO6+EYGw+9dsFGQMBeYnyKc+hOmNxTzwYCwG5hPIDKyLU5rouoyIgl+RmFpWtXNdlbATkCsqnP2/u5dDEg1ESkCsqP8giwqGIB6MlIAOUH2jPiLBv4sGoCchAs8X8rYgI+yMejJ6AXIOIsCf3xIMWCMg1lYg4E2FX7rmqSysEZAccrLMjn4oHLRGQHRERrsnrSWiOgOxQiYiHDbmK02zeqise'+
			'NEdAdqxsQXjtCZdxnORtb9WlVX+6cftm7Rkm58btmz+e/PDLv5L8V+1ZGK3VbDH/jxu3b/5eexAYygpkT8qWxJ34fSI861PXdJmCP8wW89ozTN56ufo2m19ORd+Ok9y1ZcVU2MI6gBu3b3518sMv/57kdu1ZqOZsy+qftQeBXbGFdSDlcN2WVp9sWTFJAnJAZevi7XhepBerJK+7ostUOQOpZL1cfZLkfu052BsPBjJ5ViCVbN3S8jLGabHqoBtWICNgNTIJp0n+Jhz0REBGYr1cvZbky7ju2yJv0KVLrvGOxI3bN38v133/leTPSf6t9ky81CrJf84W8/+tPQjUYAUyUuvlapnkbu05uNAqyeceCKR3AjJiZVvrswjJWHiSHLYISAPWy9W72YTEF6uO4yQPHJDD0wSkIUJycLaq4AUEpEElJB/E1ta+CAdcgoA0bO'+
			'uM5MMkR5XHad1pkq+yCcdvtYeBFgjIRJSHEWexvXVVqyRr5xtwdQIyMVvbW1Ylz3ec5EGSb6w2YDgBmTAxecpxku+SfO1sA3ZDQDqxFZM7SW5VHudQVknWsdKAvRCQDpXD9/ezOTN5J9NZnTxeZSQ5EQ3YLwHhbHXyZpIbaWeFcpzkYZKTCAZUISA8o6xQ3siTqLyR5PUkr+bwq5XTJI+yWVn8muTniAWMgoBwaVthSZ7EJVv/2+vlz1cv8bd7VP58WP48KX+eRSIRChg1AQFgEL/SFoBBBASAQQQEgEEEBIBBBASAQQQEgEEEBIBBBASAQQQEgEEEBIBBBASAQQQEgEEEBIBBBASAQQQEgEEEBIBBBASAQQQEgEH+H+ZIe4N26BHHAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 59px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 87px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo2.ggUpdatePosition=function (useTransition) {
		}
		me._redes_socias_botao.appendChild(me._whatsappindicativo2);
		el=me._whatsappindicativo1=document.createElement('div');
		els=me._whatsappindicativo1__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo1';
		hs=basePath + 'images/whatsappindicativo1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 59px;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 126px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo1.ggUpdatePosition=function (useTransition) {
		}
		me._redes_socias_botao.appendChild(me._whatsappindicativo1);
		el=me._whatsappindicativo0=document.createElement('div');
		els=me._whatsappindicativo0__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo0';
		hs=basePath + 'images/whatsappindicativo0.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 54px;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo0.ggUpdatePosition=function (useTransition) {
		}
		me._redes_socias_botao.appendChild(me._whatsappindicativo0);
		el=me._whatsappindicativo=document.createElement('div');
		els=me._whatsappindicativo__img=document.createElement('img');
		els.className='ggskin ggskin_whatsappindicativo';
		hs=basePath + 'images/whatsappindicativo.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="WhatsappIndicativo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 59px;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 217px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._whatsappindicativo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._whatsappindicativo.ggUpdatePosition=function (useTransition) {
		}
		me._redes_socias_botao.appendChild(me._whatsappindicativo);
		me._indicaes_de_uso_amplo.appendChild(me._redes_socias_botao);
		el=me._botao_new=document.createElement('div');
		el.ggId="Botao NEW";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 335px;';
		hs+='visibility : inherit;';
		hs+='width : 232px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._botao_new.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._botao_new.ggUpdatePosition=function (useTransition) {
		}
		el=me._avano=document.createElement('div');
		els=me._avano__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Avan\xe7o";
		el.ggDx=37;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 46px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='text-align: justify;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Clique o bot\xe3o NEW para <br\/>avan\xe7ar do ambiente";
		el.appendChild(els);
		me._avano.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._avano.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((172-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._botao_new.appendChild(me._avano);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-90;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._botao_new.appendChild(me._rectangle_2);
		el=me._ht_image_info1=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-90;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info2=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #55aa7f;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info1.appendChild(me._ht_image_info2);
		me._botao_new.appendChild(me._ht_image_info1);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-90;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._botao_new.appendChild(me._image_1);
		me._indicaes_de_uso_amplo.appendChild(me._botao_new);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #005500;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 5px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : 271px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me._indicaes_de_uso_amplo.appendChild(me._rectangle_3);
		el=me._iniciar=document.createElement('div');
		els=me._iniciar__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Iniciar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 212px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(0,85,0,1);';
		hs+='font-size: 20px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Como Navegar l 360";
		el.appendChild(els);
		me._iniciar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iniciar.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((214-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._indicaes_de_uso_amplo.appendChild(me._iniciar);
		me.divSkin.appendChild(me._indicaes_de_uso_amplo);
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._node_clone.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._scrollarea_1.ggUpdatePosition();
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_image_info13 && hotspotTemplates['ht_node'][i]._ht_image_info13.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_image_info13.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_image_info23 && hotspotTemplates['ht_node'][i]._ht_image_info23.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_image_info23.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._image_12 && hotspotTemplates['ht_node'][i]._image_12.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._image_12.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_image_info13 && hotspotTemplates['ht_node'][i]._ht_image_info13.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._ht_image_info13.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._ht_image_info13 && hotspotTemplates['ht_node'][i]._ht_image_info13.logicBlock_backgroundcolor) {
					hotspotTemplates['ht_node'][i]._ht_image_info13.logicBlock_backgroundcolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_var_hs = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_image_info13 && hotspotTemplates['ht_node'][i]._ht_image_info13.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_image_info13.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._ht_image_info23 && hotspotTemplates['ht_node'][i]._ht_image_info23.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._ht_image_info23.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node'][i]._image_12 && hotspotTemplates['ht_node'][i]._image_12.logicBlock_scaling) {
					hotspotTemplates['ht_node'][i]._image_12.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_changenode = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_image_info12 && hotspotTemplates['ht_video_file'][i]._ht_image_info12.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._ht_image_info12.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_video_file'][i]._image_11 && hotspotTemplates['ht_video_file'][i]._image_11.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._image_11.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage && hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_image_info22 && hotspotTemplates['ht_video_file'][i]._ht_image_info22.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._ht_image_info22.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_configloaded = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mouseover = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_image_info12 && hotspotTemplates['ht_video_file'][i]._ht_image_info12.logicBlock_alpha) {
					hotspotTemplates['ht_video_file'][i]._ht_image_info12.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_image_info12 && hotspotTemplates['ht_video_file'][i]._ht_image_info12.logicBlock_backgroundcolor) {
					hotspotTemplates['ht_video_file'][i]._ht_image_info12.logicBlock_backgroundcolor();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_hastouch = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage && hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_varchanged_var_hs = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_image_info12 && hotspotTemplates['ht_video_file'][i]._ht_image_info12.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._ht_image_info12.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_video_file'][i]._image_11 && hotspotTemplates['ht_video_file'][i]._image_11.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._image_11.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_image_info22 && hotspotTemplates['ht_video_file'][i]._ht_image_info22.logicBlock_scaling) {
					hotspotTemplates['ht_video_file'][i]._ht_image_info22.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_info11 && hotspotTemplates['ht_image'][i]._ht_image_info11.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._ht_image_info11.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_image'][i]._image_10 && hotspotTemplates['ht_image'][i]._image_10.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._image_10.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_info21 && hotspotTemplates['ht_image'][i]._ht_image_info21.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._ht_image_info21.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_info11 && hotspotTemplates['ht_image'][i]._ht_image_info11.logicBlock_alpha) {
					hotspotTemplates['ht_image'][i]._ht_image_info11.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_info11 && hotspotTemplates['ht_image'][i]._ht_image_info11.logicBlock_backgroundcolor) {
					hotspotTemplates['ht_image'][i]._ht_image_info11.logicBlock_backgroundcolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_Imagem1 = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_varchanged_var_hs = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_info11 && hotspotTemplates['ht_image'][i]._ht_image_info11.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._ht_image_info11.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_image'][i]._image_10 && hotspotTemplates['ht_image'][i]._image_10.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._image_10.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_info21 && hotspotTemplates['ht_image'][i]._ht_image_info21.logicBlock_scaling) {
					hotspotTemplates['ht_image'][i]._ht_image_info21.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_image_info10 && hotspotTemplates['ht_info'][i]._ht_image_info10.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._ht_image_info10.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_info'][i]._image_info && hotspotTemplates['ht_info'][i]._image_info.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._image_info.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_info'][i]._ht_image_info20 && hotspotTemplates['ht_info'][i]._ht_image_info20.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._ht_image_info20.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_image_info10 && hotspotTemplates['ht_info'][i]._ht_image_info10.logicBlock_alpha) {
					hotspotTemplates['ht_info'][i]._ht_image_info10.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_info'][i]._ht_image_info10 && hotspotTemplates['ht_info'][i]._ht_image_info10.logicBlock_backgroundcolor) {
					hotspotTemplates['ht_info'][i]._ht_image_info10.logicBlock_backgroundcolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_hastouch = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage && hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_Imagem1 = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_varchanged_var_hs = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_image_info10 && hotspotTemplates['ht_info'][i]._ht_image_info10.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._ht_image_info10.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_info'][i]._image_info && hotspotTemplates['ht_info'][i]._image_info.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._image_info.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_info'][i]._ht_image_info20 && hotspotTemplates['ht_info'][i]._ht_image_info20.logicBlock_scaling) {
					hotspotTemplates['ht_info'][i]._ht_image_info20.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspotpatch_changenode = function(){
		if(hotspotTemplates['HotspotPatch']) {
			var i;
			for(i = 0; i < hotspotTemplates['HotspotPatch'].length; i++) {
				if (hotspotTemplates['HotspotPatch'][i]._patch_customimage && hotspotTemplates['HotspotPatch'][i]._patch_customimage.logicBlock_visible) {
					hotspotTemplates['HotspotPatch'][i]._patch_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspotpatch_activehotspotchanged = function(){
		if(hotspotTemplates['HotspotPatch']) {
			var i;
			for(i = 0; i < hotspotTemplates['HotspotPatch'].length; i++) {
				if (hotspotTemplates['HotspotPatch'][i]._patch_customimage && hotspotTemplates['HotspotPatch'][i]._patch_customimage.logicBlock_visible) {
					hotspotTemplates['HotspotPatch'][i]._patch_customimage.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('var_hs', player.getVariableValue('var_hs') + Number("1"));
				player.setVariableValue('var_hs', player.getVariableValue('var_hs') % Number("4"));
			} else {
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_image_info13.logicBlock_alpha();
			me._ht_image_info13.logicBlock_backgroundcolor();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._ht_image_info13.logicBlock_alpha();
			me._ht_image_info13.logicBlock_backgroundcolor();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_image_info13.logicBlock_alpha();
			me._ht_image_info13.logicBlock_backgroundcolor();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		el=me._ht_image_info13=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.1;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info13.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info13.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info13.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info13.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info13.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info13.ggParameter.sx = 0.8;
					me._ht_image_info13.ggParameter.sy = 0.8;
					me._ht_image_info13.style[domTransform]=parameterToTransform(me._ht_image_info13.ggParameter);
				}
				else {
					me._ht_image_info13.ggParameter.sx = 1;
					me._ht_image_info13.ggParameter.sy = 1;
					me._ht_image_info13.style[domTransform]=parameterToTransform(me._ht_image_info13.ggParameter);
				}
			}
		}
		me._ht_image_info13.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_info13.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_info13.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_info13.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info13.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_info13.style.visibility=me._ht_image_info13.ggVisible?'inherit':'hidden';
					me._ht_image_info13.style.opacity=1;
				}
				else {
					me._ht_image_info13.style.visibility=me._ht_image_info13.ggVisible?'inherit':'hidden';
					me._ht_image_info13.style.opacity=0.1;
				}
			}
		}
		me._ht_image_info13.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_info13.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_info13.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_info13.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info13.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_info13.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_image_info13.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_image_info13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info23=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #55aa7f;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info23.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info23.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info23.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info23.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_image_info23.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info23.ggParameter.sx = 2.5;
					me._ht_image_info23.ggParameter.sy = 2.5;
					me._ht_image_info23.style[domTransform]=parameterToTransform(me._ht_image_info23.ggParameter);
				}
				else {
					me._ht_image_info23.ggParameter.sx = 1;
					me._ht_image_info23.ggParameter.sy = 1;
					me._ht_image_info23.style[domTransform]=parameterToTransform(me._ht_image_info23.ggParameter);
				}
			}
		}
		me._ht_image_info23.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info13.appendChild(me._ht_image_info23);
		me._ht_node.appendChild(me._ht_image_info13);
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs=basePath + 'images/image_12.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_12.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._image_12.ggCurrentLogicStateScaling == 0) {
					me._image_12.ggParameter.sx = 1;
					me._image_12.ggParameter.sy = 1;
					me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
				}
				else {
					me._image_12.ggParameter.sx = 1;
					me._image_12.ggParameter.sy = 1;
					me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
				}
			}
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._rectangle_20.appendChild(me._image_12);
		me._ht_node.appendChild(me._rectangle_20);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
			skin._popup_video_file.ggInitMedia(player.getBasePath()+""+me.hotspot.url);
			player.setVariableValue('vis_video_file', true);
			if (skin._popup_video_file.ggApiPlayer) {
				if (skin._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						skin._popup_video_file.ggApiPlayer.playVideo();
					};
					if (skin._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (skin._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (skin._popup_video_file.ggApiPlayerType == 'vimeo') {
					skin._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
				player.stopSound("Audio1");
				player.stopSound("Audio2");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_image_info12.logicBlock_alpha();
			me._ht_image_info12.logicBlock_backgroundcolor();
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._ht_image_info12.logicBlock_alpha();
			me._ht_image_info12.logicBlock_backgroundcolor();
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ontouchend=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._ht_image_info12.logicBlock_alpha();
			me._ht_image_info12.logicBlock_backgroundcolor();
			me._tt_ht_video_file.logicBlock_visible();
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_info12=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info12.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info12.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info12.ggParameter.sx = 0.8;
					me._ht_image_info12.ggParameter.sy = 0.8;
					me._ht_image_info12.style[domTransform]=parameterToTransform(me._ht_image_info12.ggParameter);
				}
				else {
					me._ht_image_info12.ggParameter.sx = 1;
					me._ht_image_info12.ggParameter.sy = 1;
					me._ht_image_info12.style[domTransform]=parameterToTransform(me._ht_image_info12.ggParameter);
				}
			}
		}
		me._ht_image_info12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_video_file'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_info12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_info12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_info12.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info12.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_info12.style.visibility=me._ht_image_info12.ggVisible?'inherit':'hidden';
					me._ht_image_info12.style.opacity=1;
				}
				else {
					me._ht_image_info12.style.visibility=me._ht_image_info12.ggVisible?'inherit':'hidden';
					me._ht_image_info12.style.opacity=0.3;
				}
			}
		}
		me._ht_image_info12.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_file'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_info12.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_info12.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_info12.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info12.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_info12.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_image_info12.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_image_info12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info22=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #55aa7f;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info22.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info22.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_image_info22.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info22.ggParameter.sx = 2.5;
					me._ht_image_info22.ggParameter.sy = 2.5;
					me._ht_image_info22.style[domTransform]=parameterToTransform(me._ht_image_info22.ggParameter);
				}
				else {
					me._ht_image_info22.ggParameter.sx = 1;
					me._ht_image_info22.ggParameter.sy = 1;
					me._ht_image_info22.style[domTransform]=parameterToTransform(me._ht_image_info22.ggParameter);
				}
			}
		}
		me._ht_image_info22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info12.appendChild(me._ht_image_info22);
		me._ht_video_file.appendChild(me._ht_image_info12);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAM0klEQVR4nO3cXW7kxhWAUXagLSbr8XqSRXYe4kHaska/bNYlv3MAPxgYoAtNqu43RY5u9/t9AwBa/rF6AQDA8QQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAA'+
			'AIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAS9rPrgf/3nj8/8sfuTlwEAz3T76A/8+59/HLCMv1sWAB8w+AG4gsd59mEMHGnaI4D7ZvgDcE2j5tukABj1xQDAE4yZdVMCYMwXAgBPNmLmTQiAEV8EABxo+eybEAAAwMFWB8DyAgKARZbOwNUBAAAsIAAAYJ1lpwArA8DxPwAs4gQAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIA'+
			'ABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABD0snoBC90Wfe590ecCTGZPPlgxAFbdZG99fvbGA/iTPXmR2iOA1Tfaa9PWA3CU2zZvD5y2nqcqBcDUCzt1XQBFmT25EgDTL+j09QHsafqeN319u6gEAADwQAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgqBIA99UL+MD09QHsafqeN319u6gEwLZFLijASUzdk6eua3elANi2eRf2vs1bE8BRpu1/09bzVC+rF7DA4wW+DVgDQJk9eZFiADxKXnSAoezJB6'+
			'o9AgAANgEAAEkCAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAACAIAEAAEECAACCBAAABAkAAAgSAAAQJAAAIEgAAECQAICvuf35H8CpvaxeAJzE66H/6//vRy8EYA8CAN730d/2hQBwSh4BwD48GgBORQDA731noIsA4BQEALztJ4PcaQAwngCA5xECwFgCAJ5PCADjCAA4jggAxhAAcCynAcAIAgDWEALAUuVfBLRq8/ULY3jkFwnB/9iTD1YMgNV/63r8/OyNx9/cNvcDTfbkRWqPAFbfaK9NWw9reSxAycT7fdp6nqoUAFMv7NR1sc7EjREqMj97lQCYfkGnr481hABXNf2+nr6+XVQCAM4ssRkBxxIAcA5OA4BdCQA4FyEA7EIAwDkJAeBHBACcmwgAvkUAwPk5DQC+TADAdQgB4NMEAFyPCAA+JADgmpwGAO8S'+
			'AHBtQgB4kwCABiEA/IUAgBYRAGzbJgCgyGkAIAAgTAhAmAAAhAAECQDgFxEAIQIAeOQ0ACIEAPAWIQAXJwCA9wgBuCgBAHyGCICLEQDAZzkNgAsRAMBXCQG4AAEAfJcQgBMTAMBPiQA4IQEA7MFpAJyMAAD2JATgJAQA8AwiAIYTAMCzOA2AwQQA8GxCAAYSAMBRhAAMIgCAo4kAGEAAACs4DYDFBACwkhCARSoBcF+9gA9MXx88mxBomb7nTV/fLioBsG2RCwonJwI6pu7JU9e1u1IAbNu8C3vf5q0JVnMa0DFt/5u2nqd6Wb2ABR4v8KpNJnWTwTf9+vn083Jt9uRFigHwKHnR4WSEQIdrfKDaIwDgvDwWgB0JAOBMvB8AOxEAwBkJAfghAQCcmRCAbxIAwBWIAPgiAQBchdMA+AIBAFyNEIBPEADAVYkAeIcAAK'+
			'7MaQD8hgAAgCABABQ4BYBXBAAABAkAAAgSAAAQJAAAIEgAAECQAAAK7qsXANMIAODqDH94gwAArszwh98QAMBVGf7wjpfVCwDYmcEPnyAAgKsw+OELPAIArsDwhy9yAgCcmcEP3yQAgDMy+OGHBABwJgY/7MQ7AMBZGP6wo/IJwG3R59rE4Gv8zDTYkw9WDIBVN9lbn5+98eAT/Hw02JMXqT0CWH2jvTZtPTDBfYttxFG3bd4eOG09T1UKgKkXduq6YAWDn9Uye3IlAKZf0Onrg2fzt/6W6Xve9PXtovgOADCHoQ+LCABgBYMfFqs8AgDmMPxhACcAwFEMfhhEAADPZvDDQAIAeBaDHwbzDgDwDIY/DOcEANiTwQ8nIQCAPRj8cDIeAQA/ZfjDCTkBAL7L4IcTEwDAVxn8cAECAPgsgx8uxDsAwGcY/nAxTgCA9xj8'+
			'cFECAHiLwQ8XJwCARwY/RHgHAPjF8IcQJwCAwQ9BAgC6DH4IEwDQY/AD3gGAGMMf2LbNCQBUGPzAXwgAuDaDH3iTAIBrMviBd3kHAK7H8Ac+5AQArsPgBz5NAMD5GfzAl3kEAOdm+APf4gQAzsngB35EAMC5GPzALgQAnIPBD+zKOwAwn+EP7K4SANM30OnrY4375t7gmqbf19PXt4tKAGxb5IJyCQY/BVPv8anr2l0pALZt3oW10fPI/UDNtPt92nqeqvgS4OMFvg1YA2ybe4Iue/IixQB4lLzojOIehP/z83CgegDAKjY6YCkBAMcy+IERai8BwkqGPzCGEwB4PoMfGMcJALxtj6Htn/UBYzkBgP0Z+sB4TgDg974zyA1/4BQEALzvswPdcT9wKgIAPvbeYDf4gVPyDgB8jiEPXIoTAAAIEgAAECQAACBIAABAkA'+
			'AAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIelm9gIVuiz73vuhzASazJx+sGACrbrK3Pj974wH8yZ68SO0RwOob7bVp6wE4ym2btwdOW89TlQJg6oWdui6AosyeXAmA6Rd0+voA9jR9z5u+vl1UAgAAeCAAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAEFQJgPvqBXxg+voA9jR9z5u+vl1UAmDbIhcU4CSm7slT17W7UgBs27wLe9/mrQngKNP2v2nreaqX1QtY4PEC3was'+
			'AaDMnrxIMQAeJS86wFD25APVHgEAAJsAAIAkAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIJWBsBt4WcDwATLZqETAAAIEgAAELQ6ADwGAKBq6QxcHQAAwAITAsApAAA1y2ffhADYtgFfBAAcZMTMmxIA2zbkCwGAJxoz6yYFwLYN+mIAYEe3bdiMe1m9gDc8fkH3ZasAgJ8bNfQf3e53MxYAaqY9AgAADiAAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAgg'+
			'QAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACDov7nvyHtCTGjEAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_11.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._image_11.ggCurrentLogicStateScaling == 0) {
					me._image_11.ggParameter.sx = 1;
					me._image_11.ggParameter.sy = 1;
					me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
				}
				else {
					me._image_11.ggParameter.sx = 1;
					me._image_11.ggParameter.sy = 1;
					me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
				}
			}
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._image_11);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_file.style.top='-47px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_file.ggDx=0;
					me._tt_ht_video_file.style.top='24px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		el=me._ht_video_file_customimage=document.createElement('div');
		els=me._ht_video_file_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_video_file_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_file_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_customimage.style[domTransition]='';
				if (me._ht_video_file_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_customimage.style.visibility="hidden";
					me._ht_video_file_customimage__img.src = '';
					me._ht_video_file_customimage.ggVisible=false;
				}
				else {
					me._ht_video_file_customimage.style.visibility=(Number(me._ht_video_file_customimage.style.opacity)>0||!me._ht_video_file_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_file_customimage.ggSubElement.src=me._ht_video_file_customimage.ggText;
					me._ht_video_file_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_file_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_video_file_customimage.clientWidth;
			var parentHeight = me._ht_video_file_customimage.clientHeight;
			var img = me._ht_video_file_customimage__img;
			var aspectRatioDiv = me._ht_video_file_customimage.clientWidth / me._ht_video_file_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_video_file.appendChild(me._ht_video_file_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Imagem1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style[domTransition]='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
				else {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._popup_image.ggText=player.getBasePath()+""+me.hotspot.url;
			skin._popup_image.ggSubElement.style.width = '0px';
			skin._popup_image.ggSubElement.style.height = '0px';
			skin._popup_image.ggSubElement.src='';
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			player.setVariableValue('vis_image_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._ht_image_info11.logicBlock_alpha();
			me._ht_image_info11.logicBlock_backgroundcolor();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._ht_image_info11.logicBlock_alpha();
			me._ht_image_info11.logicBlock_backgroundcolor();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._ht_image_info11.logicBlock_alpha();
			me._ht_image_info11.logicBlock_backgroundcolor();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style[domTransition]='';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage__img.src = '';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		el=me._ht_image_info11=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info11.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info11.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info11.ggParameter.sx = 0.8;
					me._ht_image_info11.ggParameter.sy = 0.8;
					me._ht_image_info11.style[domTransform]=parameterToTransform(me._ht_image_info11.ggParameter);
				}
				else {
					me._ht_image_info11.ggParameter.sx = 1;
					me._ht_image_info11.ggParameter.sy = 1;
					me._ht_image_info11.style[domTransform]=parameterToTransform(me._ht_image_info11.ggParameter);
				}
			}
		}
		me._ht_image_info11.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_image'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_info11.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_info11.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_info11.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info11.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_info11.style.visibility=me._ht_image_info11.ggVisible?'inherit':'hidden';
					me._ht_image_info11.style.opacity=1;
				}
				else {
					me._ht_image_info11.style.visibility=me._ht_image_info11.ggVisible?'inherit':'hidden';
					me._ht_image_info11.style.opacity=0.3;
				}
			}
		}
		me._ht_image_info11.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_image'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_info11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_info11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_info11.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info11.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_info11.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_image_info11.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_image_info11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info21=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #55aa7f;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info21.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info21.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info21.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info21.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_image_info21.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info21.ggParameter.sx = 2.5;
					me._ht_image_info21.ggParameter.sy = 2.5;
					me._ht_image_info21.style[domTransform]=parameterToTransform(me._ht_image_info21.ggParameter);
				}
				else {
					me._ht_image_info21.ggParameter.sx = 1;
					me._ht_image_info21.ggParameter.sy = 1;
					me._ht_image_info21.style[domTransform]=parameterToTransform(me._ht_image_info21.ggParameter);
				}
			}
		}
		me._ht_image_info21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info11.appendChild(me._ht_image_info21);
		me._ht_image.appendChild(me._ht_image_info11);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_10.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._image_10.ggCurrentLogicStateScaling == 0) {
					me._image_10.ggParameter.sx = 1;
					me._image_10.ggParameter.sy = 1;
					me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
				}
				else {
					me._image_10.ggParameter.sx = 1;
					me._image_10.ggParameter.sy = 1;
					me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
				}
			}
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._image_10);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggDx=-268;
		el.ggDy=-203;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Imagem1') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style[domTransition]='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
				else {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup_1', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			me._ht_image_info10.logicBlock_alpha();
			me._ht_image_info10.logicBlock_backgroundcolor();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			me._ht_image_info10.logicBlock_alpha();
			me._ht_image_info10.logicBlock_backgroundcolor();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			me._ht_image_info10.logicBlock_alpha();
			me._ht_image_info10.logicBlock_backgroundcolor();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = -47;
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.ggDy=34;
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info.appendChild(me._ht_info_customimage);
		el=me._ht_image_info10=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 1))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info10.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info10.ggParameter.sx = 0.8;
					me._ht_image_info10.ggParameter.sy = 0.8;
					me._ht_image_info10.style[domTransform]=parameterToTransform(me._ht_image_info10.ggParameter);
				}
				else {
					me._ht_image_info10.ggParameter.sx = 1;
					me._ht_image_info10.ggParameter.sy = 1;
					me._ht_image_info10.style[domTransform]=parameterToTransform(me._ht_image_info10.ggParameter);
				}
			}
		}
		me._ht_image_info10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_image_info10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_image_info10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_image_info10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info10.ggCurrentLogicStateAlpha == 0) {
					me._ht_image_info10.style.visibility=me._ht_image_info10.ggVisible?'inherit':'hidden';
					me._ht_image_info10.style.opacity=1;
				}
				else {
					me._ht_image_info10.style.visibility=me._ht_image_info10.ggVisible?'inherit':'hidden';
					me._ht_image_info10.style.opacity=0.3;
				}
			}
		}
		me._ht_image_info10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_info10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_info10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_info10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 0s, background-color 0s';
				if (me._ht_image_info10.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_info10.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._ht_image_info10.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_image_info10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info20=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #55aa7f;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_info20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_image_info20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_image_info20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_image_info20.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms';
				if (me._ht_image_info20.ggCurrentLogicStateScaling == 0) {
					me._ht_image_info20.ggParameter.sx = 2.5;
					me._ht_image_info20.ggParameter.sy = 2.5;
					me._ht_image_info20.style[domTransform]=parameterToTransform(me._ht_image_info20.ggParameter);
				}
				else {
					me._ht_image_info20.ggParameter.sx = 1;
					me._ht_image_info20.ggParameter.sy = 1;
					me._ht_image_info20.style[domTransform]=parameterToTransform(me._ht_image_info20.ggParameter);
				}
			}
		}
		me._ht_image_info20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info10.appendChild(me._ht_image_info20);
		me._ht_info.appendChild(me._ht_image_info10);
		el=me._image_info=document.createElement('div');
		els=me._image_info__img=document.createElement('img');
		els.className='ggskin ggskin_image_info';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_Info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('var_hs') == 2))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._image_info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._image_info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._image_info.style[domTransition]='' + cssPrefix + 'transform 0s';
				if (me._image_info.ggCurrentLogicStateScaling == 0) {
					me._image_info.ggParameter.sx = 1;
					me._image_info.ggParameter.sy = 1;
					me._image_info.style[domTransform]=parameterToTransform(me._image_info.ggParameter);
				}
				else {
					me._image_info.ggParameter.sx = 1;
					me._image_info.ggParameter.sy = 1;
					me._image_info.style[domTransform]=parameterToTransform(me._image_info.ggParameter);
				}
			}
		}
		me._image_info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._image_info);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_hotspotpatch(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspotpatch=document.createElement('div');
		el.ggId="HotspotPatch";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 244px;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspotpatch.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspotpatch.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspotpatch.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspotpatch.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspotpatch.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspotpatch.ggUpdatePosition=function (useTransition) {
		}
		el=me._patch_customimage=document.createElement('div');
		els=me._patch_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._patch_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Patch_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.01;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._patch_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._patch_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._patch_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._patch_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._patch_customimage.style[domTransition]='';
				if (me._patch_customimage.ggCurrentLogicStateVisible == 0) {
					me._patch_customimage.style.visibility="hidden";
					me._patch_customimage__img.src = '';
					me._patch_customimage.ggVisible=false;
				}
				else {
					me._patch_customimage.style.visibility=(Number(me._patch_customimage.style.opacity)>0||!me._patch_customimage.style.opacity)?'inherit':'hidden';
					me._patch_customimage.ggSubElement.src=me._patch_customimage.ggText;
					me._patch_customimage.ggVisible=true;
				}
			}
		}
		me._patch_customimage.onclick=function (e) {
			if (
				(
					((player.getCurrentNode() == "Patch1"))
				)
			) {
				var flag=me._patch_customimage.ggOpacitiyActive;
				if (player.transitionsDisabled) {
					me._patch_customimage.style[domTransition]='none';
				} else {
					me._patch_customimage.style[domTransition]='all 500ms ease-out 0ms';
				}
				if (flag) {
					me._patch_customimage.style.opacity='0.01';
					me._patch_customimage.style.visibility=me._patch_customimage.ggVisible?'inherit':'hidden';
				} else {
					me._patch_customimage.style.opacity='1';
					me._patch_customimage.style.visibility=me._patch_customimage.ggVisible?'inherit':'hidden';
				}
				me._patch_customimage.ggOpacitiyActive=!flag;
			}
		}
		me._patch_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._patch_customimage.clientWidth;
			var parentHeight = me._patch_customimage.clientHeight;
			var img = me._patch_customimage__img;
			var aspectRatioDiv = me._patch_customimage.clientWidth / me._patch_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._hotspotpatch.appendChild(me._patch_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._hotspotpatch;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_var_hs();;
		} else
		if (hotspot.skinid=='ht_video_file') {
			hotspot.skinid = 'ht_video_file';
			hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_file_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_file_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_file_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_file_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_video_file_varchanged_var_hs();;
		} else
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_Imagem1();;
			me.callChildLogicBlocksHotspot_ht_image_varchanged_var_hs();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_Imagem1();;
			me.callChildLogicBlocksHotspot_ht_info_varchanged_var_hs();;
		} else
		{
			hotspot.skinid = 'HotspotPatch';
			hsinst = new SkinHotspotClass_hotspotpatch(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspotpatch_changenode();;
			me.callChildLogicBlocksHotspot_hotspotpatch_activehotspotchanged();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				hotspotTemplates['ht_video_file'][i] = null;
			}
		}
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['HotspotPatch']) {
			var i;
			for(i = 0; i < hotspotTemplates['HotspotPatch'].length; i++) {
				hotspotTemplates['HotspotPatch'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_node_clone_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 150px; height: 119px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_imagem=document.createElement('div');
		els=me._node_imagem__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_imagem_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Node Imagem";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_imagem.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_imagem.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._node_imagem.ggUpdatePosition=function (useTransition) {
		}
		el=me._texto_node=document.createElement('div');
		els=me._texto_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texto Node";
		el.ggDx=0;
		el.ggDy=60;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(170,255,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._texto_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texto_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((102-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._node_imagem.appendChild(me._texto_node);
		me.__div.appendChild(me._node_imagem);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; } .ggskin.tooltip { font-family: "Josefin Sans", sans-serif;; font-size: 14px; } .ggskin.info { font-family: "Orbitron", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	me._logo_design.logicBlock_position();
	me._logo_design.logicBlock_scaling();
	me._instagram.logicBlock_position();
	me._instagram.logicBlock_scaling();
	me._facebook.logicBlock_position();
	me._facebook.logicBlock_scaling();
	me._tik_tok.logicBlock_position();
	me._tik_tok.logicBlock_scaling();
	me._youtube.logicBlock_position();
	me._youtube.logicBlock_scaling();
	me._local.logicBlock_position();
	me._local.logicBlock_scaling();
	me._button_auto_rotate.logicBlock_position();
	me._button_auto_rotate.logicBlock_scaling();
	me._button_fullscreen.logicBlock_position();
	me._button_fullscreen.logicBlock_scaling();
	me._enter_vr.logicBlock_position();
	me._enter_vr.logicBlock_scaling();
	me._whatsapp.logicBlock_position();
	me._whatsapp.logicBlock_scaling();
	me._manual.logicBlock_position();
	me._manual.logicBlock_scaling();
	me._indicaes_de_uso.logicBlock_position();
	me._indicaes_de_uso.logicBlock_scaling();
	me._pergunta.logicBlock_position();
	me._pergunta.logicBlock_scaling();
	me._indicaes_de_uso_amplo.logicBlock_position();
	me._indicaes_de_uso_amplo.logicBlock_scaling();
	me._indicaes_de_uso_amplo.logicBlock_angle();
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen0.logicBlock_visible();
	me._tt_fullscreen.logicBlock_text();
	me._stop_rotate_image.logicBlock_visible();
	me._start_rotate_image0.logicBlock_visible();
	me._tt_rotate_start.logicBlock_text();
	me._video_screentint_file.logicBlock_visible();
	me._video_popup_file.logicBlock_visible();
	me._popup_video_file.logicBlock_visible();
	me._video_popup_controls_file.logicBlock_visible();
	me._video_popup_close_file.logicBlock_visible();
	me._screentint_info.logicBlock_visible();
	me._information.logicBlock_visible();
	me._screentint_image.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image.logicBlock_visible();
	me._image_popup_close.logicBlock_visible();
	me._tt_rotate_start.logicBlock_position();
	me._tt_enter_vr.logicBlock_position();
	me._enter_vr.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._logo_design.logicBlock_position();me._logo_design.logicBlock_scaling();me._instagram.logicBlock_position();me._instagram.logicBlock_scaling();me._facebook.logicBlock_position();me._facebook.logicBlock_scaling();me._tik_tok.logicBlock_position();me._tik_tok.logicBlock_scaling();me._youtube.logicBlock_position();me._youtube.logicBlock_scaling();me._local.logicBlock_position();me._local.logicBlock_scaling();me._button_auto_rotate.logicBlock_position();me._button_auto_rotate.logicBlock_scaling();me._button_fullscreen.logicBlock_position();me._button_fullscreen.logicBlock_scaling();me._enter_vr.logicBlock_position();me._enter_vr.logicBlock_scaling();me._whatsapp.logicBlock_position();me._whatsapp.logicBlock_scaling();me._manual.logicBlock_position();me._manual.logicBlock_scaling();me._indicaes_de_uso.logicBlock_position();me._indicaes_de_uso.logicBlock_scaling();me._pergunta.logicBlock_position();me._pergunta.logicBlock_scaling();me._indicaes_de_uso_amplo.logicBlock_position();me._indicaes_de_uso_amplo.logicBlock_scaling();me._indicaes_de_uso_amplo.logicBlock_angle(); });
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen0.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen0.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image0.logicBlock_visible();me._tt_rotate_start.logicBlock_text();me._video_screentint_file.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_close_file.logicBlock_visible();me._screentint_info.logicBlock_visible();me._information.logicBlock_visible();me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._tt_rotate_start.logicBlock_position();me._tt_enter_vr.logicBlock_position(); });
	player.addListener('autorotatechanged', function(args) { me._stop_rotate_image.logicBlock_visible();me._start_rotate_image0.logicBlock_visible();me._tt_rotate_start.logicBlock_text(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_rotate_start.logicBlock_position();me._tt_enter_vr.logicBlock_position(); });
	player.addListener('varchanged_vis_video_file', function(args) { me._video_screentint_file.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_close_file.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup_1', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_video_file_changenode();me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode();me.callChildLogicBlocksHotspot_hotspotpatch_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_video_file_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover();me.callChildLogicBlocksHotspot_ht_video_file_mouseover();me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_video_file_hastouch();me.callChildLogicBlocksHotspot_ht_info_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();me.callChildLogicBlocksHotspot_hotspotpatch_activehotspotchanged(); });
	player.addListener('varchanged_Imagem1', function(args) { me.callChildLogicBlocksHotspot_ht_image_varchanged_Imagem1();me.callChildLogicBlocksHotspot_ht_info_varchanged_Imagem1(); });
	player.addListener('varchanged_var_hs', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_var_hs();me.callChildLogicBlocksHotspot_ht_video_file_varchanged_var_hs();me.callChildLogicBlocksHotspot_ht_image_varchanged_var_hs();me.callChildLogicBlocksHotspot_ht_info_varchanged_var_hs(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};