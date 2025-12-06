type ProfileHeaderProps = {
  src: string
  alt: string
}

export default function ProfileHeader({
  src,
  alt,
}: ProfileHeaderProps): React.ReactElement {
  return (
    <header>
      <img src={src} alt={alt} />
    </header>
  )
}
