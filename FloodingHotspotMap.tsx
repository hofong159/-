import { useEffect, useRef, useState } from "react";

/**
 * 互動式淹水熱點地圖元件
 * 使用 Google Maps API 顯示校園周邊淹水熱點區域
 */
interface FloodingHotspot {
  id: string;
  name: string;
  lat: number;
  lng: number;
  severity: "low" | "medium" | "high";
  description: string;
  distance: string;
}

export default function FloodingHotspotMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<FloodingHotspot | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 淹水熱點資料
  const floodingHotspots: FloodingHotspot[] = [
    {
      id: "fengshan-station",
      name: "鳳山車站",
      lat: 22.6308,
      lng: 120.3497,
      severity: "medium",
      description: "車站出入口遭淹，造成交通中斷",
      distance: "約 500 公尺",
    },
    {
      id: "binshan-street",
      name: "後門濱山街",
      lat: 22.6295,
      lng: 120.3425,
      severity: "high",
      description: "整條街道遭淹，商店進水，交通完全中斷",
      distance: "約 200 公尺",
    },
    {
      id: "campus-gate",
      name: "校園主入口",
      lat: 22.6315,
      lng: 120.3445,
      severity: "low",
      description: "偶發性淹水，影響範圍小",
      distance: "校園邊界",
    },
    {
      id: "campus-south",
      name: "校園南側低窪區",
      lat: 22.6280,
      lng: 120.3450,
      severity: "medium",
      description: "校園內低窪地區，暴雨時易積水",
      distance: "校園內部",
    },
  ];

  // 獲取嚴重程度的顏色
  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case "high":
        return "#dc2626"; // 紅色
      case "medium":
        return "#f59e0b"; // 橙色
      case "low":
        return "#eab308"; // 黃色
      default:
        return "#6b7280"; // 灰色
    }
  };

  // 獲取嚴重程度的標籤
  const getSeverityLabel = (severity: string): string => {
    switch (severity) {
      case "high":
        return "高風險";
      case "medium":
        return "中風險";
      case "low":
        return "低風險";
      default:
        return "未知";
    }
  };

  useEffect(() => {
    // 檢查 Google Maps API 是否已加載
    if (typeof google === "undefined" || !google.maps) {
      setError("Google Maps API 未能正確加載。請稍後重試。");
      setIsLoading(false);
      return;
    }

    if (!mapContainer.current) return;

    try {
      // 初始化地圖
      const mapOptions: google.maps.MapOptions = {
        zoom: 15,
        center: { lat: 22.6300, lng: 120.3450 },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f3f3f3" }],
          },
        ],
      };

      map.current = new google.maps.Map(mapContainer.current, mapOptions);

      // 添加淹水熱點標記
      floodingHotspots.forEach((hotspot) => {
        // 建立自訂標記
        const marker = new google.maps.Marker({
          position: { lat: hotspot.lat, lng: hotspot.lng },
          map: map.current,
          title: hotspot.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: getSeverityColor(hotspot.severity),
            fillOpacity: 0.8,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          },
        });

        // 點擊標記時顯示資訊窗
        marker.addListener("click", () => {
          setSelectedHotspot(hotspot);

          // 建立資訊窗內容
          const infoContent = `
            <div style="font-family: 'Noto Sans TC', sans-serif; padding: 12px; min-width: 200px;">
              <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1e40af;">
                ${hotspot.name}
              </h3>
              <p style="margin: 4px 0; font-size: 13px; color: #666;">
                <strong>風險等級：</strong>
                <span style="color: ${getSeverityColor(hotspot.severity)}; font-weight: bold;">
                  ${getSeverityLabel(hotspot.severity)}
                </span>
              </p>
              <p style="margin: 4px 0; font-size: 13px; color: #666;">
                <strong>說明：</strong>${hotspot.description}
              </p>
              <p style="margin: 4px 0; font-size: 13px; color: #666;">
                <strong>距離校園：</strong>${hotspot.distance}
              </p>
            </div>
          `;

          // 建立資訊窗
          const infoWindow = new google.maps.InfoWindow({
            content: infoContent,
          });

          infoWindow.open(map.current, marker);
        });
      });

      // 添加熱力圖層
      if (google.maps.visualization) {
        const heatmapData = floodingHotspots.map((hotspot) => ({
          location: new google.maps.LatLng(hotspot.lat, hotspot.lng),
          weight: hotspot.severity === "high" ? 3 : hotspot.severity === "medium" ? 2 : 1,
        }));

        new google.maps.visualization.HeatmapLayer({
          data: heatmapData,
          map: map.current,
          radius: 50,
          opacity: 0.5,
        });
      }

      setIsLoading(false);
    } catch (err) {
      console.error("地圖初始化錯誤:", err);
      setError("地圖初始化失敗，請稍後重試。");
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-96 md:h-[500px] rounded-lg border border-border shadow-md flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">地圖加載中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-96 md:h-[500px] rounded-lg border border-border shadow-md flex items-center justify-center bg-red-50">
        <div className="text-center">
          <p className="text-red-600 font-semibold mb-2">⚠️ 地圖加載失敗</p>
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 地圖容器 */}
      <div
        ref={mapContainer}
        className="w-full h-96 md:h-[500px] rounded-lg border border-border shadow-md"
        style={{ minHeight: "400px" }}
      />

      {/* 熱點列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {floodingHotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="p-4 border-l-4 rounded-lg bg-gradient-to-r from-white to-gray-50 cursor-pointer hover:shadow-md transition-shadow"
            style={{ borderLeftColor: getSeverityColor(hotspot.severity) }}
            onClick={() => setSelectedHotspot(hotspot)}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-foreground">{hotspot.name}</h4>
              <span
                className="px-2 py-1 rounded text-xs font-semibold text-white"
                style={{ backgroundColor: getSeverityColor(hotspot.severity) }}
              >
                {getSeverityLabel(hotspot.severity)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{hotspot.description}</p>
            <p className="text-xs text-muted-foreground">
              <strong>距離：</strong> {hotspot.distance}
            </p>
          </div>
        ))}
      </div>

      {/* 選中熱點的詳細資訊 */}
      {selectedHotspot && (
        <div className="bg-blue-50 border-2 border-primary rounded-lg p-6">
          <h3 className="text-lg font-bold text-primary mb-4">{selectedHotspot.name} - 詳細資訊</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>風險等級：</strong>
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: getSeverityColor(selectedHotspot.severity) }}
                />
                <span className="font-semibold text-foreground">
                  {getSeverityLabel(selectedHotspot.severity)}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>距離校園：</strong>
              </p>
              <p className="font-semibold text-foreground">{selectedHotspot.distance}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground mb-1">
                <strong>災害說明：</strong>
              </p>
              <p className="text-foreground">{selectedHotspot.description}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>應變建議：</strong>
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                {selectedHotspot.severity === "high" && (
                  <>
                    <li>暴雨期間應立即關閉相關出入口</li>
                    <li>使用其他路線進出校園</li>
                    <li>加強監測水位變化</li>
                  </>
                )}
                {selectedHotspot.severity === "medium" && (
                  <>
                    <li>暴雨期間應避免使用此路線</li>
                    <li>改用其他交通方式</li>
                    <li>定期檢查排水設施</li>
                  </>
                )}
                {selectedHotspot.severity === "low" && (
                  <>
                    <li>正常情況下無特殊限制</li>
                    <li>極端降雨時應提高警覺</li>
                    <li>保持通道暢通</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 圖例 */}
      <div className="bg-gradient-to-r from-primary/5 to-blue-600/5 rounded-lg p-4 border border-primary/10">
        <h4 className="font-semibold text-foreground mb-3">地圖圖例</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-red-600"></div>
            <span className="text-sm text-muted-foreground">高風險 - 頻繁淹水，影響範圍大</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-amber-500"></div>
            <span className="text-sm text-muted-foreground">中風險 - 定期淹水，影響範圍中等</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            <span className="text-sm text-muted-foreground">低風險 - 偶發性淹水，影響範圍小</span>
          </div>
          <div className="mt-3 pt-3 border-t border-primary/20">
            <p className="text-xs text-muted-foreground">
              💡 <strong>提示：</strong>點擊地圖上的標記或下方的熱點卡片查看詳細資訊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
