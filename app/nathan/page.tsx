'use client'

import { useState } from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Nathan',
  description: 'Essa é a página do Nathan.',
}

export default function Page() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard
      .writeText('054b7fcd-58a0-4225-8f67-8fa64206f3ad') //texto q vai copiar
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
  }

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Página do Nathan
      </h1>
      <div
        className="relative w-full max-w-sm aspect-square mb-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        onClick={handleCopy}
        title="Clique para copiar"
      >
        <Image
          src="/images/qrcode.png"
          alt="QRCode Pix"
          fill
          className="object-cover rounded-lg"
          quality={100}
          priority
        />
        {copied && (
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center text-white text-sm font-medium">
            Chave PIX copiada!
          </div>
        )}
      </div>
    </section>
  )
}