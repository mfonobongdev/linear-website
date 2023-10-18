export default function getFooterLinks(): FooterLink[] {
  return [
    {
      title: 'Product',
      links: [
        { title: 'Features', href: '#' },
        { title: 'Integrations', href: '#' },
        { title: 'Pricing', href: '#' },
        { title: 'Changelog', href: '#' },
        { title: 'Docs', href: '#' },
        { title: 'Linear Method', href: '#' },
        { title: 'Download', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { title: 'About us', href: '#' },
        { title: 'Blog', href: '#' },
        { title: 'Careers', href: '#' },
        { title: 'Customers', href: '#' },
        { title: 'Brands', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'Community', href: '#' },
        { title: 'Contact', href: '#' },
        { title: 'DPA', href: '#' },
        { title: 'Privacy Policy', href: '#' },
        { title: 'Terms of Service', href: '#' },
        { title: 'Report a vulnerability', href: '#' }
      ]
    },
    {
      title: 'Developers',
      links: [
        { title: 'API', href: '#' },
        { title: 'Status', href: '#' },
        { title: 'Github', href: '#' }
      ]
    }
  ]
}

export type FooterLink = {
  title: string
  links: { title: string; href: string }[]
}
