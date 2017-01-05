		// 文本字体自适应

		// 字体大小判断准则
		function judgeFontSize($this,totaLength,valLength){
			if (totaLength >= 480) {
				if(valLength < 26) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
				}
				if(valLength >= 26 && valLength < 34) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.addClass('font_size_11');
				}
				if (valLength >= 34 && valLength < 38) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_10');
				}
				if (valLength >= 38) {
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_9');
				}
			}

			if (totaLength >= 400 && totaLength < 480) {
				if(valLength < 23) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
				}
				if(valLength >= 23 && valLength < 29) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.addClass('font_size_11');
				}
				if (valLength >= 29 && valLength < 33) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_10');
				}
				if (valLength >= 33) {
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_9');
				}
			}
			if (totaLength >= 300 && totaLength <400) {
				if(valLength < 17) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
				}
				if(valLength >= 17 && valLength < 25) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.addClass('font_size_11');
				}
				if (valLength >= 25 && valLength < 27) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_10');
				}
				if (valLength >= 27) {
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_9');
				}
			}

			if (totaLength >= 250 && totaLength <300) {
				if(valLength < 16) {
				$this.removeClass('font_size_9');
				$this.removeClass('font_size_10');
				$this.removeClass('font_size_11');
				}
				if(valLength >= 16 && valLength < 19) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.addClass('font_size_11');
				}
				if (valLength >= 19&& valLength < 22) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_10');
				}
				if (valLength >= 22) {
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_9');
				}
			}

			if (totaLength >= 220 && totaLength <250) {
				if(valLength < 14) {
				$this.removeClass('font_size_9');
				$this.removeClass('font_size_10');
				$this.removeClass('font_size_11');
				}
				if(valLength >= 14 && valLength < 17) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.addClass('font_size_11');
				}
				if (valLength >= 17&& valLength < 29) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_10');
				}
				if (valLength >= 29) {
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_9');
				}
			}

			if (totaLength > 149 && totaLength <= 220) {
				if(valLength < 10) {
				$this.removeClass('font_size_9');
				$this.removeClass('font_size_10');
				$this.removeClass('font_size_11');
				}
				if(valLength >= 10 && valLength < 12) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.addClass('font_size_11');
				}
				if (valLength >= 12 && valLength < 14) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_10');
				}
				if (valLength >= 14) {
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_9');
				}
			}
			if (totaLength > 100 && totaLength <= 149) {
				if(valLength < 6) {
				$this.removeClass('font_size_9');
				$this.removeClass('font_size_10');
				$this.removeClass('font_size_11');
				}
				if(valLength >= 6 && valLength < 7) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_10');
					$this.addClass('font_size_11');
				}
				if (valLength >= 7 && valLength < 8) {
					$this.removeClass('font_size_9');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_10');
				}
				if (valLength >= 8) {
					$this.removeClass('font_size_10');
					$this.removeClass('font_size_11');
					$this.addClass('font_size_9');
				}
			}


		}

		$('.auto_fontSize').keyup(function(){
			var $this = $(this);
			var valLength = $this.val() ? $this.val().length : $this.text().length;
			var totaLength = $this.width();
			console.log(valLength);
			judgeFontSize($this,totaLength,valLength);
		});

		//初始化字体大小
		$('.auto_fontSize').each(function(){
			var $this = $(this);
			var valLength = $this.val() ? $this.val().length : $this.text().length;
			var totaLength = $this.width();
			console.log(valLength);
			judgeFontSize($this,totaLength,valLength);
		});
	});