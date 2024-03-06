// TradingViewWidget.jsx
"use client";
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";


const TrendingMiniChart = ({symbol}) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "symbol": "${symbol}",
      "width": "100%",
      "height": "150",
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

export default memo(TrendingMiniChart);
