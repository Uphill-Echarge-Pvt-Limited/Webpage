import React from 'react';

export default function Page() {
  return (
    <div className="bg-[#fcf8fb] text-[#1b1b1d] font-sans overflow-x-hidden antialiased">
      {/* Top Navigation Shell */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl rounded-full border border-white/20 bg-[#fcf8fb]/10 backdrop-blur-xl flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 z-50 shadow-[0px_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:scale-[1.01]">
        <div className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#1b1b1d]">
          Uphill Echarge
        </div>
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <a className="text-sm font-bold text-[#0058bc]" href="#">Network</a>
          <a className="text-sm font-semibold text-[#1b1b1d]/70 hover:text-[#1b1b1d] transition-colors" href="#">Experience</a>
          <a className="text-sm font-semibold text-[#1b1b1d]/70 hover:text-[#1b1b1d] transition-colors" href="#">Sustainability</a>
          <a className="text-sm font-semibold text-[#1b1b1d]/70 hover:text-[#1b1b1d] transition-colors" href="#">Fleet</a>
        </div>
        <button className="bg-[#0058bc] text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-300">
          Get Started
        </button>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Premium EV charging station at dusk" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_op5UuX2B_6_jYHhKZbSsa-Za58QkF9EGkOzs0vrR5pESNdOGqxnK-Ds81o32vD4_ZzLW2loRn1jPK5mBe0A7QRYDLR9w7ETBg6iP58-gbh9E7sGaQOyQ0XVU61vqYQE2KF-nu2sSAco7FJeWSm9y9djHSdlz-GEl4iSnch-5ZAFmEaawTK4EZo9QmOUbB8HnzDMPiDKCMAozVIaEtO0vylweXssZ57ys_FaN7363DQykpqUqPF7n1lw1haRtTLgwoUaa93Qkcroj"
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#fcf8fb] via-[#fcf8fb]/70 lg:via-[#fcf8fb]/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 md:space-y-10 text-center lg:text-left pt-12 lg:pt-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Powering the<br className="hidden sm:block"/> Future of Mobility
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#414755] max-w-xl mx-auto lg:mx-0 font-medium">
              Engineered for reliability, designed for speed. Experience India's most advanced ultra-fast charging network tailored for the discerning EV driver.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <button className="bg-[#0058bc] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold flex items-center gap-2 hover:shadow-xl transition-all">
                Find Stations <span>📍</span>
              </button>
              <button className="bg-[#eae7ea] text-[#1b1b1d] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-[#e4e2e4] transition-all border border-[#717786]/10">
                Download App <span>📱</span>
              </button>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 justify-center lg:justify-self-end w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl flex-1 lg:w-64 lg:translate-x-12 shadow-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#6ffb85] flex items-center justify-center text-[#002107]">
                  ⚡
                </div>
                <span className="text-sm opacity-80 font-medium">Uptime</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#0058bc]">99.9%</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl flex-1 lg:w-72 shadow-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#007ea6] flex items-center justify-center text-white">
                  📍
                </div>
                <span className="text-sm opacity-80 font-medium">Network Growth</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-[#006384]">2,500+</div>
              <div className="text-xs opacity-70 mt-1">Active Hubs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Network Map Section */}
      <section className="bg-[#303032] py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-[#53e16f] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 block">Real-Time Connectivity</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">India's Premium Corridor</h2>
            <p className="text-[#e4e2e4]/70 max-w-2xl mx-auto text-sm sm:text-base">
              Seamless travel across state lines. Our intelligence engine optimizes the network for peak demand, ensuring you're never more than 40km from a high-speed charge.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-[#1b1b1d]/40 border border-white/5 shadow-inner">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay" 
                alt="Corridor Data Map" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn4eL3ToJQXtGlcWzE4zHuOXGxATTq_ryMSsI6-QRakR1wr39r2wYz1UWVJ9q2hBgbp9i6LvL0klNkuy6PAx5ooajKV86ka7k6_BHDlX_DuhhmgfEyM4zNtWIwnRP1MECxd4B0gBzWNDfT6OSs4ItQgforUjygDRoI9lXr_22t1ceRYUxCtKVVQgrCeX21k2Viy_xPS8JloNNu-Eau89ZgSD-AG4cEnx85tiZnGkCnnV14ctqEKBdrxqATNBpENcfQYCyg-Eib_Eyo"
              />
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#72fe88] rounded-full shadow-[0_0_15px_#53e16f] animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#adc6ff] rounded-full shadow-[0_0_20px_#adc6ff]"></div>
            </div>
            
            {/* Floating Data Overlay */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl text-white max-w-[240px] sm:max-w-xs border border-white/10">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-semibold">Live Statistics</span>
                <span className="flex items-center gap-1.5 text-[10px] text-[#53e16f] font-bold">
                  <span className="w-1.5 h-1.5 bg-[#72fe88] rounded-full animate-pulse"></span> LIVE
                </span>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center">
                  <span className="opacity-60">Sessions Today</span>
                  <span className="font-bold">14,282</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60 mr-2">Carbon Saved</span>
                  <span className="font-bold">42.5 Tons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid (Bento Style) */}
      <section className="py-16 md:py-24 bg-[#fcf8fb]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 text-[#1b1b1d]">
            Intelligence in Every Kilowatt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Large Feature 1 */}
            <div className="md:col-span-8 bg-[#f0edef] rounded-2xl p-8 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[400px] relative overflow-hidden transition-all duration-500 hover:shadow-2xl group">
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-[#0058bc]">⚡</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#1b1b1d]">Ultra-Fast 350kW Charging</h3>
                <p className="max-w-md text-[#414755] text-sm sm:text-base leading-relaxed">
                  Get up to 300km of range in just 15 minutes. Our cooled-cable technology ensures consistent peak performance even in tropical climates.
                </p>
              </div>
            </div>

            {/* Small Feature 1 */}
            <div className="md:col-span-4 bg-[#0070eb] text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-end min-h-[250px] transition-all duration-300 hover:scale-[1.01]">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Smart App Control</h3>
              <p className="opacity-80 text-sm sm:text-base">Remote start, live status, and automated payment triggers.</p>
            </div>

            {/* Small Feature 2 */}
            <div className="md:col-span-4 bg-[#eae7ea] rounded-2xl p-8 sm:p-10 flex flex-col justify-end min-h-[250px] border border-[#c1c6d7]/30">
              <div className="text-3xl mb-4 text-[#006384]">🌱</div>
              <h3 className="text-xl font-bold mb-2 text-[#1b1b1d]">100% Renewable</h3>
              <p className="text-[#414755] text-sm sm:text-base">Sourced from wind and solar farms to ensure a truly green journey.</p>
            </div>

            {/* Large Feature 2 */}
            <div className="md:col-span-8 bg-[#1b1b1d] text-white rounded-2xl p-8 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center overflow-hidden">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#adc6ff]">AI Fleet Solutions</h3>
                <p className="opacity-70 text-sm sm:text-base leading-relaxed">
                  Intelligent load balancing and predictive maintenance for commercial operators. Scale your EV fleet with zero downtime.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#53e16f] font-semibold">
                  <li className="flex items-center gap-2">✓ Real-time Telematics</li>
                  <li className="flex items-center gap-2">✓ Dynamic Power Allocation</li>
                  <li className="flex items-center gap-2">✓ Priority Booking API</li>
                </ul>
              </div>
              <div className="relative h-48 sm:h-full min-h-[180px]">
                <img 
                  className="rounded-xl object-cover w-full h-full shadow-2xl" 
                  alt="Commercial Logistics EV Hub" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3euSMH1eFgp8eJ_dBrSE-9KNRF3SdwR15ils1JiJmzfqpp_mEJyUFwVjwjNbKLegGo47Om01HxeQusWuFMluYB0lWN6XrEdhgmTJ4boYcb4TM5mhnQhUykhylSdLvz35Shy7CCzXBYpxevCucQqHfbuMS82vBFJtqnvhbjGKxVbLNl2WSk7BFFv8ZQTq5qxwB9cjQahs5z7qlsBUqO4odFXB7NroRFvy-MbAUSmkO5ULU91y2ZUV1jXGHZ6V0lyr9wYEXoELJrguF"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile App Showcase */}
      <section className="py-16 md:py-24 bg-[#fcf8fb] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Phone Visuals */}
            <div className="relative h-[420px] sm:h-[520px] w-full max-w-sm mx-auto order-2 lg:order-1">
              <div className="absolute left-0 top-0 w-[55%] h-[90%] bg-[#1b1b1d] rounded-[36px] p-3 shadow-2xl border-4 border-[#c1c6d7]/20 z-20">
                <div className="w-full h-full bg-[#fcf8fb] rounded-[28px] overflow-hidden p-4 relative flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4 text-xs font-bold text-[#0058bc]">
                      <span>☰</span>
                      <div className="w-6 h-6 rounded-full bg-[#f0edef]"></div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0058bc] text-center">Active Session</h4>
                    
                    {/* Ring Progress Indicator */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto my-4 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-8 border-[#e4e2e4]"></div>
                      <div className="absolute inset-0 rounded-full border-8 border-t-[#0058bc] border-r-[#0058bc] rotate-45"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-xl sm:text-2xl font-black text-black">75%</span>
                        <span className="text-[8px] tracking-tight opacity-50 font-bold text-black uppercase">Charging</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-[#0058bc] text-white py-2 rounded-full text-[10px] sm:text-xs font-bold">
                    Finish Session
                  </button>
                </div>
              </div>

              {/* Back Phone Screen */}
              <div className="absolute right-4 top-12 w-[55%] h-[90%] bg-[#1b1b1d] rounded-[36px] p-3 shadow-2xl border-4 border-[#c1c6d7]/20 z-10 opacity-80">
                <div className="w-full h-full bg-[#303032] rounded-[28px] overflow-hidden relative flex flex-col justify-end p-3">
                  <img 
                    className="absolute inset-0 w-full h-full object-cover opacity-40" 
                    alt="Map Screen UI" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1iOwC7HVeY77MME9a2jam4P98BoNoAi3p7I5_zJCJHBv8UsbDWOpaj0xIiZz_D0e-Upwrl3gQQ3Ov2KXPY8OWk8N3uNv4XgYKY_-IWnh_t9PqwnhmwI_cBuksdEtUtAd92rCO-MDBgbGX4On0i606eLxN2dZ2k7g9ihOEU0Qlh2Kpkk7CsRceWHzE8-ow6_TpiiquQLGO2-4TGQTsnZKmwVkguxUtqLSYXT0A1VbyO6WrfKa2_5xwKPoVNw7frCQ8xANe2QeX1N11"
                  />
                  <div className="relative z-10 bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/10 text-white text-[10px]">
                    <div className="opacity-60">Closest Hub</div>
                    <div className="font-bold truncate">Station 04 - Sector 62</div>
                    <div className="text-[#74d1ff] font-bold mt-0.5">4.2 km away</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Copy */}
            <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1b1d]">
                The Command Center in Your Pocket
              </h2>
              <p className="text-[#414755] text-base sm:text-lg leading-relaxed">
                Intuitively designed to remove range anxiety. Monitor charging speed in real-time, pay with a single tap via UPI or corporate cards, and discover amenities around you.
              </p>
              
              <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#d8e2ff] flex items-center justify-center flex-shrink-0 text-xl">
                    📊
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1b1b1d]">Session Analytics</h4>
                    <p className="text-sm text-[#414755]">Track energy consumption, costs, and carbon footprint reduction over time.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#c1e8ff] flex items-center justify-center flex-shrink-0 text-xl">
                    🗺️
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#1b1b1d]">Route Planning</h4>
                    <p className="text-sm text-[#414755]">Smart trip planner that adds charging stops based on your vehicle's current SoC.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hardware Excellence Showcase */}
      <section className="py-16 md:py-24 bg-[#f6f3f5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1b1d]">Hardware Excellence</h2>
            <p className="text-[#414755] max-w-xl mx-auto mt-3 text-sm sm:text-base">
              German-engineered power electronics met with award-winning aesthetic design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Charger Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 sm:h-72 lg:h-80 relative overflow-hidden group">
                <img className="w-full h-full object-cover" alt="Titan Hub Fast Charger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9BjNfx-Oy8Z1Nmi1PWD1cph9h9EqRkO3Zt06jgOpSvwhVeLPDxCCjYu9IcHrO871YGT_UTtgLsGx43PAJTrdKS1K8ngFysMo2zBR-wnin3w1HpzQZmy58cgVScvjeFvIM72TVSovdBEIuhYgCUkPvvC5f0yiu8pi5ggNcFUIkJNKn0XlFXmZsXD4VYvtH4XXftJMmAwuHtO6pIhLxrWnkldmD-a4yO8LJ4npgOBtvKDyGBWV6j4Yiz7MyfcEwjT8ULtW5GJE8cXyS"/>
                <div className="absolute inset-0 bg-[#0058bc]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="text-white text-xs font-bold bg-[#0058bc] px-4 py-1.5 rounded-full">350kW DC Fast</span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-[#1b1b1d]">The Titan Hub</h4>
                <p className="text-xs sm:text-sm text-[#414755]">Designed for highway corridors. Simultaneous charging for 4 vehicles.</p>
                <a className="text-[#0058bc] text-xs sm:text-sm font-bold flex items-center gap-1 pt-2" href="#">
                  Technical Specs <span>→</span>
                </a>
              </div>
            </div>

            {/* Charger Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 sm:h-72 lg:h-80 relative overflow-hidden group">
                <img className="w-full h-full object-cover" alt="Home Charger Box" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcdIRqHheHUJa3wSzfHSggPdIKDLx8-jbmNlFp0YBKSAPuRPcrgkq1BRVKe7AhWa9sq4nu2TsMIGPyq0FPBLHXvQthVnMOFt5nCgH69J62veARv8_4UAffXKZvd5ORXDH49hVRjJhBLHCGkhyK_mO9q5XsbPOJhtxi1pBsL4hPQvNjPsBELmqX8_GCCEDPuAjpIHSEQYqTzobSPiotkEQrivxt_MZJk6SEKJ3zoOR_d8SzeF_uSz1kpaFECFSur7Z6HmZVWy611UFb"/>
                <div className="absolute inset-0 bg-[#006384]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="text-white text-xs font-bold bg-[#006384] px-4 py-1.5 rounded-full">22kW Home Pro</span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-[#1b1b1d]">Residential Core</h4>
                <p className="text-xs sm:text-sm text-[#414755]">Elegant wall-box solution for home and office parking spaces.</p>
                <a className="text-[#006384] text-xs sm:text-sm font-bold flex items-center gap-1 pt-2" href="#">
                  Technical Specs <span>→</span>
                </a>
              </div>
            </div>

            {/* Charger Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-64 sm:h-72 lg:h-80 relative overflow-hidden group">
                <img className="w-full h-full object-cover" alt="Urban Kiosk Charger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFaS_qE5pDTfTO6sAqofQf7IdJBWfGkerZX2o7TL7tZqt85wCjBFybPdIr6rBxV1kGgillTxhv8MoCkz_xDXCNjrwKRMCnX0gwU32ZSv-EzHsWFg9uYAu5RZoGLVuqI5Ezlb8hTTUvvJCmdtbThy4HvLQh1jaVysg9z3CC_t6_ss6yYIGFMLz1XbfdW0prQ_XmRq4wgRIolifrgXQ3G17WWAfuyVHDbKKFCfKhGerP_NVZFTKoB9PispUwhoFMKc09gLVLMyTFMtng"/>
                <div className="absolute inset-0 bg-[#1b1b1d]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <span className="text-white text-xs font-bold bg-[#1b1b1d] px-4 py-1.5 rounded-full">60kW Urban Hub</span>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <h4 className="text-lg sm:text-xl font-bold text-[#1b1b1d]">Street Series</h4>
                <p className="text-xs sm:text-sm text-[#414755]">Ultra-slim profile for city sidewalks and shopping complexes.</p>
                <a className="text-[#1b1b1d] text-xs sm:text-sm font-bold flex items-center gap-1 pt-2" href="#">
                  Technical Specs <span>→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16">Trusted by the Road’s Elite</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-[#f0edef] border border-[#c1c6d7]/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-300"></div>
                <div>
                  <div className="text-sm font-bold text-[#1b1b1d]">Vikram S.</div>
                  <div className="text-xs opacity-50 font-semibold">Taycan Owner</div>
                </div>
              </div>
              <p className="text-sm sm:text-base italic text-[#414755] font-medium">
                "Uphill Echarge has fundamentally changed how I view long-distance travel in India. The reliability is unmatched."
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#adc6ff]/10 border border-[#0058bc]/10 shadow-md space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-400"></div>
                <div>
                  <div className="text-sm font-bold text-[#1b1b1d]">Ananya K.</div>
                  <div className="text-xs opacity-60 font-semibold">Fleet Manager, GreenMo</div>
                </div>
              </div>
              <p className="text-sm sm:text-base italic text-[#1b1b1d] font-medium">
                "Integrating our 50-van fleet with their AI dashboard saved us 20% in energy costs last quarter. Professionalism at every node."
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#f0edef] border border-[#c1c6d7]/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-300"></div>
                <div>
                  <div className="text-sm font-bold text-[#1b1b1d]">Rahul M.</div>
                  <div className="text-xs opacity-50 font-semibold">Early Adopter</div>
                </div>
              </div>
              <p className="text-sm sm:text-base italic text-[#414755] font-medium">
                "The app is so smooth, it feels like it was designed in Cupertino. Finding a stall and paying is finally effortless."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Partners / Footer CTA */}
      <section className="py-16 md:py-24 bg-[#1b1b1d] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-10">Power Your Business with Uphill</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 mb-12 md:mb-16 text-sm sm:text-base md:text-lg font-black tracking-wider">
            <span>VOLT MOTORS</span>
            <span>ZEON LOGISTICS</span>
            <span>URBAN GRID</span>
            <span>ECO RIDE</span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-sm sm:max-w-none mx-auto">
            <button className="bg-[#0058bc] text-white px-8 py-4 rounded-full text-sm font-bold hover:shadow-[0_0_30px_rgba(0,88,188,0.5)] transition-all">
              Become a Partner
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-white/20 transition-all border border-white/20">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#303032] text-[#e4e2e4]/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-gutter">
          <div className="space-y-4">
            <div className="text-xl font-black text-white">Uphill Echarge</div>
            <p className="text-xs sm:text-sm">Building the world's most resilient charging infrastructure.</p>
          </div>
          <div className="space-y-3">
            <div className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">Company</div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Locations</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Support</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Investors</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">Legal</div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Safety</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">Newsletter</div>
            <div className="relative max-w-xs">
              <input 
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 w-full text-xs sm:text-sm text-white focus:outline-none focus:border-[#0058bc]" 
                placeholder="Email Address" 
                type="text"
              />
              <button className="absolute right-1.5 top-1.5 bg-white text-[#1b1b1d] p-1 rounded-full text-xs font-bold w-6 h-6 flex items-center justify-center">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-6 border-t border-white/5 text-center text-[10px] sm:text-xs opacity-40">
          © {new Date().getFullYear()} Uphill Echarge. Engineered for the Infinite Road.
        </div>
      </footer>
    </div>
  );
}