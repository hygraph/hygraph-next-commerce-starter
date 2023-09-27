

export default function Alert({ preview }) {
  return (
    <div
      className={'border-b bg-indigo-500 border-accent-7 text-white py-2 text-center'}
    >
      <>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
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