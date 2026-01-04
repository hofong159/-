import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, CheckCircle, Clock, Target, ArrowLeft, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 改善方向分頁
 * 介紹校園避難應變的短期、中期、長期改善計畫
 */
export default function Improvements() {
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
              <h1 className="text-xl font-bold text-primary">改善方向</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <section className="container mx-auto px-4 py-16">
        {/* 頁面標題 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold text-primary">改善方向</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            正修科技大學致力於不斷改善校園避難應變體系，以下是我們的短期、中期、長期改善計畫
          </p>
        </div>

        {/* 短期計畫 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-primary">短期計畫（1-6 個月）</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  更新應急預案
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 根據最新法規更新校園應急預案</p>
                <p>• 完善各部門應急職責分工</p>
                <p>• 建立應急聯絡機制與通訊錄</p>
                <p>• 制定應急物資儲備清單</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  加強應急標識
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 增加疏散標示與逃生路線圖</p>
                <p>• 更新集合點標識與說明</p>
                <p>• 安裝應急照明與警示燈</p>
                <p>• 繪製校園應急地圖</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  增加應急物資
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 購置應急醫療包與急救用品</p>
                <p>• 儲備應急飲用水與食品</p>
                <p>• 配置手電筒、電池、毛毯等物資</p>
                <p>• 建立應急物資儲備室</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  定期檢查設施
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 每月檢查消防設備與滅火器</p>
                <p>• 每季度檢查應急照明系統</p>
                <p>• 每半年檢查疏散標識與出口</p>
                <p>• 建立設施檢查記錄表</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 中期計畫 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-6 h-6 text-amber-600" />
            <h3 className="text-2xl font-bold text-primary">中期計畫（6-18 個月）</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  升級應急系統
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 升級校園廣播系統，增加覆蓋範圍</p>
                <p>• 安裝應急警報系統與警示燈</p>
                <p>• 建立應急通訊網絡與對講機系統</p>
                <p>• 配置應急發電機與備用電源</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  改善排水設施
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 升級校園排水系統，增加排水容量</p>
                <p>• 疏通下水道與排水溝</p>
                <p>• 在低窪地區安裝排水泵</p>
                <p>• 建立雨水收集與利用系統</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  建立應急中心
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 建立校園應急指揮中心</p>
                <p>• 配置應急通訊設備與監控系統</p>
                <p>• 建立應急醫療室與傷患收治點</p>
                <p>• 儲備應急物資與醫療用品</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600" />
                  配置應急車輛
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 購置應急救援車輛</p>
                <p>• 配置應急醫療車與運輸車</p>
                <p>• 建立應急車隊管理制度</p>
                <p>• 培訓應急駕駛員與操作人員</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 長期計畫 */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-6 h-6 text-red-600" />
            <h3 className="text-2xl font-bold text-primary">長期計畫（18 個月以上）</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  校園防災改造
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 進行校園結構加固與防震改造</p>
                <p>• 升級建築物防火性能</p>
                <p>• 改善校園排水與防淹設施</p>
                <p>• 建立防災綠化帶與緩衝區</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  建立智能預警系統
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 建立校園災害監測網絡</p>
                <p>• 配置地震、降雨、風速監測儀</p>
                <p>• 建立預警信息發布系統</p>
                <p>• 實現與政府部門的信息共享</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  完善應急保障體系
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 建立應急物資儲備基地</p>
                <p>• 建立應急人才培訓中心</p>
                <p>• 建立應急心理援助機制</p>
                <p>• 建立應急保險與賠償制度</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-600">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600" />
                  建立應急基地
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 建立校園應急避難基地</p>
                <p>• 建立應急物資儲備庫</p>
                <p>• 建立應急醫療救治中心</p>
                <p>• 建立應急指揮與協調中心</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 實施策略 */}
        <Card className="bg-blue-50 border-2 border-primary mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              實施策略
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">1. 組織領導</p>
              <p>成立校園防災應急工作領導小組，明確各部門職責與分工</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">2. 經費保障</p>
              <p>建立防災應急經費預算制度，確保改善計畫的資金投入</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">3. 人才培訓</p>
              <p>建立應急人才培訓機制，提升校園應急管理與救援能力</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">4. 定期評估</p>
              <p>建立改善計畫評估機制，定期檢查實施進度與效果</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">5. 社區合作</p>
              <p>與周邊社區、政府部門建立應急合作機制</p>
            </div>
          </CardContent>
        </Card>

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
