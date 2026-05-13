import { n as categories, t as blogPosts } from "../main.mjs";
import { n as Footer, r as Navbar, t as FloatingWhatsApp } from "./FloatingWhatsApp-BAlt1xrR.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
						/* @__PURE__ */ jsx("span", { children: formatDate(post.date) }),
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
function formatDate(dateStr) {
	return new Date(dateStr).toLocaleDateString("nl-NL", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
}
//#endregion
export { BlogPage as default };
