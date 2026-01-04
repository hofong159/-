import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, MapPin, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";


/**
 * 災害風險地圖頁面
 * 展示校園周邊曾發生淹水或其他災害的位置
 */
export default function RiskMap() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* 導航欄 */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/")}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-primary" />
              </button>
              <h1 className="text-xl font-bold text-primary">災害風險地圖</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <section className="container mx-auto px-4 py-16">
        {/* 頁面標題 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold text-primary">周邊災害風險區域</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            以下地點曾發生淹水或其他災害。了解這些風險區域有助於制定更有效的應變計畫。
          </p>
        </div>

        {/* 災害位置卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* 鳳山車站 */}
          <Card className="border-2 border-accent overflow-hidden">
            <div className="relative h-80 bg-gray-200 overflow-hidden">
              <img
                src="/images/fengshan-station-flooding.jpg"
                alt="鳳山車站淹水"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                淹水
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                鳳山車站
              </CardTitle>
              <CardDescription>高雄市鳳山區</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">災害類型</h4>
                <p className="text-sm text-muted-foreground">淹水災害</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">災害說明</h4>
                <p className="text-sm text-muted-foreground">
                  車站出入口遭淹，造成交通中斷，多人受困。此位置為校園東側主要交通樞紐，需特別注意。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">距離校園</h4>
                <p className="text-sm text-muted-foreground">約 500 公尺</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">應變建議</h4>
                <p className="text-sm text-muted-foreground">
                  暴雨期間應避免使用此路線，改用其他交通方式。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 校園低窪地區 */}
          <Card className="border-2 border-yellow-500 overflow-hidden">
            <div className="relative h-80 bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <span className="text-yellow-700 text-lg font-semibold">校園低窪地區</span>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                曾有問題
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-600" />
                校園南側低窪區
              </CardTitle>
              <CardDescription>正修科技大學校園內</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">問題類型</h4>
                <p className="text-sm text-muted-foreground">地勢低窪、易積水</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">問題說明</h4>
                <p className="text-sm text-muted-foreground">
                  校園南側地勢較低，特別是地下空間與低地勢區域，強降雨時匯水集中、排水不足，導致明顯積水。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">應變建議</h4>
                <p className="text-sm text-muted-foreground">
                  暴雨期間應避免進入低窪區域，疏散時優先使用高地勢路線。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 後門濱山街 */}
          <Card className="border-2 border-accent overflow-hidden">
            <div className="relative h-80 bg-gray-200 overflow-hidden">
              <img
                src="/images/binshan-street-flooding.jpg"
                alt="後門濱山街淹水"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                嚴重淹水
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                後門濱山街
              </CardTitle>
              <CardDescription>高雄市鳥松區</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">災害類型</h4>
                <p className="text-sm text-muted-foreground">嚴重淹水災害</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">災害說明</h4>
                <p className="text-sm text-muted-foreground">
                  整條街道遭淹，商店不止水，交通完全中斷。此位置為校園後門主要出入口，風險等級最高。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">距離校園</h4>
                <p className="text-sm text-muted-foreground">約 200 公尺</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">應變建議</h4>
                <p className="text-sm text-muted-foreground">
                  暴雨期間應避免使用此路線，改用其他交通方式。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 大樓周邊排水不及區 */}
          <Card className="border-2 border-yellow-500 overflow-hidden">
            <div className="relative h-80 bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <span className="text-yellow-700 text-lg font-semibold">大樓周邊排水區</span>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                曾有問題
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-600" />
                大樓周邊排水不及區
              </CardTitle>
              <CardDescription>校園主要建築周邊</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">問題類型</h4>
                <p className="text-sm text-muted-foreground">排水不及、滲水</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">問題說明</h4>
                <p className="text-sm text-muted-foreground">
                  大樓外牆底部或地下層入口負荷過大，出現排水不及、滲水、積水、回流現象。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">應變建議</h4>
                <p className="text-sm text-muted-foreground">
                  暴雨期間應關閉地下層出入口，疏散時避免進入地下室。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 校園樹木倒伏區 */}
          <Card className="border-2 border-yellow-500 overflow-hidden">
            <div className="relative h-80 bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <span className="text-yellow-700 text-lg font-semibold">樹木倒伏區</span>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                曾有問題
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-600" />
                校園樹木倒伏區
              </CardTitle>
              <CardDescription>校園綠化區域</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">問題類型</h4>
                <p className="text-sm text-muted-foreground">樹木倒伏、樹根外露</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">問題說明</h4>
                <p className="text-sm text-muted-foreground">
                  校內出現樹倒現象，樹根外露及倒場，倒樹造成阻礙，影響疏散通道。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">應變建議</h4>
                <p className="text-sm text-muted-foreground">
                  強風期間應避免在樹木密集區活動，疏散時繞過倒樹區域。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 校園步道損壞區 */}
          <Card className="border-2 border-yellow-500 overflow-hidden">
            <div className="relative h-80 bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                <span className="text-yellow-700 text-lg font-semibold">步道損壞區</span>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                曾有問題
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-600" />
                校園步道損壞區
              </CardTitle>
              <CardDescription>校園主要通道</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">問題類型</h4>
                <p className="text-sm text-muted-foreground">步道破損、隆起、陷落風險</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">問題說明</h4>
                <p className="text-sm text-muted-foreground">
                  大雨後，校園出現破損、隆起或鋪面崩裂，地基被水沖刷，造成步道不平、陷落風險。
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">應變建議</h4>
                <p className="text-sm text-muted-foreground">
                  疏散時小心行走，避免踩踏破損步道，選擇安全通道。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 風險等級說明 */}
        <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
          <CardHeader>
            <CardTitle>風險等級說明</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-yellow-500 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-semibold text-foreground">低風險</p>
                <p className="text-sm text-muted-foreground">偶發性淹水，影響範圍小</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-orange-500 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-semibold text-foreground">中風險</p>
                <p className="text-sm text-muted-foreground">定期淹水，影響範圍中等</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-4 h-4 rounded-full bg-red-600 flex-shrink-0 mt-1"></div>
              <div>
                <p className="font-semibold text-foreground">高風險</p>
                <p className="text-sm text-muted-foreground">頻繁淹水，影響範圍大，需立即應變</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 返回按鈕 */}
        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首頁
          </Button>
        </div>
      </section>

      {/* 頁腳 */}
      <footer className="bg-slate-700 text-slate-50 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">正修科技大學</h4>
              <p className="text-sm text-slate-300">
                致力於校園安全與應急準備，保護全校師生與訪客的生命安全。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="/" className="hover:text-slate-100 transition-colors">概況</a></li>
                <li><a href="/risk-map" className="hover:text-slate-100 transition-colors">災害地圖</a></li>
                <li><a href="/evacuation-procedure" className="hover:text-slate-100 transition-colors">應變流程</a></li>
                <li><a href="/campus-facilities" className="hover:text-slate-100 transition-colors">校園設施</a></li>
                <li><a href="/improvements" className="hover:text-slate-100 transition-colors">改善方向</a></li>
                <li><a href="/about" className="hover:text-slate-100 transition-colors">關於</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">聯絡資訊</h4>
              <p className="text-sm text-slate-300 mb-2">校安中心</p>
              <p className="text-sm text-slate-300 mb-2">07-731-2787</p>
              <p className="text-sm text-slate-300 mb-2">0978-500-795</p>
              <p className="text-sm text-slate-300">緊急求助：119 / 110</p>
            </div>
          </div>

          {/* 頁尾聲明 */}
          <div className="border-t border-slate-600 pt-6 space-y-2 text-xs text-slate-300">
            <p><strong>共同建立人：</strong>王子銓、廖和風</p>
            <p><strong>版權所有 © 2026</strong>。翻印必究。</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#privacy" className="hover:text-slate-100 transition-colors">隱私權聲明</a>
              <span>|</span>
              <a href="#disclaimer" className="hover:text-slate-100 transition-colors">免責聲明</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
