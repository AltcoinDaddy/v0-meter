"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle2 } from "lucide-react"

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : ""

interface QuoteRequestModalProps {
  trigger?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export default function QuoteRequestModal({
  trigger,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: QuoteRequestModalProps) {
  const [isControlled] = useState(controlledOpen !== undefined && setControlledOpen !== undefined)
  const [open, setOpen] = useState(false)
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    productType: "",
    quantity: "",
    additionalInfo: "",
    agreeToTerms: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: string | boolean },
  ) => {
    const { name, value } = "target" in e ? e.target : e
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission with a delay
    setTimeout(() => {
      setFormState("success")

      // Reset form after 3 seconds of showing success message
      setTimeout(() => {
        if (!isControlled) {
          setOpen(false)
        } else {
          setControlledOpen?.(false)
        }

        // Reset form state after modal closes
        setTimeout(() => {
          setFormState("idle")
          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            address: "",
            productType: "",
            quantity: "",
            additionalInfo: "",
            agreeToTerms: false,
          })
        }, 300)
      }, 3000)
    }, 1500)
  }

  const actualOpen = isControlled ? controlledOpen : open
  const setActualOpen = isControlled ? setControlledOpen : setOpen

  return (
    <Dialog open={actualOpen} onOpenChange={setActualOpen}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below to request a quotation for our metering products.
          </DialogDescription>
        </DialogHeader>

        {formState === "success" ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quote Request Received!</h3>
            <p className="text-gray-500 mb-4">
              Thank you for your interest in our products. Our team will review your request and get back to you within
              24-48 hours with a detailed quotation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formState === "submitting"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={formState === "submitting"}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formState === "submitting"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={formState === "submitting"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={formState === "submitting"}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="productType">
                  Product Type <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.productType}
                  onValueChange={(value) => handleChange({ name: "productType", value })}
                  disabled={formState === "submitting"}
                >
                  <SelectTrigger id="productType">
                    <SelectValue placeholder="Select product type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single-phase">Single-Phase Meters</SelectItem>
                    <SelectItem value="three-phase">Three-Phase Meters</SelectItem>
                    <SelectItem value="split">Split Prepayment Meters</SelectItem>
                    <SelectItem value="keypad">Keypad Prepayment Meters</SelectItem>
                    <SelectItem value="commercial">Commercial/Industrial Solutions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">
                  Quantity <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                  disabled={formState === "submitting"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Please provide any specific requirements or questions you have."
                rows={3}
                disabled={formState === "submitting"}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms as boolean}
                onCheckedChange={(checked) => handleChange({ name: "agreeToTerms", value: checked as boolean })}
                disabled={formState === "submitting"}
                required
              />
              <Label htmlFor="agreeToTerms" className="text-sm">
                I agree to be contacted regarding my quote request and understand that my information will be processed
                in accordance with the{" "}
                <a href={`${baseUrl}/privacy-policy`} className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </Label>
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setActualOpen?.(false)}
                disabled={formState === "submitting"}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={formState === "submitting" || !formData.agreeToTerms}>
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
