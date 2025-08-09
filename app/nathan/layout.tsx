// app/nathan/layout.tsx

export const metadata = {
  title: 'Nathan',
  description: 'Essa é a página do Nathan.',
}

export default function NathanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}