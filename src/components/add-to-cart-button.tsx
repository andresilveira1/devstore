'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductToCart() {
    addToCart(productId)
  }

  return (
    <button
      onClick={handleAddProductToCart}
      type="button"
      className="mt-8 h-12 flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
