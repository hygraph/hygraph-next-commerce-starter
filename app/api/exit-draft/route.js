import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
 
export async function GET(request) {

  cookies().delete('draftMode')
  redirect('/')
}