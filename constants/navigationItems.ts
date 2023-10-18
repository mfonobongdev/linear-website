export default function getNavigationItems(): NavigationItem[] {
  return [
    { name: 'Features', url: '#', important: true },
    { name: 'Method', url: '#', important: true },
    { name: 'Customers', url: '#', important: false },
    { name: 'Changelog', url: '#', important: false },
    { name: 'Integrations', url: '#', important: false },
    { name: 'Pricing', url: '#', important: true },
    { name: 'Company', url: '#', important: true }
  ]
}

export type NavigationItem = {
  name: string
  url: string
  important: boolean
}
