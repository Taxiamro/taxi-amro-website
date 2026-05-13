import { t as blogPosts } from "../main.mjs";
import { n as Footer, r as Navbar, t as FloatingWhatsApp } from "./FloatingWhatsApp-BAlt1xrR.js";
import { Helmet } from "react-helmet-async";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, Navigate, useParams } from "react-router-dom";
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
export { BlogPostPage as default };
