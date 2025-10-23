import { Card } from '@/shared/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/shared/components/ui/radio-group'
import { Label } from '@/shared/components/ui/label'
import { useState } from 'react'
import { CreditCard, Barcode } from 'lucide-react' // ícones shadcn/lucide
import type { UseFormReturn } from 'react-hook-form'
import type { formSchema } from '../pages/CheckoutPage'
import { z } from 'zod'
import { Button } from '@/shared/components/ui/button'

type PaymentMethodPropsType = {
  form: UseFormReturn<z.infer<typeof formSchema>>
  handleFinishOrder: (data: z.infer<typeof formSchema>) => void
}

export const PaymentMethod = ({ form, handleFinishOrder }: PaymentMethodPropsType) => {
  const [selected, setSelected] = useState('boleto')
  const [selectedCard, setSelectedCard] = useState('')

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-lg font-semibold">Método de Pagamento</h2>

      <RadioGroup
        defaultValue="boleto"
        onValueChange={(value) => {
          setSelected(value)
          if (value !== 'cartao') setSelectedCard('')
        }}
        className="flex items-center gap-6"
      >
        <div className="flex items-center gap-2">
          <RadioGroupItem value="boleto" id="boleto" />
          <Label htmlFor="boleto" className="flex cursor-pointer items-center gap-2">
            <Barcode className="h-5 w-5" /> Boleto
          </Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroupItem value="cartao" id="cartao" />
          <Label htmlFor="cartao" className="cursor-pointer">
            Cartão de Crédito
          </Label>
        </div>
      </RadioGroup>

      {selected === 'cartao' && (
        <div className="mt-4 ml-6 flex gap-6">
          {['Visa', 'MasterCard', 'Elo'].map((card) => (
            <button
              key={card}
              onClick={() => setSelectedCard(card)}
              type="button"
              className={`hover:bg-muted flex items-center gap-2 rounded-md border px-4 py-2 transition ${
                selectedCard === card ? 'border-primary ring-primary ring-2' : 'border-gray-300'
              }`}
            >
              <CreditCard className="h-5 w-5" />
              {card}
            </button>
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-start">
        <Button
          variant="default"
          type="button"
          className="cursor-pointer transition-transform duration-100 active:scale-95"
          onClick={form.handleSubmit(handleFinishOrder)}
        >
          Confirmar Pedido
        </Button>
      </div>
    </Card>
  )
}
