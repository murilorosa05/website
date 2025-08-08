import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Murilo Rosa
      </h1>
      <p className="mb-4">
        {`Opa.`}
      </p>
      <div className="relative w-full h-64 md:h-80 mb-6 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800">
        <Image
          src="/images/qrcode.png"
          alt="Murilo Rosa"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, 60vw"
          quality={80}
          priority
        />
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
