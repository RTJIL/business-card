import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FaXTwitter, FaDev } from "react-icons/fa6"
import persons from "./data/persons"

export default function App() {
  const {
    src,
    alt,
    name,
    profession,
    website,
    email,
    linkedIn,
    about,
    interests,
    github,
    dev,
    x,
  } = persons[0]

  const handleClick = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(email)
      alert("Email copied to clipboard.")
    } catch (err) {
      console.error(err)
      alert("Failed to copy email to clipboard.")
    }
  }

  return (
    <>
      <header>
        <img src={src} alt={alt} />
      </header>
      <main>
        <section className="info-top">
          <h1>{name}</h1>
          <p>{profession}</p>
          <p>{website}</p>
        </section>

        <section className="sm">
          <button onClick={handleClick}>
            <MdEmail className="icon" />
            <span>Email</span>
          </button>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>
        </section>

        <section className="info-general">
          <section>
            <h2>About</h2>
            <p>{about}</p>
          </section>

          <section>
            <h2>Interests</h2>
            <p>{interests.join(". ")}</p>
          </section>
        </section>
      </main>

      <footer>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href={x} target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>

        <a href={dev} target="_blank" rel="noopener noreferrer">
          <FaDev />
        </a>
      </footer>
    </>
  )
}
