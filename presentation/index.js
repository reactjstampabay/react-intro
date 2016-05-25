// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  // Fill,
  Heading,
  Image,
  // Layout,
  Link,
  ListItem,
  List,
  // Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
  // Table,
  // TableRow,
  // TableItem,
  // TableHeaderItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/presentation.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  ember: require("../assets/ember-logo.png"),
  meteor: require("../assets/meteor-logo.png"),
  jquery: require("../assets/jquery-logo.png"),
  angular: require("../assets/angular-logo.png"),
  knockout: require("../assets/knockout-logo.png"),
  durandal: require("../assets/durandal-logo.png"),
  aurelia: require("../assets/aurelia-logo.png"),
  backbone: require("../assets/backbone-logo.png"),
  react: require("../assets/react-logo.png"),
  streetFighter: require("../assets/street-fighter-destroy-car.gif"),
  carReplaceTire: require("../assets/car-replace-tire-moving.jpg"),
  tropicThunder: require("../assets/tropic-thunder-explosion.gif"),
  everyone: require("../assets/everyone.gif"),
  reactInProduction: require("../assets/react-in-production.png"),
  fluxPattern: require("../assets/react-flux-pattern.png"),
  reactHotReloading: require("../assets/react-hot-reloading.gif"),
  reactDeveloperTools: require("../assets/react-developer-tools.gif"),
  redux: require("../assets/redux.png"),
  reduxDevTools: require("../assets/redux-devtools.gif"),
  reduxTimeTravelDebugging: require("../assets/redux-time-travel-debugging.gif"),
  vdomExample: require("../assets/react-vdom-illustrated.png"),
  reactNativeAndroidIOS: require("../assets/react-native-android-ios.png")
};

preloader(images);

const theme = createTheme({
  primary: "#61dafb"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React
            </Heading>
            <Heading size={1} fit caps>
              A Competitive Edge and a Business Decision
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black" notes="Quick ditty on how we got here from other frameworks">
            <Image src={images.jquery.replace("/", "")} margin="0 auto 40px" width="300px" />
            <Image src={images.knockout.replace("/", "")} margin="0 auto 40px" width="300px" />
            <Image src={images.durandal.replace("/", "")} margin="0 auto 40px" width="300px" />
            <Image src={images.backbone.replace("/", "")} margin="0 20px 40px" width="300px" />
            <Image src={images.ember.replace("/", "")} margin="0 auto 40px" width="280px" />
            <Image src={images.meteor.replace("/", "")} margin="0 auto 40px" width="300px" />
            <Image src={images.angular.replace("/", "")} margin="0 20px 40px auto" width="300px" />
            <Image src={images.aurelia.replace("/", "")} margin="0 auto 40px" width="300px" />
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Great, another JavaScript framework...
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black" notes="The V in MVC!">
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" width="300px" />
            <Heading size={1} caps fit>
              ...only, this is technically not a framework.
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={2} caps fit textColor="tertiary">
              The "V" in MVC
            </Heading>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                With a thriving ecosystem
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                Opinionated towards modularity and portability
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Things to consider when evaluating new tech
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Commercial backing</ListItem></Appear>
              <Appear><ListItem>Overall momentum</ListItem></Appear>
              <Appear><ListItem>Size of community / amount of 3rd party resources</ListItem></Appear>
              <Appear><ListItem>Learning curve</ListItem></Appear>
              <Appear><ListItem>Performance</ListItem></Appear>
              <Appear><ListItem>Any extra, unique bonuses</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Why should decision makers care?
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Proven in production by industry giants</ListItem></Appear>
              {/* include hidden LIs to maintain layout spacing when returning back to this slide */}
              <ListItem style={{ visibility: "hidden" }}>Easier to pivot if necessary</ListItem>
              <ListItem style={{ visibility: "hidden" }}>Faster feature delivery</ListItem>
              <ListItem style={{ visibility: "hidden" }}>Community momentum and support</ListItem>
              <ListItem style={{ visibility: "hidden" }}>More excited & productive front-end teams</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Who is using React in production?
            </Heading>
            <Image src={images.everyone.replace("/", "")} width="900px" margin="40px 0 0 0" />
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image src={images.reactInProduction.replace("/", "")} width="900px" />
            <Cite style={{ fontSize: 20 }}>
              https://blog.formidable.com/using-react-is-a-business-decision-not-a-technology-choice-63c4641c5f7#.oh896hxxw
            </Cite>
            <Appear>
              <Heading size={2} margin="40px auto auto auto" caps fit textColor="tertiary">
                ...and eBay, PayPal, The Economist, etc.
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Why should decision makers care?
            </Heading>
            <List textColor="tertiary">
              <ListItem>Proven in production by industry giants</ListItem>
              <Appear><ListItem>Easier to pivot if necessary</ListItem></Appear>
              <Appear><ListItem>Faster feature delivery</ListItem></Appear>
              <Appear><ListItem>Community momentum and support</ListItem></Appear>
              <Appear><ListItem>More excited & productive front-end teams</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Why should engineers & architects care?
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>A simple mental model</ListItem></Appear>
              <Appear><ListItem>Vanilla JS instead of HTML-based templates</ListItem></Appear>
              <Appear><ListItem>Fast by default design</ListItem></Appear>
              <Appear><ListItem>Architecture allows for easier future transitions</ListItem></Appear>
              <Appear><ListItem>World class developer tools = great DX</ListItem></Appear>
              <Appear><ListItem>Truly cross-platform - “Learn once, write anywhere"</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Heading size={1} caps fit textColor="tertiary">
              A Simpler Mental Model
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/simple-react.example")}
              margin="20px auto"
            />
            <CodePane
              lang="html"
              source={require("raw!../assets/simple-react-html.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Heading size={1} caps fit textColor="tertiary">
             Or as a simple, pure function...
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/simple-react-fn.example")}
              margin="20px auto"
            />
            <CodePane
              lang="html"
              source={require("raw!../assets/simple-react-html.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image src={images.vdomExample.replace("/", "")} height="500px" />
            <Heading size={1} caps fit textColor="tertiary">
              Dark magic demystified
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Virtual DOM
            </Heading>
            <List textColor="tertiary">
              <ListItem>React never talks to the DOM directly</ListItem>
              <ListItem>React maintains a fast in-memory representation of the DOM</ListItem>
              <ListItem>Components render descriptions of the DOM</ListItem>
              <ListItem>
                React compares this description with the in-memory representation
                to compute the fastest way to update the browser
              </ListItem>
            </List>

            <Cite>https://facebook.github.io/react/docs/working-with-the-browser.html</Cite>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Image src={images.tropicThunder.replace("/", "")} height="500px" />
            <Heading size={1} caps fit textColor="tertiary">
              What we expect when switching frameworks...
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image src={images.carReplaceTire.replace("/", "")} height="500px" />
            <Heading size={1} caps fit textColor="tertiary">
              ...but, wouldn't this be nicer?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={2} caps fit textColor="tertiary">
              Bulletproof Architecture with Flux
            </Heading>
            <Image src={images.fluxPattern.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={2} caps fit textColor="tertiary">
              ...or, more simply, with Redux
            </Heading>
            <Image src={images.redux.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={2} caps fit textColor="tertiary">
              unleash it on all platforms
            </Heading>
            <Image bgColor="white" src={images.reactNativeAndroidIOS.replace("/", "")} height="500px" />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading size={1} caps textColor="tertiary">
              Awesome
            </Heading>
            <Heading size={1} caps textColor="primary">
              Developer
            </Heading>
            <Heading size={1} caps textColor="primary">
              Experience
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            {/* <Image bgColor="white" src={images.reactDeveloperTools.replace("/", "")} width="667px" /> */}
            <Image bgColor="white" src={images.reactDeveloperTools.replace("/", "")} width="1100px" margin="-140px auto 0 -90px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            {/* <Image bgColor="white" src={images.reactHotReloading.replace("/", "")} width="713px" /> */}
            <Image bgColor="white" src={images.reactHotReloading.replace("/", "")} width="1100px" margin="-140px auto 0 -90px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image bgColor="white" src={images.reduxDevTools.replace("/", "")} width="776px" margin="-80px auto 0 auto"/>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image bgColor="white" fir src={images.reduxTimeTravelDebugging.replace("/", "")} width="784px" margin="-140px auto 0 auto"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <BlockQuote>
              <Quote>
                React has exceeded our requirements and enabled us to build a tremendous foundation on which to innovate the Netflix experience.
              </Quote>
              <Cite>Jordanna Kwok (Netflix)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <BlockQuote>
              <Quote>
                I’d say that we’ve found React Native to be at least 5x more productive than traditional mobile development.
              </Quote>
              <Cite>Brian Leonard (Tasker)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <BlockQuote>
              <Quote>
                Steal shamelessly from React!
              </Quote>
              <Cite>Adam Ernst (ComponentKit)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <BlockQuote>
              <Quote>
                [...] our bet paid off — we were able to ship Facebook's first fully React Native app on two platforms, with native look and feel
              </Quote>
              <Cite>Daniel Witte & Philip von Weiterhausen (Facebook - Ads Manager)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              A Competitive Edge
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Universal coding language (really this time)</ListItem></Appear>
              <Appear><ListItem>Cross-platform development without compromise</ListItem></Appear>
              <Appear><ListItem>Delightful developer ergonomics</ListItem></Appear>
              <Appear><ListItem>Ecosystem > Monolith</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              A Business Decision
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Do more with less (really this time)</ListItem></Appear>
              <Appear><ListItem>Avoid future risk through modular, standards-based architecture</ListItem></Appear>
              <Appear><ListItem>Release better features faster across many platforms</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              One Last Thing...
            </Heading>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              These slides were built with React
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="primary" margin="40px 0">
                https://github.com/formidablelabs/spectacle
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="primary" margin="40px 0">
                https://github.com/reactjstampabay/react-intro
              </Heading>
            </Appear>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
