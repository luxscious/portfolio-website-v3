import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"
import { X, User, AtSign, AlignLeft, MessageSquare, Send, Globe, Github } from "lucide-react"
import { useModal } from "../context/ModalContext"
import { useState } from "react"

export default function ContactModal() {
  const { isOpen, close } = useModal()
  const overlayRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) close()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:ggerges019@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    close()
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.08, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ background: "#13171f" }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Pink top border */}
            <div className="h-[3px] w-full bg-[#DB2777]" />

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-[#DB2777]/20 border border-[#DB2777]/30 flex items-center justify-center">
                  <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-none">Gabriella Gerges</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-0.5">Portfolio &amp; Creative</p>
                </div>
              </div>
              <button
                onClick={close}
                className="size-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
              <div>
                <h2 className="text-3xl font-black text-white leading-tight">
                  Let's Build <span className="text-[#DB2777]">Something</span> Together
                </h2>
                <p className="text-slate-400 text-sm mt-2">
                  Have a project in mind? Drop me a message and let's make it happen.
                </p>
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-slate-300 text-sm font-medium mb-1.5">Name</label>
                  <div className="relative">
                    <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#DB2777]/60 focus:ring-2 focus:ring-[#DB2777]/30 transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-slate-300 text-sm font-medium mb-1.5">Email Address</label>
                  <div className="relative">
                    <AtSign size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="email@example.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#DB2777]/60 focus:ring-2 focus:ring-[#DB2777]/30 transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-slate-300 text-sm font-medium mb-1.5">Subject</label>
                <div className="relative">
                  <AlignLeft size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="How can I help you?"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#DB2777]/60 focus:ring-2 focus:ring-[#DB2777]/30 transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-slate-300 text-sm font-medium mb-1.5">Message</label>
                <div className="relative">
                  <MessageSquare size={14} className="absolute left-3 top-3.5 text-slate-500" />
                  <textarea
                    id="contact-message"
                    placeholder="Tell me about your project details..."
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#DB2777]/60 focus:ring-2 focus:ring-[#DB2777]/30 transition-colors resize-none"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#DB2777] hover:bg-[#DB2777]/90 text-white font-bold py-3.5 rounded-xl transition-colors duration-200 cursor-pointer shadow-lg shadow-[#DB2777]/25"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <span className="size-2 rounded-full bg-emerald-400 inline-block" />
                Available for new projects
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-3">
                <a href="https://luxscious.github.io" target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#DB2777] transition-colors cursor-pointer" aria-label="Website">
                  <Globe size={16} />
                </a>
                <a href="https://github.com/luxscious" target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#DB2777] transition-colors cursor-pointer" aria-label="GitHub">
                  <Github size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
