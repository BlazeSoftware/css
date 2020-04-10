import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-modals',
})
export class Modals {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Modals</h2>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <div role="dialog" class="o-modal o-modal--visible">
            <div class="c-card">
              <header class="c-card__header">
                <button type="button" class="c-button c-button--close">
                  &times;
                </button>
                <h2 class="c-heading">Modal heading</h2>
              </header>

              <div class="c-card__body">This is the modal body</div>

              <footer class="c-card__footer">
                <button type="button" class="c-button c-button--brand">
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <div role="dialog" class="o-modal o-modal--visible">
            <div class="c-card">
              <header class="c-card__header">
                <button type="button" class="c-button c-button--close">
                  &times;
                </button>
                <h2 class="c-heading">Modal heading</h2>
              </header>

              <div class="c-card__body o-panel" style={{ height: '300px' }}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the
                all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day
                however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of
                Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
                Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven
                versalia, put her initial into the belt and made herself on the way. When she reached the first hills of
                the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the
                headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question
                ran over her cheek, then
              </div>

              <footer class="c-card__footer">
                <button type="button" class="c-button c-button--brand">
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <div role="dialog" class="o-modal o-modal--full o-modal--visible">
            <div class="c-card">
              <header class="c-card__header">
                <button type="button" class="c-button c-button--close">
                  &times;
                </button>
                <h2 class="c-heading">Modal heading</h2>
              </header>

              <div class="c-card__body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget neque mollis, sodales nulla ut,
                porta urna. Vivamus gravida placerat metus ac malesuada. Donec convallis dolor in ex tristique, luctus
                tempus dui sollicitudin. Suspendisse enim urna, auctor ac viverra eget, venenatis non massa. Nulla magna
                est, ullamcorper eget feugiat ac, condimentum id diam. Cras tempor felis sit amet facilisis
                sollicitudin. Ut posuere malesuada feugiat. Morbi ex ex, pretium sit amet dolor eget, malesuada gravida
                est. Nullam id malesuada massa, ac facilisis elit. Nullam ut metus sit amet nisi finibus mollis.
                Praesent augue felis, feugiat placerat aliquam ut, ultrices sit amet dolor. Phasellus porta ligula nec
                sapien tempus commodo. Pellentesque hendrerit aliquet ornare. Integer nec tempus quam, vitae bibendum
                lectus. Suspendisse vestibulum pulvinar neque at scelerisque. Suspendisse accumsan dolor vitae nulla
                commodo, volutpat commodo nunc bibendum. Integer ut magna ac velit pharetra molestie. Nullam vestibulum
                est mattis, posuere augue id, suscipit nulla. Praesent vestibulum sapien hendrerit, sodales elit et,
                eleifend est. Aliquam ornare iaculis diam, commodo iaculis erat consectetur a. Quisque ut porta est.
                Mauris vulputate est eu auctor vestibulum. Vestibulum velit libero, cursus vel viverra et, fringilla et
                est. Donec nibh ipsum, finibus eu urna sed, ullamcorper sollicitudin velit. Vestibulum ante ipsum primis
                in faucibus orci luctus et ultrices posuere cubilia Curae; Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Nulla sit amet bibendum nunc, ut iaculis tellus. Aenean ornare velit vel venenatis
                scelerisque. Ut ac elit enim. Nulla nec congue ex. Cras nulla ligula, porttitor non pulvinar fermentum,
                hendrerit sit amet neque. Etiam pulvinar suscipit metus, at lobortis erat eleifend id. Suspendisse
                scelerisque sem et orci rhoncus posuere. Vivamus faucibus mi et feugiat elementum. Nulla tempor, ligula
                non ullamcorper condimentum, lorem lorem sagittis tortor, at interdum tellus nunc elementum purus. Nulla
                tincidunt augue nibh. Ut et augue a ex pretium sodales. Pellentesque quam neque, tincidunt eu fringilla
                nec, volutpat eget risus. Fusce sit amet arcu sodales, vestibulum quam vel, lacinia mauris. Mauris ut
                placerat libero, eu gravida lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia
                felis vel nibh blandit, in vestibulum nisl congue. Integer ac dignissim nisi, id vehicula tellus. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere vitae
                metus in fermentum. Quisque venenatis ut eros at posuere. Etiam pulvinar, ipsum eu interdum vestibulum,
                arcu urna dapibus lorem, quis volutpat tortor enim sed leo. Donec dapibus lacinia purus. Nullam ac
                porttitor ligula. Fusce aliquet mauris tortor, id euismod neque tempus vel. Fusce luctus ex et volutpat
                pretium. Nulla varius justo quis aliquam accumsan.
              </div>

              <footer class="c-card__footer">
                <button type="button" class="c-button c-button--brand">
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <div role="dialog" class="o-modal o-modal--ghost o-modal--visible o-container o-container--medium">
            <div class="c-card">
              <header class="c-card__header">
                <button type="button" class="c-button c-button--close">
                  &times;
                </button>
                <h2 class="c-heading">Modal heading</h2>
              </header>

              <div class="c-card__body">Ghost modal...it hasn't got a body. Get it?!</div>

              <footer class="c-card__footer">
                <button type="button" class="c-button c-button--warning">
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <div role="dialog" class="o-modal o-modal--visible">
            <div class="c-card">
              <header class="c-card__header">
                <h2 class="c-heading">Modal heading</h2>
              </header>

              <div class="c-card__body">Blocking modal, not dismissible</div>

              <footer class="c-card__footer">
                <button type="button" class="c-button c-button--brand">
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <div role="dialog" class="o-modal o-modal--visible u-highest o-container o-container--medium">
            <div class="c-card">
              <header class="c-card__header">
                <button type="button" class="c-button c-button--close">
                  &times;
                </button>
                <h2 class="c-heading">Modal heading</h2>
              </header>

              <div class="c-card__body">Same as cards, high, higher, highest classes for shadows</div>

              <footer class="c-card__footer">
                <button type="button" class="c-button c-button--info">
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>
        <div class="o-demo-container o-demo-container--modal">
          <div aria-hidden class="c-overlay c-overlay--visible" />
          <div role="dialog" class="o-modal o-modal--visible u-highest o-container o-container--medium">
            <div class="c-card">
              <header class="c-card__header">
                <button type="button" class="c-button c-button--close">
                  &times;
                </button>
                <h2 class="c-heading">Modal heading</h2>
              </header>

              <div class="c-card__body">Block foooter</div>

              <footer class="c-card__footer c-card__footer--block">
                <div class="c-input-group">
                  <button class="c-button c-button--block c-button--success">Yes</button>
                  <button class="c-button c-button--block c-button--error">No</button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
