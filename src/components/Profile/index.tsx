import { useGithubContext } from '@/providers'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faCircleNotch,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo } from 'react'
import {
  ProfileDetails,
  ProfileLoadingUser,
  ProfileSectionContainer,
  ProfileTraits
} from './styles'

function ProfileComponent() {
  const user = useGithubContext((context) => context.user)

  return (
    <ProfileSectionContainer>
      {!user && (
        <ProfileLoadingUser>
          <FontAwesomeIcon icon={faCircleNotch} size="2x" />
        </ProfileLoadingUser>
      )}

      <img src={user?.avatarUrl} alt="" />

      <ProfileDetails>
        <header>
          <h1>{user?.name}</h1>
          <a href={user?.blog} target={'_blank'} rel="noreferrer">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <p>{user?.bio || 'Sem bio'}</p>

        <ProfileTraits>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <span>{user?.login}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Bsafer</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user?.followers} Seguidores</span>
            </li>
          </ul>
        </ProfileTraits>
      </ProfileDetails>
    </ProfileSectionContainer>
  )
}

export const Profile = memo(ProfileComponent)
