export const sampleTexts = {
  easy: [
    "The quick brown fox jumps over the lazy dog. This simple sentence contains every letter of the English alphabet. It is often used to test typewriters or keyboards.",
    "Typing is an essential skill in today's digital world. With practice, you can improve your speed and accuracy. Keep at it, and you'll see progress in no time!",
    "Learning to type efficiently can save time and reduce frustration. Many people start with the hunt-and-peck method, but transitioning to touch typing allows for faster and more fluid text input. Over time, muscle memory will develop, making typing almost second nature.",
    "Words flow effortlessly when typing proficiency is achieved. The fingers dance across the keyboard, forming thoughts into written words with ease. Whether composing emails, writing stories, or chatting online, mastering typing ensures clear and effective communication.",
    "Medical professionals often need to type reports, prescriptions, and patient records accurately. In hospitals, precise typing helps reduce errors in documenting diagnoses and treatments. Practicing medical terminology can enhance a healthcare worker’s efficiency and prevent critical mistakes in patient care.",
  ],
  medium: [
    "The art of typing efficiently is more than just speed; it's about accuracy and consistency. As you practice, focus on maintaining a steady rhythm and minimizing errors. This approach will naturally lead to increased speed over time.",
    "In the realm of computer programming, typing skills can significantly impact productivity. Clean code often requires precise syntax, and the ability to type quickly and accurately can streamline the development process.",
    "Mastering touch typing can drastically enhance one's efficiency in professional and academic environments. Whether drafting reports, writing research papers, or composing articles, the ability to type swiftly without constant glances at the keyboard increases both productivity and confidence.",
    "While many people associate typing speed with raw words per minute, true efficiency comes from minimizing unnecessary movements. Keeping fingers positioned correctly, reducing excessive hand shifts, and developing a natural flow all contribute to long-term typing mastery.",
    "Medical transcriptionists play a vital role in healthcare, converting doctors’ spoken notes into written records. Accuracy in typing complex medical terms, such as 'myocardial infarction' and 'hypertension,' is essential. A small error in transcription could lead to misinterpretations in patient diagnoses and treatments, highlighting the importance of precision in medical documentation.",
  ],
  hard: [
    "The qwerty keyboard layout, despite its ubiquity, was not designed for efficiency. It was originally created to prevent typewriter jams by separating commonly used letter pairs. Modern alternatives like the Dvorak layout claim to offer superior ergonomics and speed.",
    "In the age of artificial intelligence and machine learning, the importance of human input via typing remains crucial. While voice recognition technology advances, the nuanced control and precision offered by keyboard input continues to be indispensable in many professional contexts.",
    "Typing, as a form of manual input, plays a fundamental role in data entry, software development, and creative writing. Despite advancements in speech-to-text systems and predictive text algorithms, the necessity for accurate and structured typing remains evident in fields where precision and clarity are paramount. From legal documentation to complex programming syntax, a proficient typist ensures efficiency and accuracy.",
    "The biomechanics of typing involve intricate coordination between fingers, wrists, and cognitive processing. Studies show that typists who train using structured methodologies, such as deliberate practice with increasing difficulty levels, develop enhanced motor skills and cognitive adaptability. This ability is particularly crucial in fields like transcription, coding, and professional writing, where accuracy and endurance are as vital as speed.",
    "In the healthcare industry, electronic medical records (EMRs) have revolutionized the way patient information is stored and accessed. Doctors and nurses rely on efficient typing skills to input symptoms, diagnoses, and treatments accurately. Mistyping a medication like 'amoxicillin' as 'amoxapine' could result in serious health risks, emphasizing the need for meticulous attention when typing in medical settings.",
  ],
}

export type DifficultyLevel = keyof typeof sampleTexts
