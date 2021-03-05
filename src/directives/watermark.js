import Vue from 'vue';
export default () => {
	Vue.directive('watermark', (el, binding) => {
	    function addWaterMarker(str,  parentNode, font, textColor) { // str1、str2水印文字，父元素，字体，文字颜色
	    	var img = document.createElement('canvas'); // 创建canvas元素
			parentNode.appendChild(img);
			img.width = 200;
			img.height = 112;
			img.style.display = 'none';
			var imgs = img.getContext('2d'); // 获取canvas画布
			imgs.rotate(-20 * Math.PI / 180); // 逆时针旋转π/9
			imgs.font = font || '20px Microsoft JhengHei';
			imgs.fillStyle = textColor || 'rgb(160, 133, 60)';
			imgs.textAlign = 'center';
			imgs.textBaseline = 'Middle';
			imgs.fillText(str, 15, 80); // 第一行字体
			parentNode.style.backgroundImage = 'url(' + img.toDataURL('image/png') + ')';
	    }
	    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor);
	})
}