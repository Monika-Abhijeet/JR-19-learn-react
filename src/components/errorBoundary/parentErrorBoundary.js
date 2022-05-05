import Hero from "./Hero";
import ErrorBoundary from "./errorBoundary";
function ParentErrorBoundary() {
  return (
    <div>
      <p>Parent error boundary</p>
      <ErrorBoundary>
        <Hero heroName="Ironman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
    </div>
  );
}

export default ParentErrorBoundary;
