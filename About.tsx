import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Calendar, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * 關於分頁
 * 介紹網站的目的、共同建立人、更新時間與聯絡方式
 */
export default function About() {
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
              <h1 className="text-xl font-bold text-primary">關於本網站</h1>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要內容 */}
      <section className="container mx-auto px-4 py-16">
        {/* 頁面標題 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-primary">關於本網站</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            了解本網站的設計目的、共同建立人、更新時間與聯絡方式。
          </p>
        </div>

        {/* 網站目的 */}
        <Card className="mb-8 border-l-4 border-l-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              網站目的
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              本網站為正修科技大學設計，旨在提供校園師生與訪客完整的防災資訊、應變措施與安全指南。
            </p>
            <p className="text-muted-foreground">
              通過了解校園周邊的災害風險、應變流程與設施位置，我們能夠在緊急情況下做出正確的決定，保護自己和他人的生命安全。
            </p>
            <p className="text-muted-foreground">
              本網站致力於為校園社群提供完整的防災資訊與支援，確保每一位成員都能夠安全地應對潛在的災害威脅。
            </p>
          </CardContent>
        </Card>

        {/* 共同建立人 */}
        <Card className="mb-8 border-l-4 border-l-blue-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              共同建立人
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-blue-600">王</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">王子銓</p>
                  <p className="text-sm text-muted-foreground">網站設計與開發</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-green-600">廖</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">廖和風</p>
                  <p className="text-sm text-muted-foreground">內容規劃與資訊整合</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 更新時間 */}
        <Card className="mb-8 border-l-4 border-l-green-600">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              更新時間
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2"><strong>最後更新：</strong></p>
              <p className="text-lg font-semibold text-foreground">2026 年 1 月</p>
            </div>
            <p className="text-sm text-muted-foreground">
              本網站會定期更新內容，以確保提供最新的防災資訊與應變措施。
            </p>
          </CardContent>
        </Card>

        {/* 聯絡方式 */}
        <Card className="mb-8 border-l-4 border-l-amber-600">
          <CardHeader>
            <CardTitle>聯絡方式</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-foreground mb-2">校安中心</p>
              <p className="text-muted-foreground">07-731-2787</p>
              <p className="text-muted-foreground">0978-500-795</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">緊急求助</p>
              <p className="text-muted-foreground">消防：119</p>
              <p className="text-muted-foreground">警察：110</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">校園地址</p>
              <p className="text-muted-foreground">高雄市鳥松區科技路 1 號</p>
            </div>
          </CardContent>
        </Card>

        {/* 版權與聲明 */}
        <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20 mb-8">
          <CardHeader>
            <CardTitle>版權與聲明</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong>版權所有 © 2026 正修科技大學</strong>。翻印必究。
            </p>
            <p>
              本網站所有內容均為正修科技大學所有，未經許可不得擅自複製、修改或傳播。
            </p>
            <div className="pt-4 border-t border-primary/20">
              <p className="font-semibold text-foreground mb-2">隱私權聲明</p>
              <p>
                本網站尊重用戶隱私。我們不會收集個人識別資訊，除非您主動提供。所有訪問記錄僅用於改進網站服務。
              </p>
            </div>
            <div className="pt-4 border-t border-primary/20">
              <p className="font-semibold text-foreground mb-2">免責聲明</p>
              <p>
                本網站提供的資訊僅供參考，不構成法律建議或專業建議。在緊急情況下，請立即撥打 119（消防）或 110（警察）。
              </p>
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
