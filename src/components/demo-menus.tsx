import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-menus',
})
export class Menus {
  render() {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
      arr.push(i);
    }
    return (
      <section class="u-window-box-super">
        <h2 class="c-heading">Menus</h2>
        <div class="c-card c-card--menu" role="menu" style={{ position: 'relative' }}>
          {arr.map((i) => (
            <div class="c-card__control" role="menuitem">
              This is menu item: {i}
            </div>
          ))}
        </div>
      </section>
    );
  }
}
