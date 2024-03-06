"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import {mail} from "@/components/configs/socials"
import { useToast } from '../ui/use-toast'

interface EmailButtonProps {
  children: React.ReactNode
}

function EmailButton({children}:EmailButtonProps) {
  const {toast} = useToast()
  return (
    <Button
      className='p-0 hover:bg-transparent text-inherit'
      variant={"ghost"}
      onClick={() => {navigator.clipboard.writeText(mail);toast({title:"Email copied to clipboard"})}}
    >
      {children}
    </Button>
  )
}

export default EmailButton
