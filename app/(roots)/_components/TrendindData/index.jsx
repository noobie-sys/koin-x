// TradingViewWidget.jsx
"use client";
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TrendingChart() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "symbol": "GALA",
      "width": "250",
      "height": "220",
      "locale": "en",
      "dateRange": "1M",
      "colorTheme": "light",
      "isTransparent": true,
      "autosize": false,
      "largeChartUrl": "",
      "chartOnly": true,
      "noTimeScale": true
    }`;
    container.current.appendChild(script);
  }, []);

  return (
    <>
      <div
        className="tradingview-widget-container rounded-lg w-full "
        ref={container}
      ></div>
    </>
  );
}

export default memo(TrendingChart);

// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a></div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>

//   </script>
// </div>
// <!-- TradingView Widget END -->
