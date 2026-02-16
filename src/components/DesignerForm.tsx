import { useState } from "react"
import { X } from "lucide-react"

interface DesignerFormProps {
  open: boolean
  onClose: () => void
}

export function DesignerForm({ open, onClose }: DesignerFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    specialization: "",
    about: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setFormData({ name: "", email: "", portfolio: "", specialization: "", about: "" })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-background rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-10 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✓</span>
            </div>
            <h3 className="text-2xl font-medium mb-3">Заявка отправлена!</h3>
            <p className="text-muted-foreground mb-8">
              Мы рассмотрим вашу заявку в течение 5 рабочих дней и свяжемся с вами по email.
            </p>
            <button
              onClick={handleClose}
              className="bg-foreground text-background px-8 py-3 text-sm tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <div className="p-8">
            <h3 className="text-2xl font-medium mb-2">Стать дизайнером</h3>
            <p className="text-muted-foreground mb-8">
              Заполните заявку — мы свяжемся с вами после модерации
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Имя и фамилия</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="Алина Морозова"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="alina@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Ссылка на портфолио</label>
                <input
                  type="url"
                  required
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  placeholder="https://behance.net/alina"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Специализация</label>
                <select
                  required
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                >
                  <option value="">Выберите направление</option>
                  <option value="interior">Дизайн интерьеров</option>
                  <option value="branding">Брендинг и айдентика</option>
                  <option value="web">Веб-дизайн</option>
                  <option value="graphic">Графический дизайн</option>
                  <option value="ux">UX/UI дизайн</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">О себе</label>
                <textarea
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                  placeholder="Расскажите о своём опыте и стиле"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-foreground text-background py-3.5 text-sm tracking-wide hover:bg-foreground/90 transition-colors rounded-lg font-medium"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default DesignerForm
