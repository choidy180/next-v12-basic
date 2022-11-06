export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <h1>Test Head</h1>
        {children}
      </body>
    </html>
  )
}
