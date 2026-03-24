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
                threshold: 0.02,
                rootMargin: "0px 0px -20px 0px"
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
        className: "".concat(revealClasses[animate], " relative py-14 md:py-20 ").concat(bgs[bg], " ").concat(className),
        style: blend ? {
            "--next-bg": blendColors[blend]
        } : undefined,
        children: [
            blend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-0 left-0 right-0 h-16",
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
]);

//# sourceMappingURL=components_Section_tsx_7ccf32fd._.js.map