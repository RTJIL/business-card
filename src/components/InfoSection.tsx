import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

type InfoSectionProps = {
  name: string
  profession: string
  website: string
  email: string
  linkedIn: string
  about: string
  interests: string[]
  handleClick: () => void
}

export default function InfoSection({
  name,
  profession,
  website,
  linkedIn,
  about,
  interests,
  handleClick,
}: InfoSectionProps) {
  return (
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
  )
}
