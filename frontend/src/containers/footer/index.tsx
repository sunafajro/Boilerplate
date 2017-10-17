import * as React from 'react';

export interface Props { 
  footerText: string;
}

export const Footer = (props: Props) => (
  <footer className="footer">
    <div className="container">
      <span className="text-muted">{ props.footerText }</span>
    </div>
  </footer>
);
