import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { UserCircle, ChevronLeft, ChevronRight } from "../components/icons";

// 개별 화면 컴포넌트
const LoginScreen = () => (
  <div className="flex flex-col items-center justify-center h-full gap-6 p-6">
    {/* 로고 */}
    <div className="flex flex-col items-center justify-center gap-2 text-center">
      <img src="/SSU-Logo.jpeg" alt="logo" className="w-32 h-32 mb-2" />
      <div className="text-3xl font-bold text-primary">
        숭실대학교<br/>AI/SW 융합학과 원우회
      </div>
    </div>

    {/* 로그인 폼 */}
    <div className="w-full max-w-xs space-y-4">
      <Input placeholder="아이디" className="h-12 text-lg" />
      <Input type="password" placeholder="비밀번호" className="h-12 text-lg" />
      <Button className="w-full h-12 text-lg rounded-2xl shadow-md bg-accent text-accent-foreground hover:bg-accent/90">로그인</Button>
    </div>
  </div>
);

const MainScreen = ({ activePage, setActivePage }) => {
  // 더미 데이터 - 게시판
  const posts = [
    { title: "[공지] 2024학년도 전기 원우회 모임 안내", author: "김세빈", time: "1시간 전", type: "공지" },
    { title: "[공지] 학과 세미나 신청 안내", author: "이윤우", time: "어제", type: "공지" },
    { title: "[공지] 융합학과 MT 일정 안내", author: "정수연", time: "3일 전", type: "공지" },
    { title: "[공지] 2024학년도 전기 장학금 신청 안내", author: "박지민", time: "1주일 전", type: "공지" },
    { title: "AI 스터디 모집합니다", author: "박지민", time: "2일 전", type: "게시판" },
    { title: "SW캡스톤 팀원 구합니다", author: "최준영", time: "3일 전", type: "게시판" },
    { title: "융합학과 MT 사진 공유", author: "정수연", time: "1주일 전", type: "게시판" },
    { title: "프로젝트 아이디어 논의해요", author: "한지우", time: "2주일 전", type: "게시판" },
  ];

  // 데이터 필터링
  const notices = posts.filter(post => post.type === "공지").slice(0, 3);
  const regularPosts = posts.filter(post => post.type === "게시판");

  // 더미 데이터 - 사용자 정보
  const contacts = [
    { name: "김인지", major: "AI/SW 융합학과", entry: "2023학년도 전기 입학" },
    { name: "이은치", major: "AI/SW 융합학과", entry: "2022학년도 후기 입학" },
    { name: "박시연", major: "AI/SW 융합학과", entry: "2023학년도 전기 입학" },
    { name: "최휘우", major: "AI/SW 융합학과", entry: "2024학년도 전기 입학" },
    { name: "정다윤", major: "AI/SW 융합학과", entry: "2022학년도 전기 입학" },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* 컨텐츠 영역 */}
      <div className="flex-1 overflow-y-auto p-4 pb-16">
        {activePage === "board" && (
          <div className="space-y-4">
            {/* 공지사항 섹션 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">공지사항</h2>
                <Button variant="ghost" className="text-xs text-accent hover:text-accent/80 p-1 h-auto" onClick={() => setActivePage("notices")}>
                  더보기
                </Button>
              </div>
              <div className="space-y-2">
                {notices.map((post, idx) => (
                  <Card key={idx} className="rounded-xl border-accent/10 hover:border-accent/20 transition-colors">
                    <CardContent className="p-3 space-y-0.5">
                      <p className="font-medium text-sm truncate">{post.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.author} · {post.time}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* 게시글 섹션 */}
            <div>
              <h2 className="text-lg font-semibold mb-2">게시글</h2>
              <div className="space-y-2">
                {regularPosts.map((post, idx) => (
                  <Card key={idx} className="rounded-xl border-accent/10 hover:border-accent/20 transition-colors">
                    <CardContent className="p-3 space-y-0.5">
                      <p className="font-medium text-sm truncate">{post.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {post.author} · {post.time}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activePage === "notices" && (
          <div className="space-y-3">
            <div className="flex items-center mb-2">
              <Button 
                variant="ghost" 
                className="mr-1 p-1" 
                onClick={() => setActivePage("board")}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <h2 className="text-lg font-semibold">전체 공지사항</h2>
            </div>
            <div className="space-y-2">
              {posts.filter(post => post.type === "공지").map((post, idx) => (
                <Card key={idx} className="rounded-xl border-accent/10 hover:border-accent/20 transition-colors">
                  <CardContent className="p-3 space-y-0.5">
                    <p className="font-medium text-sm truncate">{post.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {post.author} · {post.time}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activePage === "members" && (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold mb-2">원우 목록</h2>
            <Input placeholder="검색" className="h-9 mb-3 text-sm" />
            <div className="space-y-2">
              {contacts.map((c, idx) => (
                <Card key={idx} className="rounded-xl flex items-center p-2.5 gap-3 border-accent/10 hover:border-accent/20 transition-colors">
                  <UserCircle className="w-8 h-8 text-primary" />
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{c.name}</span>
                    <span className="text-xs text-muted-foreground">{c.major}, {c.entry}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 네비게이션 바 */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background border-t border-accent/20 flex justify-around items-center px-6">
        <button 
          className={`flex flex-col items-center justify-center ${activePage === "board" ? "text-accent" : "text-muted-foreground"}`}
          onClick={() => setActivePage("board")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          <span className="text-xs mt-1">게시판</span>
        </button>
        <button 
          className={`flex flex-col items-center justify-center ${activePage === "members" ? "text-accent" : "text-muted-foreground"}`}
          onClick={() => setActivePage("members")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-xs mt-1">원우 목록</span>
        </button>
      </div>
    </div>
  );
};

// 메인 갤러리 컴포넌트
export default function AppGallery() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("board");

  if (!isLoggedIn) {
    return (
      <div className="relative w-full max-w-sm mx-auto h-[700px] bg-background rounded-3xl overflow-hidden shadow-xl">
        <LoginScreen />
        {/* 데모용 자동 로그인 버튼 */}
        <Button 
          className="absolute bottom-4 right-4 text-xs bg-accent text-accent-foreground hover:bg-accent/90"
          onClick={() => setIsLoggedIn(true)}
        >
          데모 로그인
        </Button>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-sm mx-auto h-[700px] bg-background rounded-3xl overflow-hidden shadow-xl">
      <MainScreen activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
} 