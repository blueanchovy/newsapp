import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author:
        'By <a href="/profiles/jessie-yeung">Jessie Yeung</a> and Adam Renton, CNN',
      title: "The latest on the Ukraine-Russia crisis: Live Updates - cnn.com",
      description:
        "Tensions between Moscow and Kyiv are at their highest in years, US President Biden announced a new round of sanctions following Russian President Putin recognizing two separatist pro-Moscow regions in Ukraine as independent. Follow here for the latest updates.",
      url: "https://www.cnn.com/europe/live-news/ukraine-russia-news-02-23-22/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220222174130-04-biden-0222-super-tease.jpg",
      publishedAt: "2022-02-23T10:12:00Z",
      content:
        'China has criticized Western sanctions on Russia and said it will not follow suit, calling the measures "never a fundamental and effective way to solve problems and saying it "always opposes any ille… [+2275 chars]',
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "'Empire' Actress Lindsey Pearlman History of Depression, 2 Suicide Notes Found - TMZ",
      description:
        "'Empire' and 'General Hospital' actress Lindsey Pearlman had a history of suffering from depression before being found dead in her car.",
      url: "https://www.tmz.com/2022/02/23/empire-actress-lindsey-pearlman-history-depression-suicide-note-death/",
      urlToImage:
        "https://imagez.tmz.com/image/8f/16by9/2022/02/22/8f076d28a25f4db3bfa99c7263e054b7_xl.jpg",
      publishedAt: "2022-02-23T09:00:00Z",
      content:
        'Lindsey Pearlman, the "Empire" and "General Hospital" actress who was found dead in her car Friday ... had a history of depression before committing suicide ... TMZ has learned.\r\nLaw enforcement sour… [+1130 chars]',
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "Kim Kardashian's Fleet of Cars Cost Over $100k in Custom Work - TMZ",
      description: "Kim K's luxury cars were not cheap to customize.",
      url: "https://www.tmz.com/2022/02/23/kim-kardashian-custom-cars-cost-100k-vogue-interview/",
      urlToImage:
        "https://imagez.tmz.com/image/44/16by9/2022/02/22/446b0fe05fd4404fa037b24ed49155b3_xl.jpg",
      publishedAt: "2022-02-23T08:50:00Z",
      content:
        "Kim Kardashian recently flaunted her armada of cars, which isn't only impressive because they're super-expensive luxury rides -- it turns out she also dropped 6 figures just to customize them.\r\nNow t… [+1213 chars]",
    },
    {
      source: {
        id: "fox-sports",
        name: "Fox Sports",
      },
      author: "FOX Sports",
      title: "USFL Draft: Every pick from Day 1 - FOXSports.com",
      description:
        "Day 1 of the USFL Draft is in the books. Here is the lowdown on every single pick.",
      url: "https://www.foxsports.com/stories/usfl/usfl-draft-every-pick-of-the-draft",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/02/1408/814/DraftAnnouncement-USFL-16x9.jpg?ve=1&tl=1",
      publishedAt: "2022-02-23T08:34:12Z",
      content:
        "Day 1 of the USFL Draft is in the books!\r\nThe 35-round inaugural draft is an exciting two-day event taking place in Birmingham, Alabama. Day 1 was on Tuesday, with 101 players selected across 12 roun… [+15309 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Ukraine starts drafting reservists aged 18-60 after president's order - Reuters",
      description:
        "Ukraine on Wednesday has started conscripting reservists aged 18-60 following a decree by President Volodymyr Zelenskiy, the armed forces said in a statement.",
      url: "https://www.reuters.com/world/europe/ukraine-starts-drafting-reservists-aged-18-60-after-presidents-order-2022-02-23/",
      urlToImage:
        "https://www.reuters.com/resizer/d-vb-0UrryfBkQAU8xlpMqJPezo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PS52553RSBKKREQ7MFCN7QBD2E.jpg",
      publishedAt: "2022-02-23T08:26:00Z",
      content: null,
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Sam Byford",
      title: "Vivo sub-brand launches iQOO 9 Pro flagship for $870 - The Verge",
      description:
        "The iQOO 9 and 9 Pro have been announced for launch in India. The highest-end model from the Vivo sub-brand starts at Rs. 64,990 (~$870).",
      url: "https://www.theverge.com/2022/2/23/22946939/vivo-iqoo-9-pro-india-launch-specs-price",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/I-PanoRQj2uZij_fZz5EbTCjU0g=/0x212:2953x1758/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23264887/5._iQOO_9_Pro.jpg",
      publishedAt: "2022-02-23T07:30:00Z",
      content:
        "Rally stripes included\r\nThe iQOO 9 Pro.\r\niQOO, Vivos gaming-focused sub-brand, has announced its latest flagship phones for launch in India, the iQOO 9 and 9 Pro. Like previous iQOO devices, they don… [+1372 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Trump-linked SPAC's shares surge as Truth Social app tops Apple downloads - Reuters",
      description:
        'Shares of Digital World Acquisition Corp <a href="https://www.reuters.com/companies/DWAC.O" target="_blank">(DWAC.O)</a>, the blank-check company behind former U.S. President Donald Trump\'s new social media venture, Truth Social, rose about 14% on Tuesday as …',
      url: "https://www.reuters.com/technology/trump-linked-digital-worlds-shares-surge-after-truth-social-app-launch-2022-02-22/",
      urlToImage:
        "https://www.reuters.com/resizer/xsTzJ2fxzsStgmBuveLyloCuAlw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XVXI6GMMTVPUDB5O7UPDM4I4YM.jpg",
      publishedAt: "2022-02-23T04:45:00Z",
      content:
        "Feb 22 (Reuters) - Shares of Digital World Acquisition Corp (DWAC.O), the blank-check company behind former U.S. President Donald Trump's new social media venture, Truth Social, rose about 14% on Tue… [+2366 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Reinfections with Omicron subvariants are rare, Danish study finds - Reuters",
      description:
        "Getting infected twice with two different Omicron coronavirus subvariants is possible, but rarely happens, a Danish study has found.",
      url: "https://www.reuters.com/business/healthcare-pharmaceuticals/reinfections-with-omicron-subvariants-are-rare-danish-study-finds-2022-02-22/",
      urlToImage:
        "https://www.reuters.com/resizer/UkwpIVIHNZLH_D-IU_klHMf9Rpo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VWKRJME2W5L6ZJJWCZJWGMYHLI.jpg",
      publishedAt: "2022-02-23T04:31:00Z",
      content:
        "COPENHAGEN, Feb 22 (Reuters) - Getting infected twice with two different Omicron coronavirus subvariants is possible, but rarely happens, a Danish study has found.\r\nIn Denmark, a more infectious subl… [+1687 chars]",
    },
    {
      source: {
        id: "independent",
        name: "Independent",
      },
      author: "Oliver O'Connell",
      title:
        "Trump news – live: Ex-president hails ‘savvy’ Putin’s ‘genius’ Ukraine move as E Jean Carroll case proceeds - The Independent",
      description: "Follow latest updates here",
      url: "https://www.independent.co.uk/news/world/americas/us-politics/trump-news-today-jan-6-supreme-court-latest-b2021078.html",
      urlToImage:
        "https://static.independent.co.uk/2022/02/20/11/SEI88647887.jpeg?quality=75&width=1200&auto=webp",
      publishedAt: "2022-02-23T04:22:47Z",
      content:
        "Ad trolls Trump over January 6 committee developments\r\nDonald Trump has hailed Russian President Vladimir Putin as savvy and called his move on Ukraine genius in a new interview. \r\nMr Putins steps to… [+7604 chars]",
    },
    {
      source: {
        id: null,
        name: "Hollywood Reporter",
      },
      author: "Ryan Gajewski",
      title:
        "Aaron Rodgers Apologizes to Shailene Woodley for Putting Her “In the Middle” of Vaccine Debate - Hollywood Reporter",
      description:
        "Aaron Rodgers spoke at length about his relationship with Shailene Woodley after sharing a tender photo of the pair together, while he also addressed how criticism of his COVID-19 vaccination status has affected his loved ones. The Green Bay Packers quarterba…",
      url: "https://www.hollywoodreporter.com/news/general-news/aaron-rodgers-shailene-woodley-apologizes-covid-vaccine-1235098132/",
      urlToImage:
        "https://www.hollywoodreporter.com/wp-content/uploads/2022/02/Aaron-Rodgers-Shailene-Woodley-Split-Getty-H-2022.jpg?w=1024",
      publishedAt: "2022-02-23T04:03:49Z",
      content:
        "Aaron Rodgers spoke at length about his relationship with Shailene Woodley after sharing a tender photo of the pair together, while he also addressed how criticism of his COVID-19 vaccination status … [+2921 chars]",
    },
    {
      source: {
        id: null,
        name: "YourTango",
      },
      author: "Ruby Miranda",
      title:
        "Why Gemini, Libra, And Sagittarius Will Have A Rough Horoscope On February 23, 2022 - YourTango",
      description:
        "For Gemini, Libra, and Sagittarius, are the three zodiac signs who will have a rough day on February 23, 2022, and that's because the Half Moon in Sagittarius activates change in their lives, and some of it is unexpected.",
      url: "https://www.yourtango.com/2022348465/zodiac-signs-gemini-libra-sagittarius-rough-horoscope-february-23-2022",
      urlToImage:
        "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiac-signs-rough-day-february-23-2022.jpg?itok=YG1NcoiH",
      publishedAt: "2022-02-23T04:02:36Z",
      content:
        "The Moon will be in Scorpio on Wednesday, and while this day, February 23, 2022, does not come with a promise of misery or misfortune, it does, however, bring with it the idea of repeated attempts th… [+3547 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Field Level Media",
      title:
        "Brian Flores says he turned down millions not signing Dolphins separation pact - New York Post ",
      description:
        "Attorneys for Brian Flores said that he left millions of dollars on the table by declining to sign a two-year non-disparagement agreement presented by Miami Dolphins’ owner Stephen Ross last …",
      url: "https://nypost.com/2022/02/22/brian-flores-i-left-millions-not-signing-dolphins-separation-pact/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/02/NFL-Head_Coach_Diversity.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2022-02-23T03:58:00Z",
      content:
        "Attorneys for Brian Flores said that he left millions of dollars on the table by declining to sign a two-year non-disparagement agreement presented by Miami Dolphins’ owner Stephen Ross last month.\r\n… [+2328 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Laura He",
      title:
        "Asian markets, Dow futures rebound despite US sanctions on Russia - CNN",
      description:
        'Asian markets and US stock futures staged a modest rebound on Wednesday, hours after the United States announced its first set of sanctions against Russia for what US President Joe Biden termed "the beginning of a Russian invasion" on Ukraine.',
      url: "https://www.cnn.com/2022/02/22/investing/dow-futures-asian-markets-russia-sanctions-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/220222191521-hong-kong-stock-exchange-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-02-23T03:27:00Z",
      content:
        "Asian markets and US stock futures staged a modest rebound on Wednesday, hours after the United States announced its first set of sanctions against Russia for what US President Joe Biden termed the b… [+2496 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Maegan Vazquez and Donald Judd, CNN",
      title:
        "Biden pledges to use 'every tool at our disposal' to limit gas price hikes after imposing new sanctions on Russia - CNN",
      description:
        'President Joe Biden on Tuesday pledged that his administration is using "every tool at our disposal" to limit the effect on gas prices in the US of sanctions he announced against Russia, acknowledging that Americans will likely see rising prices at the pump i…',
      url: "https://www.cnn.com/2022/02/22/politics/biden-gas-prices-russia/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220222174130-04-biden-0222-super-tease.jpg",
      publishedAt: "2022-02-23T03:20:00Z",
      content:
        '(CNN)President Joe Biden on Tuesday pledged that his administration is using "every tool at our disposal" to limit the effect on gas prices in the US of sanctions he announced against Russia, acknowl… [+5572 chars]',
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff reporter",
      title:
        "National guard troops to be deployed in DC as trucker convoy protests loom - The Guardian",
      description:
        "US protest to follow Canadian truckers’ demonstration against pandemic restrictions",
      url: "https://amp.theguardian.com/us-news/2022/feb/22/national-guard-deployed-dc-trucker-convoy",
      urlToImage:
        "https://i.guim.co.uk/img/media/83854d173accf2fedf9b652bb45f3e26193b85e0/0_237_4928_2957/master/4928.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e9c31901bc8a88025e6e816bcd9942b1",
      publishedAt: "2022-02-23T02:06:00Z",
      content:
        "The Pentagon is expected to approve the deployment of 700 to 800 unarmed national guard troops to the nations capital, a US official said on Tuesday, in the face of trucker convoys that are planning … [+3794 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Amy McGorry",
      title:
        "Fentanyl test strips can detect deadly opioid hidden in recreational drugs - Fox News",
      description:
        "Health professionals hope Fentanyl detecting test strips will help reduce the number of deaths related to the dangerous drug.",
      url: "https://www.foxnews.com/health/fentanyl-test-strips-detect-hidden-opioid-recreational-drugs",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2020/12/OLIVIA-JORDAN-FENTANYL-PILLS.jpg",
      publishedAt: "2022-02-23T01:12:42Z",
      content:
        "The rise in deaths tied to the deadly opioid fentanyl is prompting concern from the border, where it's crossing into the United States in record amounts, to research institutions across the country. … [+4216 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "2022 Free Agency Preview: Every Team's Cap Space & Key Contract Decisions - NFL",
      description:
        "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
      url: "https://www.youtube.com/watch?v=nO3JVMvV9gc",
      urlToImage: "https://i.ytimg.com/vi/nO3JVMvV9gc/maxresdefault.jpg",
      publishedAt: "2022-02-23T00:00:29Z",
      content: null,
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Emily Langer",
      title:
        "Paul Farmer dies; global public health advocate was 62 - The Washington Post",
      description:
        "Dr. Farmer, the subject of Tracy Kidder's book « Mountains Beyond Mountains, » devoted his professional life to improving health care in the most destitute corners of the world.",
      url: "https://www.washingtonpost.com/obituaries/2022/02/22/paul-farmer-global-health-dead/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GK23YQUT7MI6ZOZROT6ANQFDUU.jpg&w=1440",
      publishedAt: "2022-02-23T00:00:00Z",
      content:
        "Sometimes described as a modern-day Albert Schweitzer, Dr. Farmer was a doctor, a humanitarian and, by all accounts, an almost otherworldly force whose aspirations for global public health seemed una… [+6832 chars]",
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: "Zoe Zoe",
      title:
        "3 men convicted in Ahmaud Arbery's murder found guilty of federal hate crimes - CBS News",
      description:
        'Travis McMichael, Gregory McMichael and William "Roddie" Bryan were convicted of murder and other charges in November.',
      url: "https://www.cbsnews.com/news/ahmaud-arbery-trial-verdict-hate-crimes/",
      urlToImage:
        "https://cbsnews3.cbsistatic.com/hub/i/r/2022/01/06/d157aa87-5f63-483d-a9de-b3fba34b2fd5/thumbnail/1200x630/22c596881a6652059169d7e8aee207d0/ap21328693847840.jpg",
      publishedAt: "2022-02-23T00:00:00Z",
      content:
        'Three men convicted of murdering Ahmaud Arbery were found guilty in a federal hate crimes trial Tuesday. Travis McMichael, his father Gregory McMichael and their neighbor William "Roddie" Bryan were … [+3769 chars]',
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "PlayStation VR 2 design revealed - CNET",
      description:
        "Is this is the ultimate VR gaming headset?You can see Playstation 5 here - https://bit.ly/3v6OEAw*CNET may get a commission from these offers.Subscribe to CN...",
      url: "https://www.youtube.com/watch?v=XlbwzDz1wg4",
      urlToImage: "https://i.ytimg.com/vi/XlbwzDz1wg4/hqdefault.jpg",
      publishedAt: "2022-02-22T23:45:42Z",
      content: null,
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  key={element.url}
                  title={element.title.slice(0, 88)}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
