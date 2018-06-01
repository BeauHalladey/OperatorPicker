//Defender Picker
function opPickerDef()
{
	var opSel = document.getElementById('opSel');
	
	//Add the names of the defenders you don't have in the array below
		var opArrayDef = ['Frost', 'Mira', 'Echo', 'Lesion'];
	
	
	var pickFromArrayDef = opArrayDef[Math.floor(Math.random()*opArrayDef.length)];
	opSel.innerHTML = pickFromArrayDef;
}


//Attacker Picker
function opPickerAtk()
{
	var opSel = document.getElementById('opSel');
	
	//Add the names of the attackers you don't have in the array below
		var opArrayAtk = ['Buck', 'Capitao', 'Blackbeard', 'Ying', 'Zofia'];
	
	
	var pickFromArrayAtk = opArrayAtk[Math.floor(Math.random()*opArrayAtk.length)];
	opSel.innerHTML = pickFromArrayAtk;
}