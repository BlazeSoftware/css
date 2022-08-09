import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-avatars',
})
export class Avatars {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Avatars</h2>
        <div class="c-avatar c-avatar u-super">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar c-avatar u-xlarge">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar c-avatar u-large">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar c-avatar u-small">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar c-avatar u-xsmall">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <br />
        <div class="c-avatar c-avatar u-super">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar c-avatar u-xlarge">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar c-avatar u-large">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar c-avatar u-small">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <div class="c-avatar c-avatar u-xsmall">
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
          <img class="c-avatar__img" alt="placeholder" src="//source.unsplash.com/random" />
        </div>
        <br />
        <div class="c-avatar c-avatar u-super" data-text="GP" />
        <div class="c-avatar c-avatar u-xlarge" data-text="GP" />
        <div class="c-avatar c-avatar u-large" data-text="GP" />
        <div class="c-avatar c-avatar" data-text="GP" />
        <div class="c-avatar c-avatar u-small" data-text="GP" />
        <div class="c-avatar c-avatar u-xsmall" data-text="GP" />
      </section>
    );
  }
}
