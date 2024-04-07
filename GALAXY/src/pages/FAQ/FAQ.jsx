import { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import styles from "../FAQ/_faq.module.scss";

const Accordion = () => {
  const faqs = [
    {
      id: 1,
      question: "Lorem ipsum dolor mit?",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor mit?2",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor mit? 3",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
    {
      id: 4,
      question: "Lorem ipsum dolor mit? 4",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
    {
      id: 5,
      question: "Lorem ipsum dolor mit? 5",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
    {
      id: 6,
      question: "Lorem ipsum dolor mit? 6",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
    {
      id: 7,
      question: "Lorem ipsum dolor mit? 7",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
    {
      id: 8,
      question: "Lorem ipsum dolor mit? 8 ",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
    {
      id: 9,
      question: "Lorem ipsum dolor mit? 9 ",
      answer:
        "Natoque a ligula vivamus per fusce netus venenatis vel turpis. Aliquam maximus nullam pede pulvinar porta tempor ridiculus faucibus nunc.",
    },
  ];

const [isActive, setisActive] = useState(false)


//   const handleClick = () => {
// setisActive(!isActive)
//   };

  return (
    <>
      <section id={styles.faq_sec}>
        <div className={styles.container}>
          <div className={styles.faq_inner}>
            <div className={styles.faq_header}>
              <h1>FAQ</h1>
            </div>
            <div  className={styles.faq_accordion}>
              {faqs && faqs.map((faq) => {
              
                return (
                  <div key={faq.id}  className={styles.accordion_item}>
                    <div className={styles.item_header} onClick={() => setisActive(!isActive)}>
                    
                      <VscTriangleDown />
                      <h2>{faq.question}</h2>
                    </div>
                  
                    {
                    isActive &&  
                     <div key={faq.id} className={styles.item_content}>
                      <p>{faq.answer}</p>
                    </div>
                    }
                  </div>
               
                );
       
              })}
               
                
               
          
            
            </div>
          </div>
        </div>
      </section>
      <div className={styles.background_overlay}></div>
    </>
  );
};
export default Accordion;
