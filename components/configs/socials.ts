import {
    DiscordLogoIcon,
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons'

export const linkedin = 'https://www.linkedin.com/company/gdsc-mit-wpu/'
export const github = ''
export const instagram =
    'https://instagram.com/gdscmitwpu?igshid=MzRlODBiNWFlZA=='
export const facebook = ''
export const twitter =
    'https://twitter.com/gdscmitofficial?t=emqY409WS9sKEgx-DFBhSQ&s=08'
export const mail = 'gdscmitofficial@mitwpu.edu.in'
export const discord = 'https://discord.gg/wpUNk4xrmJ'

const socials = [
    {
        name: 'LinkedIn',
        url: linkedin,
        icon: LinkedInLogoIcon,
    },
    {
        name: 'Instagram',
        url: instagram,
        icon: InstagramLogoIcon,
    },
    {
        name: 'Twitter',
        url: twitter,
        icon: TwitterLogoIcon,
    },
    {
        name: 'Email',
        url: `mailto:${mail}`,
        icon: EnvelopeClosedIcon,
    },
    {
        name: 'Discord',
        url: discord,
        icon: DiscordLogoIcon,
    },
]
export default socials
