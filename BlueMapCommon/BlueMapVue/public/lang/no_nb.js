export default {
    pageTitle: "BlueMap - {Kart}",
    menu: {
        title: "Meny",
        tooltip: "Meny"
    },
    maps: {
        title: "Kart",
        button: "Kart",
        tooltip: "Kartliste"
    },
    markers: {
        title: "Markører",
        button: "Markører",
        tooltip: "Markørliste",
        marker: "markør | markører",
        markerSet: "markørsett | markørsett",
        searchPlaceholder: "Søk...",
        followPlayerTitle: "Følg spiller"
    },
    settings: {
        title: "Innstillinger",
        button: "Innstillinger"
    },
    goFullscreen: {
        button: "Fullskjerm"
    },
    resetCamera: {
        button: "Tilbakestill kamera",
        tooltip: "Tilbakestill kamera og posisjon"
    },
    updateMap: {
        button: "Oppdater kart",
        tooltip: "Slett rutebuffer"
    },
    lighting: {
        title: "Belysning",
        dayNightSwitch: {
            tooltip: "Dag/natt"
        },
        sunlight: "Sollys",
        ambientLight: "Bakgrunnsbelysning"
    },
    resolution: {
        title: "Oppløsning",
        high: "Høy (SSAA, x2)",
        normal: "Normal (Opprinnelig oppløsning, x1)",
        low: "Lav (Oppskalert, x0.5)"
    },
    freeFlightControls: {
        title: "Friflyvningskontroller",
        mouseSensitivity: "Mussensitivitet",
        invertMouseY: "Snu mus Y"
    },
    renderDistance: {
        title: "Innlastningsavstand",
        hiresLayer: "Høyoppløsningslag",
        lowersLayer: "Lavoppløsningslag",
        loadHiresWhileMoving: "Last inn høyoppløsning under bevegelse",
        off: "Av"
    },
    theme: {
        title: "Tema",
        default: "Standard (System/Nettleser)",
        dark: "Mørk",
        light: "Lys"
    },
    debug: {
        button: "Feilsøk"
    },
    resetAllSettings: {
        button: "Tilbakestill alle innstillinger"
    },
    players: {
        title: "Spillere",
        tooltip: "Spillerliste"
    },
    compass: {
        tooltip: "Kompass / Pek nord"
    },
    screenshot: {
        title: "Skjermbilde",
        button: "Ta skjermbilde",
        clipboard: "Kopier til utklippstavle"
    },
    controls: {
        title: "Visning / Kontroller",
        perspective: {
            button: "Perspektiv",
            tooltip: "Perpektivvisning"
        },
        flatView: {
            button: "Flat",
            tooltip: "Ortografisk / Flatvisning",
        },
        freeFlight: {
            button: "Friflyvning",
            tooltip: "Friflyvning / Tilskuermodus"
        }
    },
    language: {
        title: "Språk",
    },
    blockTooltip: {
        block: "Blokk",
        position: "Posisjon",
        chunk: "Bit",
        region: {
            region: "Region",
            file: "Fil"
        },
        light: {
            light: "Lys",
            sun: "Sol",
            block: "Blokk",
        }
    },
    info: {
        title: "Informasjon",
        button: "Informasjon",
        content: `
<img src="assets/logo.png" style="display: block; width: 40%; margin: 3em auto; border-radius: 50%">
<p>
	<h2>Mouse-Controls:</h2>
	<table>
		<tr><th>move</th><td><kbd>left-click</kbd> + drag</td></tr>
		<tr><th>zoom</th><td><kbd>mousewheel</kbd> (scroll)</td></tr>
		<tr><th>rotate / tilt</th><td><kbd>right-click</kbd> + drag</td></tr>
	</table>
</p>
<p>
	<h2>Keyboard-Controls:</h2>
	<table>
		<tr><th>move</th><td><kbd>wasd</kbd> / <kbd>arrow-keys</kbd></td></tr>
		<tr><th>zoom</th><td>Numpad: <kbd>+</kbd>/<kbd>-</kbd> or <kbd>Ins</kbd>/<kbd>Home</kbd></td></tr>
		<tr><th>rotate / tilt</th><td><kbd>Left-Alt</kbd> + <kbd>wasd</kbd> / <kbd>arrow-keys</kbd> or <kbd>Delete</kbd>/<kbd>End</kbd>/<kbd>Page Up</kbd>/<kbd>Page Down</kbd></td></tr>
	</table>
</p>
<p>
	<h2>Touch-Controls:</h2>
	<table>
		<tr><th>move</th><td>touch + drag</td></tr>
		<tr><th>zoom</th><td>touch with two fingers + pinch</td></tr>
		<tr><th>rotate / tilt</th><td>touch with two fingers + rotate / move up/down</td></tr>
	</table>
</p>
<br><hr>
<p>
	This map has been generated with &#9829; using <a href="https://bluecolo.red/bluemap">BlueMap</a>.
</p>
		`
    }
}
