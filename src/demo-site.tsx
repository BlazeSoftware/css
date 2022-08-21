import { h, Component } from '@stencil/core';

@Component({
  tag: 'demo-site',
  styleUrl: 'scss/blaze.scss',
})
export class Site {
  render() {
    return (
      <div>
        <h1 class="c-heading u-centered">Blaze :: Demo</h1>
        <demo-grid />
        <section class="o-container o-container--large u-pillar-box-large">
          <demo-typography />
          <demo-headings />
          <demo-gradient-text />
          <demo-breadcrumbs />
          <demo-lists />
          <demo-tables />
          <demo-images />
          <demo-cards />
          <demo-menus />
          <demo-accordion />
          <demo-buttons />
          <demo-github-buttons />
          <demo-inputs />
          <demo-toggles />
          <demo-ranges />
          <demo-tabs />
          <demo-avatars />
          <demo-tags />
          <demo-overlays />
          <demo-modals />
          <demo-drawers />
          <demo-alerts />
          <demo-badges />
          <demo-calendars />
          <demo-pagination />
          <demo-trees />
          <demo-progress-bars />
          <demo-timelines />
          <demo-dividers />
          <demo-file-upload />
        </section>
      </div>
    );
  }
}
