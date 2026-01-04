import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, Clock, Users, ArrowLeft, Zap } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 應變流程詳細說明頁面
 * 提供詳細的災害應變步驟與指南
 */
export default function EvacuationProcedure() {
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
              <h1 className="text-xl font-bold text-primary">應變流程</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <section className="container mx-auto px-4 py-16">
        {/* 頁面標題 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold text-primary">應變流程詳細說明</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            當災難發生時，按照以下步驟有序應變，可以最大程度保護自己和他人的生命安全。
          </p>
        </div>

        {/* 應變時間表 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8">應變時間表</h3>
          <div className="space-y-6">
            {/* 災害發生 - 0 分鐘 */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    災害發生（0 分鐘）
                  </CardTitle>
                  <span className="text-xs font-semibold bg-accent text-white px-3 py-1 rounded-full">
                    立即
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">保持冷靜</p>
                    <p className="text-sm text-muted-foreground">不要驚慌失措，深呼吸，準備應變</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">聽取廣播指示</p>
                    <p className="text-sm text-muted-foreground">校園廣播系統會發布應變指令</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">評估周圍環境</p>
                    <p className="text-sm text-muted-foreground">確認是否有立即危險</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 疏散階段 - 0-5 分鐘 */}
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    疏散階段（0-5 分鐘）
                  </CardTitle>
                  <span className="text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full">
                    關鍵
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">有序疏散</p>
                    <p className="text-sm text-muted-foreground">
                      沿著標示的逃生路線前往指定集合點，不要推擠或奔跑
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">幫助他人</p>
                    <p className="text-sm text-muted-foreground">
                      協助行動不便者、老人、兒童安全疏散
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">帶上重要物品</p>
                    <p className="text-sm text-muted-foreground">
                      如有時間，帶上身份證、手機等重要物品
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 集合階段 - 5-15 分鐘 */}
            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    集合階段（5-15 分鐘）
                  </CardTitle>
                  <span className="text-xs font-semibold bg-green-600 text-white px-3 py-1 rounded-full">
                    重要
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">到達安全地點</p>
                    <p className="text-sm text-muted-foreground">
                      在指定集合點集合，遠離危險區域
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">點名確認</p>
                    <p className="text-sm text-muted-foreground">
                      班級或部門進行點名，確認人員安全
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">等待指示</p>
                    <p className="text-sm text-muted-foreground">
                      保持安靜，等待應變人員進一步指示
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 後續應變 - 15 分鐘後 */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    後續應變（15 分鐘後）
                  </CardTitle>
                  <span className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
                    持續
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">配合指揮</p>
                    <p className="text-sm text-muted-foreground">
                      配合應變人員、消防隊、警察的指揮
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">提供協助</p>
                    <p className="text-sm text-muted-foreground">
                      如有能力，協助應變人員進行救援或疏散
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">聯絡家人</p>
                    <p className="text-sm text-muted-foreground">
                      在安全的情況下，通知家人您的狀況
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 特殊情況應變 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary mb-8">特殊情況應變</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">被困在建築物內</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 保持冷靜，不要試圖跳樓</p>
                <p>• 移動到安全位置（遠離窗戶）</p>
                <p>• 使用手機或敲擊聲音吸引救援人員注意</p>
                <p>• 等待專業救援隊伍</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">在戶外遭遇災害</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 遠離建築物、樹木、電線</p>
                <p>• 尋找開闊、安全的地方</p>
                <p>• 避免進入淹水區域</p>
                <p>• 聽從廣播指示前往避難所</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">有人受傷</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 立即通知應變人員或撥打 119</p>
                <p>• 不要移動重傷患者</p>
                <p>• 提供基本急救（如止血）</p>
                <p>• 保持患者意識清醒</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">失散家人或朋友</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• 留在集合點等待</p>
                <p>• 告知應變人員失散人員信息</p>
                <p>• 不要離開指定區域尋找</p>
                <p>• 使用廣播系統尋人</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 重要提醒 */}
        <Card className="bg-accent/10 border-2 border-accent mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <AlertCircle className="w-6 h-6" />
              重要提醒
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              ⚠️ <strong>不要使用電梯</strong> - 災害時電梯可能停止運作，應使用樓梯
            </p>
            <p>
              ⚠️ <strong>不要回頭</strong> - 疏散後不要返回建築物取回遺忘的物品
            </p>
            <p>
              ⚠️ <strong>不要聚集</strong> - 在疏散路線上不要停留或聚集
            </p>
            <p>
              ⚠️ <strong>遵守指示</strong> - 始終遵守應變人員的指示
            </p>
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
