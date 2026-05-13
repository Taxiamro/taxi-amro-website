import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
export { Footer as n, Navbar as r, FloatingWhatsApp as t };
