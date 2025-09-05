import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './tutorial.component.html',
  styles: [
    `
      /* Copy your existing app.component.scss styles here if you have them */
      .content {
        display: flex;
        margin: 82px auto 32px;
        padding: 0 16px;
        max-width: 960px;
        flex-direction: column;
        align-items: center;
      }

      .content span {
        font-size: 1.125rem;
        margin-bottom: 2rem;
      }

      svg#rocket {
        width: 60px;
        height: 60px;
      }

      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 16px;
        gap: 16px;
      }

      .card {
        all: unset;
        border-radius: 4px;
        border: 1px solid var(--p-surface-border);
        background: var(--p-surface-card);
        height: 40px;
        width: 200px;
        margin: 0 8px 16px;
        padding: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        line-height: 24px;
        color: var(--p-text-color);
        text-decoration: none;
      }

      .card:hover {
        background: var(--p-surface-hover);
        transform: translateY(-2px);
      }

      .card:hover .material-icons path {
        fill: rgb(105, 103, 103);
      }

      .card:hover .material-icons {
        color: var(--p-primary-color);
      }

      .card .material-icons {
        height: 16px;
        width: 16px;
        margin-left: 8px;
      }

      .card-divider {
        height: 40px;
        width: 1px;
        border: none;
        background: var(--p-surface-border);
        margin: 0 8px;
      }

      svg#rocket-smoke {
        height: calc(100vh - 95px);
        position: absolute;
        top: 10px;
        right: 180px;
        z-index: -10;
      }
    `,
  ],
})
export class TutorialComponent {
  title = 'Angular Tutorial';
}
