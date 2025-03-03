import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import styled, { keyframes, ThemeProvider } from "styled-components";
import IntroImage from "./assets/image/introImage.png";
import { ScrollAnimationContainer } from "./components/ScrollAnimationContainer";
import Video from "./assets/video/video.mp4";
import AavecCms from "./assets/image/aavecCms.png";
import DigitalId from "./assets/image/digitalId.png";
import Eliga from "./assets/image/eliga.png";
import CursorXY from "./components/CursorXY";
import theme from "./theme";

function App() {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return; // 요소가 아직 준비되지 않은 경우 중단

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //요소 viewport
          setIsInViewport(true);
        } else {
          // setIsInViewport(false);
        }
      });
    };

    const options = { root: null, rootMargin: "0px", threshold: 0 };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current); // 요소 관찰 시작

    return () => {
      observer.disconnect(); // 컴포넌트 언마운트 시 관찰 중단
    };
  }, []);

  const [activeYear, setActiveYear] = useState(0);

  const yearArray = [
    {
      key: 0,
      title: "2017~2019",
      description: (
        <>
          <p>- 미림 마이스터고에서 개발 배움의 시작! </p>
          <p>- 신세계아이앤씨 주최 It's 챌린지 입상</p>
          <p>- 학급 부회장 임명</p>
          <p>- 28기 학생회 서기 임명</p>
          <p>- SQISoft 약 3개월간 현장실습생 시작!</p>
        </>
      ),
    },
    {
      key: 1,
      title: "2020~2023",
      description: (
        <>
          <p>- SQISoft 정규직 입사 (약 3년간 근무) </p>
          <p>- 연구소 : 레거시 사내시스템 유지보수</p>
          <p>- 연구소 : 사내직원 근태관리(휴가, 출퇴근) 시스템 개발</p>
          <p>
            - 미디어사업부 : 기업 사내카페 키오스크 관리자 시스템 개발 및
            유지보수
          </p>
          <p>- 한국 방송통신 대학교 입학</p>
          <a href="https://blog.naver.com/sqisoftmedia/222742995352">
            - SQISoft Frontend 개발자 인터뷰
          </a>
        </>
      ),
    },
    {
      key: 2,
      title: "2023~2025",
      description: (
        <>
          <p>- [이직] RaonSecure 정규직 입사 </p>
          <p>- 한국 방송통신대학교 학사 졸업 (3.7/4.5)</p>
          <p>- 정보처리기사 자격증 취득, 토익 685점 취득</p>
          <p>- 사원 {`->`} 선임 진급</p>
          <p>- [외주] Avvec Studio 웹페이지 구축 및 AWS 배포</p>
          <p>--------------------------------------</p>
          <p>- 옴니원개발팀 : 인도네시아 POC 데모페이지 Front 개발</p>
          <p>
            - 옴니원개발팀 : 관리자페이지 2개 초기 셋팅 및 개발 참여 "정" 담당
          </p>
          <a href="https://blog.naver.com/funraon/223506757781">
            - RaonSecure Frontend 개발자 인터뷰
          </a>
        </>
      ),
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ParentsContainer>
        <CursorXY />
        <ScrollAnimationContainer
          children={
            <PageArea>
              <IntroBox>
                <Title>안녕하세요.</Title>
                <SubTitle>Frontend 개발자 이서주입니다.</SubTitle>
                <SubArea>
                  <div></div>
                  <IntroArea src={IntroImage} alt="noImage" />
                </SubArea>
              </IntroBox>
            </PageArea>
          }
        />
        <ScrollAnimationContainer
          children={
            <PageArea>
              <IntroBox>
                <Title>0️⃣. About Me!</Title>

                <MyIntroBox>
                  반갑습니다! 전 현재 Frontend 개발자로 근무하고 있습니다.{" "}
                  <br />
                  저는 개발자란 새로운 언어와 트렌드에 경계없이 수용하는 마음을
                  가지고 있어야한다고 생각합니다. <br /> 그리하여 Node.js 스터디
                  및 Three.js, 함수형 프로그래밍을 공부하고 있습니다. <br />
                  또한, 제가 배운 내용들은{" "}
                  <a href={"https://potential-coding.tistory.com"}>
                    여기에서
                  </a>{" "}
                  공유하고 있습니다. <br />
                  저는 항상 더 나은 개발자가 되기위해 계속 노력하고 있습니다.{" "}
                  <br />
                  감사합니다.
                  <MyHistory>
                    <div id="yearNavBar">
                      {yearArray.map((item) => (
                        <div
                          id="yearCard"
                          className={`${
                            item.key === activeYear ? "active" : ""
                          } `}
                          onClick={() => setActiveYear(item.key)}
                        >
                          {item.title}
                        </div>
                      ))}
                    </div>
                    <div id="yearDetail">
                      {
                        yearArray.find((item) => item.key === activeYear)
                          ?.description
                      }
                    </div>
                  </MyHistory>
                </MyIntroBox>
              </IntroBox>
            </PageArea>
          }
        />
        <ScrollAnimationContainer
          children={
            <PageArea>
              <IntroBox>
                <Category>#Project</Category>
                <Title>1️⃣. Studio AAVEC</Title>

                <SubArea>
                  <ProjectDetail>
                    <div>
                      프로젝트 기간 : 2024.07~2024.08
                      <a href="https://studioaavec.com/">접속 URL</a>
                    </div>
                    <div>담당 업무</div>
                    <p>- HomePage, 콘텐츠 관리 용 CMS 페이지 개발 </p>
                    <p>- SquareSpace 도메인 {"->"} AWS에서 관리하도록 이전</p>
                    <p>- Figma 통해 웹 퍼블리싱 담당</p>
                    <p>- Node.js 통해 백엔드 서버 개발</p>
                    <p>- MySQL 사용하여 쿼리 작성 </p>
                    <p>- EC2에 배포 경험</p>
                  </ProjectDetail>
                  <VideoTag
                    src={Video}
                    muted
                    playsinline
                    autoplay={true}
                    controls={true}
                  />
                </SubArea>
              </IntroBox>
            </PageArea>
          }
        />

        <ScrollAnimationContainer
          children={
            <PageArea>
              <IntroBox>
                <Category>#Project</Category>
                <Title>2️⃣. Eliga Order </Title>

                <SubArea>
                  <ProjectDetail>
                    <div>프로젝트 기간 : 2022.05~2022.10</div>
                    <div>담당 업무</div>
                    <p>- 기존 레거시 코드 유지보수 및 추가기능 개발 </p>
                    <div>Back Office</div>
                    <p>
                      - 사용자 메뉴 만족도 집계하여 push 전송 Lamda 스케줄링
                      개발
                    </p>
                    <p>- 수익 로그 상세조회 차트 리포트 페이지 개발</p>
                    <p>Kiosk</p>
                    <p>- Electron app 퍼블리싱 </p>
                    <p>
                      - 운영시간에 맞는 식단표가 나오도록 메뉴보드 화면 개발
                    </p>
                    <p>App</p>
                    <p>- 식단표 페이지 신규 리뉴얼 개발 및 유지보수 </p>
                  </ProjectDetail>
                  <ImageArea src={Eliga} alt="NO IMAGE" />
                </SubArea>
              </IntroBox>
            </PageArea>
          }
        />

        <ScrollAnimationContainer
          children={
            <PageArea>
              <IntroBox>
                <Category>#Project</Category>
                <Title>3️⃣. OmniOne DigitalId </Title>

                <SubArea>
                  <ProjectDetail>
                    <div>프로젝트 기간 : 2023.05~2024.06</div>
                    <div>담당 업무</div>
                    <p>- 관리자 & 클라이언트를 위한 백오피스 초기 개발 </p>
                    <p>- JWT 토큰 접속 유효시간 및 재 연장 기능 개발</p>
                    <p>- React i8n 다국어 구조 변환 작업 </p>
                    <p>- Redux saga/slice 구조 초기 설정 작업 진행 </p>
                    <p>
                      - Styled-Components 사용하여 공용 컴포넌트 개발 및 설계
                    </p>
                  </ProjectDetail>
                  <ImageArea src={DigitalId} alt="NO IMAGE" />
                </SubArea>
              </IntroBox>
            </PageArea>
          }
        ></ScrollAnimationContainer>
      </ParentsContainer>
    </ThemeProvider>
  );
}

const Category = styled.p`
  color: #0078d7;
  font-size: 1.2rem;
`;

const ProjectDetail = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.4rem;
  padding: 0.45rem;
  width: 28rem;
  /* border: 0.3px solid #e1e1e136; */
`;

const MyHistory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 1.2rem;
  flex-direction: column;
  #yearNavBar {
    display: flex;
    width: 100%;
    color: black;
  }
  #yearDetail {
    height: 100%;
    top: 0;
    align-self: flex-start;
    padding: 1.5rem;
    font-size: 0.9rem;
  }

  #yearCard {
    flex: 1;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3%;
    background-color: #0078d7;
    box-sizing: border-box;
    border: 1px solid black;
    cursor: pointer;
    &.active {
      background-color: #5791ff;
      color: white;
      border: 1px solid white;
    }
  }
`;

const MyIntroBox = styled.div`
  padding: 3rem;
  font-size: 1.3rem;
  line-height: 1.86rem;
`;

const ParentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const frameInAnimation = keyframes`
  0%{
    opacity: 0;
    transform: translateX(-100%);
  }

  100%{
    opacity: 1;
    transform: translateX(0%);
  }
`;

const SubArea = styled.div`
  display: flex;

  justify-content: space-between;
  width: 100%;
`;
const IntroArea = styled.img`
  width: 40%;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  filter: drop-shadow(4px 10px 0px pink);
  box-sizing: border-box;
`;

const ImageArea = styled.img`
  width: 40%;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  box-sizing: border-box;
`;

const VideoTag = styled.video`
  width: 40%;
  display: flex;
  box-sizing: border-box;
`;

const PageArea = styled.div`
  height: 100%;
  padding: 1.8rem;
  display: flex;
  justify-content: center;

  &.frame-in {
    animation: ${frameInAnimation} 2s forwards;
  }
`;

const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 70%;
`;

const Title = styled.p`
  font-size: 3rem;
`;

const SubTitle = styled.p`
  font-size: 2.4rem;
`;

const ListTitle = styled.p`
  font-size: 1.8rem;
`;

export default App;
