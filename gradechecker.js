LOGIN_PAGE="https://central.carleton.ca/prod/twbkwbis.P_ValLogin";
GRADES_PAGE="https://central.carleton.ca/prod/bwskogrd.P_ViewGrde";
USERID="100803035";
PIN="******";
TERM="201330";

document.addEventListener('DOMContentLoaded', function () {
	$.post(LOGIN_PAGE,  
 		{ sid: USERID, PIN: PIN }, 
	    function (data) {
	    	$.post(GRADES_PAGE,
		    	{ term_in: TERM },
		    	function(data)
		    	{
		    		$('body').replaceWith(data);
		    	}
	    	);
    	}	 
    );
});
