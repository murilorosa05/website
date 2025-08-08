// app/components/ClickableImage.tsx
'use client' // 👈 Isso marca o componente como Client Component

import { useState } from 'react'
import Image from 'next/image'

export function ClickableImage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('Murilo Rosa - Desenvolvedor')
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
  }

  return (
    <div 
      className="relative w-48 h-48 mx-auto mb-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCopy}
      title="Clique para copiar"
    >
      <Image
        src="/images/qrcode.png"
        alt="QRCode Pix"
        fill
        className="object-cover"
        quality={90}
        priority
      />
      {copied && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-sm font-medium">
          Texto copiado!
        </div>
      )}
    </div>
  )
}