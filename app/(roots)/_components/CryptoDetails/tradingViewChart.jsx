// TradingViewWidget.jsx
'use client'
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "710",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "D",
          "timezone": "Asia/Kolkata",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": true,
          "hide_top_toolbar": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <>
    <div className='w-full rounded-xl overflow-hidden'>

    <div className="tradingview-widget-container rounded-lg" ref={container} style={{ height: "100%", width: "100%" }} />
    </div>
    </>
     
  );
}

export default memo(TradingViewWidget);
