export interface ChatUserListCard {
  username: string
  isOn: boolean
  status: string
  favorite: boolean
  playing: {
    status: boolean
    'game-slug': string
    'game-name': string
    'game-location': string
  }
}
