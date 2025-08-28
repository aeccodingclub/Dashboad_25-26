import { type BaseProps } from "@/lib/types"
import ScrollToTop from "@/components/ScrollToTop"

const Layout = ({ children, className }: BaseProps) => {
  return (
    <div className={`min-h-screen flex flex-col bg-slate-200 dark:bg-slate-800 ${className || ''}`}>
      
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {children}
      <ScrollToTop />
    </div>
  )
}

export default Layout
