//import { cookies } from 'next/headers'
//import { redirect } from 'next/navigation'

import { draftMode } from 'next/headers'
 
/* export async function GET(request) {

  cookies().delete('draftMode')
  redirect('/')
}*/

export async function GET(request) {
  draftMode().disable()
  //redirect(`/${model}/${post.productSlug}`)
}