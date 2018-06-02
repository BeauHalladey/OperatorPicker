//Defender Picker
function opPickerDef()
{
	var maestroCB = document.getElementById('maestro');
	var alibiCB = document.getElementById('alibi');
	var vigilCB = document.getElementById('vigil');
	var elaCB = document.getElementById('ela');
	var lesionCB = document.getElementById('lesion');
	var miraCB = document.getElementById('mira');
	var echoCB = document.getElementById('echo');
	var cavCB = document.getElementById('cav');
	var valkCB = document.getElementById('valk');
	var frostCB = document.getElementById('frost');
	var muteCB = document.getElementById('mute');
	var smokeCB = document.getElementById('smoke');
	var castleCB = document.getElementById('castle');
	var pulseCB = document.getElementById('pulse');
	var docCB = document.getElementById('doc');
	var rookCB = document.getElementById('rook');
	var jagerCB = document.getElementById('jager');
	var banditCB = document.getElementById('bandit');
	var lordCB = document.getElementById('lord');
	var kapkanCB = document.getElementById('kapkan');
	
	var opArrayDef = new Array;
	var opDefCB = document.getElementsByClassName('opDefCB');
	var opSel = document.getElementById('opSel');


	if(maestroCB.checked == true)
	{
		opArrayDef.push("Maestro");
	}
	if(alibiCB.checked == true)
	{
		opArrayDef.push("Alibi");
	}
	if(vigilCB.checked == true)
	{
		opArrayDef.push("Vigil");
	}
	if(elaCB.checked == true)
	{
		opArrayDef.push("Ela");
	}
	if(lesionCB.checked == true)
	{
		opArrayDef.push("Lesion");
	}
	if(miraCB.checked == true)
	{
		opArrayDef.push("Mira");
	}
	if(echoCB.checked == true)
	{
		opArrayDef.push("Echo");
	}
	if(cavCB.checked == true)
	{
		opArrayDef.push("Caveira");
	}
	if(valkCB.checked == true)
	{
		opArrayDef.push("Valkyrie");
	}
	if(frostCB.checked == true)
	{
		opArrayDef.push("Frost");
	}
	if(muteCB.checked == true)
	{
		opArrayDef.push("Mute");
	}
	if(smokeCB.checked == true)
	{
		opArrayDef.push("Smoke");
	}
	if(castleCB.checked == true)
	{
		opArrayDef.push("Castle");
	}
	if(pulseCB.checked == true)
	{
		opArrayDef.push("Pulse");
	}
	if(docCB.checked == true)
	{
		opArrayDef.push("Doc");
	}
	if(rookCB.checked == true)
	{
		opArrayDef.push("Rook");
	}
	if(jagerCB.checked == true)
	{
		opArrayDef.push("J&aumlger");
	}
	if(banditCB.checked == true)
	{
		opArrayDef.push("Bandit");
	}
	if(kapkanCB.checked == true)
	{
		opArrayDef.push("Kapkan");
	}
	if(lordCB.checked == true)
	{
		opArrayDef.push("Tachanka");
	}
	if(opArrayDef.length == 0)
	{
		opArrayDef.push("None Selected");
	}
	
	var pickFromArrayDef = opArrayDef[Math.floor(Math.random()*opArrayDef.length)];
	opSel.innerHTML = pickFromArrayDef;

}


//Attacker Picker
function opPickerAtk()
{
	var lionCB = document.getElementById('lion');
	var finkaCB = document.getElementById('finka');
	var dokkCB = document.getElementById('dokk');
	var zofiaCB = document.getElementById('zofia');
	var yingCB = document.getElementById('ying');
	var jackalCB = document.getElementById('jackal');
	var hibanaCB = document.getElementById('hibana');
	var capitaoCB = document.getElementById('capitao');
	var bbeardCB = document.getElementById('bbeard');
	var buckCB = document.getElementById('buck');
	var sledgeCB = document.getElementById('sledge');
	var thatcherCB = document.getElementById('thatcher');
	var ashCB = document.getElementById('ash');
	var thermiteCB = document.getElementById('thermite');
	var montyCB = document.getElementById('monty');
	var twitchCB = document.getElementById('twitch');
	var blitzCB = document.getElementById('blitz');
	var iqCB = document.getElementById('iq');
	var fuzeCB = document.getElementById('fuze');
	var glazCB = document.getElementById('glaz');
	
	var opArrayAtk = new Array;
	var opAtkCB = document.getElementsByClassName('opAtkCB');
	var opSel = document.getElementById('opSel');


	if(lionCB.checked == true)
	{
		opArrayAtk.push("Lion");
	}
	if(finkaCB.checked == true)
	{
		opArrayAtk.push("Finka");
	}
	if(dokkCB.checked == true)
	{
		opArrayAtk.push("Dokkaebi");
	}
	if(zofiaCB.checked == true)
	{
		opArrayAtk.push("Zofia");
	}
	if(yingCB.checked == true)
	{
		opArrayAtk.push("Ying");
	}
	if(jackalCB.checked == true)
	{
		opArrayAtk.push("Jackal");
	}
	if(hibanaCB.checked == true)
	{
		opArrayAtk.push("Hibana");
	}
	if(capitaoCB.checked == true)
	{
		opArrayAtk.push("Capit&atildeo");
	}
	if(bbeardCB.checked == true)
	{
		opArrayAtk.push("Blackbeard");
	}
	if(buckCB.checked == true)
	{
		opArrayAtk.push("Buck");
	}
	if(sledgeCB.checked == true)
	{
		opArrayAtk.push("Sledge");
	}
	if(thatcherCB.checked == true)
	{
		opArrayAtk.push("Thatcher");
	}
	if(ashCB.checked == true)
	{
		opArrayAtk.push("Ash");
	}
	if(thermiteCB.checked == true)
	{
		opArrayAtk.push("Thermite");
	}
	if(montyCB.checked == true)
	{
		opArrayAtk.push("Montagne");
	}
	if(twitchCB.checked == true)
	{
		opArrayAtk.push("Twitch");
	}
	if(blitzCB.checked == true)
	{
		opArrayAtk.push("Blitz");
	}
	if(iqCB.checked == true)
	{
		opArrayAtk.push("IQ");
	}
	if(fuzeCB.checked == true)
	{
		opArrayAtk.push("Fuze");
	}
	if(glazCB.checked == true)
	{
		opArrayAtk.push("Glaz");
	}
	if(opArrayAtk.length == 0)
	{
		opArrayAtk.push("None Selected");
	}
	
	var pickFromArrayAtk = opArrayAtk[Math.floor(Math.random()*opArrayAtk.length)];
	opSel.innerHTML = pickFromArrayAtk;
	
	opArrayAtk.shuffle();

}

