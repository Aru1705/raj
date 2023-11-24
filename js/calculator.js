$(document).ready(function(){
	
	
    
    

  
var percent = document.getElementById("Ultra").value;
	

	var percent =  parseFloat(document.getElementById("Ultra").value); 
	var minMoney 	= [100,25.00,1000.00,50.00,100.00 ];
	var maxMoney	= [1500.00,5001.00,8001.00,5001.00,5001.00 ];
	$("#money").val(minMoney[0]);
	console.log($("#money").val(minMoney[0]));
	
	//Calculator
	function calc(){
		var money = parseFloat($("#money").val());
		switch (percent) {
		    case 0:
		        if( (money >= 10 && money < 9999999999)){
		        	var profitDaily = money / 100 * 0.5;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 500 * 0.5 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 0.5;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 500 * 0.5;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text('$' + profitDaily);
					$("#profitTotal").text('$' + profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
				//} else if(isNaN(money) == true) {
				} if (money < 10){
					$("#profitDaily").text("Error!");
					$("#profitTotal").text("Error!");
					$("#profitPercent").text("Error!");
					$("#profitNet").text("Error!");
				}
		        break;
			case 1:
		        if ( money >= 20 && money <= 15000){

		        	var profitDaily = money / 100 * 8 ;
					var profitDaily = profitDaily.toFixed(2);
					
					var profitTotal = money / 100 * 8 * 50 ;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 8  ;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 *  4.5;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					
					$("#profitNet").text('$' + profitNet);
					//} else if(isNaN(money) == true) {
		        } /*if (money >= 2001 && money <= 3000) {
		        	var profitDaily = money / 100 * 2.5;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 2.5 * 90 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 2.5;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 2.5 * 90;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					
		        } if (money >= 3001 && money < 9999999999) {
		        	var profitDaily = money / 100 * 3;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 3 * 90 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 3;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 3 * 90;
					var profitNet = profitNet.toFixed(2);
					

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					
				
				}*/ if (money < 20) {
					$("#profitDaily").text("Min: $20");
					$("#profitTotal").text("Min: $20");
					$("#profitPercent").text("Min: $20");
					$("#profitNet").text("Min: $20");
				}
					if (money >15000){
					$("#profitDaily").text("Max: $15000");
					$("#profitTotal").text("Max: $15000");
					$("#profitPercent").text("Max: $15000");
					$("#profitNet").text("Max: $15000");
				}
				
		        break;
		    case 2:
		    	 if ( money >= 20 && money <= 15000){

		        	var profitDaily = money / 100 * 9;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 9 * 40;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent =  9 ;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 155;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					//} else if(isNaN(money) == true) {
		        }  /*if (money >= 3001 && money <= 5000) {
		        	var profitDaily = money / 100 * 5.5;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 5.5 * 35 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 5.5;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 5.5 * 35;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
										
		        } if (money >= 5001 && money < 9999999999) {
		        	var profitDaily = money / 100 * 6;
					var profitDaily = profitDaily.toFixed(2);
		        	var profitTotal = money / 100 * 6 * 35 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 6;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 6 * 35;
					var profitNet = profitNet.toFixed(2);					

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
		        }*/  if (money < 20) {
					$("#profitDaily").text("Min: $20");
					$("#profitTotal").text("Min: $20");
					$("#profitPercent").text("Min: $20");
					$("#profitNet").text("Min: $20");
				}
					if (money >15000){
					$("#profitDaily").text("Max: $15000");
					$("#profitTotal").text("Max: $15000");
					$("#profitPercent").text("Max: $15000");
					$("#profitNet").text("Max: $15000");
				}
				
		   
		        break;
		    case 3:
		    	 if ( money >= 20 && money <= 15000){

		        	var profitDaily = money / 100 * 10;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 10 * 30;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent =  10 ;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 55;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					//} else if(isNaN(money) == true) {
		        } /*if (money >= 5001 && money <= 10000) {
		        	var profitDaily = money / 100 * 11;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 11 * 18 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 11;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 11 * 18;
					var profitNet = profitNet.toFixed(2);


					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
		        } if (money >= 10001 && money < 9999999999) {
		        	var profitDaily = money / 100 * 12;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 12 * 18 + money;
					var profitTotal = profitTotal.toFixed(2)
					var profitPercent = 12;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 12 * 18;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
		        }*/  if (money < 20) {
					$("#profitDaily").text("Min: $20");
					$("#profitTotal").text("Min: $20");
					$("#profitPercent").text("Min: $20");
					$("#profitNet").text("Min: $20");
				}
					if (money >15000){
					$("#profitDaily").text("Max: $15000");
					$("#profitTotal").text("Max: $15000");
					$("#profitPercent").text("Max: $15000");
					$("#profitNet").text("Max: $15000");
				}
		        break;
		    case 4:
		    	 if ( money >= 200 && money <= 15000){

		        	var profitDaily = money / 100 * 300;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 300;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 300;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 1000;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					//} else if(isNaN(money) == true) {
		        } /* if (money >= 10001 && money < 20000) {
		        	var profitDaily = money / 100 * 19;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 19 * 10 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 19;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 19 * 10;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					
		        } if (money >= 20001 && money < 9999999999) {
		        	var profitDaily = money / 100 * 20;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 20 * 10 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 20;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 20 * 10;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					
		        }*/ if (money < 200){
					$("#profitDaily").text("Min: $200");
					$("#profitTotal").text("Min: $200");
					$("#profitPercent").text("Min: $200");
					$("#profitNet").text("Min: $200");
				}
				if (money >15000){
					$("#profitDaily").text("Max: $15000");
					$("#profitTotal").text("Max: $15000");
					$("#profitPercent").text("Max: $15000");
					$("#profitNet").text("Max: $15000");
				}
				

		        break;
		         case 5:
		         if ( money >= 25001 && money <= 75000){

		        	var profitDaily = money / 100 * 2.5 / 50;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 2.5 *55+money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 2.5*55;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 2.5*55;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					//} else if(isNaN(money) == true) {
		        }  if (money < 25001){
					$("#profitDaily").text("Min: $25001");
					$("#profitTotal").text("Min: $25001");
					$("#profitPercent").text("Min: $25001");
					$("#profitNet").text("Min: $25001");
				}
		        break;
		         case 6:
		       if ( money >= 75001 && money <= 250000){

		        	var profitDaily = money / 100 * 2.9;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 2.9 * 65 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 2.9*65;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 3 * 65;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);

		        } if (money < 25001){
					$("#profitDaily").text("Min: $75001");
					$("#profitTotal").text("Min: $75001");
					$("#profitPercent").text("Min: $75001");
					$("#profitNet").text("Min: $75001");
				}
		        break;
		        case 7:
		        if ( money >= 500 && money <= 30000){

		        	var profitDaily = money / 100 * 2.4;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 2.4 * 75 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 2.4*75;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 2.4 * 75;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);

		        } if (money < 500){
					$("#profitDaily").text("Min: $500");
					$("#profitTotal").text("Min: $500");
					$("#profitPercent").text("Min: $500");
					$("#profitNet").text("Min: $500");
				}
		        break;
		        case 8:
		       if ( money >= 3000 && money <= 100000){

		        	var profitDaily = money / 100 * 2.7;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 2.7 * 75 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 2.7*75;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 2.7 * 75;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);

		        }  if (money < 3000){
					$("#profitDaily").text("Min: $3000");
					$("#profitTotal").text("Min: $3000");
					$("#profitPercent").text("Min: $3000");
					$("#profitNet").text("Min: $3000");
				}
		        break;
		        case 9:
		 		if ( money >= 5000 && money <= 100000){

		        	var profitDaily = money / 100 * 10;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 10 * 50 + money;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 10;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 10 * 50;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);

		        }  if (money < 5000){
					$("#profitDaily").text("Min: $5000");
					$("#profitTotal").text("Min: $5000");
					$("#profitPercent").text("Min: $5000");
					$("#profitNet").text("Min: $5000");
				}
		        break;		       
		    case 10:
		    	if ( money >= 20 && money <= 1000){

		        	var profitDaily = money / 100 * 900 / 70;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 900 ;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 900;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 900 - money;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);

		        } if (money >= 1001 && money <= 3000) {
		        	var profitDaily = money / 100 * 950 / 70;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 950;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 950;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 950 - money;
					var profitNet = profitNet.toFixed(2);
					

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					
		        } if (money >= 3001 && money < 9999999999) {
		        	var profitDaily = money / 100 * 1000 / 70;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 1000;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 1000;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 1000 - money;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
		        } if (money < 20){
					$("#profitDaily").text("Min: $20");
					$("#profitTotal").text("Min: $20");
					$("#profitPercent").text("Min: $20");
					$("#profitNet").text("Min: $20");
				}
		        break;
		    case 11:
		    	if ( money >= 10 && money <= 1000){

		        	var profitDaily = money / 100 * 1800 / 120;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 1800;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 1800;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 1800 - money;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);

		        } if (money >= 1001 && money <= 3000) {
		        	var profitDaily = money / 100 * 1900 / 120;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 1900 * 1;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 1900;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 1900 - money;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					
		        } if (money >= 3001 && money < 9999999999) {
		        	var profitDaily = money / 100 * 2000 / 120;
					var profitDaily = profitDaily.toFixed(2);
					var profitTotal = money / 100 * 2000;
					var profitTotal = profitTotal.toFixed(2);
					var profitPercent = 2000;
					var profitPercent = profitPercent.toFixed(2);
					var profitNet = money / 100 * 2000 - money;
					var profitNet = profitNet.toFixed(2);

					$("#profitDaily").text(profitDaily);
					$("#profitTotal").text(profitTotal);
					$("#profitPercent").text(profitPercent + '%');
					$("#profitNet").text('$' + profitNet);
					
		        }if (money < 10){
					$("#profitDaily").text("Min: $10");
					$("#profitTotal").text("Min: $10");
					$("#profitPercent").text("Min: $10");
					$("#profitNet").text("Min: $10");
				}
		        break;

		}
	}
	if($("#money").length){
		calc();
	}
	$("#money").keyup(function(){
		calc();
	});

	$("#Ultra").on('change', function() {
		percent = parseFloat(this.value);
		calc();
	})


	
});


 