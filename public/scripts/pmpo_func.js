var $val = 0;
var $user = $('#user_pic');
var $menu = $('#menu_btn');

function dropDownMenu(handler, res) {
	$(handler).click(function(){
		if($val==0){
			$(res).css({
				'top':'3.5em',
				'opacity':'1'
			});
			$val = 1;
		}else{
			$(res).css({
				'top':'-50em',
				'opacity':'0'
			});
			$val = 0;
		}
	});	
}
