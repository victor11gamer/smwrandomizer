// thanks to MrCheese for helping with this

var TITLE_CHARSET =
{
	"A": 0x00,
	"B": 0x01,
	"C": 0x02,
	"D": 0x03,
	"E": 0x04,
	"F": 0x05,
	"G": 0x06,
	"H": 0x07,
	"I": 0x08,
	"J": 0x09,
	"K": 0x0a,
	"L": 0x0b,
	"M": 0x0c,
	"N": 0x0d,
	"O": 0x0e,
	"P": 0x0f,
	"Q": 0x10,
	"R": 0x11,
	"S": 0x12,
	"T": 0x13,
	"U": 0x14,
	"V": 0x15,
	"W": 0x16,
	"X": 0x17,
	"Y": 0x18,
	"Z": 0x19,
	"!": 0x1a,
	".": 0x1b,
	"-": 0x1c,
	",": 0x1d,
	"?": 0x1e,
	" ": 0x1f,
	"a": 0x40,
	"b": 0x41,
	"c": 0x42,
	"d": 0x43,
	"e": 0x44,
	"f": 0x45,
	"g": 0x46,
	"h": 0x47,
	"i": 0x48,
	"j": 0x49,
	"k": 0x4a,
	"l": 0x4b,
	"m": 0x4c,
	"n": 0x4d,
	"o": 0x4e,
	"p": 0x4f,
	"q": 0x50,
	"r": 0x51,
	"s": 0x52,
	"t": 0x53,
	"u": 0x54,
	"v": 0x55,
	"w": 0x56,
	"x": 0x57,
	"y": 0x58,
	"z": 0x59,
	"#": 0x5a,
	"(": 0x5b,
	")": 0x5c,
	"'": 0x5d,
	"·": 0x5e,
	"1": 0x64,
	"2": 0x65,
	"3": 0x66,
	"4": 0x67,
	"5": 0x68,
	"6": 0x69,
	"7": 0x6a,
	"0": 0x6b,

	"\uE032": 0x32,
	"\uE033": 0x33,
	"\uE034": 0x34,
	"\uE035": 0x35,
	"\uE036": 0x36,
	"\uE037": 0x37,

	"\uE038": 0x38,
	"\uE039": 0x39,
	"\uE03A": 0x3a,
	"\uE03B": 0x3b,
	"\uE03C": 0x3c,
};
 
var TITLE_STRINGS =
[
	["YOSHI'S ", "MARIO'S ", "LUIGI'S ", "DEATHLY ", "LEMMY'S ", "LARRY'S ", "WENDY'S ", "KOOPA'S "],
	["STAR ", "BEST ", "HYPE ", "COOL ", "ANTI ", "MOON ", "REAL ", "NICE "],
	"#1 IGGY'S ",
	"#2 MORTON'S ",
	"#3 LEMMY'S ",
	"#4 LUDWIG'S ",
	"#5 ROY'S ",
	"#6 WENDY'S ",
	"#7 LARRY'S ",
	["DONUT ", "PIZZA ", "DEATH ", "KOOPA ", "FUDGE ", "PLUTO ", "KAIZO ", "SKULL ", "MARIO "],
	"GREEN ",
	["TOP SECRET AREA ", "TAKE A BREAK ", "WHY THE RUSH? ", "LEVEL OF SHAME ", "KEEP YOUR CAPES "],
	["VANILLA ", "HARDEST ", "DIAMOND ", "CALZONE ", "EMERALD ", "BUTTERY ", "DOLPHIN "],
	"\uE038\uE039\uE03A\uE03B\uE03C ", // YELLOW
	"RED ",
	"BLUE ",
	["BUTTER BRIDGE ", "APPLE ISTHMUS ", "TACO THURSDAY ", "AUTO-SCROLLER "],
	["CHEESE BRIDGE ", "PASTA PLATEAU ", "ASIAGO CHEESE ", "BOUNCING SAWS "],
	["SODA LAKE ", "POP OCEAN ", "POP BATHS ", "DEEP POOL ", "INK SWAMP "],
	["COOKIE MOUNTAIN ", "GREEN HILL ZONE ", "CHEESE PIZZA ", "CHOCOLATE CHIP ", "TACO BELL ", "WALUIGI LAND ", "PRINCESS VALLEY "],
	["FOREST ", "CANOPY ", "JUNGLE "],
	["CHOCOLATE ", "CHEEZCAKE ", "PEPPERONI ", "DELICIOUS ", "EGG SALAD "],
	["CHOCO-GHOST HOUSE ", "HAUNTED MANSION ", "HOUSE OF HORROR ", "HOUSE OF TERROR ", "SCARY BUT TASTY "],
	["SUNKEN GHOST SHIP ", "THE TITANIC ", "2SPOOKY4ME ", "GHOSTS OF YOSHI ", "SMB3 AIRSHIP "],
	["VALLEY ", "BOWSER ", "SUMMIT ", "RIVERS ", "THREAT ", "WOUNDS "],
	["BACK DOOR ", "NO ENTRY ", "GO AWAY ", "LEAVE NOW ", "PISS OFF! ", "BEWARE! ", "SHORTCUT "],
	["FRONT DOOR ", "FIRE EXIT ", "OPEN MOUTH ", "GET READY ", "BOWSER ", "FINAL BOSS ", "ALMOST WON "],
	["GNARLY ", "WACKY ", "CRAZY ", "KOOKY ", "NUTTY "],
	["TUBULAR ", "FUCKYOU ", "(-.-) ", "GETREKT ", "GETGOOD ", "YOULOSE ", "RIP URN "],
	["WAY COOL ", "NOT COOL ", "GLORIOUS ", "STYLISH ", "SUAVE "],
	["HOUSE ", "ABODE ", "PLACE ", "CONDO ", "TOWER "],
	["ISLAND ", "MIRAGE ", "TUNNEL ", "CAVERN ", "BRIDGE ", "GROUND ", "YOGURT ", "CRAYON "],
	["SWITCH PALACE ", "PLAY PLACE ", "PARTY HOUSE ", "BUTTON HOUSE ", "YUMP AREA ", "YUMP HYPE "],
	["CASTLE ", "TEMPLE ", "DOMAIN ", "SPIRE "],
	["PLAINS ", "TUNDRA ", "MEADOW ", "CAVERN ", "BRIDGE "],
	["GHOST HOUSE ", "BOO'S HAUNT ", "GRAVEYARD ", "HEADSTONES "],
	["SECRET ", "TEMPLE ", "SACRED ", "ENIGMA "],
	["DOME ", "ZONE ", "HELL ", "ROOF ", "TIME "],
	["FORTRESS ", "DUNGEON ", "DUNGEONS ", "PANTHEON ", "CAPITAL ", "CENTRE ", "CENTER ", "MARKET "],
	["OF\uE032\uE033\uE034\uE035\uE036\uE037ON ", "OF DISDAIN ", "OF VISIONS ", "HAPPY TIME "], // OF ILLUSION
	["OF BOWSER ", "OF KOOPAS ", "OF SORROW ", "OF CLOUDS ", "OF SPIKES "],
	["ROAD ", "WARP ", "PATH ", "ZONE ", "LINE "],
	["WORLD ", "LEVEL ", "EARTH "],
	["AWESOME ", "SPOOKY ", "STRANGE ", "AMAZING ", "MYSTERY ", "ENGLAND ", "TWITCHY ", "RADICAL "],
	["1", "0"],
	["2", "?"],
	["3", "X"],
	["4", "6"],
	["5", "7"],
	["PALACE", "TEMPLE", "SHRINE", "HOUSE"],
	["AREA", "ZONE", "SPOT", "HILL", "DUDE"],
	["GROOVY", "CRAZY", "DEATH!", "B)", "CANADA"],
	["MONDO", "KINKY", "Kappa", "GG!", "????", "OMG!"],
	["OUTRAGEOUS", "UNNATURAL", "MENTAL", "MADNESS", "TRY NOCAPE", "BibleThump", "NO CASUALS", "YOLO SWAG!", "FABULOUS"],
	["FUNKY", "GREAT", "WOW", "WEIRD", "HELLA", "BINGO"],
	["HOUSE", "ABODE", "PLACE", "CONDO", "TOWER"],
	" ",
];

function randomizeLevelNames(random, rom)
{
	var ndx = 0x21AC5;
	for (var i = 0; i < TITLE_STRINGS.length; ++i)
	{
		var str = TITLE_STRINGS[i];
		if (str instanceof Array)
		{
			str = random.from(TITLE_STRINGS[i]);
			while (str.length < TITLE_STRINGS[i][0].length) str += ' ';
		}
		
		for (var j = 0; j < str.length; ++j, ++ndx)
			rom[ndx] = TITLE_CHARSET[str[j]];
		rom[ndx-1] |= 0x80;
	}
}
