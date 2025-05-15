import ImageVerification from "@/components/image-verification"

export default function ImageCheckPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Image Verification Tool</h1>
      <p className="mb-6">
        This page checks if images are accessible to your application, regardless of where they physically appear in the
        file system.
      </p>

      <ImageVerification />

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="font-semibold mb-2">About v0 File System</h2>
        <p>
          In the v0 environment, files are referenced through blob URLs rather than being physically stored in the file
          system during development. This means the files work in your application even if you can't see them in your
          IDE's file explorer.
        </p>
      </div>
    </div>
  )
}
