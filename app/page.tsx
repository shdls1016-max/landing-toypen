const shopUrl = "https://shdls1016-max.github.io/toypen/";
const announcementItems = [
  "✦ 5만원 이상 무료배송",
  "✦ 오늘 주문하면 딴짓력 +100",
  "✦ NEW PEN DROP",
];
const announcementLoop = Array.from(
  { length: 8 },
  () => announcementItems,
).flat();

const playItems = [
  {
    number: "01",
    tag: "말랑력 100%",
    title: "구름 꾹꾹,\n긴장도 꾹꾹",
    description: "문제 안 풀릴 땐 구름부터 눌러봐. 손끝은 바쁘고 머리는 잠깐 쉬는 중.",
    image: "/products/product-01.jpg",
    alt: "구름 말랑 스퀴시 볼펜",
    color: "yellow",
  },
  {
    number: "02",
    tag: "짝꿍 소환템",
    title: "공룡 한 마리,\n친구 한 마리",
    description: "필통에서 슬쩍 꺼내는 순간 시작되는 공룡 자랑. 필기는 그다음 문제.",
    image: "/products/product-02.jpg",
    alt: "쪼꼬미 공룡 노크펜",
    color: "pink",
  },
  {
    number: "03",
    tag: "변신력 MAX",
    title: "펜이었다가,\n로봇이었다가",
    description: "딸깍, 붙이고, 돌리고. 수업 전 10분을 순삭하는 마그네틱 변신펜.",
    image: "/products/product-16.jpg",
    alt: "마그네틱 피젯 변신펜",
    color: "green",
  },
];

const miniItems = [
  {
    title: "슛! 미니 농구 지우개함",
    price: "12,900원",
    image: "/products/product-12.jpg",
    label: "책상 위 3점슛",
  },
  {
    title: "미니바스켓 형광펜 4종",
    price: "6,500원",
    image: "/products/product-05.jpg",
    label: "친구랑 한 판",
  },
  {
    title: "과일 한입 지우개 세트",
    price: "4,900원",
    image: "/products/product-04.jpg",
    label: "빌려주기 아까움",
  },
  {
    title: "별하트 스탬프펜 3종",
    price: "6,600원",
    image: "/products/product-09.jpg",
    label: "낙서 완성템",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">
        <div className="announcementTrack" aria-label="플레이노트 쇼핑 혜택">
          <div className="announcementGroup">
            {announcementLoop.map((item, index) => (
              <span key={`announcement-a-${index}`}>{item}</span>
            ))}
          </div>
          <div className="announcementGroup" aria-hidden="true">
            {announcementLoop.map((item, index) => (
              <span key={`announcement-b-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="플레이노트 홈">
          PLAY<span>NOTE</span>
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#play-menu">PEN</a>
          <a href="#break-club">PLAY</a>
          <a href="#pick">PICK</a>
        </nav>
        <a className="shopPill" href={shopUrl} target="_blank" rel="noreferrer">
          <span className="shopLabel">SHOP</span>
          <span className="shopArrow" aria-hidden="true">→</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroNoise" aria-hidden="true" />
        <div className="heroCopy">
          <div className="heroStamp">
            <span>NEW DROP</span>
            <strong>딴짓 승인 완료 ✓</strong>
          </div>
          <p className="eyebrow">STUDY BREAK SUPPLY SHOP</p>
          <h1>
            필기는 핑계고
            <br />
            <mark>문구는 놀이다!</mark>
          </h1>
          <p className="heroDescription">
            평범한 펜은 잠깐 넣어둬.
            <br />
            눌러보고, 던져보고, 변신시키는 문구가 왔으니까.
          </p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#play-menu">
              오늘의 딴짓 고르기 <Arrow />
            </a>
          </div>
        </div>

        <div className="heroPlayground" aria-label="플레이노트 인기 문구">
          <div className="orbit orbitOne" aria-hidden="true">꾹</div>
          <div className="orbit orbitTwo" aria-hidden="true">딸깍!</div>
          <figure className="productCard cloudCard">
            <span className="tape" aria-hidden="true" />
            <img src="/products/product-01.jpg" alt="구름 말랑 스퀴시 볼펜" />
            <figcaption>구름 꾹꾹이 ☁</figcaption>
          </figure>
          <figure className="productCard dinoCard">
            <img src="/products/product-02.jpg" alt="쪼꼬미 공룡 노크펜" />
            <figcaption>짝꿍이 탐내는 중</figcaption>
          </figure>
          <figure className="productCard fidgetCard">
            <span className="hotBadge">BEST</span>
            <img src="/products/product-16.jpg" alt="마그네틱 피젯 변신펜" />
            <figcaption>공부 50 / 딴짓 10</figcaption>
          </figure>
        </div>
        <div className="scrollCue" aria-hidden="true">
          SCROLL TO PLAY <span>↓</span>
        </div>
      </section>

      <section className="playMenu section" id="play-menu">
        <div className="sectionIntro">
          <p className="eyebrow dark">PICK YOUR MISCHIEF</p>
          <h2>오늘은 뭐로<br />딴짓할래?</h2>
          <p>공부 쉬는 시간 10분을 제일 재밌게 쓰는 방법.<br />기분 따라 하나만 골라봐.</p>
        </div>
        <div className="playGrid">
          {playItems.map((item) => (
            <a
              className={`playCard ${item.color}`}
              href={shopUrl}
              target="_blank"
              rel="noreferrer"
              key={item.number}
            >
              <div className="playCardTop">
                <span>{item.number}</span>
                <span>{item.tag}</span>
              </div>
              <div className="playImage">
                <img src={item.image} alt={item.alt} />
                <span className="cornerArrow" aria-hidden="true">↗</span>
              </div>
              <h3>{item.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="breakClub section" id="break-club">
        <div className="clubHeader">
          <div>
            <p className="eyebrow light">PLAYNOTE LAB. 10MIN</p>
            <h2>공부 50분,<br /><span>딴짓 10분.</span></h2>
          </div>
          <p className="clubCopy">
            잠깐 놀아야 다시 집중할 수 있으니까.
            <br />
            PLAYNOTE 연구소가 만든 완벽한 쉬는 시간 루틴!
          </p>
        </div>
        <ol className="routine">
          <li>
            <span className="routineNumber">01</span>
            <div className="routineIcon squishIcon" aria-hidden="true">☁</div>
            <h3>꾹 누르고</h3>
            <p>말랑한 촉감으로<br />머릿속 버퍼 비우기</p>
          </li>
          <li>
            <span className="routineNumber">02</span>
            <div className="routineIcon aimIcon" aria-hidden="true">◎</div>
            <h3>툭 던지고</h3>
            <p>짝꿍과 미니게임<br />딱 한 판만 하기</p>
          </li>
          <li>
            <span className="routineNumber">03</span>
            <div className="routineIcon clickIcon" aria-hidden="true">✦</div>
            <h3>딸깍 돌리고</h3>
            <p>피젯펜 변신 성공하면<br />다시 집중 모드 ON</p>
          </li>
        </ol>
        <a className="button buttonLime" href={shopUrl} target="_blank" rel="noreferrer">
          연구소 추천템 보러가기 <Arrow />
        </a>
      </section>

      <section className="pickSection section" id="pick">
        <div className="pickHeader">
          <div>
            <p className="eyebrow dark">PASS IT TO YOUR BESTIE</p>
            <h2>친구한테<br />슬쩍 밀어보기</h2>
          </div>
          <p>
            “야, 이거 봐봐” 한마디면 이미 게임 시작.
            <br />
            반응 좋은 책상 위 장난템만 모았어.
          </p>
        </div>
        <div className="miniGrid">
          {miniItems.map((item, index) => (
            <a className="miniCard" href={shopUrl} target="_blank" rel="noreferrer" key={item.title}>
              <div className="rank">0{index + 1}</div>
              <div className="miniImage">
                <img src={item.image} alt={item.title} />
                <span>{item.label}</span>
              </div>
              <div className="miniInfo">
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
                <span className="miniArrow" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <div className="finalSticker" aria-hidden="true">NO BORING<br />STATIONERY!</div>
        <div>
          <p>필통이 심심해 보인다면?</p>
          <h2>재미 한 자루<br />챙겨갈 시간!</h2>
        </div>
        <a className="roundCta" href={shopUrl} target="_blank" rel="noreferrer">
          <span>PLAYNOTE<br />입장하기</span>
          <Arrow />
        </a>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top">PLAY<span>NOTE</span></a>
        <p>평범한 하루를 한 칸 더 재밌게 채우는 문구점.</p>
        <div>
          <span>© 2026 PLAYNOTE</span>
          <a href={shopUrl} target="_blank" rel="noreferrer">OFFICIAL SHOP ↗</a>
        </div>
      </footer>
    </main>
  );
}
