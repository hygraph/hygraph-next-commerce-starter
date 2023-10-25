//import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'
import { draftMode } from 'next/headers'
 
export async function GET(req) {

  const { searchParams } = new URL(req.url)

  const redirectUrl = searchParams.get('redirect')

  draftMode().disable()
  redirect(`${redirectUrl}`)
  
}