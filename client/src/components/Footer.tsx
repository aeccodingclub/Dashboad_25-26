import { type BaseProps } from "../types/base"
import { Instagram, Linkedin, Twitter, Facebook, Youtube } from "lucide-react"

const Footer = ({ className }: BaseProps) => {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/aec.codingclub/', Icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/aec-coding-club/', Icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/AEC_CodingClub', Icon: Twitter },
    { name: 'Facebook', href: 'https://www.facebook.com/aeccodingclub', Icon: Facebook },
    { name: 'YouTube', href: 'https://www.youtube.com/@aeccodingclub7352', Icon: Youtube }
  ]

  const pageLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/core-team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Projects', href: '/projects' },
   ]

  return (
    <footer className={`bg-slate-100 dark:bg-slate-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] py-8 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-6">
          {socialLinks.map((social) => {
            const { Icon } = social
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>

        {/* Page Links */}
        <div className="flex justify-center flex-wrap gap-x-4 xxs:gap-x-6 gap-y-2 mb-6">
          {pageLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright & Tech Stack */}
        <div className="text-center space-y-2">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Coding Club, AEC
          </p>
          <p className="text-slate-400 dark:text-slate-500 text-xs">
            Made with React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
