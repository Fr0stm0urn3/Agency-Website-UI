import styles from "./FAQ.module.css"
import followImg from "../../assets/images/Button (1).png"
import { useState } from "react"
import { FaPlus, FaMinus } from "react-icons/fa"
import { accordionData } from "./accordionData"

const FAQ = () => {
  const [selected, setSelected] = useState(null)

  const handleSelection = (id) => {
    setSelected(id === selected ? null : id)
  }

  const ages = [14, 12, 15, 16, 17]

  const greaterThan10 = (arr) => {
    const result = []

    arr.filter((n) => {
      n > 10 && result.push(n)
    })

    return result.length === arr.length
  }

  console.log(greaterThan10(ages))

  return (
    <section id="#faq" className={styles.container}>
      <div className={styles.header}>
        <h3>Frequently asked questions</h3>
        <button>
          <img src={followImg} alt="" /> View All
        </button>
      </div>
      <div className={styles.faqContainer}>
        <div className={styles.faqs}>
          {accordionData.map((data) => (
            <div key={data.id} className={styles.faq}>
              <div className={styles.faqHeader}>
                <h5>{data.title}</h5>
                <button onClick={() => handleSelection(data.id)}>
                  {selected === data.id ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              {selected === data.id && <p>{data.content}</p>}
            </div>
          ))}
        </div>

        <div className={styles.formContainer}>
          <h4>Ask your question</h4>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" />
            <label htmlFor="email">Email</label>
            <input type="text" email="email" id="email" placeholder="Enter your email" />
            <label htmlFor="question">Your question</label>
            <textarea
              name="question"
              id="question"
              cols="30"
              rows="11"
              placeholder="Enter Your Question Here..."
            />
            <button type="button">Send your message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default FAQ
