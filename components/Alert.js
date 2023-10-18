import { cookies } from "next/headers"

export default function Alert({ preview }) {
  const draftMode = cookies().get('draftMode')
  return (
    <div
      className={'border-b bg-indigo-500 border-accent-7 text-white py-2 text-center'}
    >
      <>
        <div className="py-2 text-center text-sm">
          {draftMode ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-draft"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              
              .
            </>
          )}
        </div>
      </>
    </div>
  )
}