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
  Text
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
  react: require('../assets/react-logo.png'),
  streetFighter: require('../assets/street-fighter-destroy-car.gif'),
  carReplaceTire: require('../assets/car-replace-tire-moving.jpg'),
  tropicThunder: require('../assets/tropic-thunder-explosion.gif')
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
            <Image src={images.jquery.replace("/", "")} margin="0px auto 40px" width="300px" />
            <Image src={images.knockout.replace("/", "")} margin="0px auto 40px" width="300px" />
            <Image src={images.ember.replace("/", "")} margin="0px auto 40px" width="300px" />
            <Image src={images.meteor.replace("/", "")} margin="0px auto 40px" width="300px" />
            <Image src={images.angular.replace("/", "")} margin="0px auto 40px" width="300px" />
            <Heading size={1} caps fit>
              Great, another JavaScript framework...
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="black" notes="The V in MVC!">
            <Image src={images.react.replace("/", "")} margin="0px auto 40px" width="300px" />
            <Heading size={1} caps fit>
              ...only, this is technically not a framework.
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Appear fid="1">
              <Heading size={2} caps fit textColor="tertiary">
                The "V" in MVC
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textColor="tertiary">
                A thriving ecosystem
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={2} caps fit textColor="tertiary">
                Opinionated towards modularity and portability
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image src={images.tropicThunder.replace("/", "")} height="500px" />
            <Heading size={1} caps fit textColor="tertiary">
              The old way of moving to a new framework...
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]}>
            <Image src={images.carReplaceTire.replace("/", "")} height="500px" />
            <Heading size={1} caps fit textColor="tertiary">
              The preferred way...
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
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
