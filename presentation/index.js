// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Table, TableRow, TableItem, TableHeaderItem
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
  ember: require('../assets/ember-logo.png'),
  meteor: require('../assets/meteor-logo.png'),
  jquery: require('../assets/jquery-logo.png'),
  angular: require('../assets/angular-logo.png'),
  knockout: require('../assets/knockout-logo.png'),
  durandal: require('../assets/durandal-logo.png'),
  aurelia: require('../assets/aurelia-logo.png'),
  backbone: require('../assets/backbone-logo.png'),
  react: require('../assets/react-logo.png'),
  streetFighter: require('../assets/street-fighter-destroy-car.gif'),
  carReplaceTire: require('../assets/car-replace-tire-moving.jpg'),
  tropicThunder: require('../assets/tropic-thunder-explosion.gif'),
  everyone: require('../assets/everyone.gif'),
  reactInProduction: require('../assets/react-in-production.png'),
  fluxPattern: require('../assets/react-flux-pattern.png'),
  vdomExample: require('../assets/react-vdom-illustrated.png'),
  reactNativeAndroidIOS: require('../assets/react-native-android-ios.png')
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

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading fit caps lineHeight={1} textColor="white">
              Your Starting Line Up
            </Heading>

            <Table>
              <TableRow style={{textAlign: 'center'}}>
                <TableHeaderItem style={{color: 'black'}}><i className="fa fa-user" aria-hidden="true"></i></TableHeaderItem>
                <TableHeaderItem style={{color: 'black'}}><i className="fa fa-twitter" aria-hidden="true"></i></TableHeaderItem>
                <TableHeaderItem style={{color: 'black'}}><i className="fa fa-github" aria-hidden="true"></i></TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>Eric Nograles</TableItem>
                <TableItem>@grales</TableItem>
                <TableItem>github.com/ericnograles</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>John Hampton</TableItem>
                <TableItem>@johnrhampton</TableItem>
                <TableItem>github.com/johnrhampton</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Josh Burgess</TableItem>
                <TableItem>@_joshburgess </TableItem>
                <TableItem>github.com/joshburgess</TableItem>
              </TableRow>
            </Table>
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
              So, who uses React?
            </Heading>
            <Image src={images.everyone.replace("/", "")} width="700px" />
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image src={images.reactInProduction.replace("/", "")} width="700px" />
            <Cite style={{ fontSize: 20 }}>
              https://blog.formidable.com/using-react-is-a-business-decision-not-a-technology-choice-63c4641c5f7#.oh896hxxw
            </Cite>
            <Appear>
              <Heading size={2} margin='40px auto auto auto' caps fit textColor="tertiary">
                ...and Twitter, eBay, PayPal, The Economist, etc.
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Why should architects and developers care?
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>A simple mental model</ListItem></Appear>
              <Appear><ListItem>Fast by default</ListItem></Appear>
              <Appear><ListItem>Architecture allows for easier future transitions</ListItem></Appear>
              <Appear><ListItem>Truly cross-platform</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Heading size={1} caps fit textColor="tertiary">
              Why should decision makers care?
            </Heading>
            <List textColor="tertiary">
              <Appear><ListItem>Commercial backing</ListItem></Appear>
              <Appear><ListItem>Easier to pivot if needed</ListItem></Appear>
              <Appear><ListItem>Faster feature delivery</ListItem></Appear>
              <Appear><ListItem>Community momentum and support</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Heading size={1} caps fit textColor="tertiary">
              Simple means simple...
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/simple-react.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="">
            <Heading size={1} caps fit textColor="tertiary">
             Components can even be simple functions
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/simple-react-fn.example")}
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
              Free your front-end architecture
            </Heading>
            <Image src={images.fluxPattern.replace("/", "")} height="500px" />
          </Slide>

          <Slide transition={["zoom", "fade"]}>
            <Heading size={2} caps fit textColor="tertiary">
              unleash it on all platforms
            </Heading>
            <Image bgColor="white" src={images.reactNativeAndroidIOS.replace("/", "")} height="500px" />
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
              <Cite>Adam Ernst (Author of ComponentKit for iOS)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <BlockQuote>
              <Quote>
                [...] our bet paid off — we were able to ship Facebook's first fully React Native app on two platforms, with native look and feel
              </Quote>
              <Cite>Daniel Witte & Philip von Weiterhausen (Facebook Ads Manager)</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
