import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Как выбрать дизайнера на платформе?",
    answer:
      "Просмотрите портфолио дизайнеров, отфильтруйте по направлению (интерьер, брендинг, веб) и ознакомьтесь с отзывами клиентов. Вы также можете оставить заявку, и мы подберём специалиста под ваш проект.",
  },
  {
    question: "Сколько стоят услуги дизайнеров?",
    answer:
      "Стоимость зависит от сложности проекта и уровня специалиста. Каждый дизайнер устанавливает свои расценки. На платформе есть удобный калькулятор для предварительной оценки бюджета.",
  },
  {
    question: "Как стать дизайнером на платформе?",
    answer:
      "Заполните заявку, приложите портфолио из 5+ работ и пройдите модерацию. Мы оцениваем качество работ, стиль и профессиональный опыт. Процесс занимает до 5 рабочих дней.",
  },
  {
    question: "Какие направления дизайна представлены?",
    answer:
      "Дизайн интерьеров, брендинг и айдентика, веб-дизайн, графический дизайн, UX/UI, дизайн упаковки и полиграфия. Мы постоянно расширяем список направлений.",
  },
  {
    question: "Какие гарантии вы предоставляете?",
    answer:
      "Все проекты сопровождаются договором. Оплата проходит через безопасную сделку — дизайнер получает деньги после одобрения работы заказчиком. В случае спора подключается наша служба поддержки.",
  },
  {
    question: "Можно ли работать с дизайнером удалённо?",
    answer:
      "Да, платформа полностью поддерживает удалённую работу. Встроенный чат, обмен файлами и видеозвонки — всё необходимое для комфортного сотрудничества из любой точки мира.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}