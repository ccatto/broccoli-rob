import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * Custom pipe to highlight search terms in text
 * Usage: {{ text | highlight:'searchTerm' }}
 * 
 * This pipe should be stored in: app/pipes/highlight.pipe.ts
 * 
 * Best practices for pipe organization:
 * - Store all custom pipes in app/pipes/ directory
 * - Use descriptive names that indicate transformation
 * - Make pipes pure for better performance
 * - Document complex transformation logic
 */
@Pipe({
  name: 'highlight',
  standalone: true,  // Enables use in standalone components
  pure: true        // Pipe is pure - only runs when input changes
})
export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Highlights search terms in text with HTML mark tags
   * @param text - The text to search in
   * @param searchTerm - The term to highlight
   * @param cssClass - Optional CSS class for highlighting (default: no class)
   * @param caseSensitive - Whether search should be case sensitive (default: false)
   * @returns SafeHtml with highlighted terms
   */
  transform(
    text: string, 
    searchTerm: string, 
    cssClass: string = '', 
    caseSensitive: boolean = false
  ): SafeHtml {
    
    // Return original text if no text or search term provided
    if (!text || !searchTerm) {
      return text || '';
    }

    // Escape special regex characters in search term
    const escapedSearchTerm = this.escapeRegExp(searchTerm);
    
    // Create regex with appropriate flags
    const flags = caseSensitive ? 'g' : 'gi';
    const regex = new RegExp(escapedSearchTerm, flags);
    
    // Build the replacement HTML
    const markClass = cssClass ? ` class="${cssClass}"` : '';
    const replacement = `<mark${markClass}>$&</mark>`;
    
    // Perform the replacement
    const highlightedText = text.replace(regex, replacement);
    
    // Sanitize and return as SafeHtml
    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }

  /**
   * Escapes special regex characters in a string
   * @param string - String to escape
   * @returns Escaped string safe for regex
   */
  private escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

/**
 * Additional utility pipe for advanced highlighting
 * Supports multiple search terms and custom styling
 */
@Pipe({
  name: 'highlightMultiple',
  standalone: true,
  pure: true
})
export class HighlightMultiplePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Highlights multiple search terms with different colors
   * @param text - Text to search in
   * @param searchTerms - Array of terms to highlight
   * @param colors - Array of colors corresponding to search terms
   * @returns SafeHtml with highlighted terms in different colors
   */
  transform(
    text: string, 
    searchTerms: string[] = [], 
    colors: string[] = ['yellow', 'lightblue', 'lightgreen', 'pink']
  ): SafeHtml {
    
    if (!text || !searchTerms.length) {
      return text || '';
    }

    let highlightedText = text;

    searchTerms.forEach((term, index) => {
      if (term.trim()) {
        const color = colors[index % colors.length];
        const escapedTerm = this.escapeRegExp(term);
        const regex = new RegExp(escapedTerm, 'gi');
        const replacement = `<mark style="background-color: ${color};">$&</mark>`;
        highlightedText = highlightedText.replace(regex, replacement);
      }
    });

    return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
  }

  private escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

/**
 * Simple text transformation pipe for common formatting
 */
@Pipe({
  name: 'textFormat',
  standalone: true,
  pure: true
})
export class TextFormatPipe implements PipeTransform {

  /**
   * Applies common text transformations
   * @param text - Text to transform
   * @param format - Format type: 'capitalize', 'title', 'sentence', 'reverse', 'kebab', 'camel'
   * @returns Transformed text
   */
  transform(text: string, format: string = 'capitalize'): string {
    if (!text) return '';

    switch (format.toLowerCase()) {
      case 'capitalize':
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      
      case 'title':
        return text.replace(/\w\S*/g, (txt) => 
          txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
        );
      
      case 'sentence':
        return text.charAt(0).toUpperCase() + text.slice(1);
      
      case 'reverse':
        return text.split('').reverse().join('');
      
      case 'kebab':
        return text.toLowerCase().replace(/\s+/g, '-');
      
      case 'camel':
        return text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
      
      case 'snake':
        return text.toLowerCase().replace(/\s+/g, '_');
      
      default:
        return text;
    }
  }
}

/**
 * Pipe for truncating text with ellipsis
 */
@Pipe({
  name: 'truncate',
  standalone: true,
  pure: true
})
export class TruncatePipe implements PipeTransform {

  /**
   * Truncates text to specified length
   * @param text - Text to truncate
   * @param limit - Character limit (default: 50)
   * @param trail - Trailing characters (default: '...')
   * @returns Truncated text
   */
  transform(text: string, limit: number = 50, trail: string = '...'): string {
    if (!text) return '';
    
    if (text.length <= limit) {
      return text;
    }
    
    return text.substring(0, limit).trim() + trail;
  }
}

/**
 * Pipe for safe HTML rendering (alternative to innerHTML)
 */
@Pipe({
  name: 'safeHtml',
  standalone: true,
  pure: true
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * Bypasses Angular's HTML sanitization
   * Use with caution - only for trusted content
   * @param html - HTML string to render
   * @returns SafeHtml for rendering
   */
  transform(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}