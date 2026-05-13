import { n as Footer, r as Navbar, t as FloatingWhatsApp } from "./FloatingWhatsApp-BAlt1xrR.js";
import "./BlogPage-D6rTKvk-.js";
import "./BlogPostPage-B_hoyrWi.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
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
export { HomePage };
