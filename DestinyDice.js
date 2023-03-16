Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "DestinyDice", name: "Destiny Dice"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/DestinyDice/d2.glb",
		system: "DestinyDice"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/DestinyDice/d4.glb",
		system: "DestinyDice"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/DestinyDice/d6.glb",
		system: "DestinyDice"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/DestinyDice/d8.glb",
		system: "DestinyDice"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/DestinyDice/d10.glb",
		system: "DestinyDice"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/DestinyDice/d100.glb",
		system: "DestinyDice"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/DestinyDice/d12.glb",
		system: "DestinyDice"
	});	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/DestinyDice/d20.glb",
		system: "DestinyDice"
	});
});