// components/ProductCard.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductProps {
  product: any; // Type with TypeScript Interface
}

export default function ProductCard({ product }: ProductProps) {
  const finalPrice = product.isSale 
    ? product.basePrice * (1 - product.discountPct / 100) 
    : product.basePrice;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
    >
      {/* Sale Badge */}
      {product.isSale && (
        <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[10px] font-black px-3 py-1 uppercase tracking-tighter">
          Sale -{product.discountPct}%
        </div>
      )}

      <div className="aspect-[3/4] overflow-hidden bg-zinc-100">
        <Image 
          src={product.images[0].url} 
          alt={product.name}
          width={500} height={667}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">{product.category.name}</p>
        <h3 className="text-sm font-bold tracking-tight uppercase">{product.name}</h3>
        
        <div className="mt-4 flex items-center gap-3">
          <span className="text-lg font-medium tracking-tighter">
            {finalPrice} DH
          </span>
          {product.isSale && (
            <span className="text-sm text-zinc-500 line-through">
              {product.basePrice} DH
            </span>
          )}
        </div>

        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 bg-black text-white dark:bg-white dark:text-black py-4 text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
      }
