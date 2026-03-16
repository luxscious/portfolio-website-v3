export default function HalifaxSkyline() {
  const fill = "#0a0507"
  const water = "#6e1535"

  // Hanger x positions along the main span (left tower ~x=1006, right ~x=1256)
  const hangers = [1052, 1084, 1116, 1140, 1164, 1196, 1228]

  return (
    <div className="bg-[#c9506c] w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="w-full block"
        aria-label="Halifax, Nova Scotia skyline"
      >
        {/* ── DISTANT DARTMOUTH SHORE (far background) ────────────────── */}
        <path
          fill={fill} fillOpacity="0.07"
          d="M0,262 Q360,255 720,258 Q1080,261 1440,256 L1440,300 L0,300 Z"
        />

        {/* ── CITADEL HILL ─────────────────────────────────────────────
            The primary Halifax identifier. A steep asymmetric hill that
            dominates the skyline — steeper west face, gentler east descent.
            Peak at x=478, y=92. Everything else reads against this shape. */}
        {/* Rounder hill — low peak, control points close to peak y = gentle dome */}
        <path
          fill={fill} fillOpacity="0.20"
          d="M185,265 C310,264 430,122 479,114 C528,122 648,264 775,265 Z"
        />

        {/* ── OLD TOWN CLOCK — left of hill peak, same shade as hill ───
            Sits on the west-facing slope. Tapering tiers + domed cap. */}
        <rect fill={fill} fillOpacity="0.20" x="444" y="168" width="12" height="14" rx="1" />
        <rect fill={fill} fillOpacity="0.20" x="446" y="156" width="8"  height="14" rx="1" />
        <rect fill={fill} fillOpacity="0.20" x="448" y="146" width="4"  height="12" rx="1" />
        <path  fill={fill} fillOpacity="0.20" d="M445,146 Q450,137 455,146 Z" />
        <rect  fill={fill} fillOpacity="0.20" x="449" y="127" width="2"  height="11" />

        {/* ── SECOND HILL — smaller, fatter, slightly right of main hill ── */}
        <path
          fill={fill} fillOpacity="0.27"
          d="M390,265 C468,264 518,168 552,160 C586,168 636,264 722,265 Z"
        />

        {/* ── BACKGROUND BUILDING MASS (behind hill, very low opacity) ── */}
        <g fill={fill} fillOpacity="0.14">
          <rect x="316" y="194" width="36" height="71" />
          <rect x="356" y="179" width="34" height="86" />
          <rect x="394" y="165" width="38" height="100" />
          <rect x="436" y="161" width="34" height="104" />
          <rect x="474" y="167" width="30" height="98" />
          <rect x="508" y="174" width="34" height="91" />
          <rect x="546" y="183" width="30" height="82" />
          <rect x="578" y="193" width="26" height="72" />
        </g>

        {/* ── HISTORIC WATERFRONT — The Properties / Lower Water St ─────
            Low, wide, stone-facade buildings. Halifax's historic quayside. */}
        <g fill={fill} fillOpacity="0.57">
          <rect x="46"  y="254" width="24" height="11" />
          <rect x="74"  y="250" width="20" height="15" />
          <rect x="98"  y="253" width="16" height="12" />
          <rect x="120" y="244" width="30" height="21" />
          <rect x="154" y="238" width="26" height="27" />
          <rect x="184" y="232" width="22" height="33" />
        </g>

        {/* ── ST. PAUL'S CHURCH (x≈242) ─────────────────────────────────
            Oldest Anglican church in Canada. Georgian steeple, Grand Parade. */}
        <g fill={fill} fillOpacity="0.65">
          <rect x="230" y="230" width="26" height="35" />
          <rect x="234" y="211" width="18" height="21" />
          {/* Slender Georgian steeple */}
          <polygon points="233,211 243,177 253,211" />
        </g>

        {/* ── LEFT DOWNTOWN — mid-rise cluster stepping up to main core ── */}
        <g fill={fill} fillOpacity="0.65">
          <rect x="263" y="218" width="26" height="47" />
          <rect x="293" y="205" width="30" height="60" />
          {/* Tower with stepped crown */}
          <rect x="328" y="184" width="28" height="81" />
          <rect x="331" y="175" width="22" height="11" />
        </g>

        {/* ── SCOTIA SQUARE / OFFICE CORE — tallest downtown cluster ─────
            Halifax's tallest towers (20–25 floors). Centre of downtown. */}
        <g fill={fill} fillOpacity="0.67">
          {/* Primary tower */}
          <rect x="362" y="154" width="32" height="111" />
          <rect x="364" y="143" width="28" height="13" />
          {/* Second tower */}
          <rect x="398" y="162" width="28" height="103" />
          <rect x="400" y="152" width="24" height="12" />
          {/* Wide mid-rise base */}
          <rect x="430" y="175" width="36" height="90" />
        </g>

        {/* Citadel Hill base — narrow building at transition */}
        <rect fill={fill} fillOpacity="0.65" x="470" y="172" width="18" height="93" />

        {/* ── ST. MARY'S BASILICA (x≈542) ──────────────────────────────
            Tallest church spire in Halifax — long Gothic needle.
            Sits east of Citadel Hill, visible from the harbour. */}
        <g fill={fill} fillOpacity="0.65">
          {/* Nave body */}
          <rect x="534" y="220" width="22" height="45" />
          {/* Tower base */}
          <rect x="538" y="200" width="14" height="22" />
          {/* Spire shaft */}
          <rect x="540" y="180" width="10" height="22" />
          {/* Needle — tall, sharp, distinctive */}
          <polygon points="538,180 545,144 552,180" />
        </g>

        {/* ── EAST DOWNTOWN — stepping down from Citadel base ─────────── */}
        <g fill={fill} fillOpacity="0.65">
          <rect x="562" y="162" width="30" height="103" />
          <rect x="596" y="172" width="28" height="93" />
          <rect x="628" y="183" width="26" height="82" />
        </g>

        {/* ── PURDY'S WHARF — twin paired towers ────────────────────────
            The most recognisable Halifax waterfront silhouette.
            Two close-set office towers, slightly different heights. */}
        <g fill={fill} fillOpacity="0.68">
          {/* Tower A */}
          <rect x="658" y="163" width="20" height="102" />
          <rect x="660" y="154" width="16" height="11" />
          {/* Tower B — slightly taller, close beside A */}
          <rect x="684" y="156" width="20" height="109" />
          <rect x="686" y="147" width="16" height="11" />
        </g>

        {/* ── RIGHT WATERFRONT — graceful taper toward bridge ─────────── */}
        <g fill={fill} fillOpacity="0.60">
          <rect x="710" y="178" width="24" height="87" />
          <rect x="738" y="193" width="22" height="72" />
          <rect x="764" y="207" width="22" height="58" />
          <rect x="790" y="219" width="20" height="46" />
          <rect x="814" y="229" width="18" height="36" />
          <rect x="836" y="238" width="16" height="27" />
          <rect x="856" y="245" width="14" height="20" />
          <rect x="874" y="250" width="12" height="15" />
          <rect x="890" y="254" width="10" height="11" />
          <rect x="904" y="257" width="10" height="8" />
        </g>

        {/* ── ANGUS L. MACDONALD BRIDGE ─────────────────────────────────
            Halifax suspension bridge — H-frame towers, two crossbeams each,
            catenary cables, vertical hangers. Deck at y=226. */}
        <g fill={fill} fillOpacity="0.80">

          {/* Deck */}
          <rect x="934" y="226" width="406" height="4" rx="1" />

          {/* Halifax-side approach ramp */}
          <polygon points="916,265 934,226 945,226 928,265" />

          {/* Dartmouth-side approach ramp */}
          <polygon points="1338,226 1350,226 1370,265 1358,265" />

          {/* LEFT TOWER — H-frame */}
          <rect x="1003" y="152" width="7"  height="78" />
          <rect x="1018" y="152" width="7"  height="78" />
          <rect x="999"  y="168" width="29" height="5" rx="1" />
          <rect x="1001" y="190" width="25" height="4" rx="1" />
          <rect x="1005" y="147" width="5"  height="7" rx="1" />
          <rect x="1020" y="147" width="5"  height="7" rx="1" />

          {/* RIGHT TOWER — H-frame */}
          <rect x="1252" y="152" width="7"  height="78" />
          <rect x="1267" y="152" width="7"  height="78" />
          <rect x="1248" y="168" width="29" height="5" rx="1" />
          <rect x="1250" y="190" width="25" height="4" rx="1" />
          <rect x="1254" y="147" width="5"  height="7" rx="1" />
          <rect x="1269" y="147" width="5"  height="7" rx="1" />

          {/* Main suspension cables — catenary, sag ~24px at midspan (y≈174) */}
          <path d="M1006,150 Q1140,198 1256,150"
                fill="none" stroke={fill} strokeOpacity="0.80" strokeWidth="2.2" />
          <path d="M1022,150 Q1140,198 1272,150"
                fill="none" stroke={fill} strokeOpacity="0.80" strokeWidth="2.2" />

          {/* Backstay cables — Halifax side */}
          <line x1="1006" y1="150" x2="946"  y2="226" stroke={fill} strokeOpacity="0.62" strokeWidth="1.5" />
          <line x1="1022" y1="150" x2="946"  y2="226" stroke={fill} strokeOpacity="0.62" strokeWidth="1.5" />

          {/* Backstay cables — Dartmouth side */}
          <line x1="1256" y1="150" x2="1330" y2="226" stroke={fill} strokeOpacity="0.62" strokeWidth="1.5" />
          <line x1="1272" y1="150" x2="1330" y2="226" stroke={fill} strokeOpacity="0.62" strokeWidth="1.5" />

          {/* Vertical hangers — from deck up to cable */}
          {hangers.map((x) => {
            const t = (x - 1006) / (1256 - 1006)
            const cableY = 150 + 24 * Math.sin(t * Math.PI)
            return (
              <line key={x}
                x1={x} y1={226}
                x2={x} y2={Math.round(cableY)}
                stroke={fill} strokeOpacity="0.48" strokeWidth="1"
              />
            )
          })}
        </g>

        {/* ── DARTMOUTH WATERFRONT (far right, low and quiet) ─────────── */}
        <g fill={fill} fillOpacity="0.35">
          <rect x="1362" y="246" width="28" height="19" />
          <rect x="1386" y="241" width="26" height="24" />
          <rect x="1406" y="249" width="20" height="16" />
          <rect x="1422" y="254" width="14" height="11" />
        </g>

        {/* ── HARBOUR WATER ─────────────────────────────────────────────
            Dark rose water body. Crisp horizon line. Three wave rows
            at decreasing opacity to suggest depth. */}
        <rect x="0" y="265" width="1440" height="35" fill={water} fillOpacity="0.75" />
        <rect x="0" y="265" width="1440" height="1.5" fill={water} fillOpacity="1" />

        {/* Wave row 1 — near shore */}
        <path fill="none" stroke="#e8a0b0" strokeOpacity="0.18" strokeWidth="1.5"
          d="M0,272 Q60,269 120,272 Q180,275 240,272 Q300,269 360,272
             Q420,275 480,272 Q540,269 600,272 Q660,275 720,272
             Q780,269 840,272 Q900,275 960,272 Q1020,269 1080,272
             Q1140,275 1200,272 Q1260,269 1320,272 Q1380,275 1440,272"
        />
        {/* Wave row 2 */}
        <path fill="none" stroke="#e8a0b0" strokeOpacity="0.09" strokeWidth="1"
          d="M0,278 Q80,275.5 160,278 Q240,280.5 320,278 Q400,275.5 480,278
             Q560,280.5 640,278 Q720,275.5 800,278 Q880,280.5 960,278
             Q1040,275.5 1120,278 Q1200,280.5 1280,278 Q1360,275.5 1440,278"
        />
        {/* Wave row 3 — far */}
        <path fill="none" stroke="#e8a0b0" strokeOpacity="0.05" strokeWidth="0.8"
          d="M0,284 Q90,282 180,284 Q270,286 360,284 Q450,282 540,284
             Q630,286 720,284 Q810,282 900,284 Q990,286 1080,284
             Q1170,282 1260,284 Q1350,286 1440,284"
        />
      </svg>
    </div>
  )
}
