import { type FC } from 'react'

import { App } from '../'
import { ErrorBoundary } from '../'

import { Providers } from '../../app/providers'

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
)

export const Root: FC = () => {
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <Providers>
        <App />
      </Providers>
    </ErrorBoundary>
  )
}
