import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
  children: React.ReactNode
  className?: string
  type?: "single" | "multiple"
  collapsible?: boolean
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

const AccordionContext = React.createContext<{
  openItem: string | null
  setOpenItem: (value: string | null) => void
  type: "single" | "multiple"
}>({ openItem: null, setOpenItem: () => {}, type: "single" })

const Accordion = ({ 
  children, 
  className, 
  type = "single",
  defaultValue,
  onValueChange
}: AccordionProps) => {
  const [openItem, setOpenItemState] = React.useState<string | null>(defaultValue || null)
  
  const setOpenItem = (itemValue: string | null) => {
    setOpenItemState(itemValue)
    onValueChange?.(itemValue || "")
  }
  
  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem, type }}>
      <div className={cn("", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  children: React.ReactNode
  className?: string
  value?: string
}

const AccordionItemContext = React.createContext<{ value: string }>({ value: "" })

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ className, children, value = "", ...props }, ref) => (
  <AccordionItemContext.Provider value={{ value }}>
    <div
      ref={ref}
      className={cn("border-b", className)}
      {...props}
    >
      {children}
    </div>
  </AccordionItemContext.Provider>
))
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
  const { openItem, setOpenItem } = React.useContext(AccordionContext)
  const { value } = React.useContext(AccordionItemContext)
  const isOpen = openItem === value
  
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setOpenItem(isOpen ? null : value)}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  const { openItem } = React.useContext(AccordionContext)
  const { value } = React.useContext(AccordionItemContext)
  const isOpen = openItem === value
  
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all",
        isOpen ? "max-h-96 pb-4" : "max-h-0",
        className
      )}
      {...props}
    >
      <div className="pt-0">{children}</div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
