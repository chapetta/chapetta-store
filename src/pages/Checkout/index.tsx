import { CheckoutProducts } from './checkoutComponents/CheckoutProducts'
import { BuyerForm } from './checkoutComponents/BuyerForm'
import { PaymentMethod } from './checkoutComponents/PaymentMethod'
import { validarCPF } from '@/lib/validators/cpf'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '@/hooks/useCartContext'

export const formSchema = z.object({
  fullName: z.string().min(1, 'Informe seu nome completo'),
  cpf: z.string().refine((cpf) => validarCPF(cpf), { message: 'CPF inválido' }),
  email: z.email('E-mail inválido'),
  telefone: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/, 'Use formato +55 11 99999-9999, sem traços e espaços'),
  cep: z.string().min(8, 'CEP inválido'),
  endereco: z.string().min(3, 'Digite seu endereço'),
  complemento: z.string().optional(),
  numero: z.string().min(1, 'Digite o número do seu endereço'),
  cidade: z.string().min(1, 'Digite sua cidade'),
  estado: z.string().length(2, 'Use a sigla do estado'),
})

export const Checkout = () => {
  const navigate = useNavigate()
  const { setCartList } = useCartContext()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      cpf: '',
      email: '',
      telefone: '',
      cep: '',
      endereco: '',
      complemento: '',
      numero: '',
      cidade: '',
      estado: '',
    },
  })

  const handleFinishOrder = (data: z.infer<typeof formSchema>) => {
    alert(`Agradecemos pela sua compra ${data.fullName}`)
    setCartList([])
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }
  return (
    <main>
      <CheckoutProducts />
      <BuyerForm form={form} />
      <PaymentMethod form={form} handleFinishOrder={handleFinishOrder} />
    </main>
  )
}
