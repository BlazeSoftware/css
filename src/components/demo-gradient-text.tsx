import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-gradient-text',
})
export class Headings {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Gradient Text</h2>
        <div>
          <p class="u-paragraph u-gradient-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit...</p>
        </div>

        <div>
          <p class="u-paragraph u-gradient-text u-gradient-text--info">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </p>
        </div>

        <div>
          <p class="u-paragraph u-gradient-text u-gradient-text--success">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </p>
        </div>

        <div>
          <p class="u-paragraph u-gradient-text u-gradient-text--warning">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </p>
        </div>

        <div>
          <p class="u-paragraph u-gradient-text u-gradient-text--error">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit...
          </p>
        </div>
      </section>
    );
  }
}
