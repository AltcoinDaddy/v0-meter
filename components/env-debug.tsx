"use client"

export function EnvDebug() {
  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-md text-xs z-50">
      <h3 className="font-bold mb-2">Environment Debug</h3>
      <div>
        <strong>VERCEL_URL (window):</strong>{" "}
        {(typeof window !== "undefined" && (window as any).ENV?.VERCEL_URL) || "Not set"}
      </div>
      <div>
        <strong>NEXT_PUBLIC_VERCEL_URL:</strong> {process.env.NEXT_PUBLIC_VERCEL_URL || "Not set"}
      </div>
      <div>
        <strong>Base Path:</strong> {typeof window !== "undefined" ? window.location.origin : "N/A"}
      </div>
    </div>
  )
}
