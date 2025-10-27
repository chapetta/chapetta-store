import { Button } from '@/shared/components/ui/button'

const simpleIcons = {
  github:
    'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.307-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.405 1.02.006 2.047.139 3.006.405 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.62-5.475 5.921.43.37.814 1.102.814 2.222 0 1.604-.014 2.896-.014 3.286 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z',
  linkedin:
    'M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.6 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.067 0-1.142.924-2.066 2.068-2.066 1.142 0 2.066.924 2.066 2.066 0 1.141-.924 2.067-2.066 2.067zM6.76 20.452H3.916V9H6.76v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .77 23.2 0 22.222 0h.003z',
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.069 1.646.069 4.85 0 3.205-.012 3.584-.07 4.85-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.069-4.85.069-3.205 0-3.584-.012-4.85-.07-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608-.057-1.266-.069-1.646-.069-4.85 0-3.204.012-3.584.07-4.85.062-1.366.35-2.633 1.324-3.608.975-.975 2.242-1.262 3.608-1.324 1.266-.057 1.646-.069 4.85-.069zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.638.428 3.678 1.388 2.718 2.347 2.42 3.484 2.362 4.761 2.304 6.041 2.29 6.45 2.29 12s.014 5.959.072 7.239c.058 1.277.356 2.414 1.316 3.373.96.96 2.097 1.258 3.373 1.316 1.281.058 1.69.072 7.239.072s5.959-.014 7.239-.072c1.277-.058 2.414-.356 3.373-1.316.96-.96 1.258-2.097 1.316-3.373.058-1.281.072-1.69.072-7.239s-.014-5.959-.072-7.239c-.058-1.277-.356-2.414-1.316-3.373-.96-.96-2.097-1.258-3.373-1.316C17.959.014 17.55 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z',
}

const socialLinks = [
  {
    href: 'https://github.com/chapetta',
    label: 'GitHub',
    icon: simpleIcons.github,
  },
  {
    href: 'https://www.linkedin.com/in/yan-chapetta',
    label: 'LinkedIn',
    icon: simpleIcons.linkedin,
  },
  {
    href: 'https://www.instagram.com/chapetta',
    label: 'Instagram',
    icon: simpleIcons.instagram,
  },
] as const

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:gap-5 sm:px-8">
        <p className="text-sm font-medium tracking-tight text-slate-200">
          © {new Date().getFullYear()} ChapettaStore — Todos os direitos reservados
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, label, icon }) => (
            <Button
              key={label}
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full border border-transparent bg-transparent text-slate-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700 hover:bg-slate-900/60 hover:text-emerald-400"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{label}</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                  className="h-5 w-5 fill-current"
                >
                  <path d={icon} />
                </svg>
              </a>
            </Button>
          ))}
        </div>

        <p className="text-xs text-slate-400">
          Feito com ❤️ usando{' '}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 transition hover:text-emerald-300"
          >
            shadcn/ui
          </a>
        </p>
      </div>
    </footer>
  )
}
