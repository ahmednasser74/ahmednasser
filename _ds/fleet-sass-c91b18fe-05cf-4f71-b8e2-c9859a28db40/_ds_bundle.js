/* @ds-bundle: {"format":4,"namespace":"FleetSass_c91b18","components":[{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"KpiChip","sourcePath":"components/data/KpiChip.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"StatusBadge","sourcePath":"components/feedback/StatusBadge.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastRegion","sourcePath":"components/feedback/ToastRegion.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/navigation/Avatar.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ConfirmDialog","sourcePath":"components/overlay/ConfirmDialog.jsx"},{"name":"Drawer","sourcePath":"components/overlay/Drawer.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"}],"sourceHashes":{"components/core/Icon.jsx":"2b73cb418899","components/data/Card.jsx":"0ff6bf60d7d2","components/data/DataTable.jsx":"59589e931557","components/data/KpiChip.jsx":"9db4884a8142","components/data/Pagination.jsx":"78b8a2504f08","components/feedback/Badge.jsx":"78e010f301ec","components/feedback/EmptyState.jsx":"d40879fc8123","components/feedback/Skeleton.jsx":"4e76b8aafaa3","components/feedback/Spinner.jsx":"3a12516723b1","components/feedback/StatusBadge.jsx":"efb5f6645cd8","components/feedback/Toast.jsx":"cdac691a2d18","components/feedback/ToastRegion.jsx":"41fb93b5f386","components/forms/Button.jsx":"9e604e0be843","components/forms/Checkbox.jsx":"696c638a2b05","components/forms/FormField.jsx":"e6c22284b327","components/forms/IconButton.jsx":"e5501b4e90e4","components/forms/Input.jsx":"c1dcc9fd2bab","components/forms/Select.jsx":"23be8dd0cabe","components/forms/Switch.jsx":"135032a4ad03","components/forms/Textarea.jsx":"154135a55f8e","components/navigation/Avatar.jsx":"a6b309f989d2","components/navigation/SegmentedControl.jsx":"b58fa6dadf28","components/navigation/Tabs.jsx":"b07753ae3260","components/overlay/ConfirmDialog.jsx":"530196f982b2","components/overlay/Drawer.jsx":"d0334111c58d","components/overlay/Modal.jsx":"f8e13499d34c","design_handoff_fleet_saas/pages/activity-data.js":"dce671ef26e0","design_handoff_fleet_saas/pages/fleet-data.js":"f52e89a5a74f","design_handoff_fleet_saas/pages/forms-store.js":"0a8107921ae6","design_handoff_fleet_saas/pages/i18n-store.js":"f7cd05ed1a65","design_handoff_fleet_saas/pages/import-export.js":"9c3f4c7021f2","design_handoff_fleet_saas/pages/roles-store.js":"a12706e138b4","design_handoff_fleet_saas/pages/truck-data.js":"1274a3a2cc33","design_handoff_fleet_saas/pages/ui.js":"36c2fabbe930","design_handoff_fleet_saas/pages/user-data.js":"64e9e21c7ef1","doc-page.js":"371bab66f42d","image-slot.js":"fff26d081c8d","pages/activity-data.js":"11d590968ffd","pages/addons-store.js":"4996789e0c6c","pages/adjustments-store.js":"6e13ef5623e5","pages/country-data.js":"c25c2facb310","pages/customer-data.js":"884fa582d98d","pages/fleet-data.js":"54842a44cad5","pages/forms-store.js":"8c2a59209d24","pages/gmaps.js":"b2ecd686b52f","pages/hub-data.js":"19636bad4da3","pages/i18n-store.js":"7e6754018da4","pages/import-export.js":"6ed12cfda9aa","pages/invoice-store.js":"ab5163775a7d","pages/list-filters.js":"b25d371a07b7","pages/multi-select.js":"0e244650433e","pages/ops-store.js":"244466b352c9","pages/order-actions.js":"0140e7615d1c","pages/order-activity.js":"f3ecc0f8f3f9","pages/order-data.js":"c91fd6ffd5de","pages/order-label.js":"7181b139308c","pages/payroll-data.js":"876253a1a56a","pages/pricing-data.js":"06c02956ad65","pages/qrcode.js":"08f7f295079c","pages/returns-data.js":"656b9602a502","pages/roles-store.js":"0f4e1d84b815","pages/routing-demo-data.js":"29b6c4e5e3e0","pages/servicearea-data.js":"5a068ff1afc8","pages/shipment-data.js":"a7fa1ab0bdf5","pages/shipment-routing.js":"0bc636133c0b","pages/store-data.js":"620f30a7c5e4","pages/truck-data.js":"f4ac57c1b117","pages/ui.js":"2d0a82bfbe4a","pages/user-data.js":"64e9e21c7ef1","showcase/app.jsx":"0a490c791fc0","showcase/specimens.jsx":"54b7ea6f2d23","ui_kits/console/AppShell.jsx":"25010c55ba8d","ui_kits/console/Dashboard.jsx":"41c90fedcf20","ui_kits/console/Drivers.jsx":"132743e46ce3","ui_kits/console/Login.jsx":"cadccd48a3df","ui_kits/console/data.js":"c19d4250bcce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FleetSass_c91b18 = window.FleetSass_c91b18 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — the single icon primitive for the whole system.
 * Lucide-style line icons: 24×24 grid, 1.8 stroke, round caps/joins —
 * matching the console's existing inline SVG set. Color follows
 * `currentColor`; size via the `size` prop (px).
 */

const PATHS = {
  // navigation / shell
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3.5-5 7-5s7 1.5 7 5"/><path d="M17 8a3 3 0 0 1 0 6M22 20c0-2.5-2-4-4-4.5"/>',
  truck: '<rect x="1" y="6" width="13" height="10" rx="1"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="6" cy="18" r="1.7"/><circle cx="18" cy="18" r="1.7"/>',
  map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><path d="M9 3v15M15 6v15"/>',
  'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/>',
  package: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6"/>',
  key: '<circle cx="7" cy="14" r="4"/><path d="M10 11l9-9M17 4l2 2M14 7l2 2"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
  // actions
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M5 12l5 5L20 6"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'more-vertical': '<circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/>',
  'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
  'chevron-up': '<polyline points="18 15 12 9 6 15"/>',
  'chevron-right': '<polyline points="9 6 15 12 9 18"/>',
  'chevron-left': '<polyline points="15 6 9 12 15 18"/>',
  'arrow-up': '<path d="M12 19V5M6 11l6-6 6 6"/>',
  'arrow-down': '<path d="M12 5v14M6 13l6 6 6-6"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>',
  columns: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M9 4v16M15 4v16"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
  download: '<path d="M12 4v12M7 11l5 5 5-5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  // feedback
  'check-circle': '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5L16 9"/>',
  'alert-circle': '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
  'alert-triangle': '<path d="M10.3 4.3 2 19a1.5 1.5 0 0 0 1.3 2.2h17.4A1.5 1.5 0 0 0 22 19L13.7 4.3a1.5 1.5 0 0 0-2.6 0Z"/><path d="M12 9v4M12 17h.01"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6l-3.5-6.5a1 1 0 0 0-.9-.5H6.4a1 1 0 0 0-.9.5Z"/>',
  // map / ops
  'zoom-in': '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
  'zoom-out': '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M8 11h6"/>',
  layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5M3 8v5m18-5v5"/>',
  navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
  crosshair: '<circle cx="12" cy="12" r="8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  'panel-left': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M5 5l1.5 1.5M17.5 17.5 19 19M2 12h2M20 12h2M5 19l1.5-1.5M17.5 6.5 19 5"/>',
  moon: '<path d="M21 12.8A8 8 0 1 1 11.2 3a6.4 6.4 0 0 0 9.8 9.8Z"/>'
};
function Icon({
  name,
  size = 18,
  strokeWidth = 1.8,
  className = '',
  style,
  ...rest
}) {
  const d = PATHS[name];
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: d || ''
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container with optional header (title + actions),
 * body, and footer. Use `flush` to remove body padding (e.g. when it
 * holds a DataTable that manages its own spacing).
 */
function Card({
  title,
  actions = null,
  footer = null,
  flush = false,
  children,
  className = '',
  bodyClassName = '',
  ...rest
}) {
  const cls = ['fds-card', flush && 'fds-card--flush', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls
  }, rest), (title || actions) && /*#__PURE__*/React.createElement("header", {
    className: "fds-card__head"
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "fds-card__title"
  }, title), actions && /*#__PURE__*/React.createElement("div", {
    className: "fds-card__actions"
  }, actions)), /*#__PURE__*/React.createElement("div", {
    className: ['fds-card__body', bodyClassName].filter(Boolean).join(' ')
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "fds-card__foot"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/KpiChip.jsx
try { (() => {
/**
 * KpiChip — a single operational metric with a strong number. Used in
 * the dashboard Orders panel (active / unassigned / per-fleet). Pass
 * `dotColor` for a leading status dot and `delta` for a trend.
 */
function KpiChip({
  label,
  value,
  dotColor,
  delta = null,
  deltaDir = 'up',
  onClick,
  className = ''
}) {
  const clickable = typeof onClick === 'function';
  const cls = ['fds-kpi', clickable && 'fds-kpi--clickable', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    onClick: onClick,
    role: clickable ? 'button' : undefined,
    tabIndex: clickable ? 0 : undefined,
    onKeyDown: clickable ? e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(e);
      }
    } : undefined
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-kpi__label"
  }, dotColor && /*#__PURE__*/React.createElement("span", {
    className: "fds-kpi__dot",
    style: {
      background: dotColor
    }
  }), label), /*#__PURE__*/React.createElement("span", {
    className: "fds-kpi__value"
  }, value), delta != null && /*#__PURE__*/React.createElement("span", {
    className: `fds-kpi__delta fds-kpi__delta--${deltaDir}`
  }, delta));
}
Object.assign(__ds_scope, { KpiChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/KpiChip.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
/**
 * Pagination — footer matching the {data, meta} API envelope. Shows
 * "X–Y of total" and prev/next. Page numbers are 1-based.
 */
function Pagination({
  page,
  pages,
  total,
  pageSize,
  onPageChange,
  className = ''
}) {
  const safePages = Math.max(pages || 1, 1);
  const start = total ? (page - 1) * (pageSize || 0) + 1 : 0;
  const end = pageSize ? Math.min(page * pageSize, total) : total;
  const go = p => {
    if (p >= 1 && p <= safePages && p !== page) onPageChange?.(p);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['fds-pagination', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-pagination__info"
  }, total ? /*#__PURE__*/React.createElement(React.Fragment, null, start, "\u2013", end, " of ", total) : 'No results'), /*#__PURE__*/React.createElement("div", {
    className: "fds-pagination__pages"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fds-iconbtn fds-iconbtn--sm fds-iconbtn--ghost",
    onClick: () => go(page - 1),
    disabled: page <= 1,
    "aria-label": "Previous page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "fds-pagination__info",
    "aria-current": "page",
    style: {
      margin: 0
    }
  }, page, " / ", safePages), /*#__PURE__*/React.createElement("button", {
    className: "fds-iconbtn fds-iconbtn--sm fds-iconbtn--ghost",
    onClick: () => go(page + 1),
    disabled: page >= safePages,
    "aria-label": "Next page"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/label pill. Tones map to semantic colors.
 * Add `dot` for a leading status dot. For domain entity status
 * (driver/order), prefer StatusBadge which maps the status string.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  solid = false,
  className = '',
  ...rest
}) {
  const cls = ['fds-badge', solid ? 'fds-badge--solid' : `fds-badge--${tone}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "fds-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * EmptyState — icon + title + hint + optional primary action. Use on
 * every list/panel when there's no data (vs loading or error).
 */
function EmptyState({
  icon = 'inbox',
  title,
  hint,
  action = null,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['fds-empty', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "fds-empty__icon"
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  }) : icon), title && /*#__PURE__*/React.createElement("div", {
    className: "fds-empty__title"
  }, title), hint && /*#__PURE__*/React.createElement("div", {
    className: "fds-empty__hint"
  }, hint), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Skeleton — shimmer placeholder for loading content. Use `variant`
 * for common shapes, or set width/height directly. Compose multiple
 * into skeleton table rows / cards while data fetches.
 */
function Skeleton({
  variant = 'text',
  width,
  height,
  className = '',
  style,
  ...rest
}) {
  const cls = ['fds-skeleton', variant === 'text' && 'fds-skeleton--text', variant === 'row' && 'fds-skeleton--row', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      display: 'block',
      width,
      height,
      ...style
    },
    "aria-hidden": "true"
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
/**
 * DataTable — the reusable list table. Sticky sortable header, row
 * hover, density toggle, skeleton loading rows, and an empty state.
 * Columns describe how to render each cell; pass `renderActions` for
 * a trailing row-actions cell (e.g. a kebab menu).
 *
 * columns: [{ key, label, sortable?, align?, mono?, width?, render?(row) }]
 */
function DataTable({
  columns = [],
  rows = [],
  rowKey = 'id',
  loading = false,
  skeletonRows = 6,
  sort = null,
  // { key, dir: 'asc' | 'desc' }
  onSort = null,
  dense = false,
  renderActions = null,
  empty = {},
  // { icon, title, hint, action }
  className = ''
}) {
  const colSpan = columns.length + (renderActions ? 1 : 0);
  const sortable = typeof onSort === 'function';
  const headSort = col => {
    if (!sortable || !col.sortable) return;
    const dir = sort && sort.key === col.key && sort.dir === 'asc' ? 'desc' : 'asc';
    onSort({
      key: col.key,
      dir
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['fds-table-wrap', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("table", {
    className: ['fds-table', dense && 'fds-table--dense'].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => {
    const active = sort && sort.key === col.key;
    return /*#__PURE__*/React.createElement("th", {
      key: col.key,
      style: {
        width: col.width,
        textAlign: col.align || 'start'
      },
      className: [col.sortable && sortable && 'fds-th--sortable', active && 'fds-th--active'].filter(Boolean).join(' '),
      onClick: () => headSort(col),
      "aria-sort": active ? sort.dir === 'asc' ? 'ascending' : 'descending' : undefined
    }, col.sortable && sortable ? /*#__PURE__*/React.createElement("span", {
      className: "fds-th__sort"
    }, col.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      className: "fds-th__caret",
      name: active && sort.dir === 'desc' ? 'arrow-down' : 'arrow-up',
      size: 13
    })) : col.label);
  }), renderActions && /*#__PURE__*/React.createElement("th", {
    className: "fds-td--actions",
    "aria-label": "Actions"
  }))), /*#__PURE__*/React.createElement("tbody", null, loading ? Array.from({
    length: skeletonRows
  }).map((_, i) => /*#__PURE__*/React.createElement("tr", {
    key: `sk-${i}`
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    variant: "text",
    width: col.mono ? '70%' : '55%'
  }))), renderActions && /*#__PURE__*/React.createElement("td", {
    className: "fds-td--actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    variant: "text",
    width: 16
  })))) : rows.length ? rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row[rowKey] ?? i
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key,
    className: col.mono ? 'fds-td--mono' : '',
    style: {
      textAlign: col.align || 'start'
    }
  }, col.render ? col.render(row) : row[col.key] ?? '—')), renderActions && /*#__PURE__*/React.createElement("td", {
    className: "fds-td--actions"
  }, renderActions(row)))) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: colSpan,
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.EmptyState, {
    icon: empty.icon || 'inbox',
    title: empty.title || 'No records',
    hint: empty.hint,
    action: empty.action
  }))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Spinner — indeterminate loading indicator. Size in px. */
function Spinner({
  size = 18,
  className = '',
  label = 'Loading',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['fds-spinner', className].filter(Boolean).join(' '),
    style: {
      width: size,
      height: size
    },
    role: "status",
    "aria-label": label
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBadge.jsx
try { (() => {
/**
 * StatusBadge — maps a domain status string (driver/vehicle/order)
 * to the correct tone + label, so status renders identically across
 * every screen. Falls back to neutral for unknown values.
 */
const STATUS_MAP = {
  online: {
    tone: 'success',
    label: 'Online'
  },
  active: {
    tone: 'success',
    label: 'Active'
  },
  available: {
    tone: 'success',
    label: 'Available'
  },
  delivered: {
    tone: 'success',
    label: 'Delivered'
  },
  completed: {
    tone: 'success',
    label: 'Completed'
  },
  offline: {
    tone: 'neutral',
    label: 'Offline'
  },
  idle: {
    tone: 'neutral',
    label: 'Idle'
  },
  inactive: {
    tone: 'neutral',
    label: 'Inactive'
  },
  busy: {
    tone: 'info',
    label: 'Busy'
  },
  'en-route': {
    tone: 'info',
    label: 'En-route'
  },
  dispatched: {
    tone: 'info',
    label: 'Dispatched'
  },
  'picked-up': {
    tone: 'info',
    label: 'Picked up'
  },
  pending: {
    tone: 'warning',
    label: 'Pending'
  },
  preparing: {
    tone: 'warning',
    label: 'Preparing'
  },
  returned: {
    tone: 'warning',
    label: 'Returned'
  },
  error: {
    tone: 'danger',
    label: 'Error'
  },
  cancelled: {
    tone: 'danger',
    label: 'Cancelled'
  },
  canceled: {
    tone: 'danger',
    label: 'Cancelled'
  },
  failed: {
    tone: 'danger',
    label: 'Failed'
  }
};
function StatusBadge({
  status,
  className = ''
}) {
  const key = String(status ?? '').toLowerCase();
  const cfg = STATUS_MAP[key] || {
    tone: 'neutral',
    label: status || '—'
  };
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: cfg.tone,
    dot: true,
    className: className
  }, cfg.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONE_ICON = {
  success: 'check-circle',
  warning: 'alert-triangle',
  danger: 'alert-circle',
  info: 'info'
};

/**
 * Toast — a single notification. Use after every create/update/delete
 * outcome. Render inside a ToastRegion. Auto-dismiss is the caller's
 * responsibility (setTimeout → onClose) so it stays controlled.
 */
function Toast({
  tone = 'info',
  title,
  message,
  onClose,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['fds-toast', `fds-toast--${tone}`, className].filter(Boolean).join(' '),
    role: "status",
    "aria-live": "polite"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-toast__icon"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: TONE_ICON[tone] || 'info',
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "fds-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "fds-toast__title"
  }, title), message && /*#__PURE__*/React.createElement("div", {
    className: "fds-toast__msg"
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "fds-toast__close",
    onClick: onClose,
    "aria-label": "Dismiss notification"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 15
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ToastRegion.jsx
try { (() => {
/** ToastRegion — fixed top-end stacking container for Toasts. */
function ToastRegion({
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['fds-toast-region', className].filter(Boolean).join(' '),
    "aria-live": "polite",
    "aria-atomic": "false"
  }, children);
}
Object.assign(__ds_scope, { ToastRegion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ToastRegion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action primitive. Variants map to intent
 * (primary action, secondary, ghost, danger, subtle); loading shows
 * a spinner and disables. Icons via the `icon` / `iconEnd` props.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  block = false,
  icon = null,
  iconEnd = null,
  type = 'button',
  className = '',
  ...rest
}) {
  const cls = ['fds-btn', `fds-btn--${variant}`, size === 'sm' && 'fds-btn--sm', block && 'fds-btn--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "fds-btn__spin",
    "aria-hidden": "true"
  }), !loading && icon, children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — accessible custom checkbox. The native input is visually
 * hidden but fully keyboard/focus accessible; the box renders the
 * checked tick. Pass a `label` or use as a bare control.
 */
function Checkbox({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['fds-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fds-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 6"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
/**
 * FormField — label + required marker + control slot + helper/error
 * text. Wrap any input primitive. Drives the inline validation
 * pattern: pass `error` (string) to show the message and flag the
 * control invalid via context-free styling (add fds-*--invalid on
 * the child yourself, or use Input's `invalid` prop).
 */
function FormField({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  className = ''
}) {
  const cls = ['fds-field', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "fds-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "fds-field__req",
    "aria-hidden": "true"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "fds-field__error",
    role: "alert"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5M12 16h.01"
  })), error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "fds-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a square button containing only an icon. Always pass
 * `label` for screen-reader text. Used in toolbars, map controls,
 * card headers, table row actions.
 */
function IconButton({
  icon,
  label,
  variant = 'default',
  size = 'md',
  active = false,
  disabled = false,
  className = '',
  ...rest
}) {
  const cls = ['fds-iconbtn', variant === 'ghost' && 'fds-iconbtn--ghost', active && 'fds-iconbtn--active', size === 'sm' && 'fds-iconbtn--sm', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-label": label,
    "aria-pressed": active || undefined,
    disabled: disabled,
    title: label
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Supports a leading icon, an invalid
 * state (red border + focus ring), and all native input props. Pair
 * with FormField for labels and validation messages.
 */
function Input({
  icon = null,
  invalid = false,
  className = '',
  ...rest
}) {
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: ['fds-input', invalid && 'fds-input--invalid', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    className: "fds-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-input-wrap__icon"
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : icon), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native select styled to match Input, with a custom caret.
 * Pass options as [{value,label}] or render <option> children.
 */
function Select({
  options = null,
  invalid = false,
  placeholder = null,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ['fds-select', invalid && 'fds-select--invalid', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Switch — on/off toggle for instant-apply settings (layer toggles,
 * theme, feature flags). Use Checkbox for form-submit booleans.
 */
function Switch({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['fds-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "fds-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line input matching the Input system. */
function Textarea({
  invalid = false,
  className = '',
  rows = 3,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    className: ['fds-textarea', invalid && 'fds-textarea--invalid', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — user/entity avatar. Shows an image if `src`, else initials
 * derived from `name` (or explicit `initials`). Square variant for
 * orgs/vehicles.
 */
function Avatar({
  name,
  src,
  initials,
  size = 'md',
  square = false,
  className = '',
  ...rest
}) {
  const text = initials || (name ? name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join('') : '?');
  const cls = ['fds-avatar', size === 'sm' && 'fds-avatar--sm', size === 'lg' && 'fds-avatar--lg', square && 'fds-avatar--square', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || ''
  }) : text);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
/**
 * SegmentedControl — pill toggle for a small set of mutually-exclusive
 * views (e.g. the dashboard Map / Table switch). items support counts.
 */
function SegmentedControl({
  items = [],
  value,
  onChange,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['fds-segment', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": value === it.value,
    className: ['fds-segment__item', value === it.value && 'fds-segment__item--active'].filter(Boolean).join(' '),
    onClick: () => onChange?.(it.value)
  }, it.icon, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "fds-segment__count"
  }, it.count))));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — underline tab bar. Controlled: pass `value` and `onChange`.
 * items: [{ value, label, icon?, count? }].
 */
function Tabs({
  items = [],
  value,
  onChange,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['fds-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": value === it.value,
    className: ['fds-tab', value === it.value && 'fds-tab--active'].filter(Boolean).join(' '),
    onClick: () => onChange?.(it.value)
  }, it.icon, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "fds-badge fds-badge--count fds-badge--neutral"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/ConfirmDialog.jsx
try { (() => {
/**
 * ConfirmDialog — standard destructive/confirm pattern. Icon + title +
 * message + cancel/confirm. `tone="danger"` styles the icon and the
 * confirm button for destructive actions (delete driver, etc.).
 */
function ConfirmDialog({
  open,
  onCancel,
  onConfirm,
  title = 'Are you sure?',
  message,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  tone = 'danger',
  loading = false
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onCancel?.();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onCancel]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fds-modal-scrim",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "fds-modal fds-modal--sm",
    role: "alertdialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "fds-modal__body",
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `fds-modal__confirm-icon fds-modal__confirm-icon--${tone}`
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: tone === 'danger' ? 'alert-triangle' : 'alert-circle',
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "fds-modal__title",
    style: {
      marginBottom: 'var(--space-2)'
    }
  }, title), message && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, message))), /*#__PURE__*/React.createElement("footer", {
    className: "fds-modal__foot"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: onCancel
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: tone === 'danger' ? 'danger' : 'primary',
    loading: loading,
    onClick: onConfirm
  }, confirmLabel))));
}
Object.assign(__ds_scope, { ConfirmDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/ConfirmDialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Drawer.jsx
try { (() => {
/**
 * Drawer — slide-in side panel (inline-end) for create/edit forms and
 * detail views. Renders a scrim + panel; ESC and scrim-click close.
 * Header shows title/subtitle + actions; footer is sticky.
 */
function Drawer({
  open,
  onClose,
  title,
  subtitle,
  headerExtra = null,
  footer = null,
  children,
  width,
  className = ''
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "fds-scrim",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("aside", {
    className: ['fds-drawer', className].filter(Boolean).join(' '),
    style: width ? {
      width
    } : undefined,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title
  }, /*#__PURE__*/React.createElement("header", {
    className: "fds-drawer__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fds-drawer__titles"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "fds-drawer__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "fds-drawer__sub"
  }, subtitle)), headerExtra, /*#__PURE__*/React.createElement("button", {
    className: "fds-iconbtn fds-iconbtn--sm fds-iconbtn--ghost",
    onClick: onClose,
    "aria-label": "Close panel"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fds-drawer__body"
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "fds-drawer__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
/**
 * Modal — centered dialog for focused tasks and forms (e.g. Save
 * Service Area). ESC and scrim-click close. Use ConfirmDialog for
 * yes/no destructive confirms.
 */
function Modal({
  open,
  onClose,
  title,
  size = 'md',
  footer = null,
  children,
  className = ''
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose?.();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fds-modal-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: ['fds-modal', size !== 'md' && `fds-modal--${size}`, className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, title && /*#__PURE__*/React.createElement("header", {
    className: "fds-modal__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fds-modal__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "fds-modal__close",
    onClick: onClose,
    "aria-label": "Close dialog"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fds-modal__body"
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    className: "fds-modal__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/activity-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   ACTIVITY DATA — orders + assignment history + audit log.
   Shared by driver-detail.html and truck-detail.html.

   ────────────────────────────────────────────────────────────────────────────
   DATA MODEL
   table: orders
     id, public_id "ord_xxxxxx", ref, driver_id FK, vehicle_id FK, status enum
       [pending, en-route, delivered, cancelled], pickup, dropoff, amount, created_at
   table: assignment_history    -- who/what was assigned to a record, over time
     id, subject_type enum[driver,vehicle], subject_id, counterpart, from_at, to_at
       (to_at null = current)
   table: audit_log             -- every change to a record (append-only)
     id, entity_type, entity_id, actor, action enum[create,update,status,assign,delete],
       field, old_value, new_value, at(datetime)
   The backend WRITES an audit_log row on EVERY create/update/status/assign/delete.
   The frontend here seeds history and ALSO appends to a localStorage log so edits
   made in the prototype show up live (see AuditStore.append).
   ════════════════════════════════════════════════════════════════════════════ */

/* ── Orders, keyed by driver public_id and vehicle public_id ─────────────── */
var ORDER_STATUS = {
  delivered: {
    t: "success",
    l: "Delivered"
  },
  "en-route": {
    t: "info",
    l: "En-route"
  },
  pending: {
    t: "warning",
    l: "Pending"
  },
  cancelled: {
    t: "danger",
    l: "Cancelled"
  }
};
var ORDERS = [{
  id: "ord_1042a",
  ref: "#SO-10421",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Riyadh Central WH",
  dropoff: "Al Olaya, Riyadh",
  amount: "SAR 84.00",
  at: "2026-06-26 11:42"
}, {
  id: "ord_1042b",
  ref: "#SO-10440",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "en-route",
  pickup: "Riyadh Central WH",
  dropoff: "Al Malqa, Riyadh",
  amount: "SAR 120.00",
  at: "2026-06-26 12:48"
}, {
  id: "ord_1042c",
  ref: "#SO-10388",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Najm Foods DC",
  dropoff: "Al Naseem, Riyadh",
  amount: "SAR 56.50",
  at: "2026-06-25 18:05"
}, {
  id: "ord_1042d",
  ref: "#SO-10362",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "cancelled",
  pickup: "Riyadh Central WH",
  dropoff: "Diplomatic Quarter",
  amount: "SAR 0.00",
  at: "2026-06-25 14:20"
}, {
  id: "ord_1042e",
  ref: "#SO-10301",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Najm Foods DC",
  dropoff: "King Fahd Rd",
  amount: "SAR 92.00",
  at: "2026-06-24 09:15"
}, {
  id: "ord_1042f",
  ref: "#SO-10288",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Riyadh Central WH",
  dropoff: "Al Sahafa, Riyadh",
  amount: "SAR 73.00",
  at: "2026-06-23 16:40"
}, {
  id: "ord_1042g",
  ref: "#SO-10255",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Najm Foods DC",
  dropoff: "Al Yasmin, Riyadh",
  amount: "SAR 61.00",
  at: "2026-06-23 10:02"
}, {
  id: "ord_1043a",
  ref: "#SO-10410",
  driver_id: "drv_d4e5f6",
  vehicle_id: "veh_c4n5t6",
  status: "en-route",
  pickup: "Riyadh Central WH",
  dropoff: "Al Rabwah, Riyadh",
  amount: "SAR 140.00",
  at: "2026-06-26 12:30"
}, {
  id: "ord_1043b",
  ref: "#SO-10350",
  driver_id: "drv_d4e5f6",
  vehicle_id: "veh_c4n5t6",
  status: "delivered",
  pickup: "Najm Foods DC",
  dropoff: "Al Wurud, Riyadh",
  amount: "SAR 110.00",
  at: "2026-06-25 17:10"
}];
function ORDERS_BY_DRIVER(id) {
  return ORDERS.filter(function (o) {
    return o.driver_id === id;
  });
}
function ORDERS_BY_VEHICLE(id) {
  return ORDERS.filter(function (o) {
    return o.vehicle_id === id;
  });
}

/* ── Vehicle assignment history (which driver drove it, and when) ────────── */
var ASSIGN_HISTORY = {
  veh_h1l2x3: [{
    driver: "Layla Hassan",
    from: "2025-02-01",
    to: null
  }, {
    driver: "Yousef Amir",
    from: "2024-06-15",
    to: "2025-01-28"
  }, {
    driver: "Huda Saleh",
    from: "2023-11-02",
    to: "2024-06-10"
  }],
  veh_c4n5t6: [{
    driver: "Omar Khaled",
    from: "2025-03-12",
    to: null
  }, {
    driver: "Tariq Aziz",
    from: "2024-09-01",
    to: "2025-03-01"
  }]
};
function ASSIGN_HISTORY_BY_VEHICLE(id) {
  return ASSIGN_HISTORY[id] || [];
}

/* ── Audit log: seed + localStorage append, merged on read ───────────────── */
var AUDIT_SEED = {
  veh_h1l2x3: [{
    actor: "Dana Owais",
    action: "status",
    field: "status",
    old: "maintenance",
    new: "active",
    at: "2026-06-20 09:12"
  }, {
    actor: "Karim Adel",
    action: "assign",
    field: "driver",
    old: "Yousef Amir",
    new: "Layla Hassan",
    at: "2025-02-01 08:00"
  }, {
    actor: "Dana Owais",
    action: "update",
    field: "insurance_no",
    old: "INS-99120",
    new: "INS-99210",
    at: "2025-01-15 14:33"
  }, {
    actor: "System",
    action: "create",
    field: "",
    old: "",
    new: "Toyota Hilux · RYD 4821",
    at: "2023-11-02 10:00"
  }],
  veh_c4n5t6: [{
    actor: "Karim Adel",
    action: "status",
    field: "status",
    old: "active",
    new: "active",
    at: "2026-06-18 11:00"
  }, {
    actor: "System",
    action: "create",
    field: "",
    old: "",
    new: "Mitsubishi Canter · RYD 1190",
    at: "2024-09-01 09:00"
  }],
  drv_a1b2c3: [{
    actor: "Dana Owais",
    action: "assign",
    field: "vehicle",
    old: "—",
    new: "Hilux · 4821",
    at: "2025-02-01 08:00"
  }, {
    actor: "System",
    action: "create",
    field: "",
    old: "",
    new: "Layla Hassan",
    at: "2023-11-02 10:00"
  }],
  drv_d4e5f6: [{
    actor: "Dana Owais",
    action: "status",
    field: "status",
    old: "offline",
    new: "busy",
    at: "2026-06-26 08:30"
  }, {
    actor: "System",
    action: "create",
    field: "",
    old: "",
    new: "Omar Khaled",
    at: "2024-01-10 10:00"
  }]
};
var ACTION_TONE = {
  create: "primary",
  update: "info",
  status: "warning",
  assign: "info",
  delete: "danger"
};
var AuditStore = {
  KEY: "fleet_audit_log",
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  /* append-only: POST /api/v1/audit (server does this automatically on change) */
  append: function (entityType, id, ev) {
    var all = this.read();
    var k = entityType + ":" + id;
    ev.at = ev.at || new Date().toISOString().slice(0, 16).replace("T", " ");
    (all[k] = all[k] || []).push(ev);
    try {
      localStorage.setItem(this.KEY, JSON.stringify(all));
    } catch (e) {}
  },
  /* GET /api/v1/audit?entity=…&id=…  → newest first (seed + appended) */
  log: function (entityType, id) {
    var seeded = (AUDIT_SEED[id] || []).slice();
    var stored = (this.read()[entityType + ":" + id] || []).slice();
    return seeded.concat(stored).sort(function (a, b) {
      return String(b.at).localeCompare(String(a.at));
    });
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/activity-data.js", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/fleet-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   FLEET demo dataset — shared by fleets.html, fleet-edit.html, fleet-detail.html.
   In the real app this is GET /api/v1/fleets.

   DATA MODEL — Fleet
   table: fleets
     id                 bigint   PK
     public_id          string   unique, "flt_xxxxxx"
     name               string   required                 (اسم الأسطول)
     type               enum     [internal, external] required   (النوع)
     contact_name       string   nullable                 (اسم المسؤول)
     contact_phone      string   nullable                 (هاتف المسؤول)
     control_center_no  string   nullable                 (رقم غرفة التحكم)
     metadata           jsonb    -- custom Forms-module fields (entity_type='fleet')
     created_at         datetime
     updated_at         datetime

   FLEET ↔ USERS (one fleet has MANY users; a fleet-user belongs to ONE fleet)
     -- Modeled on the user side: users.fleet_id (nullable, FK → fleets.id),
     -- set only for users whose type = 'fleet'. So the relationship is 1:many
     -- (fleet → users), and a fleet-type user is assignable to at most one fleet.
     -- The edit form offers fleet-type users that are NOT already assigned
     -- (plus the ones already on THIS fleet when editing).
     -- Endpoint: GET /api/v1/users?type=fleet&unassigned=true
   ════════════════════════════════════════════════════════════════════════════ */

/* type enum → label + tone */
var FLEET_TYPES = [{
  value: "internal",
  label: "Internal"
}, {
  value: "external",
  label: "External"
}];
function FLEET_TYPE_LABEL(v) {
  var m = FLEET_TYPES.filter(function (t) {
    return t.value === v;
  })[0];
  return m ? m.label : v;
}
var FLEET_TYPE_TONE = {
  internal: "info",
  external: "neutral"
};

/* Fleet-type users. fleet_id != null → already assigned (excluded from pickers,
   except the fleet currently being edited). GET /api/v1/users?type=fleet */
var FLEET_USERS = [{
  id: 6001,
  name: "Mona Adel",
  email: "mona.adel@swift.test",
  fleet_id: 81
}, {
  id: 6002,
  name: "Tarek Sami",
  email: "tarek.sami@swift.test",
  fleet_id: 81
}, {
  id: 6003,
  name: "Dina Fouad",
  email: "dina.fouad@swift.test",
  fleet_id: 82
}, {
  id: 6004,
  name: "Hassan Ali",
  email: "hassan.ali@swift.test",
  fleet_id: 83
}, {
  id: 6005,
  name: "Rania Maher",
  email: "rania.maher@swift.test",
  fleet_id: null
}, {
  id: 6006,
  name: "Sami Nabil",
  email: "sami.nabil@swift.test",
  fleet_id: null
}, {
  id: 6007,
  name: "Lina Tarek",
  email: "lina.tarek@swift.test",
  fleet_id: null
}, {
  id: 6008,
  name: "Karim Adel",
  email: "karim.adel@swift.test",
  fleet_id: null
}];
function FLEET_USERS_BY_IDS(ids) {
  return FLEET_USERS.filter(function (u) {
    return (ids || []).indexOf(u.id) >= 0;
  });
}
/* available for assignment to fleet `fleetId` = unassigned + those already on it */
function FLEET_USERS_AVAILABLE(fleetId) {
  return FLEET_USERS.filter(function (u) {
    return u.fleet_id == null || u.fleet_id === fleetId;
  });
}
var FLEETS = [{
  id: "flt_ryd001",
  name: "Riyadh Fleet",
  type: "internal",
  contact_name: "Mona Adel",
  contact_phone: "+966 50 660 1180",
  control_center_no: "+966 11 200 7788",
  user_ids: [6001, 6002]
}, {
  id: "flt_jed002",
  name: "Jeddah Fleet",
  type: "internal",
  contact_name: "Dina Fouad",
  contact_phone: "+966 55 771 9920",
  control_center_no: "+966 12 300 4455",
  user_ids: [6003]
}, {
  id: "flt_dmm003",
  name: "Dammam Fleet",
  type: "internal",
  contact_name: "Hassan Ali",
  contact_phone: "+966 53 884 2031",
  control_center_no: "+966 13 400 1122",
  user_ids: [6004]
}, {
  id: "flt_exp004",
  name: "Express Couriers",
  type: "external",
  contact_name: "Omar Z.",
  contact_phone: "+966 56 110 3345",
  control_center_no: "+966 11 990 6677",
  user_ids: []
}];
function FLEET_BY_ID(id) {
  return FLEETS.filter(function (f) {
    return f.id === id;
  })[0];
}

/* fleet id (numeric 81..) used by users.fleet_id ↔ public_id map, for the demo. */
var FLEET_NUMID = {
  flt_ryd001: 81,
  flt_jed002: 82,
  flt_dmm003: 83,
  flt_exp004: 84
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/fleet-data.js", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/forms-store.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   FORMS MODULE — shared store + data contract.   (v2 — multi-tenant)

   Shared by:
     • forms.html         (builder — defines custom fields per entity)
     • driver-edit.html   (consumer — renders custom fields, writes metadata)
     • driver-detail.html (consumer — reads metadata, shows custom values)

   Persistence here is localStorage so the prototype loop works end-to-end.
   Replace each method body with the matching API call.

   ════════════════════════════════════════════════════════════════════════════
   ⚠ MULTI-TENANCY — READ THIS BEFORE BUILDING THE BACKEND
   ════════════════════════════════════════════════════════════════════════════
   Every form definition and every custom field belongs to ONE organization
   (tenant / company). A field's `stored_key` is UNIQUE PER ORGANIZATION — two
   different companies can both define a field keyed "residence_no" without
   clashing, but within a single company a key may exist only once for a given
   entity form. The key is GENERATED FROM THE ENGLISH label (ASCII slug); the
   Arabic label is display-only and never used for the key.

   ────────────────────────────────────────────────────────────────────────────
   DATABASE SCHEMA (target)
   ────────────────────────────────────────────────────────────────────────────
   TABLE organizations
     id              bigint   PK
     name            string

   TABLE form_definitions                        -- one row per (org, entity)
     id              bigint   PK
     org_id          bigint   FK → organizations.id      ← TENANT SCOPE
     entity_type     enum     [driver,truck,fleet,user,place,vendor,service_area]
     name            string
     created_at      datetime
     updated_at      datetime
     UNIQUE (org_id, entity_type)                -- one form per entity per org

   TABLE form_fields                             -- the custom fields admins add
     id              bigint   PK
     form_id         bigint   FK → form_definitions.id  (ON DELETE CASCADE)
     stored_key      string   slug, GENERATED FROM label_en (ASCII, snake_case)
     label_en        string   required  (English — drives stored_key)
     label_ar        string   required  (Arabic  — display only)
     type            enum     [text, checkbox, attach]
     is_mandatory    boolean  default false
     show_in_edit    boolean  default true     -- render on create/edit
     show_in_detail  boolean  default true     -- render on the detail page
     min_len         int      nullable   -- type=text only
     max_len         int      nullable   -- type=text only
     accept_types    json     nullable   -- type=attach only: array of MIME keys
                                            (see MEDIA_TYPES). [] / null = any.
     sort_order      int      default 0
     created_at      datetime
     -- TENANT-SCOPED UNIQUENESS. Because form_id already implies one org+entity,
     -- this constraint guarantees the key is unique within the company:
     UNIQUE (form_id, stored_key)

   METADATA STORAGE (on the owning entity)
     drivers.metadata   jsonb   -- { "<stored_key>": <value>, ... }
     trucks.metadata    jsonb
     …every entity that can carry a custom form gets a `metadata` jsonb column,
     scoped naturally by the row's own org_id. On create/update: read the org's
     form_fields for the entity, collect + validate each value, persist the map
     into <entity>.metadata. On detail/edit: read form_fields + metadata.
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── Current organization (tenant). In the app this comes from the session /
        the org switcher; here it's a stored id so the prototype is scoped too. ── */
  function currentOrg() {
    try {
      return localStorage.getItem("fleet_org_id") || "org_swift";
    } catch (e) {
      return "org_swift";
    }
  }
  function setOrg(id) {
    try {
      localStorage.setItem("fleet_org_id", id);
    } catch (e) {}
  }

  /* The entity types a form can be built for. value = entity_type enum. */
  var ENTITIES = [{
    key: "driver",
    label: "Driver",
    icon: "user",
    table: "drivers"
  }, {
    key: "truck",
    label: "Truck",
    icon: "truck",
    table: "trucks"
  }, {
    key: "fleet",
    label: "Fleet",
    icon: "grid",
    table: "fleets"
  }, {
    key: "user",
    label: "User",
    icon: "users",
    table: "users"
  }, {
    key: "place",
    label: "Place",
    icon: "map-pin",
    table: "places"
  }, {
    key: "vendor",
    label: "Vendor",
    icon: "package",
    table: "vendors"
  }, {
    key: "service_area",
    label: "Service Area",
    icon: "map",
    table: "service_areas"
  }];

  /* Built-in (native) columns per entity — already part of the core schema. */
  var BUILTINS = {
    driver: [{
      key: "name",
      label: "Full name",
      type: "text",
      required: true
    }, {
      key: "internal_code",
      label: "Internal ID",
      type: "text",
      required: true,
      note: "auto"
    }, {
      key: "phone",
      label: "Phone",
      type: "text",
      required: true
    }, {
      key: "license_no",
      label: "License number",
      type: "text",
      required: true
    }, {
      key: "license_expiry",
      label: "License expiry",
      type: "date",
      required: true
    }, {
      key: "vendor_id",
      label: "Vendor",
      type: "fk",
      required: false
    }, {
      key: "fleet_id",
      label: "Fleet",
      type: "fk",
      required: false
    }, {
      key: "vehicle_id",
      label: "Vehicle",
      type: "fk",
      required: false
    }, {
      key: "country_id",
      label: "Country",
      type: "fk",
      required: true
    }, {
      key: "city_id",
      label: "City",
      type: "fk",
      required: true
    }, {
      key: "status",
      label: "Status",
      type: "enum",
      required: true
    }, {
      key: "service_area_id",
      label: "Service area",
      type: "fk",
      required: false
    }, {
      key: "user_id",
      label: "Linked user",
      type: "fk",
      required: false
    }],
    truck: [{
      key: "plate",
      label: "Plate",
      type: "text",
      required: true
    }, {
      key: "make_model",
      label: "Make / Model",
      type: "text",
      required: true
    }, {
      key: "type",
      label: "Type",
      type: "enum",
      required: true
    }, {
      key: "year",
      label: "Year",
      type: "int",
      required: false
    }, {
      key: "capacity_kg",
      label: "Capacity (kg)",
      type: "int",
      required: false
    }, {
      key: "color",
      label: "Color",
      type: "text",
      required: false
    }, {
      key: "reg_expiry",
      label: "Registration expiry",
      type: "date",
      required: false
    }, {
      key: "insurance_no",
      label: "Insurance no.",
      type: "text",
      required: false
    }, {
      key: "status",
      label: "Status",
      type: "enum",
      required: true
    }, {
      key: "fleet_id",
      label: "Fleet",
      type: "fk",
      required: false
    }, {
      key: "vendor_id",
      label: "Vendor",
      type: "fk",
      required: false
    }, {
      key: "driver_id",
      label: "Assigned driver",
      type: "fk",
      required: false
    }],
    fleet: [{
      key: "name",
      label: "Fleet name",
      type: "text",
      required: true
    }, {
      key: "type",
      label: "Type",
      type: "enum",
      required: true
    }, {
      key: "contact_name",
      label: "Contact name",
      type: "text",
      required: false
    }, {
      key: "contact_phone",
      label: "Contact phone",
      type: "text",
      required: false
    }, {
      key: "control_center_no",
      label: "Control center number",
      type: "text",
      required: false
    }, {
      key: "user_ids",
      label: "Fleet users",
      type: "fk_many",
      required: false
    }],
    user: [{
      key: "full_name",
      label: "Full name",
      type: "text",
      required: true
    }, {
      key: "email",
      label: "Email",
      type: "text",
      required: true
    }, {
      key: "type",
      label: "Type",
      type: "enum",
      required: true
    }, {
      key: "phone",
      label: "Phone",
      type: "text",
      required: false
    }],
    place: [{
      key: "name",
      label: "Name",
      type: "text",
      required: true
    }, {
      key: "lat",
      label: "Latitude",
      type: "float",
      required: true
    }, {
      key: "lng",
      label: "Longitude",
      type: "float",
      required: true
    }, {
      key: "city_id",
      label: "City",
      type: "fk",
      required: false
    }],
    vendor: [{
      key: "name",
      label: "Name",
      type: "text",
      required: true
    }, {
      key: "contact_name",
      label: "Contact",
      type: "text",
      required: false
    }, {
      key: "phone",
      label: "Phone",
      type: "text",
      required: false
    }],
    service_area: [{
      key: "name",
      label: "Name",
      type: "text",
      required: true
    }, {
      key: "city_id",
      label: "City",
      type: "fk",
      required: false
    }, {
      key: "is_active",
      label: "Active",
      type: "boolean",
      required: false
    }]
  };

  /* The custom field types an admin can add. */
  var FIELD_TYPES = [{
    key: "text",
    label: "Text",
    icon: "edit",
    hasMinMax: true,
    hasAccept: false
  }, {
    key: "checkbox",
    label: "Checkbox",
    icon: "check",
    hasMinMax: false,
    hasAccept: false
  }, {
    key: "attach",
    label: "Attachment",
    icon: "upload",
    hasMinMax: false,
    hasAccept: true
  }];

  /* ── Media types for the Attachment "Allowed file types" dropdown ──────────
     value (key) = MIME type stored in form_fields.accept_types[].
     ext = extensions mapped onto the <input accept="…"> attribute at render. */
  var MEDIA_TYPES = [{
    group: "Images",
    items: [{
      key: "image/jpeg",
      label: "JPEG image",
      ext: ".jpg,.jpeg"
    }, {
      key: "image/png",
      label: "PNG image",
      ext: ".png"
    }, {
      key: "image/gif",
      label: "GIF image",
      ext: ".gif"
    }, {
      key: "image/webp",
      label: "WebP image",
      ext: ".webp"
    }, {
      key: "image/svg+xml",
      label: "SVG image",
      ext: ".svg"
    }, {
      key: "image/heic",
      label: "HEIC image",
      ext: ".heic"
    }]
  }, {
    group: "Documents",
    items: [{
      key: "application/pdf",
      label: "PDF",
      ext: ".pdf"
    }, {
      key: "application/msword",
      label: "Word (.doc)",
      ext: ".doc"
    }, {
      key: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      label: "Word (.docx)",
      ext: ".docx"
    }, {
      key: "application/vnd.ms-excel",
      label: "Excel (.xls)",
      ext: ".xls"
    }, {
      key: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      label: "Excel (.xlsx)",
      ext: ".xlsx"
    }, {
      key: "application/vnd.ms-powerpoint",
      label: "PowerPoint (.ppt)",
      ext: ".ppt"
    }, {
      key: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      label: "PowerPoint (.pptx)",
      ext: ".pptx"
    }, {
      key: "text/plain",
      label: "Text (.txt)",
      ext: ".txt"
    }, {
      key: "text/csv",
      label: "CSV",
      ext: ".csv"
    }]
  }, {
    group: "Video",
    items: [{
      key: "video/mp4",
      label: "MP4 video",
      ext: ".mp4"
    }, {
      key: "video/quicktime",
      label: "QuickTime (.mov)",
      ext: ".mov"
    }, {
      key: "video/webm",
      label: "WebM video",
      ext: ".webm"
    }, {
      key: "video/x-msvideo",
      label: "AVI video",
      ext: ".avi"
    }]
  }, {
    group: "Audio",
    items: [{
      key: "audio/mpeg",
      label: "MP3 audio",
      ext: ".mp3"
    }, {
      key: "audio/wav",
      label: "WAV audio",
      ext: ".wav"
    }, {
      key: "audio/ogg",
      label: "OGG audio",
      ext: ".ogg"
    }]
  }, {
    group: "Archives",
    items: [{
      key: "application/zip",
      label: "ZIP archive",
      ext: ".zip"
    }, {
      key: "application/x-rar-compressed",
      label: "RAR archive",
      ext: ".rar"
    }, {
      key: "application/x-7z-compressed",
      label: "7z archive",
      ext: ".7z"
    }]
  }];
  var MEDIA_FLAT = MEDIA_TYPES.reduce(function (a, g) {
    return a.concat(g.items);
  }, []);
  function mediaByKey(k) {
    return MEDIA_FLAT.filter(function (m) {
      return m.key === k;
    })[0];
  }
  function acceptAttr(keys) {
    if (!keys || !keys.length) return "";
    return keys.map(function (k) {
      var m = mediaByKey(k);
      return m ? m.ext : "";
    }).filter(Boolean).join(",");
  }
  function mediaLabel(k) {
    var m = mediaByKey(k);
    return m ? m.label : k;
  }
  var LS_FIELDS = "fleet_forms_fields_v2"; // { org_id: { entity_type: [field,...] } }
  var LS_META = "fleet_entity_meta"; // { entity_type: { record_id: {key:val} } }

  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch (e) {
      return {};
    }
  }
  function write(key, v) {
    try {
      localStorage.setItem(key, JSON.stringify(v));
    } catch (e) {}
  }

  /* ASCII slug from the ENGLISH label → stored_key (snake_case). */
  function slug(s) {
    return (s || "").toString().trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "field_" + Date.now();
  }
  function orgFields(orgId) {
    var all = read(LS_FIELDS);
    return all[orgId] || {};
  }
  var FormsStore = {
    entities: ENTITIES,
    fieldTypes: FIELD_TYPES,
    mediaTypes: MEDIA_TYPES,
    currentOrg: currentOrg,
    setOrg: setOrg,
    entityMeta: function (key) {
      return ENTITIES.filter(function (e) {
        return e.key === key;
      })[0];
    },
    builtins: function (entityType) {
      return (BUILTINS[entityType] || []).slice();
    },
    typeMeta: function (t) {
      return FIELD_TYPES.filter(function (x) {
        return x.key === t;
      })[0];
    },
    acceptAttr: acceptAttr,
    mediaLabel: mediaLabel,
    slug: slug,
    /* GET /api/v1/forms/{entity_type}/fields   (scoped to the caller's org) */
    customFields: function (entityType, orgId) {
      orgId = orgId || currentOrg();
      var byEntity = orgFields(orgId);
      return (byEntity[entityType] || []).slice().sort(function (a, b) {
        return (a.sort_order || 0) - (b.sort_order || 0);
      });
    },
    /* Is a stored_key already used in this org+entity (excluding `exceptId`)? */
    isKeyTaken: function (entityType, key, exceptId, orgId) {
      return this.customFields(entityType, orgId).some(function (f) {
        return f.stored_key === key && f.id !== exceptId;
      });
    },
    /* Generate a unique ASCII key from the English label within this org+entity. */
    uniqueKey: function (entityType, labelEn, exceptId, orgId) {
      var base = slug(labelEn),
        k = base,
        i = 2;
      while (this.isKeyTaken(entityType, k, exceptId, orgId)) {
        k = base + "_" + i;
        i++;
      }
      return k;
    },
    /* POST/PATCH /api/v1/forms/{entity_type}/fields */
    saveField: function (entityType, field, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_FIELDS);
      all[orgId] = all[orgId] || {};
      var list = all[orgId][entityType] || [];
      if (field.id) {
        list = list.map(function (f) {
          return f.id === field.id ? field : f;
        });
      } else {
        field.id = "fld_" + Date.now();
        field.sort_order = list.length;
        list.push(field);
      }
      all[orgId][entityType] = list;
      write(LS_FIELDS, all);
      return field;
    },
    /* DELETE /api/v1/forms/{entity_type}/fields/{id} */
    deleteField: function (entityType, id, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_FIELDS);
      if (all[orgId]) all[orgId][entityType] = (all[orgId][entityType] || []).filter(function (f) {
        return f.id !== id;
      });
      write(LS_FIELDS, all);
    },
    /* metadata on a specific record — <entity>.metadata jsonb */
    getMeta: function (entityType, recordId) {
      var all = read(LS_META);
      return all[entityType] && all[entityType][recordId] || {};
    },
    saveMeta: function (entityType, recordId, values) {
      var all = read(LS_META);
      all[entityType] = all[entityType] || {};
      all[entityType][recordId] = values;
      write(LS_META, all);
    }
  };
  window.FormsStore = FormsStore;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/forms-store.js", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/i18n-store.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   LOCALIZATION MODULE — base catalog + languages store + validation engine.

   Shared by languages.html (the admin module). Persistence is localStorage so
   the prototype works; swap each method for the matching API call.

   ════════════════════════════════════════════════════════════════════════════
   HOW LANGUAGES WORK (read before building the backend)
   ════════════════════════════════════════════════════════════════════════════
   • BASE languages = English (en) + Arabic (ar). They ship INSIDE the frontend
     bundle (e.g. /src/locales/en.json, ar.json). They are NEVER stored in the
     DB and are always available offline. `en` is the SOURCE OF TRUTH — its key
     set defines what every other language must provide.

   • CUSTOM languages are added PER ORGANIZATION (tenant). An org admin adds a
     language, downloads the base file as a starting point, translates it, and
     uploads it back. The backend validates the upload (see VALIDATION) and
     stores the translations. A custom language only reaches end users once it
     is PUBLISHED (status = 'active').

   • FRONTEND LOADING: on app start the frontend loads the active locales for the
     current org over GET /api/v1/orgs/{org}/locales?active=1 and caches them in
     localStorage with a TTL (default 24h, configurable up to ~48h). Within TTL
     it reads from cache; past TTL it refetches. Base en/ar are bundled, so the
     app is always usable even if the network/locale fetch fails.

   ────────────────────────────────────────────────────────────────────────────
   DATABASE SCHEMA (target)
   ────────────────────────────────────────────────────────────────────────────
   TABLE org_languages                          -- custom languages per tenant
     id              bigint   PK
     org_id          bigint   FK → organizations.id      ← TENANT SCOPE
     code            string   BCP-47 (e.g. "fr", "ur", "tr")   (lowercase)
     name            string   English name  (e.g. "French")
     native_name     string   endonym       (e.g. "Français")
     direction       enum     [ltr, rtl]
     status          enum     [draft, active]  default draft   -- active = published
     completeness    int      0..100  (cached % of base keys translated)
     created_at      datetime
     updated_at      datetime
     UNIQUE (org_id, code)                       -- one entry per language per org
     -- NOTE: code ∈ {en, ar} is reserved (base) and never inserted here.

   TABLE translation_entries                     -- the actual strings
     id              bigint   PK
     language_id     bigint   FK → org_languages.id  (ON DELETE CASCADE)
     key             string   dotted path, matches a base key (e.g. "drivers.title")
     value           text     translated string
     UNIQUE (language_id, key)
     -- Stored flattened; the upload/download file is NESTED JSON by namespace.

   CACHE (frontend localStorage)
     key:  i18n.<org_id>.<code>           value: { v:<hash>, exp:<ts>, data:{…} }
     The app checks exp; if now > exp it refetches and rewrites with a new exp.
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function currentOrg() {
    try {
      return localStorage.getItem("fleet_org_id") || "org_swift";
    } catch (e) {
      return "org_swift";
    }
  }

  /* ── BASE CATALOG (en = source of truth, ar = base translation) ────────────
     NESTED by namespace. In the real app these are bundled JSON files. The key
     set of `en` is what every uploaded language is validated against. */
  var BASE = {
    en: {
      common: {
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
        edit: "Edit",
        create: "Create",
        search: "Search",
        export: "Export",
        import: "Import",
        loading: "Loading…",
        yes: "Yes",
        no: "No"
      },
      nav: {
        dashboard: "Dashboard",
        drivers: "Drivers",
        vehicles: "Vehicles",
        fleets: "Fleets",
        vendors: "Vendors",
        forms: "Forms",
        languages: "Languages",
        settings: "Settings"
      },
      drivers: {
        title: "Drivers",
        subtitle: "Manage the people delivering your orders.",
        newDriver: "New Driver",
        deleteConfirm: "This removes {name} and unassigns their vehicle."
      },
      vehicles: {
        title: "Vehicles",
        subtitle: "Trucks, vans and bikes across your fleets.",
        newVehicle: "New Vehicle",
        assignedDriver: "Assigned driver"
      },
      status: {
        online: "Online",
        busy: "Busy",
        offline: "Offline",
        pending: "Pending",
        active: "Active",
        maintenance: "In maintenance",
        inactive: "Inactive"
      },
      validation: {
        required: "{field} is required.",
        min: "Must be at least {min} characters.",
        max: "Must be at most {max} characters.",
        invalidPhone: "Enter a valid phone number."
      }
    },
    ar: {
      common: {
        save: "حفظ",
        cancel: "إلغاء",
        delete: "حذف",
        edit: "تعديل",
        create: "إنشاء",
        search: "بحث",
        export: "تصدير",
        import: "استيراد",
        loading: "جارٍ التحميل…",
        yes: "نعم",
        no: "لا"
      },
      nav: {
        dashboard: "لوحة التحكم",
        drivers: "السائقون",
        vehicles: "المركبات",
        fleets: "الأساطيل",
        vendors: "المورّدون",
        forms: "النماذج",
        languages: "اللغات",
        settings: "الإعدادات"
      },
      drivers: {
        title: "السائقون",
        subtitle: "إدارة الأشخاص الذين يوصّلون طلباتك.",
        newDriver: "سائق جديد",
        deleteConfirm: "سيؤدي هذا إلى إزالة {name} وإلغاء تعيين مركبته."
      },
      vehicles: {
        title: "المركبات",
        subtitle: "الشاحنات والفانات والدراجات في أساطيلك.",
        newVehicle: "مركبة جديدة",
        assignedDriver: "السائق المعيّن"
      },
      status: {
        online: "متصل",
        busy: "مشغول",
        offline: "غير متصل",
        pending: "قيد الانتظار",
        active: "نشط",
        maintenance: "في الصيانة",
        inactive: "غير نشط"
      },
      validation: {
        required: "{field} مطلوب.",
        min: "يجب ألا يقل عن {min} حرفًا.",
        max: "يجب ألا يزيد عن {max} حرفًا.",
        invalidPhone: "أدخل رقم هاتف صحيح."
      }
    }
  };

  /* The base/built-in languages — always present, not in the DB. */
  var BASE_LANGS = [{
    code: "en",
    name: "English",
    native_name: "English",
    direction: "ltr",
    base: true
  }, {
    code: "ar",
    name: "Arabic",
    native_name: "العربية",
    direction: "rtl",
    base: true
  }];

  /* ── Key helpers (flatten / unflatten nested namespaced JSON) ─────────────── */
  function flatten(obj, prefix, out) {
    out = out || {};
    prefix = prefix || "";
    for (var k in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      var key = prefix ? prefix + "." + k : k;
      if (obj[k] && typeof obj[k] === "object" && !Array.isArray(obj[k])) flatten(obj[k], key, out);else out[key] = obj[k];
    }
    return out;
  }
  function unflatten(flat) {
    var out = {};
    for (var key in flat) {
      var parts = key.split("."),
        node = out;
      for (var i = 0; i < parts.length - 1; i++) {
        node[parts[i]] = node[parts[i]] || {};
        node = node[parts[i]];
      }
      node[parts[parts.length - 1]] = flat[key];
    }
    return out;
  }
  var BASE_FLAT = flatten(BASE.en);
  var BASE_KEYS = Object.keys(BASE_FLAT);

  /* placeholders like {name} {min} inside a string */
  function placeholders(s) {
    var m = String(s == null ? "" : s).match(/\{[a-z0-9_]+\}/gi) || [];
    return m.sort();
  }

  /* ── Validation engine ─────────────────────────────────────────────────────
     Runs every requested check against the base (en) key set. Returns a report
     the UI renders: per-rule pass/fail + lists of offending keys + completeness. */
  function validate(parsed) {
    var report = {
      ok: true,
      rules: {},
      missing: [],
      extra: [],
      empty: [],
      placeholderMismatch: [],
      completeness: 0,
      translatedCount: 0,
      totalKeys: BASE_KEYS.length
    };

    // rule: valid JSON structure (object)
    var structureOk = parsed && typeof parsed === "object" && !Array.isArray(parsed);
    report.rules.json = structureOk;
    if (!structureOk) {
      report.ok = false;
      return report;
    }
    var flat = flatten(parsed);
    var keys = Object.keys(flat);

    // missing base keys
    report.missing = BASE_KEYS.filter(function (k) {
      return !(k in flat);
    });
    // extra keys not in base
    report.extra = keys.filter(function (k) {
      return BASE_KEYS.indexOf(k) < 0;
    });
    // empty values (only for keys that exist & are base keys)
    report.empty = BASE_KEYS.filter(function (k) {
      return k in flat && String(flat[k]).trim() === "";
    });
    // placeholder mismatch vs base
    report.placeholderMismatch = BASE_KEYS.filter(function (k) {
      if (!(k in flat)) return false;
      var a = placeholders(BASE_FLAT[k]).join(","),
        b = placeholders(flat[k]).join(",");
      return a !== b;
    });
    report.translatedCount = BASE_KEYS.filter(function (k) {
      return k in flat && String(flat[k]).trim() !== "";
    }).length;
    report.completeness = Math.round(report.translatedCount / BASE_KEYS.length * 100);
    report.rules.allKeysPresent = report.missing.length === 0;
    report.rules.noExtraKeys = report.extra.length === 0;
    report.rules.noEmptyValues = report.empty.length === 0;
    report.rules.placeholdersMatch = report.placeholderMismatch.length === 0;

    // Per the product rule: an upload is accepted even if incomplete (we surface
    // the %), but the hard failures are invalid JSON, extra keys, empty values,
    // and placeholder mismatches. Missing keys → not "complete" but still saveable.
    report.ok = report.rules.json && report.rules.noExtraKeys && report.rules.noEmptyValues && report.rules.placeholdersMatch;
    report.complete = report.rules.allKeysPresent && report.ok;
    return report;
  }
  var LS_LANGS = "fleet_org_languages"; // { org_id: [lang,...] }  (lang incl. translations:{flatKey:val})
  var LS_TTL = "fleet_i18n_ttl_hours"; // cache TTL in hours

  function read(k) {
    try {
      return JSON.parse(localStorage.getItem(k)) || {};
    } catch (e) {
      return {};
    }
  }
  function write(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  }
  var I18nStore = {
    base: BASE,
    baseLangs: BASE_LANGS,
    baseKeys: BASE_KEYS,
    baseFlat: BASE_FLAT,
    baseTree: function () {
      return BASE.en;
    },
    flatten: flatten,
    unflatten: unflatten,
    validate: validate,
    currentOrg: currentOrg,
    ttlHours: function () {
      try {
        return parseInt(localStorage.getItem(LS_TTL), 10) || 24;
      } catch (e) {
        return 24;
      }
    },
    setTtlHours: function (h) {
      try {
        localStorage.setItem(LS_TTL, String(h));
      } catch (e) {}
    },
    /* GET /api/v1/orgs/{org}/languages */
    languages: function (orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      return (all[orgId] || []).slice();
    },
    getLanguage: function (code, orgId) {
      return this.languages(orgId).filter(function (l) {
        return l.code === code;
      })[0];
    },
    /* POST /api/v1/orgs/{org}/languages  (add a new custom language, draft) */
    addLanguage: function (lang, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      var list = all[orgId] || [];
      if (list.some(function (l) {
        return l.code === lang.code;
      })) return {
        error: "exists"
      };
      if (BASE_LANGS.some(function (l) {
        return l.code === lang.code;
      })) return {
        error: "reserved"
      };
      lang.status = "draft";
      lang.completeness = 0;
      lang.translations = lang.translations || {};
      list.push(lang);
      all[orgId] = list;
      write(LS_LANGS, all);
      return lang;
    },
    /* PATCH …/languages/{code}  — save uploaded translations + completeness */
    saveTranslations: function (code, flatTranslations, completeness, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      (all[orgId] || []).forEach(function (l) {
        if (l.code === code) {
          l.translations = flatTranslations;
          l.completeness = completeness;
        }
      });
      write(LS_LANGS, all);
    },
    /* PATCH …/languages/{code} {status} — publish / unpublish */
    setStatus: function (code, status, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      (all[orgId] || []).forEach(function (l) {
        if (l.code === code) l.status = status;
      });
      write(LS_LANGS, all);
    },
    /* DELETE …/languages/{code} */
    removeLanguage: function (code, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      all[orgId] = (all[orgId] || []).filter(function (l) {
        return l.code !== code;
      });
      write(LS_LANGS, all);
    },
    /* Build the downloadable file for a language: base English tree with any
       existing translations merged in (so the translator edits in place). */
    downloadTree: function (code, orgId) {
      var lang = this.getLanguage(code, orgId);
      var merged = {};
      BASE_KEYS.forEach(function (k) {
        merged[k] = lang && lang.translations && lang.translations[k] != null && lang.translations[k] !== "" ? lang.translations[k] : BASE_FLAT[k];
      });
      return unflatten(merged);
    }
  };
  window.I18nStore = I18nStore;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/i18n-store.js", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/import-export.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   IMPORT / EXPORT — Excel-based, shared by Drivers, Vehicles, Fleets.

   FLOW
   • Sample : downloads a real .xlsx the user fills in — a "Data" sheet with the
              header row + 2 example rows, and an "Instructions" sheet describing
              every column (type, required, allowed enum values, link targets).
   • Export : downloads the current rows as .xlsx in that same column shape.
   • Import : user uploads .xlsx (or .csv). The FRONTEND parses it (SheetJS),
              runs validation, and converts the valid rows to JSON to send to the
              backend. For large files (e.g. 1000+ drivers) it does NOT send a
              giant JSON blob in memory as one request — it builds NDJSON
              (one JSON object per line) and uploads it as a STREAMED file
              (chunked). See `buildNDJSON` + `streamUpload` below.

   RELATIONSHIPS (how a row references another entity)
   • Each link uses the OTHER entity's stable, unique BUSINESS KEY — not its DB id
     (the importer can't know internal ids):
       - Driver → Vehicle : column `vehicle_plate`  (matches vehicles.plate, 1:1)
       - Vehicle → Driver : column `driver_phone`   (matches drivers.phone,  1:1)
       - Fleet  → Users   : column `user_emails`    (matches users.email, many;
                            multiple emails separated by ";" in one Excel cell)
     The backend resolves the key → id, enforces the 1:1 / fleet-membership
     rules, and re-points the link (assigning a vehicle to a driver unassigns it
     from any previous driver, etc.). Both directions are supported so the admin
     can drive the link from whichever sheet they're importing.

   COLUMN SPEC = the bulk-import contract. type ∈
     string | int | phone | date(YYYY-MM-DD) | enum | email[] | link
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var XLSX_URL = "https://unpkg.com/xlsx@0.18.5/dist/xlsx.full.min.js";
  var SPECS = {
    driver: {
      label: "Drivers",
      file: "drivers",
      columns: [{
        key: "name",
        type: "string",
        required: true
      }, {
        key: "phone",
        type: "phone",
        required: true,
        note: "unique — also the key other sheets link to"
      }, {
        key: "vendor",
        type: "string",
        required: false
      }, {
        key: "fleet",
        type: "string",
        required: false
      }, {
        key: "country",
        type: "string",
        required: false
      }, {
        key: "city",
        type: "string",
        required: false
      }, {
        key: "status",
        type: "enum",
        required: false,
        enum: ["online", "busy", "en-route", "offline", "pending"]
      }, {
        key: "vehicle_plate",
        type: "link",
        required: false,
        link: "→ vehicles.plate (assign this vehicle, 1:1)"
      }],
      sample: [{
        name: "Layla Hassan",
        phone: "+966 50 112 4471",
        vendor: "Najm Foods",
        fleet: "Riyadh Fleet",
        country: "Saudi Arabia",
        city: "Riyadh",
        status: "online",
        vehicle_plate: "RYD 4821"
      }, {
        name: "Omar Khaled",
        phone: "+966 55 904 2210",
        vendor: "Najm Foods",
        fleet: "Riyadh Fleet",
        country: "Saudi Arabia",
        city: "Riyadh",
        status: "busy",
        vehicle_plate: "RYD 1190"
      }]
    },
    truck: {
      label: "Vehicles",
      file: "vehicles",
      columns: [{
        key: "plate",
        type: "string",
        required: true,
        note: "unique — also the key other sheets link to"
      }, {
        key: "make_model",
        type: "string",
        required: true
      }, {
        key: "type",
        type: "enum",
        required: true,
        enum: ["sedan", "pickup", "van", "truck", "bike"]
      }, {
        key: "year",
        type: "int",
        required: false
      }, {
        key: "capacity_kg",
        type: "int",
        required: false
      }, {
        key: "color",
        type: "string",
        required: false
      }, {
        key: "reg_expiry",
        type: "date",
        required: false,
        note: "YYYY-MM-DD (cell as text)"
      }, {
        key: "insurance_no",
        type: "string",
        required: false
      }, {
        key: "status",
        type: "enum",
        required: false,
        enum: ["active", "maintenance", "inactive"]
      }, {
        key: "fleet",
        type: "string",
        required: false
      }, {
        key: "vendor",
        type: "string",
        required: false
      }, {
        key: "driver_phone",
        type: "link",
        required: false,
        link: "→ drivers.phone (assign this driver, 1:1)"
      }],
      sample: [{
        plate: "RYD 4821",
        make_model: "Toyota Hilux",
        type: "pickup",
        year: 2022,
        capacity_kg: 1000,
        color: "White",
        reg_expiry: "2026-08-14",
        insurance_no: "INS-99210",
        status: "active",
        fleet: "Riyadh Fleet",
        vendor: "Najm Foods",
        driver_phone: "+966 50 112 4471"
      }, {
        plate: "RYD 7711",
        make_model: "Honda CB125",
        type: "bike",
        year: 2024,
        capacity_kg: 60,
        color: "Red",
        reg_expiry: "2027-09-02",
        insurance_no: "INS-99221",
        status: "maintenance",
        fleet: "Express Couriers",
        vendor: "FreshLine",
        driver_phone: ""
      }]
    },
    fleet: {
      label: "Fleets",
      file: "fleets",
      columns: [{
        key: "name",
        type: "string",
        required: true
      }, {
        key: "type",
        type: "enum",
        required: true,
        enum: ["internal", "external"]
      }, {
        key: "contact_name",
        type: "string",
        required: false
      }, {
        key: "contact_phone",
        type: "phone",
        required: false
      }, {
        key: "control_center_no",
        type: "phone",
        required: false
      }, {
        key: "user_emails",
        type: "email[]",
        required: false,
        link: "→ users.email (type=fleet); separate multiple with ;"
      }],
      sample: [{
        name: "Riyadh Fleet",
        type: "internal",
        contact_name: "Mona Adel",
        contact_phone: "+966 50 660 1180",
        control_center_no: "+966 11 200 7788",
        user_emails: "mona.adel@swift.test; tarek.sami@swift.test"
      }, {
        name: "Express Couriers",
        type: "external",
        contact_name: "Omar Z.",
        contact_phone: "+966 56 110 3345",
        control_center_no: "+966 11 990 6677",
        user_emails: ""
      }]
    }
  };
  function spec(entity) {
    return SPECS[entity];
  }

  /* ── Custom fields (Forms module) merged in as extra columns ─────────────
     The admin-defined fields for this entity (entity_type) become importable /
     exportable columns too — mandatory ones are required, optional ones aren't.
     Their values live under the record's `metadata` (jsonb), so on import we
     nest them there; on export we read them back from FormsStore. */
  function customCols(entity) {
    if (!window.FormsStore) return [];
    return FormsStore.customFields(entity).map(function (f) {
      var t = f.type === "checkbox" ? "bool" : "string"; // text & attach → string cell
      return {
        key: f.stored_key,
        type: t,
        required: !!f.is_mandatory,
        custom: true,
        min: f.min_len,
        max: f.max_len,
        label: f.label_en || f.label_ar || f.stored_key,
        note: "custom field" + (f.type === "attach" ? " (file name / URL)" : f.type === "checkbox" ? " (yes/no)" : "")
      };
    });
  }
  /* full column list = built-in spec columns + custom fields */
  function allColumns(entity) {
    return spec(entity).columns.concat(customCols(entity));
  }

  /* ── Lazy-load SheetJS (only when the user actually imports/exports) ─────── */
  var xlsxLoading = null;
  function loadXLSX() {
    if (window.XLSX) return Promise.resolve(window.XLSX);
    if (xlsxLoading) return xlsxLoading;
    xlsxLoading = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = XLSX_URL;
      s.async = true;
      s.onload = function () {
        resolve(window.XLSX);
      };
      s.onerror = function () {
        reject(new Error("Could not load the Excel engine (offline?)."));
      };
      document.head.appendChild(s);
    });
    return xlsxLoading;
  }

  /* project rows to the spec + custom columns; arrays (email[]) joined for cells.
     Custom-field values come from the record's saved metadata. */
  function project(entity, rows) {
    var cols = allColumns(entity);
    return (rows || []).map(function (r) {
      var meta = window.FormsStore && r.id ? FormsStore.getMeta(entity, r.id) : r.metadata || {};
      var o = {};
      cols.forEach(function (c) {
        var v = c.custom ? meta ? meta[c.key] : "" : r[c.key];
        if (v === undefined) v = "";
        if (c.type === "bool") v = v === true ? "yes" : v === false ? "no" : v;
        if (c.type === "email[]" && Array.isArray(v)) v = v.join("; ");
        o[c.key] = v == null ? "" : v;
      });
      return o;
    });
  }

  /* ── Export current rows as .xlsx ───────────────────────────────────────── */
  function exportData(entity, rows) {
    var s = spec(entity);
    loadXLSX().then(function (XLSX) {
      var ws = XLSX.utils.json_to_sheet(project(entity, rows), {
        header: allColumns(entity).map(function (c) {
          return c.key;
        })
      });
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Data");
      XLSX.writeFile(wb, s.file + ".xlsx");
      if (window.fleetToast) fleetToast("success", "Export ready", s.file + ".xlsx downloaded (" + (rows ? rows.length : 0) + " rows).");
    }).catch(function (e) {
      if (window.fleetToast) fleetToast("danger", "Export failed", e.message);
    });
  }

  /* ── Sample .xlsx: Data sheet + Instructions sheet ──────────────────────── */
  function downloadSample(entity) {
    var s = spec(entity);
    loadXLSX().then(function (XLSX) {
      var wb = XLSX.utils.book_new();
      var cols = allColumns(entity);
      // extend each example row with empty cells for the custom columns
      var sampleRows = s.sample.map(function (ex) {
        var row = {};
        cols.forEach(function (c) {
          row[c.key] = c.key in ex ? ex[c.key] : "";
        });
        return row;
      });
      var data = XLSX.utils.json_to_sheet(sampleRows, {
        header: cols.map(function (c) {
          return c.key;
        })
      });
      XLSX.utils.book_append_sheet(wb, data, "Data");
      var info = cols.map(function (c) {
        return {
          column: c.key,
          type: c.type,
          required: c.required ? "yes" : "",
          allowed_values: (c.enum || []).join(", "),
          notes: c.link || c.note || ""
        };
      });
      var ws2 = XLSX.utils.json_to_sheet(info, {
        header: ["column", "type", "required", "allowed_values", "notes"]
      });
      XLSX.utils.book_append_sheet(wb, ws2, "Instructions");
      XLSX.writeFile(wb, s.file + "-sample.xlsx");
      if (window.fleetToast) fleetToast("info", "Sample downloaded", "Fill the Data sheet in " + s.file + "-sample.xlsx and upload it.");
    }).catch(function (e) {
      if (window.fleetToast) fleetToast("danger", "Sample failed", e.message);
    });
  }

  /* ── Parse an uploaded workbook to plain row objects ────────────────────── */
  function parseWorkbook(XLSX, arrayBuffer) {
    var wb = XLSX.read(arrayBuffer, {
      type: "array"
    });
    // prefer a sheet named "Data", else the first
    var name = wb.SheetNames.indexOf("Data") >= 0 ? "Data" : wb.SheetNames[0];
    var ws = wb.Sheets[name];
    return XLSX.utils.sheet_to_json(ws, {
      defval: "",
      raw: false
    });
  }

  /* ── Validate rows + normalize into the JSON the backend receives ───────── */
  function validateRows(entity, data) {
    var s = spec(entity);
    var cols = allColumns(entity);
    var out = {
      ok: false,
      isArray: Array.isArray(data),
      total: 0,
      valid: 0,
      issues: [],
      json: []
    };
    if (!out.isArray) return out;
    out.total = data.length;
    var allowed = cols.map(function (c) {
      return c.key;
    });
    data.forEach(function (row, i) {
      var problems = [],
        rec = {},
        meta = {};
      if (row == null || typeof row !== "object") {
        out.issues.push({
          row: i + 1,
          problems: ["not a row"]
        });
        return;
      }
      cols.forEach(function (c) {
        var v = row[c.key];
        var empty = v === undefined || v === null || String(v).trim() === "";
        if (c.required && empty) {
          problems.push("missing " + c.key);
          return;
        }
        if (empty) {
          return;
        }
        v = String(v).trim();
        var target = c.custom ? meta : rec;
        if (c.type === "int") {
          if (isNaN(parseInt(v, 10))) problems.push(c.key + " not a number");else target[c.key] = parseInt(v, 10);
          return;
        }
        if (c.type === "enum" && c.enum.indexOf(v) < 0) {
          problems.push(c.key + " ∉ [" + c.enum.join(", ") + "]");
          return;
        }
        if (c.type === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(v)) {
          problems.push(c.key + " not YYYY-MM-DD");
          return;
        }
        if (c.type === "email[]") {
          rec[c.key] = v.split(/[;,]/).map(function (x) {
            return x.trim();
          }).filter(Boolean);
          return;
        }
        if (c.type === "bool") {
          var t = v.toLowerCase();
          if (["yes", "true", "1", "no", "false", "0"].indexOf(t) < 0) {
            problems.push(c.key + " must be yes/no");
            return;
          }
          target[c.key] = t === "yes" || t === "true" || t === "1";
          return;
        }
        // string (incl. custom text/attach) — min/max for custom text fields
        if (c.custom && c.min != null && v.length < c.min) problems.push(c.key + " min " + c.min + " chars");
        if (c.custom && c.max != null && v.length > c.max) problems.push(c.key + " max " + c.max + " chars");
        target[c.key] = v;
      });
      Object.keys(row).forEach(function (k) {
        if (allowed.indexOf(k) < 0 && String(row[k]).trim() !== "") problems.push("unknown column " + k);
      });
      if (Object.keys(meta).length) rec.metadata = meta; // custom fields → metadata jsonb
      if (problems.length) out.issues.push({
        row: i + 1,
        problems: problems
      });else {
        out.valid++;
        out.json.push(rec);
      }
    });
    out.ok = out.valid > 0 && out.issues.length === 0;
    return out;
  }

  /* ── Large uploads: NDJSON (one record per line) streamed in chunks ─────── */
  function buildNDJSON(records) {
    return records.map(function (r) {
      return JSON.stringify(r);
    }).join("\n");
  }
  function humanSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }
  /* Streams the NDJSON to the backend in chunks. In the real app this POSTs a
     ReadableStream (chunked transfer) to /api/v1/<entity>/bulk so a 1000-row
     upload never sits in memory as one payload. Here we just simulate it. */
  function streamUpload(entity, ndjson) {
    var blob = new Blob([ndjson], {
      type: "application/x-ndjson"
    });
    // Real implementation (sketch):
    //   const res = await fetch(`/api/v1/${entity}/bulk`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/x-ndjson' },
    //     body: blob.stream(),           // chunked / streamed
    //     duplex: 'half'
    //   });
    return Promise.resolve({
      bytes: blob.size
    });
  }

  /* ── Import modal ───────────────────────────────────────────────────────── */
  function ensureModal() {
    var m = document.getElementById("ioImportModal");
    if (m) return m;
    m = document.createElement("div");
    m.className = "fds-modal-scrim is-hidden";
    m.id = "ioImportModal";
    m.innerHTML = '<div class="fds-modal" role="dialog" aria-modal="true" style="max-width:580px">' + '<div class="fds-modal__head"><h2 class="fds-modal__title" id="io-title">Import</h2>' + '<button class="fds-modal__close" data-close aria-label="Close">' + window.fleetIcon("x", 18) + "</button></div>" + '<div class="fds-modal__body" id="io-body" style="display:flex;flex-direction:column;gap:var(--space-4)"></div>' + '<div class="fds-modal__foot">' + '<button class="fds-btn fds-btn--ghost" data-close>Close</button>' + '<button class="fds-btn fds-btn--primary is-hidden" id="io-apply">Import rows</button>' + "</div></div>";
    document.body.appendChild(m);
    return m;
  }
  function openImport(entity, onImport) {
    var s = spec(entity);
    var modal = ensureModal();
    var body = document.getElementById("io-body");
    document.getElementById("io-apply").classList.add("is-hidden");
    document.getElementById("io-title").textContent = "Import " + s.label + " (Excel)";
    var cols = allColumns(entity).map(function (c) {
      return '<span class="io-col' + (c.custom ? ' io-col--custom' : '') + '"><code>' + c.key + "</code><span class=\"io-col__t\">" + c.type + (c.required ? ' <b style="color:var(--danger)">*</b>' : "") + "</span>" + (c.enum ? '<span class="io-col__enum">' + c.enum.join(" · ") + "</span>" : "") + (c.link ? '<span class="io-col__enum">' + c.link + "</span>" : "") + (c.custom ? '<span class="io-col__enum">custom field</span>' : "") + "</span>";
    }).join("");
    body.innerHTML = '<p class="u-muted" style="font-size:13px;margin:0;line-height:1.5">Upload an <b style="color:var(--text)">Excel (.xlsx)</b> file — fill the <b style="color:var(--text)">Data</b> sheet. We validate it here and convert it to JSON for the server. Required columns are marked <b style="color:var(--danger)">*</b>; link columns reference another record by its unique key.</p>' + '<div class="io-cols">' + cols + "</div>" + '<div class="u-row" style="gap:10px">' + '<button class="fds-btn fds-btn--secondary fds-btn--sm" id="io-sample">' + window.fleetIcon("download", 15) + " Download sample .xlsx</button>" + '<label class="fds-btn fds-btn--primary fds-btn--sm" style="cursor:pointer">' + window.fleetIcon("upload", 15) + ' Choose Excel file<input type="file" accept=".xlsx,.xls,.csv" id="io-file" style="display:none"></label>' + "</div>" + '<div id="io-result"></div>';
    document.getElementById("io-sample").onclick = function () {
      downloadSample(entity);
    };
    document.getElementById("io-file").onchange = function () {
      var file = this.files && this.files[0];
      if (!file) return;
      var res = document.getElementById("io-result");
      res.innerHTML = '<div class="u-muted" style="font-size:13px;padding:6px 0">' + window.fleetIcon("loading" in {} ? "info" : "info", 14) + " Parsing " + file.name + "…</div>";
      loadXLSX().then(function (XLSX) {
        var reader = new FileReader();
        reader.onload = function () {
          var rows;
          try {
            rows = parseWorkbook(XLSX, new Uint8Array(reader.result));
          } catch (e) {
            return fail("Could not read the workbook: " + e.message);
          }
          showResult(entity, rows, onImport, file.name);
        };
        reader.readAsArrayBuffer(file);
      }).catch(function (e) {
        fail(e.message);
      });
      function fail(msg) {
        res.innerHTML = '<div class="val-banner val-banner--bad">' + window.fleetIcon("alert-triangle", 16) + " " + msg + "</div>";
      }
    };
    modal.classList.remove("is-hidden");
  }
  function showResult(entity, rows, onImport, filename) {
    var res = document.getElementById("io-result");
    var apply = document.getElementById("io-apply");
    var r = validateRows(entity, rows);
    if (!r.total) {
      res.innerHTML = '<div class="val-banner val-banner--bad">' + window.fleetIcon("alert-triangle", 16) + " No rows found in the Data sheet.</div>";
      apply.classList.add("is-hidden");
      return;
    }
    var ndjson = buildNDJSON(r.json);
    var size = humanSize(new Blob([ndjson]).size);
    var html = '<div class="io-summary"><span class="io-summary__ok">' + r.valid + " valid</span>" + (r.issues.length ? '<span class="io-summary__bad">' + r.issues.length + " with issues</span>" : "") + '<span class="u-muted">of ' + r.total + " rows</span></div>";
    if (r.issues.length) {
      html += '<div class="io-issues">' + r.issues.slice(0, 8).map(function (it) {
        return '<div class="io-issue"><span class="io-issue__row">Row ' + it.row + "</span>" + it.problems.join(", ") + "</div>";
      }).join("") + (r.issues.length > 8 ? '<div class="u-muted" style="font-size:11.5px;padding:4px 0">+' + (r.issues.length - 8) + " more rows</div>" : "") + "</div>";
    }
    if (r.valid) {
      html += '<div class="io-convert">' + window.fleetIcon("check-circle", 15) + " Converted " + r.valid + " row" + (r.valid > 1 ? "s" : "") + " to JSON · " + "<b>" + size + "</b> NDJSON · uploaded as a streamed file</div>";
    }
    html += r.ok ? '<div class="val-banner val-banner--ok">' + window.fleetIcon("check-circle", 16) + " All rows valid — ready to import.</div>" : r.valid ? '<div class="val-banner val-banner--warn">' + window.fleetIcon("alert-circle", 16) + " Fix the flagged rows, or import only the " + r.valid + " valid ones.</div>" : '<div class="val-banner val-banner--bad">' + window.fleetIcon("alert-triangle", 16) + " No valid rows to import.</div>";
    res.innerHTML = html;
    if (r.valid > 0) {
      apply.classList.remove("is-hidden");
      apply.textContent = "Import " + r.valid + " row" + (r.valid > 1 ? "s" : "");
      apply.onclick = function () {
        apply.disabled = true;
        streamUpload(entity, ndjson).then(function (info) {
          document.getElementById("ioImportModal").classList.add("is-hidden");
          apply.disabled = false;
          if (window.fleetToast) fleetToast("success", "Import complete", r.valid + " " + spec(entity).label.toLowerCase() + " streamed to the server (" + humanSize(info.bytes) + ").");
          if (typeof onImport === "function") onImport(r.json);
        });
      };
    } else {
      apply.classList.add("is-hidden");
    }
  }
  window.FleetIO = {
    specs: SPECS,
    spec: spec,
    exportData: exportData,
    downloadSample: downloadSample,
    validateRows: validateRows,
    buildNDJSON: buildNDJSON,
    openImport: openImport
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/import-export.js", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/roles-store.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   ROLES & PERMISSIONS — shared catalog + store.   (multi-tenant)

   Used by roles.html (list) and role-edit.html (create/update). Persistence is
   localStorage so the prototype works; swap each method for an API call.

   ════════════════════════════════════════════════════════════════════════════
   MODEL
   • A Role = { name, description, permissions: ["<module>.<action>", …] }.
   • Permission keys are STABLE STRINGS "<module>.<action>" — this is the contract
     the BACKEND enforces (middleware/policy checks the signed-in user's role has
     the required key before serving an endpoint) AND the FRONTEND uses to
     show/hide UI (nav items, buttons). Same catalog, both layers.
   • The catalog below is derived from the modules that actually exist in the app.
   • SUPER ADMIN is a built-in system role: it implicitly has every permission
     (current + future), is NOT editable, and CANNOT be deleted.

   DATABASE SCHEMA (target)
   TABLE roles
     id            bigint  PK
     org_id        bigint  FK → organizations.id     ← TENANT SCOPE
     name          string  required
     description   text
     is_system     boolean default false   -- true for Super Admin (locked)
     created_at / updated_at
     UNIQUE (org_id, name)
   TABLE role_permissions
     role_id       bigint  FK → roles.id (ON DELETE CASCADE)
     permission    string  "<module>.<action>"
     UNIQUE (role_id, permission)
   -- Super Admin stores no rows here; the policy layer treats is_system as "*".
   TABLE users.role_id → roles.id   (each user has one role)
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function currentOrg() {
    try {
      return localStorage.getItem("fleet_org_id") || "org_swift";
    } catch (e) {
      return "org_swift";
    }
  }

  /* The permission catalog — one entry per module, each with its actions.
     Mirrors the real modules/pages in this app. Add a module here and it shows
     up in the permission matrix automatically. */
  var CATALOG = [{
    key: "dashboard",
    label: "Maps / Dashboard",
    icon: "grid",
    actions: [{
      key: "view",
      label: "View"
    }, {
      key: "plan",
      label: "Plan routes"
    }, {
      key: "manage",
      label: "Manage"
    }]
  }, {
    key: "drivers",
    label: "Drivers",
    icon: "user",
    actions: [{
      key: "list",
      label: "List drivers"
    }, {
      key: "view",
      label: "View driver details"
    }, {
      key: "create",
      label: "Create drivers"
    }, {
      key: "update",
      label: "Update drivers"
    }, {
      key: "delete",
      label: "Delete drivers"
    }, {
      key: "lookup",
      label: "Driver lookup"
    }, {
      key: "import",
      label: "Import Excel"
    }, {
      key: "export",
      label: "Export Excel"
    }]
  }, {
    key: "vehicles",
    label: "Vehicles",
    icon: "truck",
    actions: [{
      key: "list",
      label: "List vehicles"
    }, {
      key: "view",
      label: "View vehicle details"
    }, {
      key: "create",
      label: "Create vehicles"
    }, {
      key: "update",
      label: "Update vehicles"
    }, {
      key: "delete",
      label: "Delete vehicles"
    }, {
      key: "lookup",
      label: "Vehicle lookup"
    }, {
      key: "import",
      label: "Import Excel"
    }, {
      key: "export",
      label: "Export Excel"
    }]
  }, {
    key: "fleets",
    label: "Fleets",
    icon: "grid",
    actions: [{
      key: "list",
      label: "List fleets"
    }, {
      key: "view",
      label: "View fleet details"
    }, {
      key: "create",
      label: "Create fleets"
    }, {
      key: "update",
      label: "Update fleets"
    }, {
      key: "delete",
      label: "Delete fleets"
    }, {
      key: "assign_users",
      label: "Assign users"
    }]
  }, {
    key: "vendors",
    label: "Vendors",
    icon: "package",
    actions: [{
      key: "list",
      label: "List vendors"
    }, {
      key: "view",
      label: "View vendor details"
    }, {
      key: "create",
      label: "Create vendors"
    }, {
      key: "update",
      label: "Update vendors"
    }, {
      key: "delete",
      label: "Delete vendors"
    }]
  }, {
    key: "areas",
    label: "Areas & Zones",
    icon: "map",
    actions: [{
      key: "list",
      label: "List areas"
    }, {
      key: "create",
      label: "Create areas"
    }, {
      key: "update",
      label: "Update areas"
    }, {
      key: "delete",
      label: "Delete areas"
    }]
  }, {
    key: "places",
    label: "Places",
    icon: "map-pin",
    actions: [{
      key: "list",
      label: "List places"
    }, {
      key: "create",
      label: "Create places"
    }, {
      key: "update",
      label: "Update places"
    }, {
      key: "delete",
      label: "Delete places"
    }]
  }, {
    key: "forms",
    label: "Forms (custom fields)",
    icon: "columns",
    actions: [{
      key: "view",
      label: "View forms"
    }, {
      key: "manage",
      label: "Manage custom fields"
    }]
  }, {
    key: "languages",
    label: "Languages",
    icon: "globe",
    actions: [{
      key: "list",
      label: "List languages"
    }, {
      key: "create",
      label: "Add languages"
    }, {
      key: "update",
      label: "Upload translations"
    }, {
      key: "delete",
      label: "Delete languages"
    }, {
      key: "publish",
      label: "Publish languages"
    }]
  }, {
    key: "users",
    label: "Users",
    icon: "users",
    actions: [{
      key: "list",
      label: "List users"
    }, {
      key: "view",
      label: "View user details"
    }, {
      key: "create",
      label: "Create users"
    }, {
      key: "update",
      label: "Update users"
    }, {
      key: "delete",
      label: "Delete users"
    }]
  }, {
    key: "roles",
    label: "Roles",
    icon: "shield",
    actions: [{
      key: "list",
      label: "List roles"
    }, {
      key: "create",
      label: "Create roles"
    }, {
      key: "update",
      label: "Update roles"
    }, {
      key: "delete",
      label: "Delete roles"
    }]
  }, {
    key: "settings",
    label: "Settings",
    icon: "settings",
    actions: [{
      key: "view",
      label: "View settings"
    }, {
      key: "manage",
      label: "Manage settings"
    }]
  }];

  /* All permission keys "<module>.<action>" — Super Admin gets the full set. */
  function allKeys() {
    var keys = [];
    CATALOG.forEach(function (m) {
      m.actions.forEach(function (a) {
        keys.push(m.key + "." + a.key);
      });
    });
    return keys;
  }

  /* Built-in system roles (always present, not stored as editable rows). */
  var SYSTEM_ROLES = [{
    id: "role_super_admin",
    name: "Super Admin",
    description: "Full access to every module and action. This role is built-in and can't be edited or removed.",
    is_system: true,
    permissions: allKeys()
  }];
  var LS = "fleet_roles_v2"; // { org_id: [role, …] }  (custom roles only)
  function read() {
    try {
      return JSON.parse(localStorage.getItem(LS)) || {};
    } catch (e) {
      return {};
    }
  }
  function write(v) {
    try {
      localStorage.setItem(LS, JSON.stringify(v));
    } catch (e) {}
  }

  /* seed a couple of example custom roles the first time, so the list isn't empty */
  function seed(orgId) {
    var all = read();
    if (all[orgId]) return;
    all[orgId] = [{
      id: "role_dispatcher",
      name: "Dispatcher",
      description: "Runs day-to-day operations on the map and drivers.",
      is_system: false,
      permissions: ["dashboard.view", "dashboard.plan", "drivers.list", "drivers.view", "drivers.lookup", "vehicles.list", "vehicles.view", "fleets.list"]
    }, {
      id: "role_fleet_manager",
      name: "Fleet Manager",
      description: "Manages vehicles, fleets and their drivers.",
      is_system: false,
      permissions: ["vehicles.list", "vehicles.view", "vehicles.create", "vehicles.update", "vehicles.export", "fleets.list", "fleets.view", "fleets.create", "fleets.update", "fleets.assign_users", "drivers.list", "drivers.view"]
    }, {
      id: "role_viewer",
      name: "Read-only Viewer",
      description: "Can view records across modules but cannot change anything.",
      is_system: false,
      permissions: ["dashboard.view", "drivers.list", "drivers.view", "vehicles.list", "vehicles.view", "fleets.list", "fleets.view"]
    }];
    write(all);
  }
  var RolesStore = {
    catalog: CATALOG,
    allKeys: allKeys,
    totalPermissions: allKeys().length,
    currentOrg: currentOrg,
    systemRoles: function () {
      return SYSTEM_ROLES.map(function (r) {
        return Object.assign({}, r);
      });
    },
    /* GET /api/v1/roles → system roles + the org's custom roles */
    roles: function (orgId) {
      orgId = orgId || currentOrg();
      seed(orgId);
      return this.systemRoles().concat(read()[orgId] || []);
    },
    getRole: function (id, orgId) {
      return this.roles(orgId).filter(function (r) {
        return r.id === id;
      })[0];
    },
    isLocked: function (role) {
      return !!(role && role.is_system);
    },
    /* POST/PATCH /api/v1/roles — refuses to touch system roles */
    saveRole: function (role, orgId) {
      orgId = orgId || currentOrg();
      if (role.id) {
        var ex = this.getRole(role.id, orgId);
        if (ex && ex.is_system) return {
          error: "locked"
        };
      }
      var all = read();
      var list = all[orgId] || [];
      if (role.id) {
        list = list.map(function (r) {
          return r.id === role.id ? role : r;
        });
      } else {
        role.id = "role_" + Date.now();
        role.is_system = false;
        list.push(role);
      }
      all[orgId] = list;
      write(all);
      return role;
    },
    /* DELETE /api/v1/roles/{id} — refuses system roles */
    removeRole: function (id, orgId) {
      orgId = orgId || currentOrg();
      var r = this.getRole(id, orgId);
      if (r && r.is_system) return {
        error: "locked"
      };
      var all = read();
      all[orgId] = (all[orgId] || []).filter(function (x) {
        return x.id !== id;
      });
      write(all);
      return {
        ok: true
      };
    },
    moduleLabel: function (k) {
      var m = CATALOG.filter(function (x) {
        return x.key === k;
      })[0];
      return m ? m.label : k;
    }
  };
  window.RolesStore = RolesStore;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/roles-store.js", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/truck-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   TRUCK / VEHICLE demo dataset — shared by trucks.html, truck-edit.html,
   truck-detail.html. In the real app this is GET /api/v1/vehicles.

   DATA MODEL — Vehicle
   table: vehicles
     id              bigint   PK
     public_id       string   unique, "veh_xxxxxx"
     plate           string   required, unique          (رقم اللوحة)
     make_model      string   required                  (الماركة/الموديل)
     type            enum     [sedan,pickup,van,truck,bike] required  (النوع)
     year            int      nullable                  (سنة الصنع)
     capacity_kg     int      nullable                  (الحمولة)
     color           string   nullable                  (اللون)
     reg_expiry      date     nullable                  (انتهاء الرخصة)
     insurance_no    string   nullable                  (رقم التأمين)
     status          enum     [active,maintenance,inactive] default active (الحالة)
     fleet_id        bigint   FK → fleets.id, nullable  (الأسطول)
     vendor_id       bigint   FK → vendors.id, nullable (المورّد)
     driver_id       bigint   FK → drivers.id, nullable, UNIQUE  (السائق المعيّن)
                              -- 1:1 — a vehicle has at most ONE driver and a
                              -- driver is assigned to at most one vehicle.
     metadata        jsonb    -- custom Forms-module fields (entity_type='truck')
     created_at      datetime
     updated_at      datetime
   ════════════════════════════════════════════════════════════════════════════ */

/* status enum → badge tone + label */
var TRUCK_STATUS = {
  active: {
    t: "success",
    l: "Active"
  },
  maintenance: {
    t: "warning",
    l: "In maintenance"
  },
  inactive: {
    t: "neutral",
    l: "Inactive"
  }
};

/* type enum → display label */
var TRUCK_TYPES = [{
  value: "sedan",
  label: "Sedan"
}, {
  value: "pickup",
  label: "Pickup"
}, {
  value: "van",
  label: "Van"
}, {
  value: "truck",
  label: "Truck"
}, {
  value: "bike",
  label: "Bike"
}];
function TRUCK_TYPE_LABEL(v) {
  var m = TRUCK_TYPES.filter(function (t) {
    return t.value === v;
  })[0];
  return m ? m.label : v;
}

/* Lookups (FK targets) — mirror the driver form's reference data. */
var TRUCK_FLEETS = [{
  id: 81,
  name: "Riyadh Fleet"
}, {
  id: 82,
  name: "Jeddah Fleet"
}, {
  id: 83,
  name: "Dammam Fleet"
}, {
  id: 84,
  name: "Express Couriers"
}];
var TRUCK_VENDORS = [{
  id: 1,
  name: "Najm Foods"
}, {
  id: 2,
  name: "BlueCart"
}, {
  id: 3,
  name: "FreshLine"
}];
/* Drivers available for 1:1 assignment. unassigned=true → driver_id free. */
var TRUCK_DRIVERS = [{
  id: 5001,
  name: "Layla Hassan"
}, {
  id: 5002,
  name: "Omar Khaled"
}, {
  id: 5003,
  name: "Sara Nasser"
}, {
  id: 5004,
  name: "Bilal Mansour"
}, {
  id: 5005,
  name: "Huda Saleh"
}, {
  id: 5006,
  name: "Khalid Otaibi"
}];
var TRUCKS = [{
  id: "veh_h1l2x3",
  plate: "RYD 4821",
  make_model: "Toyota Hilux",
  type: "pickup",
  year: 2022,
  capacity_kg: 1000,
  color: "White",
  reg_expiry: "2026-08-14",
  insurance_no: "INS-99210",
  status: "active",
  fleet_id: 81,
  fleet_name: "Riyadh Fleet",
  vendor_id: 1,
  vendor_name: "Najm Foods",
  driver_id: 5001,
  driver_name: "Layla Hassan"
}, {
  id: "veh_c4n5t6",
  plate: "RYD 1190",
  make_model: "Mitsubishi Canter",
  type: "truck",
  year: 2021,
  capacity_kg: 3500,
  color: "Blue",
  reg_expiry: "2026-06-18",
  insurance_no: "INS-99211",
  status: "active",
  fleet_id: 81,
  fleet_name: "Riyadh Fleet",
  vendor_id: 1,
  vendor_name: "Najm Foods",
  driver_id: 5002,
  driver_name: "Omar Khaled"
}, {
  id: "veh_v7n8a9",
  plate: "JED 5521",
  make_model: "Toyota Hiace",
  type: "van",
  year: 2021,
  capacity_kg: 1500,
  color: "Silver",
  reg_expiry: "2026-03-09",
  insurance_no: "INS-99217",
  status: "maintenance",
  fleet_id: 82,
  fleet_name: "Jeddah Fleet",
  vendor_id: 2,
  vendor_name: "BlueCart",
  driver_id: 5004,
  driver_name: "Bilal Mansour"
}, {
  id: "veh_h9l8x7",
  plate: "RYD 9920",
  make_model: "Toyota Hilux",
  type: "pickup",
  year: 2023,
  capacity_kg: 1000,
  color: "White",
  reg_expiry: "2027-01-22",
  insurance_no: "INS-99214",
  status: "active",
  fleet_id: 81,
  fleet_name: "Riyadh Fleet",
  vendor_id: 1,
  vendor_name: "Najm Foods",
  driver_id: 5005,
  driver_name: "Huda Saleh"
}, {
  id: "veh_t8r9k1",
  plate: "DMM 8810",
  make_model: "Mitsubishi Canter",
  type: "truck",
  year: 2020,
  capacity_kg: 3500,
  color: "White",
  reg_expiry: "2026-11-30",
  insurance_no: "INS-99219",
  status: "active",
  fleet_id: 83,
  fleet_name: "Dammam Fleet",
  vendor_id: 3,
  vendor_name: "FreshLine",
  driver_id: 5006,
  driver_name: "Khalid Otaibi"
}, {
  id: "veh_b2k3e4",
  plate: "RYD 2218",
  make_model: "Toyota Hilux",
  type: "pickup",
  year: 2022,
  capacity_kg: 1000,
  color: "Grey",
  reg_expiry: "2027-02-05",
  insurance_no: "INS-99218",
  status: "inactive",
  fleet_id: 84,
  fleet_name: "Express Couriers",
  vendor_id: 1,
  vendor_name: "Najm Foods",
  driver_id: null,
  driver_name: null
}, {
  id: "veh_m5o6t7",
  plate: "JED 3340",
  make_model: "Suzuki Every",
  type: "van",
  year: 2023,
  capacity_kg: 800,
  color: "White",
  reg_expiry: "2027-05-19",
  insurance_no: "INS-99220",
  status: "active",
  fleet_id: 82,
  fleet_name: "Jeddah Fleet",
  vendor_id: 2,
  vendor_name: "BlueCart",
  driver_id: null,
  driver_name: null
}, {
  id: "veh_z8k9e1",
  plate: "RYD 7711",
  make_model: "Honda CB125",
  type: "bike",
  year: 2024,
  capacity_kg: 60,
  color: "Red",
  reg_expiry: "2027-09-02",
  insurance_no: "INS-99221",
  status: "maintenance",
  fleet_id: 84,
  fleet_name: "Express Couriers",
  vendor_id: 3,
  vendor_name: "FreshLine",
  driver_id: null,
  driver_name: null
}];
function TRUCK_BY_ID(id) {
  return TRUCKS.filter(function (t) {
    return t.id === id;
  })[0];
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/truck-data.js", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/ui.js
try { (() => {
/* Fleet SaaS — multi-page console. Shared behaviour:
   icon hydration, theme + RTL prefs (persisted), toasts, and the small
   interactions (menus, popovers, segmented switch, overlays).
   No framework — just the design-system CSS classes. Edit freely. */
(function () {
  "use strict";

  /* ── Icons (Lucide-style line set, mirrors components/core/Icon.jsx) ── */
  var ICONS = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3.5-5 7-5s7 1.5 7 5"/><path d="M17 8a3 3 0 0 1 0 6M22 20c0-2.5-2-4-4-4.5"/>',
    truck: '<rect x="1" y="6" width="13" height="10" rx="1"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="6" cy="18" r="1.7"/><circle cx="18" cy="18" r="1.7"/>',
    map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><path d="M9 3v15M15 6v15"/>',
    "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/>',
    package: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6"/>',
    key: '<circle cx="7" cy="14" r="4"/><path d="M10 11l9-9M17 4l2 2M14 7l2 2"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M5 12l5 5L20 6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    "more-vertical": '<circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/>',
    "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
    "chevron-up": '<polyline points="18 15 12 9 6 15"/>',
    "chevron-right": '<polyline points="9 6 15 12 9 18"/>',
    "chevron-left": '<polyline points="15 6 9 12 15 18"/>',
    "arrow-up": '<path d="M12 19V5M6 11l6-6 6 6"/>',
    "arrow-down": '<path d="M12 5v14M6 13l6 6 6-6"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>',
    columns: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M9 4v16M15 4v16"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    download: '<path d="M12 4v12M7 11l5 5 5-5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5L16 9"/>',
    "alert-circle": '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
    "alert-triangle": '<path d="M10.3 4.3 2 19a1.5 1.5 0 0 0 1.3 2.2h17.4A1.5 1.5 0 0 0 22 19L13.7 4.3a1.5 1.5 0 0 0-2.6 0Z"/><path d="M12 9v4M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6l-3.5-6.5a1 1 0 0 0-.9-.5H6.4a1 1 0 0 0-.9.5Z"/>',
    "zoom-in": '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
    "zoom-out": '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M8 11h6"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5M3 8v5m18-5v5"/>',
    navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
    crosshair: '<circle cx="12" cy="12" r="8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    "panel-left": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M5 5l1.5 1.5M17.5 17.5 19 19M2 12h2M20 12h2M5 19l1.5-1.5M17.5 6.5 19 5"/>',
    moon: '<path d="M21 12.8A8 8 0 1 1 11.2 3a6.4 6.4 0 0 0 9.8 9.8Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
    pause: '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>',
    play: '<path d="M6 4l14 8-14 8z"/>',
    "user-plus": '<circle cx="9" cy="8" r="4"/><path d="M2 20c0-4 4-6 7-6s3 .3 4 .8"/><path d="M19 14v6M16 17h6"/>'
  };
  function iconSvg(name, size, cls) {
    var s = size || 18;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' + 'stroke-linecap="round" stroke-linejoin="round"' + (cls ? ' class="' + cls + '"' : "") + ' aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }
  // expose for pages that build markup dynamically
  window.fleetIcon = iconSvg;
  function hydrateIcons(root) {
    var nodes = (root || document).querySelectorAll("[data-icon]");
    Array.prototype.forEach.call(nodes, function (el) {
      var name = el.getAttribute("data-icon");
      var size = parseInt(el.getAttribute("data-size"), 10) || 18;
      el.outerHTML = iconSvg(name, size, el.className || "");
    });
  }

  /* ── Theme + language prefs (persisted across pages) ───────── */
  var docEl = document.documentElement;
  function getPref(k, d) {
    try {
      return localStorage.getItem(k) || d;
    } catch (e) {
      return d;
    }
  }
  function setPref(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  }
  function currentOrg() {
    return getPref("fleet_org_id", "org_swift");
  }

  /* Base languages ship with the app (also defined in i18n-store.js). */
  var BASE_LANGS = [{
    code: "en",
    name: "English",
    native_name: "English",
    direction: "ltr",
    base: true
  }, {
    code: "ar",
    name: "Arabic",
    native_name: "العربية",
    direction: "rtl",
    base: true
  }];
  /* Published org languages (read straight from the store's localStorage key so
     the switcher works on every page without depending on i18n-store.js). */
  function publishedLangs() {
    var all;
    try {
      all = JSON.parse(localStorage.getItem("fleet_org_languages")) || {};
    } catch (e) {
      all = {};
    }
    return (all[currentOrg()] || []).filter(function (l) {
      return l.status === "active";
    });
  }
  function allLangs() {
    return BASE_LANGS.concat(publishedLangs());
  }
  function activeLang() {
    var code = getPref("fleet_lang", null);
    if (!code) {
      code = getPref("fleet_dir", "ltr") === "rtl" ? "ar" : "en";
    }
    var found = allLangs().filter(function (l) {
      return l.code === code;
    })[0];
    return found || BASE_LANGS[0];
  }
  function setLang(code) {
    var l = allLangs().filter(function (x) {
      return x.code === code;
    })[0];
    if (!l) return;
    setPref("fleet_lang", l.code);
    setPref("fleet_dir", l.direction); // direction follows the language
    applyPrefs();
    toast("info", "Language changed", l.name + (l.native_name && l.native_name !== l.name ? " · " + l.native_name : ""));
  }
  window.fleetSetLang = setLang;
  function applyPrefs() {
    var theme = getPref("fleet_theme", "dark");
    var lang = activeLang();
    docEl.setAttribute("data-theme", theme);
    docEl.setAttribute("dir", lang.direction);
    docEl.lang = lang.code;
    refreshToggles();
  }
  function refreshToggles() {
    var theme = docEl.getAttribute("data-theme");
    Array.prototype.forEach.call(document.querySelectorAll('[data-action="theme"]'), function (b) {
      b.innerHTML = iconSvg(theme === "dark" ? "sun" : "moon", 18);
    });
    mountLangSwitchers();
  }

  /* Turn each [data-action="dir"] button into a language-switcher dropdown
     listing base + published languages, with the active one checked. */
  function mountLangSwitchers() {
    var act = activeLang();
    Array.prototype.forEach.call(document.querySelectorAll('[data-action="dir"]'), function (btn) {
      var wrap = btn.__langWrap;
      if (!wrap) {
        wrap = document.createElement("div");
        wrap.style.position = "relative";
        btn.parentNode.insertBefore(wrap, btn);
        wrap.appendChild(btn);
        btn.__langWrap = wrap;
        var menu = document.createElement("div");
        menu.className = "cs-menu lang-menu is-hidden";
        menu.setAttribute("data-popout", "");
        wrap.appendChild(menu);
        btn.__langMenu = menu;
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          buildLangMenu(btn.__langMenu);
          var willOpen = btn.__langMenu.classList.contains("is-hidden");
          closePopouts(willOpen ? btn.__langMenu : null);
          btn.__langMenu.classList.toggle("is-hidden");
        });
      }
      btn.innerHTML = '<span style="font-weight:700;font-size:12px;letter-spacing:.02em">' + act.code.toUpperCase() + '</span>';
      btn.setAttribute("aria-label", "Change language");
      btn.setAttribute("title", "Language · " + act.name);
    });
  }
  function buildLangMenu(menu) {
    var act = activeLang();
    var base = BASE_LANGS,
      pub = publishedLangs();
    function item(l) {
      var on = l.code === act.code;
      return '<div class="cs-menu__item lang-menu__item' + (on ? " is-active" : "") + '" data-lang="' + l.code + '">' + '<span class="lang-menu__code u-mono">' + l.code.toUpperCase() + '</span>' + '<span class="lang-menu__name">' + l.name + (l.native_name && l.native_name !== l.name ? ' <span class="lang-menu__native"' + (l.direction === "rtl" ? ' dir="rtl"' : "") + '>' + l.native_name + '</span>' : "") + '</span>' + (on ? '<span class="lang-menu__check">' + iconSvg("check", 15) + "</span>" : "") + "</div>";
    }
    var html = '<div class="lang-menu__label">Base</div>' + base.map(item).join("");
    if (pub.length) html += '<div class="lang-menu__label">Published</div>' + pub.map(item).join("");
    menu.innerHTML = html;
    Array.prototype.forEach.call(menu.querySelectorAll("[data-lang]"), function (it) {
      it.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.add("is-hidden");
        setLang(it.getAttribute("data-lang"));
      });
    });
  }

  /* ── Toasts ──────────────────────────────────────────────────── */
  function ensureRegion() {
    var r = document.querySelector(".fds-toast-region");
    if (!r) {
      r = document.createElement("div");
      r.className = "fds-toast-region";
      document.body.appendChild(r);
    }
    return r;
  }
  var TOAST_ICON = {
    success: "check-circle",
    danger: "alert-circle",
    warning: "alert-triangle",
    info: "info"
  };
  function toast(tone, title, msg) {
    tone = tone || "info";
    var region = ensureRegion();
    var el = document.createElement("div");
    el.className = "fds-toast fds-toast--" + tone;
    el.setAttribute("role", "status");
    el.innerHTML = '<span class="fds-toast__icon">' + iconSvg(TOAST_ICON[tone] || "info", 18) + "</span>" + '<div class="fds-toast__body"><div class="fds-toast__title"></div>' + (msg ? '<div class="fds-toast__msg"></div>' : "") + "</div>" + '<button class="fds-toast__close" aria-label="Dismiss">' + iconSvg("x", 15) + "</button>";
    el.querySelector(".fds-toast__title").textContent = title || "";
    if (msg) el.querySelector(".fds-toast__msg").textContent = msg;
    region.appendChild(el);
    var t = setTimeout(remove, 4000);
    function remove() {
      clearTimeout(t);
      el.style.transition = "opacity .2s";
      el.style.opacity = "0";
      setTimeout(function () {
        el.remove();
      }, 200);
    }
    el.querySelector(".fds-toast__close").addEventListener("click", remove);
  }
  window.fleetToast = toast;

  /* flash a toast set by the previous page (cross-page flow feedback) */
  function consumeFlash() {
    var raw;
    try {
      raw = localStorage.getItem("fleet_flash");
      localStorage.removeItem("fleet_flash");
    } catch (e) {}
    if (!raw) return;
    try {
      var f = JSON.parse(raw);
      toast(f.tone, f.title, f.msg);
    } catch (e) {}
  }
  window.fleetFlash = function (tone, title, msg) {
    setPref("fleet_flash", JSON.stringify({
      tone: tone,
      title: title,
      msg: msg
    }));
  };

  /* ── Expiry status (DERIVED, never user-set) ─────────────────────────────
     Computes a license/registration expiry state purely from the date vs today.
     The UI shows it live on add/edit and on the list + detail; the user never
     picks "expired" — it follows the date.
      BACKEND: this same state is computed on read, BUT a record also carries a
     persisted `is_expired` flag for fast list filtering. A scheduled job runs
     once daily at end-of-day (e.g. 23:59 cron) over every driver/vehicle whose
     expiry date has passed and whose `is_expired` is still false, and sets
     is_expired = true (and may emit a notification). So the flag is eventually
     consistent within a day; the live UI badge here is always exact. */
  function fleetExpiry(dateStr) {
    if (!dateStr) return {
      state: "none",
      label: "—",
      tone: "neutral",
      days: null
    };
    var d = new Date(String(dateStr) + "T00:00:00");
    if (isNaN(d.getTime())) return {
      state: "none",
      label: "—",
      tone: "neutral",
      days: null
    };
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var days = Math.round((d - today) / 86400000);
    if (days < 0) return {
      state: "expired",
      label: "Expired",
      tone: "danger",
      days: days
    };
    if (days <= 30) return {
      state: "soon",
      label: "Expires in " + days + "d",
      tone: "warning",
      days: days
    };
    return {
      state: "valid",
      label: "Valid",
      tone: "success",
      days: days
    };
  }
  function fleetExpiryBadge(dateStr) {
    var e = fleetExpiry(dateStr);
    if (e.state === "none") return '<span class="fds-badge fds-badge--neutral">—</span>';
    return '<span class="fds-badge fds-badge--' + e.tone + '"><span class="fds-badge__dot"></span>' + e.label + "</span>";
  }
  window.fleetExpiry = fleetExpiry;
  window.fleetExpiryBadge = fleetExpiryBadge;

  /* ── Generic confirmation popup (reusable for any action) ────────────────
     fleetConfirm({ title, message, confirmLabel, tone:'danger'|'primary',
                    icon, onConfirm }) — injects one modal and reuses it. */
  function ensureConfirm() {
    var m = document.getElementById("fleetConfirmModal");
    if (m) return m;
    m = document.createElement("div");
    m.className = "fds-modal-scrim is-hidden";
    m.id = "fleetConfirmModal";
    m.innerHTML = '<div class="fds-modal fds-modal--sm" role="dialog" aria-modal="true">' + '<div class="fds-modal__head"><div class="u-row" style="gap:12px">' + '<span class="fds-modal__confirm-icon" id="fc-icon"></span>' + '<h2 class="fds-modal__title" id="fc-title"></h2></div>' + '<button class="fds-modal__close" data-close aria-label="Close">' + iconSvg("x", 18) + "</button></div>" + '<div class="fds-modal__body" id="fc-msg" style="color:var(--text-muted);font-size:13px;line-height:1.55"></div>' + '<div class="fds-modal__foot"><button class="fds-btn fds-btn--ghost" data-close id="fc-cancel">Cancel</button>' + '<button class="fds-btn fds-btn--primary" id="fc-ok"></button></div>' + "</div>";
    document.body.appendChild(m);
    return m;
  }
  function fleetConfirm(opts) {
    opts = opts || {};
    var m = ensureConfirm();
    var tone = opts.tone || "primary";
    var icon = opts.icon || (tone === "danger" ? "trash" : "alert-circle");
    var ic = document.getElementById("fc-icon");
    ic.className = "fds-modal__confirm-icon" + (tone === "danger" ? " fds-modal__confirm-icon--danger" : " fds-modal__confirm-icon--primary");
    ic.innerHTML = iconSvg(icon, 20);
    document.getElementById("fc-title").textContent = opts.title || "Are you sure?";
    document.getElementById("fc-msg").innerHTML = opts.message || "";
    var ok = document.getElementById("fc-ok");
    ok.className = "fds-btn " + (tone === "danger" ? "fds-btn--danger" : "fds-btn--primary");
    ok.textContent = opts.confirmLabel || "Confirm";
    closePopouts(null);
    m.classList.remove("is-hidden");
    ok.onclick = function () {
      m.classList.add("is-hidden");
      if (typeof opts.onConfirm === "function") opts.onConfirm();
    };
  }
  window.fleetConfirm = fleetConfirm;

  /* ── Interaction wiring ──────────────────────────────────────── */
  function closePopouts(except) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-popout]:not(.is-hidden)"), function (p) {
      if (p !== except) p.classList.add("is-hidden");
    });
  }
  function wire() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-action], [data-toggle], [data-open], [data-close]");

      // outside-click closes popouts
      if (!t || !t.hasAttribute("data-toggle") && !t.hasAttribute("data-action")) {
        if (!e.target.closest("[data-popout]")) closePopouts(null);
      }
      if (!t) return;
      var act = t.getAttribute("data-action");
      if (act === "theme") {
        setPref("fleet_theme", docEl.getAttribute("data-theme") === "dark" ? "light" : "dark");
        applyPrefs();
        return;
      }
      if (act === "collapse") {
        var sb = document.querySelector(".cs-sidebar");
        if (sb) {
          var c = sb.classList.toggle("cs-sidebar--collapsed");
          Array.prototype.forEach.call(sb.querySelectorAll(".fds-nav-item"), function (n) {
            n.classList.toggle("fds-nav-item--collapsed", c);
          });
        }
        return;
      }
      if (act === "ask-delete") {
        e.preventDefault();
        var dm = document.getElementById("deleteModal");
        if (dm) {
          var cb = dm.querySelector("[data-confirm]");
          if (cb) {
            cb.setAttribute("data-id", t.getAttribute("data-id") || "");
            cb.setAttribute("data-name", t.getAttribute("data-name") || "Item");
            if (t.getAttribute("data-entity")) cb.setAttribute("data-entity", t.getAttribute("data-entity"));
          }
          var nm = dm.querySelector("[data-del-name]");
          if (nm) nm.textContent = t.getAttribute("data-name") || "this driver";
          closePopouts(null);
          dm.classList.remove("is-hidden");
        }
        return;
      }
      if (act === "confirm-delete") {
        var name = t.getAttribute("data-name") || "Item";
        var ent = t.getAttribute("data-entity") || "Item";
        e.preventDefault();
        // remove the row if present, then close + toast
        var row = document.querySelector('[data-row="' + (t.getAttribute("data-id") || "") + '"]');
        if (row) row.remove();
        closeOverlay(t);
        toast("danger", ent + " deleted", name + " was removed.");
        return;
      }

      // toggle a target's visibility (menus, popovers, panels)
      var tog = t.getAttribute("data-toggle");
      if (tog) {
        e.preventDefault();
        e.stopPropagation();
        var target = document.querySelector(tog);
        if (target) {
          var willOpen = target.classList.contains("is-hidden");
          if (target.hasAttribute("data-popout")) closePopouts(willOpen ? target : null);
          target.classList.toggle("is-hidden");
        }
        return;
      }

      // open / close overlays (scrim + modal/drawer)
      var op = t.getAttribute("data-open");
      if (op) {
        e.preventDefault();
        var o = document.querySelector(op);
        if (o) o.classList.remove("is-hidden");
        return;
      }
      if (t.hasAttribute("data-close")) {
        e.preventDefault();
        closeOverlay(t);
        return;
      }
    });

    // segmented control (e.g. Map / Table)
    Array.prototype.forEach.call(document.querySelectorAll("[data-segment]"), function (seg) {
      seg.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-seg]");
        if (!btn) return;
        var val = btn.getAttribute("data-seg");
        Array.prototype.forEach.call(seg.querySelectorAll("[data-seg]"), function (b) {
          b.classList.toggle("fds-segment__item--active", b === btn);
        });
        var scope = seg.getAttribute("data-segment");
        Array.prototype.forEach.call(document.querySelectorAll('[data-seg-panel][data-scope="' + scope + '"]'), function (p) {
          p.classList.toggle("is-hidden", p.getAttribute("data-seg-panel") !== val);
        });
      });
    });

    // simple underline tabs
    Array.prototype.forEach.call(document.querySelectorAll("[data-tabs]"), function (tabs) {
      tabs.addEventListener("click", function (e) {
        var tab = e.target.closest("[data-tab]");
        if (!tab) return;
        Array.prototype.forEach.call(tabs.querySelectorAll("[data-tab]"), function (b) {
          b.classList.toggle("fds-tab--active", b === tab);
        });
        // switch matching [data-tabpanel] panels (scoped to nearest [data-tabscope] or document)
        var val = tab.getAttribute("data-tab");
        var scope = tabs.closest("[data-tabscope]") || document;
        Array.prototype.forEach.call(scope.querySelectorAll("[data-tabpanel]"), function (p) {
          p.classList.toggle("is-hidden", p.getAttribute("data-tabpanel") !== val);
        });
      });
    });
  }
  function closeOverlay(fromEl) {
    var o = fromEl.closest(".fds-modal-scrim, .fds-scrim, [data-overlay]");
    if (o) {
      o.classList.add("is-hidden");
      return;
    }
    var id = fromEl.getAttribute("data-close");
    if (id && id.charAt(0) === "#") {
      var n = document.querySelector(id);
      if (n) n.classList.add("is-hidden");
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    hydrateIcons(document);
    applyPrefs();
    wire();
    consumeFlash();
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/ui.js", error: String((e && e.message) || e) }); }

// design_handoff_fleet_saas/pages/user-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   USERS demo dataset — shared by users.html, user-view.html, user-edit.html,
   and role-view.html. In the real app: GET /api/v1/users.

   DATA MODEL — User
   table: users
     id            bigint  PK
     public_id     string  unique, "usr_xxxxxx"
     name          string  required
     email         string  required, unique
     type          enum    [admin, dispatcher, fleet, driver]
     role_id       bigint  FK → roles.id   (each user has ONE role)
     status        enum    [pending, active, suspended]  default pending
     password_set  boolean -- false until the invited user sets their own
     fleet_id      bigint  FK → fleets.id, nullable (only for type=fleet)
     deleted_at    datetime nullable  -- SOFT DELETE (row kept, hidden from lists)
     created_at    datetime

   STATUS lifecycle: pending (invited, not yet active) → active → suspended
     (temporarily blocked, reversible). Delete is a SOFT delete (sets deleted_at)
     so the record + its audit trail survive and can be restored.

   ACTIONS (endpoints):
     suspend / activate   PATCH /users/{id}/status
     send invitation      POST  /users/{id}/invite     (emails a set-password link)
     reset password       POST  /users/{id}/reset-password (to a generated default)
     soft delete          DELETE /users/{id}           (sets deleted_at)
   ════════════════════════════════════════════════════════════════════════════ */

var USER_STATUS = {
  pending: {
    t: "warning",
    l: "Pending"
  },
  active: {
    t: "success",
    l: "Active"
  },
  suspended: {
    t: "danger",
    l: "Suspended"
  }
};
var USER_TYPES = ["admin", "dispatcher", "fleet", "driver"];
var APP_USERS = [{
  id: "usr_a01",
  name: "Dana Owais",
  email: "dana.owais@swift.test",
  type: "admin",
  role_id: "role_super_admin",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_a02",
  name: "Yara Salem",
  email: "yara.salem@swift.test",
  type: "admin",
  role_id: "role_super_admin",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d01",
  name: "Mahmoud Adel",
  email: "mahmoud.adel@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d02",
  name: "Salma Hosny",
  email: "salma.hosny@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d03",
  name: "Tamer Fouad",
  email: "tamer.fouad@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d04",
  name: "Nadia Karam",
  email: "nadia.karam@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "pending",
  password_set: false,
  deleted_at: null
}, {
  id: "usr_d05",
  name: "Hani Mostafa",
  email: "hani.mostafa@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d06",
  name: "Rasha Lotfy",
  email: "rasha.lotfy@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d07",
  name: "Ihab Zaki",
  email: "ihab.zaki@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "suspended",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d08",
  name: "Maha Saad",
  email: "maha.saad@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_f01",
  name: "Karim Adel",
  email: "karim.adel@swift.test",
  type: "fleet",
  role_id: "role_fleet_manager",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_f02",
  name: "Lina Tarek",
  email: "lina.tarek@swift.test",
  type: "fleet",
  role_id: "role_fleet_manager",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_f03",
  name: "Sami Nabil",
  email: "sami.nabil@swift.test",
  type: "fleet",
  role_id: "role_fleet_manager",
  status: "pending",
  password_set: false,
  deleted_at: null
}, {
  id: "usr_v01",
  name: "Omar Halabi",
  email: "omar.halabi@swift.test",
  type: "admin",
  role_id: "role_viewer",
  status: "active",
  password_set: true,
  deleted_at: null
}];
function USERS_ALL() {
  return APP_USERS.filter(function (u) {
    return !u.deleted_at;
  });
}
function USER_BY_ID(id) {
  return APP_USERS.filter(function (u) {
    return u.id === id;
  })[0];
}
function USERS_BY_ROLE(roleId) {
  return USERS_ALL().filter(function (u) {
    return u.role_id === roleId;
  });
}
function USER_COUNT_BY_ROLE(roleId) {
  return USERS_BY_ROLE(roleId).length;
}

/* default password the backend resets to (then forces change on next login) */
var DEFAULT_PASSWORD = "Fleet@12345";
/* Status-aware action list — which actions are allowed for a user's status.
   active    → suspend, delete            (+ reset always)
   pending   → suspend, send invitation, delete
   suspended → activate, delete
   reset password is allowed in ALL states. */
function USER_ACTIONS(status) {
  var a = [];
  if (status === "suspended") a.push("activate");else a.push("suspend"); // active & pending
  if (status === "pending") a.push("invite");
  a.push("reset"); // always
  a.push("delete");
  return a;
}

/* generate a strong random password for create/edit + reset */
function GEN_PASSWORD() {
  var upper = "ABCDEFGHJKLMNPQRSTUVWXYZ",
    lower = "abcdefghijkmnpqrstuvwxyz",
    nums = "23456789",
    sym = "!@#$%&*";
  var all = upper + lower + nums + sym,
    out = "";
  out += upper[Math.floor(Math.random() * upper.length)];
  out += lower[Math.floor(Math.random() * lower.length)];
  out += nums[Math.floor(Math.random() * nums.length)];
  out += sym[Math.floor(Math.random() * sym.length)];
  for (var i = 0; i < 8; i++) out += all[Math.floor(Math.random() * all.length)];
  return out.split("").sort(function () {
    return Math.random() - 0.5;
  }).join("");
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_fleet_saas/pages/user-data.js", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// pages/activity-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   ACTIVITY DATA — orders + assignment history + audit log.
   Shared by driver-detail.html and truck-detail.html.

   ────────────────────────────────────────────────────────────────────────────
   DATA MODEL
   table: orders
     id, public_id "ord_xxxxxx", ref, driver_id FK, vehicle_id FK, status enum
       [pending, en-route, delivered, cancelled], pickup, dropoff, amount, created_at
   table: assignment_history    -- who/what was assigned to a record, over time
     id, subject_type enum[driver,vehicle], subject_id, counterpart, from_at, to_at
       (to_at null = current)
   table: audit_log             -- every change to a record (append-only)
     id, entity_type, entity_id, actor, action enum[create,update,status,assign,delete],
       field, old_value, new_value, at(datetime)
   The backend WRITES an audit_log row on EVERY create/update/status/assign/delete.
   The frontend here seeds history and ALSO appends to a localStorage log so edits
   made in the prototype show up live (see AuditStore.append).
   ════════════════════════════════════════════════════════════════════════════ */

/* ── Orders, keyed by driver public_id and vehicle public_id ─────────────── */
var ORDER_STATUS = {
  delivered: {
    t: "success",
    l: "Delivered"
  },
  "en-route": {
    t: "info",
    l: "En-route"
  },
  pending: {
    t: "warning",
    l: "Pending"
  },
  cancelled: {
    t: "danger",
    l: "Cancelled"
  }
};
var ORDERS = [{
  id: "ord_1042a",
  ref: "#SO-10421",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Riyadh Central WH",
  dropoff: "Al Olaya, Riyadh",
  amount: "SAR 84.00",
  at: "2026-06-26 11:42"
}, {
  id: "ord_1042b",
  ref: "#SO-10440",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "en-route",
  pickup: "Riyadh Central WH",
  dropoff: "Al Malqa, Riyadh",
  amount: "SAR 120.00",
  at: "2026-06-26 12:48"
}, {
  id: "ord_1042c",
  ref: "#SO-10388",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Najm Foods DC",
  dropoff: "Al Naseem, Riyadh",
  amount: "SAR 56.50",
  at: "2026-06-25 18:05"
}, {
  id: "ord_1042d",
  ref: "#SO-10362",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "cancelled",
  pickup: "Riyadh Central WH",
  dropoff: "Diplomatic Quarter",
  amount: "SAR 0.00",
  at: "2026-06-25 14:20"
}, {
  id: "ord_1042e",
  ref: "#SO-10301",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Najm Foods DC",
  dropoff: "King Fahd Rd",
  amount: "SAR 92.00",
  at: "2026-06-24 09:15"
}, {
  id: "ord_1042f",
  ref: "#SO-10288",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Riyadh Central WH",
  dropoff: "Al Sahafa, Riyadh",
  amount: "SAR 73.00",
  at: "2026-06-23 16:40"
}, {
  id: "ord_1042g",
  ref: "#SO-10255",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  status: "delivered",
  pickup: "Najm Foods DC",
  dropoff: "Al Yasmin, Riyadh",
  amount: "SAR 61.00",
  at: "2026-06-23 10:02"
}, {
  id: "ord_1043a",
  ref: "#SO-10410",
  driver_id: "drv_d4e5f6",
  vehicle_id: "veh_c4n5t6",
  status: "en-route",
  pickup: "Riyadh Central WH",
  dropoff: "Al Rabwah, Riyadh",
  amount: "SAR 140.00",
  at: "2026-06-26 12:30"
}, {
  id: "ord_1043b",
  ref: "#SO-10350",
  driver_id: "drv_d4e5f6",
  vehicle_id: "veh_c4n5t6",
  status: "delivered",
  pickup: "Najm Foods DC",
  dropoff: "Al Wurud, Riyadh",
  amount: "SAR 110.00",
  at: "2026-06-25 17:10"
}];
function ORDERS_BY_DRIVER(id) {
  return ORDERS.filter(function (o) {
    return o.driver_id === id;
  });
}
function ORDERS_BY_VEHICLE(id) {
  return ORDERS.filter(function (o) {
    return o.vehicle_id === id;
  });
}
function ORDERS_BY_CUSTOMER(id) {
  return CUSTOMER_ORDERS.filter(function (o) {
    return o.customer_id === id;
  });
}

/* Customer orders (what we delivered to a customer). GET /api/v1/customers/{id}/orders
   table orders also carries customer_id FK → customers.id. */
var CUSTOMER_ORDERS = [{
  id: "ord_c1a",
  ref: "#SO-10421",
  customer_id: "cus_0001",
  store: "Najm Market",
  driver: "Layla Hassan",
  status: "delivered",
  dropoff: "Home · Al Olaya",
  amount: "SAR 84.00",
  at: "2026-06-26 11:42"
}, {
  id: "ord_c1b",
  ref: "#SO-10440",
  customer_id: "cus_0001",
  store: "Najm Market",
  driver: "Layla Hassan",
  status: "en-route",
  dropoff: "Work · Al Malqa",
  amount: "SAR 120.00",
  at: "2026-06-26 12:48"
}, {
  id: "ord_c1c",
  ref: "#SO-10388",
  customer_id: "cus_0001",
  store: "BlueCart Store",
  driver: "Omar Khaled",
  status: "delivered",
  dropoff: "Home · Al Olaya",
  amount: "SAR 56.50",
  at: "2026-06-25 18:05"
}, {
  id: "ord_c1d",
  ref: "#SO-10362",
  customer_id: "cus_0001",
  store: "Najm Market",
  driver: "Sara Nasser",
  status: "cancelled",
  dropoff: "Home · Al Olaya",
  amount: "SAR 0.00",
  at: "2026-06-25 14:20"
}, {
  id: "ord_c1e",
  ref: "#SO-10301",
  customer_id: "cus_0001",
  store: "Najm Market",
  driver: "Layla Hassan",
  status: "delivered",
  dropoff: "Work · Al Malqa",
  amount: "SAR 92.00",
  at: "2026-06-24 09:15"
}, {
  id: "ord_c1f",
  ref: "#SO-10288",
  customer_id: "cus_0001",
  store: "BlueCart Store",
  driver: "Layla Hassan",
  status: "delivered",
  dropoff: "Home · Al Olaya",
  amount: "SAR 73.00",
  at: "2026-06-23 16:40"
}, {
  id: "ord_c1g",
  ref: "#SO-10255",
  customer_id: "cus_0001",
  store: "Najm Market",
  driver: "Omar Khaled",
  status: "delivered",
  dropoff: "Home · Al Olaya",
  amount: "SAR 61.00",
  at: "2026-06-23 10:02"
}, {
  id: "ord_c2a",
  ref: "#SO-10410",
  customer_id: "cus_0002",
  store: "BlueCart Store",
  driver: "Bilal Mansour",
  status: "delivered",
  dropoff: "Home · Al Shati",
  amount: "SAR 140.00",
  at: "2026-06-26 12:30"
}, {
  id: "ord_c2b",
  ref: "#SO-10350",
  customer_id: "cus_0002",
  store: "BlueCart Store",
  driver: "Bilal Mansour",
  status: "pending",
  dropoff: "Home · Al Shati",
  amount: "SAR 110.00",
  at: "2026-06-25 17:10"
}];

/* ── Vehicle assignment history (which driver drove it, and when) ────────── */
var ASSIGN_HISTORY = {
  veh_h1l2x3: [{
    driver: "Layla Hassan",
    from: "2025-02-01",
    to: null
  }, {
    driver: "Yousef Amir",
    from: "2024-06-15",
    to: "2025-01-28"
  }, {
    driver: "Huda Saleh",
    from: "2023-11-02",
    to: "2024-06-10"
  }],
  veh_c4n5t6: [{
    driver: "Omar Khaled",
    from: "2025-03-12",
    to: null
  }, {
    driver: "Tariq Aziz",
    from: "2024-09-01",
    to: "2025-03-01"
  }]
};
function ASSIGN_HISTORY_BY_VEHICLE(id) {
  return ASSIGN_HISTORY[id] || [];
}

/* ── Audit log: seed + localStorage append, merged on read ───────────────── */
var AUDIT_SEED = {
  veh_h1l2x3: [{
    actor: "Dana Owais",
    action: "update",
    field: "Ownership",
    old: "Internal",
    new: "External",
    at: "2026-06-22 10:40"
  }, {
    actor: "Dana Owais",
    action: "update",
    field: "Monthly cost",
    old: "—",
    new: "SAR 3200.00",
    at: "2026-06-22 10:40"
  }, {
    actor: "Karim Adel",
    action: "update",
    field: "Monthly cost",
    old: "SAR 3200.00",
    new: "SAR 3500.00",
    at: "2026-06-28 16:05"
  }, {
    actor: "Dana Owais",
    action: "status",
    field: "status",
    old: "maintenance",
    new: "active",
    at: "2026-06-20 09:12"
  }, {
    actor: "Karim Adel",
    action: "assign",
    field: "driver",
    old: "Yousef Amir",
    new: "Layla Hassan",
    at: "2025-02-01 08:00"
  }, {
    actor: "Dana Owais",
    action: "update",
    field: "insurance_no",
    old: "INS-99120",
    new: "INS-99210",
    at: "2025-01-15 14:33"
  }, {
    actor: "System",
    action: "create",
    field: "",
    old: "",
    new: "Toyota Hilux · RYD 4821",
    at: "2023-11-02 10:00"
  }],
  veh_c4n5t6: [{
    actor: "Karim Adel",
    action: "status",
    field: "status",
    old: "active",
    new: "active",
    at: "2026-06-18 11:00"
  }, {
    actor: "System",
    action: "create",
    field: "",
    old: "",
    new: "Mitsubishi Canter · RYD 1190",
    at: "2024-09-01 09:00"
  }],
  drv_a1b2c3: [{
    actor: "Dana Owais",
    action: "update",
    field: "Monthly base salary",
    old: "SAR 2200.00",
    new: "SAR 2500.00",
    at: "2026-06-01 09:00"
  }, {
    actor: "Karim Adel",
    action: "update",
    field: "Amount per order",
    old: "SAR 5.00",
    new: "SAR 6.00",
    at: "2026-06-15 12:20"
  }, {
    actor: "Dana Owais",
    action: "assign",
    field: "vehicle",
    old: "—",
    new: "Hilux · 4821",
    at: "2025-02-01 08:00"
  }, {
    actor: "System",
    action: "create",
    field: "",
    old: "",
    new: "Layla Hassan",
    at: "2023-11-02 10:00"
  }],
  drv_d4e5f6: [{
    actor: "Dana Owais",
    action: "update",
    field: "Amount per order",
    old: "SAR 6.00",
    new: "SAR 5.50",
    at: "2026-07-02 10:10"
  }, {
    actor: "Dana Owais",
    action: "status",
    field: "status",
    old: "offline",
    new: "busy",
    at: "2026-06-26 08:30"
  }, {
    actor: "System",
    action: "create",
    field: "",
    old: "",
    new: "Omar Khaled",
    at: "2024-01-10 10:00"
  }]
};
var ACTION_TONE = {
  create: "primary",
  update: "info",
  status: "warning",
  assign: "info",
  delete: "danger"
};
var AuditStore = {
  KEY: "fleet_audit_log",
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  /* append-only: POST /api/v1/audit (server does this automatically on change) */
  append: function (entityType, id, ev) {
    var all = this.read();
    var k = entityType + ":" + id;
    ev.at = ev.at || new Date().toISOString().slice(0, 16).replace("T", " ");
    (all[k] = all[k] || []).push(ev);
    try {
      localStorage.setItem(this.KEY, JSON.stringify(all));
    } catch (e) {}
  },
  /* GET /api/v1/audit?entity=…&id=…  → newest first (seed + appended) */
  log: function (entityType, id) {
    var seeded = (AUDIT_SEED[id] || []).slice();
    var stored = (this.read()[entityType + ":" + id] || []).slice();
    return seeded.concat(stored).sort(function (a, b) {
      return String(b.at).localeCompare(String(a.at));
    });
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/activity-data.js", error: String((e && e.message) || e) }); }

// pages/addons-store.js
try { (() => {
/* ═════════════════════════════════════════════════════════════════
   VEHICLE ADD-ONS — company-covered vehicle expenses (battery, tyres,
   oil, brakes, maintenance…) that the company reimburses and amortises
   onto the vehicle's monthly cost.

   FLOW
     1. Someone adds an add-on: category + cost + amortisation period
        (over how many months) + an optional receipt/photo attachment
        (needed because the driver must hand in a tax invoice).
     2. The add-on starts as `pending`.
     3. A reviewer sets it to `accepted` or `rejected` (with a reason).
     4. Once `accepted`, the cost is added to the vehicle's cost for
        that allocation month.

   AUDIT — every add-on records who created it & when, and who last
   changed its status & when. Status changes are ALSO written to the
   shared AuditStore so they show in the vehicle History & audit tab.

   DATA MODEL — vehicle_addon
     id            string   pk
     vehicle_id    string   fk → vehicles
     category      enum     battery|tyres|oil|brakes|maintenance|other
     cost          decimal  amount (SAR) allocated to one month
     month         string   allocation month 'YYYY-MM' (e.g. Jan 26 oil
                            500, Jul 26 battery 200 — hits that month)
     note          text     nullable
     attachment    { name, type, size, dataUrl }  nullable (tax invoice)
     status        enum     pending|accepted|rejected
     reject_reason text     nullable (required when rejected)
     created_by    string   actor name
     created_at    datetime
     status_by     string   nullable — who last set status
     status_at     datetime nullable

   Persistence is localStorage so the prototype loop works end-to-end.
   In the real app: GET/POST /api/v1/vehicles/:id/addons and
   PATCH /api/v1/addons/:id/status. Attachments → object storage.
   ═════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* Signed-in user — the org switcher / auth would supply this. */
  window.CURRENT_USER = window.CURRENT_USER || "Dana Owais";
  var CATEGORIES = [{
    value: "battery",
    icon: "battery",
    en: "Battery",
    ar: "بطارية"
  }, {
    value: "tyres",
    icon: "disc",
    en: "Tyres",
    ar: "إطارات"
  }, {
    value: "oil",
    icon: "droplet",
    en: "Oil change",
    ar: "تغيير زيت"
  }, {
    value: "brakes",
    icon: "crosshair",
    en: "Brakes",
    ar: "فرامل"
  }, {
    value: "maintenance",
    icon: "wrench",
    en: "Maintenance",
    ar: "صيانة"
  }, {
    value: "other",
    icon: "layers",
    en: "Other",
    ar: "أخرى"
  }];
  var CAT_BY = {};
  CATEGORIES.forEach(function (c) {
    CAT_BY[c.value] = c;
  });
  var STATUS = {
    pending: {
      tone: "warning",
      en: "Pending",
      ar: "قيد المراجعة",
      icon: "alert-circle"
    },
    accepted: {
      tone: "success",
      en: "Accepted",
      ar: "مقبولة",
      icon: "check-circle"
    },
    rejected: {
      tone: "danger",
      en: "Rejected",
      ar: "مرفوضة",
      icon: "x"
    }
  };
  function ym(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
  }
  function thisMonth() {
    return ym(new Date());
  }
  var MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function monthLabel(s) {
    if (!s) return "—";
    var p = String(s).split('-');
    var mi = (parseInt(p[1], 10) || 1) - 1;
    return MONTH_NAMES[mi] + ' ' + p[0];
  }
  var KEY = "fleet_vehicle_addons";
  function readAll() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function writeAll(v) {
    try {
      localStorage.setItem(KEY, JSON.stringify(v));
    } catch (e) {/* quota */}
  }
  function now() {
    return new Date().toISOString().slice(0, 16).replace("T", " ");
  }
  function uid() {
    return "adn_" + Math.random().toString(36).slice(2, 9);
  }

  /* ── Seed a couple of realistic add-ons for the demo vehicle so the tab
        isn't empty on first load (only if nothing stored yet). ── */
  var SEED = {
    veh_h1l2x3: [{
      id: "adn_seed01",
      category: "battery",
      cost: 2000,
      month: "2026-06",
      note: "AC-Delco 70Ah — replaced after roadside failure.",
      attachment: {
        name: "battery-invoice.pdf",
        type: "application/pdf",
        size: 148000,
        dataUrl: null
      },
      status: "accepted",
      reject_reason: "",
      created_by: "Karim Adel",
      created_at: "2026-06-18 09:22",
      status_by: "Dana Owais",
      status_at: "2026-06-19 11:05"
    }, {
      id: "adn_seed02",
      category: "tyres",
      cost: 1600,
      month: "2026-07",
      note: "Front pair, Michelin.",
      attachment: {
        name: "tyres-receipt.jpg",
        type: "image/jpeg",
        size: 92000,
        dataUrl: null
      },
      status: "pending",
      reject_reason: "",
      created_by: "Karim Adel",
      created_at: "2026-07-05 14:10",
      status_by: null,
      status_at: null
    }, {
      id: "adn_seed03",
      category: "oil",
      cost: 300,
      month: "2026-06",
      note: "5W-30 full synthetic + filter.",
      attachment: null,
      status: "rejected",
      reject_reason: "Routine oil change is covered by the driver, not the company.",
      created_by: "Layla Hassan",
      created_at: "2026-06-28 08:00",
      status_by: "Dana Owais",
      status_at: "2026-06-28 17:30"
    }],
    veh_c4n5t6: [{
      id: "adn_c01",
      category: "maintenance",
      cost: 900,
      month: "2026-06",
      note: "Brake pads + clutch inspection.",
      attachment: {
        name: "workshop-invoice.pdf",
        type: "application/pdf",
        size: 132000,
        dataUrl: null
      },
      status: "accepted",
      reject_reason: "",
      created_by: "Karim Adel",
      created_at: "2026-06-10 11:15",
      status_by: "Dana Owais",
      status_at: "2026-06-12 09:40"
    }, {
      id: "adn_c02",
      category: "tyres",
      cost: 2200,
      month: "2026-07",
      note: "Full set, load-rated for 3.5t.",
      attachment: {
        name: "tyres.jpg",
        type: "image/jpeg",
        size: 88000,
        dataUrl: null
      },
      status: "accepted",
      reject_reason: "",
      created_by: "Karim Adel",
      created_at: "2026-07-03 08:20",
      status_by: "Dana Owais",
      status_at: "2026-07-04 10:05"
    }],
    veh_h9l8x7: [{
      id: "adn_h01",
      category: "oil",
      cost: 320,
      month: "2026-06",
      note: "Scheduled service.",
      attachment: null,
      status: "accepted",
      reject_reason: "",
      created_by: "Dana Owais",
      created_at: "2026-06-15 13:00",
      status_by: "Dana Owais",
      status_at: "2026-06-16 08:30"
    }, {
      id: "adn_h02",
      category: "battery",
      cost: 1900,
      month: "2026-07",
      note: "Awaiting invoice from driver.",
      attachment: null,
      status: "pending",
      reject_reason: "",
      created_by: "Huda Saleh",
      created_at: "2026-07-08 16:45",
      status_by: null,
      status_at: null
    }],
    veh_t8r9k1: [{
      id: "adn_t01",
      category: "brakes",
      cost: 700,
      month: "2026-06",
      note: "Front discs resurfaced.",
      attachment: {
        name: "brake-receipt.pdf",
        type: "application/pdf",
        size: 76000,
        dataUrl: null
      },
      status: "accepted",
      reject_reason: "",
      created_by: "Khalid Otaibi",
      created_at: "2026-06-20 09:10",
      status_by: "Karim Adel",
      status_at: "2026-06-21 14:00"
    }]
  };
  function ensureSeed(vehicleId) {
    var all = readAll();
    if (all[vehicleId]) return all;
    if (SEED[vehicleId]) {
      all[vehicleId] = SEED[vehicleId].map(function (a) {
        return JSON.parse(JSON.stringify(a));
      });
      writeAll(all);
    }
    return all;
  }
  var AddonStore = {
    CATEGORIES: CATEGORIES,
    CAT_BY: CAT_BY,
    STATUS: STATUS,
    thisMonth: thisMonth,
    monthLabel: monthLabel,
    list: function (vehicleId) {
      var all = ensureSeed(vehicleId);
      return (all[vehicleId] || []).slice().sort(function (a, b) {
        return String(b.created_at).localeCompare(String(a.created_at));
      });
    },
    add: function (vehicleId, data) {
      var all = ensureSeed(vehicleId);
      var rec = {
        id: uid(),
        category: data.category,
        cost: Number(data.cost) || 0,
        month: data.month || thisMonth(),
        note: data.note || "",
        attachment: data.attachment || null,
        status: "pending",
        reject_reason: "",
        created_by: window.CURRENT_USER,
        created_at: now(),
        status_by: null,
        status_at: null
      };
      (all[vehicleId] = all[vehicleId] || []).push(rec);
      writeAll(all);
      if (window.AuditStore) AuditStore.append("truck", vehicleId, {
        actor: window.CURRENT_USER,
        action: "create",
        field: "add-on",
        old: "",
        new: (CAT_BY[rec.category] ? CAT_BY[rec.category].en : rec.category) + " · SAR " + rec.cost.toLocaleString() + " · " + monthLabel(rec.month)
      });
      return rec;
    },
    setStatus: function (vehicleId, addonId, status, reason) {
      var all = ensureSeed(vehicleId),
        list = all[vehicleId] || [];
      var rec = list.filter(function (a) {
        return a.id === addonId;
      })[0];
      if (!rec) return null;
      var prev = rec.status;
      rec.status = status;
      rec.reject_reason = status === "rejected" ? reason || "" : "";
      rec.status_by = window.CURRENT_USER;
      rec.status_at = now();
      writeAll(all);
      if (window.AuditStore) AuditStore.append("truck", vehicleId, {
        actor: window.CURRENT_USER,
        action: "status",
        field: "add-on " + (CAT_BY[rec.category] ? CAT_BY[rec.category].en : rec.category),
        old: STATUS[prev] ? STATUS[prev].en : prev,
        new: STATUS[status] ? STATUS[status].en : status
      });
      return rec;
    },
    /* Total of ACCEPTED add-ons allocated to a given month 'YYYY-MM'. */
    acceptedInMonth: function (vehicleId, month) {
      return this.list(vehicleId).filter(function (a) {
        return a.status === "accepted" && a.month === month;
      }).reduce(function (s, a) {
        return s + (Number(a.cost) || 0);
      }, 0);
    },
    /* Distinct months that have accepted add-ons, newest first. */
    monthsWithAccepted: function (vehicleId) {
      var set = {};
      this.list(vehicleId).forEach(function (a) {
        if (a.status === "accepted") set[a.month] = 1;
      });
      return Object.keys(set).sort().reverse();
    }
  };
  window.AddonStore = AddonStore;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/addons-store.js", error: String((e && e.message) || e) }); }

// pages/adjustments-store.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   Driver payroll adjustments — the shared ledger behind the Driver Payroll
   Adjustments report, the payroll report (Driver expenses) and the driver list.

   Two kinds, same shape, both keyed "<driver_id>|<YYYY-MM>":
     deduction → subtracts from net pay   (localStorage fleet_driver_deductions)
     bonus     → adds to net pay          (localStorage fleet_driver_bonuses)

   REMOVAL IS A SOFT VOID. While the payroll period is still OPEN (the current
   month) an operator may void an adjustment, and must give a reason. The row
   stays in the ledger for audit — struck through, excluded from every total.
   Closed months are already paid out and are read-only.

   BACKEND: driver_payroll_adjustments
     {id, driver_id, period, kind ∈ deduction|bonus, amount, reason,
      created_by, created_at, voided_at, voided_by, void_reason}
     POST   /api/v1/drivers/{id}/adjustments        { period, kind, amount, reason }
     DELETE /api/v1/payroll-adjustments/{id}        { void_reason }  → soft void,
            rejected by the server once the period is locked.
   ════════════════════════════════════════════════════════════════════════════ */
var AdjStore = {
  /* The open payroll period — anything older is locked by the month-end run. */
  CURRENT_PERIOD: '2026-07',
  ACTOR: 'Dana Owais',
  KINDS: {
    deduction: {
      label: 'Deduction',
      icon: 'arrow-down',
      sign: -1,
      tone: 'danger'
    },
    bonus: {
      label: 'Bonus',
      icon: 'arrow-up',
      sign: 1,
      tone: 'success'
    }
  },
  KEYS: {
    deduction: 'fleet_driver_deductions',
    bonus: 'fleet_driver_bonuses'
  },
  VOID_KEY: 'fleet_payroll_adjustment_voids',
  SEED: {
    deduction: {
      'drv_a1b2c3|2026-07': [{
        amount: 400,
        reason: 'Salary advance',
        at: '2026-07-03 09:00',
        actor: 'Dana Owais'
      }],
      'drv_g7h8i9|2026-07': [{
        amount: 150,
        reason: 'COD shortage',
        at: '2026-07-05 14:20',
        actor: 'Karim Adel'
      }],
      'drv_d4e5f6|2026-06': [{
        amount: 220,
        reason: 'Traffic fine',
        at: '2026-06-12 11:10',
        actor: 'Dana Owais'
      }]
    },
    bonus: {
      'drv_a1b2c3|2026-07': [{
        amount: 300,
        reason: 'Peak-week incentive',
        at: '2026-07-08 10:15',
        actor: 'Dana Owais'
      }],
      'drv_m4n5o6|2026-07': [{
        amount: 180,
        reason: 'Perfect delivery score',
        at: '2026-07-11 16:40',
        actor: 'Karim Adel'
      }],
      'drv_b1c2d3|2026-06': [{
        amount: 250,
        reason: 'Zero failed attempts',
        at: '2026-06-28 09:05',
        actor: 'Dana Owais'
      }]
    }
  },
  isOpen: function (period) {
    return period >= this.CURRENT_PERIOD;
  },
  read: function (kind) {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS[kind])) || {};
    } catch (e) {
      return {};
    }
  },
  voids: function () {
    try {
      return JSON.parse(localStorage.getItem(this.VOID_KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  /* Stable id across seed + stored rows (no server ids in the prototype). */
  rowId: function (kind, driverId, period, r) {
    return [kind, driverId, period, r.at || '', r.amount || 0].join('|');
  },
  /* Rows for one driver+period. Voided ones are returned too (flagged) so the
     report can show the audit trail; totals ignore them. */
  list: function (kind, driverId, period) {
    var k = driverId + '|' + period,
      v = this.voids(),
      self = this;
    return (this.SEED[kind][k] || []).concat(this.read(kind)[k] || []).map(function (r) {
      var id = self.rowId(kind, driverId, period, r);
      return {
        id: id,
        kind: kind,
        driverId: driverId,
        period: period,
        amount: Number(r.amount) || 0,
        reason: r.reason || self.KINDS[kind].label,
        at: r.at || '',
        actor: r.actor || '—',
        voided: v[id] || null
      };
    });
  },
  total: function (kind, driverId, period) {
    return this.list(kind, driverId, period).reduce(function (s, r) {
      return s + (r.voided ? 0 : r.amount);
    }, 0);
  },
  /* Every adjustment of both kinds, flattened — the report's data source. */
  all: function (period) {
    var out = [],
      self = this;
    Object.keys(this.KINDS).forEach(function (kind) {
      var keys = {};
      Object.keys(self.SEED[kind]).forEach(function (k) {
        keys[k] = 1;
      });
      Object.keys(self.read(kind)).forEach(function (k) {
        keys[k] = 1;
      });
      Object.keys(keys).forEach(function (k) {
        var p = k.split('|');
        if (period && p[1] !== period) return;
        out.push.apply(out, self.list(kind, p[0], p[1]));
      });
    });
    return out;
  },
  add: function (kind, driverId, period, row) {
    var all = this.read(kind),
      k = driverId + '|' + period;
    (all[k] = all[k] || []).push(row);
    try {
      localStorage.setItem(this.KEYS[kind], JSON.stringify(all));
    } catch (e) {}
  },
  /* Soft-void with a mandatory reason. Refused on a locked period. */
  voidRow: function (row, reason) {
    if (!this.isOpen(row.period)) return false;
    var v = this.voids();
    v[row.id] = {
      reason: reason,
      at: new Date().toISOString().slice(0, 16).replace('T', ' '),
      actor: this.ACTOR
    };
    try {
      localStorage.setItem(this.VOID_KEY, JSON.stringify(v));
    } catch (e) {}
    return true;
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/adjustments-store.js", error: String((e && e.message) || e) }); }

// pages/country-data.js
try { (() => {
/* ── Countries ───────────────────────────────────────────────────────────────
   ISO-3166-1 list used by every country picker (international orders, customer
   addresses, org settings). name = English display name, c = ISO alpha-2,
   d = international dialling code.
   BACKEND: GET /api/v1/countries → [{ iso2, name, dial_code }] (cached client-side).
   ──────────────────────────────────────────────────────────────────────────── */
var COUNTRY_LIST = [{
  c: "AF",
  n: "Afghanistan",
  d: "93"
}, {
  c: "AL",
  n: "Albania",
  d: "355"
}, {
  c: "DZ",
  n: "Algeria",
  d: "213"
}, {
  c: "AD",
  n: "Andorra",
  d: "376"
}, {
  c: "AO",
  n: "Angola",
  d: "244"
}, {
  c: "AG",
  n: "Antigua and Barbuda",
  d: "1268"
}, {
  c: "AR",
  n: "Argentina",
  d: "54"
}, {
  c: "AM",
  n: "Armenia",
  d: "374"
}, {
  c: "AU",
  n: "Australia",
  d: "61"
}, {
  c: "AT",
  n: "Austria",
  d: "43"
}, {
  c: "AZ",
  n: "Azerbaijan",
  d: "994"
}, {
  c: "BS",
  n: "Bahamas",
  d: "1242"
}, {
  c: "BH",
  n: "Bahrain",
  d: "973"
}, {
  c: "BD",
  n: "Bangladesh",
  d: "880"
}, {
  c: "BB",
  n: "Barbados",
  d: "1246"
}, {
  c: "BY",
  n: "Belarus",
  d: "375"
}, {
  c: "BE",
  n: "Belgium",
  d: "32"
}, {
  c: "BZ",
  n: "Belize",
  d: "501"
}, {
  c: "BJ",
  n: "Benin",
  d: "229"
}, {
  c: "BT",
  n: "Bhutan",
  d: "975"
}, {
  c: "BO",
  n: "Bolivia",
  d: "591"
}, {
  c: "BA",
  n: "Bosnia and Herzegovina",
  d: "387"
}, {
  c: "BW",
  n: "Botswana",
  d: "267"
}, {
  c: "BR",
  n: "Brazil",
  d: "55"
}, {
  c: "BN",
  n: "Brunei",
  d: "673"
}, {
  c: "BG",
  n: "Bulgaria",
  d: "359"
}, {
  c: "BF",
  n: "Burkina Faso",
  d: "226"
}, {
  c: "BI",
  n: "Burundi",
  d: "257"
}, {
  c: "KH",
  n: "Cambodia",
  d: "855"
}, {
  c: "CM",
  n: "Cameroon",
  d: "237"
}, {
  c: "CA",
  n: "Canada",
  d: "1"
}, {
  c: "CV",
  n: "Cape Verde",
  d: "238"
}, {
  c: "CF",
  n: "Central African Republic",
  d: "236"
}, {
  c: "TD",
  n: "Chad",
  d: "235"
}, {
  c: "CL",
  n: "Chile",
  d: "56"
}, {
  c: "CN",
  n: "China",
  d: "86"
}, {
  c: "CO",
  n: "Colombia",
  d: "57"
}, {
  c: "KM",
  n: "Comoros",
  d: "269"
}, {
  c: "CG",
  n: "Congo",
  d: "242"
}, {
  c: "CD",
  n: "Congo (DRC)",
  d: "243"
}, {
  c: "CR",
  n: "Costa Rica",
  d: "506"
}, {
  c: "CI",
  n: "Côte d'Ivoire",
  d: "225"
}, {
  c: "HR",
  n: "Croatia",
  d: "385"
}, {
  c: "CU",
  n: "Cuba",
  d: "53"
}, {
  c: "CY",
  n: "Cyprus",
  d: "357"
}, {
  c: "CZ",
  n: "Czechia",
  d: "420"
}, {
  c: "DK",
  n: "Denmark",
  d: "45"
}, {
  c: "DJ",
  n: "Djibouti",
  d: "253"
}, {
  c: "DM",
  n: "Dominica",
  d: "1767"
}, {
  c: "DO",
  n: "Dominican Republic",
  d: "1809"
}, {
  c: "EC",
  n: "Ecuador",
  d: "593"
}, {
  c: "EG",
  n: "Egypt",
  d: "20"
}, {
  c: "SV",
  n: "El Salvador",
  d: "503"
}, {
  c: "GQ",
  n: "Equatorial Guinea",
  d: "240"
}, {
  c: "ER",
  n: "Eritrea",
  d: "291"
}, {
  c: "EE",
  n: "Estonia",
  d: "372"
}, {
  c: "SZ",
  n: "Eswatini",
  d: "268"
}, {
  c: "ET",
  n: "Ethiopia",
  d: "251"
}, {
  c: "FJ",
  n: "Fiji",
  d: "679"
}, {
  c: "FI",
  n: "Finland",
  d: "358"
}, {
  c: "FR",
  n: "France",
  d: "33"
}, {
  c: "GA",
  n: "Gabon",
  d: "241"
}, {
  c: "GM",
  n: "Gambia",
  d: "220"
}, {
  c: "GE",
  n: "Georgia",
  d: "995"
}, {
  c: "DE",
  n: "Germany",
  d: "49"
}, {
  c: "GH",
  n: "Ghana",
  d: "233"
}, {
  c: "GR",
  n: "Greece",
  d: "30"
}, {
  c: "GD",
  n: "Grenada",
  d: "1473"
}, {
  c: "GT",
  n: "Guatemala",
  d: "502"
}, {
  c: "GN",
  n: "Guinea",
  d: "224"
}, {
  c: "GW",
  n: "Guinea-Bissau",
  d: "245"
}, {
  c: "GY",
  n: "Guyana",
  d: "592"
}, {
  c: "HT",
  n: "Haiti",
  d: "509"
}, {
  c: "HN",
  n: "Honduras",
  d: "504"
}, {
  c: "HK",
  n: "Hong Kong",
  d: "852"
}, {
  c: "HU",
  n: "Hungary",
  d: "36"
}, {
  c: "IS",
  n: "Iceland",
  d: "354"
}, {
  c: "IN",
  n: "India",
  d: "91"
}, {
  c: "ID",
  n: "Indonesia",
  d: "62"
}, {
  c: "IR",
  n: "Iran",
  d: "98"
}, {
  c: "IQ",
  n: "Iraq",
  d: "964"
}, {
  c: "IE",
  n: "Ireland",
  d: "353"
}, {
  c: "IL",
  n: "Israel",
  d: "972"
}, {
  c: "IT",
  n: "Italy",
  d: "39"
}, {
  c: "JM",
  n: "Jamaica",
  d: "1876"
}, {
  c: "JP",
  n: "Japan",
  d: "81"
}, {
  c: "JO",
  n: "Jordan",
  d: "962"
}, {
  c: "KZ",
  n: "Kazakhstan",
  d: "7"
}, {
  c: "KE",
  n: "Kenya",
  d: "254"
}, {
  c: "KI",
  n: "Kiribati",
  d: "686"
}, {
  c: "KW",
  n: "Kuwait",
  d: "965"
}, {
  c: "KG",
  n: "Kyrgyzstan",
  d: "996"
}, {
  c: "LA",
  n: "Laos",
  d: "856"
}, {
  c: "LV",
  n: "Latvia",
  d: "371"
}, {
  c: "LB",
  n: "Lebanon",
  d: "961"
}, {
  c: "LS",
  n: "Lesotho",
  d: "266"
}, {
  c: "LR",
  n: "Liberia",
  d: "231"
}, {
  c: "LY",
  n: "Libya",
  d: "218"
}, {
  c: "LI",
  n: "Liechtenstein",
  d: "423"
}, {
  c: "LT",
  n: "Lithuania",
  d: "370"
}, {
  c: "LU",
  n: "Luxembourg",
  d: "352"
}, {
  c: "MO",
  n: "Macao",
  d: "853"
}, {
  c: "MG",
  n: "Madagascar",
  d: "261"
}, {
  c: "MW",
  n: "Malawi",
  d: "265"
}, {
  c: "MY",
  n: "Malaysia",
  d: "60"
}, {
  c: "MV",
  n: "Maldives",
  d: "960"
}, {
  c: "ML",
  n: "Mali",
  d: "223"
}, {
  c: "MT",
  n: "Malta",
  d: "356"
}, {
  c: "MH",
  n: "Marshall Islands",
  d: "692"
}, {
  c: "MR",
  n: "Mauritania",
  d: "222"
}, {
  c: "MU",
  n: "Mauritius",
  d: "230"
}, {
  c: "MX",
  n: "Mexico",
  d: "52"
}, {
  c: "FM",
  n: "Micronesia",
  d: "691"
}, {
  c: "MD",
  n: "Moldova",
  d: "373"
}, {
  c: "MC",
  n: "Monaco",
  d: "377"
}, {
  c: "MN",
  n: "Mongolia",
  d: "976"
}, {
  c: "ME",
  n: "Montenegro",
  d: "382"
}, {
  c: "MA",
  n: "Morocco",
  d: "212"
}, {
  c: "MZ",
  n: "Mozambique",
  d: "258"
}, {
  c: "MM",
  n: "Myanmar",
  d: "95"
}, {
  c: "NA",
  n: "Namibia",
  d: "264"
}, {
  c: "NR",
  n: "Nauru",
  d: "674"
}, {
  c: "NP",
  n: "Nepal",
  d: "977"
}, {
  c: "NL",
  n: "Netherlands",
  d: "31"
}, {
  c: "NZ",
  n: "New Zealand",
  d: "64"
}, {
  c: "NI",
  n: "Nicaragua",
  d: "505"
}, {
  c: "NE",
  n: "Niger",
  d: "227"
}, {
  c: "NG",
  n: "Nigeria",
  d: "234"
}, {
  c: "KP",
  n: "North Korea",
  d: "850"
}, {
  c: "MK",
  n: "North Macedonia",
  d: "389"
}, {
  c: "NO",
  n: "Norway",
  d: "47"
}, {
  c: "OM",
  n: "Oman",
  d: "968"
}, {
  c: "PK",
  n: "Pakistan",
  d: "92"
}, {
  c: "PW",
  n: "Palau",
  d: "680"
}, {
  c: "PS",
  n: "Palestine",
  d: "970"
}, {
  c: "PA",
  n: "Panama",
  d: "507"
}, {
  c: "PG",
  n: "Papua New Guinea",
  d: "675"
}, {
  c: "PY",
  n: "Paraguay",
  d: "595"
}, {
  c: "PE",
  n: "Peru",
  d: "51"
}, {
  c: "PH",
  n: "Philippines",
  d: "63"
}, {
  c: "PL",
  n: "Poland",
  d: "48"
}, {
  c: "PT",
  n: "Portugal",
  d: "351"
}, {
  c: "QA",
  n: "Qatar",
  d: "974"
}, {
  c: "RO",
  n: "Romania",
  d: "40"
}, {
  c: "RU",
  n: "Russia",
  d: "7"
}, {
  c: "RW",
  n: "Rwanda",
  d: "250"
}, {
  c: "KN",
  n: "Saint Kitts and Nevis",
  d: "1869"
}, {
  c: "LC",
  n: "Saint Lucia",
  d: "1758"
}, {
  c: "VC",
  n: "Saint Vincent and the Grenadines",
  d: "1784"
}, {
  c: "WS",
  n: "Samoa",
  d: "685"
}, {
  c: "SM",
  n: "San Marino",
  d: "378"
}, {
  c: "ST",
  n: "São Tomé and Príncipe",
  d: "239"
}, {
  c: "SA",
  n: "Saudi Arabia",
  d: "966"
}, {
  c: "SN",
  n: "Senegal",
  d: "221"
}, {
  c: "RS",
  n: "Serbia",
  d: "381"
}, {
  c: "SC",
  n: "Seychelles",
  d: "248"
}, {
  c: "SL",
  n: "Sierra Leone",
  d: "232"
}, {
  c: "SG",
  n: "Singapore",
  d: "65"
}, {
  c: "SK",
  n: "Slovakia",
  d: "421"
}, {
  c: "SI",
  n: "Slovenia",
  d: "386"
}, {
  c: "SB",
  n: "Solomon Islands",
  d: "677"
}, {
  c: "SO",
  n: "Somalia",
  d: "252"
}, {
  c: "ZA",
  n: "South Africa",
  d: "27"
}, {
  c: "KR",
  n: "South Korea",
  d: "82"
}, {
  c: "SS",
  n: "South Sudan",
  d: "211"
}, {
  c: "ES",
  n: "Spain",
  d: "34"
}, {
  c: "LK",
  n: "Sri Lanka",
  d: "94"
}, {
  c: "SD",
  n: "Sudan",
  d: "249"
}, {
  c: "SR",
  n: "Suriname",
  d: "597"
}, {
  c: "SE",
  n: "Sweden",
  d: "46"
}, {
  c: "CH",
  n: "Switzerland",
  d: "41"
}, {
  c: "SY",
  n: "Syria",
  d: "963"
}, {
  c: "TW",
  n: "Taiwan",
  d: "886"
}, {
  c: "TJ",
  n: "Tajikistan",
  d: "992"
}, {
  c: "TZ",
  n: "Tanzania",
  d: "255"
}, {
  c: "TH",
  n: "Thailand",
  d: "66"
}, {
  c: "TL",
  n: "Timor-Leste",
  d: "670"
}, {
  c: "TG",
  n: "Togo",
  d: "228"
}, {
  c: "TO",
  n: "Tonga",
  d: "676"
}, {
  c: "TT",
  n: "Trinidad and Tobago",
  d: "1868"
}, {
  c: "TN",
  n: "Tunisia",
  d: "216"
}, {
  c: "TR",
  n: "Türkiye",
  d: "90"
}, {
  c: "TM",
  n: "Turkmenistan",
  d: "993"
}, {
  c: "TV",
  n: "Tuvalu",
  d: "688"
}, {
  c: "UG",
  n: "Uganda",
  d: "256"
}, {
  c: "UA",
  n: "Ukraine",
  d: "380"
}, {
  c: "AE",
  n: "United Arab Emirates",
  d: "971"
}, {
  c: "GB",
  n: "United Kingdom",
  d: "44"
}, {
  c: "US",
  n: "United States",
  d: "1"
}, {
  c: "UY",
  n: "Uruguay",
  d: "598"
}, {
  c: "UZ",
  n: "Uzbekistan",
  d: "998"
}, {
  c: "VU",
  n: "Vanuatu",
  d: "678"
}, {
  c: "VA",
  n: "Vatican City",
  d: "379"
}, {
  c: "VE",
  n: "Venezuela",
  d: "58"
}, {
  c: "VN",
  n: "Vietnam",
  d: "84"
}, {
  c: "YE",
  n: "Yemen",
  d: "967"
}, {
  c: "ZM",
  n: "Zambia",
  d: "260"
}, {
  c: "ZW",
  n: "Zimbabwe",
  d: "263"
}];
/* The operating (home) country — international destinations exclude it. */
var COUNTRY_HOME = "SA";
function COUNTRY_NAME(iso) {
  var x = COUNTRY_LIST.filter(function (c) {
    return c.c === iso;
  })[0];
  return x ? x.n : iso;
}
/* Fill a <select> with every country (optionally minus the home one). */
function COUNTRY_FILL(sel, opts) {
  opts = opts || {};
  sel.innerHTML = '<option value="">' + (opts.placeholder || 'Select country…') + '</option>';
  COUNTRY_LIST.filter(function (c) {
    return !opts.excludeHome || c.c !== COUNTRY_HOME;
  }).forEach(function (c) {
    var o = document.createElement('option');
    o.value = c.c;
    o.textContent = c.n;
    sel.appendChild(o);
  });
  return sel;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/country-data.js", error: String((e && e.message) || e) }); }

// pages/customer-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   CUSTOMER demo dataset + data contract.
   Shared by customers.html, customer-edit.html, customer-view.html.
   In the real app: GET /api/v1/customers.

   ════════════════════════════════════════════════════════════════════════════
   DATA MODEL — Customer  (multi-tenant: every table carries org_id, omitted below)
   ════════════════════════════════════════════════════════════════════════════
   table: customers                       -- the end customer we deliver to
     id              bigint  PK
     public_id       string  unique, "cus_xxxxxx"
     name            string  required                         (اسم العميل)
     phone_primary   string  required                         (الهاتف الأساسي)
     phone_secondary string  nullable                         (هاتف احتياطي)
     created_at / updated_at

   table: customer_addresses              -- a customer has MANY addresses (1:many)
     id            bigint  PK
     customer_id   bigint  FK → customers.id (ON DELETE CASCADE)
     address_line  string  required                 (العنوان التفصيلي)
     address_name  string  nullable                 (اسم العنوان: بيت/عمل…)
     apartment_no  string  nullable                 (رقم الشقة)
     building_no   string  nullable                 (رقم المبنى)
     country_id    bigint  FK → countries.id, required
     city_id       bigint  FK → cities.id, required
                           -- cities.country_id MUST equal this address.country_id
     lat           decimal(9,6)  required   -- map location
     lng           decimal(9,6)  required   -- map location

   VALIDATION (frontend + backend)
     name            : required, 2..120 chars
     phone_primary   : required, min 8 digits
     phone_secondary : optional, if present min 8 digits
     addresses       : at least 1 address required
       address_line  : required per address
       address_name  : optional
       apartment_no  : optional
       building_no   : optional
       country_id    : required
       city_id       : required AND must belong to country_id
       lat/lng       : required; lat ∈ [-90,90], lng ∈ [-180,180]

   ENDPOINTS
     GET/POST/PATCH/DELETE /api/v1/customers[/{public_id}]
     GET /api/v1/countries   ·   GET /api/v1/cities?country_id={id}
   ════════════════════════════════════════════════════════════════════════════ */

/* Reuse the shared country/city lookups (same source as store/driver). */
var CUST_COUNTRIES = [{
  id: 966,
  name: "Saudi Arabia",
  iso2: "SA"
}, {
  id: 971,
  name: "United Arab Emirates",
  iso2: "AE"
}, {
  id: 20,
  name: "Egypt",
  iso2: "EG"
}];
var CUST_CITIES = [{
  id: 101,
  name: "Riyadh",
  country_id: 966
}, {
  id: 102,
  name: "Jeddah",
  country_id: 966
}, {
  id: 103,
  name: "Dammam",
  country_id: 966
}, {
  id: 104,
  name: "Mecca",
  country_id: 966
}, {
  id: 201,
  name: "Dubai",
  country_id: 971
}, {
  id: 202,
  name: "Abu Dhabi",
  country_id: 971
}, {
  id: 203,
  name: "Sharjah",
  country_id: 971
}, {
  id: 301,
  name: "Cairo",
  country_id: 20
}, {
  id: 302,
  name: "Alexandria",
  country_id: 20
}, {
  id: 303,
  name: "Giza",
  country_id: 20
}];
function CUST_CITIES_BY_COUNTRY(cid) {
  return CUST_CITIES.filter(function (c) {
    return String(c.country_id) === String(cid);
  });
}
function CUST_CITY_NAME(id) {
  var c = CUST_CITIES.filter(function (x) {
    return x.id === id;
  })[0];
  return c ? c.name : "—";
}
function CUST_COUNTRY_NAME(id) {
  var c = CUST_COUNTRIES.filter(function (x) {
    return x.id === id;
  })[0];
  return c ? c.name : "—";
}
var CUSTOMERS = [{
  id: "cus_0001",
  name: "Aisha Rahman",
  phone_primary: "+966 50 771 2200",
  phone_secondary: "+966 11 220 7788",
  addresses: [{
    address_line: "King Fahd Rd, Al Olaya, near Kingdom Tower",
    address_name: "Home",
    apartment_no: "12B",
    building_no: "440",
    country_id: 966,
    city_id: 101,
    lat: 24.7113,
    lng: 46.6745
  }, {
    address_line: "Al Malqa business park, tower 3",
    address_name: "Work",
    apartment_no: "902",
    building_no: "3",
    country_id: 966,
    city_id: 101,
    lat: 24.7760,
    lng: 46.6110
  }]
}, {
  id: "cus_0002",
  name: "Youssef Kamal",
  phone_primary: "+966 55 330 1190",
  phone_secondary: "",
  addresses: [{
    address_line: "Corniche Rd, Al Shati district",
    address_name: "Home",
    apartment_no: "",
    building_no: "77",
    country_id: 966,
    city_id: 102,
    lat: 21.5900,
    lng: 39.1300
  }]
}, {
  id: "cus_0003",
  name: "Mariam Adel",
  phone_primary: "+20 100 445 8890",
  phone_secondary: "",
  addresses: [{
    address_line: "Tahrir Square, downtown",
    address_name: "",
    apartment_no: "5",
    building_no: "18",
    country_id: 20,
    city_id: 301,
    lat: null,
    lng: null
  }]
}];
function CUSTOMER_BY_ID(id) {
  return CUSTOMERS.filter(function (c) {
    return c.id === id;
  })[0];
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/customer-data.js", error: String((e && e.message) || e) }); }

// pages/fleet-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   FLEET demo dataset — shared by fleets.html, fleet-edit.html, fleet-detail.html.
   In the real app this is GET /api/v1/fleets.

   DATA MODEL — Fleet
   table: fleets
     id                 bigint   PK
     public_id          string   unique, "flt_xxxxxx"
     name               string   required                 (اسم الأسطول)
     type               enum     [internal, external] required   (النوع)
     contact_name       string   nullable                 (اسم المسؤول)
     contact_phone      string   nullable                 (هاتف المسؤول)
     control_center_no  string   nullable                 (رقم غرفة التحكم)
     metadata           jsonb    -- custom Forms-module fields (entity_type='fleet')
     created_at         datetime
     updated_at         datetime

   FLEET ↔ USERS (one fleet has MANY users; a fleet-user belongs to ONE fleet)
     -- Modeled on the user side: users.fleet_id (nullable, FK → fleets.id),
     -- set only for users whose type = 'fleet'. So the relationship is 1:many
     -- (fleet → users), and a fleet-type user is assignable to at most one fleet.
     -- The edit form offers fleet-type users that are NOT already assigned
     -- (plus the ones already on THIS fleet when editing).
     -- Endpoint: GET /api/v1/users?type=fleet&unassigned=true
   ════════════════════════════════════════════════════════════════════════════ */

/* type enum → label + tone */
var FLEET_TYPES = [{
  value: "internal",
  label: "Internal"
}, {
  value: "external",
  label: "External"
}];
function FLEET_TYPE_LABEL(v) {
  var m = FLEET_TYPES.filter(function (t) {
    return t.value === v;
  })[0];
  return m ? m.label : v;
}
var FLEET_TYPE_TONE = {
  internal: "info",
  external: "neutral"
};

/* Fleet-type users. fleet_id != null → already assigned (excluded from pickers,
   except the fleet currently being edited). GET /api/v1/users?type=fleet */
var FLEET_USERS = [{
  id: 6001,
  name: "Mona Adel",
  email: "mona.adel@swift.test",
  fleet_id: 81
}, {
  id: 6002,
  name: "Tarek Sami",
  email: "tarek.sami@swift.test",
  fleet_id: 81
}, {
  id: 6003,
  name: "Dina Fouad",
  email: "dina.fouad@swift.test",
  fleet_id: 82
}, {
  id: 6004,
  name: "Hassan Ali",
  email: "hassan.ali@swift.test",
  fleet_id: 83
}, {
  id: 6005,
  name: "Rania Maher",
  email: "rania.maher@swift.test",
  fleet_id: null
}, {
  id: 6006,
  name: "Sami Nabil",
  email: "sami.nabil@swift.test",
  fleet_id: null
}, {
  id: 6007,
  name: "Lina Tarek",
  email: "lina.tarek@swift.test",
  fleet_id: null
}, {
  id: 6008,
  name: "Karim Adel",
  email: "karim.adel@swift.test",
  fleet_id: null
}];
function FLEET_USERS_BY_IDS(ids) {
  return FLEET_USERS.filter(function (u) {
    return (ids || []).indexOf(u.id) >= 0;
  });
}
/* available for assignment to fleet `fleetId` = unassigned + those already on it */
function FLEET_USERS_AVAILABLE(fleetId) {
  return FLEET_USERS.filter(function (u) {
    return u.fleet_id == null || u.fleet_id === fleetId;
  });
}
var FLEETS = [{
  id: "flt_ryd001",
  name: "Riyadh Fleet",
  type: "internal",
  is_default: true,
  contact_name: "Mona Adel",
  contact_phone: "+966 50 660 1180",
  control_center_no: "+966 11 200 7788",
  user_ids: [6001, 6002]
}, {
  id: "flt_jed002",
  name: "Jeddah Fleet",
  type: "internal",
  is_default: false,
  contact_name: "Dina Fouad",
  contact_phone: "+966 55 771 9920",
  control_center_no: "+966 12 300 4455",
  user_ids: [6003]
}, {
  id: "flt_dmm003",
  name: "Dammam Fleet",
  type: "internal",
  is_default: false,
  contact_name: "Hassan Ali",
  contact_phone: "+966 53 884 2031",
  control_center_no: "+966 13 400 1122",
  user_ids: [6004]
}, {
  id: "flt_exp004",
  name: "Express Couriers",
  type: "external",
  is_default: false,
  contact_name: "Omar Z.",
  contact_phone: "+966 56 110 3345",
  control_center_no: "+966 11 990 6677",
  user_ids: []
}];
function FLEET_BY_ID(id) {
  return FLEETS.filter(function (f) {
    return f.id === id;
  })[0];
}
/* The org's default fleet — new drivers/trucks are pre-assigned to it. Exactly
   one fleet has is_default=true (enforce a partial-unique index server-side:
   UNIQUE(org_id) WHERE is_default). */
function FLEET_DEFAULT() {
  return FLEETS.filter(function (f) {
    return f.is_default;
  })[0] || null;
}

/* fleet id (numeric 81..) used by users.fleet_id ↔ public_id map, for the demo. */
var FLEET_NUMID = {
  flt_ryd001: 81,
  flt_jed002: 82,
  flt_dmm003: 83,
  flt_exp004: 84
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/fleet-data.js", error: String((e && e.message) || e) }); }

// pages/forms-store.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   FORMS MODULE — shared store + data contract.   (v2 — multi-tenant)

   Shared by:
     • forms.html         (builder — defines custom fields per entity)
     • driver-edit.html   (consumer — renders custom fields, writes metadata)
     • driver-detail.html (consumer — reads metadata, shows custom values)

   Persistence here is localStorage so the prototype loop works end-to-end.
   Replace each method body with the matching API call.

   ════════════════════════════════════════════════════════════════════════════
   ⚠ MULTI-TENANCY — READ THIS BEFORE BUILDING THE BACKEND
   ════════════════════════════════════════════════════════════════════════════
   Every form definition and every custom field belongs to ONE organization
   (tenant / company). A field's `stored_key` is UNIQUE PER ORGANIZATION — two
   different companies can both define a field keyed "residence_no" without
   clashing, but within a single company a key may exist only once for a given
   entity form. The key is GENERATED FROM THE ENGLISH label (ASCII slug); the
   Arabic label is display-only and never used for the key.

   ────────────────────────────────────────────────────────────────────────────
   DATABASE SCHEMA (target)
   ────────────────────────────────────────────────────────────────────────────
   TABLE organizations
     id              bigint   PK
     name            string

   TABLE form_definitions                        -- one row per (org, entity)
     id              bigint   PK
     org_id          bigint   FK → organizations.id      ← TENANT SCOPE
     entity_type     enum     [driver,truck,fleet,user,place,vendor,service_area]
     name            string
     created_at      datetime
     updated_at      datetime
     UNIQUE (org_id, entity_type)                -- one form per entity per org

   TABLE form_fields                             -- the custom fields admins add
     id              bigint   PK
     form_id         bigint   FK → form_definitions.id  (ON DELETE CASCADE)
     stored_key      string   slug, GENERATED FROM label_en (ASCII, snake_case)
     label_en        string   required  (English — drives stored_key)
     label_ar        string   required  (Arabic  — display only)
     type            enum     [text, checkbox, attach]
     is_mandatory    boolean  default false
     show_in_edit    boolean  default true     -- render on create/edit
     show_in_detail  boolean  default true     -- render on the detail page
     min_len         int      nullable   -- type=text only
     max_len         int      nullable   -- type=text only
     accept_types    json     nullable   -- type=attach only: array of MIME keys
                                            (see MEDIA_TYPES). [] / null = any.
     sort_order      int      default 0
     created_at      datetime
     -- TENANT-SCOPED UNIQUENESS. Because form_id already implies one org+entity,
     -- this constraint guarantees the key is unique within the company:
     UNIQUE (form_id, stored_key)

   METADATA STORAGE (on the owning entity)
     drivers.metadata   jsonb   -- { "<stored_key>": <value>, ... }
     trucks.metadata    jsonb
     …every entity that can carry a custom form gets a `metadata` jsonb column,
     scoped naturally by the row's own org_id. On create/update: read the org's
     form_fields for the entity, collect + validate each value, persist the map
     into <entity>.metadata. On detail/edit: read form_fields + metadata.
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── Current organization (tenant). In the app this comes from the session /
        the org switcher; here it's a stored id so the prototype is scoped too. ── */
  function currentOrg() {
    try {
      return localStorage.getItem("fleet_org_id") || "org_swift";
    } catch (e) {
      return "org_swift";
    }
  }
  function setOrg(id) {
    try {
      localStorage.setItem("fleet_org_id", id);
    } catch (e) {}
  }

  /* The entity types a form can be built for. value = entity_type enum. */
  var ENTITIES = [{
    key: "driver",
    label: "Driver",
    icon: "user",
    table: "drivers"
  }, {
    key: "truck",
    label: "Truck",
    icon: "truck",
    table: "trucks"
  }, {
    key: "fleet",
    label: "Fleet",
    icon: "grid",
    table: "fleets"
  }, {
    key: "user",
    label: "User",
    icon: "users",
    table: "users"
  }, {
    key: "vendor",
    label: "Store",
    icon: "package",
    table: "vendors"
  }, {
    key: "service_area",
    label: "Service Area",
    icon: "map",
    table: "service_areas"
  }];

  /* Built-in (native) columns per entity — already part of the core schema. */
  var BUILTINS = {
    driver: [{
      key: "name",
      label: "Full name",
      type: "text",
      required: true
    }, {
      key: "internal_code",
      label: "Internal ID",
      type: "text",
      required: true,
      note: "auto"
    }, {
      key: "phone",
      label: "Phone",
      type: "text",
      required: true
    }, {
      key: "license_no",
      label: "License number",
      type: "text",
      required: true
    }, {
      key: "license_expiry",
      label: "License expiry",
      type: "date",
      required: true
    }, {
      key: "vendor_id",
      label: "Vendor",
      type: "fk",
      required: false
    }, {
      key: "fleet_id",
      label: "Fleet",
      type: "fk",
      required: false
    }, {
      key: "vehicle_id",
      label: "Vehicle",
      type: "fk",
      required: false
    }, {
      key: "country_id",
      label: "Country",
      type: "fk",
      required: true
    }, {
      key: "city_id",
      label: "City",
      type: "fk",
      required: true
    }, {
      key: "status",
      label: "Status",
      type: "enum",
      required: true
    }, {
      key: "service_area_id",
      label: "Service area",
      type: "fk",
      required: false
    }, {
      key: "user_id",
      label: "Linked user",
      type: "fk",
      required: false
    }],
    truck: [{
      key: "plate",
      label: "Plate",
      type: "text",
      required: true
    }, {
      key: "make_model",
      label: "Make / Model",
      type: "text",
      required: true
    }, {
      key: "type",
      label: "Type",
      type: "enum",
      required: true
    }, {
      key: "year",
      label: "Year",
      type: "int",
      required: false
    }, {
      key: "capacity_kg",
      label: "Capacity (kg)",
      type: "int",
      required: false
    }, {
      key: "color",
      label: "Color",
      type: "text",
      required: false
    }, {
      key: "reg_expiry",
      label: "Registration expiry",
      type: "date",
      required: false
    }, {
      key: "insurance_no",
      label: "Insurance no.",
      type: "text",
      required: false
    }, {
      key: "status",
      label: "Status",
      type: "enum",
      required: true
    }, {
      key: "fleet_id",
      label: "Fleet",
      type: "fk",
      required: false
    }, {
      key: "vendor_id",
      label: "Vendor",
      type: "fk",
      required: false
    }, {
      key: "driver_id",
      label: "Assigned driver",
      type: "fk",
      required: false
    }],
    fleet: [{
      key: "name",
      label: "Fleet name",
      type: "text",
      required: true
    }, {
      key: "type",
      label: "Type",
      type: "enum",
      required: true
    }, {
      key: "contact_name",
      label: "Contact name",
      type: "text",
      required: false
    }, {
      key: "contact_phone",
      label: "Contact phone",
      type: "text",
      required: false
    }, {
      key: "control_center_no",
      label: "Control center number",
      type: "text",
      required: false
    }, {
      key: "user_ids",
      label: "Fleet users",
      type: "fk_many",
      required: false
    }],
    user: [{
      key: "full_name",
      label: "Full name",
      type: "text",
      required: true
    }, {
      key: "email",
      label: "Email",
      type: "text",
      required: true
    }, {
      key: "type",
      label: "Type",
      type: "enum",
      required: true
    }, {
      key: "phone",
      label: "Phone",
      type: "text",
      required: false
    }],
    place: [{
      key: "name",
      label: "Name",
      type: "text",
      required: true
    }, {
      key: "lat",
      label: "Latitude",
      type: "float",
      required: true
    }, {
      key: "lng",
      label: "Longitude",
      type: "float",
      required: true
    }, {
      key: "city_id",
      label: "City",
      type: "fk",
      required: false
    }],
    vendor: [{
      key: "name",
      label: "Name",
      type: "text",
      required: true
    }, {
      key: "contact_name",
      label: "Contact",
      type: "text",
      required: false
    }, {
      key: "phone",
      label: "Phone",
      type: "text",
      required: false
    }],
    service_area: [{
      key: "name",
      label: "Name",
      type: "text",
      required: true
    }, {
      key: "city_id",
      label: "City",
      type: "fk",
      required: false
    }, {
      key: "is_active",
      label: "Active",
      type: "boolean",
      required: false
    }]
  };

  /* The custom field types an admin can add. */
  var FIELD_TYPES = [{
    key: "text",
    label: "Text",
    icon: "edit",
    hasMinMax: true,
    hasAccept: false
  }, {
    key: "checkbox",
    label: "Checkbox",
    icon: "check",
    hasMinMax: false,
    hasAccept: false
  }, {
    key: "attach",
    label: "Attachment",
    icon: "upload",
    hasMinMax: false,
    hasAccept: true
  }];

  /* ── Media types for the Attachment "Allowed file types" dropdown ──────────
     value (key) = MIME type stored in form_fields.accept_types[].
     ext = extensions mapped onto the <input accept="…"> attribute at render. */
  var MEDIA_TYPES = [{
    group: "Images",
    items: [{
      key: "image/jpeg",
      label: "JPEG image",
      ext: ".jpg,.jpeg"
    }, {
      key: "image/png",
      label: "PNG image",
      ext: ".png"
    }, {
      key: "image/gif",
      label: "GIF image",
      ext: ".gif"
    }, {
      key: "image/webp",
      label: "WebP image",
      ext: ".webp"
    }, {
      key: "image/svg+xml",
      label: "SVG image",
      ext: ".svg"
    }, {
      key: "image/heic",
      label: "HEIC image",
      ext: ".heic"
    }]
  }, {
    group: "Documents",
    items: [{
      key: "application/pdf",
      label: "PDF",
      ext: ".pdf"
    }, {
      key: "application/msword",
      label: "Word (.doc)",
      ext: ".doc"
    }, {
      key: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      label: "Word (.docx)",
      ext: ".docx"
    }, {
      key: "application/vnd.ms-excel",
      label: "Excel (.xls)",
      ext: ".xls"
    }, {
      key: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      label: "Excel (.xlsx)",
      ext: ".xlsx"
    }, {
      key: "application/vnd.ms-powerpoint",
      label: "PowerPoint (.ppt)",
      ext: ".ppt"
    }, {
      key: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      label: "PowerPoint (.pptx)",
      ext: ".pptx"
    }, {
      key: "text/plain",
      label: "Text (.txt)",
      ext: ".txt"
    }, {
      key: "text/csv",
      label: "CSV",
      ext: ".csv"
    }]
  }, {
    group: "Video",
    items: [{
      key: "video/mp4",
      label: "MP4 video",
      ext: ".mp4"
    }, {
      key: "video/quicktime",
      label: "QuickTime (.mov)",
      ext: ".mov"
    }, {
      key: "video/webm",
      label: "WebM video",
      ext: ".webm"
    }, {
      key: "video/x-msvideo",
      label: "AVI video",
      ext: ".avi"
    }]
  }, {
    group: "Audio",
    items: [{
      key: "audio/mpeg",
      label: "MP3 audio",
      ext: ".mp3"
    }, {
      key: "audio/wav",
      label: "WAV audio",
      ext: ".wav"
    }, {
      key: "audio/ogg",
      label: "OGG audio",
      ext: ".ogg"
    }]
  }, {
    group: "Archives",
    items: [{
      key: "application/zip",
      label: "ZIP archive",
      ext: ".zip"
    }, {
      key: "application/x-rar-compressed",
      label: "RAR archive",
      ext: ".rar"
    }, {
      key: "application/x-7z-compressed",
      label: "7z archive",
      ext: ".7z"
    }]
  }];
  var MEDIA_FLAT = MEDIA_TYPES.reduce(function (a, g) {
    return a.concat(g.items);
  }, []);
  function mediaByKey(k) {
    return MEDIA_FLAT.filter(function (m) {
      return m.key === k;
    })[0];
  }
  function acceptAttr(keys) {
    if (!keys || !keys.length) return "";
    return keys.map(function (k) {
      var m = mediaByKey(k);
      return m ? m.ext : "";
    }).filter(Boolean).join(",");
  }
  function mediaLabel(k) {
    var m = mediaByKey(k);
    return m ? m.label : k;
  }
  var LS_FIELDS = "fleet_forms_fields_v2"; // { org_id: { entity_type: [field,...] } }
  var LS_META = "fleet_entity_meta"; // { entity_type: { record_id: {key:val} } }

  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch (e) {
      return {};
    }
  }
  function write(key, v) {
    try {
      localStorage.setItem(key, JSON.stringify(v));
    } catch (e) {}
  }

  /* ASCII slug from the ENGLISH label → stored_key (snake_case). */
  function slug(s) {
    return (s || "").toString().trim().toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "") || "field_" + Date.now();
  }
  function orgFields(orgId) {
    var all = read(LS_FIELDS);
    return all[orgId] || {};
  }
  var FormsStore = {
    entities: ENTITIES,
    fieldTypes: FIELD_TYPES,
    mediaTypes: MEDIA_TYPES,
    currentOrg: currentOrg,
    setOrg: setOrg,
    entityMeta: function (key) {
      return ENTITIES.filter(function (e) {
        return e.key === key;
      })[0];
    },
    builtins: function (entityType) {
      return (BUILTINS[entityType] || []).slice();
    },
    typeMeta: function (t) {
      return FIELD_TYPES.filter(function (x) {
        return x.key === t;
      })[0];
    },
    acceptAttr: acceptAttr,
    mediaLabel: mediaLabel,
    slug: slug,
    /* GET /api/v1/forms/{entity_type}/fields   (scoped to the caller's org) */
    customFields: function (entityType, orgId) {
      orgId = orgId || currentOrg();
      var byEntity = orgFields(orgId);
      return (byEntity[entityType] || []).slice().sort(function (a, b) {
        return (a.sort_order || 0) - (b.sort_order || 0);
      });
    },
    /* Is a stored_key already used in this org+entity (excluding `exceptId`)? */
    isKeyTaken: function (entityType, key, exceptId, orgId) {
      return this.customFields(entityType, orgId).some(function (f) {
        return f.stored_key === key && f.id !== exceptId;
      });
    },
    /* Generate a unique ASCII key from the English label within this org+entity. */
    uniqueKey: function (entityType, labelEn, exceptId, orgId) {
      var base = slug(labelEn),
        k = base,
        i = 2;
      while (this.isKeyTaken(entityType, k, exceptId, orgId)) {
        k = base + "_" + i;
        i++;
      }
      return k;
    },
    /* POST/PATCH /api/v1/forms/{entity_type}/fields */
    saveField: function (entityType, field, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_FIELDS);
      all[orgId] = all[orgId] || {};
      var list = all[orgId][entityType] || [];
      if (field.id) {
        list = list.map(function (f) {
          return f.id === field.id ? field : f;
        });
      } else {
        field.id = "fld_" + Date.now();
        field.sort_order = list.length;
        list.push(field);
      }
      all[orgId][entityType] = list;
      write(LS_FIELDS, all);
      return field;
    },
    /* DELETE /api/v1/forms/{entity_type}/fields/{id} */
    deleteField: function (entityType, id, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_FIELDS);
      if (all[orgId]) all[orgId][entityType] = (all[orgId][entityType] || []).filter(function (f) {
        return f.id !== id;
      });
      write(LS_FIELDS, all);
    },
    /* metadata on a specific record — <entity>.metadata jsonb */
    getMeta: function (entityType, recordId) {
      var all = read(LS_META);
      return all[entityType] && all[entityType][recordId] || {};
    },
    saveMeta: function (entityType, recordId, values) {
      var all = read(LS_META);
      all[entityType] = all[entityType] || {};
      all[entityType][recordId] = values;
      write(LS_META, all);
    }
  };
  window.FormsStore = FormsStore;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/forms-store.js", error: String((e && e.message) || e) }); }

// pages/gmaps.js
try { (() => {
/* ═════════════════════════════════════════════════════════════════
   Google Maps loader — shared across the console.
   Usage:  window.fleetLoadMap().then(function(google){ … });
   Renders a real Google Map wherever a host element is passed to
   fleetInitMap(el, opts). Key is injected once; repeated calls reuse
   the same in-flight promise.

   BACKEND / CONFIG NOTE
   ─────────────────────
   • The Maps JS API key must be allow-listed for the app's domain(s)
     (HTTP referrer restriction) AND have "Maps JavaScript API" enabled
     with billing on the GCP project. In the design-system preview the
     page is served from a sandbox origin, so Google may return
     RefererNotAllowedMapError / show a "development only" watermark —
     that is a key-config issue, not a code one. Swap the key or add the
     preview origin to the referrer allow-list to clear it.
   • Store the key server-side / in an env var for the real app; it is
     inlined here only for the prototype.
   ═════════════════════════════════════════════════════════════════ */
(function () {
  var KEY = 'AIzaSyD4cT14FheqMnb4RdZMou4z7SaCZVEv_1k';
  var _promise = null;
  window.fleetLoadMap = function () {
    if (_promise) return _promise;
    _promise = new Promise(function (resolve, reject) {
      if (window.google && window.google.maps) {
        resolve(window.google);
        return;
      }
      window.__fleetMapReady = function () {
        resolve(window.google);
      };
      var s = document.createElement('script');
      s.src = 'https://maps.googleapis.com/maps/api/js?key=' + KEY + '&callback=__fleetMapReady&libraries=marker';
      s.async = true;
      s.defer = true;
      s.onerror = function () {
        reject(new Error('Google Maps failed to load — check the API key / referrer allow-list.'));
      };
      document.head.appendChild(s);
    });
    return _promise;
  };

  /* Dark map style matching the console theme (applied when data-theme=dark). */
  window.FLEET_MAP_DARK = [{
    elementType: 'geometry',
    stylers: [{
      color: '#0e1420'
    }]
  }, {
    elementType: 'labels.text.stroke',
    stylers: [{
      color: '#0e1420'
    }]
  }, {
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#8aa0bd'
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{
      color: '#1c2740'
    }]
  }, {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{
      color: '#131c2e'
    }]
  }, {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{
      color: '#0a1a2e'
    }]
  }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{
      color: '#152036'
    }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{
      color: '#12241c'
    }]
  }, {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{
      color: '#22314f'
    }]
  }];

  /* Convenience: init a map in `el`, return the map instance. opts: {center,zoom} */
  window.fleetInitMap = function (el, opts) {
    opts = opts || {};
    var dark = document.documentElement.getAttribute('data-theme') !== 'light';
    return new google.maps.Map(el, {
      center: opts.center || {
        lat: 24.7136,
        lng: 46.6753
      },
      // Riyadh
      zoom: opts.zoom || 11,
      disableDefaultUI: opts.disableDefaultUI !== false,
      gestureHandling: opts.gestureHandling || 'greedy',
      styles: dark ? window.FLEET_MAP_DARK : null
    });
  };

  /* ── Shared service-zone store ─────────────────────────────────────────────
     Service areas drawn on the Service Areas page persist here (lat/lng polygons)
     and are read by the Dashboard map layer, so the two stay in sync. Seeded once
     from the demo SERVICE_AREAS (box coords → lat/lng) on the first page that has
     that dataset loaded. BACKEND: this maps to a `service_areas` table with a
     GEOGRAPHY(POLYGON) column; the UI reads/writes GeoJSON. */
  window.ServiceZones = {
    KEY: 'fleet_service_zones',
    _seeded: false,
    boxToLatLng: function (p) {
      return {
        lat: 24.9 - p.y / 100 * 0.5,
        lng: 46.5 + p.x / 100 * 0.5
      };
    },
    all: function () {
      this._seed();
      try {
        return JSON.parse(localStorage.getItem(this.KEY)) || [];
      } catch (e) {
        return [];
      }
    },
    save: function (list) {
      try {
        localStorage.setItem(this.KEY, JSON.stringify(list));
      } catch (e) {}
    },
    add: function (z) {
      var l = this.all();
      l.push(z);
      this.save(l);
      return z;
    },
    remove: function (id) {
      this.save(this.all().filter(function (z) {
        return z.id !== id;
      }));
    },
    update: function (id, patch) {
      this.save(this.all().map(function (z) {
        return z.id === id ? Object.assign(z, patch) : z;
      }));
    },
    _seed: function () {
      if (this._seeded) return;
      this._seeded = true;
      try {
        if (localStorage.getItem(this.KEY)) return;
      } catch (e) {
        return;
      }
      if (typeof SERVICE_AREAS === 'undefined') return;
      var self = this;
      this.save(SERVICE_AREAS.map(function (a) {
        return {
          id: a.id,
          name: a.name,
          name_i18n: a.name_i18n || null,
          color: a.color || '#3485e2',
          fee: a.delivery_fee || 0,
          currency: a.currency || 'SAR',
          country_id: a.country_id,
          city_id: a.city_id,
          is_active: a.is_active !== false,
          path: (a.polygon || []).map(function (p) {
            return self.boxToLatLng(p);
          })
        };
      }));
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/gmaps.js", error: String((e && e.message) || e) }); }

// pages/hub-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   HUB (warehouse / مستودع) demo data + contract.
   Shared by hubs.html, hub-edit.html, hub-view.html.  GET /api/v1/hubs.

   DATA MODEL  (multi-tenant: every table carries org_id, omitted below)
   table: hubs
     id            bigint  PK
     public_id     string  unique, "hub_xxxxxx"
     name          string  required                     (اسم المستودع)
     code          string  required, unique per org, MANUAL (admin types it)
     address_line  string  required                     (العنوان الكامل)
     country_id    bigint  FK → countries.id, required
     city_id       bigint  FK → cities.id, required (cities.country_id == country_id)
     lat           decimal(9,6) required                (الموقع)
     lng           decimal(9,6) required
     created_at / updated_at

   VALIDATION (frontend + backend)
     name         : required
     code         : required, unique per org (admin-entered, not auto)
     address_line : required
     country_id   : required ; city_id : required & belongs to country
     lat / lng    : required
   ENDPOINTS  GET/POST/PATCH/DELETE /api/v1/hubs[/{public_id}]
              GET /api/v1/countries · GET /api/v1/cities?country_id={id}
   ════════════════════════════════════════════════════════════════════════════ */

var HUB_COUNTRIES = [{
  id: 966,
  name: "Saudi Arabia",
  iso2: "SA"
}, {
  id: 971,
  name: "United Arab Emirates",
  iso2: "AE"
}, {
  id: 20,
  name: "Egypt",
  iso2: "EG"
}];
var HUB_CITIES = [{
  id: 101,
  name: "Riyadh",
  country_id: 966
}, {
  id: 102,
  name: "Jeddah",
  country_id: 966
}, {
  id: 103,
  name: "Dammam",
  country_id: 966
}, {
  id: 104,
  name: "Mecca",
  country_id: 966
}, {
  id: 201,
  name: "Dubai",
  country_id: 971
}, {
  id: 202,
  name: "Abu Dhabi",
  country_id: 971
}, {
  id: 301,
  name: "Cairo",
  country_id: 20
}, {
  id: 302,
  name: "Alexandria",
  country_id: 20
}];
function HUB_CITIES_BY_COUNTRY(cid) {
  return HUB_CITIES.filter(function (c) {
    return String(c.country_id) === String(cid);
  });
}
function HUB_CITY_NAME(id) {
  var c = HUB_CITIES.filter(function (x) {
    return x.id === id;
  })[0];
  return c ? c.name : '—';
}
function HUB_COUNTRY_NAME(id) {
  var c = HUB_COUNTRIES.filter(function (x) {
    return x.id === id;
  })[0];
  return c ? c.name : '—';
}
var HUBS = [{
  id: "hub_0001",
  name: "Riyadh Central Warehouse",
  code: "RUH-WH-01",
  address_line: "Exit 18, Eastern Ring Rd, Al Rimal",
  country_id: 966,
  city_id: 101,
  lat: 24.7743,
  lng: 46.7386
}, {
  id: "hub_0002",
  name: "Jeddah Hub",
  code: "JED-WH-01",
  address_line: "Industrial Area 2, King Abdullah Rd",
  country_id: 966,
  city_id: 102,
  lat: 21.5433,
  lng: 39.1728
}, {
  id: "hub_0003",
  name: "Dammam Depot",
  code: "DMM-WH-01",
  address_line: "Second Industrial City, Gate 4",
  country_id: 966,
  city_id: 103,
  lat: 26.3927,
  lng: 49.9777
}];
function HUB_BY_ID(id) {
  return HUBS.filter(function (h) {
    return h.id === id;
  })[0];
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/hub-data.js", error: String((e && e.message) || e) }); }

// pages/i18n-store.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   LOCALIZATION MODULE — base catalog + languages store + validation engine.

   Shared by languages.html (the admin module). Persistence is localStorage so
   the prototype works; swap each method for the matching API call.

   ════════════════════════════════════════════════════════════════════════════
   HOW LANGUAGES WORK (read before building the backend)
   ════════════════════════════════════════════════════════════════════════════
   • BASE languages = English (en) + Arabic (ar). They ship INSIDE the frontend
     bundle (e.g. /src/locales/en.json, ar.json). They are NEVER stored in the
     DB and are always available offline. `en` is the SOURCE OF TRUTH — its key
     set defines what every other language must provide.

   • CUSTOM languages are added PER ORGANIZATION (tenant). An org admin adds a
     language, downloads the base file as a starting point, translates it, and
     uploads it back. The backend validates the upload (see VALIDATION) and
     stores the translations. A custom language only reaches end users once it
     is PUBLISHED (status = 'active').

   • FRONTEND LOADING: on app start the frontend loads the active locales for the
     current org over GET /api/v1/orgs/{org}/locales?active=1 and caches them in
     localStorage with a TTL (default 24h, configurable up to ~48h). Within TTL
     it reads from cache; past TTL it refetches. Base en/ar are bundled, so the
     app is always usable even if the network/locale fetch fails.

   ────────────────────────────────────────────────────────────────────────────
   DATABASE SCHEMA (target)
   ────────────────────────────────────────────────────────────────────────────
   TABLE org_languages                          -- custom languages per tenant
     id              bigint   PK
     org_id          bigint   FK → organizations.id      ← TENANT SCOPE
     code            string   BCP-47 (e.g. "fr", "ur", "tr")   (lowercase)
     name            string   English name  (e.g. "French")
     native_name     string   endonym       (e.g. "Français")
     direction       enum     [ltr, rtl]
     status          enum     [draft, active]  default draft   -- active = published
     completeness    int      0..100  (cached % of base keys translated)
     created_at      datetime
     updated_at      datetime
     UNIQUE (org_id, code)                       -- one entry per language per org
     -- NOTE: code ∈ {en, ar} is reserved (base) and never inserted here.

   TABLE translation_entries                     -- the actual strings
     id              bigint   PK
     language_id     bigint   FK → org_languages.id  (ON DELETE CASCADE)
     key             string   dotted path, matches a base key (e.g. "drivers.title")
     value           text     translated string
     UNIQUE (language_id, key)
     -- Stored flattened; the upload/download file is NESTED JSON by namespace.

   CACHE (frontend localStorage)
     key:  i18n.<org_id>.<code>           value: { v:<hash>, exp:<ts>, data:{…} }
     The app checks exp; if now > exp it refetches and rewrites with a new exp.
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function currentOrg() {
    try {
      return localStorage.getItem("fleet_org_id") || "org_swift";
    } catch (e) {
      return "org_swift";
    }
  }

  /* ── BASE CATALOG (en = source of truth, ar = base translation) ────────────
     NESTED by namespace. In the real app these are bundled JSON files. The key
     set of `en` is what every uploaded language is validated against. */
  var BASE = {
    en: {
      common: {
        save: "Save",
        cancel: "Cancel",
        delete: "Delete",
        edit: "Edit",
        create: "Create",
        search: "Search",
        export: "Export",
        import: "Import",
        loading: "Loading…",
        yes: "Yes",
        no: "No"
      },
      nav: {
        dashboard: "Dashboard",
        drivers: "Drivers",
        vehicles: "Vehicles",
        fleets: "Fleets",
        vendors: "Stores",
        forms: "Forms",
        languages: "Languages",
        settings: "Settings"
      },
      drivers: {
        title: "Drivers",
        subtitle: "Manage the people delivering your orders.",
        newDriver: "New Driver",
        deleteConfirm: "This removes {name} and unassigns their vehicle."
      },
      vehicles: {
        title: "Vehicles",
        subtitle: "Trucks, vans and bikes across your fleets.",
        newVehicle: "New Vehicle",
        assignedDriver: "Assigned driver"
      },
      status: {
        online: "Online",
        busy: "Busy",
        offline: "Offline",
        pending: "Pending",
        active: "Active",
        maintenance: "In maintenance",
        inactive: "Inactive"
      },
      validation: {
        required: "{field} is required.",
        min: "Must be at least {min} characters.",
        max: "Must be at most {max} characters.",
        invalidPhone: "Enter a valid phone number."
      }
    },
    ar: {
      common: {
        save: "حفظ",
        cancel: "إلغاء",
        delete: "حذف",
        edit: "تعديل",
        create: "إنشاء",
        search: "بحث",
        export: "تصدير",
        import: "استيراد",
        loading: "جارٍ التحميل…",
        yes: "نعم",
        no: "لا"
      },
      nav: {
        dashboard: "لوحة التحكم",
        drivers: "السائقون",
        vehicles: "المركبات",
        fleets: "الأساطيل",
        vendors: "المتاجر",
        forms: "النماذج",
        languages: "اللغات",
        settings: "الإعدادات"
      },
      drivers: {
        title: "السائقون",
        subtitle: "إدارة الأشخاص الذين يوصّلون طلباتك.",
        newDriver: "سائق جديد",
        deleteConfirm: "سيؤدي هذا إلى إزالة {name} وإلغاء تعيين مركبته."
      },
      vehicles: {
        title: "المركبات",
        subtitle: "الشاحنات والفانات والدراجات في أساطيلك.",
        newVehicle: "مركبة جديدة",
        assignedDriver: "السائق المعيّن"
      },
      status: {
        online: "متصل",
        busy: "مشغول",
        offline: "غير متصل",
        pending: "قيد الانتظار",
        active: "نشط",
        maintenance: "في الصيانة",
        inactive: "غير نشط"
      },
      validation: {
        required: "{field} مطلوب.",
        min: "يجب ألا يقل عن {min} حرفًا.",
        max: "يجب ألا يزيد عن {max} حرفًا.",
        invalidPhone: "أدخل رقم هاتف صحيح."
      }
    }
  };

  /* The base/built-in languages — always present, not in the DB. */
  var BASE_LANGS = [{
    code: "en",
    name: "English",
    native_name: "English",
    direction: "ltr",
    base: true
  }, {
    code: "ar",
    name: "Arabic",
    native_name: "العربية",
    direction: "rtl",
    base: true
  }];

  /* ── Key helpers (flatten / unflatten nested namespaced JSON) ─────────────── */
  function flatten(obj, prefix, out) {
    out = out || {};
    prefix = prefix || "";
    for (var k in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      var key = prefix ? prefix + "." + k : k;
      if (obj[k] && typeof obj[k] === "object" && !Array.isArray(obj[k])) flatten(obj[k], key, out);else out[key] = obj[k];
    }
    return out;
  }
  function unflatten(flat) {
    var out = {};
    for (var key in flat) {
      var parts = key.split("."),
        node = out;
      for (var i = 0; i < parts.length - 1; i++) {
        node[parts[i]] = node[parts[i]] || {};
        node = node[parts[i]];
      }
      node[parts[parts.length - 1]] = flat[key];
    }
    return out;
  }
  var BASE_FLAT = flatten(BASE.en);
  var BASE_KEYS = Object.keys(BASE_FLAT);

  /* placeholders like {name} {min} inside a string */
  function placeholders(s) {
    var m = String(s == null ? "" : s).match(/\{[a-z0-9_]+\}/gi) || [];
    return m.sort();
  }

  /* ── Validation engine ─────────────────────────────────────────────────────
     Runs every requested check against the base (en) key set. Returns a report
     the UI renders: per-rule pass/fail + lists of offending keys + completeness. */
  function validate(parsed) {
    var report = {
      ok: true,
      rules: {},
      missing: [],
      extra: [],
      empty: [],
      placeholderMismatch: [],
      completeness: 0,
      translatedCount: 0,
      totalKeys: BASE_KEYS.length
    };

    // rule: valid JSON structure (object)
    var structureOk = parsed && typeof parsed === "object" && !Array.isArray(parsed);
    report.rules.json = structureOk;
    if (!structureOk) {
      report.ok = false;
      return report;
    }
    var flat = flatten(parsed);
    var keys = Object.keys(flat);

    // missing base keys
    report.missing = BASE_KEYS.filter(function (k) {
      return !(k in flat);
    });
    // extra keys not in base
    report.extra = keys.filter(function (k) {
      return BASE_KEYS.indexOf(k) < 0;
    });
    // empty values (only for keys that exist & are base keys)
    report.empty = BASE_KEYS.filter(function (k) {
      return k in flat && String(flat[k]).trim() === "";
    });
    // placeholder mismatch vs base
    report.placeholderMismatch = BASE_KEYS.filter(function (k) {
      if (!(k in flat)) return false;
      var a = placeholders(BASE_FLAT[k]).join(","),
        b = placeholders(flat[k]).join(",");
      return a !== b;
    });
    report.translatedCount = BASE_KEYS.filter(function (k) {
      return k in flat && String(flat[k]).trim() !== "";
    }).length;
    report.completeness = Math.round(report.translatedCount / BASE_KEYS.length * 100);
    report.rules.allKeysPresent = report.missing.length === 0;
    report.rules.noExtraKeys = report.extra.length === 0;
    report.rules.noEmptyValues = report.empty.length === 0;
    report.rules.placeholdersMatch = report.placeholderMismatch.length === 0;

    // Per the product rule: an upload is accepted even if incomplete (we surface
    // the %), but the hard failures are invalid JSON, extra keys, empty values,
    // and placeholder mismatches. Missing keys → not "complete" but still saveable.
    report.ok = report.rules.json && report.rules.noExtraKeys && report.rules.noEmptyValues && report.rules.placeholdersMatch;
    report.complete = report.rules.allKeysPresent && report.ok;
    return report;
  }
  var LS_LANGS = "fleet_org_languages"; // { org_id: [lang,...] }  (lang incl. translations:{flatKey:val})
  var LS_TTL = "fleet_i18n_ttl_hours"; // cache TTL in hours

  function read(k) {
    try {
      return JSON.parse(localStorage.getItem(k)) || {};
    } catch (e) {
      return {};
    }
  }
  function write(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  }
  var I18nStore = {
    base: BASE,
    baseLangs: BASE_LANGS,
    baseKeys: BASE_KEYS,
    baseFlat: BASE_FLAT,
    baseTree: function () {
      return BASE.en;
    },
    flatten: flatten,
    unflatten: unflatten,
    validate: validate,
    currentOrg: currentOrg,
    ttlHours: function () {
      try {
        return parseInt(localStorage.getItem(LS_TTL), 10) || 24;
      } catch (e) {
        return 24;
      }
    },
    setTtlHours: function (h) {
      try {
        localStorage.setItem(LS_TTL, String(h));
      } catch (e) {}
    },
    /* GET /api/v1/orgs/{org}/languages */
    languages: function (orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      return (all[orgId] || []).slice();
    },
    getLanguage: function (code, orgId) {
      return this.languages(orgId).filter(function (l) {
        return l.code === code;
      })[0];
    },
    /* POST /api/v1/orgs/{org}/languages  (add a new custom language, draft) */
    addLanguage: function (lang, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      var list = all[orgId] || [];
      if (list.some(function (l) {
        return l.code === lang.code;
      })) return {
        error: "exists"
      };
      if (BASE_LANGS.some(function (l) {
        return l.code === lang.code;
      })) return {
        error: "reserved"
      };
      lang.status = "draft";
      lang.completeness = 0;
      lang.translations = lang.translations || {};
      list.push(lang);
      all[orgId] = list;
      write(LS_LANGS, all);
      return lang;
    },
    /* PATCH …/languages/{code}  — save uploaded translations + completeness */
    saveTranslations: function (code, flatTranslations, completeness, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      (all[orgId] || []).forEach(function (l) {
        if (l.code === code) {
          l.translations = flatTranslations;
          l.completeness = completeness;
        }
      });
      write(LS_LANGS, all);
    },
    /* PATCH …/languages/{code} {status} — publish / unpublish */
    setStatus: function (code, status, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      (all[orgId] || []).forEach(function (l) {
        if (l.code === code) l.status = status;
      });
      write(LS_LANGS, all);
    },
    /* DELETE …/languages/{code} */
    removeLanguage: function (code, orgId) {
      orgId = orgId || currentOrg();
      var all = read(LS_LANGS);
      all[orgId] = (all[orgId] || []).filter(function (l) {
        return l.code !== code;
      });
      write(LS_LANGS, all);
    },
    /* Build the downloadable file for a language: base English tree with any
       existing translations merged in (so the translator edits in place). */
    downloadTree: function (code, orgId) {
      var lang = this.getLanguage(code, orgId);
      var merged = {};
      BASE_KEYS.forEach(function (k) {
        merged[k] = lang && lang.translations && lang.translations[k] != null && lang.translations[k] !== "" ? lang.translations[k] : BASE_FLAT[k];
      });
      return unflatten(merged);
    }
  };
  window.I18nStore = I18nStore;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/i18n-store.js", error: String((e && e.message) || e) }); }

// pages/import-export.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   IMPORT / EXPORT — Excel-based, shared by Drivers, Vehicles, Fleets.

   FLOW
   • Sample : downloads a real .xlsx the user fills in — a "Data" sheet with the
              header row + 2 example rows, and an "Instructions" sheet describing
              every column (type, required, allowed enum values, link targets).
   • Export : downloads the current rows as .xlsx in that same column shape.
   • Import : user uploads .xlsx (or .csv). The FRONTEND parses it (SheetJS),
              runs validation, and converts the valid rows to JSON to send to the
              backend. For large files (e.g. 1000+ drivers) it does NOT send a
              giant JSON blob in memory as one request — it builds NDJSON
              (one JSON object per line) and uploads it as a STREAMED file
              (chunked). See `buildNDJSON` + `streamUpload` below.

   RELATIONSHIPS (how a row references another entity)
   • Each link uses the OTHER entity's stable, unique BUSINESS KEY — not its DB id
     (the importer can't know internal ids):
       - Driver → Vehicle : column `vehicle_plate`  (matches vehicles.plate, 1:1)
       - Vehicle → Driver : column `driver_phone`   (matches drivers.phone,  1:1)
       - Fleet  → Users   : column `user_emails`    (matches users.email, many;
                            multiple emails separated by ";" in one Excel cell)
     The backend resolves the key → id, enforces the 1:1 / fleet-membership
     rules, and re-points the link (assigning a vehicle to a driver unassigns it
     from any previous driver, etc.). Both directions are supported so the admin
     can drive the link from whichever sheet they're importing.

   COLUMN SPEC = the bulk-import contract. type ∈
     string | int | phone | date(YYYY-MM-DD) | enum | email[] | link
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var XLSX_URL = "https://unpkg.com/xlsx@0.18.5/dist/xlsx.full.min.js";
  var SPECS = {
    driver: {
      label: "Drivers",
      file: "drivers",
      columns: [{
        key: "name",
        type: "string",
        required: true
      }, {
        key: "phone",
        type: "phone",
        required: true,
        note: "unique — also the key other sheets link to"
      }, {
        key: "vendor",
        type: "string",
        required: false
      }, {
        key: "fleet",
        type: "string",
        required: false
      }, {
        key: "country",
        type: "string",
        required: false
      }, {
        key: "city",
        type: "string",
        required: false
      }, {
        key: "status",
        type: "enum",
        required: false,
        enum: ["online", "busy", "en-route", "offline", "pending"]
      }, {
        key: "vehicle_plate",
        type: "link",
        required: false,
        link: "→ vehicles.plate (assign this vehicle, 1:1)"
      }],
      sample: [{
        name: "Layla Hassan",
        phone: "+966 50 112 4471",
        vendor: "Najm Foods",
        fleet: "Riyadh Fleet",
        country: "Saudi Arabia",
        city: "Riyadh",
        status: "online",
        vehicle_plate: "RYD 4821"
      }, {
        name: "Omar Khaled",
        phone: "+966 55 904 2210",
        vendor: "Najm Foods",
        fleet: "Riyadh Fleet",
        country: "Saudi Arabia",
        city: "Riyadh",
        status: "busy",
        vehicle_plate: "RYD 1190"
      }]
    },
    truck: {
      label: "Vehicles",
      file: "vehicles",
      columns: [{
        key: "plate",
        type: "string",
        required: true,
        note: "unique — also the key other sheets link to"
      }, {
        key: "make_model",
        type: "string",
        required: true
      }, {
        key: "type",
        type: "enum",
        required: true,
        enum: ["sedan", "pickup", "van", "truck", "bike"]
      }, {
        key: "year",
        type: "int",
        required: false
      }, {
        key: "capacity_kg",
        type: "int",
        required: false
      }, {
        key: "color",
        type: "string",
        required: false
      }, {
        key: "reg_expiry",
        type: "date",
        required: false,
        note: "YYYY-MM-DD (cell as text)"
      }, {
        key: "insurance_no",
        type: "string",
        required: false
      }, {
        key: "status",
        type: "enum",
        required: false,
        enum: ["active", "maintenance", "inactive"]
      }, {
        key: "fleet",
        type: "string",
        required: false
      }, {
        key: "vendor",
        type: "string",
        required: false
      }, {
        key: "driver_phone",
        type: "link",
        required: false,
        link: "→ drivers.phone (assign this driver, 1:1)"
      }],
      sample: [{
        plate: "RYD 4821",
        make_model: "Toyota Hilux",
        type: "pickup",
        year: 2022,
        capacity_kg: 1000,
        color: "White",
        reg_expiry: "2026-08-14",
        insurance_no: "INS-99210",
        status: "active",
        fleet: "Riyadh Fleet",
        vendor: "Najm Foods",
        driver_phone: "+966 50 112 4471"
      }, {
        plate: "RYD 7711",
        make_model: "Honda CB125",
        type: "bike",
        year: 2024,
        capacity_kg: 60,
        color: "Red",
        reg_expiry: "2027-09-02",
        insurance_no: "INS-99221",
        status: "maintenance",
        fleet: "Express Couriers",
        vendor: "FreshLine",
        driver_phone: ""
      }]
    },
    fleet: {
      label: "Fleets",
      file: "fleets",
      columns: [{
        key: "name",
        type: "string",
        required: true
      }, {
        key: "type",
        type: "enum",
        required: true,
        enum: ["internal", "external"]
      }, {
        key: "contact_name",
        type: "string",
        required: false
      }, {
        key: "contact_phone",
        type: "phone",
        required: false
      }, {
        key: "control_center_no",
        type: "phone",
        required: false
      }, {
        key: "user_emails",
        type: "email[]",
        required: false,
        link: "→ users.email (type=fleet); separate multiple with ;"
      }],
      sample: [{
        name: "Riyadh Fleet",
        type: "internal",
        contact_name: "Mona Adel",
        contact_phone: "+966 50 660 1180",
        control_center_no: "+966 11 200 7788",
        user_emails: "mona.adel@swift.test; tarek.sami@swift.test"
      }, {
        name: "Express Couriers",
        type: "external",
        contact_name: "Omar Z.",
        contact_phone: "+966 56 110 3345",
        control_center_no: "+966 11 990 6677",
        user_emails: ""
      }]
    },
    order: {
      label: "Orders",
      file: "orders",
      columns: [{
        key: "order_ref",
        type: "string",
        required: true,
        note: "group key — rows sharing one order_ref = ONE order with multiple items"
      }, {
        key: "store_code",
        type: "string",
        required: true,
        link: "→ stores.code (which store fulfils it)"
      }, {
        key: "customer_phone",
        type: "phone",
        required: true,
        link: "→ customers.phone_primary (the recipient)"
      }, {
        key: "address_line",
        type: "string",
        required: true,
        note: "the customer's delivery address line"
      }, {
        key: "item_sku",
        type: "string",
        required: true,
        link: "→ items.sku (one line per item)"
      }, {
        key: "qty",
        type: "int",
        required: true,
        note: ">= 1"
      }, {
        key: "status",
        type: "enum",
        required: false,
        enum: ["pending", "en-route", "delivered", "cancelled"]
      }],
      sample: [{
        order_ref: "ORD-A",
        store_code: "STR-0001",
        customer_phone: "+966 50 771 2200",
        address_line: "King Fahd Rd, Al Olaya",
        item_sku: "WTR-24",
        qty: 2,
        status: "pending"
      }, {
        order_ref: "ORD-A",
        store_code: "STR-0001",
        customer_phone: "+966 50 771 2200",
        address_line: "King Fahd Rd, Al Olaya",
        item_sku: "RICE-5",
        qty: 1,
        status: "pending"
      }, {
        order_ref: "ORD-B",
        store_code: "STR-0002",
        customer_phone: "+966 55 330 1190",
        address_line: "Corniche Rd, Al Shati",
        item_sku: "OIL-18",
        qty: 3,
        status: "pending"
      }]
    }
  };
  function spec(entity) {
    return SPECS[entity];
  }

  /* ── Custom fields (Forms module) merged in as extra columns ─────────────
     The admin-defined fields for this entity (entity_type) become importable /
     exportable columns too — mandatory ones are required, optional ones aren't.
     Their values live under the record's `metadata` (jsonb), so on import we
     nest them there; on export we read them back from FormsStore. */
  function customCols(entity) {
    if (!window.FormsStore) return [];
    return FormsStore.customFields(entity).map(function (f) {
      var t = f.type === "checkbox" ? "bool" : "string"; // text & attach → string cell
      return {
        key: f.stored_key,
        type: t,
        required: !!f.is_mandatory,
        custom: true,
        min: f.min_len,
        max: f.max_len,
        label: f.label_en || f.label_ar || f.stored_key,
        note: "custom field" + (f.type === "attach" ? " (file name / URL)" : f.type === "checkbox" ? " (yes/no)" : "")
      };
    });
  }
  /* full column list = built-in spec columns + custom fields */
  function allColumns(entity) {
    return spec(entity).columns.concat(customCols(entity));
  }

  /* ── Lazy-load SheetJS (only when the user actually imports/exports) ─────── */
  var xlsxLoading = null;
  function loadXLSX() {
    if (window.XLSX) return Promise.resolve(window.XLSX);
    if (xlsxLoading) return xlsxLoading;
    xlsxLoading = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = XLSX_URL;
      s.async = true;
      s.onload = function () {
        resolve(window.XLSX);
      };
      s.onerror = function () {
        reject(new Error("Could not load the Excel engine (offline?)."));
      };
      document.head.appendChild(s);
    });
    return xlsxLoading;
  }

  /* project rows to the spec + custom columns; arrays (email[]) joined for cells.
     Custom-field values come from the record's saved metadata. */
  function project(entity, rows) {
    var cols = allColumns(entity);
    return (rows || []).map(function (r) {
      var meta = window.FormsStore && r.id ? FormsStore.getMeta(entity, r.id) : r.metadata || {};
      var o = {};
      cols.forEach(function (c) {
        var v = c.custom ? meta ? meta[c.key] : "" : r[c.key];
        if (v === undefined) v = "";
        if (c.type === "bool") v = v === true ? "yes" : v === false ? "no" : v;
        if (c.type === "email[]" && Array.isArray(v)) v = v.join("; ");
        o[c.key] = v == null ? "" : v;
      });
      return o;
    });
  }

  /* ── Export current rows as .xlsx ───────────────────────────────────────── */
  function exportData(entity, rows) {
    var s = spec(entity);
    loadXLSX().then(function (XLSX) {
      var ws = XLSX.utils.json_to_sheet(project(entity, rows), {
        header: allColumns(entity).map(function (c) {
          return c.key;
        })
      });
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Data");
      XLSX.writeFile(wb, s.file + ".xlsx");
      if (window.fleetToast) fleetToast("success", "Export ready", s.file + ".xlsx downloaded (" + (rows ? rows.length : 0) + " rows).");
    }).catch(function (e) {
      if (window.fleetToast) fleetToast("danger", "Export failed", e.message);
    });
  }

  /* ── Sample .xlsx: Data sheet + Instructions sheet ──────────────────────── */
  function downloadSample(entity) {
    var s = spec(entity);
    loadXLSX().then(function (XLSX) {
      var wb = XLSX.utils.book_new();
      var cols = allColumns(entity);
      // extend each example row with empty cells for the custom columns
      var sampleRows = s.sample.map(function (ex) {
        var row = {};
        cols.forEach(function (c) {
          row[c.key] = c.key in ex ? ex[c.key] : "";
        });
        return row;
      });
      var data = XLSX.utils.json_to_sheet(sampleRows, {
        header: cols.map(function (c) {
          return c.key;
        })
      });
      XLSX.utils.book_append_sheet(wb, data, "Data");
      var info = cols.map(function (c) {
        return {
          column: c.key,
          type: c.type,
          required: c.required ? "yes" : "",
          allowed_values: (c.enum || []).join(", "),
          notes: c.link || c.note || ""
        };
      });
      var ws2 = XLSX.utils.json_to_sheet(info, {
        header: ["column", "type", "required", "allowed_values", "notes"]
      });
      XLSX.utils.book_append_sheet(wb, ws2, "Instructions");
      XLSX.writeFile(wb, s.file + "-sample.xlsx");
      if (window.fleetToast) fleetToast("info", "Sample downloaded", "Fill the Data sheet in " + s.file + "-sample.xlsx and upload it.");
    }).catch(function (e) {
      if (window.fleetToast) fleetToast("danger", "Sample failed", e.message);
    });
  }

  /* ── Parse an uploaded workbook to plain row objects ────────────────────── */
  function parseWorkbook(XLSX, arrayBuffer) {
    var wb = XLSX.read(arrayBuffer, {
      type: "array"
    });
    // prefer a sheet named "Data", else the first
    var name = wb.SheetNames.indexOf("Data") >= 0 ? "Data" : wb.SheetNames[0];
    var ws = wb.Sheets[name];
    return XLSX.utils.sheet_to_json(ws, {
      defval: "",
      raw: false
    });
  }

  /* ── Validate rows + normalize into the JSON the backend receives ───────── */
  function validateRows(entity, data) {
    var s = spec(entity);
    var cols = allColumns(entity);
    var out = {
      ok: false,
      isArray: Array.isArray(data),
      total: 0,
      valid: 0,
      issues: [],
      json: []
    };
    if (!out.isArray) return out;
    out.total = data.length;
    var allowed = cols.map(function (c) {
      return c.key;
    });
    data.forEach(function (row, i) {
      var problems = [],
        rec = {},
        meta = {};
      if (row == null || typeof row !== "object") {
        out.issues.push({
          row: i + 1,
          problems: ["not a row"]
        });
        return;
      }
      cols.forEach(function (c) {
        var v = row[c.key];
        var empty = v === undefined || v === null || String(v).trim() === "";
        if (c.required && empty) {
          problems.push("missing " + c.key);
          return;
        }
        if (empty) {
          return;
        }
        v = String(v).trim();
        var target = c.custom ? meta : rec;
        if (c.type === "int") {
          if (isNaN(parseInt(v, 10))) problems.push(c.key + " not a number");else target[c.key] = parseInt(v, 10);
          return;
        }
        if (c.type === "enum" && c.enum.indexOf(v) < 0) {
          problems.push(c.key + " ∉ [" + c.enum.join(", ") + "]");
          return;
        }
        if (c.type === "date" && !/^\d{4}-\d{2}-\d{2}$/.test(v)) {
          problems.push(c.key + " not YYYY-MM-DD");
          return;
        }
        if (c.type === "email[]") {
          rec[c.key] = v.split(/[;,]/).map(function (x) {
            return x.trim();
          }).filter(Boolean);
          return;
        }
        if (c.type === "bool") {
          var t = v.toLowerCase();
          if (["yes", "true", "1", "no", "false", "0"].indexOf(t) < 0) {
            problems.push(c.key + " must be yes/no");
            return;
          }
          target[c.key] = t === "yes" || t === "true" || t === "1";
          return;
        }
        // string (incl. custom text/attach) — min/max for custom text fields
        if (c.custom && c.min != null && v.length < c.min) problems.push(c.key + " min " + c.min + " chars");
        if (c.custom && c.max != null && v.length > c.max) problems.push(c.key + " max " + c.max + " chars");
        target[c.key] = v;
      });
      Object.keys(row).forEach(function (k) {
        if (allowed.indexOf(k) < 0 && String(row[k]).trim() !== "") problems.push("unknown column " + k);
      });
      if (Object.keys(meta).length) rec.metadata = meta; // custom fields → metadata jsonb
      if (problems.length) out.issues.push({
        row: i + 1,
        problems: problems
      });else {
        out.valid++;
        out.json.push(rec);
      }
    });
    out.ok = out.valid > 0 && out.issues.length === 0;
    return out;
  }

  /* ── Large uploads: NDJSON (one record per line) streamed in chunks ─────── */
  function buildNDJSON(records) {
    return records.map(function (r) {
      return JSON.stringify(r);
    }).join("\n");
  }
  function humanSize(bytes) {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  }
  /* Streams the NDJSON to the backend in chunks. In the real app this POSTs a
     ReadableStream (chunked transfer) to /api/v1/<entity>/bulk so a 1000-row
     upload never sits in memory as one payload. Here we just simulate it. */
  function streamUpload(entity, ndjson) {
    var blob = new Blob([ndjson], {
      type: "application/x-ndjson"
    });
    // Real implementation (sketch):
    //   const res = await fetch(`/api/v1/${entity}/bulk`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/x-ndjson' },
    //     body: blob.stream(),           // chunked / streamed
    //     duplex: 'half'
    //   });
    return Promise.resolve({
      bytes: blob.size
    });
  }

  /* ── Import modal ───────────────────────────────────────────────────────── */
  function ensureModal() {
    var m = document.getElementById("ioImportModal");
    if (m) return m;
    m = document.createElement("div");
    m.className = "fds-modal-scrim is-hidden";
    m.id = "ioImportModal";
    m.innerHTML = '<div class="fds-modal" role="dialog" aria-modal="true" style="max-width:580px">' + '<div class="fds-modal__head"><h2 class="fds-modal__title" id="io-title">Import</h2>' + '<button class="fds-modal__close" data-close aria-label="Close">' + window.fleetIcon("x", 18) + "</button></div>" + '<div class="fds-modal__body" id="io-body" style="display:flex;flex-direction:column;gap:var(--space-4)"></div>' + '<div class="fds-modal__foot">' + '<button class="fds-btn fds-btn--ghost" data-close>Close</button>' + '<button class="fds-btn fds-btn--primary is-hidden" id="io-apply">Import rows</button>' + "</div></div>";
    document.body.appendChild(m);
    return m;
  }
  function openImport(entity, onImport) {
    var s = spec(entity);
    var modal = ensureModal();
    var body = document.getElementById("io-body");
    document.getElementById("io-apply").classList.add("is-hidden");
    document.getElementById("io-title").textContent = "Import " + s.label + " (Excel)";
    var cols = allColumns(entity).map(function (c) {
      return '<span class="io-col' + (c.custom ? ' io-col--custom' : '') + '"><code>' + c.key + "</code><span class=\"io-col__t\">" + c.type + (c.required ? ' <b style="color:var(--danger)">*</b>' : "") + "</span>" + (c.enum ? '<span class="io-col__enum">' + c.enum.join(" · ") + "</span>" : "") + (c.link ? '<span class="io-col__enum">' + c.link + "</span>" : "") + (c.custom ? '<span class="io-col__enum">custom field</span>' : "") + "</span>";
    }).join("");
    body.innerHTML = '<p class="u-muted" style="font-size:13px;margin:0;line-height:1.5">Upload an <b style="color:var(--text)">Excel (.xlsx)</b> file — fill the <b style="color:var(--text)">Data</b> sheet. We validate it here and convert it to JSON for the server. Required columns are marked <b style="color:var(--danger)">*</b>; link columns reference another record by its unique key.</p>' + '<div class="io-cols">' + cols + "</div>" + '<div class="u-row" style="gap:10px">' + '<button class="fds-btn fds-btn--secondary fds-btn--sm" id="io-sample">' + window.fleetIcon("download", 15) + " Download sample .xlsx</button>" + '<label class="fds-btn fds-btn--primary fds-btn--sm" style="cursor:pointer">' + window.fleetIcon("upload", 15) + ' Choose Excel file<input type="file" accept=".xlsx,.xls,.csv" id="io-file" style="display:none"></label>' + "</div>" + '<div id="io-result"></div>';
    document.getElementById("io-sample").onclick = function () {
      downloadSample(entity);
    };
    document.getElementById("io-file").onchange = function () {
      var file = this.files && this.files[0];
      if (!file) return;
      var res = document.getElementById("io-result");
      res.innerHTML = '<div class="u-muted" style="font-size:13px;padding:6px 0">' + window.fleetIcon("loading" in {} ? "info" : "info", 14) + " Parsing " + file.name + "…</div>";
      loadXLSX().then(function (XLSX) {
        var reader = new FileReader();
        reader.onload = function () {
          var rows;
          try {
            rows = parseWorkbook(XLSX, new Uint8Array(reader.result));
          } catch (e) {
            return fail("Could not read the workbook: " + e.message);
          }
          showResult(entity, rows, onImport, file.name);
        };
        reader.readAsArrayBuffer(file);
      }).catch(function (e) {
        fail(e.message);
      });
      function fail(msg) {
        res.innerHTML = '<div class="val-banner val-banner--bad">' + window.fleetIcon("alert-triangle", 16) + " " + msg + "</div>";
      }
    };
    modal.classList.remove("is-hidden");
  }
  function showResult(entity, rows, onImport, filename) {
    var res = document.getElementById("io-result");
    var apply = document.getElementById("io-apply");
    var r = validateRows(entity, rows);
    if (!r.total) {
      res.innerHTML = '<div class="val-banner val-banner--bad">' + window.fleetIcon("alert-triangle", 16) + " No rows found in the Data sheet.</div>";
      apply.classList.add("is-hidden");
      return;
    }
    var ndjson = buildNDJSON(r.json);
    var size = humanSize(new Blob([ndjson]).size);
    var html = '<div class="io-summary"><span class="io-summary__ok">' + r.valid + " valid</span>" + (r.issues.length ? '<span class="io-summary__bad">' + r.issues.length + " with issues</span>" : "") + '<span class="u-muted">of ' + r.total + " rows</span></div>";
    if (r.issues.length) {
      html += '<div class="io-issues">' + r.issues.slice(0, 8).map(function (it) {
        return '<div class="io-issue"><span class="io-issue__row">Row ' + it.row + "</span>" + it.problems.join(", ") + "</div>";
      }).join("") + (r.issues.length > 8 ? '<div class="u-muted" style="font-size:11.5px;padding:4px 0">+' + (r.issues.length - 8) + " more rows</div>" : "") + "</div>";
    }
    if (r.valid) {
      html += '<div class="io-convert">' + window.fleetIcon("check-circle", 15) + " Converted " + r.valid + " row" + (r.valid > 1 ? "s" : "") + " to JSON · " + "<b>" + size + "</b> NDJSON · uploaded as a streamed file</div>";
    }
    html += r.ok ? '<div class="val-banner val-banner--ok">' + window.fleetIcon("check-circle", 16) + " All rows valid — ready to import.</div>" : r.valid ? '<div class="val-banner val-banner--warn">' + window.fleetIcon("alert-circle", 16) + " Fix the flagged rows, or import only the " + r.valid + " valid ones.</div>" : '<div class="val-banner val-banner--bad">' + window.fleetIcon("alert-triangle", 16) + " No valid rows to import.</div>";
    res.innerHTML = html;
    if (r.valid > 0) {
      apply.classList.remove("is-hidden");
      apply.textContent = "Import " + r.valid + " row" + (r.valid > 1 ? "s" : "");
      apply.onclick = function () {
        apply.disabled = true;
        streamUpload(entity, ndjson).then(function (info) {
          document.getElementById("ioImportModal").classList.add("is-hidden");
          apply.disabled = false;
          if (window.fleetToast) fleetToast("success", "Import complete", r.valid + " " + spec(entity).label.toLowerCase() + " streamed to the server (" + humanSize(info.bytes) + ").");
          if (typeof onImport === "function") onImport(r.json);
        });
      };
    } else {
      apply.classList.add("is-hidden");
    }
  }

  /* ── Ad-hoc export: any array of flat objects → .xlsx (business view) ───── */
  function exportRows(rows, filename, sheetName) {
    rows = rows || [];
    if (!rows.length) {
      if (window.fleetToast) fleetToast("warning", "Nothing to export", "No rows match the current selection.");
      return;
    }
    loadXLSX().then(function (XLSX) {
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(rows), sheetName || "Data");
      XLSX.writeFile(wb, (filename || "export") + ".xlsx");
      if (window.fleetToast) fleetToast("success", "Export ready", filename + ".xlsx downloaded (" + rows.length + " rows).");
    }).catch(function (e) {
      if (window.fleetToast) fleetToast("danger", "Export failed", e.message);
    });
  }
  window.FleetIO = {
    specs: SPECS,
    spec: spec,
    exportData: exportData,
    exportRows: exportRows,
    loadXLSX: loadXLSX,
    downloadSample: downloadSample,
    validateRows: validateRows,
    buildNDJSON: buildNDJSON,
    openImport: openImport
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/import-export.js", error: String((e && e.message) || e) }); }

// pages/invoice-store.js
try { (() => {
/* ═════════════════════════════════════════════════════════════════
   INVOICE STORE — invoices generated from store settlements.
   Prototype persistence in localStorage; backend contract documented in
   ORDER_SETTLEMENT_SPEC.md (§ Invoicing).

   An invoice freezes a set of orders' settlement for a store at a point in
   time. Once an order is on an invoice it is EXCLUDED from future settlement
   views (SETTLED_ORDER_IDS) so it can't be invoiced twice.

   invoice = {
     id, store_id, created_at, due_at,
     status: 'unpaid' | 'paid' | 'due',      // due = past due_at & still unpaid
     order_ids: [...],                        // orders frozen onto this invoice
     amount,                                  // net store balance at creation
     collected, store_bears, goods, shipping, events,  // snapshot totals
     paid_at                                  // when marked paid
   }
   ═════════════════════════════════════════════════════════════════ */
var InvoiceStore = {
  KEY: 'fleet_invoices',
  /* Demo invoices so the UI has something to explore. Merged in on read()
     UNLESS the user has created/edited one with the same id (theirs wins) or
     dropped it (tracked in fleet_invoices_removed). Covers paid / partially
     paid / due, tied to the real demo orders so detail pages render fully. */
  SEED: [{
    id: 'inv_2606A',
    store_id: 'str_0001',
    created_at: '2026-06-26',
    due_at: '2026-07-10',
    order_ids: ['ord_10498'],
    amount: 46.00,
    collected: 46.00,
    store_bears: 8.20,
    goods: 38.00,
    shipping: 8.20,
    events: 0,
    status: 'paid',
    amount_paid: 46.00,
    payments: [{
      amount: 46.00,
      at: '2026-07-02',
      proof_url: null,
      actor: 'Dana Owais'
    }]
  }, {
    id: 'inv_0107B',
    store_id: 'str_0001',
    created_at: '2026-07-01',
    due_at: '2026-07-15',
    order_ids: ['ord_10500'],
    amount: 72.00,
    collected: 0,
    store_bears: 11.40,
    goods: 60.60,
    shipping: 11.40,
    events: 0,
    status: 'partial',
    amount_paid: 30.00,
    payments: [{
      amount: 30.00,
      at: '2026-07-08',
      proof_url: null,
      actor: 'Karim Adel'
    }]
  }, {
    id: 'inv_2706C',
    store_id: 'str_0002',
    created_at: '2026-06-27',
    due_at: '2026-07-05',
    order_ids: ['ord_10499'],
    amount: 120.00,
    collected: 0,
    store_bears: 18.00,
    goods: 102.00,
    shipping: 18.00,
    events: 0,
    status: 'unpaid',
    amount_paid: 0,
    payments: []
  }],
  _removedIds: function () {
    try {
      return JSON.parse(localStorage.getItem('fleet_invoices_removed')) || [];
    } catch (e) {
      return [];
    }
  },
  read: function () {
    var stored;
    try {
      stored = JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch (e) {
      stored = [];
    }
    var have = {};
    stored.forEach(function (v) {
      have[v.id] = 1;
    });
    var removed = this._removedIds();
    var merged = stored.slice();
    this.SEED.forEach(function (s) {
      if (!have[s.id] && removed.indexOf(s.id) === -1) merged.push(JSON.parse(JSON.stringify(s)));
    });
    return merged;
  },
  write: function (list) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(list));
    } catch (e) {}
  },
  all: function () {
    return this.read();
  },
  byStore: function (storeId) {
    return this.read().filter(function (v) {
      return v.store_id === storeId;
    });
  },
  byId: function (id) {
    return this.read().filter(function (v) {
      return v.id === id;
    })[0];
  },
  /* Every order id that already sits on ANY invoice (excluded from settlement). */
  invoicedOrderIds: function () {
    var set = {};
    this.read().forEach(function (v) {
      (v.order_ids || []).forEach(function (oid) {
        set[oid] = 1;
      });
    });
    return set;
  },
  isInvoiced: function (orderId) {
    return !!this.invoicedOrderIds()[orderId];
  },
  /* ── Payments: partial or full, each logged ──────────────────────────────
     invoice.payments = [{ amount, at, proof_url, actor }]
     invoice.amount_paid = Σ payments. status: unpaid → partial → paid.
     due amount = |amount| (positive = store owes the platform). */
  paidAmount: function (v) {
    return (v.payments || []).reduce(function (s, p) {
      return s + (p.amount || 0);
    }, 0) || v.amount_paid || 0 || (v.status === 'paid' ? Math.abs(v.amount || 0) : 0);
  },
  dueAmount: function (v) {
    return Math.abs(v.amount || 0);
  },
  remaining: function (v) {
    return Math.max(0, this.dueAmount(v) - this.paidAmount(v));
  },
  /* status with due-date resolution: fully covered → paid; some → partial;
     none + past due_at → due; else unpaid. */
  liveStatus: function (v, nowStr) {
    var due = this.dueAmount(v),
      paid = this.paidAmount(v);
    if (due > 0 && paid >= due - 0.005) return 'paid';
    if (v.status === 'paid') return 'paid';
    if (paid > 0.005) return 'partial';
    var now = nowStr ? new Date(nowStr) : new Date();
    if (v.due_at && new Date(v.due_at) < now) return 'due';
    return 'unpaid';
  },
  create: function (inv) {
    var list = this.read();
    inv.id = inv.id || 'inv_' + Date.now();
    inv.created_at = inv.created_at || new Date().toISOString().slice(0, 10);
    inv.status = inv.status || 'unpaid';
    inv.payments = inv.payments || [];
    inv.amount_paid = inv.amount_paid || 0;
    list.push(inv);
    this.write(list);
    return inv;
  },
  /* Record a payment (partial or full). amount in major units. */
  addPayment: function (id, amount, proof, atStr, actor) {
    var self = this,
      list = this.read();
    list.forEach(function (v) {
      if (v.id !== id) return;
      v.payments = v.payments || [];
      v.payments.push({
        amount: amount,
        at: atStr || new Date().toISOString().slice(0, 10),
        proof_url: proof || null,
        actor: actor || 'Dana Owais'
      });
      v.amount_paid = (v.amount_paid || 0) + amount;
      if (proof) v.proof_url = proof;
      v.status = v.amount_paid >= self.dueAmount(v) - 0.005 ? 'paid' : 'partial';
      if (v.status === 'paid') v.paid_at = atStr || new Date().toISOString().slice(0, 10);
    });
    this.write(list);
  },
  /* Convenience: pay the whole remaining balance in one go. */
  markPaid: function (id, atStr, proof) {
    var v = this.byId(id);
    if (!v) return;
    this.addPayment(id, this.remaining(v), proof, atStr);
  }
};
var INVOICE_STATUS_M = {
  unpaid: {
    t: 'warning',
    l: 'Unpaid'
  },
  partial: {
    t: 'warning',
    l: 'Partially paid'
  },
  due: {
    t: 'danger',
    l: 'Due'
  },
  paid: {
    t: 'success',
    l: 'Paid'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/invoice-store.js", error: String((e && e.message) || e) }); }

// pages/list-filters.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   list-filters.js — shared list toolbar behaviour: a search box + a "Filters"
   icon button (popover) with a date-range preset (Today / Yesterday / This week
   / This month / Custom / All time). Reused across the resource list pages.

   The demo datasets don't carry created_at, so FleetDates.created(id) derives a
   STABLE date per row id (hashed into the last ~60 days) — good enough for a
   prototype and identical on every reload. In the real app this reads the row's
   created_at column.
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var TODAY = new Date();
  TODAY.setHours(0, 0, 0, 0);
  function d2s(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function hash(s) {
    var h = 0;
    s = String(s);
    for (var i = 0; i < s.length; i++) {
      h = h * 31 + s.charCodeAt(i) >>> 0;
    }
    return h;
  }
  var FleetDates = {
    today: TODAY,
    created: function (seed) {
      var off = hash(seed) % 60;
      var d = new Date(TODAY);
      d.setDate(d.getDate() - off);
      return d2s(d);
    },
    startOfWeek: function () {
      var d = new Date(TODAY);
      var g = (d.getDay() + 6) % 7;
      d.setDate(d.getDate() - g);
      return d;
    },
    range: function (key, cf, ct) {
      var from,
        to = new Date(TODAY);
      if (key === 'today') {
        from = new Date(TODAY);
      } else if (key === 'yesterday') {
        from = new Date(TODAY);
        from.setDate(from.getDate() - 1);
        to = new Date(from);
      } else if (key === 'week') {
        from = this.startOfWeek();
      } else if (key === 'month') {
        from = new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
      } else if (key === 'custom') {
        from = cf ? new Date(cf) : null;
        if (from) from.setHours(0, 0, 0, 0);
        to = ct ? new Date(ct) : new Date(TODAY);
        to.setHours(0, 0, 0, 0);
      } else return null; /* all */
      return {
        from: from,
        to: to
      };
    },
    inRange: function (dateStr, key, cf, ct) {
      if (!dateStr) return key === 'all' || !key;
      var r = this.range(key, cf, ct);
      if (!r || !r.from) return true;
      var d = new Date(String(dateStr).slice(0, 10));
      d.setHours(0, 0, 0, 0);
      return d >= r.from && d <= r.to;
    },
    label: function (key) {
      return {
        today: 'Today',
        yesterday: 'Yesterday',
        week: 'This week',
        month: 'This month',
        custom: 'Custom',
        all: 'All time'
      }[key] || 'All time';
    }
  };
  window.FleetDates = FleetDates;

  /* Markup for the date-preset control (select + custom from/to). */
  function presetFieldHtml(pfx, def) {
    return '<label class="fds-field__label" style="display:block;margin-bottom:6px">Created</label>' + '<select class="fds-select" id="' + pfx + 'Preset" style="width:100%">' + ['all|All time', 'today|Today', 'yesterday|Yesterday', 'week|This week', 'month|This month', 'custom|Custom range'].map(function (o) {
      var kv = o.split('|');
      return '<option value="' + kv[0] + '"' + (kv[0] === def ? ' selected' : '') + '>' + kv[1] + '</option>';
    }).join('') + '</select>' + '<div id="' + pfx + 'Custom" class="is-hidden" style="display:flex;gap:8px;align-items:center;margin-top:8px">' + '<input class="fds-input" type="date" id="' + pfx + 'From" aria-label="From date" style="min-width:0">' + '<span style="color:var(--text-subtle)">\u2192</span>' + '<input class="fds-input" type="date" id="' + pfx + 'To" aria-label="To date" style="min-width:0">' + '</div>';
  }
  var _uid = 0;

  /* Enhance a list table: adds a Created column, a Filters popover (search +
     date presets) next to the toolbar search, and live client-side filtering. */
  function mount(opts) {
    var table = opts.table;
    if (!table) return;
    var page = table.closest('.cs-page') || document;
    var toolbar = opts.toolbar || page.querySelector('.cs-toolbar');
    var search = opts.search || toolbar && toolbar.querySelector('input.fds-input');
    var pfx = 'lf' + ++_uid;
    var defPreset = opts.defaultPreset || 'all';

    /* 1) Created column */
    var actionsTh = table.querySelector('thead th.fds-td--actions');
    if (opts.addCreatedColumn !== false) {
      var headTr = table.querySelector('thead tr');
      var th = document.createElement('th');
      th.textContent = 'Created';
      if (actionsTh) headTr.insertBefore(th, actionsTh);else headTr.appendChild(th);
    }
    function bodyRows() {
      return Array.prototype.slice.call(table.querySelectorAll('tbody tr'));
    }
    function createdOf(tr) {
      return opts.createdFor ? opts.createdFor(tr) : FleetDates.created(tr.getAttribute('data-row') || tr.textContent.slice(0, 16));
    }
    bodyRows().forEach(function (tr) {
      if (tr.querySelector('td[colspan]')) return;
      var cd = createdOf(tr);
      tr.setAttribute('data-created', cd);
      if (opts.addCreatedColumn !== false) {
        var td = document.createElement('td');
        td.className = 'fds-td--mono';
        td.style.color = 'var(--text-muted)';
        td.style.fontSize = '12.5px';
        td.textContent = cd;
        var actTd = tr.querySelector('td.fds-td--actions');
        if (actTd) tr.insertBefore(td, actTd);else tr.appendChild(td);
      }
    });

    /* 2) Collect existing toolbar controls (status selects etc.) to absorb into
       the Filters popover so ALL filters live in one place. */
    function labelFor(sel) {
      var f = (sel.options[0] ? sel.options[0].textContent : '').trim();
      if (/status/i.test(f)) return 'Status';
      var w = f.replace(/^all\s+/i, '');
      return w ? w.charAt(0).toUpperCase() + w.slice(1) : 'Filter';
    }
    var selects = toolbar ? Array.prototype.filter.call(toolbar.querySelectorAll('select.fds-select'), function (s) {
      return !s.closest('.cs-menu');
    }) : [];

    /* 3) Filters button + popover */
    var host = document.createElement('div');
    host.style.position = 'relative';
    host.innerHTML = '<button type="button" class="fds-btn fds-btn--secondary fds-btn--sm" data-toggle="#' + pfx + 'Pop">' + window.fleetIcon('filter', 15) + ' Filters <span class="fds-badge fds-badge--primary" id="' + pfx + 'Count" style="display:none;margin-inline-start:2px"></span></button>' + '<div class="cs-menu is-hidden" id="' + pfx + 'Pop" data-popout style="width:250px;padding:14px">' + '<div id="' + pfx + 'Selects"></div>' + presetFieldHtml(pfx, defPreset) + '<div class="u-row" style="justify-content:flex-end;margin-top:12px"><button type="button" class="fds-btn fds-btn--ghost fds-btn--sm" id="' + pfx + 'Reset">Reset</button></div>' + '</div>';
    /* place the Filters button right after the search field */
    if (search && search.closest('.fds-input-wrap') && search.closest('.fds-input-wrap').parentNode) {
      var searchBox = search.closest('.fds-input-wrap').parentNode;
      searchBox.parentNode.insertBefore(host, searchBox.nextSibling);
    } else if (toolbar) {
      toolbar.insertBefore(host, toolbar.firstChild);
    }

    /* move the gathered selects into the popover, each under a label */
    var selWrap = host.querySelector('#' + pfx + 'Selects');
    selects.forEach(function (s) {
      var box = document.createElement('div');
      box.style.marginBottom = '12px';
      var lab = document.createElement('label');
      lab.className = 'fds-field__label';
      lab.style.display = 'block';
      lab.style.marginBottom = '6px';
      lab.textContent = labelFor(s);
      var cell = s.parentNode; /* the width wrapper div in the toolbar */
      s.style.width = '100%';
      box.appendChild(lab);
      box.appendChild(s);
      selWrap.appendChild(box);
      if (cell && cell.classList && cell.parentNode && !cell.querySelector('*')) cell.parentNode.removeChild(cell);
      s.addEventListener('change', apply);
    });
    function selPass(tr) {
      return selects.every(function (s) {
        var opt = s.options[s.selectedIndex];
        if (!opt) return true;
        var txt = opt.textContent.trim();
        if (!s.value && /^all\b/i.test(txt)) return true;
        if (/^all\b/i.test(txt)) return true;
        return tr.textContent.toLowerCase().indexOf(txt.toLowerCase()) !== -1;
      });
    }
    var presetEl = host.querySelector('#' + pfx + 'Preset');
    var customEl = host.querySelector('#' + pfx + 'Custom');
    var fromEl = host.querySelector('#' + pfx + 'From');
    var toEl = host.querySelector('#' + pfx + 'To');
    var resetEl = host.querySelector('#' + pfx + 'Reset');
    var countEl = host.querySelector('#' + pfx + 'Count');
    var state = {
      q: '',
      preset: defPreset,
      from: '',
      to: ''
    };
    function apply() {
      var q = state.q.trim().toLowerCase();
      var rows = bodyRows(),
        visible = 0;
      rows.forEach(function (tr) {
        if (tr.hasAttribute('data-lf-empty')) return;
        var okText = !q || tr.textContent.toLowerCase().indexOf(q) !== -1;
        var okDate = FleetDates.inRange(tr.getAttribute('data-created'), state.preset, state.from, state.to);
        var show = okText && okDate && selPass(tr);
        tr.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      /* empty-state row */
      var tbody = table.querySelector('tbody');
      var empty = tbody.querySelector('tr[data-lf-empty]');
      if (!visible) {
        if (!empty) {
          var cols = table.querySelectorAll('thead th').length;
          empty = document.createElement('tr');
          empty.setAttribute('data-lf-empty', '');
          empty.innerHTML = '<td colspan="' + cols + '"><div class="fds-empty" style="padding:26px 0">' + '<span class="fds-empty__icon">' + window.fleetIcon('search', 22) + '</span>' + '<div class="fds-empty__title">Nothing matches</div>' + '<div class="fds-empty__hint">Try a different search or date range.</div></div></td>';
          tbody.appendChild(empty);
        }
        empty.style.display = '';
      } else if (empty) {
        empty.style.display = 'none';
      }
      var n = (state.preset && state.preset !== 'all' ? 1 : 0) + selects.filter(function (s) {
        var o = s.options[s.selectedIndex];
        return s.value && o && !/^all\b/i.test(o.textContent.trim());
      }).length;
      countEl.textContent = n;
      countEl.style.display = n ? '' : 'none';
    }
    if (search) search.addEventListener('input', function () {
      state.q = this.value;
      apply();
    });
    presetEl.addEventListener('change', function () {
      state.preset = this.value;
      customEl.classList.toggle('is-hidden', this.value !== 'custom');
      apply();
    });
    [fromEl, toEl].forEach(function (inp) {
      inp.addEventListener('change', function () {
        state.from = fromEl.value;
        state.to = toEl.value;
        apply();
      });
    });
    resetEl.addEventListener('click', function () {
      state = {
        q: '',
        preset: 'all',
        from: '',
        to: ''
      };
      if (search) search.value = '';
      presetEl.value = 'all';
      fromEl.value = '';
      toEl.value = '';
      selects.forEach(function (s) {
        s.selectedIndex = 0;
      });
      customEl.classList.add('is-hidden');
      apply();
    });
    apply();
    return {
      apply: apply,
      state: state
    };
  }
  window.FleetListFilter = {
    mount: mount
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/list-filters.js", error: String((e && e.message) || e) }); }

// pages/multi-select.js
try { (() => {
/* ── MultiSelect ────────────────────────────────────────────────────────────
   A searchable, checkbox multi-select built on top of the Fleet console styles.
   Used by list filters where more than one value can be in scope at a time.

     var ms = MultiSelect.create(hostEl, {
       options:[{v:'ready', l:'Ready', g:'Active'}], value:['ready'],
       placeholder:'All statuses', searchPlaceholder:'Search statuses…',
       onChange:function(vals){}
     });
     ms.value() / ms.set(arr) / ms.setOptions(arr) / ms.label(v)

   The control is uncommitted by design: it fires onChange on every toggle, so
   the caller decides whether to apply immediately or on an Apply button. */
(function () {
  var STYLE_ID = 'ms-style';
  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = '.ms{position:relative;min-width:0}' + '.ms__ctl{display:flex;align-items:center;gap:8px;width:100%;min-height:36px;padding:6px 10px;border-radius:var(--radius-md,8px);border:1px solid var(--border);background:var(--surface);color:var(--text);font:inherit;font-size:13px;cursor:pointer;text-align:start}' + '.ms__ctl:hover{border-color:var(--border-strong,var(--border))}' + '.ms__ctl[aria-expanded="true"]{border-color:var(--primary);box-shadow:0 0 0 3px var(--primary-soft)}' + '.ms__txt{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' + '.ms__txt--empty{color:var(--text-subtle)}' + '.ms__n{flex:0 0 auto;display:inline-flex;align-items:center;justify-content:center;min-width:19px;height:19px;padding:0 6px;border-radius:999px;background:var(--primary);color:#fff;font-size:11px;font-weight:700;font-variant-numeric:tabular-nums}' + '.ms__caret{flex:0 0 auto;display:inline-flex;color:var(--text-subtle)}' + '.ms__menu{position:absolute;z-index:90;top:calc(100% + 6px);inset-inline-start:0;min-width:100%;width:max-content;max-width:320px;background:var(--surface);border:1px solid var(--border);border-radius:12px;box-shadow:var(--shadow-lg);padding:6px}' + '.ms__menu--up{top:auto;bottom:calc(100% + 6px)}' + '.ms__search{padding:2px 2px 6px}' + '.ms__list{max-height:240px;overflow:auto}' + '.ms__grp{padding:8px 10px 4px;font-size:10.5px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--text-subtle)}' + '.ms__opt{display:flex;align-items:center;gap:9px;padding:7px 10px;border-radius:8px;cursor:pointer;font-size:13px;white-space:nowrap}' + '.ms__opt:hover{background:var(--surface-2)}' + '.ms__opt input{width:14px;height:14px;accent-color:var(--primary);flex:0 0 auto;pointer-events:none}' + '.ms__empty{padding:9px 10px;font-size:13px;color:var(--text-subtle)}' + '.ms__foot{display:flex;gap:6px;align-items:center;margin-top:6px;padding-top:6px;border-top:1px solid var(--border)}' + '.ms__link{border:0;background:transparent;color:var(--primary);font:inherit;font-size:12.5px;font-weight:600;cursor:pointer;padding:2px 6px;border-radius:6px}' + '.ms__link:hover{background:var(--primary-soft)}';
    document.head.appendChild(s);
  }
  function create(host, o) {
    injectStyles();
    o = o || {};
    var options = (o.options || []).slice(),
      value = (o.value || []).slice(),
      q = '';
    host.classList.add('ms');
    host.innerHTML = '<button type="button" class="ms__ctl" aria-expanded="false" aria-haspopup="listbox">' + '<span class="ms__txt"></span><span class="ms__n" hidden></span>' + '<span class="ms__caret">' + (window.fleetIcon ? window.fleetIcon('chevron-down', 14) : '▾') + '</span></button>' + '<div class="ms__menu is-hidden" role="listbox">' + '<div class="ms__search"><input class="fds-input" type="text" autocomplete="off" placeholder="' + (o.searchPlaceholder || 'Search…') + '"></div>' + '<div class="ms__list"></div>' + '<div class="ms__foot"><button type="button" class="ms__link" data-ms-all>Select all</button><button type="button" class="ms__link" data-ms-none>Clear</button></div>' + '</div>';
    var ctl = host.querySelector('.ms__ctl'),
      txt = host.querySelector('.ms__txt'),
      nb = host.querySelector('.ms__n'),
      menu = host.querySelector('.ms__menu'),
      search = host.querySelector('.ms__search input'),
      list = host.querySelector('.ms__list');
    function labelOf(v) {
      for (var i = 0; i < options.length; i++) if (options[i].v === v) return options[i].l;
      return v;
    }
    function syncCtl() {
      if (!value.length) {
        txt.textContent = o.placeholder || 'All';
        txt.classList.add('ms__txt--empty');
        nb.hidden = true;
        return;
      }
      txt.classList.remove('ms__txt--empty');
      txt.textContent = value.length === 1 ? labelOf(value[0]) : value.map(labelOf).join(', ');
      nb.hidden = value.length < 2;
      nb.textContent = value.length;
    }
    function renderList() {
      var f = q.toLowerCase();
      var shown = options.filter(function (x) {
        return x.l.toLowerCase().indexOf(f) >= 0;
      });
      if (!shown.length) {
        list.innerHTML = '<div class="ms__empty">No matches</div>';
        return;
      }
      var html = '',
        grp = null;
      shown.forEach(function (x) {
        if (x.g && x.g !== grp) {
          grp = x.g;
          html += '<div class="ms__grp">' + x.g + '</div>';
        }
        html += '<label class="ms__opt"><input type="checkbox" data-ms-v="' + String(x.v).replace(/"/g, '&quot;') + '"' + (value.indexOf(x.v) >= 0 ? ' checked' : '') + '>' + x.l + '</label>';
      });
      list.innerHTML = html;
    }
    function fire() {
      syncCtl();
      if (typeof o.onChange === 'function') o.onChange(value.slice());
    }
    function open() {
      menu.classList.remove('is-hidden');
      ctl.setAttribute('aria-expanded', 'true');
      q = '';
      search.value = '';
      renderList();
      /* flip upwards when the menu would fall off the viewport */
      menu.classList.remove('ms__menu--up');
      var r = menu.getBoundingClientRect();
      if (r.bottom > window.innerHeight - 8) menu.classList.add('ms__menu--up');
      search.focus();
    }
    function close() {
      menu.classList.add('is-hidden');
      ctl.setAttribute('aria-expanded', 'false');
    }
    ctl.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.contains('is-hidden') ? open() : close();
    });
    menu.addEventListener('click', function (e) {
      e.stopPropagation();
    });
    search.addEventListener('input', function () {
      q = this.value;
      renderList();
    });
    search.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        close();
        ctl.focus();
      }
    });
    list.addEventListener('change', function (e) {
      var c = e.target.closest('[data-ms-v]');
      if (!c) return;
      var v = c.getAttribute('data-ms-v'),
        i = value.indexOf(v);
      if (c.checked) {
        if (i < 0) value.push(v);
      } else if (i >= 0) value.splice(i, 1);
      fire();
    });
    menu.querySelector('[data-ms-all]').addEventListener('click', function () {
      var f = q.toLowerCase();
      options.filter(function (x) {
        return x.l.toLowerCase().indexOf(f) >= 0;
      }).forEach(function (x) {
        if (value.indexOf(x.v) < 0) value.push(x.v);
      });
      renderList();
      fire();
    });
    menu.querySelector('[data-ms-none]').addEventListener('click', function () {
      value = [];
      renderList();
      fire();
    });
    document.addEventListener('click', function (e) {
      if (!host.contains(e.target)) close();
    });
    syncCtl();
    return {
      el: host,
      value: function () {
        return value.slice();
      },
      set: function (arr) {
        value = (arr || []).slice();
        syncCtl();
        if (!menu.classList.contains('is-hidden')) renderList();
      },
      toggle: function (v) {
        var i = value.indexOf(v);
        if (i < 0) value.push(v);else value.splice(i, 1);
        syncCtl();
        fire();
      },
      setOptions: function (arr) {
        options = (arr || []).slice();
        renderList();
        syncCtl();
      },
      label: labelOf,
      close: close
    };
  }
  window.MultiSelect = {
    create: create
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/multi-select.js", error: String((e && e.message) || e) }); }

// pages/ops-store.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   OPS STATE + ORDER CHARGES stores (prototype persistence).
   Shared by shipment-view.html, orders.html, order-view.html.

   In production these are backend tables; here they mirror to localStorage so
   outcome/status changes and appended charge rows survive a reload (same
   pattern as StoreAudit in store-data.js).

   • OrderCharges  → table order_charges  (append-only ledger; see pricing-data.js)
       .append(orderId, rows[])   POST /api/v1/orders/{id}/charges   (server-side
                                  this happens inside PricingService, never the client)
       .log(orderId) → rows[]     GET  /api/v1/orders/{id}/charges
   • OpsState      → the mutable operational bits of orders + leg outcomes:
       orders:   { [orderId]: { status, attempts_count, delivered_at,
                                current_hub_id, scheduled_at } }
       outcomes: { [shipmentId]: { [legSeq]: { [orderId]: {outcome, reason_code,
                                qty_actual, proof_type, completed_at} } } }
       attempts: { [orderId]: [ {attempt_no,result,reason_code,next_at,at} ] }
                                  → table delivery_attempts (shipment-data.js)
     OPS_APPLY_ORDERS(list) overlays saved state onto the in-memory demo rows at
     page load so every page sees the same current truth.
   ════════════════════════════════════════════════════════════════════════════ */

var OrderCharges = {
  KEY: "fleet_order_charges",
  /* ── Event-fee adjustments ──────────────────────────────────────────────
     The ledger is APPEND-ONLY, so waiving or correcting an EVENT fee (failed
     attempt, reschedule, return…) never rewrites the row: an adjustment is
     recorded against it with a MANDATORY reason, and the ledger renders the
     row adjusted (original kept, new amount applied). Only event charges are
     adjustable — base price + COD fee come from the rate card and are re-quoted,
     never hand-edited.
     BACKEND  table order_charge_adjustments { id, charge_id FK→order_charges.id,
              new_amount, reason, created_by, created_at }
       PATCH /api/v1/order-charges/{id} { new_amount, reason } — server refuses
       non-event kinds and appends an order_activities row for the audit trail. */
  ADJ_KEY: "fleet_order_charge_adjustments",
  /* Demo seed — #SO-10500 carries two operational event fees so the adjust /
     waive flow is visible out of the box. Real app: these rows are written by
     PRICING_APPLY_EVENT when the attempt fails or the order is rescheduled. */
  SEED: {
    ord_10500: [{
      kind: "failed_attempt",
      payer: "store",
      amount: 15,
      at: "2026-07-13 15:30",
      meta: {
        note: "Attempt 1 · customer not present"
      }
    }, {
      kind: "reschedule",
      payer: "store",
      amount: 10,
      at: "2026-07-14 09:00",
      meta: {
        note: "Moved to 2026-07-15"
      }
    }]
  },
  EVENT_KINDS: {
    failed_attempt: 1,
    reschedule: 1,
    return_to_store: 1,
    return_to_hub: 1,
    return_fee: 1
  },
  isEvent: function (r) {
    return !!this.EVENT_KINDS[r.kind];
  },
  /* stable handle for a stored row (no server ids in the prototype) */
  chargeKey: function (r) {
    return [r.kind, r.at || "", r.payer || "", r.amount].join("|");
  },
  adjustments: function (orderId) {
    try {
      return (JSON.parse(localStorage.getItem(this.ADJ_KEY)) || {})[orderId] || {};
    } catch (e) {
      return {};
    }
  },
  adjust: function (orderId, key, amount, reason, actor) {
    var all;
    try {
      all = JSON.parse(localStorage.getItem(this.ADJ_KEY)) || {};
    } catch (e) {
      all = {};
    }
    (all[orderId] = all[orderId] || {})[key] = {
      amount: Number(amount) || 0,
      reason: String(reason || ""),
      actor: actor || "Dana Owais",
      at: new Date().toISOString().slice(0, 16).replace("T", " ")
    };
    try {
      localStorage.setItem(this.ADJ_KEY, JSON.stringify(all));
    } catch (e) {}
  },
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  append: function (orderId, rows) {
    if (!rows || !rows.length) return;
    var all = this.read();
    var at = new Date().toISOString().slice(0, 16).replace("T", " ");
    rows.forEach(function (r) {
      if (!r.at) r.at = at;
    });
    all[orderId] = (all[orderId] || []).concat(rows);
    try {
      localStorage.setItem(this.KEY, JSON.stringify(all));
    } catch (e) {}
  },
  /* Rows with adjustments applied. Each row carries _key (handle), _event
     (adjustable?) and, when adjusted, _original + _adjustment {reason,actor,at}. */
  log: function (orderId) {
    var adj = this.adjustments(orderId),
      self = this;
    return (this.SEED[orderId] || []).concat(this.read()[orderId] || []).map(function (r) {
      var row = {};
      for (var k in r) row[k] = r[k];
      row._key = self.chargeKey(r);
      row._event = self.isEvent(r);
      var a = adj[row._key];
      if (a) {
        row._original = r.amount;
        row._adjustment = a;
        row.amount = a.amount;
      }
      return row;
    });
  }
};

/* ── OrderNotes — internal notes / customer instructions on an order ─────────
   Free-text note attached to an order, editable from order-view.html. Kept as
   a single current value here for the prototype, but modelled append-only so
   the backend keeps an authored history.
   BACKEND  table order_notes { id, order_id FK→orders.id, body text,
            author_id FK→users.id, created_at, updated_at }
     .get(orderId)         GET   /api/v1/orders/{id}/note   → { body, updated_at, author }
     .save(orderId, body)  PUT   /api/v1/orders/{id}/note   (upsert; server stamps
                           author + updated_at and appends an audit row)
   Persisted to localStorage so edits survive reload (prototype only). */
var OrderNotes = {
  KEY: "fleet_order_notes",
  /* Demo seed so the note surfaces on the order + shipping label out of the box. */
  defaults: {
    ord_10500: {
      body: "Call the customer 15 min before arrival. Gate code 4471 — if no answer, leave the parcel with the building concierge.",
      author: "Dana Owais",
      updated_at: "2026-07-11 12:09"
    }
  },
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  get: function (orderId) {
    return this.read()[orderId] || this.defaults[orderId] || null;
  },
  save: function (orderId, body, author) {
    var all = this.read();
    all[orderId] = {
      body: String(body || ""),
      author: author || "Dana Owais",
      updated_at: new Date().toISOString().slice(0, 16).replace("T", " ")
    };
    try {
      localStorage.setItem(this.KEY, JSON.stringify(all));
    } catch (e) {}
    return all[orderId];
  }
};

/* ── Removing an order from a shipment ──────────────────────────────────────
   Allowed only while the shipment has NOT started (draft / assigned). Once it
   is in progress the manifest the driver carries is fixed, and a completed or
   cancelled shipment is history. A removed order keeps no trace of the trip and
   returns to the routable pool, so it can be planned into another shipment.
   Stored as an overlay because the demo shipments live in memory.
   BACKEND: DELETE /api/v1/shipments/{id}/orders/{order_id} — the server refuses
   once shipment.status ∈ (in-progress, completed, cancelled), unlinks the leg
   rows, deletes legs left empty and resets the order to 'ready'. */
var SHP_LOCKED_FOR_EDIT = {
  "in-progress": 1,
  completed: 1,
  cancelled: 1
};
function SHP_CAN_EDIT_ORDERS(shp) {
  return !!shp && !SHP_LOCKED_FOR_EDIT[shp.status];
}
var ShipmentOrders = {
  KEY: "fleet_shipment_removed_orders",
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  removed: function (shipmentId) {
    return (this.read()[shipmentId] || []).slice();
  },
  remove: function (shipmentId, orderId) {
    var all = this.read();
    var list = all[shipmentId] = all[shipmentId] || [];
    if (list.indexOf(orderId) < 0) list.push(orderId);
    try {
      localStorage.setItem(this.KEY, JSON.stringify(all));
    } catch (e) {}
  }
};
/* Drop removed orders (and any leg left empty) from a shipment in place. */
function SHP_APPLY_REMOVALS(shp) {
  if (!shp) return shp;
  var gone = ShipmentOrders.removed(shp.id);
  if (!gone.length) return shp;
  (shp.legs || []).forEach(function (l) {
    l.order_ids = (l.order_ids || []).filter(function (id) {
      return gone.indexOf(id) < 0;
    });
  });
  shp.legs = (shp.legs || []).filter(function (l) {
    return (l.order_ids || []).length;
  });
  return shp;
}
function SHP_APPLY_ALL_REMOVALS(list) {
  (list || []).forEach(SHP_APPLY_REMOVALS);
}
var OpsState = {
  KEY: "fleet_ops_state",
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {
        orders: {},
        outcomes: {},
        attempts: {}
      };
    } catch (e) {
      return {
        orders: {},
        outcomes: {},
        attempts: {}
      };
    }
  },
  write: function (st) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(st));
    } catch (e) {}
  },
  /* persist the mutable order fields */
  saveOrder: function (o) {
    var st = this.read();
    st.orders[o.id] = {
      status: o.status,
      attempts_count: o.attempts_count || 0,
      delivered_at: o.delivered_at || null,
      current_hub_id: o.current_hub_id || null,
      scheduled_at: o.scheduled_at || null,
      cod_collected: !!o.cod_collected,
      cod_collected_at: o.cod_collected_at || null
    };
    this.write(st);
  },
  /* persist a leg-order outcome */
  saveOutcome: function (shipmentId, legSeq, orderId, oc) {
    var st = this.read();
    st.outcomes[shipmentId] = st.outcomes[shipmentId] || {};
    st.outcomes[shipmentId][legSeq] = st.outcomes[shipmentId][legSeq] || {};
    st.outcomes[shipmentId][legSeq][orderId] = oc;
    this.write(st);
  },
  /* persist a delivery attempt (table delivery_attempts) */
  saveAttempt: function (orderId, row) {
    var st = this.read();
    row.at = row.at || new Date().toISOString().slice(0, 16).replace("T", " ");
    (st.attempts[orderId] = st.attempts[orderId] || []).push(row);
    this.write(st);
  },
  attempts: function (orderId) {
    return (this.read().attempts[orderId] || []).slice();
  }
};

/* Overlay saved order state onto the in-memory demo rows (call after data load). */
function OPS_APPLY_ORDERS(list) {
  var st = OpsState.read();
  (list || []).forEach(function (o) {
    var s = st.orders[o.id];
    if (!s) return;
    o.status = s.status;
    o.attempts_count = s.attempts_count;
    o.delivered_at = s.delivered_at;
    o.current_hub_id = s.current_hub_id;
    if (s.scheduled_at) o.scheduled_at = s.scheduled_at;
    if (s.cod_collected) {
      o.cod_collected = true;
      o.cod_collected_at = s.cod_collected_at;
    }
  });
}
/* Overlay saved outcomes onto a shipment's legs. */
function OPS_APPLY_SHIPMENT(shp) {
  var st = OpsState.read();
  var saved = st.outcomes[shp.id];
  if (!saved) return;
  (shp.legs || []).forEach(function (l) {
    var m = saved[l.seq];
    if (!m) return;
    l.order_outcomes = l.order_outcomes || {};
    Object.keys(m).forEach(function (oid) {
      l.order_outcomes[oid] = m[oid];
    });
  });
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/ops-store.js", error: String((e && e.message) || e) }); }

// pages/order-actions.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   ORDER ACTIONS — the business logic behind the lifecycle buttons.
   Loaded AFTER order-data.js, pricing-data.js, returns-data.js, ops-store.js,
   activity-data.js (AuditStore). Consumed by order-view.html and orders.html.

   Two layers:
   1) PRIMITIVES (implemented once, reused everywhere): transition, attempt,
      charge, quote, collectCOD, openReturn, refund, notify.
   2) ORDER_ACTIONS[status] → [{ key, label, tone, icon, to?, run(order,ctx) }]
      — exactly the actions allowed for that status (mirror of ORDER_NEXT), each
      wired to its side-effects. Terminal statuses expose [].

   All amounts come from the engine (PRICING_APPLY_EVENT / PRICING_QUOTE); the UI
   never invents money. Every transition writes an audit_log row + toasts.
   Prototype persistence: OpsState (order status/attempts) + OrderCharges (ledger)
   + AuditStore (audit) all mirror to localStorage.
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function lbl(status) {
    return (ORDER_STATUS_M[status] || {
      l: status
    }).l;
  }
  function svaOf(order) {
    /* the order's destination service area (for pricing context). Demo: derive
       from the store's first contract; backend resolves by the delivery point. */
    var s = typeof STORE_BY_ID === 'function' && STORE_BY_ID(order.store_id);
    return s && s.contracts && s.contracts[0] ? s.contracts[0].service_area_id : null;
  }
  function ctxOf(order) {
    return {
      service_area_id: svaOf(order)
    };
  }

  /* ── PRIMITIVES ───────────────────────────────────────────────────────────── */

  /* transition: guarded status change + audit + toast. Returns true/false. */
  function transition(order, to, opts) {
    opts = opts || {};
    if (!ORDER_CAN_TRANSITION(order.status, to)) {
      fleetToast('danger', 'Not allowed', order.ref + ': ' + lbl(order.status) + ' → ' + lbl(to) + ' is not a legal transition.');
      return false;
    }
    var from = order.status;
    order.status = to;
    if (to === 'delivered') order.delivered_at = now();
    if (typeof OpsState !== 'undefined') OpsState.saveOrder(order);
    if (typeof AuditStore !== 'undefined') AuditStore.append('order', order.id, {
      actor: 'Dana Owais',
      action: 'status',
      field: 'status',
      old: lbl(from),
      new: lbl(to)
    });
    /* Bilingual order-activity row (Section 4 audit trail). */
    if (typeof OrderActivity !== 'undefined') OrderActivity.logStatus(order.id, from, to, 'Dana Owais');
    if (!opts.silent) fleetToast(opts.tone || 'success', opts.title || 'Status changed', order.ref + ' · ' + lbl(to));
    return true;
  }

  /* attempt: record a delivery_attempts row + bump attempts_count. */
  function attempt(order, result, reason_code, next_at, proof_type) {
    order.attempts_count = (order.attempts_count || 0) + 1;
    var row = {
      attempt_no: order.attempts_count,
      result: result,
      reason_code: reason_code || null,
      next_at: next_at || null,
      proof_type: proof_type || 'none'
    };
    if (typeof OpsState !== 'undefined') {
      OpsState.saveAttempt(order.id, row);
      OpsState.saveOrder(order);
    }
    return row;
  }

  /* charge: run the pricing event and append the returned rows to the ledger.
     Billable gating lives inside the engine — we just append whatever it returns. */
  function charge(order, event) {
    if (typeof PRICING_APPLY_EVENT !== 'function' || typeof OrderCharges === 'undefined') return [];
    var rows = PRICING_APPLY_EVENT(order, event, ctxOf(order)) || [];
    if (rows.length) OrderCharges.append(order.id, rows);
    return rows;
  }

  /* quote: base price snapshot into the ledger (only if not already quoted). */
  function quote(order) {
    if (typeof PRICING_QUOTE !== 'function' || typeof OrderCharges === 'undefined') return null;
    var store = typeof STORE_BY_ID === 'function' && STORE_BY_ID(order.store_id);
    var kg = typeof ORDER_CHARGEABLE_KG === 'function' ? ORDER_CHARGEABLE_KG(order, 5000) : 0;
    var q = PRICING_QUOTE(order, {
      store: store,
      service_area_id: svaOf(order),
      chargeable_kg: kg
    });
    if (q && q.charges) OrderCharges.append(order.id, q.charges);
    return q;
  }

  /* collectCOD: on delivery only; records the collected cash for store settlement. */
  function collectCOD(order) {
    if (order.payment_method !== 'cod' || !order.cod_amount) return 0;
    order._cod_collected = order.cod_amount;
    if (typeof OpsState !== 'undefined') OpsState.saveOrder(order);
    return order.cod_amount;
  }

  /* openReturn: create a return_requests row linked to the order. Refund amount
     set only when the reason is refundable. */
  function openReturn(order, reason_code, dest) {
    if (typeof RETURN_REQUESTS === 'undefined') return null;
    var refundable = typeof RETURN_IS_REFUNDABLE === 'function' && RETURN_IS_REFUNDABLE(reason_code);
    var rtn = {
      id: 'rtn_' + Date.now(),
      public_id: 'rtn_' + Date.now(),
      order_id: order.id,
      reason_code: reason_code,
      destination: dest || 'hub',
      status: 'requested',
      refund_amount: refundable ? typeof ORDER_TOTAL === 'function' ? ORDER_TOTAL(order) : null : null,
      refund_status: refundable ? 'pending' : 'none',
      shipment_id: null,
      created_at: now()
    };
    RETURN_REQUESTS.push(rtn);
    if (typeof OrderActivity !== 'undefined') OrderActivity.logReturn(order.id, rtn.public_id || rtn.id, 'Dana Owais');
    return rtn;
  }

  /* refund: credit the customer against a return request. */
  function refund(order) {
    if (typeof RETURN_REQUESTS === 'undefined') return 0;
    var rtn = RETURN_REQUESTS.filter(function (r) {
      return r.order_id === order.id;
    }).pop();
    if (!rtn || rtn.refund_amount == null) return 0;
    rtn.refund_status = 'paid';
    return rtn.refund_amount;
  }
  function advanceReturn(order, to) {
    if (typeof RETURN_REQUESTS === 'undefined') return;
    var rtn = RETURN_REQUESTS.filter(function (r) {
      return r.order_id === order.id;
    }).pop();
    if (rtn && (typeof RETURN_CAN_TRANSITION !== 'function' || RETURN_CAN_TRANSITION(rtn.status, to))) rtn.status = to;
  }
  function notify(who, msg) {
    try {
      console.log('[notify:' + who + '] ' + msg);
    } catch (e) {}
  }
  function now() {
    return new Date().toISOString().slice(0, 16).replace('T', ' ');
  }

  /* ── Reason picker (shared modal) ─────────────────────────────────────────── */
  function pickReason(kind, cb) {
    /* kind: 'failure' | 'return' → choose the lookup + refundable/billable note */
    var list = kind === 'return' ? typeof RETURN_REASONS !== 'undefined' ? RETURN_REASONS : [] : typeof FAILURE_REASONS !== 'undefined' ? FAILURE_REASONS : [];
    var m = ensureReasonModal();
    document.getElementById('or-reasonTitle').textContent = kind === 'return' ? 'Return reason' : 'Failure reason';
    var sel = document.getElementById('or-reasonSel');
    sel.innerHTML = list.map(function (r) {
      var note = kind === 'return' ? r.refundable ? ' · refundable' : '' : r.billable ? ' · billable' : '';
      return '<option value="' + r.code + '">' + r.label_en + note + '</option>';
    }).join('');
    var destWrap = document.getElementById('or-destWrap');
    destWrap.classList.toggle('is-hidden', kind !== 'return');
    m.classList.remove('is-hidden');
    document.getElementById('or-reasonOk').onclick = function () {
      m.classList.add('is-hidden');
      cb({
        reason_code: sel.value,
        dest: kind === 'return' ? document.getElementById('or-destSel').value : null
      });
    };
  }
  function ensureReasonModal() {
    var m = document.getElementById('orReasonModal');
    if (m) return m;
    m = document.createElement('div');
    m.className = 'fds-modal-scrim is-hidden';
    m.id = 'orReasonModal';
    m.innerHTML = '<div class="fds-modal fds-modal--sm" role="dialog" aria-modal="true">' + '<div class="fds-modal__head"><h2 class="fds-modal__title" id="or-reasonTitle">Reason</h2>' + '<button class="fds-modal__close" data-close aria-label="Close">' + fleetIcon('x', 18) + '</button></div>' + '<div class="fds-modal__body" style="display:flex;flex-direction:column;gap:var(--space-4)">' + '<div class="fds-field"><label class="fds-field__label" for="or-reasonSel">Reason</label><select class="fds-select" id="or-reasonSel"></select></div>' + '<div class="fds-field is-hidden" id="or-destWrap"><label class="fds-field__label" for="or-destSel">Send to</label>' + '<select class="fds-select" id="or-destSel"><option value="hub">Hub</option><option value="store">Store</option></select></div>' + '</div>' + '<div class="fds-modal__foot"><button class="fds-btn fds-btn--ghost" data-close>Cancel</button>' + '<button class="fds-btn fds-btn--primary" id="or-reasonOk">Confirm</button></div></div>';
    document.body.appendChild(m);
    m.querySelectorAll('[data-close]').forEach(function (b) {
      b.addEventListener('click', function () {
        m.classList.add('is-hidden');
      });
    });
    return m;
  }

  /* ── Per-status ACTION MAP ────────────────────────────────────────────────── */
  /* Each run(order, done) performs the side-effects then calls done() to re-render.
     Actions with a confirm wrap themselves in fleetConfirm. */
  var A = {};
  A.pending = [{
    key: 'assign',
    label: 'Assign to shipment',
    tone: 'primary',
    icon: 'navigation',
    run: function (o, done) {
      if (transition(o, 'assigned', {
        title: 'Assigned'
      })) {
        quote(o);
        notify('store', o.ref + ' assigned');
        done();
      }
    }
  }, {
    key: 'cancel',
    label: 'Cancel',
    tone: 'danger',
    icon: 'x',
    run: function (o, done) {
      fleetConfirm({
        title: 'Cancel order?',
        tone: 'danger',
        icon: 'x',
        message: o.ref + ' will be cancelled.',
        confirmLabel: 'Cancel order',
        onConfirm: function () {
          if (transition(o, 'cancelled', {
            tone: 'danger',
            title: 'Cancelled'
          })) done();
        }
      });
    }
  }];
  A.assigned = [{
    key: 'pickup',
    label: 'Mark picked up',
    tone: 'primary',
    icon: 'check',
    run: function (o, done) {
      if (transition(o, 'picked_up', {
        title: 'Picked up'
      })) done();
    }
  }, {
    key: 'cancel',
    label: 'Cancel',
    tone: 'danger',
    icon: 'x',
    run: function (o, done) {
      fleetConfirm({
        title: 'Cancel order?',
        tone: 'danger',
        icon: 'x',
        message: o.ref + ' will leave the shipment and be cancelled.',
        confirmLabel: 'Cancel order',
        onConfirm: function () {
          if (transition(o, 'cancelled', {
            tone: 'danger',
            title: 'Cancelled'
          })) done();
        }
      });
    }
  }];
  A.picked_up = [{
    key: 'athub',
    label: 'Arrive at hub',
    tone: 'primary',
    icon: 'building',
    run: function (o, done) {
      if (transition(o, 'at_hub', {
        title: 'At hub'
      })) {
        o.current_hub_id = o.current_hub_id || (typeof HUBS !== 'undefined' && HUBS[0] ? HUBS[0].id : null);
        if (typeof OpsState !== 'undefined') OpsState.saveOrder(o);
        done();
      }
    }
  }, {
    key: 'direct',
    label: 'Deliver directly',
    tone: 'secondary',
    icon: 'navigation',
    run: function (o, done) {
      if (transition(o, 'out_for_delivery', {
        title: 'Out for delivery'
      })) done();
    }
  }];
  A.at_hub = [{
    key: 'dispatch',
    label: 'Dispatch out',
    tone: 'primary',
    icon: 'navigation',
    run: function (o, done) {
      if (transition(o, 'out_for_delivery', {
        title: 'Out for delivery'
      })) done();
    }
  }, {
    key: 'transfer',
    label: 'Transfer hub',
    tone: 'secondary',
    icon: 'building',
    run: function (o, done) {
      /* stays at_hub; move current_hub_id to the next hub (demo: pick another) */
      if (typeof HUBS === 'undefined') {
        done();
        return;
      }
      var others = HUBS.filter(function (h) {
        return h.id !== o.current_hub_id;
      });
      if (!others.length) {
        fleetToast('info', 'No other hub', 'Only one hub exists.');
        return;
      }
      o.current_hub_id = others[0].id;
      if (typeof OpsState !== 'undefined') OpsState.saveOrder(o);
      if (typeof AuditStore !== 'undefined') AuditStore.append('order', o.id, {
        actor: 'Dana Owais',
        action: 'assign',
        field: 'hub',
        new: typeof SHP_LOC_NAME === 'function' ? SHP_LOC_NAME('hub', others[0].id) : others[0].id
      });
      fleetToast('success', 'Transferred', o.ref + ' → ' + (typeof SHP_LOC_NAME === 'function' ? SHP_LOC_NAME('hub', others[0].id) : others[0].id));
      done();
    }
  }];
  A.out_for_delivery = [{
    key: 'delivered',
    label: 'Mark delivered',
    tone: 'primary',
    icon: 'check-circle',
    run: function (o, done) {
      fleetConfirm({
        title: 'Mark delivered?',
        tone: 'primary',
        icon: 'check-circle',
        message: o.ref + (o.payment_method === 'cod' ? ' · collect ' + money(o.cod_amount) + ' COD' : '') + '.',
        confirmLabel: 'Mark delivered',
        onConfirm: function () {
          if (!transition(o, 'delivered', {
            title: 'Delivered'
          })) return;
          attempt(o, 'delivered', null, null, 'signature');
          var cod = collectCOD(o);
          quote(o);
          notify('store', o.ref + ' delivered');
          if (cod) fleetToast('info', 'COD collected', money(cod) + ' from ' + o.ref);
          done();
        }
      });
    }
  }, {
    key: 'failed',
    label: 'Mark failed',
    tone: 'danger',
    icon: 'alert-circle',
    run: function (o, done) {
      pickReason('failure', function (r) {
        if (!transition(o, 'delivery_failed', {
          tone: 'danger',
          title: 'Delivery failed'
        })) return;
        attempt(o, 'failed', r.reason_code);
        var rows = charge(o, {
          type: 'failed_attempt',
          reason_code: r.reason_code,
          attempt_no: o.attempts_count
        });
        notify('customer', o.ref + ' attempt failed');
        fleetToast('danger', 'Delivery failed', o.ref + ' · attempt ' + o.attempts_count + (rows.length ? ' · charged' : ''));
        done();
      });
    }
  }];
  A.delivered = [{
    key: 'return',
    label: 'Start return',
    tone: 'secondary',
    icon: 'refresh',
    run: function (o, done) {
      pickReason('return', function (r) {
        if (!transition(o, 'returning', {
          title: 'Returning'
        })) return;
        var rtn = openReturn(o, r.reason_code, r.dest);
        charge(o, {
          type: 'return',
          dest: r.dest,
          reason_code: r.reason_code
        });
        var msg = o.ref + ' → return to ' + (RETURN_DEST_M[r.dest] || {
          l: r.dest
        }).l;
        if (rtn && rtn.refund_amount != null) msg += ' · refund ' + money(rtn.refund_amount) + ' scheduled';
        fleetToast('success', 'Return started', msg);
        done();
      });
    }
  }];
  A.delivery_failed = [{
    key: 'resched',
    label: 'Reschedule',
    tone: 'primary',
    icon: 'refresh',
    run: function (o, done) {
      var next = new Date(Date.now() + 86400000).toISOString().slice(0, 16).replace('T', ' ');
      if (!transition(o, 'rescheduled', {
        title: 'Rescheduled'
      })) return;
      o.scheduled_at = next;
      if (typeof OpsState !== 'undefined') OpsState.saveOrder(o);
      attempt(o, 'rescheduled', null, next);
      charge(o, {
        type: 'reschedule',
        next_at: next
      });
      notify('customer', o.ref + ' rescheduled');
      fleetToast('info', 'Rescheduled', o.ref + ' · ' + next);
      done();
    }
  }, {
    key: 'retry',
    label: 'Retry now',
    tone: 'secondary',
    icon: 'navigation',
    run: function (o, done) {
      if (transition(o, 'out_for_delivery', {
        title: 'Out for delivery'
      })) done();
    }
  }, {
    key: 'sendback',
    label: 'Send back',
    tone: 'danger',
    icon: 'refresh',
    run: function (o, done) {
      pickReason('return', function (r) {
        if (!transition(o, 'returning', {
          tone: 'danger',
          title: 'Returning'
        })) return;
        var rtn = openReturn(o, r.reason_code, r.dest);
        charge(o, {
          type: 'return',
          dest: r.dest,
          reason_code: r.reason_code
        });
        fleetToast('info', 'Sending back', o.ref + ' → ' + (RETURN_DEST_M[r.dest] || {
          l: r.dest
        }).l);
        done();
      });
    }
  }];
  A.rescheduled = [{
    key: 'ofd',
    label: 'Out for delivery',
    tone: 'primary',
    icon: 'navigation',
    run: function (o, done) {
      if (transition(o, 'out_for_delivery', {
        title: 'Out for delivery'
      })) done();
    }
  }, {
    key: 'cancel',
    label: 'Cancel',
    tone: 'danger',
    icon: 'x',
    run: function (o, done) {
      fleetConfirm({
        title: 'Cancel order?',
        tone: 'danger',
        icon: 'x',
        message: o.ref + ' will be cancelled.',
        confirmLabel: 'Cancel order',
        onConfirm: function () {
          if (transition(o, 'cancelled', {
            tone: 'danger',
            title: 'Cancelled'
          })) done();
        }
      });
    }
  }];
  A.returning = [{
    key: 'received',
    label: 'Mark received',
    tone: 'primary',
    icon: 'check-circle',
    run: function (o, done) {
      if (!transition(o, 'returned', {
        title: 'Returned'
      })) return;
      advanceReturn(o, 'received');
      var amt = refund(o);
      notify('customer', o.ref + ' returned');
      fleetToast('success', 'Returned', o.ref + (amt ? ' · refunded ' + money(amt) : ''));
      done();
    }
  }];
  A.returned = [];
  A.cancelled = [];

  /* Public: the actions for an order's current status. Empty only when the state
     has NO legal next states (returned / cancelled). 'delivered' is terminal-
     forward — it still allows delivered → returning, so it keeps its action. */
  function actionsFor(order) {
    if (!order) return [];
    if ((ORDER_NEXT[order.status] || []).length === 0) return [];
    return (A[order.status] || []).slice();
  }
  function money(n) {
    return 'SAR ' + (Number(n) || 0).toFixed(2);
  }
  window.OrderActions = {
    actionsFor: actionsFor,
    // expose primitives for pages that want them directly
    transition: transition,
    attempt: attempt,
    charge: charge,
    quote: quote,
    collectCOD: collectCOD,
    openReturn: openReturn,
    refund: refund,
    notify: notify,
    money: money
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/order-actions.js", error: String((e && e.message) || e) }); }

// pages/order-activity.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   ORDER ACTIVITY / HISTORY — the immutable, chronological audit trail an order
   carries for its whole life. Shared by order-view.html (the History tab) and
   written by order-edit.html (create), order-actions.js (status + return) and
   shipment-routing.js (assignment).

   ════════════════════════════════════════════════════════════════════════════
   DATA MODEL
   table: order_activities                 -- append-only; NEVER updated/deleted
     id             bigint  PK
     order_id       bigint  FK → orders.id (ON DELETE CASCADE)
     timestamp      datetime  -- when the event happened (server clock)
     event_type     enum [created, status, assigned, return, updated]
     description_en text      -- human sentence, English   (rendered LTR)
     description_ar text      -- human sentence, Arabic     (rendered RTL)
     performed_by   string    -- actor display name (user or "System")
     UNIQUE — none; rows are strictly append-only and ordered by timestamp.

   The backend writes ONE row automatically on every lifecycle event
   (OrderCreated, OrderStatusChanged, OrderAssigned, ReturnInitiated). The
   frontend seeds a demo trail here and mirrors new rows to localStorage so
   activity logged in the prototype survives a reload — exactly the AuditStore
   pattern (activity-data.js), but with a BILINGUAL description per the i18n spec.
     GET  /api/v1/orders/{id}/activities        → rows, newest first
     (writes happen server-side inside the domain-event listeners)
   ════════════════════════════════════════════════════════════════════════════ */

/* event_type → { icon, tone } for the timeline dot + glyph. */
var ORDER_ACTIVITY_TYPE_M = {
  created: {
    icon: "plus",
    tone: "primary"
  },
  status: {
    icon: "refresh",
    tone: "info"
  },
  assigned: {
    icon: "navigation",
    tone: "info"
  },
  return: {
    icon: "refresh",
    tone: "warning"
  },
  charge: {
    icon: "columns",
    tone: "warning"
  },
  updated: {
    icon: "edit",
    tone: "neutral"
  }
};

/* Bilingual status labels (mirror of ORDER_STATUS_M's English `l`, with the
   Arabic taken from the order-data.js data-model comments). One source of truth
   for both the History descriptions and any RTL badge that needs a status word. */
var ORDER_STATUS_AR = {
  draft: "مسودة",
  ready: "جاهز",
  allocated: "مُخصَّص",
  picked_up: "تم الاستلام",
  at_hub: "في المستودع",
  missed: "لم يصل للمستودع",
  out_for_delivery: "خارج للتوصيل",
  delivery_failed: "فشل التسليم",
  returned_to_hub: "مرتجع للمستودع",
  delivered: "تم التسليم",
  returned_to_store: "مرتجع للمتجر",
  cancelled: "مُلغى",
  /* legacy aliases */
  pending: "مسودة",
  assigned: "مُخصَّص",
  "en-route": "خارج للتوصيل",
  rescheduled: "أُعيد جدولته",
  returning: "قيد الإرجاع",
  returned: "مرتجع للمتجر"
};
function ORDER_STATUS_LABEL(status, lang) {
  if (lang === "ar") return ORDER_STATUS_AR[status] || status;
  return typeof ORDER_STATUS_M !== "undefined" && ORDER_STATUS_M[status] && ORDER_STATUS_M[status].l || status;
}

/* ── Seed trail (demo). Real trails are grown by the domain events. ────────── */
var ORDER_ACTIVITY_SEED = {
  ord_10500: [{
    timestamp: "2026-06-26 13:10",
    event_type: "created",
    performed_by: "Dana Owais",
    description_en: "Order created",
    description_ar: "تم إنشاء الطلب"
  }, {
    timestamp: "2026-06-26 14:02",
    event_type: "status",
    performed_by: "Dana Owais",
    description_en: "Status changed: Draft → Ready",
    description_ar: "تغيّرت الحالة: مسودة → جاهز"
  }, {
    timestamp: "2026-06-26 15:20",
    event_type: "assigned",
    performed_by: "Karim Adel",
    description_en: "Assigned to Driver Layla Hassan on Shipment SHP-2043",
    description_ar: "تم تعيين الطلب للسائق ليلى حسن في الشحنة SHP-2043"
  }, {
    timestamp: "2026-06-26 16:45",
    event_type: "status",
    performed_by: "Karim Adel",
    description_en: "Status changed: Allocated → At hub",
    description_ar: "تغيّرت الحالة: مُخصَّص → في المستودع"
  }],
  ord_10498: [{
    timestamp: "2026-06-25 09:00",
    event_type: "created",
    performed_by: "Dana Owais",
    description_en: "Order created",
    description_ar: "تم إنشاء الطلب"
  }, {
    timestamp: "2026-06-25 18:20",
    event_type: "status",
    performed_by: "System",
    description_en: "Status changed: Out for delivery → Delivered",
    description_ar: "تغيّرت الحالة: خارج للتوصيل → تم التسليم"
  }],
  /* Sample Case A — delivered order (ORD-901-DEL) that later spawned an ACTIVE
     return (ORD-901-RET). Full happy-path lifecycle ending in a return event. */
  ord_901_del: [{
    timestamp: "2026-07-13 09:15",
    event_type: "created",
    performed_by: "Najm Market",
    description_en: "Order created as Draft by Najm Market",
    description_ar: "تم إنشاء الطلب كمسودة بواسطة متجر نجم"
  }, {
    timestamp: "2026-07-13 10:30",
    event_type: "assigned",
    performed_by: "Karim Adel",
    description_en: "Assigned to Driver Layla Hassan on Shipment #SH-0042",
    description_ar: "تم تعيين الطلب للسائق ليلى حسن في الشحنة رقم #SH-0042"
  }, {
    timestamp: "2026-07-14 11:00",
    event_type: "status",
    performed_by: "Layla Hassan",
    description_en: "Out for delivery with driver Layla Hassan",
    description_ar: "الطلب خارج للتوصيل مع السائق ليلى حسن"
  }, {
    timestamp: "2026-07-14 12:15",
    event_type: "status",
    performed_by: "Layla Hassan",
    description_en: "Delivered successfully to Aisha Rahman",
    description_ar: "تم التوصيل بنجاح إلى عائشة الرحمن"
  }, {
    timestamp: "2026-07-14 13:00",
    event_type: "return",
    performed_by: "Dana Owais",
    description_en: "Return order ORD-901-RET initiated (Reason: Wrong size)",
    description_ar: "تم إنشاء طلب مرتجع رقم ORD-901-RET (السبب: مقاس خاطئ)"
  }],
  /* Sample Case B — failed first attempt then re-scheduled (ORD-902-DEL). */
  ord_902_del: [{
    timestamp: "2026-07-12 14:00",
    event_type: "created",
    performed_by: "BlueCart Store",
    description_en: "Order created by BlueCart Store",
    description_ar: "تم إنشاء الطلب بواسطة متجر بلوكارت"
  }, {
    timestamp: "2026-07-13 08:00",
    event_type: "status",
    performed_by: "Capt. Ahmad",
    description_en: "Out for delivery with driver Capt. Ahmad",
    description_ar: "الطلب خارج للتوصيل مع السائق كابتن أحمد"
  }, {
    timestamp: "2026-07-13 15:30",
    event_type: "status",
    performed_by: "Capt. Ahmad",
    description_en: "First attempt failed: Customer was not present",
    description_ar: "فشلت محاولة التوصيل الأولى: العميل غير متواجد في الموقع"
  }, {
    timestamp: "2026-07-14 09:00",
    event_type: "updated",
    performed_by: "Karim Adel",
    description_en: "Delivery date rescheduled to tomorrow by dispatcher",
    description_ar: "تم إعادة جدولة تاريخ التوصيل إلى الغد بواسطة المسؤول"
  }]
};
var OrderActivity = {
  KEY: "fleet_order_activities",
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  /* append a bilingual row (server does this on the matching domain event). */
  append: function (orderId, row) {
    var all = this.read();
    row.timestamp = row.timestamp || new Date().toISOString().slice(0, 16).replace("T", " ");
    (all[orderId] = all[orderId] || []).push(row);
    try {
      localStorage.setItem(this.KEY, JSON.stringify(all));
    } catch (e) {}
    return row;
  },
  /* GET .../activities → seed + appended, NEWEST FIRST (chronological desc). */
  log: function (orderId) {
    var seeded = (ORDER_ACTIVITY_SEED[orderId] || []).slice();
    var stored = (this.read()[orderId] || []).slice();
    return seeded.concat(stored).sort(function (a, b) {
      return String(b.timestamp).localeCompare(String(a.timestamp));
    });
  },
  /* ── Typed helpers (bilingual sentence builders) ─────────────────────────── */
  logCreated: function (orderId, actor) {
    return this.append(orderId, {
      event_type: "created",
      performed_by: actor || "Dana Owais",
      description_en: "Order created",
      description_ar: "تم إنشاء الطلب"
    });
  },
  logStatus: function (orderId, from, to, actor) {
    return this.append(orderId, {
      event_type: "status",
      performed_by: actor || "Dana Owais",
      description_en: "Status changed: " + ORDER_STATUS_LABEL(from, "en") + " → " + ORDER_STATUS_LABEL(to, "en"),
      description_ar: "تغيّرت الحالة: " + ORDER_STATUS_LABEL(from, "ar") + " → " + ORDER_STATUS_LABEL(to, "ar")
    });
  },
  logAssigned: function (orderId, driverName, shipmentId, actor) {
    return this.append(orderId, {
      event_type: "assigned",
      performed_by: actor || "Dana Owais",
      description_en: "Assigned to Driver " + driverName + " on Shipment " + shipmentId,
      description_ar: "تم تعيين الطلب للسائق " + driverName + " في الشحنة " + shipmentId
    });
  },
  logReturn: function (orderId, returnId, actor) {
    return this.append(orderId, {
      event_type: "return",
      performed_by: actor || "Dana Owais",
      description_en: "Return order " + returnId + " initiated",
      description_ar: "تم إنشاء طلب مرتجع رقم " + returnId
    });
  },
  /* Event fee waived or corrected by an operator — amounts + the mandatory
     reason land in the audit trail. */
  logChargeAdjusted: function (orderId, label, from, to, reason, actor) {
    var f = Number(from || 0).toFixed(2),
      t = Number(to || 0).toFixed(2);
    var waived = Number(to || 0) === 0;
    return this.append(orderId, {
      event_type: "charge",
      performed_by: actor || "Dana Owais",
      description_en: (waived ? "Event fee waived" : "Event fee changed") + ": " + label + " SAR " + f + " → SAR " + t + " · " + reason,
      description_ar: (waived ? "إلغاء رسوم حدث" : "تعديل رسوم حدث") + ": " + label + " من " + f + " إلى " + t + " ر.س · " + reason
    });
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/order-activity.js", error: String((e && e.message) || e) }); }

// pages/order-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   ORDER + ITEM demo data + contract. Section: "Manage".
   Shared by orders.html, order-edit.html.  GET /api/v1/orders , /api/v1/items.

   ════════════════════════════════════════════════════════════════════════════
   DATA MODEL  (multi-tenant: every table carries org_id, omitted below)
   ════════════════════════════════════════════════════════════════════════════
   table: items                            -- catalog of things that can be ordered
     id            bigint  PK
     public_id     string  unique, "itm_xxxxxx"
     name          string  required                      (اسم الصنف)
     sku           string  required, unique per org      (كود الصنف)
     description   string  nullable
     price         decimal(10,2) nullable                (السعر الأصلي)
     sale_price    decimal(10,2) required                (سعر البيع)
     length_cm     decimal(8,2)  nullable  \
     width_cm      decimal(8,2)  nullable   |  Measurements & Weight (optional)
     height_cm     decimal(8,2)  nullable   |
     weight_kg     decimal(8,2)  nullable  /
     created_at / updated_at

   table: orders
     id              bigint  PK
     public_id       string  unique, "ord_xxxxxx"
     ref             string  human ref e.g. "#SO-10500" (auto)
     store_id        bigint  FK → stores.id, required          (المتجر)
     customer_id     bigint  FK → customers.id, required       (العميل)
     customer_addr_id bigint FK → customer_addresses.id, required
                             -- MUST belong to customer_id (address dropdown is
                             -- filtered to the selected customer's addresses)

     ────────────────────────────────────────────────────────────────────────
     STATUS — the operational lifecycle of the order (توسعة السبيك).
     ────────────────────────────────────────────────────────────────────────
     status          enum default 'draft' — one of:
       draft            -- created, not yet released (soft-delete allowed)  (مسودة)
       ready            -- released & billable, awaiting allocation         (جاهز)
       allocated        -- placed on a shipment/leg, not moved yet          (تم التخصيص)
       picked_up        -- driver collected it FROM the store               (تم الاستلام من المتجر)
       at_hub           -- sitting inside a hub, waiting to be dispatched   (في المستودع)
       missed           -- picked up but never received/scanned at the hub (لم يصل للمستودع)
       out_for_delivery -- on the leg heading to the customer               (خارج للتوصيل)
       delivery_failed  -- an attempt failed (mandatory reason); NOT closed (فشل التسليم)
       returned_to_hub  -- came back to the hub after a failed attempt      (مرتجع للمستودع)
       delivered        -- handed to the customer  (TERMINAL)               (تم التسليم)
       returned_to_store-- returned all the way to the store  (TERMINAL)    (مرتجع للمتجر)
       cancelled        -- cancelled before execution (TERMINAL)            (ملغي)
     -- TERMINAL/CLOSED states {delivered, returned_to_store, cancelled} accept
     -- no further transitions. Only closed orders settle in Store payments.
     -- Every status change writes ONE row to audit_log (action='status',
     -- field='status', old/new = human label). See driver-activity.sample.md.
     -- Legal transitions (backend guard) — enforce in a state machine:
     --   draft            → ready                       (soft-delete allowed)
     --   ready            → allocated | cancelled       (soft-delete allowed)
     --   allocated        → picked_up | cancelled
     --   picked_up        → at_hub | missed | delivered
     --   missed           → picked_up | returned_to_hub
     --   at_hub           → out_for_delivery | returned_to_store
     --   out_for_delivery → delivered | delivery_failed  (fail needs a reason)
     --   delivery_failed  → returned_to_hub | missed      (→hub needs hub-admin confirm)
     --   returned_to_hub  → out_for_delivery | returned_to_store
     ────────────────────────────────────────────────────────────────────────
     FULFILMENT / LOCATION (nullable until assigned) — mirrors driver-activity
     ────────────────────────────────────────────────────────────────────────
     driver_id       bigint  FK → drivers.id, nullable   -- current driver
     vehicle_id      bigint  FK → vehicles.id, nullable  -- current vehicle
     current_hub_id  bigint  FK → hubs.id, nullable       -- where it rests now
                             -- (set when status='at_hub'; null otherwise)
     scheduled_at    datetime nullable  -- promised delivery window / reschedule
     delivered_at    datetime nullable  -- stamped on 'delivered'
     attempts_count  int      default 0 -- # of delivery_attempts rows so far

     ────────────────────────────────────────────────────────────────────────
     MONEY (السبيك المالي) — the order carries WHAT is collected; HOW MUCH the
     delivery costs is computed by the pricing engine (see pricing-data.js) and
     stored as line items in `order_charges`. Never hard-code a fee on the order.
     ────────────────────────────────────────────────────────────────────────
     payment_method  enum [prepaid, cod] default 'prepaid'  (طريقة الدفع)
                             -- prepaid: customer already paid the store online
                             -- cod    : driver collects cash on delivery
     cod_amount      decimal(10,2) default 0   -- cash to collect from customer
                             -- (goods value the STORE is owed; 0 when prepaid)
                             -- NOTE: the create/edit form no longer lets the
                             -- operator TYPE this — it mirrors the calculated
                             -- Grand Total (goods + delivery + surcharges) so the
                             -- "Amount to collect on delivery" can never drift.
     declared_value  decimal(10,2) default 0   -- goods value for insurance +
                             -- failed-delivery fees. Computed = items subtotal;
                             -- backend-only (never a form input) to cut clutter.
     is_rush         boolean default false  -- RUSH ORDER flag (⚡). When true the
                             -- pricing engine appends a distinct `rush` charge
                             -- (store contract rush → area default → org default)
                             -- and every list/detail/routing view flags it.
     currency        string(3) default 'SAR'
     rate_card_id    bigint  FK → pricing_profiles.id, nullable
                             -- the rate card RESOLVED for this order at pricing
                             -- time (snapshotted for auditability). null until priced.
     -- Computed, NOT stored on the row (derive from order_charges):
     --   delivery_fee_total, store_charges_total, customer_charges_total, vat_total
     created_at / updated_at

   table: order_items                       -- lines on an order (item + qty)
     id            bigint PK
     order_id      bigint FK → orders.id (ON DELETE CASCADE)
     item_id       bigint FK → items.id
     qty           int    required, >= 1
     unit_price    decimal(10,2)  -- snapshot of item.sale_price at order time

   VALIDATION (frontend + backend)
     order.store_id        : required
     order.customer_id     : required
     order.customer_addr_id: required, must belong to customer_id
     order.items[]         : at least 1 line; each qty >= 1
     item.name             : required
     item.sku              : required, unique per org
     item.sale_price       : required, > 0
     item.price/description/measurements : optional

   ENDPOINTS
     GET/POST/PATCH/DELETE /api/v1/orders[/{public_id}]
     GET  /api/v1/stores           (store picker)
     GET  /api/v1/customers        (customer picker; POST to create inline)
     GET  /api/v1/customers/{id}/addresses   (address picker)
     GET  /api/v1/items            (item picker; POST to create inline)
     -- lifecycle actions (each writes audit_log + may create charges/attempts):
     POST /api/v1/orders/{public_id}/status   { status, reason_code?, next_at? }
     POST /api/v1/orders/{public_id}/quote    → { data: order_charges preview }
                             -- dry-run the pricing engine without saving
     GET  /api/v1/orders/{public_id}/charges  → the order_charges ledger

   ════════════════════════════════════════════════════════════════════════════
   NestJS / Angular handoff notes
   ────────────────────────────────────────────────────────────────────────────
   • NestJS: model `status` with a typed enum + a StateMachine guard service that
     rejects illegal transitions (table above). Emit a domain event on each change
     (OrderStatusChanged) so the audit-log + pricing listeners react.
   • Pricing is a SEPARATE concern: on 'delivered' / 'delivery_failed' /
     'rescheduled' / 'returned', call PricingService.applyEvent(order, event) which
     appends to order_charges (see pricing-data.js §engine).
   • Angular: OrderStatus is a union type; ORDER_STATUS_M below is the single source
     for badge tone + label (mirror it in an Angular pipe/lookup). Signals hold the
     order; effects re-fetch charges when status flips.
   ════════════════════════════════════════════════════════════════════════════ */

var ITEMS = [{
  id: "itm_0001",
  name: "Bottled Water 24-pack",
  sku: "WTR-24",
  description: "500ml x24",
  price: 22.00,
  sale_price: 18.50,
  length_cm: 30,
  width_cm: 20,
  height_cm: 25,
  weight_kg: 12
}, {
  id: "itm_0002",
  name: "Rice 5kg bag",
  sku: "RICE-5",
  description: "Basmati",
  price: 40.00,
  sale_price: 35.00,
  length_cm: 40,
  width_cm: 25,
  height_cm: 10,
  weight_kg: 5
}, {
  id: "itm_0003",
  name: "Cooking Oil 1.8L",
  sku: "OIL-18",
  description: "",
  price: null,
  sale_price: 14.00,
  length_cm: 10,
  width_cm: 10,
  height_cm: 28,
  weight_kg: 1.8
}, {
  id: "itm_0004",
  name: "Detergent 3kg",
  sku: "DET-3",
  description: "Powder",
  price: 33.00,
  sale_price: 27.50,
  length_cm: 28,
  width_cm: 18,
  height_cm: 32,
  weight_kg: 3
}];
function ITEM_BY_ID(id) {
  return ITEMS.filter(function (i) {
    return i.id === id;
  })[0];
}

/* status → { tone, label }. Single source of truth for the badge in every view.
   New canonical lifecycle (draft→ready→allocated→…). Legacy keys are kept as
   BACK-COMPAT aliases so old rows/pages don't break; new code emits the
   canonical states. Colors follow the spec: Amber = Missed, Red = Delivery
   failed, Gray = Returned to store. */
var ORDER_STATUS_M = {
  draft: {
    t: "neutral",
    l: "Draft"
  },
  ready: {
    t: "info",
    l: "Ready"
  },
  allocated: {
    t: "info",
    l: "Allocated"
  },
  picked_up: {
    t: "info",
    l: "Picked up"
  },
  at_hub: {
    t: "warning",
    l: "At hub"
  },
  missed: {
    t: "warning",
    l: "Missed"
  },
  out_for_delivery: {
    t: "info",
    l: "Out for delivery"
  },
  delivery_failed: {
    t: "danger",
    l: "Delivery failed"
  },
  returned_to_hub: {
    t: "warning",
    l: "Returned to hub"
  },
  delivered: {
    t: "success",
    l: "Delivered"
  },
  returned_to_store: {
    t: "neutral",
    l: "Returned to store"
  },
  cancelled: {
    t: "danger",
    l: "Canceled"
  },
  /* ---- legacy aliases (render only) ---- */
  pending: {
    t: "neutral",
    l: "Draft"
  },
  // alias → draft
  assigned: {
    t: "info",
    l: "Allocated"
  },
  // alias → allocated
  "en-route": {
    t: "info",
    l: "Out for delivery"
  },
  // alias → out_for_delivery
  rescheduled: {
    t: "warning",
    l: "Rescheduled"
  },
  returning: {
    t: "warning",
    l: "Returned to hub"
  },
  // alias → returned_to_hub
  returned: {
    t: "neutral",
    l: "Returned to store"
  } // alias → returned_to_store
};

/* TERMINAL / CLOSED states accept no further transitions (backend guard + UI
   disables the action menu). Only these settle in Store payments / invoicing. */
var ORDER_TERMINAL = ["delivered", "returned_to_store", "cancelled", "returned" /*legacy*/];
function ORDER_IS_TERMINAL(status) {
  return ORDER_TERMINAL.indexOf(status) >= 0;
}
function ORDER_IS_CLOSED(status) {
  return ORDER_IS_TERMINAL(status);
}

/* Filter grouping: Active (open) vs Closed (terminal). Aliases fold in. */
var ORDER_STATUS_GROUPS = {
  active: ["draft", "ready", "allocated", "picked_up", "at_hub", "missed", "out_for_delivery", "delivery_failed", "returned_to_hub"],
  closed: ["delivered", "returned_to_store", "cancelled"]
};

/* Legal next-states per current status (mirror of the state machine above).
   Frontend uses it to render only valid actions; backend re-validates. */
var ORDER_NEXT = {
  draft: ["ready"],
  ready: ["allocated", "cancelled"],
  allocated: ["picked_up", "cancelled"],
  picked_up: ["at_hub", "missed", "delivered"],
  missed: ["picked_up", "returned_to_hub"],
  at_hub: ["out_for_delivery", "returned_to_store"],
  out_for_delivery: ["delivered", "delivery_failed"],
  delivery_failed: ["returned_to_hub", "missed"],
  returned_to_hub: ["out_for_delivery", "returned_to_store"],
  delivered: [],
  returned_to_store: [],
  cancelled: [],
  /* ---- legacy aliases map onto the new machine ---- */
  pending: ["ready", "cancelled"],
  assigned: ["picked_up", "cancelled"],
  "en-route": ["delivered", "delivery_failed"],
  rescheduled: ["out_for_delivery", "cancelled"],
  returning: ["returned_to_store", "out_for_delivery"],
  returned: []
};
function ORDER_CAN_TRANSITION(from, to) {
  return (ORDER_NEXT[from] || []).indexOf(to) >= 0;
}

/* Per-transition metadata the UI must honour. Key = "from>to".
   reason      : a mandatory free-text reason is required (delivery failure).
   hubConfirm  : requires explicit Hub-admin confirmation before it commits.
   Financial   : a failed attempt yields NO driver payout — the delivery cost is
                 recycled to the hub pool and paid only on a later successful
                 delivery (see pricing rules + Store payment preview). */
var ORDER_TRANSITION_META = {
  "out_for_delivery>delivery_failed": {
    reason: true
  },
  "delivery_failed>returned_to_hub": {
    hubConfirm: true
  }
};
function ORDER_TRANSITION_META_OF(from, to) {
  return ORDER_TRANSITION_META[from + ">" + to] || {};
}

/* Statuses that permit a soft-delete ACTION (not a status). Delete is an action,
   never an official system status. */
var ORDER_SOFT_DELETABLE = ["draft", "ready", "pending"];
function ORDER_CAN_SOFT_DELETE(status) {
  return ORDER_SOFT_DELETABLE.indexOf(status) >= 0;
}

/* A failed delivery attempt earns the driver nothing until a later success. */
var ORDER_FAILED_ATTEMPT_LABEL = "Failed attempt — pending redelivery (no payout)";

/* Reschedule is an OPERATOR action (not a transition edge): pick a new delivery
   date; the order resets to 'ready' for the next allocation cycle. Allowed from: */
var ORDER_RESCHEDULE_FROM = ["delivery_failed", "out_for_delivery", "ready"];
function ORDER_CAN_RESCHEDULE(status) {
  return ORDER_RESCHEDULE_FROM.indexOf(status) >= 0;
}

/* Demo orders. New fields (driver_id, payment_method, cod_amount, current_hub_id,
   scheduled_at, rate_card_id …) are ADDITIVE — old pages that read only
   ref/store_id/customer_id/status/lines/at keep working unchanged. */
var MANAGE_ORDERS = [{
  id: "ord_10500",
  ref: "#SO-10500",
  store_id: "str_0001",
  customer_id: "cus_0001",
  customer_addr_id: 0,
  status: "at_hub",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  current_hub_id: "hub_0001",
  payment_method: "cod",
  cod_amount: 72.00,
  currency: "SAR",
  rate_card_id: "store:str_0001",
  is_rush: true,
  payment_status: "unpaid",
  amount_paid: 0,
  scheduled_at: "2026-06-27 10:00",
  attempts_count: 0,
  lines: [{
    item_id: "itm_0001",
    qty: 2
  }, {
    item_id: "itm_0002",
    qty: 1
  }],
  at: "2026-06-26 13:10"
}, {
  id: "ord_10499",
  ref: "#SO-10499",
  store_id: "str_0002",
  customer_id: "cus_0002",
  customer_addr_id: 0,
  status: "out_for_delivery",
  driver_id: "drv_d4e5f6",
  vehicle_id: "veh_c4n5t6",
  current_hub_id: null,
  payment_method: "prepaid",
  cod_amount: 0,
  currency: "SAR",
  rate_card_id: "store:str_0002",
  payment_status: "paid",
  amount_paid: null,
  scheduled_at: "2026-06-26 15:00",
  attempts_count: 1,
  lines: [{
    item_id: "itm_0003",
    qty: 3
  }],
  at: "2026-06-26 12:35"
}, {
  id: "ord_10498",
  ref: "#SO-10498",
  store_id: "str_0001",
  customer_id: "cus_0001",
  customer_addr_id: 1,
  status: "delivered",
  driver_id: "drv_a1b2c3",
  vehicle_id: "veh_h1l2x3",
  current_hub_id: null,
  payment_method: "cod",
  cod_amount: 46.00,
  currency: "SAR",
  rate_card_id: "store:str_0001",
  payment_status: "partial",
  amount_paid: 20.00,
  scheduled_at: null,
  delivered_at: "2026-06-25 18:20",
  attempts_count: 1,
  lines: [{
    item_id: "itm_0004",
    qty: 1
  }, {
    item_id: "itm_0001",
    qty: 1
  }],
  at: "2026-06-25 18:20"
},
/* ── Comprehensive state-machine test dataset (ORD-101..113) ──────────────
   Self-contained rows exercising every status, the read-only lock on closed
   orders, dynamic driver payout ($0 until delivered), and reschedule.
   store_name/driver_name render directly; store_cost/driver_payout preview
   the billing + payout figures. */
{
  id: "ord_101",
  ref: "ORD-101",
  store_id: "str_alpha",
  store_name: "Store Alpha",
  customer_id: null,
  status: "draft",
  driver_id: null,
  driver_name: null,
  store_cost: 15.00,
  driver_payout: 0.00,
  payment_method: "prepaid",
  cod_amount: 0,
  currency: "SAR",
  scheduled_at: "2026-07-14 10:00",
  lines: [{
    item_id: "itm_0001",
    qty: 1
  }],
  at: "2026-07-13 09:00"
}, {
  id: "ord_102",
  ref: "ORD-102",
  store_id: "str_beta",
  store_name: "Store Beta",
  customer_id: null,
  status: "ready",
  driver_id: null,
  driver_name: null,
  store_cost: 20.00,
  driver_payout: 0.00,
  payment_method: "cod",
  cod_amount: 20.00,
  currency: "SAR",
  scheduled_at: "2026-07-14 12:00",
  lines: [{
    item_id: "itm_0002",
    qty: 1
  }],
  at: "2026-07-13 09:10"
}, {
  id: "ord_103",
  ref: "ORD-103",
  store_id: "str_gamma",
  store_name: "Store Gamma",
  customer_id: null,
  status: "allocated",
  driver_id: "cap_ahmad",
  driver_name: "Capt. Ahmad",
  store_cost: 18.00,
  driver_payout: 0.00,
  payment_method: "prepaid",
  cod_amount: 0,
  currency: "SAR",
  scheduled_at: "2026-07-14 11:00",
  lines: [{
    item_id: "itm_0003",
    qty: 1
  }],
  at: "2026-07-13 09:20"
}, {
  id: "ord_104",
  ref: "ORD-104",
  store_id: "str_alpha",
  store_name: "Store Alpha",
  customer_id: null,
  status: "picked_up",
  driver_id: "cap_saeed",
  driver_name: "Capt. Saeed",
  store_cost: 15.00,
  driver_payout: 0.00,
  payment_method: "cod",
  cod_amount: 15.00,
  currency: "SAR",
  scheduled_at: "2026-07-14 10:30",
  lines: [{
    item_id: "itm_0001",
    qty: 2
  }],
  at: "2026-07-13 09:30"
}, {
  id: "ord_105",
  ref: "ORD-105",
  store_id: "str_beta",
  store_name: "Store Beta",
  customer_id: null,
  status: "missed",
  driver_id: "cap_yousef",
  driver_name: "Capt. Yousef",
  store_cost: 20.00,
  driver_payout: 0.00,
  payment_method: "prepaid",
  cod_amount: 0,
  currency: "SAR",
  scheduled_at: "2026-07-13 16:00",
  lines: [{
    item_id: "itm_0002",
    qty: 1
  }],
  at: "2026-07-13 08:00"
}, {
  id: "ord_106",
  ref: "ORD-106",
  store_id: "str_gamma",
  store_name: "Store Gamma",
  customer_id: null,
  status: "at_hub",
  driver_id: null,
  driver_name: null,
  store_cost: 18.00,
  driver_payout: 0.00,
  payment_method: "cod",
  cod_amount: 18.00,
  currency: "SAR",
  current_hub_id: "hub_0001",
  scheduled_at: "2026-07-14 09:00",
  lines: [{
    item_id: "itm_0003",
    qty: 2
  }],
  at: "2026-07-13 08:10"
}, {
  id: "ord_107",
  ref: "ORD-107",
  store_id: "str_alpha",
  store_name: "Store Alpha",
  customer_id: null,
  status: "out_for_delivery",
  driver_id: "cap_kareem",
  driver_name: "Capt. Kareem",
  store_cost: 15.00,
  driver_payout: 0.00,
  payment_method: "prepaid",
  cod_amount: 0,
  currency: "SAR",
  scheduled_at: "2026-07-13 14:00",
  is_rush: true,
  lines: [{
    item_id: "itm_0001",
    qty: 1
  }],
  at: "2026-07-13 08:20"
}, {
  id: "ord_108",
  ref: "ORD-108",
  store_id: "str_beta",
  store_name: "Store Beta",
  customer_id: null,
  status: "delivery_failed",
  driver_id: "cap_kareem",
  driver_name: "Capt. Kareem",
  store_cost: 20.00,
  driver_payout: 0.00,
  payment_method: "cod",
  cod_amount: 20.00,
  currency: "SAR",
  scheduled_at: "2026-07-13 15:30",
  attempts_count: 1,
  fail_reason: "Customer did not answer; address gate locked.",
  lines: [{
    item_id: "itm_0002",
    qty: 1
  }],
  at: "2026-07-13 08:30"
}, {
  id: "ord_109",
  ref: "ORD-109",
  store_id: "str_gamma",
  store_name: "Store Gamma",
  customer_id: null,
  status: "returned_to_hub",
  driver_id: null,
  driver_name: null,
  store_cost: 18.00,
  driver_payout: 0.00,
  payment_method: "prepaid",
  cod_amount: 0,
  currency: "SAR",
  current_hub_id: "hub_0001",
  scheduled_at: "2026-07-13 17:00",
  attempts_count: 1,
  lines: [{
    item_id: "itm_0003",
    qty: 1
  }],
  at: "2026-07-13 08:40"
}, {
  id: "ord_110",
  ref: "ORD-110",
  store_id: "str_alpha",
  store_name: "Store Alpha",
  customer_id: null,
  status: "delivered",
  driver_id: "cap_ahmad",
  driver_name: "Capt. Ahmad",
  store_cost: 15.00,
  driver_payout: 15.00,
  payment_method: "cod",
  cod_amount: 15.00,
  currency: "SAR",
  delivered_at: "2026-07-12 17:45",
  scheduled_at: "2026-07-12 16:00",
  attempts_count: 1,
  lines: [{
    item_id: "itm_0001",
    qty: 1
  }],
  at: "2026-07-12 17:45"
}, {
  id: "ord_111",
  ref: "ORD-111",
  store_id: "str_beta",
  store_name: "Store Beta",
  customer_id: null,
  status: "cancelled",
  driver_id: null,
  driver_name: null,
  store_cost: 20.00,
  driver_payout: 0.00,
  payment_method: "prepaid",
  cod_amount: 0,
  currency: "SAR",
  scheduled_at: null,
  lines: [{
    item_id: "itm_0002",
    qty: 1
  }],
  at: "2026-07-11 10:00"
}, {
  id: "ord_112",
  ref: "ORD-112",
  store_id: "str_gamma",
  store_name: "Store Gamma",
  customer_id: null,
  status: "returned_to_store",
  driver_id: null,
  driver_name: null,
  store_cost: 18.00,
  driver_payout: 0.00,
  payment_method: "cod",
  cod_amount: 18.00,
  currency: "SAR",
  scheduled_at: null,
  attempts_count: 2,
  lines: [{
    item_id: "itm_0003",
    qty: 1
  }],
  at: "2026-07-11 12:00"
}, {
  id: "ord_113",
  ref: "ORD-113",
  store_id: "str_alpha",
  store_name: "Store Alpha",
  customer_id: null,
  status: "ready",
  driver_id: "cap_saeed",
  driver_name: "Capt. Saeed",
  store_cost: 15.00,
  driver_payout: 0.00,
  payment_method: "prepaid",
  cod_amount: 0,
  currency: "SAR",
  scheduled_at: "2026-07-16 10:00",
  rescheduled_from: "2026-07-13 14:00",
  reschedule_count: 1,
  lines: [{
    item_id: "itm_0001",
    qty: 1
  }],
  at: "2026-07-13 09:50"
}];
function ORDER_BY_ID(id) {
  return MANAGE_ORDERS.filter(function (o) {
    return o.id === id;
  })[0];
}

/* Goods value = Σ(line.qty × item.sale_price). This is the ORDER VALUE, not the
   delivery fee. For COD orders it is what the driver collects (cod_amount). */
function ORDER_TOTAL(o) {
  return (o.lines || []).reduce(function (s, l) {
    var it = ITEM_BY_ID(l.item_id);
    return s + (it ? it.sale_price * l.qty : 0);
  }, 0);
}

/* ── Payment status ─────────────────────────────────────────────────────────
   payment_status enum [unpaid, partial, paid, cod] — how much of the ORDER has
   the customer already settled. amount_paid = how much they've paid so far
   (null when fully paid). Drives per-order settlement (ORDER_SETTLEMENT). */
var ORDER_PAY_STATUS_M = {
  unpaid: {
    t: "neutral",
    l: "Unpaid"
  },
  partial: {
    t: "warning",
    l: "Partially paid"
  },
  paid: {
    t: "success",
    l: "Paid"
  },
  cod: {
    t: "info",
    l: "COD"
  }
};

/* ── Per-order money settlement ──────────────────────────────────────────────
   Splits an order's money into: goods value (store's), shipping (delivery fee
   incl. COD fee + VAT), and event fees (failed attempt / reschedule / return).
   RULES (confirmed with ops):
     • Event fees are ALWAYS borne by the store — never collected from customer.
     • If the customer already PAID (payment_status='paid'), the WHOLE shipping
       cost falls on the STORE, even if the rate card says delivery_paid_by =
       customer or split. Nothing more is collected from the customer.
     • If PARTIAL, only the remaining balance (order due − amount_paid) is
       collected from the customer.
     • Otherwise (unpaid / cod) the customer pays their normal share of shipping
       (per delivery_paid_by) plus the goods value.
   `charges` = the order_charges rows (payer-tagged) from the pricing engine.
   Returns amounts + a store balance: +store = store owes the platform,
   −store = the platform owes the store (goods collected on its behalf). */
function ORDER_SETTLEMENT(o, charges) {
  charges = charges || [];
  var EVENT_KINDS = {
    failed_attempt: 1,
    reschedule: 1,
    return_to_store: 1,
    return_to_hub: 1,
    return_fee: 1
  };
  var goods = ORDER_TOTAL(o);
  var shipping = 0,
    eventFees = 0,
    custShareShip = 0;
  charges.forEach(function (x) {
    if (EVENT_KINDS[x.kind]) {
      eventFees += x.amount;
      return;
    } // event fees → store, always
    shipping += x.amount;
    if (x.payer === 'customer') custShareShip += x.amount;else if (x.payer === 'split' && x.meta && typeof x.meta.customer_amount === 'number') custShareShip += x.meta.customer_amount;
  });
  var ps = o.payment_status || (o.payment_method === 'cod' ? 'cod' : 'paid');
  var goodsDue = o.payment_method === 'cod' ? o.cod_amount != null ? o.cod_amount : goods : goods;
  var collectFromCustomer = 0,
    storeBearsShipping = 0,
    note = '';
  if (ps === 'paid') {
    collectFromCustomer = 0;
    storeBearsShipping = shipping; // customer paid → store eats all shipping
    note = 'Customer already paid — full shipping falls on the store.';
  } else if (ps === 'partial') {
    var totalDue = goodsDue + custShareShip;
    collectFromCustomer = Math.max(0, totalDue - (o.amount_paid || 0));
    storeBearsShipping = shipping - custShareShip;
    note = 'Collect only the remaining balance from the customer.';
  } else {
    // unpaid or cod
    collectFromCustomer = goodsDue + custShareShip;
    storeBearsShipping = shipping - custShareShip;
    note = ps === 'cod' ? 'Driver collects on delivery.' : 'Customer pays their share on delivery.';
  }
  var storeOwes = storeBearsShipping + eventFees; // store → platform (delivery service)
  var goodsCollectedForStore = o.payment_method === 'cod' ? goods : 0; // platform holds store's goods cash (COD)
  var storeBalance = storeOwes - goodsCollectedForStore; // +: store owes platform; −: platform owes store
  return {
    goods: goods,
    shipping: shipping,
    eventFees: eventFees,
    custShareShip: custShareShip,
    collectFromCustomer: collectFromCustomer,
    storeBearsShipping: storeBearsShipping,
    storeOwes: storeOwes,
    goodsCollectedForStore: goodsCollectedForStore,
    storeBalance: storeBalance,
    paymentStatus: ps,
    note: note
  };
}

/* ── Weight & volume helpers (consumed by the pricing engine) ────────────────
   actual_kg   = Σ(qty × weight_kg)
   volumetric  = Σ(qty × L×W×H(cm) / divisor)   — divisor from the rate card
   chargeable  = max(actual, volumetric)         — what by_weight/by_volume bill
   Missing measurements count as 0 for that line (never NaN). */
function ORDER_ACTUAL_KG(o) {
  return (o.lines || []).reduce(function (s, l) {
    var it = ITEM_BY_ID(l.item_id);
    return s + (it && it.weight_kg ? it.weight_kg * l.qty : 0);
  }, 0);
}
function ORDER_VOLUMETRIC_KG(o, divisor) {
  divisor = divisor || 5000;
  return (o.lines || []).reduce(function (s, l) {
    var it = ITEM_BY_ID(l.item_id);
    if (!it || !it.length_cm || !it.width_cm || !it.height_cm) return s;
    return s + it.length_cm * it.width_cm * it.height_cm / divisor * l.qty;
  }, 0);
}
function ORDER_CHARGEABLE_KG(o, divisor) {
  return Math.max(ORDER_ACTUAL_KG(o), ORDER_VOLUMETRIC_KG(o, divisor));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/order-data.js", error: String((e && e.message) || e) }); }

// pages/order-label.js
try { (() => {
/* Shipping label sheet — shared renderer so any list can print labels in bulk.
   OrderLabel.sheet(order, orient) → self-contained, inline-styled, light sheet.
   OrderLabel.print(orders, orient) → opens a print window, one label per page. */
(function () {
  var BRAND = {
    name: 'Fleet SaaS',
    logo: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><defs><linearGradient id="lblMark" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#61a0e8"></stop><stop offset="1" stop-color="#1c6cc7"></stop></linearGradient></defs><rect x="0" y="0" width="32" height="32" rx="8" fill="url(#lblMark)"></rect><path d="M11 23 L11 14 a5 5 0 0 1 10 0" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none"></path><circle cx="16" cy="14" r="2.6" fill="#fff"></circle></svg>'
  };
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function money(n) {
    return 'SAR ' + (n || 0).toFixed(2);
  }
  function parts(o) {
    var origin = location.href.replace(/[^/]*$/, '');
    var formUrl = origin + 'forms.html?entity=order&order=' + encodeURIComponent(o.id) + '&action=deliver';
    var qr = typeof QRCode !== 'undefined' ? QRCode.svg(formUrl, {
      size: 200,
      margin: 2
    }).replace('width="200" height="200"', 'style="display:block;width:100%;height:100%"') : '';
    var cust = typeof CUSTOMER_BY_ID === 'function' ? CUSTOMER_BY_ID(o.customer_id) : null;
    var store = typeof STORE_BY_ID === 'function' ? STORE_BY_ID(o.store_id) : null;
    var addr = cust && cust.addresses && (cust.addresses[o.customer_addr_id != null ? o.customer_addr_id : 0] || cust.addresses[0]);
    var addrLine = addr ? [addr.line, addr.building_no ? 'Bldg ' + addr.building_no : '', addr.apartment_no ? 'Apt ' + addr.apartment_no : ''].filter(Boolean).join(' · ') : '—';
    var items = (o.lines || []).map(function (l) {
      var it = typeof ITEM_BY_ID === 'function' ? ITEM_BY_ID(l.item_id) : null;
      return {
        name: it ? it.name : l.item_id,
        qty: l.qty
      };
    });
    return {
      formUrl: formUrl,
      qr: qr,
      addrLine: addrLine,
      pay: o.payment_method === 'cod' ? 'COD ' + money(o.cod_amount) : 'Prepaid',
      name: cust ? cust.name : o.customer_name || '—',
      phone: cust && cust.phone_primary ? cust.phone_primary : o.customer_phone || '',
      store: store ? store.name : o.store_name || '—',
      weight: (typeof ORDER_CHARGEABLE_KG === 'function' ? ORDER_CHARGEABLE_KG(o, 5000).toFixed(1) : '—') + ' kg',
      items: items,
      totalQty: items.reduce(function (s, i) {
        return s + (i.qty || 0);
      }, 0)
    };
  }
  function sheet(o, orient) {
    var d = parts(o),
      horiz = orient === 'landscape';
    var W = horiz ? 640 : 384,
      H = horiz ? 440 : 566;
    function k(t) {
      return '<div style="font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#5a6b82;font-weight:700;margin-bottom:3px">' + t + '</div>';
    }
    var head = '<div style="display:flex;justify-content:space-between;align-items:center;gap:10px">' + '<div style="display:flex;align-items:center;gap:9px;min-width:0">' + '<span style="flex:0 0 auto;width:32px;height:32px;line-height:0">' + BRAND.logo + '</span>' + '<span style="font-weight:800;font-size:19px;letter-spacing:-.4px;white-space:nowrap">' + esc(BRAND.name) + '</span></div>' + '<div style="border:1.5px solid #0b0f14;border-radius:999px;padding:3px 12px;font-size:11px;font-weight:700;white-space:nowrap">' + esc(d.pay) + '</div></div>';
    var ref = '<div style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:17px;font-weight:700">' + esc(o.ref) + '</div>';
    var hr = '<div style="border-top:1.5px dashed #9aa7bb;height:0"></div>';
    var shipTo = '<div>' + k('Ship to') + '<div style="font-size:17px;font-weight:800;line-height:1.3">' + esc(d.name) + '</div>' + '<div style="font-size:13px;font-weight:600;line-height:1.4">' + esc(d.addrLine) + '</div>' + (d.phone ? '<div style="font-size:13px;font-weight:600;line-height:1.4">' + esc(d.phone) + '</div>' : '') + '</div>';
    var meta = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' + '<div>' + k('From (store)') + '<div style="font-size:13px;font-weight:600">' + esc(d.store) + '</div></div>' + '<div>' + k('Weight') + '<div style="font-size:13px;font-weight:600">' + esc(d.weight) + '</div></div></div>';
    var qrBlock = '<div style="border:1.5px solid #0b0f14;border-radius:10px;padding:14px;display:flex;flex-direction:column;gap:12px">' + '<div style="font-size:11.5px;color:#5a6b82;line-height:1.45"><strong style="color:#0b0f14;font-size:12.5px;display:block;margin-bottom:3px">Scan to confirm delivery</strong>Opens the delivery form for this order on the courier device.</div>' + '<div style="align-self:center;width:100%;max-width:152px;aspect-ratio:1/1;line-height:0">' + d.qr + '</div></div>';
    var foot = '<div style="margin-top:auto;font-size:10px;color:#5a6b82;font-family:ui-monospace,monospace;word-break:break-all">' + esc(d.formUrl) + '</div>';
    var shown = d.items.slice(0, 6),
      moreN = d.items.length - shown.length;
    var itemsBlk = d.items.length ? '<div>' + k('Items to deliver · ' + d.totalQty + ' pc' + (d.totalQty === 1 ? '' : 's')) + '<div style="display:flex;flex-direction:column;gap:5px;margin-top:2px">' + shown.map(function (it) {
      return '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-size:12.5px;line-height:1.4">' + '<span style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600">' + esc(it.name) + '</span>' + '<span style="flex:0 0 auto;font-weight:700;font-family:ui-monospace,monospace">×' + it.qty + '</span></div>';
    }).join('') + (moreN > 0 ? '<div style="font-size:11px;color:#5a6b82;font-weight:600">+' + moreN + ' more item' + (moreN === 1 ? '' : 's') + '</div>' : '') + '</div></div>' : '';
    var sizeCss = horiz ? 'width:' + W + 'px;height:' + H + 'px' : 'width:' + W + 'px;min-height:' + H + 'px';
    var base = sizeCss + ';background:#fff;color:#0b0f14;box-sizing:border-box;padding:26px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif';
    if (horiz) {
      return '<div class="lblSheet" style="' + base + ';display:flex;flex-direction:row;gap:22px">' + '<div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:12px">' + head + ref + hr + shipTo + meta + itemsBlk + foot + '</div>' + '<div style="flex:0 0 216px;display:flex;flex-direction:column;justify-content:center">' + qrBlock + '</div></div>';
    }
    return '<div class="lblSheet" style="' + base + ';display:flex;flex-direction:column;gap:13px">' + head + ref + hr + shipTo + meta + itemsBlk + hr + qrBlock + foot + '</div>';
  }
  function print(orders, orient) {
    orient = orient || 'portrait';
    var horiz = orient === 'landscape';
    var pageSize = horiz ? '150mm 100mm' : '100mm auto';
    var w = window.open('', '_blank', 'width=' + (horiz ? 740 : 480) + ',height=' + (horiz ? 540 : 740));
    if (!w) return false;
    w.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Labels (' + orders.length + ')</title>' + '<style>@page{size:' + pageSize + ';margin:0}html,body{margin:0;padding:0;background:#fff}' + '.lblSheet{width:' + (horiz ? '150mm' : '100mm') + '!important;' + (horiz ? 'height:100mm!important' : 'min-height:150mm!important;height:auto!important') + ';break-after:page;page-break-after:always}' + '.lblSheet:last-child{break-after:auto;page-break-after:auto}</style></head><body>' + orders.map(function (o) {
      return sheet(o, orient);
    }).join('') + '<scr' + 'ipt>window.onload=function(){setTimeout(function(){window.print();},300);};</scr' + 'ipt></body></html>');
    w.document.close();
    return true;
  }
  window.OrderLabel = {
    sheet: sheet,
    print: print
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/order-label.js", error: String((e && e.message) || e) }); }

// pages/payroll-data.js
try { (() => {
/* Shared payroll inputs — used by the Driver expenses report and the Driver
   expenses tab on a driver's detail page, so both read one dataset. */
/* ── Payroll inputs per driver ────────────────────────────────────────────────
   base_salary_monthly + per_order_rate come from each driver's Pay configuration
   (driver-edit → drivers.base_salary_monthly / drivers.per_order_rate).
   orders_by_month is the count of COMPLETED (delivered) orders per payroll period
   for that driver. Backend: SELECT driver_id, count(*) FROM orders
   WHERE status='delivered' AND date_trunc('month', delivered_at)=:period GROUP BY 1. */
var PAYROLL_DRIVERS = [{
  id: 'drv_a1b2c3',
  name: 'Layla Hassan',
  iid: 'D-1042',
  base: 2500,
  rate: 6,
  orders: {
    '2026-07': 142,
    '2026-06': 168,
    '2026-05': 151
  }
}, {
  id: 'drv_d4e5f6',
  name: 'Omar Khaled',
  iid: 'D-1043',
  base: 2500,
  rate: 5.5,
  orders: {
    '2026-07': 129,
    '2026-06': 134,
    '2026-05': 120
  }
}, {
  id: 'drv_g7h8i9',
  name: 'Sara Nasser',
  iid: 'D-1044',
  base: 2200,
  rate: 7,
  orders: {
    '2026-07': 98,
    '2026-06': 110,
    '2026-05': 102
  }
}, {
  id: 'drv_v4w5x6',
  name: 'Bilal Mansour',
  iid: 'D-1049',
  base: 2300,
  rate: 6,
  orders: {
    '2026-07': 115,
    '2026-06': 121,
    '2026-05': 99
  }
}, {
  id: 'drv_m4n5o6',
  name: 'Huda Saleh',
  iid: 'D-1046',
  base: 2400,
  rate: 6.5,
  orders: {
    '2026-07': 133,
    '2026-06': 140,
    '2026-05': 128
  }
}, {
  id: 'drv_b1c2d3',
  name: 'Khalid Otaibi',
  iid: 'D-1051',
  base: 2350,
  rate: 6,
  orders: {
    '2026-07': 121,
    '2026-06': 118,
    '2026-05': 130
  }
}];
var PAYROLL_MONTHS = [{
  v: '2026-07',
  l: 'July 2026'
}, {
  v: '2026-06',
  l: 'June 2026'
}, {
  v: '2026-05',
  l: 'May 2026'
}];
function PAYROLL_DRIVER_BY_ID(id) {
  return PAYROLL_DRIVERS.filter(function (d) {
    return d.id === id;
  })[0] || null;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/payroll-data.js", error: String((e && e.message) || e) }); }

// pages/pricing-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   PRICING contract + ENGINE.  STORE-LEVEL model.
   Every store carries ONE pricing config (method + COD + event fees + tax +
   who-pays). Its contracted SERVICE AREAS differ only in the BASE price. There
   is NO order-level and NO customer-level pricing — you set how a store is
   billed WHEN YOU CONTRACT with it (see store-edit.html → Pricing & fees).
   Consumed by store-edit.html, store-view.html, and the order quote endpoint.

   ════════════════════════════════════════════════════════════════════════════
   HOW PRICING RESOLVES  (simple, two layers)
   ────────────────────────────────────────────────────────────────────────────
     org default  ‹───inherited by───  store.pricing (partial override)
   The effective rule set = deep-merge(RATE_CARD_DEFAULT, store.pricing).
   The BASE delivery price for a delivery = the store↔area contract price
   (store_contracts.price); the chosen method then builds on top of it:
     • zone_flat  → fee = base price (the contract price, flat)
     • by_weight  → fee = base price + weight tiers above `included_kg`
     • by_distance→ fee = base price + (km − included_km) × price_per_km
   Then: COD surcharge, other surcharges, event fees (as they happen), VAT,
   and the who-pays split — ALL taken from the store config.

   ════════════════════════════════════════════════════════════════════════════
   DATA MODEL  (multi-tenant: every table carries org_id, omitted below)
   ────────────────────────────────────────────────────────────────────────────
   Store pricing lives ON the store (store-data.js):
     stores.pricing        jsonb   -- the RATE CARD body (shape below); partial —
                                   -- unset fields inherit from the org default.
     store_contracts.price decimal -- the BASE delivery price for that area.

   Org default lives here as RATE_CARD_DEFAULT (one row in a real DB:
     table: pricing_defaults { org_id PK, rules jsonb }).

   table: order_charges                 -- append-only pricing ledger (per order)
     id, order_id FK, kind enum[base,weight,cod_fee,fuel,remote,oversize,
        failed_attempt,reschedule,return_fee,vat,adjustment],
     amount decimal, payer enum[store,customer,platform], meta jsonb, at datetime
     -- financial source of truth; never store totals on the order row.

   table: failure_reasons  { code, label_en, label_ar, billable(bool) }
   table: return_reasons   { code, label_en, label_ar, refundable(bool) }

   ════════════════════════════════════════════════════════════════════════════
   RATE CARD shape (stores.pricing / RATE_CARD_DEFAULT) — every field OPTIONAL in
   a store override; unset ⇒ inherit org default.
     base:       { method:"zone_flat"|"by_weight"|"by_distance",
                   by_weight:{ included_kg, base_price(auto=contract price),
                               tiers:[{up_to_kg|null, price_per_kg}] },
                   by_distance:{ included_km, price_per_km } }
     surcharges: { cod:{enabled,fee_type,value,min_fee,max_fee},
                   fuel:{enabled,fee_type,value}, remote_area:{enabled,flat},
                   oversize:{enabled,over_kg,flat} }
     event_fees: { failed_attempt:{billable,flat,who_pays},
                   reschedule/return_to_store/return_to_hub:{billable,flat,who_pays} }
     tax:        { vat_percent, prices_include_vat }
     billing:    { delivery_paid_by:"store"|"customer"|"split",
                   split:{store_percent,customer_percent} }
   ════════════════════════════════════════════════════════════════════════════
   NestJS / Angular handoff:
   • PricingService.resolve(store, areaId) → effective rules + base price;
     .quote(order) → Charge[]; .applyEvent(order, event) → Charge[]. Persist to
     order_charges (append-only). Store `stores.pricing` as jsonb; validate with a
     class-validator DTO. PRICING_MERGE == lodash.merge with array-replace.
   • Angular: the store form binds the rate-card object; a live preview panel calls
     the same pure quote() so the operator sees the fee update as they type. Money
     via a currency pipe; the method is a SegmentedControl.
   ════════════════════════════════════════════════════════════════════════════ */

/* ── Editable lookups (org-level) ──────────────────────────────────────────── */
var FAILURE_REASONS = [{
  code: "customer_no_show",
  label_en: "Customer not present",
  label_ar: "العميل غير موجود",
  billable: true
}, {
  code: "customer_refused",
  label_en: "Customer refused",
  label_ar: "العميل رفض الاستلام",
  billable: true
}, {
  code: "customer_unreachable",
  label_en: "Unreachable by phone",
  label_ar: "تعذّر الوصول للعميل",
  billable: true
}, {
  code: "wrong_address",
  label_en: "Wrong / bad address",
  label_ar: "عنوان غير صحيح",
  billable: false
}, {
  code: "postponed_by_customer",
  label_en: "Postponed by customer",
  label_ar: "تأجيل بطلب العميل",
  billable: false
}, {
  code: "damaged_in_transit",
  label_en: "Damaged in transit",
  label_ar: "تلف أثناء النقل",
  billable: false
}];
function FAILURE_REASON(code) {
  return FAILURE_REASONS.filter(function (r) {
    return r.code === code;
  })[0];
}
function FAILURE_IS_BILLABLE(code) {
  var r = FAILURE_REASON(code);
  return !!(r && r.billable);
}
var RETURN_REASONS = [{
  code: "defective",
  label_en: "Defective item",
  label_ar: "منتج معيب",
  refundable: true
}, {
  code: "wrong_item",
  label_en: "Wrong item sent",
  label_ar: "منتج خاطئ",
  refundable: true
}, {
  code: "customer_changed",
  label_en: "Customer changed mind",
  label_ar: "العميل غيّر رأيه",
  refundable: false
}, {
  code: "not_as_described",
  label_en: "Not as described",
  label_ar: "مختلف عن الوصف",
  refundable: true
}];
function RETURN_REASON(code) {
  return RETURN_REASONS.filter(function (r) {
    return r.code === code;
  })[0];
}

/* ── ORG DEFAULT rate card — every store inherits then overrides this ───────── */
var RATE_CARD_DEFAULT = {
  base: {
    method: "zone_flat",
    /* base_price is filled at resolve time from the store↔area contract price. */
    by_weight: {
      included_kg: 5,
      base_price: 0,
      tiers: [{
        up_to_kg: 10,
        price_per_kg: 1.50
      }, {
        up_to_kg: 25,
        price_per_kg: 1.00
      }, {
        up_to_kg: null,
        price_per_kg: 0.75
      }]
    },
    by_distance: {
      included_km: 3,
      price_per_km: 2.00
    }
  },
  surcharges: {
    cod: {
      enabled: true,
      fee_type: "percent",
      value: 1.0,
      min_fee: 5.00,
      max_fee: 50.00
    },
    fuel: {
      enabled: false,
      fee_type: "percent",
      value: 0
    },
    remote_area: {
      enabled: false,
      flat: 0
    },
    oversize: {
      enabled: false,
      over_kg: 30,
      flat: 20.00
    },
    /* RUSH ORDER surcharge — a flat (or percent-of-goods) premium added when an
       order is flagged is_rush=true (see order-data.js). Resolution order at
       quote time: store contract rush (this, when enabled) OVERRIDES the
       service-area default (service_areas.rush_surcharge); if neither is set,
       the org default below applies. value is flat SAR unless fee_type=percent. */
    rush: {
      enabled: false,
      fee_type: "flat",
      value: 15.00
    }
  },
  event_fees: {
    failed_attempt: {
      billable: true,
      flat: 8.00,
      who_pays: "store"
    },
    reschedule: {
      billable: true,
      flat: 5.00,
      who_pays: "customer"
    },
    return_to_store: {
      billable: true,
      flat: 12.00,
      who_pays: "store"
    },
    return_to_hub: {
      billable: true,
      flat: 6.00,
      who_pays: "store"
    }
  },
  tax: {
    vat_percent: 15.0,
    prices_include_vat: false
  },
  billing: {
    delivery_paid_by: "store",
    split: {
      store_percent: 100,
      customer_percent: 0
    }
  }
};

/* ════════════════════════════════════════════════════════════════════════════
   ENGINE
   ════════════════════════════════════════════════════════════════════════════ */

/* Deep-merge b INTO a (b wins). Arrays are replaced wholesale (weight tiers). */
function PRICING_MERGE(a, b) {
  var out = {},
    k;
  for (k in a) {
    if (a.hasOwnProperty(k)) out[k] = a[k];
  }
  for (k in b) {
    if (!b.hasOwnProperty(k)) continue;
    if (b[k] && typeof b[k] === "object" && !(b[k] instanceof Array) && a[k] && typeof a[k] === "object" && !(a[k] instanceof Array)) {
      out[k] = PRICING_MERGE(a[k], b[k]);
    } else {
      out[k] = b[k];
    }
  }
  return out;
}
function PRICING_ROUND(n) {
  return Math.round((n + Number.EPSILON) * 100) / 100;
}
function PRICING_CLAMP(n, lo, hi) {
  if (lo != null && n < lo) n = lo;
  if (hi != null && n > hi) n = hi;
  return n;
}

/* Resolve the EFFECTIVE rules + base price for a store delivering into an area.
   store          : a store object (with optional .pricing and .contracts)
   serviceAreaId  : the destination area
   opts.area_price: explicit base price override (else read from store contract,
                    else opts.area_fee, else 0)
   Returns { rules, area_price, currency, source }. */
function PRICING_RESOLVE(store, serviceAreaId, opts) {
  opts = opts || {};
  var rules = PRICING_MERGE(RATE_CARD_DEFAULT, store && store.pricing ? store.pricing : {});

  // BASE price = the store↔area contract price (areas differ only here)
  var areaPrice = opts.area_price;
  if (areaPrice == null && store && store.contracts) {
    var c = store.contracts.filter(function (x) {
      return x.service_area_id === serviceAreaId;
    })[0];
    if (c) areaPrice = c.price;
  }
  if (areaPrice == null) areaPrice = opts.area_fee != null ? opts.area_fee : 0;

  // inject the contract base price into whichever method is active
  rules.base = rules.base || {};
  rules.base.zone_flat = PRICING_MERGE(rules.base.zone_flat || {}, {
    use_service_area_fee: false,
    override: areaPrice
  });
  rules.base.by_weight = PRICING_MERGE(rules.base.by_weight || {}, {
    base_price: areaPrice
  });
  rules.base.by_distance = PRICING_MERGE(rules.base.by_distance || {}, {
    base_price: areaPrice
  });
  return {
    rules: rules,
    area_price: areaPrice,
    currency: store && store.pricing && store.pricing.currency || "SAR",
    source: store ? "store:" + (store.id || store.public_id || "?") : "org-default"
  };
}

/* Compute the BASE delivery fee for the resolved rules + inputs. */
function PRICING_BASE(rules, weightKg, basePrice, distanceKm) {
  var b = rules.base || {},
    m = b.method || "zone_flat";
  if (m === "zone_flat") {
    return {
      amount: basePrice || 0,
      note: "flat"
    };
  }
  if (m === "by_weight") {
    // base_price covers the first `included_kg`; each kg above is charged by tier.
    var w = b.by_weight || {};
    var amt = (w.base_price != null ? w.base_price : basePrice) || 0;
    var rem = Math.max(0, (weightKg || 0) - (w.included_kg || 0));
    var prevCap = w.included_kg || 0;
    (w.tiers || []).forEach(function (t) {
      if (rem <= 0) return;
      var cap = t.up_to_kg == null ? Infinity : t.up_to_kg;
      var span = Math.max(0, cap - prevCap);
      var take = Math.min(rem, span);
      amt += take * (t.price_per_kg || 0);
      rem -= take;
      prevCap = cap;
    });
    return {
      amount: amt,
      note: "by_weight(" + PRICING_ROUND(weightKg) + "kg)"
    };
  }
  if (m === "by_distance") {
    var d = b.by_distance || {};
    var extra = Math.max(0, (distanceKm || 0) - (d.included_km || 0));
    return {
      amount: (d.base_price != null ? d.base_price : basePrice || 0) + extra * (d.price_per_km || 0),
      note: "by_distance(" + PRICING_ROUND(distanceKm || 0) + "km)"
    };
  }
  return {
    amount: basePrice || 0,
    note: "fallback"
  };
}

/* Price a delivery at CREATION time (base + surcharges + VAT). Event fees are
   appended LATER via PRICING_APPLY_EVENT.
   order : { store_id, payment_method, cod_amount, lines? }
   opts  : { store?, service_area_id, area_price?, area_fee?, chargeable_kg?,
             distance_km?, remote? }
   Returns { rate_card_id(source), currency, charges:[], totals }. */
function PRICING_QUOTE(order, opts) {
  opts = opts || {};
  var store = opts.store || (typeof STORE_BY_ID === "function" && order && order.store_id ? STORE_BY_ID(order.store_id) : null);
  var res = PRICING_RESOLVE(store, opts.service_area_id, opts);
  var R = res.rules,
    charges = [];

  // chargeable weight — from the order in production, or an explicit test value
  var divisor = R.base && R.base.by_volume && R.base.by_volume.divisor || 5000;
  var kg = opts.chargeable_kg != null ? opts.chargeable_kg : typeof ORDER_CHARGEABLE_KG === "function" && order && order.lines ? ORDER_CHARGEABLE_KG(order, divisor) : 0;
  var payer = R.billing && R.billing.delivery_paid_by || "store";
  var base = PRICING_BASE(R, kg, res.area_price, opts.distance_km);
  charges.push({
    kind: "base",
    amount: PRICING_ROUND(base.amount),
    payer: payer,
    meta: {
      note: base.note,
      chargeable_kg: PRICING_ROUND(kg),
      area_price: res.area_price
    }
  });

  // surcharges
  var codAmt = order && order.cod_amount || 0;
  if (order && order.payment_method === "cod" && R.surcharges && R.surcharges.cod && R.surcharges.cod.enabled && codAmt > 0) {
    var c = R.surcharges.cod,
      fee = c.fee_type === "percent" ? codAmt * (c.value / 100) : c.value;
    fee = PRICING_CLAMP(fee, c.min_fee, c.max_fee);
    charges.push({
      kind: "cod_fee",
      amount: PRICING_ROUND(fee),
      payer: "store",
      meta: {
        cod_amount: codAmt,
        rate: c.value,
        type: c.fee_type
      }
    });
  }
  if (R.surcharges && R.surcharges.fuel && R.surcharges.fuel.enabled) {
    charges.push({
      kind: "fuel",
      amount: PRICING_ROUND(base.amount * (R.surcharges.fuel.value / 100)),
      payer: payer,
      meta: {
        pct: R.surcharges.fuel.value
      }
    });
  }
  if (R.surcharges && R.surcharges.remote_area && R.surcharges.remote_area.enabled && opts.remote) {
    charges.push({
      kind: "remote",
      amount: PRICING_ROUND(R.surcharges.remote_area.flat),
      payer: payer,
      meta: {}
    });
  }
  if (R.surcharges && R.surcharges.oversize && R.surcharges.oversize.enabled && kg > R.surcharges.oversize.over_kg) {
    charges.push({
      kind: "oversize",
      amount: PRICING_ROUND(R.surcharges.oversize.flat),
      payer: payer,
      meta: {
        over_kg: R.surcharges.oversize.over_kg
      }
    });
  }
  // RUSH surcharge — gated by the ORDER flag (order.is_rush), not the store toggle:
  // the operator turns rush ON per order, and we bill the store's configured rush
  // premium (falling back to the service-area default, then the org default). The
  // goods subtotal drives a percent rush; a flat rush ignores it.
  if (order && order.is_rush) {
    var goodsForRush = typeof ORDER_TOTAL === "function" && order.lines ? ORDER_TOTAL(order) : opts.subtotal || 0;
    var ru = PRICING_RUSH_AMOUNT(store, {
      subtotal: goodsForRush,
      area_rush: opts.area_rush
    });
    if (ru.amount > 0) charges.push({
      kind: "rush",
      amount: ru.amount,
      payer: payer,
      meta: {
        type: ru.fee_type,
        rate: ru.value,
        source: ru.source
      }
    });
  }

  // VAT
  var tax = R.tax || {
    vat_percent: 0,
    prices_include_vat: false
  };
  if (!tax.prices_include_vat && tax.vat_percent) {
    var sub = charges.reduce(function (s, x) {
      return s + x.amount;
    }, 0);
    charges.push({
      kind: "vat",
      amount: PRICING_ROUND(sub * (tax.vat_percent / 100)),
      payer: payer,
      meta: {
        pct: tax.vat_percent
      }
    });
  }

  // WHO PAYS: if delivery is split, divide every 'split'-tagged charge into a
  // store portion and a customer portion by the configured percentages. Charges
  // with their own fixed payer (e.g. cod_fee=store) are left untouched.
  if (payer === "split") {
    charges = PRICING_SPLIT(charges, R.billing && R.billing.split);
  }
  return PRICING_FINALIZE(res, charges);
}

/* Resolve the RUSH surcharge amount for an order on a store. Precedence:
     1) store contract rush  (store.pricing.surcharges.rush, when enabled)  — OVERRIDES
     2) service-area default (opts.area_rush = service_areas.rush_surcharge)
     3) org default          (RATE_CARD_DEFAULT.surcharges.rush)
   opts.subtotal is the goods subtotal, used only when the chosen rush is percent.
   Returns { amount, fee_type, value, source }. */
function PRICING_RUSH_AMOUNT(store, opts) {
  opts = opts || {};
  var rules = PRICING_MERGE(RATE_CARD_DEFAULT, store && store.pricing ? store.pricing : {});
  var storeRush = rules.surcharges && rules.surcharges.rush || {};
  var cfg, source;
  if (storeRush.enabled) {
    cfg = storeRush;
    source = "store";
  } else if (opts.area_rush) {
    cfg = opts.area_rush;
    source = "area";
  } else {
    cfg = storeRush;
    source = "default";
  } // org default (merged in)
  var type = cfg.fee_type || "flat";
  var val = cfg.value != null ? cfg.value : 15;
  var amt = type === "percent" ? (opts.subtotal || 0) * (val / 100) : val;
  return {
    amount: PRICING_ROUND(amt),
    fee_type: type,
    value: val,
    source: source
  };
}

/* Split each 'split'-payer charge into two rows (store % + customer %). The
   customer portion takes the rounding remainder so store+customer == original. */
function PRICING_SPLIT(charges, split) {
  var sp = split || {
    store_percent: 100,
    customer_percent: 0
  };
  var out = [];
  charges.forEach(function (x) {
    if (x.payer !== "split") {
      out.push(x);
      return;
    }
    var storeAmt = PRICING_ROUND(x.amount * (sp.store_percent || 0) / 100);
    var custAmt = PRICING_ROUND(x.amount - storeAmt);
    if (storeAmt) out.push({
      kind: x.kind,
      amount: storeAmt,
      payer: "store",
      meta: {
        split: (sp.store_percent || 0) + "%",
        of: x.kind
      }
    });
    if (custAmt) out.push({
      kind: x.kind,
      amount: custAmt,
      payer: "customer",
      meta: {
        split: (sp.customer_percent || 0) + "%",
        of: x.kind
      }
    });
    if (!storeAmt && !custAmt) out.push(x);
  });
  return out;
}

/* Append an OPERATIONAL EVENT fee. event = { type, reason_code?, dest?, attempt_no?, next_at? }.
   opts = { store?, service_area_id }. Honors reason.billable + store who_pays. */
function PRICING_APPLY_EVENT(order, event, opts) {
  opts = opts || {};
  var store = opts.store || (typeof STORE_BY_ID === "function" && order && order.store_id ? STORE_BY_ID(order.store_id) : null);
  var R = PRICING_RESOLVE(store, opts.service_area_id, opts).rules,
    ef = R.event_fees || {},
    rows = [];
  if (event.type === "failed_attempt") {
    var billable = ef.failed_attempt && ef.failed_attempt.billable && (event.reason_code ? FAILURE_IS_BILLABLE(event.reason_code) : true);
    if (billable) rows.push({
      kind: "failed_attempt",
      amount: PRICING_ROUND(ef.failed_attempt.flat),
      payer: ef.failed_attempt.who_pays || "store",
      meta: {
        reason_code: event.reason_code,
        attempt_no: event.attempt_no
      }
    });
  } else if (event.type === "reschedule") {
    if (ef.reschedule && ef.reschedule.billable) rows.push({
      kind: "reschedule",
      amount: PRICING_ROUND(ef.reschedule.flat),
      payer: ef.reschedule.who_pays || "customer",
      meta: {
        next_at: event.next_at
      }
    });
  } else if (event.type === "return") {
    var key = event.dest === "hub" ? "return_to_hub" : "return_to_store",
      rf = ef[key];
    if (rf && rf.billable) rows.push({
      kind: "return_fee",
      amount: PRICING_ROUND(rf.flat),
      payer: rf.who_pays || "store",
      meta: {
        dest: event.dest || "store",
        reason_code: event.reason_code
      }
    });
  }
  var tax = R.tax || {};
  if (!tax.prices_include_vat && tax.vat_percent && rows.length) {
    var sub = rows.reduce(function (s, x) {
      return s + x.amount;
    }, 0);
    rows.push({
      kind: "vat",
      amount: PRICING_ROUND(sub * (tax.vat_percent / 100)),
      payer: rows[0].payer,
      meta: {
        pct: tax.vat_percent,
        on: "event"
      }
    });
  }
  return rows;
}

/* Roll a charge list into totals grouped by payer + grand total. */
function PRICING_FINALIZE(res, charges) {
  var totals = {
    store: 0,
    customer: 0,
    platform: 0,
    vat: 0,
    grand: 0
  };
  charges.forEach(function (x) {
    totals[x.payer] = (totals[x.payer] || 0) + x.amount;
    if (x.kind === "vat") totals.vat += x.amount;
    totals.grand += x.amount;
  });
  Object.keys(totals).forEach(function (k) {
    totals[k] = PRICING_ROUND(totals[k]);
  });
  return {
    rate_card_id: res.source,
    currency: res.currency,
    area_price: res.area_price,
    charges: charges,
    totals: totals
  };
}

/* Human labels for ledger kinds (shared by store-view / store-edit previews). */
var PRICING_KIND_LBL = {
  base: "Base delivery",
  weight: "Weight",
  cod_fee: "COD fee",
  fuel: "Fuel surcharge",
  remote: "Remote area",
  oversize: "Oversize",
  rush: "Rush surcharge",
  failed_attempt: "Failed attempt",
  reschedule: "Reschedule",
  return_fee: "Return fee",
  vat: "VAT",
  adjustment: "Adjustment"
};
/* Method options for the store pricing form. */
var PRICING_METHODS = [{
  value: "zone_flat",
  label: "Flat (per area)"
}, {
  value: "by_weight",
  label: "By weight"
}, {
  value: "by_distance",
  label: "By distance"
}];

/* ── Self-test (node/console): sanity-check the store-level engine ─────────── */
function PRICING_SELFTEST() {
  if (typeof STORE_BY_ID !== "function") {
    console.warn("load store-data.js first");
    return;
  }
  var st = STORE_BY_ID("str_0001");
  var order = {
    store_id: "str_0001",
    payment_method: "cod",
    cod_amount: 400
  };
  var q = PRICING_QUOTE(order, {
    service_area_id: "sva_0001",
    chargeable_kg: 6
  });
  console.log("QUOTE str_0001 / sva_0001", q.rate_card_id, q.totals, q.charges);
  console.log("EVENT failed_attempt", PRICING_APPLY_EVENT(order, {
    type: "failed_attempt",
    reason_code: "customer_no_show",
    attempt_no: 1
  }, {
    service_area_id: "sva_0001"
  }));
  return q;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/pricing-data.js", error: String((e && e.message) || e) }); }

// pages/qrcode.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   qrcode.js — tiny, dependency-free QR Code generator (byte mode, ECC level M).
   Port of the canonical qrcode-generator algorithm (Kazuhiko Arase, MIT):
   Galois-field math, Reed–Solomon ECC, mask selection, format/version info.

   Exposes:
     QRCode.matrix(text)      → { size, modules[][] (bool) }
     QRCode.svg(text, opts)   → SVG string (opts: size px, margin modules, dark, light)

   Used by order-view.html to render the dynamic shipping-label QR fully offline
   (no network, no external lib). The payload is a URL into our dynamic Forms
   surface, so scanning opens the delivery-confirmation form for that order.
   ════════════════════════════════════════════════════════════════════════════ */
(function (global) {
  "use strict";

  // ── Galois field GF(256) with primitive polynomial 0x11d ──────────────────
  var EXP = new Array(256),
    LOG = new Array(256);
  (function () {
    for (var i = 0; i < 8; i++) EXP[i] = 1 << i;
    for (i = 8; i < 256; i++) EXP[i] = EXP[i - 4] ^ EXP[i - 5] ^ EXP[i - 6] ^ EXP[i - 8];
    for (i = 0; i < 255; i++) LOG[EXP[i]] = i;
  })();
  function gexp(n) {
    while (n < 0) n += 255;
    while (n >= 256) n -= 255;
    return EXP[n];
  }
  function glog(n) {
    return LOG[n];
  }

  // ── Polynomial (for RS generator) ─────────────────────────────────────────
  function Poly(num, shift) {
    var offset = 0;
    while (offset < num.length && num[offset] === 0) offset++;
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) this.num[i] = num[i + offset];
  }
  Poly.prototype.get = function (i) {
    return this.num[i];
  };
  Poly.prototype.len = function () {
    return this.num.length;
  };
  Poly.prototype.multiply = function (e) {
    var num = new Array(this.len() + e.len() - 1);
    for (var i = 0; i < num.length; i++) num[i] = 0;
    for (i = 0; i < this.len(); i++) for (var j = 0; j < e.len(); j++) num[i + j] ^= gexp(glog(this.get(i)) + glog(e.get(j)));
    return new Poly(num, 0);
  };
  Poly.prototype.mod = function (e) {
    if (this.len() - e.len() < 0) return this;
    var ratio = glog(this.get(0)) - glog(e.get(0));
    var num = this.num.slice();
    for (var i = 0; i < e.len(); i++) num[i] ^= gexp(glog(e.get(i)) + ratio);
    return new Poly(num, 0).mod(e);
  };
  function rsGenerator(ecLen) {
    var p = new Poly([1], 0);
    for (var i = 0; i < ecLen; i++) p = p.multiply(new Poly([1, gexp(i)], 0));
    return p;
  }

  // ── Bit buffer ─────────────────────────────────────────────────────────────
  function BitBuffer() {
    this.buffer = [];
    this.length = 0;
  }
  BitBuffer.prototype.put = function (num, len) {
    for (var i = 0; i < len; i++) this.putBit((num >>> len - i - 1 & 1) === 1);
  };
  BitBuffer.prototype.putBit = function (bit) {
    var idx = Math.floor(this.length / 8);
    if (this.buffer.length <= idx) this.buffer.push(0);
    if (bit) this.buffer[idx] |= 0x80 >>> this.length % 8;
    this.length++;
  };

  // ── RS block layout per version, ECC level M ────────────────────────────────
  // Each entry: [ totalCodewordsPerBlock, dataCodewordsPerBlock, blockCount ] groups.
  // Table for versions 1..10 (level M) — enough for a URL payload.
  var RS_M = {
    1: [[26, 16, 1]],
    2: [[44, 28, 1]],
    3: [[70, 44, 1]],
    4: [[100, 64, 1]],
    5: [[134, 86, 1]],
    6: [[172, 108, 2]],
    7: [[196, 124, 2]],
    8: [[242, 154, 2]],
    9: [[292, 182, 2]],
    10: [[346, 216, 2], [347, 217, 0]] // handled generically below
  };
  // Accurate per-version M layout (total, data, count) — grouped blocks.
  var RS_BLOCKS_M = {
    1: [[26, 16, 1]],
    2: [[44, 28, 1]],
    3: [[70, 44, 1]],
    4: [[100, 64, 2]],
    5: [[134, 86, 2]],
    6: [[172, 108, 4]],
    7: [[196, 124, 4]],
    8: [[242, 154, 2], [243, 155, 2]],
    9: [[292, 182, 3], [293, 183, 2]],
    10: [[346, 216, 4], [347, 217, 1]]
  };
  var EC_CODEWORDS_M = {
    1: 10,
    2: 16,
    3: 26,
    4: 18,
    5: 24,
    6: 16,
    7: 18,
    8: 22,
    9: 22,
    10: 26
  };
  // total DATA codewords per version (level M)
  var DATA_CW_M = {
    1: 16,
    2: 28,
    3: 44,
    4: 64,
    5: 86,
    6: 108,
    7: 124,
    8: 154,
    9: 182,
    10: 216
  };
  function chooseVersion(byteLen) {
    // bits needed = mode(4) + count(8 or 16) + data(8*len) + terminator; compare to capacity
    for (var v = 1; v <= 10; v++) {
      var cap = DATA_CW_M[v] * 8;
      var countBits = v < 10 ? 8 : 16;
      var need = 4 + countBits + byteLen * 8;
      if (need <= cap) return v;
    }
    return 10;
  }

  // ── Build data codewords (byte mode) ────────────────────────────────────────
  function makeDataCodewords(text, version) {
    var bytes = utf8(text);
    var buf = new BitBuffer();
    buf.put(4, 4); // byte mode
    buf.put(bytes.length, version < 10 ? 8 : 16); // char count
    for (var i = 0; i < bytes.length; i++) buf.put(bytes[i], 8);
    var totalData = DATA_CW_M[version];
    var capBits = totalData * 8;
    // terminator
    for (i = 0; i < 4 && buf.length < capBits; i++) buf.putBit(false);
    // pad to byte boundary
    while (buf.length % 8 !== 0) buf.putBit(false);
    // pad bytes
    var pad = [0xEC, 0x11],
      pi = 0;
    while (buf.buffer.length < totalData) buf.buffer.push(pad[pi++ % 2]);
    return buf.buffer.slice(0, totalData);
  }
  function utf8(str) {
    var out = [],
      i,
      c;
    for (i = 0; i < str.length; i++) {
      c = str.charCodeAt(i);
      if (c < 0x80) out.push(c);else if (c < 0x800) {
        out.push(0xC0 | c >> 6, 0x80 | c & 0x3F);
      } else if (c < 0xD800 || c >= 0xE000) {
        out.push(0xE0 | c >> 12, 0x80 | c >> 6 & 0x3F, 0x80 | c & 0x3F);
      } else {
        i++;
        c = 0x10000 + ((c & 0x3FF) << 10 | str.charCodeAt(i) & 0x3FF);
        out.push(0xF0 | c >> 18, 0x80 | c >> 12 & 0x3F, 0x80 | c >> 6 & 0x3F, 0x80 | c & 0x3F);
      }
    }
    return out;
  }

  // interleave data + ec codewords across blocks
  function makeFinalCodewords(dataCw, version) {
    var layout = RS_BLOCKS_M[version];
    var ecLen = EC_CODEWORDS_M[version];
    var blocks = [],
      di = 0;
    layout.forEach(function (grp) {
      var total = grp[0],
        data = grp[1],
        count = grp[2];
      for (var b = 0; b < count; b++) {
        var dpart = dataCw.slice(di, di + data);
        di += data;
        // RS ECC for this block
        var rsPoly = rsGenerator(ecLen);
        var raw = new Array(dpart.length + ecLen);
        for (var i = 0; i < dpart.length; i++) raw[i] = dpart[i];
        for (i = dpart.length; i < raw.length; i++) raw[i] = 0;
        var modPoly = new Poly(raw, 0).mod(rsPoly);
        var ec = new Array(ecLen);
        for (i = 0; i < ecLen; i++) {
          var idx = i + modPoly.len() - ecLen;
          ec[i] = idx >= 0 ? modPoly.get(idx) : 0;
        }
        blocks.push({
          data: dpart,
          ec: ec
        });
      }
    });
    var maxData = 0;
    blocks.forEach(function (b) {
      maxData = Math.max(maxData, b.data.length);
    });
    var result = [];
    for (var i = 0; i < maxData; i++) blocks.forEach(function (b) {
      if (i < b.data.length) result.push(b.data[i]);
    });
    for (i = 0; i < ecLen; i++) blocks.forEach(function (b) {
      result.push(b.ec[i]);
    });
    return result;
  }

  // ── Matrix construction ─────────────────────────────────────────────────────
  function size(version) {
    return version * 4 + 17;
  }
  function makeMatrix(finalCw, version) {
    var n = size(version);
    var m = [],
      used = [];
    for (var r = 0; r < n; r++) {
      m.push(new Array(n));
      used.push(new Array(n));
      for (var c = 0; c < n; c++) {
        m[r][c] = false;
        used[r][c] = false;
      }
    }
    function setF(r, c, v) {
      m[r][c] = v;
      used[r][c] = true;
    }

    // finder patterns + separators
    function finder(rr, cc) {
      for (var r = -1; r <= 7; r++) for (var c = -1; c <= 7; c++) {
        var pr = rr + r,
          pc = cc + c;
        if (pr < 0 || pr >= n || pc < 0 || pc >= n) continue;
        var on = r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4;
        setF(pr, pc, on);
      }
    }
    finder(0, 0);
    finder(0, n - 7);
    finder(n - 7, 0);

    // timing patterns
    for (var i = 8; i < n - 8; i++) {
      setF(6, i, i % 2 === 0);
      setF(i, 6, i % 2 === 0);
    }

    // alignment patterns
    var ap = ALIGN[version] || [];
    for (var a = 0; a < ap.length; a++) for (var b = 0; b < ap.length; b++) {
      var ar = ap[a],
        ac = ap[b];
      if (used[ar][ac]) continue; // overlaps finder
      for (var dr = -2; dr <= 2; dr++) for (var dc = -2; dc <= 2; dc++) {
        var on = Math.max(Math.abs(dr), Math.abs(dc)) !== 1;
        setF(ar + dr, ac + dc, on);
      }
    }

    // dark module
    setF(n - 8, 8, true);

    // reserve format areas (filled later)
    for (i = 0; i < 9; i++) {
      if (!used[8][i]) used[8][i] = true;
      if (!used[i][8]) used[i][8] = true;
    }
    for (i = 0; i < 8; i++) {
      used[8][n - 1 - i] = true;
      used[n - 1 - i][8] = true;
    }
    // reserve version info (v>=7) — not needed for v<=6; handle generically
    if (version >= 7) {
      for (i = 0; i < 6; i++) for (var j = 0; j < 3; j++) {
        used[i][n - 11 + j] = true;
        used[n - 11 + j][i] = true;
      }
    }

    // place data with mask, try all 8 masks, pick best penalty
    var best = null,
      bestPen = Infinity,
      bestMask = 0;
    for (var mask = 0; mask < 8; mask++) {
      var trial = cloneBool(m),
        tu = used;
      placeData(trial, tu, finalCw, n, mask);
      placeFormat(trial, n, mask);
      if (version >= 7) placeVersion(trial, n, version);
      var pen = penalty(trial, n);
      if (pen < bestPen) {
        bestPen = pen;
        best = trial;
        bestMask = mask;
      }
    }
    return {
      size: n,
      modules: best
    };
  }
  function cloneBool(m) {
    return m.map(function (row) {
      return row.slice();
    });
  }
  function placeData(m, used, cw, n, mask) {
    var bitIndex = 0,
      byteIndex = 0,
      dir = -1,
      row = n - 1;
    for (var col = n - 1; col > 0; col -= 2) {
      if (col === 6) col--; // skip timing column
      while (true) {
        for (var cc = 0; cc < 2; cc++) {
          var c = col - cc;
          if (!used[row][c]) {
            var dark = false;
            if (byteIndex < cw.length) dark = (cw[byteIndex] >>> 7 - bitIndex & 1) === 1;
            if (maskFn(mask, row, c)) dark = !dark;
            m[row][c] = dark;
            bitIndex++;
            if (bitIndex === 8) {
              bitIndex = 0;
              byteIndex++;
            }
          }
        }
        row += dir;
        if (row < 0 || row >= n) {
          row -= dir;
          dir = -dir;
          break;
        }
      }
    }
  }
  function maskFn(mask, r, c) {
    switch (mask) {
      case 0:
        return (r + c) % 2 === 0;
      case 1:
        return r % 2 === 0;
      case 2:
        return c % 3 === 0;
      case 3:
        return (r + c) % 3 === 0;
      case 4:
        return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0;
      case 5:
        return r * c % 2 + r * c % 3 === 0;
      case 6:
        return (r * c % 2 + r * c % 3) % 2 === 0;
      case 7:
        return ((r + c) % 2 + r * c % 3) % 2 === 0;
    }
    return false;
  }

  // BCH format info (ECC level M = 0b00), 15 bits
  function placeFormat(m, n, mask) {
    var data = 0x00 << 3 | mask; // M = 0
    var bch = data << 10;
    var g = 0x537;
    for (var i = 4; i >= 0; i--) if (bch >>> 10 + i & 1) bch ^= g << i;
    var bits = (data << 10 | bch) ^ 0x5412;
    for (i = 0; i < 15; i++) {
      var bit = (bits >>> i & 1) === 1;
      // vertical (top-left down + bottom-right up)
      if (i < 6) m[i][8] = bit;else if (i < 8) m[i + 1][8] = bit;else m[n - 15 + i][8] = bit;
      // horizontal
      if (i < 8) m[8][n - 1 - i] = bit;else if (i < 9) m[8][15 - i - 1 + 1] = bit;else m[8][15 - i - 1] = bit;
    }
    m[n - 8][8] = true; // dark module
  }
  function placeVersion(m, n, version) {
    var bch = version << 12,
      g = 0x1f25;
    for (var i = 5; i >= 0; i--) if (bch >>> 12 + i & 1) bch ^= g << i;
    var bits = version << 12 | bch;
    for (i = 0; i < 18; i++) {
      var bit = (bits >>> i & 1) === 1;
      var r = Math.floor(i / 3),
        c = i % 3;
      m[r][n - 11 + c] = bit;
      m[n - 11 + c][r] = bit;
    }
  }

  // penalty score for mask selection (simplified: rules 1 & 3)
  function penalty(m, n) {
    var p = 0,
      r,
      c,
      i;
    for (r = 0; r < n; r++) {
      var run = 1;
      for (c = 1; c < n; c++) {
        if (m[r][c] === m[r][c - 1]) {
          run++;
          if (run === 5) p += 3;else if (run > 5) p++;
        } else run = 1;
      }
    }
    for (c = 0; c < n; c++) {
      run = 1;
      for (r = 1; r < n; r++) {
        if (m[r][c] === m[r - 1][c]) {
          run++;
          if (run === 5) p += 3;else if (run > 5) p++;
        } else run = 1;
      }
    }
    for (r = 0; r < n - 1; r++) for (c = 0; c < n - 1; c++) {
      var v = m[r][c];
      if (v === m[r][c + 1] && v === m[r + 1][c] && v === m[r + 1][c + 1]) p += 3;
    }
    return p;
  }

  // alignment pattern centers per version (1..10)
  var ALIGN = {
    1: [],
    2: [6, 18],
    3: [6, 22],
    4: [6, 26],
    5: [6, 30],
    6: [6, 34],
    7: [6, 22, 38],
    8: [6, 24, 42],
    9: [6, 26, 46],
    10: [6, 28, 50]
  };
  function generate(text) {
    var bytes = utf8(text);
    var version = chooseVersion(bytes.length);
    var dataCw = makeDataCodewords(text, version);
    var finalCw = makeFinalCodewords(dataCw, version);
    return makeMatrix(finalCw, version);
  }
  var QRCode = {
    matrix: function (text) {
      return generate(text);
    },
    svg: function (text, opts) {
      opts = opts || {};
      var px = opts.size || 220,
        margin = opts.margin != null ? opts.margin : 4;
      var dark = opts.dark || "#000",
        light = opts.light || "#fff";
      var q = generate(text),
        n = q.size,
        total = n + margin * 2;
      var cell = px / total;
      var rects = "";
      for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (q.modules[r][c]) {
        var x = (c + margin) * cell,
          y = (r + margin) * cell;
        rects += '<rect x="' + x.toFixed(2) + '" y="' + y.toFixed(2) + '" width="' + cell.toFixed(2) + '" height="' + cell.toFixed(2) + '"/>';
      }
      return '<svg xmlns="http://www.w3.org/2000/svg" width="' + px + '" height="' + px + '" viewBox="0 0 ' + px + ' ' + px + '" shape-rendering="crispEdges">' + '<rect width="' + px + '" height="' + px + '" fill="' + light + '"/>' + '<g fill="' + dark + '">' + rects + '</g></svg>';
    }
  };
  global.QRCode = QRCode;
})(typeof window !== "undefined" ? window : this);
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/qrcode.js", error: String((e && e.message) || e) }); }

// pages/returns-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   RETURN REQUESTS demo data + contract. Section: "Manage".
   A return is a first-class object that ties an original order to the physical
   movement (shipment legs) that carries goods BACK from the customer, plus any
   refund and the return fee (priced by pricing-data.js).
   GET /api/v1/returns.

   ════════════════════════════════════════════════════════════════════════════
   CONCEPT
   Customer already received an order, then wants to send it back. The flow:
     1) create return_request(order_id, reason_code, destination)  (status=requested)
     2) a driver collects it → shipment leg  customer → hub|store   (status=in_transit)
     3) it arrives                                                   (status=received)
     4) refund settled (if the reason is refundable)                (status=closed)
   The MOVEMENT reuses shipments/legs (from_type='customer'); the return_request
   is linked to the leg via shipment_leg_orders (same order_id). Pricing appends a
   return_to_store / return_to_hub fee via PRICING_APPLY_EVENT(order,{type:'return'}).

   ════════════════════════════════════════════════════════════════════════════
   DATA MODEL  (multi-tenant: every table carries org_id, omitted below)
   ════════════════════════════════════════════════════════════════════════════
   table: return_requests
     id            bigint  PK
     public_id     string  unique, "rtn_xxxxxx"
     order_id      bigint  FK → orders.id, required     (الأوردر الأصلي)
     reason_code   string  required  -- FK → return_reasons.code (pricing-data.js)
     destination   enum [store, hub] required           (وجهة المرتجع)
                           -- store: back to the vendor · hub: into the warehouse
     status        enum [requested, picking_up, in_transit, received, closed]
                           default 'requested'
     refund_amount decimal(10,2) nullable  -- to the customer, when reason.refundable
     refund_status enum [none, pending, paid] default 'none'
     shipment_id   bigint  FK → shipments.id, nullable  -- the carrying shipment
     created_at / updated_at

   VALIDATION (frontend + backend)
     order_id     : required; the order MUST be in a returnable state
                    (status='delivered'  →  order transitions to 'returning')
     reason_code  : required, ∈ return_reasons
     destination  : required, one of [store, hub]
     refund_amount: required & >= 0 ONLY when return_reasons[reason].refundable
     -- legal status transitions:
     --   requested → picking_up | closed(cancelled)
     --   picking_up → in_transit
     --   in_transit → received
     --   received  → closed
     -- on 'received': set order.status='returned' (TERMINAL) and, if refundable,
     --   move refund_status pending→paid when the settlement runs.

   ENDPOINTS
     GET/POST/PATCH/DELETE /api/v1/returns[/{public_id}]
     GET /api/v1/return-reasons          (lookup; see pricing-data.js RETURN_REASONS)
     POST /api/v1/returns/{id}/status    { status }
   ════════════════════════════════════════════════════════════════════════════
   NestJS / Angular handoff:
   • The return_request is its own aggregate; it REFERENCES a shipment for the
     physical move rather than owning legs. Raise ReturnReceived → order='returned'.
   • Refund is a settlement concern: write a negative/adjustment row into the
     customer ledger only when reason.refundable. Never auto-refund non-refundable
     reasons (e.g. customer_changed).
   • Angular: reuse StatusBadge with RETURN_STATUS_M; the reason dropdown binds to
     RETURN_REASONS; destination is a SegmentedControl (Store | Hub).
   ════════════════════════════════════════════════════════════════════════════ */

/* status → { tone, label } for the badge (mirror in an Angular pipe). */
var RETURN_STATUS_M = {
  requested: {
    t: "warning",
    l: "Requested"
  },
  picking_up: {
    t: "info",
    l: "Picking up"
  },
  in_transit: {
    t: "info",
    l: "In transit"
  },
  received: {
    t: "success",
    l: "Received"
  },
  closed: {
    t: "neutral",
    l: "Closed"
  },
  cancelled: {
    t: "danger",
    l: "Canceled"
  }
};

/* destination → { label, icon } — matches the shipment location kinds. */
var RETURN_DEST_M = {
  store: {
    l: "Store",
    icon: "package"
  },
  hub: {
    l: "Hub",
    icon: "grid"
  }
};
var RETURN_REQUESTS = [{
  id: "rtn_0001",
  public_id: "rtn_0001",
  order_id: "ord_10498",
  reason_code: "defective",
  destination: "store",
  status: "in_transit",
  refund_amount: 46.00,
  refund_status: "pending",
  shipment_id: "shp_1002",
  created_at: "2026-06-27 09:15"
}, {
  id: "rtn_0002",
  public_id: "rtn_0002",
  order_id: "ord_10499",
  reason_code: "customer_changed",
  destination: "hub",
  status: "requested",
  refund_amount: null,
  refund_status: "none",
  shipment_id: null,
  created_at: "2026-06-27 11:40"
}];
function RETURN_BY_ID(id) {
  return RETURN_REQUESTS.filter(function (r) {
    return r.id === id;
  })[0];
}

/* legal next-states (frontend renders valid actions; backend re-validates). */
var RETURN_NEXT = {
  requested: ["picking_up", "cancelled"],
  picking_up: ["in_transit", "cancelled"],
  in_transit: ["received"],
  received: ["closed"],
  closed: [],
  cancelled: []
};
function RETURN_CAN_TRANSITION(from, to) {
  return (RETURN_NEXT[from] || []).indexOf(to) >= 0;
}

/* Is a refund due for this return? (reason must be refundable — see RETURN_REASONS
   in pricing-data.js). Guarded so it works even if pricing-data.js isn't loaded. */
function RETURN_IS_REFUNDABLE(reason_code) {
  if (typeof RETURN_REASON === "function") {
    var r = RETURN_REASON(reason_code);
    return !!(r && r.refundable);
  }
  return null; // unknown without the lookup
}

/* ── Prototype persistence overlay ───────────────────────────────────────────
   Return orders SPAWNED by the routing screen (shipment-routing.html — the
   "Delivered ➡ Return" workflow) are appended here from localStorage so the
   bidirectional link survives page navigation: order-view.html joins on
   order_id and finds the spawned row, exactly as it would a backend row.
   Spawned rows carry ONE additive field beyond the schema above:
     parent_delivered_order_id  -- explicit metadata link to the original
                                   delivered order (== order_id today; kept
                                   separate so partial returns can diverge).
   BACKEND: this whole block is replaced by GET /api/v1/returns. */
(function () {
  try {
    var extra = JSON.parse(localStorage.getItem("fleet_returns_extra")) || [];
    extra.forEach(function (r) {
      if (!RETURN_BY_ID(r.id)) RETURN_REQUESTS.push(r);
    });
  } catch (e) {}
})();
function RETURNS_SAVE_EXTRA(row) {
  try {
    var extra = JSON.parse(localStorage.getItem("fleet_returns_extra")) || [];
    extra = extra.filter(function (r) {
      return r.id !== row.id;
    });
    extra.push(row);
    localStorage.setItem("fleet_returns_extra", JSON.stringify(extra));
  } catch (e) {}
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/returns-data.js", error: String((e && e.message) || e) }); }

// pages/roles-store.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   ROLES & PERMISSIONS — shared catalog + store.   (multi-tenant)

   Used by roles.html (list) and role-edit.html (create/update). Persistence is
   localStorage so the prototype works; swap each method for an API call.

   ════════════════════════════════════════════════════════════════════════════
   MODEL
   • A Role = { name, description, permissions: ["<module>.<action>", …] }.
   • Permission keys are STABLE STRINGS "<module>.<action>" — this is the contract
     the BACKEND enforces (middleware/policy checks the signed-in user's role has
     the required key before serving an endpoint) AND the FRONTEND uses to
     show/hide UI (nav items, buttons). Same catalog, both layers.
   • The catalog below is derived from the modules that actually exist in the app.
   • SUPER ADMIN is a built-in system role: it implicitly has every permission
     (current + future), is NOT editable, and CANNOT be deleted.

   DATABASE SCHEMA (target)
   TABLE roles
     id            bigint  PK
     org_id        bigint  FK → organizations.id     ← TENANT SCOPE
     name          string  required
     description   text
     is_system     boolean default false   -- true for Super Admin (locked)
     created_at / updated_at
     UNIQUE (org_id, name)
   TABLE role_permissions
     role_id       bigint  FK → roles.id (ON DELETE CASCADE)
     permission    string  "<module>.<action>"
     UNIQUE (role_id, permission)
   -- Super Admin stores no rows here; the policy layer treats is_system as "*".
   TABLE users.role_id → roles.id   (each user has one role)
   ════════════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function currentOrg() {
    try {
      return localStorage.getItem("fleet_org_id") || "org_swift";
    } catch (e) {
      return "org_swift";
    }
  }

  /* The permission catalog — one entry per module, each with its actions.
     Mirrors the real modules/pages in this app. Add a module here and it shows
     up in the permission matrix automatically. */
  var CATALOG = [{
    key: "dashboard",
    label: "Maps / Dashboard",
    icon: "grid",
    actions: [{
      key: "view",
      label: "View"
    }, {
      key: "plan",
      label: "Plan routes"
    }, {
      key: "manage",
      label: "Manage"
    }]
  }, {
    key: "drivers",
    label: "Drivers",
    icon: "user",
    actions: [{
      key: "list",
      label: "List drivers"
    }, {
      key: "view",
      label: "View driver details"
    }, {
      key: "create",
      label: "Create drivers"
    }, {
      key: "update",
      label: "Update drivers"
    }, {
      key: "delete",
      label: "Delete drivers"
    }, {
      key: "lookup",
      label: "Driver lookup"
    }, {
      key: "import",
      label: "Import Excel"
    }, {
      key: "export",
      label: "Export Excel"
    }]
  }, {
    key: "vehicles",
    label: "Vehicles",
    icon: "truck",
    actions: [{
      key: "list",
      label: "List vehicles"
    }, {
      key: "view",
      label: "View vehicle details"
    }, {
      key: "create",
      label: "Create vehicles"
    }, {
      key: "update",
      label: "Update vehicles"
    }, {
      key: "delete",
      label: "Delete vehicles"
    }, {
      key: "lookup",
      label: "Vehicle lookup"
    }, {
      key: "import",
      label: "Import Excel"
    }, {
      key: "export",
      label: "Export Excel"
    }]
  }, {
    key: "fleets",
    label: "Fleets",
    icon: "grid",
    actions: [{
      key: "list",
      label: "List fleets"
    }, {
      key: "view",
      label: "View fleet details"
    }, {
      key: "create",
      label: "Create fleets"
    }, {
      key: "update",
      label: "Update fleets"
    }, {
      key: "delete",
      label: "Delete fleets"
    }, {
      key: "assign_users",
      label: "Assign users"
    }]
  }, {
    key: "vendors",
    label: "Stores",
    icon: "package",
    actions: [{
      key: "list",
      label: "List stores"
    }, {
      key: "view",
      label: "View store details"
    }, {
      key: "create",
      label: "Create stores"
    }, {
      key: "update",
      label: "Update stores"
    }, {
      key: "delete",
      label: "Delete stores"
    }]
  }, {
    key: "areas",
    label: "Areas & Zones",
    icon: "map",
    actions: [{
      key: "list",
      label: "List areas"
    }, {
      key: "create",
      label: "Create areas"
    }, {
      key: "update",
      label: "Update areas"
    }, {
      key: "delete",
      label: "Delete areas"
    }]
  }, {
    key: "forms",
    label: "Forms (custom fields)",
    icon: "columns",
    actions: [{
      key: "view",
      label: "View forms"
    }, {
      key: "manage",
      label: "Manage custom fields"
    }]
  }, {
    key: "languages",
    label: "Languages",
    icon: "globe",
    actions: [{
      key: "list",
      label: "List languages"
    }, {
      key: "create",
      label: "Add languages"
    }, {
      key: "update",
      label: "Upload translations"
    }, {
      key: "delete",
      label: "Delete languages"
    }, {
      key: "publish",
      label: "Publish languages"
    }]
  }, {
    key: "users",
    label: "Users",
    icon: "users",
    actions: [{
      key: "list",
      label: "List users"
    }, {
      key: "view",
      label: "View user details"
    }, {
      key: "create",
      label: "Create users"
    }, {
      key: "update",
      label: "Update users"
    }, {
      key: "delete",
      label: "Delete users"
    }]
  }, {
    key: "roles",
    label: "Roles",
    icon: "shield",
    actions: [{
      key: "list",
      label: "List roles"
    }, {
      key: "create",
      label: "Create roles"
    }, {
      key: "update",
      label: "Update roles"
    }, {
      key: "delete",
      label: "Delete roles"
    }]
  }, {
    key: "settings",
    label: "Settings",
    icon: "settings",
    actions: [{
      key: "view",
      label: "View settings"
    }, {
      key: "manage",
      label: "Manage settings"
    }]
  }];

  /* All permission keys "<module>.<action>" — Super Admin gets the full set. */
  function allKeys() {
    var keys = [];
    CATALOG.forEach(function (m) {
      m.actions.forEach(function (a) {
        keys.push(m.key + "." + a.key);
      });
    });
    return keys;
  }

  /* Built-in system roles (always present, not stored as editable rows). */
  var SYSTEM_ROLES = [{
    id: "role_super_admin",
    name: "Super Admin",
    description: "Full access to every module and action. This role is built-in and can't be edited or removed.",
    is_system: true,
    permissions: allKeys()
  }];
  var LS = "fleet_roles_v2"; // { org_id: [role, …] }  (custom roles only)
  function read() {
    try {
      return JSON.parse(localStorage.getItem(LS)) || {};
    } catch (e) {
      return {};
    }
  }
  function write(v) {
    try {
      localStorage.setItem(LS, JSON.stringify(v));
    } catch (e) {}
  }

  /* seed a couple of example custom roles the first time, so the list isn't empty */
  function seed(orgId) {
    var all = read();
    if (all[orgId]) return;
    all[orgId] = [{
      id: "role_dispatcher",
      name: "Dispatcher",
      description: "Runs day-to-day operations on the map and drivers.",
      is_system: false,
      permissions: ["dashboard.view", "dashboard.plan", "drivers.list", "drivers.view", "drivers.lookup", "vehicles.list", "vehicles.view", "fleets.list"]
    }, {
      id: "role_fleet_manager",
      name: "Fleet Manager",
      description: "Manages vehicles, fleets and their drivers.",
      is_system: false,
      permissions: ["vehicles.list", "vehicles.view", "vehicles.create", "vehicles.update", "vehicles.export", "fleets.list", "fleets.view", "fleets.create", "fleets.update", "fleets.assign_users", "drivers.list", "drivers.view"]
    }, {
      id: "role_viewer",
      name: "Read-only Viewer",
      description: "Can view records across modules but cannot change anything.",
      is_system: false,
      permissions: ["dashboard.view", "drivers.list", "drivers.view", "vehicles.list", "vehicles.view", "fleets.list", "fleets.view"]
    }];
    write(all);
  }
  var RolesStore = {
    catalog: CATALOG,
    allKeys: allKeys,
    totalPermissions: allKeys().length,
    currentOrg: currentOrg,
    systemRoles: function () {
      return SYSTEM_ROLES.map(function (r) {
        return Object.assign({}, r);
      });
    },
    /* GET /api/v1/roles → system roles + the org's custom roles */
    roles: function (orgId) {
      orgId = orgId || currentOrg();
      seed(orgId);
      return this.systemRoles().concat(read()[orgId] || []);
    },
    getRole: function (id, orgId) {
      return this.roles(orgId).filter(function (r) {
        return r.id === id;
      })[0];
    },
    isLocked: function (role) {
      return !!(role && role.is_system);
    },
    /* POST/PATCH /api/v1/roles — refuses to touch system roles */
    saveRole: function (role, orgId) {
      orgId = orgId || currentOrg();
      if (role.id) {
        var ex = this.getRole(role.id, orgId);
        if (ex && ex.is_system) return {
          error: "locked"
        };
      }
      var all = read();
      var list = all[orgId] || [];
      if (role.id) {
        list = list.map(function (r) {
          return r.id === role.id ? role : r;
        });
      } else {
        role.id = "role_" + Date.now();
        role.is_system = false;
        list.push(role);
      }
      all[orgId] = list;
      write(all);
      return role;
    },
    /* DELETE /api/v1/roles/{id} — refuses system roles */
    removeRole: function (id, orgId) {
      orgId = orgId || currentOrg();
      var r = this.getRole(id, orgId);
      if (r && r.is_system) return {
        error: "locked"
      };
      var all = read();
      all[orgId] = (all[orgId] || []).filter(function (x) {
        return x.id !== id;
      });
      write(all);
      return {
        ok: true
      };
    },
    moduleLabel: function (k) {
      var m = CATALOG.filter(function (x) {
        return x.key === k;
      })[0];
      return m ? m.label : k;
    }
  };
  window.RolesStore = RolesStore;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/roles-store.js", error: String((e && e.message) || e) }); }

// pages/routing-demo-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   ROUTING DEMO SEED — extra Riyadh-area customers + orders for the
   New Shipment & Routing screen (shipment-routing.html).

   WHY THIS FILE EXISTS
   The routing screen draws sequence-numbered pins on a schematic map, so every
   order in its picker MUST resolve to real lat/lng (customer address + store
   branch + hub). The base demo set (order-data.js) only has 2 geocoded Riyadh
   customers, so this file ADDS a denser, all-Riyadh cluster:

     • 6 customers (cus_11xx) with geocoded addresses inside the Riyadh box
       (lat 24.4–24.9, lng 46.5–47.0 — same box service-areas.html uses)
     • 8 ROUTABLE orders (ord_12001…ord_12008) covering every status the
       routing picker allows: ready, at_hub, returned_to_hub, delivery_failed,
       delivered (×2 — the "Return trigger" case)
     • 7 NON-routable orders (ord_12009…ord_12015) covering every excluded
       status — they exist to PROVE the picker filter works (they must never
       appear in the routing pool).

   HOW IT LOADS
   Load AFTER customer-data.js + order-data.js and BEFORE ops-store.js overlay.
   It pushes into the shared in-memory arrays (CUSTOMERS, MANAGE_ORDERS), so
   every other page (orders.html, order-view.html…) sees the same rows —
   exactly like rows coming from GET /api/v1/orders would.

   BACKEND: none of this is new schema — they are plain `customers` +
   `customer_addresses` + `orders` rows. Delete this file when wiring real data.
   ════════════════════════════════════════════════════════════════════════════ */

(function () {
  "use strict";

  if (typeof CUSTOMERS === "undefined" || typeof MANAGE_ORDERS === "undefined") return;

  /* ── Customers (all geocoded, all Riyadh) ────────────────────────────────── */
  var seedCustomers = [{
    id: "cus_1101",
    name: "Fahad Al-Harbi",
    phone_primary: "+966 55 410 8821",
    phone_secondary: "",
    addresses: [{
      address_line: "Al Hamra dist., 12th St., villa 8",
      address_name: "Home",
      apartment_no: "",
      building_no: "8",
      country_id: 966,
      city_id: 101,
      lat: 24.7300,
      lng: 46.7600
    }]
  }, {
    id: "cus_1102",
    name: "Noura Al-Qahtani",
    phone_primary: "+966 50 233 7645",
    phone_secondary: "",
    addresses: [{
      address_line: "Al Nada dist., Abi Bakr As Siddiq Rd",
      address_name: "Home",
      apartment_no: "14",
      building_no: "221",
      country_id: 966,
      city_id: 101,
      lat: 24.7936,
      lng: 46.7218
    }]
  }, {
    id: "cus_1103",
    name: "Salem Al-Dosari",
    phone_primary: "+966 54 900 1287",
    phone_secondary: "",
    addresses: [{
      address_line: "Al Malaz, Salahuddin Rd, bldg 40",
      address_name: "Work",
      apartment_no: "3",
      building_no: "40",
      country_id: 966,
      city_id: 101,
      lat: 24.6584,
      lng: 46.7101
    }]
  }, {
    id: "cus_1104",
    name: "Huda Al-Mutairi",
    phone_primary: "+966 56 782 0034",
    phone_secondary: "",
    addresses: [{
      address_line: "Al Aqiq, King Salman Rd, tower 2",
      address_name: "Home",
      apartment_no: "901",
      building_no: "2",
      country_id: 966,
      city_id: 101,
      lat: 24.7522,
      lng: 46.6413
    }]
  }, {
    id: "cus_1105",
    name: "Tariq Al-Shehri",
    phone_primary: "+966 59 118 4409",
    phone_secondary: "",
    addresses: [{
      address_line: "Al Rawdah dist., Khalid Bin Walid Rd",
      address_name: "Home",
      apartment_no: "",
      building_no: "77",
      country_id: 966,
      city_id: 101,
      lat: 24.6890,
      lng: 46.7729
    }]
  }, {
    id: "cus_1106",
    name: "Reem Al-Zahrani",
    phone_primary: "+966 53 660 2210",
    phone_secondary: "",
    addresses: [{
      address_line: "Al Yasmin dist., Anas Ibn Malik Rd",
      address_name: "Home",
      apartment_no: "6",
      building_no: "310",
      country_id: 966,
      city_id: 101,
      lat: 24.8155,
      lng: 46.6570
    }]
  }];
  seedCustomers.forEach(function (c) {
    if (!CUSTOMER_BY_ID(c.id)) CUSTOMERS.push(c);
  });

  /* ── Orders ──────────────────────────────────────────────────────────────
     All belong to Najm Market (str_0001 — Olaya branch, geocoded) so the
     return-address reversal has a real merchant location to point at.
     Weights come from order lines (ORDER_ACTUAL_KG). */
  var seedOrders = [/* ROUTABLE — the five allowed picker statuses ......................... */
  // ready: still at the store → needs a store→hub pickup leg + dispatch leg
  {
    id: "ord_12001",
    ref: "#SO-12001",
    store_id: "str_0001",
    customer_id: "cus_1101",
    customer_addr_id: 0,
    status: "ready",
    driver_id: null,
    vehicle_id: null,
    current_hub_id: null,
    payment_method: "cod",
    cod_amount: 84.50,
    currency: "SAR",
    payment_status: "cod",
    amount_paid: 0,
    scheduled_at: "2026-07-15 10:00",
    attempts_count: 0,
    lines: [{
      item_id: "itm_0001",
      qty: 2
    }],
    at: "2026-07-13 15:40"
  }, {
    id: "ord_12002",
    ref: "#SO-12002",
    store_id: "str_0001",
    customer_id: "cus_1102",
    customer_addr_id: 0,
    status: "ready",
    driver_id: null,
    vehicle_id: null,
    current_hub_id: null,
    payment_method: "prepaid",
    cod_amount: 0,
    currency: "SAR",
    payment_status: "paid",
    amount_paid: null,
    scheduled_at: "2026-07-15 12:00",
    attempts_count: 0,
    lines: [{
      item_id: "itm_0002",
      qty: 2
    }],
    at: "2026-07-13 16:05"
  },
  // at_hub: sitting in Riyadh Central → dispatch leg only
  {
    id: "ord_12003",
    ref: "#SO-12003",
    store_id: "str_0001",
    customer_id: "cus_1103",
    customer_addr_id: 0,
    status: "at_hub",
    driver_id: null,
    vehicle_id: null,
    current_hub_id: "hub_0001",
    payment_method: "cod",
    cod_amount: 35.00,
    currency: "SAR",
    payment_status: "cod",
    amount_paid: 0,
    scheduled_at: "2026-07-15 09:30",
    attempts_count: 0,
    lines: [{
      item_id: "itm_0002",
      qty: 1
    }, {
      item_id: "itm_0003",
      qty: 1
    }],
    at: "2026-07-12 11:20"
  }, {
    id: "ord_12004",
    ref: "#SO-12004",
    store_id: "str_0001",
    customer_id: "cus_1104",
    customer_addr_id: 0,
    status: "at_hub",
    driver_id: null,
    vehicle_id: null,
    current_hub_id: "hub_0001",
    payment_method: "prepaid",
    cod_amount: 0,
    currency: "SAR",
    payment_status: "paid",
    amount_paid: null,
    scheduled_at: "2026-07-15 14:00",
    attempts_count: 0,
    lines: [{
      item_id: "itm_0004",
      qty: 2
    }],
    at: "2026-07-12 12:00"
  },
  // returned_to_hub: came back after a failed attempt → re-dispatch
  {
    id: "ord_12005",
    ref: "#SO-12005",
    store_id: "str_0001",
    customer_id: "cus_1105",
    customer_addr_id: 0,
    status: "returned_to_hub",
    driver_id: null,
    vehicle_id: null,
    current_hub_id: "hub_0001",
    payment_method: "cod",
    cod_amount: 18.50,
    currency: "SAR",
    payment_status: "cod",
    amount_paid: 0,
    scheduled_at: "2026-07-15 11:00",
    attempts_count: 1,
    lines: [{
      item_id: "itm_0001",
      qty: 1
    }],
    at: "2026-07-11 09:15"
  },
  // delivery_failed: eligible for re-routing / rescheduling
  {
    id: "ord_12006",
    ref: "#SO-12006",
    store_id: "str_0001",
    customer_id: "cus_1106",
    customer_addr_id: 0,
    status: "delivery_failed",
    driver_id: null,
    vehicle_id: null,
    current_hub_id: "hub_0001",
    payment_method: "cod",
    cod_amount: 55.00,
    currency: "SAR",
    payment_status: "cod",
    amount_paid: 0,
    scheduled_at: "2026-07-14 16:00",
    attempts_count: 1,
    fail_reason: "Customer unreachable; second window requested.",
    lines: [{
      item_id: "itm_0002",
      qty: 1
    }, {
      item_id: "itm_0004",
      qty: 1
    }],
    at: "2026-07-13 17:30"
  },
  // delivered: the RETURN TRIGGERS — picking these spawns a linked Return Order
  {
    id: "ord_12007",
    ref: "#SO-12007",
    store_id: "str_0001",
    customer_id: "cus_1102",
    customer_addr_id: 0,
    status: "delivered",
    driver_id: "drv_a1b2c3",
    vehicle_id: "veh_h1l2x3",
    current_hub_id: null,
    payment_method: "cod",
    cod_amount: 46.00,
    currency: "SAR",
    payment_status: "paid",
    amount_paid: null,
    scheduled_at: null,
    delivered_at: "2026-07-12 18:40",
    attempts_count: 1,
    lines: [{
      item_id: "itm_0004",
      qty: 1
    }],
    at: "2026-07-12 18:40"
  }, {
    id: "ord_12008",
    ref: "#SO-12008",
    store_id: "str_0001",
    customer_id: "cus_1105",
    customer_addr_id: 0,
    status: "delivered",
    driver_id: "drv_d4e5f6",
    vehicle_id: "veh_c4n5t6",
    current_hub_id: null,
    payment_method: "prepaid",
    cod_amount: 0,
    currency: "SAR",
    payment_status: "paid",
    amount_paid: null,
    scheduled_at: null,
    delivered_at: "2026-07-13 11:05",
    attempts_count: 1,
    lines: [{
      item_id: "itm_0003",
      qty: 2
    }],
    at: "2026-07-13 11:05"
  },
  /* NOT ROUTABLE — every excluded status, to prove the picker filter ....
     draft, allocated, picked_up, missed, out_for_delivery, cancelled,
     returned_to_store must NEVER appear in the routing pool. */
  {
    id: "ord_12009",
    ref: "#SO-12009",
    store_id: "str_0001",
    customer_id: "cus_1101",
    customer_addr_id: 0,
    status: "out_for_delivery",
    driver_id: "drv_g7h8i9",
    vehicle_id: "veh_v7n8a9",
    current_hub_id: null,
    payment_method: "cod",
    cod_amount: 29.00,
    currency: "SAR",
    scheduled_at: "2026-07-14 15:00",
    lines: [{
      item_id: "itm_0003",
      qty: 1
    }],
    at: "2026-07-14 08:10"
  }, {
    id: "ord_12010",
    ref: "#SO-12010",
    store_id: "str_0001",
    customer_id: "cus_1103",
    customer_addr_id: 0,
    status: "draft",
    payment_method: "prepaid",
    cod_amount: 0,
    currency: "SAR",
    lines: [{
      item_id: "itm_0001",
      qty: 1
    }],
    at: "2026-07-14 09:00"
  }, {
    id: "ord_12011",
    ref: "#SO-12011",
    store_id: "str_0001",
    customer_id: "cus_1104",
    customer_addr_id: 0,
    status: "picked_up",
    driver_id: "drv_b1c2d3",
    vehicle_id: "veh_h1l2x3",
    current_hub_id: null,
    payment_method: "cod",
    cod_amount: 40.00,
    currency: "SAR",
    scheduled_at: "2026-07-14 13:00",
    lines: [{
      item_id: "itm_0002",
      qty: 1
    }],
    at: "2026-07-14 07:45"
  }, {
    id: "ord_12012",
    ref: "#SO-12012",
    store_id: "str_0001",
    customer_id: "cus_1106",
    customer_addr_id: 0,
    status: "missed",
    driver_id: "drv_b1c2d3",
    vehicle_id: null,
    current_hub_id: null,
    payment_method: "prepaid",
    cod_amount: 0,
    currency: "SAR",
    scheduled_at: "2026-07-13 18:00",
    lines: [{
      item_id: "itm_0004",
      qty: 1
    }],
    at: "2026-07-13 10:00"
  }, {
    id: "ord_12013",
    ref: "#SO-12013",
    store_id: "str_0001",
    customer_id: "cus_1103",
    customer_addr_id: 0,
    status: "allocated",
    driver_id: "drv_a1b2c3",
    vehicle_id: "veh_h1l2x3",
    current_hub_id: null,
    payment_method: "cod",
    cod_amount: 22.00,
    currency: "SAR",
    scheduled_at: "2026-07-14 17:00",
    lines: [{
      item_id: "itm_0003",
      qty: 2
    }],
    at: "2026-07-14 06:30"
  }, {
    id: "ord_12014",
    ref: "#SO-12014",
    store_id: "str_0001",
    customer_id: "cus_1105",
    customer_addr_id: 0,
    status: "cancelled",
    payment_method: "prepaid",
    cod_amount: 0,
    currency: "SAR",
    lines: [{
      item_id: "itm_0001",
      qty: 1
    }],
    at: "2026-07-10 12:00"
  }, {
    id: "ord_12015",
    ref: "#SO-12015",
    store_id: "str_0001",
    customer_id: "cus_1101",
    customer_addr_id: 0,
    status: "returned_to_store",
    payment_method: "cod",
    cod_amount: 31.00,
    currency: "SAR",
    attempts_count: 2,
    lines: [{
      item_id: "itm_0002",
      qty: 1
    }],
    at: "2026-07-09 16:20"
  }];
  seedOrders.forEach(function (o) {
    if (!ORDER_BY_ID(o.id)) MANAGE_ORDERS.push(o);
  });

  /* ── Feature showcase — "Once-returned, never re-picked" scenarios ─────────
     Three delivered orders that demonstrate the bidirectional return filter in
     the routing picker (shipment-routing.js §1). All customers/stores above
     are geocoded so they resolve on the map + in order-view.html.
       A  ord_901_del — has an ACTIVE return (rtn_901) → HIDDEN from the picker
       B  ord_902_del — its return (rtn_902) was CANCELED → VISIBLE again
       C  ord_903_del — no return at all → VISIBLE, ready to trigger a fresh one
     Refs use the teammate's ORD-90x-DEL / -RET labels verbatim. */
  var scenarioOrders = [{
    id: "ord_901_del",
    ref: "ORD-901-DEL",
    store_id: "str_0001",
    customer_id: "cus_0001",
    customer_addr_id: 0,
    status: "delivered",
    driver_id: "drv_a1b2c3",
    vehicle_id: "veh_h1l2x3",
    current_hub_id: null,
    child_return_order_id: "rtn_901",
    payment_method: "cod",
    cod_amount: 64.00,
    currency: "SAR",
    payment_status: "paid",
    amount_paid: null,
    scheduled_at: null,
    delivered_at: "2026-07-10 17:10",
    attempts_count: 1,
    lines: [{
      item_id: "itm_0001",
      qty: 1
    }, {
      item_id: "itm_0004",
      qty: 1
    }],
    at: "2026-07-10 17:10"
  }, {
    id: "ord_902_del",
    ref: "ORD-902-DEL",
    store_id: "str_0001",
    customer_id: "cus_1103",
    customer_addr_id: 0,
    status: "delivered",
    driver_id: "drv_d4e5f6",
    vehicle_id: "veh_c4n5t6",
    current_hub_id: null,
    child_return_order_id: "rtn_902",
    payment_method: "prepaid",
    cod_amount: 0,
    currency: "SAR",
    payment_status: "paid",
    amount_paid: null,
    scheduled_at: null,
    delivered_at: "2026-07-11 12:30",
    attempts_count: 1,
    lines: [{
      item_id: "itm_0002",
      qty: 2
    }],
    at: "2026-07-11 12:30"
  }, {
    id: "ord_903_del",
    ref: "ORD-903-DEL",
    store_id: "str_0001",
    customer_id: "cus_1102",
    customer_addr_id: 0,
    status: "delivered",
    driver_id: "drv_a1b2c3",
    vehicle_id: "veh_h1l2x3",
    current_hub_id: null,
    payment_method: "cod",
    cod_amount: 70.00,
    currency: "SAR",
    payment_status: "paid",
    amount_paid: null,
    scheduled_at: null,
    delivered_at: "2026-07-12 09:45",
    attempts_count: 1,
    lines: [{
      item_id: "itm_0002",
      qty: 1
    }, {
      item_id: "itm_0003",
      qty: 1
    }],
    at: "2026-07-12 09:45"
  }];
  scenarioOrders.forEach(function (o) {
    if (!ORDER_BY_ID(o.id)) MANAGE_ORDERS.push(o);
  });

  /* Their linked return orders. `parent_delivered_order_id` is the bidirectional
     metadata link read by both the picker filter and the detail views (§3).
       rtn_901 — status in_transit (ACTIVE)  → parent stays hidden
       rtn_902 — status cancelled (TERMINAL) → parent re-appears */
  if (typeof RETURN_REQUESTS !== "undefined") {
    var scenarioReturns = [{
      id: "rtn_901",
      public_id: "ORD-901-RET",
      order_id: "ord_901_del",
      parent_delivered_order_id: "ord_901_del",
      reason_code: "defective",
      destination: "store",
      status: "in_transit",
      refund_amount: 40.00,
      refund_status: "pending",
      shipment_id: "shp_1001",
      created_at: "2026-07-11 08:20"
    }, {
      id: "rtn_902",
      public_id: "ORD-902-RET",
      order_id: "ord_902_del",
      parent_delivered_order_id: "ord_902_del",
      reason_code: "customer_changed",
      destination: "store",
      status: "cancelled",
      refund_amount: null,
      refund_status: "none",
      shipment_id: null,
      created_at: "2026-07-11 15:00"
    }];
    scenarioReturns.forEach(function (r) {
      if (!RETURN_BY_ID(r.id)) RETURN_REQUESTS.push(r);
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/routing-demo-data.js", error: String((e && e.message) || e) }); }

// pages/servicearea-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   SERVICE AREA demo data + contract.  GET /api/v1/service-areas.

   ════════════════════════════════════════════════════════════════════════════
   DATA MODEL  (multi-tenant: every table carries org_id, omitted below)
   ════════════════════════════════════════════════════════════════════════════
   table: service_areas
     id            bigint  PK
     public_id     string  unique, "sva_xxxxxx"
     name          string  required                       (اسم المنطقة)
     country_id    bigint  FK → countries.id, required
     city_id       bigint  FK → cities.id, required
                           -- cities.country_id MUST equal this.country_id
     delivery_fee  decimal(10,2) required                 (سعر التوصيل)
     rush_surcharge jsonb  nullable  -- RUSH ORDER premium for this area:
                           -- { fee_type:"flat"|"percent", value:number }.
                           -- Used when an order in this area is flagged is_rush
                           -- AND the store has no rush override of its own (the
                           -- store contract rush surcharge takes precedence).
                           -- null ⇒ fall back to the org default rush surcharge.
     currency      string(3)  default "SAR"
     color         string  hex e.g. "#3485e2" (map display color, admin-chosen)
     polygon       jsonb   required  -- the boundary the admin draws on the map:
                           -- an array of {lat,lng} points (a closed ring).
                           -- store as GeoJSON Polygon in production:
                           -- { "type":"Polygon", "coordinates":[[[lng,lat],…]] }
     is_active     boolean default true
     created_at / updated_at

   LIFECYCLE / DELETION RULE
     A service area that is ALLOCATED to orders — i.e. referenced by any
     store_contracts.service_area_id, drivers.service_area_id, or
     orders.service_area_id — CANNOT be deleted. It may only be toggled
     is_active true/false. Setting is_active=false hides it from NEW deliveries
     while preserving every historical order/contract that points to it.
       • DELETE /api/v1/service-areas/{id} → 409 Conflict when allocated
         (EXISTS in store_contracts | drivers | orders); message: "deactivate
         instead". Hard delete is allowed ONLY for a never-allocated area.
       • PATCH .../{id} { is_active } is the always-available lifecycle control.
     Frontend mirrors this: the row's Delete action is replaced by a disabled
     "In use — can't delete" item, and Activate/Deactivate is always offered
     (see svaAllocated() in service-areas.html).

   VALIDATION (frontend + backend)
     name         : required
     country_id   : required
     city_id      : required AND belongs to country_id
     delivery_fee : required, >= 0
     polygon      : required, >= 3 points (a valid closed area)
     overlap      : ALLOWED. Service areas MAY intersect or nest inside each
                    other. When a delivery point falls inside two or more areas,
                    pricing resolves to the HIGHEST applicable base price among
                    them (see order pricing → resolveAreaPrice).

   FLOW
     Admin draws a boundary on the map (click points → close the shape). On
     finish, a popup opens to CREATE the area: name, country, city, delivery fee.
     The drawn polygon is submitted with those fields.

   ENDPOINTS
     GET/POST/PATCH/DELETE /api/v1/service-areas[/{public_id}]
     GET /api/v1/countries · GET /api/v1/cities?country_id={id}
   ════════════════════════════════════════════════════════════════════════════ */

var SVA_COUNTRIES = [{
  id: 966,
  name: "Saudi Arabia",
  iso2: "SA"
}, {
  id: 971,
  name: "United Arab Emirates",
  iso2: "AE"
}, {
  id: 20,
  name: "Egypt",
  iso2: "EG"
}];
var SVA_CITIES = [{
  id: 101,
  name: "Riyadh",
  country_id: 966
}, {
  id: 102,
  name: "Jeddah",
  country_id: 966
}, {
  id: 103,
  name: "Dammam",
  country_id: 966
}, {
  id: 104,
  name: "Mecca",
  country_id: 966
}, {
  id: 201,
  name: "Dubai",
  country_id: 971
}, {
  id: 202,
  name: "Abu Dhabi",
  country_id: 971
}, {
  id: 301,
  name: "Cairo",
  country_id: 20
}, {
  id: 302,
  name: "Alexandria",
  country_id: 20
}];
function SVA_CITIES_BY_COUNTRY(cid) {
  return SVA_CITIES.filter(function (c) {
    return String(c.country_id) === String(cid);
  });
}
function SVA_CITY_NAME(id) {
  var c = SVA_CITIES.filter(function (x) {
    return x.id === id;
  })[0];
  return c ? c.name : '—';
}
function SVA_COUNTRY_NAME(id) {
  var c = SVA_COUNTRIES.filter(function (x) {
    return x.id === id;
  })[0];
  return c ? c.name : '—';
}

/* polygons stored as % points in the demo map box (0..100); real app stores lat/lng. */
var SERVICE_AREAS = [{
  id: "sva_0001",
  name: "North Riyadh",
  country_id: 966,
  city_id: 101,
  delivery_fee: 15.00,
  currency: "SAR",
  is_active: true,
  rush_surcharge: {
    fee_type: "flat",
    value: 12.00
  },
  polygon: [{
    x: 10,
    y: 12
  }, {
    x: 42,
    y: 10
  }, {
    x: 44,
    y: 38
  }, {
    x: 12,
    y: 40
  }]
}, {
  id: "sva_0002",
  name: "Jeddah Corniche",
  country_id: 966,
  city_id: 102,
  delivery_fee: 20.00,
  currency: "SAR",
  is_active: true,
  rush_surcharge: {
    fee_type: "flat",
    value: 15.00
  },
  polygon: [{
    x: 58,
    y: 14
  }, {
    x: 88,
    y: 18
  }, {
    x: 84,
    y: 44
  }, {
    x: 56,
    y: 42
  }]
}, {
  id: "sva_0003",
  name: "East Dammam",
  country_id: 966,
  city_id: 103,
  delivery_fee: 18.50,
  currency: "SAR",
  is_active: false,
  rush_surcharge: {
    fee_type: "percent",
    value: 10.00
  },
  polygon: [{
    x: 20,
    y: 58
  }, {
    x: 52,
    y: 56
  }, {
    x: 54,
    y: 86
  }, {
    x: 18,
    y: 86
  }]
}];
function SVA_BY_ID(id) {
  return SERVICE_AREAS.filter(function (s) {
    return s.id === id;
  })[0];
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/servicearea-data.js", error: String((e && e.message) || e) }); }

// pages/shipment-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   SHIPMENT demo data + contract. Section: "Manage".
   Shared by shipments.html, shipment-edit.html, shipment-view.html.
   GET /api/v1/shipments.

   ════════════════════════════════════════════════════════════════════════════
   CONCEPT
   A shipment is a DRIVER'S JOURNEY made of ordered ROUTES (legs). Each leg
   picks orders up FROM a location and drops them OFF AT another location.
   Locations can be a Store, a Hub (warehouse/مستودع), or a Customer. Example:
     leg1  Store    → Hub       (bring store orders into the warehouse)   pickup
     leg2  Hub      → Customer  (take those orders out to the customer)   dispatch
     leg3  Customer → Hub       (collect a return from a customer)        return
     leg4  Hub      → Store     (return items back to the store)          return
   Each leg carries one or more orders. The shipment = the ordered list of legs.

   ⚠ NAMING (سبيك التوحيد): earlier drafts called the warehouse a "stock". The
   canonical location kind is now **hub** (matches the `hubs` module, hub-data.js).
   The literal 'stock' is still accepted as a BACK-COMPAT alias on read so old
   rows/pages don't break; all NEW data uses 'hub'. Migrate: stock → hub.

   ────────────────────────────────────────────────────────────────────────────
   PER-ORDER OUTCOME (أهم إضافة تشغيلية)
   The shipment/leg tracks WHERE things move; the OUTCOME of each order on a leg
   (delivered / failed / returned / partial) lives on shipment_leg_orders below,
   NOT on the shipment status. One failed customer doesn't fail the whole leg.
   ────────────────────────────────────────────────────────────────────────────

   ════════════════════════════════════════════════════════════════════════════
   DATA MODEL  (multi-tenant: every table carries org_id, omitted below)
   ════════════════════════════════════════════════════════════════════════════
   table: shipments
     id          bigint PK
     public_id   string unique, "shp_xxxxxx"
     ref         string human ref "#SHP-1001" (auto)
     driver_id   bigint FK → drivers.id, nullable (assigned driver)
     vehicle_id  bigint FK → vehicles.id, nullable
     status      enum [draft, assigned, in-progress, completed, cancelled] default draft
     created_at / updated_at

   table: shipment_legs                 -- the routes, ordered by `seq`
     id           bigint PK
     shipment_id  bigint FK → shipments.id (ON DELETE CASCADE)
     seq          int    required   -- order of the leg in the journey (1,2,3…)
     from_type    enum [store, hub, customer] required
     from_id      bigint required    -- FK into stores/hubs/customers by type
     to_type      enum [store, hub, customer] required
     to_id        bigint required
     kind         enum [pickup, transfer, dispatch, return] nullable
                             -- derived hint for UI/pricing:
                             --   store→hub  = pickup     hub→customer = dispatch
                             --   hub→hub    = transfer   customer→*   = return
     -- from_type/from_id MUST differ from to_type/to_id (can't pick & drop same place)

   table: shipment_leg_orders           -- which orders ride on a leg + OUTCOME
     id           bigint PK
     leg_id       bigint FK → shipment_legs.id (ON DELETE CASCADE)
     order_id     bigint FK → orders.id
     outcome      enum [pending, completed, failed, partial] default pending
     reason_code  string nullable   -- FK → failure_reasons.code (when failed/partial)
     qty_expected int    nullable   -- units expected to move on this leg
     qty_actual   int    nullable   -- units actually moved (partial deliveries)
     proof_type   enum [none, signature, photo, otp] default none
     proof_ref    string nullable   -- path to signature/photo, or verified OTP
     completed_at datetime nullable
     UNIQUE (leg_id, order_id)
     -- On completing a leg-order the backend: (1) stamps outcome/proof,
     -- (2) advances orders.status, (3) fires PricingService.applyEvent so any
     --     event fee (failed_attempt / return) is appended to order_charges,
     -- (4) writes a delivery_attempts row when the leg drops off at a customer.

   ────────────────────────────────────────────────────────────────────────────
   table: delivery_attempts             -- one row per customer delivery attempt
     id           bigint PK, org_id
     order_id     bigint FK → orders.id
     shipment_id  bigint FK → shipments.id nullable
     attempt_no   int      -- 1,2,3… (mirror onto orders.attempts_count)
     result       enum [delivered, failed, rescheduled]
     reason_code  string nullable   -- FK → failure_reasons.code (see pricing-data.js)
     next_at      datetime nullable  -- new promised window when result='rescheduled'
     proof_type   enum [none, signature, photo, otp] default none
     proof_ref    string nullable
     actor_id     bigint FK → users.id (driver)   at datetime
     -- A 'failed' attempt whose reason_code.billable=true triggers the rate
     -- card's event_fees.failed_attempt charge. 'rescheduled' → reschedule fee.

   VALIDATION (frontend + backend)
     driver/vehicle : optional at draft; required to move past 'assigned'
     legs           : at least 1 leg
       from/to      : both required; from ≠ to
       orders       : each leg carries >= 1 order
   ENDPOINTS  GET/POST/PATCH/DELETE /api/v1/shipments[/{public_id}]
     POST /api/v1/shipments/{id}/legs/{seq}/orders/{order_id}/outcome
          { outcome, reason_code?, qty_actual?, proof_type?, proof_ref? }
     POST /api/v1/orders/{order_id}/attempts  { result, reason_code?, next_at?, proof }

   ════════════════════════════════════════════════════════════════════════════
   NestJS / Angular handoff notes
   ────────────────────────────────────────────────────────────────────────────
   • The leg is a value object; the shipment is the aggregate root. Completing a
     leg-order raises OrderDelivered / OrderDeliveryFailed / OrderReturned events.
   • Keep pricing OUT of the shipment aggregate — a listener calls PricingService.
   • Angular: render legs as a signals-driven timeline; each leg-order row shows
     the StatusBadge for `outcome` and a proof thumbnail. Reasons come from the
     FAILURE_REASONS lookup (pricing-data.js) so they stay editable, not hard-coded.
   ════════════════════════════════════════════════════════════════════════════ */

/* Location kinds a leg endpoint can be. 'hub' is canonical (was 'stock'). */
var SHP_LOC_TYPES = [{
  key: "store",
  label: "Store",
  icon: "package"
}, {
  key: "hub",
  label: "Hub",
  icon: "grid"
}, {
  key: "customer",
  label: "Customer",
  icon: "users"
}];
var SHP_LOC_ICON = {
  store: "package",
  hub: "grid",
  stock: "grid",
  customer: "users"
};

/* Normalise the legacy 'stock' kind to canonical 'hub'. */
function SHP_NORM_TYPE(type) {
  return type === "stock" ? "hub" : type;
}

/* Hub (warehouse) locations. Prefer the real `hubs` module (hub-data.js → HUBS)
   when it's loaded; else use this compact demo list mirroring those hubs. */
var SHP_HUBS = [{
  id: "hub_0001",
  name: "Riyadh Central Warehouse"
}, {
  id: "hub_0002",
  name: "Jeddah Hub"
}, {
  id: "hub_0003",
  name: "Dammam Depot"
}];
/* BACK-COMPAT: old code/pages referencing `STOCKS` still resolve. */
var STOCKS = SHP_HUBS;
function SHP_HUB_LIST() {
  if (typeof HUBS !== "undefined") return HUBS.map(function (h) {
    return {
      id: h.id,
      name: h.name
    };
  });
  return SHP_HUBS;
}

/* Resolve a location's display name from (type,id) using the other modules'
   datasets when present, falling back to compact demo maps. */
function SHP_LOC_NAME(type, id) {
  type = SHP_NORM_TYPE(type);
  try {
    if (type === 'store' && typeof STORE_BY_ID === 'function' && STORE_BY_ID(id)) return STORE_BY_ID(id).name;
    if (type === 'customer' && typeof CUSTOMER_BY_ID === 'function' && CUSTOMER_BY_ID(id)) return CUSTOMER_BY_ID(id).name;
  } catch (e) {}
  if (type === 'hub') {
    var s = SHP_HUB_LIST().filter(function (x) {
      return x.id === id;
    })[0];
    return s ? s.name : id;
  }
  return id;
}
function SHP_LOC_OPTIONS(type) {
  type = SHP_NORM_TYPE(type);
  if (type === 'store' && typeof STORES !== 'undefined') return STORES.map(function (s) {
    return {
      id: s.id,
      name: s.name
    };
  });
  if (type === 'customer' && typeof CUSTOMERS !== 'undefined') return CUSTOMERS.map(function (c) {
    return {
      id: c.id,
      name: c.name
    };
  });
  if (type === 'hub') return SHP_HUB_LIST();
  return [];
}

/* Derive the leg `kind` (pickup/transfer/dispatch/return) from its endpoints —
   used for UI grouping and to tell the pricing engine which event applies. */
function SHP_LEG_KIND(fromType, toType) {
  fromType = SHP_NORM_TYPE(fromType);
  toType = SHP_NORM_TYPE(toType);
  if (fromType === 'customer') return 'return';
  if (fromType === 'store' && toType === 'hub') return 'pickup';
  if (fromType === 'hub' && toType === 'customer') return 'dispatch';
  if (fromType === 'hub' && toType === 'hub') return 'transfer';
  if (toType === 'customer') return 'dispatch'; // e.g. store→customer (direct delivery)
  if (toType === 'store') return 'return';
  return 'transfer';
}

/* Outcome badge tones for a leg-order (mirror in an Angular pipe). */
var SHP_OUTCOME_M = {
  pending: {
    t: "neutral",
    l: "Pending"
  },
  completed: {
    t: "success",
    l: "Completed"
  },
  failed: {
    t: "danger",
    l: "Failed"
  },
  partial: {
    t: "warning",
    l: "Partial"
  }
};
var SHP_STATUS = {
  draft: {
    t: "neutral",
    l: "Draft"
  },
  assigned: {
    t: "info",
    l: "Assigned"
  },
  "in-progress": {
    t: "warning",
    l: "In progress"
  },
  completed: {
    t: "success",
    l: "Completed"
  },
  cancelled: {
    t: "danger",
    l: "Cancelled"
  }
};

/* Orders that can be attached to legs (reuse Manage orders when available). */
function SHP_ORDER_OPTIONS() {
  if (typeof MANAGE_ORDERS !== 'undefined') return MANAGE_ORDERS.map(function (o) {
    return {
      id: o.id,
      ref: o.ref
    };
  });
  return [{
    id: "ord_10500",
    ref: "#SO-10500"
  }, {
    id: "ord_10499",
    ref: "#SO-10499"
  }, {
    id: "ord_10498",
    ref: "#SO-10498"
  }];
}
function SHP_ORDER_REF(id) {
  var o = SHP_ORDER_OPTIONS().filter(function (x) {
    return x.id === id;
  })[0];
  return o ? o.ref : id;
}

/* Demo shipments. `order_ids` (string[]) is kept for the existing timeline
   renderer; `order_outcomes` (map order_id → {outcome,reason_code,proof_type})
   is the ADDITIVE per-order result the new spec introduces. Legs now use the
   canonical 'hub' kind and real hub ids (hub_0001…). */
var SHIPMENTS = [{
  id: "shp_1001",
  ref: "#SHP-1001",
  driver_id: "drv_a1b2c3",
  driver_name: "Layla Hassan",
  vehicle_id: "veh_h1l2x3",
  status: "in-progress",
  legs: [{
    seq: 1,
    from_type: "store",
    from_id: "str_0001",
    to_type: "hub",
    to_id: "hub_0001",
    order_ids: ["ord_10500"],
    order_outcomes: {
      ord_10500: {
        outcome: "completed",
        proof_type: "signature",
        completed_at: "2026-06-26 14:05"
      }
    }
  }, {
    seq: 2,
    from_type: "hub",
    from_id: "hub_0001",
    to_type: "customer",
    to_id: "cus_0001",
    order_ids: ["ord_10500"],
    order_outcomes: {
      ord_10500: {
        outcome: "pending"
      }
    }
  }]
}, {
  id: "shp_1002",
  ref: "#SHP-1002",
  driver_id: "drv_d4e5f6",
  driver_name: "Omar Khaled",
  vehicle_id: "veh_c4n5t6",
  status: "assigned",
  legs: [{
    seq: 1,
    from_type: "customer",
    from_id: "cus_0002",
    to_type: "hub",
    to_id: "hub_0002",
    order_ids: ["ord_10499"],
    order_outcomes: {
      ord_10499: {
        outcome: "pending",
        reason_code: "customer_refused"
      }
    }
  }, {
    seq: 2,
    from_type: "hub",
    from_id: "hub_0002",
    to_type: "store",
    to_id: "str_0002",
    order_ids: ["ord_10499"],
    order_outcomes: {
      ord_10499: {
        outcome: "pending"
      }
    }
  }]
}, {
  id: "shp_1003",
  ref: "#SHP-1003",
  driver_id: null,
  driver_name: null,
  vehicle_id: null,
  status: "draft",
  legs: [{
    seq: 1,
    from_type: "store",
    from_id: "str_0002",
    to_type: "hub",
    to_id: "hub_0002",
    order_ids: ["ord_10498"]
  }]
}];
function SHIPMENT_BY_ID(id) {
  return SHIPMENTS.filter(function (s) {
    return s.id === id;
  })[0];
}

/* drivers/vehicles pickers (reuse when present) */
function SHP_DRIVERS() {
  return [{
    id: "drv_a1b2c3",
    name: "Layla Hassan"
  }, {
    id: "drv_d4e5f6",
    name: "Omar Khaled"
  }, {
    id: "drv_g7h8i9",
    name: "Sara Nasser"
  }, {
    id: "drv_b1c2d3",
    name: "Khalid Otaibi"
  }];
}
function SHP_VEHICLES() {
  return [{
    id: "veh_h1l2x3",
    name: "Toyota Hilux · RYD 4821"
  }, {
    id: "veh_c4n5t6",
    name: "Mitsubishi Canter · RYD 1190"
  }, {
    id: "veh_v7n8a9",
    name: "Toyota Hiace · JED 5521"
  }];
}
function SHP_DRIVER_NAME(id) {
  var d = SHP_DRIVERS().filter(function (x) {
    return x.id === id;
  })[0];
  return d ? d.name : '—';
}
function SHP_VEHICLE_NAME(id) {
  var v = SHP_VEHICLES().filter(function (x) {
    return x.id === id;
  })[0];
  return v ? v.name : '—';
}

/* ── Prototype persistence overlay ───────────────────────────────────────────
   Shipments created client-side (shipment-routing.html) are re-hydrated from
   localStorage so shipment-view.html / shipments.html can render them after
   navigation (the in-memory push alone dies with the page). Additive; the
   demo rows above stay authoritative. BACKEND: replaced by POST+GET
   /api/v1/shipments. */
(function () {
  try {
    var extra = JSON.parse(localStorage.getItem("fleet_shipments_extra")) || [];
    extra.forEach(function (s) {
      if (!SHIPMENT_BY_ID(s.id)) SHIPMENTS.push(s);
    });
  } catch (e) {}
})();
function SHIPMENTS_SAVE_EXTRA(shp) {
  try {
    var extra = JSON.parse(localStorage.getItem("fleet_shipments_extra")) || [];
    extra = extra.filter(function (s) {
      return s.id !== shp.id;
    });
    extra.push(shp);
    localStorage.setItem("fleet_shipments_extra", JSON.stringify(extra));
  } catch (e) {}
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/shipment-data.js", error: String((e && e.message) || e) }); }

// pages/shipment-routing.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   NEW SHIPMENT & ROUTING — screen logic (shipment-routing.html).

   This file is the BLUEPRINT for the production Angular implementation.
   Read DEVELOPER_GUIDE.md (project root) for the state machine, the Optimize
   API payload, and the Delivered⟷Return schema. Every state handler below is
   commented with its production counterpart.

   ┌──────────────────────────── ARCHITECTURE ────────────────────────────────┐
   │ One module-level STATE object + pure derive helpers + render fns.        │
   │ Every mutation funnels through commit(), which re-renders exactly the    │
   │ views affected — this is the vanilla mirror of Angular signals:          │
   │                                                                          │
   │   toggleOrder() ──┐                                                      │
   │   moveStop()     ─┼─→ commit() ─→ renderPool()        (left: picker)     │
   │   removeStop()   ─┤             ─→ renderRoutePanel()  (right-top: tabs, │
   │   applyOptimize()─┘             │                       DYNAMIC HEIGHT)  │
   │                                 ─→ renderMap()         (right-bottom:    │
   │                                 │                       sequenced pins)  │
   │                                 ─→ renderLoad()        (capacity meter)  │
   └──────────────────────────────────────────────────────────────────────────┘
   ════════════════════════════════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════════════════════════════════
   §1  ELIGIBILITY — which order statuses may enter the routing pool.
   ════════════════════════════════════════════════════════════════════════════
   ALLOWED (business rule from the redesign brief):
     ready            → not yet moved; needs store→hub pickup + hub→customer
     at_hub           → in the warehouse; dispatch hub→customer
     returned_to_hub  → back in the warehouse after a fail; re-dispatch
     delivery_failed  → re-routable / reschedulable; re-dispatch from its hub
     delivered        → SPECIAL: does NOT route for delivery — selecting it
                        spawns a linked RETURN ORDER (see §4).
   STRICTLY EXCLUDED (never in this picker):
     draft, allocated, picked_up, missed, out_for_delivery, cancelled,
     returned_to_store — and every legacy alias (pending, assigned, en-route,
     rescheduled, returning, returned). The whitelist below is the single
   gate; anything not in it is out.
   BACKEND: GET /api/v1/orders?routable=1 applies the same whitelist in SQL. */
var ROUTABLE_STATUSES = {
  ready: 1,
  at_hub: 1,
  returned_to_hub: 1,
  delivery_failed: 1,
  delivered: 1
};

/* ────────────────────────────────────────────────────────────────────────────
   filterEligibleOrders(orders) — THE picker gate. Given the full order list it
   returns only the orders allowed to appear in the Left-Pane picker.

   WHY DELIVERED ORDERS WITH AN ACTIVE RETURN ARE STRIPPED FROM THE DOM
   A delivered order can spawn a return (§4). To prevent duplicate/fraudulent
   returns, the "Once-Returned, Never Re-Picked" rule removes such an order from
   the picker ENTIRELY (not merely disabled) the moment it has a return in any
   ACTIVE state — i.e. any return_requests row for it whose status is NOT one of
   the terminals {closed, cancelled}. renderPool() maps over exactly this array,
   so a stripped order never reaches the DOM.

   HOW THE ARRAY RE-EVALUATES WHEN A RETURN IS CANCELED
   This is a PURE function of the returns registry + STATE — it holds no cache.
   Every commit() re-runs renderPool() → poolList() → filterEligibleOrders(), so
   the instant a return transitions to `cancelled` (or `closed`), activeReturnFor
   returns null for its parent and the delivered order re-appears in the pool on
   the very next render, ready to trigger a fresh return. No manual refresh, no
   invalidation step. (The in-progress, UNSAVED draft lives in STATE.returnDrafts
   and is NOT yet in the registry, so a just-picked delivered order stays visible
   with its box ticked until "Create Shipment" persists the real row.)
   BACKEND: mirrored by GET /api/v1/orders?routable=1 — the whitelist + the
   `NOT EXISTS active return` predicate both live in SQL; this client filter is
   UX, the server filter is the guard. */
function filterEligibleOrders(orders) {
  return (orders || []).filter(function (o) {
    if (!ROUTABLE_STATUSES[o.status]) return false; // status whitelist
    var c = customerCoords(o); // must be geocoded to route + pin
    if (c.lat == null || c.lng == null) return false;
    if (o.status === "delivered" && activeReturnFor(o.id) && !STATE.returnDrafts[o.id]) return false; // ← once-returned rule
    return true;
  });
}

/* Convenience single-order predicate (delegates to the list filter above). */
function isRoutable(o) {
  return filterEligibleOrders([o]).length === 1;
}

/* A delivered order's currently-active return, if any. "Active" = every return
   state except the terminal Closed / Canceled. Drives both the picker hide-rule
   and the one-open-return guard. Matches either the return's order_id or its
   parent_delivered_order_id (bidirectional link, §3 of DEVELOPER_GUIDE.md).
   BACKEND: EXISTS(SELECT 1 FROM return_requests
                   WHERE parent_delivered_order_id=? AND status NOT IN ('closed','cancelled')) */
function activeReturnFor(orderId) {
  var list = typeof RETURN_REQUESTS !== "undefined" ? RETURN_REQUESTS : [];
  return list.filter(function (r) {
    return (r.order_id === orderId || r.parent_delivered_order_id === orderId) && r.status !== "closed" && r.status !== "cancelled";
  })[0] || null;
}

/* ════════════════════════════════════════════════════════════════════════════
   §2  GEO HELPERS — demo lat/lng plumbing (production: PostGIS / Maps SDK).
   ════════════════════════════════════════════════════════════════════════════ */
function haversine(aLat, aLng, bLat, bLng) {
  if (aLat == null || bLat == null) return 0;
  var R = 6371,
    toRad = function (d) {
      return d * Math.PI / 180;
    };
  var dLat = toRad(bLat - aLat),
    dLng = toRad(bLng - aLng);
  var s = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}
function customerCoords(o) {
  var c = CUSTOMER_BY_ID(o.customer_id);
  var a = c && c.addresses && c.addresses[o.customer_addr_id || 0];
  return a ? {
    lat: a.lat,
    lng: a.lng
  } : {
    lat: null,
    lng: null
  };
}
function customerAddrLine(o) {
  var c = CUSTOMER_BY_ID(o.customer_id);
  var a = c && c.addresses && c.addresses[o.customer_addr_id || 0];
  return a ? a.address_line : "—";
}
function storeBranch(o) {
  var s = STORE_BY_ID(o.store_id);
  var b = s && s.branches && s.branches[0];
  return b ? {
    lat: b.lat,
    lng: b.lng,
    name: s.name + " · " + b.branch_name
  } : {
    lat: null,
    lng: null,
    name: s ? s.name : "—"
  };
}
/* Which hub does a dispatch leave from? Order's resident hub, else nearest. */
function hubOf(o) {
  if (o.current_hub_id && HUB_BY_ID(o.current_hub_id)) return HUB_BY_ID(o.current_hub_id);
  var sb = storeBranch(o),
    best = HUBS[0],
    bd = Infinity;
  HUBS.forEach(function (h) {
    var d = haversine(sb.lat, sb.lng, h.lat, h.lng);
    if (d < bd) {
      bd = d;
      best = h;
    }
  });
  return best;
}
/* Route start = the hub most of the picked orders leave from (mode), else the
   first hub. The driver's day starts at the warehouse. */
function startHub() {
  var counts = {};
  STATE.queue.forEach(function (q) {
    var h = hubOf(ORDER_BY_ID(q.order_id));
    counts[h.id] = (counts[h.id] || 0) + 1;
  });
  var best = null;
  Object.keys(counts).forEach(function (id) {
    if (!best || counts[id] > counts[best]) best = id;
  });
  return best ? HUB_BY_ID(best) : HUBS[0];
}

/* ════════════════════════════════════════════════════════════════════════════
   §2b  STOP DESTINATION — where each order is dropped on THIS run.
   ════════════════════════════════════════════════════════════════════════════
   The order's CURRENT STATUS fixes where the driver collects the goods and
   suggests the drop-off, but the operator must be able to change the drop-off
   per stop (and say WHICH hub when it is a hub):

     status             collect from        default drop-off     also allowed
     ready              its store branch    its hub (line-haul)  customer (direct)
     at_hub             its hub             the customer         another hub
     returned_to_hub    its hub             the customer         another hub
     delivery_failed    its hub             the customer (retry) another hub
     delivered (return) the customer        the merchant store   a hub

   Each queue item carries { dest:{type,hub_id}, destAuto }. destAuto stays true
   while the stop still uses the status default (row shows "Default"); any
   manual change flips it to "Changed". The destination is what becomes the
   leg's to_type/to_id on save (§11).
   BACKEND: POST /api/v1/shipments legs[].to_type ∈ store|hub|customer — the
   server re-validates the allowed set against the order's status. */
function defaultDest(o, kind) {
  if (kind === "return") return {
    type: "store"
  };
  if (o.status === "ready") return {
    type: "hub",
    hub_id: hubOf(o).id
  }; // store → hub line-haul
  return {
    type: "customer"
  }; // dispatch from the hub
}
function destTypes(kind) {
  return kind === "return" ? ["store", "hub"] : ["customer", "hub"];
}
function destOf(q) {
  var o = ORDER_BY_ID(q.order_id);
  if (!q.dest) {
    q.dest = defaultDest(o, q.kind);
    q.destAuto = true;
  }
  if (q.dest.type === "hub" && !q.dest.hub_id) q.dest.hub_id = destHubChoices(q)[0].id;
  return q.dest;
}
/* Hubs offerable as a drop-off: never the hub the goods already sit in. */
function destHubChoices(q) {
  var org = originPoint(q);
  var list = HUBS.filter(function (h) {
    return !(org.type === "hub" && h.id === org.id);
  });
  return list.length ? list : HUBS;
}
/* Resolved drop-off: label + coordinates used by the row, the map and metrics. */
function destPoint(q) {
  var o = ORDER_BY_ID(q.order_id),
    d = destOf(q);
  if (d.type === "hub") {
    var h = HUB_BY_ID(d.hub_id) || hubOf(o);
    return {
      type: "hub",
      id: h.id,
      label: h.name,
      sub: "Hub drop-off",
      lat: h.lat,
      lng: h.lng
    };
  }
  if (d.type === "store") {
    var sb = storeBranch(o);
    return {
      type: "store",
      id: o.store_id,
      label: sb.name,
      sub: "Merchant drop-off",
      lat: sb.lat,
      lng: sb.lng
    };
  }
  var cc = customerCoords(o),
    cu = CUSTOMER_BY_ID(o.customer_id);
  return {
    type: "customer",
    id: o.customer_id,
    label: cu ? cu.name : "Customer",
    sub: customerAddrLine(o),
    lat: cc.lat,
    lng: cc.lng
  };
}
/* Where the goods are collected — decided by status, shown read-only for context. */
function originPoint(q) {
  var o = ORDER_BY_ID(q.order_id);
  if (q.kind === "return") {
    var cc = customerCoords(o),
      cu = CUSTOMER_BY_ID(o.customer_id);
    return {
      type: "customer",
      id: o.customer_id,
      label: cu ? cu.name : "Customer",
      lat: cc.lat,
      lng: cc.lng
    };
  }
  if (o.status === "ready") {
    var sb = storeBranch(o);
    return {
      type: "store",
      id: o.store_id,
      label: sb.name,
      lat: sb.lat,
      lng: sb.lng
    };
  }
  var h = HUB_BY_ID(o.current_hub_id) || hubOf(o);
  return {
    type: "hub",
    id: h.id,
    label: h.name,
    lat: h.lat,
    lng: h.lng
  };
}
function isDestDefault(q) {
  var d = destOf(q),
    def = defaultDest(ORDER_BY_ID(q.order_id), q.kind);
  return d.type === def.type && (d.type !== "hub" || String(d.hub_id) === String(def.hub_id));
}
function setDest(i, patch) {
  var q = STATE.queue[i];
  if (!q) return;
  var d = destOf(q);
  q.dest = {
    type: patch.type != null ? patch.type : d.type,
    hub_id: patch.hub_id != null ? patch.hub_id : d.hub_id
  };
  if (q.dest.type === "hub") {
    var ok = destHubChoices(q).filter(function (h) {
      return String(h.id) === String(q.dest.hub_id);
    })[0];
    if (!ok) q.dest.hub_id = destHubChoices(q)[0].id; // never "transfer" to the origin hub
  }
  q.destAuto = isDestDefault(q);
  commit(); // re-prices, re-pins and renumbers
}

/* ════════════════════════════════════════════════════════════════════════════
   §3  STATE — the single mutable source of truth for this screen.
   ════════════════════════════════════════════════════════════════════════════
   queue[] IS the route: its array order is the exact stop sequence shown in
   Tab 1, the sequence numbers on the map pins, and (on save) the legs' `seq`.
   Reordering the queue therefore renumbers the map automatically, because
   renderMap() derives pins from queue order on every commit — there is no
   second copy of the sequence to get out of sync. */
var STATE = {
  driverId: "",
  // selected driver  (drivers.id)
  vehicleId: "",
  // selected vehicle (vehicles.id) → capacity check
  queue: [],
  // [{ order_id, kind:'delivery'|'return', dest, destAuto }] — THE route
  returnDrafts: {},
  // order_id → spawned (unsaved) return order (see §4)
  poolPage: 1,
  // picker pagination
  dragIdx: null // index being dragged in the queue (drag & drop)
};
var POOL_SIZE = 7;
var rtnSeq = 1; // draft return ref counter (rtn_draft_1, _2 …)

function queueIndexOf(orderId) {
  for (var i = 0; i < STATE.queue.length; i++) if (STATE.queue[i].order_id === orderId) return i;
  return -1;
}
function isPicked(orderId) {
  return queueIndexOf(orderId) >= 0;
}
var BULK = false; // suppresses re-render while a bulk select/clear runs

/* commit() — every mutation ends here. Mirrors an Angular effect() re-running
   off the queue/driver/vehicle signals. Order matters: the route panel sets
   its own height (the fluid split) BEFORE the map paints into what's left. */
function commit() {
  if (BULK) return; // bulk selection commits once at the end
  renderPool();
  renderRoutePanel();
  renderMap();
  renderLoad();
}

/* ════════════════════════════════════════════════════════════════════════════
   §4  THE "DELIVERED → RETURN" WORKFLOW — core business pivot.
   ════════════════════════════════════════════════════════════════════════════
   Selecting a DELIVERED order must NOT route it for delivery. Instead we
   spawn a RETURN ORDER draft, linked both ways, with the logistics INVERTED:

     from (pickup)   = the original CUSTOMER address   (they hold the goods)
     to   (delivery) = the original MERCHANT/STORE hub (goods go back)

   The draft lives only in STATE.returnDrafts until "Create Shipment"; then it
   is persisted as a return_requests row carrying parent_delivered_order_id
   (see returns-data.js schema + DEVELOPER_GUIDE.md §3). Deselecting the
   order before saving simply discards the draft — nothing was written.
   BACKEND: POST /api/v1/returns { order_id, reason_code, destination } — the
   server derives from/to itself; the client never posts addresses. */
/* ── STATE UPDATER — construct a Return Order's metadata from the ORIGINAL
   customer→store addresses (the address REVERSAL). This is the exact place the
   Delivered➔Return child is born:
     from (pickup)   ← the delivered order's CUSTOMER address (they hold goods)
     to   (delivery) ← the delivered order's MERCHANT/STORE branch (goods back)
   parent_delivered_order_id is the bidirectional link back to the delivered
   order; the delivered order gets its child_return_order_id on save (§11).
   Display/map only here — on POST the server re-derives from/to from the order,
   the client never sends addresses. */
function spawnReturnDraft(o) {
  var cc = customerCoords(o),
    sb = storeBranch(o),
    cust = CUSTOMER_BY_ID(o.customer_id);
  return {
    public_id: "rtn_draft_" + rtnSeq++,
    // real id minted on save
    parent_delivered_order_id: o.id,
    // ← the bidirectional link
    order_id: o.id,
    // (order-view.html joins on this)
    reason_code: "customer_changed",
    // default; editable post-save
    destination: "store",
    // goods go back to the merchant
    status: "requested",
    refund_amount: null,
    refund_status: "none",
    shipment_id: null,
    /* Inverted logistics — display + map only; server re-derives on POST */
    from: {
      label: cust ? cust.name : "Customer",
      sub: customerAddrLine(o),
      lat: cc.lat,
      lng: cc.lng
    },
    to: {
      label: sb.name,
      sub: "Merchant drop-off",
      lat: sb.lat,
      lng: sb.lng
    }
  };
}

/* toggleOrder — the ONE entry point for picking/unpicking in the pool.
   Handles both the normal delivery path and the Delivered→Return pivot. */
function toggleOrder(orderId, on) {
  var o = ORDER_BY_ID(orderId);
  if (!o) return;
  if (on && !isPicked(orderId)) {
    if (o.status === "delivered") {
      /* ── return trigger ── */
      STATE.returnDrafts[orderId] = spawnReturnDraft(o);
      STATE.queue.push({
        order_id: orderId,
        kind: "return",
        dest: defaultDest(o, "return"),
        destAuto: true
      });
      fleetToast("info", "Return order created", STATE.returnDrafts[orderId].public_id + " linked to " + o.ref + " — route reversed (customer → store).");
    } else {
      STATE.queue.push({
        order_id: orderId,
        kind: "delivery",
        dest: defaultDest(o, "delivery"),
        destAuto: true
      });
    }
  } else if (!on) {
    var i = queueIndexOf(orderId);
    if (i >= 0) STATE.queue.splice(i, 1);
    if (STATE.returnDrafts[orderId]) {
      delete STATE.returnDrafts[orderId]; // draft discarded, never persisted
      fleetToast("info", "Return discarded", "Unsaved return for " + o.ref + " was removed.");
    }
  }
  commit();
}

/* ════════════════════════════════════════════════════════════════════════════
   §5  ROUTE METRICS — distance / duration / payload / store cost.
   ════════════════════════════════════════════════════════════════════════════
   The polyline is: startHub → stop₁ → stop₂ → … → stopₙ → (return drop-offs).
   A return stop's PIN sits at its pickup (customer); the store drop-off is an
   appended terminal visit. Demo model — production replaces this whole block
   with the routing engine's response (see DEVELOPER_GUIDE.md §2):
     road km  = haversine × 1.3   (road-vs-crow-flies factor)
     minutes  = km ÷ 34 km/h × 60 + 6 min handling per stop                  */
var ROAD_FACTOR = 1.3,
  AVG_KMH = 34,
  SERVICE_MIN = 6;
function stopCoords(q) {
  var o = ORDER_BY_ID(q.order_id);
  if (q.kind === "return") return customerCoords(o); // return pin sits at the pickup
  var p = destPoint(q); // delivery pin sits at its DROP-OFF (§2b)
  return p.lat == null ? customerCoords(o) : {
    lat: p.lat,
    lng: p.lng
  };
}
/* Terminal drop-off points for return stops (deduped store branches, in first-
   appearance order) — the tail of the polyline after the last customer stop. */
function returnDrops(queueArr) {
  var seen = {},
    out = [];
  queueArr.forEach(function (q) {
    if (q.kind !== "return") return;
    var p = destPoint(q);
    if (p.lat == null) return; // store OR hub, per the stop's choice
    var key = p.lat + "," + p.lng;
    if (!seen[key]) {
      seen[key] = 1;
      out.push(p);
    }
  });
  return out;
}
function routeMetrics(queueArr) {
  var hub = startHub();
  var pts = [{
    lat: hub.lat,
    lng: hub.lng
  }].concat(queueArr.map(stopCoords)).concat(returnDrops(queueArr));
  var km = 0;
  for (var i = 1; i < pts.length; i++) km += haversine(pts[i - 1].lat, pts[i - 1].lng, pts[i].lat, pts[i].lng);
  km *= ROAD_FACTOR;
  var stops = queueArr.length + returnDrops(queueArr).length;
  var mins = km / AVG_KMH * 60 + stops * SERVICE_MIN;
  var kg = 0,
    cost = 0;
  queueArr.forEach(function (q) {
    var o = ORDER_BY_ID(q.order_id);
    kg += ORDER_ACTUAL_KG(o);
    cost += stopCost(q);
  });
  return {
    km: km,
    mins: mins,
    kg: kg,
    cost: cost,
    stops: stops
  };
}
/* Per-stop store delivery cost. DEMO stand-in for the pricing engine:
   contract flat price → order.store_cost → 15 SAR default; returns bill a
   flat return fee. Production: PRICING_QUOTE / PRICING_APPLY_EVENT only. */
var RETURN_FEE = 12.00;
function stopCost(q) {
  if (q.kind === "return") return RETURN_FEE;
  var o = ORDER_BY_ID(q.order_id),
    s = STORE_BY_ID(o.store_id);
  if (s && s.contracts && s.contracts[0] && s.contracts[0].price != null) return Number(s.contracts[0].price);
  if (o.store_cost != null) return Number(o.store_cost);
  return 15.00;
}

/* ════════════════════════════════════════════════════════════════════════════
   §6  OPTIMIZATION — greedy nearest-neighbor (same engine the classic builder
   uses), surfaced through the compare dialog.
   ════════════════════════════════════════════════════════════════════════════
   optimizedQueue() PROPOSES an order; nothing mutates until the operator
   clicks "Apply optimization" (applyOptimization()). Production swaps this
   for POST /api/v1/routes/optimize — the payload/response contract is in
   DEVELOPER_GUIDE.md §2; the UI flow (propose → compare → apply) is identical. */
function optimizedQueue() {
  var hub = startHub();
  var remaining = STATE.queue.slice(),
    out = [],
    cur = {
      lat: hub.lat,
      lng: hub.lng
    };
  while (remaining.length) {
    var bi = 0,
      bd = Infinity;
    for (var i = 0; i < remaining.length; i++) {
      var c = stopCoords(remaining[i]);
      var d = haversine(cur.lat, cur.lng, c.lat, c.lng);
      if (d < bd) {
        bd = d;
        bi = i;
      }
    }
    var pick = remaining.splice(bi, 1)[0];
    out.push(pick);
    cur = stopCoords(pick);
  }
  return out;
}
function openOptimize() {
  if (STATE.queue.length < 2) return;
  var cur = routeMetrics(STATE.queue);
  var opt = optimizedQueue(),
    om = routeMetrics(opt);
  var savedKm = Math.max(0, cur.km - om.km),
    savedMin = Math.max(0, cur.mins - om.mins);
  var pct = cur.km > 0 ? Math.round(savedKm / cur.km * 100) : 0;
  document.getElementById("optBody").innerHTML = '<div class="opt-grid">' + '<div class="opt-col"><div class="opt-col__hd">Current route</div>' + optStat("map", "Total distance", cur.km.toFixed(1) + " km") + optStat("navigation", "Total duration", Math.round(cur.mins) + " min") + "</div>" + '<div class="opt-col opt-col--best"><div class="opt-col__hd">' + window.fleetIcon("zap", 13) + " Optimized</div>" + optStat("map", "Total distance", om.km.toFixed(1) + " km") + optStat("navigation", "Total duration", Math.round(om.mins) + " min") + "</div>" + "</div>" + (savedKm > 0.05 ? '<div class="opt-save">' + window.fleetIcon("check-circle", 14) + " Saves <strong>" + savedKm.toFixed(1) + " km · " + Math.round(savedMin) + " min</strong> (" + pct + "% shorter) by resequencing " + STATE.queue.length + " stops.</div>" : '<div class="opt-save opt-save--none">' + window.fleetIcon("info", 14) + " Your current sequence is already the shortest path.</div>");
  document.getElementById("optApply").disabled = savedKm <= 0.05;
  document.getElementById("optModal").classList.remove("is-hidden");
}
function optStat(icon, k, v) {
  return '<div class="opt-stat"><span class="opt-stat__k">' + window.fleetIcon(icon, 13) + " " + k + '</span><span class="opt-stat__v u-mono">' + v + "</span></div>";
}
/* Apply = programmatically reorder Tab 1's queue; commit() then renumbers the
   map pins from the new array order (single source of truth — see §3). */
function applyOptimization() {
  STATE.queue = optimizedQueue();
  document.getElementById("optModal").classList.add("is-hidden");
  fleetToast("success", "Route optimized", "Stops were resequenced to the shortest path.");
  commit();
}

/* ════════════════════════════════════════════════════════════════════════════
   §7  LEFT PANE — driver & vehicle card + capacity meter.
   ════════════════════════════════════════════════════════════════════════════ */
function initDispatchCard() {
  var d = document.getElementById("f-driver");
  d.innerHTML = '<option value="">Select driver…</option>';
  SHP_DRIVERS().forEach(function (x) {
    var op = document.createElement("option");
    op.value = x.id;
    op.textContent = x.name;
    d.appendChild(op);
  });
  var v = document.getElementById("f-vehicle");
  v.innerHTML = '<option value="">Select vehicle…</option>';
  SHP_VEHICLES().forEach(function (x) {
    var t = typeof TRUCK_BY_ID === "function" && TRUCK_BY_ID(x.id) || null;
    var cap = t && t.capacity_kg ? " · " + t.capacity_kg + " kg" : "";
    var op = document.createElement("option");
    op.value = x.id;
    op.textContent = x.name + cap;
    v.appendChild(op);
  });
  /* Driver ⇄ vehicle 1:1 auto-fill — trucks carry driver_name (1:1 UNIQUE
     driver_id in the DB); we bridge the demo datasets by name.
     BACKEND: one join — vehicles.driver_id ↔ drivers.id. */
  d.addEventListener("change", function () {
    STATE.driverId = d.value;
    var dn = SHP_DRIVER_NAME(d.value);
    var hit = SHP_VEHICLES().filter(function (x) {
      var t = TRUCK_BY_ID(x.id);
      return t && t.driver_name === dn;
    })[0];
    if (hit && v.value !== hit.id) {
      v.value = hit.id;
      STATE.vehicleId = hit.id;
      if (v._syncSearch) v._syncSearch();
      fleetToast("info", "Vehicle loaded", SHP_VEHICLE_NAME(hit.id) + " is assigned to this driver.");
    }
    renderLoad();
  });
  v.addEventListener("change", function () {
    STATE.vehicleId = v.value;
    var t = TRUCK_BY_ID(v.value);
    if (t && t.driver_name) {
      var m = SHP_DRIVERS().filter(function (x) {
        return x.name === t.driver_name;
      })[0];
      if (m && d.value !== m.id) {
        d.value = m.id;
        STATE.driverId = m.id;
        if (d._syncSearch) d._syncSearch();
        fleetToast("info", "Driver loaded", t.driver_name + " is assigned to this vehicle.");
      }
    }
    renderLoad();
  });
  makeSearchSelect(d);
  makeSearchSelect(v);
}
/* Single-choice searchable dropdown — same shell as the multi-select filters,
   one pick. The native <select> stays the source of truth (value + change);
   call select._syncSearch() after setting .value from code. */
function makeSearchSelect(select) {
  var wrap = document.createElement("div");
  wrap.style.position = "relative";
  select.parentNode.insertBefore(wrap, select);
  wrap.appendChild(select);
  select.style.display = "none";
  var input = document.createElement("input");
  input.className = "fds-input";
  input.type = "text";
  input.autocomplete = "off";
  input.style.width = "100%";
  input.style.cursor = "pointer";
  input.placeholder = select.options[0] ? select.options[0].textContent : "Search…";
  wrap.appendChild(input);
  var menu = document.createElement("div");
  menu.className = "is-hidden nsr-ms__menu";
  wrap.appendChild(menu);
  function label() {
    var o = select.options[select.selectedIndex];
    return o && o.value ? o.textContent : "";
  }
  function render(f) {
    f = (f || "").toLowerCase();
    menu.innerHTML = "";
    var m = [].slice.call(select.options).filter(function (o) {
      return o.value && o.textContent.toLowerCase().indexOf(f) >= 0;
    });
    if (!m.length) {
      var e = document.createElement("div");
      e.className = "u-muted";
      e.style.cssText = "padding:8px 10px;font-size:13px";
      e.textContent = "No matches";
      menu.appendChild(e);
      return;
    }
    m.forEach(function (o) {
      var it = document.createElement("button");
      it.type = "button";
      it.className = "nsr-ms__opt" + (o.value === select.value ? " is-on" : "");
      it.textContent = o.textContent;
      it.addEventListener("click", function () {
        select.value = o.value;
        input.value = label();
        menu.classList.add("is-hidden");
        select.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      });
      menu.appendChild(it);
    });
  }
  input.addEventListener("focus", function () {
    render("");
    menu.classList.remove("is-hidden");
  });
  input.addEventListener("input", function () {
    render(input.value);
    menu.classList.remove("is-hidden");
  });
  document.addEventListener("click", function (ev) {
    if (!wrap.contains(ev.target)) {
      menu.classList.add("is-hidden");
      input.value = label();
    }
  });
  select._syncSearch = function () {
    input.value = label();
  };
  select._syncSearch();
  return select;
}
function vehicleCap() {
  if (!STATE.vehicleId || typeof TRUCK_BY_ID !== "function") return 0;
  var t = TRUCK_BY_ID(STATE.vehicleId);
  return t && t.capacity_kg ? t.capacity_kg : 0;
}
/* Dynamic load indicator: Σ picked payload vs the selected vehicle's capacity.
   Turns red when over — save is blocked at that point (validateSave). */
function renderLoad() {
  var cap = vehicleCap(),
    kg = routeMetrics(STATE.queue).kg;
  var meter = document.getElementById("loadMeter"),
    bar = meter.querySelector("span");
  var pct = cap ? Math.min(100, kg / cap * 100) : kg > 0 ? 4 : 0;
  bar.style.width = pct + "%";
  meter.classList.toggle("is-over", !!(cap && kg > cap));
  document.getElementById("loadLabel").textContent = kg.toFixed(1) + " kg" + (cap ? " / " + cap + " kg" : "");
  document.getElementById("loadNote").innerHTML = !cap ? '<span class="u-muted">Pick a vehicle to check the load.</span>' : kg > cap ? '<span class="nsr-warn">' + window.fleetIcon("alert-triangle", 13) + " Over capacity by " + (kg - cap).toFixed(1) + " kg — remove orders or pick a larger vehicle.</span>" : '<span class="u-muted">' + (cap - kg).toFixed(1) + " kg of capacity left.</span>";
}

/* ════════════════════════════════════════════════════════════════════════════
   §8  LEFT PANE — pick-orders list (searchable, filtered, paginated).
   ════════════════════════════════════════════════════════════════════════════ */
/* ── Service-area resolution ────────────────────────────────────────────
   Zones live in the shared ServiceZones store (gmaps.js) as lat/lng polygons.
   An order belongs to every active zone containing its delivery point — the
   same test the pricing engine uses. Results are memoized per order id. */
function routableZones() {
  return (window.ServiceZones ? window.ServiceZones.all() : []).filter(function (z) {
    return z.is_active !== false && (z.path || []).length >= 3;
  });
}
function ptInPoly(pt, path) {
  var inside = false;
  for (var i = 0, j = path.length - 1; i < path.length; j = i++) {
    var xi = path[i].lng,
      yi = path[i].lat,
      xj = path[j].lng,
      yj = path[j].lat;
    if (yi > pt.lat !== yj > pt.lat && pt.lng < (xj - xi) * (pt.lat - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
var AREA_CACHE = {};
function orderAreaIds(o) {
  if (AREA_CACHE[o.id]) return AREA_CACHE[o.id];
  var pt = customerCoords(o),
    ids = [];
  if (pt) routableZones().forEach(function (z) {
    if (ptInPoly(pt, z.path)) ids.push(z.id);
  });
  AREA_CACHE[o.id] = ids;
  return ids;
}
function orderAreaLabel(o) {
  var ids = orderAreaIds(o),
    zs = routableZones();
  var names = ids.map(function (id) {
    var z = zs.filter(function (x) {
      return x.id === id;
    })[0];
    return z ? z.name : id;
  });
  return names.length ? names.join(", ") : "";
}

/* Multi-select combobox: wraps a native <select multiple> in a filterable
   checkbox list. The select stays the source of truth (selectedOptions +
   change events). select._syncSearch() refreshes the summary text.
   BACKEND: each filter posts as a repeated query param (?status[]=…). */
function makeMultiSelect(select, placeholder) {
  select.multiple = true;
  var empty = select.options[0] && select.options[0].value === "" ? select.options[0] : null;
  var allLabel = empty ? empty.textContent : placeholder || "Any";
  if (empty) select.remove(0);
  var wrap = document.createElement("div");
  wrap.style.position = "relative";
  select.parentNode.insertBefore(wrap, select);
  wrap.appendChild(select);
  select.style.display = "none";
  var input = document.createElement("input");
  input.className = "fds-input";
  input.type = "text";
  input.autocomplete = "off";
  input.style.width = "100%";
  input.style.cursor = "pointer";
  wrap.appendChild(input);
  var menu = document.createElement("div");
  menu.className = "is-hidden nsr-ms__menu";
  wrap.appendChild(menu);
  function chosen() {
    return [].slice.call(select.selectedOptions);
  }
  function summary() {
    var c = chosen();
    return !c.length ? "" : c.length === 1 ? c[0].textContent : c.length + " selected";
  }
  function render(f) {
    f = (f || "").toLowerCase();
    menu.innerHTML = "";
    var m = [].slice.call(select.options).filter(function (o) {
      return o.textContent.toLowerCase().indexOf(f) >= 0;
    });
    if (!m.length) {
      var e = document.createElement("div");
      e.className = "u-muted";
      e.style.cssText = "padding:8px 10px;font-size:13px";
      e.textContent = "No matches";
      menu.appendChild(e);
      return;
    }
    /* "All" row — toggles every option currently listed (respects the search). */
    var allOn = m.every(function (o) {
      return o.selected;
    });
    var all = document.createElement("label");
    all.className = "nsr-ms__opt nsr-ms__opt--all";
    var acb = document.createElement("input");
    acb.type = "checkbox";
    acb.checked = allOn;
    acb.indeterminate = !allOn && m.some(function (o) {
      return o.selected;
    });
    var atx = document.createElement("span");
    atx.textContent = f ? "Select all matches" : "All";
    all.appendChild(acb);
    all.appendChild(atx);
    acb.addEventListener("change", function () {
      m.forEach(function (o) {
        o.selected = acb.checked;
      });
      input.value = summary();
      render(f);
      select.dispatchEvent(new Event("change", {
        bubbles: true
      }));
    });
    menu.appendChild(all);
    m.forEach(function (o) {
      var it = document.createElement("label");
      it.className = "nsr-ms__opt";
      var cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = o.selected;
      var tx = document.createElement("span");
      tx.textContent = o.textContent;
      it.appendChild(cb);
      it.appendChild(tx);
      cb.addEventListener("change", function () {
        o.selected = cb.checked;
        input.value = summary();
        render(f);
        select.dispatchEvent(new Event("change", {
          bubbles: true
        }));
      });
      menu.appendChild(it);
    });
  }
  function openMenu() {
    render(input.value === summary() ? "" : input.value);
    menu.classList.remove("is-hidden");
  }
  input.addEventListener("focus", openMenu);
  input.addEventListener("input", function () {
    render(input.value);
    menu.classList.remove("is-hidden");
  });
  document.addEventListener("click", function (ev) {
    if (!wrap.contains(ev.target)) {
      menu.classList.add("is-hidden");
      input.value = summary();
    }
  });
  select._syncSearch = function () {
    input.value = summary();
    input.placeholder = chosen().length ? "" : allLabel;
    if (!menu.classList.contains("is-hidden")) render("");
  };
  select._clear = function () {
    [].slice.call(select.options).forEach(function (o) {
      o.selected = false;
    });
    select._syncSearch();
  };
  select._syncSearch();
  return select;
}
function filterVals(id) {
  return [].slice.call(document.getElementById(id).selectedOptions).map(function (o) {
    return o.value;
  }).filter(function (v) {
    return v !== "";
  });
}
function initPoolFilters() {
  var s = document.getElementById("poolStatus");
  Object.keys(ROUTABLE_STATUSES).forEach(function (k) {
    var op = document.createElement("option");
    op.value = k;
    op.textContent = ORDER_STATUS_M[k].l;
    s.appendChild(op);
  });
  var st = document.getElementById("poolStore");
  STORES.forEach(function (x) {
    var op = document.createElement("option");
    op.value = x.id;
    op.textContent = x.name;
    st.appendChild(op);
  });
  /* Service-area filter — the zones drawn on the Service Areas page. An order's
     area is derived from its delivery point (point-in-polygon), same as pricing.
     BACKEND: GET /orders?service_area_id=… (orders.service_area_id is stored). */
  var ar = document.getElementById("poolArea");
  routableZones().forEach(function (z) {
    var op = document.createElement("option");
    op.value = z.id;
    op.textContent = z.name;
    ar.appendChild(op);
  });
  var opUn = document.createElement("option");
  opUn.value = "__none";
  opUn.textContent = "Outside all areas";
  ar.appendChild(opUn);
  ["poolSearch", "poolStatus", "poolStore", "poolArea"].forEach(function (id) {
    var el = document.getElementById(id);
    el.addEventListener("input", function () {
      STATE.poolPage = 1;
      renderPool();
    });
    el.addEventListener("change", function () {
      STATE.poolPage = 1;
      renderPool();
    });
  });
  /* Every dropdown is a searchable MULTI-select — filters are OR within a field,
     AND across fields. */
  makeMultiSelect(s, "Any status");
  makeMultiSelect(st, "Any store");
  makeMultiSelect(ar, "Any service area");
  initDateFilter();
  initFilterPopover();
}

/* ── Filter surface ─────────────────────────────────────────────────────
   Search stays in the toolbar; the three dropdowns collapse into ONE "Filters"
   button that opens a popover and carries a count badge. Whatever is applied is
   echoed as removable chips under the toolbar, so the active state is visible
   without the selects taking permanent space. */
/* ── Delivery-date filter ───────────────────────────────────────────────
   Presets for the days ahead (today / tomorrow / next 7) plus a custom range.
   Filters on orders.scheduled_at (the promised delivery window).
   BACKEND: GET /orders?scheduled_from=YYYY-MM-DD&scheduled_to=YYYY-MM-DD */
function isoDay(d) {
  return new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
}
function shiftDay(iso, n) {
  var d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return isoDay(d);
}
/* Demo clock: the seeded orders sit on fixed dates, so when every routable one
   is already in the past we anchor "today" to the earliest scheduled day — the
   presets stay demonstrable. BACKEND: always the server's current date. */
var _today = null;
function poolToday() {
  if (_today) return _today;
  var real = isoDay(new Date());
  var days = MANAGE_ORDERS.filter(isRoutable).map(function (o) {
    return (o.scheduled_at || "").slice(0, 10);
  }).filter(Boolean).sort();
  _today = days.length && days[days.length - 1] < real ? days[0] : real;
  return _today;
}
var DATE_LBL = {
  today: "Today",
  tomorrow: "Tomorrow",
  week: "Next 7 days",
  custom: "Custom"
};
function dateRange() {
  var t = poolToday(),
    m = STATE.dateMode;
  if (m === "today") return [t, t];
  if (m === "tomorrow") return [shiftDay(t, 1), shiftDay(t, 1)];
  if (m === "week") return [t, shiftDay(t, 6)];
  if (m === "custom" && (STATE.dateFrom || STATE.dateTo)) return [STATE.dateFrom || "0000-01-01", STATE.dateTo || "9999-12-31"];
  return null;
}
function dateChipLabel() {
  if (STATE.dateMode !== "custom") return DATE_LBL[STATE.dateMode] || "";
  var r = dateRange();
  if (!r) return "";
  var f = function (s) {
    return s.slice(5).replace("-", "/");
  };
  return STATE.dateFrom && STATE.dateTo ? f(STATE.dateFrom) + " – " + f(STATE.dateTo) : STATE.dateFrom ? "From " + f(STATE.dateFrom) : "Until " + f(STATE.dateTo);
}
function initDateFilter() {
  STATE.dateMode = "";
  STATE.dateFrom = "";
  STATE.dateTo = "";
  document.getElementById("poolDate").addEventListener("click", function (e) {
    var b = e.target.closest("[data-date]");
    if (!b) return;
    var m = b.getAttribute("data-date");
    STATE.dateMode = STATE.dateMode === m ? "" : m;
    syncDateUI();
    STATE.poolPage = 1;
    renderPool();
  });
  ["poolDateFrom", "poolDateTo"].forEach(function (id) {
    document.getElementById(id).addEventListener("change", function () {
      STATE.dateFrom = document.getElementById("poolDateFrom").value;
      STATE.dateTo = document.getElementById("poolDateTo").value;
      STATE.poolPage = 1;
      renderPool();
    });
  });
  syncDateUI();
}
function syncDateUI() {
  document.querySelectorAll("#poolDate [data-date]").forEach(function (b) {
    b.classList.toggle("is-on", b.getAttribute("data-date") === STATE.dateMode);
  });
  var custom = STATE.dateMode === "custom";
  document.getElementById("poolDateRange").classList.toggle("is-hidden", !custom);
  if (custom && !STATE.dateFrom && !STATE.dateTo) {
    STATE.dateFrom = poolToday();
    STATE.dateTo = shiftDay(poolToday(), 6);
    document.getElementById("poolDateFrom").value = STATE.dateFrom;
    document.getElementById("poolDateTo").value = STATE.dateTo;
  }
}
function clearDateFilter() {
  STATE.dateMode = "";
  STATE.dateFrom = "";
  STATE.dateTo = "";
  syncDateUI();
}
var FILTER_IDS = [{
  id: "poolStatus",
  label: "Status"
}, {
  id: "poolStore",
  label: "Store"
}, {
  id: "poolArea",
  label: "Area"
}];
function initFilterPopover() {
  var btn = document.getElementById("filterBtn"),
    pop = document.getElementById("filterPop");
  function open(on) {
    pop.classList.toggle("is-hidden", !on);
    btn.setAttribute("aria-expanded", String(on));
  }
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    open(pop.classList.contains("is-hidden"));
  });
  document.getElementById("filterDone").addEventListener("click", function () {
    open(false);
  });
  document.getElementById("filterClear").addEventListener("click", function () {
    clearFilters();
  });
  document.addEventListener("click", function (e) {
    if (!pop.classList.contains("is-hidden") && !pop.contains(e.target) && e.target !== btn && !btn.contains(e.target)) open(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") open(false);
  });
}
function clearFilters() {
  FILTER_IDS.forEach(function (f) {
    var el = document.getElementById(f.id);
    if (el._clear) el._clear();
  });
  clearDateFilter();
  STATE.poolPage = 1;
  renderPool();
}
/* One chip PER FILTER (not per value): "Status · 3" with the picked values shown
   on hover; the × clears that whole filter. */
function renderFilterChips() {
  var active = FILTER_IDS.map(function (f) {
    var vals = [].slice.call(document.getElementById(f.id).selectedOptions).filter(function (o) {
      return o.value !== "";
    }).map(function (o) {
      return o.textContent;
    });
    return vals.length ? {
      id: f.id,
      label: f.label,
      vals: vals
    } : null;
  }).filter(Boolean);
  if (dateRange()) active.unshift({
    id: "__date",
    label: "Date",
    vals: [dateChipLabel()]
  });
  var total = active.reduce(function (n, a) {
    return n + a.vals.length;
  }, 0);
  var badge = document.getElementById("filterCount");
  badge.textContent = total;
  badge.classList.toggle("is-hidden", !total);
  var host = document.getElementById("filterChips");
  host.classList.toggle("is-hidden", !active.length);
  host.innerHTML = '<div class="nsr-filter__chiprow">' + active.map(function (a) {
    var tip = a.label + ": " + a.vals.join(", ");
    return '<span class="nsr-chip" title="' + tip.replace(/"/g, "&quot;") + '">' + '<span class="nsr-chip__k u-muted">' + a.label + '</span><span class="nsr-chip__v">' + (a.vals.length === 1 ? a.vals[0] : a.vals.length) + "</span>" + '<button type="button" data-clear="' + a.id + '" aria-label="Clear ' + a.label + ' filter">' + window.fleetIcon("x", 12) + "</button></span>";
  }).join("") + "</div>" + (active.length > 1 ? '<button type="button" class="fds-btn fds-btn--ghost fds-btn--sm nsr-chip__clear" data-clear="__all">Clear all</button>' : "");
  host.querySelectorAll("[data-clear]").forEach(function (b) {
    b.addEventListener("click", function () {
      var t = b.getAttribute("data-clear");
      if (t === "__all") clearFilters();else clearOneFilter(t);
    });
  });
  fitChips(host, active.length);
}
function clearOneFilter(id) {
  if (id === "__date") clearDateFilter();else {
    var el = document.getElementById(id);
    if (el._clear) el._clear();
  }
  STATE.poolPage = 1;
  renderPool();
}
/* Hide any chip the track can't show in full and fold it into the "+N more"
   count, so a narrow pane never clips a chip mid-word. */
function fitChips(host, total) {
  var track = host.querySelector(".nsr-filter__chiprow");
  if (!track) return;
  var chips = [].slice.call(track.children),
    fits = chips.length;
  var right = track.getBoundingClientRect().right;
  chips.forEach(function (c, i) {
    c.classList.remove("is-hidden");
    if (c.getBoundingClientRect().right > right + 0.5 && i < fits) fits = i;
  });
  chips.forEach(function (c, i) {
    if (i >= fits) c.classList.add("is-hidden");
  });
  var rest = total - fits,
    more = host.querySelector("[data-more]");
  if (rest > 0 && !more) {
    more = document.createElement("button");
    more.type = "button";
    more.className = "nsr-chip nsr-chip--more";
    more.setAttribute("data-more", "1");
    more.addEventListener("click", function () {
      document.getElementById("filterBtn").click();
    });
    host.insertBefore(more, host.querySelector(".nsr-chip__clear"));
  }
  if (more) {
    more.textContent = "+" + rest + " more";
    more.classList.toggle("is-hidden", rest <= 0);
  }
}
function poolList() {
  var q = document.getElementById("poolSearch").value.toLowerCase();
  var fs = filterVals("poolStatus"),
    fst = filterVals("poolStore"),
    fa = filterVals("poolArea"),
    dr = dateRange();
  return MANAGE_ORDERS.filter(function (o) {
    if (!isRoutable(o)) return false; // ← eligibility gate (filterEligibleOrders §1)
    if (dr) {
      var day = (o.scheduled_at || "").slice(0, 10);
      if (!day || day < dr[0] || day > dr[1]) return false;
    }
    if (fs.length && fs.indexOf(o.status) < 0) return false;
    if (fst.length && fst.indexOf(o.store_id) < 0) return false;
    if (fa.length) {
      var ids = orderAreaIds(o);
      var hit = ids.some(function (id) {
        return fa.indexOf(id) >= 0;
      }) || fa.indexOf("__none") >= 0 && !ids.length;
      if (!hit) return false;
    }
    if (q) {
      var cust = CUSTOMER_BY_ID(o.customer_id);
      var hay = (o.ref + " " + ((STORE_BY_ID(o.store_id) || {}).name || "") + " " + (cust ? cust.name : "")).toLowerCase();
      if (hay.indexOf(q) < 0) return false;
    }
    return true;
  });
}
function renderPool() {
  var full = poolList(),
    host = document.getElementById("pool");
  renderFilterChips();
  if (!full.length) {
    host.innerHTML = '<div class="fds-empty" style="padding:26px 0"><span class="fds-empty__icon">' + window.fleetIcon("package", 22) + '</span><div class="fds-empty__title">No routable orders match</div><div class="fds-empty__hint">Only ready, at-hub, returned-to-hub, delivery-failed and delivered orders can be routed.</div></div>';
    document.getElementById("poolPager").innerHTML = "";
    document.getElementById("poolAll").checked = false;
    return;
  }
  var pages = Math.max(1, Math.ceil(full.length / POOL_SIZE));
  if (STATE.poolPage > pages) STATE.poolPage = pages;
  var start = (STATE.poolPage - 1) * POOL_SIZE,
    list = full.slice(start, start + POOL_SIZE);
  host.innerHTML = list.map(function (o) {
    var st = ORDER_STATUS_M[o.status] || {
      t: "neutral",
      l: o.status
    };
    var cust = CUSTOMER_BY_ID(o.customer_id);
    var picked = isPicked(o.id);
    /* Row affordances: delivered rows carry a "Return trigger" chip — picking
       them creates a return (workflow §4), never a delivery. Delivered orders
       with an active return are already filtered OUT by isRoutable (§1). */
    var from = o.status === "ready" ? (STORE_BY_ID(o.store_id) || {}).name || "Store" : o.status === "delivered" ? cust ? cust.name : "Customer" : (HUB_BY_ID(o.current_hub_id) || hubOf(o) || {}).name || "Hub";
    var to = o.status === "delivered" ? (STORE_BY_ID(o.store_id) || {}).name || "Store" : cust ? cust.name : "—";
    var typeChip = o.status === "delivered" ? '<span class="fds-badge fds-badge--warning">' + window.fleetIcon("refresh", 11) + " Return trigger</span>" : '<span class="fds-badge fds-badge--info">Deliver</span>';
    var extra = o.payment_method === "cod" ? '<span class="fds-badge fds-badge--warning">COD</span>' : "";
    var area = orderAreaLabel(o);
    var areaBit = ' <span class="u-muted">·</span> <span class="u-muted">' + (area || "Outside service areas") + "</span>";
    var rushChip = o.is_rush ? '<span class="fds-badge fds-badge--warning" title="طلب مستعجل / Rush Order">' + window.fleetIcon("zap", 11) + " Rush</span>" : "";
    return '<label class="nsr-row' + (picked ? " is-picked" : "") + '">' + '<input type="checkbox" data-pick="' + o.id + '"' + (picked ? " checked" : "") + ">" + '<div class="nsr-row__main">' + '<div class="nsr-row__top"><span class="u-mono nsr-row__ref">' + o.ref + "</span>" + rushChip + typeChip + extra + '<span class="nsr-row__sp"></span><span class="fds-badge fds-badge--' + st.t + '"><span class="fds-badge__dot"></span>' + st.l + "</span></div>" + '<div class="nsr-row__sub">' + from + ' <span class="u-muted">→</span> ' + to + ' <span class="u-muted">·</span> <span class="u-mono">' + ORDER_ACTUAL_KG(o).toFixed(1) + " kg</span>" + areaBit + "</div>" + "</div></label>";
  }).join("");
  host.querySelectorAll("[data-pick]").forEach(function (cb) {
    cb.addEventListener("change", function () {
      toggleOrder(cb.getAttribute("data-pick"), cb.checked);
    });
  });
  renderPoolBulk(list, full);
  document.getElementById("poolPager").innerHTML = pages > 1 ? '<span class="fds-pagination__info">' + (start + 1) + "–" + Math.min(start + POOL_SIZE, full.length) + " of " + full.length + "</span>" + '<div class="fds-pagination__pages"><button class="fds-iconbtn fds-iconbtn--sm" id="poolPrev"' + (STATE.poolPage <= 1 ? " disabled" : "") + ' aria-label="Previous page">' + window.fleetIcon("chevron-left", 16) + "</button>" + '<span class="u-mono" style="font-size:13px;color:var(--text-muted)">' + STATE.poolPage + " / " + pages + "</span>" + '<button class="fds-iconbtn fds-iconbtn--sm" id="poolNext"' + (STATE.poolPage >= pages ? " disabled" : "") + ' aria-label="Next page">' + window.fleetIcon("chevron-right", 16) + "</button></div>" : '<span class="fds-pagination__info">' + full.length + " routable order" + (full.length === 1 ? "" : "s") + "</span>";
  var pv = document.getElementById("poolPrev"),
    nx = document.getElementById("poolNext");
  if (pv) pv.onclick = function () {
    if (STATE.poolPage > 1) {
      STATE.poolPage--;
      renderPool();
    }
  };
  if (nx) nx.onclick = function () {
    if (STATE.poolPage < pages) {
      STATE.poolPage++;
      renderPool();
    }
  };
}

/* Bulk select — the checkbox covers the VISIBLE page; when the filtered set is
   larger a secondary action covers all matches (both go through toggleOrder so
   returns still spawn drafts and the load meter re-computes once at the end). */
function renderPoolBulk(pageList, full) {
  var box = document.getElementById("poolAll"),
    lbl = document.getElementById("poolAllLabel");
  var btn = document.getElementById("poolAllFiltered");
  var pagePicked = pageList.filter(function (o) {
    return isPicked(o.id);
  }).length;
  box.checked = pagePicked === pageList.length && pageList.length > 0;
  box.indeterminate = pagePicked > 0 && pagePicked < pageList.length;
  lbl.textContent = pagePicked ? "Selected " + pagePicked + " of " + pageList.length + " on this page" : "Select all " + pageList.length + " on this page";
  box.onchange = function () {
    bulkPick(pageList, box.checked);
  };
  var allPicked = full.filter(function (o) {
    return isPicked(o.id);
  }).length;
  btn.classList.toggle("is-hidden", full.length <= pageList.length);
  btn.textContent = allPicked === full.length ? "Clear all " + full.length + " matches" : "Select all " + full.length + " matches";
  btn.onclick = function () {
    bulkPick(full, allPicked !== full.length);
  };
}
function bulkPick(orders, on) {
  BULK = true;
  orders.forEach(function (o) {
    if (isPicked(o.id) !== on) toggleOrder(o.id, on);
  });
  BULK = false;
  commit();
}

/* ════════════════════════════════════════════════════════════════════════════
   §9  RIGHT PANE — route panel: Route legs · Map (two tabs) + totals hint.
   ════════════════════════════════════════════════════════════════════════════
   The panel fills the right pane; the map is its third tab rather than a card
   below it, so the stop list gets the full height and the map gets it too when
   selected. Google Maps lays out against a zero-size box while its tab is
   hidden, so switching TO the map tab triggers a resize + redraw. */
function renderRoutePanel() {
  document.getElementById("stopCount").textContent = STATE.queue.length;
  document.getElementById("optimizeBtn").disabled = STATE.queue.length < 2;
  renderQueueTab();
  renderRouteHint();
}

/* Tab 1 — Active route legs (queue builder, drag-and-drop). */
var DEST_LBL = {
  customer: "Customer",
  hub: "Hub",
  store: "Merchant store"
};
var LOC_ICON = {
  customer: "user",
  hub: "grid",
  store: "package"
};
function renderQueueTab() {
  var host = document.getElementById("tabRoute");
  if (!STATE.queue.length) {
    host.innerHTML = '<div class="nsr-route__empty">' + window.fleetIcon("navigation", 16) + " Pick orders on the left — the route queue builds here and the panel expands.</div>";
    return;
  }
  host.innerHTML = '<div class="nsr-stops" id="stopList">' + STATE.queue.map(function (q, i) {
    var o = ORDER_BY_ID(q.order_id);
    var isRtn = q.kind === "return";
    var org = originPoint(q),
      dst = destPoint(q),
      d = destOf(q);
    var loc = function (p, extra) {
      return '<span class="nsr-stop__loc">' + window.fleetIcon(LOC_ICON[p.type] || "map-pin", 12) + "<span>" + p.label + (extra ? ' <span class="u-muted">· ' + extra + "</span>" : "") + "</span></span>";
    };
    /* The highlighted "Return" badge required by the workflow (§4). */
    var kindBadge = isRtn ? '<span class="fds-badge fds-badge--warning">' + window.fleetIcon("refresh", 11) + " Return</span>" : '<span class="fds-badge fds-badge--info">Delivery</span>';
    /* Shown only when a separate store→hub pickup leg will actually be emitted. */
    var needsPickup = !isRtn && o.status === "ready" && d.type === "hub" ? '<span class="fds-badge fds-badge--neutral">+ pickup</span>' : "";
    var rushChip = o.is_rush ? '<span class="fds-badge fds-badge--warning" title="طلب مستعجل / Rush Order">' + window.fleetIcon("zap", 11) + " Rush</span>" : "";
    /* Drop-off control — status default, operator-overridable (§2b). */
    var typeSel = '<select class="fds-select fds-select--sm" data-dest="' + i + '" style="width:auto" aria-label="Drop-off type">' + destTypes(q.kind).map(function (t) {
      return '<option value="' + t + '"' + (d.type === t ? " selected" : "") + ">" + DEST_LBL[t] + "</option>";
    }).join("") + "</select>";
    var hubSel = d.type !== "hub" ? "" : '<select class="fds-select fds-select--sm" data-desthub="' + i + '" style="width:auto" aria-label="Which hub">' + destHubChoices(q).map(function (h) {
      return '<option value="' + h.id + '"' + (String(d.hub_id) === String(h.id) ? " selected" : "") + ">" + h.name + "</option>";
    }).join("") + "</select>";
    var destChip = isDestDefault(q) ? "" : '<span class="fds-badge fds-badge--info" title="Changed by the operator — the status default was ' + DEST_LBL[defaultDest(o, q.kind).type] + '">Changed</span>';
    return '<div class="nsr-stop' + (isRtn ? " nsr-stop--return" : "") + '" draggable="true" data-idx="' + i + '">' + '<span class="nsr-stop__grip" aria-hidden="true">' + window.fleetIcon("menu", 14) + "</span>" + '<span class="nsr-stop__n">' + (i + 1) + "</span>" + '<div class="nsr-stop__main">' + '<div class="nsr-stop__top"><div class="nsr-stop__tags"><span class="u-mono nsr-stop__ref">' + o.ref + "</span>" + kindBadge + needsPickup + rushChip + "</div>" + '<span class="nsr-stop__meta"><b class="u-mono">SAR ' + stopCost(q).toFixed(2) + "</b></span></div>" + '<div class="nsr-stop__route">' + loc(org) + '<span class="nsr-stop__arrow">' + window.fleetIcon("chevron-right", 12) + "</span>" + loc(dst, dst.type === "customer" ? customerAddrLine(o) : "") + "</div>" + '<div class="nsr-stop__dest" draggable="false"><label>Drop-off</label>' + typeSel + hubSel + destChip + "</div>" + "</div>" + '<div class="nsr-stop__acts">' + '<button type="button" class="fds-iconbtn fds-iconbtn--ghost fds-iconbtn--sm" data-drop="' + i + '" aria-label="Remove stop">' + window.fleetIcon("x", 15) + "</button>" + "</div></div>";
  }).join("") + "</div>";
  wireQueue();
}

/* Queue interactions: up/down (keyboard-friendly), remove, and HTML5 drag &
   drop. Reordering ONLY mutates the array — commit() renumbers pins (§3). */
function wireQueue() {
  var host = document.getElementById("tabRoute");
  host.querySelectorAll("[data-drop]").forEach(function (b) {
    b.addEventListener("click", function () {
      var q = STATE.queue[+b.getAttribute("data-drop")];
      if (q) toggleOrder(q.order_id, false);
    });
  });
  host.querySelectorAll("[data-dest]").forEach(function (s) {
    s.addEventListener("change", function () {
      setDest(+s.getAttribute("data-dest"), {
        type: s.value
      });
    });
  });
  host.querySelectorAll("[data-desthub]").forEach(function (s) {
    s.addEventListener("change", function () {
      setDest(+s.getAttribute("data-desthub"), {
        hub_id: s.value
      });
    });
  });
  var list = document.getElementById("stopList");
  if (!list) return;
  list.addEventListener("dragstart", function (e) {
    if (e.target.closest(".nsr-stop__dest")) {
      e.preventDefault();
      return;
    } // don't drag off the selects
    var row = e.target.closest(".nsr-stop");
    if (!row) return;
    STATE.dragIdx = +row.getAttribute("data-idx");
    e.dataTransfer.effectAllowed = "move";
    try {
      e.dataTransfer.setData("text/plain", String(STATE.dragIdx));
    } catch (err) {}
    row.classList.add("is-dragging");
  });
  list.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    var row = e.target.closest(".nsr-stop");
    if (!row) return;
    var r = row.getBoundingClientRect(),
      before = e.clientY - r.top < r.height / 2;
    list.querySelectorAll(".nsr-stop").forEach(function (x) {
      x.classList.remove("is-before", "is-after");
    });
    row.classList.add(before ? "is-before" : "is-after");
  });
  list.addEventListener("drop", function (e) {
    e.preventDefault();
    var row = e.target.closest(".nsr-stop");
    if (!row || STATE.dragIdx == null) return;
    var r = row.getBoundingClientRect(),
      before = e.clientY - r.top < r.height / 2;
    var target = +row.getAttribute("data-idx") + (before ? 0 : 1);
    moveStop(STATE.dragIdx, target > STATE.dragIdx ? target - 1 : target);
    STATE.dragIdx = null;
  });
  list.addEventListener("dragend", function () {
    STATE.dragIdx = null;
    list.querySelectorAll(".nsr-stop").forEach(function (x) {
      x.classList.remove("is-dragging", "is-before", "is-after");
    });
  });
}
function moveStop(from, to) {
  if (to < 0 || to >= STATE.queue.length || from === to) return;
  var item = STATE.queue.splice(from, 1)[0];
  STATE.queue.splice(to, 0, item);
  commit(); // → map pins renumber automatically
}

/* Route totals — one quiet hint strip under the stop list. Per-stop money already
   sits on each row, so this only carries the route-level figures (was Tab 2). */
function renderRouteHint() {
  var host = document.getElementById("routeHint");
  if (!STATE.queue.length) {
    host.innerHTML = '<span class="u-muted">' + window.fleetIcon("info", 13) + " Totals appear once the route has stops.</span>";
    return;
  }
  var m = routeMetrics(STATE.queue);
  host.innerHTML = "<span>" + window.fleetIcon("map", 13) + " <b>" + m.km.toFixed(1) + " km</b></span>" + "<span>" + window.fleetIcon("navigation", 13) + " <b>" + Math.round(m.mins) + " min</b></span>" + "<span>" + window.fleetIcon("package", 13) + " <b>" + m.kg.toFixed(1) + " kg</b></span>" + '<span class="nsr-route__foot-cost" title="Demo figures — production reads the pricing engine (order_charges)">' + window.fleetIcon("receipt", 13) + " Store cost <b>SAR " + m.cost.toFixed(2) + "</b></span>";
}

/* ════════════════════════════════════════════════════════════════════════════
   §10  RIGHT PANE, BOTTOM — sequence-numbered map.
   ════════════════════════════════════════════════════════════════════════════
   TWO renderers, one derive. Pins/markers are ALWAYS re-derived from queue
   order on every commit — pin i shows label i+1 — so a drag-reorder in Tab 1
   or an applied optimization renumbers the map with no extra bookkeeping.
     · REAL: a live Google Map (gmaps.js, same loader + key as the dashboard).
       Numbered markers + a route polyline; auto-fits bounds. Used whenever the
       Maps key loads.
     · FALLBACK: a pure-CSS schematic (offline / key-blocked). Identical
       semantics — numbered discs + dashed polyline.
   Legend:
     ◇ hub badge   = route start (driver's day starts at the warehouse)
     ● blue pin n  = delivery drop-off, sequence n
     ● amber pin n = RETURN PICKUP at the customer, sequence n
     ▪ store chip  = return drop-off (terminal, unnumbered)                  */

/* ── Live Google Map state (mirrors the dashboard's __gmap pattern) ───────── */
var GMAP = null,
  gMarkers = [],
  gPoly = null;

/* Location-type glyphs baked into the pin head — mirrors LOC_ICON (hub/customer/store)
   so the live map matches the offline schematic's icon-in-pin design. */
function gpinGlyph(type, c) {
  if (type === "hub") return '<g fill="none" stroke="' + c + '" stroke-width="1.6" stroke-linejoin="round"><rect x="8.5" y="6.5" width="5" height="5" rx="1"/><rect x="14.5" y="6.5" width="5" height="5" rx="1"/><rect x="8.5" y="12.5" width="5" height="5" rx="1"/><rect x="14.5" y="12.5" width="5" height="5" rx="1"/></g>';
  if (type === "customer") return '<circle cx="14" cy="8.7" r="3.2" fill="' + c + '"/><path d="M6.8 20c0-4 3.4-6.6 7.2-6.6s7.2 2.6 7.2 6.6" fill="none" stroke="' + c + '" stroke-width="2" stroke-linecap="round"/>';
  if (type === "store") return '<g fill="none" stroke="' + c + '" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="M7.5 10l6.5-3.6 6.5 3.6v8.4l-6.5 3.6-6.5-3.6z"/><path d="M7.5 10l6.5 3.6 6.5-3.6M14 13.6v8.4"/></g>';
  return "";
}
/* A teardrop pin as a data-URI SVG with a location-type icon + bold sequence
   number baked in. color = fill; n = the priority label ("" for unnumbered
   glyphs like the start hub or a terminal drop); type = hub|customer|store. */
function gPinSvg(color, n, ring, type, iconColor) {
  ring = ring || color;
  iconColor = iconColor || "#ffffff";
  var icon = gpinGlyph(type, iconColor);
  var badge = n === "" || n == null ? "" : '<circle cx="22" cy="6" r="6.5" fill="#ffffff" stroke="' + color + '" stroke-width="1.6"/>' + '<text x="22" y="8.7" text-anchor="middle" font-family="system-ui,sans-serif" font-size="8" font-weight="800" fill="' + color + '">' + n + '</text>';
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="30" height="38" viewBox="0 0 28 36">' + '<path d="M14 1C7 1 1.5 6.4 1.5 13.2 1.5 22 14 35 14 35s12.5-13 12.5-21.8C26.5 6.4 21 1 14 1Z" fill="' + color + '" stroke="' + ring + '" stroke-width="2"/>' + icon + badge + "</svg>");
}
function tokenColor(varName, fallback) {
  var v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return v || fallback;
}

/* Try to bring up the real map; on success hide the schematic layers and paint.
   Silently keeps the CSS fallback if the key is referrer/billing-blocked. */
function initGmap() {
  if (!window.fleetLoadMap) return;
  window.fleetLoadMap().then(function () {
    var host = document.getElementById("gmap");
    if (!host) return;
    GMAP = window.fleetInitMap(host, {
      center: {
        lat: 24.7300,
        lng: 46.6800
      },
      zoom: 11,
      disableDefaultUI: true,
      gestureHandling: "greedy"
    });
    window.__nsrGmap = GMAP;
    /* hide the decorative schematic now that a real map is behind it */
    ["nsr-map__grid"].forEach(function (c) {
      var e = document.querySelector("." + c);
      if (e) e.style.display = "none";
    });
    var ml = document.getElementById("mapLayer");
    if (ml) ml.style.display = "none";
    drawGmap();
  }).catch(function () {/* keep CSS fallback */});
}

/* Draw hub + numbered stop markers + return drops + route polyline on the live
   map, then fit the viewport to them. Re-run on every commit (§3). */
function drawGmap() {
  if (!GMAP || !window.google) return;
  gMarkers.forEach(function (m) {
    m.setMap(null);
  });
  gMarkers = [];
  if (gPoly) {
    gPoly.setMap(null);
    gPoly = null;
  }
  var hub = startHub();
  var primary = tokenColor("--primary", "#2f80ed");
  var amber = tokenColor("--status-pending", "#e0a53a");
  var path = [{
    lat: hub.lat,
    lng: hub.lng
  }];
  var bounds = new google.maps.LatLngBounds();
  bounds.extend({
    lat: hub.lat,
    lng: hub.lng
  });

  /* start hub */
  gMarkers.push(new google.maps.Marker({
    position: {
      lat: hub.lat,
      lng: hub.lng
    },
    map: GMAP,
    title: hub.name + " · route start",
    icon: {
      url: gPinSvg("#5b6b86", "", null, "hub"),
      scaledSize: new google.maps.Size(24, 24),
      anchor: new google.maps.Point(12, 12)
    },
    zIndex: 50
  }));

  /* numbered sequence stops */
  STATE.queue.forEach(function (q, i) {
    var o = ORDER_BY_ID(q.order_id),
      c = stopCoords(q);
    if (c.lat == null) return;
    var isRtn = q.kind === "return";
    var dp = destPoint(q);
    var stopType = isRtn ? "customer" : dp.type;
    path.push({
      lat: c.lat,
      lng: c.lng
    });
    bounds.extend({
      lat: c.lat,
      lng: c.lng
    });
    gMarkers.push(new google.maps.Marker({
      position: {
        lat: c.lat,
        lng: c.lng
      },
      map: GMAP,
      title: i + 1 + ". " + o.ref + (isRtn ? " · return pickup" : " · drop-off: " + dp.label),
      icon: {
        url: gPinSvg(isRtn ? amber : primary, i + 1, null, stopType),
        scaledSize: new google.maps.Size(30, 38),
        anchor: new google.maps.Point(15, 36)
      },
      zIndex: 100 + i
    }));
  });

  /* return terminal drop-offs (store) */
  returnDrops(STATE.queue).forEach(function (d) {
    if (d.lat == null) return;
    path.push({
      lat: d.lat,
      lng: d.lng
    });
    bounds.extend({
      lat: d.lat,
      lng: d.lng
    });
    gMarkers.push(new google.maps.Marker({
      position: {
        lat: d.lat,
        lng: d.lng
      },
      map: GMAP,
      title: d.label + " · return drop-off",
      icon: {
        url: gPinSvg("#ffffff", "", amber, "store", amber),
        scaledSize: new google.maps.Size(20, 20),
        anchor: new google.maps.Point(10, 10)
      },
      zIndex: 60
    }));
  });
  if (STATE.queue.length) {
    gPoly = new google.maps.Polyline({
      path: path,
      map: GMAP,
      geodesic: false,
      strokeColor: primary,
      strokeOpacity: 0.85,
      strokeWeight: 3,
      icons: [{
        icon: {
          path: "M 0,-1 0,1",
          strokeOpacity: 1,
          scale: 2
        },
        offset: "0",
        repeat: "12px"
      }]
    });
    GMAP.fitBounds(bounds, 56);
  } else {
    GMAP.setCenter({
      lat: hub.lat,
      lng: hub.lng
    });
    GMAP.setZoom(11);
  }
}
function project(pt, b) {
  return {
    x: (pt.lng - b.minLng) / (b.maxLng - b.minLng) * 100,
    y: (b.maxLat - pt.lat) / (b.maxLat - b.minLat) * 100
  };
}
function mapBounds(points) {
  var minLat = Infinity,
    maxLat = -Infinity,
    minLng = Infinity,
    maxLng = -Infinity;
  points.forEach(function (p) {
    if (p.lat == null) return;
    minLat = Math.min(minLat, p.lat);
    maxLat = Math.max(maxLat, p.lat);
    minLng = Math.min(minLng, p.lng);
    maxLng = Math.max(maxLng, p.lng);
  });
  if (!isFinite(minLat)) {
    minLat = 24.55;
    maxLat = 24.85;
    minLng = 46.55;
    maxLng = 46.85;
  }
  /* pad 14% + guard against zero span so a single pin still centers */
  var latSpan = Math.max(maxLat - minLat, 0.04),
    lngSpan = Math.max(maxLng - minLng, 0.04);
  var padLat = latSpan * 0.16,
    padLng = lngSpan * 0.16;
  return {
    minLat: minLat - padLat,
    maxLat: maxLat + padLat + latSpan * 0.06 /* headroom for pin tips */,
    minLng: minLng - padLng,
    maxLng: maxLng + padLng
  };
}
function renderMap() {
  var host = document.getElementById("mapLayer");
  var hub = startHub();
  var stops = STATE.queue.map(function (q, i) {
    var c = stopCoords(q);
    var type = q.kind === "return" ? "customer" : destPoint(q).type;
    return {
      lat: c.lat,
      lng: c.lng,
      n: i + 1,
      kind: q.kind,
      type: type,
      ref: (ORDER_BY_ID(q.order_id) || {}).ref
    };
  });
  /* toggle hint + legend regardless of renderer */
  document.getElementById("mapHint").classList.toggle("is-hidden", stops.length > 0 || !!GMAP);
  document.getElementById("mapLegend").classList.toggle("is-hidden", stops.length === 0);

  /* live Google Map takes over when available (§10) */
  if (GMAP) {
    drawGmap();
    return;
  }

  /* ── CSS schematic fallback ── */
  var drops = returnDrops(STATE.queue);
  var all = [{
    lat: hub.lat,
    lng: hub.lng
  }].concat(stops).concat(drops);
  var b = mapBounds(all);
  var H = project(hub, b);

  /* dashed travel polyline: hub → stops (in sequence) → return drop-offs */
  var linePts = [H].concat(stops.map(function (s) {
    return project(s, b);
  })).concat(drops.map(function (d) {
    return project(d, b);
  }));
  var poly = linePts.map(function (p) {
    return p.x.toFixed(2) + "," + p.y.toFixed(2);
  }).join(" ");
  var html = "";
  if (stops.length) {
    html += '<svg class="nsr-map__line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' + '<polyline points="' + poly + '" fill="none" stroke="var(--primary)" stroke-width="1.6" stroke-dasharray="3 2.4" stroke-linecap="round" vector-effect="non-scaling-stroke" opacity=".75"></polyline></svg>';
  }
  /* start hub */
  html += '<div class="nsr-hubpin" style="left:' + H.x + "%;top:" + H.y + '%" title="' + hub.name + '">' + '<span class="nsr-hubpin__ic"><span class="nsr-hubpin__gl">' + window.fleetIcon(LOC_ICON.hub, 13) + "</span></span></div>";
  /* location-typed pins — icon shows what kind of stop it is, corner badge keeps the route sequence visible */
  stops.forEach(function (s) {
    var p = project(s, b);
    html += '<div class="nsr-pin' + (s.kind === "return" ? " nsr-pin--return" : "") + '" style="left:' + p.x + "%;top:" + p.y + '%" title="' + s.ref + '">' + '<span class="nsr-pin__ic"><span class="nsr-pin__gl">' + window.fleetIcon(LOC_ICON[s.type] || "map-pin", 13) + "</span></span>" + '<span class="nsr-pin__n">' + s.n + "</span></div>";
  });
  /* return terminal drop-offs (store) */
  drops.forEach(function (d) {
    var p = project(d, b);
    html += '<div class="nsr-droppin" style="left:' + p.x + "%;top:" + p.y + '%" title="' + d.label + '">' + window.fleetIcon("package", 12) + "</div>";
  });
  host.innerHTML = html;
}

/* ════════════════════════════════════════════════════════════════════════════
   §11  SAVE — queue → shipment legs, order transitions, return persistence.
   ════════════════════════════════════════════════════════════════════════════
   Leg assembly (shape 100% compatible with shipment-view.html):
     1. PICKUPS  — every `ready` order still sits at its store, so grouped
                   store→hub legs are prepended (goods must reach the hub
                   before the dispatch run starts).
     2. QUEUE    — in the operator's exact sequence:
                     delivery stop → hub→customer   (kind dispatch)
                     return stop   → customer→store (kind return; the
                                     ADDRESS-REVERSED leg from §4)
   Order state transitions on save (all guarded by ORDER_CAN_TRANSITION):
     ready → allocated. at_hub / returned_to_hub / delivery_failed keep their
     status until the driver actually scans/moves goods (driver app events).
     delivered stays delivered — terminal; the RETURN REQUEST carries the
     return lifecycle instead (requested → picking_up → … , returns-data.js). */
function validateSave() {
  if (!STATE.queue.length) return "Pick at least one order to build a route.";
  if (!STATE.driverId) return "Assign a driver to create the shipment.";
  if (!STATE.vehicleId) return "Assign a vehicle to create the shipment.";
  var cap = vehicleCap(),
    kg = routeMetrics(STATE.queue).kg;
  if (cap && kg > cap) return "Load exceeds vehicle capacity by " + (kg - cap).toFixed(1) + " kg.";
  return "";
}
function save() {
  var err = validateSave();
  var errBox = document.getElementById("e-save");
  errBox.classList.toggle("is-hidden", !err);
  if (err) {
    document.getElementById("e-saveMsg").textContent = err;
    fleetToast("danger", "Check the shipment", err);
    return;
  }
  var legs = [],
    seq = 0;
  /* 1 — grouped store→hub pickups: only for `ready` orders whose drop-off IS a
     hub. A ready order routed straight to the customer needs no pickup leg —
     its single store→customer leg carries it (§2b). */
  var pickups = {};
  STATE.queue.forEach(function (q) {
    var o = ORDER_BY_ID(q.order_id),
      d = destOf(q);
    if (q.kind !== "delivery" || o.status !== "ready" || d.type !== "hub") return;
    var hubId = d.hub_id || hubOf(o).id,
      key = o.store_id + "→" + hubId;
    if (!pickups[key]) pickups[key] = {
      from_type: "store",
      from_id: o.store_id,
      to_type: "hub",
      to_id: hubId,
      order_ids: []
    };
    pickups[key].order_ids.push(o.id);
  });
  Object.keys(pickups).forEach(function (k) {
    var l = pickups[k];
    l.seq = ++seq;
    l.kind = SHP_LEG_KIND(l.from_type, l.to_type);
    legs.push(l);
  });
  /* 2 — the queue, in the operator's exact order. Origin comes from the order's
     status, destination from the (defaulted or overridden) drop-off. A ready
     order already covered by a pickup leg above emits no second leg. */
  STATE.queue.forEach(function (q) {
    var o = ORDER_BY_ID(q.order_id),
      org = originPoint(q),
      dp = destPoint(q);
    if (q.kind === "delivery" && o.status === "ready" && dp.type === "hub") return; // = the pickup leg
    var l = {
      from_type: org.type,
      from_id: org.id,
      to_type: dp.type,
      to_id: dp.id,
      order_ids: [o.id]
    };
    l.seq = ++seq;
    l.kind = SHP_LEG_KIND(l.from_type, l.to_type);
    legs.push(l);
  });
  var newId = "shp_" + Date.now(),
    ref = "#SHP-" + (1000 + SHIPMENTS.length + 1);
  var shp = {
    id: newId,
    ref: ref,
    driver_id: STATE.driverId,
    driver_name: SHP_DRIVER_NAME(STATE.driverId),
    vehicle_id: STATE.vehicleId,
    status: "assigned",
    legs: legs
  };
  SHIPMENTS.push(shp);
  if (typeof SHIPMENTS_SAVE_EXTRA === "function") SHIPMENTS_SAVE_EXTRA(shp); // prototype persistence

  /* order transitions (guarded — see header comment) */
  var moved = 0;
  STATE.queue.forEach(function (q) {
    var o = ORDER_BY_ID(q.order_id);
    if (ORDER_CAN_TRANSITION(o.status, "allocated")) {
      o.status = "allocated";
      if (typeof OpsState !== "undefined") OpsState.saveOrder(o);
      /* Audit trail (Section 4): record the assignment on the order's history. */
      if (typeof OrderActivity !== "undefined") OrderActivity.logAssigned(o.id, shp.driver_name, ref, "Dana Owais");
      moved++;
    }
  });

  /* finalize the spawned return orders (Delivered → Return, §4) */
  var returns = 0;
  Object.keys(STATE.returnDrafts).forEach(function (oid) {
    if (!isPicked(oid)) return; // safety: draft must still be queued
    var d = STATE.returnDrafts[oid];
    var qi = queueIndexOf(oid),
      rdest = qi >= 0 ? destOf(STATE.queue[qi]).type : d.destination;
    var row = {
      id: "rtn_" + Date.now() + "_" + ++returns,
      public_id: "rtn_" + String(9000 + RETURN_REQUESTS.length + returns),
      order_id: oid,
      parent_delivered_order_id: oid,
      // ← the bidirectional link (metadata)
      reason_code: d.reason_code,
      destination: rdest,
      // store (default) or hub, per the stop
      status: "requested",
      refund_amount: null,
      refund_status: "none",
      shipment_id: newId,
      // the carrying shipment
      created_at: new Date().toISOString().slice(0, 16).replace("T", " ")
    };
    RETURN_REQUESTS.push(row);
    if (typeof RETURNS_SAVE_EXTRA === "function") RETURNS_SAVE_EXTRA(row); // prototype persistence
    /* bidirectional linkage: stamp the child pointer back onto the delivered
       order (parent) so both rows reference each other (schema §3). */
    var parent = ORDER_BY_ID(oid);
    if (parent) {
      parent.child_return_order_id = row.id;
      if (typeof OpsState !== "undefined") OpsState.saveOrder(parent);
    }
  });
  fleetFlash("success", "Shipment created", ref + " · " + legs.length + " leg" + (legs.length === 1 ? "" : "s") + (moved ? " · " + moved + " order(s) allocated" : "") + (returns ? " · " + returns + " return order(s) created" : ""));
  location.href = "shipment-view.html?id=" + newId;
}

/* ════════════════════════════════════════════════════════════════════════════
   §12  BOOT
   ════════════════════════════════════════════════════════════════════════════ */
OPS_APPLY_ORDERS(MANAGE_ORDERS); // overlay saved status changes (ops-store.js)
initDispatchCard();
initPoolFilters();
document.getElementById("optimizeBtn").addEventListener("click", openOptimize);
document.getElementById("optApply").addEventListener("click", applyOptimization);
document.getElementById("saveBtn").addEventListener("click", save);
/* Map tab: the live map must re-measure when its panel becomes visible. */
document.querySelector("#routePanel [data-tabs]").addEventListener("click", function (e) {
  var t = e.target.closest("[data-tab]");
  if (!t || t.getAttribute("data-tab") !== "map") return;
  setTimeout(function () {
    if (GMAP && window.google) {
      google.maps.event.trigger(GMAP, "resize");
      drawGmap();
    } else renderMap();
  }, 60);
});
commit(); // first paint (collapsed panel, full map)
initGmap(); // upgrade the schematic to a live Google Map
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/shipment-routing.js", error: String((e && e.message) || e) }); }

// pages/store-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   STORE (Vendor) demo dataset + data contract.
   Shared by stores.html, store-edit.html, store-view.html.
   In the real app: GET /api/v1/stores.

   ════════════════════════════════════════════════════════════════════════════
   DATA MODEL — Store  (multi-tenant: every table carries org_id, omitted below)
   ════════════════════════════════════════════════════════════════════════════
   table: stores
     id            bigint  PK
     public_id     string  unique, "str_xxxxxx"
     name          string  required                         (اسم المتجر)
     code          string  unique, AUTO-GENERATED server-side (read-only in UI)
                           e.g. "STR-0001" — generated on create, never editable
     phone         string  required
     user_id       bigint  FK → users.id, required, UNIQUE
                           -- the store's owner/manager account.
                           -- MUST be a user with type='store' that is NOT already
                           -- assigned to another store (1:1 store↔user).
                           -- source: GET /api/v1/users?type=store&unassigned=true
                           --         (+ the currently-linked user when editing)
     created_at / updated_at

   table: store_branches            -- a store has MANY branches (1:many)
     id            bigint  PK
     store_id      bigint  FK → stores.id (ON DELETE CASCADE)
     branch_name   string  required
     branch_phone  string  required
     country_id    bigint  FK → countries.id, required
     city_id       bigint  FK → cities.id, required
                           -- cities.country_id MUST equal this branch.country_id
                           -- (city dropdown is filtered by the chosen country)
     lat           decimal(9,6)  required   -- map location
     lng           decimal(9,6)  required   -- map location

   VALIDATION (frontend + backend)
     name         : required, 2..120 chars
     phone        : required, E.164-ish (digits, +, spaces), min 8 digits
     user_id      : required; user.type must be 'store'; not linked elsewhere
     branches     : at least 1 branch required
       branch_name : required per branch
       branch_phone: required per branch, same phone rule
       country_id  : required
       city_id     : required AND must belong to country_id
       lat/lng     : required, lat ∈ [-90,90], lng ∈ [-180,180]

   ENDPOINTS
     GET    /api/v1/stores                    list (paginated {data,meta})
     GET    /api/v1/stores/{public_id}        one (with branches[])
     POST   /api/v1/stores                    create (code auto-generated)
     PATCH  /api/v1/stores/{public_id}        update
     DELETE /api/v1/stores/{public_id}        delete
     GET    /api/v1/users?type=store&unassigned=true   selectable owners
     GET    /api/v1/countries
     GET    /api/v1/cities?country_id={id}

   table: store_contracts             -- a store serves N service areas at a price
     id            bigint  PK
     store_id      bigint  FK → stores.id (ON DELETE CASCADE)
     service_area_id bigint FK → service_areas.id, required
     price         decimal(10,2) required   (السعر الأساسي للتوصيل في المنطقة)
                           -- this is the BASE delivery price for that area. The
                           -- store's pricing METHOD (below) builds on top of it:
                           -- flat → price is the fee; by_weight → price is the
                           -- base before weight tiers; by_distance → base price.
     UNIQUE (store_id, service_area_id)  -- a service area can be picked ONCE
                                          -- per store (no duplicate rows)
     -- Validation: service_area_id required; price required >= 0; a given
     -- service_area_id may appear at most once per store.

   ────────────────────────────────────────────────────────────────────────────
   PRICING (السبيك: كل الحساب على مستوى الستور) — set WHEN YOU CONTRACT.
   ────────────────────────────────────────────────────────────────────────────
     stores.pricing  jsonb  -- the store's rate card. PARTIAL override of the org
                           -- default (pricing-data.js → RATE_CARD_DEFAULT); unset
                           -- fields inherit. ONE config governs the whole store:
                           --   base.method  : zone_flat | by_weight | by_volume | by_distance
                           --   base.by_weight/by_volume/by_distance : the rates
                           --   surcharges.cod : COD fee (percent|flat, min/max)
                           --   surcharges.fuel/remote/oversize
                           --   event_fees : failed_attempt/reschedule/return_* (flat + who_pays)
                           --   tax : { vat_percent, prices_include_vat }
                           --   billing : { delivery_paid_by }
                           -- Areas differ ONLY in store_contracts.price (the base).
                           -- Engine: PRICING_RESOLVE(store, areaId) → PRICING_QUOTE.
   ════════════════════════════════════════════════════════════════════════════ */

/* Service areas a store can contract with. GET /api/v1/service-areas */
var STORE_SERVICE_AREAS = [{
  id: "sva_0001",
  name: "North Riyadh"
}, {
  id: "sva_0002",
  name: "Jeddah Corniche"
}, {
  id: "sva_0003",
  name: "East Dammam"
}];
function STORE_SVA_NAME(id) {
  var s = STORE_SERVICE_AREAS.filter(function (x) {
    return x.id === id;
  })[0];
  return s ? s.name : "—";
}

/* Country / city lookups (mirror the driver form's reference data). */
var STORE_COUNTRIES = [{
  id: 966,
  name: "Saudi Arabia",
  iso2: "SA"
}, {
  id: 971,
  name: "United Arab Emirates",
  iso2: "AE"
}, {
  id: 20,
  name: "Egypt",
  iso2: "EG"
}];
var STORE_CITIES = [{
  id: 101,
  name: "Riyadh",
  country_id: 966
}, {
  id: 102,
  name: "Jeddah",
  country_id: 966
}, {
  id: 103,
  name: "Dammam",
  country_id: 966
}, {
  id: 104,
  name: "Mecca",
  country_id: 966
}, {
  id: 201,
  name: "Dubai",
  country_id: 971
}, {
  id: 202,
  name: "Abu Dhabi",
  country_id: 971
}, {
  id: 203,
  name: "Sharjah",
  country_id: 971
}, {
  id: 301,
  name: "Cairo",
  country_id: 20
}, {
  id: 302,
  name: "Alexandria",
  country_id: 20
}, {
  id: 303,
  name: "Giza",
  country_id: 20
}];
function STORE_CITIES_BY_COUNTRY(cid) {
  return STORE_CITIES.filter(function (c) {
    return String(c.country_id) === String(cid);
  });
}
function STORE_CITY_NAME(id) {
  var c = STORE_CITIES.filter(function (x) {
    return x.id === id;
  })[0];
  return c ? c.name : "—";
}
function STORE_COUNTRY_NAME(id) {
  var c = STORE_COUNTRIES.filter(function (x) {
    return x.id === id;
  })[0];
  return c ? c.name : "—";
}

/* Store-type users. store_id != null → already linked (excluded from pickers,
   except the store currently being edited). GET /api/v1/users?type=store */
var STORE_USERS = [{
  id: 7001,
  name: "Maha Fahad",
  email: "maha.fahad@swift.test",
  store_id: "str_0001"
}, {
  id: 7002,
  name: "Ziad Nasser",
  email: "ziad.nasser@swift.test",
  store_id: "str_0002"
}, {
  id: 7003,
  name: "Aya Kamal",
  email: "aya.kamal@swift.test",
  store_id: null
}, {
  id: 7004,
  name: "Fahad Otaibi",
  email: "fahad.otaibi@swift.test",
  store_id: null
}, {
  id: 7005,
  name: "Reem Sultan",
  email: "reem.sultan@swift.test",
  store_id: null
}];
function STORE_USER(id) {
  return STORE_USERS.filter(function (u) {
    return u.id === id;
  })[0];
}
function STORE_USERS_AVAILABLE(storeId) {
  return STORE_USERS.filter(function (u) {
    return u.store_id == null || u.store_id === storeId;
  });
}
var STORES = [
/* Najm Market — supports by weight (default) and by distance; COD 1.5%;
   store also eats the reschedule fee. */
{
  id: "str_0001",
  code: "STR-0001",
  name: "Najm Market",
  phone: "+966 11 200 3344",
  user_id: 7001,
  branches: [{
    branch_name: "Najm — Olaya",
    branch_phone: "+966 11 200 3345",
    country_id: 966,
    city_id: 101,
    lat: 24.6913,
    lng: 46.6853,
    is_default: true
  }, {
    branch_name: "Najm — Malqa",
    branch_phone: "+966 11 200 3346",
    country_id: 966,
    city_id: 101,
    lat: 24.7743,
    lng: 46.6120
  }],
  contracts: [{
    service_area_id: "sva_0001",
    price: 15.00
  }, {
    service_area_id: "sva_0003",
    price: 18.00
  }],
  order_creation_type: "amount",
  pricing: {
    currency: "SAR",
    base: {
      method: "by_weight",
      methods: ["by_weight", "by_distance"],
      default_method: "by_weight",
      by_weight: {
        included_kg: 5,
        tiers: [{
          up_to_kg: null,
          price_per_kg: 1.50
        }]
      },
      by_distance: {
        included_km: 3,
        price_per_km: 2.00
      }
    },
    surcharges: {
      cod: {
        value: 1.5
      },
      rush: {
        enabled: true,
        fee_type: "flat",
        value: 20.00
      }
    },
    event_fees: {
      reschedule: {
        who_pays: "store"
      }
    }
  }
}, /* BlueCart — by-weight pricing (5kg included, then tiers) + 2% fuel surcharge. */
{
  id: "str_0002",
  code: "STR-0002",
  name: "BlueCart Store",
  phone: "+966 12 300 8890",
  user_id: 7002,
  branches: [{
    branch_name: "BlueCart — Jeddah Corniche",
    branch_phone: "+966 12 300 8891",
    country_id: 966,
    city_id: 102,
    lat: 21.5810,
    lng: 39.1400,
    is_default: true
  }],
  contracts: [{
    service_area_id: "sva_0002",
    price: 20.00
  }],
  order_creation_type: "items",
  pricing: {
    currency: "SAR",
    base: {
      method: "by_weight",
      methods: ["by_weight"],
      default_method: "by_weight",
      by_weight: {
        included_kg: 5
      }
    },
    surcharges: {
      fuel: {
        enabled: true,
        fee_type: "percent",
        value: 2.0
      }
    }
  }
}];
function STORE_BY_ID(id) {
  return STORES.filter(function (s) {
    return s.id === id;
  })[0];
}

/* ── Store pricing persistence (prototype) ───────────────────────────────
   stores.pricing is jsonb in production. Here the store form writes it to
   localStorage and it is re-applied onto STORES on every page load, so the
   methods a store supports (by weight / by distance, and which one is the
   DEFAULT) are visible to the store details and the order form too. */
var StorePricing = {
  KEY: 'fleet_store_pricing',
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  write: function (m) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(m));
    } catch (e) {}
  },
  set: function (id, pricing) {
    var m = this.read();
    m[id] = pricing;
    this.write(m);
    var s = STORE_BY_ID(id);
    if (s) s.pricing = pricing;
  },
  apply: function () {
    var m = this.read();
    STORES.forEach(function (s) {
      if (m[s.id]) s.pricing = m[s.id];
    });
  }
};
StorePricing.apply();

/* The delivery calculation methods a store SUPPORTS, and which is its default.
   A store on plain zone-flat supports neither, so weight/distance inputs are
   irrelevant for its orders. */
function STORE_CALC_METHODS(store) {
  var b = store && store.pricing && store.pricing.base;
  if (!b) return [];
  var list = (b.methods || []).slice();
  if (!list.length && b.method && b.method !== 'zone_flat') list = [b.method];
  return list.filter(function (m) {
    return m === 'by_weight' || m === 'by_distance';
  });
}
function STORE_DEFAULT_METHOD(store) {
  var b = store && store.pricing && store.pricing.base;
  if (!b) return null;
  var d = b.default_method || (b.method !== 'zone_flat' ? b.method : null);
  return STORE_CALC_METHODS(store).indexOf(d) >= 0 ? d : null;
}

/* ── Order creation type (per store) ────────────────────────────────────────
   How an order is valued when it is created. BOTH types are always AVAILABLE on
   every store — the store only names the PRIMARY (default) one, which the order
   form pre-selects; the operator can still switch per order:
     amount → no item lines; just the amount to be collected (goods stay a
              free-text description).
     items  → pick items from inventory with a quantity each; the amount is
              calculated from the lines.
   BACKEND: stores.order_creation_type enum('amount','items') default 'amount'
     = the DEFAULT only. orders.creation_type records what an order actually
     used, so an 'amount' order simply has no order_items rows. */
var STORE_ORDER_TYPES = [{
  v: 'amount',
  label: 'Amount only',
  icon: 'crosshair',
  hint: 'Pre-selects a single “amount to be collected” field. No item lines.'
}, {
  v: 'items',
  label: 'Items',
  icon: 'package',
  hint: 'Pre-selects item lines from inventory — item + quantity each — and calculates the amount from them.'
}];
var StoreOrderType = {
  KEY: 'fleet_store_order_type',
  DEFAULT: 'amount',
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  write: function (m) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(m));
    } catch (e) {}
  },
  /* The store's PRIMARY (default) creation type. */
  get: function (id) {
    var over = this.read()[id];
    var t = over || STORE_BY_ID(id) && STORE_BY_ID(id).order_creation_type || this.DEFAULT;
    return t === 'itemized' ? 'items' : t; // legacy value
  },
  set: function (id, type) {
    var m = this.read();
    m[id] = type;
    this.write(m);
  },
  /* Both types stay available on every store — this is what keeps creation generic. */
  available: function () {
    return STORE_ORDER_TYPES.map(function (t) {
      return t.v;
    });
  },
  isPrimary: function (id, type) {
    return this.get(id) === type;
  },
  label: function (type) {
    var t = STORE_ORDER_TYPES.filter(function (x) {
      return x.v === type;
    })[0];
    return t ? t.label : type;
  },
  hint: function (type) {
    var t = STORE_ORDER_TYPES.filter(function (x) {
      return x.v === type;
    })[0];
    return t ? t.hint : '';
  }
};

/* ── Store active/inactive status (prototype persistence) ──────────────────
   A deactivated store's users can't log in and can't place new orders with us.
   Backend: stores.status ('active'|'inactive'); auth + order-create endpoints
   reject when inactive. Deactivating is allowed even with an outstanding
   balance (operator confirms). */
var StoreStatus = {
  KEY: 'fleet_store_status',
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  write: function (m) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(m));
    } catch (e) {}
  },
  get: function (id) {
    return this.read()[id] || 'active';
  },
  isActive: function (id) {
    return this.get(id) !== 'inactive';
  },
  set: function (id, status) {
    var m = this.read();
    m[id] = status;
    this.write(m);
  }
};

/* Effective pricing rules for a store (org default ← store.pricing). Thin wrapper
   over the engine so views don't need to know the merge order. Requires
   pricing-data.js to be loaded; returns null otherwise. */
function STORE_PRICING_RULES(store, serviceAreaId) {
  if (typeof PRICING_RESOLVE !== "function") return null;
  return PRICING_RESOLVE(store, serviceAreaId);
}
/* The base price a store charges for a given area (from its contract). */
function STORE_AREA_PRICE(store, serviceAreaId) {
  var c = (store && store.contracts || []).filter(function (x) {
    return x.service_area_id === serviceAreaId;
  })[0];
  return c ? c.price : null;
}

/* ── Contract audit log (append-only) ─────────────────────────────────────
   table: store_contract_audit
     id, store_id FK, actor, action enum[add,update,remove], field, area,
     old_value, new_value, at(datetime)
   The backend writes a row on every contract add/update/remove; expose read +
   create only (immutable). Frontend seeds + appends to localStorage so changes
   made in the prototype show up live. GET /api/v1/stores/{id}/contract-audit */
var STORE_AUDIT_SEED = {
  str_0001: [{
    actor: "Dana Owais",
    action: "add",
    field: "contract",
    area: "North Riyadh",
    old: "",
    now: "SAR 15.00",
    at: "2026-06-20 09:12"
  }, {
    actor: "Dana Owais",
    action: "add",
    field: "contract",
    area: "East Dammam",
    old: "",
    now: "SAR 18.00",
    at: "2026-06-20 09:13"
  }],
  str_0002: [{
    actor: "Karim Adel",
    action: "add",
    field: "contract",
    area: "Jeddah Corniche",
    old: "",
    now: "SAR 20.00",
    at: "2026-06-21 10:40"
  }]
};
var STORE_AUDIT_ACTION_TONE = {
  add: "primary",
  update: "warning",
  remove: "danger"
};
var StoreAudit = {
  KEY: "fleet_store_contract_audit",
  read: function () {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || {};
    } catch (e) {
      return {};
    }
  },
  append: function (storeId, ev) {
    var all = this.read();
    ev.at = ev.at || new Date().toISOString().slice(0, 16).replace('T', ' ');
    (all[storeId] = all[storeId] || []).push(ev);
    try {
      localStorage.setItem(this.KEY, JSON.stringify(all));
    } catch (e) {}
  },
  log: function (storeId) {
    var seeded = (STORE_AUDIT_SEED[storeId] || []).slice();
    var stored = (this.read()[storeId] || []).slice();
    return seeded.concat(stored).sort(function (a, b) {
      return String(b.at).localeCompare(String(a.at));
    });
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/store-data.js", error: String((e && e.message) || e) }); }

// pages/truck-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   TRUCK / VEHICLE demo dataset — shared by trucks.html, truck-edit.html,
   truck-detail.html. In the real app this is GET /api/v1/vehicles.

   DATA MODEL — Vehicle
   table: vehicles
     id              bigint   PK
     public_id       string   unique, "veh_xxxxxx"
     plate           string   required, unique          (رقم اللوحة)
     make_model      string   required                  (الماركة/الموديل)
     type            enum     [sedan,pickup,van,truck,bike] required  (النوع)
     year            int      nullable                  (سنة الصنع)
     capacity_kg     int      nullable                  (الحمولة)
     color           string   nullable                  (اللون)
     reg_expiry      date     nullable                  (انتهاء الرخصة)
     insurance_no    string   nullable                  (رقم التأمين)
     status          enum     [active,maintenance,inactive] default active (الحالة)
     fleet_id        bigint   FK → fleets.id, nullable  (الأسطول)
     vendor_id       bigint   FK → vendors.id, nullable (المورّد)
     driver_id       bigint   FK → drivers.id, nullable, UNIQUE  (السائق المعيّن)
                              -- 1:1 — a vehicle has at most ONE driver and a
                              -- driver is assigned to at most one vehicle.
     metadata        jsonb    -- custom Forms-module fields (entity_type='truck')
     created_at      datetime
     updated_at      datetime
   ════════════════════════════════════════════════════════════════════════════ */

/* status enum → badge tone + label */
var TRUCK_STATUS = {
  active: {
    t: "success",
    l: "Active"
  },
  maintenance: {
    t: "warning",
    l: "In maintenance"
  },
  inactive: {
    t: "neutral",
    l: "Inactive"
  }
};

/* type enum → display label */
var TRUCK_TYPES = [{
  value: "sedan",
  label: "Sedan"
}, {
  value: "pickup",
  label: "Pickup"
}, {
  value: "van",
  label: "Van"
}, {
  value: "truck",
  label: "Truck"
}, {
  value: "bike",
  label: "Bike"
}];
function TRUCK_TYPE_LABEL(v) {
  var m = TRUCK_TYPES.filter(function (t) {
    return t.value === v;
  })[0];
  return m ? m.label : v;
}

/* Lookups (FK targets) — mirror the driver form's reference data. */
var TRUCK_FLEETS = [{
  id: 81,
  name: "Riyadh Fleet",
  is_default: true
}, {
  id: 82,
  name: "Jeddah Fleet"
}, {
  id: 83,
  name: "Dammam Fleet"
}, {
  id: 84,
  name: "Express Couriers"
}];
var TRUCK_VENDORS = [{
  id: 1,
  name: "Najm Foods"
}, {
  id: 2,
  name: "BlueCart"
}, {
  id: 3,
  name: "FreshLine"
}];
/* Drivers available for 1:1 assignment. unassigned=true → driver_id free. */
var TRUCK_DRIVERS = [{
  id: 5001,
  name: "Layla Hassan"
}, {
  id: 5002,
  name: "Omar Khaled"
}, {
  id: 5003,
  name: "Sara Nasser"
}, {
  id: 5004,
  name: "Bilal Mansour"
}, {
  id: 5005,
  name: "Huda Saleh"
}, {
  id: 5006,
  name: "Khalid Otaibi"
}];
var TRUCKS = [{
  id: "veh_h1l2x3",
  plate: "RYD 4821",
  make_model: "Toyota Hilux",
  type: "pickup",
  year: 2022,
  capacity_kg: 1000,
  color: "White",
  reg_expiry: "2026-08-14",
  insurance_no: "INS-99210",
  status: "active",
  fleet_id: 81,
  fleet_name: "Riyadh Fleet",
  vendor_id: 1,
  vendor_name: "Najm Foods",
  driver_id: 5001,
  driver_name: "Layla Hassan"
}, {
  id: "veh_c4n5t6",
  plate: "RYD 1190",
  make_model: "Mitsubishi Canter",
  type: "truck",
  year: 2021,
  capacity_kg: 3500,
  color: "Blue",
  reg_expiry: "2026-06-18",
  insurance_no: "INS-99211",
  status: "active",
  fleet_id: 81,
  fleet_name: "Riyadh Fleet",
  vendor_id: 1,
  vendor_name: "Najm Foods",
  driver_id: 5002,
  driver_name: "Omar Khaled"
}, {
  id: "veh_v7n8a9",
  plate: "JED 5521",
  make_model: "Toyota Hiace",
  type: "van",
  year: 2021,
  capacity_kg: 1500,
  color: "Silver",
  reg_expiry: "2026-03-09",
  insurance_no: "INS-99217",
  status: "maintenance",
  fleet_id: 82,
  fleet_name: "Jeddah Fleet",
  vendor_id: 2,
  vendor_name: "BlueCart",
  driver_id: 5004,
  driver_name: "Bilal Mansour",
  ownership: "external",
  monthly_cost: 3200
}, {
  id: "veh_h9l8x7",
  plate: "RYD 9920",
  make_model: "Toyota Hilux",
  type: "pickup",
  year: 2023,
  capacity_kg: 1000,
  color: "White",
  reg_expiry: "2027-01-22",
  insurance_no: "INS-99214",
  status: "active",
  fleet_id: 81,
  fleet_name: "Riyadh Fleet",
  vendor_id: 1,
  vendor_name: "Najm Foods",
  driver_id: 5005,
  driver_name: "Huda Saleh"
}, {
  id: "veh_t8r9k1",
  plate: "DMM 8810",
  make_model: "Mitsubishi Canter",
  type: "truck",
  year: 2020,
  capacity_kg: 3500,
  color: "White",
  reg_expiry: "2026-11-30",
  insurance_no: "INS-99219",
  status: "active",
  fleet_id: 83,
  fleet_name: "Dammam Fleet",
  vendor_id: 3,
  vendor_name: "FreshLine",
  driver_id: 5006,
  driver_name: "Khalid Otaibi"
}, {
  id: "veh_b2k3e4",
  plate: "RYD 2218",
  make_model: "Toyota Hilux",
  type: "pickup",
  year: 2022,
  capacity_kg: 1000,
  color: "Grey",
  reg_expiry: "2027-02-05",
  insurance_no: "INS-99218",
  status: "inactive",
  fleet_id: 84,
  fleet_name: "Express Couriers",
  vendor_id: 1,
  vendor_name: "Najm Foods",
  driver_id: null,
  driver_name: null
}, {
  id: "veh_m5o6t7",
  plate: "JED 3340",
  make_model: "Suzuki Every",
  type: "van",
  year: 2023,
  capacity_kg: 800,
  color: "White",
  reg_expiry: "2027-05-19",
  insurance_no: "INS-99220",
  status: "active",
  fleet_id: 82,
  fleet_name: "Jeddah Fleet",
  vendor_id: 2,
  vendor_name: "BlueCart",
  driver_id: null,
  driver_name: null
}, {
  id: "veh_z8k9e1",
  plate: "RYD 7711",
  make_model: "Honda CB125",
  type: "bike",
  year: 2024,
  capacity_kg: 60,
  color: "Red",
  reg_expiry: "2027-09-02",
  insurance_no: "INS-99221",
  status: "maintenance",
  fleet_id: 84,
  fleet_name: "Express Couriers",
  vendor_id: 3,
  vendor_name: "FreshLine",
  driver_id: null,
  driver_name: null,
  ownership: "external",
  monthly_cost: 1500
}];
function TRUCK_BY_ID(id) {
  return TRUCKS.filter(function (t) {
    return t.id === id;
  })[0];
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/truck-data.js", error: String((e && e.message) || e) }); }

// pages/ui.js
try { (() => {
/* Fleet SaaS — multi-page console. Shared behaviour:
   icon hydration, theme + RTL prefs (persisted), toasts, and the small
   interactions (menus, popovers, segmented switch, overlays).
   No framework — just the design-system CSS classes. Edit freely. */
(function () {
  "use strict";

  /* ── Icons (Lucide-style line set, mirrors components/core/Icon.jsx) ── */
  var ICONS = {
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3.5-5 7-5s7 1.5 7 5"/><path d="M17 8a3 3 0 0 1 0 6M22 20c0-2.5-2-4-4-4.5"/>',
    truck: '<rect x="1" y="6" width="13" height="10" rx="1"/><path d="M14 9h4l3 3v4h-7z"/><circle cx="6" cy="18" r="1.7"/><circle cx="18" cy="18" r="1.7"/>',
    map: '<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6"/><path d="M9 3v15M15 6v15"/>',
    "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/>',
    package: '<path d="M21 8 12 3 3 8v8l9 5 9-5Z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h6"/>',
    key: '<circle cx="7" cy="14" r="4"/><path d="M10 11l9-9M17 4l2 2M14 7l2 2"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0-1.1-2.7H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 2.7-1.1V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M5 12l5 5L20 6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    trash: '<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    "more-vertical": '<circle cx="12" cy="5" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="12" cy="19" r="1.6"/>',
    "chevron-down": '<polyline points="6 9 12 15 18 9"/>',
    "chevron-up": '<polyline points="18 15 12 9 6 15"/>',
    "chevron-right": '<polyline points="9 6 15 12 9 18"/>',
    "chevron-left": '<polyline points="15 6 9 12 15 18"/>',
    "arrow-up": '<path d="M12 19V5M6 11l6-6 6 6"/>',
    "arrow-down": '<path d="M12 5v14M6 13l6 6 6-6"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>',
    columns: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M9 4v16M15 4v16"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    download: '<path d="M12 4v12M7 11l5 5 5-5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    "check-circle": '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5L16 9"/>',
    "alert-circle": '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
    "alert-triangle": '<path d="M10.3 4.3 2 19a1.5 1.5 0 0 0 1.3 2.2h17.4A1.5 1.5 0 0 0 22 19L13.7 4.3a1.5 1.5 0 0 0-2.6 0Z"/><path d="M12 9v4M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.5 2 12v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6l-3.5-6.5a1 1 0 0 0-.9-.5H6.4a1 1 0 0 0-.9.5Z"/>',
    "zoom-in": '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
    "zoom-out": '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M8 11h6"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5M3 8v5m18-5v5"/>',
    navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
    crosshair: '<circle cx="12" cy="12" r="8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    "panel-left": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M5 5l1.5 1.5M17.5 17.5 19 19M2 12h2M20 12h2M5 19l1.5-1.5M17.5 6.5 19 5"/>',
    moon: '<path d="M21 12.8A8 8 0 1 1 11.2 3a6.4 6.4 0 0 0 9.8 9.8Z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    pause: '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>',
    play: '<path d="M6 4l14 8-14 8z"/>',
    "user-plus": '<circle cx="9" cy="8" r="4"/><path d="M2 20c0-4 4-6 7-6s3 .3 4 .8"/><path d="M19 14v6M16 17h6"/>',
    battery: '<rect x="2" y="7" width="16" height="10" rx="2"/><path d="M22 10v4"/><path d="M6 10v4M9.5 10v4"/>',
    droplet: '<path d="M12 3s6 5.7 6 10a6 6 0 0 1-12 0c0-4.3 6-10 6-10Z"/>',
    disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/>',
    wrench: '<path d="M15 6a4 4 0 0 1 5.2 5.2l-9 9L6 22l-3-3 1.8-5.2 9-9A4 4 0 0 1 15 6Z"/><path d="m14 7 3 3"/>',
    zap: '<polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2"/>',
    paperclip: '<path d="M21 11.5 12 20a5 5 0 0 1-7-7l8.5-8.5a3.5 3.5 0 0 1 5 5L10 16a2 2 0 0 1-3-3l7.5-7.5"/>',
    receipt: '<path d="M5 3v18l2-1.5L9 21l2-1.5L13 21l2-1.5L17 21l2-1.5V3l-2 1.5L15 3l-2 1.5L11 3 9 4.5 7 3Z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    rider: '<circle cx="5.5" cy="17" r="3"/><circle cx="18.5" cy="17" r="3"/><circle cx="15" cy="5" r="1.8"/><path d="M8.5 17l3.5-5h4l2.5 5"/><path d="M12 12l-2-3h4.5l1.5 2.2"/><path d="M14.2 6.5 12 9"/>'
  };
  function iconSvg(name, size, cls) {
    var s = size || 18;
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' + 'stroke-linecap="round" stroke-linejoin="round"' + (cls ? ' class="' + cls + '"' : "") + ' aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }
  // expose for pages that build markup dynamically
  window.fleetIcon = iconSvg;
  function hydrateIcons(root) {
    var nodes = (root || document).querySelectorAll("[data-icon]");
    Array.prototype.forEach.call(nodes, function (el) {
      var name = el.getAttribute("data-icon");
      var size = parseInt(el.getAttribute("data-size"), 10) || 18;
      el.outerHTML = iconSvg(name, size, el.className || "");
    });
  }

  /* ── Theme + language prefs (persisted across pages) ───────── */
  var docEl = document.documentElement;
  function getPref(k, d) {
    try {
      return localStorage.getItem(k) || d;
    } catch (e) {
      return d;
    }
  }
  function setPref(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  }
  function currentOrg() {
    return getPref("fleet_org_id", "org_swift");
  }

  /* Base languages ship with the app (also defined in i18n-store.js). */
  var BASE_LANGS = [{
    code: "en",
    name: "English",
    native_name: "English",
    direction: "ltr",
    base: true
  }, {
    code: "ar",
    name: "Arabic",
    native_name: "العربية",
    direction: "rtl",
    base: true
  }];
  /* Published org languages (read straight from the store's localStorage key so
     the switcher works on every page without depending on i18n-store.js). */
  function publishedLangs() {
    var all;
    try {
      all = JSON.parse(localStorage.getItem("fleet_org_languages")) || {};
    } catch (e) {
      all = {};
    }
    return (all[currentOrg()] || []).filter(function (l) {
      return l.status === "active";
    });
  }
  function allLangs() {
    return BASE_LANGS.concat(publishedLangs());
  }
  function activeLang() {
    var code = getPref("fleet_lang", null);
    if (!code) {
      code = getPref("fleet_dir", "ltr") === "rtl" ? "ar" : "en";
    }
    var found = allLangs().filter(function (l) {
      return l.code === code;
    })[0];
    return found || BASE_LANGS[0];
  }
  function setLang(code) {
    var l = allLangs().filter(function (x) {
      return x.code === code;
    })[0];
    if (!l) return;
    setPref("fleet_lang", l.code);
    setPref("fleet_dir", l.direction); // direction follows the language
    applyPrefs();
    toast("info", "Language changed", l.name + (l.native_name && l.native_name !== l.name ? " · " + l.native_name : ""));
  }
  window.fleetSetLang = setLang;
  function applyPrefs() {
    var theme = getPref("fleet_theme", "dark");
    var lang = activeLang();
    docEl.setAttribute("data-theme", theme);
    docEl.setAttribute("dir", lang.direction);
    docEl.lang = lang.code;
    refreshToggles();
    translatePage(lang.code);
  }

  /* ── Chrome auto-translate (EN → AR) ──────────────────────────────────────
     Shared UI chrome (sidebar nav, topbar, generic buttons/labels/placeholders)
     repeats verbatim across every page, so one EN→AR dictionary + a text-walk
     covers it everywhere without per-page work. Page-specific dynamic content
     (driver names, order refs…) is untouched — only exact matches translate.
     BACKEND/DB: this is a purely presentational string swap; it has no bearing
     on the localization module (Forms/Languages), which is the real per-field,
     per-org translation system backed by `i18n-store.js` + the `translations`
     table described there. */
  var CHROME_DICT = {
    // sidebar groups
    "Fleet-Ops": "عمليات الأسطول",
    "Manage": "الإدارة",
    "Resources": "الموارد",
    "Invoicing": "الفوترة",
    "Configuration": "الإعدادات",
    "Access": "الصلاحيات",
    // nav items
    "Dashboard": "لوحة التحكم",
    "Orders": "الطلبات",
    "Shipments": "الشحنات",
    "Service Areas": "مناطق الخدمة",
    "Drivers": "السائقون",
    "Vehicles": "المركبات",
    "Fleets": "الأساطيل",
    "Hubs": "المحاور",
    "Store": "المتجر",
    "Stores": "المتاجر",
    "Customers": "العملاء",
    "Forms": "النماذج",
    "Languages": "اللغات",
    "Users": "المستخدمون",
    "Roles": "الأدوار",
    "Sign out": "تسجيل الخروج",
    // generic buttons / labels
    "Cancel": "إلغاء",
    "Save": "حفظ",
    "Save changes": "حفظ التغييرات",
    "Delete": "حذف",
    "Edit": "تعديل",
    "Create": "إنشاء",
    "New": "جديد",
    "Search": "بحث",
    "Close": "إغلاق",
    "Back": "رجوع",
    "Next": "التالي",
    "Previous": "السابق",
    "Confirm": "تأكيد",
    "Submit": "إرسال",
    "Export": "تصدير",
    "Import": "استيراد",
    "View": "عرض",
    "Details": "التفاصيل",
    "Actions": "الإجراءات",
    "Status": "الحالة",
    "Name": "الاسم",
    "Phone": "الهاتف",
    "Email": "البريد الإلكتروني",
    "All statuses": "كل الحالات",
    "All stores": "كل المتاجر",
    "All zones": "كل المناطق",
    "Search orders…": "ابحث في الطلبات…",
    "Search drivers…": "ابحث عن السائقين…",
    "Sign in": "تسجيل الدخول",
    "Welcome back": "أهلاً بعودتك",
    // table headers (lists)
    "Driver": "السائق",
    "Vehicle": "المركبة",
    "Plate": "اللوحة",
    "Order": "الطلب",
    "Ref": "المرجع",
    "Customer": "العميل",
    "Store": "المتجر",
    "Fleet": "الأسطول",
    "Vendor": "المورّد",
    "Hub": "المحور",
    "Weight": "الوزن",
    "Payment": "الدفع",
    "Total": "الإجمالي",
    "Delivery date": "تاريخ التسليم",
    "Destination": "الوجهة",
    "City": "المدينة",
    "Country": "الدولة",
    "Role": "الدور",
    "Description": "الوصف",
    "Permissions": "الصلاحيات",
    "Created": "تاريخ الإنشاء",
    "Type": "النوع",
    "Assigned driver": "السائق المعيّن",
    "Capacity": "السعة",
    "Address": "العنوان",
    "Location": "الموقع",
    "Code": "الكود",
    // status labels (badges)
    "Draft": "مسودة",
    "Ready": "جاهز",
    "Allocated": "مُخصَّص",
    "Pending": "قيد الانتظار",
    "Assigned": "مُعيَّن",
    "Picked up": "تم الاستلام",
    "At hub": "في المحور",
    "Out for delivery": "خرج للتسليم",
    "Delivered": "تم التسليم",
    "Delivery failed": "فشل التسليم",
    "Rescheduled": "أُعيد جدولته",
    "Returning": "قيد الإرجاع",
    "Returned": "تم الإرجاع",
    "Missed": "لم يصل للمستودع",
    "Canceled": "مُلغى",
    "Failed attempt — pending redelivery (no payout)": "محاولة فاشلة — بانتظار إعادة التوصيل (بدون دفع)",
    "Returned to hub": "أُرجع للمحور",
    "Returned to store": "أُرجع للمتجر",
    "Cancelled": "مُلغى",
    "Active": "نشط",
    "Inactive": "غير نشط",
    "In maintenance": "في الصيانة",
    "Suspended": "موقوف",
    "Expired": "منتهي",
    "Valid": "ساري",
    "Online": "متصل",
    "Offline": "غير متصل",
    "Busy": "مشغول",
    "En-route": "في الطريق",
    // common actions / modal + toast copy
    "Add": "إضافة",
    "Update": "تحديث",
    "Remove": "إزالة",
    "Duplicate": "تكرار",
    "Download": "تنزيل",
    "Upload": "رفع",
    "Download sample": "تنزيل نموذج",
    "Change status": "تغيير الحالة",
    "Quote": "تسعير",
    "Assign": "تعيين",
    "Mark delivered": "تحديد كمُسلَّم",
    "Mark failed": "تحديد كفاشل",
    "Reschedule": "إعادة جدولة",
    "Send back": "إرجاع",
    "Are you sure?": "هل أنت متأكد؟",
    "This action cannot be undone.": "لا يمكن التراجع عن هذا الإجراء.",
    "Required": "مطلوب",
    "Optional": "اختياري",
    "Loading…": "جارٍ التحميل…",
    "No results": "لا نتائج",
    "No data": "لا توجد بيانات",
    // field labels
    "Full name": "الاسم الكامل",
    "Internal ID": "المعرّف الداخلي",
    "Password": "كلمة المرور",
    "Country": "الدولة",
    "Service area": "منطقة الخدمة",
    "Notes": "ملاحظات",
    "Contact name": "اسم جهة الاتصال",
    "Contact phone": "هاتف جهة الاتصال",
    // service areas module
    "Service Areas": "مناطق الخدمة",
    "Areas": "المناطق",
    "New service area": "منطقة خدمة جديدة",
    "Edit service area": "تعديل منطقة الخدمة",
    "Create area": "إنشاء المنطقة",
    "Delivery fee": "رسوم التوصيل",
    "Deactivate": "تعطيل",
    "Activate": "تفعيل",
    "Edit name &amp; fee": "تعديل الاسم والرسوم",
    "Draw zone": "رسم منطقة",
    "Finish": "إنهاء",
    "Zone color": "لون المنطقة",
    "Custom color": "لون مخصص",
    "Select country…": "اختر الدولة…",
    "Select city…": "اختر المدينة…",
    "Select country first…": "اختر الدولة أولاً…",
    "In transit": "في الطريق",
    "Delete service area?": "حذف منطقة الخدمة؟",
    "Name is required.": "الاسم مطلوب.",
    // shipments module
    "Shipments": "الشحنات",
    "New Shipment": "شحنة جديدة",
    "Edit shipment": "تعديل الشحنة",
    "Search shipments…": "ابحث في الشحنات…",
    "In progress": "قيد التنفيذ",
    "Completed": "مكتمل",
    "Partial": "جزئي",
    "Failed": "فشل",
    "Unassigned": "غير مُعيّن",
    "pickup": "استلام",
    "dispatch": "تسليم",
    "Route": "المسار",
    "Assignment": "التعيين",
    "signature": "توقيع",
    "photo": "صورة",
    "otp": "رمز تحقق",
    "Driver journeys — pick up and drop off orders across stores, stock & customers.": "رحلات السائقين — استلام وتسليم الطلبات عبر المتاجر والمستودعات والعملاء.",
    // payroll + deductions + pay config
    "Payroll": "الرواتب",
    "Payroll report": "تقرير الرواتب",
    "Payroll period": "فترة الرواتب",
    "Reports": "التقارير",
    // settlement / payment status
    "Settlement": "التسوية",
    "Paid": "مدفوع",
    "Partially paid": "مدفوع جزئيًا",
    "Unpaid": "غير مدفوع",
    "Record payment": "تسجيل دفعة",
    "Payments": "الدفعات",
    "No payments yet": "لا دفعات بعد",
    "Remaining": "المتبقّي",
    "By": "بواسطة",
    "Pay the full remaining, or enter a smaller amount for a partial payment.": "ادفع كامل المتبقّي، أو أدخل مبلغاً أقل لدفعة جزئية.",
    "Payment recorded": "تم تسجيل الدفعة",
    "Active": "نشط",
    "Inactive": "غير نشط",
    "Deactivate": "إلغاء التفعيل",
    "Activate": "تفعيل",
    "Deactivate store": "إلغاء تفعيل المتجر",
    "Activate store": "تفعيل المتجر",
    "Deactivate anyway": "إلغاء التفعيل على أي حال",
    "Outstanding balance": "رصيد مستحق",
    "Store deactivated": "تم إلغاء تفعيل المتجر",
    "Store activated": "تم تفعيل المتجر",
    "Date range": "النطاق الزمني",
    "Last 7 days": "آخر 7 أيام",
    "Last 30 days": "آخر 30 يوم",
    "Last 90 days": "آخر 90 يوم",
    "All time": "كل الوقت",
    "Collected from customers": "المُحصّل من العملاء",
    "Store bears (shipping + events)": "يتحمّل المتجر (الشحن + الأحداث)",
    "Net balance": "صافي الرصيد",
    "From customer": "من العميل",
    "Events": "الأحداث",
    "Store balance": "رصيد المتجر",
    "No orders in this range": "لا طلبات في هذا النطاق",
    "Settlement report": "تقرير التسوية",
    "Every store's balance: what you collected, what each store owes or is owed.": "رصيد كل متجر: اللي حصّلته، واللي على كل متجر أو ليه.",
    "Stores that owe you": "متاجر مدينة لك",
    "You owe stores": "أنت مدين لمتاجر",
    "Store bears": "يتحمّل المتجر",
    "Collected": "المُحصّل",
    "Balance": "الرصيد",
    "Goods": "البضاعة",
    "Shipping": "الشحن",
    "Open": "فتح",
    // invoices
    "Invoices": "الفواتير",
    "Invoice": "فاتورة",
    "Create invoice": "إنشاء فاتورة",
    "Due date": "تاريخ الاستحقاق",
    "Due": "مستحقة",
    "Created": "تاريخ الإنشاء",
    "Mark paid": "تحديد كمدفوعة",
    "No invoices yet": "لا فواتير بعد",
    "Invoice created": "تم إنشاء الفاتورة",
    "Invoice paid": "فاتورة مدفوعة",
    "The date this invoice must be settled by.": "التاريخ اللي لازم تتسوّى فيه الفاتورة.",
    "The orders on this invoice will be removed from Settlement and tracked here until paid.": "الطلبات في الفاتورة دي هتتشال من التسوية وتتابع هنا لحد ما تتدفع.",
    "Create one from the Settlement tab.": "أنشئ واحدة من تبويب التسوية.",
    "Invoices report": "تقرير الفواتير",
    "Every store invoice — status, due date, and transfer proof.": "كل فواتير المتاجر — الحالة وتاريخ الاستحقاق وإثبات التحويل.",
    "Mark invoice paid": "تحديد الفاتورة كمدفوعة",
    "Transfer proof": "إثبات التحويل",
    "Proof": "الإثبات",
    "Invoiced": "مُفوتَرة",
    "No invoices": "لا فواتير",
    "Attach a screenshot/photo of the bank transfer if you have one.": "أرفق صورة/لقطة للتحويل البنكي لو عندك.",
    "Orders on this invoice": "الطلبات في هذه الفاتورة",
    "Net balance": "صافي الرصيد",
    "View": "عرض",
    "Invoice not found": "الفاتورة غير موجودة",
    "Fully invoiced": "مُفوتَرة بالكامل",
    "Not invoiced": "غير مُفوتَرة",
    "invoiced": "مُفوتَر",
    "All invoiced": "الكل مُفوتَر",
    "None invoiced": "لا شيء مُفوتَر",
    "No settlements yet": "لا تسويات بعد",
    "No invoices": "لا فواتير",
    "Partially paid": "مدفوعة جزئياً",
    "Invoices": "الفواتير",
    "Settlement — orders and the invoices raised on this store.": "التسوية — الطلبات والفواتير المُصدَرة على هذا المتجر.",
    "Store not found": "المتجر غير موجود",
    "Create one from an order above.": "أنشئ واحدة من طلب بالأعلى.",
    "Invoice all un-invoiced": "فوترة كل غير المُفوتَر",
    "Select all": "تحديد الكل",
    "All months": "كل الشهور",
    "All stores": "كل المتاجر",
    "Paid": "مدفوعة",
    "Unpaid": "غير مدفوعة",
    "It may have been removed.": "ربما تم حذفها.",
    "No orders on this invoice": "لا طلبات في هذه الفاتورة",
    "Create invoices from a store's Settlement tab.": "أنشئ الفواتير من تبويب التسوية داخل المتجر.",
    "Order cost (goods · store)": "تكلفة الطلب (البضاعة · المتجر)",
    "Shipping (incl. COD fee + VAT)": "الشحن (شامل رسوم الدفع عند الاستلام + الضريبة)",
    "Event fees (store bears)": "رسوم الأحداث (يتحمّلها المتجر)",
    "Collect from customer": "المُحصّل من العميل",
    "Store bears (shipping + events)": "يتحمّل المتجر (الشحن + الأحداث)",
    "Goods collected for store (COD)": "بضاعة محصّلة للمتجر (دفع عند الاستلام)",
    "Store owes you": "المتجر مدين لك",
    "You owe the store": "أنت مدين للمتجر",
    "Settled with store": "تمّت التسوية مع المتجر",
    "Customer already paid — full shipping falls on the store.": "العميل دفع بالفعل — كامل الشحن على المتجر.",
    "Collect only the remaining balance from the customer.": "حصّل المتبقّي فقط من العميل.",
    "Driver collects on delivery.": "السائق يُحصّل عند التسليم.",
    "Customer pays their share on delivery.": "العميل يدفع حصّته عند التسليم.",
    "Deductions report": "تقرير الخصومات",
    "Every deduction: who was deducted, how much, who did it, when and why.": "كل خصم: مين اتخصم منه، كام، مين اللي عمله، إمتى وليه.",
    "Total deducted": "إجمالي المخصوم",
    "Drivers affected": "السائقون المتأثرون",
    "Amount": "المبلغ",
    "By": "بواسطة",
    "When": "متى",
    "Period": "الفترة",
    "All drivers": "كل السائقين",
    "No deductions": "لا خصومات",
    "Driver": "السائق",
    "Monthly driver pay = base salary + (completed orders × per-order rate).": "راتب السائق الشهري = الراتب الأساسي + (الطلبات المكتملة × سعر الطلب).",
    "Drivers paid": "السائقون المدفوع لهم",
    "Total orders": "إجمالي الطلبات",
    "Total payout": "إجمالي المدفوعات",
    "Base salary": "الراتب الأساسي",
    "Orders": "الطلبات",
    "Per order": "لكل طلب",
    "Orders pay": "أجر الطلبات",
    "Gross": "الإجمالي",
    "Deductions": "الخصومات",
    "Net pay": "صافي الراتب",
    "Deduct": "خصم",
    "Total pay": "إجمالي الراتب",
    "Internal ID": "المعرّف الداخلي",
    "Add deduction": "إضافة خصم",
    "Month": "الشهر",
    "Monthly salary (gross)": "الراتب الشهري (الإجمالي)",
    "Already deducted": "المخصوم بالفعل",
    "Deduction amount": "مبلغ الخصم",
    "Reason": "السبب",
    "e.g. Advance, fine, shortage": "مثال: سلفة، غرامة، عجز",
    "Deduction added": "تمت إضافة الخصم",
    "capped": "محدود",
    "Pay configuration": "إعدادات الراتب",
    "Monthly base salary": "الراتب الأساسي الشهري",
    "Amount per order": "المبلغ لكل طلب",
    "Paid for every completed order in the month.": "يُدفع عن كل طلب مكتمل في الشهر.",
    "— monthly salary + per-order rate (drives the payroll report)": "— راتب شهري + سعر لكل طلب (يُبنى عليه تقرير الرواتب)",
    // orders module
    "New Order": "طلب جديد",
    "Import Excel": "استيراد Excel",
    "Search orders, drivers…": "ابحث في الطلبات والسائقين…",
    "Create and track delivery orders.": "إنشاء وتتبّع طلبات التوصيل.",
    "Planned": "مُخطّط",
    "COD": "دفع عند الاستلام",
    "Prepaid": "مدفوع مسبقًا",
    "Item": "الصنف",
    "SKU": "رمز المنتج",
    "Qty": "الكمية",
    "Price": "السعر",
    "Items": "الأصناف",
    "Order details": "تفاصيل الطلب",
    "Goods value": "قيمة البضاعة",
    "Scheduled": "موعد مُجدول",
    "Attempts": "المحاولات",
    "Rate card": "بطاقة الأسعار",
    "Chargeable weight": "الوزن المحتسب",
    "Transfer hub": "نقل للمحور",
    "Dispatch out": "إرسال للتسليم",
    "Shipping label": "ملصق الشحن",
    "Charges": "الرسوم",
    "No charges yet": "لا رسوم بعد",
    "No note yet": "لا توجد ملاحظة بعد",
    "Save note": "حفظ الملاحظة",
    "Reset": "إعادة تعيين",
    "Add an internal note or delivery instruction for this order…": "أضف ملاحظة داخلية أو تعليمات تسليم لهذا الطلب…",
    // === full AR audit ===
    "Manage the people delivering your orders.": "إدارة الأشخاص الذين يوصّلون طلباتك.",
    "Trucks, vans and bikes across your fleets.": "الشاحنات والفانات والدراجات في أساطيلك.",
    "Stores and their branches supplying your orders.": "المتاجر وفروعها التي تزوّد طلباتك.",
    "The end customers you deliver to.": "العملاء النهائيون الذين توصّل إليهم.",
    "Warehouses where orders are picked up and dropped off.": "المستودعات التي تُستلم وتُسلّم منها الطلبات.",
    "Operational units grouping your vehicles, drivers and users.": "وحدات تشغيلية تجمع مركباتك وسائقيك ومستخدميك.",
    "People who can sign in to this organization's console.": "الأشخاص الذين يمكنهم تسجيل الدخول إلى كونسول هذه المنظمة.",
    "Define what each team member can see and do across the modules.": "حدّد ما يمكن لكل عضو فريق رؤيته وفعله عبر الوحدات.",
    "Group vehicles, drivers and users under one unit.": "جمّع المركبات والسائقين والمستخدمين تحت وحدة واحدة.",
    "Add a driver to start dispatching orders.": "أضف سائقاً لبدء إرسال الطلبات.",
    "Add a vehicle to your fleet.": "أضف مركبة إلى أسطولك.",
    "Add a store and its branches.": "أضف متجراً وفروعه.",
    "Add a warehouse with its code and location.": "أضف مستودعاً برمزه وموقعه.",
    "Add a store and their branches.": "أضف متجراً وفروعه.",
    "Invite someone to the console and pick their role.": "ادعُ شخصاً إلى الكونسول واختر دوره.",
    "Add a customer and their delivery addresses.": "أضف عميلاً وعناوين التسليم الخاصة به.",
    "Pick a store, a customer & address, then add items.": "اختر متجراً وعميلاً وعنواناً، ثم أضف الأصناف.",
    "Pick orders above and the route assembles here.": "اختر الطلبات بالأعلى وسيتجمّع المسار هنا.",
    "Pick orders — the route builds itself. Review, reorder, and save.": "اختر الطلبات — يبني المسار نفسه. راجع ورتّب واحفظ.",
    "Give the role a name.": "امنح الدور اسماً.",
    "Give the role a name": "امنح الدور اسماً",
    "Describe what this role can do.": "صِف ما يمكن لهذا الدور فعله.",
    "Reach 100% to publish": "اصل إلى 100% للنشر",
    "Drop a pin or enter lat/long.": "ضع دبوساً أو أدخل خط العرض/الطول.",
    "Click to drop the pin": "انقر لوضع الدبوس",
    "Click to add points · click the first point (or Finish) to close": "انقر لإضافة النقاط · انقر النقطة الأولى (أو إنهاء) للإغلاق",
    "Scan to confirm delivery": "امسح لتأكيد التسليم",
    "Opens the delivery form for this order on your device.": "يفتح نموذج التسليم لهذا الطلب على جهازك.",
    "Order composer would open here.": "سيُفتح منشئ الطلب هنا.",
    "Preview a delivery": "معاينة تسليم",
    "Status is set automatically from the date.": "تُحدَّد الحالة تلقائياً من التاريخ.",
    "Assigned by the system when the driver is created.": "يُعيَّن بواسطة النظام عند إنشاء السائق.",
    "You can add more addresses later from the customer page.": "يمكنك إضافة عناوين أكثر لاحقاً من صفحة العميل.",
    "Only store-type users not linked to another store.": "فقط مستخدمو نوع المتجر غير المرتبطين بمتجر آخر.",
    "Driver-type users that aren't linked to anyone else.": "مستخدمو نوع السائق غير المرتبطين بأحد آخر.",
    "A vehicle maps to a single driver (1:1).": "تُربط المركبة بسائق واحد (1:1).",
    "Each contract needs at least one area and a price.": "كل عقد يحتاج منطقة واحدة على الأقل وسعراً.",
    "Event fees (flat, charged when they happen)": "رسوم الأحداث (ثابتة، تُحتسب عند حدوثها)",
    "Some required fields need attention.": "بعض الحقول المطلوبة تحتاج انتباهاً.",
    "Add fleet-type users from the edit screen.": "أضف مستخدمي نوع الأسطول من شاشة التعديل.",
    "Add service areas & prices from the edit screen.": "أضف مناطق الخدمة والأسعار من شاشة التعديل.",
    "Assign a driver from the edit screen (1:1).": "عيّن سائقاً من شاشة التعديل (1:1).",
    "Assign a vehicle from the edit screen to see its details here.": "عيّن مركبة من شاشة التعديل لرؤية تفاصيلها هنا.",
    "Add your first field": "أضف أول حقل",
    "Reason": "السبب",
    "Quantity actually delivered": "الكمية المُسلّمة فعلياً",
    "Pick a different from/to and at least one order.": "اختر مصدراً/وجهة مختلفين وطلباً واحداً على الأقل.",
    "Try another status filter.": "جرّب تصفية حالة أخرى.",
    "This role has no users — it can be deleted from the list.": "هذا الدور بلا مستخدمين — يمكن حذفه من القائمة.",
    "Name, phone and first address are required.": "الاسم والهاتف والعنوان الأول مطلوبة.",
    "Add address": "إضافة عنوان",
    "Create Customer": "إنشاء عميل",
    "Manage": "الإدارة",
    "Resources": "الموارد",
    "Configuration": "الإعدادات",
    "Access": "الصلاحيات",
    "Fleet-Ops": "عمليات الأسطول",
    "Field values are stored per record in its": "تُخزَّن قيم الحقول لكل سجل في",
    "and shown wherever the record is created, edited or viewed.": "وتُعرض أينما يُنشأ السجل أو يُعدَّل أو يُعرض.",
    "Appears on create / edit": "يظهر عند الإنشاء / التعديل",
    "Appears on the detail page": "يظهر في صفحة التفاصيل",
    "Show in detail": "إظهار في التفاصيل",
    "Show in edit": "إظهار في التعديل",
    "In detail": "في التفاصيل",
    "In edit": "في التعديل",
    "Pick one or more. Leave empty to allow any file.": "اختر واحداً أو أكثر. اترك فارغاً للسماح بأي ملف.",
    "From the core schema · read-only": "من المخطط الأساسي · للقراءة فقط",
    "Built-in, locked": "مدمج، مقفول",
    "Bundled with the app · always available": "مضمّن مع التطبيق · متاح دائماً",
    "Activate": "تفعيل",
    "Add address": "إضافة عنوان",
    "Add branch": "إضافة فرع",
    "Add contract": "إضافة عقد",
    "Add custom field": "إضافة حقل مخصص",
    "Add field": "إضافة حقل",
    "Add language": "إضافة لغة",
    "Add leg": "إضافة مرحلة",
    "Add line": "إضافة سطر",
    "Add your first field": "أضف أول حقل",
    "Add your first language": "أضف أول لغة",
    "Assign": "تعيين",
    "Back to map": "العودة للخريطة",
    "Cancel": "إلغاء",
    "Cancel drawing": "إلغاء الرسم",
    "Change language": "تغيير اللغة",
    "Change status": "تغيير الحالة",
    "Check contracts": "مراجعة العقود",
    "Clear location": "مسح الموقع",
    "Close": "إغلاق",
    "Close scope": "إغلاق النطاق",
    "Copy": "نسخ",
    "Copy password": "نسخ كلمة المرور",
    "Create": "إنشاء",
    "Create & add": "إنشاء وإضافة",
    "Create & select": "إنشاء واختيار",
    "Create Customer": "إنشاء عميل",
    "Create Driver": "إنشاء سائق",
    "Create Fleet": "إنشاء أسطول",
    "Create Hub": "إنشاء محور",
    "Create Order": "إنشاء طلب",
    "Create Role": "إنشاء دور",
    "Create Shipment": "إنشاء شحنة",
    "Create Store": "إنشاء متجر",
    "Create User": "إنشاء مستخدم",
    "Create Vehicle": "إنشاء مركبة",
    "Create area": "إنشاء منطقة",
    "Create item": "إنشاء صنف",
    "Create order": "إنشاء طلب",
    "Delete": "حذف",
    "Delete customer": "حذف العميل",
    "Delete driver": "حذف السائق",
    "Delete fleet": "حذف الأسطول",
    "Delete hub": "حذف المحور",
    "Delete order": "حذف الطلب",
    "Delete role": "حذف الدور",
    "Delete shipment": "حذف الشحنة",
    "Delete store": "حذف المتجر",
    "Delete vehicle": "حذف المركبة",
    "Download base/translation file": "تنزيل ملف الأساس/الترجمة",
    "Draw new area": "رسم منطقة جديدة",
    "Edit": "تعديل",
    "Edit customer": "تعديل العميل",
    "Edit driver": "تعديل السائق",
    "Edit fleet": "تعديل الأسطول",
    "Edit hub": "تعديل المحور",
    "Edit order": "تعديل الطلب",
    "Edit shipment": "تعديل الشحنة",
    "Edit store": "تعديل المتجر",
    "Edit user": "تعديل المستخدم",
    "Edit vehicle": "تعديل المركبة",
    "Export": "تصدير",
    "Finish & create": "إنهاء وإنشاء",
    "Generate": "توليد",
    "Import": "استيراد",
    "Import Excel": "استيراد Excel",
    "Locate": "تحديد الموقع",
    "Mark failed": "تحديد كفاشل",
    "Move down": "تحريك لأسفل",
    "Move up": "تحريك لأعلى",
    "New": "جديد",
    "New Customer": "عميل جديد",
    "New Driver": "سائق جديد",
    "New Fleet": "أسطول جديد",
    "New Hub": "محور جديد",
    "New Order": "طلب جديد",
    "New Role": "دور جديد",
    "New Shipment": "شحنة جديدة",
    "New Store": "متجر جديد",
    "New User": "مستخدم جديد",
    "New Vehicle": "مركبة جديدة",
    "New customer": "عميل جديد",
    "New order": "طلب جديد",
    "New service area": "منطقة خدمة جديدة",
    "New user account": "حساب مستخدم جديد",
    "Publish": "نشر",
    "Refund": "استرداد",
    "Remove": "إزالة",
    "Remove address": "إزالة العنوان",
    "Remove branch": "إزالة الفرع",
    "Remove contract": "إزالة العقد",
    "Remove line": "إزالة السطر",
    "Remove orders on this leg": "إزالة طلبات هذه المرحلة",
    "Reschedule": "إعادة جدولة",
    "Reset": "إعادة تعيين",
    "Reset password": "إعادة تعيين كلمة المرور",
    "Review & save": "مراجعة وحفظ",
    "Save": "حفظ",
    "Save changes": "حفظ التغييرات",
    "Save field": "حفظ الحقل",
    "Save note": "حفظ الملاحظة",
    "Save outcome": "حفظ النتيجة",
    "Save translations": "حفظ الترجمات",
    "Send invitation": "إرسال دعوة",
    "Set": "تعيين",
    "Shipping label": "ملصق الشحن",
    "Sign in": "تسجيل الدخول",
    "Sign out": "تسجيل الخروج",
    "Soft-delete user": "حذف مبدئي للمستخدم",
    "Suspend": "إيقاف",
    "Toggle direction": "تبديل الاتجاه",
    "Toggle theme": "تبديل السمة",
    "Undo point": "تراجع عن نقطة",
    "Unpublish": "إلغاء النشر",
    "Zoom in": "تكبير",
    "Zoom out": "تصغير",
    "Active": "نشط",
    "Assigned": "مُعيّن",
    "Busy": "مشغول",
    "COD": "دفع عند الاستلام",
    "Cancelled": "مُلغى",
    "Completed": "مكتمل",
    "Draft": "مسودة",
    "Delivered": "تم التسليم",
    "En-route": "في الطريق",
    "External": "خارجي",
    "In maintenance": "في الصيانة",
    "In progress": "قيد التنفيذ",
    "Inactive": "غير نشط",
    "Internal": "داخلي",
    "Locked": "مقفول",
    "Offline": "غير متصل",
    "Online": "متصل",
    "Pending": "قيد الانتظار",
    "Planned": "مُخطّط",
    "Prepaid": "مدفوع مسبقًا",
    "Prepaid ": "مدفوع مسبقًا",
    "Published": "منشور",
    "Suspended": "موقوف",
    "System": "النظام",
    "Terminal": "نهائي",
    "Unassigned": "غير مُعيّن",
    "Failed attempt": "محاولة فاشلة",
    "Actions": "الإجراءات",
    "Address": "العنوان",
    "Addresses": "العناوين",
    "Amount": "المبلغ",
    "Assigned driver": "السائق المُعيّن",
    "Attempts": "المحاولات",
    "Branches": "الفروع",
    "Capacity": "السعة",
    "Charge": "رسم",
    "Charges": "الرسوم",
    "City": "المدينة",
    "Code": "الكود",
    "Completeness": "نسبة الاكتمال",
    "Contact": "جهة الاتصال",
    "Coordinates": "الإحداثيات",
    "Country": "الدولة",
    "Current": "الحالي",
    "Customer": "العميل",
    "Delivery date": "تاريخ التسليم",
    "Description": "الوصف",
    "Destination": "الوجهة",
    "Details": "التفاصيل",
    "Direction": "الاتجاه",
    "Driver": "السائق",
    "Dropoff": "التسليم",
    "Email": "البريد الإلكتروني",
    "Fleet": "الأسطول",
    "From": "من",
    "Goods value": "قيمة البضاعة",
    "ID": "المعرّف",
    "Item": "الصنف",
    "Items": "الأصناف",
    "Key": "المفتاح",
    "Label": "التسمية",
    "Language": "اللغة",
    "Last seen": "آخر ظهور",
    "Legs": "المراحل",
    "License": "الرخصة",
    "Location": "الموقع",
    "Method": "الطريقة",
    "Name": "الاسم",
    "Native name": "الاسم الأصلي",
    "Order": "الطلب",
    "Owner": "المالك",
    "Payer": "الدافع",
    "Payment": "الدفع",
    "Permissions": "الصلاحيات",
    "Phone": "الهاتف",
    "Pickup": "الاستلام",
    "Plate": "اللوحة",
    "Price": "السعر",
    "Proof": "الإثبات",
    "Public ID": "المعرّف العام",
    "Qty": "الكمية",
    "Quantity": "الكمية",
    "Rate card": "بطاقة الأسعار",
    "Reason": "السبب",
    "Reference": "المرجع",
    "Registration": "التسجيل",
    "Role": "الدور",
    "Route": "المسار",
    "Scheduled": "موعد مُجدول",
    "Service area": "منطقة الخدمة",
    "Service areas": "مناطق الخدمة",
    "Shipment": "الشحنة",
    "Status": "الحالة",
    "Stored key": "المفتاح المخزّن",
    "Summary": "الملخص",
    "To": "إلى",
    "Total": "الإجمالي",
    "Tracking": "التتبع",
    "Type": "النوع",
    "User": "المستخدم",
    "VAT": "ضريبة القيمة المضافة",
    "Vehicle": "المركبة",
    "Weight": "الوزن",
    "When": "متى",
    "Who bears": "من يتحمّل",
    "Zones": "المناطق",
    "Zoom": "تكبير/تصغير",
    "Chargeable weight": "الوزن المحتسب",
    "Contracts": "العقود",
    "Additional information": "معلومات إضافية",
    "Assignment": "التعيين",
    "Assignment history": "سجل التعيين",
    "Audit log": "سجل التدقيق",
    "Base languages": "لغات الأساس",
    "Base price": "السعر الأساسي",
    "Branch": "الفرع",
    "Branches & addresses": "الفروع والعناوين",
    "Building / Apartment": "المبنى / الشقة",
    "Built-in fields": "الحقول المدمجة",
    "Contact info": "معلومات الاتصال",
    "Contract audit log": "سجل تدقيق العقود",
    "Control center": "مركز التحكم",
    "Custom fields": "الحقول المخصصة",
    "Customer details": "تفاصيل العميل",
    "Delivery address": "عنوان التسليم",
    "Delivery attempts": "محاولات التسليم",
    "Driver & vehicle": "السائق والمركبة",
    "Driver details": "تفاصيل السائق",
    "Fleet details": "تفاصيل الأسطول",
    "Fleet users": "مستخدمو الأسطول",
    "History & audit": "السجل والتدقيق",
    "Hub details": "تفاصيل المحور",
    "Linked user account": "حساب المستخدم المرتبط",
    "Live dispatch": "الإرسال الحي",
    "Live preview": "معاينة حية",
    "Live status": "الحالة الحية",
    "Location (map)": "الموقع (خريطة)",
    "Manpower by fleet": "القوى العاملة حسب الأسطول",
    "Map layers": "طبقات الخريطة",
    "Measurements & weight": "القياسات والوزن",
    "Modules granted": "الوحدات الممنوحة",
    "Order actions": "إجراءات الطلب",
    "Order details": "تفاصيل الطلب",
    "Order lifecycle": "دورة حياة الطلب",
    "Order status state machine": "آلة حالات الطلب",
    "Orders on this leg": "طلبات هذه المرحلة",
    "Orders table": "جدول الطلبات",
    "Organization languages": "لغات المنظمة",
    "Permission Matrix": "مصفوفة الصلاحيات",
    "Person in charge": "الشخص المسؤول",
    "Pricing & fees": "التسعير والرسوم",
    "Quick actions": "إجراءات سريعة",
    "Registration status": "حالة التسجيل",
    "License status": "حالة الرخصة",
    "Return request": "طلب إرجاع",
    "Role Details": "تفاصيل الدور",
    "Role Name": "اسم الدور",
    "Store details": "تفاصيل المتجر",
    "User details": "تفاصيل المستخدم",
    "Users on this role": "المستخدمون على هذا الدور",
    "Validation": "التحقق",
    "Map": "خريطة",
    "Table": "جدول",
    "Layers": "الطبقات",
    "Zone routing": "توجيه المناطق",
    "Account holder name": "اسم صاحب الحساب",
    "Allowed file types": "أنواع الملفات المسموحة",
    "Apartment no.": "رقم الشقة",
    "Area color": "لون المنطقة",
    "Base price (from an area)": "السعر الأساسي (من منطقة)",
    "Branch name": "اسم الفرع",
    "Branch phone": "هاتف الفرع",
    "COD amount": "مبلغ الدفع عند الاستلام",
    "COD fee": "رسم الدفع عند الاستلام",
    "Calculation method": "طريقة الحساب",
    "Contact name": "اسم جهة الاتصال",
    "Contact phone": "هاتف جهة الاتصال",
    "Control center number": "رقم مركز التحكم",
    "Custom color": "لون مخصص",
    "Customer name": "اسم العميل",
    "Delivery fee": "رسوم التوصيل",
    "Delivery paid by": "يدفع التوصيل",
    "Distance (km)": "المسافة (كم)",
    "Fee %": "النسبة %",
    "Field name (Arabic)": "اسم الحقل (عربي)",
    "Field name (English)": "اسم الحقل (إنجليزي)",
    "Field type": "نوع الحقل",
    "First address line": "سطر العنوان الأول",
    "Flat": "ثابت",
    "Fleet name": "اسم الأسطول",
    "Full name": "الاسم الكامل",
    "Grand total (incl. VAT)": "الإجمالي الكلي (شامل الضريبة)",
    "Height (cm)": "الارتفاع (سم)",
    "Hub name": "اسم المحور",
    "Included distance (km)": "المسافة المشمولة (كم)",
    "Included weight (kg)": "الوزن المشمول (كجم)",
    "Internal ID": "المعرّف الداخلي",
    "Item name": "اسم الصنف",
    "Length (cm)": "الطول (سم)",
    "Max fee": "أقصى رسم",
    "Max length": "أقصى طول",
    "Min fee": "أدنى رسم",
    "Min length": "أدنى طول",
    "Name (English)": "الاسم (إنجليزي)",
    "Password": "كلمة المرور",
    "Phone (primary)": "الهاتف (أساسي)",
    "Phone (secondary)": "الهاتف (ثانوي)",
    "Price per extra kg": "سعر كل كجم إضافي",
    "Price per extra km": "سعر كل كم إضافي",
    "Primary phone": "الهاتف الأساسي",
    "Role Name ": "اسم الدور",
    "Sale price": "سعر البيع",
    "Secondary phone": "الهاتف الثانوي",
    "Short description": "وصف مختصر",
    "Store name": "اسم المتجر",
    "Store share %": "حصة المتجر %",
    "Test weight (kg)": "وزن الاختبار (كجم)",
    "User full name": "الاسم الكامل للمستخدم",
    "VAT %": "ضريبة القيمة المضافة %",
    "Weight (kg)": "الوزن (كجم)",
    "Width (cm)": "العرض (سم)",
    "Ship to": "الشحن إلى",
    "Owner (user)": "المالك (مستخدم)",
    "Store owner (user)": "مالك المتجر (مستخدم)",
    "Temporary password": "كلمة مرور مؤقتة",
    "Sale price ": "سعر البيع",
    "Enter role name": "أدخل اسم الدور",
    "Filter drivers…": "تصفية السائقين…",
    "Search by plate or model…": "ابحث باللوحة أو الموديل…",
    "Search customers…": "ابحث في العملاء…",
    "Search drivers…": "ابحث عن السائقين…",
    "Search fleets…": "ابحث في الأساطيل…",
    "Search hubs…": "ابحث في المحاور…",
    "Search orders, drivers…": "ابحث في الطلبات والسائقين…",
    "Search orders…": "ابحث في الطلبات…",
    "Search place": "ابحث عن مكان",
    "Search shipments…": "ابحث في الشحنات…",
    "Search stores…": "ابحث في المتاجر…",
    "Search users…": "ابحث في المستخدمين…",
    "Street, district, landmark…": "الشارع، الحي، معلم بارز…",
    "Street, district…": "الشارع، الحي…",
    "Home, Work…": "المنزل، العمل…",
    "Full address — street, area, landmark…": "العنوان الكامل — الشارع، المنطقة، معلم بارز…",
    "Add an internal note or delivery instruction for this order…": "أضف ملاحظة داخلية أو تعليمات تسليم لهذا الطلب…",
    "Min 8 characters": "8 أحرف على الأقل",
    "Generate or type a password": "ولّد أو اكتب كلمة مرور",
    "Address line": "سطر العنوان",
    "Address name": "اسم العنوان",
    "All permissions": "كل الصلاحيات",
    "All statuses": "كل الحالات",
    "All stores": "كل المتاجر",
    "All types": "كل الأنواع",
    "All zones": "كل المناطق",
    "Any file type": "أي نوع ملف",
    "Select a customer first…": "اختر عميلاً أولاً…",
    "Select address…": "اختر عنواناً…",
    "Select areas…": "اختر مناطق…",
    "Select city…": "اختر المدينة…",
    "Select country first…": "اختر الدولة أولاً…",
    "Select country…": "اختر الدولة…",
    "Select customer…": "اختر عميلاً…",
    "Select existing user…": "اختر مستخدماً موجوداً…",
    "Select fleet…": "اختر أسطولاً…",
    "Select item…": "اختر صنفاً…",
    "Select orders…": "اختر طلبات…",
    "Select service area…": "اختر منطقة خدمة…",
    "Select store user…": "اختر مستخدم متجر…",
    "Select store…": "اختر متجراً…",
    "Select users…": "اختر مستخدمين…",
    "Select vehicle…": "اختر مركبة…",
    "Select…": "اختر…",
    "None": "لا شيء",
    "Not set": "غير محدد",
    "Bike": "دراجة",
    "Sedan": "سيدان",
    "Truck": "شاحنة",
    "Van": "فان",
    "By distance": "حسب المسافة",
    "By weight": "حسب الوزن",
    "Split": "مقسوم",
    "No addresses.": "لا عناوين.",
    "No areas yet — draw one on the map.": "لا مناطق بعد — ارسم واحدة على الخريطة.",
    "No assignment history.": "لا سجل تعيين.",
    "No changes recorded.": "لا تغييرات مسجّلة.",
    "No charges yet": "لا رسوم بعد",
    "No charges.": "لا رسوم.",
    "No contract changes recorded.": "لا تغييرات عقود مسجّلة.",
    "No contracts": "لا عقود",
    "No custom fields yet": "لا حقول مخصصة بعد",
    "No delivery attempts yet.": "لا محاولات تسليم بعد.",
    "No driver assigned": "لا سائق مُعيّن",
    "No extra languages yet": "لا لغات إضافية بعد",
    "No fleet-type users available.": "لا مستخدمو أسطول متاحون.",
    "No map location": "لا موقع على الخريطة",
    "No orders": "لا طلبات",
    "No orders match": "لا طلبات مطابقة",
    "No orders yet": "لا طلبات بعد",
    "No owner linked.": "لا مالك مرتبط.",
    "No permissions granted.": "لا صلاحيات ممنوحة.",
    "No return request for this order.": "لا طلب إرجاع لهذا الطلب.",
    "No route legs.": "لا مراحل مسار.",
    "No route yet": "لا مسار بعد",
    "No users on this role": "لا مستخدمين على هذا الدور",
    "No users yet": "لا مستخدمين بعد",
    "No vehicle assigned": "لا مركبة مُعيّنة",
    "Nothing to review yet.": "لا شيء للمراجعة بعد.",
    "No contracts ": "لا عقود",
    "Change status?": "تغيير الحالة؟",
    "Delete customer?": "حذف العميل؟",
    "Delete driver?": "حذف السائق؟",
    "Delete fleet?": "حذف الأسطول؟",
    "Delete hub?": "حذف المحور؟",
    "Delete order?": "حذف الطلب؟",
    "Delete role?": "حذف الدور؟",
    "Delete service area?": "حذف منطقة الخدمة؟",
    "Delete shipment?": "حذف الشحنة؟",
    "Delete store?": "حذف المتجر؟",
    "Delete user?": "حذف المستخدم؟",
    "Delete vehicle?": "حذف المركبة؟",
    "Activate user?": "تفعيل المستخدم؟",
    "Suspend user?": "إيقاف المستخدم؟",
    "Reset password?": "إعادة تعيين كلمة المرور؟",
    "Send invitation?": "إرسال دعوة؟",
    "Delivery failed — next step?": "فشل التسليم — الخطوة التالية؟",
    "Copied": "تم النسخ",
    "Missing": "ناقص",
    "Missing fields": "حقول ناقصة",
    "Invitation sent": "تم إرسال الدعوة",
    "Password generated": "تم توليد كلمة المرور",
    "Password copied to clipboard.": "تم نسخ كلمة المرور.",
    "Export started": "بدأ التصدير",
    "Overlapping area": "منطقة متداخلة",
    "Pop-up blocked": "تم حظر النافذة المنبثقة",
    "Nothing to copy": "لا شيء للنسخ",
    "Address is required.": "العنوان مطلوب.",
    "Arabic name is required.": "الاسم بالعربي مطلوب.",
    "City is required.": "المدينة مطلوبة.",
    "Code is required.": "الكود مطلوب.",
    "Country is required.": "الدولة مطلوبة.",
    "Customer name is required.": "اسم العميل مطلوب.",
    "English name is required.": "الاسم بالإنجليزي مطلوب.",
    "Enter a delivery fee.": "أدخل رسوم التوصيل.",
    "Enter a valid email.": "أدخل بريداً إلكترونياً صحيحاً.",
    "Enter a valid phone number.": "أدخل رقم هاتف صحيح.",
    "Enter a valid phone.": "أدخل رقم هاتف صحيح.",
    "Fleet name is required.": "اسم الأسطول مطلوب.",
    "Hub name is required.": "اسم المحور مطلوب.",
    "License expiry is required.": "تاريخ انتهاء الرخصة مطلوب.",
    "License number is required.": "رقم الرخصة مطلوب.",
    "Make / model is required.": "الماركة/الموديل مطلوب.",
    "Must be at least 8 characters.": "يجب ألا يقل عن 8 أحرف.",
    "Name is required.": "الاسم مطلوب.",
    "Primary phone is required.": "الهاتف الأساسي مطلوب.",
    "Required": "مطلوب",
    "Required.": "مطلوب.",
    "Role name is required.": "اسم الدور مطلوب.",
    "SKU is required.": "رمز المنتج مطلوب.",
    "Sale price is required.": "سعر البيع مطلوب.",
    "Store name is required.": "اسم المتجر مطلوب.",
    "Add at least one address.": "أضف عنواناً واحداً على الأقل.",
    "Add at least one branch.": "أضف فرعاً واحداً على الأقل.",
    "Add at least one item.": "أضف صنفاً واحداً على الأقل.",
    "Pick a city.": "اختر مدينة.",
    "Pick a country.": "اختر دولة.",
    "Pick a delivery address.": "اختر عنوان تسليم.",
    "Pick a language": "اختر لغة",
    "Pick a role.": "اختر دوراً.",
    "Pick a store user.": "اختر مستخدم متجر.",
    "Pick a store.": "اختر متجراً.",
    "Pick a vehicle to check load.": "اختر مركبة للتحقق من الحمولة.",
    "Pick country and city.": "اختر الدولة والمدينة.",
    "Pick or create a customer.": "اختر أو أنشئ عميلاً.",
    "Pick orders": "اختر طلبات",
    "Mandatory": "إلزامي",
    "Must be filled in": "يجب تعبئته",
    "Notes": "ملاحظات",
    "No note yet": "لا توجد ملاحظة بعد",
    "Notifications": "الإشعارات",
    "Collapse sidebar": "طي الشريط الجانبي",
    "Yes": "نعم",
    "No": "لا",
    "(optional)": "(اختياري)",
    "— optional": "— اختياري",
    "(auto)": "(تلقائي)",
    "(auto-generated)": "(مولّد تلقائياً)",
    "Copy it and share securely.": "انسخها وشاركها بأمان.",
    "Peak load": "الحمل الأقصى",
    "Orders today": "طلبات اليوم",
    "Active orders": "طلبات نشطة",
    "On-time rate": "معدل الالتزام بالوقت",
    "Peak load fits the vehicle.": "الحمل الأقصى يناسب المركبة.",
    "Sign in to your console": "سجّل الدخول إلى الكونسول",
    "Welcome back": "أهلاً بعودتك",
    "Add a customer and their delivery addresses.": "أضف عميلاً وعناوين التسليم الخاصة به.",
    "Create and track delivery orders.": "إنشاء وتتبّع طلبات التوصيل.",
    "Custom leg": "مرحلة مخصصة",
    "Draw a delivery zone on the map, then set its name, city and fee.": "ارسم منطقة توصيل على الخريطة، ثم حدّد اسمها ومدينتها ورسومها.",
    "Show orders panel": "إظهار لوحة الطلبات",
    "Hide orders panel": "إخفاء لوحة الطلبات",
    "Map zoom in.": "تكبير الخريطة.",
    "Map zoom out.": "تصغير الخريطة.",
    "Cash on delivery (COD)": "الدفع عند الاستلام",
    "Customer pays": "يدفع العميل",
    "Store pays": "يدفع المتجر",
    "Prices include VAT": "الأسعار تشمل الضريبة",
    "OTP": "رمز تحقق",
    "Photo": "صورة",
    "Signature": "توقيع",
    "Photo ": "صورة"
  };
  // shipment builder — phases, legs, needs, retarget
  CHROME_DICT["Pickups"] = "عمليات الاستلام";
  CHROME_DICT["Deliveries"] = "عمليات التسليم";
  CHROME_DICT["Transfers"] = "عمليات النقل";
  CHROME_DICT["Returns"] = "عمليات الإرجاع";
  CHROME_DICT["Leg"] = "مرحلة";
  CHROME_DICT["Custom leg"] = "مرحلة مخصصة";
  CHROME_DICT["Route"] = "المسار";
  CHROME_DICT["To hub"] = "إلى المحور";
  CHROME_DICT["To store"] = "إلى المتجر";
  CHROME_DICT["Delivery"] = "تسليم";
  CHROME_DICT["Return"] = "إرجاع";
  CHROME_DICT["Pickup + delivery"] = "استلام + تسليم";
  CHROME_DICT["Hub → store"] = "محور ← متجر";
  CHROME_DICT["return"] = "إرجاع";
  CHROME_DICT["transfer"] = "نقل";
  CHROME_DICT["pickup"] = "استلام";
  CHROME_DICT["dispatch"] = "تسليم";
  // vehicles → trucks rename
  CHROME_DICT["Trucks"] = "الشاحنات";
  CHROME_DICT["Truck"] = "شاحنة";
  CHROME_DICT["New Truck"] = "شاحنة جديدة";
  CHROME_DICT["Create Truck"] = "إنشاء شاحنة";
  CHROME_DICT["Edit Truck"] = "تعديل الشاحنة";
  CHROME_DICT["Delete truck"] = "حذف الشاحنة";
  CHROME_DICT["Add a truck to your fleet."] = "أضف شاحنة إلى أسطولك.";
  CHROME_DICT["Ownership"] = "الملكية";
  CHROME_DICT["Ownership · الملكية"] = "الملكية";
  CHROME_DICT["Default"] = "افتراضي";
  CHROME_DICT["Set as default fleet"] = "تعيين كأسطول افتراضي";
  CHROME_DICT["Driver expenses"] = "مصاريف السائق";
  CHROME_DICT["Truck expenses"] = "مصاريف الشاحنة";
  // vehicle add-ons module
  CHROME_DICT["Add-ons"] = "الإضافات";
  CHROME_DICT["Add-on"] = "إضافة";
  CHROME_DICT["Add add-on"] = "إضافة مصروف";
  CHROME_DICT["Add vehicle add-on"] = "إضافة مصروف للمركبة";
  CHROME_DICT["Category"] = "النوع";
  CHROME_DICT["Cost (SAR)"] = "التكلفة (ريال)";
  CHROME_DICT["Month"] = "الشهر";
  CHROME_DICT["Note"] = "ملاحظة";
  CHROME_DICT["Attachment"] = "مرفق";
  CHROME_DICT["PDF or image"] = "ملف PDF أو صورة";
  CHROME_DICT["Choose a file…"] = "اختر ملفاً…";
  CHROME_DICT["(optional)"] = "(اختياري)";
  CHROME_DICT["on file"] = "محفوظ";
  CHROME_DICT["Battery"] = "بطارية";
  CHROME_DICT["Tyres"] = "إطارات";
  CHROME_DICT["Oil change"] = "تغيير زيت";
  CHROME_DICT["Brakes"] = "فرامل";
  CHROME_DICT["Maintenance"] = "صيانة";
  CHROME_DICT["Other"] = "أخرى";
  CHROME_DICT["Accepted"] = "مقبولة";
  CHROME_DICT["Rejected"] = "مرفوضة";
  CHROME_DICT["Base monthly"] = "التكلفة الأساسية";
  CHROME_DICT["Add-ons this month"] = "إضافات الشهر";
  CHROME_DICT["Total this month"] = "إجمالي الشهر";
  CHROME_DICT["Accept"] = "قبول";
  CHROME_DICT["Reject"] = "رفض";
  CHROME_DICT["Reject add-on?"] = "رفض الإضافة؟";
  CHROME_DICT["Reason"] = "السبب";
  CHROME_DICT["Reason:"] = "السبب:";
  CHROME_DICT["Added by"] = "أضافها";
  CHROME_DICT["Awaiting review"] = "بانتظار المراجعة";
  CHROME_DICT["Accepted by"] = "قبلها";
  CHROME_DICT["Rejected by"] = "رفضها";
  CHROME_DICT["Pending by"] = "";
  CHROME_DICT["No add-ons yet"] = "لا توجد إضافات بعد";
  CHROME_DICT["Add battery, tyres, oil and other company-covered expenses."] = "أضف البطارية والإطارات والزيت وغيرها من المصاريف التي تتحملها الشركة.";
  CHROME_DICT["What was replaced / why…"] = "ما الذي تم استبداله / لماذا…";
  CHROME_DICT["Why is this expense not covered?"] = "لماذا لا تُغطّى هذه المصاريف؟";
  CHROME_DICT["Added to the vehicle cost for the selected month."] = "يُضاف إلى تكلفة المركبة للشهر المحدد.";
  // ── order create / edit form ──────────────────────────────────────────────
  CHROME_DICT["New Order"] = "طلب جديد";
  CHROME_DICT["Edit Order"] = "تعديل الطلب";
  CHROME_DICT["Update this order — changes apply on save."] = "حدّث هذا الطلب — تُطبّق التغييرات عند الحفظ.";
  CHROME_DICT["Delivery calculation method"] = "طريقة احتساب التوصيل";
  CHROME_DICT["Auto (store default)"] = "تلقائي (افتراضي المتجر)";
  CHROME_DICT["Flat"] = "ثابت";
  CHROME_DICT["By weight"] = "حسب الوزن";
  CHROME_DICT["By distance"] = "حسب المسافة";
  CHROME_DICT["Leave on Auto to use the store’s default method."] = "اترك على تلقائي لاستخدام الطريقة الافتراضية للمتجر.";
  CHROME_DICT["Auto uses this store’s default: Flat."] = "تلقائي يستخدم الافتراضي لهذا المتجر: ثابت.";
  CHROME_DICT["Auto uses this store’s default: By weight."] = "تلقائي يستخدم الافتراضي لهذا المتجر: حسب الوزن.";
  CHROME_DICT["Auto uses this store’s default: By distance."] = "تلقائي يستخدم الافتراضي لهذا المتجر: حسب المسافة.";
  CHROME_DICT["Pick a store."] = "اختر متجراً.";
  CHROME_DICT["Pick or create a customer."] = "اختر عميلاً أو أنشئ واحداً.";
  CHROME_DICT["Pick a delivery address."] = "اختر عنوان التسليم.";
  CHROME_DICT["Select store…"] = "اختر متجراً…";
  CHROME_DICT["Select customer…"] = "اختر عميلاً…";
  CHROME_DICT["Select address…"] = "اختر عنواناً…";
  CHROME_DICT["Select item…"] = "اختر صنفاً…";
  CHROME_DICT["Add user"] = "إضافة مستخدم";
  CHROME_DICT["Create user"] = "إنشاء مستخدم";
  CHROME_DICT["Search users…"] = "ابحث عن مستخدم…";
  CHROME_DICT["Select hub…"] = "اختر محوراً…";
  CHROME_DICT["Search hubs…"] = "ابحث عن محور…";
  CHROME_DICT["Store is required."] = "المتجر مطلوب.";
  CHROME_DICT["Hub is required."] = "المحور مطلوب.";
  CHROME_DICT["Scheduled delivery time"] = "موعد التسليم المُجدول";
  CHROME_DICT["Defaults to tomorrow at 09:00 — change any time."] = "الافتراضي غداً الساعة 09:00 — غيّره في أي وقت.";
  CHROME_DICT["Chargeable weight (kg)"] = "الوزن المحتسب (كجم)";
  CHROME_DICT["Optional unless the store bills by weight."] = "اختياري ما لم يكن المتجر يحاسب حسب الوزن.";
  CHROME_DICT["Required — this store bills by weight."] = "مطلوب — هذا المتجر يحاسب حسب الوزن.";
  CHROME_DICT["Weight is required for by-weight billing."] = "الوزن مطلوب للاحتساب حسب الوزن.";
  CHROME_DICT["Payment method"] = "طريقة الدفع";
  CHROME_DICT["Cash on delivery"] = "الدفع عند الاستلام";
  CHROME_DICT["COD amount to collect (SAR)"] = "مبلغ الدفع عند الاستلام (ريال)";
  CHROME_DICT["Enter the cash amount to collect."] = "أدخل المبلغ النقدي المطلوب تحصيله.";
  CHROME_DICT["Declared goods value (SAR)"] = "قيمة البضاعة المُعلنة (ريال)";
  CHROME_DICT["Enter the declared goods value."] = "أدخل قيمة البضاعة المُعلنة.";
  CHROME_DICT["Used for insurance & failed-delivery fees."] = "تُستخدم للتأمين ورسوم فشل التسليم.";
  CHROME_DICT["Delivery instructions, gate codes, call-ahead notes…"] = "تعليمات التسليم، رموز البوابات، ملاحظات الاتصال المسبق…";
  CHROME_DICT["Visible to ops and printed on the shipping label."] = "مرئية للعمليات ومطبوعة على ملصق الشحن.";
  CHROME_DICT["Add at least one item."] = "أضف صنفاً واحداً على الأقل.";
  CHROME_DICT["Total:"] = "الإجمالي:";
  // new-customer + new-item modals
  CHROME_DICT["New customer"] = "عميل جديد";
  CHROME_DICT["Phone (primary)"] = "الهاتف (الأساسي)";
  CHROME_DICT["First address line"] = "سطر العنوان الأول";
  CHROME_DICT["Customer name"] = "اسم العميل";
  CHROME_DICT["Street, district…"] = "الشارع، الحي…";
  CHROME_DICT["You can add more addresses later from the customer page."] = "يمكنك إضافة المزيد من العناوين لاحقاً من صفحة العميل.";
  CHROME_DICT["Item name"] = "اسم الصنف";
  CHROME_DICT["SKU is required."] = "رمز المنتج مطلوب.";
  CHROME_DICT["Short description"] = "وصف مختصر";
  CHROME_DICT["Sale price"] = "سعر البيع";
  CHROME_DICT["Sale price is required."] = "سعر البيع مطلوب.";
  CHROME_DICT["Measurements & weight"] = "القياسات والوزن";
  CHROME_DICT["— optional"] = "— اختياري";
  CHROME_DICT["Length (cm)"] = "الطول (سم)";
  CHROME_DICT["Width (cm)"] = "العرض (سم)";
  CHROME_DICT["Height (cm)"] = "الارتفاع (سم)";
  CHROME_DICT["Weight (kg)"] = "الوزن (كجم)";
  // form toasts
  CHROME_DICT["Missing fields"] = "حقول ناقصة";
  CHROME_DICT["Name, phone and first address are required."] = "الاسم والهاتف والعنوان الأول مطلوبة.";
  CHROME_DICT["Customer created"] = "تم إنشاء العميل";
  CHROME_DICT["Item created"] = "تم إنشاء الصنف";
  CHROME_DICT["Check the form"] = "راجع النموذج";
  CHROME_DICT["Some required fields need attention."] = "بعض الحقول المطلوبة تحتاج انتباهاً.";
  CHROME_DICT["Order created"] = "تم إنشاء الطلب";
  CHROME_DICT["Order updated"] = "تم تحديث الطلب";
  // ── rush orders + simplified payment + history (system update) ─────────────
  CHROME_DICT["High-priority delivery — adds the store’s rush surcharge to this order."] = "توصيل عالي الأولوية — يضيف رسوم الطلب المستعجل للمتجر إلى هذا الطلب.";
  CHROME_DICT["Amount to collect on delivery"] = "المبلغ المطلوب تحصيله عند الاستلام";
  CHROME_DICT["Items subtotal"] = "إجمالي الأصناف";
  CHROME_DICT["Rush surcharge"] = "رسوم إضافية للطلب المستعجل";
  CHROME_DICT["VAT"] = "ضريبة القيمة المضافة";
  CHROME_DICT["Grand total"] = "الإجمالي الكلي";
  CHROME_DICT["Rush"] = "مستعجل";
  CHROME_DICT["History"] = "السجل";
  CHROME_DICT["Order history"] = "سجل الطلب";
  CHROME_DICT["No activity yet."] = "لا يوجد نشاط بعد.";
  CHROME_DICT["Charges & settlement"] = "الرسوم والتسوية";
  // store pricing form — rush surcharge
  CHROME_DICT["Rush order surcharge"] = "رسوم الطلب المستعجل";
  CHROME_DICT["Fee type"] = "نوع الرسوم";
  CHROME_DICT["Value"] = "القيمة";
  CHROME_DICT["Flat (SAR)"] = "ثابت (ريال)";
  CHROME_DICT["Percent of goods"] = "نسبة من البضاعة";
  CHROME_DICT["Percent"] = "نسبة";
  CHROME_DICT["When enabled, this store contract surcharge OVERRIDES the service area's rush default for ⚡ rush orders."] = "عند التفعيل، تتجاوز رسوم عقد المتجر هذه رسوم المنطقة الافتراضية للطلبات المستعجلة ⚡.";
  CHROME_DICT["Extra fee for ⚡ rush orders in this area. A store contract rush surcharge overrides it."] = "رسوم إضافية للطلبات المستعجلة ⚡ في هذه المنطقة. تتجاوزها رسوم عقد المتجر إن وُجدت.";
  // ── Dashboard: Map/Analysis switch + financial Analysis view ───────────────
  CHROME_DICT["Map"] = "خريطة";
  CHROME_DICT["Analysis"] = "التحليلات";
  CHROME_DICT["Financial analysis"] = "التحليل المالي";
  CHROME_DICT["Revenue, collections & settlement across all fleets · this month."] = "الإيرادات والتحصيلات والتسوية عبر جميع الأساطيل · هذا الشهر.";
  // KPI labels + subs
  CHROME_DICT["Revenue"] = "الإيرادات";
  CHROME_DICT["COD collected"] = "المُحصّل نقداً عند الاستلام";
  CHROME_DICT["Net to stores"] = "صافي المستحق للمتاجر";
  CHROME_DICT["Avg order value"] = "متوسط قيمة الطلب";
  CHROME_DICT["vs last month"] = "مقارنة بالشهر الماضي";
  CHROME_DICT["64% of orders"] = "64% من الطلبات";
  CHROME_DICT["settlement due"] = "تسوية مستحقة";
  CHROME_DICT["per delivered order"] = "لكل طلب مُسلَّم";
  // section labels
  CHROME_DICT["Operations"] = "العمليات";
  // card titles + meta
  CHROME_DICT["Revenue trend"] = "اتجاه الإيرادات";
  CHROME_DICT["Revenue by service area"] = "الإيرادات حسب منطقة الخدمة";
  CHROME_DICT["Payment mix"] = "توزيع طرق الدفع";
  CHROME_DICT["Gross revenue → net margin"] = "إجمالي الإيرادات ← صافي الربح";
  CHROME_DICT["Orders by status"] = "الطلبات حسب الحالة";
  CHROME_DICT["Deliveries / day"] = "عمليات التسليم / يوم";
  CHROME_DICT["On-time rate"] = "معدل الالتزام بالوقت";
  CHROME_DICT["SAR · last 8 weeks"] = "ريال · آخر 8 أسابيع";
  CHROME_DICT["SAR"] = "ريال";
  CHROME_DICT["this month"] = "هذا الشهر";
  CHROME_DICT["last 7 days"] = "آخر 7 أيام";
  // date-range segment
  CHROME_DICT["7 days"] = "7 أيام";
  CHROME_DICT["Month"] = "الشهر";
  CHROME_DICT["Quarter"] = "ربع سنة";
  // service-area bars + flow + status
  CHROME_DICT["Other areas"] = "مناطق أخرى";
  CHROME_DICT["Net margin"] = "صافي الربح";
  CHROME_DICT["Driver payouts"] = "مدفوعات السائقين";
  CHROME_DICT["COD fees"] = "رسوم الدفع عند الاستلام";
  CHROME_DICT["Failed / returned"] = "فاشلة / مُرتجعة";
  // deliveries-per-day weekday labels
  CHROME_DICT["Mon"] = "الإثنين";
  CHROME_DICT["Tue"] = "الثلاثاء";
  CHROME_DICT["Wed"] = "الأربعاء";
  CHROME_DICT["Thu"] = "الخميس";
  CHROME_DICT["Fri"] = "الجمعة";
  CHROME_DICT["Sat"] = "السبت";
  CHROME_DICT["Sun"] = "الأحد";
  // on-time gauge center
  CHROME_DICT["on-time"] = "في الوقت";
  // ── order form redesign: sections, searchable selects, one-line payment ────
  CHROME_DICT["Order info"] = "معلومات الطلب";
  CHROME_DICT["Payment info"] = "معلومات الدفع";
  CHROME_DICT["Branch"] = "الفرع";
  CHROME_DICT["Search branches…"] = "ابحث في الفروع…";
  CHROME_DICT["Select branch…"] = "اختر الفرع…";
  CHROME_DICT["Select a store first…"] = "اختر المتجر أولاً…";
  CHROME_DICT["Delivery address"] = "عنوان التسليم";
  CHROME_DICT["Scheduled delivery date"] = "تاريخ التسليم المُجدول";
  CHROME_DICT["Defaults to tomorrow — change any time."] = "الافتراضي غداً — غيّره في أي وقت.";
  CHROME_DICT["Goods weight (kg)"] = "وزن البضاعة (كجم)";
  CHROME_DICT["Rush order"] = "طلب مستعجل";
  CHROME_DICT["Summary"] = "الملخص";
  CHROME_DICT["Amount to be collected"] = "المبلغ المطلوب تحصيله";
  CHROME_DICT["Collected on delivery — defaults to the grand total, editable."] = "يُحصَّل عند التسليم — الافتراضي هو الإجمالي الكلي، وقابل للتعديل.";
  CHROME_DICT["Amount the driver collects on delivery (rest already paid)."] = "المبلغ الذي يحصّله السائق عند التسليم (الباقي مدفوع مسبقاً).";
  CHROME_DICT["Amount the driver collects on delivery."] = "المبلغ الذي يحصّله السائق عند التسليم.";
  CHROME_DICT["Enter the amount to be collected."] = "أدخل المبلغ المطلوب تحصيله.";
  CHROME_DICT["Notes / description"] = "ملاحظات / وصف";
  CHROME_DICT["Goods description, delivery instructions, gate codes…"] = "وصف البضاعة، تعليمات التسليم، رموز البوابات…";
  CHROME_DICT["Set store, customer & address to price."] = "حدّد المتجر والعميل والعنوان لحساب السعر.";
  CHROME_DICT["Auto (Flat) — updates with method or rush."] = "تلقائي (ثابت) — يتحدّث حسب الطريقة أو الاستعجال.";
  CHROME_DICT["Auto (By weight) — updates with method or rush."] = "تلقائي (حسب الوزن) — يتحدّث حسب الطريقة أو الاستعجال.";
  CHROME_DICT["Auto (By distance) — updates with method or rush."] = "تلقائي (حسب المسافة) — يتحدّث حسب الطريقة أو الاستعجال.";
  CHROME_DICT["Auto (store default) — updates with method or rush."] = "تلقائي (افتراضي المتجر) — يتحدّث حسب الطريقة أو الاستعجال.";
  CHROME_DICT["Search stores…"] = "ابحث عن متجر…";
  CHROME_DICT["Search customers…"] = "ابحث عن عميل…";
  CHROME_DICT["Search addresses…"] = "ابحث عن عنوان…";
  CHROME_DICT["No matches"] = "لا نتائج";
  CHROME_DICT["Select a customer first…"] = "اختر عميلاً أولاً…";
  // new-customer modal: map location
  CHROME_DICT["Location (map)"] = "الموقع (خريطة)";
  CHROME_DICT["Drop a pin for the location."] = "ضع دبوساً لتحديد الموقع.";
  CHROME_DICT["Location required"] = "الموقع مطلوب";
  CHROME_DICT["Drop a pin for the delivery location."] = "ضع دبوساً لموقع التسليم.";
  // new-customer modal: address → lat/lng detection + service-area fallback
  CHROME_DICT["Locate"] = "تحديد";
  CHROME_DICT["Street, district, city…"] = "الشارع، الحي، المدينة…";
  CHROME_DICT["The location is detected from this address automatically."] = "يتم تحديد الموقع من هذا العنوان تلقائياً.";
  CHROME_DICT["Service area"] = "منطقة الخدمة";
  CHROME_DICT["Select service area…"] = "اختر منطقة الخدمة…";
  CHROME_DICT["Search service areas…"] = "ابحث في مناطق الخدمة…";
  CHROME_DICT["Select a service area."] = "اختر منطقة خدمة.";
  CHROME_DICT["We couldn't place this address on the map — pick the service area it belongs to."] = "لم نتمكن من تحديد هذا العنوان على الخريطة — اختر منطقة الخدمة التابع لها.";
  CHROME_DICT["Service area required"] = "منطقة الخدمة مطلوبة";
  CHROME_DICT["Filters"] = "الفلاتر";
  CHROME_DICT["Clear all"] = "مسح الكل";
  CHROME_DICT["Done"] = "تم";
  CHROME_DICT["Search statuses…"] = "ابحث في الحالات…";
  CHROME_DICT["Search stores…"] = "ابحث في المتاجر…";
  CHROME_DICT["Select all on this page"] = "اختر كل ما في هذه الصفحة";
  CHROME_DICT["All service areas"] = "كل مناطق الخدمة";
  CHROME_DICT["Outside all areas"] = "خارج كل المناطق";
  CHROME_DICT["Outside service areas"] = "خارج مناطق الخدمة";
  // routing: per-stop drop-off (status default, operator-overridable)
  CHROME_DICT["Drop-off"] = "مكان التسليم";
  CHROME_DICT["Customer (deliver)"] = "العميل (تسليم)";
  CHROME_DICT["Hub"] = "المستودع";
  CHROME_DICT["Merchant store"] = "متجر التاجر";
  CHROME_DICT["Default"] = "افتراضي";
  CHROME_DICT["Changed"] = "مُعدّل";
  CHROME_DICT["from store"] = "من المتجر";
  CHROME_DICT["from hub"] = "من المستودع";
  CHROME_DICT["customer pickup"] = "استلام من العميل";
  // store form: delivered-then-returned refund fee
  CHROME_DICT["Delivered then returned (refund to store)"] = "تم التسليم ثم الإرجاع (استرداد للمتجر)";
  CHROME_DICT["Handling fee for orders already delivered to the customer that are returned and refunded back to the store."] = "رسوم مناولة للطلبات التي سُلّمت للعميل بالفعل ثم أُرجعت واستُردّت للمتجر.";
  // ── organization settings module (Tax / Localization / Theme & Branding) ───
  CHROME_DICT["Tax & VAT"] = "الضريبة";
  CHROME_DICT["Localization"] = "الإقليمية";
  CHROME_DICT["Theme & Branding"] = "المظهر والهوية";
  CHROME_DICT["Applied to every store & order"] = "يُطبّق على كل متجر وطلب";
  CHROME_DICT["Applied org-wide"] = "يُطبّق على مستوى المنظمة";
  CHROME_DICT["Set the value-added tax once for the organization. Stores no longer configure VAT individually."] = "حدّد ضريبة القيمة المضافة مرة واحدة للمنظمة. لم تعد المتاجر تضبط الضريبة بشكل فردي.";
  CHROME_DICT["VAT %"] = "نسبة الضريبة %";
  CHROME_DICT["Prices include VAT"] = "الأسعار تشمل الضريبة";
  CHROME_DICT["On = listed prices already contain VAT; off = VAT is added at checkout."] = "تشغيل = الأسعار المعروضة تشمل الضريبة؛ إيقاف = تُضاف الضريبة عند الدفع.";
  CHROME_DICT["Saved"] = "تم الحفظ";
  CHROME_DICT["Regional Defaults"] = "الإعدادات الإقليمية الافتراضية";
  CHROME_DICT["Default Country"] = "الدولة الافتراضية";
  CHROME_DICT["Default Currency"] = "العملة الافتراضية";
  CHROME_DICT["Forms across the system will automatically default to this country."] = "ستأخذ النماذج في جميع أنحاء النظام هذه الدولة كقيمة افتراضية تلقائياً.";
  CHROME_DICT["Shown next to every monetary value across the app. Preview:"] = "تُعرض بجوار كل قيمة مالية في التطبيق. معاينة:";
  CHROME_DICT["App Customization & Identity"] = "تخصيص التطبيق والهوية";
  CHROME_DICT["How the console looks & brands"] = "شكل الكونسول وهويته";
  CHROME_DICT["App Icon / Logo"] = "أيقونة التطبيق / الشعار";
  CHROME_DICT["Primary Theme Color"] = "لون السمة الأساسي";
  CHROME_DICT["Appearance"] = "المظهر";
  CHROME_DICT["Drag & drop, or browse"] = "اسحب وأفلت، أو تصفّح";
  CHROME_DICT["Drag & drop, or"] = "اسحب وأفلت، أو";
  CHROME_DICT["browse"] = "تصفّح";
  CHROME_DICT["PNG or SVG, square, at least 256×256."] = "PNG أو SVG، مربّعة، 256×256 على الأقل.";
  CHROME_DICT["Custom"] = "مخصص";
  CHROME_DICT["System"] = "النظام";
  CHROME_DICT["Light"] = "فاتح";
  CHROME_DICT["Dark"] = "داكن";
  /* Translate one subtree (default = whole body). Called on toggle AND by the
     MutationObserver for nodes injected after load (late sidebars, table
     re-renders, toasts, modals). Idempotent: originals are cached per-node. */
  function translateRoot(root) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while (node = walker.nextNode()) {
      var raw = node.nodeValue;
      var trimmed = raw.trim();
      if (!trimmed || !CHROME_DICT.hasOwnProperty(trimmed)) continue;
      if (node.__origText === undefined) node.__origText = raw;
      node.nodeValue = raw.replace(trimmed, CHROME_DICT[trimmed]);
    }
    var phEls = root.querySelectorAll ? root.querySelectorAll("input[placeholder], textarea[placeholder]") : [];
    Array.prototype.forEach.call(phEls, function (el) {
      var ph = el.getAttribute("placeholder");
      if (ph && CHROME_DICT.hasOwnProperty(ph)) {
        if (!el.__origPh) el.__origPh = ph;
        el.setAttribute("placeholder", CHROME_DICT[ph]);
      }
    });
  }
  function translatePage(code) {
    if (code === "en") {
      if (docEl.__translated) restoreOriginals();
      return;
    }
    if (code !== "ar") return; // only EN⇄AR auto-swap for now
    translateRoot(document.body);
    docEl.__translated = true;
    startObserver();
  }
  /* Observe DOM growth; while Arabic is active, translate freshly-added
     subtrees so dynamic content (sidebar, rows, toasts, dialogs) stays Arabic. */
  var _obs = null;
  function startObserver() {
    if (_obs || !window.MutationObserver) return;
    _obs = new MutationObserver(function (muts) {
      if (!docEl.__translated) return;
      muts.forEach(function (m) {
        Array.prototype.forEach.call(m.addedNodes, function (n) {
          if (n.nodeType === 1) translateRoot(n);else if (n.nodeType === 3 && n.nodeValue && CHROME_DICT.hasOwnProperty(n.nodeValue.trim())) {
            if (n.__origText === undefined) n.__origText = n.nodeValue;
            n.nodeValue = n.nodeValue.replace(n.nodeValue.trim(), CHROME_DICT[n.nodeValue.trim()]);
          }
        });
      });
    });
    _obs.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  function restoreOriginals() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    var node;
    while (node = walker.nextNode()) {
      if (node.__origText !== undefined) {
        node.nodeValue = node.__origText;
      }
    }
    Array.prototype.forEach.call(document.querySelectorAll("input[placeholder], textarea[placeholder]"), function (el) {
      if (el.__origPh) el.setAttribute("placeholder", el.__origPh);
    });
    docEl.__translated = false;
  }
  window.fleetTranslatePage = translatePage; // callable after dynamic re-render (e.g. sidebar injected late)
  function refreshToggles() {
    var theme = docEl.getAttribute("data-theme");
    Array.prototype.forEach.call(document.querySelectorAll('[data-action="theme"]'), function (b) {
      b.innerHTML = iconSvg(theme === "dark" ? "sun" : "moon", 18);
    });
    mountLangSwitchers();
  }

  /* Turn each [data-action="dir"] button into a language-switcher dropdown
     listing base + published languages, with the active one checked. */
  function mountLangSwitchers() {
    var act = activeLang();
    Array.prototype.forEach.call(document.querySelectorAll('[data-action="dir"]'), function (btn) {
      var wrap = btn.__langWrap;
      if (!wrap) {
        wrap = document.createElement("div");
        wrap.style.position = "relative";
        btn.parentNode.insertBefore(wrap, btn);
        wrap.appendChild(btn);
        btn.__langWrap = wrap;
        var menu = document.createElement("div");
        menu.className = "cs-menu lang-menu is-hidden";
        menu.setAttribute("data-popout", "");
        wrap.appendChild(menu);
        btn.__langMenu = menu;
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          buildLangMenu(btn.__langMenu);
          var willOpen = btn.__langMenu.classList.contains("is-hidden");
          closePopouts(willOpen ? btn.__langMenu : null);
          btn.__langMenu.classList.toggle("is-hidden");
        });
      }
      btn.innerHTML = '<span style="font-weight:700;font-size:12px;letter-spacing:.02em">' + act.code.toUpperCase() + '</span>';
      btn.setAttribute("aria-label", "Change language");
      btn.setAttribute("title", "Language · " + act.name);
    });
  }
  function buildLangMenu(menu) {
    var act = activeLang();
    var base = BASE_LANGS,
      pub = publishedLangs();
    function item(l) {
      var on = l.code === act.code;
      return '<div class="cs-menu__item lang-menu__item' + (on ? " is-active" : "") + '" data-lang="' + l.code + '">' + '<span class="lang-menu__code u-mono">' + l.code.toUpperCase() + '</span>' + '<span class="lang-menu__name">' + l.name + (l.native_name && l.native_name !== l.name ? ' <span class="lang-menu__native"' + (l.direction === "rtl" ? ' dir="rtl"' : "") + '>' + l.native_name + '</span>' : "") + '</span>' + (on ? '<span class="lang-menu__check">' + iconSvg("check", 15) + "</span>" : "") + "</div>";
    }
    var html = '<div class="lang-menu__label">Base</div>' + base.map(item).join("");
    if (pub.length) html += '<div class="lang-menu__label">Published</div>' + pub.map(item).join("");
    menu.innerHTML = html;
    Array.prototype.forEach.call(menu.querySelectorAll("[data-lang]"), function (it) {
      it.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.add("is-hidden");
        setLang(it.getAttribute("data-lang"));
      });
    });
  }

  /* ── Toasts ──────────────────────────────────────────────────── */
  function ensureRegion() {
    var r = document.querySelector(".fds-toast-region");
    if (!r) {
      r = document.createElement("div");
      r.className = "fds-toast-region";
      document.body.appendChild(r);
    }
    return r;
  }
  var TOAST_ICON = {
    success: "check-circle",
    danger: "alert-circle",
    warning: "alert-triangle",
    info: "info"
  };
  function toast(tone, title, msg) {
    tone = tone || "info";
    var region = ensureRegion();
    var el = document.createElement("div");
    el.className = "fds-toast fds-toast--" + tone;
    el.setAttribute("role", "status");
    el.innerHTML = '<span class="fds-toast__icon">' + iconSvg(TOAST_ICON[tone] || "info", 18) + "</span>" + '<div class="fds-toast__body"><div class="fds-toast__title"></div>' + (msg ? '<div class="fds-toast__msg"></div>' : "") + "</div>" + '<button class="fds-toast__close" aria-label="Dismiss">' + iconSvg("x", 15) + "</button>";
    el.querySelector(".fds-toast__title").textContent = title || "";
    if (msg) el.querySelector(".fds-toast__msg").textContent = msg;
    region.appendChild(el);
    var t = setTimeout(remove, 4000);
    function remove() {
      clearTimeout(t);
      el.style.transition = "opacity .2s";
      el.style.opacity = "0";
      setTimeout(function () {
        el.remove();
      }, 200);
    }
    el.querySelector(".fds-toast__close").addEventListener("click", remove);
  }
  window.fleetToast = toast;

  /* flash a toast set by the previous page (cross-page flow feedback) */
  function consumeFlash() {
    var raw;
    try {
      raw = localStorage.getItem("fleet_flash");
      localStorage.removeItem("fleet_flash");
    } catch (e) {}
    if (!raw) return;
    try {
      var f = JSON.parse(raw);
      toast(f.tone, f.title, f.msg);
    } catch (e) {}
  }
  window.fleetFlash = function (tone, title, msg) {
    setPref("fleet_flash", JSON.stringify({
      tone: tone,
      title: title,
      msg: msg
    }));
  };

  /* ── Expiry status (DERIVED, never user-set) ─────────────────────────────
     Computes a license/registration expiry state purely from the date vs today.
     The UI shows it live on add/edit and on the list + detail; the user never
     picks "expired" — it follows the date.
      BACKEND: this same state is computed on read, BUT a record also carries a
     persisted `is_expired` flag for fast list filtering. A scheduled job runs
     once daily at end-of-day (e.g. 23:59 cron) over every driver/vehicle whose
     expiry date has passed and whose `is_expired` is still false, and sets
     is_expired = true (and may emit a notification). So the flag is eventually
     consistent within a day; the live UI badge here is always exact. */
  function fleetExpiry(dateStr) {
    if (!dateStr) return {
      state: "none",
      label: "—",
      tone: "neutral",
      days: null
    };
    var d = new Date(String(dateStr) + "T00:00:00");
    if (isNaN(d.getTime())) return {
      state: "none",
      label: "—",
      tone: "neutral",
      days: null
    };
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    var days = Math.round((d - today) / 86400000);
    if (days < 0) return {
      state: "expired",
      label: "Expired",
      tone: "danger",
      days: days
    };
    if (days <= 30) return {
      state: "soon",
      label: "Expires in " + days + "d",
      tone: "warning",
      days: days
    };
    return {
      state: "valid",
      label: "Valid",
      tone: "success",
      days: days
    };
  }
  function fleetExpiryBadge(dateStr) {
    var e = fleetExpiry(dateStr);
    if (e.state === "none") return '<span class="fds-badge fds-badge--neutral">—</span>';
    return '<span class="fds-badge fds-badge--' + e.tone + '"><span class="fds-badge__dot"></span>' + e.label + "</span>";
  }
  window.fleetExpiry = fleetExpiry;
  window.fleetExpiryBadge = fleetExpiryBadge;

  /* ── Generic confirmation popup (reusable for any action) ────────────────
     fleetConfirm({ title, message, confirmLabel, tone:'danger'|'primary',
                    icon, onConfirm }) — injects one modal and reuses it. */
  function ensureConfirm() {
    var m = document.getElementById("fleetConfirmModal");
    if (m) return m;
    m = document.createElement("div");
    m.className = "fds-modal-scrim is-hidden";
    m.id = "fleetConfirmModal";
    m.innerHTML = '<div class="fds-modal fds-modal--sm" role="dialog" aria-modal="true">' + '<div class="fds-modal__head"><div class="u-row" style="gap:12px">' + '<span class="fds-modal__confirm-icon" id="fc-icon"></span>' + '<h2 class="fds-modal__title" id="fc-title"></h2></div>' + '<button class="fds-modal__close" data-close aria-label="Close">' + iconSvg("x", 18) + "</button></div>" + '<div class="fds-modal__body" id="fc-msg" style="color:var(--text-muted);font-size:13px;line-height:1.55"></div>' + '<div class="fds-modal__foot"><button class="fds-btn fds-btn--ghost" data-close id="fc-cancel">Cancel</button>' + '<button class="fds-btn fds-btn--primary" id="fc-ok"></button></div>' + "</div>";
    document.body.appendChild(m);
    return m;
  }
  function fleetConfirm(opts) {
    opts = opts || {};
    var m = ensureConfirm();
    var tone = opts.tone || "primary";
    var icon = opts.icon || (tone === "danger" ? "trash" : "alert-circle");
    var ic = document.getElementById("fc-icon");
    ic.className = "fds-modal__confirm-icon" + (tone === "danger" ? " fds-modal__confirm-icon--danger" : " fds-modal__confirm-icon--primary");
    ic.innerHTML = iconSvg(icon, 20);
    document.getElementById("fc-title").textContent = opts.title || "Are you sure?";
    document.getElementById("fc-msg").innerHTML = opts.message || "";
    var ok = document.getElementById("fc-ok");
    ok.className = "fds-btn " + (tone === "danger" ? "fds-btn--danger" : "fds-btn--primary");
    ok.textContent = opts.confirmLabel || "Confirm";
    closePopouts(null);
    m.classList.remove("is-hidden");
    ok.onclick = function () {
      m.classList.add("is-hidden");
      if (typeof opts.onConfirm === "function") opts.onConfirm();
    };
  }
  window.fleetConfirm = fleetConfirm;

  /* ── Interaction wiring ──────────────────────────────────────── */
  function closePopouts(except) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-popout]:not(.is-hidden)"), function (p) {
      if (p !== except) p.classList.add("is-hidden");
    });
  }
  function wire() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-action], [data-toggle], [data-open], [data-close]");

      // outside-click closes popouts
      if (!t || !t.hasAttribute("data-toggle") && !t.hasAttribute("data-action")) {
        if (!e.target.closest("[data-popout]")) closePopouts(null);
      }
      if (!t) return;
      var act = t.getAttribute("data-action");
      if (act === "theme") {
        setPref("fleet_theme", docEl.getAttribute("data-theme") === "dark" ? "light" : "dark");
        applyPrefs();
        return;
      }
      if (act === "collapse") {
        var sb = document.querySelector(".cs-sidebar");
        if (sb) {
          var c = sb.classList.toggle("cs-sidebar--collapsed");
          Array.prototype.forEach.call(sb.querySelectorAll(".fds-nav-item"), function (n) {
            n.classList.toggle("fds-nav-item--collapsed", c);
          });
        }
        return;
      }
      if (act === "ask-delete") {
        e.preventDefault();
        var dm = document.getElementById("deleteModal");
        if (dm) {
          var cb = dm.querySelector("[data-confirm]");
          if (cb) {
            cb.setAttribute("data-id", t.getAttribute("data-id") || "");
            cb.setAttribute("data-name", t.getAttribute("data-name") || "Item");
            if (t.getAttribute("data-entity")) cb.setAttribute("data-entity", t.getAttribute("data-entity"));
          }
          var nm = dm.querySelector("[data-del-name]");
          if (nm) nm.textContent = t.getAttribute("data-name") || "this driver";
          closePopouts(null);
          dm.classList.remove("is-hidden");
        }
        return;
      }
      if (act === "confirm-delete") {
        var name = t.getAttribute("data-name") || "Item";
        var ent = t.getAttribute("data-entity") || "Item";
        e.preventDefault();
        // remove the row if present, then close + toast
        var row = document.querySelector('[data-row="' + (t.getAttribute("data-id") || "") + '"]');
        if (row) row.remove();
        closeOverlay(t);
        toast("danger", ent + " deleted", name + " was removed.");
        return;
      }

      // toggle a target's visibility (menus, popovers, panels)
      var tog = t.getAttribute("data-toggle");
      if (tog) {
        e.preventDefault();
        e.stopPropagation();
        var target = document.querySelector(tog);
        if (target) {
          var willOpen = target.classList.contains("is-hidden");
          if (target.hasAttribute("data-popout")) closePopouts(willOpen ? target : null);
          target.classList.toggle("is-hidden");
        }
        return;
      }

      // open / close overlays (scrim + modal/drawer)
      var op = t.getAttribute("data-open");
      if (op) {
        e.preventDefault();
        var o = document.querySelector(op);
        if (o) o.classList.remove("is-hidden");
        return;
      }
      if (t.hasAttribute("data-close")) {
        e.preventDefault();
        closeOverlay(t);
        return;
      }
    });

    // segmented control (e.g. Map / Table)
    Array.prototype.forEach.call(document.querySelectorAll("[data-segment]"), function (seg) {
      seg.addEventListener("click", function (e) {
        var btn = e.target.closest("[data-seg]");
        if (!btn) return;
        var val = btn.getAttribute("data-seg");
        Array.prototype.forEach.call(seg.querySelectorAll("[data-seg]"), function (b) {
          b.classList.toggle("fds-segment__item--active", b === btn);
        });
        var scope = seg.getAttribute("data-segment");
        Array.prototype.forEach.call(document.querySelectorAll('[data-seg-panel][data-scope="' + scope + '"]'), function (p) {
          p.classList.toggle("is-hidden", p.getAttribute("data-seg-panel") !== val);
        });
      });
    });

    // simple underline tabs
    Array.prototype.forEach.call(document.querySelectorAll("[data-tabs]"), function (tabs) {
      tabs.addEventListener("click", function (e) {
        var tab = e.target.closest("[data-tab]");
        if (!tab) return;
        Array.prototype.forEach.call(tabs.querySelectorAll("[data-tab]"), function (b) {
          b.classList.toggle("fds-tab--active", b === tab);
        });
        // switch matching [data-tabpanel] panels. SCOPE FIX: only ever affect
        // panels inside this tab group's own [data-tabscope] (or, if none, the
        // tab strip's parent) — NEVER the whole document. A drawer tab group
        // without a scope used to fall back to `document`, so switching it
        // hid every [data-tabpanel] on the page (e.g. the Hub region), which
        // vanished on rapid tab switching. Confining the query prevents that.
        var val = tab.getAttribute("data-tab");
        var scope = tabs.closest("[data-tabscope]") || tabs.parentNode;
        if (!scope) return;
        Array.prototype.forEach.call(scope.querySelectorAll("[data-tabpanel]"), function (p) {
          p.classList.toggle("is-hidden", p.getAttribute("data-tabpanel") !== val);
        });
      });
    });
  }
  function closeOverlay(fromEl) {
    var o = fromEl.closest(".fds-modal-scrim, .fds-scrim, [data-overlay]");
    if (o) {
      o.classList.add("is-hidden");
      return;
    }
    var id = fromEl.getAttribute("data-close");
    if (id && id.charAt(0) === "#") {
      var n = document.querySelector(id);
      if (n) n.classList.add("is-hidden");
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    hydrateIcons(document);
    applyPrefs();
    wire();
    consumeFlash();
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/ui.js", error: String((e && e.message) || e) }); }

// pages/user-data.js
try { (() => {
/* ════════════════════════════════════════════════════════════════════════════
   USERS demo dataset — shared by users.html, user-view.html, user-edit.html,
   and role-view.html. In the real app: GET /api/v1/users.

   DATA MODEL — User
   table: users
     id            bigint  PK
     public_id     string  unique, "usr_xxxxxx"
     name          string  required
     email         string  required, unique
     type          enum    [admin, dispatcher, fleet, driver]
     role_id       bigint  FK → roles.id   (each user has ONE role)
     status        enum    [pending, active, suspended]  default pending
     password_set  boolean -- false until the invited user sets their own
     fleet_id      bigint  FK → fleets.id, nullable (only for type=fleet)
     deleted_at    datetime nullable  -- SOFT DELETE (row kept, hidden from lists)
     created_at    datetime

   STATUS lifecycle: pending (invited, not yet active) → active → suspended
     (temporarily blocked, reversible). Delete is a SOFT delete (sets deleted_at)
     so the record + its audit trail survive and can be restored.

   ACTIONS (endpoints):
     suspend / activate   PATCH /users/{id}/status
     send invitation      POST  /users/{id}/invite     (emails a set-password link)
     reset password       POST  /users/{id}/reset-password (to a generated default)
     soft delete          DELETE /users/{id}           (sets deleted_at)
   ════════════════════════════════════════════════════════════════════════════ */

var USER_STATUS = {
  pending: {
    t: "warning",
    l: "Pending"
  },
  active: {
    t: "success",
    l: "Active"
  },
  suspended: {
    t: "danger",
    l: "Suspended"
  }
};
var USER_TYPES = ["admin", "dispatcher", "fleet", "driver"];
var APP_USERS = [{
  id: "usr_a01",
  name: "Dana Owais",
  email: "dana.owais@swift.test",
  type: "admin",
  role_id: "role_super_admin",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_a02",
  name: "Yara Salem",
  email: "yara.salem@swift.test",
  type: "admin",
  role_id: "role_super_admin",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d01",
  name: "Mahmoud Adel",
  email: "mahmoud.adel@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d02",
  name: "Salma Hosny",
  email: "salma.hosny@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d03",
  name: "Tamer Fouad",
  email: "tamer.fouad@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d04",
  name: "Nadia Karam",
  email: "nadia.karam@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "pending",
  password_set: false,
  deleted_at: null
}, {
  id: "usr_d05",
  name: "Hani Mostafa",
  email: "hani.mostafa@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d06",
  name: "Rasha Lotfy",
  email: "rasha.lotfy@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d07",
  name: "Ihab Zaki",
  email: "ihab.zaki@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "suspended",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_d08",
  name: "Maha Saad",
  email: "maha.saad@swift.test",
  type: "dispatcher",
  role_id: "role_dispatcher",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_f01",
  name: "Karim Adel",
  email: "karim.adel@swift.test",
  type: "fleet",
  role_id: "role_fleet_manager",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_f02",
  name: "Lina Tarek",
  email: "lina.tarek@swift.test",
  type: "fleet",
  role_id: "role_fleet_manager",
  status: "active",
  password_set: true,
  deleted_at: null
}, {
  id: "usr_f03",
  name: "Sami Nabil",
  email: "sami.nabil@swift.test",
  type: "fleet",
  role_id: "role_fleet_manager",
  status: "pending",
  password_set: false,
  deleted_at: null
}, {
  id: "usr_v01",
  name: "Omar Halabi",
  email: "omar.halabi@swift.test",
  type: "admin",
  role_id: "role_viewer",
  status: "active",
  password_set: true,
  deleted_at: null
}];
function USERS_ALL() {
  return APP_USERS.filter(function (u) {
    return !u.deleted_at;
  });
}
function USER_BY_ID(id) {
  return APP_USERS.filter(function (u) {
    return u.id === id;
  })[0];
}
function USERS_BY_ROLE(roleId) {
  return USERS_ALL().filter(function (u) {
    return u.role_id === roleId;
  });
}
function USER_COUNT_BY_ROLE(roleId) {
  return USERS_BY_ROLE(roleId).length;
}

/* default password the backend resets to (then forces change on next login) */
var DEFAULT_PASSWORD = "Fleet@12345";
/* Status-aware action list — which actions are allowed for a user's status.
   active    → suspend, delete            (+ reset always)
   pending   → suspend, send invitation, delete
   suspended → activate, delete
   reset password is allowed in ALL states. */
function USER_ACTIONS(status) {
  var a = [];
  if (status === "suspended") a.push("activate");else a.push("suspend"); // active & pending
  if (status === "pending") a.push("invite");
  a.push("reset"); // always
  a.push("delete");
  return a;
}

/* generate a strong random password for create/edit + reset */
function GEN_PASSWORD() {
  var upper = "ABCDEFGHJKLMNPQRSTUVWXYZ",
    lower = "abcdefghijkmnpqrstuvwxyz",
    nums = "23456789",
    sym = "!@#$%&*";
  var all = upper + lower + nums + sym,
    out = "";
  out += upper[Math.floor(Math.random() * upper.length)];
  out += lower[Math.floor(Math.random() * lower.length)];
  out += nums[Math.floor(Math.random() * nums.length)];
  out += sym[Math.floor(Math.random() * sym.length)];
  for (var i = 0; i < 8; i++) out += all[Math.floor(Math.random() * all.length)];
  return out.split("").sort(function () {
    return Math.random() - 0.5;
  }).join("");
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "pages/user-data.js", error: String((e && e.message) || e) }); }

// showcase/app.jsx
try { (() => {
// Showcase shell — grouped sidebar nav, topbar with theme + RTL toggles,
// prev/next, hash routing. Renders live specimens from specimens.jsx.
const {
  useState,
  useEffect,
  useCallback
} = React;

/* ── Section registry ─────────────────────────────────────────── */
const SKY = "var(--primary)",
  GRN = "var(--status-online)",
  AMB = "var(--status-pending)";
const SECTIONS = [{
  id: "overview",
  group: "Start",
  nav: "Overview",
  bullet: SKY,
  eyebrow: "Overview",
  title: "Fleet SaaS Design System",
  sub: "Sky-on-night · 26 components · dark + light · RTL · WCAG AA",
  kind: "overview"
}, {
  id: "colors",
  group: "Foundations",
  nav: "Color",
  bullet: SKY,
  eyebrow: "Foundations",
  title: "Color",
  sub: "One semantic token set drives both themes; status is a color language",
  intro: "Components reference only <strong>semantic tokens</strong> — never raw hex. Sky-blue over deep desaturated navy is the identity; operational status maps to a fixed palette used identically everywhere. Toggle the theme in the top bar to watch every value flip.",
  demos: [{
    name: "Palette & status",
    tag: "tokens/theme.css",
    render: "ColorsDemo"
  }]
}, {
  id: "type",
  group: "Foundations",
  nav: "Typography",
  bullet: SKY,
  eyebrow: "Foundations",
  title: "Typography",
  sub: "Native system-ui · 14px base · tabular numerics for data",
  intro: "The stack is <strong>system-ui</strong> — offline-first and instant on dispatcher machines. IDs, money, coordinates and ETAs render in <strong>tabular monospace</strong> so they align and never jitter on live update.",
  demos: [{
    name: "Type ramp & numerics",
    tag: "tokens/typography.css",
    render: "TypeDemo"
  }]
}, {
  id: "spacing",
  group: "Foundations",
  nav: "Spacing & Elevation",
  bullet: SKY,
  eyebrow: "Foundations",
  title: "Spacing & Elevation",
  sub: "4px grid · logical properties · three shadow levels",
  intro: "A <strong>4px base grid</strong> in logical properties, so RTL mirrors automatically. Depth comes from <strong>surface steps</strong> and hairline borders — only truly floating things (popovers, drawers, modals) cast a shadow.",
  demos: [{
    name: "Grid, radii & elevation",
    tag: "tokens/spacing.css",
    render: "SpacingDemo"
  }]
}, {
  id: "icons",
  group: "Foundations",
  nav: "Icons",
  bullet: SKY,
  eyebrow: "Foundations",
  title: "Iconography",
  sub: "One Lucide-style line set · 24px grid · 1.8 stroke · currentColor",
  intro: "A single icon system shipped as <strong>inline SVG</strong> through the <code>Icon</code> component — no CDN font, no network dependency, color follows <code>currentColor</code>. No emoji, ever.",
  demos: [{
    name: "Icon set",
    tag: "components/core/Icon.jsx",
    render: "IconsDemo"
  }]
}, {
  id: "forms",
  group: "Components",
  nav: "Forms & Inputs",
  bullet: GRN,
  eyebrow: "Components",
  title: "Buttons, Inputs & Toggles",
  sub: "Variants, icon buttons, fields, validation, switches",
  intro: "The interactive primitives. Buttons are verbs in sentence case; fields carry inline validation; every control has a visible focus ring for AA + keyboard nav. <strong>These are live</strong> — click and type.",
  demos: [{
    name: "Buttons & Inputs",
    tag: "components/forms",
    render: "FormsDemo"
  }]
}, {
  id: "feedback",
  group: "Components",
  nav: "Feedback & Status",
  bullet: GRN,
  eyebrow: "Components",
  title: "Status, Badges & Feedback",
  sub: "StatusBadge, Badge, Toast, Skeleton",
  intro: "Operational status renders as a dot + cased label via <strong>StatusBadge</strong>, mapped to the fixed status palette. Toasts state the outcome and the object; skeletons cover loading.",
  demos: [{
    name: "Status & feedback",
    tag: "components/feedback",
    render: "FeedbackDemo"
  }]
}, {
  id: "data",
  group: "Components",
  nav: "Data & Tables",
  bullet: GRN,
  eyebrow: "Components",
  title: "Data Table & KPIs",
  sub: "Sortable DataTable, row actions · KPI chips · cards · pagination",
  intro: "The data layer is shaped to the product's <code>{ data, meta }</code> envelope. <strong>DataTable</strong> sorts, renders custom cells and row actions; <strong>Pagination</strong> reads <code>meta</code>. Click a sortable header.",
  demos: [{
    name: "Table, KPIs & pagination",
    tag: "components/data",
    render: "DataDemo"
  }]
}, {
  id: "overlay",
  group: "Components",
  nav: "Overlays",
  bullet: GRN,
  eyebrow: "Components",
  title: "Modals & Drawers",
  sub: "Drawer, Modal & ConfirmDialog — the floating surfaces",
  intro: "Drawers host create/edit forms (slide from the inline-end), modals handle focused tasks, and <strong>ConfirmDialog</strong> is the single destructive-confirm pattern. Open them below.",
  demos: [{
    name: "Overlay surfaces",
    tag: "components/overlay",
    render: "OverlayDemo"
  }]
}, {
  id: "nav",
  group: "Components",
  nav: "Tabs & Avatars",
  bullet: GRN,
  eyebrow: "Components",
  title: "Tabs, Avatars & Navigation",
  sub: "Tabs, SegmentedControl, Avatar + overlay triggers",
  intro: "Navigation primitives — tabs with counts, a segmented map/table control, and initials-based avatars (never emoji). Switch tabs and views below.",
  demos: [{
    name: "Tabs, segmented & avatars",
    tag: "components/navigation",
    render: "NavDemo"
  }]
}, {
  id: "console",
  group: "Surfaces",
  nav: "Operations Console",
  bullet: AMB,
  eyebrow: "Surfaces",
  title: "Operations Console",
  sub: "The flagship surface — the live command center",
  kind: "launch",
  launch: {
    href: "../ui_kits/console/index.html",
    desc: "The whole system composed: auth → app shell → map operations dashboard → drivers CRUD. Inside, toggle light/dark and LTR/RTL, switch orgs, and open the drivers template. Sign in with any credentials.",
    bullets: ["Collapsible grouped sidebar + org switcher", "Live map operations dashboard", "Drivers CRUD — the reusable template", "Theme & RTL toggles built in"],
    preview: "map"
  }
}, {
  id: "tpl-map",
  group: "Surfaces",
  nav: "Template · Map Ops",
  bullet: AMB,
  eyebrow: "Templates",
  title: "Map Operations template",
  sub: "A copy-ready starting point for the dispatch dashboard",
  kind: "launch",
  launch: {
    href: "../templates/map-operations/index.html",
    desc: "A self-contained template that consumes the design system through ds-base.js — the map operations dashboard, ready to fork into a new project.",
    bullets: ["Shell + map hero, pre-wired", "Loads tokens + bundle via one ds-base.js line", "Drop-in starting point"],
    preview: "map"
  }
}, {
  id: "tpl-console",
  group: "Surfaces",
  nav: "Template · Console Page",
  bullet: AMB,
  eyebrow: "Templates",
  title: "Console Page template",
  sub: "The shared CRUD scaffold — toolbar + DataTable + drawer",
  kind: "launch",
  launch: {
    href: "../templates/console-page/index.html",
    desc: "The reusable list/detail scaffold every CRUD screen is built from. Swap the columns and form fields to make a new resource page.",
    bullets: ["Toolbar · DataTable · drawer pattern", "Loading / empty / error states included", "Pagination wired to {data, meta}"],
    preview: "table"
  }
}];

/* ── Small UI bits ────────────────────────────────────────────── */
function Glyph({
  d
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "17",
    height: "17",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, d);
}
function SpecFrame({
  name,
  tag,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "spec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spec__bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "spec__name"
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "spec__path"
  }, tag)), /*#__PURE__*/React.createElement("div", {
    className: "spec__body"
  }, children));
}
function MapPreview({
  kind
}) {
  if (kind === "table") {
    return /*#__PURE__*/React.createElement("div", {
      className: "lp__prev lp__prev--table"
    }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("div", {
      className: "lp__trow",
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      className: "lp__dot",
      style: {
        background: ["var(--status-online)", "var(--status-busy)", "var(--status-offline)", "var(--status-pending)"][i]
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "lp__bar",
      style: {
        width: ["46%", "38%", "52%", "40%"][i]
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "lp__bar lp__bar--mono",
      style: {
        width: "22%"
      }
    }))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "lp__prev lp__prev--map"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lp__mk",
    style: {
      left: "28%",
      top: "40%",
      background: "var(--status-online)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lp__mk lp__mk--pulse",
    style: {
      left: "58%",
      top: "30%",
      background: "var(--status-busy)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lp__mk",
    style: {
      left: "70%",
      top: "62%",
      background: "var(--status-pending)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "lp__mk",
    style: {
      left: "42%",
      top: "70%",
      background: "var(--status-offline)"
    }
  }));
}
function LaunchCard({
  launch
}) {
  const {
    Icon
  } = window.FleetSass_c91b18;
  return /*#__PURE__*/React.createElement("div", {
    className: "launch"
  }, /*#__PURE__*/React.createElement("div", {
    className: "launch__preview"
  }, /*#__PURE__*/React.createElement(MapPreview, {
    kind: launch.preview
  })), /*#__PURE__*/React.createElement("div", {
    className: "launch__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "launch__desc"
  }, launch.desc), /*#__PURE__*/React.createElement("ul", {
    className: "launch__list"
  }, launch.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15
  }), /*#__PURE__*/React.createElement("span", null, b)))), /*#__PURE__*/React.createElement("a", {
    className: "launch__cta",
    href: launch.href,
    target: "_blank",
    rel: "noopener"
  }, "Open live surface", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7M9 7h8v8"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "launch__note"
  }, "Opens in a new tab \u2014 keeps its own navigation, theme & RTL controls.")));
}
function Overview({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__kicker"
  }, "Multi-tenant fleet & delivery management"), /*#__PURE__*/React.createElement("h1", {
    className: "hero__title"
  }, "A logistics command center, made ", /*#__PURE__*/React.createElement("em", null, "intentional and consistent"), "."), /*#__PURE__*/React.createElement("p", {
    className: "hero__lede"
  }, "Fleet SaaS keeps the product's ", /*#__PURE__*/React.createElement("b", null, "sky-on-night"), " identity but tightens it into an accessible color scale, semantic tokens driving both dark and light themes, full RTL support, and WCAG AA throughout \u2014 Linear/Vercel-dashboard polish, never a generic admin template.")), /*#__PURE__*/React.createElement("div", {
    className: "facts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fact__v"
  }, "26"), /*#__PURE__*/React.createElement("div", {
    className: "fact__l"
  }, "React components, each with a props contract & usage note")), /*#__PURE__*/React.createElement("div", {
    className: "fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fact__v"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "fact__l"
  }, "Themes from one semantic token set \u2014 dark hero, light peer")), /*#__PURE__*/React.createElement("div", {
    className: "fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fact__v"
  }, "RTL"), /*#__PURE__*/React.createElement("div", {
    className: "fact__l"
  }, "Arabic mirrors automatically via logical properties")), /*#__PURE__*/React.createElement("div", {
    className: "fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fact__v"
  }, "AA"), /*#__PURE__*/React.createElement("div", {
    className: "fact__l"
  }, "Contrast, visible focus rings & keyboard nav, baseline"))), /*#__PURE__*/React.createElement("div", {
    className: "sectionhdr"
  }, "Design principles"), /*#__PURE__*/React.createElement("div", {
    className: "princ"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr__sw",
    style: {
      background: "var(--primary)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "pr__t"
  }, "Sky on night, used with restraint"), /*#__PURE__*/React.createElement("p", {
    className: "pr__d"
  }, "The blue marks the primary action, active nav, focus and selection \u2014 not decoration. Surfaces are deep desaturated navy; no purple gradients, ever."))), /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr__sw",
    style: {
      background: "var(--status-online)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "pr__t"
  }, "Status is a color language"), /*#__PURE__*/React.createElement("p", {
    className: "pr__d"
  }, "Online = green, busy/en-route = blue, offline = grey, pending = amber, error = red. Always a dot + cased label, identical everywhere."))), /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr__sw",
    style: {
      background: "var(--text-subtle)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "pr__t"
  }, "Borders over shadows"), /*#__PURE__*/React.createElement("p", {
    className: "pr__d"
  }, "Structure comes from hairline borders and surface steps. Only truly floating things \u2014 popovers, drawers, modals, toasts \u2014 cast a shadow."))), /*#__PURE__*/React.createElement("div", {
    className: "pr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pr__sw",
    style: {
      background: "var(--status-pending)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "pr__t"
  }, "Calm, operational voice"), /*#__PURE__*/React.createElement("p", {
    className: "pr__d"
  }, "Reads like a control room: short declarative labels, sentence case, tabular numerics for data, no emoji, bilingual EN/AR.")))), /*#__PURE__*/React.createElement("div", {
    className: "sectionhdr"
  }, "Walk the system"), /*#__PURE__*/React.createElement("p", {
    className: "page__intro",
    style: {
      marginBottom: 0
    }
  }, "Use the sidebar to move end to end \u2014 ", /*#__PURE__*/React.createElement("b", null, "Foundations"), " (color, type, spacing, icons), the live ", /*#__PURE__*/React.createElement("b", null, "Components"), ", and the composed ", /*#__PURE__*/React.createElement("b", null, "Surfaces"), ": the interactive Operations Console and two copy-ready templates. Use \u2190 / \u2192 or the arrows above to step through. Try the ", /*#__PURE__*/React.createElement("b", null, "theme"), " and ", /*#__PURE__*/React.createElement("b", null, "\u0639/EN"), " toggles \u2014 every specimen re-themes and mirrors."));
}

/* ── App ──────────────────────────────────────────────────────── */
function App() {
  const idx = id => SECTIONS.findIndex(s => s.id === id);
  const initial = () => {
    let h = location.hash.slice(1);
    if (h && idx(h) >= 0) return h;
    try {
      h = localStorage.getItem("fleet_showcase_section");
    } catch (e) {}
    return h && idx(h) >= 0 ? h : "overview";
  };
  const [cur, setCur] = useState(initial);
  const [theme, setTheme] = useState("dark");
  const [dir, setDir] = useState("ltr");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.lang = dir === "rtl" ? "ar" : "en";
  }, [dir]);
  const go = useCallback(id => {
    if (idx(id) < 0) id = "overview";
    setCur(id);
    if (location.hash.slice(1) !== id) history.pushState(null, "", "#" + id);
    try {
      localStorage.setItem("fleet_showcase_section", id);
    } catch (e) {}
    const sc = document.getElementById("scroll");
    if (sc) sc.scrollTop = 0;
  }, []);
  useEffect(() => {
    const onPop = () => {
      const h = location.hash.slice(1);
      if (h && idx(h) >= 0) setCur(h);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const step = useCallback(d => {
    const i = idx(cur),
      n = Math.min(SECTIONS.length - 1, Math.max(0, i + d));
    if (n !== i) go(SECTIONS[n].id);
  }, [cur, go]);
  useEffect(() => {
    const onKey = e => {
      if (e.target.matches("input, textarea, select")) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(dir === "rtl" ? -1 : 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(dir === "rtl" ? 1 : -1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, dir]);
  const s = SECTIONS[idx(cur)] || SECTIONS[0];
  const i = idx(cur);

  // build grouped nav
  const groups = [];
  SECTIONS.forEach(x => {
    let g = groups.find(gg => gg.label === x.group);
    if (!g) {
      g = {
        label: x.group,
        items: []
      };
      groups.push(g);
    }
    g.items.push(x);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement("aside", {
    className: "side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "side__brand"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "150",
    height: "32",
    viewBox: "0 0 120 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "fl",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#61a0e8"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#1c6cc7"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "2",
    width: "28",
    height: "28",
    rx: "7",
    fill: "url(#fl)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21 L9 12 a5 5 0 0 1 10 0",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "12",
    r: "2.4",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("text", {
    x: "38",
    y: "21",
    fontFamily: "system-ui, sans-serif",
    fontSize: "16",
    fontWeight: "700",
    fill: "#e6edf6",
    letterSpacing: "0.2"
  }, "Fleet", /*#__PURE__*/React.createElement("tspan", {
    fill: "#61a0e8"
  }, "SaaS")))), /*#__PURE__*/React.createElement("nav", {
    className: "side__nav"
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    className: "navgroup",
    key: g.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "navgroup__label"
  }, g.label), g.items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "navitem" + (it.id === cur ? " is-active" : ""),
    style: {
      "--bullet": it.bullet
    },
    onClick: () => go(it.id)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", null, it.nav))))), /*#__PURE__*/React.createElement("div", {
    className: "side__foot"
  }, "Design system showcase \xB7 v1"))), /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar__eyebrow"
  }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "topbar__title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "topbar__sub"
  }, s.sub)), /*#__PURE__*/React.createElement("div", {
    className: "topbar__tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tgl",
    onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    title: "Toggle theme"
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: theme === "dark" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
    })) : /*#__PURE__*/React.createElement("path", {
      d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
    })
  }), /*#__PURE__*/React.createElement("span", null, theme === "dark" ? "Light" : "Dark")), /*#__PURE__*/React.createElement("button", {
    className: "tgl",
    onClick: () => setDir(dir === "ltr" ? "rtl" : "ltr"),
    title: "Toggle direction"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, dir === "rtl" ? "EN" : "ع")), /*#__PURE__*/React.createElement("div", {
    className: "topbar__pager"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pgbtn",
    disabled: i <= 0,
    onClick: () => step(-1),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M15 18l-6-6 6-6"
    })
  })), /*#__PURE__*/React.createElement("button", {
    className: "pgbtn",
    disabled: i >= SECTIONS.length - 1,
    onClick: () => step(1),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement(Glyph, {
    d: /*#__PURE__*/React.createElement("path", {
      d: "M9 18l6-6-6-6"
    })
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "scroll",
    id: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page"
  }, s.kind === "overview" && /*#__PURE__*/React.createElement(Overview, {
    go: go
  }), s.kind === "launch" && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "page__intro"
  }, s.intro || s.sub), /*#__PURE__*/React.createElement(LaunchCard, {
    launch: s.launch
  })), !s.kind && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "page__intro",
    dangerouslySetInnerHTML: {
      __html: s.intro
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "specs"
  }, s.demos.map(d => {
    const Demo = window[d.render];
    return /*#__PURE__*/React.createElement(SpecFrame, {
      key: d.name,
      name: d.name,
      tag: d.tag
    }, Demo ? /*#__PURE__*/React.createElement(Demo, null) : null);
  })))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "showcase/app.jsx", error: String((e && e.message) || e) }); }

// showcase/specimens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Live design-system specimens — foundations + component demos.
// All read window.FleetSass_c91b18 at render time and use semantic tokens,
// so they re-theme with [data-theme] and mirror under dir="rtl".

/* resolve a CSS custom property to a hex string for the spec labels */
function _resolveHex(expr) {
  const probe = document.createElement("span");
  probe.style.color = expr;
  probe.style.display = "none";
  document.body.appendChild(probe);
  const rgb = getComputedStyle(probe).color;
  document.body.removeChild(probe);
  const m = rgb.match(/\d+/g);
  if (!m) return "";
  return "#" + m.slice(0, 3).map(n => (+n).toString(16).padStart(2, "0")).join("");
}
function Swatch({
  varExpr,
  hex,
  label,
  sub,
  textDark
}) {
  const tone = textDark ? "rgba(8,16,28,.9)" : "rgba(255,255,255,.94)";
  const toneSub = textDark ? "rgba(8,16,28,.62)" : "rgba(255,255,255,.66)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 0",
      minWidth: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 76,
      borderRadius: "var(--radius)",
      background: varExpr,
      border: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "8px 10px",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      color: tone
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontFamily: "var(--font-mono)",
      color: toneSub
    }
  }, sub)));
}
function SwatchRow({
  label,
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "demo-lbl",
    style: {
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Swatch, _extends({
    key: i
  }, it)))));
}
function ColorsDemo() {
  const brand = [{
    varExpr: "#a9c8f1",
    hex: "a9c8f1",
    label: "200",
    sub: "a9c8f1",
    textDark: true
  }, {
    varExpr: "#61a0e8",
    hex: "61a0e8",
    label: "400",
    sub: "61a0e8"
  }, {
    varExpr: "#3485e2",
    hex: "3485e2",
    label: "500 · --primary",
    sub: "3485e2"
  }, {
    varExpr: "#1c6cc7",
    hex: "1c6cc7",
    label: "600",
    sub: "1c6cc7"
  }, {
    varExpr: "#155aa6",
    hex: "155aa6",
    label: "700",
    sub: "155aa6"
  }, {
    varExpr: "#0f3a6a",
    hex: "0f3a6a",
    label: "900",
    sub: "0f3a6a"
  }];
  const tok = (name, label) => ({
    varExpr: `var(${name})`,
    label,
    sub: _resolveHex(`var(${name})`)
  });
  const surfaces = [tok("--bg", "--bg"), tok("--surface", "--surface"), tok("--surface-2", "--surface-2"), tok("--surface-3", "--surface-3")];
  const semantic = [tok("--primary", "--primary"), tok("--success", "--success"), tok("--warning", "--warning"), tok("--danger", "--danger"), tok("--info", "--info")];
  const status = [{
    k: "online",
    c: "--status-online"
  }, {
    k: "busy / en-route",
    c: "--status-busy"
  }, {
    k: "offline / idle",
    c: "--status-offline"
  }, {
    k: "pending",
    c: "--status-pending"
  }, {
    k: "error / cancelled",
    c: "--status-error"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SwatchRow, {
    label: "Brand \xB7 Sky ramp \u2014 used with restraint",
    items: brand
  }), /*#__PURE__*/React.createElement(SwatchRow, {
    label: "Surfaces \u2014 depth by step, back to front",
    items: surfaces
  }), /*#__PURE__*/React.createElement(SwatchRow, {
    label: "Semantic roles",
    items: semantic
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "demo-lbl",
    style: {
      marginBottom: 10
    }
  }, "Status \u2014 the operational color language"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 18
    }
  }, status.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.k,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: 999,
      background: `var(${s.c})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text)"
    }
  }, s.k))))));
}
function TypeDemo() {
  const rows = [{
    m: "2xl · 30 / 700",
    s: {
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: "-.01em"
    },
    t: "1,284 active orders"
  }, {
    m: "xl · 24 / 600",
    s: {
      fontSize: 24,
      fontWeight: 600
    },
    t: "Operations overview"
  }, {
    m: "lg · 20 / 700",
    s: {
      fontSize: 20,
      fontWeight: 700
    },
    t: "Drivers"
  }, {
    m: "md · 16 / 500",
    s: {
      fontSize: 16,
      fontWeight: 500
    },
    t: "Assign a driver & vehicle"
  }, {
    m: "base · 14 / 400",
    s: {
      fontSize: 14
    },
    t: "The map is the hero of the dispatch console."
  }, {
    m: "sm · 13 / 400",
    s: {
      fontSize: 13,
      color: "var(--text-muted)"
    },
    t: "Dense table cells and helper text"
  }];
  return /*#__PURE__*/React.createElement("div", null, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 16,
      padding: "7px 0",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 132,
      flexShrink: 0,
      fontSize: 11,
      fontFamily: "var(--font-mono)",
      color: "var(--text-muted)"
    }
  }, r.m), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text)",
      whiteSpace: "nowrap",
      ...r.s
    }
  }, r.t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "14px 16px",
      background: "var(--surface-2)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "demo-lbl",
    style: {
      marginBottom: 8
    }
  }, "Tabular monospace \u2014 IDs, money, coordinates, ETAs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "6px 26px",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: 14,
      color: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "drv_a1b2c3"), /*#__PURE__*/React.createElement("span", null, "SAR 1,240.00"), /*#__PURE__*/React.createElement("span", null, "24.7136, 46.6753"), /*#__PURE__*/React.createElement("span", null, "12:48 \xB7 ETA 6m"))));
}
function SpacingDemo() {
  const steps = [["--space-2", "4"], ["--space-3", "8"], ["--space-4", "12"], ["--space-5", "16"], ["--space-6", "20"], ["--space-7", "24"], ["--space-8", "32"], ["--space-9", "48"]];
  const radii = [["--radius-sm", "6 · controls"], ["--radius", "8 · default"], ["--radius-lg", "12 · modals"], ["--radius-full", "pill · badges"]];
  const shadows = [["--shadow-sm", "Resting card"], ["--shadow-md", "Dropdown / popover"], ["--shadow-lg", "Modal / dialog"]];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "demo-lbl",
    style: {
      marginBottom: 10
    }
  }, "4px base grid \u2014 logical, mirrors in RTL"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 12,
      marginBottom: 22
    }
  }, steps.map(([v, px]) => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `var(${v})`,
      height: `var(${v})`,
      background: "var(--primary)",
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontFamily: "var(--font-mono)",
      color: "var(--text-muted)"
    }
  }, px)))), /*#__PURE__*/React.createElement("div", {
    className: "demo-lbl",
    style: {
      marginBottom: 10
    }
  }, "Corner radii"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 22,
      flexWrap: "wrap"
    }
  }, radii.map(([v, lbl]) => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 78,
      height: 48,
      background: "var(--surface-3)",
      border: "1px solid var(--border-strong)",
      borderRadius: `var(${v})`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 6,
      fontSize: 10.5,
      fontFamily: "var(--font-mono)",
      color: "var(--text-muted)"
    }
  }, lbl)))), /*#__PURE__*/React.createElement("div", {
    className: "demo-lbl",
    style: {
      marginBottom: 10
    }
  }, "Elevation \u2014 three levels, used only when floating"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      flexWrap: "wrap"
    }
  }, shadows.map(([v, lbl]) => /*#__PURE__*/React.createElement("div", {
    key: v,
    style: {
      width: 150,
      padding: "16px 14px",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      boxShadow: `var(${v})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontFamily: "var(--font-mono)",
      color: "var(--text-subtle)",
      marginTop: 4
    }
  }, v)))));
}
function IconsDemo() {
  const {
    Icon
  } = window.FleetSass_c91b18;
  const names = ["grid", "truck", "user", "users", "map-pin", "package", "layers", "navigation", "crosshair", "phone", "search", "plus", "check", "edit", "trash", "eye", "filter", "bell", "settings", "key", "shield", "building", "download", "upload", "log-out", "sun", "moon", "check-circle", "alert-triangle", "info", "inbox"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(72px, 1fr))",
      gap: 6
    }
  }, names.map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    title: n,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "12px 2px",
      borderRadius: "var(--radius-sm)",
      color: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: "var(--text-subtle)"
    }
  }, n))));
}
function FormsDemo() {
  const {
    Button,
    IconButton,
    Input,
    Select,
    Checkbox,
    Switch,
    FormField,
    Icon
  } = window.FleetSass_c91b18;
  const [on, setOn] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Button variants"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  }, "New Driver"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Secondary"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Ghost"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      size: 16
    })
  }, "Delete"), /*#__PURE__*/React.createElement(Button, {
    variant: "subtle"
  }, "Subtle"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    loading: true
  }, "Saving"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: true
  }, "Disabled")), /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Icon buttons & toggles"), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zoom-in"
    }),
    label: "Zoom in"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "layers"
    }),
    label: "Layers",
    active: true
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "crosshair"
    }),
    label: "Locate",
    variant: "ghost"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Show offline",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Drivers layer",
    checked: on,
    onChange: e => setOn(e.target.checked)
  })), /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Fields & validation"), /*#__PURE__*/React.createElement("div", {
    className: "demo-col"
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search drivers\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "demo-col"
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Status"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select status\u2026",
    options: [{
      value: "online",
      label: "Online"
    }, {
      value: "busy",
      label: "Busy"
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "demo-col"
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Phone",
    required: true,
    error: "Phone is required"
  }, /*#__PURE__*/React.createElement(Input, {
    invalid: true,
    placeholder: "+966\u2026"
  })))));
}
function FeedbackDemo() {
  const {
    StatusBadge,
    Badge,
    Toast,
    Skeleton
  } = window.FleetSass_c91b18;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Status badges (domain status \u2192 tone)"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "online"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "busy"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "en-route"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "pending"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "offline"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "cancelled"
  })), /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Badges & tags"), /*#__PURE__*/React.createElement(Badge, {
    tone: "primary"
  }, "Beta"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Active"), /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "3 pending"), /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "API"), /*#__PURE__*/React.createElement(Badge, {
    solid: true
  }, "SLA"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "v2.4")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Toasts"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Driver saved",
    message: "Layla Hassan was created.",
    onClose: () => {}
  }), /*#__PURE__*/React.createElement(Toast, {
    tone: "danger",
    title: "Couldn't save",
    message: "Phone number is invalid.",
    onClose: () => {}
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Loading skeleton"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "row"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    width: "70%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "text",
    width: "45%"
  })))));
}
function DataDemo() {
  const {
    DataTable,
    KpiChip,
    Card,
    Pagination,
    StatusBadge,
    IconButton,
    Icon
  } = window.FleetSass_c91b18;
  const rows = [{
    id: "drv_a1b2c3",
    name: "Layla Hassan",
    phone: "+966 50 112 4471",
    vehicle: "Hilux · 4821",
    status: "online"
  }, {
    id: "drv_d4e5f6",
    name: "Omar Khaled",
    phone: "+966 55 904 2210",
    vehicle: "Canter · 1190",
    status: "busy"
  }, {
    id: "drv_g7h8i9",
    name: "Sara Nasser",
    phone: "+966 53 778 1002",
    vehicle: "—",
    status: "offline"
  }, {
    id: "drv_j1k2l3",
    name: "Yousef Amir",
    phone: "+966 56 220 7781",
    vehicle: "Hiace · 7732",
    status: "en-route"
  }];
  const [sort, setSort] = React.useState({
    key: "name",
    dir: "asc"
  });
  const cols = [{
    key: "name",
    label: "Name",
    sortable: true
  }, {
    key: "id",
    label: "ID",
    mono: true
  }, {
    key: "phone",
    label: "Phone",
    mono: true
  }, {
    key: "vehicle",
    label: "Vehicle"
  }, {
    key: "status",
    label: "Status",
    render: r => /*#__PURE__*/React.createElement(StatusBadge, {
      status: r.status
    })
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(KpiChip, {
    label: "Active orders",
    value: "128",
    dotColor: "var(--status-busy)"
  }), /*#__PURE__*/React.createElement(KpiChip, {
    label: "Unassigned",
    value: "9",
    dotColor: "var(--status-pending)",
    delta: "+3",
    deltaDir: "up"
  }), /*#__PURE__*/React.createElement(KpiChip, {
    label: "Drivers online",
    value: "42",
    dotColor: "var(--status-online)"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Drivers",
    flush: true,
    footer: /*#__PURE__*/React.createElement(Pagination, {
      page: 1,
      pages: 6,
      total: 214,
      pageSize: 4,
      onPageChange: () => {}
    })
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: cols,
    rows: rows,
    sort: sort,
    onSort: setSort,
    renderActions: () => /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      size: "sm",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "more-vertical"
      }),
      label: "Row actions"
    })
  })));
}
function OverlayDemo() {
  const {
    Button,
    Drawer,
    Modal,
    ConfirmDialog,
    FormField,
    Input,
    Select,
    StatusBadge,
    Icon
  } = window.FleetSass_c91b18;
  const [drawer, setDrawer] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Overlay surfaces \u2014 open them"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    }),
    onClick: () => setDrawer(true)
  }, "New Driver (Drawer)"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setModal(true)
  }, "Save Service Area (Modal)"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    onClick: () => setConfirm(true)
  }, "Delete (Confirm)")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: "var(--text-muted)",
      marginTop: 14,
      maxWidth: 560,
      lineHeight: 1.55
    }
  }, "Drawers host create/edit forms (slide from the inline-end). Modals handle focused tasks. ConfirmDialog is the single destructive-confirm pattern \u2014 never a native ", /*#__PURE__*/React.createElement("code", null, "confirm()"), "."), /*#__PURE__*/React.createElement(Drawer, {
    open: drawer,
    onClose: () => setDrawer(false),
    title: "New Driver",
    subtitle: "No vehicle assigned",
    headerExtra: /*#__PURE__*/React.createElement(StatusBadge, {
      status: "offline"
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDrawer(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, null, "Create Driver"))
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Full name"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Phone",
    required: true,
    error: "Phone is required"
  }, /*#__PURE__*/React.createElement(Input, {
    invalid: true,
    placeholder: "+966\u2026"
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: modal,
    onClose: () => setModal(false),
    title: "Save Service Area",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setModal(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, null, "Confirm & Save"))
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Service area name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "e.g. Riyadh Central"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Type"
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "Select type\u2026",
    options: [{
      value: "zone",
      label: "Zone"
    }, {
      value: "area",
      label: "Service area"
    }]
  }))), /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: confirm,
    title: "Delete service area?",
    message: "Orders pricing in this area will fall back to the default rate.",
    confirmLabel: "Delete",
    onCancel: () => setConfirm(false),
    onConfirm: () => setConfirm(false)
  }));
}
function NavDemo() {
  const {
    Tabs,
    SegmentedControl,
    Avatar,
    Button,
    Drawer,
    ConfirmDialog,
    FormField,
    Input,
    StatusBadge,
    Icon
  } = window.FleetSass_c91b18;
  const [tab, setTab] = React.useState("details");
  const [view, setView] = React.useState("map");
  const [drawer, setDrawer] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Tabs & segmented control"), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "details",
      label: "Details",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "info",
        size: 15
      })
    }, {
      value: "orders",
      label: "Orders",
      count: 4
    }]
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: view,
    onChange: setView,
    items: [{
      value: "map",
      label: "Map",
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 14
      })
    }, {
      value: "table",
      label: "Table",
      count: 1
    }]
  })), /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Avatars \u2014 initials, never emoji"), /*#__PURE__*/React.createElement(Avatar, {
    name: "Layla Hassan"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Omar Khaled",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "Acme Logistics",
    square: true,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "demo-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "demo-lbl"
  }, "Overlay triggers"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setDrawer(true)
  }, "Open drawer"), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    onClick: () => setConfirm(true)
  }, "Delete (confirm)")), /*#__PURE__*/React.createElement(Drawer, {
    open: drawer,
    onClose: () => setDrawer(false),
    title: "Edit Driver",
    subtitle: "Vehicle assigned",
    headerExtra: /*#__PURE__*/React.createElement(StatusBadge, {
      status: "online"
    }),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDrawer(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, null, "Save"))
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Layla Hassan"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(FormField, {
    label: "Phone"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "+966 50 112 4471"
  }))), /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: confirm,
    title: "Delete driver?",
    message: "This removes Layla Hassan and unassigns their vehicle. This can't be undone.",
    confirmLabel: "Delete driver",
    onCancel: () => setConfirm(false),
    onConfirm: () => setConfirm(false)
  }));
}
Object.assign(window, {
  ColorsDemo,
  TypeDemo,
  SpacingDemo,
  IconsDemo,
  FormsDemo,
  FeedbackDemo,
  DataDemo,
  OverlayDemo,
  NavDemo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "showcase/specimens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/AppShell.jsx
try { (() => {
// App shell — topbar + collapsible grouped sidebar + content outlet.
// Holds the theme toggle, RTL toggle, org switcher and user menu.
const NAV_GROUPS = [{
  label: 'Fleet-Ops',
  items: [{
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'grid'
  }]
}, {
  label: 'Resources',
  items: [{
    key: 'drivers',
    label: 'Drivers',
    icon: 'user'
  }, {
    key: 'vehicles',
    label: 'Vehicles',
    icon: 'truck'
  }, {
    key: 'fleets',
    label: 'Fleets',
    icon: 'grid'
  }, {
    key: 'vendors',
    label: 'Vendors',
    icon: 'package'
  }, {
    key: 'areas',
    label: 'Areas & Zones',
    icon: 'map'
  }, {
    key: 'contacts',
    label: 'Contacts',
    icon: 'users'
  }, {
    key: 'places',
    label: 'Places',
    icon: 'map-pin'
  }]
}, {
  label: 'Access',
  items: [{
    key: 'users',
    label: 'Users',
    icon: 'users'
  }, {
    key: 'roles',
    label: 'Roles',
    icon: 'shield'
  }, {
    key: 'settings',
    label: 'Settings',
    icon: 'settings'
  }, {
    key: 'developers',
    label: 'Developers',
    icon: 'key'
  }]
}];
function AppShell({
  route,
  onNavigate,
  theme,
  onToggleTheme,
  dir,
  onToggleDir,
  onLogout,
  children
}) {
  const {
    Icon,
    IconButton,
    Input,
    Avatar,
    Badge
  } = window.FleetSass_c91b18;
  const [collapsed, setCollapsed] = React.useState(false);
  const [orgOpen, setOrgOpen] = React.useState(false);
  const orgs = ['Swift Logistics', 'Acme Delivery Co.', 'Cedar Freight'];
  const [org, setOrg] = React.useState(orgs[0]);
  React.useEffect(() => {
    const close = () => setOrgOpen(false);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "console-root"
  }, /*#__PURE__*/React.createElement("header", {
    className: "cs-topbar"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "panel-left"
    }),
    label: collapsed ? 'Expand sidebar' : 'Collapse sidebar',
    onClick: () => setCollapsed(!collapsed)
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "Fleet SaaS"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "fds-orgbadge",
    onClick: () => setOrgOpen(!orgOpen)
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-orgbadge__sq"
  }, org.charAt(0)), /*#__PURE__*/React.createElement("span", {
    className: "fds-orgbadge__name"
  }, org), /*#__PURE__*/React.createElement("span", {
    className: "fds-orgbadge__caret"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14
  }))), orgOpen && /*#__PURE__*/React.createElement("div", {
    className: "cs-orgmenu"
  }, orgs.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    className: "cs-orgmenu__item",
    onClick: () => {
      setOrg(o);
      setOrgOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-orgbadge__sq"
  }, o.charAt(0)), o)))), /*#__PURE__*/React.createElement("div", {
    className: "cs-topbar__spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-globalsearch"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search orders, drivers, places\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-topbar__right"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: theme === 'dark' ? 'sun' : 'moon'
    }),
    label: "Toggle theme",
    onClick: onToggleTheme
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 13
      }
    }, dir === 'rtl' ? 'EN' : 'ع'),
    label: "Toggle direction",
    onClick: onToggleDir
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "bell"
    }),
    label: "Notifications"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      insetInlineEnd: 4,
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--danger)',
      border: '1.5px solid var(--surface-2)'
    }
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Dispatcher One",
    size: "sm"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-body"
  }, /*#__PURE__*/React.createElement("nav", {
    className: 'cs-sidebar' + (collapsed ? ' cs-sidebar--collapsed' : '')
  }, NAV_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
    className: "cs-navgroup",
    key: g.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-navgroup__label"
  }, collapsed ? '·' : g.label), g.items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.key,
    className: 'fds-nav-item' + (route === it.key ? ' fds-nav-item--active' : '') + (collapsed ? ' fds-nav-item--collapsed' : ''),
    onClick: () => onNavigate(it.key),
    title: collapsed ? it.label : undefined,
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter') onNavigate(it.key);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-nav-item__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "fds-nav-item__label"
  }, it.label))))), /*#__PURE__*/React.createElement("div", {
    className: "cs-sidebar__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: 'fds-nav-item' + (collapsed ? ' fds-nav-item--collapsed' : ''),
    onClick: onLogout,
    role: "button",
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === 'Enter') onLogout();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fds-nav-item__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "log-out",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    className: "fds-nav-item__label"
  }, "Sign out")))), /*#__PURE__*/React.createElement("main", {
    className: "cs-content"
  }, children)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Dashboard.jsx
try { (() => {
// Dashboard — the map operations view. Map is the hero with a floating
// toolbar, layer toggles + counts, an Orders KPI panel, a bottom scope
// drawer, and a Map/Table segmented switch.
function Dashboard({
  notify
}) {
  const {
    Icon,
    IconButton,
    Button,
    Input,
    Switch,
    SegmentedControl,
    Tabs,
    StatusBadge,
    KpiChip,
    Badge,
    EmptyState
  } = window.FleetSass_c91b18;
  const DATA = window.FLEET_DATA;
  const [view, setView] = React.useState('map');
  const [layersOpen, setLayersOpen] = React.useState(false);
  const [ordersOpen, setOrdersOpen] = React.useState(true);
  const [scopeOpen, setScopeOpen] = React.useState(false);
  const [scopeTab, setScopeTab] = React.useState('drivers');
  const [scopeQuery, setScopeQuery] = React.useState('');
  const [layers, setLayers] = React.useState({
    drivers: true,
    vehicles: true,
    places: false,
    zones: true,
    areas: false
  });
  const toggleLayer = k => setLayers(l => ({
    ...l,
    [k]: !l[k]
  }));

  // marker positions (% of canvas) keyed to driver index
  const markerPos = [{
    x: 32,
    y: 38
  }, {
    x: 52,
    y: 30
  }, {
    x: 68,
    y: 52
  }, {
    x: 44,
    y: 60
  }, {
    x: 38,
    y: 48
  }, {
    x: 60,
    y: 66
  }, {
    x: 28,
    y: 64
  }, {
    x: 72,
    y: 36
  }, {
    x: 50,
    y: 46
  }, {
    x: 64,
    y: 24
  }];
  const statusColor = s => ({
    online: 'var(--status-online)',
    busy: 'var(--status-busy)',
    'en-route': 'var(--status-busy)',
    offline: 'var(--status-offline)',
    pending: 'var(--status-pending)'
  })[s] || 'var(--status-offline)';
  const onlineDrivers = DATA.drivers.filter(d => d.status !== 'offline');
  const scopeRows = DATA.drivers.filter(d => !scopeQuery || (d.name + d.phone).toLowerCase().includes(scopeQuery.toLowerCase()));
  const Marker = ({
    d,
    pos
  }) => /*#__PURE__*/React.createElement("div", {
    className: 'ops__marker' + (d.status === 'online' ? ' ops__marker--pulse' : ''),
    style: {
      left: pos.x + '%',
      top: pos.y + '%'
    },
    title: d.name,
    onClick: () => notify({
      tone: 'info',
      title: d.name,
      message: `${d.status} · ${d.vehicle}`
    })
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "32",
    viewBox: "0 0 26 32",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 1C6.4 1 1 6.2 1 12.6 1 21 13 31 13 31s12-10 12-18.4C25 6.2 19.6 1 13 1Z",
    fill: statusColor(d.status),
    stroke: "rgba(0,0,0,.35)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "12.5",
    r: "4.4",
    fill: "#0a1220",
    fillOpacity: ".85"
  })));
  return /*#__PURE__*/React.createElement("div", {
    className: "ops"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ops__switch"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    value: view,
    onChange: setView,
    items: [{
      value: 'map',
      label: 'Map',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 14
      })
    }, {
      value: 'table',
      label: 'Table',
      count: DATA.overview.activeOrders
    }]
  })), view === 'map' ? /*#__PURE__*/React.createElement("div", {
    className: "ops__map"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ops__map-roads"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ops__map-river"
  }), layers.zones && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "ops__zone",
    style: {
      left: '22%',
      top: '24%',
      width: 240,
      height: 200,
      borderColor: '#3485e2',
      background: 'rgba(52,133,226,.10)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ops__zone",
    style: {
      left: '52%',
      top: '40%',
      width: 280,
      height: 220,
      borderColor: '#4ade80',
      background: 'rgba(74,222,128,.08)',
      borderRadius: '55% 40% 50% 45% / 40% 55% 45% 60%'
    }
  })), layers.drivers && DATA.drivers.map((d, i) => /*#__PURE__*/React.createElement(Marker, {
    key: d.id,
    d: d,
    pos: markerPos[i % markerPos.length]
  })), /*#__PURE__*/React.createElement("div", {
    className: "ops__toolbar"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zoom-in"
    }),
    label: "Zoom in"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "zoom-out"
    }),
    label: "Zoom out"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "navigation"
    }),
    label: "Create order",
    onClick: () => notify({
      tone: 'info',
      title: 'New order',
      message: 'Order composer would open here.'
    })
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search"
    }),
    label: "Search place"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "layers"
    }),
    label: "Layers",
    active: layersOpen,
    onClick: e => {
      e.stopPropagation();
      setLayersOpen(!layersOpen);
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "crosshair"
    }),
    label: "Scope drawer",
    active: scopeOpen,
    onClick: () => setScopeOpen(!scopeOpen)
  })), layersOpen && /*#__PURE__*/React.createElement("div", {
    className: "ops__popover",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "ops__popover-head"
  }, "Map layers"), [{
    k: 'drivers',
    label: 'Drivers',
    icon: 'user',
    count: DATA.drivers.length
  }, {
    k: 'vehicles',
    label: 'Vehicles',
    icon: 'truck',
    count: DATA.vehicles.length
  }, {
    k: 'places',
    label: 'Places',
    icon: 'map-pin',
    count: 24
  }, {
    k: 'zones',
    label: 'Zones',
    icon: 'map',
    count: 2
  }, {
    k: 'areas',
    label: 'Service areas',
    icon: 'layers',
    count: DATA.areas.length
  }].map(row => /*#__PURE__*/React.createElement("div", {
    className: "ops__layer",
    key: row.k
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: row.icon,
    size: 15,
    style: {
      color: 'var(--text-muted)'
    }
  }), " ", row.label), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, row.count), /*#__PURE__*/React.createElement(Switch, {
    checked: layers[row.k],
    onChange: () => toggleLayer(row.k)
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ops__legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--status-online)'
    }
  }), " Online"), /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--status-busy)'
    }
  }), " En-route"), /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--status-offline)'
    }
  }), " Offline"), /*#__PURE__*/React.createElement("span", {
    className: "it"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot",
    style: {
      background: 'var(--status-pending)'
    }
  }), " Pending")), /*#__PURE__*/React.createElement("aside", {
    className: 'ops__orders' + (ordersOpen ? '' : ' ops__orders--hidden')
  }, /*#__PURE__*/React.createElement("div", {
    className: "ops__orders-head"
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      flex: 1,
      fontSize: 14
    }
  }, "Orders"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "x"
    }),
    label: "Hide orders panel",
    onClick: () => setOrdersOpen(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "ops__orders-body"
  }, /*#__PURE__*/React.createElement(KpiChip, {
    label: "Active orders",
    value: DATA.overview.activeOrders,
    dotColor: "var(--status-busy)",
    onClick: () => notify({
      tone: 'info',
      title: 'Filter: Active',
      message: 'Map filtered to active orders.'
    })
  }), /*#__PURE__*/React.createElement(KpiChip, {
    label: "Unassigned",
    value: DATA.overview.unassignedOrders,
    dotColor: "var(--status-pending)",
    delta: "+3 today",
    deltaDir: "up",
    onClick: () => notify({
      tone: 'info',
      title: 'Filter: Unassigned',
      message: 'Map filtered to unassigned orders.'
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'var(--text-subtle)',
      fontWeight: 600,
      margin: '6px 2px 0'
    }
  }, "Manpower by fleet"), DATA.fleets.map(f => /*#__PURE__*/React.createElement("div", {
    className: "ops__fleetrow",
    key: f.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, f.name), /*#__PURE__*/React.createElement(Badge, {
    tone: f.online > 0 ? 'success' : 'neutral',
    dot: true
  }, f.online, " / ", f.manpower, " online"))))), !ordersOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      insetInlineEnd: 16,
      zIndex: 23
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "package"
    }),
    label: "Show orders panel",
    active: true,
    onClick: () => setOrdersOpen(true)
  })), /*#__PURE__*/React.createElement("div", {
    className: 'ops__scope' + (scopeOpen ? '' : ' ops__scope--hidden')
  }, /*#__PURE__*/React.createElement("div", {
    className: "ops__scope-head"
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: scopeTab,
    onChange: setScopeTab,
    items: [{
      value: 'vehicles',
      label: 'Vehicles',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "truck",
        size: 15
      })
    }, {
      value: 'drivers',
      label: 'Drivers',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "user",
        size: 15
      })
    }, {
      value: 'places',
      label: 'Places',
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 15
      })
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: 'Filter ' + scopeTab + '…',
    value: scopeQuery,
    onChange: e => setScopeQuery(e.target.value)
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down"
    }),
    label: "Close scope",
    onClick: () => setScopeOpen(false)
  })), /*#__PURE__*/React.createElement("div", {
    className: "ops__scope-body"
  }, scopeTab === 'places' ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "map-pin",
    title: "No places match",
    hint: "Places appear here once geocoded."
  }) : /*#__PURE__*/React.createElement("table", {
    className: "fds-table fds-table--dense"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, scopeTab === 'drivers' ? 'Driver' : 'Vehicle'), /*#__PURE__*/React.createElement("th", null, "Coordinates"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Phone"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 60
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, scopeRows.map(d => /*#__PURE__*/React.createElement("tr", {
    key: d.id
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      fontWeight: 500
    }
  }, scopeTab === 'drivers' ? d.name : d.vehicle), /*#__PURE__*/React.createElement("td", {
    className: "fds-td--mono"
  }, d.lat.toFixed(4), ", ", d.lng.toFixed(4)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: d.status
  })), /*#__PURE__*/React.createElement("td", {
    className: "fds-td--mono"
  }, d.phone), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "crosshair"
    }),
    label: "Locate on map",
    onClick: () => notify({
      tone: 'info',
      title: 'Locating',
      message: `${d.name} centered on map.`
    })
  }))))))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      height: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-page__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "cs-page__title"
  }, "Orders"), /*#__PURE__*/React.createElement("p", {
    className: "cs-page__sub"
  }, DATA.overview.activeOrders, " active across all fleets."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)'
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    icon: "package",
    title: "Orders table",
    hint: "The standard data-table renders here over the same entities shown on the map \u2014 same columns, sorting, and row actions as Drivers.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => setView('map')
    }, "Back to map")
  }))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Drivers.jsx
try { (() => {
// Drivers — the reusable CRUD template: toolbar, data-table with
// skeleton loading + empty state, create/edit drawer with inline
// validation, row actions, confirm-delete, and toasts on save.
function Drivers({
  notify
}) {
  const {
    Button,
    IconButton,
    Input,
    Select,
    FormField,
    DataTable,
    Card,
    Pagination,
    StatusBadge,
    Avatar,
    Drawer,
    ConfirmDialog,
    Icon,
    Badge
  } = window.FleetSass_c91b18;
  const DATA = window.FLEET_DATA;
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState('');
  const [statusFilter, setStatusFilter] = React.useState('');
  const [sort, setSort] = React.useState({
    key: 'name',
    dir: 'asc'
  });
  const [menuFor, setMenuFor] = React.useState(null);
  const [page, setPage] = React.useState(1);

  // drawer + form
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(null); // row or null (=new)
  const [saving, setSaving] = React.useState(false);
  const [form, setForm] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [toDelete, setToDelete] = React.useState(null);
  const [deleting, setDeleting] = React.useState(false);

  // initial load (skeleton)
  React.useEffect(() => {
    const t = setTimeout(() => {
      setRows(DATA.drivers);
      setLoading(false);
    }, 900);
    return () => clearTimeout(t);
  }, []);
  React.useEffect(() => {
    const close = () => setMenuFor(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);
  const filtered = React.useMemo(() => {
    let r = rows.filter(d => (!query || (d.name + d.id + d.phone + d.vendor).toLowerCase().includes(query.toLowerCase())) && (!statusFilter || d.status === statusFilter));
    r = [...r].sort((a, b) => {
      const av = (a[sort.key] ?? '').toString().toLowerCase();
      const bv = (b[sort.key] ?? '').toString().toLowerCase();
      return (av < bv ? -1 : av > bv ? 1 : 0) * (sort.dir === 'asc' ? 1 : -1);
    });
    return r;
  }, [rows, query, statusFilter, sort]);
  const openCreate = () => {
    setEditing(null);
    setForm({
      status: 'offline'
    });
    setErrors({});
    setDrawerOpen(true);
  };
  const openEdit = d => {
    setEditing(d);
    setForm({
      ...d
    });
    setErrors({});
    setDrawerOpen(true);
  };
  const validate = () => {
    const e = {};
    if (!form.name || !form.name.trim()) e.name = 'Name is required.';
    if (!form.phone || !form.phone.trim()) e.phone = 'Phone is required.';else if (!/[0-9]{6,}/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid phone number.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const save = () => {
    if (!validate()) return;
    setSaving(true);
    setTimeout(() => {
      if (editing) {
        setRows(rs => rs.map(r => r.id === editing.id ? {
          ...editing,
          ...form
        } : r));
        notify({
          tone: 'success',
          title: 'Driver updated',
          message: `${form.name}'s details were saved.`
        });
      } else {
        const id = 'drv_' + Math.random().toString(36).slice(2, 8);
        setRows(rs => [{
          id,
          internalId: 'D-' + (1052 + rs.length),
          vehicle: '—',
          ...form
        }, ...rs]);
        notify({
          tone: 'success',
          title: 'Driver created',
          message: `${form.name} was added to the fleet.`
        });
      }
      setSaving(false);
      setDrawerOpen(false);
    }, 700);
  };
  const confirmDelete = () => {
    setDeleting(true);
    setTimeout(() => {
      setRows(rs => rs.filter(r => r.id !== toDelete.id));
      notify({
        tone: 'danger',
        title: 'Driver deleted',
        message: `${toDelete.name} was removed.`
      });
      setDeleting(false);
      setToDelete(null);
    }, 600);
  };
  const set = (k, v) => setForm(f => ({
    ...f,
    [k]: v
  }));
  const columns = [{
    key: 'name',
    label: 'Driver',
    sortable: true,
    render: d => /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: d.name,
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 500
      }
    }, d.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--text-subtle)'
      },
      className: "mono"
    }, d.internalId)))
  }, {
    key: 'id',
    label: 'ID',
    mono: true,
    sortable: true
  }, {
    key: 'vendor',
    label: 'Vendor',
    sortable: true
  }, {
    key: 'vehicle',
    label: 'Vehicle'
  }, {
    key: 'phone',
    label: 'Phone',
    mono: true
  }, {
    key: 'status',
    label: 'Status',
    sortable: true,
    render: d => /*#__PURE__*/React.createElement(StatusBadge, {
      status: d.status
    })
  }];
  const rowActions = d => /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "more-vertical"
    }),
    label: "Row actions",
    onClick: () => setMenuFor(menuFor === d.id ? null : d.id)
  }), menuFor === d.id && /*#__PURE__*/React.createElement("div", {
    className: "cs-menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-menu__item",
    onClick: () => {
      openEdit(d);
      setMenuFor(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: 15
  }), " Edit"), /*#__PURE__*/React.createElement("div", {
    className: "cs-menu__item",
    onClick: () => {
      openEdit(d);
      setMenuFor(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eye",
    size: 15
  }), " View"), /*#__PURE__*/React.createElement("div", {
    className: "cs-menu__item",
    onClick: () => {
      notify({
        tone: 'info',
        title: 'Assign vehicle',
        message: 'Vehicle picker would open here.'
      });
      setMenuFor(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 15
  }), " Assign vehicle"), /*#__PURE__*/React.createElement("div", {
    className: "cs-menu__item cs-menu__item--danger",
    onClick: () => {
      setToDelete(d);
      setMenuFor(null);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: 15
  }), " Delete driver")));
  const pageSize = 8;
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);
  const pages = Math.max(Math.ceil(filtered.length / pageSize), 1);
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-page__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "cs-page__title"
  }, "Drivers ", /*#__PURE__*/React.createElement("span", {
    className: "cs-page__count"
  }, loading ? '' : filtered.length)), /*#__PURE__*/React.createElement("p", {
    className: "cs-page__sub"
  }, "Manage the people delivering your orders.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-page__spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    }),
    onClick: openCreate
  }, "New Driver")), /*#__PURE__*/React.createElement("div", {
    className: "cs-toolbar"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search drivers\u2026",
    value: query,
    onChange: e => {
      setQuery(e.target.value);
      setPage(1);
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 170
    }
  }, /*#__PURE__*/React.createElement(Select, {
    placeholder: "All statuses",
    value: statusFilter,
    onChange: e => {
      setStatusFilter(e.target.value);
      setPage(1);
    },
    options: [{
      value: 'online',
      label: 'Online'
    }, {
      value: 'busy',
      label: 'Busy'
    }, {
      value: 'en-route',
      label: 'En-route'
    }, {
      value: 'offline',
      label: 'Offline'
    }, {
      value: 'pending',
      label: 'Pending'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "upload",
      size: 15
    }),
    onClick: () => notify({
      tone: 'info',
      title: 'Import',
      message: 'Upload an .xlsx matching the template.'
    })
  }, "Import"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    }),
    onClick: () => notify({
      tone: 'success',
      title: 'Export started',
      message: 'drivers.xlsx is downloading.'
    })
  }, "Export")), /*#__PURE__*/React.createElement(Card, {
    flush: true,
    footer: !loading && filtered.length > 0 ? /*#__PURE__*/React.createElement(Pagination, {
      page: page,
      pages: pages,
      total: filtered.length,
      pageSize: pageSize,
      onPageChange: setPage
    }) : null
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: columns,
    rows: pageRows,
    loading: loading,
    sort: sort,
    onSort: setSort,
    renderActions: rowActions,
    empty: {
      icon: 'user',
      title: query || statusFilter ? 'No matching drivers' : 'No drivers yet',
      hint: query || statusFilter ? 'Try clearing filters or search.' : 'Add your first driver to start dispatching orders.',
      action: /*#__PURE__*/React.createElement(Button, {
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 16
        }),
        onClick: openCreate
      }, "New Driver")
    }
  })), /*#__PURE__*/React.createElement(Drawer, {
    open: drawerOpen,
    onClose: () => setDrawerOpen(false),
    title: editing ? 'Edit Driver' : 'New Driver',
    subtitle: form.vehicle && form.vehicle !== '—' ? form.vehicle + ' assigned' : 'No vehicle assigned',
    headerExtra: form.status ? /*#__PURE__*/React.createElement(StatusBadge, {
      status: form.status
    }) : null,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDrawerOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      loading: saving,
      onClick: save
    }, editing ? 'Save changes' : 'Create Driver'))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(FormField, {
    label: "Full name",
    htmlFor: "d-name",
    required: true,
    error: errors.name
  }, /*#__PURE__*/React.createElement(Input, {
    id: "d-name",
    invalid: !!errors.name,
    value: form.name || '',
    onChange: e => set('name', e.target.value),
    placeholder: "e.g. Layla Hassan"
  }))), /*#__PURE__*/React.createElement(FormField, {
    label: "Phone",
    htmlFor: "d-phone",
    required: true,
    error: errors.phone
  }, /*#__PURE__*/React.createElement(Input, {
    id: "d-phone",
    invalid: !!errors.phone,
    value: form.phone || '',
    onChange: e => set('phone', e.target.value),
    placeholder: "+966 \u2026"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Internal ID",
    htmlFor: "d-iid"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "d-iid",
    value: form.internalId || '',
    onChange: e => set('internalId', e.target.value),
    placeholder: "D-0000"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Vendor",
    htmlFor: "d-vendor"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "d-vendor",
    placeholder: "Select vendor\u2026",
    value: form.vendor || '',
    onChange: e => set('vendor', e.target.value),
    options: DATA.vendors.map(v => ({
      value: v,
      label: v
    }))
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Vehicle",
    htmlFor: "d-veh"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "d-veh",
    placeholder: "Select vehicle\u2026",
    value: form.vehicle || '',
    onChange: e => set('vehicle', e.target.value),
    options: DATA.vehicles.map(v => ({
      value: v,
      label: v
    }))
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "City",
    htmlFor: "d-city"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "d-city",
    value: form.city || '',
    onChange: e => set('city', e.target.value),
    placeholder: "Riyadh"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Status",
    htmlFor: "d-status"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "d-status",
    value: form.status || 'offline',
    onChange: e => set('status', e.target.value),
    options: [{
      value: 'online',
      label: 'Online'
    }, {
      value: 'busy',
      label: 'Busy'
    }, {
      value: 'en-route',
      label: 'En-route'
    }, {
      value: 'offline',
      label: 'Offline'
    }, {
      value: 'pending',
      label: 'Pending'
    }]
  })))), /*#__PURE__*/React.createElement(ConfirmDialog, {
    open: !!toDelete,
    title: "Delete driver?",
    message: toDelete ? `This removes ${toDelete.name} and unassigns their vehicle. This can't be undone.` : '',
    confirmLabel: "Delete driver",
    loading: deleting,
    onCancel: () => setToDelete(null),
    onConfirm: confirmDelete
  }));
}
window.Drivers = Drivers;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Drivers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Login.jsx
try { (() => {
// Login screen — branded split layout. Composes DS form primitives.
function Login({
  onLogin
}) {
  const {
    Button,
    Input,
    FormField,
    Icon
  } = window.FleetSass_c91b18;
  const [email, setEmail] = React.useState('owner@demo.test');
  const [password, setPassword] = React.useState('password123');
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState('');
  const submit = e => {
    e.preventDefault();
    setErr('');
    if (!email || !password) {
      setErr('Enter your email and password.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin && onLogin();
    }, 750);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "cs-auth"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-auth__brandside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-auth__roads"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-brand",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "Fleet SaaS",
    style: {
      height: 30
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-auth__tag"
  }, "The command center for ", /*#__PURE__*/React.createElement("span", null, "fleet & delivery"), " operations."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 24,
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 16
  }), " Live dispatch"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16
  }), " Zone routing"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "navigation",
    size: 16
  }), " Tracking"))), /*#__PURE__*/React.createElement("div", {
    className: "cs-auth__formside"
  }, /*#__PURE__*/React.createElement("form", {
    className: "cs-auth__card",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      margin: '0 0 4px'
    }
  }, "Sign in to your console"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, "Welcome back. Pick up where dispatch left off.")), /*#__PURE__*/React.createElement(FormField, {
    label: "Email",
    htmlFor: "email"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    icon: "user",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(FormField, {
    label: "Password",
    htmlFor: "password"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "password",
    type: "password",
    value: password,
    onChange: e => setPassword(e.target.value),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  })), err && /*#__PURE__*/React.createElement("div", {
    className: "fds-field__error",
    role: "alert"
  }, err), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    block: true,
    loading: loading
  }, loading ? 'Signing in…' : 'Sign in'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, "Demo: owner@demo.test / password123"))));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/data.js
try { (() => {
// Fake operational data for the Console UI kit. Mirrors the shapes in
// console/src (public_id-addressed resources, {data, meta} envelope).
window.FLEET_DATA = function () {
  const drivers = [{
    id: 'drv_a1b2c3',
    name: 'Layla Hassan',
    internalId: 'D-1042',
    phone: '+966 50 112 4471',
    vendor: 'Najm Foods',
    vehicle: 'Hilux · 4821',
    license: 'KSA-558210',
    status: 'online',
    city: 'Riyadh',
    lat: 24.7136,
    lng: 46.6753
  }, {
    id: 'drv_d4e5f6',
    name: 'Omar Khaled',
    internalId: 'D-1043',
    phone: '+966 55 904 2210',
    vendor: 'Najm Foods',
    vehicle: 'Canter · 1190',
    license: 'KSA-558211',
    status: 'busy',
    city: 'Riyadh',
    lat: 24.7742,
    lng: 46.7386
  }, {
    id: 'drv_g7h8i9',
    name: 'Sara Nasser',
    internalId: 'D-1044',
    phone: '+966 53 778 1002',
    vendor: 'BlueCart',
    vehicle: '—',
    license: 'KSA-558212',
    status: 'offline',
    city: 'Jeddah',
    lat: 21.5433,
    lng: 39.1728
  }, {
    id: 'drv_j1k2l3',
    name: 'Yousef Amir',
    internalId: 'D-1045',
    phone: '+966 56 220 7781',
    vendor: 'BlueCart',
    vehicle: 'Hiace · 7732',
    license: 'KSA-558213',
    status: 'en-route',
    city: 'Riyadh',
    lat: 24.6877,
    lng: 46.7219
  }, {
    id: 'drv_m4n5o6',
    name: 'Huda Saleh',
    internalId: 'D-1046',
    phone: '+966 59 330 5567',
    vendor: 'Najm Foods',
    vehicle: 'Hilux · 9920',
    license: 'KSA-558214',
    status: 'online',
    city: 'Riyadh',
    lat: 24.7510,
    lng: 46.6390
  }, {
    id: 'drv_p7q8r9',
    name: 'Tariq Aziz',
    internalId: 'D-1047',
    phone: '+966 50 887 1190',
    vendor: 'FreshLine',
    vehicle: 'Canter · 3340',
    license: 'KSA-558215',
    status: 'busy',
    city: 'Dammam',
    lat: 26.4207,
    lng: 50.0888
  }, {
    id: 'drv_s1t2u3',
    name: 'Nora Farouk',
    internalId: 'D-1048',
    phone: '+966 55 410 8823',
    vendor: 'FreshLine',
    vehicle: '—',
    license: 'KSA-558216',
    status: 'pending',
    city: 'Riyadh',
    lat: 24.8021,
    lng: 46.6190
  }, {
    id: 'drv_v4w5x6',
    name: 'Bilal Mansour',
    internalId: 'D-1049',
    phone: '+966 53 119 6644',
    vendor: 'BlueCart',
    vehicle: 'Hiace · 5521',
    license: 'KSA-558217',
    status: 'online',
    city: 'Jeddah',
    lat: 21.6112,
    lng: 39.1390
  }, {
    id: 'drv_y7z8a9',
    name: 'Reem Adel',
    internalId: 'D-1050',
    phone: '+966 56 772 0091',
    vendor: 'Najm Foods',
    vehicle: 'Hilux · 2218',
    license: 'KSA-558218',
    status: 'offline',
    city: 'Riyadh',
    lat: 24.6520,
    lng: 46.7710
  }, {
    id: 'drv_b1c2d3',
    name: 'Khalid Otaibi',
    internalId: 'D-1051',
    phone: '+966 50 553 7712',
    vendor: 'FreshLine',
    vehicle: 'Canter · 8810',
    license: 'KSA-558219',
    status: 'en-route',
    city: 'Dammam',
    lat: 26.3927,
    lng: 49.9777
  }];
  const vendors = ['Najm Foods', 'BlueCart', 'FreshLine'];
  const vehicles = ['Hilux · 4821', 'Canter · 1190', 'Hiace · 7732', 'Hilux · 9920', 'Canter · 3340', 'Hiace · 5521'];
  const fleets = [{
    id: 'flt_1',
    name: 'Riyadh Central',
    online: 6,
    manpower: 9
  }, {
    id: 'flt_2',
    name: 'Jeddah West',
    online: 2,
    manpower: 5
  }, {
    id: 'flt_3',
    name: 'Dammam East',
    online: 2,
    manpower: 4
  }];
  const areas = [{
    id: 'area_1',
    name: 'Riyadh Central',
    type: 'Zone',
    color: '#3485e2'
  }, {
    id: 'area_2',
    name: 'North District',
    type: 'Service area',
    color: '#4ade80'
  }, {
    id: 'area_3',
    name: 'Airport Run',
    type: 'Zone',
    color: '#fbbf24'
  }];
  const overview = {
    activeOrders: 128,
    unassignedOrders: 9,
    fleets
  };
  return {
    drivers,
    vendors,
    vehicles,
    fleets,
    areas,
    overview
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.KpiChip = __ds_scope.KpiChip;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastRegion = __ds_scope.ToastRegion;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ConfirmDialog = __ds_scope.ConfirmDialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.Modal = __ds_scope.Modal;

})();
