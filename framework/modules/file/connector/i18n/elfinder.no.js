/**
 * Norwegian translation
 * @author Stian Jacobsen <stian@promonorge.no>
 * @version 2012-07-03
 */
if (elFinder && elFinder.prototype && typeof(elFinder.prototype.i18) == 'object') {
	elFinder.prototype.i18.no = {
		translator : 'Stian Jacobsen &lt;stian@promonorge.no&gt;',
		language   : 'Norwegian Bokmål',
		direction  : 'ltr',
		messages   : {
			
			/********************************** errors **********************************/
			'error'                : 'Feil',
			'errUnknown'           : 'Ukjent feil.',
			'errUnknownCmd'        : 'Ukjent kommando.',
			'errJqui'              : 'Ugyldig jQuery UI konfigurasjon. Selectable, draggable og droppable komponentene må være inkludert.',
			'errNode'              : 'elFinder påkrever at DOM Elementer kan opprettes.',
			'errURL'               : 'Ugyldig elFinder konfigurasjon! URL-valget er ikke satt.',
			'errAccess'            : 'Ingen adgang.',
			'errConnect'           : 'Kunne ikke koble til.',
			'errAbort'             : 'Tilkoblingen avbrutt.',
			'errTimeout'           : 'Tilkoblingen tidsavbrudd.',
			'errNotFound'          : 'Backend ble ikke funnet',
			'errResponse'          : 'Ugyldig backend respons.',
			'errConf'              : 'Ugyldig backend konfigurasjon.',
			'errJSON'              : 'PHP JSON modul er ikke installert.',
			'errNoVolumes'         : 'Lesbar volum er ikke tilgjennelig.',
			'errCmdParams'         : 'Ugyldig parameter for kommando "$1".',
			'errDataNotJSON'       : 'Innhold er ikke JSON.',
			'errDataEmpty'         : 'Innholdet er tomt.',
			'errCmdReq'            : 'Backend spørringen påkrever kommando.',
			'errOpen'              : 'Kunne ikke åpne "$1".',
			'errNotFolder'         : 'Objektet er ikke en mappe.',
			'errNotFile'           : 'Objektet er ikke en fil.',
			'errRead'              : 'Kunne ikke lese "$1".',
			'errWrite'             : 'Kunne ikke skrive til "$1".',
			'errPerm'              : 'Du har ikke rettigheter.',
			'errLocked'            : '"$1" er låst og kan ikke flyttes, slettes eller endres',
			'errExists'            : 'Filen "$1" finnes allerede.',
			'errInvName'           : 'Ugyldig filnavn.',
			'errFolderNotFound'    : 'Mappen finnes ikke.',
			'errFileNotFound'      : 'Filen finnes ikke.',
			'errTrgFolderNotFound' : 'Målmappen "$1" ble ikke funnet.',
			'errPopup'             : 'Nettleseren din blokkerte et pop-up vindu. For å åpne filen må du aktivere pop-up i din nettlesers innstillinger.',
			'errMkdir'             : 'Kunne ikke opprette mappen "$1".',
			'errMkfile'            : 'Kunne ikke opprette filen "$1".',
			'errRename'            : 'Kunne ikke gi nytt navn til "$1".',
			'errCopyFrom'          : 'Kopiere filer fra "$1" er ikke tillatt.',
			'errCopyTo'            : 'Kopiere filer til "$1" er ikke tillatt.',
			'errUploadCommon'      : 'Feil under opplasting.',
			'errUpload'            : 'Kunne ikke laste opp "$1".',
			'errUploadNoFiles'     : 'Ingen filer funnet til opplasting.',
			'errMaxSize'           : 'Innholdet overgår maksimum tillatt størrelse.',
			'errFileMaxSize'       : 'Filen vergår maksimum tillatt størrelse.',
			'errUploadMime'        : 'Filtypen ikke tillatt.',
			'errUploadTransfer'    : '"$1" overførings feil.', 
			'errSave'              : 'Kunne ikke lagre "$1".',
			'errCopy'              : 'Kunne ikke kopiere "$1".',
			'errMove'              : 'Kunne ikke flytte "$1".',
			'errCopyInItself'      : 'Kunne ikke kopiere "$1" til seg selv.',
			'errRm'                : 'Kunne ikke slette "$1".',
			'errExtract'           : 'Kunne ikke pakke ut filer fra "$1".',
			'errArchive'           : 'Kunne ikke opprette arkiv.',
			'errArcType'           : 'akriv-typen er ikke støttet.',
			'errNoArchive'         : 'Filen er ikke et arkiv eller et arkiv som ikke er støttet.',
			'errCmdNoSupport'      : 'Backend støtter ikke denne kommandoen.',
            'errLinks'             : 'Page/Module Selector is only available from within a WYSIWYG Editor.',

			/******************************* commands names ********************************/
			'cmdarchive'   : 'Opprett arkiv',
			'cmdback'      : 'Tilbake',
			'cmdcopy'      : 'Kopier',
			'cmdcut'       : 'Klipp ut',
			'cmddownload'  : 'Last ned',
			'cmdduplicate' : 'Dupliser',
			'cmdedit'      : 'Rediger fil',
			'cmdextract'   : 'Pakk ut filer fra arkiv',
			'cmdforward'   : 'Frem',
			'cmdgetfile'   : 'Velg filer',
			'cmdhelp'      : 'Om',
			'cmdhome'      : 'Hjem',
			'cmdinfo'      : 'Vis info',
			'cmdmkdir'     : 'Ny mappe',
			'cmdmkfile'    : 'Ny tekst-fil',
			'cmdopen'      : 'Åpne',
			'cmdpaste'     : 'Lim inn',
			'cmdquicklook' : 'Forhåndsvis',
			'cmdreload'    : 'Last inn på nytt',
			'cmdrename'    : 'Gi nytt navn',
			'cmdrm'        : 'Slett',
			'cmdsearch'    : 'Find filer',
			'cmdup'        : 'Opp et nivå',
			'cmdupload'    : 'Last opp filer',
			'cmdview'      : 'Vis',
            'cmdpixlr'     : 'Edit on Pixlr',
            'cmdlinks'     : 'Switch to Page/Module Selector',

			/*********************************** buttons ***********************************/ 
			'btnClose'  : 'Lukk',
			'btnSave'   : 'Lagre',
			'btnRm'     : 'Slett',
			'btnCancel' : 'Avbryt',
			'btnNo'     : 'Nei',
			'btnYes'    : 'Ja',
			
			/******************************** notifications ********************************/
			'ntfopen'     : 'Åpne mappe',
			'ntffile'     : 'Åpne fil',
			'ntfreload'   : 'Last inn mappen på nytt',
			'ntfmkdir'    : 'Oppretter mappe',
			'ntfmkfile'   : 'Oppretter filer',
			'ntfrm'       : 'Sletter filer',
			'ntfcopy'     : 'Kopierer filer',
			'ntfmove'     : 'Flytter filer',
			'ntfprepare'  : 'Gjør klar til kopiering av filer',
			'ntfrename'   : 'Gir nytt navn til filer',
			'ntfupload'   : 'Laster opp filer',
			'ntfdownload' : 'Laster ned filer',
			'ntfsave'     : 'Lagrer filer',
			'ntfarchive'  : 'Oppretter arkiv',
			'ntfextract'  : 'Pakker ut filer fra arkiv',
			'ntfsearch'   : 'Søker i filer',
			'ntfsmth'     : 'Gjør noe... >_<',
			
			/************************************ dates **********************************/
			'dateUnknown' : 'Ukjent',
			'Today'       : 'I dag',
			'Yesterday'   : 'I går',
			'Jan'         : 'Jan',
			'Feb'         : 'Feb',
			'Mar'         : 'Mar',
			'Apr'         : 'Apr',
			'May'         : 'Mai',
			'Jun'         : 'Jun',
			'Jul'         : 'Jul',
			'Aug'         : 'Aug',
			'Sep'         : 'Sep',
			'Oct'         : 'Okt',
			'Nov'         : 'Nov',
			'Dec'         : 'Des',

			/********************************** messages **********************************/
			'confirmReq'      : 'Bekreftelse nødvendig',
			'confirmRm'       : 'Er du sikker på at du ønsker å slette filene?',
			'confirmRepl'     : 'Erstatt fil?',
			'apllyAll'        : 'Apply to all',
			'name'            : 'Navn',
			'size'            : 'Størrelse',
			'perms'           : 'Rettigheter',
			'modify'          : 'Endret',
			'kind'            : 'Type',
			'read'            : 'les',
			'write'           : 'skriv',
			'noaccess'        : 'ingen adgang',
			'and'             : 'og',
			'unknown'         : 'ukjent',
			'selectall'       : 'Velg alle filene',
			'selectfiles'     : 'Velg fil(er)',
			'selectffile'     : 'Velg første fil',
			'selectlfile'     : 'Velg siste fil',
			'viewlist'        : 'Listevisning',
			'viewicons'       : 'Ikoner',
			'places'          : 'Områder',
			'calc'            : 'Beregn', 
			'path'            : 'Bane',
			'aliasfor'        : 'Alias for',
			'locked'          : 'Låst',
			'dim'             : 'Størrelser',
			'files'           : 'Filer',
			'folders'         : 'Mapper',
			'items'           : 'objekter',
			'yes'             : 'ja',
			'no'              : 'nei',
			'link'            : 'Link',
			'searcresult'     : 'Søkeresultater',  
			'selected'        : 'valgte filer',
			'about'           : 'Om',
			'shortcuts'       : 'Snarveier',
			'help'            : 'Hjelp',
			'webfm'           : 'Web-filbehandler',
			'ver'             : 'Versjon',
			'protocolver'     : 'protokol versjon',
			'homepage'        : 'Project home',
			'docs'            : 'dokumentasjon',
			'github'          : 'Fork us on Github',
			'twitter'         : 'Follow us on twitter',
			'facebook'        : 'Join us on facebook',
			'team'            : 'Team',
			'chiefdev'        : 'chief developer',
			'developer'       : 'developer',
			'contributor'     : 'contributor',
			'maintainer'      : 'maintainer',
			'translator'      : 'translator',
			'icons'           : 'Ikoner',
			'dontforget'      : 'and don\'t forget to bring a towel',
			'shortcutsof'     : 'Snarveier avslått',
			'dropFiles'       : 'Slipp filer her',
			'or'              : 'eller',
			'selectForUpload' : 'Velg filer til opplasting',
			'moveFiles'       : 'Flytt filer',
			'copyFiles'       : 'Kopier filer',
			
			/********************************** mimetypes **********************************/
			'kindUnknown'     : 'Ukjent',
			'kindFolder'      : 'Mappe',
			'kindAlias'       : 'Snarvei',
			'kindAliasBroken' : 'Ugyldig snarvei',
			// applications
			'kindApp'         : 'Programfil',
			'kindPostscript'  : 'Postscript dokument',
			'kindMsOffice'    : 'Microsoft Office dokument',
			'kindMsWord'      : 'Microsoft Word dokument',
			'kindMsExcel'     : 'Microsoft Excel dokument',
			'kindMsPP'        : 'Microsoft Powerpoint presentation',
			'kindOO'          : 'Open Office dokument',
			'kindAppFlash'    : 'Flash',
			'kindPDF'         : 'Portabelt dokument (PDF)',
			'kindTorrent'     : 'Bittorrent file',
			'kind7z'          : '7z arkiv',
			'kindTAR'         : 'TAR arkiv',
			'kindGZIP'        : 'GZIP arkiv',
			'kindBZIP'        : 'BZIP arkiv',
			'kindZIP'         : 'ZIP arkiv',
			'kindRAR'         : 'RAR ar',
			'kindJAR'         : 'Java JAR file',
			'kindTTF'         : 'True Type font',
			'kindOTF'         : 'Open Type font',
			'kindRPM'         : 'RPM package',
			// texts
			'kindText'        : 'Tekst dokument',
			'kindTextPlain'   : 'Plain text',
			'kindPHP'         : 'PHP kilde',
			'kindCSS'         : 'Cascading style sheet',
			'kindHTML'        : 'HTML dokument',
			'kindJS'          : 'Javascript',
			'kindRTF'         : 'Rikt Tekst Format',
			'kindC'           : 'C kilde',
			'kindCHeader'     : 'C header kilde',
			'kindCPP'         : 'C++ kilde',
			'kindCPPHeader'   : 'C++ header kilde',
			'kindShell'       : 'Unix shell script',
			'kindPython'      : 'Python kilde',
			'kindJava'        : 'Java kilde',
			'kindRuby'        : 'Ruby kilde',
			'kindPerl'        : 'Perl script',
			'kindSQL'         : 'SQL skilde',
			'kindXML'         : 'XML dokument',
			'kindAWK'         : 'AWK kilde',
			'kindCSV'         : 'Comma separated values',
			'kindDOCBOOK'     : 'Docbook XML dokument',
			// Images
			'kindimage'       : 'Bilde',
			'kindBMP'         : 'BMP bilde',
			'kindJPEG'        : 'JPEG bilde',
			'kindGIF'         : 'GIF bilde',
			'kindPNG'         : 'PNG bilde',
			'kindTIFF'        : 'TIFF bilde',
			'kindTGA'         : 'TGA bilde',
			'kindPSD'         : 'Adobe Photoshop bilde',
			'kindXBITMAP'     : 'X bitmap bilde',
			'kindPXM'         : 'Pixelmator bilde',
			// media
			'kindAudio'       : 'Audio media',
			'kindAudioMPEG'   : 'MPEG audio',
			'kindAudioMPEG4'  : 'MPEG-4 audio',
			'kindAudioMIDI'   : 'MIDI audio',
			'kindAudioOGG'    : 'Ogg Vorbis audio',
			'kindAudioWAV'    : 'WAV audio',
			'AudioPlaylist'   : 'MP3 spilleliste',
			'kindVideo'       : 'Video media',
			'kindVideoDV'     : 'DV film',
			'kindVideoMPEG'   : 'MPEG film',
			'kindVideoMPEG4'  : 'MPEG-4 film',
			'kindVideoAVI'    : 'AVI film',
			'kindVideoMOV'    : 'Quick Time film',
			'kindVideoWM'     : 'Windows Media film',
			'kindVideoFlash'  : 'Flash film',
			'kindVideoMKV'    : 'Matroska film',
			'kindVideoOGG'    : 'Ogg film'
		}
	}
}