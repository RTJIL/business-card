import toast, { Toaster } from "react-hot-toast"
import persons from "./data/persons.ts"

import ProfileHeader from "./components/ProfileHeader.tsx"
import InfoSection from "./components/InfoSection.tsx"
import SocialLinks from "./components/SocialLinks.tsx"

export default function App() {
  if (!persons[0]) {
    return (
      <section className={`no-found`} key={!persons[1] ? "no-found" : "found"}>
        <h1>Not Found</h1>
      </section>
    )
  }

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
      toast.success("Email copied.")
    } catch (err) {
      console.error(err)
      toast.error("Failed to copy email.")
    }
  }

  return (
    <>
      <ProfileHeader src={src} alt={alt} />

      <InfoSection
        name={name}
        profession={profession}
        website={website}
        email={email}
        linkedIn={linkedIn}
        about={about}
        interests={interests}
        handleClick={handleClick}
      />

      <SocialLinks github={github} x={x} dev={dev} />

      <Toaster />
    </>
  )
}
