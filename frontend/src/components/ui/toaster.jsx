import React from "react"
import { useToast } from "@/components/ui/use-toast"

export { useToast }

function Toaster() {
  const { toasts } = useToast()

  return (
    <>
      {toasts.map(function ({ id, title, description, action, open, onOpenChange, ...props }) {
        return (
          <div key={id} className="fixed bottom-0 right-0 mb-4 mr-4">
            {/* Toast content */}
          </div>
        )
      })}
    </>
  )
}

export { Toaster }
