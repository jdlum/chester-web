(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const bgs = {
    white: "bg-off-white",
    parchment: "bg-parchment",
    green: "bg-chester-green text-white",
    surface: "bg-chester-green-surface"
};
const blendColors = {
    white: "#FAFAF6",
    parchment: "#EDE5D4",
    green: "#2C3D28",
    surface: "#F0F4EE"
};
const revealClasses = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
    none: ""
};
function Section(param) {
    let { children, className = "", id, bg = "white", animate = "up", blend } = param;
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Section.useEffect": ()=>{
            const el = ref.current;
            if (!el || animate === "none") return;
            const observer = new IntersectionObserver({
                "Section.useEffect": (param)=>{
                    let [entry] = param;
                    if (entry.isIntersecting) {
                        el.classList.add("visible");
                        observer.unobserve(el);
                    }
                }
            }["Section.useEffect"], {
                threshold: 0.08,
                rootMargin: "0px 0px -60px 0px"
            });
            observer.observe(el);
            return ({
                "Section.useEffect": ()=>observer.disconnect()
            })["Section.useEffect"];
        }
    }["Section.useEffect"], [
        animate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: id,
        className: "".concat(revealClasses[animate], " relative py-20 md:py-28 ").concat(bgs[bg], " ").concat(className),
        style: blend ? {
            "--next-bg": blendColors[blend]
        } : undefined,
        children: [
            blend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 left-0 right-0 h-24",
                style: {
                    background: "linear-gradient(to bottom, transparent, ".concat(blendColors[blend], ")")
                }
            }, void 0, false, {
                fileName: "[project]/components/Section.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Section.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Section.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(Section, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FeatureTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const features = [
    {
        id: "scheduling",
        label: "Scheduling",
        title: "Your week, at a glance",
        description: "See pending requests, upcoming walks, and completed sessions on one calendar. Approve bookings in one tap.",
        bullets: [
            "Pending request management",
            "Recurring booking support",
            "Group walk cohorts",
            "Cancellation enforcement"
        ],
        // PLACEHOLDER screen content
        screen: {
            header: "Schedule",
            items: [
                {
                    time: "9:00 AM",
                    name: "Bella & Max",
                    type: "Group Walk",
                    status: "confirmed"
                },
                {
                    time: "11:30 AM",
                    name: "Luna",
                    type: "Solo Walk",
                    status: "pending"
                },
                {
                    time: "2:00 PM",
                    name: "Cooper",
                    type: "Training",
                    status: "confirmed"
                },
                {
                    time: "4:30 PM",
                    name: "Daisy & Rosie",
                    type: "Group Walk",
                    status: "confirmed"
                }
            ]
        }
    },
    {
        id: "payments",
        label: "Payments",
        title: "Get paid without thinking about it",
        description: "Stripe-powered invoicing that runs itself. Clients pay in one tap — funds land in your account automatically.",
        bullets: [
            "Automatic invoice generation",
            "One-tap client checkout",
            "Revenue dashboard",
            "No hidden fees"
        ],
        screen: {
            header: "Billing",
            items: [
                {
                    time: "Today",
                    name: "Sarah K.",
                    type: "$85.00",
                    status: "paid"
                },
                {
                    time: "Today",
                    name: "Mike R.",
                    type: "$120.00",
                    status: "paid"
                },
                {
                    time: "Yesterday",
                    name: "Lisa T.",
                    type: "$45.00",
                    status: "pending"
                },
                {
                    time: "Mar 20",
                    name: "Anna M.",
                    type: "$90.00",
                    status: "paid"
                }
            ]
        }
    },
    {
        id: "messaging",
        label: "Messages",
        title: "Stay connected, in real time",
        description: "Chat directly with clients. Send updates, photos, and report cards — all without leaving the app.",
        bullets: [
            "Real-time push notifications",
            "Photo report cards",
            "Per-pet observations",
            "Delivery tracking"
        ],
        screen: {
            header: "Messages",
            items: [
                {
                    time: "Just now",
                    name: "Sarah K.",
                    type: "How was Bella today?",
                    status: "unread"
                },
                {
                    time: "1h ago",
                    name: "Mike R.",
                    type: "Thanks for the report card!",
                    status: "read"
                },
                {
                    time: "2h ago",
                    name: "Lisa T.",
                    type: "Can we reschedule Friday?",
                    status: "read"
                },
                {
                    time: "Yesterday",
                    name: "Anna M.",
                    type: "Luna loved the walk!",
                    status: "read"
                }
            ]
        }
    },
    {
        id: "insights",
        label: "Insights",
        title: "Know every dog better than their owner",
        description: "Automatically track mood, energy, and appetite trends across visits. Spot changes before they become problems.",
        bullets: [
            "Mood & energy tracking",
            "Appetite trends",
            "Auto-detected patterns",
            "Shareable with owners"
        ],
        screen: {
            header: "Pet Insights",
            items: [
                {
                    time: "Improving",
                    name: "Bella",
                    type: "Energy: High",
                    status: "up"
                },
                {
                    time: "Stable",
                    name: "Max",
                    type: "Mood: Happy",
                    status: "stable"
                },
                {
                    time: "Watch",
                    name: "Luna",
                    type: "Appetite: Low",
                    status: "down"
                },
                {
                    time: "Improving",
                    name: "Cooper",
                    type: "Energy: Medium",
                    status: "up"
                }
            ]
        }
    }
];
const statusColors = {
    confirmed: "bg-chester-green/15 text-chester-green",
    pending: "bg-honey/15 text-honey",
    paid: "bg-chester-green/15 text-chester-green",
    unread: "bg-honey/15 text-honey",
    read: "bg-slate/10 text-slate",
    up: "bg-chester-green/15 text-chester-green",
    stable: "bg-slate/10 text-slate",
    down: "bg-red-100 text-red-700"
};
function FeatureTabs() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const feat = features[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex flex-wrap justify-center gap-2",
                children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActive(i),
                        className: "relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ".concat(i === active ? "bg-chester-green text-white shadow-lg shadow-chester-green/20" : "bg-chester-green-surface text-slate hover:bg-chester-green-light hover:text-chester-green"),
                        children: f.label
                    }, f.id, false, {
                        fileName: "[project]/components/FeatureTabs.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/FeatureTabs.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center gap-10 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-[hero-slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-heading text-3xl sm:text-4xl",
                                children: feat.title
                            }, void 0, false, {
                                fileName: "[project]/components/FeatureTabs.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg leading-relaxed text-slate",
                                children: feat.description
                            }, void 0, false, {
                                fileName: "[project]/components/FeatureTabs.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-6 space-y-3",
                                children: feat.bullets.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-3 text-sm text-deep-forest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 shrink-0 text-honey",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                strokeWidth: 2.5,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FeatureTabs.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/FeatureTabs.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, this),
                                            b
                                        ]
                                    }, b, true, {
                                        fileName: "[project]/components/FeatureTabs.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/FeatureTabs.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, feat.id, true, {
                        fileName: "[project]/components/FeatureTabs.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "glow-pulse absolute -inset-6 rounded-[3rem] bg-honey/15 blur-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/components/FeatureTabs.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-[280px] rounded-[2.5rem] border-[6px] border-deep-forest/90 bg-deep-forest shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-1/2 top-2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-deep-forest"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FeatureTabs.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden rounded-[2rem] bg-off-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 pb-5 pt-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-heading text-base text-deep-forest",
                                                            children: feat.screen.header
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FeatureTabs.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FeatureTabs.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: feat.screen.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between rounded-xl border border-linen bg-white p-3 animate-[hero-slide-up_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards] opacity-0",
                                                                style: {
                                                                    animationDelay: "".concat(idx * 80 + 100, "ms")
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[11px] font-semibold text-deep-forest",
                                                                                children: item.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/FeatureTabs.tsx",
                                                                                lineNumber: 195,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[9px] text-slate",
                                                                                children: item.type
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/FeatureTabs.tsx",
                                                                                lineNumber: 198,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/FeatureTabs.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-full px-2 py-0.5 text-[8px] font-semibold ".concat(statusColors[item.status] || "bg-slate/10 text-slate"),
                                                                        children: item.time
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FeatureTabs.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, item.name + idx, true, {
                                                                fileName: "[project]/components/FeatureTabs.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, feat.id + "-items", false, {
                                                        fileName: "[project]/components/FeatureTabs.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-4 flex items-center justify-around rounded-xl bg-chester-green-surface px-2 py-2",
                                                        children: features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center ".concat(i === active ? "text-chester-green" : "text-slate/40"),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mx-auto mb-0.5 h-4 w-4 rounded-md ".concat(i === active ? "bg-chester-green/20" : "")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FeatureTabs.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[7px] font-medium",
                                                                        children: f.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FeatureTabs.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, f.id, true, {
                                                                fileName: "[project]/components/FeatureTabs.tsx",
                                                                lineNumber: 214,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FeatureTabs.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FeatureTabs.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/FeatureTabs.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-1.5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/40"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FeatureTabs.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/FeatureTabs.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FeatureTabs.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FeatureTabs.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FeatureTabs.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FeatureTabs.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_s(FeatureTabs, "LYMHw6xE17pbh6ai9qaw76OM0Ms=");
_c = FeatureTabs;
var _c;
__turbopack_context__.k.register(_c, "FeatureTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0cad6c63._.js.map