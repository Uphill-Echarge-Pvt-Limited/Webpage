export default function Page() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Uphill Echarge | Engineered for the Infinite Road</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-surface": "#1b1b1d",
                    "surface-tint": "#005bc1",
                    "on-surface-variant": "#414755",
                    "inverse-surface": "#303032",
                    "primary-container": "#0070eb",
                    "tertiary-fixed": "#c1e8ff",
                    "surface-container-lowest": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "outline": "#717786",
                    "on-secondary-fixed": "#002107",
                    "on-tertiary-fixed-variant": "#004d67",
                    "surface-container": "#f0edef",
                    "surface-container-high": "#eae7ea",
                    "tertiary-fixed-dim": "#74d1ff",
                    "surface-dim": "#dcd9dc",
                    "surface-container-highest": "#e4e2e4",
                    "secondary-fixed-dim": "#53e16f",
                    "tertiary-container": "#007ea6",
                    "primary-fixed": "#d8e2ff",
                    "on-primary-fixed-variant": "#004493",
                    "on-primary-container": "#fefcff",
                    "on-secondary-fixed-variant": "#00531c",
                    "secondary-fixed": "#72fe88",
                    "on-secondary-container": "#00732a",
                    "outline-variant": "#c1c6d7",
                    "secondary-container": "#6ffb85",
                    "on-background": "#1b1b1d",
                    "error": "#ba1a1a",
                    "secondary": "#006e28",
                    "on-tertiary-container": "#fbfcff",
                    "primary": "#0058bc",
                    "tertiary": "#006384",
                    "on-error": "#ffffff",
                    "on-error-container": "#93000a",
                    "primary-fixed-dim": "#adc6ff",
                    "on-tertiary-fixed": "#001e2b",
                    "on-primary": "#ffffff",
                    "on-secondary": "#ffffff",
                    "surface-container-low": "#f6f3f5",
                    "error-container": "#ffdad6",
                    "on-primary-fixed": "#001a41",
                    "inverse-on-surface": "#f3f0f2",
                    "inverse-primary": "#adc6ff",
                    "surface": "#fcf8fb",
                    "surface-bright": "#fcf8fb",
                    "background": "#fcf8fb",
                    "surface-variant": "#e4e2e4"
            },
            "borderRadius": {
                    "DEFAULT": "1rem",
                    "lg": "2rem",
                    "xl": "3rem",
                    "full": "9999px"
            },
            "spacing": {
                    "unit": "8px",
                    "container-padding-mobile": "24px",
                    "container-padding-desktop": "64px",
                    "gutter": "24px",
                    "section-gap": "80px"
            },
            "fontFamily": {
                    "headline-lg": ["Inter"],
                    "body-md": ["Inter"],
                    "headline-lg-mobile": ["Inter"],
                    "headline-md": ["Inter"],
                    "body-lg": ["Inter"],
                    "label-md": ["Inter"],
                    "display-lg": ["Inter"]
            },
            "fontSize": {
                    "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                    "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "700"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "label-md": ["14px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600"}],
                    "display-lg": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "700"}]
            }
          },
        },
      }
    </script>
<style>
        .glass-panel {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { scroll-behavior: smooth; }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md overflow-x-hidden">
<!-- Top Navigation Shell -->
<nav class="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-7xl rounded-full border border-white/20 bg-surface/10 backdrop-blur-xl flex justify-between items-center px-8 py-4 z-50 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-[1.02]">
<div class="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">Uphill Echarge</div>
<div class="hidden md:flex items-center gap-10">
<a class="font-label-md text-label-md text-primary font-bold" href="#">Network</a>
<a class="font-label-md text-label-md text-on-surface/70 hover:text-on-surface text-black font-semibold transition-colors" href="#">Experience</a>
<a class="font-label-md text-label-md text-on-surface/70 hover:text-on-surface text-black font-semibold transition-colors" href="#">Sustainability</a>
<a class="font-label-md text-label-md text-on-surface/70 hover:text-on-surface text-black font-semibold transition-colors" href="#">Fleet</a>
</div>
<button class="bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:scale-[1.02] active:scale-95 transition-all duration-300">
            Get Started
        </button>
</nav>
<!-- Cinematic Hero Section -->
<section class="relative min-h-screen flex items-center pt-24 overflow-hidden">
<div class="absolute inset-0 -z-10">
<img class="w-full h-full object-cover" data-alt="A high-end electric vehicle charging station at dusk, featuring a sleek modern charger with an illuminated glowing electric blue cable. The lighting is cinematic and cool-toned, reflecting off the metallic surfaces of a premium electric SUV parked beside it. The scene is set in a minimalist, high-tech urban environment with soft ambient architectural lighting and deep shadows, conveying a sense of engineered luxury and future technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_op5UuX2B_6_jYHhKZbSsa-Za58QkF9EGkOzs0vrR5pESNdOGqxnK-Ds81o32vD4_ZzLW2loRn1jPK5mBe0A7QRYDLR9w7ETBg6iP58-gbh9E7sGaQOyQ0XVU61vqYQE2KF-nu2sSAco7FJeWSm9y9djHSdlz-GEl4iSnch-5ZAFmEaawTK4EZo9QmOUbB8HnzDMPiDKCMAozVIaEtO0vylweXssZ57ys_FaN7363DQykpqUqPF7n1lw1haRtTLgwoUaa93Qkcroj"/>
<div class="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
</div>
<div class="max-w-7xl mx-auto px-container-desktop w-full grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
<div class="space-y-10">
<h1 class="font-display-lg text-display-lg leading-[1.05] tracking-tight">
                    Powering the<br/>Future of Mobility
                </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl text-black font-semibold">
                    Engineered for reliability, designed for speed. Experience India's most advanced ultra-fast charging network tailored for the discerning EV driver.
                </p>
<div class="flex flex-wrap gap-4 pt-4">
<button class="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md flex items-center gap-2 hover:shadow-xl transition-all">
                        Find Stations <span class="material-symbols-outlined">map</span>
</button>
<button class="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-label-md text-label-md flex items-center gap-2 hover:bg-surface-container-highest transition-all border border-outline/10">
                        Download App <span class="material-symbols-outlined">smartphone</span>
</button>
</div>
</div>
<!-- Floating Stats Card -->
<div class="hidden lg:flex flex-col gap-6 justify-self-end">
<div class="glass-panel p-8 rounded-xl w-64 translate-x-12 animate-pulse-subtle shadow-xl border border-white/40">
<div class="flex items-center gap-4 mb-2">
<div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
<span class="material-symbols-outlined text-on-secondary-container">bolt</span>
</div>
<span class="font-label-md text-label-md opacity-70">Uptime</span>
</div>
<div class="font-headline-lg text-headline-lg text-primary">99.9%</div>
</div>
<div class="glass-panel p-8 rounded-xl w-72 shadow-xl border border-white/40">
<div class="flex items-center gap-4 mb-2">
<div class="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center text-white">
<span class="material-symbols-outlined">location_on</span>
</div>
<span class="font-label-md text-label-md opacity-70">Network Growth</span>
</div>
<div class="font-headline-lg text-headline-lg text-tertiary">2,500+</div>
<div class="font-label-md text-label-md opacity-70">Active Hubs</div>
</div>
</div>
</div>
</section>
<!-- Live Network Map Section (Transition to Dark) -->
<section class="bg-inverse-surface py-section-gap overflow-hidden relative">
<div class="max-w-7xl mx-auto px-container-desktop">
<div class="text-center mb-20">
<span class="text-secondary-fixed-dim font-label-md text-label-md uppercase tracking-widest mb-4 block">Real-Time Connectivity</span>
<h2 class="font-display-lg text-headline-lg text-white mb-6">India's Premium Corridor</h2>
<p class="text-surface-variant/70 max-w-2xl mx-auto font-body-md text-body-md">
                    Seamless travel across state lines. Our intelligence engine optimizes the network for peak demand, ensuring you're never more than 40km from a high-speed charge.
                </p>
</div>
<div class="relative rounded-xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] bg-on-surface/40 border border-white/5 shadow-inner">
<!-- Map Placeholder Representation -->
<div class="absolute inset-0 flex items-center justify-center">
<img class="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay" data-alt="A sophisticated dark-mode satellite map of the Indian subcontinent showing illuminated high-speed highway corridors. Glowing electric blue nodes represent charging station hubs, connected by thin pulsating filaments of light that represent active traffic flow. The overall aesthetic is data-driven, cinematic, and professional, utilizing deep obsidian tones and bright neon highlights to signify a smart charging infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn4eL3ToJQXtGlcWzE4zHuOXGxATTq_ryMSsI6-QRakR1wr39r2wYz1UWVJ9q2hBgbp9i6LvL0klNkuy6PAx5ooajKV86ka7k6_BHDlX_DuhhmgfEyM4zNtWIwnRP1MECxd4B0gBzWNDfT6OSs4ItQgforUjygDRoI9lXr_22t1ceRYUxCtKVVQgrCeX21k2Viy_xPS8JloNNu-Eau89ZgSD-AG4cEnx85tiZnGkCnnV14ctqEKBdrxqATNBpENcfQYCyg-Eib_Eyo"/>
<!-- Decorative Map Nodes -->
<div class="absolute top-1/4 left-1/3 w-3 h-3 bg-secondary-fixed rounded-full shadow-[0_0_15px_#53e16f] animate-ping"></div>
<div class="absolute top-1/2 left-1/2 w-4 h-4 bg-primary-fixed-dim rounded-full shadow-[0_0_20px_#adc6ff]"></div>
</div>
<!-- Floating Data Overlay -->
<div class="absolute bottom-8 left-8 glass-panel p-6 rounded-lg text-white max-w-xs border border-white/10">
<div class="flex justify-between items-center mb-4">
<span class="font-label-md text-label-md">Live Statistics</span>
<span class="flex items-center gap-1 text-[10px] text-secondary-fixed-dim"><span class="w-1.5 h-1.5 bg-secondary-fixed rounded-full"></span> LIVE</span>
</div>
<div class="space-y-3">
<div class="flex justify-between items-center">
<span class="opacity-60 text-xs">Sessions Today</span>
<span class="font-bold">14,282</span>
</div>
<div class="flex justify-between items-center">
<span class="opacity-60 text-xs">Carbon Saved</span>
<span class="font-bold ml-5">42.5 Tons</span>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Feature Grid (Bento Style) -->
<section class="py-section-gap bg-surface">
<div class="max-w-7xl mx-auto px-container-desktop">
<h2 class="font-headline-lg text-headline-lg text-center mb-16 text-black font-semibold">Intelligence in Every Kilowatt</h2>
<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
<!-- Large Feature -->
<div class="md:col-span-8 bg-surface-container rounded-lg p-10 flex flex-col justify-between min-h-[400px] group overflow-hidden relative transition-all duration-500 hover:shadow-2xl">
<div class="relative z-10">
<span class="material-symbols-outlined text-4xl text-primary mb-6">bolt</span>
<h3 class="font-headline-md text-headline-md mb-4 text-black font-semibold">Ultra-Fast 350kW Charging</h3>
<p class="max-w-md text-on-surface-variant font-body-md text-body-md">
                            Get up to 300km of range in just 15 minutes. Our cooled-cable technology ensures consistent peak performance even in tropical climates.
                        </p>
</div>
<div class="absolute right-0 bottom-0 w-2/3 h-2/3 translate-x-12 translate-y-12 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
<span class="material-symbols-outlined text-[300px]" style="font-variation-settings: 'FILL' 1;">electric_car</span>
</div>
</div>
<!-- Small Feature 1 -->
<div class="md:col-span-4 bg-primary-container text-on-primary-container rounded-lg p-10 flex flex-col justify-end transition-all duration-300 hover:scale-[1.01]">
<span class="material-symbols-outlined text-4xl mb-6">smartphone</span>
<h3 class="font-headline-md text-headline-md mb-2">Smart App Control</h3>
<p class="opacity-80 font-body-md text-body-md">Remote start, live status, and automated payment triggers.</p>
</div>
<!-- Small Feature 2 -->
<div class="md:col-span-4 bg-surface-container-high rounded-lg p-10 flex flex-col justify-end border border-outline-variant/30">
<span class="material-symbols-outlined text-4xl text-tertiary mb-6">eco</span>
<h3 class="font-headline-md text-headline-md mb-2 text-black font-semibold">100% Renewable</h3>
<p class="text-on-surface-variant font-body-md text-body-md">Sourced from wind and solar farms to ensure a truly green journey.</p>
</div>
<!-- Large Feature 2 -->
<div class="md:col-span-8 bg-on-surface text-surface rounded-lg p-10 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
<div>
<h3 class="font-headline-md text-headline-md mb-4 text-primary-fixed-dim">AI Fleet Solutions</h3>
<p class="opacity-70 font-body-md text-body-md mb-6">
                            Intelligent load balancing and predictive maintenance for commercial operators. Scale your EV fleet with zero downtime.
                        </p>
<ul class="space-y-3 font-label-md text-label-md">
<li class="flex items-center gap-2 text-secondary-fixed-dim"><span class="material-symbols-outlined text-sm">check_circle</span> Real-time Telematics</li>
<li class="flex items-center gap-2 text-secondary-fixed-dim"><span class="material-symbols-outlined text-sm">check_circle</span> Dynamic Power Allocation</li>
<li class="flex items-center gap-2 text-secondary-fixed-dim"><span class="material-symbols-outlined text-sm">check_circle</span> Priority Booking API</li>
</ul>
</div>
<div class="relative">
<img class="rounded-xl object-cover h-64 w-full shadow-2xl" data-alt="A clean, minimalist commercial logistics hub featuring several modern white electric delivery vans charging at sleek charging stations. The lighting is crisp and even, simulating a bright midday daylight. The environment is orderly and high-tech, showcasing efficient infrastructure with a focus on professional fleet management and sustainable business operations in a modern architectural setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3euSMH1eFgp8eJ_dBrSE-9KNRF3SdwR15ils1JiJmzfqpp_mEJyUFwVjwjNbKLegGo47Om01HxeQusWuFMluYB0lWN6XrEdhgmTJ4boYcb4TM5mhnQhUykhylSdLvz35Shy7CCzXBYpxevCucQqHfbuMS82vBFJtqnvhbjGKxVbLNl2WSk7BFFv8ZQTq5qxwB9cjQahs5z7qlsBUqO4odFXB7NroRFvy-MbAUSmkO5ULU91y2ZUV1jXGHZ6V0lyr9wYEXoELJrguF"/>
</div>
</div>
</div>
</div>
</section>
<!-- Mobile App Showcase (Apple Style) -->
<section class="py-section-gap bg-background overflow-hidden">
<div class="max-w-7xl mx-auto px-container-desktop">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div class="order-2 lg:order-1 relative h-[600px]">
<!-- Phone Frame 1 -->
<div class="absolute left-0 top-0 w-64 h-[520px] bg-on-surface rounded-[40px] p-4 shadow-2xl border-4 border-outline-variant/20 z-20">
<div class="w-full h-full bg-surface rounded-[32px] overflow-hidden p-6 relative">
<div class="flex justify-between items-center mb-8">
<span class="material-symbols-outlined text-primary">menu</span>
<div class="w-8 h-8 rounded-full bg-surface-container"></div>
</div>
<h4 class="font-headline-md text-headline-md text-primary mb-6">Active Session</h4>
<div class="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center">
<svg class="w-full h-full -rotate-90">
<circle class="stroke-surface-container-highest" cx="80" cy="80" fill="none" r="70" stroke-width="12"></circle>
<circle class="stroke-primary" cx="80" cy="80" fill="none" r="70" stroke-dasharray="440" stroke-dashoffset="110" stroke-linecap="round" stroke-width="12"></circle>
</svg>
<div class="absolute inset-0 flex flex-col items-center justify-center">
<span class="text-3xl font-black text-black">75%</span>
<span class="text-[10px] uppercase tracking-tighter opacity-50 text-black ">Charging</span>
</div>
</div>
<button class="w-full bg-primary text-on-primary py-3 rounded-full text-xs font-bold">Finish Session</button>
</div>
</div>
<!-- Phone Frame 2 (Dark Mode UI) -->
<div class="absolute left-32 top-20 w-64 h-[520px] bg-on-surface rounded-[40px] p-4 shadow-2xl border-4 border-outline-variant/20 z-10 opacity-80 translate-z-[-20px]">
<div class="w-full h-full bg-inverse-surface rounded-[32px] overflow-hidden relative">
<img class="w-full h-full object-cover opacity-40" data-alt="A dark-themed mobile app user interface mockup displaying a detailed digital map of a city with multiple charging station pin icons in electric blue. The UI features sleek translucent panels, minimalist white iconography, and a floating search bar. The lighting on the phone screen is sharp and clear, emphasizing a high-precision navigation experience for electric vehicle drivers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1iOwC7HVeY77MME9a2jam4P98BoNoAi3p7I5_zJCJHBv8UsbDWOpaj0xIiZz_D0e-Upwrl3gQQ3Ov2KXPY8OWk8N3uNv4XgYKY_-IWnh_t9PqwnhmwI_cBuksdEtUtAd92rCO-MDBgbGX4On0i606eLxN2dZ2k7g9ihOEU0Qlh2Kpkk7CsRceWHzE8-ow6_TpiiquQLGO2-4TGQTsnZKmwVkguxUtqLSYXT0A1VbyO6WrfKa2_5xwKPoVNw7frCQ8xANe2QeX1N11"/>
<div class="absolute bottom-4 left-4 right-4 bg-surface/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
<div class="text-[10px] text-white opacity-60">Closest Hub</div>
<div class="text-white font-bold text-sm">Station 04 - Sector 62</div>
<div class="text-primary-fixed-dim text-xs font-bold mt-1">4.2 km away</div>
</div>
</div>
</div>
</div>
<div class="order-1 lg:order-2">
<h2 class="font-display-lg text-headline-lg mb-8 text-black font-semibold">The Command Center in Your Pocket</h2>
<p class="text-on-surface-variant font-body-lg text-body-lg mb-10">
                        Intuitively designed to remove range anxiety. Monitor charging speed in real-time, pay with a single tap via UPI or corporate cards, and discover amenities around you.
                    </p>
<div class="space-y-6">
<div class="flex gap-6 items-start">
<div class="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-primary">analytics</span>
</div>
<div>
<h4 class="font-headline-md text-headline-md text-sm mb-1 text-black font-semibold">Session Analytics</h4>
<p class="text-on-surface-variant text-sm">Track energy consumption, costs, and carbon footprint reduction over time.</p>
</div>
</div>
<div class="flex gap-6 items-start">
<div class="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
<span class="material-symbols-outlined text-tertiary">near_me</span>
</div>
<div>
<h4 class="font-headline-md text-headline-md text-sm mb-1 text-black font-semibold">Route Planning</h4>
<p class="text-on-surface-variant text-sm">Smart trip planner that adds charging stops based on your vehicle's current SoC.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Charger Types Showcase -->
<section class="py-section-gap bg-surface-container-low">
<div class="max-w-7xl mx-auto px-container-desktop">
<div class="text-center mb-16">
<h2 class="font-headline-lg text-headline-lg text-black font-semibold">Hardware Excellence</h2>
<p class="text-on-surface-variant max-w-xl mx-auto mt-4">German-engineered power electronics met with award-winning aesthetic design.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Charger 1 -->
<div class="bg-surface rounded-lg p-1 transition-all hover:scale-[1.02] shadow-sm hover:shadow-xl">
<div class="h-80 rounded-t-lg overflow-hidden relative group">
<img class="w-full h-full object-cover" data-alt="A studio close-up of a premium DC fast charger for electric vehicles, showcasing its minimalist, brushed metallic finish and high-resolution status display. The design features integrated LED lighting strips that glow with a calm cyan light. The photography is clean, sharp, and focused, using high-key studio lighting with soft highlights on the metallic edges, symbolizing advanced engineering and luxury manufacturing." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9BjNfx-Oy8Z1Nmi1PWD1cph9h9EqRkO3Zt06jgOpSvwhVeLPDxCCjYu9IcHrO871YGT_UTtgLsGx43PAJTrdKS1K8ngFysMo2zBR-wnin3w1HpzQZmy58cgVScvjeFvIM72TVSovdBEIuhYgCUkPvvC5f0yiu8pi5ggNcFUIkJNKn0XlFXmZsXD4VYvtH4XXftJMmAwuHtO6pIhLxrWnkldmD-a4yO8LJ4npgOBtvKDyGBWV6j4Yiz7MyfcEwjT8ULtW5GJE8cXyS"/>
<div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span class="text-white font-label-md bg-primary px-4 py-2 rounded-full">350kW DC Fast</span>
</div>
</div>
<div class="p-8">
<h4 class="font-headline-md text-headline-md mb-2 text-black font-semibold">The Titan Hub</h4>
<p class="text-sm text-on-surface-variant mb-6">Designed for highway corridors. Simultaneous charging for 4 vehicles.</p>
<a class="text-primary font-label-md flex items-center gap-1 group" href="#">Technical Specs <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
</div>
</div>
<!-- Charger 2 -->
<div class="bg-surface rounded-lg p-1 transition-all hover:scale-[1.02] shadow-sm hover:shadow-xl">
<div class="h-80 rounded-t-lg overflow-hidden relative group">
<img class="w-full h-full object-cover" data-alt="A sleek, wall-mounted residential electric vehicle charger installed in a modern, luxury garage with polished concrete floors. The charger has a compact, pill-shaped design with a high-gloss black finish and a subtle glowing green ring indicator. The ambient lighting is warm and domestic, emphasizing how the high-tech equipment integrates seamlessly into a premium home environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcdIRqHheHUJa3wSzfHSggPdIKDLx8-jbmNlFp0YBKSAPuRPcrgkq1BRVKe7AhWa9sq4nu2TsMIGPyq0FPBLHXvQthVnMOFt5nCgH69J62veARv8_4UAffXKZvd5ORXDH49hVRjJhBLHCGkhyK_mO9q5XsbPOJhtxi1pBsL4hPQvNjPsBELmqX8_GCCEDPuAjpIHSEQYqTzobSPiotkEQrivxt_MZJk6SEKJ3zoOR_d8SzeF_uSz1kpaFECFSur7Z6HmZVWy611UFb"/>
<div class="absolute inset-0 bg-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span class="text-white font-label-md bg-tertiary px-4 py-2 rounded-full">22kW Home Pro</span>
</div>
</div>
<div class="p-8">
<h4 class="font-headline-md text-headline-md mb-2 text-black font-semibold">Residential Core</h4>
<p class="text-sm text-on-surface-variant mb-6">Elegant wall-box solution for home and office parking spaces.</p>
<a class="text-tertiary font-label-md flex items-center gap-1 group" href="#">Technical Specs <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
</div>
</div>
<!-- Charger 3 -->
<div class="bg-surface rounded-lg p-1 transition-all hover:scale-[1.02] shadow-sm hover:shadow-xl">
<div class="h-80 rounded-t-lg overflow-hidden relative group">
<img class="w-full h-full object-cover" data-alt="A stylish urban electric vehicle charging kiosk integrated into a modern streetscape with lush greenery and sleek architectural lines. The charger has a slim profile with a large interactive touchscreen display showing station availability. The lighting is early morning soft sunlight, creating a fresh, sustainable, and eco-friendly atmosphere that highlights the fusion of technology and urban nature." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFaS_qE5pDTfTO6sAqofQf7IdJBWfGkerZX2o7TL7tZqt85wCjBFybPdIr6rBxV1kGgillTxhv8MoCkz_xDXCNjrwKRMCnX0gwU32ZSv-EzHsWFg9uYAu5RZoGLVuqI5Ezlb8hTTUvvJCmdtbThy4HvLQh1jaVysg9z3CC_t6_ss6yYIGFMLz1XbfdW0prQ_XmRq4wgRIolifrgXQ3G17WWAfuyVHDbKKFCfKhGerP_NVZFTKoB9PispUwhoFMKc09gLVLMyTFMtng"/>
<div class="absolute inset-0 bg-on-surface/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<span class="text-white font-label-md bg-on-surface px-4 py-2 rounded-full">60kW Urban Hub</span>
</div>
</div>
<div class="p-8">
<h4 class="font-headline-md text-headline-md mb-2 text-black font-semibold">Street Series</h4>
<p class="text-sm text-on-surface-variant mb-6">Ultra-slim profile for city sidewalks and shopping complexes.</p>
<a class="text-on-surface font-label-md flex items-center gap-1 group" href="#">Technical Specs <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span></a>
</div>
</div>
</div>
</div>
</section>
<!-- Testimonials Section -->
<section class="py-section-gap">
<div class="max-w-7xl mx-auto px-container-desktop">
<h2 class="font-headline-lg text-headline-lg text-center mb-16">Trusted by the Road’s Elite</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<div class="p-8 rounded-xl bg-surface-container shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/10">
<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-full bg-slate-200"></div>
<div>
<div class="font-label-md text-label-md text-black font-semibold">Vikram S.</div>
<div class="text-xs opacity-50 text-black font-semibold">Taycan Owner</div>
</div>
</div>
<p class="font-body-md text-body-md italic text-on-surface-variant text-black font-semibold">"Uphill Echarge has fundamentally changed how I view long-distance travel in India. The reliability is unmatched."</p>
</div>
<div class="p-8 rounded-xl bg-primary-fixed-dim/10 border border-primary/10 shadow-lg">
<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-full bg-slate-300"></div>
<div>
<div class="font-label-md text-label-md text-white font-semibold">Ananya K.</div>
<div class="text-xs opacity-50 text-white font-semibold">Fleet Manager, GreenMo</div>
</div>
</div>
<p class="font-body-md text-body-md italic text-on-surface text-white font-semibold">"Integrating our 50-van fleet with their AI dashboard saved us 20% in energy costs last quarter. Professionalism at every node."</p>
</div>
<div class="p-8 rounded-xl bg-surface-container shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-outline-variant/10">
<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 rounded-full bg-slate-200"></div>
<div>
<div class="font-label-md text-label-md text-black font-semibold">Rahul M.</div>
<div class="text-xs opacity-50 text-black font-semibold">Early Adopter</div>
</div>
</div>
<p class="font-body-md text-body-md italic text-on-surface-variant text-black font-semibold">"The app is so smooth, it feels like it was designed in Cupertino. Finding a stall and paying is finally effortless."</p>
</div>
</div>
</div>
</section>
<!-- Partners / Footer CTA -->
<section class="py-section-gap bg-on-surface text-white">
<div class="max-w-7xl mx-auto px-container-desktop text-center">
<h2 class="font-headline-lg text-headline-lg mb-10">Power Your Business with Uphill</h2>
<div class="flex flex-wrap justify-center gap-12 opacity-40 mb-16">
<span class="font-headline-md text-headline-md tracking-tighter grayscale">VOLT MOTORS</span>
<span class="font-headline-md text-headline-md tracking-tighter grayscale">ZEON LOGISTICS</span>
<span class="font-headline-md text-headline-md tracking-tighter grayscale">URBAN GRID</span>
<span class="font-headline-md text-headline-md tracking-tighter grayscale">ECO RIDE</span>
</div>
<div class="inline-flex flex-col md:flex-row gap-6">
<button class="bg-primary text-on-primary px-10 py-5 rounded-full font-label-md text-label-md hover:shadow-[0_0_30px_rgba(0,88,188,0.5)] transition-all">Become a Partner</button>
<button class="bg-white/10 text-white px-10 py-5 rounded-full font-label-md text-label-md hover:bg-white/20 transition-all border border-white/20">Contact Sales</button>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-inverse-surface dark:bg-on-surface text-surface-variant/60">
<div class="max-w-7xl mx-auto px-container-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter border-t border-white/5">
<div class="space-y-6">
<div class="font-headline-md text-headline-md font-black text-white">Uphill Echarge</div>
<p class="text-sm">Building the world's most resilient charging infrastructure.</p>
</div>
<div class="space-y-4">
<div class="text-white font-semibold font-label-md uppercase tracking-wider">Company</div>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-white transition-colors" href="#">Locations</a></li>
<li><a class="hover:text-white transition-colors" href="#">Support</a></li>
<li><a class="hover:text-white transition-colors" href="#">Investors</a></li>
</ul>
</div>
<div class="space-y-4">
<div class="text-white font-semibold font-label-md uppercase tracking-wider">Legal</div>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a class="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a class="hover:text-white transition-colors" href="#">Safety</a></li>
</ul>
</div>
<div class="space-y-4">
<div class="text-white font-semibold font-label-md uppercase tracking-wider">Newsletter</div>
<div class="relative">
<input class="bg-white/5 border border-white/10 rounded-full px-6 py-3 w-full text-sm focus:outline-none focus:border-primary" placeholder="Email Address" type="text"/>
<button class="absolute right-2 top-2 bg-white text-on-surface p-1 rounded-full"><span class="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto px-container-desktop py-8 border-t border-white/5 text-center text-xs opacity-40">
            © 2026 Uphill Echarge. Engineered for the Infinite Road.
        </div>
</footer>
</body></html>
        `,
      }}
    />
  )
}