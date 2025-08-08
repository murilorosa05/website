import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import { useState } from 'react'

export default function Page() {

  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('Murilo Rosa - Desenvolvedor')
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Murilo Rosa
      </h1>
      <p className="mb-4">
        {`Opa.`}
      </p>

      <div 
        className="relative w-48 h-48 mx-auto mb-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        onClick={handleCopy}
        title="Clique para copiar"
      >
        <Image
          src="/images/qrcode.png"
          alt="Foto do Murilo Rosa"
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


{/*      <div className="mb-8 overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl">
        <Image
          src="/images/qrcode.png" // Caminho relativo a public/images/
          alt="Foto do Murilo Rosa"
          width={600}  // Largura original da imagem
          height={400} // Altura original da imagem
          className="transition-all duration-300 hover:scale-105"
          priority // Importante para imagens acima do scroll
        />
      </div>
      
     <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
