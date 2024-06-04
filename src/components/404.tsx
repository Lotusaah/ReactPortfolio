
export const Error = () => {
  return (
    <div className="bg-brand-200" style={{ height: 'calc(100vh - 164px)' }}>
     <div className="flex items-center justify-center body-of-text">
      <div className="text-center">
        <h1 className="pt-25vh text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-light text-gray-600 mt-3">Oops! Page not found.</p>
        <p className="mt-6">
          The page you're looking for does not exist or another error occurred.
        </p>
        <p className="mt-2">
          Go back, or head over to the <a href="/" className="text-blue-600 hover:underline">homepage</a> to choose a new direction.
        </p>
      </div>
    </div>
  </div>
  )
}