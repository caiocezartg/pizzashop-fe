import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signUpSchema = z.object({
  restaurantName: z.string().min(1),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type ISignUpSchema = z.infer<typeof signUpSchema>

function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ISignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  function handleSignIn(data: ISignUpSchema) {
    console.log(data)

    toast.success('Restaurante cadastrado com sucesso!', {
      action: {
        label: 'Login',
        onClick: () => {
          navigate('/sign-in')
        },
      },
    })
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <header className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta gratuita
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </header>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input id="restaurantName" {...register('restaurantName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input id="managerName" {...register('managerName')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')} />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="#">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="#">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp
