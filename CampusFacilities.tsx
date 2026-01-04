import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield, Zap, Users, ArrowLeft, MapPin } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 校園設施介紹頁面
 * 介紹校園的避難設施與應急設備
 */
export default function CampusFacilities() {
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
              <h1 className="text-xl font-bold text-primary">校園設施</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <section className="container mx-auto px-4 py-16">
        {/* 頁面標題 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary">校園設施介紹</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            了解校園內的避難設施與應急設備，確保在緊急情況下能夠快速找到安全地點。
          </p>
        </div>

        {/* 避難集合點 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            避難集合點
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 勞工公園 */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle>勞工公園（鳥松區）</CardTitle>
                <CardDescription>主要避難集合點</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">基本信息</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 面積：54,696 平方公尺</li>
                    <li>• 容納人數：3,295 人</li>
                    <li>• 位置：校園西側</li>
                    <li>• 距離：約 300 公尺</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">設施</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ 開闊平地</li>
                    <li>✓ 飲用水設施</li>
                    <li>✓ 照明設備</li>
                    <li>✓ 廁所設施</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">疏散路線</h4>
                  <p className="text-sm text-muted-foreground">
                    從校園西門出發，沿著指示標誌前往公園
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 體育館 */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle>體育館</CardTitle>
                <CardDescription>備援避難場所</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">基本信息</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 面積：約 5,000 平方公尺</li>
                    <li>• 容納人數：1,500 人</li>
                    <li>• 位置：校園中央</li>
                    <li>• 距離：各地 100-200 公尺</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">設施</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ 室內空間</li>
                    <li>✓ 飲用水</li>
                    <li>✓ 廁所設施</li>
                    <li>✓ 醫療室</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">用途</h4>
                  <p className="text-sm text-muted-foreground">
                    惡劣天氣時的備援避難所
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 禮堂 */}
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <CardTitle>禮堂</CardTitle>
                <CardDescription>臨時避難場所</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">基本信息</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 面積：約 3,000 平方公尺</li>
                    <li>• 容納人數：800 人</li>
                    <li>• 位置：校園南側</li>
                    <li>• 距離：各地 150-300 公尺</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">設施</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ 室內空間</li>
                    <li>✓ 舞台區域</li>
                    <li>✓ 廁所設施</li>
                    <li>✓ 音響系統</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">用途</h4>
                  <p className="text-sm text-muted-foreground">
                    長期避難或集中安置
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 多功能教室 */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle>多功能教室</CardTitle>
                <CardDescription>臨時醫療與指揮中心</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">基本信息</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• 位置：各校區分散配置</li>
                    <li>• 容納人數：50-100 人</li>
                    <li>• 數量：3 個</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">設施</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✓ 室內空間</li>
                    <li>✓ 基本醫療設備</li>
                    <li>✓ 通訊設備</li>
                    <li>✓ 飲用水</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">用途</h4>
                  <p className="text-sm text-muted-foreground">
                    應變指揮、傷患收治
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 應急設備 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
            <Shield className="w-6 h-6" />
            應急設備
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 緊急照明 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  緊急照明系統
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>位置：</strong>校園所有走廊、樓梯、出口
                </p>
                <p>
                  <strong>功能：</strong>停電時自動啟動，提供照明
                </p>
                <p>
                  <strong>特點：</strong>電池供電，可持續 3 小時以上
                </p>
              </CardContent>
            </Card>

            {/* 滅火器 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  滅火器
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>位置：</strong>各樓層、廚房、機房
                </p>
                <p>
                  <strong>類型：</strong>乾粉、泡沫、二氧化碳
                </p>
                <p>
                  <strong>使用：</strong>按照標籤指示使用
                </p>
              </CardContent>
            </Card>

            {/* 防煙門 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-accent" />
                  防煙門
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>位置：</strong>各樓層樓梯間、走廊
                </p>
                <p>
                  <strong>功能：</strong>火災時自動關閉，阻止煙霧蔓延
                </p>
                <p>
                  <strong>注意：</strong>不要堵塞或損壞防煙門
                </p>
              </CardContent>
            </Card>

            {/* 指示標誌 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  指示標誌
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>類型：</strong>出口標誌、疏散路線、集合點
                </p>
                <p>
                  <strong>特點：</strong>夜光材料，停電時仍可見
                </p>
                <p>
                  <strong>用途：</strong>指引安全疏散方向
                </p>
              </CardContent>
            </Card>

            {/* 廣播系統 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  廣播系統
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>覆蓋：</strong>校園全區
                </p>
                <p>
                  <strong>功能：</strong>發布應變指令、疏散通知
                </p>
                <p>
                  <strong>備用：</strong>備用電源供電
                </p>
              </CardContent>
            </Card>

            {/* 醫療設備 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent" />
                  醫療設備
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>位置：</strong>醫療室、多功能教室
                </p>
                <p>
                  <strong>包括：</strong>急救箱、AED、擔架
                </p>
                <p>
                  <strong>人員：</strong>校護、訓練過的急救員
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 返回按鈕 */}
        <div className="flex justify-center">
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
      <footer className="bg-primary text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">正修科技大學</h4>
              <p className="text-sm text-blue-100">
                致力於校園安全與應急準備，保護全校師生與訪客的生命安全。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li><a href="/" className="hover:text-white transition-colors">首頁</a></li>
                <li><a href="/evacuation-procedure" className="hover:text-white transition-colors">應變流程</a></li>
                <li><a href="/campus-facilities" className="hover:text-white transition-colors">校園設施</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">聯絡資訊</h4>
              <p className="text-sm text-blue-100 mb-2">校安中心</p>
              <p className="text-sm text-blue-100 mb-2">07-731-2787</p>
              <p className="text-sm text-blue-100 mb-2">0978-500-795</p>
              <p className="text-sm text-blue-100">緊急求助：119 / 110</p>
            </div>
          </div>

          {/* 頁尾聲明 */}
          <div className="border-t border-blue-400 pt-6 space-y-2 text-xs text-blue-100">
            <p><strong>版權所有 © 2026 正修科技大學</strong>。翻印必究。</p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#privacy" className="hover:text-white transition-colors">隱私權聲明</a>
              <span>|</span>
              <a href="#disclaimer" className="hover:text-white transition-colors">免責聲明</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
