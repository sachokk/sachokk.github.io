function toggleTab() {

	var prop = document.getElementById('radio-prop');
	var req = document.getElementById('radio-req');
	var both = document.getElementById('radio-both');

	document.getElementById('proposition').style.display = prop.checked ? 'block' : 'none' && both.checked ? 'block' : 'none';
	document.getElementById('request').style.display = req.checked ? 'block' : 'none' && both.checked ? 'block' : 'none';
	document.getElementById('proposition').style.width = prop.checked ? '100%' : '50%';
	document.getElementById('request').style.width = req.checked ? '100%' : '50%';

}


function toggleFilter(checkId, labelId, divId) {
	var check = document.getElementById(checkId);
	var label = document.getElementById(labelId);
	var tab = document.getElementById(divId)
	

	//prop.checked ? propLabel.innerHTML = "Скрыть фильтр" : propLabel.innerHTML = "Фильтровать";
		if (check.checked == false){
                label.innerHTML = "Фильтровать";
            }
            else{
                label.innerHTML = "Скрыть фильтр";
            }


	tab.style.display = check.checked ? 'block' : 'none';
	//document.getElementById('filter-tab-req').style.display = check.checked ? 'block' : 'none';

	//document.getElementById('filter-tab-req').style.display = req.checked ? 'block' : 'none' && both.checked ? 'block' : 'none';

}