import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-tags',
})
export class Tags {
  render() {
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Tags</h2>
        <div class="c-tags">
          <div class="c-tags__container">
            <button type="button" class="c-button c-button--black c-tag">
              Tag one
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag two
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag three
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag four
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag five
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag six
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag seven
            </button>
            <button type="button" class="c-button c-button--black c-tag">
              Tag eight
            </button>
          </div>

          <div class="c-tags__field-container">
            <select class="c-field">
              <option>England</option>
              <option>Scotland</option>
              <option>Wales</option>
            </select>
          </div>
        </div>
      </section>
    );
  }
}
