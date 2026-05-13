import { ViteReactSSG } from "vite-react-ssg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/data/blogPosts.js
var blogPosts = [
	{
		slug: "taxi-groningen-schiphol-prijs-2026",
		title: "Wat kost een taxi van Groningen naar Schiphol in 2026?",
		date: "2026-05-12",
		category: "Prijzen",
		readTime: "5 min",
		excerpt: "Alles wat je moet weten over de prijs van een taxi van Groningen naar Schiphol — vaste tarieven, reistijd en handige tips voor 2026.",
		featuredImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&fit=crop",
		featuredImageAlt: "Amsterdam Airport Schiphol taxi transfer vanuit Groningen",
		author: "Team TaxiAmro",
		keywords: [
			"taxi groningen schiphol",
			"prijs taxi schiphol",
			"luchthavenvervoer groningen"
		],
		content: `
      <p>Plan je een vlucht vanaf Schiphol en zoek je een betrouwbare taxi vanuit Groningen? Bel direct <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor een vaste prijs. In dit artikel leggen we precies uit wat een taxi van Groningen naar Schiphol kost, hoe lang de rit duurt en waarom een vooraf geboekte taxi vaak slimmer is dan zelf rijden.</p>

      <h2>Vaste prijs versus straattaxi</h2>
      <p>Bij TaxiAmro werken we voor luchthavenritten met <strong>vaste vooraf afgesproken tarieven</strong>. Geen verrassingen achteraf, geen meter die doortikt in de file. Je weet vooraf precies wat je betaalt.</p>
      <p>Een straattaxi van Groningen naar Schiphol rekent op basis van de wettelijke maximumtarieven (starttarief + kilometertarief + tijdtarief). Dat kan flink oplopen, zeker bij file op de A28 of A6.</p>

      <h2>Hoe lang duurt de rit?</h2>
      <p>De afstand Groningen — Schiphol is ongeveer <strong>200 km</strong>. Onder normale omstandigheden ben je in <strong>circa 2 uur en 15 minuten</strong> op de luchthaven. Wij adviseren altijd:</p>
      <ul>
        <li><strong>3 uur</strong> voor binnenlandse vluchten</li>
        <li><strong>3,5 uur</strong> voor Europese vluchten</li>
        <li><strong>4 uur</strong> voor intercontinentale vluchten</li>
      </ul>

      <h2>Waarom een taxi in plaats van zelf rijden?</h2>
      <ol>
        <li><strong>Geen parkeerkosten</strong> op Schiphol (al snel €30+ per dag)</li>
        <li><strong>Geen stress</strong> in de file of bij verkeerd geparkeerd staan</li>
        <li><strong>Comfortabel</strong> in onze luxe Hyundai Nexo — 100% elektrisch</li>
        <li><strong>24/7 beschikbaar</strong> — ook voor die vroege ochtendvlucht om 5:00</li>
        <li><strong>Vaste prijs</strong> vooraf bekend</li>
      </ol>

      <h2>Welke andere luchthavens rijden we?</h2>
      <p>Naast Schiphol verzorgen wij ook luchthavenvervoer naar Eindhoven Airport, Groningen Airport Eelde, Bremen Airport en Düsseldorf Airport.</p>

      <h2>Veelgestelde vragen</h2>
      <p><strong>Hoe vroeg kan ik geboekt worden voor een ochtendvlucht?</strong><br/>24/7 — ook om 3:00 's nachts. Wij zijn altijd beschikbaar.</p>
      <p><strong>Wat als mijn vlucht vertraagd is?</strong><br/>Bij ophaalritten vanaf Schiphol monitoren wij je vluchtnummer en passen de tijd aan. De eerste 60 minuten wachttijd na landing is gratis.</p>
      <p><strong>Kan ik per pin betalen?</strong><br/>Ja, je kunt contant, per pin of via Tikkie/overschrijving betalen.</p>

      <p>Voor meer info over vervoer op Schiphol check de <a href="https://www.schiphol.nl/nl/vervoer/" target="_blank" rel="noopener noreferrer">officiële Schiphol website</a>.</p>
    `
	},
	{
		slug: "taxi-eemshaven-haven-cruise",
		title: "Taxi naar Eemshaven: havenvervoer, cruise en ploegendienst",
		date: "2026-05-12",
		category: "Eemshaven",
		readTime: "4 min",
		excerpt: "Alles over taxivervoer van en naar Eemshaven — voor havenwerkers, cruisepassagiers en zakelijk vervoer. 24/7 beschikbaar.",
		featuredImage: "/eemshaven.png",
		featuredImageAlt: "Beatrixhaven Eemshaven taxi vervoer havenarbeiders cruise",
		author: "Team TaxiAmro",
		keywords: [
			"taxi eemshaven",
			"cruise eemshaven taxi",
			"havenvervoer noord-nederland"
		],
		content: `
      <p>Eemshaven is een van de belangrijkste havens in Noord-Nederland. Werknemers van offshore-bedrijven, datacenters en de cruise-terminal hebben dagelijks vervoer nodig — vaak buiten reguliere openbaar vervoer-tijden. TaxiAmro rijdt <strong>24/7</strong> van en naar Eemshaven. Bel direct <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor een vaste prijs.</p>

      <h2>Voor wie rijden wij naar Eemshaven?</h2>
      <h3>Havenwerkers en ploegendienst</h3>
      <p>Werk je in de haven, op een schip of bij een van de offshore-bedrijven? Wij verzorgen vroege ochtendritten (vanaf 04:00) en late avondritten. Vaste klanten krijgen voorrang en kunnen rekenen op vaste prijzen.</p>

      <h3>Cruisepassagiers</h3>
      <p>Embarkeer je op een cruise vanuit Eemshaven Cruise Terminal? Wij rijden je rechtstreeks naar de juiste terminal met je bagage. Wij weten precies waar je moet zijn en helpen met je koffers.</p>

      <h3>Zakelijk vervoer</h3>
      <p>Voor management, klanten of leveranciers van bedrijven in Eemshaven bieden wij comfortabel zakelijk vervoer met facturering op rekening.</p>

      <h2>Vanuit welke plaatsen rijden wij?</h2>
      <ul>
        <li>Groningen → Eemshaven (~35 min)</li>
        <li>Delfzijl → Eemshaven (~20 min)</li>
        <li>Assen → Eemshaven (~50 min)</li>
        <li>Leeuwarden → Eemshaven (~70 min)</li>
        <li>Schiphol → Eemshaven (~2u 30min)</li>
      </ul>

      <h2>Waarom TaxiAmro?</h2>
      <ul>
        <li>✅ <strong>24/7 bereikbaar</strong> — ook bij nachtploegen</li>
        <li>✅ <strong>Vaste tarieven</strong> — geen verrassingen</li>
        <li>✅ <strong>Hyundai Nexo</strong> — 100% elektrisch, stil en comfortabel</li>
        <li>✅ <strong>Bekende route</strong> — wij rijden dagelijks Eemshaven</li>
        <li>✅ <strong>Plaats voor bagage</strong> — ideaal voor cruisepassagiers</li>
      </ul>

      <h2>Veelgestelde vragen</h2>
      <p><strong>Rijden jullie ook midden in de nacht?</strong><br/>Ja, 24 uur per dag, 7 dagen per week. Ook op feestdagen.</p>
      <p><strong>Kan ik een vaste afspraak maken voor mijn ploegendienst?</strong><br/>Absoluut. Wij maken graag een vaste afspraak met vaste prijs voor terugkerende ritten.</p>

      <p>Voor cruise- en havenschema's check de <a href="https://www.groningen-seaports.com/" target="_blank" rel="noopener noreferrer">Groningen Seaports website</a>.</p>
    `
	},
	{
		slug: "waarom-waterstof-taxi-hyundai-nexo",
		title: "Waarom een waterstof-taxi? De Hyundai Nexo uitgelegd",
		date: "2026-05-12",
		category: "Tips",
		readTime: "4 min",
		excerpt: "Wij rijden 100% elektrisch op waterstof met de Hyundai Nexo. Ontdek waarom dit beter is voor jou, het milieu en de regio.",
		featuredImage: "/nexo-exterior.webp",
		featuredImageAlt: "Hyundai Nexo waterstof taxi TaxiAmro Groningen 100% elektrisch",
		author: "Team TaxiAmro",
		keywords: [
			"waterstof taxi",
			"hyundai nexo taxi",
			"elektrische taxi groningen",
			"duurzaam vervoer"
		],
		content: `
      <p>Bij TaxiAmro rijden wij in een <strong>Hyundai Nexo</strong> — een 100% elektrische auto die rijdt op waterstof. Geen uitlaatgassen, geen lawaai, alleen waterdamp uit de uitlaat. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor een schone, stille rit.</p>

      <h2>Wat is een waterstofauto?</h2>
      <p>Een waterstofauto is een elektrische auto die zijn eigen stroom opwekt via een <strong>brandstofcel</strong>. Waterstof reageert met zuurstof uit de lucht, en het enige bijproduct is zuiver water. Geen CO₂, geen fijnstof, geen NOx.</p>
      <p>De voordelen ten opzichte van een gewone elektrische auto:</p>
      <ul>
        <li><strong>Sneller tanken</strong> (3-5 minuten vs uren laden)</li>
        <li><strong>Grotere actieradius</strong> (~650 km op één tank)</li>
        <li><strong>Geen rekening houden met laadpaal-bezetting</strong></li>
      </ul>

      <h2>Wat merk jij als passagier?</h2>
      <h3>1. Stil en comfortabel</h3>
      <p>Geen motor die brult. Je kunt rustig telefoneren, werken of slapen tijdens je rit.</p>
      <h3>2. Soepel rijden</h3>
      <p>Elektrische motoren leveren direct vermogen — vloeiende acceleratie zonder geschakel.</p>
      <h3>3. Nul uitstoot</h3>
      <p>Je weet dat je rit <strong>nul uitstoot</strong> veroorzaakt. Goed voor je geweten én het klimaat.</p>

      <h2>Waarom rijden niet meer taxi's op waterstof?</h2>
      <p>Waterstofauto's zijn duur, en het tanknetwerk is nog beperkt. In Noord-Nederland hebben wij gelukkig toegang tot een waterstofvulpunt, waardoor wij een van de weinige taxi-bedrijven in de regio zijn met 100% emissievrij vervoer.</p>

      <h2>Veelgestelde vragen</h2>
      <p><strong>Hoe veilig is een waterstoftaxi?</strong><br/>Volstrekt veilig. De Hyundai Nexo heeft een 5-sterren Euro NCAP veiligheidsbeoordeling.</p>
      <p><strong>Is het duurder dan een gewone taxi?</strong><br/>Nee. Wij rekenen dezelfde tarieven maar je krijgt duurzaam en comfortabel vervoer.</p>

      <p>Meer weten over waterstof? Lees op de <a href="https://www.rijksoverheid.nl/onderwerpen/duurzame-energie/waterstof" target="_blank" rel="noopener noreferrer">Rijksoverheid pagina over waterstof</a>.</p>
    `
	},
	{
		slug: "taxi-eelde-airport-vroege-ochtendvlucht",
		title: "Vroege vlucht vanaf Eelde Airport? Zo plan je je taxi",
		date: "2026-05-12",
		category: "Luchthaven",
		readTime: "4 min",
		excerpt: "Vlieg je vroeg vanaf Groningen Airport Eelde? Lees onze tips voor stressvrij vervoer en boek direct je taxi.",
		featuredImage: "https://images.unsplash.com/photo-1483450388369-9ed95738483c?w=1200&q=80&fit=crop",
		featuredImageAlt: "Groningen Airport Eelde vroege ochtendvlucht taxi",
		author: "Team TaxiAmro",
		keywords: [
			"taxi eelde airport",
			"groningen airport taxi",
			"vroege vlucht eelde"
		],
		content: `
      <p>Vertrek je vroeg in de ochtend vanaf <strong>Groningen Airport Eelde</strong>? Dan wil je geen risico nemen met OV of zelf rijden. TaxiAmro brengt je 24/7 stipt op tijd. Bel direct <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor een vaste prijs.</p>

      <h2>Waarom geen openbaar vervoer voor vroege vluchten?</h2>
      <p>Eelde Airport ligt buiten Groningen, in Drenthe. De eerste bus rijdt vaak pas vanaf 06:00 — te laat voor de meeste internationale ochtendvluchten. Met koffers, in de kou, overstappen: geen aanrader om 04:30 's nachts.</p>

      <h2>Hoe laat moet ik op Eelde aankomen?</h2>
      <ul>
        <li><strong>Schengen vluchten:</strong> 1,5 uur vooraf inchecken</li>
        <li><strong>Internationale vluchten:</strong> 2 uur vooraf</li>
        <li><strong>Met bagage incheck:</strong> sluiting check-in 40 min voor vertrek</li>
      </ul>

      <h2>Plan voorbeeld: vlucht vertrekt om 06:30</h2>
      <table>
        <tr><th>Tijd</th><th>Actie</th></tr>
        <tr><td>04:00</td><td>Wakker worden</td></tr>
        <tr><td>04:30</td><td>Taxi haalt je op</td></tr>
        <tr><td>05:00</td><td>Aankomst Eelde</td></tr>
        <tr><td>05:30</td><td>Check-in klaar</td></tr>
        <tr><td>06:30</td><td>Vlucht vertrekt ✈️</td></tr>
      </table>

      <h2>Vanaf welke plaatsen rijden wij naar Eelde?</h2>
      <ul>
        <li>Groningen → Eelde (15 min)</li>
        <li>Assen → Eelde (20 min)</li>
        <li>Drachten → Eelde (45 min)</li>
        <li>Leeuwarden → Eelde (55 min)</li>
        <li>Emmen → Eelde (50 min)</li>
      </ul>

      <h2>Tips voor stressvrije ochtendvlucht</h2>
      <ol>
        <li><strong>Boek minimaal 24 uur vooraf</strong> voor garantie</li>
        <li><strong>Zet wekker 30 min eerder</strong> dan je nodig denkt</li>
        <li><strong>Bagage de avond ervoor klaar</strong> zetten</li>
        <li><strong>Online inchecken</strong> scheelt 20 min op de luchthaven</li>
        <li><strong>Vluchtnummer doorgeven</strong> zodat wij wijzigingen kunnen volgen</li>
      </ol>

      <h2>Veelgestelde vragen</h2>
      <p><strong>Komen jullie ook helpen met de koffers?</strong><br/>Vanzelfsprekend. Onze chauffeur helpt met inladen en uitladen.</p>
      <p><strong>Kan ik 2 dagen vooraf boeken?</strong><br/>Ja, en zelfs maanden vooraf. Hoe eerder hoe beter voor garantie.</p>

      <p>Vluchttijden en info op <a href="https://www.groningenairport.nl/" target="_blank" rel="noopener noreferrer">Groningen Airport Eelde website</a>.</p>
    `
	},
	{
		slug: "taxi-emden-leer-duitsland-grensoverschrijdend",
		title: "Taxi naar Emden en Leer: grensoverschrijdend vervoer naar Duitsland",
		date: "2026-05-12",
		category: "Duitsland",
		readTime: "5 min",
		excerpt: "Reis je naar Emden, Leer of Bremen vanuit Noord-Nederland? Onze grensoverschrijdende taxidienst brengt je comfortabel over de grens.",
		featuredImage: "/duitsland.png",
		featuredImageAlt: "Grens Bundesrepublik Deutschland grensoverschrijdend taxivervoer Emden Leer",
		author: "Team TaxiAmro",
		keywords: [
			"taxi emden",
			"taxi leer duitsland",
			"grensoverschrijdend vervoer",
			"taxi naar duitsland"
		],
		content: `
      <p>Heb je een afspraak in <strong>Emden</strong>, <strong>Leer</strong> of een andere stad net over de grens in Duitsland? TaxiAmro biedt comfortabel grensoverschrijdend vervoer vanuit heel Noord-Nederland. Bel direct <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor een vaste prijs zonder verrassingen.</p>

      <h2>Waarom een Nederlandse taxi voor Duitsland?</h2>
      <ul>
        <li><strong>Geen taalbarrière</strong> — onze chauffeur spreekt Nederlands</li>
        <li><strong>Bekende prijs vooraf</strong> — geen verrassingen</li>
        <li><strong>Geen huurauto stress</strong> — geen buitenlandse boetes</li>
        <li><strong>Eén aanspreekpunt</strong> voor zowel heen als terug</li>
        <li><strong>Bekend met de route</strong> — Eemshaven, Nieuweschans, grensovergang</li>
      </ul>

      <h2>Naar welke Duitse plaatsen rijden wij?</h2>
      <ul>
        <li><strong>Emden</strong> — havenstad, cruise-terminal, VW-fabriek (~1 uur vanaf Groningen)</li>
        <li><strong>Leer</strong> — historisch centrum, Meyer Werft (~1u 15min)</li>
        <li><strong>Bremen</strong> — luchthaven en stad (~2 uur)</li>
        <li><strong>Aurich</strong> — Ostfriesland regio</li>
        <li><strong>Norden</strong> en Noordzee kustplaatsen</li>
      </ul>

      <h2>Veelgemaakte ritten</h2>
      <h3>Zakelijk vervoer naar VW Emden</h3>
      <p>Veel klanten reizen voor vergaderingen of inspecties naar de Volkswagen-fabriek in Emden. Wij rijden je rechtstreeks naar het bedrijventerrein, wachten waar nodig en brengen je terug.</p>
      <h3>Cruise vanuit Emden</h3>
      <p>Bezoekers van AIDA cruises vanuit Emden Emspier worden door ons opgehaald van hun thuisadres in Nederland.</p>
      <h3>Bremen Airport</h3>
      <p>Een goedkoper alternatief voor Schiphol als de vlucht via Bremen vertrekt. Wij rijden je rechtstreeks naar de terminal.</p>

      <h2>Vanaf welke plaatsen rijden wij grensoverschrijdend?</h2>
      <ul>
        <li>Groningen → Emden (~1u)</li>
        <li>Delfzijl → Emden (~45 min)</li>
        <li>Eemshaven → Emden (~1u)</li>
        <li>Winschoten → Leer (~30 min)</li>
        <li>Assen → Emden (~1u 15min)</li>
      </ul>

      <h2>Veelgestelde vragen</h2>
      <p><strong>Mag een Nederlandse taxi in Duitsland rijden?</strong><br/>Ja, mits met geldige taxivergunning en juiste verzekering. Wij voldoen aan alle voorschriften.</p>
      <p><strong>Spreekt de chauffeur Duits?</strong><br/>Onze chauffeurs spreken voldoende Duits om je te helpen op je bestemming.</p>
      <p><strong>Is het duurder dan een Duitse taxi?</strong><br/>Vaak juist goedkoper vanwege onze vaste tarieven.</p>

      <p>Meer info bij de <a href="https://www.anwb.nl/auto/rijden-in-duitsland" target="_blank" rel="noopener noreferrer">ANWB over rijden in Duitsland</a>.</p>
    `
	},
	,
	{
		slug: "taxi-leeuwarden-schiphol-prijs",
		title: "Taxi van Leeuwarden naar Schiphol: prijs en reistijd",
		date: "2026-05-13",
		category: "Prijzen",
		readTime: "4 min",
		excerpt: "Wat kost een taxi van Leeuwarden naar Schiphol en hoe lang duurt de rit? Bekijk onze vaste tarieven en boek direct.",
		featuredImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&fit=crop",
		featuredImageAlt: "Taxi Leeuwarden Schiphol luchthavenvervoer Friesland",
		author: "Team TaxiAmro",
		keywords: [
			"taxi leeuwarden schiphol",
			"vervoer leeuwarden schiphol",
			"luchthavenvervoer friesland"
		],
		content: `
      <p>Vlieg je vanaf Schiphol en woon je in Leeuwarden of omstreken? Met TaxiAmro reis je comfortabel en zonder zorgen rechtstreeks naar de luchthaven. Bel direct <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor een vaste prijs.</p>

      <h2>Reistijd Leeuwarden — Schiphol</h2>
      <p>De afstand bedraagt ongeveer <strong>150 km</strong> via de A7 en A6. Onder normale omstandigheden ben je in <strong>2 uur</strong> op Schiphol. Wij adviseren tijdens spits 30 minuten extra in te plannen.</p>

      <h2>Vaste prijs versus meter</h2>
      <p>Voor luchthavenritten hanteren wij een <strong>vooraf afgesproken vaste prijs</strong>. Geen meter die in de file doorrekent, geen verrassing achteraf.</p>

      <h2>Vanaf welke plaatsen in Friesland rijden wij?</h2>
      <ul>
        <li>Leeuwarden — centrum en omliggende dorpen</li>
        <li>Drachten</li>
        <li>Heerenveen</li>
        <li>Sneek, Bolsward, Joure</li>
        <li>Dokkum, Lemmer, Stiens</li>
      </ul>

      <h2>Waarom kiezen voor een taxi?</h2>
      <ol>
        <li>Geen dure Schiphol-parkeerkosten (€30+ per dag)</li>
        <li>Comfortabel reizen in onze waterstof Hyundai Nexo</li>
        <li>24/7 beschikbaar — ook voor 5:00 ochtendvluchten</li>
        <li>Wij volgen je vlucht en passen aan bij vertraging</li>
      </ol>

      <h2>FAQ</h2>
      <p><strong>Hoe vroeg moet ik boeken?</strong><br/>Minimaal 24 uur vooraf adviseren wij. Voor zekerheid bij drukke periodes: 1 week vooraf.</p>
      <p><strong>Hoeveel passagiers passen er?</strong><br/>4 passagiers + ruim bagage in de Hyundai Nexo.</p>
      <p><strong>Wat als ik om 4:00 's ochtends moet vertrekken?</strong><br/>Geen probleem — wij rijden 24/7.</p>

      <p>Voor actuele Schiphol-info: <a href="https://www.schiphol.nl/" target="_blank" rel="noopener noreferrer">Schiphol.nl</a>.</p>
    `
	},
	{
		slug: "studententaxi-groningen-nachtleven-veilig",
		title: "Studententaxi Groningen: veilig thuis na het uitgaan",
		date: "2026-05-14",
		category: "Tips",
		readTime: "3 min",
		excerpt: "Na een nacht uit in de Poelestraat of Peperstraat? TaxiAmro brengt je veilig en betaalbaar thuis. 24/7 beschikbaar in Groningen.",
		featuredImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80&fit=crop",
		featuredImageAlt: "Studententaxi nachttaxi Groningen uitgaan veilig thuis",
		author: "Team TaxiAmro",
		keywords: [
			"studententaxi groningen",
			"nachttaxi groningen",
			"taxi uitgaan groningen"
		],
		content: `
      <p>Groningen is een van de beste studentensteden van Nederland. Maar na een nacht stappen in de Poelestraat, Peperstraat of bij de Vismarkt wil je veilig en snel thuis. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor een betaalbare studententaxi.</p>

      <h2>Waarom een taxi en geen fiets?</h2>
      <p>Met een paar biertjes op de fiets stappen is <strong>niet alleen onverstandig — het is strafbaar</strong>. Boetes voor dronken fietsen kunnen oplopen tot €240. Een taxi is goedkoper, veiliger en sneller.</p>

      <h2>Vanaf welke uitgaansgebieden halen wij op?</h2>
      <ul>
        <li><strong>Poelestraat / Peperstraat</strong> — meeste cafés en clubs</li>
        <li><strong>Grote Markt</strong> en omstreken</li>
        <li><strong>Vismarkt</strong> terrassen</li>
        <li><strong>Studentenverenigingen</strong> — Vindicat, Albertus, Cleopatra</li>
      </ul>

      <h2>Naar welke wijken rijden wij?</h2>
      <p>Helpman, Selwerd, Paddepoel, Vinkhuizen, Beijum, Lewenborg, Zernike Campus, Kardinge — heel Groningen en omliggende dorpen (Haren, Hoogkerk, Eelde).</p>

      <h2>Tips voor uitgaande studenten</h2>
      <ol>
        <li><strong>Boek vooraf</strong> als je laat thuis wilt — anders soms 30+ min wachten</li>
        <li><strong>Reis met een groep</strong> — deel de prijs</li>
        <li><strong>Sla ons nummer op</strong>: +31 6 33721505</li>
        <li><strong>Pin betaling</strong> mogelijk in de auto</li>
        <li><strong>WhatsApp boeking</strong> — handig na een paar drankjes</li>
      </ol>

      <h2>FAQ</h2>
      <p><strong>Hoe laat rijden jullie?</strong><br/>24/7. Ook om 04:00 's ochtends.</p>
      <p><strong>Mogen we eten/drinken meenemen?</strong><br/>Liever niet vanwege reinigingskosten bij morsen. Friet in gesloten zak OK.</p>
    `
	},
	{
		slug: "taxi-bruiloft-feest-evenement-vervoer",
		title: "Taxi voor bruiloft of feest: vervoer regelen voor je gasten",
		date: "2026-05-15",
		category: "Evenementen",
		readTime: "4 min",
		excerpt: "Plan jij een bruiloft of feest? Wij verzorgen taxivervoer voor jou en je gasten naar elke locatie. Vraag een offerte aan.",
		featuredImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&fit=crop",
		featuredImageAlt: "Bruiloft taxi trouwauto vervoer Groningen feest evenement",
		author: "Team TaxiAmro",
		keywords: [
			"taxi bruiloft",
			"trouwauto groningen",
			"evenementen vervoer"
		],
		content: `
      <p>Een bruiloft, jubileum of groot feest verdient zorgvuldig georganiseerd vervoer. Geen gedoe met parkeren, geen zorgen over alcohol achter het stuur. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor een offerte.</p>

      <h2>Wat regelen wij voor jouw evenement?</h2>
      <ul>
        <li><strong>Pendeldienst</strong> tussen ceremonie, receptie en feestlocatie</li>
        <li><strong>Vaste prijs</strong> afhankelijk van aantal ritten</li>
        <li><strong>Eigen chauffeur</strong> die meedenkt en flexibel is</li>
        <li><strong>Heen-en-terug</strong> voor gasten</li>
        <li><strong>VIP-vervoer</strong> voor bruidspaar of eregasten</li>
      </ul>

      <h2>Voor welke evenementen?</h2>
      <ul>
        <li>Bruiloften en partnerschappen</li>
        <li>Jubilea, verjaardagen</li>
        <li>Doopfeesten, communies</li>
        <li>Bedrijfsuitjes en kerstborrels</li>
        <li>Concerten en festivals</li>
        <li>Begrafenissen en uitvaarten</li>
      </ul>

      <h2>Hoe werkt het?</h2>
      <ol>
        <li><strong>Vraag offerte aan</strong> via telefoon, mail of WhatsApp</li>
        <li><strong>Geef ons door:</strong> datum, locaties, tijden, aantal personen</li>
        <li><strong>Wij maken een planning</strong> met vaste prijs</li>
        <li><strong>Op de dag</strong>: wij staan stipt op tijd klaar</li>
      </ol>

      <h2>Tips voor stressvrij vervoer op je grote dag</h2>
      <ol>
        <li><strong>Boek 6 weken vooraf</strong> — populaire weekends raken vol</li>
        <li><strong>Geef een tijdsbuffer</strong> mee</li>
        <li><strong>Wijs een contactpersoon aan</strong> die ons kan bellen tijdens de dag</li>
      </ol>

      <h2>FAQ</h2>
      <p><strong>Kunnen jullie met meerdere voertuigen rijden?</strong><br/>Ja, via ons netwerk regelen wij meerdere auto's voor grotere groepen.</p>
      <p><strong>Zijn jullie ook beschikbaar voor uitvaarten?</strong><br/>Ja, met passend voertuig en discrete service.</p>
    `
	},
	{
		slug: "ziekenhuisvervoer-umcg-groningen",
		title: "Ziekenhuisvervoer naar UMCG en Martini Ziekenhuis Groningen",
		date: "2026-05-16",
		category: "Tips",
		readTime: "4 min",
		excerpt: "Comfortabel vervoer naar het UMCG of Martini Ziekenhuis in Groningen. Voor afspraken, opname of bezoek. 24/7 beschikbaar.",
		featuredImage: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&q=80&fit=crop",
		featuredImageAlt: "Ziekenhuisvervoer UMCG Martini taxi patiënten ouderen Groningen",
		author: "Team TaxiAmro",
		keywords: [
			"taxi umcg",
			"ziekenhuisvervoer groningen",
			"taxi martini ziekenhuis"
		],
		content: `
      <p>Een ziekenhuisafspraak, opname of bezoek aan een dierbare. Het laatste waar je dan op zit te wachten is parkeerzoekstress of een lange busrit. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <p><strong>⚠️ Let op:</strong> wij verzorgen géén medisch noodvervoer. Bij medische spoed altijd 112 bellen.</p>

      <h2>Voor wie is dit geschikt?</h2>
      <ul>
        <li>Patiënten met een <strong>poliklinische afspraak</strong></li>
        <li>Familieleden die op <strong>bezoek</strong> komen</li>
        <li>Mensen die <strong>ontslagen worden</strong> uit het ziekenhuis</li>
        <li><strong>Ouderen</strong> of mindervaliden die moeilijk zelf kunnen rijden</li>
      </ul>

      <h2>Voordelen van taxivervoer naar het ziekenhuis</h2>
      <ol>
        <li><strong>Geen parkeerstress</strong> — UMCG-parkeerkosten zijn fors</li>
        <li><strong>Hulp met instappen</strong> door onze chauffeur</li>
        <li><strong>Rechtstreeks tot bij de ingang</strong></li>
        <li><strong>Wachten of terugbrengen</strong> kan ook</li>
        <li><strong>Comfort</strong> in onze stille waterstof-taxi</li>
      </ol>

      <h2>Vergoeding zorgverzekeraar?</h2>
      <p>Onder bepaalde voorwaarden krijg je taxikosten (deels) vergoed van je zorgverzekeraar — dit heet <strong>zittend ziekenvervoer</strong>. Check je polisvoorwaarden of vraag bij je verzekeraar.</p>

      <h2>FAQ</h2>
      <p><strong>Kan ik vooraf een retourrit boeken?</strong><br/>Ja, wij plannen graag heen en terug in één afspraak.</p>
      <p><strong>Mag een begeleider mee?</strong><br/>Vanzelfsprekend — gratis tot 3 medereizigers.</p>
      <p><strong>Helpen jullie met rolstoelen?</strong><br/>Voor reguliere klaprolstoelen ja.</p>

      <p>Meer info: <a href="https://www.zorgwijzer.nl/zorgwijzer/zittend-ziekenvervoer" target="_blank" rel="noopener noreferrer">Zorgwijzer.nl</a>.</p>
    `
	},
	{
		slug: "verschil-straattaxi-vooraf-geboekte-taxi",
		title: "Verschil tussen straattaxi en vooraf geboekte taxi",
		date: "2026-05-17",
		category: "Tips",
		readTime: "4 min",
		excerpt: "Wat is het verschil tussen een straattaxi en een vooraf geboekte taxi? En welke is voor jou het voordeligst?",
		featuredImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80&fit=crop",
		featuredImageAlt: "Straattaxi versus vooraf geboekte taxi verschil prijzen",
		author: "Team TaxiAmro",
		keywords: [
			"straattaxi",
			"taxi boeken",
			"verschil taxi"
		],
		content: `
      <p>Je kunt op twee manieren een taxi nemen: ergens onderweg er een aanhouden (<strong>straattaxi</strong>) of er <strong>vooraf één bestellen</strong>. Bij twijfel? Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Wat is een straattaxi?</h2>
      <p>Een straattaxi is een taxi die je <strong>aanhoudt op straat</strong> of op een taxistandplaats. De chauffeur rekent volgens een <strong>meter</strong> met wettelijk vastgestelde maximumtarieven:</p>
      <ul>
        <li>Starttarief</li>
        <li>Tarief per kilometer</li>
        <li>Tarief per minuut</li>
      </ul>

      <h2>Wat is een vooraf geboekte taxi?</h2>
      <p>Een vooraf geboekte taxi reserveer je <strong>van tevoren</strong>. Je spreekt vaak een <strong>vaste prijs</strong> af die niet verandert, ongeacht het verkeer.</p>

      <h2>Wanneer kies je wat?</h2>
      <p><strong>Straattaxi is handig bij:</strong></p>
      <ul>
        <li>Korte ritten binnen Groningen</li>
        <li>Spontane plannen</li>
        <li>Aansluiting op trein/bus</li>
      </ul>

      <p><strong>Vooraf geboekt is slimmer bij:</strong></p>
      <ul>
        <li>Luchthavenritten (Schiphol, Eelde, Eindhoven)</li>
        <li>Lange afstandritten</li>
        <li>Belangrijke afspraken</li>
        <li>Spitsuur (file-risico)</li>
        <li>'s Nachts</li>
        <li>Groepsvervoer</li>
      </ul>

      <h2>Wat doen wij?</h2>
      <p>TaxiAmro biedt <strong>beide opties</strong>. Voor luchthavenritten adviseren wij <strong>altijd</strong> vooraf boeken. Geen risico, vaste prijs, gegarandeerd op tijd.</p>

      <p>Meer info: <a href="https://www.rijksoverheid.nl/onderwerpen/taxi" target="_blank" rel="noopener noreferrer">Rijksoverheid Taxi</a>.</p>
    `
	},
	{
		slug: "oudjaarsavond-carbid-vervoer-veilig-thuis",
		title: "Oudjaarsavond en carbid: veilig vervoer met de taxi",
		date: "2026-05-18",
		category: "Tips",
		readTime: "3 min",
		excerpt: "Oud en nieuw vieren met carbid of bij vrienden? Boek op tijd je taxi. TaxiAmro rijdt ook op 31 december en 1 januari.",
		featuredImage: "https://images.unsplash.com/photo-1546874177-9e664107314e?w=1200&q=80&fit=crop",
		featuredImageAlt: "Oudjaarsavond carbid taxi veilig vervoer Drenthe Groningen",
		author: "Team TaxiAmro",
		keywords: [
			"taxi oud en nieuw",
			"carbid vervoer",
			"taxi oudjaarsavond"
		],
		content: `
      <p>Oud en nieuw is de drukste taxi-avond van het jaar. Boek <strong>ruim op tijd</strong> je taxi. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Waarom op tijd boeken?</h2>
      <p>Met oud en nieuw zijn taxi's bijna allemaal volgeboekt vanaf 22:00. Vraag het 1-2 weken vooraf aan.</p>

      <h2>Veilig na carbid</h2>
      <p>Carbid-schieten is een gezellige Drentse traditie, vaak met flink wat drank erbij. <strong>Rijd nooit zelf naar huis na alcohol.</strong> Politiecontroles op 31 december en 1 januari zijn streng.</p>

      <h2>Veelgevraagde ritten oud en nieuw</h2>
      <ul>
        <li>Van feest in Stad naar omliggende dorpen</li>
        <li>Carbid-locaties in Drenthe → terug naar Groningen</li>
        <li>Van familie naar uitgaansgelegenheden</li>
        <li>Vroege ochtendvluchten op 1 januari</li>
      </ul>

      <h2>FAQ</h2>
      <p><strong>Mogen we vuurwerk meenemen?</strong><br/>Nee, in verband met veiligheid.</p>
      <p><strong>Hoe laat rijden jullie tijdens nieuwjaar?</strong><br/>24/7 ook tijdens oud en nieuw.</p>
    `
	},
	{
		slug: "taxi-concert-ahoy-ziggo-dome-festival",
		title: "Taxi naar concerten: Ziggo Dome, Ahoy en festivals",
		date: "2026-05-19",
		category: "Evenementen",
		readTime: "4 min",
		excerpt: "Ga je naar een concert in Ziggo Dome, Ahoy of een festival? Boek een taxi voor stressvrij vervoer heen en terug.",
		featuredImage: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80&fit=crop",
		featuredImageAlt: "Concert taxi Ziggo Dome Ahoy festival vervoer",
		author: "Team TaxiAmro",
		keywords: [
			"taxi concert",
			"taxi ziggo dome",
			"taxi ahoy",
			"festival vervoer"
		],
		content: `
      <p>Een avondje genieten van je favoriete artiest in Ziggo Dome, Ahoy of een festival? Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Waarom een taxi naar het concert?</h2>
      <ol>
        <li><strong>Geen parkeerstress</strong> bij grote venues (€20-€40 per avond)</li>
        <li><strong>Geen tussenstop</strong> voor benzine of pin</li>
        <li><strong>Drank ok</strong> — niemand rijdt naar huis</li>
        <li><strong>Direct bij de ingang</strong> afgezet</li>
        <li><strong>Ophalen na de show</strong> — vermijd 30-min taxi-rij</li>
      </ol>

      <h2>Populaire bestemmingen</h2>
      <ul>
        <li><strong>Ziggo Dome Amsterdam</strong> — 200 km / ~2u 15min</li>
        <li><strong>Ahoy Rotterdam</strong> — 240 km / ~2u 45min</li>
        <li><strong>AFAS Live Amsterdam</strong> — 200 km / ~2u 15min</li>
        <li><strong>GelreDome Arnhem</strong> — 175 km / ~2u</li>
        <li><strong>MartiniPlaza Groningen</strong> — lokaal</li>
      </ul>

      <h2>Heen-en-terug regeling</h2>
      <p>Voor concerten bieden wij een <strong>retour-arrangement</strong>: wij brengen je heen en halen je op een afgesproken tijd op.</p>

      <h2>FAQ</h2>
      <p><strong>Kunnen jullie wachten tijdens het concert?</strong><br/>Voor lange optredens halen wij meestal op na afloop.</p>
      <p><strong>Kunnen wij ophalen na een festival?</strong><br/>Ja, geef exacte ophaallocatie en tijd door.</p>
    `
	},
	{
		slug: "bremen-airport-vs-schiphol-noord-nederland",
		title: "Bremen Airport of Schiphol? Welke is sneller vanuit Noord-Nederland?",
		date: "2026-05-20",
		category: "Luchthaven",
		readTime: "5 min",
		excerpt: "Bremen Airport is dichterbij vanuit Groningen dan Schiphol. Is een vlucht via Bremen sneller en goedkoper? Wij vergelijken.",
		featuredImage: "https://images.unsplash.com/photo-1583416750470-09c2c5c4d6a3?w=1200&q=80&fit=crop",
		featuredImageAlt: "Bremen Airport versus Schiphol luchthaven vanuit Groningen",
		author: "Team TaxiAmro",
		keywords: [
			"bremen airport vanuit groningen",
			"schiphol of bremen",
			"taxi bremen luchthaven"
		],
		content: `
      <p>Vlieg je internationaal vanuit Noord-Nederland? Schiphol ligt 200 km zuidwest. Bremen Airport ligt slechts 175 km oostwaarts. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor vervoer naar beide.</p>

      <h2>Reistijd vergelijking vanuit Groningen</h2>
      <ul>
        <li>Schiphol Amsterdam — 200 km, 2u 15min</li>
        <li>Bremen Airport (Duitsland) — 175 km, 2u</li>
        <li>Eindhoven Airport — 240 km, 2u 30min</li>
        <li>Düsseldorf Airport — 280 km, 2u 45min</li>
        <li>Eelde (Groningen Airport) — 15 km, 20 min</li>
      </ul>

      <h2>Wanneer is Bremen Airport slimmer?</h2>
      <ul>
        <li>✅ Reisbestemming in Oost/Centraal Europa</li>
        <li>✅ Vluchten met Lufthansa, Ryanair, Eurowings</li>
        <li>✅ Vakantievluchten — vaak voordeliger</li>
        <li>✅ Minder druk = sneller door security</li>
      </ul>

      <h2>Wanneer Schiphol blijft beter</h2>
      <ul>
        <li>✅ Intercontinentale vluchten (USA, Azië)</li>
        <li>✅ KLM-vluchten</li>
        <li>✅ Veel directe verbindingen</li>
      </ul>

      <h2>FAQ</h2>
      <p><strong>Mag een Nederlandse taxi in Duitsland rijden?</strong><br/>Ja, mits geldige taxivergunning. Wij voldoen aan alle voorschriften.</p>
      <p><strong>Heb ik een paspoort nodig?</strong><br/>Schengen-gebied = geen vaste controle. Wel altijd ID meenemen.</p>

      <p>Meer info: <a href="https://www.bremen-airport.com/" target="_blank" rel="noopener noreferrer">Bremen Airport</a>.</p>
    `
	},
	{
		slug: "eemshaven-cruise-terminal-gids-passagiers",
		title: "Eemshaven Cruise Terminal: volledige gids voor passagiers",
		date: "2026-05-21",
		category: "Eemshaven",
		readTime: "5 min",
		excerpt: "Alles wat je moet weten over de cruise terminal in Eemshaven: aankomst, faciliteiten, parkeren en het regelen van vervoer.",
		featuredImage: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=80&fit=crop",
		featuredImageAlt: "Eemshaven cruise terminal AIDA schip vakantie",
		author: "Team TaxiAmro",
		keywords: [
			"eemshaven cruise terminal",
			"cruise vanuit eemshaven",
			"aida eemshaven"
		],
		content: `
      <p>Eemshaven is in opkomst als cruise-haven in Noord-Nederland. Plan je een cruise vanuit Eemshaven? Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Waar ligt de cruise terminal?</h2>
      <p>De cruise terminal ligt aan de <strong>Schildhoek 1, 9979 XR Eemshaven</strong>.</p>

      <h2>Aankomsttijd: wanneer er zijn?</h2>
      <p>Inschepen begint meestal <strong>3 uur voor vertrek</strong> en sluit <strong>60-90 minuten voor afvaart</strong>.</p>

      <h2>Parkeren bij Eemshaven</h2>
      <p>Parkeren voor een 7-daagse cruise kost al snel €50-€100. Een retourtaxi is vaak goedkoper én comfortabeler.</p>

      <h2>Wat moet je meenemen?</h2>
      <ul>
        <li>Paspoort (verplicht voor internationale cruises)</li>
        <li>Boarding pass / boekingsbevestiging</li>
        <li>Reisverzekering polisnummer</li>
        <li>Medicatie + recepten</li>
      </ul>

      <h2>Vervoer naar Eemshaven Cruise Terminal</h2>
      <p>Populaire ophaaladressen:</p>
      <ul>
        <li>Groningen → Eemshaven (~35 min)</li>
        <li>Assen → Eemshaven (~50 min)</li>
        <li>Leeuwarden → Eemshaven (~70 min)</li>
        <li>Schiphol → Eemshaven (~2u 30min)</li>
      </ul>

      <h2>FAQ</h2>
      <p><strong>Kunnen jullie meerdere koffers vervoeren?</strong><br/>Onze Hyundai Nexo heeft ruimte voor 4 personen + ruime cruisebagage.</p>
      <p><strong>Wat als de cruise vertraagd is?</strong><br/>Bij retour: geef ons je verwachte tijd, wij passen aan.</p>

      <p>Meer info: <a href="https://www.groningen-seaports.com/" target="_blank" rel="noopener noreferrer">Groningen Seaports</a>.</p>
    `
	},
	{
		slug: "zakelijk-vervoer-mkb-bedrijven-groningen",
		title: "Zakelijk vervoer voor MKB-bedrijven in Groningen",
		date: "2026-05-22",
		category: "Zakelijk",
		readTime: "4 min",
		excerpt: "Heeft jouw bedrijf vaste taxi-behoefte? Zakelijk vervoer met facturering op rekening, vaste tarieven en betrouwbare service.",
		featuredImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&fit=crop",
		featuredImageAlt: "Zakelijk vervoer MKB bedrijven Groningen directie chauffeur",
		author: "Team TaxiAmro",
		keywords: [
			"zakelijk vervoer groningen",
			"taxi bedrijf factuur",
			"directiechauffeur groningen"
		],
		content: `
      <p>Heeft jouw bedrijf vaste taxi-behoefte? Met <strong>facturering op rekening</strong>, <strong>vaste tarieven</strong> en <strong>24/7 beschikbaarheid</strong>. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Voor wie?</h2>
      <ul>
        <li><strong>MKB-bedrijven</strong> in Groningen, Friesland, Drenthe</li>
        <li><strong>Directies en managementteams</strong></li>
        <li><strong>HR-afdelingen</strong> voor expat- en sollicitantenvervoer</li>
        <li><strong>Bedrijven met internationale klanten</strong></li>
        <li><strong>Bouwbedrijven en industrie</strong> voor Eemshaven</li>
      </ul>

      <h2>Wat krijg je als zakelijke klant?</h2>
      <h3>1. Vaste contactpersoon</h3>
      <p>Eén nummer, één persoon die je situatie kent.</p>
      <h3>2. Maandelijkse factuur</h3>
      <p>Geen contant betalen na elke rit. Wij sturen één overzichtelijke factuur per maand met BTW-specificatie.</p>
      <h3>3. Vooraf afgesproken tarieven</h3>
      <p>Vaste prijzen per traject — geen verrassingen.</p>
      <h3>4. Voorrang bij beschikbaarheid</h3>
      <p>Zakelijke klanten krijgen voorrang bij druktes.</p>
      <h3>5. Representatief vervoer</h3>
      <p>Hyundai Nexo waterstof — luxe, stille SUV met ESG-credentials.</p>

      <h2>Hoe word je zakelijke klant?</h2>
      <ol>
        <li><strong>Intakegesprek</strong> — kort, telefonisch of op locatie</li>
        <li><strong>Tariefafspraak</strong> — vaste tarieven voor jouw vaak gereden trajecten</li>
        <li><strong>Contract</strong> — eenvoudig, opzegbaar per maand</li>
      </ol>

      <h2>FAQ</h2>
      <p><strong>Is er een minimumafname?</strong><br/>Nee, ook bij sporadisch zakelijk vervoer ben je welkom.</p>
      <p><strong>Wat zijn de betalingsvoorwaarden?</strong><br/>Standaard 14 dagen na factuurdatum.</p>
    `
	},
	{
		slug: "koningsdag-groningen-vervoer-feestvieren",
		title: "Koningsdag in Groningen: vervoer naar de festiviteiten",
		date: "2026-05-23",
		category: "Evenementen",
		readTime: "3 min",
		excerpt: "Vier Koningsdag stressvrij in Groningen. Met TaxiAmro bereik je makkelijk de Grote Markt, Vismarkt en alle vrijmarkten.",
		featuredImage: "https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=1200&q=80&fit=crop",
		featuredImageAlt: "Koningsdag Groningen vervoer oranje feest vrijmarkt",
		author: "Team TaxiAmro",
		keywords: [
			"taxi koningsdag groningen",
			"koningsdag vervoer",
			"27 april taxi"
		],
		content: `
      <p>Koningsdag is een van de drukste dagen in Groningen. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor stressvrij Koningsdag-vervoer.</p>

      <h2>Waarom een taxi op Koningsdag?</h2>
      <ul>
        <li><strong>Parkeren is onmogelijk</strong> in de binnenstad — straten zijn afgesloten</li>
        <li><strong>OV is overvol</strong> — bussen rijden gedeeltelijk omgeleid</li>
        <li><strong>Veel drankjes</strong> — zelf rijden is niet handig</li>
        <li><strong>Oranje uitdossing</strong> — je wilt aankomen zonder gekreukt te zijn</li>
      </ul>

      <h2>Populaire bestemmingen in Groningen op Koningsdag</h2>
      <ul>
        <li><strong>Grote Markt</strong> — hoofdpodium en feestelijk hart</li>
        <li><strong>Vismarkt</strong> — terrassen en livemuziek</li>
        <li><strong>Noorderplantsoen</strong> — vrijmarkt en picknicks</li>
        <li><strong>Westerhaven</strong> — kinderactiviteiten</li>
      </ul>

      <h2>Tips</h2>
      <ol>
        <li><strong>Boek 1 week vooraf</strong> — wij zijn snel vol op 27 april</li>
        <li><strong>Spreek aflever-punt af net buiten centrum</strong> — wegafsluitingen</li>
        <li><strong>Geef terug-tijd door</strong> voor ophaaldienst</li>
      </ol>

      <h2>FAQ</h2>
      <p><strong>Tot hoe laat rijden jullie?</strong><br/>24 uur, ook op Koningsdag.</p>
    `
	},
	{
		slug: "top-10-bezienswaardigheden-groningen-taxi",
		title: "Top 10 bezienswaardigheden in Groningen — gemakkelijk per taxi",
		date: "2026-05-24",
		category: "Tips",
		readTime: "6 min",
		excerpt: "Ontdek de mooiste plekken van Groningen zonder zorgen over parkeren of OV. Onze top 10 met taxi-tips.",
		featuredImage: "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1200&q=80&fit=crop",
		featuredImageAlt: "Bezienswaardigheden Groningen Martinitoren toerisme stad",
		author: "Team TaxiAmro",
		keywords: [
			"bezienswaardigheden groningen",
			"dagje groningen",
			"wat te doen in groningen"
		],
		content: `
      <p>Groningen is een van de leukste steden van Nederland. Voor comfortabel vervoer bel je <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>1. Martinitoren</h2>
      <p>Het iconische symbool van Groningen. Beklim de "Olle Grieze" voor het mooiste uitzicht over de stad.</p>

      <h2>2. Groninger Museum</h2>
      <p>Spectaculair gebouw aan het Verbindingskanaal met moderne kunsttentoonstellingen.</p>

      <h2>3. Prinsentuin</h2>
      <p>Verborgen renaissance-tuin midden in de stad. Gratis toegang.</p>

      <h2>4. Noorderplantsoen</h2>
      <p>Het mooiste stadspark — wandelen, picknicken of joggen.</p>

      <h2>5. Forum Groningen</h2>
      <p>Modern cultuurgebouw met bibliotheek, bioscoop en uitzichtdek.</p>

      <h2>6. Hortus Haren</h2>
      <p>Botanische tuin net buiten Groningen — adembenemend in de lente.</p>

      <h2>7. Akerkhof en oude binnenstad</h2>
      <p>Middeleeuwse straten met cafés en boetieks.</p>

      <h2>8. Hoge der A en Lage der A</h2>
      <p>Historische haventjes met grachtenpanden.</p>

      <h2>9. Universiteitsmuseum</h2>
      <p>Een verborgen pareltje bij de oudste universiteit van Nederland.</p>

      <h2>10. Lauwersmeer</h2>
      <p>35 min rijden — perfect voor natuur en sterrenhemels.</p>

      <h2>Dagje uit per taxi — onze tips</h2>
      <p>Boek een taxi-pendeldienst voor een hele dag. Geen parkeerstress, geen tijd verloren.</p>

      <h2>FAQ</h2>
      <p><strong>Spreken jullie Engels of Duits voor toeristen?</strong><br/>Onze chauffeur spreekt voldoende Engels en Duits.</p>

      <p>Meer info: <a href="https://www.tourisminformation.nl/groningen" target="_blank" rel="noopener noreferrer">VVV Groningen</a>.</p>
    `
	},
	{
		slug: "wintervervoer-taxi-gladheid-veilig",
		title: "Wintervervoer: veilig op de weg bij sneeuw en gladheid",
		date: "2026-05-25",
		category: "Tips",
		readTime: "3 min",
		excerpt: "Bij sneeuw en gladheid is rijden risicovol. Laat het over aan onze ervaren chauffeurs. Veilig en op tijd.",
		featuredImage: "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=1200&q=80&fit=crop",
		featuredImageAlt: "Wintervervoer taxi gladheid sneeuw veilig rijden",
		author: "Team TaxiAmro",
		keywords: [
			"taxi winter gladheid",
			"taxi sneeuw",
			"veilig wintervervoer"
		],
		content: `
      <p>Bij winterweer wil je geen risico nemen. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> voor veilig wintervervoer.</p>

      <h2>Waarom een taxi in winterse omstandigheden?</h2>
      <ol>
        <li><strong>Winterbanden + ervaring</strong></li>
        <li><strong>Geen schaderisico</strong> voor je eigen auto</li>
        <li><strong>Comfortabel verwarmd</strong></li>
        <li><strong>24/7 strooiroutes bekend</strong></li>
        <li><strong>Vertragingsbuffer</strong> bij winterweer</li>
      </ol>

      <h2>Wat doen wij anders bij winterweer?</h2>
      <ul>
        <li>We <strong>vertrekken eerder</strong> zodat je toch op tijd bent</li>
        <li>We rijden <strong>rustig en defensief</strong></li>
        <li>We volgen de <strong>strooiroutes</strong> waar mogelijk</li>
      </ul>

      <h2>Tips voor wintervervoer</h2>
      <ol>
        <li><strong>Boek extra vroeg</strong></li>
        <li><strong>Hou rekening met vertraging</strong> — luchthaven 1 uur extra vooraf</li>
        <li><strong>Trek goed schoeisel aan</strong></li>
      </ol>

      <h2>FAQ</h2>
      <p><strong>Hebben jullie winterbanden?</strong><br/>Ja, vanaf 1 oktober tot 30 april standaard.</p>

      <p>Actueel weeralarm: <a href="https://www.knmi.nl/" target="_blank" rel="noopener noreferrer">KNMI.nl</a>.</p>
    `
	},
	{
		slug: "kerstmis-sinterklaas-familie-vervoer",
		title: "Kerst en Sinterklaas: vroeg boeken voor familievisites",
		date: "2026-05-26",
		category: "Evenementen",
		readTime: "3 min",
		excerpt: "Familievisite met kerst of pakjesavond? Boek je taxi tijdig — de feestdagen zijn de drukste taxi-avonden van het jaar.",
		featuredImage: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=1200&q=80&fit=crop",
		featuredImageAlt: "Kerst Sinterklaas familie taxi vervoer feestdagen",
		author: "Team TaxiAmro",
		keywords: [
			"taxi kerst",
			"taxi sinterklaas",
			"feestdagen vervoer"
		],
		content: `
      <p>De feestdagen zijn voor familie. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a> en boek vroegtijdig.</p>

      <h2>Drukste taxi-avonden van het jaar</h2>
      <ol>
        <li>Oud en nieuw</li>
        <li>Pakjesavond (5 december)</li>
        <li>Eerste kerstdag (avond)</li>
        <li>Tweede kerstdag (lunch + avond)</li>
        <li>Koningsdag</li>
      </ol>
      <p>Boek <strong>minimaal 2 weken vooraf</strong>.</p>

      <h2>Familievisite — verspreid in de regio</h2>
      <p>Sinterklaas bij oma in Leeuwarden, eerste kerstdag bij ouders in Assen, tweede kerstdag bij broer in Emmen. Wij brengen je veilig.</p>

      <h2>Voor wie?</h2>
      <ul>
        <li>Ouderen die niet meer 's avonds rijden</li>
        <li>Wie wijntje wil drinken bij het diner</li>
        <li>Kinderen + cadeautjes vervoeren</li>
      </ul>

      <h2>FAQ</h2>
      <p><strong>Mogen cadeaus mee?</strong><br/>Vanzelfsprekend — ruimte voor bagage.</p>
    `
	},
	{
		slug: "taxi-senioren-ouderen-comfortabel-vervoer",
		title: "Taxi voor senioren: comfortabel vervoer voor ouderen",
		date: "2026-05-27",
		category: "Tips",
		readTime: "4 min",
		excerpt: "Vervoer voor ouderen die niet meer zelf rijden. Geduldig, hulpvaardig en betrouwbaar.",
		featuredImage: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=1200&q=80&fit=crop",
		featuredImageAlt: "Senioren ouderen taxi vervoer hulp ziekenhuis familie",
		author: "Team TaxiAmro",
		keywords: [
			"taxi senioren",
			"vervoer ouderen",
			"taxi met begeleiding"
		],
		content: `
      <p>TaxiAmro biedt geduldig, comfortabel vervoer voor ouderen. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Wat maakt onze service geschikt voor senioren?</h2>
      <ol>
        <li><strong>Geduldige chauffeur</strong></li>
        <li><strong>Hulp bij het lopen</strong> van deur tot auto</li>
        <li><strong>Hulp met rollator of looprek</strong></li>
        <li><strong>Bagage en boodschappen</strong> worden ingeladen</li>
        <li><strong>Tot aan de deur gebracht</strong></li>
        <li><strong>Vaste chauffeur mogelijk</strong> voor vertrouwen</li>
      </ol>

      <h2>Voor welke ritten?</h2>
      <ul>
        <li>Huisarts, fysiotherapeut, specialist</li>
        <li>Ziekenhuis UMCG of Martini</li>
        <li>Familiebezoek</li>
        <li>Dagbesteding</li>
        <li>Boodschappen doen</li>
        <li>Begrafenissen</li>
      </ul>

      <h2>Voor familieleden: hoe regel je het?</h2>
      <ul>
        <li><strong>Vaste afspraken</strong> (bv. elke dinsdag huisarts)</li>
        <li><strong>Facturering aan kind</strong> in plaats van senior</li>
        <li><strong>Telefonische check-in</strong> als senior is afgeleverd</li>
      </ul>

      <h2>FAQ</h2>
      <p><strong>Mag een verzorger gratis mee?</strong><br/>Ja, een begeleider reist gratis mee.</p>
      <p><strong>Hoe gaat het bij dementie?</strong><br/>Wij hebben ervaring — rustige aanpak, contact met familie.</p>
    `
	},
	{
		slug: "uber-vs-lokale-taxi-groningen-vergelijking",
		title: "Uber vs lokale taxi: wat zijn de échte verschillen?",
		date: "2026-05-28",
		category: "Tips",
		readTime: "5 min",
		excerpt: "Boek je Uber of lokale taxi in Groningen? Eerlijke vergelijking op prijs, beschikbaarheid en service.",
		featuredImage: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&q=80&fit=crop",
		featuredImageAlt: "Uber versus lokale taxi Groningen vergelijking prijzen",
		author: "Team TaxiAmro",
		keywords: [
			"uber groningen",
			"taxi vs uber",
			"lokale taxi voordelen"
		],
		content: `
      <p>In Noord-Nederland heeft Uber beperkte aanwezigheid en domineren lokale taxi-bedrijven. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Wanneer is Uber handig?</h2>
      <ul>
        <li>In Amsterdam, Rotterdam, Den Haag centrum</li>
        <li>Korte ritten in binnenstad</li>
      </ul>

      <h2>Wanneer is lokaal beter?</h2>
      <ul>
        <li><strong>Buiten de stad Groningen</strong> — Uber heeft hier nauwelijks aanbod</li>
        <li><strong>Luchthavenritten</strong> met vaste prijs</li>
        <li><strong>'s Nachts of vroege ochtend</strong> — gegarandeerd beschikbaar</li>
        <li><strong>Lange ritten</strong> zonder surge</li>
        <li><strong>Zakelijk</strong> met factuur</li>
      </ul>

      <h2>Surge pricing: het Uber-probleem</h2>
      <p>Bij Uber gaan prijzen omhoog tijdens drukte: uitgaansnachten, festivals, slecht weer, spits. Een rit van €15 wordt dan plots €40+. Bij TaxiAmro? Vaste prijs.</p>

      <h2>Wat krijg je van een lokaal taxibedrijf?</h2>
      <ol>
        <li><strong>Vaste contactpersoon</strong></li>
        <li><strong>Vooraf afgesproken prijs</strong></li>
        <li><strong>Lokale kennis</strong></li>
        <li><strong>24/7 beschikbaarheid</strong></li>
        <li><strong>Hulp met bagage</strong></li>
      </ol>

      <h2>FAQ</h2>
      <p><strong>Wat als Uber niet komt?</strong><br/>Bel ons direct — wij hebben meestal binnen 15-30 min een auto.</p>
    `
	},
	{
		slug: "lauwersoog-schiermonnikoog-eilanden-vervoer",
		title: "Vervoer naar de Waddeneilanden: Lauwersoog, Holwerd en meer",
		date: "2026-05-29",
		category: "Tips",
		readTime: "4 min",
		excerpt: "Op de boot naar Schiermonnikoog, Ameland of Terschelling? Wij brengen je naar de juiste veerhaven.",
		featuredImage: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1200&q=80&fit=crop",
		featuredImageAlt: "Waddeneilanden Lauwersoog veerboot Schiermonnikoog Ameland",
		author: "Team TaxiAmro",
		keywords: [
			"taxi lauwersoog",
			"vervoer waddeneilanden",
			"taxi schiermonnikoog boot"
		],
		content: `
      <p>Plan je een uitstapje naar <strong>Schiermonnikoog</strong>, <strong>Ameland</strong>, <strong>Terschelling</strong>? Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Veerverbindingen vanuit Noord-Nederland</h2>
      <ul>
        <li><strong>Schiermonnikoog</strong> — Lauwersoog (~45 min vanuit Groningen)</li>
        <li><strong>Ameland</strong> — Holwerd (~1u 15min)</li>
        <li><strong>Terschelling / Vlieland</strong> — Harlingen (~1u 30min)</li>
      </ul>

      <h2>Waarom een taxi naar de boot?</h2>
      <ol>
        <li><strong>Geen parkeerkosten</strong> bij veerhavens (€10-€15/dag)</li>
        <li><strong>Op tijd</strong> — wij weten precies wanneer te vertrekken</li>
        <li><strong>Geen autozorgen</strong></li>
        <li><strong>Comfortabel</strong> voor de hele familie</li>
      </ol>

      <h2>Retour-arrangement</h2>
      <p>Voor weekend- of vakantietrip: wij brengen je heen en halen je op bij terugkeer.</p>

      <h2>Tijden om rekening mee te houden</h2>
      <p>Auto-veer: 45 min voor afvaart. Passagiersveer: 15-20 min voor afvaart.</p>

      <h2>FAQ</h2>
      <p><strong>Hond mag mee?</strong><br/>Op de boot vaak ja, in onze taxi ook (zie voorwaarden).</p>

      <p>Veerverbindingen: <a href="https://www.wpd.nl/" target="_blank" rel="noopener noreferrer">Wagenborg</a> | <a href="https://www.rederij-doeksen.nl/" target="_blank" rel="noopener noreferrer">Doeksen</a>.</p>
    `
	},
	{
		slug: "eurosonic-noorderslag-festival-groningen-vervoer",
		title: "Eurosonic Noorderslag: vervoer tijdens het festival",
		date: "2026-05-30",
		category: "Evenementen",
		readTime: "3 min",
		excerpt: "Bezoek je Eurosonic Noorderslag in Groningen? Boek vooraf je taxi voor pendel tussen venues.",
		featuredImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80&fit=crop",
		featuredImageAlt: "Eurosonic Noorderslag festival Groningen taxi vervoer",
		author: "Team TaxiAmro",
		keywords: [
			"taxi eurosonic",
			"eurosonic noorderslag vervoer",
			"festival groningen taxi"
		],
		content: `
      <p>Eurosonic Noorderslag is hét muziekfestival van Noord-Nederland — 4 dagen, 350+ optredens. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Wat is Eurosonic?</h2>
      <p>ESNS vindt jaarlijks in januari plaats in Groningen. Het festival presenteert opkomende Europese acts in <strong>40+ venues</strong> verspreid door de stad.</p>

      <h2>Waar zijn de venues?</h2>
      <ul>
        <li><strong>De Oosterpoort</strong> (centrale plek)</li>
        <li><strong>Vera, Simplon, Forum</strong></li>
        <li><strong>Grand Theatre, USVA</strong></li>
        <li>Plus pop-up venues</li>
      </ul>

      <h2>Waarom een taxi tijdens Eurosonic?</h2>
      <ol>
        <li><strong>Snel hoppen</strong> tussen venues</li>
        <li><strong>Industry professionals</strong> met krap schema</li>
        <li><strong>Comfort</strong> na een lange dag</li>
        <li><strong>Veilig</strong> terug naar hotel buiten centrum</li>
      </ol>

      <h2>FAQ</h2>
      <p><strong>Kan ik per nacht een vast aantal ritten boeken?</strong><br/>Ja, vraag een ESNS-arrangement aan met vaste prijs per dag.</p>

      <p>Programma: <a href="https://esns.nl/" target="_blank" rel="noopener noreferrer">esns.nl</a>.</p>
    `
	},
	{
		slug: "taxi-hotel-zakenreizigers-groningen",
		title: "Taxi voor zakenreizigers: van hotel naar afspraak in Groningen",
		date: "2026-05-31",
		category: "Zakelijk",
		readTime: "3 min",
		excerpt: "Op zakenreis in Groningen? Wij verzorgen comfortabel vervoer tussen hotel, afspraken en luchthaven.",
		featuredImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80&fit=crop",
		featuredImageAlt: "Zakenreizigers hotel taxi Groningen business vervoer",
		author: "Team TaxiAmro",
		keywords: [
			"taxi hotel groningen",
			"zakenreiziger taxi",
			"business taxi groningen"
		],
		content: `
      <p>Op zakenreis in Groningen? Geen tijd voor parkeerzoekstress. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>Service voor zakenreizigers</h2>
      <h3>1. Punctueel ophalen</h3>
      <p>Wij staan stipt op tijd voor je hotelingang.</p>
      <h3>2. Stille rit</h3>
      <p>In onze Hyundai Nexo kun je nog snel een call doen of e-mails checken.</p>
      <h3>3. Direct bij ingang afgezet</h3>
      <h3>4. Factuur op rekening</h3>
      <p>Maandelijkse factuur met BTW-specificatie voor declaratie.</p>
      <h3>5. Multi-stop dagrondes</h3>

      <h2>Populaire trajecten</h2>
      <ul>
        <li>Hotel → vergaderlocatie in business district</li>
        <li>Hotel → Eelde Airport</li>
        <li>Hotel → klant in Eemshaven</li>
        <li>Hotel → restaurant voor business diner</li>
      </ul>

      <h2>Populaire business hotels in Groningen</h2>
      <ul>
        <li>Schimmelpenninck Huys</li>
        <li>Hampshire Hotel City</li>
        <li>NH Groningen</li>
        <li>Martini Hotel</li>
      </ul>

      <h2>FAQ</h2>
      <p><strong>Kunnen jullie een Engels-sprekende klant ophalen?</strong><br/>Ja, onze chauffeur spreekt voldoende Engels.</p>
      <p><strong>Werkt jullie service ook in het weekend?</strong><br/>Ja, 24/7.</p>
    `
	},
	{
		slug: "betrouwbare-taxi-kiezen-5-tips",
		title: "Een betrouwbare taxi kiezen: 5 dingen om op te letten",
		date: "2026-06-01",
		category: "Tips",
		readTime: "4 min",
		excerpt: "Waar herken je een betrouwbaar taxibedrijf aan? Onze 5 tips om gedoe en teleurstelling te voorkomen.",
		featuredImage: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=80&fit=crop",
		featuredImageAlt: "Betrouwbare taxi kiezen tips kwaliteit service vertrouwen",
		author: "Team TaxiAmro",
		keywords: [
			"betrouwbare taxi",
			"taxi kiezen",
			"goede taxi groningen"
		],
		content: `
      <p>Niet alle taxibedrijven zijn gelijk. Onze 5 tips — en hoe TaxiAmro daaraan voldoet. Bel <a href="tel:+31633721505"><strong>+31 6 33721505</strong></a>.</p>

      <h2>1. Vraag naar de vergunning</h2>
      <p>Elke taxichauffeur moet beschikken over chauffeurspas, taxivergunning en geldig rijbewijs. Wij zijn ingeschreven bij <strong>KvK 87581868</strong> met <strong>BTW NL004440433B79</strong>.</p>

      <h2>2. Check reviews</h2>
      <p>Echte recensies van echte klanten. Wij hebben <strong>4.7★</strong> op Google. Kijk uit voor:</p>
      <ul>
        <li>Bedrijven zonder online aanwezigheid</li>
        <li>Te perfecte (gekochte?) reviews</li>
        <li>Geen contact mogelijk per e-mail of WhatsApp</li>
      </ul>

      <h2>3. Vraag vooraf om prijs</h2>
      <p>Een betrouwbaar taxibedrijf geeft <strong>vooraf een vaste prijs</strong> voor luchthavenritten. Bedrijven die alleen "via de meter" werken bij vooraf geboekte ritten = wegblijven.</p>

      <h2>4. Klantenservice toetsen</h2>
      <ul>
        <li>✅ Antwoord binnen 3 belsignalen</li>
        <li>✅ Vriendelijk en geduldig</li>
        <li>✅ Kunnen specifieke vragen beantwoorden</li>
        <li>✅ WhatsApp ook bereikbaar</li>
      </ul>

      <h2>5. Algemene Voorwaarden en privacy</h2>
      <p>Een professioneel bedrijf heeft <strong>Algemene Voorwaarden</strong> en een <strong>Privacybeleid</strong>. Geen voorwaarden = onduidelijkheid bij geschillen.</p>

      <h2>Wat krijg je bij TaxiAmro?</h2>
      <ul>
        <li>✅ KvK-geregistreerd</li>
        <li>✅ 4.7★ klantbeoordeling</li>
        <li>✅ Vaste vooraf afgesproken tarieven</li>
        <li>✅ 24/7 telefoon + WhatsApp bereikbaar</li>
        <li>✅ Locale kennis Noord-Nederland</li>
        <li>✅ Schone, comfortabele waterstof Hyundai Nexo</li>
      </ul>

      <p>Meer info: <a href="https://www.rijksoverheid.nl/onderwerpen/taxi" target="_blank" rel="noopener noreferrer">Rijksoverheid Taxi</a>.</p>
    `
	}
];
var categories = [
	"Alle",
	"Luchthaven",
	"Eemshaven",
	"Zakelijk",
	"Duitsland",
	"Tips",
	"Prijzen"
];
//#endregion
//#region src/components/Navbar.jsx
var homeLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "Diensten",
		href: "#services"
	},
	{
		label: "Tarieven",
		href: "#pricing"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar({ blogMode = false }) {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [logoHovered, setLogoHovered] = useState(false);
	const logoRef = useRef(null);
	const [tilt, setTilt] = useState({
		x: 0,
		y: 0
	});
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const handleLogoMove = (e) => {
		const rect = logoRef.current.getBoundingClientRect();
		const cx = rect.left + rect.width / 2;
		const cy = rect.top + rect.height / 2;
		setTilt({
			x: (e.clientY - cy) / (rect.height / 2) * -12,
			y: (e.clientX - cx) / (rect.width / 2) * 12
		});
	};
	return /* @__PURE__ */ jsxs("nav", {
		className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md border-b border-gray-100" : "bg-white/80 backdrop-blur-sm"}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between h-16",
				children: [
					/* @__PURE__ */ jsx("a", {
						href: blogMode ? "/" : "#home",
						ref: logoRef,
						onMouseMove: handleLogoMove,
						onMouseEnter: () => setLogoHovered(true),
						onMouseLeave: () => {
							setLogoHovered(false);
							setTilt({
								x: 0,
								y: 0
							});
						},
						style: {
							perspective: 400,
							display: "inline-flex",
							alignItems: "center",
							gap: 10,
							textDecoration: "none"
						},
						children: /* @__PURE__ */ jsx("span", {
							style: {
								fontWeight: 800,
								fontSize: 20,
								letterSpacing: "-0.3px",
								background: "linear-gradient(135deg, #0ea5e9 0%, #2563eb 60%, #1d4ed8 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
								transform: `rotateX(${tilt.x * .5}deg) rotateY(${tilt.y * .5}deg) translateZ(${logoHovered ? 6 : 0}px)`,
								transition: logoHovered ? "transform 0.06s ease" : "transform 0.5s ease",
								textShadow: "none",
								display: "block"
							},
							children: "Taxi Amro"
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden md:flex items-center gap-6",
						children: [homeLinks.map((link) => blogMode ? /* @__PURE__ */ jsx("a", {
							href: `/${link.href}`,
							onClick: (e) => {
								e.preventDefault();
								navigate("/");
								setTimeout(() => {
									const el = document.querySelector(link.href);
									if (el) el.scrollIntoView({ behavior: "smooth" });
								}, 100);
							},
							className: "text-gray-600 hover:text-amber-600 transition-colors text-sm font-medium",
							children: link.label
						}, link.href) : /* @__PURE__ */ jsx("a", {
							href: link.href,
							className: "text-gray-600 hover:text-amber-600 transition-colors text-sm font-medium",
							children: link.label
						}, link.href)), /* @__PURE__ */ jsx(Link, {
							to: "/blog",
							className: "text-gray-600 hover:text-amber-600 transition-colors text-sm font-medium",
							children: "Blog"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "hidden md:flex items-center gap-3",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "tel:+31633721505",
							className: "flex items-center gap-1.5 text-gray-700 hover:text-amber-600 transition-colors font-semibold text-sm",
							children: [/* @__PURE__ */ jsx("svg", {
								className: "w-4 h-4",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								})
							}), "+31 6 33721505"]
						}), /* @__PURE__ */ jsx("a", {
							href: "https://wa.me/31633721505",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-5 py-2 rounded-lg text-sm transition-colors shadow-sm",
							children: "Boek Nu"
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "md:hidden flex items-center gap-2",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "tel:+31633721505",
							className: "flex items-center gap-1 text-amber-600 font-bold text-sm",
							children: [/* @__PURE__ */ jsx("svg", {
								className: "w-4 h-4",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2.5,
									d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								})
							}), "Bel nu"]
						}), /* @__PURE__ */ jsx("button", {
							className: "text-gray-700 p-2",
							onClick: () => setMenuOpen(!menuOpen),
							"aria-label": "Menu",
							children: /* @__PURE__ */ jsxs("div", {
								className: "w-6 flex flex-col gap-1.5",
								children: [
									/* @__PURE__ */ jsx("span", { className: `h-0.5 bg-gray-700 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}` }),
									/* @__PURE__ */ jsx("span", { className: `h-0.5 bg-gray-700 transition-all ${menuOpen ? "opacity-0" : ""}` }),
									/* @__PURE__ */ jsx("span", { className: `h-0.5 bg-gray-700 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}` })
								]
							})
						})]
					})
				]
			})
		}), menuOpen && /* @__PURE__ */ jsxs("div", {
			className: "md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 shadow-lg",
			children: [
				homeLinks.map((link) => /* @__PURE__ */ jsx("a", {
					href: blogMode ? `/${link.href}` : link.href,
					onClick: () => setMenuOpen(false),
					className: "text-gray-700 hover:text-amber-600 transition-colors font-medium",
					children: link.label
				}, link.href)),
				/* @__PURE__ */ jsx(Link, {
					to: "/blog",
					onClick: () => setMenuOpen(false),
					className: "text-gray-700 hover:text-amber-600 transition-colors font-medium",
					children: "Blog"
				}),
				/* @__PURE__ */ jsxs("a", {
					href: "tel:+31633721505",
					className: "flex items-center gap-2 text-amber-600 font-bold text-base border border-amber-200 bg-amber-50 rounded-lg px-4 py-2.5",
					children: [/* @__PURE__ */ jsx("svg", {
						className: "w-4 h-4",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ jsx("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						})
					}), "+31 6 33721505"]
				}),
				/* @__PURE__ */ jsx("a", {
					href: "https://wa.me/31633721505",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "bg-amber-400 text-gray-900 font-semibold px-5 py-2 rounded-lg text-center",
					children: "Boek Nu via WhatsApp"
				})
			]
		})]
	});
}
//#endregion
//#region src/components/Hero.jsx
var MAPS_KEY = "AIzaSyCD5qmtEw7Aa1levZR5U59Q5vzmUbD3y4I";
function initAutocomplete(inputEl) {
	if (!window.google?.maps?.places || !inputEl) return null;
	return new window.google.maps.places.Autocomplete(inputEl, {
		types: ["geocode"],
		componentRestrictions: { country: "nl" }
	});
}
var QUICK_ROUTES = [
	{
		label: "Eelde Airport",
		msg: "Ik wil graag naar Groningen Airport Eelde."
	},
	{
		label: "Schiphol",
		msg: "Ik wil graag naar Schiphol Amsterdam."
	},
	{
		label: "Stadsrit Groningen",
		msg: "Ik wil graag een stadsrit in Groningen."
	},
	{
		label: "Zakelijke rit",
		msg: "Ik wil graag een zakelijke rit boeken."
	}
];
var STATS = [
	{
		value: "4.7★",
		label: "Beoordeling",
		sub: "29 reviews",
		color: "#d97706",
		glow: "rgba(245,158,11,0.25)",
		bg: "linear-gradient(135deg,#fffbeb,#fef3c7)",
		border: "#fde68a",
		icon: "⭐",
		delay: "0s"
	},
	{
		value: "24/7",
		label: "Beschikbaar",
		sub: "Dag & nacht",
		color: "#2563eb",
		glow: "rgba(59,130,246,0.2)",
		bg: "linear-gradient(135deg,#eff6ff,#dbeafe)",
		border: "#bfdbfe",
		icon: "🕐",
		delay: "-1.1s"
	},
	{
		value: "100%",
		label: "Elektrisch",
		sub: "Zero emissie",
		color: "#059669",
		glow: "rgba(16,185,129,0.2)",
		bg: "linear-gradient(135deg,#ecfdf5,#d1fae5)",
		border: "#a7f3d0",
		icon: "⚡",
		delay: "-2.2s"
	}
];
function Hero() {
	const [pickup, setPickup] = useState("");
	const [destination, setDestination] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [passengers, setPassengers] = useState(1);
	const pickupRef = useRef(null);
	const destRef = useRef(null);
	useEffect(() => {
		const existing = document.getElementById("gmap-script");
		const setup = () => {
			const acPickup = initAutocomplete(pickupRef.current);
			const acDest = initAutocomplete(destRef.current);
			if (acPickup) acPickup.addListener("place_changed", () => {
				const p = acPickup.getPlace();
				if (p?.formatted_address) setPickup(p.formatted_address);
				else if (p?.name) setPickup(p.name);
			});
			if (acDest) acDest.addListener("place_changed", () => {
				const p = acDest.getPlace();
				if (p?.formatted_address) setDestination(p.formatted_address);
				else if (p?.name) setDestination(p.name);
			});
		};
		if (window.google?.maps?.places) {
			setup();
			return;
		}
		if (!existing) {
			const script = document.createElement("script");
			script.id = "gmap-script";
			script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=places`;
			script.async = true;
			script.onload = setup;
			document.head.appendChild(script);
		} else {
			const check = setInterval(() => {
				if (window.google?.maps?.places) {
					clearInterval(check);
					setup();
				}
			}, 100);
			return () => clearInterval(check);
		}
	}, []);
	const handleBook = (e) => {
		e.preventDefault();
		const pickupVal = pickupRef.current?.value || pickup;
		const destVal = destRef.current?.value || destination;
		const dateStr = date ? `\nDatum: ${date}` : "";
		const timeStr = time ? `\nTijd: ${time}` : "";
		const msg = encodeURIComponent(`Hallo, ik wil graag een taxi boeken.\n\nOphaaladres: ${pickupVal || "–"}\nBestemming: ${destVal || "–"}${dateStr}${timeStr}\nPassagiers: ${passengers}\n\nKan ik een prijs en bevestiging krijgen?`);
		window.open(`https://wa.me/31633721505?text=${msg}`, "_blank");
	};
	const handleQuick = (msg) => {
		window.open(`https://wa.me/31633721505?text=${encodeURIComponent("Hallo, " + msg)}`, "_blank");
	};
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		className: "relative min-h-screen flex items-center overflow-hidden",
		style: { background: "linear-gradient(150deg, #fffbeb 0%, #ffffff 50%, #ecfdf5 100%)" },
		children: [
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes dotPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(1.6); }
        }
        @keyframes floatImg {
          0%, 100% { transform: perspective(900px) rotateY(-8deg) rotateX(4deg) translateY(0px); }
          50%       { transform: perspective(900px) rotateY(-8deg) rotateX(4deg) translateY(-12px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .car-3d { animation: floatImg 5s ease-in-out infinite; }
        .stat-float { animation: floatCard 3.5s ease-in-out infinite; }
      ` }),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute inset-0 overflow-hidden pointer-events-none",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "absolute w-[600px] h-[600px] rounded-full",
						style: {
							background: "radial-gradient(circle, rgba(253,230,138,0.45) 0%, transparent 70%)",
							top: "-150px",
							left: "-150px"
						}
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute w-[500px] h-[500px] rounded-full",
						style: {
							background: "radial-gradient(circle, rgba(167,243,208,0.35) 0%, transparent 70%)",
							bottom: "-100px",
							right: "-80px"
						}
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute w-[350px] h-[350px] rounded-full",
						style: {
							background: "radial-gradient(circle, rgba(191,219,254,0.3) 0%, transparent 70%)",
							top: "35%",
							right: "5%"
						}
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 pt-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "order-2 lg:order-1 flex flex-col items-center lg:items-start gap-6",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "inline-flex items-center gap-2 bg-amber-100 border border-amber-300 rounded-full px-4 py-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }), /* @__PURE__ */ jsx("span", {
									className: "text-amber-700 text-sm font-semibold",
									children: "Groningen · 24/7 beschikbaar"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "relative w-full max-w-lg px-8 sm:px-10 lg:px-0",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "absolute inset-0 rounded-3xl blur-3xl opacity-40",
										style: {
											background: "linear-gradient(135deg, #fde68a 0%, #a7f3d0 100%)",
											transform: "scale(0.95) translateY(12px)"
										}
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "car-3d relative rounded-3xl overflow-hidden shadow-2xl",
										style: { boxShadow: "0 30px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.1)" },
										children: [
											/* @__PURE__ */ jsx("img", {
												src: "/nexo-exterior.webp",
												alt: "TaxiAmro Hyundai Nexo – Groningen",
												className: "w-full h-72 object-cover",
												style: { display: "block" }
											}),
											/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" }),
											/* @__PURE__ */ jsx("div", {
												className: "absolute bottom-0 left-0 right-0 px-5 py-4",
												children: /* @__PURE__ */ jsx("div", {
													className: "flex items-center justify-between",
													children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
														className: "text-white font-bold text-base leading-tight",
														children: "TaxiAmro Groningen"
													}), /* @__PURE__ */ jsx("div", {
														className: "text-white/70 text-xs mt-0.5",
														children: "Hyundai Nexo · 100% elektrisch"
													})] })
												})
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "stat-float absolute -top-4 right-0 sm:-right-5 rounded-2xl px-3 py-2 shadow-lg text-center",
										style: {
											background: STATS[0].bg,
											border: `1.5px solid ${STATS[0].border}`,
											boxShadow: `0 8px 24px ${STATS[0].glow}`,
											animationDelay: STATS[0].delay,
											minWidth: 90
										},
										children: [
											/* @__PURE__ */ jsx("div", { style: {
												position: "absolute",
												top: 7,
												right: 9,
												width: 6,
												height: 6,
												borderRadius: "50%",
												background: STATS[0].color,
												opacity: .7,
												animation: "dotPulse 2s infinite"
											} }),
											/* @__PURE__ */ jsx("div", {
												style: { fontSize: 16 },
												children: STATS[0].icon
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 20,
													fontWeight: 800,
													color: STATS[0].color,
													lineHeight: 1.1
												},
												children: STATS[0].value
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 10,
													fontWeight: 700,
													color: "#374151",
													textTransform: "uppercase",
													letterSpacing: .6,
													marginTop: 3
												},
												children: STATS[0].label
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 9,
													color: "#9ca3af",
													marginTop: 1
												},
												children: STATS[0].sub
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "stat-float absolute top-1/2 -translate-y-1/2 left-0 sm:-left-7 rounded-2xl px-3 py-2 shadow-lg text-center",
										style: {
											background: STATS[1].bg,
											border: `1.5px solid ${STATS[1].border}`,
											boxShadow: `0 8px 24px ${STATS[1].glow}`,
											animationDelay: STATS[1].delay,
											minWidth: 88
										},
										children: [
											/* @__PURE__ */ jsx("div", { style: {
												position: "absolute",
												top: 7,
												right: 9,
												width: 6,
												height: 6,
												borderRadius: "50%",
												background: STATS[1].color,
												opacity: .7,
												animation: "dotPulse 2s infinite"
											} }),
											/* @__PURE__ */ jsx("div", {
												style: { fontSize: 16 },
												children: STATS[1].icon
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 20,
													fontWeight: 800,
													color: STATS[1].color,
													lineHeight: 1.1
												},
												children: STATS[1].value
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 10,
													fontWeight: 700,
													color: "#374151",
													textTransform: "uppercase",
													letterSpacing: .6,
													marginTop: 3
												},
												children: STATS[1].label
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 9,
													color: "#9ca3af",
													marginTop: 1
												},
												children: STATS[1].sub
											})
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "stat-float absolute -bottom-4 right-0 sm:-right-5 rounded-2xl px-3 py-2 shadow-lg text-center",
										style: {
											background: STATS[2].bg,
											border: `1.5px solid ${STATS[2].border}`,
											boxShadow: `0 8px 24px ${STATS[2].glow}`,
											animationDelay: STATS[2].delay,
											minWidth: 90
										},
										children: [
											/* @__PURE__ */ jsx("div", { style: {
												position: "absolute",
												top: 7,
												right: 9,
												width: 6,
												height: 6,
												borderRadius: "50%",
												background: STATS[2].color,
												opacity: .7,
												animation: "dotPulse 2s infinite"
											} }),
											/* @__PURE__ */ jsx("div", {
												style: { fontSize: 16 },
												children: STATS[2].icon
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 20,
													fontWeight: 800,
													color: STATS[2].color,
													lineHeight: 1.1
												},
												children: STATS[2].value
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 10,
													fontWeight: 700,
													color: "#374151",
													textTransform: "uppercase",
													letterSpacing: .6,
													marginTop: 3
												},
												children: STATS[2].label
											}),
											/* @__PURE__ */ jsx("div", {
												style: {
													fontSize: 9,
													color: "#9ca3af",
													marginTop: 1
												},
												children: STATS[2].sub
											})
										]
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "w-full max-w-lg",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-gray-400 text-xs uppercase tracking-wide mb-2",
									children: "Snel boeken:"
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-wrap gap-2",
									children: QUICK_ROUTES.map((r) => /* @__PURE__ */ jsx("button", {
										onClick: () => handleQuick(r.msg),
										className: "bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-300 text-gray-600 hover:text-amber-700 text-xs px-3 py-1.5 rounded-full transition-all shadow-sm",
										children: r.label
									}, r.label))
								})]
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "order-1 lg:order-2",
						children: /* @__PURE__ */ jsxs("div", {
							className: "bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-xl shadow-gray-100 text-left",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 mb-5",
									children: [/* @__PURE__ */ jsx("div", {
										className: "w-9 h-9 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0",
										children: /* @__PURE__ */ jsx("svg", {
											className: "w-4 h-4 text-white",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2.5,
												d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											})
										})
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
										className: "text-gray-900 font-bold text-base leading-none",
										children: "Rit boeken"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-gray-400 text-xs mt-0.5",
										children: "Bevestiging via WhatsApp"
									})] })]
								}),
								/* @__PURE__ */ jsxs("form", {
									onSubmit: handleBook,
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [/* @__PURE__ */ jsx("div", {
													className: "absolute left-3.5 top-1/2 -translate-y-1/2",
													children: /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-500 ring-2 ring-green-200" })
												}), /* @__PURE__ */ jsx("input", {
													ref: pickupRef,
													type: "text",
													defaultValue: pickup,
													onChange: (e) => setPickup(e.target.value),
													placeholder: "Ophaaladres",
													className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors text-sm"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "relative",
												children: [/* @__PURE__ */ jsx("div", {
													className: "absolute left-3.5 top-1/2 -translate-y-1/2",
													children: /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-amber-200" })
												}), /* @__PURE__ */ jsx("input", {
													ref: destRef,
													type: "text",
													defaultValue: destination,
													onChange: (e) => setDestination(e.target.value),
													placeholder: "Bestemming",
													className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors text-sm"
												})]
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "relative",
													children: [/* @__PURE__ */ jsx("svg", {
														className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none",
														fill: "none",
														stroke: "currentColor",
														viewBox: "0 0 24 24",
														children: /* @__PURE__ */ jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
														})
													}), /* @__PURE__ */ jsx("input", {
														type: "date",
														value: date,
														onChange: (e) => setDate(e.target.value),
														className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-2 py-3 text-gray-900 focus:outline-none focus:border-amber-400 transition-colors text-sm"
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "relative",
													children: [/* @__PURE__ */ jsx("svg", {
														className: "absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 pointer-events-none",
														fill: "none",
														stroke: "currentColor",
														viewBox: "0 0 24 24",
														children: /* @__PURE__ */ jsx("path", {
															strokeLinecap: "round",
															strokeLinejoin: "round",
															strokeWidth: 2,
															d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
														})
													}), /* @__PURE__ */ jsx("input", {
														type: "time",
														value: time,
														onChange: (e) => setTime(e.target.value),
														className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-2 py-3 text-gray-900 focus:outline-none focus:border-amber-400 transition-colors text-sm"
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between col-span-2 sm:col-span-1",
													children: [
														/* @__PURE__ */ jsx("svg", {
															className: "w-3.5 h-3.5 text-gray-400 flex-shrink-0",
															fill: "none",
															stroke: "currentColor",
															viewBox: "0 0 24 24",
															children: /* @__PURE__ */ jsx("path", {
																strokeLinecap: "round",
																strokeLinejoin: "round",
																strokeWidth: 2,
																d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
															})
														}),
														/* @__PURE__ */ jsx("button", {
															type: "button",
															onClick: () => setPassengers((p) => Math.max(1, p - 1)),
															className: "w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold text-sm flex items-center justify-center transition-colors leading-none",
															children: "−"
														}),
														/* @__PURE__ */ jsx("span", {
															className: "text-gray-900 font-semibold text-sm",
															children: passengers
														}),
														/* @__PURE__ */ jsx("button", {
															type: "button",
															onClick: () => setPassengers((p) => Math.min(4, p + 1)),
															className: "w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded text-gray-700 font-bold text-sm flex items-center justify-center transition-colors leading-none",
															children: "+"
														})
													]
												})
											]
										}),
										/* @__PURE__ */ jsxs("button", {
											type: "submit",
											className: "w-full bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold py-3.5 rounded-xl transition-all hover:scale-[1.01] shadow-md shadow-amber-200 text-base flex items-center justify-center gap-2",
											children: [/* @__PURE__ */ jsx("svg", {
												className: "w-4 h-4",
												fill: "currentColor",
												viewBox: "0 0 24 24",
												children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
											}), "Boek via WhatsApp"]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 mt-4",
									children: [
										/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gray-100" }),
										/* @__PURE__ */ jsx("span", {
											className: "text-gray-400 text-xs",
											children: "of bellen"
										}),
										/* @__PURE__ */ jsx("div", { className: "h-px flex-1 bg-gray-100" })
									]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "tel:+31633721505",
									className: "flex items-center justify-center gap-2 mt-3 text-gray-500 hover:text-amber-600 transition-colors text-sm font-medium",
									children: [/* @__PURE__ */ jsx("svg", {
										className: "w-4 h-4",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										})
									}), "+31 6 33721505"]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs uppercase tracking-widest",
					children: "Scroll"
				}), /* @__PURE__ */ jsx("div", { className: "w-0.5 h-7 bg-gradient-to-b from-gray-300 to-transparent" })]
			})
		]
	});
}
//#endregion
//#region src/hooks/useScrollTilt.js
/**
* Combined mouse-tilt (desktop) + scroll-tilt (mobile) hook.
* Uses requestAnimationFrame for smooth 60fps mobile performance.
*/
function useScrollTilt(intensity = 8) {
	const ref = useRef(null);
	const [tilt, setTilt] = useState({
		x: 0,
		y: 0
	});
	const [hovered, setHovered] = useState(false);
	const onMouseMove = (e) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
		setTilt({
			x: (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2) * -intensity,
			y: dx * intensity
		});
	};
	const onMouseEnter = () => setHovered(true);
	const onMouseLeave = () => {
		setTilt({
			x: 0,
			y: 0
		});
		setHovered(false);
	};
	useEffect(() => {
		if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let rafId = null;
		window.scrollY;
		const compute = () => {
			if (!ref.current) return;
			const rect = ref.current.getBoundingClientRect();
			const vh = window.innerHeight;
			const progress = 1 - rect.bottom / (vh + rect.height);
			setTilt({
				x: Math.max(-1, Math.min(1, (progress - .5) * 2.2)) * intensity * .6,
				y: 0
			});
			rafId = null;
		};
		const onScroll = () => {
			if (rafId !== null) return;
			rafId = requestAnimationFrame(compute);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		compute();
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, [intensity]);
	return {
		ref,
		tilt,
		hovered,
		onMouseMove,
		onMouseEnter,
		onMouseLeave,
		style: { willChange: "transform" }
	};
}
//#endregion
//#region src/components/Services.jsx
var services = [
	{
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 64 64",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				width: 52,
				height: 52
			},
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "32",
					cy: "32",
					r: "28",
					fill: "#3b82f6",
					opacity: "0.1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M12 38 L24 24 L40 24 L52 38",
					stroke: "#3b82f6",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M8 38h48",
					stroke: "#3b82f6",
					strokeWidth: "2.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M18 38V44M46 38V44",
					stroke: "#3b82f6",
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M24 24V16l8-4 8 4v8",
					stroke: "#60a5fa",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "32",
					cy: "12",
					r: "2",
					fill: "#3b82f6"
				})
			]
		}),
		image: "/schiphol.png",
		imageAlt: "Amsterdam Airport Schiphol vliegveld transfer",
		title: "Vliegveld Transfer",
		desc: "Stipt & stressvrij naar elk vliegveld.",
		features: [
			"Vluchtvolging",
			"Ruime bagageruimte",
			"Vaste prijs"
		],
		accent: "#3b82f6",
		glow: "rgba(59,130,246,0.15)",
		border: "rgba(59,130,246,0.18)",
		bg: "linear-gradient(145deg, #eff6ff 0%, #ffffff 60%, #f0f9ff 100%)",
		tag: null
	},
	{
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 64 64",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				width: 52,
				height: 52
			},
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "32",
					cy: "32",
					r: "28",
					fill: "#f59e0b",
					opacity: "0.1"
				}),
				/* @__PURE__ */ jsx("rect", {
					x: "12",
					y: "22",
					width: "40",
					height: "26",
					rx: "4",
					fill: "#fef3c7",
					stroke: "#f59e0b",
					strokeWidth: "2.5"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M12 30h40",
					stroke: "#f59e0b",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "22",
					cy: "38",
					r: "3.5",
					fill: "#fde68a",
					stroke: "#f59e0b",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "42",
					cy: "38",
					r: "3.5",
					fill: "#fde68a",
					stroke: "#f59e0b",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M28 38h8",
					stroke: "#f59e0b",
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M22 22v-5M42 22v-5",
					stroke: "#f59e0b",
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M32 14l2 3h-4l2-3z",
					fill: "#f59e0b"
				})
			]
		}),
		image: "/zakelijk.png",
		imageAlt: "Zakelijk vervoer chauffeur luxe auto",
		title: "Zakelijk Vervoer",
		desc: "Luxe SUV voor elke zakelijke afspraak.",
		features: [
			"Hyundai Nexo",
			"WiFi aan boord",
			"Factuur mogelijk"
		],
		accent: "#f59e0b",
		glow: "rgba(245,158,11,0.18)",
		border: "rgba(245,158,11,0.25)",
		bg: "linear-gradient(145deg, #fffbeb 0%, #ffffff 60%, #fef9ee 100%)",
		tag: "Populair"
	},
	{
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 64 64",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				width: 52,
				height: 52
			},
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "32",
					cy: "32",
					r: "28",
					fill: "#10b981",
					opacity: "0.1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M10 36L20 26H44L54 36",
					stroke: "#10b981",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M8 36h48v6a2 2 0 01-2 2H10a2 2 0 01-2-2v-6z",
					fill: "#d1fae5",
					stroke: "#10b981",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "20",
					cy: "47",
					r: "5",
					fill: "#a7f3d0",
					stroke: "#10b981",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "44",
					cy: "47",
					r: "5",
					fill: "#a7f3d0",
					stroke: "#10b981",
					strokeWidth: "2"
				}),
				/* @__PURE__ */ jsx("rect", {
					x: "28",
					y: "26",
					width: "8",
					height: "8",
					rx: "1",
					fill: "#6ee7b7",
					stroke: "#10b981",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M32 18v5",
					stroke: "#10b981",
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "32",
					cy: "16",
					r: "2",
					fill: "#10b981"
				})
			]
		}),
		image: "/groningen.png",
		imageAlt: "Groningen stad centrum met Martinitoren",
		title: "Stads Taxi",
		desc: "Direct door Groningen, altijd op tijd.",
		features: [
			"Direct beschikbaar",
			"Transparante prijs",
			"Alle locaties"
		],
		accent: "#10b981",
		glow: "rgba(16,185,129,0.15)",
		border: "rgba(16,185,129,0.18)",
		bg: "linear-gradient(145deg, #ecfdf5 0%, #ffffff 60%, #f0fdf4 100%)",
		tag: null
	},
	{
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 64 64",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				width: 52,
				height: 52
			},
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "32",
					cy: "32",
					r: "28",
					fill: "#0ea5e9",
					opacity: "0.1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M14 36h36M14 36l4-10h28l4 10",
					stroke: "#0ea5e9",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M14 36v6M50 36v6",
					stroke: "#0ea5e9",
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M20 26v-8a2 2 0 012-2h20a2 2 0 012 2v8",
					stroke: "#7dd3fc",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "22",
					cy: "44",
					r: "4",
					fill: "#bae6fd",
					stroke: "#0ea5e9",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "42",
					cy: "44",
					r: "4",
					fill: "#bae6fd",
					stroke: "#0ea5e9",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M28 26h8M26 30h12",
					stroke: "#0ea5e9",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				})
			]
		}),
		image: "/eemshaven.png",
		imageAlt: "Beatrixhaven Eemshaven",
		title: "Eemshaven Vervoer",
		desc: "Voor havenarbeiders, cruisegasten & zeelieden.",
		features: [
			"24/7 beschikbaar",
			"Vaste prijs",
			"Cruise terminal"
		],
		accent: "#0ea5e9",
		glow: "rgba(14,165,233,0.15)",
		border: "rgba(14,165,233,0.18)",
		bg: "linear-gradient(145deg, #f0f9ff 0%, #ffffff 60%, #e0f2fe 100%)",
		tag: null
	},
	{
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 64 64",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				width: 52,
				height: 52
			},
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "32",
					cy: "32",
					r: "28",
					fill: "#8b5cf6",
					opacity: "0.1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M8 40h48M8 40l5-14h38l5 14",
					stroke: "#8b5cf6",
					strokeWidth: "2.5",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					fill: "none"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M8 40v6M56 40v6",
					stroke: "#8b5cf6",
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "16",
					cy: "48",
					r: "4",
					fill: "#ddd6fe",
					stroke: "#8b5cf6",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "48",
					cy: "48",
					r: "4",
					fill: "#ddd6fe",
					stroke: "#8b5cf6",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M13 26h38v-4a2 2 0 00-2-2H15a2 2 0 00-2 2v4z",
					fill: "#ede9fe",
					stroke: "#8b5cf6",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M20 26v-6M28 26v-6M36 26v-6M44 26v-6",
					stroke: "#8b5cf6",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				})
			]
		}),
		image: "/groepsvervoer.png",
		imageAlt: "Mercedes groepsvervoer bus",
		title: "Groepsvervoer",
		desc: "Comfortabele bus voor groepen tot 8 personen.",
		features: [
			"Tot 8 passagiers",
			"Evenementen & uitjes",
			"Vaste groepsprijs"
		],
		accent: "#8b5cf6",
		glow: "rgba(139,92,246,0.15)",
		border: "rgba(139,92,246,0.18)",
		bg: "linear-gradient(145deg, #f5f3ff 0%, #ffffff 60%, #faf5ff 100%)",
		tag: "Nieuw"
	},
	{
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 64 64",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			style: {
				width: 52,
				height: 52
			},
			children: [
				/* @__PURE__ */ jsx("circle", {
					cx: "32",
					cy: "32",
					r: "28",
					fill: "#ef4444",
					opacity: "0.1"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M32 14l3 8h8l-6.5 5 2.5 8L32 30l-7 5 2.5-8L22 22h8l2-8z",
					fill: "#fecaca",
					stroke: "#ef4444",
					strokeWidth: "2",
					strokeLinejoin: "round"
				}),
				/* @__PURE__ */ jsx("path", {
					d: "M20 44h24M22 48h20",
					stroke: "#ef4444",
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "20",
					cy: "50",
					r: "2",
					fill: "#ef4444"
				}),
				/* @__PURE__ */ jsx("circle", {
					cx: "44",
					cy: "50",
					r: "2",
					fill: "#ef4444"
				})
			]
		}),
		image: "/duitsland.png",
		imageAlt: "Grens Bundesrepublik Deutschland grensoverschrijdend vervoer",
		title: "Grensoverschrijdend",
		desc: "Naar Emden, Leer, Bremen & Düsseldorf.",
		features: [
			"Emden & Leer (DE)",
			"Bremen Airport",
			"Vaste grensrit prijs"
		],
		accent: "#ef4444",
		glow: "rgba(239,68,68,0.15)",
		border: "rgba(239,68,68,0.18)",
		bg: "linear-gradient(145deg, #fef2f2 0%, #ffffff 60%, #fff5f5 100%)",
		tag: null
	}
];
function ServiceCard({ service, index }) {
	const { ref: cardRef, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave } = useScrollTilt(10);
	return /* @__PURE__ */ jsx("div", {
		ref: cardRef,
		"data-reveal": true,
		className: `fade-up stagger-${index + 1}`,
		onMouseMove,
		onMouseEnter,
		onMouseLeave,
		style: { perspective: 900 },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				background: service.bg,
				border: `1.5px solid ${hovered ? service.accent : service.border}`,
				borderRadius: 24,
				overflow: "hidden",
				transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
				transition: hovered ? "transform 0.06s ease, box-shadow 0.3s, border-color 0.3s" : "transform 0.55s ease, box-shadow 0.3s, border-color 0.3s",
				boxShadow: hovered ? `0 28px 60px ${service.glow}, 0 8px 24px rgba(0,0,0,0.07)` : "0 4px 16px rgba(0,0,0,0.05)",
				transformStyle: "preserve-3d",
				position: "relative",
				height: "100%",
				display: "flex",
				flexDirection: "column"
			},
			children: [/* @__PURE__ */ jsxs("div", {
				style: {
					position: "relative",
					height: 180,
					flexShrink: 0
				},
				children: [
					/* @__PURE__ */ jsx("img", {
						src: service.image,
						alt: service.imageAlt,
						style: {
							width: "100%",
							height: "100%",
							objectFit: "cover",
							display: "block",
							filter: hovered ? "brightness(1.05)" : "brightness(0.95)",
							transition: "filter 0.35s ease"
						}
					}),
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						inset: 0,
						background: `linear-gradient(to bottom, transparent 40%, ${service.accent}30 100%)`
					} }),
					service.tag && /* @__PURE__ */ jsxs("div", {
						style: {
							position: "absolute",
							top: 12,
							left: "50%",
							transform: "translateX(-50%)",
							background: `linear-gradient(135deg, ${service.accent}, #fb923c)`,
							color: "#fff",
							fontSize: 10,
							fontWeight: 800,
							padding: "4px 14px",
							borderRadius: 999,
							textTransform: "uppercase",
							letterSpacing: 1,
							boxShadow: `0 4px 14px ${service.glow}`,
							whiteSpace: "nowrap"
						},
						children: ["★ ", service.tag]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					padding: "20px 20px 24px",
					flex: 1,
					display: "flex",
					flexDirection: "column"
				},
				children: [
					/* @__PURE__ */ jsx("div", { style: {
						position: "absolute",
						top: 10,
						left: 16,
						width: 80,
						height: 80,
						borderRadius: "50%",
						background: `radial-gradient(circle, ${service.glow} 0%, transparent 70%)`,
						filter: "blur(16px)",
						opacity: hovered ? 1.2 : .6,
						transition: "opacity 0.3s",
						pointerEvents: "none"
					} }),
					/* @__PURE__ */ jsx("div", {
						style: {
							transform: `translateZ(${hovered ? 18 : 0}px) scale(${hovered ? 1.05 : 1})`,
							transition: "transform 0.35s ease",
							marginBottom: 18,
							display: "inline-block",
							position: "relative"
						},
						children: service.icon
					}),
					/* @__PURE__ */ jsx("h3", {
						style: {
							fontSize: 19,
							fontWeight: 700,
							color: "#111827",
							marginBottom: 6,
							transform: `translateZ(${hovered ? 8 : 0}px)`,
							transition: "transform 0.35s ease"
						},
						children: service.title
					}),
					/* @__PURE__ */ jsx("p", {
						style: {
							fontSize: 14,
							color: "#6b7280",
							lineHeight: 1.6,
							marginBottom: 18
						},
						children: service.desc
					}),
					/* @__PURE__ */ jsx("div", { style: {
						height: 1.5,
						borderRadius: 2,
						marginBottom: 14,
						background: `linear-gradient(to right, ${service.accent}40, transparent)`
					} }),
					/* @__PURE__ */ jsx("ul", {
						style: {
							listStyle: "none",
							padding: 0,
							margin: 0,
							display: "flex",
							flexDirection: "column",
							gap: 9
						},
						children: service.features.map((f) => /* @__PURE__ */ jsxs("li", {
							style: {
								display: "flex",
								alignItems: "center",
								gap: 9,
								fontSize: 13,
								color: "#374151",
								fontWeight: 500
							},
							children: [/* @__PURE__ */ jsx("span", {
								style: {
									width: 20,
									height: 20,
									borderRadius: "50%",
									flexShrink: 0,
									background: service.accent + "18",
									border: `1px solid ${service.accent}40`,
									display: "flex",
									alignItems: "center",
									justifyContent: "center"
								},
								children: /* @__PURE__ */ jsx("svg", {
									width: "10",
									height: "10",
									viewBox: "0 0 10 10",
									fill: "none",
									children: /* @__PURE__ */ jsx("path", {
										d: "M1.5 5l2.5 2.5 4.5-5",
										stroke: service.accent,
										strokeWidth: "1.5",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})
							}), f]
						}, f))
					}),
					/* @__PURE__ */ jsxs("a", {
						href: `https://wa.me/31633721505?text=Hallo, ik wil graag ${service.title} boeken.`,
						target: "_blank",
						rel: "noopener noreferrer",
						style: {
							marginTop: 22,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							gap: 6,
							padding: "11px 0",
							borderRadius: 14,
							background: hovered ? service.accent : "transparent",
							border: `1.5px solid ${service.accent}`,
							color: hovered ? "#fff" : service.accent,
							fontSize: 13,
							fontWeight: 700,
							transition: "all 0.25s ease",
							textDecoration: "none",
							letterSpacing: .3
						},
						children: ["Boek direct", /* @__PURE__ */ jsx("svg", {
							width: "14",
							height: "14",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2.5,
								d: "M9 5l7 7-7 7"
							})
						})]
					})
				]
			})]
		})
	});
}
function Services() {
	return /* @__PURE__ */ jsx("section", {
		id: "services",
		className: "py-28 overflow-hidden",
		style: { background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)" },
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-1.5 mb-5",
						children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" }), /* @__PURE__ */ jsx("span", {
							className: "text-amber-700 text-xs font-bold uppercase tracking-widest",
							children: "Onze Diensten"
						})]
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight",
						children: "Taxi op maat"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-500 text-lg max-w-lg mx-auto",
						children: "Van vliegveld tot Eemshaven, van stadsrit tot grensoverschrijdend vervoer — stil, snel en betrouwbaar."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
				children: services.map((service, i) => /* @__PURE__ */ jsx(ServiceCard, {
					service,
					index: i
				}, service.title))
			})]
		})
	});
}
//#endregion
//#region src/components/WhyUs.jsx
var features = [
	{
		icon: "⚡",
		title: "100% Elektrisch",
		desc: "Wij rijden uitsluitend in de Hyundai Nexo — schoon, stil en duurzaam. Goed voor u en het milieu."
	},
	{
		icon: "🕐",
		title: "Altijd op tijd",
		desc: "Stipt ophalen en afzetten, ook voor vroege ochtendvluchten. U hoeft nooit te wachten."
	},
	{
		icon: "🛡️",
		title: "Veilig & betrouwbaar",
		desc: "Professionele chauffeur met jarenlange ervaring. Uw veiligheid staat altijd voorop."
	},
	{
		icon: "💳",
		title: "Transparante prijs",
		desc: "Geen verborgen kosten. U weet van tevoren precies wat u betaalt. Contant of per bank."
	},
	{
		icon: "📱",
		title: "Makkelijk boeken",
		desc: "Boek snel via WhatsApp, telefoon of e-mail. Wij reageren snel en bevestigen direct."
	},
	{
		icon: "🌍",
		title: "24/7 beschikbaar",
		desc: "Ook op zon- en feestdagen beschikbaar. Dag en nacht klaar voor uw rit."
	}
];
function WhyUs() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-amber-600 font-semibold text-sm uppercase tracking-widest",
						children: "Waarom Taxi Amro"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4",
						children: "Kwaliteit die u kunt voelen"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-500 text-lg max-w-xl mx-auto",
						children: "Meer dan een rit — een premium rijervaring die u telkens opnieuw kiest."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
				children: features.map((f, i) => /* @__PURE__ */ jsxs("div", {
					"data-reveal": true,
					className: `fade-up stagger-${i + 1} bg-white border border-gray-100 rounded-2xl p-6 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-50 transition-all`,
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-4xl mb-4",
							children: f.icon
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-semibold text-gray-900 mb-2",
							children: f.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-500 text-sm leading-relaxed",
							children: f.desc
						})
					]
				}, f.title))
			})]
		})
	});
}
//#endregion
//#region src/components/Fleet.jsx
var specs = [
	{
		label: "Type",
		value: "Hyundai Nexo",
		icon: "🚗"
	},
	{
		label: "Aandrijving",
		value: "Waterstof (FCEV)",
		icon: "💧"
	},
	{
		label: "Emissies",
		value: "0 g CO₂/km",
		icon: "🌿"
	},
	{
		label: "Actieradius",
		value: "~666 km",
		icon: "📍"
	},
	{
		label: "Passagiers",
		value: "Tot 4 — of bus (8 pax)",
		icon: "👥"
	},
	{
		label: "Kofferbak",
		value: "Ruime bagageruimte",
		icon: "🧳"
	}
];
var gallery = [
	{
		src: "/nexo-exterior.webp",
		label: "Exterieur"
	},
	{
		src: "/nexo-interior.webp",
		label: "Interieur"
	},
	{
		src: "/nexo-dashboard.webp",
		label: "Dashboard"
	},
	{
		src: "/nexo-engine.webp",
		label: "Waterstofmotor"
	}
];
function SpecCard({ spec }) {
	const { ref, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave } = useScrollTilt(8);
	return /* @__PURE__ */ jsx("div", {
		ref,
		onMouseMove,
		onMouseEnter,
		onMouseLeave,
		style: { perspective: 600 },
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				background: hovered ? "linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)" : "#f9fafb",
				border: hovered ? "1.5px solid #fbbf24" : "1.5px solid #f3f4f6",
				borderRadius: 16,
				padding: "14px 10px",
				textAlign: "center",
				transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(${hovered ? 8 : 0}px)`,
				transition: hovered ? "transform 0.06s ease, box-shadow 0.3s, border-color 0.3s, background 0.3s" : "transform 0.5s ease, box-shadow 0.3s, border-color 0.3s, background 0.3s",
				boxShadow: hovered ? "0 12px 32px rgba(245,158,11,0.15), 0 4px 12px rgba(0,0,0,0.06)" : "0 1px 4px rgba(0,0,0,0.04)",
				transformStyle: "preserve-3d",
				cursor: "default"
			},
			children: [
				/* @__PURE__ */ jsx("div", {
					style: {
						fontSize: 20,
						marginBottom: 4
					},
					children: spec.icon
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						color: "#6b7280",
						fontSize: 11,
						marginBottom: 3,
						fontWeight: 500
					},
					children: spec.label
				}),
				/* @__PURE__ */ jsx("div", {
					style: {
						color: "#111827",
						fontWeight: 700,
						fontSize: 13,
						transform: `translateZ(${hovered ? 6 : 0}px)`,
						transition: "transform 0.3s ease"
					},
					children: spec.value
				})
			]
		})
	});
}
function Fleet() {
	const [active, setActive] = useState(0);
	const { ref, tilt, hovered, onMouseMove, onMouseEnter, onMouseLeave } = useScrollTilt(8);
	return /* @__PURE__ */ jsxs("section", {
		className: "py-16 sm:py-24 bg-white overflow-hidden relative",
		children: [
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				width: 400,
				height: 400,
				borderRadius: "50%",
				background: "radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)",
				top: "10%",
				right: "-10%",
				pointerEvents: "none",
				filter: "blur(40px)"
			} }),
			/* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				width: 300,
				height: 300,
				borderRadius: "50%",
				background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
				bottom: "5%",
				left: "-5%",
				pointerEvents: "none",
				filter: "blur(40px)"
			} }),
			/* @__PURE__ */ jsxs("div", {
				className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
				style: { position: "relative" },
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-16",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-yellow-500 font-semibold text-sm uppercase tracking-widest",
							children: "Onze vloot"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4",
							children: "Rijden in de toekomst"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-gray-500 text-lg max-w-xl mx-auto",
							children: "Wij rijden uitsluitend in de Hyundai Nexo — de meest geavanceerde waterstof-SUV ter wereld."
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl mx-auto w-full",
					children: [
						/* @__PURE__ */ jsx("div", {
							ref,
							onMouseMove,
							onMouseEnter,
							onMouseLeave,
							style: {
								perspective: 1e3,
								marginBottom: 12
							},
							children: /* @__PURE__ */ jsxs("div", {
								style: {
									borderRadius: 20,
									overflow: "hidden",
									background: "#111827",
									transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
									transition: hovered ? "transform 0.06s ease, box-shadow 0.3s" : "transform 0.55s ease, box-shadow 0.3s",
									boxShadow: hovered ? "0 40px 80px rgba(0,0,0,0.25), 0 12px 32px rgba(251,191,36,0.12)" : "0 8px 32px rgba(0,0,0,0.18)",
									transformStyle: "preserve-3d",
									position: "relative"
								},
								children: [
									gallery.map((item, i) => /* @__PURE__ */ jsx("img", {
										src: item.src,
										alt: item.label,
										className: "w-full object-cover transition-all duration-500",
										style: {
											height: 320,
											display: i === active ? "block" : "none",
											objectPosition: item.src.includes("interior") ? "center center" : "center 35%",
											transform: hovered ? "scale(1.03)" : "scale(1)",
											transition: "transform 0.5s ease"
										}
									}, item.src)),
									/* @__PURE__ */ jsx("div", { style: {
										position: "absolute",
										inset: 0,
										background: hovered ? `radial-gradient(ellipse at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, rgba(255,255,255,0.08) 0%, transparent 60%)` : "none",
										pointerEvents: "none",
										transition: "background 0.1s"
									} }),
									/* @__PURE__ */ jsx("div", {
										className: "absolute bottom-0 inset-x-0 px-5 py-4",
										style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" },
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-white font-semibold text-sm",
												style: {
													transform: `translateZ(${hovered ? 14 : 0}px)`,
													transition: "transform 0.35s ease"
												},
												children: gallery[active].label
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1.5 bg-green-500/20 border border-green-500/40 rounded-full px-3 py-1",
												style: {
													transform: `translateZ(${hovered ? 14 : 0}px)`,
													transition: "transform 0.35s ease"
												},
												children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-green-400 rounded-full" }), /* @__PURE__ */ jsx("span", {
													className: "text-green-400 text-xs font-medium",
													children: "Zero Emissie"
												})]
											})]
										})
									})
								]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-4 gap-2 mb-4",
							children: gallery.map((item, i) => /* @__PURE__ */ jsxs("button", {
								onClick: () => setActive(i),
								className: "relative rounded-xl overflow-hidden transition-all",
								style: {
									outline: i === active ? "2px solid #eab308" : "2px solid transparent",
									outlineOffset: 2,
									opacity: i === active ? 1 : .6,
									transform: i === active ? "translateY(-2px) scale(1.02)" : "none",
									transition: "all 0.2s ease",
									boxShadow: i === active ? "0 4px 12px rgba(234,179,8,0.3)" : "none"
								},
								children: [/* @__PURE__ */ jsx("img", {
									src: item.src,
									alt: item.label,
									className: "w-full object-cover",
									style: {
										height: 60,
										objectPosition: "center"
									}
								}), /* @__PURE__ */ jsx("div", {
									className: "absolute inset-x-0 bottom-0 px-1.5 py-1",
									style: { background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" },
									children: /* @__PURE__ */ jsx("span", {
										className: "text-white text-[10px] font-medium",
										children: item.label
									})
								})]
							}, item.src))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
							children: specs.map((spec) => /* @__PURE__ */ jsx(SpecCard, { spec }, spec.label))
						}),
						/* @__PURE__ */ jsxs("a", {
							href: "https://wa.me/31633721505?text=Hallo, ik wil graag een bus boeken voor 8 personen.",
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								display: "flex",
								alignItems: "center",
								gap: 14,
								marginTop: 16,
								padding: "16px 20px",
								borderRadius: 16,
								background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
								border: "1.5px solid rgba(251,191,36,0.3)",
								boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
								textDecoration: "none",
								transition: "box-shadow 0.3s, transform 0.3s"
							},
							onMouseEnter: (e) => {
								e.currentTarget.style.boxShadow = "0 8px 32px rgba(251,191,36,0.2), 0 4px 16px rgba(0,0,0,0.15)";
								e.currentTarget.style.transform = "translateY(-2px)";
							},
							onMouseLeave: (e) => {
								e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
								e.currentTarget.style.transform = "none";
							},
							children: [
								/* @__PURE__ */ jsx("div", {
									style: {
										width: 44,
										height: 44,
										borderRadius: 12,
										flexShrink: 0,
										background: "rgba(251,191,36,0.15)",
										border: "1px solid rgba(251,191,36,0.3)",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontSize: 22
									},
									children: "🚌"
								}),
								/* @__PURE__ */ jsxs("div", {
									style: { flex: 1 },
									children: [/* @__PURE__ */ jsx("div", {
										style: {
											color: "#fbbf24",
											fontWeight: 700,
											fontSize: 14,
											marginBottom: 2
										},
										children: "Groepsvervoer beschikbaar"
									}), /* @__PURE__ */ jsxs("div", {
										style: {
											color: "#94a3b8",
											fontSize: 12
										},
										children: [
											"Ruime bus voor tot ",
											/* @__PURE__ */ jsx("strong", {
												style: { color: "#e2e8f0" },
												children: "8 passagiers"
											}),
											" — ideaal voor groepen & uitstapjes"
										]
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									style: {
										color: "#fbbf24",
										fontSize: 20
									},
									children: "→"
								})
							]
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/Pricing.jsx
var rates = [
	{
		label: "Starttarief",
		value: "€ 4,15",
		desc: "Per rit",
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			width: "22",
			height: "22",
			children: [/* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "12",
				r: "10",
				stroke: "#f59e0b",
				strokeWidth: "2"
			}), /* @__PURE__ */ jsx("path", {
				d: "M12 6v6l4 2",
				stroke: "#f59e0b",
				strokeWidth: "2",
				strokeLinecap: "round"
			})]
		})
	},
	{
		label: "Per kilometer",
		value: "€ 3,05",
		desc: "Per km",
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			width: "22",
			height: "22",
			children: [/* @__PURE__ */ jsx("path", {
				d: "M3 12h18M3 12l4-4m-4 4l4 4",
				stroke: "#f59e0b",
				strokeWidth: "2",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}), /* @__PURE__ */ jsx("circle", {
				cx: "19",
				cy: "12",
				r: "2",
				fill: "#f59e0b"
			})]
		})
	},
	{
		label: "Per minuut",
		value: "€ 0,50",
		desc: "Wachttijd",
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			width: "22",
			height: "22",
			children: [/* @__PURE__ */ jsx("path", {
				d: "M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z",
				stroke: "#f59e0b",
				strokeWidth: "2"
			}), /* @__PURE__ */ jsx("path", {
				d: "M12 7v5l3 3",
				stroke: "#f59e0b",
				strokeWidth: "2",
				strokeLinecap: "round"
			})]
		})
	},
	{
		label: "Wachttarief",
		value: "€ 57,20",
		desc: "Per uur",
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			width: "22",
			height: "22",
			children: [/* @__PURE__ */ jsx("rect", {
				x: "3",
				y: "6",
				width: "18",
				height: "13",
				rx: "2",
				stroke: "#f59e0b",
				strokeWidth: "2"
			}), /* @__PURE__ */ jsx("path", {
				d: "M8 6V4m8 2V4",
				stroke: "#f59e0b",
				strokeWidth: "2",
				strokeLinecap: "round"
			})]
		})
	},
	{
		label: "Reinigingskosten",
		value: "€ 300+",
		desc: "Bij bevuiling",
		icon: /* @__PURE__ */ jsxs("svg", {
			viewBox: "0 0 24 24",
			fill: "none",
			width: "22",
			height: "22",
			children: [/* @__PURE__ */ jsx("path", {
				d: "M12 2C8 2 5 6 5 10c0 5 7 12 7 12s7-7 7-12c0-4-3-8-7-8z",
				stroke: "#f59e0b",
				strokeWidth: "2"
			}), /* @__PURE__ */ jsx("circle", {
				cx: "12",
				cy: "10",
				r: "2.5",
				fill: "#f59e0b"
			})]
		})
	}
];
function PriceCard({ rate, index }) {
	const ref = useRef(null);
	const [tilt, setTilt] = useState({
		x: 0,
		y: 0
	});
	const [hovered, setHovered] = useState(false);
	const onMove = (e) => {
		const r = ref.current.getBoundingClientRect();
		const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
		setTilt({
			x: (e.clientY - (r.top + r.height / 2)) / (r.height / 2) * -8,
			y: dx * 8
		});
	};
	return /* @__PURE__ */ jsxs("div", {
		ref,
		onMouseMove: onMove,
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => {
			setHovered(false);
			setTilt({
				x: 0,
				y: 0
			});
		},
		style: {
			transform: hovered ? `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)` : "perspective(600px) rotateX(0deg) rotateY(0deg)",
			transition: hovered ? "transform 0.08s ease-out" : "transform 0.4s ease",
			animationDelay: `${index * .07}s`
		},
		className: "relative bg-gray-900 rounded-2xl p-5 flex items-center justify-between group cursor-default",
		children: [
			/* @__PURE__ */ jsx("div", {
				style: { opacity: hovered ? .15 : 0 },
				className: "absolute inset-0 rounded-2xl bg-yellow-400 transition-opacity duration-300 pointer-events-none"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4 z-10",
				children: [/* @__PURE__ */ jsx("div", {
					style: {
						transform: hovered ? "translateZ(12px) scale(1.15)" : "none",
						transition: "transform 0.25s"
					},
					className: "w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0",
					children: rate.icon
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-white font-semibold text-sm",
					children: rate.label
				}), /* @__PURE__ */ jsx("div", {
					className: "text-gray-500 text-xs",
					children: rate.desc
				})] })]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-yellow-400 font-bold text-lg z-10 ml-4 whitespace-nowrap",
				children: rate.value
			})
		]
	});
}
function Pricing() {
	return /* @__PURE__ */ jsxs("section", {
		id: "pricing",
		className: "py-20 bg-gradient-to-br from-gray-50 via-white to-amber-50/40",
		children: [/* @__PURE__ */ jsx("style", { children: `
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
        .orb-1 { animation: orbPulse 4s ease-in-out infinite; }
        .orb-2 { animation: orbPulse 5.5s ease-in-out infinite 1s; }
        .float-badge { animation: floatBadge 3.5s ease-in-out infinite; }
      ` }), /* @__PURE__ */ jsxs("div", {
			className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-14",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-amber-500 font-semibold text-xs uppercase tracking-widest",
						children: "Tarieven"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3",
						children: "Duidelijke tarieven"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-500 text-base max-w-md mx-auto",
						children: "Transparant en conform officiële taxitarieven."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "max-w-2xl mx-auto",
				children: /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsx("div", { className: "orb-1 absolute -top-8 -left-8 w-40 h-40 rounded-full bg-yellow-300/20 blur-3xl pointer-events-none" }),
						/* @__PURE__ */ jsx("div", { className: "orb-2 absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" }),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-5",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 bg-gray-900 rounded-xl px-4 py-2",
								children: [/* @__PURE__ */ jsxs("svg", {
									viewBox: "0 0 24 24",
									fill: "none",
									width: "16",
									height: "16",
									children: [/* @__PURE__ */ jsx("rect", {
										x: "2",
										y: "3",
										width: "20",
										height: "14",
										rx: "2",
										stroke: "#fbbf24",
										strokeWidth: "2"
									}), /* @__PURE__ */ jsx("path", {
										d: "M8 21h8M12 17v4",
										stroke: "#fbbf24",
										strokeWidth: "2",
										strokeLinecap: "round"
									})]
								}), /* @__PURE__ */ jsx("span", {
									className: "text-white font-bold text-sm",
									children: "Metertarief"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "float-badge bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md",
								children: "Officieel"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "space-y-3",
							children: rates.map((rate, i) => /* @__PURE__ */ jsx(PriceCard, {
								rate,
								index: i
							}, rate.label))
						})
					]
				})
			})]
		})]
	});
}
//#endregion
//#region src/components/PriceCalculator.jsx
var START_RATE = 4.15;
var PER_KM = 3.05;
var PER_MIN = .5;
var API_KEY = "AIzaSyCD5qmtEw7Aa1levZR5U59Q5vzmUbD3y4I";
function getDiscount(km) {
	if (km > 100) return .3;
	if (km > 50) return .2;
	if (km > 18) return .15;
	return 0;
}
function discountLabel(d) {
	if (d === .3) return "30% korting (>100 km)";
	if (d === .2) return "20% korting (>50 km)";
	if (d === .15) return "15% korting (>18 km)";
	return null;
}
function loadGoogleMaps() {
	return new Promise((resolve, reject) => {
		if (window.google?.maps?.places) return resolve(window.google);
		if (document.getElementById("gmap-script")) {
			const check = setInterval(() => {
				if (window.google?.maps?.places) {
					clearInterval(check);
					resolve(window.google);
				}
			}, 100);
			return;
		}
		const script = document.createElement("script");
		script.id = "gmap-script";
		script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
		script.async = true;
		script.onload = () => resolve(window.google);
		script.onerror = reject;
		document.head.appendChild(script);
	});
}
function useAutoComplete(inputRef, onPlace) {
	useEffect(() => {
		if (!inputRef.current || API_KEY === "YOUR_API_KEY_HERE") return;
		let ac;
		loadGoogleMaps().then((google) => {
			ac = new google.maps.places.Autocomplete(inputRef.current, {
				types: ["geocode"],
				componentRestrictions: { country: "nl" }
			});
			ac.addListener("place_changed", () => {
				const place = ac.getPlace();
				if (place?.geometry) onPlace(place);
			});
		});
		return () => {
			if (ac) window.google?.maps?.event?.clearInstanceListeners(ac);
		};
	}, [inputRef, onPlace]);
}
function AnimatedNumber({ value }) {
	const [display, setDisplay] = useState(0);
	useEffect(() => {
		if (!value) return setDisplay(0);
		const target = parseFloat(value);
		const start = display;
		const diff = target - start;
		const steps = 40;
		let i = 0;
		const t = setInterval(() => {
			i++;
			setDisplay(+(start + diff * (i / steps)).toFixed(2));
			if (i >= steps) clearInterval(t);
		}, 18);
		return () => clearInterval(t);
	}, [value]);
	return /* @__PURE__ */ jsxs("span", { children: ["€ ", display.toFixed(2)] });
}
function RouteAnimation({ active }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "relative h-2 rounded-full bg-gray-100 overflow-hidden my-4",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-1000",
			style: { width: active ? "100%" : "0%" }
		}), active && /* @__PURE__ */ jsx("div", {
			className: "absolute inset-y-0 right-0 w-4 h-full flex items-center justify-end pr-1",
			children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-white rounded-full shadow animate-ping" })
		})]
	});
}
function PriceCalculator() {
	const originRef = useRef(null);
	const destRef = useRef(null);
	const [originPlace, setOriginPlace] = useState(null);
	const [destPlace, setDestPlace] = useState(null);
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [tilt, setTilt] = useState({
		x: 0,
		y: 0
	});
	const [hovered, setHovered] = useState(false);
	const cardRef = useRef(null);
	const noKey = API_KEY === "YOUR_API_KEY_HERE";
	const onOriginPlace = useCallback((p) => setOriginPlace(p), []);
	const onDestPlace = useCallback((p) => setDestPlace(p), []);
	useAutoComplete(originRef, onOriginPlace);
	useAutoComplete(destRef, onDestPlace);
	const calculate = async () => {
		if (noKey) return;
		const origin = originRef.current.value.trim();
		const dest = destRef.current.value.trim();
		if (!origin || !dest) return setError("Vul beide adressen in.");
		setError("");
		setLoading(true);
		setResult(null);
		try {
			const google = await loadGoogleMaps();
			new google.maps.DistanceMatrixService().getDistanceMatrix({
				origins: [origin],
				destinations: [dest],
				travelMode: google.maps.TravelMode.DRIVING,
				unitSystem: google.maps.UnitSystem.METRIC
			}, (res, status) => {
				setLoading(false);
				if (status !== "OK") return setError("Kon de route niet berekenen.");
				const el = res.rows[0]?.elements[0];
				if (el?.status !== "OK") return setError("Geen route gevonden tussen deze adressen.");
				const km = el.distance.value / 1e3;
				const min = el.duration.value / 60;
				const basePrice = START_RATE + km * PER_KM + min * PER_MIN;
				const discount = getDiscount(km);
				const finalPrice = basePrice * (1 - discount);
				setResult({
					km: km.toFixed(1),
					min: Math.round(min),
					basePrice: basePrice.toFixed(2),
					discount,
					price: finalPrice.toFixed(2),
					distText: el.distance.text,
					durText: el.duration.text,
					origin: res.originAddresses[0],
					dest: res.destinationAddresses[0]
				});
			});
		} catch {
			setLoading(false);
			setError("Fout bij laden van Google Maps.");
		}
	};
	const handleMouseMove = (e) => {
		if (!cardRef.current) return;
		const r = cardRef.current.getBoundingClientRect();
		setTilt({
			x: (e.clientY - (r.top + r.height / 2)) / (r.height / 2) * -6,
			y: (e.clientX - (r.left + r.width / 2)) / (r.width / 2) * 6
		});
	};
	const handleWhatsApp = () => {
		if (!result) return;
		const msg = encodeURIComponent(`Hallo TaxiAmro,\n\nIk wil graag een rit boeken.\n\n📍 Van: ${result.origin}\n📍 Naar: ${result.dest}\n📏 Afstand: ${result.distText}\n⏱ Reistijd: ${result.durText}\n💶 Geschat: €${result.price}\n\nKan ik een vaste prijs aanvragen?`);
		window.open(`https://wa.me/31633721505?text=${msg}`, "_blank");
	};
	return /* @__PURE__ */ jsxs("section", {
		className: "py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/50",
		id: "calculator",
		children: [/* @__PURE__ */ jsx("style", { children: `
        @keyframes spinOrb { from { transform: rotate(0deg) translateX(60px) rotate(0deg); } to { transform: rotate(360deg) translateX(60px) rotate(-360deg); } }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dotBounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
        .spin-orb { animation: spinOrb 8s linear infinite; }
        .fade-slide-up { animation: fadeSlideUp 0.45s ease forwards; }
        .dot1 { animation: dotBounce 1.2s infinite 0s; }
        .dot2 { animation: dotBounce 1.2s infinite 0.2s; }
        .dot3 { animation: dotBounce 1.2s infinite 0.4s; }
        .input-glow:focus { box-shadow: 0 0 0 3px rgba(251,191,36,0.2); }
      ` }), /* @__PURE__ */ jsxs("div", {
			className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-14",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-amber-500 font-semibold text-xs uppercase tracking-widest",
						children: "Prijsberekening"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3",
						children: "Bereken uw ritprijs"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-500 text-base max-w-md mx-auto",
						children: "Voer uw route in — realtime afstand via Google Maps."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start",
				children: [/* @__PURE__ */ jsxs("div", {
					ref: cardRef,
					onMouseMove: handleMouseMove,
					onMouseEnter: () => setHovered(true),
					onMouseLeave: () => {
						setHovered(false);
						setTilt({
							x: 0,
							y: 0
						});
					},
					style: {
						transform: hovered ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` : "perspective(800px) rotateX(0deg) rotateY(0deg)",
						transition: hovered ? "transform 0.1s ease-out" : "transform 0.5s ease"
					},
					className: "relative bg-white rounded-3xl shadow-xl shadow-gray-200/80 p-8 overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none",
							children: /* @__PURE__ */ jsx("div", { className: "spin-orb w-3 h-3 rounded-full bg-amber-300/40 blur-sm" })
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 rounded-full bg-amber-100/60 blur-3xl pointer-events-none" }),
						noKey && /* @__PURE__ */ jsxs("div", {
							className: "mb-5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								width: "18",
								height: "18",
								className: "flex-shrink-0 mt-0.5",
								children: /* @__PURE__ */ jsx("path", {
									d: "M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z",
									stroke: "#d97706",
									strokeWidth: "2",
									strokeLinecap: "round"
								})
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "text-amber-800 font-semibold text-xs mb-0.5",
								children: "Google Maps API sleutel vereist"
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-amber-700 text-xs",
								children: [
									"Voeg ",
									/* @__PURE__ */ jsx("code", {
										className: "bg-amber-100 px-1 rounded",
										children: "VITE_GOOGLE_MAPS_API_KEY"
									}),
									" toe aan ",
									/* @__PURE__ */ jsx("code", {
										className: "bg-amber-100 px-1 rounded",
										children: ".env"
									})
								]
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mb-4 relative",
							children: [/* @__PURE__ */ jsx("label", {
								className: "text-gray-500 text-xs font-semibold uppercase tracking-wide block mb-2",
								children: "Van — Vertrekpunt"
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx("div", {
									className: "absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none",
									children: /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-500 shadow shadow-green-300" })
								}), /* @__PURE__ */ jsx("input", {
									ref: originRef,
									type: "text",
									placeholder: "bijv. Groningen Centrum",
									disabled: noKey,
									className: "input-glow w-full pl-9 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all disabled:opacity-50"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 my-1 pl-3.5",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ jsx("div", { className: "w-0.5 h-3 bg-gray-300 rounded ml-1" }), /* @__PURE__ */ jsx("div", { className: "w-0.5 h-3 bg-gray-200 rounded ml-1" })]
							}), /* @__PURE__ */ jsxs("button", {
								onClick: () => {
									const ov = originRef.current.value;
									const dv = destRef.current.value;
									originRef.current.value = dv;
									destRef.current.value = ov;
									setOriginPlace(destPlace);
									setDestPlace(originPlace);
									setResult(null);
								},
								className: "ml-auto text-xs text-gray-400 hover:text-amber-500 flex items-center gap-1 transition-colors",
								children: [/* @__PURE__ */ jsx("svg", {
									viewBox: "0 0 24 24",
									fill: "none",
									width: "14",
									height: "14",
									children: /* @__PURE__ */ jsx("path", {
										d: "M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								}), "Omwisselen"]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mb-6 relative",
							children: [/* @__PURE__ */ jsx("label", {
								className: "text-gray-500 text-xs font-semibold uppercase tracking-wide block mb-2",
								children: "Naar — Bestemming"
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx("div", {
									className: "absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none",
									children: /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-amber-500 shadow shadow-amber-300" })
								}), /* @__PURE__ */ jsx("input", {
									ref: destRef,
									type: "text",
									placeholder: "bijv. Groningen Airport Eelde",
									disabled: noKey,
									className: "input-glow w-full pl-9 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-all disabled:opacity-50"
								})]
							})]
						}),
						error && /* @__PURE__ */ jsxs("p", {
							className: "text-red-500 text-xs mb-4 flex items-center gap-1.5",
							children: [/* @__PURE__ */ jsxs("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								width: "14",
								height: "14",
								children: [/* @__PURE__ */ jsx("circle", {
									cx: "12",
									cy: "12",
									r: "10",
									stroke: "#ef4444",
									strokeWidth: "2"
								}), /* @__PURE__ */ jsx("path", {
									d: "M12 8v4m0 4h.01",
									stroke: "#ef4444",
									strokeWidth: "2",
									strokeLinecap: "round"
								})]
							}), error]
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: calculate,
							disabled: noKey || loading,
							className: "w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-gray-900/20 active:scale-95 flex items-center justify-center gap-2 text-sm",
							children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
								className: "flex gap-1",
								children: [
									/* @__PURE__ */ jsx("div", { className: "dot1 w-2 h-2 bg-white rounded-full" }),
									/* @__PURE__ */ jsx("div", { className: "dot2 w-2 h-2 bg-white rounded-full" }),
									/* @__PURE__ */ jsx("div", { className: "dot3 w-2 h-2 bg-white rounded-full" })
								]
							}), "Berekening loopt..."] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("svg", {
								viewBox: "0 0 24 24",
								fill: "none",
								width: "18",
								height: "18",
								children: [/* @__PURE__ */ jsx("circle", {
									cx: "11",
									cy: "11",
									r: "8",
									stroke: "currentColor",
									strokeWidth: "2"
								}), /* @__PURE__ */ jsx("path", {
									d: "m21 21-4.35-4.35",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round"
								})]
							}), "Bereken ritprijs"] })
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-4",
					children: [
						!result && !loading && /* @__PURE__ */ jsxs("div", {
							className: "bg-white rounded-3xl border border-dashed border-gray-200 p-10 flex flex-col items-center justify-center text-center min-h-[320px]",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-4",
									children: /* @__PURE__ */ jsxs("svg", {
										viewBox: "0 0 24 24",
										fill: "none",
										width: "32",
										height: "32",
										children: [/* @__PURE__ */ jsx("path", {
											d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
											stroke: "#f59e0b",
											strokeWidth: "1.5"
										}), /* @__PURE__ */ jsx("path", {
											d: "M9 22V12h6v10",
											stroke: "#f59e0b",
											strokeWidth: "1.5",
											strokeLinecap: "round"
										})]
									})
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-gray-400 text-sm",
									children: "Voer een route in om de prijs te berekenen"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-gray-300 text-xs mt-1",
									children: "Op basis van het officiële metertarief"
								})
							]
						}),
						loading && /* @__PURE__ */ jsxs("div", {
							className: "bg-white rounded-3xl border border-gray-100 p-10 flex flex-col items-center justify-center min-h-[320px]",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "relative w-16 h-16 mb-4",
								children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-gray-100" }), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" })]
							}), /* @__PURE__ */ jsx("p", {
								className: "text-gray-500 text-sm font-medium",
								children: "Route berekenen via Google Maps..."
							})]
						}),
						result && /* @__PURE__ */ jsxs("div", {
							className: "fade-slide-up space-y-4",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-5",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-start gap-3 mb-3",
											children: [/* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" }), /* @__PURE__ */ jsx("div", {
												className: "text-gray-700 text-xs leading-relaxed",
												children: result.origin
											})]
										}),
										/* @__PURE__ */ jsx(RouteAnimation, { active: !!result }),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-amber-500 mt-1 flex-shrink-0" }), /* @__PURE__ */ jsx("div", {
												className: "text-gray-700 text-xs leading-relaxed",
												children: result.dest
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-gray-400 text-xs mb-1",
											children: "Afstand"
										}), /* @__PURE__ */ jsx("div", {
											className: "text-gray-900 font-bold text-xl",
											children: result.distText
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center",
										children: [/* @__PURE__ */ jsx("div", {
											className: "text-gray-400 text-xs mb-1",
											children: "Reistijd"
										}), /* @__PURE__ */ jsx("div", {
											className: "text-gray-900 font-bold text-xl",
											children: result.durText
										})]
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative bg-gray-900 rounded-2xl p-6 overflow-hidden",
									children: [
										/* @__PURE__ */ jsx("div", { className: "absolute -top-8 -right-8 w-32 h-32 rounded-full bg-amber-400/10 blur-2xl" }),
										/* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-yellow-500/10 blur-xl" }),
										/* @__PURE__ */ jsxs("div", {
											className: "relative z-10",
											children: [
												/* @__PURE__ */ jsxs("div", {
													className: "flex items-center justify-between mb-1",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-gray-400 text-xs uppercase tracking-wide",
														children: "Geschatte ritprijs"
													}), result.discount > 0 && /* @__PURE__ */ jsxs("div", {
														className: "bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full",
														children: [
															"-",
															Math.round(result.discount * 100),
															"% korting"
														]
													})]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-yellow-400 font-bold text-4xl mb-3",
													children: /* @__PURE__ */ jsx(AnimatedNumber, { value: result.price })
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "border-t border-gray-700 pt-3 space-y-1.5 text-xs text-gray-500 mb-2",
													children: [
														/* @__PURE__ */ jsxs("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ jsx("span", { children: "Starttarief" }), /* @__PURE__ */ jsxs("span", {
																className: "text-gray-400",
																children: ["€ ", START_RATE.toFixed(2)]
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ jsxs("span", { children: [
																result.km,
																" km × €",
																PER_KM
															] }), /* @__PURE__ */ jsxs("span", {
																className: "text-gray-400",
																children: ["€ ", (parseFloat(result.km) * PER_KM).toFixed(2)]
															})]
														}),
														/* @__PURE__ */ jsxs("div", {
															className: "flex justify-between",
															children: [/* @__PURE__ */ jsxs("span", { children: [
																result.min,
																" min × €",
																PER_MIN
															] }), /* @__PURE__ */ jsxs("span", {
																className: "text-gray-400",
																children: ["€ ", (result.min * PER_MIN).toFixed(2)]
															})]
														}),
														result.discount > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
															className: "flex justify-between text-gray-600",
															children: [/* @__PURE__ */ jsx("span", { children: "Subtotaal" }), /* @__PURE__ */ jsxs("span", {
																className: "line-through",
																children: ["€ ", result.basePrice]
															})]
														}), /* @__PURE__ */ jsxs("div", {
															className: "flex justify-between text-green-400 font-medium",
															children: [/* @__PURE__ */ jsx("span", { children: discountLabel(result.discount) }), /* @__PURE__ */ jsxs("span", { children: ["-€ ", (parseFloat(result.basePrice) - parseFloat(result.price)).toFixed(2)] })]
														})] })
													]
												}),
												/* @__PURE__ */ jsx("div", {
													className: "text-gray-700 text-xs mb-5 mt-1",
													children: result.discount === 0 ? "≤18 km — geen korting van toepassing" : `Kortingsregels: >18km −15% · >50km −20% · >100km −30%`
												}),
												/* @__PURE__ */ jsxs("button", {
													onClick: handleWhatsApp,
													className: "w-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-yellow-400/30 active:scale-95 flex items-center justify-center gap-2 text-sm",
													children: [
														/* @__PURE__ */ jsx("svg", {
															viewBox: "0 0 24 24",
															fill: "currentColor",
															width: "18",
															height: "18",
															children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
														}),
														"Boek via WhatsApp · €",
														result.price
													]
												})
											]
										})
									]
								})
							]
						})
					]
				})]
			})]
		})]
	});
}
//#endregion
//#region src/components/Testimonials.jsx
var reviews = [
	{
		name: "Martijn V.",
		rating: 5,
		text: "Erg vriendelijke chauffeur, ruime auto en precies op tijd voor mijn vlucht. Zeker aanrader!",
		date: "Februari 2025"
	},
	{
		name: "Sarah K.",
		rating: 5,
		text: "Professionele service. De Hyundai Nexo is een geweldig rijdende auto. Stil en comfortabel. Kom zeker terug!",
		date: "Maart 2025"
	},
	{
		name: "Ahmed B.",
		rating: 4,
		text: "Betrouwbare taxiservice in Groningen. Makkelijk boeken via WhatsApp en altijd stipt aanwezig.",
		date: "April 2025"
	}
];
function Stars({ count }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex gap-0.5",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx("span", {
			className: i < count ? "text-yellow-400" : "text-gray-300",
			children: "★"
		}, i))
	});
}
function Testimonials() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-24 bg-gray-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-yellow-500 font-semibold text-sm uppercase tracking-widest",
						children: "Beoordelingen"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4",
						children: "Wat klanten zeggen"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-center gap-3 mt-4",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-0.5",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx("span", {
									className: i < 5 ? "text-yellow-400 text-2xl" : "text-gray-300 text-2xl",
									children: "★"
								}, i))
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-2xl font-bold text-gray-900",
								children: "4.7"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gray-500",
								children: "· 29 beoordelingen"
							})
						]
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-6",
				children: reviews.map((review) => /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow",
					children: [
						/* @__PURE__ */ jsx(Stars, { count: review.rating }),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-700 mt-4 text-sm leading-relaxed",
							children: [
								"\"",
								review.text,
								"\""
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 flex items-center justify-between",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-semibold text-gray-900 text-sm",
								children: review.name
							}), /* @__PURE__ */ jsx("div", {
								className: "text-gray-400 text-xs mt-0.5",
								children: review.date
							})] }), /* @__PURE__ */ jsx("div", {
								className: "w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-bold text-sm",
								children: review.name[0]
							})]
						})
					]
				}, review.name))
			})]
		})
	});
}
//#endregion
//#region src/components/FAQ.jsx
var faqs = [
	{
		q: "Hoe kan ik een taxi boeken bij Taxi Amro?",
		a: "U kunt ons 24/7 bereiken via WhatsApp (+31 6 33721505), telefoon of e-mail (taxiamro@outlook.com). Wij bevestigen uw boeking direct en staan altijd klaar — ook voor last-minute ritten."
	},
	{
		q: "Rijdt Taxi Amro ook naar Schiphol vanuit Groningen?",
		a: "Ja, wij verzorgen transfers naar alle grote luchthavens: Schiphol Amsterdam, Groningen Airport Eelde, Eindhoven Airport, Bremen Airport en Düsseldorf Airport. Vraag een vaste prijs aan via +31 6 33721505."
	},
	{
		q: "Rijdt Taxi Amro naar Eemshaven?",
		a: "Absoluut. Eemshaven is een van onze specialiteiten. Wij verzorgen dagelijks vervoer voor havenarbeiders, zeelieden en cruisegasten naar en van Eemshaven — 24 uur per dag, 7 dagen per week, ook vroeg in de ochtend."
	},
	{
		q: "Kan Taxi Amro mij naar Duitsland brengen (Emden, Leer, Bremen)?",
		a: "Ja, wij rijden over de grens naar Emden, Leer, Bremen en andere bestemmingen in Noordwest-Duitsland. Grensoverschrijdend vervoer bieden wij met vaste prijzen aan. Bel voor een offerte: +31 6 33721505."
	},
	{
		q: "Is een vaste prijs mogelijk?",
		a: "Ja! Voor alle ritten — vliegveldtransfers, Eemshaven, zakelijke ritten en langere trajecten — kunt u altijd een vrijblijvende vaste prijs aanvragen. Geen onverwachte kosten onderweg."
	},
	{
		q: "Hebben jullie ook vervoer voor groepen?",
		a: "Ja, wij beschikken over een ruime bus voor groepen tot 8 passagiers. Ideaal voor bedrijfsuitjes, concerten, bruiloften en groepsreizen. Neem contact op voor een groepstarief."
	},
	{
		q: "Rijden jullie ook vanuit Friesland en Drenthe?",
		a: "Ja, wij bedienen het gehele noorden van Nederland: Groningen, Friesland (Leeuwarden, Drachten, Heerenveen) en Drenthe (Assen, Emmen). Bel of app ons voor de exacte prijs vanuit uw locatie."
	},
	{
		q: "Hoe laat moet ik boeken voor een vroege vlucht?",
		a: "Wij adviseren minimaal 24 uur van tevoren te boeken, maar last-minute boekingen zijn ook mogelijk. Voor vroege ochtendvluchten (bijv. 5:00 of 6:00 uur) zijn wij altijd beschikbaar — wij halen u thuis op."
	}
];
function FAQItem({ q, a }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "border border-gray-200 rounded-xl overflow-hidden",
		children: [/* @__PURE__ */ jsxs("button", {
			className: "w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors",
			onClick: () => setOpen(!open),
			children: [/* @__PURE__ */ jsx("span", {
				className: "font-semibold text-gray-900 text-sm sm:text-base pr-4",
				children: q
			}), /* @__PURE__ */ jsx("span", {
				className: `text-yellow-500 text-xl transition-transform flex-shrink-0 ${open ? "rotate-45" : ""}`,
				children: "+"
			})]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-gray-50",
			children: a
		})]
	});
}
function FAQ() {
	return /* @__PURE__ */ jsx("section", {
		id: "faq",
		className: "py-24 bg-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-16",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-yellow-500 font-semibold text-sm uppercase tracking-widest",
							children: "Veelgestelde vragen"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4",
							children: "Heeft u een vraag?"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "text-gray-500 text-lg",
							children: [
								"Vindt u het antwoord niet? Bel ons direct op",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: "tel:+31633721505",
									className: "text-amber-600 font-semibold hover:underline",
									children: "+31 6 33721505"
								}),
								"."
							]
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "space-y-3",
					children: faqs.map((faq) => /* @__PURE__ */ jsx(FAQItem, { ...faq }, faq.q))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ jsxs("a", {
						href: "tel:+31633721505",
						className: "inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-8 py-3.5 rounded-xl transition-colors shadow-md shadow-amber-100 text-sm",
						children: [/* @__PURE__ */ jsx("svg", {
							className: "w-4 h-4",
							fill: "none",
							stroke: "currentColor",
							viewBox: "0 0 24 24",
							children: /* @__PURE__ */ jsx("path", {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeWidth: 2,
								d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							})
						}), "Bel direct: +31 6 33721505"]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/Contact.jsx
function Contact() {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "py-24 bg-gradient-to-br from-emerald-50 via-white to-blue-50",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-amber-600 font-semibold text-sm uppercase tracking-widest",
						children: "Contact"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4",
						children: "Direct in contact"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-gray-500 text-lg max-w-xl mx-auto",
						children: "Bel, app of mail ons — wij reageren snel en helpen u graag verder."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ jsxs("a", {
						href: "tel:+31633721505",
						className: "flex items-center gap-4 bg-white hover:bg-amber-50 border border-gray-200 hover:border-amber-300 rounded-2xl p-5 transition-colors group shadow-sm",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
							children: "📞"
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-gray-500 text-sm",
							children: "Bel ons"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-gray-900 font-semibold text-lg group-hover:text-amber-600 transition-colors",
							children: "+31 6 33721505"
						})] })]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "https://wa.me/31633721505",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "flex items-center gap-4 bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-2xl p-5 transition-colors group shadow-sm",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
							children: "💬"
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-gray-500 text-sm",
							children: "WhatsApp"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-gray-900 font-semibold text-lg group-hover:text-green-600 transition-colors",
							children: "Stuur een bericht"
						})] })]
					}),
					/* @__PURE__ */ jsxs("a", {
						href: "mailto:taxiamro@outlook.com",
						className: "flex items-center gap-4 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-2xl p-5 transition-colors group shadow-sm",
						children: [/* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
							children: "✉️"
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "text-gray-500 text-sm",
							children: "E-mail"
						}), /* @__PURE__ */ jsx("div", {
							className: "text-gray-900 font-semibold text-lg group-hover:text-blue-600 transition-colors",
							children: "taxiamro@outlook.com"
						})] })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "rounded-2xl overflow-hidden border border-gray-200 shadow-sm",
						style: { height: 220 },
						children: /* @__PURE__ */ jsx("iframe", {
							title: "Groningen kaart",
							src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37925.34890916774!2d6.522273636669637!3d53.21917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c83282ddf14e87%3A0x200827462e40e3ca!2sGroningen!5e0!3m2!1snl!2snl!4v1700000000000!5m2!1snl!2snl",
							width: "100%",
							height: "220",
							style: { border: 0 },
							allowFullScreen: "",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/Footer.jsx
var navLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "Diensten",
		href: "#services"
	},
	{
		label: "Tarieven",
		href: "#pricing"
	},
	{
		label: "FAQ",
		href: "#faq"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var serviceLinks = [
	{
		label: "Vliegveld Transfer",
		href: "#services"
	},
	{
		label: "Zakelijk Vervoer",
		href: "#services"
	},
	{
		label: "Eemshaven Vervoer",
		href: "#services"
	},
	{
		label: "Groepsvervoer (8 pax)",
		href: "#services"
	},
	{
		label: "Stads Taxi Groningen",
		href: "#services"
	},
	{
		label: "Grensoverschrijdend (DE)",
		href: "#services"
	}
];
var regionLinks = [
	"Groningen",
	"Assen",
	"Leeuwarden",
	"Drachten",
	"Heerenveen",
	"Emmen",
	"Eemshaven",
	"Emden (DE)"
];
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-gray-900 text-gray-300",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-1",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-gray-400 text-sm leading-relaxed mb-4",
							children: "Betrouwbare taxiservice in Groningen, Friesland en Drenthe. 24/7 beschikbaar voor vliegveld, Eemshaven en zakelijk vervoer."
						}), /* @__PURE__ */ jsxs("ul", {
							className: "space-y-2 text-sm",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: "tel:+31633721505",
									className: "text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-2 transition-colors",
									children: [/* @__PURE__ */ jsx("span", { children: "📞" }), " +31 6 33721505"]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: "mailto:taxiamro@outlook.com",
									className: "text-gray-400 hover:text-amber-300 flex items-center gap-2 transition-colors",
									children: [/* @__PURE__ */ jsx("span", { children: "✉️" }), " taxiamro@outlook.com"]
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
									href: "https://wa.me/31633721505",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "text-gray-400 hover:text-green-400 flex items-center gap-2 transition-colors",
									children: [/* @__PURE__ */ jsx("span", { children: "💬" }), " WhatsApp"]
								}) }),
								/* @__PURE__ */ jsxs("li", {
									className: "text-gray-500 flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", { children: "📍" }), " Groningen, Nederland"]
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-white font-semibold mb-4 text-sm uppercase tracking-wider",
						children: "Navigatie"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2",
						children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: link.href,
							className: "text-gray-400 hover:text-amber-400 transition-colors text-sm",
							children: link.label
						}) }, link.href))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-white font-semibold mb-4 text-sm uppercase tracking-wider",
						children: "Diensten"
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2",
						children: serviceLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: link.href,
							className: "text-gray-400 hover:text-amber-400 transition-colors text-sm",
							children: link.label
						}) }, link.label))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h4", {
							className: "text-white font-semibold mb-4 text-sm uppercase tracking-wider",
							children: "Werkgebied"
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "space-y-2",
							children: regionLinks.map((r) => /* @__PURE__ */ jsxs("li", {
								className: "text-gray-400 text-sm flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-amber-400 rounded-full" }), r]
							}, r))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-4 p-3 bg-gray-800 rounded-xl border border-gray-700",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1.5 mb-1",
								children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-green-500 rounded-full animate-pulse" }), /* @__PURE__ */ jsx("span", {
									className: "text-green-400 text-xs font-semibold",
									children: "24/7 bereikbaar"
								})]
							}), /* @__PURE__ */ jsx("a", {
								href: "tel:+31633721505",
								className: "text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors",
								children: "+31 6 33721505"
							})]
						})
					] })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "border-t border-gray-800 pt-6",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-col sm:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-gray-500 text-xs text-center sm:text-left space-y-1",
						children: [/* @__PURE__ */ jsxs("p", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Taxi Amro. Alle rechten voorbehouden."
						] }), /* @__PURE__ */ jsx("p", { children: "KvK: 87581868 \xA0|\xA0 BTW: NL004440433B79" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center justify-center gap-4 text-xs",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "/privacybeleid.pdf",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-gray-500 hover:text-amber-400 transition-colors underline underline-offset-2",
								children: "Privacybeleid"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "/algemene-voorwaarden.pdf",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-gray-500 hover:text-amber-400 transition-colors underline underline-offset-2",
								children: "Algemene Voorwaarden"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gray-600",
								children: "|"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gray-500",
								children: "Taxi Amro · Groningen · taxiamro@outlook.com"
							})
						]
					})]
				})
			})]
		})
	});
}
//#endregion
//#region src/components/FloatingWhatsApp.jsx
function FloatingWhatsApp() {
	const [hovered, setHovered] = useState(false);
	return /* @__PURE__ */ jsxs("a", {
		href: "https://wa.me/31633721505?text=Hallo, ik wil graag een taxi boeken.",
		target: "_blank",
		rel: "noopener noreferrer",
		className: "fixed bottom-6 right-6 z-50 flex items-center gap-3 group",
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		"aria-label": "Boek via WhatsApp",
		children: [/* @__PURE__ */ jsx("span", {
			className: `bg-gray-900 text-white text-sm font-medium px-3 py-2 rounded-xl shadow-lg transition-all duration-300 whitespace-nowrap ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}`,
			children: "Boek via WhatsApp"
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-xl shadow-green-500/40 transition-all duration-300 hover:scale-110",
			children: [/* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" }), /* @__PURE__ */ jsx("svg", {
				className: "w-7 h-7 text-white",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
			})]
		})]
	});
}
//#endregion
//#region src/components/CookieBanner.jsx
function CookieBanner() {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		if (!localStorage.getItem("cookieConsent")) setVisible(true);
	}, []);
	const accept = () => {
		localStorage.setItem("cookieConsent", "accepted");
		setVisible(false);
	};
	const decline = () => {
		localStorage.setItem("cookieConsent", "declined");
		setVisible(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ jsx("div", {
		style: {
			position: "fixed",
			bottom: 0,
			left: 0,
			right: 0,
			zIndex: 9999,
			background: "#1e293b",
			borderTop: "1px solid rgba(251,191,36,0.2)",
			padding: "16px 20px",
			boxShadow: "0 -4px 24px rgba(0,0,0,0.3)"
		},
		children: /* @__PURE__ */ jsxs("div", {
			style: {
				maxWidth: 1152,
				margin: "0 auto",
				display: "flex",
				flexWrap: "wrap",
				alignItems: "center",
				gap: 12,
				justifyContent: "space-between"
			},
			children: [/* @__PURE__ */ jsx("div", {
				style: {
					flex: 1,
					minWidth: 260
				},
				children: /* @__PURE__ */ jsxs("p", {
					style: {
						color: "#e2e8f0",
						fontSize: 13,
						margin: 0,
						lineHeight: 1.5
					},
					children: [
						"🍪 Wij gebruiken cookies om uw ervaring te verbeteren en bezoekersstatistieken bij te houden. Lees ons",
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "/privacybeleid.pdf",
							target: "_blank",
							rel: "noopener noreferrer",
							style: {
								color: "#fbbf24",
								textDecoration: "underline"
							},
							children: "privacybeleid"
						}),
						"."
					]
				})
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					gap: 8,
					flexShrink: 0
				},
				children: [/* @__PURE__ */ jsx("button", {
					onClick: decline,
					style: {
						background: "transparent",
						border: "1px solid rgba(255,255,255,0.2)",
						color: "#94a3b8",
						borderRadius: 8,
						padding: "8px 16px",
						fontSize: 13,
						cursor: "pointer",
						transition: "all 0.2s"
					},
					onMouseEnter: (e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)",
					onMouseLeave: (e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)",
					children: "Weigeren"
				}), /* @__PURE__ */ jsx("button", {
					onClick: accept,
					style: {
						background: "#fbbf24",
						border: "none",
						color: "#1a1a1a",
						borderRadius: 8,
						padding: "8px 20px",
						fontSize: 13,
						fontWeight: 700,
						cursor: "pointer",
						transition: "background 0.2s"
					},
					onMouseEnter: (e) => e.currentTarget.style.background = "#f59e0b",
					onMouseLeave: (e) => e.currentTarget.style.background = "#fbbf24",
					children: "Accepteren"
				})]
			})]
		})
	});
}
//#endregion
//#region src/pages/BlogPage.jsx
function BlogPage() {
	const [activeCategory, setActiveCategory] = useState("Alle");
	const [search, setSearch] = useState("");
	const [visibleCount, setVisibleCount] = useState(6);
	const filtered = useMemo(() => {
		return blogPosts.filter((post) => {
			const matchCat = activeCategory === "Alle" || post.category === activeCategory;
			const q = search.toLowerCase();
			const matchSearch = !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q) || post.keywords.some((k) => k.toLowerCase().includes(q));
			return matchCat && matchSearch;
		});
	}, [activeCategory, search]);
	const visible = filtered.slice(0, visibleCount);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Navbar, { blogMode: true }),
		/* @__PURE__ */ jsxs("main", {
			className: "pt-16 min-h-screen bg-white",
			children: [
				/* @__PURE__ */ jsx("section", {
					className: "bg-gray-900 text-white py-16 px-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-6xl mx-auto",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-amber-400 text-sm font-semibold uppercase tracking-wider mb-2",
								children: "Taxi blog"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "text-3xl sm:text-4xl font-bold mb-4",
								children: "Taxi blog — tips, prijzen en informatie"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "text-gray-300 max-w-2xl text-base leading-relaxed",
								children: [
									"Alles over taxivervoer in Noord-Nederland: van luchthaventrips tot grensoverschrijdend vervoer. Vragen? Bel direct",
									" ",
									/* @__PURE__ */ jsx("a", {
										href: "tel:+31633721505",
										className: "text-amber-400 font-semibold hover:underline",
										children: "+31 6 33721505"
									}),
									"."
								]
							})
						]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					className: "sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-2",
							children: categories.map((cat) => /* @__PURE__ */ jsx("button", {
								onClick: () => {
									setActiveCategory(cat);
									setVisibleCount(6);
								},
								className: `px-3 py-1.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? "bg-amber-400 text-gray-900 shadow-sm" : "bg-gray-100 text-gray-600 hover:bg-amber-50 hover:text-amber-700"}`,
								children: cat
							}, cat))
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative w-full sm:w-64",
							children: [/* @__PURE__ */ jsx("svg", {
								className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",
								fill: "none",
								stroke: "currentColor",
								viewBox: "0 0 24 24",
								children: /* @__PURE__ */ jsx("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									strokeWidth: 2,
									d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								})
							}), /* @__PURE__ */ jsx("input", {
								type: "text",
								placeholder: "Zoek in blog...",
								value: search,
								onChange: (e) => {
									setSearch(e.target.value);
									setVisibleCount(6);
								},
								className: "w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "max-w-6xl mx-auto px-4 py-12",
					children: [visible.length === 0 ? /* @__PURE__ */ jsxs("div", {
						className: "text-center py-20 text-gray-400",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xl mb-2",
							children: "Geen blogs gevonden"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-sm",
							children: "Probeer een andere categorie of zoekterm"
						})]
					}) : /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: visible.map((post) => /* @__PURE__ */ jsx(BlogCard, { post }, post.slug))
					}), filtered.length > visibleCount && /* @__PURE__ */ jsx("div", {
						className: "text-center mt-10",
						children: /* @__PURE__ */ jsxs("button", {
							onClick: () => setVisibleCount((v) => v + 6),
							className: "inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-8 py-3 rounded-xl transition-colors shadow-sm",
							children: [
								"Meer laden (",
								filtered.length - visibleCount,
								" over)"
							]
						})
					})]
				}),
				/* @__PURE__ */ jsx("section", {
					className: "bg-amber-400 py-12 px-4",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-3xl mx-auto text-center",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-2xl font-bold text-gray-900 mb-2",
								children: "Klaar om te boeken?"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-gray-800 mb-6",
								children: "Bel ons direct of stuur een WhatsApp bericht voor een vaste prijs."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col sm:flex-row gap-3 justify-center",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "tel:+31633721505",
									className: "flex items-center justify-center gap-2 bg-gray-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors",
									children: [/* @__PURE__ */ jsx("svg", {
										className: "w-5 h-5",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										})
									}), "+31 6 33721505"]
								}), /* @__PURE__ */ jsxs("a", {
									href: "https://wa.me/31633721505",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200",
									children: [/* @__PURE__ */ jsx("svg", {
										className: "w-5 h-5 text-green-600",
										fill: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
									}), "Boek via WhatsApp"]
								})]
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsx(FloatingWhatsApp, {})
	] });
}
function BlogCard({ post }) {
	return /* @__PURE__ */ jsxs("article", {
		className: "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col",
		children: [/* @__PURE__ */ jsxs(Link, {
			to: `/blog/${post.slug}`,
			className: "block relative overflow-hidden",
			style: { height: 200 },
			children: [/* @__PURE__ */ jsx("img", {
				src: post.featuredImage,
				alt: post.featuredImageAlt,
				className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
				loading: "lazy"
			}), /* @__PURE__ */ jsx("div", {
				className: "absolute top-3 left-3",
				children: /* @__PURE__ */ jsx("span", {
					className: "bg-amber-400 text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full",
					children: post.category
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "p-5 flex flex-col flex-1",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3 text-xs text-gray-400 mb-3",
					children: [
						/* @__PURE__ */ jsx("span", { children: formatDate$1(post.date) }),
						/* @__PURE__ */ jsx("span", { children: "·" }),
						/* @__PURE__ */ jsxs("span", { children: [post.readTime, " lezen"] })
					]
				}),
				/* @__PURE__ */ jsx(Link, {
					to: `/blog/${post.slug}`,
					children: /* @__PURE__ */ jsx("h2", {
						className: "font-bold text-gray-900 text-base leading-snug mb-2 group-hover:text-amber-600 transition-colors line-clamp-2",
						children: post.title
					})
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1",
					children: post.excerpt
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: `/blog/${post.slug}`,
					className: "mt-4 inline-flex items-center gap-1 text-amber-600 font-semibold text-sm hover:gap-2 transition-all",
					children: ["Lees meer", /* @__PURE__ */ jsx("svg", {
						className: "w-4 h-4",
						fill: "none",
						stroke: "currentColor",
						viewBox: "0 0 24 24",
						children: /* @__PURE__ */ jsx("path", {
							strokeLinecap: "round",
							strokeLinejoin: "round",
							strokeWidth: 2,
							d: "M9 5l7 7-7 7"
						})
					})]
				})
			]
		})]
	});
}
function formatDate$1(dateStr) {
	return new Date(dateStr).toLocaleDateString("nl-NL", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
//#endregion
//#region src/pages/BlogPostPage.jsx
function BlogPostPage() {
	const { slug } = useParams();
	const post = blogPosts.find((p) => p.slug === slug);
	if (!post) return /* @__PURE__ */ jsx(Navigate, {
		to: "/blog",
		replace: true
	});
	const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);
	const fallbackRelated = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
	const relatedPosts = related.length >= 2 ? related : fallbackRelated;
	function share(platform) {
		const encodedUrl = encodeURIComponent(pageUrl);
		const encodedTitle = encodeURIComponent(post.title);
		if (platform === "whatsapp") window.open(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, "_blank");
		if (platform === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank");
		if (platform === "copy") navigator.clipboard.writeText(pageUrl).then(() => alert("Link gekopieerd!"));
	}
	const pageUrl = `https://www.taxiamro.nl/blog/${post.slug}`;
	const articleSchema = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Article",
		headline: post.title,
		image: post.featuredImage,
		datePublished: post.date,
		dateModified: post.date,
		author: {
			"@type": "Organization",
			name: "Taxi Amro"
		},
		publisher: {
			"@type": "Organization",
			name: "Taxi Amro",
			logo: {
				"@type": "ImageObject",
				url: "https://www.taxiamro.nl/logo.svg"
			}
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": pageUrl
		},
		keywords: post.keywords.join(", ")
	});
	const breadcrumbSchema = JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Home",
				item: "https://www.taxiamro.nl/"
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Blog",
				item: "https://www.taxiamro.nl/blog"
			},
			{
				"@type": "ListItem",
				position: 3,
				name: post.title,
				item: pageUrl
			}
		]
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(Helmet, { children: [
			/* @__PURE__ */ jsxs("title", { children: [post.title, " | Taxi Amro Groningen"] }),
			/* @__PURE__ */ jsx("meta", {
				name: "description",
				content: post.excerpt + " Bel +31 6 33721505."
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "canonical",
				href: pageUrl
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:type",
				content: "article"
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:title",
				content: post.title
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:description",
				content: post.excerpt
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:image",
				content: post.featuredImage
			}),
			/* @__PURE__ */ jsx("meta", {
				property: "og:url",
				content: pageUrl
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:card",
				content: "summary_large_image"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:title",
				content: post.title
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:description",
				content: post.excerpt
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "twitter:image",
				content: post.featuredImage
			}),
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: articleSchema
			}),
			/* @__PURE__ */ jsx("script", {
				type: "application/ld+json",
				children: breadcrumbSchema
			})
		] }),
		/* @__PURE__ */ jsx(Navbar, { blogMode: true }),
		/* @__PURE__ */ jsxs("main", {
			className: "pt-16 min-h-screen bg-white",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative w-full overflow-hidden",
					style: { height: 400 },
					children: [
						/* @__PURE__ */ jsx("img", {
							src: post.featuredImage,
							alt: post.featuredImageAlt,
							className: "w-full h-full object-cover"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" }),
						/* @__PURE__ */ jsx("div", {
							className: "absolute top-4 left-4 right-4",
							children: /* @__PURE__ */ jsxs("nav", {
								className: "flex items-center gap-2 text-sm text-white/80",
								children: [
									/* @__PURE__ */ jsx(Link, {
										to: "/",
										className: "hover:text-white transition-colors",
										children: "Home"
									}),
									/* @__PURE__ */ jsx("svg", {
										className: "w-3 h-3",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M9 5l7 7-7 7"
										})
									}),
									/* @__PURE__ */ jsx(Link, {
										to: "/blog",
										className: "hover:text-white transition-colors",
										children: "Blog"
									}),
									/* @__PURE__ */ jsx("svg", {
										className: "w-3 h-3",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M9 5l7 7-7 7"
										})
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-white font-medium line-clamp-1",
										children: post.title
									})
								]
							})
						}),
						/* @__PURE__ */ jsx("div", {
							className: "absolute bottom-6 left-4 sm:left-8",
							children: /* @__PURE__ */ jsx("span", {
								className: "bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full",
								children: post.category
							})
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10",
					children: [/* @__PURE__ */ jsxs("article", { children: [
						/* @__PURE__ */ jsx("h1", {
							className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-5",
							children: post.title
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-6 border-b border-gray-100",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx("svg", {
										className: "w-4 h-4",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										})
									}), formatDate(post.date)]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ jsx("svg", {
											className: "w-4 h-4",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											})
										}),
										post.readTime,
										" lezen"
									]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsx("svg", {
										className: "w-4 h-4",
										fill: "none",
										stroke: "currentColor",
										viewBox: "0 0 24 24",
										children: /* @__PURE__ */ jsx("path", {
											strokeLinecap: "round",
											strokeLinejoin: "round",
											strokeWidth: 2,
											d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										})
									}), post.author]
								})
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "prose-blog",
							dangerouslySetInnerHTML: { __html: post.content }
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 pt-8 border-t border-gray-100",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold text-gray-700 mb-3",
								children: "Deel dit artikel:"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ jsxs("button", {
										onClick: () => share("whatsapp"),
										className: "flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors",
										children: [/* @__PURE__ */ jsx("svg", {
											className: "w-4 h-4",
											fill: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
										}), "WhatsApp"]
									}),
									/* @__PURE__ */ jsxs("button", {
										onClick: () => share("facebook"),
										className: "flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors",
										children: [/* @__PURE__ */ jsx("svg", {
											className: "w-4 h-4",
											fill: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" })
										}), "Facebook"]
									}),
									/* @__PURE__ */ jsxs("button", {
										onClick: () => share("copy"),
										className: "flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg transition-colors",
										children: [/* @__PURE__ */ jsx("svg", {
											className: "w-4 h-4",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
											})
										}), "Kopiëren"]
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 bg-amber-400 rounded-2xl p-6 sm:p-8",
							children: [
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-bold text-gray-900 mb-2",
									children: "Klaar om te boeken?"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-gray-800 mb-5 text-sm leading-relaxed",
									children: "Bel ons voor een vaste prijs, of stuur een WhatsApp bericht. Wij bevestigen binnen 15 minuten."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-col sm:flex-row gap-3",
									children: [/* @__PURE__ */ jsxs("a", {
										href: "tel:+31633721505",
										className: "flex items-center justify-center gap-2 bg-gray-900 text-white font-bold px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors text-sm",
										children: [/* @__PURE__ */ jsx("svg", {
											className: "w-4 h-4",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											})
										}), "Bel direct +31 6 33721505"]
									}), /* @__PURE__ */ jsxs("a", {
										href: "https://wa.me/31633721505",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 text-sm",
										children: [/* @__PURE__ */ jsx("svg", {
											className: "w-4 h-4 text-green-600",
											fill: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
										}), "Boek via WhatsApp"]
									})]
								})
							]
						})
					] }), /* @__PURE__ */ jsx("aside", {
						className: "hidden lg:block",
						children: /* @__PURE__ */ jsxs("div", {
							className: "sticky top-28",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "bg-gray-900 text-white rounded-2xl p-5 mb-6",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "font-bold text-base mb-1",
										children: "Direct boeken?"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "text-gray-400 text-xs mb-4",
										children: "24/7 bereikbaar voor een vaste prijs"
									}),
									/* @__PURE__ */ jsxs("a", {
										href: "tel:+31633721505",
										className: "flex items-center gap-2 bg-amber-400 text-gray-900 font-bold px-4 py-3 rounded-xl hover:bg-amber-300 transition-colors text-sm w-full justify-center mb-2",
										children: [/* @__PURE__ */ jsx("svg", {
											className: "w-4 h-4",
											fill: "none",
											stroke: "currentColor",
											viewBox: "0 0 24 24",
											children: /* @__PURE__ */ jsx("path", {
												strokeLinecap: "round",
												strokeLinejoin: "round",
												strokeWidth: 2,
												d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											})
										}), "+31 6 33721505"]
									}),
									/* @__PURE__ */ jsx("a", {
										href: "https://wa.me/31633721505",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-2 bg-green-500 text-white font-bold px-4 py-2.5 rounded-xl hover:bg-green-600 transition-colors text-sm w-full justify-center",
										children: "WhatsApp"
									})
								]
							}), relatedPosts.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "text-sm font-bold text-gray-900 uppercase tracking-wider mb-4",
								children: "Gerelateerde artikelen"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-col gap-4",
								children: relatedPosts.map((p) => /* @__PURE__ */ jsxs(Link, {
									to: `/blog/${p.slug}`,
									className: "flex gap-3 group",
									children: [/* @__PURE__ */ jsx("img", {
										src: p.featuredImage,
										alt: p.featuredImageAlt,
										className: "w-16 h-16 rounded-lg object-cover flex-shrink-0",
										loading: "lazy"
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
										className: "text-xs text-amber-600 font-medium mb-0.5",
										children: p.category
									}), /* @__PURE__ */ jsx("p", {
										className: "text-sm font-semibold text-gray-800 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2",
										children: p.title
									})] })]
								}, p.slug))
							})] })]
						})
					})]
				}),
				relatedPosts.length > 0 && /* @__PURE__ */ jsxs("section", {
					className: "lg:hidden max-w-6xl mx-auto px-4 pb-12",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-lg font-bold text-gray-900 mb-5",
						children: "Gerelateerde artikelen"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
						children: relatedPosts.map((p) => /* @__PURE__ */ jsxs(Link, {
							to: `/blog/${p.slug}`,
							className: "flex gap-3 group",
							children: [/* @__PURE__ */ jsx("img", {
								src: p.featuredImage,
								alt: p.featuredImageAlt,
								className: "w-16 h-16 rounded-lg object-cover flex-shrink-0",
								loading: "lazy"
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-xs text-amber-600 font-medium mb-0.5",
								children: p.category
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm font-semibold text-gray-800 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2",
								children: p.title
							})] })]
						}, p.slug))
					})]
				})
			]
		}),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsx(FloatingWhatsApp, {})
	] });
}
function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("nl-NL", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
//#endregion
//#region src/App.jsx
function useScrollReveal() {
	useEffect(() => {
		const elements = document.querySelectorAll("[data-reveal]");
		if (!elements.length) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .1 });
		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);
}
function HomePage() {
	useScrollReveal();
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(Services, {}),
			/* @__PURE__ */ jsx(WhyUs, {}),
			/* @__PURE__ */ jsx(Fleet, {}),
			/* @__PURE__ */ jsx(Pricing, {}),
			/* @__PURE__ */ jsx(PriceCalculator, {}),
			/* @__PURE__ */ jsx(Testimonials, {}),
			/* @__PURE__ */ jsx(FAQ, {}),
			/* @__PURE__ */ jsx(Contact, {}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(FloatingWhatsApp, {}),
			/* @__PURE__ */ jsx(CookieBanner, {})
		]
	});
}
//#endregion
//#region src/main.jsx
var blogRoutes = blogPosts.filter((post) => post && post.slug).map((post) => ({
	path: `/blog/${post.slug}`,
	element: /* @__PURE__ */ jsx(BlogPostPage, {})
}));
var createRoot = ViteReactSSG({ routes: [
	{
		path: "/",
		element: /* @__PURE__ */ jsx(HomePage, {})
	},
	{
		path: "/blog",
		element: /* @__PURE__ */ jsx(BlogPage, {})
	},
	...blogRoutes
] }, ({ app, isClient }) => {
	return /* @__PURE__ */ jsx(HelmetProvider, { children: app });
});
//#endregion
export { createRoot };
