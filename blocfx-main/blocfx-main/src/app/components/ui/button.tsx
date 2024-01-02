import * as React from "react"
import { cn } from "../../../../lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import Link from "next/link"
import Image from "next/image"
import miniLogo from '../../../../public/icons/mini-logo.svg'
import Whatsapp from '../../../../public/icons/whatsapp.svg'


const buttonVariants = cva(
  "inline-flex items-center rounded-3xl justify-center  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-button relative text-black transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        outline:
          "border border-input hover:bg-primary/10 text-primary/80 border-primary/80 dark:text-primary/70 dark:border-primary/70 transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        secondary:
          "bg-primary/10 text-primary/80 hover:bg-primary/20 hover:text-primary/100 transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        ghost:
          "hover:bg-primary/10 hover:text-primary/80 text-primary/90 transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        link: "underline-offset-4 hover:underline text-primary transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        dark: "bg-black text-primary-foreground transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-none hover:border border-black hover:text-black text-sm dark:bg-gray-900 dark:text-gray-100 hover:text-white",
        tab: "whitespace-nowrap px-3 py-1 transition-all data-[state=active]:border-b-transparent data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-10 px-4 rounded-3xl",
        lg: "h-12 px-11 rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

const SubmitButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, title, ...props }, ref) => {
    return (
      <button
        type="submit"
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "font-bold text-base px-0  p-1 py-0", className
        )}
        {...props}
      >
        <Image
          src={miniLogo}
          alt="logo"
          className="-ml-1"
          loading='lazy'
        />
        <p className='pl-8 pr-10'>{title}</p>
      </button>
    )
  }
)

const ButtonWithIcon = ({ title, className, link = '/' }: { title: string, className?: string, link?: string }) => {
  return (
    <Link
      href={`${link}`}
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "font-bold text-base px-0  p-1 py-0", className
      )}
    >
      <Image
        src={miniLogo}
        alt="logo"
        className="-ml-1"
        loading='lazy'
      />
      <p className='pl-8 pr-10'>{title}</p>
    </Link>
  )
}

const WhatsappButton = ({ title, className }: { title?: string, className?: string }) => {
  return (
    <Link
      href="https://wa.me/447888865832"
      className={cn(
        buttonVariants({ variant: "default", size: "lg" }),
        "font-bold text-base px-0  p-1 py-0", className
      )}
    >
      <Image
        src={Whatsapp}
        alt="whatsapp"
        className="-ml-1"
        height={50}
        loading='lazy'
      />
      <p className='pl-8 pr-10'>{title ?? "Chat on Whatsapp"}</p>
    </Link>
  )
}


Button.displayName = "Button"
SubmitButtonWithIcon.displayName = "SubmitButtonWithIcon"

export { Button, buttonVariants, ButtonWithIcon, WhatsappButton, SubmitButtonWithIcon }
