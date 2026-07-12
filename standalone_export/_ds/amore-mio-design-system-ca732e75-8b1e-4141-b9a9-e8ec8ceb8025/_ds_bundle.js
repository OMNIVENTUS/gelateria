/* @ds-bundle: {"format":4,"namespace":"AmoreMioDesignSystem_ca732e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"FlavorCard","sourcePath":"components/menu/FlavorCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"93b67254f1a6","components/core/Button.jsx":"787f51c5e5c4","components/core/Card.jsx":"a90cf2ac39ff","components/core/Icon.jsx":"2147c6c01868","components/marketing/SectionHeading.jsx":"5435f38fe864","components/menu/FlavorCard.jsx":"826fd21b067d","ui_kits/website/Sections.jsx":"8236a2f5156e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AmoreMioDesignSystem_ca732e = window.AmoreMioDesignSystem_ca732e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Amore Mio — Badge / Tag
 * Small Marcellus-caps label. Two tones: 'outline' (default, taupe hairline)
 * and 'solid' (accent wash). Used for "Fait maison", "Sans lactose", "Vegan".
 */
function Badge({
  children,
  tone = 'outline',
  dot,
  style,
  ...rest
}) {
  const tones = {
    outline: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border)'
    },
    solid: {
      background: 'var(--accent-wash)',
      color: 'var(--caramello-ink)',
      border: '1px solid var(--border-soft)'
    },
    muted: {
      background: 'var(--bg-alt)',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      fontSize: '11px',
      lineHeight: 1,
      padding: '6px 13px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '999px',
      background: dot,
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Amore Mio — Button
 * The primary action is always the pill CTA "Commander sur WhatsApp".
 * Radius is locked to pill. One accent only (caramello).
 */
function Button({
  children,
  variant = 'primary',
  // 'primary' | 'secondary' | 'ghost'
  size = 'md',
  // 'sm' | 'md' | 'lg'
  whatsapp = false,
  // prefixes the WhatsApp glyph
  href,
  icon,
  // optional Phosphor icon name (e.g. 'arrow-right')
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: '13px'
    },
    md: {
      padding: '13px 26px',
      fontSize: '15px'
    },
    lg: {
      padding: '17px 34px',
      fontSize: '16px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--accent)',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '1px solid transparent',
      boxShadow: 'none'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    lineHeight: 1,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease), background var(--dur-base) var(--ease), color var(--dur-base) var(--ease)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const wa = whatsapp && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 256 256",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "16",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M128 28a100 100 0 0 0-86 150L28 228l52-14A100 100 0 1 0 128 28Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M96 100c0 40 20 60 60 60l8-20-24-12-12 12a48 48 0 0 1-20-20l12-12-12-24Z"
  }));
  const glyph = icon && /*#__PURE__*/React.createElement("i", {
    className: `ph-light ph-${icon}`,
    style: {
      fontSize: '1.15em'
    },
    "aria-hidden": "true"
  });
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, wa, glyph, children);
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--accent)';
      if (!disabled && variant === 'secondary') e.currentTarget.style.background = 'transparent';
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'primary') e.currentTarget.style.background = 'var(--accent-hover)';
      if (variant === 'secondary') e.currentTarget.style.background = 'var(--accent-wash)';
      if (variant === 'ghost') e.currentTarget.style.color = 'var(--accent-hover)';
    }
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Amore Mio — Card
 * Latte surface, 24px radius, warm shadow. Optional image at top (16px radius,
 * inset). Composes freely; used for feature cards, info tiles, promos.
 */
function Card({
  image,
  imageAlt = '',
  aspect = '4/3',
  padding = 'var(--space-5)',
  hover = false,
  children,
  style,
  ...rest
}) {
  const [lift, setLift] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setLift(true),
    onMouseLeave: () => hover && setLift(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-faint)',
      boxShadow: lift ? 'var(--shadow-lg)' : 'var(--shadow-card)',
      transform: lift ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'box-shadow var(--dur-base) var(--ease), transform var(--dur-base) var(--ease)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-2)',
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      aspectRatio: aspect
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Amore Mio — Icon
 * Thin wrapper over Phosphor Icons (Light weight, stroke 1.5 by design).
 * Consumers must load the Phosphor Light web font once:
 *   <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/light/style.css">
 * Only the Light weight is permitted in this brand.
 */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("i", _extends({
    className: `ph-light ph-${name}`,
    style: {
      fontSize: typeof size === 'number' ? `${size}px` : size,
      color,
      lineHeight: 1,
      display: 'inline-block',
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Amore Mio — SectionHeading
 * Editorial section opener: Marcellus eyebrow, Cormorant display title
 * (italic supported for Italian words via <em>), optional Satoshi lead.
 */
function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  // 'left' | 'center'
  as = 'h2',
  style,
  ...rest
}) {
  const Heading = as;
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? '640px' : 'none',
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      fontSize: 'var(--text-label)',
      color: 'var(--accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Heading, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.5,
      color: 'var(--text-secondary)',
      maxWidth: '52ch'
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/menu/FlavorCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Amore Mio — FlavorCard
 * A single menu entry. Flavour name (Cormorant), Italian subtitle in italic,
 * short description, a colour dot sampled from the gelato, optional price and
 * dietary tags. Two layouts: 'row' (carte list) and 'tile' (grid with photo).
 */
function FlavorCard({
  name,
  subtitle,
  description,
  color = 'var(--taupe)',
  price,
  tags = [],
  image,
  layout = 'row',
  // 'row' | 'tile'
  style,
  ...rest
}) {
  if (layout === 'tile') {
    return /*#__PURE__*/React.createElement("article", _extends({
      style: {
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-card)',
        border: '1px solid var(--border-faint)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        ...style
      }
    }, rest), image && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-2)',
        paddingBottom: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-image)',
        overflow: 'hidden',
        aspectRatio: '4/3'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: image,
      alt: name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: '10px',
        height: '10px',
        borderRadius: '999px',
        background: color,
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: '1.5rem',
        lineHeight: 1.1,
        color: 'var(--text-primary)'
      }
    }, name)), subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 500,
        fontSize: '1.05rem',
        color: 'var(--text-secondary)',
        marginTop: '-2px'
      }
    }, subtitle), description && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-body)',
        fontSize: '0.9375rem',
        lineHeight: 1.55,
        color: 'var(--espresso-70)'
      }
    }, description), (tags.length > 0 || price) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        marginTop: 'var(--space-2)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '7px',
        flexWrap: 'wrap'
      }
    }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      key: t,
      tone: "muted"
    }, t))), price && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: '1rem',
        color: 'var(--text-primary)',
        whiteSpace: 'nowrap'
      }
    }, price))));
  }

  // row layout — carte list item
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-soft)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '12px',
      height: '12px',
      borderRadius: '999px',
      background: color,
      flex: '0 0 auto',
      marginTop: '9px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '10px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.375rem',
      lineHeight: 1.15,
      color: 'var(--text-primary)'
    }
  }, name), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: '1rem',
      color: 'var(--text-secondary)'
    }
  }, subtitle)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-body)',
      fontSize: '0.9375rem',
      lineHeight: 1.5,
      color: 'var(--espresso-70)'
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '7px',
      flexWrap: 'wrap',
      marginTop: 'var(--space-3)'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: t,
    tone: "muted"
  }, t)))), price && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '1.0625rem',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      marginTop: '2px'
    }
  }, price));
}
Object.assign(__ds_scope, { FlavorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/FlavorCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Amore Mio — Website UI kit sections.
   Composes the design-system primitives (window.AmoreMioDesignSystem_ca732e)
   into the real vitrine surfaces. Exports to window for index.html. */

const DS = window.AmoreMioDesignSystem_ca732e;
const {
  Button,
  Badge,
  Icon,
  SectionHeading,
  FlavorCard
} = DS;
const PHOTOS = '../../assets/photos/';

/* ---------- Nav ---------- */
function Nav({
  page,
  setPage
}) {
  const link = (id, label) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: page === id ? 'var(--accent)' : 'var(--text-primary)',
      padding: '6px 2px',
      letterSpacing: '.01em'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(246,241,232,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '16px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTOS + '../logo-sign-gold.jpg',
    alt: "Amore Mio",
    style: {
      width: '44px',
      height: '44px',
      borderRadius: '999px',
      objectFit: 'cover',
      boxShadow: 'var(--shadow-xs)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'left',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: '16px',
      color: 'var(--espresso)'
    }
  }, "Amore Mio"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '13px',
      color: 'var(--taupe)',
      marginTop: '2px'
    }
  }, "L'Atelier De La Glace"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '22px'
    }
  }, link('home', 'Accueil'), link('carte', 'La Carte')), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    whatsapp: true,
    href: "#commander"
  }, "Commander sur WhatsApp"))));
}

/* ---------- Hero ---------- */
function Hero({
  setPage
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(2.5rem,6vw,5rem) var(--gutter) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 'clamp(2rem,5vw,4rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.16em',
      fontSize: '13px',
      color: 'var(--accent)'
    }
  }, "Gelateria artisanale \xB7 Tunis"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(3rem,6vw,5.25rem)',
      lineHeight: 1.02,
      letterSpacing: '-.01em',
      color: 'var(--text-primary)'
    }
  }, "Le vrai go\xFBt,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "fatto a mano")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      maxWidth: '46ch',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, "Chaque bac est turbin\xE9 le matin m\xEAme dans notre atelier. Lait frais, fruits de saison, pistache de Bronte. Rien n'attend au cong\xE9lateur."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      marginTop: '30px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    whatsapp: true,
    href: "#commander"
  }, "Commander sur WhatsApp"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "arrow-right",
    onClick: () => setPage('carte')
  }, "Voir la carte")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginTop: '28px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "100% fait maison"), /*#__PURE__*/React.createElement(Badge, null, "Sans colorant"), /*#__PURE__*/React.createElement(Badge, null, "Turbin\xE9 chaque jour"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      aspectRatio: '4/5',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTOS + 'scoop-cup-logo.jpg',
    alt: "Coupe de gelato Amore Mio",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))));
}

/* ---------- Atelier band ---------- */
function Atelier() {
  const points = [{
    icon: 'cow',
    t: 'Lait frais',
    d: 'Collecté chaque matin, jamais de poudre.'
  }, {
    icon: 'leaf',
    t: 'Fruits de saison',
    d: 'Sourcés au marché, travaillés à maturité.'
  }, {
    icon: 'snowflake',
    t: 'Turbiné le jour même',
    d: 'Servi frais, jusqu\u2019à épuisement.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-alt)',
      marginTop: 'clamp(3rem,7vw,6rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(3rem,6vw,5rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'clamp(2rem,5vw,4rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      aspectRatio: '1/1',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTOS + 'caramel-texture.jpg',
    alt: "Texture de gelato caramel",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "L'Atelier",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Tout est fait ", /*#__PURE__*/React.createElement("em", null, "a mano")),
    lead: "Nous ne sommes pas une cha\xEEne. Une seule cuisine, une petite \xE9quipe, et des recettes que l'on ajuste au fil des saisons."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      marginTop: '30px'
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start',
      padding: '16px 0',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 26,
    color: "var(--accent)",
    style: {
      marginTop: '2px'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: '16px',
      color: 'var(--text-primary)'
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: 'var(--espresso-70)',
      marginTop: '2px'
    }
  }, p.d)))))))));
}

/* ---------- Flavors preview ---------- */
function FlavorsPreview({
  setPage
}) {
  const flavors = [{
    name: 'Pistache',
    subtitle: 'Pistacchio di Bronte',
    color: '#7a9a3f',
    image: PHOTOS + 'choco-pistache-cone.jpg',
    description: 'Pâte pure de pistache de Sicile, sans colorant.',
    price: '4,5 DT',
    tags: ['Sans gluten']
  }, {
    name: 'Cioccolato',
    subtitle: 'Fondente 70%',
    color: '#5a3b28',
    image: PHOTOS + 'tub-two-tone.jpg',
    description: 'Chocolat noir intense, éclats torréfiés.',
    price: '4,5 DT',
    tags: ['Intense']
  }, {
    name: 'Fraise',
    subtitle: 'Fragola',
    color: '#b23b3b',
    image: PHOTOS + 'sorbet-cone-red.jpg',
    description: 'Sorbet plein fruit, fraises de saison.',
    price: '4,0 DT',
    tags: ['Vegan']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(3rem,7vw,6rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '20px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "La Carte",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Nos parfums ", /*#__PURE__*/React.createElement("em", null, "del giorno")),
    lead: "Une s\xE9lection qui tourne avec les arrivages. Voici ceux d'aujourd'hui."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "arrow-right",
    onClick: () => setPage('carte')
  }, "Toute la carte")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px',
      marginTop: '36px'
    }
  }, flavors.map(f => /*#__PURE__*/React.createElement(FlavorCard, _extends({
    key: f.name,
    layout: "tile"
  }, f)))));
}

/* ---------- Signature feature ---------- */
function Signature() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(3rem,6vw,5rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'clamp(2rem,5vw,4rem)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.16em',
      fontSize: '13px',
      color: 'var(--accent)'
    }
  }, "La signature"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(2rem,4vw,3.25rem)',
      lineHeight: 1.06,
      color: 'var(--text-primary)'
    }
  }, "L'", /*#__PURE__*/React.createElement("em", null, "affogato"), ", comme \xE0 Naples"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      maxWidth: '44ch',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lead)',
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, "Une boule de fior di latte, un espresso serr\xE9 vers\xE9 \xE0 table. Le contraste chaud-froid, rien d'autre."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    whatsapp: true,
    href: "#commander"
  }, "Commander sur WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-image)',
      overflow: 'hidden',
      aspectRatio: '4/5',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTOS + 'affogato.jpg',
    alt: "Affogato Amore Mio",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))));
}

/* ---------- Location / hours ---------- */
function Location() {
  const rows = [{
    icon: 'map-pin',
    t: 'Adresse',
    d: 'Avenue Habib Bourguiba, La Marsa · Tunis'
  }, {
    icon: 'clock',
    t: 'Horaires',
    d: 'Tous les jours · 11h — 23h30'
  }, {
    icon: 'phone',
    t: 'Commande',
    d: 'WhatsApp · +216 00 000 000'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "commander",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(3rem,7vw,6rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-faint)',
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(2rem,4vw,3.5rem)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Passer commande",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Une envie, ", /*#__PURE__*/React.createElement("em", null, "subito")),
    lead: "Composez votre coupe ou votre bac et envoyez-nous un message. On pr\xE9pare, vous passez r\xE9cup\xE9rer."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '24px'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      padding: '16px 0',
      borderTop: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon,
    size: 24,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      fontSize: '11px',
      color: 'var(--text-secondary)'
    }
  }, r.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      color: 'var(--text-primary)',
      marginTop: '3px'
    }
  }, r.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    whatsapp: true,
    href: "#"
  }, "Commander sur WhatsApp"))), /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '380px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: PHOTOS + 'storefront-lifestyle.jpg',
    alt: "Devanture Amore Mio",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))));
}

/* ---------- Footer ---------- */
function Footer({
  setPage
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--espresso)',
      color: 'var(--crema)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: 'clamp(2.5rem,5vw,4rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '32px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '320px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.14em',
      fontSize: '20px'
    }
  }, "Amore Mio"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '16px',
      color: 'var(--taupe-40)',
      marginTop: '4px'
    }
  }, "L'Atelier De La Glace"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '16px',
      fontSize: '14px',
      lineHeight: 1.6,
      color: 'rgba(246,241,232,0.75)'
    }
  }, "Gelateria artisanale, Tunis. Fait maison chaque jour depuis l'atelier.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '56px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      fontSize: '11px',
      color: 'var(--taupe-40)',
      marginBottom: '14px'
    }
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('home'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--crema)',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontSize: '14px'
    }
  }, "Accueil"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setPage('carte'),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--crema)',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-body)',
      fontSize: '14px'
    }
  }, "La Carte"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-label)',
      textTransform: 'uppercase',
      letterSpacing: '.12em',
      fontSize: '11px',
      color: 'var(--taupe-40)',
      marginBottom: '14px'
    }
  }, "Suivez-nous"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram-logo",
    size: 24,
    color: "var(--crema)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "facebook-logo",
    size: 24,
    color: "var(--crema)"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "tiktok-logo",
    size: 24,
    color: "var(--crema)"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '40px',
      paddingTop: '20px',
      borderTop: '1px solid rgba(246,241,232,0.14)',
      fontSize: '12px',
      color: 'rgba(246,241,232,0.55)'
    }
  }, "\xA9 2026 Amore Mio \xB7 La Marsa, Tunis")));
}

/* ---------- Carte page ---------- */
function CartePage() {
  const cats = [{
    name: 'Gelati',
    it: 'Crèmes glacées',
    items: [{
      name: 'Pistache',
      subtitle: 'Pistacchio di Bronte',
      color: '#7a9a3f',
      description: 'Pâte pure de pistache de Sicile, sans colorant.',
      price: '4,5 DT',
      tags: ['Sans gluten']
    }, {
      name: 'Stracciatella',
      subtitle: 'Fior di latte',
      color: '#efe7d6',
      description: 'Lait frais et chocolat cassé à la main.',
      price: '4,0 DT'
    }, {
      name: 'Cioccolato',
      subtitle: 'Fondente 70%',
      color: '#5a3b28',
      description: 'Chocolat noir intense, éclats torréfiés.',
      price: '4,5 DT',
      tags: ['Intense']
    }, {
      name: 'Noisette',
      subtitle: 'Nocciola',
      color: '#a06a3c',
      description: 'Noisettes du Piémont torréfiées longuement.',
      price: '4,5 DT',
      tags: ['Sans gluten']
    }]
  }, {
    name: 'Sorbetti',
    it: 'Sorbets plein fruit',
    items: [{
      name: 'Fraise',
      subtitle: 'Fragola',
      color: '#b23b3b',
      description: 'Fraises de saison, plein fruit, eau et sucre.',
      price: '4,0 DT',
      tags: ['Vegan']
    }, {
      name: 'Citron',
      subtitle: 'Limone',
      color: '#e6c94e',
      description: 'Citron pressé, franc et vif.',
      price: '3,5 DT',
      tags: ['Vegan']
    }, {
      name: 'Mangue',
      subtitle: 'Mango',
      color: '#e08a2b',
      description: 'Chair de mangue mûre, sans arôme ajouté.',
      price: '4,0 DT',
      tags: ['Vegan']
    }]
  }, {
    name: 'Signatures',
    it: 'Nos créations',
    items: [{
      name: 'Affogato',
      subtitle: 'Fior di latte + espresso',
      color: '#3f2a1c',
      description: 'Une boule, un espresso serré versé à table.',
      price: '6,0 DT'
    }, {
      name: 'Cône enrobé',
      subtitle: 'Croccante pistache',
      color: '#7a9a3f',
      description: 'Chocolat noir, pistache concassée, filet de caramel.',
      price: '5,5 DT'
    }]
  }];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: '860px',
      margin: '0 auto',
      padding: 'clamp(2.5rem,6vw,4.5rem) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "La Carte",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Turbin\xE9 ", /*#__PURE__*/React.createElement("em", null, "oggi")),
    lead: "Les parfums tournent avec les arrivages. Prix au parfum, coupe une, deux ou trois boules."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      display: 'flex',
      flexDirection: 'column',
      gap: '48px'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("section", {
    key: c.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '12px',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '2rem',
      color: 'var(--text-primary)'
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: '1.1rem',
      color: 'var(--taupe)'
    }
  }, c.it)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-faint)',
      boxShadow: 'var(--shadow-sm)',
      padding: '4px 24px'
    }
  }, c.items.map((it, i) => /*#__PURE__*/React.createElement(FlavorCard, _extends({
    key: it.name
  }, it, {
    style: i === c.items.length - 1 ? {
      borderBottom: 'none'
    } : undefined
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '48px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    whatsapp: true,
    href: "#"
  }, "Commander sur WhatsApp")));
}
Object.assign(window, {
  Nav,
  Hero,
  Atelier,
  FlavorsPreview,
  Signature,
  Location,
  Footer,
  CartePage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.FlavorCard = __ds_scope.FlavorCard;

})();
