import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Broccoli Rob</h4>
          <p>Built with Angular {{ angularVersion }} & PrimeNG</p>
        </div>
        
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" target="_blank">GitHub</a></li>
            <li><a href="#" target="_blank">Documentation</a></li>
            <li><a href="#" target="_blank">Support</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>Contact</h4>
          <p>hello@broccolirob.dev</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Broccoli Rob. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer-container {
        background-color: var(--p-surface-section);
        border-top: 1px solid var(--p-surface-border);
        margin-top: auto;
      }

      .footer-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .footer-section h4 {
        color: var(--p-primary-color);
        margin-bottom: 1rem;
        font-weight: 600;
      }

      .footer-section p {
        color: var(--p-text-muted-color);
        margin: 0.5rem 0;
      }

      .footer-section ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .footer-section ul li {
        margin: 0.5rem 0;
      }

      .footer-section ul li a {
        color: var(--p-text-color);
        text-decoration: none;
        transition: color 0.2s ease;
      }

      .footer-section ul li a:hover {
        color: var(--p-primary-color);
      }

      .footer-bottom {
        background-color: var(--p-surface-ground);
        padding: 1rem 2rem;
        text-align: center;
        border-top: 1px solid var(--p-surface-border);
      }

      .footer-bottom p {
        margin: 0;
        color: var(--p-text-muted-color);
        font-size: 0.875rem;
      }
    `,
  ],
})
export class FooterComponent {
  angularVersion = '20';
  currentYear = new Date().getFullYear();
}
