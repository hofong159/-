import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, MapPin, Users, Building2, BookOpen, Download, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

/**
 * 首頁 + 關於
 * 展示避難應變資訊概況與快速導航
 */
export default function Home() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* 導航欄 */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-primary">正修避難應變資訊網</h1>
            </div>
          </div>

          {/* 導覽標籤 */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                activeTab === "overview"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-foreground hover:bg-gray-200"
              }`}
            >
              概況
            </button>
            <button
              onClick={() => navigate("/risk-map")}
              className="px-4 py-2 rounded-lg font-semibold bg-gray-100 text-foreground hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4" />
              災害地圖
            </button>
            <button
              onClick={() => navigate("/evacuation-procedure")}
              className="px-4 py-2 rounded-lg font-semibold bg-gray-100 text-foreground hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              應變流程
            </button>
            <button
              onClick={() => navigate("/campus-facilities")}
              className="px-4 py-2 rounded-lg font-semibold bg-gray-100 text-foreground hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              校園設施
            </button>
            <button
              onClick={() => navigate("/improvements")}
              className="px-4 py-2 rounded-lg font-semibold bg-gray-100 text-foreground hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              改善方向
            </button>
            <button
              onClick={() => navigate("/about")}
              className="px-4 py-2 rounded-lg font-semibold bg-gray-100 text-foreground hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              關於
            </button>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      {activeTab === "overview" && (
        <>
          {/* 英雄區域 */}
          <section className="relative h-96 md:h-[500px] overflow-hidden">
            <img
              src="/images/cheng-shiu-gate.jpg"
              alt="正修大門"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">正修科技大學</h2>
                <p className="text-xl md:text-2xl">應急避難指南</p>
                <p className="text-sm md:text-base mt-4 max-w-2xl mx-auto px-4">
                  學習最新的避難空間資訊、應變措施與安全指南，我們致力於為校園社群提供完整的防災資訊與支援
                </p>
              </div>
            </div>
          </section>

          {/* 快速統計 */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground">校內避難集合點</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">3</div>
                  <p className="text-xs text-muted-foreground mt-2">個安全集合區域</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground">周邊避難場所</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">2</div>
                  <p className="text-xs text-muted-foreground mt-2">個疏散收容地點</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground">應變措施</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">多項</div>
                  <p className="text-xs text-muted-foreground mt-2">硬體與軟體措施</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-500">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground">改善計畫</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">進行中</div>
                  <p className="text-xs text-muted-foreground mt-2">短中長期規劃</p>
                </CardContent>
              </Card>
            </div>

            {/* 避難空間資訊 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                避難空間資訊
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">校內集合點</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-semibold text-foreground">1. 學生活動中心前廣場</p>
                      <p className="text-sm text-muted-foreground">容納人數：500-600 人</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">2. 校園南側停車場</p>
                      <p className="text-sm text-muted-foreground">容納人數：300-400 人</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">3. 圖書館前廣場</p>
                      <p className="text-sm text-muted-foreground">容納人數：200-300 人</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">周邊避難場所</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-semibold text-foreground">1. 高雄市立中山高中</p>
                      <p className="text-sm text-muted-foreground">距離：約 1.5 公里</p>
                      <p className="text-sm text-muted-foreground">容納人數：1000+ 人</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">2. 高雄市立鳥松國小</p>
                      <p className="text-sm text-muted-foreground">距離：約 0.8 公里</p>
                      <p className="text-sm text-muted-foreground">容納人數：800+ 人</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 現行措施 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-6">現行避難措施</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg">硬體措施</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">✓ 應急照明系統</p>
                    <p className="text-sm text-muted-foreground">✓ 應急廣播系統</p>
                    <p className="text-sm text-muted-foreground">✓ 滅火器與消防栓配置</p>
                    <p className="text-sm text-muted-foreground">✓ 疏散標示與逃生路線圖</p>
                    <p className="text-sm text-muted-foreground">✓ 應急集合點標識</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="text-lg">軟體措施</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">✓ 定期防災演練</p>
                    <p className="text-sm text-muted-foreground">✓ 應急預案制定</p>
                    <p className="text-sm text-muted-foreground">✓ 師生防災教育培訓</p>
                    <p className="text-sm text-muted-foreground">✓ 應急聯絡機制</p>
                    <p className="text-sm text-muted-foreground">✓ 應急物資儲備</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 改善方向 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-6">改善方向</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-t-4 border-t-blue-500">
                  <CardHeader>
                    <CardTitle className="text-lg">短期計畫</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">• 更新應急預案</p>
                    <p className="text-sm text-muted-foreground">• 加強應急標識</p>
                    <p className="text-sm text-muted-foreground">• 增加應急物資</p>
                    <p className="text-sm text-muted-foreground">• 定期檢查設施</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-amber-500">
                  <CardHeader>
                    <CardTitle className="text-lg">中期計畫</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">• 升級應急系統</p>
                    <p className="text-sm text-muted-foreground">• 改善排水設施</p>
                    <p className="text-sm text-muted-foreground">• 建立應急中心</p>
                    <p className="text-sm text-muted-foreground">• 配置應急車輛</p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-red-500">
                  <CardHeader>
                    <CardTitle className="text-lg">長期計畫</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">• 校園防災改造</p>
                    <p className="text-sm text-muted-foreground">• 建立智能預警系統</p>
                    <p className="text-sm text-muted-foreground">• 完善應急保障體系</p>
                    <p className="text-sm text-muted-foreground">• 建立應急基地</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 應變指南 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-6">應變指南</h3>
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6">
                <p className="text-red-700 font-semibold mb-4">⚠️ 災害發生時的應對步驟</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">保持冷靜</p>
                      <p className="text-sm text-muted-foreground">不要驚慌失措，聽從指揮</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">迅速疏散</p>
                      <p className="text-sm text-muted-foreground">按照疏散路線快速離開危險區域</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">到達安全地點</p>
                      <p className="text-sm text-muted-foreground">前往指定的集合點或避難場所</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">配合指揮</p>
                      <p className="text-sm text-muted-foreground">等待指揮人員的進一步指示</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 資源下載 */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <Download className="w-6 h-6" />
                資源下載
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 border-red-300">
                  <CardHeader>
                    <CardTitle className="text-lg">應變手冊</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      完整的避難應變資訊與操作指南
                    </p>
                    <Button
                      className="w-full gap-2"
                      onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/documents/基地調查-正修及周邊環境相關避難與應變.pdf";
                        link.target = "_blank";
                        link.download = "應變手冊.pdf";
                        link.click();
                      }}
                    >
                      <Download className="w-4 h-4" />
                      下載 PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">校園安全專題</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      校園安全與防災相關資料
                    </p>
                   <p className="text-muted-foreground">高雄市鳥松區澄清路840號</p>
              <p className="text-muted-foreground mt-4"><strong>周邊避難場所</strong></p>
              <p className="text-muted-foreground">文山高中</p>
              <p className="text-muted-foreground">鳥松濕地公園</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">防災演練計畫書</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      年度防災演練計畫與實施細則
                    </p>
                    <p className="text-xs text-muted-foreground">資料來源</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 頁腳 */}
      <footer className="bg-slate-700 text-slate-50 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-slate-100">正修科技大學</h4>
              <p className="text-sm text-slate-300">
                致力於校園安全與應急準備，保護全校師生與訪客的生命安全。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-slate-100">快速連結</h4>
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
              <h4 className="font-bold mb-4 text-slate-100">聯絡資訊</h4>
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
