import { FaGithub } from "react-icons/fa"
import { FaXTwitter, FaDev } from "react-icons/fa6"

type SocialLinksProps = {
  github: string
  x: string
  dev: string
}

export default function SocialLinks({ github, x, dev }: SocialLinksProps) {
  return (
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
  )
}
