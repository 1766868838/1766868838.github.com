$(init)
function init(){
	$("body").on('click','.m-img',function(){
		let imgUrl = $(this).attr("src")
		$(".m-bimg").show('500').attr("src",imgUrl)
	})
	$(".m-bimg").on('click',function(){
		$(".m-bimg").hide()
	})
	$(document).ready(function(){
		$("li").each(function(index){
			index=index+1;
			$(this).on('click',function(){
				let liNode = $(this)
				$(".sel").removeClass("sel")
				$(".selLi").removeClass("selLi")
				$("div").eq(index).addClass("sel")
				liNode.addClass("selLi")
			})
		})
	})
	$(".del").on('click',function(){
		let par = $(this).parent();
		$(par).remove();
	})

	$(".add").on('click',function(){
		let pre = $(this).prev()
		let newdiv = $(pre).clone()

		$(newdiv).find(".num").text(Number($(newdiv).find(".num").text())+1)
		$(pre).after(newdiv)
		$(".del").on('click',function(){
			let par = $(this).parent();
			$(par).remove();
		})
	})
}
